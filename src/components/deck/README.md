# Card Deck

Recurso agnóstico para renderizar un mazo de cards anclado al scroll.
La card frontal sale hacia arriba y las siguientes avanzan desde atrás.

Este recurso no contiene estilos ni contenido específico de testimonios.
Cada instancia define el contenido interno de sus cards mediante slots.

## Uso

```astro
---
import CardDeckSection from "./CardDeckSection.astro";
import CardDeckItem from "./CardDeckItem.astro";
---

<CardDeckSection labelledBy="section-title" class="bg-surface-inverse">
  <div slot="header">
    <h2 id="section-title">Título de la sección</h2>
  </div>

  <CardDeckItem index={0}>
    <article>Contenido de la primera card</article>
  </CardDeckItem>

  <CardDeckItem index={1}>
    <article>Contenido de la segunda card</article>
  </CardDeckItem>
</CardDeckSection>
```

## Componentes

- `CardDeckSection.astro`: estructura, pin y slots.
- `CardDeckItem.astro`: item individual del mazo.
- `../../scripts/card-deck.ts`: motor GSAP/ScrollTrigger.

## Props utiles

- `class`: clases para la seccion principal.
- `headerClass`: clases para el contenedor del header.
- `pinClass`: clases para la zona anclada.
- `stageClass`: clases para el stage donde se superponen las cards.
- `footerSpacerClass`: espacio despues del deck.
