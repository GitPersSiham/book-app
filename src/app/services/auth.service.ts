import { Injectable } from '@angular/core';
import firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  createNewUser(email: string, password: string ){
  return new Promise(
   (reslove, reject) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(
      () => {
        reslove();
      },
      ( error ) => {
        reject(error);
      }
       );
   }
  );
  }
  signInUser(email: string, password: string){
  return new Promise(
    ( resolve, reject) => {
     firebase.auth().signInWithEmailAndPassword(email, password).then(
       () => {
         resolve();
       },
       (error) => {
         reject(error);
        
       }
     );
    }
  );
  }

  signOutUser(){
   firebase.auth().signOut();

  }
}
