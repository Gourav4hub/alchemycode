import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit 
{
  @Input("patid") patId:string="";
  @Input("image") patImage:String="";

  public selectedFile:any;

  constructor(private http:HttpClient) { 
    this.selectedFile = undefined
  }

  ngOnInit(): void {
    console.log(this.patId)
    console.log(this.patImage)
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
    
     
      this.http.post("http://localhost:8080/patient/uploadImage", uploadImageData, { observe: 'response' })
        .subscribe((response) => {
          if (response.status === 200) {
            
          } else {
            
          }
        });
    }
  }

}
