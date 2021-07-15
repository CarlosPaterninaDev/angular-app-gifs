import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
  @ViewChild('inputSearch') inputSearch!: ElementRef<HTMLInputElement>;

  constructor(private _gifsService: GifsService) {}

  ngOnInit(): void {}

  search() {
    const value = this.inputSearch.nativeElement.value;

    if (value.trim().length) {
      this._gifsService.searchGifs(value);
      this.inputSearch.nativeElement.value = '';
    }
  }
}
