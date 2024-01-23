import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/Main', pathMatch: 'full' },
    { path: 'Main', component: MainPageComponent }
];
