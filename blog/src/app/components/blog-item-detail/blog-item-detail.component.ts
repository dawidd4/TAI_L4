import { Component, OnInit } from '@angular/core';
import { BlogComponent } from '../blog/blog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-item-detail',
  templateUrl: './blog-item-detail.component.html',
  styleUrls: ['./blog-item-detail.component.css']
})
export class BlogItemDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
