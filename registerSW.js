if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/restaurantes_frontend/sw.js', { scope: '/restaurantes_frontend/' })})}