self.addEventListener("notificationclick",function(event){console.log("On notification click: ",event),event.notification.close(),event.waitUntil(clients.matchAll({type:"window"}).then(function(clientList){for(var i=0;i<clientList.length;i++){var client=clientList[i];if("/"==client.url&&"focus"in client)return client.focus()}if(clients.openWindow)return clients.openWindow("/")}))}),importScripts("https://www.gstatic.com/firebasejs/3.6.8/firebase-app.js"),importScripts("https://www.gstatic.com/firebasejs/3.6.8/firebase-messaging.js"),firebase.initializeApp({messagingSenderId:"681906672039"});const messaging=firebase.messaging();messaging.setBackgroundMessageHandler(function(payload){return console.log(payload),payload.data.data=payload.data,self.registration.showNotification(payload.data.title,payload.data)});
