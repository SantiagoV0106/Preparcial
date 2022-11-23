class Producto extends HTMLElement {
    constructor() {
        super();
        this.producto = {};
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return ['producto'];
    }
    attributesChangedCallback(propName, oldValue, newValue) {
        this.producto = JSON.parse(newValue);
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
    
    `;
        }
    }
}
customElements.define('my-producto', Producto);
export default Producto;
