export default function render(html) {
  // Self-contained Observable JS cell. No external packages or numerical model.
  const root = html`<section class="causal-play">
  <style>
  .causal-play{--ink:#35424d;--muted:#687681;--line:#dce3e8;--blue:#287cb5;--red:#b95249;--green:#278260;--purple:#8055a4;font-family:var(--bs-body-font-family,system-ui,sans-serif);color:var(--ink);background:#fbfcfd;border:1px solid var(--line);border-left:4px solid var(--blue);border-radius:10px;padding:18px;margin:1rem 0;line-height:1.45}
  .causal-play *{box-sizing:border-box}.causal-play h3{font-size:1.18rem;margin:0 0 4px;font-weight:750}.causal-play p{margin:0}.causal-play .intro{font-size:.9rem;color:var(--muted);margin-bottom:14px}
  .causal-play button,.causal-play select,.causal-play input{font:inherit;color:inherit}.causal-play button,.causal-play select{border:1px solid var(--line);border-radius:6px;background:white;padding:7px 10px;font-size:.83rem}.causal-play button{cursor:pointer}.causal-play button:hover{background:#edf4f8}.causal-play button:disabled{opacity:.4;cursor:default}.causal-play :focus-visible{outline:3px solid #8cbfdf;outline-offset:3px}.causal-play button[aria-pressed=true]{background:#e9f3fa;border-color:var(--blue);color:#205d86}
  .causal-play .tools{display:flex;gap:7px;align-items:center;flex-wrap:wrap}.causal-play .examples{margin-left:auto;display:flex;gap:7px;align-items:center;font-size:.8rem;color:var(--muted)}
  .causal-play .hint{font-size:.81rem;color:var(--muted);min-height:2.1rem;padding:9px 0 5px}.causal-play .canvas-wrap{overflow:auto;background:white;border:1px solid var(--line);border-radius:8px}.causal-play svg{display:block;width:100%;min-width:560px;touch-action:none}.causal-play .node{cursor:grab}.causal-play .node text{pointer-events:none}.causal-play .node:focus-visible{outline:none}.causal-play .node:focus-visible .halo{stroke:#287cb5;opacity:1}.causal-play .edge-hit{cursor:pointer}
  .causal-play .legend{display:flex;flex-wrap:wrap;gap:6px 17px;font-size:.75rem;color:var(--muted);padding:9px 0}.causal-play .legend i{display:inline-block;width:18px;height:3px;vertical-align:middle;margin-right:5px}.causal-play .below{display:grid;grid-template-columns:210px minmax(0,1fr);gap:12px}.causal-play .editor,.causal-play .paths{background:white;border:1px solid var(--line);border-radius:8px;padding:13px;min-width:0}.causal-play h4{font-size:.87rem;margin:0 0 9px;font-weight:700}.causal-play .field{display:block;font-size:.78rem;color:var(--muted);margin:0 0 9px}.causal-play .field input,.causal-play .field select{display:block;width:100%;margin-top:4px;border:1px solid var(--line);border-radius:5px;padding:6px 8px;background:white;font-size:.85rem}.causal-play .check{display:flex;gap:7px;align-items:flex-start;font-size:.81rem;margin:9px 0}.causal-play .check input{margin-top:4px;accent-color:var(--purple)}.causal-play .check.random-label input{accent-color:var(--green)}.causal-play .small{font-size:.76rem;color:var(--muted)}.causal-play .delete{margin-top:9px;color:#a14e46;font-size:.76rem;padding:4px 8px}.causal-play .summary{font-size:.85rem;margin-bottom:10px}.causal-play .routes{display:grid;gap:5px;max-height:220px;overflow:auto}.causal-play .route{width:100%;text-align:left;display:flex;justify-content:space-between;gap:10px;align-items:center;font-size:.8rem;padding:7px 9px}.causal-play .route b{font-weight:600;overflow-wrap:anywhere}.causal-play .route span{font-size:.72rem;white-space:nowrap}.causal-play .route.causal{border-left:3px solid var(--blue)}.causal-play .route.noncausal{border-left:3px solid var(--red)}.causal-play .route.blocked,.causal-play .route.removed{color:var(--muted);border-left:3px solid #b8c2ca}.causal-play .explain{font-size:.78rem;color:var(--muted);margin-top:9px;min-height:2.3em}.causal-play .foot{font-size:.74rem;color:var(--muted);margin-top:11px}.causal-play .empty{font-size:.82rem;color:var(--muted);padding:8px 0}
  @media(max-width:620px){.causal-play{padding:12px}.causal-play .below{grid-template-columns:1fr}.causal-play .examples{margin-left:0}.causal-play .editor-fields{display:flex;gap:10px;flex-wrap:wrap}.causal-play .field{flex:1;min-width:120px}.causal-play .checks{display:flex;gap:10px;flex-wrap:wrap}.causal-play .route{align-items:flex-start}}

  /* Compact homepage presentation; the full editing functionality is retained. */
  .causal-play{margin:0;padding:14px;border-left-width:3px}
  .causal-play .lab-heading{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:4px}
  .causal-play .lab-heading h3{margin:0;font-size:1.12rem}
  .causal-play .help-button{padding:3px 7px;font-size:.72rem;white-space:nowrap}
  .causal-play .intro{font-size:.8rem;margin-bottom:10px}
  .causal-play .tools{gap:5px}.causal-play .tools button,.causal-play .tools select{font-size:.76rem;padding:5px 7px}
  .causal-play .hint{font-size:.73rem;min-height:0;padding:7px 0}
  .causal-play .canvas-wrap{overflow:visible}
  .causal-play svg{min-width:0;width:100%;height:230px}
  .causal-play .legend{font-size:.68rem;gap:4px 13px;padding:7px 0}
  .causal-play .below{display:block}
  .causal-play .editor{display:grid;grid-template-columns:minmax(0,1fr) 165px auto;align-items:center;gap:10px;padding:9px 10px;margin-bottom:8px}
  .causal-play .editor h4,.causal-play .editor>.small{display:none}
  .causal-play .editor-fields{display:grid;grid-template-columns:1fr 1fr;gap:9px;min-width:0}
  .causal-play .field{font-size:.68rem;margin:0;min-width:0}
  .causal-play .field input,.causal-play .field select{font-size:.75rem;margin-top:3px;padding:4px 6px;min-width:0}
  .causal-play .check{font-size:.7rem;line-height:1.25;margin:3px 0;gap:5px}
  .causal-play .check input{margin-top:1px}
  .causal-play .delete{margin:0;font-size:.67rem;padding:4px 6px}
  .causal-play .paths{padding:9px 10px}
  .causal-play .path-title{display:none}
  .causal-play .summary{font-size:.77rem;margin:0 0 7px;line-height:1.35}
  .causal-play .path-label{display:flex;gap:8px;align-items:center;font-size:.7rem;white-space:nowrap}
  .causal-play .route-select{flex:1;min-width:0;width:100%;font-size:.72rem;padding:4px 6px;text-overflow:ellipsis}
  .causal-play .explain{font-size:.71rem;line-height:1.35;margin-top:6px;min-height:0}
  .causal-play .help-dialog{max-width:520px;width:calc(100% - 32px);padding:22px;border:1px solid #dce3e8;border-radius:10px;color:#35424d;background:white;font-size:.88rem;line-height:1.55}
  .causal-play .help-dialog::backdrop{background:rgba(29,43,54,.35)}
  .causal-play .help-dialog p{margin:0 0 12px}.causal-play .help-dialog h4{font-size:1rem}
  @media(max-width:1100px){.causal-play .editor{grid-template-columns:1fr 160px}.causal-play .delete{grid-column:2;justify-self:end}.causal-play .editor-fields{grid-row:span 2}}
  @media(max-width:850px){.causal-play svg{height:auto;aspect-ratio:8/3}.causal-play .editor{grid-template-columns:1fr 170px auto}.causal-play .delete{grid-column:auto}.causal-play .editor-fields{grid-row:auto}}
  @media(max-width:540px){.causal-play .lab-heading h3{font-size:1rem}.causal-play .editor{grid-template-columns:1fr}.causal-play .editor-fields{display:grid;grid-template-columns:1fr 1fr}.causal-play .checks{display:flex;gap:10px;flex-wrap:wrap}.causal-play .delete{justify-self:start}.causal-play .examples{margin-left:0}.causal-play .path-label{display:block}.causal-play .route-select{display:block;margin-top:4px}.causal-play svg{height:200px}.causal-play .legend{gap:5px 10px}}
  .causal-play .field-choice{display:flex;align-items:center;gap:6px;font-size:.76rem;color:var(--muted)}
  .causal-play .field-choice select{max-width:180px}
  .causal-play .model-note{font-size:.71rem;line-height:1.4;color:var(--muted);margin:10px 0 0}
  .causal-play .tools{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
  .causal-play .tools .examples{margin-left:0;flex:0 1 auto;min-width:0}
  .causal-play .tools .field-choice{min-width:0;flex:0 1 auto}
  .causal-play .tools .examples select{max-width:145px;min-width:0}
  .causal-play .tools .field-choice select{max-width:155px;min-width:0}
  .causal-play .tools>button{white-space:nowrap}
  .causal-play .history-tools{display:flex;gap:6px;margin-left:auto;flex-shrink:0}
  </style>
  <div class="lab-heading"><h3>DAG! You're It</h3><button type="button" class="help-button">How it works</button></div>
  <p class="intro">Build a causal graph. See what changes when you randomize a variable or condition on it.</p>
  <div class="tools">
    <label class="examples">Try <select class="preset" aria-label="Example graph"><option value="confounding">Confounding</option><option value="mediation">Mediation</option><option value="collider">Collider</option><option value="blank">Your own graph</option></select></label>
    <label class="field-choice"><select class="subject" aria-label="Scenario field"><option value="original">Field-Agnostic</option><option value="biostat">Biostatistics / Epi</option><option value="psych">Psychology</option><option value="education">Education</option><option value="sociology">Sociology</option><option value="politics">Political science</option><option value="online">Online experiments</option><option value="econometrics">Econometrics</option><option value="ecology">Ecology</option><option value="law">Law</option></select></label>
    <button type="button" class="add">Add node</button>
    <button type="button" class="arrow" aria-pressed="false">Add arrow</button>
    <div class="history-tools"><button type="button" class="undo">Undo</button><button type="button" class="restore">Reset</button></div>
  </div>
  <div class="hint" role="status" aria-live="polite"></div>
  <div class="canvas-wrap"><svg viewBox="0 0 800 300" aria-label="Editable causal graph" role="group"></svg></div>
  <div class="legend"><span><i style="background:#287cb5"></i>Open causal path</span><span><i style="background:#b95249"></i>Open noncausal path</span><span><i style="background:#b8c2ca"></i>Blocked / other</span><span>┄ × ┄ Cut arrow</span></div>
  <div class="below"><div class="editor"></div></div>
  <dialog class="help-dialog" aria-label="How the causal graph works"><h4>Explore cause and effect</h4><p>Select a node to rename it, assign its role, randomize it, or condition on it. Drag nodes to move them, or double-click a node to delete it and its arrows. Undo restores a deleted node. The Field menu relabels the example nodes without changing arrows or actions. These are illustrative assumed graphs. To add an arrow, select its source and then its destination. Select an existing arrow to remove it.</p><p><strong>Randomization</strong> means independent assignment and cuts incoming arrows. <strong>Conditioning</strong> leaves arrows intact: it blocks paths through noncolliders and can open paths through colliders or their descendants.</p><p>Arrows represent assumed causal relationships. Open paths indicate possible dependence, not the size or sign of an effect. Conditioning on a mediator can block a path without removing the underlying causal effect.</p><button type="button" class="close-help">Close</button></dialog>
  <p class="model-note">DAGs guide what to adjust for under the assumed causal structure; they do not guard against model misspecification. Field examples are illustrative and context specific.</p>
  </section>`;
  const $ = s => root.querySelector(s);
  const uid = 'cp-' + Math.random().toString(36).slice(2);
  const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const examples = {
    confounding:{nodes:[['A','Treatment',150,145],['Y','Outcome',650,145],['C','Common cause',400,65],['M','Mediator',400,225]],edges:[['C','A'],['C','Y'],['A','Y'],['A','M'],['M','Y']]},
    mediation:{nodes:[['A','Treatment',150,205],['Y','Outcome',650,205],['M','Mediator',400,65]],edges:[['A','M'],['M','Y'],['A','Y']]},
    collider:{nodes:[['A','Treatment',150,95],['Y','Outcome',650,95],['S','Selection',400,205],['D','Follow-up',640,240]],edges:[['A','Y'],['A','S'],['Y','S'],['S','D']]},
    blank:{nodes:[['A','Treatment',170,150],['Y','Outcome',630,150]],edges:[]}
  };
  const subjects = {"original": {"title": "Original"}, "biostat": {"title": "Biostatistics / Epi", "confounding": ["Treatment", "Recovery", "Baseline severity", "Inflammation"], "mediation": ["Exercise", "Heart health", "Blood pressure"], "collider": ["Smoking", "Lung disease", "Hospital admission", "Recorded diagnosis"]}, "psych": {"title": "Psychology", "confounding": ["Therapy", "Well-being", "Baseline distress", "Coping skills"], "mediation": ["Therapy", "Well-being", "Coping skills"], "collider": ["Stress", "Depression", "Seeking care", "Clinical record"]}, "education": {"title": "Education", "confounding": ["Tutoring", "Test score", "Prior achievement", "Study habits"], "mediation": ["Tutoring", "Test score", "Study habits"], "collider": ["Test preparation", "Exam score", "College admission", "Enrollment"]}, "sociology": {"title": "Sociology", "confounding": ["Education", "Earnings", "Family resources", "Occupation"], "mediation": ["Education", "Earnings", "Occupation"], "collider": ["Education", "Earnings", "Survey response", "Complete interview"]}, "politics": {"title": "Political science", "confounding": ["Campaign contact", "Voting", "Political interest", "Political knowledge"], "mediation": ["Campaign contact", "Voting", "Political knowledge"], "collider": ["Campaign contact", "Voting", "Survey response", "Recorded response"]}, "online": {"title": "Online experiments", "confounding": ["Feature use", "Retention", "Prior engagement", "Time on platform"], "mediation": ["Feature access", "Retention", "Time on platform"], "collider": ["Feature access", "Satisfaction", "Survey response", "Feedback record"]}, "econometrics": {"title": "Econometrics", "confounding": ["Job training", "Earnings", "Prior skills", "Productivity"], "mediation": ["Job training", "Earnings", "Productivity"], "collider": ["Job training", "Earnings", "Survey response", "Recorded earnings"]}, "ecology": {"title": "Ecology", "confounding": ["Fertilizer", "Plant growth", "Soil quality", "Leaf nitrogen"], "mediation": ["Fertilizer", "Plant growth", "Leaf nitrogen"], "collider": ["Conservation effort", "Species abundance", "Site surveyed", "Species recorded"]}, "law": {"title": "Law", "confounding": ["Legal assistance", "Case success", "Case complexity", "Case preparation"], "mediation": ["Legal assistance", "Case success", "Case preparation"], "collider": ["Legal assistance", "Case success", "Case reported", "Database inclusion"]}};
  function relabel(){
    const preset=examples[state.preset];
    const labels=subjects[state.subject]?.[state.preset];
    const keys=state.preset==='confounding'?['A','Y','C','M']:state.preset==='mediation'?['A','Y','M']:['A','Y','S','D'];
    for(const n of state.nodes){const original=preset.nodes.find(v=>v[0]===n.id);if(original)n.label=labels?labels[keys.indexOf(n.id)]:original[1];}
  }
  let state, selected='A', arrowMode=false, source=null, focused=null, history=[], serial=0;
  function load(key){const p=examples[key],subject=state?.subject||'original';state={nodes:p.nodes.map(([id,label,x,y])=>({id,label,x,y})),edges:p.edges.map(([from,to])=>({from,to})),t:'A',y:'Y',random:[],adjust:[],preset:key,subject};relabel();selected='A';arrowMode=false;source=null;focused=null;render();}
  const save=()=>{history.push(JSON.stringify(state));if(history.length>60)history.shift();};
  const has=(edges,a,b)=>edges.some(e=>e.from===a&&e.to===b);
  const name=id=>state.nodes.find(n=>n.id===id)?.label || id;
  function descendants(edges,id){const seen=new Set(),todo=[id];while(todo.length){const v=todo.pop();for(const e of edges)if(e.from===v&&!seen.has(e.to)){seen.add(e.to);todo.push(e.to);}}return seen;}
  function paths(edges,start,end){if(!start||!end)return [];const out=[];function walk(v,p){if(v===end){out.push(p);return;}for(const e of edges){const w=e.from===v?e.to:e.to===v?e.from:null;if(w&&!p.includes(w))walk(w,[...p,w]);}}walk(start,[start]);return out;}
  function analyze(){
    const active=state.edges.filter(e=>!state.random.includes(e.to));
    return paths(state.edges,state.t,state.y).map(p=>{
      const removed=p.slice(1).some((v,i)=>!has(active,p[i],v)&&!has(active,v,p[i]));
      const causal=p.slice(1).every((v,i)=>has(state.edges,p[i],v));
      const blocks=[],opened=[];
      if(!removed)for(let i=1;i<p.length-1;i++){
        const v=p[i],collider=has(active,p[i-1],v)&&has(active,p[i+1],v);
        if(collider){const via=[v,...descendants(active,v)].find(d=>state.adjust.includes(d));if(!via)blocks.push(name(v)+' is an unconditioned collider');else opened.push(via===v?'conditioning on '+name(v)+' opens the collider':'conditioning on '+name(via)+' opens its ancestor collider '+name(v));}
        else if(state.adjust.includes(v))blocks.push('conditioning on '+name(v)+' blocks this path');
      }
      const status=removed?'removed':blocks.length?'blocked':causal?'causal':'noncausal';
      let label=name(p[0]);for(let i=1;i<p.length;i++)label+=(has(state.edges,p[i-1],p[i])?' → ':' ← ')+name(p[i]);
      const why=removed?'Randomization removed an arrow on this path.':blocks.length?blocks.join('; ')+'.':opened.length?opened.join('; ')+'.':causal?'Every arrow points from treatment toward outcome.':'This path is open, but it does not follow arrows from treatment to outcome.';
      return {p,status,label,why};
    }).sort((a,b)=>['noncausal','causal','blocked','removed'].indexOf(a.status)-['noncausal','causal','blocked','removed'].indexOf(b.status));
  }
  function hint(message){$('.hint').textContent=message || (arrowMode?(source?'Now select the destination. Select the source again to cancel.':'Select the source node, then the destination.'): 'Select a node to edit it. Drag to move. Double-click a node to remove it. Select an arrow to remove it.');}
  function draw(routes){
    const colors={causal:'#287cb5',noncausal:'#b95249',blocked:'#b8c2ca',removed:'#c7cfd4'};
    const on=(r,e)=>r.p.some((id,i)=>i<r.p.length-1&&((id===e.from&&r.p[i+1]===e.to)||(id===e.to&&r.p[i+1]===e.from)));
    const focus=focused===null?null:routes[focused];
    const defs=Object.entries(colors).map(([k,c])=>`<marker id="${uid}-${k}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10Z" fill="${c}"/></marker>`).join('');
    const edges=state.edges.map((e,i)=>{
      const a=state.nodes.find(n=>n.id===e.from),b=state.nodes.find(n=>n.id===e.to),dx=b.x-a.x,dy=b.y-a.y,len=Math.hypot(dx,dy)||1;
      const x1=a.x+32*dx/len,y1=a.y+32*dy/len,x2=b.x-37*dx/len,y2=b.y-37*dy/len;
      const cut=state.random.includes(e.to), relevant=routes.filter(r=>on(r,e));
      const kind=cut?'removed':focus&&on(focus,e)?focus.status:relevant.some(r=>r.status==='noncausal')?'noncausal':relevant.some(r=>r.status==='causal')?'causal':'blocked';
      const midx=(x1+x2)/2,midy=(y1+y2)/2;
      return `<g opacity="${focus&&!on(focus,e)?'.2':'1'}"><line class="edge-hit" data-edge="${i}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="transparent" stroke-width="18" tabindex="0" role="button" aria-label="Remove arrow from ${esc(a.label)} to ${esc(b.label)}"/><line pointer-events="none" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${colors[kind]}" stroke-width="2.6" ${cut?'stroke-dasharray="6 6"':`marker-end="url(#${uid}-${kind})"`}/>${cut?`<path pointer-events="none" d="M${midx-4} ${midy-4}l8 8m0 -8l-8 8" stroke="#b95249" stroke-width="2"/>`:''}</g>`;
    }).join('');
    const nodes=state.nodes.map(n=>{
      const random=state.random.includes(n.id),adjust=state.adjust.includes(n.id),role=n.id===state.t?'Treatment':n.id===state.y?'Outcome':'';
      const color=random?'#278260':adjust?'#8055a4':role==='Treatment'?'#287cb5':role==='Outcome'?'#ad651b':'#687681';
      const badge=role==='Treatment'?'T':role==='Outcome'?'Y':n.label.slice(0,2).toUpperCase();
      return `<g class="node" data-node="${n.id}" transform="translate(${n.x},${n.y})" tabindex="0" role="button" aria-label="${esc(n.label)}${role?', '+role:''}${random?', randomized':''}${adjust?', conditioned':''}. Select to edit." aria-pressed="${selected===n.id}"><circle class="halo" r="36" fill="none" stroke="${source===n.id?'#287cb5':'#ccdce8'}" stroke-width="2" opacity="${selected===n.id||source===n.id?1:0}"/><circle r="29" fill="${random?'#eaf7ef':adjust?'#f3edf9':'white'}" stroke="${color}" stroke-width="2"/>${adjust?'<rect x="-24" y="-24" width="48" height="48" rx="5" fill="none" stroke="#8055a4" stroke-width="1.5"/>':''}<text text-anchor="middle" dy="6" font-size="17" font-weight="700" fill="${color}">${esc(badge)}</text><text text-anchor="middle" y="52" font-size="13" font-weight="600" fill="#35424d" paint-order="stroke" stroke="white" stroke-width="4">${esc(n.label)}</text>${random?'<text text-anchor="middle" y="-42" font-size="11" fill="#278260">Randomized</text>':adjust?'<text text-anchor="middle" y="-42" font-size="11" fill="#8055a4">Conditioned</text>':''}</g>`;
    }).join('');
    $('svg').innerHTML=`<defs>${defs}</defs>${edges}${nodes}`;
  }
  function editor(){
    const n=state.nodes.find(n=>n.id===selected);
    if(!n){$('.editor').innerHTML='<h4>Edit a node</h4><p class="small">Select a node in the graph, or add one.</p>';return;}
    $('.editor').innerHTML=`<h4>Edit node</h4><div class="editor-fields"><label class="field">Name<input class="name" maxlength="22" value="${esc(n.label)}"></label><label class="field">Role<select class="role"><option value="other">Other variable</option><option value="t">Treatment</option><option value="y">Outcome</option></select></label></div><div class="checks"><label class="check random-label"><input type="checkbox" class="random" ${state.random.includes(n.id)?'checked':''}>Randomize / make exogenous</label><label class="check"><input type="checkbox" class="adjust" ${state.adjust.includes(n.id)?'checked':''} ${[state.t,state.y].includes(n.id)?'disabled':''}>Condition / adjust</label></div><p class="small">${[state.t,state.y].includes(n.id)?'Choose another variable to condition on.':'Conditioning can block a chain or open a collider.'}</p><button type="button" class="delete">Delete node</button>`;
    $('.role').value=n.id===state.t?'t':n.id===state.y?'y':'other';
    $('.name').onchange=e=>{const label=e.target.value.trim();if(!label){e.target.value=n.label;return;}if(state.nodes.some(v=>v.id!==n.id&&v.label.toLowerCase()===label.toLowerCase())){e.target.value=n.label;hint('Choose a distinct name for each variable.');return;}save();n.label=label;focused=null;render();};
    $('.role').onchange=e=>{save();if(state.t===n.id)state.t=null;if(state.y===n.id)state.y=null;if(e.target.value!=='other'){state[e.target.value]=n.id;state.adjust=state.adjust.filter(id=>id!==n.id);}focused=null;render();};
    for(const key of ['random','adjust'])$('.'+key).onchange=()=>{save();state[key]=state[key].includes(n.id)?state[key].filter(id=>id!==n.id):[...state[key],n.id];focused=null;render();};
    $('.delete').onclick=()=>deleteNode(n.id);
  }
  function deleteNode(id){
    if(!state.nodes.some(n=>n.id===id))return;
    save();state.nodes=state.nodes.filter(n=>n.id!==id);
    state.edges=state.edges.filter(e=>e.from!==id&&e.to!==id);
    for(const key of ['random','adjust'])state[key]=state[key].filter(v=>v!==id);
    if(state.t===id)state.t=null;if(state.y===id)state.y=null;
    if(selected===id)selected=null;source=null;focused=null;lastTap=null;render();
  }
  function render(){
    const routes=analyze();draw(routes);editor();hint();
    $('.subject').value=state.subject;$('.preset').value=state.preset;
    $('.arrow').setAttribute('aria-pressed',String(arrowMode));$('.undo').disabled=!history.length;$('.add').disabled=state.nodes.length>=8;$('.add').title=state.nodes.length>=8?'Keep the graph readable: at most eight nodes.':'Add a variable';$('.restore').disabled=false;

  }
  function selectNode(id){
    if(arrowMode){if(!source){source=id;selected=id;render();return;}if(source===id){source=null;render();return;}
      if(has(state.edges,source,id)){hint('That arrow already exists.');return;}
      if(descendants(state.edges,id).has(source)){hint('That arrow would create a cycle. Choose a different destination.');return;}
      save();state.edges.push({from:source,to:id});source=null;focused=null;render();return;
    }selected=id;render();
  }
  $('.arrow').onclick=()=>{arrowMode=!arrowMode;source=null;render();};
  $('.add').onclick=()=>{if(state.nodes.length>=8)return;save();let label;do{label='Variable '+(++serial);}while(state.nodes.some(n=>n.label===label));const spots=[[400,150],[200,65],[600,65],[200,225],[600,225],[400,65],[400,225],[90,150],[710,150]];const [x,y]=spots.reduce((best,s)=>{const score=p=>Math.min(...state.nodes.map(n=>Math.hypot(n.x-p[0],n.y-p[1])),999);return score(s)>score(best)?s:best;});const id='N'+serial;state.nodes.push({id,label,x,y});selected=id;arrowMode=false;source=null;focused=null;render();$('.name').focus();$('.name').select();};
  $('.undo').onclick=()=>{if(!history.length)return;state=JSON.parse(history.pop());if(!state.nodes.some(n=>n.id===selected))selected=state.nodes[0]?.id;source=null;focused=null;render();};
  $('.restore').onclick=()=>{save();state.subject='original';drag=null;lastTap=null;load('confounding');};
  $('.subject').onchange=e=>{save();state.subject=e.target.value;relabel();focused=null;lastTap=null;render();};
  $('.preset').onchange=e=>{save();load(e.target.value);};
  function removeEdge(target){const i=Number(target.dataset.edge);save();state.edges.splice(i,1);focused=null;render();}
  $('svg').addEventListener('click',e=>{if(e.target.closest('[data-edge]'))removeEdge(e.target.closest('[data-edge]'));});
  $('svg').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){const n=e.target.closest('[data-node]'),edge=e.target.closest('[data-edge]');if(n||edge){e.preventDefault();if(n)selectNode(n.dataset.node);else removeEdge(edge);}}});
  root.addEventListener('keydown',e=>{if(e.key==='Escape'){arrowMode=false;source=null;focused=null;render();}});
  let drag=null,lastTap=null;
  function point(e){const p=$('svg').createSVGPoint();p.x=e.clientX;p.y=e.clientY;return p.matrixTransform($('svg').getScreenCTM().inverse());}
  $('svg').addEventListener('pointerdown',e=>{const g=e.target.closest('[data-node]');if(!g||e.button!==0)return;e.preventDefault();const n=state.nodes.find(n=>n.id===g.dataset.node),p=point(e);drag={id:n.id,px:p.x,py:p.y,x:n.x,y:n.y,moved:false};$('svg').setPointerCapture(e.pointerId);});
  $('svg').addEventListener('pointermove',e=>{if(!drag||arrowMode)return;const p=point(e);if(!drag.moved&&Math.hypot(p.x-drag.px,p.y-drag.py)<5)return;if(!drag.moved){save();drag.moved=true;lastTap=null;}const n=state.nodes.find(n=>n.id===drag.id);n.x=Math.max(60,Math.min(740,drag.x+p.x-drag.px));n.y=Math.max(60,Math.min(240,drag.y+p.y-drag.py));draw(analyze());});
  // Track taps by node ID: render() replaces SVG children after selection,
  // so relying solely on the browser's native dblclick event is unreliable.
  $('svg').addEventListener('pointerup',e=>{
    if(!drag)return;const d=drag;drag=null;
    if(d.moved){lastTap=null;selected=d.id;render();return;}
    const now=e.timeStamp;
    if(lastTap&&lastTap.id===d.id&&now-lastTap.time<450&&Math.hypot(e.clientX-lastTap.x,e.clientY-lastTap.y)<12){deleteNode(d.id);return;}
    lastTap={id:d.id,time:now,x:e.clientX,y:e.clientY};selectNode(d.id);
  });
  $('svg').addEventListener('dblclick',e=>{const g=e.target.closest('[data-node]');if(g){e.preventDefault();deleteNode(g.dataset.node);}});
  $('svg').addEventListener('pointercancel',()=>{drag=null;lastTap=null;render();});
  $('.help-button').onclick=()=>$('.help-dialog').showModal();
  $('.close-help').onclick=()=>$('.help-dialog').close();
  load('confounding');
  return root;
}
