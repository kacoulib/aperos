import { HTTP_PROVIDERS } from '@angular/http';

import { appRouterProviders } from './app/app.routes';

import { AppComponent } from './app/components/app.component';

import { bootstrap }    from '@angular/platform-browser-dynamic';


bootstrap(AppComponent, [HTTP_PROVIDERS, appRouterProviders ]);
