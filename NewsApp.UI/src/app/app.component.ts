import { Component } from '@angular/core';
import { TheNews } from './models/the-news';
import { TheNewsService } from './services/the-news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewsApp.UI';
  newss: TheNews[] = [];


  constructor(private theNewsService: TheNewsService) {}

  ngOnInit() : void{
 this.theNewsService
 .getTheNews()
 .subscribe((result: TheNews[]) => (this.newss = result));
  }
}


