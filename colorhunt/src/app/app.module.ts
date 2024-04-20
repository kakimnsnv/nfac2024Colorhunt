import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './_views/home/home.component';
import { SavedComponent } from './_views/saved/saved.component';
import { PaletteComponent } from './_views/palette/palette.component';
import { FormsModule, NgModel } from '@angular/forms';
import { PalettePageComponent } from './_views/palette-page/palette-page.component';
import { ClipboardModule } from 'ngx-clipboard';
import { SavedService } from './_services/saved.service';
import { NewComponent } from './_views/new/new.component';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { PalettesService } from './_services/palettes.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SavedComponent,
    PaletteComponent,
    PalettePageComponent,
    NewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ClipboardModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  providers: [SavedService, PalettesService, provideHttpClient(withFetch())],
  // providers: [provideClientHydration()],
})
export class AppModule {}
