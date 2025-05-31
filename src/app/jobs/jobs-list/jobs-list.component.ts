import { CommonModule } from '@angular/common';
import { Comment } from '@angular/compiler';
import { Component , OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JobService , Job } from '../job.service';

@Component({
  selector: 'app-jobs-list',
  standalone : true ,
  imports: [CommonModule , RouterModule],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.css'
})
export class JobsListComponent implements OnInit {
jobs : Job[] = [] ;
constructor (private jobService : JobService) {}

ngOnInit(): void {
  this.jobService.getJobs().subscribe(data=> {
    this.jobs = data ;
  });
}
}
