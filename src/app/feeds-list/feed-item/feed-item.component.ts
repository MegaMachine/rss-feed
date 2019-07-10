import { FeedsService } from './../../shares/feeds.service';
import { Feed } from '../../shares/feed.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent implements OnInit {
  @Input() index: number;
  @Input() feed: Feed;
  @Output() deleteFeed = new EventEmitter();
  constructor(
    private feedsService: FeedsService
  ) { }

  ngOnInit() {
  }
  deleteItem(deleteFeed: any) {
    this.deleteFeed.emit(deleteFeed);
  }
}
