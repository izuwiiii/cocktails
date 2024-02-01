import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchByIngredientsPageComponent } from './pages/search-by-ingredients-page/search-by-ingredients-page.component';
import { DrinkPageComponent } from './pages/drink-page/drink-page.component';
import { SearchByNamePageComponent } from './pages/search-by-name-page/search-by-name-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/Main', pathMatch: 'full' },
    { path: 'Main', component: MainPageComponent },
    { path: 'SearchByIngredientsPage', component: SearchByIngredientsPageComponent },
    { path: 'Drink/:id', component: DrinkPageComponent },
    { path: 'SearchDrinks', component: SearchByNamePageComponent }
];
