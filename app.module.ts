import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule }  from './pages/shared-module/shared-module.module';

/*
* Platform and Environment providers/directives/pipes
*/
import { routing } from './app.routing';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; 
import { SignOutService } from './providers/navlifecycleservices/signout-navservice';
import { MomentModule } from 'angular2-moment'; 

// App is our top level component
import { App } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './theme/nga.module';
import { PagesModule } from './pages/pages.module';
import { ApiPostman } from './providers/api-postman/api-postman';
import { Constants } from './providers/constants/constants';
import { Currency } from './providers/currency-service/currency-service';
import { DataBuilderService } from './providers/data-builder-service/data-builder-service';
import { InAppNotify } from './providers/inAppNotify-service/inAppNotify-service';
import { IonAlert } from './providers/ion-alert/ion-alert';
import { LoaderService } from './providers/loader-service/loader-service';
import { AccountsData } from './providers/localstorage-manager/accounts-data';
import { BillerDownloadData } from './providers/localstorage-manager/billerDownload-data';
import { CategoryDownloadData } from './providers/localstorage-manager/categoryDownload-data';
import { ConfigData } from './providers/localstorage-manager/configurations-data';
import { ContactData } from './providers/localstorage-manager/contact-data';
import { CustInfoData } from './providers/localstorage-manager/custInfo-data';
import { FavouritesData } from './providers/localstorage-manager/favourites-data';
import { FDParamsData } from './providers/localstorage-manager/fdParams-data';
import { RegisterListData } from './providers/localstorage-manager/regBillerList-data';
import { RegionData } from './providers/localstorage-manager/region-data';
import { SettingData } from './providers/localstorage-manager/settings-data';
import { ParamsData } from './providers/localstorage-manager/summary-data';
import { UserData } from './providers/localstorage-manager/user-data';
import { NavigationData } from './providers/localstorage-manager/navigation-data';
import { NotificationData } from './providers/localstorage-manager/notification-data';
import { LogoutService } from './providers/logout-service/logout-service';
import { MiscService } from './providers/misc-service/misc-service';
import { RegionService } from './providers/region-service/region-service';
import { SecurityService } from './providers/security-service/security-service';
import { UserService } from './providers/user-service/user-service';
import { ValidationService } from './providers/validation-service/validation-service';
import { WeatherService } from './providers/wheather-service/wheather-service';
import { BaContentTop}from'./theme/components/baContentTop/baContentTop.component';
import { transactionService}from'./pages/shared-module/transactionHistory/transactionHistory.service';
import { FileDownloadService } from './providers/fileDownload-service/fileDownload-service';
import { AlertModal } from './theme/components/alertModal/alertModal.component';
import { ServiceReqParamsData } from './providers/localstorage-manager/serviceReqParams-data';
import { UtilService } from './providers/misc-service/utility-service';
import { ReferFriendStatusComponent } from './pages/referFriendStatus/referFriendStatus.component';

// Application wide providers
const APP_PROVIDERS = [
    AppState,
    GlobalState
];


export type StoreType = {
    state: InternalStateType,
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};


/**
* `AppModule` is the main entry point into Angular2's bootstraping process
*/
@NgModule({
    bootstrap: [App],
    declarations: [
        App
    ],
    imports: [ // import Angular's modules
        BrowserModule,
        HttpModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MomentModule,
        NgaModule.forRoot(),
        NgbModule.forRoot(),
        NgIdleKeepaliveModule.forRoot(),
        Ng2DeviceDetectorModule.forRoot(),
        PagesModule,
        routing,
	Ng2DeviceDetectorModule.forRoot(),
        SharedModule,
        InfiniteScrollModule
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        APP_PROVIDERS,
        ApiPostman,
        Constants,
        Currency,
        DataBuilderService,
        InAppNotify,
        IonAlert,
        LoaderService,
        AccountsData,
        BillerDownloadData,
        CategoryDownloadData,
        ConfigData,
        ContactData,
        CustInfoData,
        FavouritesData,
        FDParamsData,
        RegisterListData,
        RegionData,
        SettingData,
        ParamsData,
        UserData,
        NotificationData,
        LogoutService,
        MiscService,
        RegionService,
        SecurityService,
        UserService,
        ValidationService,
        WeatherService,
        transactionService,
        FileDownloadService,
		NavigationData,
    	SignOutService ,
        ServiceReqParamsData,
         UtilService,
        InfiniteScrollModule 
    ],
    entryComponents: [AlertModal]
    
})


export class AppModule {


    constructor(public appState: AppState) {
    }
}
