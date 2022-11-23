class Producto extends HTMLElement {

    producto = {};

    static get observedAttributes() {
        return ['producto']

    }

    attributesChangedCallback(propName, oldValue, newValue: string) {

        this.producto = JSON.parse(newValue)


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



            this.shadowRoot.innerHTML = `
    <section>
   hola desde producto
    
    </section>
    
    `

        }
    }
}

customElements.define('my-producto', Producto)
export default Producto