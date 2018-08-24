import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private _http:HttpClient) { }

  createUser(userObj){
    console.log('in server createUser', userObj);
    return this._http.post('/createuser', userObj)
  }

  loginUser(userObj){
    console.log('in server loginUser', userObj);
    return this._http.post('/loginuser', userObj)
  }

  sendImage(imgObject){
    return this._http.post('http://localhost:8000/demo', imgObject);
  }
}

