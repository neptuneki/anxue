import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bp',
  templateUrl: './bp.component.html',
  styleUrls: ['./bp.component.css']
})
export class BpComponent implements OnInit {
  public bp = 'G-C';

  constructor() { }

  ngOnInit() {
  }

}
