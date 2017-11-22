import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RandomQuoteComponent } from './randomquote.component';
import { CounterComponent } from './counter.component';
import { TempConvertPipe } from './tempConvert.pipe';
import { myFirstCustomDirective } from './demo.directive';
import { RoundBorderComponent } from './roundborder.component';
import { PostsService } from './posts.service';


@NgModule({
  declarations: [
    AppComponent,
    RandomQuoteComponent,
    CounterComponent,
    TempConvertPipe,
    myFirstCustomDirective,
    RoundBorderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
