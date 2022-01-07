import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {server} from '../../package.json'

@Injectable({
  providedIn: 'root'
})
export default class PatientService 
{
  constructor(private http:HttpClient) { }

  public getPatients() : Observable<any>
  {
    return this.http.get(`${server}/patient/load`)
  }

  public savePatient(data:any) : Observable<any>
  {
    return this.http.post(`${server}/patient/save`,data)
  }

  public deletePatient(pid:String) : Observable<any>
  {
    return this.http.delete(`${server}/patient/delete/${pid}`,{observe: 'response'})
  }

  public updatePatient(ob:any) : Observable<any>
  {
    return this.http.put(`${server}/patient/update`,ob)
  }
}
