import { Component, OnInit } from '@angular/core';
import { CocktailsDBService } from '../../services/cocktails-db.service';
import { HeaderComponent } from '../../components/header/header.component';
import { CocktailCardComponent } from '../../components/cocktail-card/cocktail-card.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-by-ingredients-page',
  standalone: true,
  imports: [HeaderComponent, CocktailCardComponent, CommonModule],
  templateUrl: './search-by-ingredients-page.component.html',
  styleUrl: './search-by-ingredients-page.component.scss'
})
export class SearchByIngredientsPageComponent implements OnInit {
  constructor(private cocktailsDBService: CocktailsDBService, private router: Router) {}

  cocktailsDB = this.cocktailsDBService

  ngOnInit(): void {
    this.cocktailsDBService.searchByIngredient(this.cocktailsDBService.curIngredient)
  }

  cocktailPageNavigate(card) {
    console.log("NAV"+card)
    this.cocktailsDBService.curCard = card
    this.router.navigateByUrl('/Drink/'+card)
  }
}
