import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CocktailsDBService } from '../../services/cocktails-db.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Cocktail } from '../../Models/Cocktail';

@Component({
  selector: 'app-drink-page',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './drink-page.component.html',
  styleUrl: './drink-page.component.scss'
})
export class DrinkPageComponent implements OnInit, AfterViewInit {

  constructor(public cocktailsDBService: CocktailsDBService, private router: Router) {}

  ingr: any[] = []
  mesur: any[] = []

  ngOnInit() {
    console.log("DP"+this.cocktailsDBService.curCocktail)
  } 

  ngAfterViewInit() {
    this.ingr = this.cocktailsDBService.getIngrFunc(this.cocktailsDBService.curCocktail)
    console.log(this.ingr)
    this.mesur = this.cocktailsDBService.getMesurFunc(this.cocktailsDBService.curCocktail)
    console.log(this.mesur)
  }

  getIngr(event) {
    this.cocktailsDBService.curIngredient = event.target.textContent
    this.router.navigateByUrl('/SearchByIngredientsPage')
  }

}
