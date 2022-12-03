import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
    `
      .masonry-item { width: 400px; }
    `
  ]
})
export class ResultadosComponent {

  constructor(private gifsService: GifsService) { }

  get resultados() {
    return this.gifsService.resultados;
  }

}
