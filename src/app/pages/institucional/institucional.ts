import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-institucional',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './institucional.html',
  styleUrls: ['./institucional.css']
})
export class InstitucionalComponent {

  // Dados estáticos da página institucional (não vêm da API)
  valores = [
    {
      titulo: 'Segurança',
      descricao: 'Nenhum resultado justifica comprometer a segurança de nossas pessoas, comunidades e meio ambiente.'
    },
    {
      titulo: 'Inovação',
      descricao: 'Investimos continuamente em tecnologia e conhecimento para superar os desafios da exploração energética.'
    },
    {
      titulo: 'Integridade',
      descricao: 'Agimos com transparência e ética em todas as nossas relações — com parceiros, colaboradores e sociedade.'
    },
    {
      titulo: 'Responsabilidade',
      descricao: 'Reconhecemos nosso papel no desenvolvimento das comunidades e na sustentabilidade do planeta.'
    }
  ];

  historiaMarcos = [
    { ano: '1979', evento: 'Fundação da Petro Energy no Rio de Janeiro com foco em exploração onshore.' },
    { ano: '1987', evento: 'Primeira perfuração offshore na Bacia de Campos. Início da era submarina.' },
    { ano: '1998', evento: 'Abertura de capital na BOVESPA. Captação de R$ 4,2 bilhões para expansão.' },
    { ano: '2007', evento: 'Participação no consórcio que descobriu o Pré-Sal. Marco histórico.' },
    { ano: '2015', evento: 'Inauguração da 10ª plataforma offshore. 1 milhão de barris/dia alcançado.' },
    { ano: '2026', evento: 'Expansão para Margem Equatorial e início do programa de CCS com a Equinor.' }
  ];
}
