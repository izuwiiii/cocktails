import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cocktail } from '../Models/Cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailsDBService {

  constructor(private http: HttpClient) { }

  cocktail: Cocktail;
  cocktailID: string;
  cocktailImage: string = ''
  cocktailInstructions: string = ''
  cocktailName: string = ''

  cocktailAlcohol: string;

  curIngredient: string
  cocktailIngredients: any[] = []
  cocktailMeasure: any[] = []

  rendered: boolean = false;

  cocktailsListIngr: any[] = []

  getMenu() {
    this.http.get<Cocktail>('https://www.thecocktaildb.com/api/json/v1/1/random.php').subscribe((item: any) => {
      this.cocktail = item.drinks[0]
      console.log(this.cocktail)
      this.cocktailID = this.cocktail.idDrink
      this.cocktailImage = this.cocktail.strDrinkThumb
      this.cocktailInstructions = this.cocktail.strInstructions
      this.cocktailName = this.cocktail.strDrink
      for (const key in this.cocktail) {
        const value = this.cocktail[key];
        if (value !== null && key.startsWith('strIngredient')) {
          this.cocktailIngredients.push(value);
        }
        if (value !== null && key.startsWith('strMeasure')) {
          this.cocktailMeasure.push(value);
        }
      }

      this.getCocktailDetails(this.cocktailID)
      this.cocktailAlcohol = this.cocktail.strAlcoholic
      this.rendered = true;
    })
  }

  getCocktailDetails(id) {
    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+id).subscribe((item) => {
      console.log(item)
    })
  }

  searchByIngredient(ingr) {
    console.log(ingr)
    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+(ingr||'Lemon')).subscribe((item:any) => {
      this.cocktailsListIngr = item.drinks
      console.log(this.cocktailsListIngr)
    })
  }


}
