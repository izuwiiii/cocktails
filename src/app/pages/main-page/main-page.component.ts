import { Component, OnInit } from '@angular/core';
import { CocktailsDBService } from '../../services/cocktails-db.service';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {

  constructor(private cocktailsDB: CocktailsDBService) {}

  ngOnInit(): void {
    this.cocktailsDB.getMenu()
  }

  cocktailsDBService = this.cocktailsDB

  cocktailImage: string = this.cocktailsDB.cocktailImage

}
