import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ConversionTypeBtnComponent } from './components/conversion-type-btn/conversion-type-btn.component';
import { LengthTypeScrollbarComponent } from './components/length-type-scrollbar/length-type-scrollbar.component';
import { HistoryService } from './services/history.service';
import { SettingsService } from './services/settings.service';

@NgModule({
  declarations: [
    AppComponent,
    ConversionTypeBtnComponent,
    LengthTypeScrollbarComponent,
  ],
  imports: [BrowserModule, CommonModule, AppRoutingModule, FormsModule],
  providers: [HistoryService, SettingsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
