import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  @Input() comic!: Comic;
  @Input() index!: any;
  @Output() modificarComic = new EventEmitter();
  @Output() eliminarComic = new EventEmitter();
  @Output() favoritoComic = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  modificarComicHijo(): void {
    this.modificarComic.emit(this.index);
  }

  eliminarComicHijo(): void {
    this.eliminarComic.emit(this.index);
  }
  favoritoComicHijo(): void {
    this.favoritoComic.emit(this.comic);
  }

}
