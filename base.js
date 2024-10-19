// Importar las funciones necesarias de los SDK de Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

// Configuración de Firebase de tu proyecto
const firebaseConfig = {
  apiKey: "AIzaSyBR5PswNX5R-rDnhqkVRwubCRtrNXJT23M",
  authDomain: "tercera-c38ef.firebaseapp.com",
  projectId: "tercera-c38ef",
  storageBucket: "tercera-c38ef.appspot.com",
  messagingSenderId: "814670774106",
  appId: "1:814670774106:web:a08a5d4fb97bcf5e6f7d63"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener una referencia a Firestore
const db = getFirestore(app);

export { db };
