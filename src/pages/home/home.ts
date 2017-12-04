import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController
    , public afAuth: AngularFireAuth) {
  }
  login() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    .then(function() {
      return firebase.auth().getRedirectResult();
    }).then(function(result) {
      alert(JSON.stringify(result));
      // This gives you a Google Access Token.
      // You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      alert(JSON.stringify(error));
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }
  logout() {
    this.afAuth.auth.signOut()
      .then((params) => {
        alert(`logout`);
        alert(params);
      })
      .catch((params) => {
        alert(`erro out`);
        alert(params);
      });
  }
}
