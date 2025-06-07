import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Job {
  id: number;
  title: string;
  company_name: string;
  url: string;
  description: string;
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class JobService {
private apiUrl = '/assets/mock-jobs.json';

  constructor(private http: HttpClient) {}

getJobs(): Observable<Job[]> {
  return this.http.get<Job[]>(this.apiUrl);
}
  getJobById(id: number): Observable<Job | undefined> {
    return this.getJobs().pipe(
      map(jobs => jobs.find(job => job.id === id))
    );
  }
}