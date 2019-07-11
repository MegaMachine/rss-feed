import { AuthService } from './../auth/auth.service';
import { FeedsService } from './../shares/feeds.service';
import { Feed } from './../shares/feed.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidateUrl } from '../shares/url.validator';


@Component({
  selector: 'app-feeds-list',
  templateUrl: './feeds-list.component.html',
  styleUrls: ['./feeds-list.component.scss']
})
export class FeedsListComponent implements OnInit {
  feeds: Feed[];
  userName = '';
  saveCheck = false;
  feedForm = new FormGroup({
    user: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    url: new FormControl('', [ Validators.required, ValidateUrl]),
  });

  constructor(
    private feedsService: FeedsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // this.feedsService.getFeeds();
    this.feedsService.bsFeeds
      .subscribe((data: Feed[]) => {
        this.feeds = data;
      });
    this.feedsService.saveCheck
      .subscribe((data: boolean) => {
        this.saveCheck = data;
      });
    this.feedForm.patchValue({user: this.authService.userName});
  }
  onSave() {
    this.feedsService.putFeeds();
    this.feedsService.saveCheck.next(false);
  }
  onAdd() {
    const feed = new Feed(
      this.feedForm.value.user,
      this.feedForm.value.title,
      this.feedForm.value.url
    );
    this.feedsService.addFeed(feed);
    this.feedsService.saveCheck.next(true);
    this.feedForm.reset();
    this.feedForm.patchValue({user: this.authService.userName});
  }
  onDelete(deleteFeed: Feed) {
    this.feedsService.deleteFeed(deleteFeed);
    this.feedsService.saveCheck.next(true);
  }
  onFetch() {
    this.feedsService.getFeeds();
    this.feedsService.bsFeeds
    .subscribe((data: Feed[]) => {
      this.feeds = data;
    });
    this.feedsService.saveCheck.next(false);
  }
  checkUrl() {
    return (this.feedForm.get('url').errors != null && this.feedForm.get('url').dirty);
  }
}
