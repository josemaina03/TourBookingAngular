import { Injectable } from '@angular/core';
import { ToursLocation } from '../Model/tours-location';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' //is available application-wide
})
export class toursService {
 
    url = 'http://localhost:3000/tours';
  
  
  constructor() { }

  async getAlltoursLocations() : Promise<ToursLocation []> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async gettoursLocationById(id: Number): Promise<ToursLocation | undefined> {
    const data = await fetch('${this.url}/${id}');
    return await data.json() ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string){
    console.log(firstName, lastName, email);
  }

  //apiEndpoint: string =""
  //constructor(private http: Httpclient){}
  // login(obj:any){
  // return this.http.post(this.apiEndPoint + 'Login', obj);}

}


