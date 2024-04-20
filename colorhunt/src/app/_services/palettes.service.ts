import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Palette } from '../_models/palette';
@Injectable({
  providedIn: 'root',
})
export class PalettesService {
  constructor(private http: HttpClient) {}

  value: Palette[] = [];

  // private api = 'https://kakimnsnv.pythonanywhere.com/api/';
  private api = 'http://127.0.0.1:8000/api/palettes/';

  getPalettes() {
    return this.http.get<Palette[]>(this.api);
  }

  getPalette(id: number) {
    return this.http.get<Palette>(this.api + String(id));
  }

  savePalette(palette: Palette) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http
      .post<Palette>(this.api, this.toFormat(palette), {
        headers: headers,
      })
      .subscribe();
  }

  deletePalette(id: number) {
    return this.http.delete(this.api + String(id)).subscribe();
  }

  updatePalette(palette: Palette) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let res = this.http
      .put<Palette>(this.api + String(palette.id), this.toFormat(palette), {
        headers: headers,
      })
      .subscribe();
  }

  toFormat(palette: Palette) {
    return {
      id: palette.id,
      likes: palette.likes,
      color1: palette.color1,
      color2: palette.color2,
      color3: palette.color3,
      color4: palette.color4,
    };
  }
}
