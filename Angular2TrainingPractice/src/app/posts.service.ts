import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Posts } from './posts.model';
import { Http } from '@angular/http';

@Injectable()
export class PostsService {
    url: string = "http://jsonplaceholder.typicode.com/posts";
    constructor(private http: Http) {

    } 
    //Returns Promise 
    /*getPosts(): Promise<Posts> {
        return this.http.get(this.url).toPromise().then(response => response.json());
    }*/

    //Observables
    getPosts() {
        return this.http.get(this.url).map(response => {
            return response.json()
        });
    }
}