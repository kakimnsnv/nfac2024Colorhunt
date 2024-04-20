import { Component, OnInit } from '@angular/core';
import { Palette } from '../../_models/palette';
import { PalettesService } from '../../_services/palettes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  palettes!: Palette[];
  loaded: boolean = false;

  constructor(private palettesService: PalettesService) {}

  ngOnInit(): void {
    this.loadPalettes();
  }

  loadPalettes(): void {
    this.palettesService.getPalettes().subscribe((data) => {
      this.palettes = data;
      this.loaded = true;
    });
  }
}
