import { Component,  OnInit, OnDestroy,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AngularFire, FirebaseListObservable,AngularFireAuth} from 'angularfire2';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
 import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent  {
 private sub: any;
 private id : number;
 newStory : String ;

  storyForm : FormGroup;
submitted : boolean;
user : any ;

stories: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire,fb: FormBuilder,public auth$: AngularFireAuth) { 
   console.log("hehehe"); 
   this.stories = this.af.database.list('/GouvernoratService');
console.log("our stories are" + this.stories);
 this.storyForm= fb.group({
            'titre':[null,Validators.required],
            'description':[null,Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(10)])],
         
})

//**********currentUser*****************//
   this.auth$.subscribe(user=>{
console.log('user is ', user.auth);
if(user)
{
this.user = user.auth ;
}

},error=>console.log('erro in getting user'))



  }


OnInit()
{

}



modalActions = new EventEmitter<string|MaterializeAction>();
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }


addStory(value : any):void {
console.log('form value is'+ JSON.stringify(value))
   this.submitted=true;
  this.stories.push((value));
  this.closeModal();
  this.storyForm.reset();
  this.submitted= false ;
   
  }
 
}
