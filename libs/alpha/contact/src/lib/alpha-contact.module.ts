import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactViewComponent } from './container/contact-view/contact-view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ContactViewComponent },
    ]),
  ],
  declarations: [ContactViewComponent],
})
export class AlphaContactModule {}
