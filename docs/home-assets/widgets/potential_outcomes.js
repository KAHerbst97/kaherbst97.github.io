export default function render(html) {
  // Self-contained Observable JS cell. No external packages or numerical model.
  const root = html`<section class="po-lab" aria-label="Potential outcomes playground">
    <style>
      .po-lab { color:#35424d; background:#fbfcfd; border:1px solid #d5dce1; border-left:4px solid #79658e; border-radius:0.65rem; padding:1rem; line-height:1.4; max-width:100%; }
      .po-lab * { box-sizing:border-box; }
      .po-lab .po-head { display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; margin-bottom:.75rem; }
      .po-lab .po-head h3 { margin:0; font-size:1.17rem; font-weight:700; color:#344d61; }
      .po-lab .po-sub { margin:.18rem 0 0; color:#647381; font-size:.83rem; }
      .po-lab .po-badge { padding:.22rem .5rem; border:1px solid #d9d2e3; color:#635080; background:#f6f2f9; border-radius:2rem; font-size:.72rem; white-space:nowrap; }
      .po-lab .po-controls { display:grid; grid-template-columns:minmax(150px,1.1fr) minmax(205px,1.5fr) minmax(100px,.7fr); gap:.5rem .7rem; }
      .po-lab label.po-field { display:flex; flex-direction:column; gap:.2rem; font-weight:600; color:#52616e; font-size:.75rem; }
      .po-lab select { width:100%; min-width:0; font:inherit; font-size:.85rem; color:#35424d; padding:.42rem .5rem; border:1px solid #cbd5de; border-radius:.32rem; background:white; }
      .po-lab select:focus-visible,.po-lab button:focus-visible,.po-lab input:focus-visible,.po-lab tr[tabindex]:focus-visible { outline:2px solid #79658e; outline-offset:2px; }
      .po-lab .po-toolbar { margin:.65rem 0 .85rem; display:flex; gap:.45rem; align-items:center; flex-wrap:wrap; }
      .po-lab button { cursor:pointer; font:inherit; font-size:.77rem; border-radius:.32rem; padding:.4rem .63rem; border:1px solid #c7d2dc; background:white; color:#43586b; }
      .po-lab button:hover { background:#f0f4f7; }
      .po-lab button.po-primary { background:#506c83; border-color:#506c83; color:white; }
      .po-lab button.po-primary:hover { background:#405b70; }
      .po-lab button.po-reveal[aria-pressed="true"] { background:#f3edf7; border-color:#79658e; color:#635080; }
      .po-lab .po-toolbar .po-sep { width:1px; height:1.25rem; background:#d5dce1; margin:0 .1rem; }
      .po-lab .po-checkbox { display:inline-flex; gap:.35rem; font-size:.78rem; align-items:center; cursor:pointer; margin-left:auto; white-space:nowrap; }
      .po-lab .po-checkbox input { accent-color:#79658e; }
      .po-lab .po-columns { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1.06fr); gap:.75rem; align-items:start; }
      .po-lab .po-panel { border:1px solid #dbe2e8; border-radius:.42rem; background:white; padding:.7rem; min-width:0; }
      .po-lab .po-panel-head { display:flex; flex-wrap:wrap; gap:.2rem .5rem; justify-content:space-between; align-items:baseline; margin-bottom:.55rem; }
      .po-lab .po-panel h4 { margin:0; font-size:.93rem; font-weight:700; color:#40596e; }
      .po-lab .po-muted { color:#70808b; font-size:.73rem; }
      .po-lab .po-scroll { overflow-x:auto; }
      .po-lab table { width:100%; border-collapse:collapse; font-size:.79rem; font-variant-numeric:tabular-nums; }
      .po-lab th { text-align:right; background:#f3f6f8; color:#536577; padding:.36rem .32rem; font-weight:700; white-space:nowrap; }
      .po-lab th:first-child,.po-lab td:first-child { text-align:left; }
      .po-lab td { text-align:right; padding:.34rem .32rem; border-top:1px solid #ebeff2; white-space:nowrap; }
      .po-lab tr[data-person] { cursor:pointer; }
      .po-lab tr[data-person]:hover { background:#f4f7fa; }
      .po-lab tr.po-selected { background:#f2f0f8; }
      .po-lab tr.po-out-target:not(.po-selected) { color:#82909b; }
      .po-lab .po-observed { font-weight:700; color:#39745c; }
      .po-lab .po-missing { font-weight:600; color:#9aa5ad; }
      .po-lab .po-oracle { color:#73558b; }
      .po-lab .po-inspector { margin-top:.6rem; padding:.57rem .62rem; background:#f7f9fb; border-radius:.35rem; border:1px solid #e6ebef; font-size:.78rem; min-height:3.4rem; }
      .po-lab .po-inspector strong { color:#3f5a70; }
      .po-lab .po-inspector .po-equation { margin-top:.16rem; color:#63717e; font-variant-numeric:tabular-nums; }
      .po-lab .po-formula { color:#635080; font-size:.8rem; background:#f8f5fa; border:1px solid #ebe4f0; border-radius:.33rem; padding:.5rem .6rem; margin-bottom:.55rem; overflow-wrap:anywhere; }
      .po-lab .po-metrics { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:.37rem; }
      .po-lab .po-metric { border:1px solid #e3e8ec; border-radius:.32rem; padding:.48rem .4rem; background:#f9fafb; min-width:0; }
      .po-lab .po-metric .po-label { display:block; color:#657380; font-size:.68rem; min-height:2.1em; }
      .po-lab .po-metric .po-value { display:block; font-weight:750; color:#42586a; font-size:1.37rem; line-height:1.45; font-variant-numeric:tabular-nums; white-space:nowrap; }
      .po-lab .po-metric.po-truth .po-value { color:#76558b; }
      .po-lab .po-metric.po-crude .po-value { color:#ab6741; }
      .po-lab .po-metric.po-adjusted .po-value { color:#39745c; }
      .po-lab .po-note { font-size:.75rem; color:#657380; margin:.48rem 0 .55rem; min-height:2em; }
      .po-lab .po-strata { margin-top:.35rem; }
      .po-lab .po-strata th { font-size:.71rem; }
      .po-lab .po-strata td { font-size:.75rem; }
      .po-lab .po-weight { color:#6a5682; font-weight:700; }
      .po-lab .po-no-overlap { color:#ac6641; font-weight:600; }
      .po-lab .po-caption { font-size:.75rem; margin:.65rem 0 0; color:#667681; }
      .po-lab .po-status { margin:.65rem 0 0; font-size:.77rem; color:#516677; padding:.45rem .6rem; background:#edf3f7; border-radius:.33rem; }
      .po-lab .po-status.po-warning { background:#fff4e9; color:#885c31; }
      @media (max-width:850px) {
        .po-lab .po-columns { grid-template-columns:1fr; }
        .po-lab .po-controls { grid-template-columns:repeat(2,minmax(0,1fr)); }
        .po-lab .po-checkbox { margin-left:0; }
      }
      @media (max-width:490px) {
        .po-lab { padding:.65rem; }
        .po-lab .po-controls { grid-template-columns:1fr; }
        .po-lab .po-metrics { gap:.2rem; }
        .po-lab .po-metric { padding:.35rem .25rem; }
        .po-lab .po-metric .po-value { font-size:1.08rem; }
        .po-lab table { font-size:.72rem; }
      }
      /* Match the homepage widget styling and respond to the card width. */
      .po-lab{font-family:var(--bs-body-font-family,system-ui,sans-serif);margin:0;padding:14px;border-left-width:3px}
      .po-lab{container-type:inline-size}
      @container (max-width:720px){
        .po-lab .po-columns{grid-template-columns:minmax(0,1fr)}
        .po-lab .po-controls{grid-template-columns:repeat(2,minmax(0,1fr))}
        .po-lab .po-checkbox{margin-left:0}
      }
      @container (max-width:430px){
        .po-lab .po-controls{grid-template-columns:minmax(0,1fr)}
        .po-lab .po-head{flex-wrap:wrap;gap:.35rem}
        .po-lab .po-metric .po-value{font-size:1.1rem}
      }
    </style>

    <div class="po-head">
      <div>
        <h3>Potential outcomes playground</h3>
        <p class="po-sub">What exists, what we observe, and what we can identify</p>
      </div>
      <span class="po-badge">Causal vs. observed</span>
    </div>

    <div class="po-controls">
      <label class="po-field">Causal target
        <select data-control="target">
          <option value="ate">ATE — whole population</option>
          <option value="att">ATT — treated people</option>
          <option value="atu">ATU — untreated people</option>
          <option value="cate0">CATE — X = 0</option>
          <option value="cate1">CATE — X = 1</option>
        </select>
      </label>
      <label class="po-field">Treatment assignment
        <select data-control="assignment">
          <option value="confounded">Confounded: P(A=1|X) = .2 / .8</option>
          <option value="randomized">Randomized: P(A=1|X) = .5 / .5</option>
          <option value="nooverlap">No overlap: A = X</option>
        </select>
      </label>
      <label class="po-field">Population size
        <select data-control="n">
          <option value="60">60</option>
          <option value="240" selected>240</option>
          <option value="1000">1,000</option>
        </select>
      </label>
    </div>

    <div class="po-toolbar">
      <button type="button" class="po-primary" data-action="reassign">Reassign treatment</button>
      <button type="button" data-action="new">New population</button>
      <button type="button" class="po-reveal" data-action="reveal" aria-pressed="false">Reveal both outcomes</button>
      <button type="button" data-action="reset">Reset</button>
      <label class="po-checkbox"><input data-control="hetero" type="checkbox" checked /> ITEs vary within X</label>
    </div>

    <div class="po-columns">
      <div class="po-panel">
        <div class="po-panel-head">
          <h4>Individuals and potential outcomes</h4>
          <span class="po-muted" data-display="rows-label"></span>
        </div>
        <div class="po-scroll">
          <table aria-label="Observed and unobserved individual potential outcomes">
            <thead><tr><th>Person</th><th>X</th><th>A</th><th>Y(0)</th><th>Y(1)</th><th>ITE</th></tr></thead>
            <tbody data-display="people"></tbody>
          </table>
        </div>
        <div class="po-inspector" data-display="inspector" aria-live="polite"></div>
        <p class="po-caption"><span class="po-observed">Green</span> = observed by consistency; <span class="po-oracle">purple</span> = otherwise unobserved, revealed by the oracle. Select a row to inspect a person.</p>
      </div>
      <div class="po-panel">
        <div class="po-panel-head">
          <h4>Estimand versus observed comparison</h4>
          <span class="po-muted" data-display="target-size"></span>
        </div>
        <div class="po-formula" data-display="formula"></div>
        <div class="po-metrics">
          <div class="po-metric po-truth"><span class="po-label">Causal target (oracle)</span><span class="po-value" data-display="truth">?</span></div>
          <div class="po-metric po-crude"><span class="po-label">Observed contrast</span><span class="po-value" data-display="crude">—</span></div>
          <div class="po-metric po-adjusted"><span class="po-label">X-adjusted contrast</span><span class="po-value" data-display="adjusted">—</span></div>
        </div>
        <p class="po-note" data-display="note"></p>
        <div class="po-scroll">
          <table class="po-strata" aria-label="Observed within-stratum effects and target weights">
            <thead><tr><th>Stratum</th><th>n (A=0)</th><th>n (A=1)</th><th>Observed Δ</th><th>Target weight</th></tr></thead>
            <tbody data-display="strata"></tbody>
          </table>
        </div>
        <p class="po-caption" data-display="standardization"></p>
      </div>
    </div>
    <p class="po-status" data-display="status" aria-live="polite"></p>
    <p class="po-caption">Population model: X is balanced (half 0, half 1); Y(0) = 2X + 0.65ε; Y(1) = Y(0) + 1 + 2X + 1.1U. The residuals ε and U are centered within each X stratum in this teaching population. Turning off ITE variation sets U = 0. Every assignment mode leaves these potential outcomes unchanged.</p>
  </section>`;

  const get = name => root.querySelector(`[data-display="${name}"]`);
  const control = name => root.querySelector(`[data-control="${name}"]`);
  const mean = xs => xs.length ? xs.reduce((s, x) => s + x, 0) / xs.length : null;
  const fmt = x => x === null || !Number.isFinite(x) ? "—" : x.toFixed(2).replace("-", "−");
  const fmt3 = x => x === null ? "—" : x.toFixed(3);
  const normal = () => Math.sqrt(-2 * Math.log(Math.max(1e-12, Math.random()))) * Math.cos(2 * Math.PI * Math.random());
  let people = [], oracle = false, selectedId = 1;

  function generatePopulation() {
    const n = Number(control("n").value);
    people = Array.from({length:n}, (_, i) => ({id:i+1, x:i%2, eps:normal(), u:normal(), a:0}));
    // Center the latent disturbances within X so finite-population CATEs
    // equal 1 and 3, while the individual effects can still differ.
    for (const x of [0,1]) {
      const group = people.filter(p => p.x === x);
      const me = mean(group.map(p => p.eps)), mu = mean(group.map(p => p.u));
      group.forEach(p => {p.eps -= me; p.u -= mu;});
    }
    setPotentialOutcomes();
    assignTreatment();
    selectedId = 1;
  }

  function setPotentialOutcomes() {
    const hetero = control("hetero").checked;
    people.forEach(p => {
      p.y0 = 2*p.x + 0.65*p.eps;
      p.y1 = p.y0 + 1 + 2*p.x + (hetero ? 1.1*p.u : 0);
      p.y = p.a ? p.y1 : p.y0;
    });
  }

  function assignTreatment() {
    const design = control("assignment").value;
    people.forEach(p => {
      const pr = design === "randomized" ? 0.5 : p.x === 0 ? 0.2 : 0.8;
      p.a = design === "nooverlap" ? p.x : Number(Math.random() < pr);
      p.y = p.a ? p.y1 : p.y0;
    });
  }

  function activeTarget() {
    const target = control("target").value;
    if (target === "att") return people.filter(p => p.a === 1);
    if (target === "atu") return people.filter(p => p.a === 0);
    if (target === "cate0") return people.filter(p => p.x === 0);
    if (target === "cate1") return people.filter(p => p.x === 1);
    return people;
  }

  function render() {
    const target = control("target").value;
    const group = activeTarget(), ids = new Set(group.map(p => p.id));
    const strata = [0,1].map(x => {
      const s = people.filter(p => p.x === x);
      const s0 = s.filter(p => p.a === 0), s1 = s.filter(p => p.a === 1);
      return {x, s0, s1, delta:s0.length && s1.length ? mean(s1.map(p => p.y)) - mean(s0.map(p => p.y)) : null,
        weight:group.filter(p => p.x === x).length / group.length};
    });
    const adjusted = strata.some(s => s.weight > 0 && s.delta === null)
      ? null : strata.reduce((sum,s) => sum + s.weight * (s.delta === null ? 0 : s.delta),0);
    const all0 = people.filter(p => p.a === 0), all1 = people.filter(p => p.a === 1);
    const naiveAll = all0.length && all1.length ? mean(all1.map(p => p.y))-mean(all0.map(p => p.y)) : null;
    const observed = target === "ate" ? naiveAll : target === "cate0" ? strata[0].delta : target === "cate1" ? strata[1].delta : null;
    const causal = mean(group.map(p => p.y1 - p.y0));
    const formulas = {
      ate:"ATE = E[Y(1) − Y(0)]",
      att:"ATT = E[Y(1) − Y(0) | A = 1]",
      atu:"ATU = E[Y(1) − Y(0) | A = 0]",
      cate0:"CATE(0) = E[Y(1) − Y(0) | X = 0]",
      cate1:"CATE(1) = E[Y(1) − Y(0) | X = 1]"
    };
    const notes = {
      ate:"The raw treatment-group difference can be confounded. Adjustment averages the observed within-X differences over everyone.",
      att:"There is no direct treated-versus-untreated contrast within the treated. Adjustment weights each X-specific difference by P(X | A=1).",
      atu:"There is no direct treated-versus-untreated contrast within the untreated. Adjustment weights each X-specific difference by P(X | A=0).",
      cate0:"Within X=0, the observed conditional difference is also the X-adjusted contrast; identifying the CATE still needs assumptions.",
      cate1:"Within X=1, the observed conditional difference is also the X-adjusted contrast; identifying the CATE still needs assumptions."
    };
    get("formula").textContent = formulas[target];
    get("target-size").textContent = `${group.length} of ${people.length} people`;
    get("truth").textContent = oracle ? fmt(causal) : "?";
    get("crude").textContent = fmt(observed);
    get("adjusted").textContent = fmt(adjusted);
    get("note").textContent = notes[target];
    get("strata").innerHTML = strata.map(s => `<tr><td>X = ${s.x}</td><td>${s.s0.length}</td><td>${s.s1.length}</td><td class="${s.delta===null?'po-no-overlap':''}">${fmt(s.delta)}</td><td class="po-weight">${fmt3(s.weight)}</td></tr>`).join("");
    get("standardization").textContent = adjusted === null
      ? "Adjustment cannot be calculated: a target-relevant X stratum has no observations in one treatment group."
      : "X-adjusted = ∑ₓ [target weight at X=x] × [observed Δ at X=x].";

    const shown = people.slice(0,10);
    get("rows-label").textContent = `Showing 10 of ${people.length}`;
    get("people").innerHTML = shown.map(p => {
      const c0 = oracle || p.a===0 ? fmt(p.y0) : "?";
      const c1 = oracle || p.a===1 ? fmt(p.y1) : "?";
      const klass0 = p.a===0 ? "po-observed" : oracle ? "po-oracle" : "po-missing";
      const klass1 = p.a===1 ? "po-observed" : oracle ? "po-oracle" : "po-missing";
      const selected = p.id === selectedId ? " po-selected" : "";
      const out = ids.has(p.id) ? "" : " po-out-target";
      return `<tr tabindex="0" data-person="${p.id}" class="${selected}${out}"><td>#${p.id}</td><td>${p.x}</td><td>${p.a}</td><td class="${klass0}">${c0}</td><td class="${klass1}">${c1}</td><td class="${oracle?'po-oracle':'po-missing'}">${oracle?fmt(p.y1-p.y0):"?"}</td></tr>`;
    }).join("");
    const picked = people.find(p=>p.id===selectedId) || people[0];
    const counterfactual = picked.a ? "Y(0)" : "Y(1)";
    get("inspector").innerHTML = `<strong>Person #${picked.id}</strong> · X = ${picked.x}, A = ${picked.a}, observed Y = ${fmt(picked.y)}
      <div class="po-equation">Consistency: Y = ${picked.a} × Y(1) + ${1-picked.a} × Y(0) = ${fmt(picked.y)}. &nbsp;${counterfactual} = ${oracle?fmt(picked.a?picked.y0:picked.y1):"?"}${oracle?`; ITE = ${fmt(picked.y1-picked.y0)}`:""}</div>`;

    const design = control("assignment").value;
    const labels = {
      randomized:"Randomized assignment: A is independent of potential outcomes. For the ATE, crude and adjusted comparisons differ from the causal target only through sampling variability.",
      confounded:"Confounded assignment: P(A=1 | X=0) = .2 and P(A=1 | X=1) = .8. Conditional exchangeability holds by construction, but the raw marginal contrast need not equal the ATE.",
      nooverlap:"No overlap: A=X. Each X stratum contains only one treatment condition, so the required conditional comparisons cannot be estimated from these data."
    };
    get("status").textContent = labels[design] + (target === "att" || target === "atu" ? " Changing assignments also changes who belongs to this causal target." : "");
    get("status").classList.toggle("po-warning",design === "nooverlap");
    const revealButton = root.querySelector('[data-action="reveal"]');
    revealButton.setAttribute("aria-pressed",String(oracle));
    revealButton.textContent = oracle ? "Hide unobserved outcomes" : "Reveal both outcomes";
  }

  root.addEventListener("click", ev => {
    const btn = ev.target.closest("button[data-action]");
    if (btn) {
      switch (btn.dataset.action) {
        case "reassign": assignTreatment(); break;
        case "new": generatePopulation(); break;
        case "reveal": oracle = !oracle; break;
        case "reset":
          control("n").value = "240";
          control("target").value = "ate";
          control("assignment").value = "confounded";
          control("hetero").checked = true;
          oracle = false;
          generatePopulation();
          break;
      }
      render();
      return;
    }
    const tr = ev.target.closest("tr[data-person]");
    if (tr && root.contains(tr)) {selectedId = Number(tr.dataset.person); render();}
  });
  root.addEventListener("keydown",ev => {
    const tr = ev.target.closest("tr[data-person]");
    if (tr && (ev.key === "Enter" || ev.key === " ")) {ev.preventDefault();selectedId=Number(tr.dataset.person);render();}
  });
  root.addEventListener("change",ev => {
    const key = ev.target.dataset.control;
    if (key === "n") generatePopulation();
    else if (key === "assignment") assignTreatment();
    else if (key === "hetero") setPotentialOutcomes();
    render();
  });

  generatePopulation();
  render();
  return root;
}