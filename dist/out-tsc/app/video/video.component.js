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
import { AngularFire } from 'angularfire2';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
export var VideoComponent = (function () {
    function VideoComponent(af, http) {
        this.http = http;
        this.modalActions = new EventEmitter();
    }
    VideoComponent.prototype.ngOnInit = function () {
        console.log('videos');
    };
    VideoComponent.prototype.addVideo = function () {
    };
    VideoComponent.prototype.displayError = function (error) {
        console.log('error', error);
    };
    VideoComponent.prototype.searchYouTube = function (videoUrl) {
        return this.http.get("https://www.googleapis.com/youtube/v3/videos?id={videoId}&key={myApiKey}&part=snippet&callback=?")
            .map(function (response) { return response.json(); });
    };
    VideoComponent.prototype.handleError = function (error) {
        var errMsg;
        console.log('the error is', error);
        if (error instanceof Response) {
            errMsg = JSON.stringify(error);
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log('err Msg', errMsg);
        return error;
    };
    VideoComponent.prototype.openModal = function () {
        this.modalActions.emit({ action: "modal", params: ['open'] });
    };
    VideoComponent.prototype.closeModal = function () {
        this.modalActions.emit({ action: "modal", params: ['close'] });
    };
    VideoComponent = __decorate([
        Component({
            selector: 'app-video',
            templateUrl: './video.component.html',
            styleUrls: ['./video.component.css']
        }), 
        __metadata('design:paramtypes', [AngularFire, Http])
    ], VideoComponent);
    return VideoComponent;
}());
//# sourceMappingURL=../../../../src/app/video/video.component.js.map