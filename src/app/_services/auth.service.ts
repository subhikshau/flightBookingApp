import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.default.User | null>;

  constructor(private router:Router,private fireAuth: AngularFireAuth,private db: AngularFireDatabase) { 
    this.user$ = this.fireAuth.authState;
  }
    
  isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  
  
  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        localStorage.setItem('token', 'true');
        this.fireAuth.currentUser.then(user => {
          if (user) {
            const data = {
              email: user.email,
              uid: user.uid,

            };
            const nodeRef = this.db.list('/user');
            nodeRef.push(data);
          }
          this.router.navigate(['/udashboard']);
          
        });
      })
      .catch(err => {
        alert('Something went wrong');
        this.router.navigate(['/user-login']);
      });
  }

  
  signup(name:string,email:string,password:string){

    this.fireAuth.createUserWithEmailAndPassword(email,password).
    then(()=>{
      alert('Registration Successfuly');
      this.router.navigate(['/user-login'])
    },err =>{
      alert('Something went wrong');
      this.router.navigate(['/user-signup'])
    })
  }
  checkAdminAccess(uid: string): void {
    this.db.object(`/admin/${uid}`).valueChanges()
      .subscribe((admin: any) => {
        if (admin) {
          this.router.navigate(['/dashboard']);
        } else {
          console.log('Access denied');
          alert('Access Denied');
        }
      });
  }

  alogin(email: string, password: string): void {
    this.fireAuth.signInWithEmailAndPassword(email, password)
      .then((userCredential: firebase.default.auth.UserCredential) => {
        const user = userCredential.user;
        if (user) {
          this.checkAdminAccess(user.uid);
        } else {
          console.error('User not found');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getCurrentUserEmail(): Promise<string | null> {
    return this.fireAuth.currentUser.then(user => user?.email ?? null);

  }
  
  
  storeToken(token:string){
    sessionStorage.setItem('token',token);
  }
  
}


