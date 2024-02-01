import { Component, OnInit } from '@angular/core';
import { CocktailsDBService } from '../../services/cocktails-db.service';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {

  constructor(private cocktailsDB: CocktailsDBService, private router: Router) {}

  cocktailsDBService = this.cocktailsDB;


  ngOnInit(): void {
    if (!this.cocktailsDBService.rendered) {
      this.cocktailsDB.getMenu()
    }
  }

  getIngr(event) {
    this.cocktailsDBService.curIngredient = event.target.textContent
    this.router.navigateByUrl('/SearchByIngredientsPage')
  }

  tryNext() {
    this.cocktailsDB.getMenu()

  }


}
