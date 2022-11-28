import "./componentes/formulario.js";
import "./componentes/listaproductos.js";
import DB from "./servicios/firebase.js";

class Appcontainer extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode:'open'})
    }

   connectedCallback(){
        DB.leerProductos((prodts)=> this.render(prodts));

        const prod = this.shadowRoot.querySelectorAll('my-productos')
        prod.forEach((e) =>{
            e.addEventListener('delete-product', async(evt:CustomEvent)=>{
                console.log('guat is goin on');                
                DB.deleteProd(evt.detail.producto)
            })
        })
       
    }

    render(prodts){        
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
        <section>
        <my-formulario></my-formulario>
        <my-productos productos='${JSON.stringify(prodts)}'></my-productos>    
        </section>
        `
        }

        }
}

customElements.define('app-container', Appcontainer)