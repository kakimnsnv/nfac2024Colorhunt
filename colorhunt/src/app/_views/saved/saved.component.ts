import { Component, OnInit } from '@angular/core';
import { SavedService } from '../../_services/saved.service';
import { ClipboardService } from 'ngx-clipboard';
import { Palette } from '../../_models/palette';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrl: './saved.component.css',
})
export class SavedComponent implements OnInit {
  // savedPalettes: Palette[] = this.savedService.getSavedPalettes();
  savedPalettes!: Palette[];

  constructor(
    private savedService: SavedService,
    private clipboardService: ClipboardService
  ) {}

  ngOnInit(): void {
    this.savedPalettes = this.savedService.getSavedPalettes();
  }

  copyToClipboard(color: string): void {
    this.clipboardService.copyFromContent(color);
  }
}
