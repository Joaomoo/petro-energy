import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjetosService, ProjetoSocial } from '../../services/projetos.service';

@Component({
  selector: 'app-projetos-sociais',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projetos-sociais.html',
  styleUrls: ['./projetos-sociais.css']
})
export class ProjetosSociaisComponent implements OnInit {

  projetos = signal<ProjetoSocial[]>([]);
  carregando = signal<boolean>(true);
  erro = signal<string>('');

  // Mapeamento de ícones SVG por tipo
  icones: Record<string, string> = {
    escola: '🏫',
    mar: '🌊',
    formacao: '🎓',
    saude: '❤️'
  };

  constructor(private projetosService: ProjetosService) {}

  ngOnInit() {
    this.projetosService.getProjetosSociais().subscribe({
      next: (data) => {
        this.projetos.set(data);
        this.carregando.set(false);
      },
      error: (err) => {
        this.erro.set('Não foi possível carregar os projetos. Verifique se o servidor está rodando.');
        this.carregando.set(false);
        console.error('Erro ao buscar projetos:', err);
      }
    });
  }

  getIcone(tipo: string): string {
    return this.icones[tipo] || '◆';
  }
}
