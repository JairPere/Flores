importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

// Inicializar Firebase en el Service Worker usando la configuración de tu proyecto
firebase.initializeApp({
    apiKey: "AIzaSyAeIAEQMyBlXgM1atAWzC_L4N4K0s_F1og",
    authDomain: "flowersapp-b8028.firebaseapp.com",
    projectId: "flowersapp-b8028",
    storageBucket: "flowersapp-b8028.firebasestorage.app",
    messagingSenderId: "803011651877",
    appId: "1:803011651877:web:a910c0e6b8f8ab8d9492cc",
    measurementId: "G-69MGNMJ7MF",
    vapidKey: "BHJtvNI9TfQxXUkaCYEcHVApA3JdAJUQ3rtDyo3Z92bizRR-K7prYuePjCZAaK1QUTbVzUFbCEgMl5XW1NFwSxg",
});

// Recuperar una instancia de Firebase Messaging para manejar mensajes en segundo plano
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Mensaje recibido en segundo plano:', payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon,
  });
});

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/assets/icon/favicon.png' // Icono de notificación
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});