import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot,deleteDoc,doc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import Productos from "../componentes/listaproductos";

const firebaseConfig = {
   
        apiKey: "AIzaSyDXQG-NSLJy3UFoKxHetevH9PHrQ85JlxI",
        authDomain: "preparcial-5118a.firebaseapp.com",
        projectId: "preparcial-5118a",
        storageBucket: "preparcial-5118a.appspot.com",
        messagingSenderId: "658785734003",
        appId: "1:658785734003:web:8b27e15a551b286d5c4906"
     
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const addProducto = async (producto) => {
    try {
      const docRef = await addDoc(collection(db, "Productos"), producto);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

}

const leerProductos = (cb: (productos)=> void) => {
    onSnapshot(collection(db,"Productos"),(documents) => { 
       const prodts = documents.docs.map((doc) => doc.data());
       cb(prodts)
       console.log(prodts);
       

        });

    };

const deleteProd = async (producto) =>{

try{
  await deleteDoc(doc(db,"Productos",producto))
} catch(error){


}

}




export default {addProducto, leerProductos, deleteProd}






