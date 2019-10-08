import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout-component';
import { AppHeaderComponent } from './layout/app-header/app-header-component';
import { AppFooterComponent } from './layout/app-footer/app-footer-component';
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


import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent, AppLayoutComponent, AppHeaderComponent, AppFooterComponent, AppSplash, AppWelcome, AppSignUp, AppForgot, AppHome, AppAbout, AppTermsConditions, AppPrivacyPolicy, AppChangePassword, AppSettings, AppProfile, AppProfileEdit, AppListing, AppListingDetail, AppResSignUp, AppResAbout, AppResForgot, AppResPrivacyPolicy, AppResTermsConditions, AppResHome, AppResChangePassword, AppResSettings
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
