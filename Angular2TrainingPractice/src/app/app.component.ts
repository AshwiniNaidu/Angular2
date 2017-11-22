import { Component, OnInit } from '@angular/core';
import { PeopleDataService } from './peopleData.service';
import { PostsService } from './posts.service';
import { Posts } from './posts.model';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `<div><h1>{{title | uppercase}}</h1>
  <span><strong>FILTERS/PIPES</strong></span><br />
  <span> Currency Pipe/Filter - {{ 123  | currency: 'USD' : 'symbol' }}</span><br /><br />
  <span> Date Pipe/Filter - </span><br />
  {{ today  | date: 'medium' }}  <br />
  {{ today  | date: 'shortDate' }} <br />
  {{ today  | date: 'longDate' }} <br />
  {{ today | date: 'EEEE, MMMM, d, yyyy' | uppercase }}<br /><br />
  <span> Numerical Pipe/Filter - {{num | number: '3.1-2' }} </span> <br /><br />
  <span> Credit Card Pipe/Filter </span>
  <input type="text" [(ngModel)]='cc' />  
  <span style="font-weight: bold">  {{ cc | creditCard }} </span><br /><br />
  <span> Custom Pipe/Filter - {{37 | tempConvert}}</span><br /><br /><hr/>
  <span><strong>Custom Component</strong></span><br/>
  <random-quote></random-quote><hr/>
  <span><strong>Poperty Binding </strong></span>
  <img [src]="imgUrl" [width]="imgWidth" [height]="imgHeight" /><br /><br />
  <span><strong> Two way Binding </strong></span>
  <input type="text" [(ngModel)]='title' name="textFor" /><br /><br />
  <span><strong> Event Binding</strong> </span>
  <input type="button" (click)="changeTitle()" value="Change Title" /><br /><br /><hr />
  <CounterComponent [counter]="counterVal" (counterChanged)="handleEvent($event)">
  </CounterComponent><hr/>
  <span> <strong>Custom Directive </strong></span><br />
  <form>
  <label for="fName">First Name: </label>
  <input type="text" name="fName" myFirstCustomDirective /><br />
  <label for="lName">Last Name: </label>
  <input type="text" name="lName" myFirstCustomDirective />
  </form><hr/>
  <span><strong>ngIf - Built In Directives</strong></span>
  <div *ngIf="comments.length > 0; else noComments">
    <p>Comments</p>
  </div>
  <ng-template #noComments>
    <p>No Comments!!</p>
  </ng-template>
  <hr />
  <span><strong>ngSwitch - Built In Directives</strong></span>
    <select [(ngModel)]="country">
    <option value="IN">India</option>
    <option value="AU">Australia</option>
    <option value="UK">United Kingdom</option>
    <option value="TH">Thailand</option> 
    </select>
    <div [ngSwitch]="country">
      <h3 *ngSwitchCase="'TH'">Thai Baht</h3>
      <h3 *ngSwitchCase="'AU'">Australian Dollar</h3>
      <h3 *ngSwitchCase="'UK'">Pound</h3>
      <h3 *ngSwitchDefault>Indian Rupee</h3>
    </div><hr />
    <span><strong>Content Projection (Transclusion in Angular 1.x)</strong></span>
    <round-border>
    Hello!
    </round-border><hr />
    <span><strong>Services</strong></span>
    <ul>
      <li *ngFor = "let person of objGP">
        {{person.name}} - {{person.yearBorn}}
      </li>
    </ul><hr />
    <span><strong>Services - HTTP </strong></span>
    <ul>
    <li *ngFor = "let post of objPosts">
      {{post.userId}} - {{post.title}}
    </li>
  </ul>
  </div>`,
  providers: [PeopleDataService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My World';
  today = new Date(); 
  cc: number = 323456789256923;
  num: number = 18266.56666;
  imgUrl = "../assets/img01.jpg";
  imgWidth = 175;
  imgHeight = 175;
  changeTitle() {
    this.title = " New World"
  };
  counterVal: number = 5;
  handleEvent(arg: Event) {
    console.log("the val is " + arg);
  }
  comments: string[] = [];
  country: string = "IN";
  objGP: Object;
  objPosts: Posts;
  constructor(private people: PeopleDataService, private posts: PostsService) {
    //using from services
    //posts.getPosts().then((posts) => this.objPosts = posts);

    //Using from observables
    posts.getPosts().subscribe(
      (posts) => this.objPosts = posts,
      (error) => console.log(error),
      () => console.log("done!"));
  }
  getGP(): void {
    this.objGP = this.people.getAllGoodPeople();
  }

  ngOnInit() {
    this.getGP();
  }
}
