import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_views/home/home.component';
import { SavedComponent } from './_views/saved/saved.component';
import { PaletteComponent } from './_views/palette/palette.component';
import { PalettePageComponent } from './_views/palette-page/palette-page.component';
import { NewComponent } from './_views/new/new.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'saved', component: SavedComponent, title: 'Saved' },
  { path: 'palette/:id', component: PalettePageComponent, title: 'Palette' },
  { path: 'new', component: NewComponent, title: 'New' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
