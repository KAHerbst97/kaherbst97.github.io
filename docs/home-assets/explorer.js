import { cards } from "./cards.js";

export function createExplorer(html) {
  const explorer = html`<div class="kh-explore">
    <div class="kh-shelf"><p class="kh-eyebrow">Explore</p><div class="kh-cards"></div></div>
    <div class="kh-workspace" hidden>
      <div class="kh-worknav" role="group" aria-label="Choose an example">
        <button type="button" class="kh-back">← Back to profile</button>
      </div>
    </div>
  </div>`;

  for (const item of cards) {
    const panelId = "kh-" + item.id;
    const card = html`<button type="button" class="kh-card">
      <span class="kh-preview" aria-hidden="true"></span>
      <span><strong></strong><small></small><span class="kh-open"> Widget →</span></span>
    </button>`;
    card.dataset.example = item.id;
    card.setAttribute("aria-controls", panelId);
    card.querySelector("strong").textContent = item.title;
    card.querySelector("small").textContent = item.description;
    card.querySelector(".kh-preview").innerHTML = item.icon ?? "→";
    explorer.querySelector(".kh-cards").append(card);

    const tab = document.createElement("button");
    tab.type = "button";
    tab.dataset.switch = item.id;
    tab.textContent = item.tab ?? item.title;
    tab.setAttribute("aria-controls", panelId);
    tab.setAttribute("aria-pressed", "false");
    explorer.querySelector(".kh-worknav").append(tab);

    const panel = html`<section hidden class="kh-panel"><div data-mount></div></section>`;
    panel.id = panelId;
    panel.setAttribute("aria-label", item.title);
    panel.firstElementChild.dataset.mount = item.id;
    if (item.href) {
      const link = document.createElement("a");
      link.className = "kh-project-link";
      link.href = item.href;
      link.textContent = "Read about " + item.title + " →";
      panel.append(link);
    }
    explorer.querySelector(".kh-workspace").append(panel);
  }
  const shelf = explorer.querySelector('.kh-shelf');
  const workspace = explorer.querySelector('.kh-workspace');
  const back = explorer.querySelector('.kh-back');
  let opener;

  function showExample(key) {
    explorer.closest('.home-grid').classList.add('is-exploring');
    shelf.hidden = true;
    workspace.hidden = false;
    for (const panel of workspace.querySelectorAll('.kh-panel')) panel.hidden = panel.id !== 'kh-' + key;
    for (const button of workspace.querySelectorAll('[data-switch]')) {
      button.setAttribute('aria-pressed', String(button.dataset.switch === key));
    }
    const mount = workspace.querySelector('[data-mount="' + key + '"]');
    if (!mount.firstElementChild) mount.append(cards.find(card => card.id === key).render(html));
  }
  for (const card of shelf.querySelectorAll('[data-example]')) {
    card.onclick = () => {
      opener = card;
      showExample(card.dataset.example);
      back.focus();
    };
  }
  for (const button of workspace.querySelectorAll('[data-switch]')) {
    button.onclick = () => showExample(button.dataset.switch);
  }
  back.onclick = () => {
    workspace.hidden = true;
    shelf.hidden = false;
    explorer.closest('.home-grid').classList.remove('is-exploring');
    opener?.focus();
  };
  return explorer;
}
