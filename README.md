# Petro Energy — Site Corporativo
**Projeto acadêmico** | Códigos de Alta Performance - WEB | UNG  
Trabalho semestral

---

## Sobre o projeto

Site corporativo fictício da **Petro Energy S.A.**, desenvolvido com **Angular** como Single-Page Application (SPA).  
Utiliza **JSON Server** como API mock para simular um back-end real.

---

## Estrutura de pastas

```
petro-energy/
│
├── db.json                          ← Banco de dados mock (JSON Server)
├── package.json
├── angular.json
├── tsconfig.json
│
└── src/
    ├── index.html                   ← HTML único da SPA
    ├── main.ts                      ← Ponto de entrada da aplicação
    ├── styles.css                   ← Estilos globais + variáveis CSS
    │
    └── app/
        ├── app.ts                   ← Componente raiz
        ├── app.html                 ← Template raiz (navbar + router-outlet + footer)
        ├── app.config.ts            ← Configuração: Router + HttpClient
        ├── app.routes.ts            ← Definição de todas as rotas
        │
        ├── services/
        │   ├── posts.service.ts     ← Comunicação com API de posts
        │   └── projetos.service.ts  ← Comunicação com API de projetos sociais
        │
        ├── components/
        │   ├── navbar/              ← Barra de navegação (fixa, responsiva)
        │   └── footer/              ← Rodapé
        │
        └── pages/
            ├── home/                ← Página inicial com feed dos 3 últimos posts
            ├── post-detalhe/        ← Página de post individual (rota dinâmica /post/:id)
            ├── projetos-sociais/    ← Listagem dos projetos sociais (dados da API)
            └── institucional/       ← História, Missão, Visão e Valores (dados estáticos)
```

---

## Como rodar

### Pré-requisitos
- Node.js 18+ instalado
- npm instalado

### Passo 1 — Instalar dependências
```bash
npm install
```

### Passo 2 — Instalar o JSON Server globalmente (se ainda não tiver)
```bash
npm install -g json-server
```

### Passo 3 — Iniciar a API mock (em um terminal)
```bash
npm run api
# Acesse: http://localhost:3000/posts
# Acesse: http://localhost:3000/projetos_sociais
```

### Passo 4 — Iniciar o Angular (em outro terminal)
```bash
npm start
# Acesse: http://localhost:4200
```

---

## Rotas da aplicação

| Rota | Componente | Descrição |
|------|------------|-----------|
| `/` | HomeComponent | Página inicial com feed dos 3 últimos posts |
| `/post/:id` | PostDetalheComponent | Post completo (rota com parâmetro dinâmico) |
| `/projetos-sociais` | ProjetosSociaisComponent | Projetos sociais (dados da API) |
| `/institucional` | InstitucionalComponent | História, Missão, Visão e Valores |
| `/**` | — | Redireciona para `/` |

---

## Critérios do trabalho atendidos

| Critério | Pontos | Como foi atendido |
|----------|--------|-------------------|
| Tratamento visual / Layout / Responsividade | 3pts | Design industrial dourado/preto, grid responsivo, mobile-first |
| Estrutura de componentes / Arquitetura | 3pts | Componentes standalone, services separados, pages isoladas |
| Comunicação com Back-End | 2pts | HttpClient + JSON Server, dois services distintos |
| Adesão ao tema / Requisitos | 2pts | Feed de posts, detalhe, projetos sociais, institucional |

---

## Endpoints da API (JSON Server)

```
GET    http://localhost:3000/posts                    → todos os posts
GET    http://localhost:3000/posts?_sort=data&_order=desc&_limit=3  → 3 últimos
GET    http://localhost:3000/posts/:id                → post específico
GET    http://localhost:3000/projetos_sociais         → todos os projetos
```

---

## Tecnologias utilizadas

- **Angular 19** — Framework SPA
- **TypeScript** — Tipagem estática
- **RxJS** — Programação reativa (Observables)
- **JSON Server** — API REST mock
- **CSS puro** — Sem frameworks de UI (Bootstrap, Tailwind etc.)
- **Google Fonts** — Oswald + Source Serif 4

---

*Projeto fictício desenvolvido para fins acadêmicos. Todas as informações sobre empresa, projetos e descobertas são inventadas.*
# petro-energy
