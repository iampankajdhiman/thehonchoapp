import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout-component';
import { AppSplash } from './layout/splash/splash-component';
import { AppWelcome } from './layout/welcome/welcome-component';
import { AppSignUp } from './layout/user/signup/signup-component';
import { AppForgot } from './layout/user/signup/forgotPass/forgot-component';
import { AppHome } from './layout/user/home/home-component';
import { AppAbout } from './layout/user/about/about-component';
import { AppTermsConditions } from './layout/user/terms-conditions/terms-conditions-component';
import { AppPrivacyPolicy } from './layout/user/privacy-policy/privacy-policy-component';
import { AppChangePassword } from './layout/user/change-password/change-password-component';
import { AppSettings } from './layout/user/settings/settings-component';
import { AppProfile } from './layout/user/profile/profile-component';

const routes: Routes = [
  // { path: '', redirectTo: 'splash', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  // { path: 'splash', loadChildren: './splash/splash.module#SplashPageModule' },
  { path: '', component: AppSplash, pathMatch: 'full' },
  { path: 'welcome', component: AppWelcome, pathMatch: 'full' },
  { path: 'sign-up', component: AppSignUp, pathMatch: 'full' },
  { path: 'forgot-password', component: AppForgot, pathMatch: 'full' },
  { path: 'home', component: AppHome, pathMatch: 'full' },
  { path: 'about', component: AppAbout, pathMatch: 'full' },
  { path: 'terms-and-conditions', component: AppTermsConditions, pathMatch: 'full' },
  { path: 'privacy-policy', component: AppPrivacyPolicy, pathMatch: 'full' },
  { path: 'change-password', component: AppChangePassword, pathMatch: 'full' },
  { path: 'settings', component: AppSettings, pathMatch: 'full' },
  { path: 'profile', component: AppProfile, pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
