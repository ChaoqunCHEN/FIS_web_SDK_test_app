import Vue from 'vue'
import App from './App.vue'
import * as firebase from "firebase/app";
import 'firebase/installations';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

var firebaseConfig = {
  apiKey: "AIzaSyD6kGS6BJyC1zNRIYgvBYM8_pmeAPvoSt8",
  authDomain: "fis-test-app.firebaseapp.com",
  databaseURL: "https://fis-test-app.firebaseio.com",
  projectId: "fis-test-app",
  storageBucket: "fis-test-app.appspot.com",
  messagingSenderId: "888660023682",
  appId: "1:888660023682:web:7e855e6e4d94a92f67179b",
  measurementId: "G-D0RZ9QG5EB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
window.installations = firebase.installations();