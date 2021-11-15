import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  @Input() comic!: Comic;
  @Output() modificarComic = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  modificarComicHijo(): void {
    this.modificarComic.emit(this.comic);
  }

}
