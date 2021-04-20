import { Component, OnInit, ViewChild } from '@angular/core';
import { basicFruits } from '../fruits-list';

@Component({
  selector: 'app-jk-list',
  templateUrl: './jk-list.component.html',
  styleUrls: ['./jk-list.component.css'],
})
export class JkListComponent implements OnInit {
  fruits = [];
  filterFruits = [];
  @ViewChild('search') search; 

  constructor() {}

  ngOnInit(): void {
    this._renderElements();
  }

  _renderElements() {
    this.fruits = [];

    for (let i = 0; i < 100; i++) {
      for (let i = 0; i < basicFruits.length; i++) {
        let itemFruit = basicFruits[i];
        this.fruits.push(itemFruit);
      }
    }
    this.filterFruits = this.fruits;
  }

  _filterFruits(event) {
    let filterValues = event.target.value;
    this.filterFruits.sort((a: any, b: any) => {

      if (filterValues === 'filterAZ' && a.name < b.name) {
        return -1;
      }

      else if (filterValues === 'filterZA' && a.name > b.name) {
        return -1;
      }

      else if (filterValues === 'random') {
        return 0.5 - Math.random();
      }

      else {
        return 0;
      }
    })
  }

  _resetFruits() {
    this.search.nativeElement.value = '';
    this._renderElements();
  }

  _searchFruits(event) {
    event.preventDefault();
    const item = event.target.value.toLowerCase();
    this.filterFruits = this.fruits.filter((filterFruit: any) => {
      return filterFruit.name.toLowerCase().includes(item)
    });
  }
}
