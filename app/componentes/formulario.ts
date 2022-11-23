import db from '../servicios/firebase.js'
class Formulario extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
       
        this.mount();
    }

    mount(){
        this.render();
        this.addListeners();

    }

    addListeners() {
        const form = this.shadowRoot.querySelector('form')
        form.addEventListener("submit", (evento)=> {
            evento.preventDefault();
            const titulo = evento.target.elements[0].value
            const imagen = evento.target.elements[1].value
            const precio = evento.target.elements[2].value
            const desc = evento.target.elements[3].value
            console.log({titulo,imagen,precio,desc});
            db.addProducto({titulo,imagen,precio,desc});
            
        
            


        })

    }

    render() {
        if (!this.shadowRoot) return
        this.shadowRoot.innerHTML = `<form>
        <label for="Titulo">Titulo<label>      
        <input name="Titulo"/>
        <label for="Imagen">Imagen<label>      
        <input name="Imagen"/>
        <label for="Precio">Precio<label>      
        <input name="Precio"/>
        <label for="Descripcion">Descripcion</label>
        <input name="Descripcion"/>
        <button type="submit">Guardar</button>
        </form>
        
        `
    }
}

customElements.define('my-formulario', Formulario)
export default Formulario