import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {
    path: 'home',
    loadChildren: 'src/app/pages/home/home.module#HomePageModule'
  },
  // { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  {
    path: 'login',
    loadChildren: 'src/app/pages/login/login.module#LoginPageModule'
  },
  // {
  //   path: 'register',
  //   loadChildren: './create-login/create-login.module#CreateLoginPageModule'
  // },
  {
    path: 'register',
    loadChildren:
      'src/app/pages/create-login/create-login.module#CreateLoginPageModule'
  },
  // { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  {
    path: 'menu',
    loadChildren: 'src/app/pages/menu/menu.module#MenuPageModule'
  },
  // {
  //   path: 'display-show',
  //   loadChildren:
  //     './pages/display-show/display-show.module#DisplayShowPageModule'
  // }
  {
    path: 'display-show',
    loadChildren:
      'src/app/pages/display-show/display-show.module#DisplayShowPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
