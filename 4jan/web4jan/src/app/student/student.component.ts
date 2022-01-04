import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit
{
  @Input("student") ob:any;
  @Output("delStud") deleteObj = new EventEmitter<String>()
  //@Input() student:any;

  public delete(roll:String)
  {
    this.deleteObj.emit(roll)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
