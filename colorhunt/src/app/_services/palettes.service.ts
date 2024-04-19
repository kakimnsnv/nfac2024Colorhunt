import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Palette } from '../_models/palette';

@Injectable({
  providedIn: 'root',
})
export class PalettesService {
  constructor(private http: HttpClient) {}

  value: Palette[] = [];

  private api = 'https://kakimnsnv.pythonanywhere.com/api/';

  async getPalettes() {
    await this.http
      .get<Palette[]>(this.api + 'palettes/')
      .subscribe((data) => (this.value = data));
    return this.value;
    // return this.http.get<Palette[]>(this.api + 'palettes/');
  }

  getPalette(id: number) {
    return this.http.get<Palette>(this.api + 'palettes/' + id);
  }

  savePalette(palette: Palette) {
    return this.http.post<Palette>(this.api + 'palettes/', palette);
  }

  deletePalette(id: number) {
    return this.http.delete(this.api + 'palettes/' + id);
  }

  updatePalette(palette: Palette) {
    return this.http.put(this.api + 'palettes/' + palette.id, palette);
  }
}
