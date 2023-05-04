import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user_model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<UserModel | null> = new BehaviorSubject<UserModel | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private fireAuth: AngularFireAuth, private router: Router, private firebase: AngularFirestore) { }

  //login
  login(user: UserModel) {
    this.fireAuth.signInWithEmailAndPassword(user.email, user.password).then(userCredential => {
      const uid = userCredential.user?.uid;
      if (uid) {
        this.firebase.collection('users').doc<UserModel>(uid).valueChanges().subscribe(userData => {
          this.currentUserSubject.next(userData ?? null);
          localStorage.setItem('token', 'true');
          this.router.navigate(['']);
        }, err => {
          alert(err.message);
          this.router.navigate(['/login']);
        });
      }
    }).catch(err => {
      alert(err.message);
      this.router.navigate(['/login']);
    });
  }

/*    //register
  register(user: UserModel) {
    this.fireAuth.createUserWithEmailAndPassword(user.email, user.password).then(() => {
      alert('User created successfully');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    });
  } */ 

  register(user: UserModel) {
    this.fireAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        const uid = userCredential.user?.uid;
        const userRef = this.firebase.collection('users').doc(uid);
        const userData = {
          fullname: user.fullname,
          birthdate: user.birthdate,
          email: user.email,
          profilePic: user.profilePic
        };
        userRef.set(userData)
          .then(() => {
            alert('User created successfully');
            this.router.navigate(['/login']);
          })
          .catch((error) => {
            console.error("Error adding user document: ", error);
            this.router.navigate(['/register']);
          });
      })
      .catch((error) => {
        alert(error.message);
        this.router.navigate(['/register']);
      });
  }

  //logout
  logout() {
    this.fireAuth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    });
  }

}