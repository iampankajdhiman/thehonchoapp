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
import { AppProfileEdit } from './layout/user/profile-edit/profile-edit-component';
import { AppListing } from './layout/user/listing/listing-component';
import { AppListingDetail } from './layout/user/listing-details/listing-detail-component';

import { AppResSignUp } from './layout/restaurant/signup/signup-component';
import { AppResForgot } from './layout/restaurant/signup/forgotPass/forgot-component';
import { AppResAbout } from './layout/restaurant/about/about-component';
import { AppResPrivacyPolicy } from './layout/restaurant/privacy-policy/privacy-policy-component';
import { AppResTermsConditions } from './layout/restaurant/terms-conditions/terms-conditions-component';
import { AppResHome } from './layout/restaurant/home/home-component';
import { AppResChangePassword } from './layout/restaurant/change-password/change-password-component';
import { AppResSettings } from './layout/restaurant/settings/settings-component';
import { AppAddRestaurant } from './layout/restaurant/add-restaurant/add-restaurant-component';
import { AppAddDeal } from './layout/restaurant/add-deal/add-deal-component';
import { AppOpenHours } from './layout/restaurant/add-open-hours/add-open-hours-component';
import { AppNotification } from './layout/restaurant/notification/notification-component';
import { AppPaymentHistory } from './layout/restaurant/payment-history/payment-history-component';
import { AppResListingDetail } from './layout/restaurant/listing-details/listing-detail-component';

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
  { path: 'profile-edit', component: AppProfileEdit, pathMatch: 'full' },
  { path: 'listing', component: AppListing, pathMatch: 'full' },
  { path: 'listing-detail', component: AppListingDetail, pathMatch: 'full' },
  { path: 'restaurant-sign-up', component: AppResSignUp, pathMatch: 'full' },
  { path: 'restaurant-forgot-password', component: AppResForgot, pathMatch: 'full' },
  { path: 'about-restaurant', component: AppResAbout, pathMatch: 'full' },
  { path: 'restaurant-privacy-policy', component: AppResPrivacyPolicy, pathMatch: 'full' },
  { path: 'restaurant-terms-and-conditions', component: AppResTermsConditions, pathMatch: 'full' },
  { path: 'restaurant-home', component: AppResHome, pathMatch: 'full' },
  { path: 'restaurant-change-password', component: AppResChangePassword, pathMatch: 'full' },
  { path: 'restaurant-settings', component: AppResSettings, pathMatch: 'full' },
  { path: 'add-restaurant', component: AppAddRestaurant, pathMatch: 'full' },
  { path: 'add-deal', component: AppAddDeal, pathMatch: 'full' },
  { path: 'add-open-hours', component: AppOpenHours, pathMatch: 'full' },
  { path: 'notification', component: AppNotification, pathMatch: 'full' },
  { path: 'payment-history', component: AppPaymentHistory, pathMatch: 'full' },
  { path: 'restaurant-listing-detail', component: AppResListingDetail, pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
