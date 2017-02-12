import { Component, OnInit ,EventEmitter } from '@angular/core';
import {AngularFire, FirebaseListObservable,AngularFireAuth} from 'angularfire2';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
 import {MaterializeAction} from 'angular2-materialize';
 import { Router } from '@angular/router';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css']
})
export class AddSurveyComponent implements OnInit {

quetions: FirebaseListObservable<any[]>;
  surveyForm : FormGroup;
  submitted : boolean;
  question : any ;

// <form dir="rtl" class="col s12" [formGroup]="surveyForm" (ngSubmit)="addQuestion(surveyForm.value)">
  constructor(private af: AngularFire,fb: FormBuilder,public auth$: AngularFireAuth,
  private router: Router) {

   this.quetions = this.af.database.list('/questions');
console.log("our questions are" + this.quetions);
 this.surveyForm= fb.group({
            'question_titre':[null,Validators.required],
            'question':[null,Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(100)])],
            'choix3':[null,Validators.required],
            'choix2':[null,Validators.required],
            'choix1':[null,Validators.required],

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


addQuestion(value : any):void {
console.log('form value is'+ JSON.stringify(value))
   this.submitted=true;
 this.quetions.push((value));
  //this.closeModal();
  this.router.navigate(['/survey']);

  }



}
