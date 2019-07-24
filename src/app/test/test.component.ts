import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  currentTab: string;
  comments = null;

  constructor() {
    this.currentTab = '1';
   }

  ngOnInit() {
    this.comments = ['mange', 'des', 'pommes'];
  }

  setTab(tab: string):void{
    this.currentTab = tab;
  }
}
