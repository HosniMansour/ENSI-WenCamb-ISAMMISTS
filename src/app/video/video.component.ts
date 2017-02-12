import { Component, OnInit,EventEmitter } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
 import {MaterializeAction} from 'angular2-materialize';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

videos: FirebaseListObservable<any[]>;
link :any ;


  constructor(af: AngularFire,private http: Http) {
        //this.videos = af.database.list('/videos');
   }

  ngOnInit() {
    console.log('videos');

  }

//*****here the currentUser witll add video to his favourites**********//
addVideo():void{
  //here we will fecth the video from youtube api by URL


}

//*************************//

private displayError(error : string){
 console.log('error', error)
}



//****************************//
 searchYouTube(videoUrl:string) {

return  this.http.get(`https://www.googleapis.com/youtube/v3/videos?id={videoId}&key={myApiKey}&part=snippet&callback=?`)
.map(response =>response.json() )


}


//*********************************//

private handleError(error:Response | any){
    let errMsg : string ;
    console.log('the error is', error);
    if(error instanceof Response)
    {

        errMsg = JSON.stringify(error) ;
                //console.log('we are here !', JSON.stringify(error.body))
                //var err = JSON.stringify(error.body)


    }else{

        errMsg = error.message ? error.message : error.toString();
    }

    console.log('err Msg',errMsg);
    return  error;

}


//********************************//
modalActions = new EventEmitter<string|MaterializeAction>();
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }




}
