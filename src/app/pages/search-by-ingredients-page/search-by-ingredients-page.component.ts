import { Component, OnInit } from '@angular/core';
import { CocktailsDBService } from '../../services/cocktails-db.service';
import { HeaderComponent } from '../../components/header/header.component';
import { CocktailCardComponent } from '../../components/cocktail-card/cocktail-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-by-ingredients-page',
  standalone: true,
  imports: [HeaderComponent, CocktailCardComponent, CommonModule],
  templateUrl: './search-by-ingredients-page.component.html',
  styleUrl: './search-by-ingredients-page.component.scss'
})
export class SearchByIngredientsPageComponent implements OnInit {
  constructor(private cocktailsDBService: CocktailsDBService) {}

  cocktailsDB = this.cocktailsDBService

  ngOnInit(): void {
    this.cocktailsDBService.searchByIngredient(this.cocktailsDBService.curIngredient)
  }
}
