import { Component, OnInit } from '@angular/core';
import { FRUITS } from '../my-list';

@Component({
  selector: 'app-jk-list',
  templateUrl: './jk-list.component.html',
  styleUrls: ['./jk-list.component.css'],
})
export class JkListComponent implements OnInit {
  fruits = [];

  constructor() {}

  ngOnInit(): void {
    for (let step = 0; step < 1000; step++) {
      const index = Math.floor(Math.random() * FRUITS.length);
      const itemFruit = FRUITS[index];
      this.fruits.push(itemFruit);
    }

    console.log('array', this.fruits);
  }
}
