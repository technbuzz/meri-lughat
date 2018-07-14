import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Plugins } from '@capacitor/core';
import { TranslationProvider } from '../../providers/translation/translation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loading: boolean = false;
  sourceText : string = '';
  results: string = '';

  constructor(public navCtrl: NavController, private translate: TranslationProvider) {

  }

  public getItems(){
    if(!this.sourceText){
      return
    }
    
    console.log(this.sourceText);
    this.loading = true;
    this.translate.getYandex(this.sourceText).subscribe((res:yandexResult) => {
      console.log(res);
      this.results = res.text;
      this.loading = false;
    }, err => {
      this.loading = false;
      console.log(err);
    })
  }

  public grabPhoto(){
    const { Camera } = Plugins;

    Camera.getPhoto({
      quality: 100,
      resultType: 'base64'
    }).then((result) => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    })
  }

}

export interface yandexResult {
  code: number,
  lang: string,
  text: any
}
