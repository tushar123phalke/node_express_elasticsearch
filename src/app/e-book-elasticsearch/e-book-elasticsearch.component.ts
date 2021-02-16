import { Component, OnInit } from '@angular/core';
import { WebexMeetingService } from '../webex-meeting.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-e-book-elasticsearch',
  templateUrl: './e-book-elasticsearch.component.html',
  styleUrls: ['./e-book-elasticsearch.component.scss']
})
export class EBookElasticsearchComponent implements OnInit {

  public bookslist  = [];
  public timeOut = null;
  constructor(private webexMeetingService: WebexMeetingService) { }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(): void {
    this.webexMeetingService.getALLElasticSearchbookList().subscribe((result) => {
      this.bookslist = _.map(result.hits.hits, (v: any) => {
        return {
          ...v._source,
          id: v._id
        };
      });
    }, (error) => console.log(error));
  }

  searchBykeyword(e): void {
    const searchText = (e.target.value) ? e.target.value : null;

    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
    this.timeOut = setTimeout(() => {
      this.webexMeetingService.getElasticSearchBookList(searchText).subscribe((result) => {

        this.bookslist = _.map(result.hits.hits, (v: any) => {
          return {
            ...v._source,
            id: v._id
          };
        });
      }, (error) => console.log(error));
    }, 500);

  }


}
