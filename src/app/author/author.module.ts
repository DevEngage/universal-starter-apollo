import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorComponent } from './author.component';
import { AuthorDataComponent } from './author-data.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AuthorComponent,
    AuthorDataComponent
  ],
  exports: [
    AuthorComponent,
    AuthorDataComponent
  ]
})
export class AuthorModule { }
