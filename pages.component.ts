import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'pages',
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <!--- <div class="al-footer-right">
      <img class="footerLogo" src="{{ ( 'app/new-logo1.jpg' | baAppPicture ) }}" /></div>-->
      <div class="al-footer-main clearfix">
        <div class="al-copy">Copyright &copy; FSS 2017. All Rights Reserved.</div>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {

  constructor(private _menuService: BaMenuService,private translate: TranslateService) {
    // translate.addLangs(["en", "ta"]);
    // translate.setDefaultLang('ta');
    // translate.use('ta');
    //  let browserLang = translate.getBrowserLang();
    //     translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  
}
//  changeLang(lang){
//       console.log(lang);
//       this.translate.use(lang);
//     }
//     getCurrentLang(){
//       console.log(this.translate.getBrowserLang());
//     }
  
  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
