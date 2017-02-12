import { Component, OnInit,EventEmitter } from '@angular/core';
import {AngularFire, FirebaseListObservable,AngularFireAuth} from 'angularfire2';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
 import {MaterializeAction} from 'angular2-materialize';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {


quetions: FirebaseListObservable<any[]>;
  surveyForm : FormGroup;
  submitted : boolean;
user : any ;

  constructor(private af: AngularFire,fb: FormBuilder,public auth$: AngularFireAuth) {


   this.quetions = this.af.database.list('/questions');
console.log("our questions are" + this.quetions);
 this.surveyForm= fb.group({
            'titre':[null,Validators.required],
            'description':[null,Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(10)])],

})

//**********currentUser*****************//
   this.auth$.subscribe(user=>{
console.log('user is ', user.auth);
/*if(user)
{
this.user = user.auth ;
}*/

},error=>console.log('erro in getting user'))

   }

  ngOnInit() {
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
  this.quetions.push((value));
  this.closeModal();

  }


}
