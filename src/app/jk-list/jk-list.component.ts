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
  selectedFruit: Fruit;

  constructor() { }

  ngOnInit(): void {
  }

  // createNewFruit() {
  //   this.taskService.createFruit('testxxdd').subscribe((response: any) => {
  //     console.log(response);
  //   })
  // }

}
