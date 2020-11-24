import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as AOS from 'aos';

if (environment.production) {
  enableProdMode();
}

AOS.init();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  
