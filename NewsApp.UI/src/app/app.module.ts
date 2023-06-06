import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditNewsComponent } from './components/edit-news/edit-news.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';









@NgModule({
  declarations: [
    AppComponent,
    EditNewsComponent,
    NavbarComponent,
    SliderComponent,
CommentFormComponent,
NewsDetailComponent,


 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
