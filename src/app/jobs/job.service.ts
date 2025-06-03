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
  private apiUrl = 'https://remotive.io/api/remote-jobs';

  constructor(private http: HttpClient) {}

  getJobs(search: string = ''): Observable<Job[]> {
    return this.http.get<{ jobs: Job[] }>(`${this.apiUrl}?search=${search}`).pipe(
      map(res => res.jobs)
    );
  }

  getJobById(id: number): Observable<Job | undefined> {
    return this.getJobs().pipe(
      map(jobs => jobs.find(job => job.id === id))
    );
  }
}