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

    public change()
    {
      this.title = "Good night !"
    }

    
}
