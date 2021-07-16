import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Giphy, Data } from '../models/interfaceAPI';

const APIKEY = 'uZu3J3enzJMtTQlIyerboCJGkUE2SDxi';
const URL = 'https://api.giphy.com/v1/gifs';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _histories: string[] = [];
  public results: Data[] = [];

  constructor(private _http: HttpClient) {
    this._histories = JSON.parse(localStorage.getItem('histories')!) || [];
    this.results = JSON.parse(localStorage.getItem('gifs')!) || [];
  }

  get histories(): string[] {
    return [...this._histories];
  }

  searchGifs(query: string) {
    query = query.toLowerCase();
    const exist = this._histories.includes(query);

    if (!exist) {
      this._histories = this._histories.splice(0, 9);
      this._histories.unshift(query);

      localStorage.setItem('histories', JSON.stringify(this._histories));
    }

    this.getGifs(query);
  }

  getGifs(query: string): void {
    const params = new HttpParams()
      .set('api_key', APIKEY)
      .set('q', query)
      .set('limit', '10');

    this._http.get<Giphy>(`${URL}/search`, { params }).subscribe((response) => {
      this.results = response.data;
      localStorage.setItem('gifs', JSON.stringify(this.results));
    });
  }
}
