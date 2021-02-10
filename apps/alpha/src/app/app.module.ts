import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AlphaHomeModule, alphaHomeRoutes } from '@abm/alpha/home';
import { SharedModule } from '@abm/shared';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: '', children: alphaHomeRoutes },
        {
          path: 'contact',
          loadChildren: () =>
            import('@abm/alpha/contact').then(
              (module) => module.AlphaContactModule
            ),
        },
      ],
      {
        initialNavigation: 'enabled',
      }
    ),
    AlphaHomeModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
