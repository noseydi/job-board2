import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JobService, Job } from '../job.service';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Remote Jobs</h2>
    <ul *ngIf="jobs.length; else loading">
      <li *ngFor="let job of jobs">
        <a [routerLink]="['/jobs', job.id]">{{ job.title }} at {{ job.company_name }}</a>
      </li>
    </ul>
    <ng-template #loading>Loading jobs...</ng-template>
  `,
})
export class JobsListComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.jobService.getJobs('developer').subscribe(data => {
      this.jobs = data;
    });
  }
}