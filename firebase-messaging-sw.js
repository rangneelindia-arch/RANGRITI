importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyAuK0KSBqksepQ_ZhpNxPUEwGsX051pICU",
  authDomain: "rangritiapp.firebaseapp.com",
  databaseURL: "https://rangritiapp-default-rtdb.firebaseio.com",
  projectId: "rangritiapp",
  storageBucket: "rangritiapp.firebasestorage.app",
  messagingSenderId: "344639418240",
  appId: "1:344639418240:web:e8fb70f868bfbc9798db65"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/1827/1827370.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});