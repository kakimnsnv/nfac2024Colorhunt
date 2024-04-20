import { Component, Input, OnInit } from '@angular/core';
import { Palette } from '../../_models/palette';
import { SavedService } from '../../_services/saved.service';
import { ClipboardService } from 'ngx-clipboard';
import { ActivatedRoute } from '@angular/router';
import { PalettesService } from '../../_services/palettes.service';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrl: './palette.component.css',
})
export class PaletteComponent {
  @Input() palette!: Palette;
  @Input() edit: boolean = false;
  @Input() isNew: boolean = false;
  @Input() i: number = 0;

  constructor(
    private savedService: SavedService,
    private palettesService: PalettesService,
    private clipboardService: ClipboardService
  ) {}

  like(palette: Palette) {
    if (this.savedService.isSaved(palette)) {
      palette.likes--;
      this.savedService.removePalette(palette);
    } else {
      palette.likes++;
      this.savedService.savePalette(palette);
    }
    this.palettesService.updatePalette(palette);
  }

  isLiked(palette: Palette) {
    return this.savedService.isSaved(palette);
  }

  copy(color: string, obj: HTMLElement) {
    this.clipboardService.copyFromContent(color);
    obj.innerHTML += "<div class='copied'>Copied</div>";
    setTimeout(() => {
      obj.innerHTML = obj.innerHTML.replace(
        "<div class='copied'>Copied</div>",
        ''
      );
    }, 1000);
  }

  del() {
    this.palettesService.deletePalette(this.palette.id);
  }
  crt() {
    this.palettesService.savePalette(this.palette);
  }
}
