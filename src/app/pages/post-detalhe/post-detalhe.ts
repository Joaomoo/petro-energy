import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostsService, Post } from '../../services/posts.service';

@Component({
  selector: 'app-post-detalhe',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './post-detalhe.html',
  styleUrls: ['./post-detalhe.css']
})
export class PostDetalheComponent implements OnInit {

  post = signal<Post | null>(null);
  carregando = signal<boolean>(true);
  erro = signal<string>('');

  constructor(
    private route: ActivatedRoute,      // acessa os parâmetros da rota (/post/:id)
    private postsService: PostsService  // serviço que faz a requisição à API
  ) {}

  ngOnInit() {
    // Lê o parâmetro :id da URL atual
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.postsService.getPostPorId(id).subscribe({
        next: (postData) => {
          this.post.set(postData);
          this.carregando.set(false);
        },
        error: (err) => {
          this.erro.set('Post não encontrado ou servidor indisponível.');
          this.carregando.set(false);
          console.error('Erro ao buscar post:', err);
        }
      });
    }
  }

  formatarData(data: string): string {
    const d = new Date(data + 'T00:00:00');
    return d.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
  }

  // Divide o conteúdo em parágrafos pela quebra de linha dupla
  getParagrafos(conteudo: string): string[] {
    return conteudo.split('\n\n').filter(p => p.trim().length > 0);
  }
}
