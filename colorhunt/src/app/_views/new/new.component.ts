import { Component, OnInit } from '@angular/core';
import { Palette } from '../../_models/palette';
import { PalettesService } from '../../_services/palettes.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrl: './new.component.css',
})
export class NewComponent {
  palette: Palette = {
    id: 10,
    likes: 0,
    color1: '#212121',
    color2: '#424242',
    color3: '#616161',
    color4: '#757575',
  };
  constructor(private palettesService: PalettesService) {}
}
