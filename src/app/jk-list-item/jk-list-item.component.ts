import { Component, OnInit, Input } from '@angular/core';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-jk-list-item',
  templateUrl: './jk-list-item.component.html',
  styleUrls: ['./jk-list-item.component.css'],
})
export class JkListItemComponent implements OnInit {
  @Input() fruit: Fruit;
  @Input() index: number;

  constructor() {}

  ngOnInit(): void {}
}
