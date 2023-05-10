import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examAngular';
  translateService: TranslateService;
  currentLanguage = 'en';
  languages = ['en', 'fr', 'es'];

  constructor(translate: TranslateService) {
    this.translateService = translate;
    this.translateService.setDefaultLang('en')
    let storageLang = localStorage.getItem('selectedLanguage');
    if (storageLang != null) {
      this.currentLanguage = storageLang;
    } else if (navigator.language != null) {
      if (navigator.language in this.languages) {
        this.currentLanguage = navigator.language;
      }
    }
    this.languageUpdated()

  }

  languageUpdated() {
    localStorage.setItem('selectedLanguage', this.currentLanguage);
    this.translateService.use(this.currentLanguage);
  }



}
