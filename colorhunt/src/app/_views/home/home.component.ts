import { Component } from '@angular/core';
import { Palette, palettes, palettesTest } from '../../_models/palette';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  palettes = palettesTest;
}
