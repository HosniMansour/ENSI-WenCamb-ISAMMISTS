import { Routes , RouterModule} from '@angular/router' ;


import { VideoComponent} from './video/video.component';
import { TextComponent} from './text/text.component';
import { HomeComponent } from './home/home.component' ;
import { SurveyComponent } from './survey/survey.component';
import { LoginComponent} from './login/login.component';
import { OneTextComponent} from './one-text/one-text.component' ;
import {OneVideoComponent} from "./one-video/one-video.component";
import {AddSurveyComponent} from "./add-survey/add-survey.component";
import {AnswerSurveyComponent} from "./answer-survey/answer-survey.component";

 const routes : Routes = [
    {
        path :'videos', component : VideoComponent
    },
     {
        path :'text', component : TextComponent
    },
     {
        path :'home', component : HomeComponent
    },
     {
        path :'survey', component : SurveyComponent
    },
     {
        path :'login', component : LoginComponent
    },
    {
        path :'text/:id', component : OneTextComponent
    },
     {
         path :'videos/:id', component : OneVideoComponent
     },
     {
         path :'survey/add', component : AddSurveyComponent
     },
     {
         path :'survey/answer/:id', component : AnswerSurveyComponent
     },
      {
        path :'**', redirectTo :'home'
       }
     
 ];



export const rouing = RouterModule.forRoot(routes);
