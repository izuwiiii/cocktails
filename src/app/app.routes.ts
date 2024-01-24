import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchByIngredientsPageComponent } from './pages/search-by-ingredients-page/search-by-ingredients-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/Main', pathMatch: 'full' },
    { path: 'Main', component: MainPageComponent },
    { path: 'SearchByIngredientsPage', component: SearchByIngredientsPageComponent }
];
