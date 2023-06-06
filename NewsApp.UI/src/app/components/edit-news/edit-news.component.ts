import { Component, Input, OnInit } from '@angular/core';
import { TheNews } from 'src/app/models/the-news';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {
@Input() news?: TheNews;

constructor() {}

ngOnInit(): void{

}
}
