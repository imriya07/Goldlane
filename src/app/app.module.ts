import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DigitalComponent } from './component/digital/digital.component';
import { GoldlaneComponent } from './component/goldlane/goldlane.component';
import { FeaturesComponent } from './component/features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DigitalComponent,
    GoldlaneComponent,
    FeaturesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
