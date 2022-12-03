import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifsAPIResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  private apiKey: string = 'efWWFJ9TuOcIk07xoBPieDIGkl7FZDyi';
  public resultados: Gif[] = [];

  constructor( private http: HttpClient ) {}

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();
    
    if (!this._historial.includes(query)) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);
    }
    
    this.http.get<GifsAPIResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
      .subscribe( (resp: GifsAPIResponse) => {
        this.resultados = resp.data;
      });
  }

}
