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
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent, AppLayoutComponent, AppHeaderComponent, AppFooterComponent, AppSplash, AppWelcome, AppSignUp, AppForgot, AppHome, AppAbout, AppTermsConditions, AppPrivacyPolicy, AppChangePassword, AppSettings, AppProfile
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
