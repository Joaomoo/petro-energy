import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Post {
  id: number;
  titulo: string;
  resumo: string;
  conteudo: string;
  data: string;
  imagem: string;
  categoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  // Busca TODOS os posts (usado para listagem completa se necessário)
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  // Busca apenas os 3 posts mais recentes (usado na Home)
  getUltimosPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl).pipe(
      map(posts => {
        return posts
          .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
          .slice(0, 3);
      })
    );
  }

  // Busca um único post pelo ID (usado na página de detalhe)
  getPostPorId(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  // Busca posts relacionados a um projeto social específico
  getPostsPorProjeto(projetoId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}?categoria=${projetoId}`);
  }
}
