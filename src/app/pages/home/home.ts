import { Component, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostsService, Post } from '../../services/posts.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

  // signal que armazena os 3 últimos posts vindos da API
  ultimosPosts = signal<Post[]>([]);
  carregando = signal<boolean>(true);
  erro = signal<string>('');

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    // Ao iniciar o componente, busca os 3 últimos posts na API
    this.postsService.getUltimosPosts().subscribe({
      next: (posts) => {
        this.ultimosPosts.set(posts);
        this.carregando.set(false);
      },
      error: (err) => {
        this.erro.set('Não foi possível carregar os posts. Verifique se o servidor está rodando.');
        this.carregando.set(false);
        console.error('Erro ao buscar posts:', err);
      }
    });
  }

  // Formata a data do post para exibição em português
  formatarData(data: string): string {
    const d = new Date(data + 'T00:00:00');
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  }
}
