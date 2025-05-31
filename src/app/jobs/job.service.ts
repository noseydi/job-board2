import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Job {
  id : number ;
  title : string ; 
  body : string ;
}
@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts' ;

  constructor(private http : HttpClient) { }

  getJobs() : Observable<Job[]>{
    return this.http.get<Job[]>(this.apiUrl);
  }
  getJob(id : number ) : Observable<Job> 
  {
    return this.http.get<Job>(`${this.apiUrl}/${id}`);
  }
}
