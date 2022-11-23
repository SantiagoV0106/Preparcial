class Productos extends HTMLElement {
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
        hola desde productos
        
        `;
    }
}
customElements.define('my-productos', Productos);
export default Productos;
