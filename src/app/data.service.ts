import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { Observable } from 'rxjs'

//Note:  Observables represent asynchronous operations, 
//like HTTP requests. Subscribe to these Observables to get 
//notified when the data is available or when an error occurs.

@Injectable({
  providedIn: 'root'
})

export class DataService {

  // trying to get these HTTP requests to interact with my backend.
  constructor(private http: HttpClient) { }

  // Chatty: this method saves bunny form data to the backend:
   saveBunnyFormData(formData: any): Observable<any> {
    return this.http.post<any>('/bunnyform', formData);
  }
  //Chatty: this method should fetch data but I don't think I need this.
  getMoreInfo(): Observable<any> {
    return this.http.get<any>('/moreinfo');
  }

}
