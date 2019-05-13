import { Component, OnInit } from '@angular/core';
import {Bp} from '../bp';
import {BPS} from '../mock-bps';


@Component({
  selector: 'app-bps',
  templateUrl: './bps.component.html',
  styleUrls: ['./bps.component.css']
})
export class BpsComponent implements OnInit {

  bps = BPS;
  selectedBp: Bp;
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(bp: Bp): void{
  	this.selectedBp = bp;
  }

}
