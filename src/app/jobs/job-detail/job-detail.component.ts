import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JobService, Job } from '../job.service';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="job; else loading">
      <h2>{{ job.title }} at {{ job.company_name }}</h2>
      <p><strong>Category:</strong> {{ job.category }}</p>
      <a [href]="job.url" target="_blank">View on Remotive</a>
      <div [innerHTML]="job.description"></div>
    </ng-container>
    <ng-template #loading>Loading job details...</ng-template>
  `,
})
export class JobDetailComponent implements OnInit {
  job!: Job | undefined;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.jobService.getJobById(id).subscribe(data => {
      this.job = data;
    });
  }
}