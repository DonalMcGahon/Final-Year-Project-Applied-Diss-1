import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Profile } from "./profile.model";
import { Wallet } from "./myWallet.model";
import { createWallet } from "./createWallet.model";

@Injectable()
export class BlockchainService {
    // Http Contructor for setting up connection
    constructor(private http: Http) {}

        saveWallet(wallet: createWallet): Observable<any> {
            console.log(wallet);
            const body = JSON.stringify(wallet);
            console.log(body);
            const headers = new Headers({'Content-Type': 'application/json'});
            return this.http.post('http://localhost:3000/newWallet', body, {headers: headers});
        }
    }

  function handleError (error: any) {
    // log error
    // could be something more sofisticated
    let errorMsg = error.message || `Problem creating the wallet!!!! try again later.`
    console.error(errorMsg);
  
    // throw an application level error
    return Observable.throw(errorMsg);
  }