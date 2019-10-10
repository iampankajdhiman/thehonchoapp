"use strict";var __decorate=this&&this.__decorate||function(o,e,n,t){var p,r=arguments.length,i=r<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,n):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(o,e,n,t);else for(var a=o.length-1;0<=a;a--)(p=o[a])&&(i=(r<3?p(i):3<r?p(e,n,i):p(e,n))||i);return 3<r&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),platform_browser_1=require("@angular/platform-browser"),router_1=require("@angular/router"),angular_1=require("@ionic/angular"),ngx_1=require("@ionic-native/splash-screen/ngx"),ngx_2=require("@ionic-native/status-bar/ngx"),app_component_1=require("./app.component"),app_layout_component_1=require("./layout/app-layout/app-layout-component"),app_header_component_1=require("./layout/app-header/app-header-component"),app_footer_component_1=require("./layout/app-footer/app-footer-component"),splash_component_1=require("./layout/splash/splash-component"),welcome_component_1=require("./layout/welcome/welcome-component"),signup_component_1=require("./layout/user/signup/signup-component"),forgot_component_1=require("./layout/user/signup/forgotPass/forgot-component"),home_component_1=require("./layout/user/home/home-component"),about_component_1=require("./layout/user/about/about-component"),terms_conditions_component_1=require("./layout/user/terms-conditions/terms-conditions-component"),privacy_policy_component_1=require("./layout/user/privacy-policy/privacy-policy-component"),change_password_component_1=require("./layout/user/change-password/change-password-component"),settings_component_1=require("./layout/user/settings/settings-component"),profile_component_1=require("./layout/user/profile/profile-component"),profile_edit_component_1=require("./layout/user/profile-edit/profile-edit-component"),listing_component_1=require("./layout/user/listing/listing-component"),listing_detail_component_1=require("./layout/user/listing-details/listing-detail-component"),signup_component_2=require("./layout/restaurant/signup/signup-component"),forgot_component_2=require("./layout/restaurant/signup/forgotPass/forgot-component"),about_component_2=require("./layout/restaurant/about/about-component"),privacy_policy_component_2=require("./layout/restaurant/privacy-policy/privacy-policy-component"),terms_conditions_component_2=require("./layout/restaurant/terms-conditions/terms-conditions-component"),home_component_2=require("./layout/restaurant/home/home-component"),change_password_component_2=require("./layout/restaurant/change-password/change-password-component"),settings_component_2=require("./layout/restaurant/settings/settings-component"),app_routing_module_1=require("./app-routing.module"),AppModule=function(){function o(){}return o=__decorate([core_1.NgModule({declarations:[app_component_1.AppComponent,app_layout_component_1.AppLayoutComponent,app_header_component_1.AppHeaderComponent,app_footer_component_1.AppFooterComponent,splash_component_1.AppSplash,welcome_component_1.AppWelcome,signup_component_1.AppSignUp,forgot_component_1.AppForgot,home_component_1.AppHome,about_component_1.AppAbout,terms_conditions_component_1.AppTermsConditions,privacy_policy_component_1.AppPrivacyPolicy,change_password_component_1.AppChangePassword,settings_component_1.AppSettings,profile_component_1.AppProfile,profile_edit_component_1.AppProfileEdit,listing_component_1.AppListing,listing_detail_component_1.AppListingDetail,signup_component_2.AppResSignUp,about_component_2.AppResAbout,forgot_component_2.AppResForgot,privacy_policy_component_2.AppResPrivacyPolicy,terms_conditions_component_2.AppResTermsConditions,home_component_2.AppResHome,change_password_component_2.AppResChangePassword,settings_component_2.AppResSettings],entryComponents:[],imports:[platform_browser_1.BrowserModule,angular_1.IonicModule.forRoot(),app_routing_module_1.AppRoutingModule],providers:[ngx_2.StatusBar,ngx_1.SplashScreen,{provide:router_1.RouteReuseStrategy,useClass:angular_1.IonicRouteStrategy}],bootstrap:[app_component_1.AppComponent]})],o)}();exports.AppModule=AppModule;