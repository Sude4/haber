import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {
  constructor(private http: HttpClient) {}
onSubmit(arg0: string) {
throw new Error('Method not implemented.');
}
  comments: string[] = [];

  addComment(comment: string) {
    this.comments.push(comment);
  }
  saveComment(comment: string) {
    const requestBody = { comment: comment };
    return this.http.post('https://api.example.com/comments', requestBody);
  }


}

