import { Observable } from 'rxjs/Rx';
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}
    storeServers(servers: any[]) {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        // return this.http.post('https://myprojecthttp.firebaseio.com/data.json', servers, 
        // {headers: headers});
        return this.http.put('https://myprojecthttp.firebaseio.com/data.json', servers, 
        {headers: headers});
    }
    getServers(){
        return this.http.get('https://myprojecthttp.firebaseio.com/data.json')
        .map(
            (response: Response) => {
                const data = response.json();
                for (const server of data){
                    server.name = 'FETCHED_' + server.name;
                }
                return data;
            }
        )
        .catch (
            (error: Response) => {
                return Observable.throw('something went wrong');
            }

        );
    }
        getAppName(){
            return this.http.get('https://myprojecthttp.firebaseio.com/appName.json')
            .map(
                (response: Response) => {
                    return response.json();
                });

    }
}
