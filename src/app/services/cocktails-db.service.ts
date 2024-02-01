import { Drinks } from './../Models/Cocktail';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cocktail } from '../Models/Cocktail';
import { RemoveBgResult, RemoveBgError, removeBackgroundFromImageUrl } from "remove.bg";

@Injectable({
  providedIn: 'root'
})
export class CocktailsDBService {

  constructor(private http: HttpClient) { }

  curCard: any[] = [];

  cocktail: Cocktail;
  cocktailID: string;
  curCocktail: Cocktail;
  
  cocktailImage: string = ''
  cocktailTransparentImage: string = ''

  cocktailInstructions: string = ''
  cocktailName: string = ''

  cocktailAlcohol: string;

  curIngredient: string
  cocktailIngredients: any[] = []
  cocktailMeasure: any[] = []

  rendered: boolean = false;

  cocktailsListIngr: any[] = []

  cocktailInput: string = '';
  cocktailsInputNames: any[] = [];

  getIngrFunc(cocktail) {
    let ingr: any[] = []
    for (const key in cocktail) {
      const value = cocktail[key];
      if (value !== null && key.startsWith('strIngredient')) {
        ingr.push(value);
      }
    }
    return (ingr)
  }

  getMesurFunc(cocktail) {
    let mes: any[] = []
    for (const key in cocktail) {
      const value = cocktail[key];
      if (value !== null && key.startsWith('strMeasure')) {
        mes.push(value);
      }
    }
    return (mes)
  }

  getMenu() {
    this.cocktailIngredients = []
    this.cocktailMeasure = []
    this.http.get<Cocktail>('https://www.thecocktaildb.com/api/json/v1/1/random.php').subscribe((item: any) => {
      this.cocktail = item.drinks[0]
      console.log(this.cocktail)
      this.cocktailID = this.cocktail.idDrink
      this.cocktailImage = this.cocktail.strDrinkThumb
      this.cocktailInstructions = this.cocktail.strInstructions
      this.cocktailName = this.cocktail.strDrink

      this.cocktailIngredients = this.getIngrFunc(this.cocktail);
      this.cocktailMeasure = this.getMesurFunc(this.cocktail)

      this.getCocktailDetails(this.cocktailID)
      this.cocktailAlcohol = this.cocktail.strAlcoholic
      this.rendered = true;
    })
  }

  getCocktailDetails(id) {
    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+id.idDrink).subscribe((item: any) => {
      this.curCocktail = item.drinks[0]
      // console.log(id.idDrink)
      // console.log(this.curCocktail)
    })
  }

  searchByIngredient(ingr) {
    console.log(ingr)
    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+(ingr||'Lemon')).subscribe((item:any) => {
      this.cocktailsListIngr = item.drinks
      // console.log(this.cocktailsListIngr)
    })
  }

  searchByName(input) {
    console.log(input)
    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+input).subscribe((item:any) => {
      this.cocktailInput = input
      // console.log(this.cocktailInput)
      this.cocktailsInputNames = item.drinks
      console.log(this.cocktailsInputNames)
    })
  }


  // getEditedImage(img) {
    
  //   const formData = new FormData();
  //   formData.append('size', 'auto');
  //   formData.append('image_url', img);

  //   const apiKey = '1oyqaK7gyPknZvg7Kw12cap4'

  //   return this.http.post(
  //     'https://api.remove.bg/v1.0/removebg', 
  //     {
  //       headers: new HttpHeaders({
  //         'X-Api-Key': apiKey,
  //         'size': 'auto',
  //         'image_url': img
  //       }
  //       )
  //     }
  //   ).subscribe(item => console.log(item))
  // }

}
