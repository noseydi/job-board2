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
      <h2>{{ job.title }}</h2>
      <p>{{ job.body }}</p>
    </ng-container>
    <ng-template #loading>Loading job details...</ng-template>
  `,
})
export class JobDetailComponent implements OnInit {
  job!: Job;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.jobService.getJob(id).subscribe(data => {
      this.job = data;
    });
  }
}
