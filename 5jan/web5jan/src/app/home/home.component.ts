import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{
  public patients:any = [];

  constructor(private http:HttpClient) { 

  }

  ngOnInit(): void 
  {
    this.http.get("https://todearhemant.pythonanywhere.com/patient/api/patients/").subscribe(data=>{
      this.patients = data
    });
  }
}
