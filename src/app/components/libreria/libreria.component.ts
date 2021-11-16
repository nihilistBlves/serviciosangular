import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit {
  public comics: Array<Comic>;
  public comic!: Comic;
  public favorito!: Comic;

  constructor(private _service: ComicsService) {
    this.comics = _service.getComics();
    this.comic = new Comic("","","");
  }

  ngOnInit(): void {
  }

  crearComic():void {
    var nuevoComic = new Comic(this.comic.titulo, this.comic.imagen, this.comic.descripcion);
    this.comics.push(nuevoComic);
  }

  modificarComicPadre(event: any): void {
    var nuevoComic = new Comic(this.comic.titulo, this.comic.imagen, this.comic.descripcion);
    this.comics[event] = nuevoComic;
  }

  eliminarComicPadre(event: any): void {
    this.comics.splice(event, 1);
  }

  favoritoComicPadre(event: Comic): void {
    this.favorito = event;
  }

}
