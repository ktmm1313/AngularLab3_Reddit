import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() reddit: any;

  constructor() { }

  ngOnInit() {
  }

}
