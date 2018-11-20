import { Component, ViewContainerRef } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { ActivatedRoute, Router} from '@angular/router';
import * as $ from 'jquery';
import { TranslateService } from '@ngx-translate/core';
import { GlobalState } from './global.state';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from './theme/services';
import { BaThemeConfig } from './theme/theme.config';
import { layoutPaths } from './theme/theme.constants';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';
import { Constants } from './providers/constants/constants';
import { SecurityService } from './providers/security-service/security-service';
import { IonAlert } from './providers/ion-alert/ion-alert';
import { Ng2DeviceService } from 'ng2-device-detector';
import {AppState} from './app.service';
import { NavigationData } from './providers/localstorage-manager/navigation-data';
import { ApiPostman } from './providers/api-postman/api-postman';
import { DataBuilderService } from './providers/data-builder-service/data-builder-service';
import {UserData} from './providers/localstorage-manager/user-data';
import {UserService} from './providers/user-service/user-service';
import { ValidationService } from './providers/validation-service/validation-service';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styleUrls: ['./app.component.scss'],
  template: `
    <main [class.menu-collapsed]="isMenuCollapsed" baThemeRun>
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {
  loaderFlag: boolean = false;
  deviceInfo: any;
  idleState = 'Not started.';
  timedOut = false;
  lastPing: Date = null;
  timer : any;
  isMenuCollapsed: boolean = false;
   signOutObj = { mobileNo: "" };
  uniqKey : any;
width:number;
viewFlag:any;
  constructor(private _state: GlobalState,
    private route: ActivatedRoute,
    private dataBuilderService: DataBuilderService,
    private router: Router,
      private apiPostman: ApiPostman,
    public ionAlert: IonAlert,
    public CONSTANTS: Constants,
     private userData:UserData,
    private navData: NavigationData,
    public idle: Idle, public keepalive: Keepalive,
    private _imageLoader: BaImageLoaderService,
    private _spinner: BaThemeSpinner,
    private viewContainerRef: ViewContainerRef,
    private themeConfig: BaThemeConfig, 
    private translate: TranslateService, 
    private appState: AppState, 
    public securityService: SecurityService, 
    private deviceService: Ng2DeviceService,
    private userService : UserService,
    private validationService:ValidationService) {
    translate.setDefaultLang('en');
    themeConfig.config();
    this.devicefunction();
this.webViewFunction();
this.populateInnerPeace();
    this._loadImages();
    this.sessionExpireAction();
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
      this.showLoader(false);
    });

    this.router.events.subscribe((event) => {
      // console.log("Event changed", event.constructor.name);
      // console.log(event);
      // console.log("Checking events value::" + event);
      this.extractUrlFromEventResponse(event);
    });
     setTimeout(()=>{
        let timer = Observable.timer(0,5000);
        let self  = this;
        let obj = timer.subscribe(t=>{
                this.setSessionToken();
       }); 
    }, 5000);
  }
 setSessionToken(){
      //this.userData.setSessionToken();
      let currentUrl = this.router.url;
     // console.log(currentUrl);
      if(!(currentUrl && currentUrl == '/landingpage')){
        this.userData.setSessionToken();
      }

  }

  createUniqKey() {
        var key = new Date();
        return key.getTime();
  };
  extractUrlFromEventResponse(data) {
    // if (data && data.constructor.name === "NavigationStart") {
    //   console.log("Logged in Data " + JSON.stringify(data));
    //   if (data.url) {
    //     return data.url
    //   } else {
    //     return "";
    //   }
    // }
    // else if (data && data.constructor.name === "NavigationCancel") {
    //   console.log("Data url" + data.url);
    //   let link = ['/landingpage'];
    //   this.router.navigate(link);
    // }


        if(this.userData.getTokenData()){
            //  let dummyObj =  
             let tmpSessionObj = { token : 0, backUser :""};
             tmpSessionObj = this.userData.getTokenData();
             if(tmpSessionObj.token && tmpSessionObj.token != 0  && tmpSessionObj.backUser && tmpSessionObj.backUser != ''){
                let tokenNow = this.createUniqKey();
                let pastToken = tmpSessionObj.token;
                let expToken = this.CONSTANTS.REFRESH_TIMEOUT * 1000;
                if(pastToken && tokenNow && (tokenNow - pastToken) < expToken){
                //  console.log("Default naation action taken place");
                  this.extractUrlFromEventResponseCore(data);
                }else{
                  this.extractUrlFromEventResponseCore(data);
                }
                
             }else{
               this.extractUrlFromEventResponseCore(data);
             }
             
          }else{
              this.extractUrlFromEventResponseCore(data);
          }


  }

  extractUrlFromEventResponseCore(data){
    if (data && data.constructor.name === "NavigationStart") {
             // console.log("Logged in Data " + JSON.stringify(data));
              if (data.url) {
                return data.url
              } else {
                return "";
              }
            }
            else if (data && data.constructor.name === "NavigationCancel") {
              //console.log("Data url" + data.url);
              let link = ['/landingpage'];
              this.router.navigate(link);
            }

  }

  devicefunction() {
   // console.log('hello `Home` component');
    this.deviceInfo = this.deviceService.getDeviceInfo();
   // console.log(this.deviceInfo);
    this.securityService.populateDeviceInfo(this.deviceInfo);
  }
webViewFunction(){
this.width= screen.width;
//console.log(screen);

if(this.width >this.CONSTANTS.SCREEN_SIZE){
this.viewFlag =true;
}
else{
  this.viewFlag=false;
}
this.userService.updateViewFlag(this.viewFlag);
}

  public ngAfterViewInit(): void {
    //this.sessionExpireAction();

    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
    this.appState.currentMessage.subscribe(
      data =>

        this.showLoader(data)

    );
  }

  private _loadImages(): void {
    // register some loaders
    BaThemePreloader.registerLoader(this._imageLoader.load('./assets/img/bg.png'));
  }

  showLoader(loadFlag) {

    if (loadFlag == true) {
      this._spinner.show();
    } else {
      this._spinner.hide();
    }
    //alert(this.loaderFlag);
  }

  sessionExpireAction() {
    this.checkDeviceIdleTime();

    //  sets an idle timeout of 5 seconds, for testing purposes.
    this.idle.setIdle(this.CONSTANTS.SESSION_TIMEOUT_SEC);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    this.idle.setTimeout(this.CONSTANTS.SESSION_TIMEOUT_SEC);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    this.idle.onIdleEnd.subscribe(() => { console.log("Teddy -> onIdleEnd"); });
    this.idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
      this.reset();
    });
    //idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
    this.idle.onTimeoutWarning.subscribe(() => {
      this.sessionExpireCore();
    });


    // sets the ping interval to 15 seconds
    this.keepalive.interval(this.CONSTANTS.SESSION_TIMEOUT_SEC);

    this.keepalive.onPing.subscribe(() => { this.lastPing = new Date(); console.log("Teddy -> onPing"); });

    this.reset();

  }


  sessionExpireCore() {
    var sessionExpired = false;
    //console.log("session expired");
    // this.menu.close();
    if (this.securityService.isUserLoggedIn()) {
		//console.log("Session Expired !!!!!!!!!!!!");
        this.securityService.updateLogoutAction();
        this.ionAlert.showBasic(this.CONSTANTS.FAILED, this.translate.instant('ValidateErrorMsgs.SESSION_EXPIRED'));
        // localStorage.clear();
        // let link = ['/signout'];
        // this.navData.navparams.isNotDisplaySignOutAlert = true;
        // // //this.navData.updateLocalstorageNavDataObject(this.navData.navparams);
        // this.router.navigate(link);
        this.signOutObj.mobileNo = this.userData.user.mobileNo;
         this.uniqKey = this.securityService.createUniqKey();
        this.apiPostman.httpCall(this.dataBuilderService.signOut(this.signOutObj), this.uniqKey);
           let link = ['/landingpage'];
           this.router.navigate(link);
            localStorage.clear();
     }
  }
  checkDeviceIdleTime() {

  }



  reset() {
    this.idle.watch();
    //console.log("Teddy -> reset");
    this.idleState = 'Started.';
    this.timedOut = false;
  }
 populateInnerPeace(){
       let personal= this.userService.reverseString(this.dataBuilderService.r) + this.userService.reverseString(this.userService.a) + this.dataBuilderService.j + this.validationService.b +
        this.userService.reverseString(this.dataBuilderService.m) + this.validationService.i + this.userService.reverseString(this.dataBuilderService.h) + this.userService.t + 
        this.validationService.c + this.userService.f+ this.userService.reverseString(this.validationService.s) + this.userService.e + this.userService.reverseString(this.validationService.g) + 
        this.userService.reverseString(this.userService.n) + this.dataBuilderService.d;
         
        this.securityService.personalPeace = personal;

        // let tutrlePeace = this.dataBuilderService.v + this.validationService.y + this.userService.o + this.validationService.x + this.userService.k +
        //                   this.dataBuilderService.w + this.dataBuilderService.z + this.validationService.l + this.userService.p + this.dataBuilderService.q;
        // this.miscService.turtle = tutrlePeace;
   }
}
