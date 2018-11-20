import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { landingPage } from './landingPage/landingPage.component'
import { SignOutService } from '../providers/navlifecycleservices/signout-navservice';
import { SecurityService } from '../providers/security-service/security-service';
import { UserService } from '../providers/user-service/user-service';

// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'landingpage',
    loadChildren: 'app/pages/landingPage/landingPage.module#landingModule'    
  },
  {
    path: 'signout',    
    loadChildren: 'app/pages/landingPage/landingPage.module#landingModule',
    canActivate: [SignOutService],
  },
  
   {
    path: 'mobile',
    loadChildren: 'app/pages/mobileEnter/mobileEnter.module#mobileModule',
    canActivate: [SecurityService] 
  },
   {
    path: 'custid',
    loadChildren: 'app/pages/CustomerID/CustomerID.module#CustomerID',
    canActivate: [SecurityService] 

  },
  {
    path: 'changepass',
    loadChildren: 'app/pages/changePassword/changePassword.module#Changepassword',
    canActivate: [SecurityService]
  },
  {
    path: 'mpin',
    loadChildren: 'app/pages/mPin/mPin.module#mPinModule',
    canActivate : [SecurityService]
  },
  {
    path: 'changempin',
    loadChildren: 'app/pages/changemPin/changemPin.module#changemPinModule'
  },
  {
    path: 'setpassword',
    loadChildren: 'app/pages/setPassword/setPassword.module#setPasswordModule',
    canActivate: [SecurityService] 
  },
  // {
  //   path: 'newuserssignup',
  //   loadChildren: 'app/pages/newUsersSignup/newUsersSignup.module#newSignupModule'
  // },
   {
    path: 'forcechangempin',
    loadChildren: 'app/pages/forcechangemPin/forcechangemPin.module#forcechangemPinModule'
  },
  
  // {
  //   path: 'register',
  //   loadChildren: 'app/pages/register/register.module#RegisterModule' },
  { path: '', redirectTo: 'landingpage', pathMatch: 'full' },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: 'home', loadChildren: 'app/pages/home/home.module#homeModule', canActivate: [UserService] },
  //    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'accounts', loadChildren: 'app/pages/accountsPage/accountsPage.module#accountsModule', canActivate: [UserService] },
      { path: 'Funds', loadChildren: 'app/pages/fundtranfer/fundtranfer.module#FundsModule', canActivate: [UserService] },
      { path: 'payment', loadChildren: 'app/pages/paymentPage/paymentPage.module#paymentModule', canActivate: [UserService] },
      { path: 'service', loadChildren: 'app/pages/servicesPage/servicesPage.module#servicesModule', canActivate: [UserService] },
      // { path: 'rewardpoints', loadChildren: 'app/pages/rewardPoints/rewardPoints.module#rewardModule', canActivate: [UserService] },
      { path: 'offerspage', loadChildren: 'app/pages/offerPage/offerPage.module#offerModule', canActivate: [UserService] },
      // { path: 'loanpage', loadChildren: 'app/pages/loanPage/loanPage.module#loanModule', canActivate: [UserService] },
      { path: 'referFriendStatus', loadChildren: 'app/pages/referFriendStatus/referFriendStatus.module#ReferFriendStatusComponentmodule', canActivate: [UserService] },
      { path: 'configurationpage', loadChildren: 'app/pages/configurationPage/configurationPage.module#configurationModule', canActivate: [UserService] },
      { path: 'shoppingpage', loadChildren: 'app/pages/shoppingPage/shoppingPage.module#shoppingModule', canActivate: [UserService] },
      { path: 'settingspage', loadChildren: 'app/pages/settingsPage/settingsPage.module#settingsModule', canActivate: [UserService] },
      { path: 'profilepage', loadChildren: 'app/pages/profilePage/profilePage.module#profileModule', canActivate: [UserService] },
      { path: 'forexrate', loadChildren: 'app/pages/forexRate/forexRate.module#forexModule', canActivate: [UserService] },
      { path: 'passbook', loadChildren: 'app/pages/passbook/passbook.module#passbookModule', canActivate: [UserService] },
      { path: 'QRcodeScanner', loadChildren: 'app/pages/QRcodeScannerPage/QRcodeScannerPage.module#QRcodeScannerPageModule', canActivate: [UserService] },
      { path: 'referafriend1', loadChildren: 'app/pages/referAfriend/referAfriend.module#referAfriendModule', canActivate: [UserService] },
      { path: 'feedback', loadChildren: 'app/pages/feedback/feedback.module#feedbackModule', canActivate: [UserService] }
     
    ]
  },
  
];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
