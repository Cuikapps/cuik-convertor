import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversionTypeBtnComponent } from './conversion-type-btn/conversion-type-btn.component';
import { ConversionTypeWeightBtnComponent } from './conversion-type-weight-btn/conversion-type-weight-btn.component';

@NgModule({
  declarations: [AppComponent, ConversionTypeBtnComponent, ConversionTypeWeightBtnComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
