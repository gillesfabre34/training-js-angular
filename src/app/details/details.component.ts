import { AfterViewInit, Component, Directive, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Cat } from '../data/cat.model';
import { CatService } from '../data/cat.service';

@Directive({selector: '[zzz]'})
export class  Dirrrrective implements AfterViewInit {

  constructor(private elRef: ElementRef) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.elRef.nativeElement.style.color = 'red';
    }, 3000);
  }

  change(col: string) {
    this.elRef.nativeElement.style.color = col;
  }
}

@Directive({selector: 'p'})
export class  AaaaDirrrrective implements AfterViewInit {

  constructor(private elRef: ElementRef) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.elRef.nativeElement.style.color = 'brown';
    }, 3000);
  }

  change(col: string) {
    this.elRef.nativeElement.style.color = col;
  }
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() cat?: Cat;

  @ViewChild('subTitle')
  public subTitleVC = {} as ElementRef;

  isInitialized = false;

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.catService.get(0).subscribe(cat => {
      console.log('CURRENT CAT', cat);
    });
    setTimeout(() => {
      this.isInitialized = true;
      console.log('TIME FINISHED')
    }, 2000);
  }

}
