import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Giphy, Data } from '../models/interfaceAPI';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _histories: string[] = [];
  public results!: Observable<Data[]>;

  constructor(private _http: HttpClient) {}

  get histories(): string[] {
    return [...this._histories];
  }

  searchGifs(query: string) {
    query = query.toLowerCase();
    const exist = this._histories.includes(query);

    if (!exist) {
      this._histories = this._histories.splice(0, 9);
      this._histories.unshift(query);
    }

    this.results = this.getGifs(query);
  }

  getGifs(query: string): Observable<Data[]> {
    return this._http
      .get<Giphy>(
        `https://api.giphy.com/v1/gifs/search?api_key=uZu3J3enzJMtTQlIyerboCJGkUE2SDxi&q=${query}&limit=15`
      )
      .pipe(map((data) => data.data));
  }
}
