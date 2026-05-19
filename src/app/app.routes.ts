import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { PostDetalheComponent } from './pages/post-detalhe/post-detalhe';
import { ProjetosSociaisComponent } from './pages/projetos-sociais/projetos-sociais';
import { InstitucionalComponent } from './pages/institucional/institucional';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post/:id', component: PostDetalheComponent },
  { path: 'projetos-sociais', component: ProjetosSociaisComponent },
  { path: 'institucional', component: InstitucionalComponent },
  { path: '**', redirectTo: '' }
];
