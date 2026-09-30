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

## Metodologia

As quatro etapas seguem o Figma (node `100:29`), com cards clicáveis acima de uma imagem interativa. Mapeamos inicia selecionado; cada botão troca a imagem e destaca a etapa atual. O efeito de cor do DitherVeil foi preservado. A metodologia não utiliza sticky nem animação vinculada ao scroll em nenhum breakpoint.

## Layout atualizado

A página inclui o logo principal no topo, uma faixa de marcas, os indicadores do Figma, depoimentos expansíveis por clique e o contato com fundo gráfico. Os ativos dessas novas áreas estão em `public/assets`; não há URLs temporárias do Figma no site.
