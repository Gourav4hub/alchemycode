import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import PatientService from '../patient.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit 
{
  @Input("patid") patId:string="";
  @Input("image") patImage:string="";

  public patientBase64Image:String = '';

  public selectedFile:any;

  constructor(private http:HttpClient,
    private patientService:PatientService) { 
    this.selectedFile = undefined
  }

  ngOnInit(): void {    
    if(this.patImage!=undefined)
    {
       this.patientService.loadImage(this.patImage).subscribe((data:any)=>{
          if(data.status){
              this.patientBase64Image = data.imageBase64
          }
       })
    }
  }

  public setImage(event:any){
     this.selectedFile = event.target.files[0]
  }

  public upload()
  {
    if(this.selectedFile==undefined){
      alert("Please Select Image First !")
    }else{
      const uploadImageData = new FormData();
      uploadImageData.append('imageFile', this.selectedFile, 
      this.selectedFile.name);

      uploadImageData.append("pid",this.patId);
    
     
      this.http.post("http://localhost:8080/patient/uploadImage", uploadImageData)
        .subscribe((data:any) => {
            if(data.status){
              // data.imagePath
            }
        });
    }
  }

}
