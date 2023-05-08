import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


@Injectable()
export class loginService{

    constructor(private router:Router){}

    token: string | undefined;

    login(email:string, password:string){

        firebase.auth().signInWithEmailAndPassword(email, password).then(
            response => {
                firebase.auth().currentUser?.getIdToken().then(
                    token=>{
                        this.token = token;
                        this.router.navigate(['/']);
                    }
                )
            }
        );

    }

    getIdToken(){
        return this.token;
    }




}
