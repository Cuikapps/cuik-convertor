import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ConversionTypeBtnComponent } from './components/conversion-type-btn/conversion-type-btn.component';
import { ScrollbarComponent } from './components/scrollbar/scrollbar.component';
import { HistoryService } from './services/history.service';
import { SettingsService } from './services/settings.service';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CalculatorService } from './services/calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    ConversionTypeBtnComponent,
    ScrollbarComponent,
    CalculatorComponent,
  ],
  imports: [BrowserModule, CommonModule, AppRoutingModule, FormsModule],
  providers: [HistoryService, SettingsService, CalculatorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
