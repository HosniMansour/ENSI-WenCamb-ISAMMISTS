import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule, JsonpModule } from '@angular/http';
import {firebaseConfig} from "../environments/firebase.config";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TextComponent } from './text/text.component';
import { VideoComponent } from './video/video.component';
import { SurveyComponent } from './survey/survey.component';
import {MaterializeDirective} from "angular2-materialize";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//************************************//
import { rouing } from './app.routing' ;

//***************************************//
import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';

//***********************************//
import { AuthService } from './auth.service';
import { AllVideoComponent } from './all-video/all-video.component';
import { OneTextComponent } from './one-text/one-text.component';
import { OneVideoComponent } from './one-video/one-video.component';
import { AddSurveyComponent } from './add-survey/add-survey.component';
import { AnswerSurveyComponent } from './answer-survey/answer-survey.component';


/*const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};*/

@NgModule({
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
   FormsModule,ReactiveFormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
