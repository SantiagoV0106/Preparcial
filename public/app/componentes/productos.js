class Producto extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        hola desde un producto
        
        `;
    }
}
customElements.define('my-productos', Producto);
export default Producto;
