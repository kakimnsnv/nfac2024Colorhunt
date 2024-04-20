import { Injectable } from '@angular/core';
import { Palette } from '../_models/palette';

@Injectable({
  providedIn: 'root',
})
export class SavedService {
  private localStorageKey = 'savedPalettes';

  constructor() {}

  getSavedPalettes(): Palette[] {
    if (typeof window !== 'undefined') {
      const savedPalettesJson = localStorage.getItem(this.localStorageKey);
      return savedPalettesJson ? JSON.parse(savedPalettesJson) : [];
    } else {
      return [];
    }
  }

  savePalette(palette: Palette): void {
    const savedPalettes = this.getSavedPalettes();
    savedPalettes.push(palette);
    localStorage.setItem(this.localStorageKey, JSON.stringify(savedPalettes));
  }

  removePalette(palette: Palette): void {
    const savedPalettes = this.getSavedPalettes();
    const index = savedPalettes.findIndex((p: Palette) => p.id === palette.id);
    if (index !== -1) {
      savedPalettes.splice(index, 1);
      localStorage.setItem(this.localStorageKey, JSON.stringify(savedPalettes));
    }
  }

  isSaved(palette: Palette): boolean {
    const savedPalettes = this.getSavedPalettes();
    return savedPalettes.some((p: Palette) => p.id == palette.id);
  }
}
