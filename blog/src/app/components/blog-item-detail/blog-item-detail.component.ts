import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-item-detail',
  templateUrl: './blog-item-detail.component.html',
  styleUrls: ['./blog-item-detail.component.css']
})
export class BlogItemDetailComponent implements OnInit {
  id: any;
  post: any;
  isLoaded = false;

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  ngOnInit() {
    fetch('../../assets/posts.json')
      .then(response => response.json())
      .then(response => {
        response.forEach(element => {
          // tslint:disable-next-line:triple-equals
          if (element.id == this.id) {
            this.post = element;
            this.isLoaded = true;
          }
        });
      });
  }

}
