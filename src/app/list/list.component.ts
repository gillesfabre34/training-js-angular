import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CatService } from '../data/cat.service';
import { Cat } from '../data/cat.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() refresh = false;

  cats: Cat[] = [];

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.catService.cats$.subscribe((cats: Cat[]) => this.cats = cats);
  }

}
