import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class RequestService {

  constructor(private _http: HttpClient) {
  }

  getUsers() {
    const url = '/users';
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.get(url, {headers}).map((res) => res);
  }

  getImgApi() {
    const url = '/api-img';
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.get(url, {headers}).map((res) => res);
  }

}
