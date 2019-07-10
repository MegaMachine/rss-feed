import { FeedsService } from './../../shares/feeds.service';
import { Feed } from '../../shares/feed.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent implements OnInit {
  @Input() feed: Feed;
  constructor(
    private feedsService: FeedsService
  ) { }

  ngOnInit() {
  }
  deleteItem(deleteData: {name: string, title: string}) {
    this.feedsService.deleteFeed(deleteData);
  }
}
