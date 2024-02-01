import { CocktailsDBService } from './../../services/cocktails-db.service';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor( private cocktailsDBService:CocktailsDBService ) {
    // console.log(this.cDBs.curCard)
  }

  cDBs = this.cocktailsDBService

  @Input()
  card;

}
