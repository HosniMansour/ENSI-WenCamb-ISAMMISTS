var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { firebaseConfig } from "../environments/firebase.config";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TextComponent } from './text/text.component';
import { VideoComponent } from './video/video.component';
import { SurveyComponent } from './survey/survey.component';
import { MaterializeDirective } from "angular2-materialize";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { rouing } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AllVideoComponent } from './all-video/all-video.component';
import { OneTextComponent } from './one-text/one-text.component';
import { OneVideoComponent } from './one-video/one-video.component';
import { AddSurveyComponent } from './add-survey/add-survey.component';
import { AnswerSurveyComponent } from './answer-survey/answer-survey.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                HomeComponent,
                TextComponent,
                VideoComponent,
                SurveyComponent,
                LoginComponent,
                AllVideoComponent,
                OneTextComponent,
                MaterializeDirective,
                OneVideoComponent,
                AddSurveyComponent,
                AnswerSurveyComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                rouing,
                AngularFireModule.initializeApp(firebaseConfig),
                FormsModule, ReactiveFormsModule,
                HttpModule,
                JsonpModule
            ],
            providers: [AuthService],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=../../../src/app/app.module.js.map