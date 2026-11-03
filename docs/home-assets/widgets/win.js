export default function render(html) {
  const widget = html`<section class="cpwin-lab">
    <style>
      .cpwin-lab{--cw:#287e67;--cl:#b55953;--cu:#a67520;--ct:#7c8791;color:#35424d;background:#fbfcfd;border:1px solid #d5dce1;border-left:4px solid #c8cdd1;border-radius:.65rem;padding:1rem;margin:1.2rem 0;font: .95rem/1.5 system-ui,sans-serif}
      .cpwin-lab *{box-sizing:border-box}
      .cpwin-lab h4{font-size:1.05rem;margin:1.2rem 0 .45rem;color:#35424d}
      .cpwin-lab .cw-controls{display:flex;flex-wrap:wrap;gap:.6rem;align-items:end;margin:.65rem 0}
      .cpwin-lab label{display:grid;gap:.2rem;font-size:.85rem;font-weight:600}
      .cpwin-lab button,.cpwin-lab select,.cpwin-lab input{font:inherit;border:1px solid #bac6ce;border-radius:.35rem;background:#fff;color:#35424d;padding:.35rem .5rem;max-width:100%}
      .cpwin-lab button{cursor:pointer}
      .cpwin-lab button:focus-visible,.cpwin-lab select:focus-visible,.cpwin-lab input:focus-visible{outline:2px solid #46535d;outline-offset:2px}
      .cpwin-lab .cw-primary{background:#46535d;color:#fff;border-color:#46535d}
      .cpwin-lab .cw-small{font-size:.82rem;color:#596b78;margin:.45rem 0}
      .cpwin-lab .cw-scroll{overflow-x:auto}
      .cpwin-lab table{width:100%;border-collapse:collapse;font-size:.84rem;margin:.6rem 0}
      .cpwin-lab th,.cpwin-lab td{text-align:left;padding:.4rem .5rem;border-bottom:1px solid #d9e1e6;vertical-align:middle}
      .cpwin-lab th{background:#eef3f6}
      .cpwin-lab .cw-block.cw-drop-over{outline:3px solid #46535d;outline-offset:1px;background:#f2f4f5}
      .cpwin-lab .cw-empty{padding:1rem;color:#596b78;text-align:center;border:2px dashed #c9d3db;margin:.6rem;border-radius:.35rem}
      .cpwin-lab .cw-structure{display:grid;grid-template-columns:max-content max-content minmax(10rem,1fr) max-content max-content;gap:.6rem;align-items:end;padding:.7rem;background:#f2f3f4;border-radius:.4rem}
      .cpwin-lab .cw-structure>label{min-width:0}
      .cpwin-lab .cw-structure select{width:100%;min-width:0}
      .cpwin-lab .cw-structure [data-id="reset"]{margin-left:1rem;justify-self:end}
      @media(max-width:750px){.cpwin-lab .cw-structure{grid-template-columns:1fr 1fr}.cpwin-lab .cw-structure>label:nth-child(3){grid-column:1 / -1}.cpwin-lab .cw-structure [data-id="reset"]{grid-column:2;grid-row:3}.cpwin-lab .cw-structure [data-id="load-preset"]{justify-self:start}}
      .cpwin-lab tr[draggable=true]{cursor:grab}
      .cpwin-lab tr[draggable=true] input{cursor:text}
      .cpwin-lab .cw-block{border:1px solid #d5dce1;border-radius:.45rem;overflow:hidden;background:white;margin:.8rem 0}
      .cpwin-lab .cw-block-title{background:#f2f3f4;padding:.55rem .7rem;display:flex;flex-wrap:wrap;justify-content:space-between;gap:.3rem}
      .cpwin-lab .cw-block-title small{font-size:.78rem;color:#596b78}
      .cpwin-lab .cw-block table{margin:0;min-width:580px}
      .cpwin-lab .cw-score{width:5.3rem;text-align:center;font-weight:600}
      .cpwin-lab .cw-person{display:flex;align-items:center;gap:.4rem;white-space:nowrap}
      .cpwin-lab .cw-avatar{display:inline-grid;place-items:center;width:2rem;height:2rem;border-radius:50%;background:#e0eaf2;color:#345977;font-weight:700;flex-shrink:0}
      .cpwin-lab .cw-person.control .cw-avatar{background:#e9e3ef;color:#69557b}
      .cpwin-lab .cw-badge{display:inline-block;padding:.2rem .4rem;border-radius:.3rem;white-space:nowrap;font-weight:600;font-size:.8rem}
      .cpwin-lab .cw-winner{background:#eaf5ef}
      .cpwin-lab .cw-subtle{display:block;font-size:.75rem;font-weight:400;color:#596b78}
      .cpwin-lab .cw-cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.6rem;margin:.8rem 0}
      .cpwin-lab .cw-card{border:1px solid #d5dce1;border-radius:.45rem;padding:.7rem;background:white}
      .cpwin-lab .cw-card.selected{border:2px solid #46535d;padding:calc(.7rem - 1px)}
      .cpwin-lab .cw-card strong{display:block}
      .cpwin-lab .cw-bar{display:flex;width:100%;height:1.25rem;border-radius:.25rem;overflow:hidden;background:#edf0f2;margin:.55rem 0}
      .cpwin-lab .cw-bar span{height:100%;display:block}
      .cpwin-lab .cw-key{display:flex;gap:.8rem;flex-wrap:wrap;font-size:.8rem;margin:.6rem 0}
      .cpwin-lab .cw-key span::before{content:"";display:inline-block;width:.7rem;height:.7rem;background:var(--key);margin-right:.25rem;border-radius:2px}
      .cpwin-lab .cw-message{padding:.7rem;background:#eef3f6;border-radius:.35rem;margin:.6rem 0;overflow-wrap:anywhere}
      .cpwin-lab .cw-flow-row{border:1px solid #d5dce1;border-radius:.4rem;padding:.65rem;margin:.5rem 0;background:#fff}
      .cpwin-lab .cw-flow-row.inactive{opacity:.6}
      .cpwin-lab .cw-flow-row .cw-bar{max-width:100%;height:1rem}
      .cpwin-lab .cw-flow-numbers{display:flex;flex-wrap:wrap;gap:.35rem 1rem;font-size:.85rem}
      @media(max-width:650px){.cpwin-lab .cw-cards{grid-template-columns:1fr}.cpwin-lab{padding:.7rem}.cpwin-lab .cw-card strong{display:inline}}
      .cpwin-lab .cw-ungrouped{border:2px dashed #bac6ce;background:#eef3f6}
      .cpwin-lab .cw-tiles{display:flex;flex-wrap:wrap;gap:.65rem;padding:.65rem}
      .cpwin-lab .cw-tile{width:210px;max-width:100%;padding:.5rem;border:1px solid #bac6ce;border-radius:.6rem;background:#fff;cursor:grab}
      .cpwin-lab .cw-tile input{cursor:text}
      .cpwin-lab .cw-tile .cw-controls{gap:.5rem;margin:.4rem 0}
      .cpwin-lab .cw-tile label{font-size:.72rem;gap:.1rem}
      .cpwin-lab .cw-tile .cw-score{width:4.6rem;padding:.2rem .3rem}
      .cpwin-lab .cw-tile-header strong{font-size:.82rem}
      .cpwin-lab .cw-tile .cw-badge{font-size:.72rem;padding:.15rem .3rem}
      .cpwin-lab .cw-tile label:has([data-score=T]){color:#517699}
      .cpwin-lab .cw-tile label:has([data-score=C]){color:#79658e}
      .cpwin-lab .cw-block-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(260px,100%),1fr));gap:.6rem}
      .cpwin-lab .cw-block-grid .cw-tile{width:210px;max-width:100%;flex:0 0 auto}
      .cpwin-lab .cw-tile-header{display:flex;align-items:center;justify-content:space-between;gap:.35rem}
      .cpwin-lab .cw-direction{display:block;flex-shrink:0;font-size:.7rem;padding:.15rem .35rem;margin:0 0 0 auto;border-radius:1rem;background:#eef3f6}
      .cpwin-lab .cw-direction[aria-pressed=true]{background:#f2f3f4;border-color:#a67520}
      .cpwin-lab .cw-credit-step{margin:0}
      .cpwin-lab .cw-credit-incoming{width:70%;margin:auto;text-align:center;background:#f2f3f4;border:1px solid #c8cdd1;border-radius:.45rem;padding:.55rem}
      .cpwin-lab .cw-credit-incoming small{display:block;font-size:.78rem}
      .cpwin-lab .cw-credit-branches{display:block;width:100%;height:32px}
      .cpwin-lab .cw-credit-split{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.5rem}
      .cpwin-lab .cw-credit-node{text-align:center;padding:.5rem .25rem;border:1px solid;border-radius:.45rem;overflow-wrap:anywhere}
      .cpwin-lab .cw-credit-node strong{display:block;font-size:1.3rem}
      .cpwin-lab .cw-credit-node small{display:block;font-size:.72rem}
      .cpwin-lab .cw-credit-win{background:#e6f3ed;border-color:#287e67;color:#246d59}
      .cpwin-lab .cw-credit-loss{background:#f7e9e6;border-color:#b55953;color:#974740}
      .cpwin-lab .cw-credit-unresolved{background:#fff4db;border-color:#a67520;color:#785516}
      .cpwin-lab .cw-credit-tie{background:#eef0f2;border-color:#7c8791}
      .cpwin-lab .cw-credit-arrow{text-align:center;color:#a67520;padding:.15rem}
      .cpwin-lab .cw-credit-arrow span{display:block;font-size:1.6rem;line-height:1.1}
      .cpwin-lab .cw-credit-arrow small{display:block;font-size:.72rem}
      .cpwin-lab .cw-credit-final-tie{width:calc(100% / 3);margin:auto}
      .cpwin-lab .cw-not-reached{opacity:.6}
      .cpwin-lab .cw-presets{margin-left:auto;display:flex;align-items:end;justify-content:flex-end;gap:.5rem;flex-wrap:wrap}
      .cpwin-lab .cw-reset{margin-left:.15rem;background:#f7f9fb;font-weight:600}

      .cpwin-lab .cw-people{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1rem 0}
      .cpwin-lab .cw-person{display:grid;grid-template-columns:minmax(0,1fr) 42px minmax(0,1fr);grid-template-rows:minmax(62px,auto) auto;gap:.5rem;align-items:center;white-space:normal;text-align:left;background:#f1f5f8;border-radius:.6rem;padding:.85rem;color:#517699}
      .cpwin-lab .cw-person:last-child{color:#79658e;background:#f4f1f7}
      .cpwin-lab .cw-person svg{display:block;grid-column:2;grid-row:1;width:42px;height:62px;margin:0;justify-self:center}
      .cpwin-lab .cw-person strong{display:block;grid-column:1;grid-row:1;font-size:1.05rem;overflow-wrap:anywhere}
      .cpwin-lab .cw-person label{display:flex;grid-column:1 / -1;grid-row:2;justify-self:end;align-self:end;justify-content:flex-end;align-items:center;gap:.4rem;font-weight:400;font-size:.78rem;margin:0;cursor:pointer}
      .cpwin-lab .cw-modebar{display:flex;gap:.5rem;flex-wrap:wrap;margin-top:.7rem}
      .cpwin-lab .cw-modebar button[aria-pressed=true]{background:#46535d;color:white;border-color:#46535d}
      .cpwin-lab .cw-personal-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
      .cpwin-lab .cw-personal-grid .cw-block-grid{display:block}
      .cpwin-lab .cw-personal-grid .cw-block{margin-bottom:.6rem}
      .cpwin-lab .cw-personal-grid .cw-tile{width:205px;flex:0 0 auto}
      .cpwin-lab .cw-derived{padding:.7rem;background:#f2f3f4;border-radius:.4rem;margin:.8rem 0;font-size:.82rem}
      .cpwin-lab .cw-rule-buttons{display:flex;gap:.4rem;flex-wrap:wrap;margin:.7rem 0}
      .cpwin-lab .cw-rule-buttons button[aria-pressed=true]{background:#46535d;color:white;border-color:#46535d}
      .cpwin-lab details{font-size:.82rem;border-top:1px solid #d5dce1;margin-top:1rem;padding-top:.7rem}
      .cpwin-lab summary{cursor:pointer;font-weight:600}
      .cpwin-lab [hidden]{display:none!important}
      @media(max-width:620px){.cpwin-lab .cw-personal-grid{grid-template-columns:1fr}.cpwin-lab .cw-personal-grid .cw-tile{width:205px}}
      .cpwin-lab .cw-patient-trays{--arm:#517699;--arm-tint:#e6edf4;--arm-wash:#f5f8fb;min-width:0;padding:.65rem;border:1px solid var(--arm);border-top:4px solid var(--arm);border-radius:.6rem;background:var(--arm-wash)}
      .cpwin-lab .cw-control-trays{--arm:#79658e;--arm-tint:#ece6f2;--arm-wash:#f8f5fa}
      .cpwin-lab .cw-patient-trays h4{color:var(--arm);margin:.1rem 0 .6rem;font-weight:700}
      .cpwin-lab .cw-patient-trays .cw-block{border-color:var(--arm)}
      .cpwin-lab .cw-patient-trays .cw-block-title{background:var(--arm-tint);color:var(--arm)}
      .cpwin-lab .cw-patient-trays .cw-block-title small,.cpwin-lab .cw-patient-trays .cw-subtle{color:var(--arm)}
      .cpwin-lab .cw-patient-trays .cw-ungrouped{background:var(--arm-wash)}
      .cpwin-lab .cw-patient-trays .cw-tile{border-left:3px solid var(--arm)}
      .cpwin-lab .cw-patient-trays .cw-tile-header strong{color:var(--arm)}
      .cpwin-lab .cw-patient-trays .cw-score{border-color:var(--arm);background:var(--arm-wash)}
      .cpwin-lab .cw-patient-trays .cw-block.cw-drop-over{outline-color:var(--arm);background:var(--arm-tint)}
      .cpwin-lab .cw-patient-trays .cw-empty{border-color:var(--arm)}
      .cpwin-lab .cw-pick{font-size:.8rem;font-weight:700;text-align:left;border:0;background:transparent;padding:0;color:inherit;line-height:1.25}
      .cpwin-lab .cw-patient-trays .cw-pick{color:var(--arm)}
      .cpwin-lab .cw-tile.cw-picked{outline:2px solid var(--arm,#46535d);outline-offset:2px}
      .cpwin-lab .cw-place{font-size:.75rem;background:white}
      .cpwin-lab [data-id="selected-result"]{border-left:4px solid #46535d;font-size:1rem;padding:1rem}
      .cpwin-lab .cw-event-toggle{padding:.2rem .4rem;font-size:.8rem;background:#fff;font-weight:700}
      .cpwin-lab .cw-event-toggle[aria-pressed=true]{background:#eef0f2}
      .cpwin-lab .cw-tile-header{flex-wrap:wrap;align-items:flex-start}
      .cpwin-lab .cw-pick{overflow-wrap:anywhere}
      .cpwin-lab .cw-direction{margin-top:.15rem}
      .cpwin-lab .cw-example-disclaimer{position:relative;grid-column:1 / -1;width:100%;margin:0;padding:.65rem .75rem .65rem 2.6rem;border:1px solid rgba(210,115,24,.38);border-left:4px solid #d27318;border-radius:.4rem;background:rgba(245,153,47,.14);color:#68411e;font-size:.78rem;line-height:1.4}
      .cpwin-lab .cw-disclaimer-icon{position:absolute;top:.5rem;left:.6rem;font-size:1.25rem;line-height:1.3}
      .cpwin-lab .cw-tile label:has([data-score=T]) .cw-event-toggle{color:#365b7c;border-color:#517699;background:#e6edf4}
      .cpwin-lab .cw-tile label:has([data-score=C]) .cw-event-toggle{color:#69557b;border-color:#79658e;background:#ece6f2}
      .cpwin-lab .cw-tile label:has([data-score=T]) .cw-score{border-color:#517699;background:#f5f8fb}
      .cpwin-lab .cw-tile label:has([data-score=C]) .cw-score{border-color:#79658e;background:#f8f5fa}
      .cpwin-lab .cw-card[role=button]{cursor:pointer}
      .cpwin-lab .cw-card[role=button]:focus-visible{outline:2px solid #46535d;outline-offset:3px}
      .cpwin-lab .cw-block-heading-line{display:flex;align-items:baseline;justify-content:space-between;gap:.6rem;flex:1 1 100%;min-width:0}
      .cpwin-lab .cw-block-rank{display:inline;margin-left:auto;text-align:right;white-space:nowrap}
    </style>
    <strong>Two patients, shared or individual priorities</strong>
    <p class="cw-small">Choose a paper example, then edit the pair or its priorities. Drag cards between trays, or select an outcome name and choose “Place here.”</p>
    <div class="cw-modebar" role="group" aria-label="Priority structure"><button data-id="shared-mode" type="button" aria-pressed="true">Shared priorities</button><button data-id="patient-mode" type="button" aria-pressed="false">Patient-specific · PROOF-inspired</button></div>
    <p data-id="mode-note" class="cw-small"></p>
    <div class="cw-people" data-id="people"></div>
    <div class="cw-controls cw-structure">
      <label>Number of outcomes<select data-id="outcome-count" aria-label="Number of outcomes"></select></label>
      <label>Number of priority blocks<select data-id="block-count" aria-label="Number of priority blocks"></select></label>
        <label>Preloaded blocks<select data-id="preset">
          <option value="custom">Custom · 4 ungrouped outcomes</option>
          <option value="proof">PROOF-inspired · Bulbar, Fine motor, Gross motor, Respiratory</option>
          <option value="udca">UDCA-inspired · progression (8 outcomes)</option>
          <option value="bestair">BestAIR-inspired · blood pressure and sleep (4 outcomes)</option>
          <option value="actg">ACTG 175-inspired · progression and immune response (3 outcomes)</option>
          <option value="carry">Fraction carries forward (6 outcomes, 3 blocks)</option>
          <option value="majority">All vs. majority (5 outcomes, 2 blocks)</option>
          <option value="primary">Primary decides (3 outcomes, 2 blocks)</option>
          <option value="directions">Mixed outcome directions (5 outcomes, 4 blocks)</option>
          <option value="ties">All tied (4 outcomes, 1 block)</option><option value="personal">Different patient priorities (4 outcomes)</option>
        </select></label>
        <button type="button" data-id="load-preset">Load</button>
        <button type="button" data-id="reset" class="cw-reset">Reset</button>
      <p class="cw-example-disclaimer"><span class="cw-disclaimer-icon" aria-hidden="true">🚧</span><strong>Illustrative examples only.</strong> All patient values are fictional. Named presets use study endpoint structures, not actual patient records or reported study results.</p>
    </div>
    <div data-id="shared-editor"><div data-id="ungrouped"></div><div data-id="endpoints" class="cw-block-grid"></div></div>
    <div data-id="patient-editors" class="cw-personal-grid"><div class="cw-patient-trays cw-treatment-trays"><h4>Treatment priorities</h4><div data-id="t-ungrouped"></div><div data-id="t-endpoints" class="cw-block-grid"></div></div><div class="cw-patient-trays cw-control-trays"><h4>Control priorities</h4><div data-id="c-ungrouped"></div><div data-id="c-endpoints" class="cw-block-grid"></div></div></div>
    <div data-id="derived" class="cw-derived"></div>
    <div class="cw-key"><span style="--key:var(--cw)">Treatment win</span><span style="--key:var(--cl)">Treatment loss</span><span style="--key:var(--cu)">Unresolved during comparison</span><span style="--key:var(--ct)">Tie after the final block</span></div>
    <div class="cw-controls">
      <button data-id="reverse" type="button">Reverse this pair</button>
      <button data-id="strict" type="button">Make every endpoint its own block</button>
      <button type="button" data-id="ungroup">Return all to Ungrouped</button>
    </div>
    <p data-id="validation" class="cw-small" role="status"></p>
    <p class="cw-small">This illustrates how two patients are compared; a treatment-effect analysis combines comparisons across the study. Fractional credit is a scoring allocation, not the probability that treatment benefits this patient.</p>
    <p class="cw-small">Final shares under each rule. Select a card to choose the rule shown in “Show credit propagation.”</p>
    <div data-id="cards" class="cw-cards" aria-live="polite"></div>

    <div class="cw-controls" hidden>
      <label>Rule to trace<select data-id="rule">
        <option value="" selected>Select</option>
        <option value="ALL">ALL · unanimous strict results</option>
        <option value="MAJ">MAJ · more wins than losses</option>
        <option value="COIF">Co-important fractional (COIF)</option>
        <option value="ROT">Rotation (RWR) · average over orderings</option>
        <option value="DOM">Dominance · Pareto comparison</option>
      </select></label>
    </div>
    <details class="cw-propagation">
      <summary>Show credit propagation</summary>
      <div data-id="rule-buttons" class="cw-rule-buttons" role="group" aria-label="Rule for credit propagation"></div>
      <div data-id="progress" class="cw-message" aria-live="polite"></div>
      <div data-id="flow" aria-live="polite"></div>
    </details>
    <details><summary>How the examples and priorities work</summary>
    <p>The UDCA, BestAIR and ACTG 175 presets use the endpoint blocks described in the supplied manuscript, with illustrative patient values. They do not reproduce the patient-level datasets or reported study estimates. Reset restores four ungrouped outcomes and two empty priority blocks. Other presets use generic numbered outcomes. Editing directions or blocks changes the comparison specification.</p>
    <p><strong>Event comparisons:</strong> Yes means the event occurred at the entered day; No means event-free follow-up ended at that day (right censoring). A patient wins only when the other patient has an observed event strictly before their own event or follow-up time. Equal times, two censored records, or earlier censoring are inconclusive.</p>
    <p><strong>UDCA definitions:</strong> Varices means development of varices, not specifically bleeding. Bilirubin doubling is relative to baseline; symptom worsening is the recorded worsening by two stages. Event times are illustrative days on a common origin.</p>
    <p><strong>Shared:</strong> the same ordered co-priority blocks apply to both patients, as in the usual co-priority framework.</p>
    <p><strong>Patient-specific:</strong> each patient has an ordered partition of the outcomes. We identify cumulative sets that both patients rank above all remaining outcomes. Successive differences form the common blocks for this pair. For example, Treatment {1} → {2,3} → {4} and Control {1} → {3} → {2} → {4} give {1} → {2,3} → {4}. Other pairs may produce different blocks.</p>
    <p>In either mode, with one “No preference” patient, use the other patient's blocks. In shared mode, this is the saved shared ordering. With two, place all outcomes in one block. Ties within each patient’s preferences are allowed here, extending the strict-order/no-preference inputs in the original PROOF calculator. Drag outcome cards between trays to change their priority blocks. Cross-patient dragging is disabled.</p>
    <p>The within-block rule is independent of this choice. ALL requires unanimous strict results; Majority compares endpoint wins and losses; COIF allocates equal shares including tied shares; RWR averages strict within-block orderings; Dominance requires at least one improvement and no worsening. Only unresolved credit continues. After the last block, it becomes final tie credit.</p>
    <p>This is a <strong>PROOF-inspired extension, not an exact copy of original PROOF</strong>. The original ALS application also uses a final total-score comparison and compares totals directly when neither patient has a preference. The PROOF preset restores the total-score tiebreaker: any unresolved credit goes to the higher sum of the four domain scores, with equal totals remaining tied. Dominance compares totals directly when both patients have no preference. The other rules apply this tiebreaker to their remaining fractional credit as a generalization. Totals are enabled only for the four PROOF domains with higher scores favorable; other presets do not sum outcomes across different scales.</p>
    <p>Preference-block construction draws on van Eijk, van den Berg, and Lu, <em>Patient-Ranked Order of Function (PROOF)</em>, JNNP 2022. <a href="https://doi.org/10.1136/jnnp-2021-328194" target="_blank" rel="noopener">Paper</a> · <a href="https://tricals.shinyapps.io/PROOF/" target="_blank" rel="noopener">Authors’ calculator</a>. The generalized rules and tied preference blocks are extensions.</p>
    </details>
  </section>`;
  const $=id=>widget.querySelector(`[data-id="${id}"]`);
  const names=Array.from({length:10},(_,i)=>'Outcome '+(i+1));
  const short=names;
  const directions=Array(10).fill(1); // +1: higher is better; -1: lower is better
  const rules=['ALL','MAJ','COIF','ROT','DOM'];
  const colors=['#287e67','#b55953','#a67520','#7c8791'];
  const descriptions={
    ALL:'All endpoints must strictly agree to resolve the block.',
    MAJ:'Compare wins with losses; endpoint ties abstain.',
    COIF:'Co-important fractional: each endpoint receives an equal share of incoming credit.',
    ROT:'Average the first non-tied result over all within-block endpoint orderings.',
    DOM:'Pareto dominance: at least one strict win and no losses (or vice versa).'
  };
  const ruleLabels={ALL:'ALL · unanimous results',MAJ:'Majority · more wins than losses',COIF:'COIF · equal endpoint shares',ROT:'RWR · average over orderings',DOM:'Dominance · improvement without worsening'};
  let proofPreset=false;
  const proofTotalsEnabled=()=>proofPreset&&outcomeCount===4&&directions.slice(0,4).every(d=>d===1);
  let selectedOutcome=null,endpointTypes=Array(10).fill('numeric'),margins=Array(10).fill(0),units=Array(10).fill(''),events=[Array(10).fill(false),Array(10).fill(false)],exampleNote='',armNames=['Treatment','Control'];
  let outcomeCount=4,blockCount=2,dragging=null,dragOwner=null,mode='shared';
  let personal=[Array(10).fill(0),Array(10).fill(0)],noPreference=[false,false];
  let pairT=[5,7,3,6,8,5,5,5,5,5],pairC=[5,5,5,6,5,5,5,5,5,5],personIDs=['T1','C1'];
  let profile=[],priority=Array(10).fill(0),pairLabel='Illustrative pair T1 versus C1';
  function compareEndpoint(t,c,k){
    if(endpointTypes[k]==='event'){
      // Resolve only when an observed event is strictly earlier than the other observed time.
      if(t<c&&events[0][k])return -1;
      if(c<t&&events[1][k])return 1;
      return 0;
    }
    const delta=(t-c)*directions[k];return Math.abs(delta)<=margins[k]?0:delta>0?1:-1;
  }
  const syncProfile=()=>{profile=pairT.slice(0,outcomeCount).map((v,k)=>compareEndpoint(v,pairC[k],k));};
  const fmt=x=>{if(Math.abs(x)<1e-12)return '0';if(Math.abs(x-1)<1e-12)return '1';for(let d=2;d<=729;d++){const n=Math.round(x*d);if(Math.abs(x-n/d)<1e-10)return n+'/'+d;}return x.toFixed(3);};
  const activePriority=()=>priority.slice(0,outcomeCount);
  function blocks(pr=activePriority()){return [...new Set(pr)].filter(b=>b>0).sort((a,b)=>a-b).map(b=>({b,ids:pr.map((v,i)=>v===b?i:-1).filter(i=>i>=0)}));}
  function allocation(vals,rule){const m=vals.length,w=vals.filter(v=>v===1).length,l=vals.filter(v=>v===-1).length,u=m-w-l;
    if(rule==='ALL')return w===m?[1,0,0]:l===m?[0,1,0]:[0,0,1];
    if(rule==='MAJ')return w>l?[1,0,0]:l>w?[0,1,0]:[0,0,1];
    if(rule==='COIF')return [w/m,l/m,u/m];
    if(rule==='ROT'){
      // Uniform averaging over within-block permutations: the first non-tie
      // is a win with probability w/(w+l) and a loss with probability l/(w+l).
      return w+l>0?[w/(w+l),l/(w+l),0]:[0,0,1];
    }
    if(rule==='DOM'){
      // Weak Pareto dominance, strict on at least one endpoint.
      return l===0&&w>0?[1,0,0]:w===0&&l>0?[0,1,0]:[0,0,1];
    }
    throw new Error('Unknown comparison rule: '+rule);
  }
  function commonPersonalBlocks(t,c,n,noneT=false,noneC=false){
    const all=Array.from({length:n},(_,i)=>i);
    if(noneT&&noneC)return [{b:1,ids:all}];
    if(noneT||noneC)return blocks((noneT?c:t).slice(0,n));
    const tb=blocks(t.slice(0,n)),cb=blocks(c.slice(0,n));
    const prefixes=arr=>{let used=[];return arr.map(x=>{used=used.concat(x.ids);return used.slice().sort((a,b)=>a-b);});};
    const cp=prefixes(cb).map(x=>x.join(','));let used=new Set(),out=[];
    for(const prefix of prefixes(tb))if(cp.includes(prefix.join(','))){const ids=prefix.filter(i=>!used.has(i));if(ids.length)out.push({b:out.length+1,ids});prefix.forEach(i=>used.add(i));}
    return out;
  }
  function effectiveBlocks(){return mode==='shared'?(noPreference.every(Boolean)?[{b:1,ids:Array.from({length:outcomeCount},(_,i)=>i)}]:blocks()):commonPersonalBlocks(personal[0],personal[1],outcomeCount,...noPreference);}
  function evaluate(p,pr,rule){
    let W=0,L=0,R=1;const rows=[];
    const useTotal=proofTotalsEnabled(),directTotal=useTotal&&rule==='DOM'&&noPreference.every(Boolean);
    if(!directTotal)effectiveBlocks().forEach(({b,ids})=>{const vals=ids.map(i=>p[i]),q=allocation(vals,rule),incoming=R,dW=R*q[0],dL=R*q[1];W+=dW;L+=dL;R*=q[2];rows.push({b,ids,vals,q,incoming,dW,dL,W,L,R});});
    let totalStep=null;
    if(useTotal){const treatment=pairT.slice(0,4).reduce((a,b)=>a+b,0),control=pairC.slice(0,4).reduce((a,b)=>a+b,0),incoming=R;const dW=treatment>control?R:0,dL=control>treatment?R:0;W+=dW;L+=dL;R-=dW+dL;totalStep={treatment,control,incoming,dW,dL,direct:directTotal};}
    return {W,L,U:R,rows,totalStep};
  }
  function el(tag,cls,text){const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;}
  function bar(vals,final=false){const e=el('div','cw-bar');e.setAttribute('role','img');e.setAttribute('aria-label',`Win ${fmt(vals[0])}, loss ${fmt(vals[1])}, ${final?'tie':'unresolved'} ${fmt(vals[2])}`);vals.forEach((v,i)=>{if(v<=0)return;const s=el('span');s.style.width=(100*v)+'%';s.style.background=colors[i===2&&final?3:i];s.title=(i===0?'Win':i===1?'Loss':final?'Tie':'Unresolved')+': '+fmt(v);e.append(s);});return e;}
  function editPair(){syncProfile();pairLabel='Custom illustrative pair (edited values)';personIDs=['T*','C*'];render();}
  function moveOutcome(i,b,owner=null){
    if(!Number.isInteger(i)||i<0||i>=outcomeCount||b<0||b>blockCount)return;
    (owner===null?priority:personal[owner])[i]=b;selectedOutcome=null;dragging=null;dragOwner=null;render();$('validation').textContent=short[i]+(b===0?' returned to Ungrouped.':' moved to block '+b+'.');
  }
  function resizeOutcomes(count){
    if(!Number.isInteger(count)||count<1||count>10)return;
    if(count>outcomeCount)for(let i=outcomeCount;i<count;i++){priority[i]=0;personal[0][i]=0;personal[1][i]=0;}
    outcomeCount=count;dragging=null;$('rule').value=$('rule').value||'COIF';render();
  }
  function resizeBlocks(count){
    if(!Number.isInteger(count)||count<1||count>10)return;
    blockCount=count;priority=priority.map(b=>Math.min(b,count));personal=personal.map(pr=>pr.map(b=>Math.min(b,count)));dragging=null;$('rule').value=$('rule').value||'COIF';render();
  }
  function buildEditor(){
    buildTray();buildTray(0);buildTray(1);
  }
  function buildTray(owner=null){
    const trayPrefix=owner===null?'':owner===0?'t-':'c-';
    const ungrouped=$(trayPrefix+'ungrouped');
    const locked=owner===null?noPreference.every(Boolean):noPreference[owner];
    const pr=owner===null?(locked?Array(outcomeCount).fill(1):activePriority()):noPreference[owner]?Array(outcomeCount).fill(1):personal[owner].slice(0,outcomeCount);
    const body=$(trayPrefix+'endpoints');body.replaceChildren();ungrouped.replaceChildren();
    Array.from({length:blockCount+1},(_,b)=>({b,ids:pr.flatMap((v,k)=>v===b?[k]:[])})).forEach(({b,ids})=>{
      const group=el('section','cw-block'+(b===0?' cw-ungrouped':''));group.dataset.priorityBlock=b;
      group.ondragover=e=>{if(dragging!==null&&dragOwner===owner&&!locked){e.preventDefault();group.classList.add('cw-drop-over');}};
      group.ondragleave=e=>{if(!group.contains(e.relatedTarget))group.classList.remove('cw-drop-over');};
      group.ondrop=e=>{if(dragging!==null&&dragOwner===owner&&!locked){e.preventDefault();e.stopPropagation();moveOutcome(dragging,b,owner);}};
      const heading=el('div','cw-block-title');
      const headingLabel=el('div','cw-block-heading-line');headingLabel.append(el('strong','',b===0?'Ungrouped':`Priority block ${b}`));if(b===1||b===2)headingLabel.append(el('span','cw-subtle cw-block-rank',b===1?'Primary':'Secondary'));heading.append(headingLabel);
      if(selectedOutcome&&selectedOutcome.owner===owner&&!locked){const place=el('button','cw-place','Place here');place.type='button';place.setAttribute('aria-label',`Move ${names[selectedOutcome.i]} to ${b?'priority block '+b:'Ungrouped'}`);place.onclick=()=>{const i=selectedOutcome.i;moveOutcome(i,b,owner);widget.querySelector(`[data-pick="${owner===null?'shared':owner}-${i}"]`)?.focus({preventScroll:true});};heading.append(place);}group.append(heading);
      const tiles=el('div','cw-tiles');
      if(!ids.length)tiles.append(el('div','cw-empty',b===0?'All endpoints assigned. Drop here to ungroup.':'Drop endpoints here'));
      ids.forEach(i=>{
        const tile=el('div','cw-tile');tile.draggable=!locked;tile.dataset.dragRow=i;const tileHeader=el('div','cw-tile-header');const pick=el('button','cw-pick',short[i]);pick.type='button';pick.dataset.pick=`${owner===null?'shared':owner}-${i}`;pick.disabled=locked;const picked=selectedOutcome?.i===i&&selectedOutcome?.owner===owner;pick.setAttribute('aria-pressed',String(picked));pick.title='Select this outcome, then choose Place here in a tray';tile.classList.toggle('cw-picked',picked);pick.onclick=()=>{selectedOutcome=picked?null:{i,owner,mode};render();widget.querySelector(`[data-pick="${owner===null?'shared':owner}-${i}"]`)?.focus({preventScroll:true});$('validation').textContent=picked?'Selection cleared.':`${names[i]} selected. Choose Place here in a destination tray, or select the outcome again to cancel.`;};tileHeader.append(pick);tile.append(tileHeader);
        const direction=el('button','cw-direction',directions[i]===1?'↑ Higher is better':'↓ Lower is better');
        direction.type='button';direction.dataset.direction=i;direction.dataset.directionOwner=owner===null?'shared':String(owner);direction.setAttribute('aria-pressed',String(directions[i]===-1));direction.setAttribute('aria-label',names[i]+': lower is better');direction.title='Toggle whether higher or lower values are better';
        direction.onclick=()=>{directions[i]*=-1;render();widget.querySelector(`[data-direction="${i}"][data-direction-owner="${owner===null?'shared':String(owner)}"]`)?.focus({preventScroll:true});};if(endpointTypes[i]!=='event')tileHeader.append(direction);
        tile.append(el('div','cw-subtle',endpointTypes[i]==='event'?'Later event is better · days':units[i]+(margins[i]?` · tie margin ±${margins[i]}`:'')));
        const scores=el('div','cw-controls');
        ['T','C'].forEach((arm,j)=>{if(owner!==null&&owner!==j)return;const label=el('label','',endpointTypes[i]==='event'?'':arm==='T'?'Treatment':'Control'),input=el('input','cw-score');input.type='number';input.step='any';input.required=true;input.value=(j===0?pairT:pairC)[i];input.dataset.score=arm;input.dataset.endpoint=i;input.dataset.owner=owner===null?'shared':String(owner);input.setAttribute('aria-label',`${arm==='T'?'Treatment':'Control'}: ${names[i]}`);
          input.onchange=()=>{const v=input.valueAsNumber;if(!Number.isFinite(v)||(endpointTypes[i]==='event'&&v<0)){input.value=(j===0?pairT:pairC)[i];$('validation').textContent='Enter a valid number (event and follow-up times must be nonnegative). The previous value was restored.';return;}(j===0?pairT:pairC)[i]=v;editPair();};
          if(endpointTypes[i]==='event'){
            input.min='0';const toggle=el('button','cw-event-toggle',events[j][i]?'Yes':'No');toggle.type='button';toggle.dataset.event=`${arm}-${i}`;toggle.setAttribute('aria-pressed',String(events[j][i]));toggle.setAttribute('aria-label',`${arm==='T'?'Treatment':'Control'}: ${names[i]} occurred, ${events[j][i]?'yes':'no'}`);toggle.onclick=()=>{events[j][i]=!events[j][i];render();widget.querySelector(`[data-event="${arm}-${i}"]`)?.focus({preventScroll:true});};label.append(toggle,el('span','cw-subtle',events[j][i]?'Event day':'Follow-up day'));input.setAttribute('aria-label',`${arm==='T'?'Treatment':'Control'}: ${names[i]} ${events[j][i]?'event':'last event-free follow-up'} day`);
          }
          label.append(input);scores.append(label);
        });tile.append(scores);
        const v=profile[i],badge=el('span','cw-badge',v===1?'Treatment wins':v===-1?'Control wins':endpointTypes[i]==='event'?'Inconclusive':'Tied');badge.style.background=v===1?'#e6f3ed':v===-1?'#f7e9e6':'#eef0f2';tile.append(badge);
        tile.ondragstart=e=>{if(e.target.closest('input,select,button')){e.preventDefault();return;}dragging=i;dragOwner=owner;if(e.dataTransfer){e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',String(i));}};
        tile.ondragend=()=>{dragging=null;dragOwner=null;widget.querySelectorAll('.cw-drop-over').forEach(e=>e.classList.remove('cw-drop-over'));};tiles.append(tile);
      });group.append(tiles);(b===0?ungrouped:body).append(group);
    });
  }
  function render(){
    if(selectedOutcome&&(selectedOutcome.mode!==mode||selectedOutcome.i>=outcomeCount))selectedOutcome=null;
    syncProfile();
    widget.querySelectorAll('.cw-person > strong').forEach((e,j)=>{const label=j===0?'Treatment':'Control';e.textContent=armNames[j]&&armNames[j]!==label?label+' · '+armNames[j]:label;});
    $('shared-mode').setAttribute('aria-pressed',String(mode==='shared'));$('patient-mode').setAttribute('aria-pressed',String(mode==='patient'));
    $('shared-editor').hidden=mode!=='shared';$('patient-editors').hidden=mode!=='patient';
    widget.querySelectorAll('[data-no-pref-label]').forEach(e=>e.hidden=false);
    widget.querySelectorAll('[data-no-pref]').forEach(e=>e.checked=noPreference[Number(e.dataset.noPref)]);
    $('mode-note').textContent=mode==='shared'?(noPreference.every(Boolean)?'Neither patient has a priority preference: all outcomes are compared together in one block. Your shared arrangement is saved and returns when either preference is restored.':noPreference.some(Boolean)?'One patient has no preference. The other patient’s shared ordering determines the comparison.':'Both patients use the same outcome priorities. Select No preference for either patient to opt out of that ordering.'):'Each patient ranks what matters to them. Their rankings determine which outcomes we compare together. Tied priority blocks are allowed in this PROOF-inspired extension.';
    if(proofPreset)$('mode-note').textContent+=proofTotalsEnabled()?' PROOF total-score tiebreaker is active; with no preference on both sides, Dominance compares totals directly.':' PROOF totals are disabled: restore four outcomes with higher scores favorable to use the tiebreaker.';
    const focused=document.activeElement;
    const focusSelector=focused?.matches?.('[data-score]')?`[data-score="${focused.dataset.score}"][data-endpoint="${focused.dataset.endpoint}"][data-owner="${focused.dataset.owner}"]`:null;
    buildEditor();
    if(focusSelector)widget.querySelector(focusSelector)?.focus({preventScroll:true});
    const rule=$('rule').value;
    $('outcome-count').value=outcomeCount;$('block-count').value=blockCount;
    const remaining=mode==='shared'?(noPreference.every(Boolean)?0:activePriority().filter(b=>b===0).length):personal.reduce((n,pr,j)=>n+(noPreference[j]?0:pr.slice(0,outcomeCount).filter(b=>b===0).length),0);
    $('derived').textContent=remaining?'Assign every active outcome before comparing.':(mode==='shared'?'Shared blocks: ':'Common blocks for this pair: ')+effectiveBlocks().map(x=>'{'+x.ids.map(i=>i+1).join(', ')+'}').join(' → ');
    widget.querySelectorAll('[data-rule-choice]').forEach(e=>e.setAttribute('aria-pressed',String(e.dataset.ruleChoice===rule)));
    $('validation').textContent='';
    $('cards').replaceChildren();$('flow').replaceChildren();
    if(remaining){
      $('progress').textContent=`Assign ${remaining} remaining endpoint${remaining===1?'':'s'} from Ungrouped.`;
      return;
    }
    // Always display all rule summaries once every outcome has been assigned.
    // Selecting a rule is required only for the detailed credit trace.
    const all=Object.fromEntries(rules.map(r=>[r,evaluate(profile,activePriority(),r)]));
    rules.forEach(r=>{const q=all[r],card=el('div','cw-card'+(r===rule?' selected':''));card.tabIndex=0;card.setAttribute('role','button');card.setAttribute('aria-pressed',String(r===rule));card.dataset.ruleCard=r;card.setAttribute('aria-label',ruleLabels[r]+': select credit propagation trace');card.onclick=()=>{$('rule').value=r;render();widget.querySelector(`[data-rule-card="${r}"]`)?.focus({preventScroll:true});};card.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();card.click();}};card.append(el('strong','',ruleLabels[r]+' · final pair credit'),bar([q.W,q.L,q.U],true),el('div','',`Treatment win ${fmt(q.W)} · Treatment loss ${fmt(q.L)} · Tie ${fmt(q.U)}`),el('p','cw-small',descriptions[r]));$('cards').append(card);});
    if(!rule){
      $('progress').textContent='Select a rule to display the comparison trace.';
      return;
    }
    const result=all[rule];
    $('progress').replaceChildren(el('strong','','Follow one unit of credit'),el('div','cw-small','Wins and losses are retained. Only unresolved credit continues to the next block.'));
    const flow=$('flow');flow.replaceChildren();
    function node(label,value,kind,detail){const n=el('div','cw-credit-node cw-credit-'+kind);n.append(el('span','',label),el('strong','',fmt(value)));if(detail)n.append(el('small','',detail));return n;}
    function arrow(text){const a=el('div','cw-credit-arrow');const symbol=el('span','','↓');symbol.setAttribute('aria-hidden','true');a.append(symbol,el('small','',text));return a;}
    result.rows.forEach((row,i)=>{
      const step=el('section','cw-credit-step'+(row.incoming===0?' cw-not-reached':''));step.dataset.traceBlock=row.b;
      const incoming=el('div','cw-credit-incoming');incoming.append(el('strong','',`Block ${row.b} · incoming ${fmt(row.incoming)}`),el('small','',row.ids.map(k=>short[k]).join(', ')),el('small','',row.incoming===0?'Not reached: all credit already assigned.':row.ids.map((k,j)=>`${short[k]}: ${row.vals[j]>0?'Treatment wins':row.vals[j]<0?'Control wins':endpointTypes[k]==='event'?'Inconclusive':'Tied'}`).join(' · ')));step.append(incoming);
      const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 600 36');svg.setAttribute('preserveAspectRatio','none');svg.setAttribute('class','cw-credit-branches');svg.setAttribute('aria-hidden','true');
      ['M300 0 V14 H100 V35','M300 0 V35','M300 0 V14 H500 V35'].forEach((d,j)=>{const path=document.createElementNS(svg.namespaceURI,'path');path.setAttribute('d',d);path.setAttribute('fill','none');path.setAttribute('stroke',[colors[0],colors[2],colors[1]][j]);path.setAttribute('stroke-width','2');svg.append(path);});step.append(svg);
      const split=el('div','cw-credit-split');
      split.append(node('Treatment win',row.dW,'win',row.incoming===0?'No new credit':'Retained as win credit'),node('Unresolved',row.R,'unresolved',row.incoming===0?'No credit remains':i<result.rows.length-1?'Passed to the next block':result.totalStep?'Passed to total-score comparison':'Becomes final tie credit'),node('Treatment loss',row.dL,'loss',row.incoming===0?'No new credit':'Retained as loss credit'));step.append(split);flow.append(step);
      if(i<result.rows.length-1)flow.append(arrow(row.R===0?'No credit to pass':'Carry forward'));
    });
    if(result.totalStep){
      const t=result.totalStep;flow.append(arrow(t.direct?'No preferences: compare totals directly':'Compare total scores'));
      const totalNode=el('div','cw-message');totalNode.append(el('strong','',t.direct?'Direct total-score comparison':'PROOF total-score tiebreaker'),el('div','',`Treatment total ${fmt(t.treatment)} · Control total ${fmt(t.control)}`),el('div','',t.incoming===0?'Not reached: all credit was assigned in the priority blocks.':`Incoming credit ${fmt(t.incoming)} · ${t.treatment>t.control?'Treatment wins':t.control>t.treatment?'Control wins':'Equal totals: remains tied'}`));flow.append(totalNode);
    }
    flow.append(arrow(result.totalStep?'After total-score comparison':'After the final block'));
    const tie=el('div','cw-credit-final-tie');tie.append(node('Final tie',result.U,'tie','Remaining unresolved credit'));flow.append(tie);
    const total=el('div','cw-message');total.append(el('strong','','Final pair credit'),bar([result.W,result.L,result.U],true),el('div','',`Treatment win ${fmt(result.W)} · Treatment loss ${fmt(result.L)} · Tie ${fmt(result.U)}. Total credit: 1.`));flow.append(total);
  }
  ['outcome-count','block-count'].forEach(id=>{for(let i=1;i<=10;i++){const o=el('option','',String(i));o.value=i;$(id).append(o);}});
  const presets={
    custom:{blocks:2,T:[5,7,3,6],C:[5,5,5,6],groups:[0,0,0,0],directions:[1,1,1,1],note:'Four outcomes start in Ungrouped. Drag them into priority blocks, or select a name and choose Place here.'},
    proof:{blocks:4,T:[9,8,6,10],C:[9,6,8,10],groups:[1,2,3,4],directions:[1,1,1,1],names:['Bulbar (B)','Fine motor (F)','Gross motor (G)','Respiratory (R)'],units:Array(4).fill('Domain score (0–12)'),note:'PROOF-inspired: the four ALS functional domains used in the authors’ calculator. Higher scores are better. Fictional scores and separate patient rankings illustrate common-block construction; this is not a copied patient pair. Unresolved comparisons use the total domain score as a tiebreaker.'},
    // Each example has its own outcome count and block structure.
    udca:{blocks:5,T:[1800,1800,900,1800,1800,1400,1800,1800],C:[1800,1800,600,1100,1800,1800,1300,1600],groups:[1,2,3,3,3,4,4,5],directions:Array(8).fill(1),types:Array(8).fill('event'),events:[[false,false,true,false,false,true,false,false],[false,false,true,true,false,false,true,true]],names:['Death','Liver transplantation','Varices','Ascites','Encephalopathy','Histological progression','Bilirubin doubling','Symptom worsening'],arms:['UDCA','Placebo'],note:'UDCA: the paper’s eight endpoints in five priority blocks. Yes/No records whether the event occurred; enter its day, or the last event-free follow-up day. Pair values are illustrative, not patient records or study estimates.'},
    bestair:{blocks:2,T:[8,4,2,3],C:[5,1,4,3],groups:[1,2,2,2],directions:[1,1,1,1],margins:[5,0,0,0],units:['Improvement (mmHg)','Improvement (ESS points)','Improvement (PROMIS score)','Improvement (PROMIS score)'],names:['24-hour SBP','ESS','Sleep Disturbance','Sleep-Related Impairment'],arms:['Pooled active treatment','Pooled comparison'],note:'BestAIR: baseline minus six-month score; greater improvement is better. SBP differences from −5 to 5 mmHg, inclusive, are inconclusive. Sleep outcomes use zero margins. Pair values are illustrative, not patient records or study estimates.'},
    actg:{blocks:2,T:[700,80,30],C:[500,20,60],groups:[1,2,2],directions:[1,1,1],types:['event','numeric','numeric'],events:[[false,false,false],[false,false,false]],units:['Days','Change (cells/µL)','Change (cells/µL)'],names:['Composite progression','CD4 change','CD8 change'],arms:['Pooled other therapy','Zidovudine'],note:'ACTG 175: progression is first ≥50% CD4 decline, AIDS, or death; later is better. CD4 and CD8 changes are week 20 minus baseline. Toggle CD8’s direction to explore both paper specifications; neither is designated clinically preferred. Pair values are illustrative, not patient records or study estimates.'},
    carry:{blocks:3,T:[6,4,5,5,6,5],C:[5,5,5,5,5,5],groups:[1,1,1,2,2,3],directions:[1,1,1,1,1,1]},
    majority:{blocks:2,T:[6,6,4,5,4],C:[5,5,5,5,5],groups:[1,1,1,1,2],directions:[1,1,1,1,1]},
    primary:{blocks:2,T:[6,4,4],C:[5,5,5],groups:[1,2,2],directions:[1,1,1]},
    directions:{blocks:4,T:[4,6,5,6,4],C:[5,5,5,5,5],groups:[1,1,2,3,4],directions:[-1,-1,1,1,-1]},
    personal:{blocks:4,T:[5,7,3,6],C:[5,5,5,5],groups:[1,2,2,3],directions:[1,1,1,1]},
    ties:{blocks:1,T:[5,5,5,5],C:[5,5,5,5],groups:[1,1,1,1],directions:[1,1,1,1]}
  };
  $('load-preset').onclick=()=>{
    const p=presets[$('preset').value];proofPreset=$('preset').value==='proof';selectedOutcome=null;endpointTypes=Array.from({length:10},(_,i)=>p.types?.[i]||'numeric');margins=Array.from({length:10},(_,i)=>p.margins?.[i]||0);units=Array.from({length:10},(_,i)=>p.units?.[i]||'');events=[0,1].map(j=>Array.from({length:10},(_,i)=>p.events?.[j]?.[i]||false));exampleNote=p.note||'Generic illustrative pair for exploring comparison rules.';armNames=p.arms||['Treatment','Control'];names.forEach((_,i)=>names[i]=p.names?.[i]||'Outcome '+(i+1));outcomeCount=p.T.length;blockCount=p.blocks;
    pairT=Array(10).fill(5);pairC=Array(10).fill(5);priority=Array(10).fill(0);directions.fill(1);
    p.T.forEach((v,i)=>{pairT[i]=v;pairC[i]=p.C[i];priority[i]=p.groups[i];directions[i]=p.directions[i];});
    personal=[priority.slice(),priority.slice()];noPreference=[false,false];mode='shared';personalInitialized=false;
    if($('preset').value==='personal'){personal[1]=[1,3,2,4,0,0,0,0,0,0];mode='patient';personalInitialized=true;}
    if($('preset').value==='proof'){personal[1]=[1,3,2,4,0,0,0,0,0,0];mode='patient';personalInitialized=true;$('rule').value='DOM';}
    dragging=null;$('rule').value=$('rule').value||'COIF';render();
    $('validation').textContent='Loaded '+$('preset').selectedOptions[0].textContent.toLowerCase()+'.';
  };
  $('reset').onclick=()=>{mode='shared';personalInitialized=false;$('preset').value='custom';$('load-preset').onclick();};
  $('ungroup').onclick=()=>{if(mode==='shared')priority.fill(0);else personal.forEach((pr,j)=>{if(!noPreference[j])pr.fill(0);});dragging=null;$('rule').value=$('rule').value||'COIF';render();};
  $('outcome-count').addEventListener('change',()=>resizeOutcomes(Number($('outcome-count').value)));
  $('block-count').addEventListener('change',()=>resizeBlocks(Number($('block-count').value)));
  $('reverse').addEventListener('click',()=>{[pairT,pairC]=[pairC,pairT];[events[0],events[1]]=[events[1],events[0]];[personal[0],personal[1]]=[personal[1],personal[0]];[noPreference[0],noPreference[1]]=[noPreference[1],noPreference[0]];syncProfile();personIDs=['T*','C*'];pairLabel='Reversed illustrative pair (individual values exchanged)';render();});
  $('strict').addEventListener('click',()=>{blockCount=outcomeCount;if(mode==='shared')priority=priority.map((v,i)=>i<outcomeCount?i+1:v);else personal=personal.map(pr=>pr.map((v,i)=>i<outcomeCount?i+1:v));$('rule').value=$('rule').value||'COIF';render();});
  $('rule').addEventListener('change',()=>{render();});
  const personIcon='<svg viewBox="0 0 44 64" aria-hidden="true"><circle cx="22" cy="9" r="7" fill="currentColor" opacity=".8"/><path d="M13 21 Q22 16 31 21 L36 39 Q36 44 32 43 L28 31 L28 59 Q28 64 23 61 L22 43 L21 61 Q16 64 16 59 L16 31 L12 43 Q8 44 8 39 Z" fill="currentColor" opacity=".8"/></svg>';
  ['Treatment','Control'].forEach((name,j)=>{const person=el('div','cw-person');person.innerHTML=personIcon;person.append(el('strong','',name+' patient'));const label=el('label'),check=el('input');label.dataset.noPrefLabel=j;check.type='checkbox';check.dataset.noPref=j;check.onchange=()=>{noPreference[j]=check.checked;selectedOutcome=null;dragging=null;dragOwner=null;render();};label.append(check,document.createTextNode('No preference'));person.append(label);$('people').append(person);});
  let personalInitialized=false;
  $('shared-mode').onclick=()=>{mode='shared';render();};
  $('patient-mode').onclick=()=>{if(!personalInitialized){personal=[priority.slice(),priority.slice()];personalInitialized=true;}mode='patient';render();};
  rules.forEach(rule=>{const button=el('button','',({ALL:'ALL',MAJ:'Majority',COIF:'COIF',ROT:'RWR',DOM:'Dominance'})[rule]);button.type='button';button.dataset.ruleChoice=rule;button.title=descriptions[rule];button.onclick=()=>{$('rule').value=rule;render();};$('rule-buttons').append(button);});
  $('rule').value='COIF';
  $('preset').value='custom';$('load-preset').onclick();
  return widget;
}
