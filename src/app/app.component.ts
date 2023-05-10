import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'examAngular';
  translateService: TranslateService;
  currentLanguage:string = 'en';
  languages: string[]= ['en', 'fr', 'es'];

  constructor(translate: TranslateService) {
    this.translateService = translate;
    this.translateService.setDefaultLang('en')
    let storageLang = localStorage.getItem('selectedLanguage');
    if (storageLang && storageLang in this.languages){
      this.currentLanguage = storageLang;
    } else if (navigator.language && navigator.language in this.languages) {
      this.currentLanguage = navigator.language;
    }
    this.languageUpdated()

  }

  languageUpdated() {
    localStorage.setItem('selectedLanguage', this.currentLanguage);
    this.translateService.use(this.currentLanguage);
  }



}
