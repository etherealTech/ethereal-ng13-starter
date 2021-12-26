import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WelcomeComponent,
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent,
  }
];
