import { Component, OnInit } from '@angular/core';
import { TheNewsService } from 'src/app/services/the-news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: any[] = [];

  constructor(private theNewsService: TheNewsService) { }

  ngOnInit() {
    this.theNewsService.getTheNews().subscribe((data : any[])=>{
        console.log(data);
        this.contacts = data;
    })
  }
}
