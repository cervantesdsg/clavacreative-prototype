# Clava Creative

Site em React com Vite. Os componentes ficam em `src/App.jsx`, os estilos responsivos em `styles.css` e os ativos estáticos em `public/assets`.

## Comandos

- `npm install` instala as dependências.
- `npm run dev` inicia o servidor local.
- `npm run build` gera a versão de produção em `dist/`.
- `npm run preview` abre localmente a versão compilada.

## Publicação

O projeto é publicado pelo GitHub Actions em [https://cervantesdsg.github.io/clavacreative-prototype/](https://cervantesdsg.github.io/clavacreative-prototype/).
O workflow configura a base do Vite para o caminho do repositório e publica o conteúdo de `dist/` no GitHub Pages a cada push na branch `main`.
