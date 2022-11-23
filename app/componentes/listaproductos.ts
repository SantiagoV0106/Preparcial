import "./producto.js";

class Productos extends HTMLElement {

    productos = [];

    static get observedAttributes() {
        return ['productos']

    }

    attributesChangedCallback(propName, oldValue, newValue: string) {

        this.productos = JSON.parse(newValue)
        

    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            

            const compts = this.productos.map((producto)=>`
            <l1>
            <my-producto producto='${JSON.stringify(producto)}'></my-producto>
            
            </li>
            `)
            
            this.shadowRoot.innerHTML = `
            <ul>
            ${compts.join('')}
            </ul>
            `

        }      
       
    }
}

customElements.define('my-productos', Productos)
export default Productos