import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor() {
        
    }

    canActivate() {
        if (localStorage.getItem('username')) {
            return true;
        } else {
            return false;
        }
    }
}