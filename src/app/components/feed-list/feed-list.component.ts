import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedListComponent implements OnInit {

  @Input() feeds: any;

  constructor() { }

  ngOnInit() {
  }

}
