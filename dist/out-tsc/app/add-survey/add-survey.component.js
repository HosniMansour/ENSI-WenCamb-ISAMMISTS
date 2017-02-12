var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter } from '@angular/core';
import { AngularFire, AngularFireAuth } from 'angularfire2';
import { FormBuilder, Validators } from '@angular/forms';
export var AddSurveyComponent = (function () {
    function AddSurveyComponent(af, fb, auth$) {
        this.af = af;
        this.auth$ = auth$;
        this.modalActions = new EventEmitter();
        console.log("our questions are" + this.quetions);
        this.surveyForm = fb.group({
            'question_titre': [null, Validators.required],
            'question': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])],
            'choix3': [null, Validators.required],
            'choix2': [null, Validators.required],
            'choix1': [null, Validators.required],
        });
        this.auth$.subscribe(function (user) {
            console.log('user is ', user.auth);
        }, function (error) { return console.log('erro in getting user'); });
    }
    AddSurveyComponent.prototype.ngOnInit = function () {
    };
    AddSurveyComponent.prototype.openModal = function () {
        this.modalActions.emit({ action: "modal", params: ['open'] });
    };
    AddSurveyComponent.prototype.closeModal = function () {
        this.modalActions.emit({ action: "modal", params: ['close'] });
    };
    AddSurveyComponent.prototype.addQuestion = function (value) {
        console.log('form value is' + JSON.stringify(value));
        this.submitted = true;
    };
    AddSurveyComponent = __decorate([
        Component({
            selector: 'app-add-survey',
            templateUrl: './add-survey.component.html',
            styleUrls: ['./add-survey.component.css']
        }), 
        __metadata('design:paramtypes', [AngularFire, FormBuilder, AngularFireAuth])
    ], AddSurveyComponent);
    return AddSurveyComponent;
}());
//# sourceMappingURL=../../../../src/app/add-survey/add-survey.component.js.map