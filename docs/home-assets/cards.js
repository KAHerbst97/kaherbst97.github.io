
import dag from "./widgets/dag.js";
import d_sep from "./widgets/d_sep.js";
import potential_outcomes from "./widgets/potential_outcomes.js";
import win from "./widgets/win.js";

// Change this value to resize all homepage SVG icons.
const ICON_SIZE = 25;

export const cards = [
  {
    id: "dag",
    title: "DAG",
    tab: "DAG",
    description: "Build a causal DAG and explore how conditioning or intervention changes paths.",
    render: dag,
    icon: `<svg aria-hidden="true" viewBox="0 0 40 40" width="${ICON_SIZE}" height="${ICON_SIZE}" style="width:${ICON_SIZE}px;height:${ICON_SIZE}px;flex-shrink:0;" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <!-- Confounding structure -->
      <path d="M18 12L10.5 25.7M22 12L29.5 25.7M13 30H27"/>

      <!-- Arrowheads -->
      <path d="M10 21.8L10.5 25.7L13.8 23.4"/>
      <path d="M26.2 23.4L29.5 25.7L30 21.8"/>
      <path d="M23.8 27L27 30L23.8 33"/>

      <!-- Nodes -->
      <g fill="white" stroke-width="2">
        <circle cx="20" cy="8" r="4"/>
        <circle cx="8" cy="30" r="4"/>
        <circle cx="32" cy="30" r="4"/>
      </g>
    </svg>`,
  },
  {
    id: "d-sep",
    title: "d-separation",
    tab: "d-separation",
    description: "Condition on graph nodes and explore implied conditional independences.",
    render: d_sep,
    icon: `<svg aria-hidden="true" viewBox="0 0 40 40" width="${ICON_SIZE}" height="${ICON_SIZE}" style="width:${ICON_SIZE}px;height:${ICON_SIZE}px;flex-shrink:0;" fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round">
      <path d="M18 7V26M7 26H28" stroke-width="2.8"/>
      <path d="M35 27V36M35 31C33.5 28.5 29 29.5 29 32.5C29 36 33.5 37 35 34.5" stroke-width="1.6"/>
    </svg>`,
  },
  {
    id: "potential-outcomes",
    title: "Potential outcomes",
    tab: "Potential outcomes",
    description: "Explore counterfactual outcomes, causal targets, and treatment assignment.",
    render: potential_outcomes,
    icon: `<svg aria-hidden="true" viewBox="0 0 40 40" width="${ICON_SIZE}" height="${ICON_SIZE}" style="width:${ICON_SIZE}px;height:${ICON_SIZE}px;flex-shrink:0;" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <!-- Left: closed door -->
  <rect x="2" y="5" width="16" height="30"/>
  <circle cx="13.5" cy="20" r="1.8" fill="currentColor" stroke="none"/>

  <!-- Right: opening door -->
  <rect x="22" y="5" width="16" height="30"/>
  <path d="M22 5L32 10V30L22 35Z"/>
  <circle cx="27.5" cy="21" r="1.8" fill="currentColor" stroke="none"/>
</svg>`

,
  },
  {
    id: "win",
    title: "Win statistics",
    tab: "Win statistics",
    description: "Compare two patients across prioritized outcomes.",
    render: win,
    icon: `<svg aria-hidden="true" viewBox="0 0 40 40" width="${ICON_SIZE}" height="${ICON_SIZE}" style="width:${ICON_SIZE}px;height:${ICON_SIZE}px;flex-shrink:0;" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 8h16v10c0 7-4 11-8 11s-8-4-8-11V8Z"/>
      <path d="M12 12H6v3c0 5 4 7 8 7M28 12h6v3c0 5-4 7-8 7"/>
      <path d="M20 29v5M13 35h14"/>
      <path d="m16 17 3 3 5-6" stroke-width="2.5"/>
    </svg>`,
    href: "pages/research/copriority_win.html",
  },
];
