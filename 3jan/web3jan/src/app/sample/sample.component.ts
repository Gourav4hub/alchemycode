import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit 
{
  public fnum:number = 0
  public snum:number = 0
  constructor() { }

  ngOnInit(): void {
  }

  public process(t1:any,t2:any)
  {
    this.fnum = t1.value*1
    this.snum = t2.value*1
  }
}
