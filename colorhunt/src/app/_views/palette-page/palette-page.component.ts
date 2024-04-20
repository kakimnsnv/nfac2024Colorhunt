import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Palette } from '../../_models/palette';
import { PalettesService } from '../../_services/palettes.service';
import { ClipboardService } from 'ngx-clipboard';
import { SavedService } from '../../_services/saved.service';

@Component({
  selector: 'app-palette-page',
  templateUrl: './palette-page.component.html',
  styleUrl: './palette-page.component.css',
})
export class PalettePageComponent implements OnInit {
  @Input() palette!: Palette;
  @Input() isNew: boolean = false;
  color: string = '#000000';
  constructor(
    private route: ActivatedRoute,
    private palettesService: PalettesService,
    private clipboardService: ClipboardService,
    private savedService: SavedService
  ) {}

  ngOnInit(): void {
    if (!this.isNew) {
      this.palettesService
        .getPalette(Number(this.route.snapshot.paramMap.get('id')))
        .subscribe((palette) => {
          this.palette = palette;
        });
    }
  }

  copy(color: string) {
    this.clipboardService.copyFromContent(color);
  }

  change() {
    this.palettesService.updatePalette(this.palette);
    if (this.savedService.isSaved(this.palette)) {
      this.savedService.removePalette(this.palette);
      this.savedService.savePalette(this.palette);
    }
  }
}
