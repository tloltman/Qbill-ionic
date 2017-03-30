﻿import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';
import { AppSettings } from '../app-settings';

import { UserData } from '../shared/UserData';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

    private userId: UserData = null;
    private _myServerRoot: string = AppSettings.serverUrl;
    private _userAccessKey: string = AppSettings.userAccessKey;

    constructor(public storage: Storage, private http: Http) {

    }

    registerUser(userEmail: string, userPassword: string, userConfirmPassword: string): Observable<any> {
        var registrationData = '&email=' + userEmail + '&password=' + userPassword + '&ConfirmPassword=' + userConfirmPassword;
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this._myServerRoot + '/api/Account/Register', registrationData, options)
            //.do(data => console.log("Registration Response: " + JSON.stringify(data)))
            .catch((error: any) => Observable.throw(error.json().ModelState || 'Server error'));
    }

    getToken(email: string, password: string): Observable<ILoginResponse> {
        var loginData = 'grant_type=password&username=' + email + '&password=' + password;
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this._myServerRoot + '/Token', loginData, options)
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            //.do(error => console.log("getToken Error Response: " +JSON.stringify(error))) //Used this to get response data for interface
            .catch((error: any) => Observable.throw(error.json().error_description || 'Server error')); //...errors if any
    }

    logout() {
        this.userId = null;

        console.log('storage size before clear:');
        this.storage.length().then((success) => { console.log(success) });
        this.storage.clear().then((success) => {console.log('storage cleared');});
        console.log('storage size after clear:');
        this.storage.length().then((success) => { console.log(success) });
    }

    getUserData(): UserData {
        return this.userId;
    }

    loadUserFromStorage(): Promise<any> {

        return new Promise((resolveFunction, rejectFunction) =>
            this.storage.ready().then(
                (storageReady) => {
                    this.getUserIdFromStoragePromise().then((userLoaded) => {
                        resolveFunction('success2');
                    },
                        (loadUserError) => { console.log("there was a problem loading the user") }
                    )},
                (storageError) => {
                    console.log(storageError);
                    rejectFunction('There was a problem accessing storage');
                }
        ));
    }

    saveUserToStorage(CurrentUser: ILoginResponse): Promise<any> {
        return new Promise((resolveFunction, rejectFunction) =>
            this.storage.ready().then(
                (storageReady) => {
                    this.getUserIdForStoragePromise(CurrentUser).then((userSaved) => {
                        resolveFunction('success1')
                    },
                        (saveUserError) => { console.log('User not saved') });
                },
                (storageError) => {
                    console.log(storageError);
                    rejectFunction('There was a problem accessing storage');
                }
            ));

    }

    getUserIdForStoragePromise(CurrentUser: ILoginResponse): Promise<any> {
        var newUser = new UserData(CurrentUser.userName, CurrentUser.access_token);

        return new Promise((resolveFunction, rejectFunction) =>
            this.storage.set(AppSettings.userAccessKey, newUser).then(
                (gottenValue) => {
                    this.userId = newUser;
                },
                (error) => {
                    console.log(error);
                    rejectFunction('There was an error getting the user Data')
                }
        ));


    }


    getUserIdFromStoragePromise(): Promise<any> { //Helper method for loadUserFrom Storage
        return new Promise((resolveFunction, rejectFunction) =>

            this.storage.get(this._userAccessKey).then(
                (gottenValue) => {
                    this.userId = gottenValue;
                    resolveFunction('success');
                },
                (error) => {
                    console.log(error);
                    rejectFunction('There was an error retrieving the user Id');
                }
            ));
    }


}



export interface ILoginResponse {

    "access_token": string;
    "token_type": string;
    "expires_in": number;
    "userName": string;
    ".issued": string;
    ".expires": string; //TODO Maybe figure out a way to parse these to Dates without having to write methods outside of the interface? String is fine for now.
}
