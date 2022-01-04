import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//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
export class AppComponent
{
  public msg:String= "Hello All !"

  public send(frm:NgForm)
  {
    console.log(frm.value)
  }
}
