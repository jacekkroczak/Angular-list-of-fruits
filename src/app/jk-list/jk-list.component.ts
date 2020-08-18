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
  }

  // createNewFruit() {
  //   this.taskService.createFruit('testxxdd').subscribe((response: any) => {
  //     console.log(response);
  //   })
  // }

}

const d = FRUITS;

const c = FRUITS.push([d]);

console.log(c);

// FRUITS.forEach(element => {
//    this.test = element;
// });


for (let step = 0; step < 100; step++) {
  console.log('dupa');
}
