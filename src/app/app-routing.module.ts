import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout-component';
import { AppSplash } from './layout/splash/splash-component';
import { AppWelcome } from './layout/welcome/welcome-component';
import { AppSignUp } from './layout/user/signup/signup-component';

const routes: Routes = [
  // { path: '', redirectTo: 'splash', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  // { path: 'splash', loadChildren: './splash/splash.module#SplashPageModule' },
  { path: '', component: AppSplash, pathMatch: 'full' },
  { path: 'welcome', component: AppWelcome, pathMatch: 'full' },
  { path: 'sign-up', component: AppSignUp, pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
