import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-jk-scroll-to-top',
  templateUrl: './jk-scroll-to-top.component.html',
  styleUrls: ['./jk-scroll-to-top.component.css']
})

export class JkScrollToTopComponent implements OnInit {
  
  @ViewChild('scrollToTop') scrollToTop; 

  constructor() { 
    window.onscroll = () => {
     this._scrollFuntion();
    }
  }

  ngOnInit(): void {
  }

  _scrollTop() {
    document.documentElement.scrollTop = 0;
  }

  _scrollFuntion() {
    if (document.documentElement.scrollTop > 70) {
        this.scrollToTop.nativeElement.style.display = 'block';
    } else {
      this.scrollToTop.nativeElement.style.display = 'none';
    }
}

}

