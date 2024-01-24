import { Component, OnInit } from '@angular/core';
import { CocktailsDBService } from '../../services/cocktails-db.service';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-search-by-ingredients-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './search-by-ingredients-page.component.html',
  styleUrl: './search-by-ingredients-page.component.scss'
})
export class SearchByIngredientsPageComponent implements OnInit {
  constructor(private cocktailsDBService: CocktailsDBService) {}

  ngOnInit(): void {
    this.cocktailsDBService.searchByIngredient(this.cocktailsDBService.curIngredient)
  }
}
