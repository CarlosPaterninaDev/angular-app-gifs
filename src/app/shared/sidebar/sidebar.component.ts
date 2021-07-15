import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  constructor(private _gifsService: GifsService) {}

  get histories() {
    return this._gifsService.histories;
  }

  ngOnInit(): void {}
}
