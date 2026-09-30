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

As quatro etapas seguem o layout vertical do Figma (node `89:2`), com imagem interativa acima da informação. Os cards se empilham durante o scroll usando CSS sticky e transformações vinculadas ao progresso da rolagem, sem capturar o scroll nem adicionar bibliotecas. O efeito de cor do DitherVeil continua disponível em dispositivos com mouse. No mobile (até 760px), a seção sempre usa cards em sequência, sem prender a tela ou reservar espaço de scroll. Em telas baixas, cards maiores que a área disponível e com preferência por movimento reduzido, a seção usa rolagem normal.

## Layout atualizado

A página inclui o logo principal no topo, uma faixa de marcas, os indicadores do Figma, depoimentos expansíveis por clique e o contato com fundo gráfico. Os ativos dessas novas áreas estão em `public/assets`; não há URLs temporárias do Figma no site.
