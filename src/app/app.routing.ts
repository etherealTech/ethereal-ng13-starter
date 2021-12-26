import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/welcome/welcome.component').then(m => m.WelcomeComponent)
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.component').then(m => m.AboutComponent)
  }
];
