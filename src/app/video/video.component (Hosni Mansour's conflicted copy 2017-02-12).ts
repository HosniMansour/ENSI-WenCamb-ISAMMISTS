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

  constructor(af: AngularFire,private http: Http) {
        //this.videos = af.database.list('/videos');
   }

  ngOnInit() {
    console.log('videos');
  }

}
