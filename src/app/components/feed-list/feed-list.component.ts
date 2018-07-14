import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})
export class FeedListComponent implements OnInit {

  @Input() feeds: any;

  constructor() { }

  ngOnInit() {
  }

}
