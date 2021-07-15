import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Data } from '../models/interfaceAPI';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [],
})
export class ResultsComponent implements OnInit {
  constructor(private _gifsService: GifsService) {}

  get results(): Observable<Data[]> {
    return this._gifsService.results;
  }

  ngOnInit(): void {}
}
