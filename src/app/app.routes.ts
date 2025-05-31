import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'jobs',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./jobs/jobs-list/jobs-list.component').then(m => m.JobsListComponent),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./jobs/job-detail/job-detail.component').then(m => m.JobDetailComponent),
      },
    ],
  },
  {
    path: 'admin',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./admin/login/login.component').then(m => m.LoginComponent),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./admin/dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
    ],
  },
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
];