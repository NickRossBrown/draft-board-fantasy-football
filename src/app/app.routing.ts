import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DraftBoardComponent } from './draft-board/draft-board.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'draftBoard',
    component: DraftBoardComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
