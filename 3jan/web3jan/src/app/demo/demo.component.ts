import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit 
{
  public num = [44,55,66,22,33,11,23,34,43,32]
  constructor() { }

  ngOnInit(): void {
  }

}
