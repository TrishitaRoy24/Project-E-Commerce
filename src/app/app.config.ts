import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {

  // imports: [RouterModule.forRoot(routes)],
  // exports: [RouterModule],
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};
