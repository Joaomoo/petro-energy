import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProjetoSocial {
  id: number;
  nome: string;
  descricao: string;
  beneficiarios: string;
  municipios: number;
  icone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  private apiUrl = 'http://localhost:3000/projetos_sociais';

  constructor(private http: HttpClient) {}

  // Busca todos os projetos sociais
  getProjetosSociais(): Observable<ProjetoSocial[]> {
    return this.http.get<ProjetoSocial[]>(this.apiUrl);
  }
}
