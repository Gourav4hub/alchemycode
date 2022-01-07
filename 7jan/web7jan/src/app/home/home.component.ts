import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import PatientService from '../patient.service'
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

  constructor(private patientService:PatientService) { 
  }

  update(frm:NgForm)
  {
    var ob = frm.value
    ob.patientId = this.editDetails.editpatient.patientId    
    this.patientService.updatePatient(ob).subscribe(data=>
    {     
      this.patients = this.patients.map((ob:any)=>ob.patientId==this.editDetails.editpatient.patientId?data:ob)
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
    this.patientService.savePatient(frm.value).subscribe(data=>{
        this.patients.push(data)
    })
  }

  delPatient(pid:String){
    this.patientService.deletePatient(pid).subscribe(data=>{
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
    this.patientService.getPatients().subscribe((data:any)=>{
      this.patients = data
      console.log(this.patients)
    });
  }

  setImageIntoPatient(data:any)
  {
    //console.log(this.patients)
    //console.log(data)
    this.patients = this.patients.map((prod:any)=>{
      if(prod.patientId==data.pid)
      {
        prod.patientImage = data.path
        return prod;
      }else
        return prod
    })
    console.log(this.patients)
  }
}
