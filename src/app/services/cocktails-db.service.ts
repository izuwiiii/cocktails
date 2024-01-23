import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cocktail } from '../Models/Cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailsDBService {

  constructor(private http: HttpClient) { }

  cocktail: Cocktail;
  cocktailImage: string = ''

  getMenu() {
    this.http.get<Cocktail>('https://www.thecocktaildb.com/api/json/v1/1/random.php').subscribe( (item: any) => {
      this.cocktail = item.drinks[0]
      // console.log(this.cocktail)
      this.cocktailImage = this.cocktail.strDrinkThumb
      console.log(this.cocktailImage)
    })
  }



}
