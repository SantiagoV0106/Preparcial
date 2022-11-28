var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        const prod = this.shadowRoot.querySelectorAll('my-productos');
        prod.forEach((e) => {
            e.addEventListener('delete-product', (evt) => __awaiter(this, void 0, void 0, function* () {
                console.log('guat is goin on');
                DB.deleteProd(evt.detail.producto);
            }));
        });
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
