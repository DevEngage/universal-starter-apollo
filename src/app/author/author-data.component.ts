import { Component, OnInit } from '@angular/core';
import { Angular2Apollo, ApolloQueryObservable } from 'angular2-apollo';
import { ApolloQueryResult } from 'apollo-client';

import gql from 'graphql-tag';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'author-data',
  template: `
    <author [author]="author | async"></author>
  `
})
export class AuthorDataComponent implements OnInit {
  author: ApolloQueryObservable<ApolloQueryResult>;

  constructor(
    private apollo: Angular2Apollo
  ) {}

  ngOnInit() {
    this.author = this.apollo.watchQuery({
      query: gql`
        query getAuthor {
          author {
            firstName
            lastName
          }
        }
      `
    })
    .map(({data}) => data.author) as ApolloQueryObservable<ApolloQueryResult>;
  }
}
