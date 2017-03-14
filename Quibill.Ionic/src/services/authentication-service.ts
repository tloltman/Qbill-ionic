import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

    private _myAuthToken: string;
    private _myServerRoot: string = 'http://localhost:61180';

    constructor(public storage: Storage, private http: Http) {
    }

    registerUser(userEmail: string, userPassword: string, userConfirmPassword: string): Observable<any> {
        var registrationData = 'grant_type=password&email=' + userEmail + '&password=' + userPassword + '&ConfirmPassword=' + userConfirmPassword;
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this._myServerRoot + '/api/Account/Register', registrationData, options)
            .map((res: Response) => res.json())
            .do(data => console.log("Registration Response: " + JSON.stringify(data)))
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getToken(username: string, password: string): Observable<ILoginResponse> {
        var loginData = 'grant_type=password&username=' + username + '&password=' + password;
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this._myServerRoot + '/Token', loginData, options)
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            //.do(data => console.log("getToken Response: " +JSON.stringify(data))) //Used this to get response data for interface
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    logout() {
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.myAuthToken })
        let options = new RequestOptions({ headers: headers });
        this.myAuthToken = '';

        return this.http.post(this._myServerRoot + '/api/account/logout', '', options)
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
        
    }

    get myAuthToken(): string {
        return this._myAuthToken;
    }
    set myAuthToken(tokenFromResponse: string) {
        this._myAuthToken = tokenFromResponse;
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

export interface IRegistrationResponse {
    //TODO impliment
}