class Producto extends HTMLElement {
    constructor() {
        super();
        this.producto = {};
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return ['producto'];
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this.producto = JSON.parse(newValue);
    }
    connectedCallback() {
        this.render();
        const bt = this.shadowRoot.querySelector('button');
        bt.addEventListener('click', () => {
            const event = new CustomEvent('delete-product', {
                detail: { producto: this.producto },
                composed: true
            });
            this.dispatchEvent(event);
        });
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/componentes/styles.css">
            
    <div class="card">
    <img class="imagen" src="${this.producto.imagen}" alt="${this.producto.titulo}">  
    <div class="card-info">
    <p class="text-title">${this.producto.titulo}</p>
    <p class="text-body">${this.producto.desc}</p>
    <p class="price">${this.producto.precio}</p>
    <button>Eliminar Producto</button>
    </div>   
    </div>   
    `;
        }
    }
}
customElements.define('my-producto', Producto);
export default Producto;
