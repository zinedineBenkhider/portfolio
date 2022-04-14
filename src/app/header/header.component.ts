import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  language:any="";
  constructor(private _translationLoaderService: TranslationLoaderService,private _translateService: TranslateService) {
    this._translationLoaderService.loadTranslations(english, french);
    if(localStorage.getItem("lang")){
      this.language=localStorage.getItem("lang");
    }
    else{
      this.language='fr';
    }
  }

  languageChange($event:any){
    let lang=$event.value;
    localStorage.setItem("lang", lang);
    this._translateService.setDefaultLang(lang);
    this._translateService.use(lang);
  }

  ngOnInit(): void {
    $('.js-scroll-trigger').on('click',
      function (): void {
        $('.navbar-collapse').toggle();
      }
    );
    $('.nav').on('click',
      function (): void {
        $('.navbar-collapse').toggle();
      }
    );
  }
}
