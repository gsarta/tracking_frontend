import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic' ;

import { AppModule } from './app/app.module';

import { error } from 'console';


if(!navigator.geolocation) {
  alert('El navegador no soporta la geolocalización')
  throw new Error ('El navegador no soporta la geolocalización');
}




platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
