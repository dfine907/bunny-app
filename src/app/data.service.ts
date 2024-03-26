import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http: HttpClient) { }

   // * ChatGPT - Method to save bunny form data to the backend
   saveBunnyFormData(formData: any): Observable<any> {
    return this.http.post<any>('/bunnyform', formData);
  }

  // *ChatGPT - Method to fetch more info from the backend
  getMoreInfo(): Observable<any> {
    return this.http.get<any>('/moreinfo');
  }

}
