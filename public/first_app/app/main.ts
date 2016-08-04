import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './components/front/app.component';
import { appRouterProviders } from './app.routes';

// http
import {HTTP_PROVIDERS} from '@angular/http';


// determinate which component should be use in the site initialisation
// and inject the appRouterProviers into all the site
bootstrap(AppComponent, [
  appRouterProviders, HTTP_PROVIDERS
]);

