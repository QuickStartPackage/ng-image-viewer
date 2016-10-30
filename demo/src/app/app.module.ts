import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent }  from './app.component';
import { ImageViewerModule } from '../../../src';

@NgModule({
  imports: [BrowserModule, CommonModule, ImageViewerModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
