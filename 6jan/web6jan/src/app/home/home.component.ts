import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{
  public patients:any = [];
  public editDetails:any = {
    editpatient : undefined,
    editstatus : false
  }

  constructor(private http:HttpClient) { 

  }

  update(frm:NgForm)
  {
    var ob = frm.value
    ob.patientId = this.editDetails.editpatient.patientId
    console.log(ob)
    this.http.put(`http://localhost:8080/patient/update`,ob).subscribe(data=>
    {     
      this.patients = this.patients.map((ob:any)=>ob.id==this.editDetails.editpatient.id?data:ob)
      this.editDetails= {
        editpatient : undefined,
        editstatus : false
      }
    })
  }

  editPatient(patient:any)
  {
    this.editDetails = {
      editpatient : patient,
      editstatus : true
    }
  }

  save(frm:NgForm){
    console.log(frm.value)
    this.http.post("http://localhost:8080/patient/save",frm.value).subscribe(data=>{
        this.patients.push(data)
    })
  }

  delPatient(pid:String){
    this.http.delete(`http://localhost:8080/patient/delete/${pid}`,{observe: 'response'}).subscribe(data=>{
        console.log(data.status)
        if(data.status==200){
          this.patients = this.patients.filter((prod:any)=>prod.patientId!=pid)
        }else{
          alert("Not Deleted !")
        }
    })
  }

  ngOnInit(): void 
  {
    this.http.get("http://localhost:8080/patient/load").subscribe(data=>{
      this.patients = data
    });
  }
}
