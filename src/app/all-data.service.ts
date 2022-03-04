import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllDataService {
  private url="http://localhost:3000/users";
  // body!: string;

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(this.url);
    
  }
  sendData(data:any){
    console.log("send123",data)
 
    return this.http.post(this.url,data);
    
  }
}
