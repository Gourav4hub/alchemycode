import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
    public title:String = "Good Afternoon !"
    public names = ["Vikas","Mohan","Shyam","Meena","Rajesh"]

    public students = [
      {roll:101,name:'Vikas',age:23,marks:343.33},
      {roll:102,name:'Gopal',age:27,marks:266.77}
    ]

    public change()
    {
      this.title = "Good night !"
    }

    public add(roll:any,name:any,age:any,marks:any)
    {
      this.students.push({roll:roll.value,name:name.value,
        age:age.value,marks:marks.value})
    }    
}
