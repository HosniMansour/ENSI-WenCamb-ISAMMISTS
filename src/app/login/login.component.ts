import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFire, FirebaseListObservable,AngularFireAuth} from 'angularfire2';
import { AuthService } from "../auth.service";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public errorMsg = '';
   authenticated : boolean ;

  constructor(private router: Router,
             private _service:AuthService,public auth$: AngularFireAuth
  )
  {

   
    this.auth$.subscribe(user=>{
console.log('user is ', user);
this.authenticated =true ;
},error=>console.log('erro in getting user'))

  }

  ngOnInit() {
  }

//***********************//

SignInwithFacebbok() : void {
  this._service.signInWitFacebook()
  .then(()=>  {this.goToHome()})
  .catch(error=>console.log('error in login'+ error))
}


//*******************************//
signInWithGoogle(): void {
    this._service.signInWithGoogle()
  .then(()=>  {this.goToHome()})
  .catch(error=>console.log('error in login'+ error))
  }

  goToHome(){
   console.log("hi hi")
   this.router.navigate(['/home']);
}

//************************//
 /* private postSignIn(): void {
    this.router.navigate(['/home']);
}
*/

}
