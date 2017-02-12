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
export var SurveyComponent = (function () {
    function SurveyComponent(af, fb, auth$) {
        this.af = af;
        this.auth$ = auth$;
        this.modalActions = new EventEmitter();
        this.quetions = this.af.database.list('/questions');
        console.log("our questions are" + this.quetions);
        this.surveyForm = fb.group({
            'titre': [null, Validators.required],
            'description': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
        });
        this.auth$.subscribe(function (user) {
            console.log('user is ', user.auth);
        }, function (error) { return console.log('erro in getting user'); });
    }
    SurveyComponent.prototype.ngOnInit = function () {
    };
    SurveyComponent.prototype.openModal = function () {
        this.modalActions.emit({ action: "modal", params: ['open'] });
    };
    SurveyComponent.prototype.closeModal = function () {
        this.modalActions.emit({ action: "modal", params: ['close'] });
    };
    SurveyComponent.prototype.addStory = function (value) {
        console.log('form value is' + JSON.stringify(value));
        this.submitted = true;
        this.quetions.push((value));
        this.closeModal();
    };
    SurveyComponent = __decorate([
        Component({
            selector: 'app-survey',
            templateUrl: './survey.component.html',
            styleUrls: ['./survey.component.css']
        }), 
        __metadata('design:paramtypes', [AngularFire, FormBuilder, AngularFireAuth])
    ], SurveyComponent);
    return SurveyComponent;
}());
//# sourceMappingURL=../../../../src/app/survey/survey.component.js.map