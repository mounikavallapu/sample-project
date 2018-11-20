import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { Http, HttpModule } from '@angular/http';
// import { AppTranslationModule } from '../app.translation.module';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { manageAccountsService } from '../pages/shared-module/manageAccounts/manageAccounts.service';
import { ChequeserviceService } from '../pages/servicesPage/components/servicesRequest/chequeService/chequeservice.service';
import{ftbankservece}from '../pages/fundtranfer/components/ftBankAccount/ftbankservece.service';
//import{ftUPUservice}from '../pages/fundtranfer/components/ftUPU/ftUPU.service';
import{ftaccount}from '../pages/fundtranfer/components/ownAccount/OAfundTranfer/ftaccountservece.service';
import { FixedDepositserviceService } from '../pages/servicesPage/components/fixedDeposit/fixedDepositService.service';
import {AccountsPageServiceService} from '../pages/accountsPage/accounts-page-service.service';
import {OperativeAccountService} from './accountsPage/operativeAccount/operativeAccountService.service'
import { servicesRequestService } from '../pages/servicesPage/components/servicesRequest/servicesRequest.service';
export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/US/', '.json');
}

import { Pages } from './pages.component';
@NgModule({
  imports: [CommonModule,  
  TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [Http],
      },
      }), NgaModule, routing],
  declarations: [Pages],

  providers: [
    manageAccountsService,ftbankservece,ChequeserviceService,FixedDepositserviceService,
    ftaccount,AccountsPageServiceService,OperativeAccountService,servicesRequestService
  ]
})
export class PagesModule {
}
