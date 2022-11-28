var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
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
const addProducto = (producto) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = yield addDoc(collection(db, "Productos"), producto);
        console.log("Document written with ID: ", docRef.id);
    }
    catch (e) {
        console.error("Error adding document: ", e);
    }
});
const leerProductos = (cb) => {
    onSnapshot(collection(db, "Productos"), (documents) => {
        const prodts = documents.docs.map((doc) => doc.data());
        cb(prodts);
        console.log(prodts);
    });
};
const deleteProd = (producto) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield deleteDoc(doc(db, "Productos", producto));
    }
    catch (error) {
    }
});
export default { addProducto, leerProductos, deleteProd };
