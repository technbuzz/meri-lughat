import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { key } from '../../environment/environment';

@Injectable()
export class TranslationProvider {


  constructor(public http: HttpClient) {
    console.log('Hello TranslationProvider Provider');
  }

  getYandex(sourceText){
    const baseUrl = 'https://translate.yandex.net/api/v1.5/tr.json/translate?';
    const path = `${baseUrl}key=${key.yandex}&text=${sourceText}&lang=ur&format=plain`;
    return this.http.get(path);
  }

}
