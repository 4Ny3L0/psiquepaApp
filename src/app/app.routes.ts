import { Routes, provideRouter, withDebugTracing } from '@angular/router';
import { PsLoginComponent } from './pages/ps-login/ps-login.component';
import { PsLandingComponent } from './pages/ps-landing/ps-landing.component';
import { PsAboutmeComponent } from './pages/ps-aboutme/ps-aboutme.component';
import { ApplicationConfig } from '@angular/core';
import { PsServicesComponent } from './pages/ps-services/ps-services.component';
import { PsBlogComponent } from './pages/ps-blog/ps-blog.component';
import { PsWorkshopsComponent } from './pages/ps-workshops/ps-workshops.component';

export const routes: Routes = [
  {
    path: '',
    component: PsLandingComponent,
    data: { title: 'Psiquepa | Inicio' },
  },
  {
    path: 'admin',
    component: PsLoginComponent,
    data: { title: 'Psiquepa | Login' },
  },
  {
    path: 'about',
    component: PsAboutmeComponent,
    data: { title: 'Psiquepa | Sobre mi' },
  },
  {
    path: 'services',
    component: PsServicesComponent,
    data: { title: 'Psiquepa | Sobre mi' },
  },
  {
    path: 'blog',
    component: PsBlogComponent,
    data: { title: 'Psiquepa | Blogs' },
  },
  {
    path: 'workshops',
    component: PsWorkshopsComponent,
    data: { title: 'Psiquepa | Talleres' },
  },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withDebugTracing())],
};
