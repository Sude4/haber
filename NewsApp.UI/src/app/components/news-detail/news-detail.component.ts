import { Component, Input } from '@angular/core';
import { TheNews } from '../../models/the-news';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent {
  @Input() news: TheNews | null = null;
}
