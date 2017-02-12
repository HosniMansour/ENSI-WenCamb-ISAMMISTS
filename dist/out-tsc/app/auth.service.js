var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AuthProviders, AngularFireAuth, AuthMethods } from 'angularfire2';
import { Router } from "@angular/router";
export var AuthService = (function () {
    function AuthService(_router, auth$) {
        var _this = this;
        this._router = _router;
        this.auth$ = auth$;
        console.log('Hello AuthService Provider');
        this.authState = auth$.getAuth();
        auth$.subscribe(function (state) {
            _this.authState = state;
        });
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            console.log('the authstate is', this.authState);
            var result;
            this.auth$.subscribe(function (user) {
                console.log('service auth ', user);
                if (user != null) {
                    result = true;
                }
                else {
                    result = false;
                }
            });
            console.log('the value of result is', result);
            return result;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.signInWitFacebook = function () {
        return this.auth$.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup
        });
    };
    AuthService.prototype.signInWithGoogle = function () {
        return this.auth$.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup
        });
    };
    AuthService.prototype.signOut = function () {
        this.auth$.logout();
    };
    AuthService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Router, AngularFireAuth])
    ], AuthService);
    return AuthService;
}());
//# sourceMappingURL=../../../src/app/auth.service.js.map