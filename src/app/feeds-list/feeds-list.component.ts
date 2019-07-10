import { AuthService } from './../auth/auth.service';
import { FeedsService } from './../shares/feeds.service';
import { Feed } from './../shares/feed.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feeds-list',
  templateUrl: './feeds-list.component.html',
  styleUrls: ['./feeds-list.component.scss']
})
export class FeedsListComponent implements OnInit {
  feeds: Feed[];
  saveCheck = false;
  userName = '';
  feedForm = new FormGroup({
    user: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
  });

  constructor(
    private feedsService: FeedsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.feedsService.getFeeds();
    this.feedsService.bsFeeds
      .subscribe((data: Feed[]) => {
        this.feeds = data;
      });
    this.feedForm.patchValue({user: this.authService.userName});
  }
  onSave() {
    this.feedsService.putFeeds();
    this.saveCheck = false;
  }
  onAdd() {
    this.feedsService.addFeed(this.feedForm.value);
    this.saveCheck = true;
  }
  onDelete(deleteFeed: Feed) {
    this.feedsService.deleteFeed(deleteFeed);
    this.saveCheck = true;
  }
}
