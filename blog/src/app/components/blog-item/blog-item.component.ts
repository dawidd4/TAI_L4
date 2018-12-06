import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  @Input() text: string;
  @Input() image: string;
  @Input() id: number;

  constructor() { }

  ngOnInit() {
  }

}
