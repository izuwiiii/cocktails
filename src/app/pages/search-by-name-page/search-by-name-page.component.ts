import { Router } from '@angular/router';
import { CocktailCardComponent } from '../../components/cocktail-card/cocktail-card.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CocktailsDBService } from './../../services/cocktails-db.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-search-by-name-page',
  standalone: true,
  imports: [HeaderComponent, CocktailCardComponent, CommonModule, FormsModule],
  templateUrl: './search-by-name-page.component.html',
  styleUrl: './search-by-name-page.component.scss'
})
export class SearchByNamePageComponent implements OnInit {
  constructor(private cocktailsDBService: CocktailsDBService, private router: Router) {}

  cocktailsDB = this.cocktailsDBService

  curInput: string = '';

  ngOnInit() {
    this.cocktailsDBService.searchByName('margarita')
  }

  cocktailPageNavigate(card) {
    console.log("NAV"+card)
    this.cocktailsDBService.curCard = card
    this.router.navigateByUrl('/Drink/'+card)
  }

  checkInp() {
    console.log(this.curInput)
  }
}
