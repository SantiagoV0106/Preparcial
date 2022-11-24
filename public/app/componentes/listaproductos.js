import "./producto.js";
class Productos extends HTMLElement {
    constructor() {
        super();
        this.productos = [];
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return ['productos'];
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this.productos = JSON.parse(newValue);
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            const compts = this.productos.map((producto) => `
            <l1>
            <my-producto producto='${JSON.stringify(producto)}'></my-producto>
            
            </li>
            `);
            this.shadowRoot.innerHTML = `
            <ul>
            ${compts.join('')}
            </ul>
            `;
        }
    }
}
customElements.define('my-productos', Productos);
export default Productos;
