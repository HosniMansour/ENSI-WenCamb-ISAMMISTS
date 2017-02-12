import { Injectable } from '@angular/core';
import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';
import {Router} from "@angular/router";

@Injectable()
export class AuthService {



private authState: FirebaseAuthState;

  constructor(private _router: Router,
             public auth$: AngularFireAuth
  ){
         console.log('Hello AuthService Provider');
     this.authState = auth$.getAuth();
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
});
}

//***********************************************//
  get authenticated(): boolean {
     console.log('the authstate is', this.authState)
     var result : boolean;
     this.auth$.subscribe(user=>{
       console.log('service auth ', user);
       if(user!=null){
         result= true ;
       }else{
         result= false ;
       }
     })
     console.log('the value of result is',result);
    return result
}


//**************************************************//



signInWitFacebook(): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    });
}


//**************************************//

signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
}


//**************************//

  signOut(): void {
    this.auth$.logout();
    this._router.navigate(['/home']);
}



}
