import { Component, OnInit } from '@angular/core';
import { SavedService } from '../../_services/saved.service';
import { ClipboardService } from 'ngx-clipboard';
import { Palette, palettesTest, PaletteTest } from '../../_models/palette';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrl: './saved.component.css',
})
export class SavedComponent {
  // savedPalettes: Palette[] = this.savedService.getSavedPalettes();
  savedPalettes: PaletteTest[] = palettesTest;

  constructor(
    private savedService: SavedService,
    private clipboardService: ClipboardService
  ) {}

  // ngOnInit(): void {
  //   this.savedPalettes = this.savedService.getSavedPalettes();
  // }

  copyToClipboard(color: string): void {
    this.clipboardService.copyFromContent(color);
  }
}
