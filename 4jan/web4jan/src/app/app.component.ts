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
  public students:any = []

  public deleteStudent(roll:String)
  {
    this.students = this.students.filter((ob:any)=>ob.roll!=roll)
  }

  public send(frm:NgForm)
  {
    this.students.push(frm.value)
  }
}
