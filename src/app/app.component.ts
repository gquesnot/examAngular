import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'examAngular';
  translateService: TranslateService;
  currentLanguage: string = 'en';
  languages: string[] = ['en', 'fr', 'es'];

  constructor(translate: TranslateService) {
    this.translateService = translate;
    this.translateService.setDefaultLang('en')
    let storageLang = localStorage.getItem('selectedLanguage');
    let navigatorLang = navigator.language.split('-')[0];
    if (storageLang && this.languages.includes(storageLang)){
      this.currentLanguage = storageLang;
    } else if (navigatorLang && this.languages.includes(navigatorLang)) {
      this.currentLanguage = navigatorLang
    }
    this.translateService.use(this.currentLanguage);
  }

  languageUpdated() {
    localStorage.setItem('selectedLanguage', this.currentLanguage);
    this.translateService.use(this.currentLanguage);
  }


}
