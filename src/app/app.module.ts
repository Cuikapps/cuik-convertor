import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { InViewportModule } from 'ng-in-viewport';

import { AppComponent } from './app.component';
import { ConversionTypeBtnComponent } from './components/conversion-type-btn/conversion-type-btn.component';
import { ScrollbarComponent } from './components/scrollbar/scrollbar.component';
import { HistoryService } from './services/history.service';
import { SettingsService } from './services/settings.service';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CalculatorService } from './services/calculator.service';
import { ConvertorService } from './services/convertor.service';
import { HistoryTabComponent } from './components/history-tab/history-tab.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ButtonBarComponent } from './components/button-bar/button-bar.component';
import { SearchComponent } from './components/search/search.component';

import 'intersection-observer';
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    ConversionTypeBtnComponent,
    ScrollbarComponent,
    CalculatorComponent,
    HistoryTabComponent,
    SettingsComponent,
    ButtonBarComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    InViewportModule,
  ],
  providers: [
    HistoryService,
    SettingsService,
    CalculatorService,
    ConvertorService,
    SearchService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
