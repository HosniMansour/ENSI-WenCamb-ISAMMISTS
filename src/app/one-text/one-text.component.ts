import { Component, OnInit,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 import {MaterializeAction} from 'angular2-materialize';
 import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
 import { FormBuilder, FormGroup,Validators} from '@angular/forms';



@Component({
  selector: 'app-one-text',
  templateUrl: './one-text.component.html',
  styleUrls: ['./one-text.component.css']
})
export class OneTextComponent implements OnInit {

 private sub: any;
 private id : number;
 stories: FirebaseListObservable<any>;
 newStory : String ;

  storyForm : FormGroup;
submitted : boolean;

  constructor(private route: ActivatedRoute,af: AngularFire,fb: FormBuilder) { 
      this.stories = af.database.list('/stories');

 this.storyForm= fb.group({
            'titre':[null,Validators.required],
            'description':[null,Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(10)])],
         
})

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params["id"]; console.log('id is',params["id"])// (+) converts string 'id' to a number
    },error=>console.log('error'+ error));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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
   
  }


}
