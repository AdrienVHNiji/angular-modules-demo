import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./user/user.module').then((m) => m.UserModule), // Lazy loading
  },
  { path: '', redirectTo: 'users', pathMatch: 'full' }, // Route par défaut
];