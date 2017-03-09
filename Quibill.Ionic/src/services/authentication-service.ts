import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

    constructor(public storage: Storage, private http: Http) {
    }

    getToken(username: string, password: string): Observable<any> {
        var loginData = { grant_type: 'password', username: username, password: password };
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:61180/Token', JSON.stringify(loginData), options)
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    logout() {
        let headers = new Headers({ 'Authorization': 'Bearer auth-token' })
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:61180/Token', '', options)
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }



}