import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: 'AIzaSyAWUal0I4wPIa9PSgvYbtYIuoYji21JpV0',
  authDomain: 'mario-plan-972a9.firebaseapp.com',
  projectId: 'mario-plan-972a9',
  storageBucket: 'mario-plan-972a9.appspot.com',
  messagingSenderId: '706516729014',
  appId: '1:706516729014:web:5fd06c4eab011978f8fa17',
}
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig)
// export default firebase.firestore()
