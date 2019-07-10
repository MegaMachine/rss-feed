import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rss-item',
  templateUrl: './rss-item.component.html',
  styleUrls: ['./rss-item.component.scss']
})
export class RssItemComponent implements OnInit {
  @Input() feed: any;
  constructor() { }

  ngOnInit() {
  }

}
