import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-httperror',
  templateUrl: './httperror.component.html',
  styleUrls: ['./httperror.component.css']
})
export class HTTPErrorComponent implements OnInit {

  public code: number = 0;
  public message: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.code = data.code;
      this.message = data.message;
    })
  }

}
