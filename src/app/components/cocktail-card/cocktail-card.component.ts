import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cocktail-card',
  standalone: true,
  imports: [],
  templateUrl: './cocktail-card.component.html',
  styleUrl: './cocktail-card.component.scss'
})
export class CocktailCardComponent {

  @Input()
  name: string;

  @Input()
  image: string;

}
