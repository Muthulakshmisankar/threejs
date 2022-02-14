import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawLineComponent } from './draw-line/draw-line.component';
import { CreateTextComponent } from './create-text/create-text.component';
import { HomeComponent } from './home/home.component';
import { ThreedModelComponent } from './threed-model/threed-model.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawLineComponent,
    CreateTextComponent,
    HomeComponent,
    ThreedModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
