import { Component, Input } from '@angular/core';

export interface Author {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'author',
  template: `
    Author:
      <span *ngIf="!author"> ... </span>
      <span *ngIf="author"> {{author.firstName}} {{author.lastName}} </span>
  `
})
export class AuthorComponent {
  @Input() author: Author;
}
