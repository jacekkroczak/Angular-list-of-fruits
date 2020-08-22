import { Component, OnInit } from '@angular/core';
// import { TaskService } from './../task.service';

import { Fruit } from '../fruit';
import { FRUITS } from '../my-list';

@Component({
  selector: 'app-jk-list',
  templateUrl: './jk-list.component.html',
  styleUrls: ['./jk-list.component.css']
})
export class JkListComponent implements OnInit {

  fruits = FRUITS;
  customFruit: Fruit;

  constructor() { }

  ngOnInit(): void {
    const array = FRUITS;
    for (let step = 0; step < 1000; step++) {
      const itemFruit = array[Math.floor(Math.random() * array.length)];
      const newItems = FRUITS.push(itemFruit);
    }
    console.log('array', array);
  }

  // createNewFruit() {
  //   this.taskService.createFruit('testxxdd').subscribe((response: any) => {
  //     console.log(response);
  //   })
  // }
}