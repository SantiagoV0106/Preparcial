import "./componentes/formulario.js";
import "./componentes/listaproductos.js";
import DB from "./servicios/firebase.js";
class Appcontainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        DB.leerProductos((prodts) => this.render(prodts));
    }
    render(prodts) {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
        <section>
        <my-formulario></my-formulario>
        <my-productos productos='${JSON.stringify(prodts)}'></my-productos>    
        </section>
        `;
        }
    }
}
customElements.define('app-container', Appcontainer);
