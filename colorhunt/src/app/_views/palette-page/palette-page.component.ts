import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Palette, PaletteTest } from '../../_models/palette';
import { PalettesService } from '../../_services/palettes.service';

@Component({
  selector: 'app-palette-page',
  templateUrl: './palette-page.component.html',
  styleUrl: './palette-page.component.css',
})
export class PalettePageComponent implements OnInit {
  // palette: Palette | undefined;
  palette: PaletteTest | undefined;
  color: string = '#000000';
  constructor(
    private route: ActivatedRoute,
    private palettesService: PalettesService
  ) {}

  ngOnInit(): void {
    // this.palettesService
    //   .getPalette(Number(this.route.snapshot.paramMap.get('id')))
    //   .subscribe((palette) => {
    //     this.palette = palette;
    //   });
  }
}
