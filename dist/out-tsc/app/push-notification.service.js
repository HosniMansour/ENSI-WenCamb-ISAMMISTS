var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
export var PushNotificationsService = (function () {
    function PushNotificationsService() {
        this._canCreate = false;
    }
    PushNotificationsService.prototype.create = function (data, options) {
        var notification = new Notification(data.title, {
            body: data.body
        });
        return notification;
    };
    PushNotificationsService.prototype.getPermission = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!("Notification" in window))
                return reject("This browser does not support desktop notification.");
            if (Notification.permission === "granted") {
                _this._canCreate = true;
                return resolve("Permission was already granted");
            }
            if (Notification.permission !== "denied") {
                Notification.requestPermission()
                    .then(function (a) {
                    if (a === "denied")
                        return reject("Permission wasn't granted");
                    if (a === "default")
                        return reject("The permission request was dismissed.");
                    _this._canCreate = true;
                    resolve("Permission granted");
                });
            }
        });
    };
    PushNotificationsService.prototype.createBuffered = function () {
        this.canCreate = true;
        if (this.notificationBuffer) {
            this.create(this.notificationBuffer);
            this.notificationBuffer = null;
        }
    };
    PushNotificationsService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], PushNotificationsService);
    return PushNotificationsService;
}());
//# sourceMappingURL=../../../src/app/push-notification.service.js.map