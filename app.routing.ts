import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/landingpage' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
