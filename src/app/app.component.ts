import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable,AngularFireAuth} from 'angularfire2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
   authenticated : boolean = false  ;

 constructor(public auth$: AngularFireAuth,private af: AngularFire,private _router:Router
  )
  {

   
    this.auth$.subscribe(user=>{
console.log('user is ', user);
if(user)
{
this.authenticated =true ;
}

},error=>console.log('erro in getting user'))

  }

 //**********LOGOUT FUNCTION**********************//
 logout(): void{
   console.log('we will logout '+ this.authenticated);
     this._router.navigate(['/login']);
    this.af.auth.logout();

    //this._router.renavigate();
 } 


}
