import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { YellowBackgroundDirective } from './yellow-background.directive';
import { RedTextDirective } from './red-text.directive';
import { YellowBackgroundHighlightDirective } from './yellow-background-highlight.directive';
import { CountEnterComponent } from './count-enter/count-enter.component';

@NgModule({
  declarations: [
    AppComponent,
    YellowBackgroundDirective,
    RedTextDirective,
    YellowBackgroundHighlightDirective,
    CountEnterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
