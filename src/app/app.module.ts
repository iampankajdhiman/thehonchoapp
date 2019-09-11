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
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, AppLayoutComponent, AppHeaderComponent, AppFooterComponent, AppSplash, AppWelcome],
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
