import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Cat } from '../data/cat.model';
import { CatService } from '../data/cat.service';
import { AaaaDirrrrective, DetailsComponent, Dirrrrective } from '../details/details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(DetailsComponent)
  private detailsComponent = {} as DetailsComponent;

  @ViewChild(Dirrrrective)
  private dirrrective: Dirrrrective = {} as Dirrrrective;

  @ViewChild(AaaaDirrrrective)
  private aaaaDirc: AaaaDirrrrective = {} as AaaaDirrrrective;

  @ViewChild('title')
  private titleVC = {} as ElementRef;

  currentCat?: Cat;
  refresh = false;

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.catService.getAll().subscribe();
   }

  ngAfterViewInit() {
    console.log('AFTER VW INITTTT');
  }

  formSubmitted(cat: Cat): void {
    console.log('Cat updateEvent : ', cat);
    this.currentCat = cat;
    this.refresh = true;
  }

  onClick(): void {
    this.detailsComponent.isInitialized = !this.detailsComponent?.isInitialized;
    this.dirrrective.change('blue');
    this.titleVC.nativeElement.style.color = 'green';
    this.detailsComponent.subTitleVC.nativeElement.style.color = "orange";
    this.aaaaDirc.change('fuchsia')
  }

}
