export default function render(html) {
  // Self-contained Observable JS cell. No external packages or numerical model.
  const root = html`<section class="ds-lab">
    <style>
      .ds-lab{--ink:#35424d;--muted:#687681;--line:#dce3e8;--blue:#287cb5;--purple:#8055a4;--green:#278260;--orange:#b46a23;--pale:#f1f5f8;font-family:var(--bs-body-font-family,system-ui,sans-serif);color:var(--ink);background:#fbfcfd;border:1px solid var(--line);border-left:4px solid var(--blue);border-radius:10px;padding:16px;margin:1rem 0;line-height:1.42}
      .ds-lab *{box-sizing:border-box}.ds-lab h3{font-size:1.13rem;font-weight:750;margin:0}.ds-lab h4{font-size:.88rem;margin:0 0 8px;font-weight:750}.ds-lab p{margin:0}
      .ds-lab .heading{display:flex;gap:10px;align-items:center;justify-content:space-between}.ds-lab .intro{font-size:.79rem;color:var(--muted);margin:4px 0 12px}.ds-lab .help{font-size:.73rem;white-space:nowrap}
      .ds-lab button,.ds-lab select,.ds-lab input{font:inherit;color:inherit}.ds-lab button,.ds-lab select,.ds-lab input[type=text]{background:#fff;border:1px solid #ccd6de;border-radius:6px;padding:6px 9px;font-size:.79rem}.ds-lab button{cursor:pointer}.ds-lab button:hover{background:#eef5fa}.ds-lab button:disabled{opacity:.4;cursor:default}.ds-lab button[aria-pressed=true]{background:#e9f3fa;border-color:var(--blue);color:#1b5b84}.ds-lab :focus-visible{outline:3px solid #8abfdf;outline-offset:2px}
      .ds-lab .toolbar{display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin-bottom:11px}.ds-lab .toolbar label{display:flex;align-items:center;gap:6px;color:var(--muted);font-size:.79rem}.ds-lab .toolbar .right{margin-left:auto;display:flex;gap:6px;flex-wrap:wrap}
      .ds-lab .query{display:flex;flex-wrap:wrap;gap:8px;align-items:center;padding:10px 11px;margin-bottom:9px;background:#fff;border:1px solid var(--line);border-radius:8px}.ds-lab .query label{display:flex;align-items:center;gap:5px;font-size:.78rem;color:var(--muted)}.ds-lab .query select{max-width:148px;color:var(--ink)}.ds-lab .conditioned{font-size:.8rem;margin-left:auto}.ds-lab .conditioned strong{color:var(--purple)}.ds-lab .clear{font-size:.72rem;padding:5px 8px}
      .ds-lab .hint{font-size:.75rem;color:var(--muted);min-height:1.5rem;padding:0 0 7px}.ds-lab .swipe{display:none;font-size:.7rem;color:var(--muted);padding-top:5px}.ds-lab .graph-wrap{background:white;border:1px solid var(--line);border-radius:8px;overflow:auto}.ds-lab svg{display:block;width:100%;min-width:540px;aspect-ratio:820/310;touch-action:none}.ds-lab .node{cursor:pointer}.ds-lab .node text{pointer-events:none}.ds-lab .node:focus-visible{outline:none}.ds-lab .node:focus-visible .halo{stroke:var(--blue)!important;opacity:1!important}.ds-lab .edge-hit{cursor:pointer}
      .ds-lab .legend{display:flex;gap:8px 18px;flex-wrap:wrap;color:var(--muted);font-size:.73rem;padding:8px 0 11px}.ds-lab .dot{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:5px;vertical-align:baseline}.ds-lab .line{display:inline-block;width:21px;height:3px;vertical-align:middle;margin-right:5px}
      .ds-lab .result{border-radius:8px;border:1px solid var(--line);background:white;padding:13px;margin:0 0 10px}.ds-lab .verdict{font-size:1.05rem;font-weight:750;line-height:1.45}.ds-lab .verdict.sep{color:#21734c}.ds-lab .verdict.conn{color:#a45b28}.ds-lab .qualification{font-size:.78rem;color:var(--muted);margin-top:4px}.ds-lab .counts{font-size:.75rem;margin-top:7px;color:var(--muted)}
      .ds-lab .bottom{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(210px,.9fr);gap:10px}.ds-lab .panel{background:#fff;border:1px solid var(--line);padding:11px;border-radius:8px;min-width:0}.ds-lab .path-list{display:grid;gap:5px;max-height:232px;overflow:auto}.ds-lab .path-button{width:100%;display:flex;justify-content:space-between;gap:10px;text-align:left;align-items:center;padding:7px 9px;border-left:4px solid #bdc7cf;line-height:1.35}.ds-lab .path-button.open{border-left-color:var(--blue)}.ds-lab .path-button.selected{background:#eaf3f9}.ds-lab .path-button .path-names{font-size:.78rem;overflow-wrap:anywhere}.ds-lab .path-button .status{font-size:.73rem;white-space:nowrap;font-weight:650}.ds-lab .path-button .status.open{color:#1e719e}.ds-lab .path-button .status.blocked{color:#7e8a93}.ds-lab .explain{font-size:.76rem;color:var(--muted);margin-top:9px;min-height:2.2em}.ds-lab .muted{color:var(--muted);font-size:.75rem}
      .ds-lab .pair-list{max-height:258px;overflow:auto}.ds-lab .pair{display:flex;justify-content:space-between;gap:9px;padding:6px 3px;border-bottom:1px solid #edf0f3;font-size:.78rem}.ds-lab .pair:last-child{border-bottom:0}.ds-lab .pair .implied{color:#21734c;font-weight:650}.ds-lab .pair .connected{color:#9c642e}.ds-lab .pair-button{padding:0;border:0;background:none!important;cursor:pointer;text-align:left;text-decoration:underline;text-decoration-color:#ccd6de;text-underline-offset:3px}.ds-lab .pair-button:hover{color:var(--blue)}
      .ds-lab .editor{display:flex;gap:8px;align-items:end;flex-wrap:wrap;margin-top:10px;padding:10px 11px;border:1px solid var(--line);border-radius:8px;background:white}.ds-lab .editor .subhead{font-size:.76rem;font-weight:700;margin-right:7px;align-self:center}.ds-lab .editor label{font-size:.72rem;color:var(--muted);display:grid;gap:3px}.ds-lab .editor input{width:140px;max-width:100%}.ds-lab .editor button{font-size:.74rem;padding:6px 8px}.ds-lab .editor .delete{color:#a14e46}.ds-lab .foot{font-size:.73rem;color:var(--muted);margin-top:10px;line-height:1.5}
      .ds-lab .help-dialog{max-width:590px;width:calc(100% - 32px);padding:22px;border:1px solid var(--line);border-radius:10px;background:white;color:#35424d;font:inherit;line-height:1.5}.ds-lab .help-dialog::backdrop{background:rgba(29,43,54,.35)}.ds-lab .help-dialog p{margin:0 0 13px;font-size:.86rem}.ds-lab .help-dialog h4{font-size:1rem}.ds-lab .help-dialog ul{font-size:.85rem;margin:0 0 13px;padding-left:21px}
      @media(max-width:740px){.ds-lab .swipe{display:block}.ds-lab .bottom{grid-template-columns:1fr}.ds-lab .toolbar .right{margin-left:0}.ds-lab .conditioned{margin-left:0;width:100%}.ds-lab{padding:12px}.ds-lab .result{padding:10px}.ds-lab .query{padding:8px}.ds-lab .query select{max-width:118px}}
      /* Compact graph presentation: match the earlier DAG! You're it widget.
         Keep the SVG's 820 x 310 coordinate system and all interaction logic intact. */
      .ds-lab{margin:0;padding:14px;border-left-width:3px}
      .ds-lab .intro{margin:3px 0 9px}
      .ds-lab .toolbar{gap:5px;margin-bottom:7px}
      .ds-lab .toolbar button,.ds-lab .toolbar select{font-size:.76rem;padding:5px 7px}
      .ds-lab .query{padding:7px 9px;margin-bottom:7px;gap:6px}
      .ds-lab .hint{min-height:0;padding:0 0 6px;font-size:.73rem}
      .ds-lab .graph-wrap{overflow:hidden}
      .ds-lab svg{display:block;width:100%;min-width:0;height:230px;aspect-ratio:auto}
      .ds-lab .swipe{display:none}
      .ds-lab .legend{gap:5px 13px;padding:7px 0 8px;font-size:.69rem}
      .ds-lab .result{padding:9px 11px;margin-bottom:8px}
      .ds-lab .verdict{font-size:.92rem;line-height:1.35}
      .ds-lab .qualification{font-size:.74rem;margin-top:3px}
      .ds-lab .counts{font-size:.71rem;margin-top:4px}
      .ds-lab .panel{padding:9px 10px}
      .ds-lab .path-list,.ds-lab .pair-list{max-height:175px}
      .ds-lab .path-button{padding:5px 8px}
      .ds-lab .editor{margin-top:8px;padding:8px 10px}
      .ds-lab .foot{margin-top:8px;font-size:.7rem}
      @media(max-width:850px){.ds-lab svg{height:210px}}
      @media(max-width:540px){.ds-lab{padding:12px}.ds-lab svg{height:200px}.ds-lab .bottom{grid-template-columns:1fr}.ds-lab .query select{max-width:118px}}
      /* Responsive to the sidebar's width, not just the browser viewport. */
      .ds-lab{container-type:inline-size}
      @container (max-width:720px){
        .ds-lab .bottom{grid-template-columns:minmax(0,1fr)}
        .ds-lab .toolbar .right{margin-left:0}
        .ds-lab .conditioned{margin-left:0}
        .ds-lab .query select{max-width:130px}
      }
    </style>
    <div class="heading"><h3>D-separation: Open or blocked?</h3><button type="button" class="help">How it works</button></div>
    <p class="intro">Explore the conditional independences implied by a causal DAG. Click a node to condition on it; click again to undo.</p>
    <div class="toolbar">
      <label>Example <select class="preset" aria-label="Choose a DAG example">
        <option value="collider">Collider</option><option value="chain">Chain</option><option value="fork">Common cause</option><option value="descendant">Collider descendant</option><option value="twopaths">Two open paths</option><option value="mbias">M-bias</option><option value="blank">Build your own</option>
      </select></label>
      <div class="right"><button class="add" type="button">+ Node</button><button class="arrow" type="button" aria-pressed="false">Add arrow</button><button class="undo" type="button">Undo</button><button class="reset" type="button">Reset</button></div>
    </div>
    <div class="query"><label>Variable 1 <select class="x" aria-label="First query variable"></select></label><label>Variable 2 <select class="y" aria-label="Second query variable"></select></label><span class="conditioned">Given <strong class="z-label">∅</strong></span><button type="button" class="clear">Clear conditioning</button></div>
    <div class="hint" role="status" aria-live="polite"></div>
    <div class="graph-wrap"><svg viewBox="0 0 820 310" role="group" aria-label="Editable causal graph with clickable conditioning nodes"></svg></div><p class="swipe">Swipe horizontally to explore the entire graph.</p>
    <div class="legend"><span><i class="dot" style="background:#287cb5"></i>Queried variables</span><span><i class="dot" style="background:#8055a4"></i>Conditioned</span><span><i class="line" style="background:#287cb5"></i>Open path</span><span><i class="line" style="background:#b8c2ca"></i>Blocked path</span></div>
    <div class="result" aria-live="polite"><div class="verdict"></div><div class="qualification"></div><div class="counts"></div></div>
    <div class="bottom"><div class="panel"><h4>Every path between the selected variables</h4><div class="path-list"></div><p class="explain"></p></div><div class="panel"><h4>Pairwise implications given the same conditioning set</h4><p class="muted pair-caption"></p><div class="pair-list"></div></div></div>
    <div class="editor"><span class="subhead">Graph editor</span><label>Selected node <select class="selected-node" aria-label="Node to edit"></select></label><label>Rename <input class="rename" type="text" maxlength="18" aria-label="Rename selected node" /></label><button type="button" class="rename-button">Rename</button><button type="button" class="delete">Delete node</button></div>
    <p class="foot">Under the causal Markov assumption, <strong>d-separation implies conditional independence</strong>. D-connection only permits dependence; it does not guarantee it. These implications concern the assumed graph, not estimated associations or effect sizes.</p>
    <dialog class="help-dialog" aria-label="D-separation widget instructions"><h4>How to use the d-separation lab</h4><p><strong>Click a node</strong> to add or remove it from the conditioning set (purple). The two queried nodes cannot be conditioned on; change them with the Variable 1 and Variable 2 menus. Drag nodes to rearrange the graph.</p><p><strong>Inspect paths:</strong> choose any path to highlight it. A path is blocked if it contains a conditioned noncollider or an unactivated collider. A collider becomes activated when it or any descendant is conditioned on.</p><p><strong>Edit a DAG:</strong> Add arrow, then click its source and destination; arrows that create cycles are rejected. Click an existing arrow to remove it. Add Node and use the editor below to rename or delete it. Undo reverses your last change.</p><p><strong>Interpretation:</strong> if all paths between the queried nodes are blocked, d-separation implies conditional independence under the Markov assumption. Open paths do not prove statistical dependence; faithfulness is an additional assumption.</p><button type="button" class="close-help">Close</button></dialog>
  </section>`;

  const $ = s => root.querySelector(s);
  const uid = 'ds-' + Math.random().toString(36).slice(2);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const presets = {
    collider: {nodes:[['X',170,95],['Y',650,95],['C',410,225]], edges:[['X','C'],['Y','C']], x:'X',y:'Y'},
    chain: {nodes:[['X',150,155],['M',410,155],['Y',670,155]], edges:[['X','M'],['M','Y']],x:'X',y:'Y'},
    fork: {nodes:[['X',170,225],['Y',650,225],['C',410,75]],edges:[['C','X'],['C','Y']],x:'X',y:'Y'},
    descendant: {nodes:[['X',170,95],['Y',650,95],['C',410,150],['D',410,260]],edges:[['X','C'],['Y','C'],['C','D']],x:'X',y:'Y'},
    twopaths: {nodes:[['X',165,150],['Y',655,150],['U',410,50],['M',410,255]],edges:[['U','X'],['U','Y'],['X','M'],['M','Y']],x:'X',y:'Y'},
    mbias: {nodes:[['X',100,190],['U',250,80],['C',410,190],['V',570,80],['Y',720,190]],edges:[['U','X'],['U','C'],['V','C'],['V','Y']],x:'X',y:'Y'},
    blank: {nodes:[['X',230,155],['Y',590,155]],edges:[],x:'X',y:'Y'}
  };
  let state, selected='C', history=[], arrowMode=false, arrowSource=null, focus=null, serial=0, drag=null;
  const has = (edges,a,b) => edges.some(e => e.from===a && e.to===b);
  const neighbors = (edges,v) => edges.flatMap(e => e.from===v?[e.to]:e.to===v?[e.from]:[]);
  const display = id => state.nodes.find(n=>n.id===id)?.label ?? id;
  function descendants(edges, id) {
    const seen=new Set(), stack=[id];
    while(stack.length){const v=stack.pop();for(const e of edges)if(e.from===v&&!seen.has(e.to)){seen.add(e.to);stack.push(e.to);}}
    seen.delete(id); return seen;
  }
  function allPaths(edges,a,b){
    if(!a||!b||a===b)return [];
    const out=[];
    function visit(v,path){if(v===b){out.push(path);return;}for(const w of neighbors(edges,v)){if(!path.includes(w))visit(w,[...path,w]);}}
    visit(a,[a]);return out;
  }
  function explainPath(edges,path,conditionSet){
    const blockers=[],activations=[],colliders=[];
    for(let i=1;i<path.length-1;i++){
      const [a,v,b]=path.slice(i-1,i+2);
      if(has(edges,a,v)&&has(edges,b,v)){
        colliders.push(v);
        const activating=[v,...descendants(edges,v)].find(k=>conditionSet.has(k));
        if(activating===undefined)blockers.push(`${display(v)} is a collider; neither it nor any of its descendants is conditioned on`);
        else activations.push(activating===v?`Conditioning on ${display(v)} activates its collider`:`Conditioning on descendant ${display(activating)} activates the collider at ${display(v)}`);
      } else if(conditionSet.has(v)){
        blockers.push(`${display(v)} is a conditioned noncollider`);
      }
    }
    return {open:blockers.length===0,blockers,activations,colliders};
  }
  function analyzePair(a,b){
    return allPaths(state.edges,a,b).map(ids=>({ids, ...explainPath(state.edges,ids,new Set(state.z))}));
  }
  function labelPath(ids){
    let out=display(ids[0]);
    for(let i=1;i<ids.length;i++)out+=(has(state.edges,ids[i-1],ids[i])?' → ':' ← ')+display(ids[i]);
    return out;
  }
  function key(ids){return ids.join('|');}
  function save(){history.push(JSON.stringify(state));if(history.length>80)history.shift();}
  function load(name){
    const p=presets[name];
    state={preset:name,nodes:p.nodes.map(([id,x,y])=>({id,label:id,x,y})),edges:p.edges.map(([from,to])=>({from,to})),x:p.x,y:p.y,z:[]};
    selected=p.nodes.find(n=>n[0]!==state.x&&n[0]!==state.y)?.[0]||state.x;
    arrowMode=false;arrowSource=null;focus=null;drag=null;render();
  }
  function hint(s){$('.hint').textContent=s||(arrowMode?(arrowSource?'Now click the destination node. Click the source again to cancel.':'Click the source node, then its destination.'): 'Click any non-query node to condition on it. Drag to move nodes; click an arrow to remove it.');}
  function renderSelects(){
    const options=state.nodes.map(n=>`<option value="${esc(n.id)}">${esc(n.label)}</option>`).join('');
    for(const [selector,val] of [['.x',state.x],['.y',state.y]]){$(selector).innerHTML=options;$(selector).value=val;}
    $('.z-label').textContent=state.z.length?'{'+state.z.map(display).join(', ')+'}':'∅';
    $('.clear').disabled=!state.z.length;
    $('.preset').value=state.preset;
    $('.undo').disabled=!history.length;
    $('.add').disabled=state.nodes.length>=8;
    $('.arrow').setAttribute('aria-pressed',String(arrowMode));
    $('.selected-node').innerHTML=options;
    if(!state.nodes.some(n=>n.id===selected))selected=state.nodes[0]?.id||null;
    $('.selected-node').value=selected||'';
    const s=state.nodes.find(n=>n.id===selected);
    $('.rename').value=s?.label||'';
    $('.delete').disabled=state.nodes.length<=2;
    $('.rename-button').disabled=!s;
  }
  function result(paths){
    const open=paths.filter(p=>p.open).length;
    const sep=open===0;
    const z=state.z.length?`{${state.z.map(display).join(', ')}}`:'∅';
    const lhs=`${display(state.x)} ⟂ ${display(state.y)} | ${z}`;
    const label=$('.verdict');
    label.className='verdict '+(sep?'sep':'conn');
    label.textContent=sep?`D-separated: ${lhs}`:`D-connected: ${display(state.x)} and ${display(state.y)} given ${z}`;
    $('.qualification').textContent=sep?'The graph implies this conditional independence under the causal Markov assumption.':'At least one path is open. Dependence is possible, not guaranteed (faithfulness would rule out cancellations).';
    $('.counts').textContent=`${paths.length} path${paths.length===1?'':'s'} · ${open} open · ${paths.length-open} blocked`;
  }
  function draw(paths){
    const svg=$('svg'),chosen=focus?paths.find(p=>key(p.ids)===focus):null;
    if(focus&&!chosen)focus=null;
    const focused=chosen||null;
    const openEdge=new Set(),blockedEdge=new Set(),focusedEdges=new Set();
    function edgeKey(a,b){return [a,b].sort().join('|');}
    for(const p of paths)for(let i=0;i<p.ids.length-1;i++)(p.open?openEdge:blockedEdge).add(edgeKey(p.ids[i],p.ids[i+1]));
    if(focused)for(let i=0;i<focused.ids.length-1;i++)focusedEdges.add(edgeKey(focused.ids[i],focused.ids[i+1]));
    const markers=`<defs>
      <marker id="${uid}-active" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10Z" fill="#287cb5"/></marker>
      <marker id="${uid}-blocked" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10Z" fill="#b8c2ca"/></marker>
      <marker id="${uid}-neutral" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10Z" fill="#9aa9b5"/></marker>
      </defs>`;
    const lines=state.edges.map((e,i)=>{
      const a=state.nodes.find(n=>n.id===e.from),b=state.nodes.find(n=>n.id===e.to);
      const dx=b.x-a.x,dy=b.y-a.y,len=Math.hypot(dx,dy)||1;
      const x1=a.x+27*dx/len,y1=a.y+27*dy/len,x2=b.x-31*dx/len,y2=b.y-31*dy/len;
      const ek=edgeKey(e.from,e.to),isFocus=focused&&focusedEdges.has(ek);
      const color=focused?(isFocus?(focused.open?'active':'blocked'):'neutral'):(openEdge.has(ek)?'active':blockedEdge.has(ek)?'blocked':'neutral');
      const opacity=focused&&!isFocus?.15:1;
      return `<g opacity="${opacity}"><line data-edge="${i}" class="edge-hit" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="transparent" stroke-width="20" role="button" tabindex="0" aria-label="Remove arrow ${esc(display(e.from))} to ${esc(display(e.to))}"/><line pointer-events="none" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color==='active'?'#287cb5':color==='blocked'?'#b8c2ca':'#9aa9b5'}" stroke-width="${isFocus?3.8:2.5}" marker-end="url(#${uid}-${color})"/></g>`;
    }).join('');
    const circles=state.nodes.map(n=>{
      const queried=n.id===state.x||n.id===state.y,conditioned=state.z.includes(n.id),isCollider=focused?.colliders.includes(n.id)||false;
      const source=arrowSource===n.id;
      const main=conditioned?'#8055a4':queried?'#287cb5':'#687681';
      const fill=conditioned?'#f4edfa':queried?'#eaf3f9':'white';
      return `<g class="node" data-node="${esc(n.id)}" transform="translate(${n.x},${n.y})" tabindex="0" role="button" aria-label="${esc(n.label)}; ${conditioned?'conditioned':queried?'query variable':'click to toggle conditioning'}" aria-pressed="${conditioned}"><circle class="halo" r="32" fill="none" stroke="${source?'#287cb5':isCollider?'#b46a23':'#d2dde5'}" stroke-width="${isCollider||source?3:2}" opacity="${isCollider||source?1:0}"/><circle r="24" fill="${fill}" stroke="${main}" stroke-width="2.4"/><text text-anchor="middle" dy="5" font-size="16" font-weight="750" fill="${main}">${n.id===state.x?'1':n.id===state.y?'2':conditioned?'Z':esc(n.label.slice(0,2))}</text><text text-anchor="middle" y="43" font-size="13" font-weight="600" fill="#35424d" paint-order="stroke" stroke="white" stroke-width="4">${esc(n.label)}</text>${conditioned?'<text text-anchor="middle" y="-36" font-size="11" fill="#8055a4">Conditioned</text>':''}</g>`;
    }).join('');
    svg.innerHTML=markers+lines+circles;
  }
  function pathList(paths){
    const list=$('.path-list');
    if(!paths.length){list.innerHTML='<p class="muted">No path connects these variables.</p>';$('.explain').textContent='With no connecting path, these variables are d-separated regardless of the conditioning set.';return;}
    list.innerHTML=paths.map((p,i)=>`<button type="button" class="path-button ${p.open?'open':'blocked'} ${focus===key(p.ids)?'selected':''}" data-path="${i}" aria-pressed="${focus===key(p.ids)}"><span class="path-names">${esc(labelPath(p.ids))}</span><span class="status ${p.open?'open':'blocked'}">${p.open?'OPEN':'BLOCKED'}</span></button>`).join('');
    const f=paths.find(p=>key(p.ids)===focus);
    if(!f){$('.explain').textContent='Select a path to highlight it and see exactly which nodes open or block it.';return;}
    const blocked=f.blockers.length?f.blockers.map(s=>'Blocked: '+s+'.').join(' '):'';
    const activated=f.activations.length?f.activations.join('. ')+'. ':'';
    $('.explain').textContent=blocked||activated||(f.open?'This path is open: no noncollider is conditioned on, and every collider is activated.':'This path is blocked.');
    if(blocked&&activated)$('.explain').textContent=activated+blocked;
  }
  function pairList(){
    const unconditioned=state.nodes.filter(n=>!state.z.includes(n.id));
    const pairs=[];
    for(let i=0;i<unconditioned.length;i++)for(let j=i+1;j<unconditioned.length;j++){
      const a=unconditioned[i].id,b=unconditioned[j].id;
      pairs.push({a,b,sep:analyzePair(a,b).every(p=>!p.open)});
    }
    const nSep=pairs.filter(p=>p.sep).length;
    $('.pair-caption').textContent=`${nSep} d-separated pair${nSep===1?'':'s'} out of ${pairs.length}. Click a pair to inspect it.`;
    $('.pair-list').innerHTML=pairs.map(p=>`<div class="pair"><button type="button" class="pair-button" data-pair-a="${esc(p.a)}" data-pair-b="${esc(p.b)}">${esc(display(p.a))} and ${esc(display(p.b))}</button><span class="${p.sep?'implied':'connected'}">${p.sep?'d-separated':'d-connected'}</span></div>`).join('');
  }
  function render(){
    if(state.x===state.y){const alternate=state.nodes.find(n=>n.id!==state.x);if(alternate)state.y=alternate.id;}
    state.z=state.z.filter(id=>id!==state.x&&id!==state.y&&state.nodes.some(n=>n.id===id));
    const paths=analyzePair(state.x,state.y);
    if(focus&&!paths.some(p=>key(p.ids)===focus))focus=null;
    renderSelects();result(paths);pathList(paths);pairList();draw(paths);hint();
  }
  function toggleNode(id){
    if(arrowMode){
      if(!arrowSource){arrowSource=id;selected=id;render();return;}
      if(arrowSource===id){arrowSource=null;render();return;}
      if(has(state.edges,arrowSource,id)){hint('That arrow already exists.');return;}
      if(descendants(state.edges,id).has(arrowSource)){hint('That arrow would create a directed cycle.');return;}
      save();state.edges.push({from:arrowSource,to:id});selected=id;arrowSource=null;focus=null;render();return;
    }
    selected=id;
    if(id===state.x||id===state.y){render();hint(`${display(id)} is a query variable. Choose another variable above to condition on it.`);return;}
    save();state.z=state.z.includes(id)?state.z.filter(z=>z!==id):[...state.z,id];focus=null;render();
  }
  function removeEdge(i){if(!Number.isInteger(i)||i<0||i>=state.edges.length)return;save();state.edges.splice(i,1);focus=null;render();}
  function deleteNode(id){
    if(state.nodes.length<=2)return;
    save();state.nodes=state.nodes.filter(n=>n.id!==id);state.edges=state.edges.filter(e=>e.from!==id&&e.to!==id);state.z=state.z.filter(z=>z!==id);
    if(state.x===id)state.x=state.nodes[0].id;
    if(state.y===id||state.y===state.x)state.y=state.nodes.find(n=>n.id!==state.x).id;
    selected=state.nodes.find(n=>n.id!==state.x&&n.id!==state.y)?.id||state.x;
    arrowSource=null;focus=null;render();
  }
  $('.preset').onchange=e=>{save();load(e.target.value);};
  $('.reset').onclick=()=>{save();load(state.preset);};
  $('.undo').onclick=()=>{if(!history.length)return;state=JSON.parse(history.pop());arrowMode=false;arrowSource=null;focus=null;render();};
  $('.add').onclick=()=>{
    if(state.nodes.length>=8)return;
    save();let id;do{id='N'+(++serial);}while(state.nodes.some(n=>n.id===id));
    const spots=[[400,155],[220,80],[600,80],[220,240],[600,240],[410,75],[410,235],[90,150],[730,150]];
    const best=spots.reduce((a,b)=>{const score=p=>Math.min(900,...state.nodes.map(n=>Math.hypot(n.x-p[0],n.y-p[1])));return score(b)>score(a)?b:a;});
    state.nodes.push({id,label:'Variable '+serial,x:best[0],y:best[1]});selected=id;arrowMode=false;focus=null;render();$('.rename').focus();$('.rename').select();
  };
  $('.arrow').onclick=()=>{arrowMode=!arrowMode;arrowSource=null;render();};
  $('.clear').onclick=()=>{if(!state.z.length)return;save();state.z=[];focus=null;render();};
  function changeQuery(which,next){if(next===state[which])return;save();if(next===state[which==='x'?'y':'x'])state[which==='x'?'y':'x']=state[which];state[which]=next;focus=null;render();}
  $('.x').onchange=e=>changeQuery('x',e.target.value);
  $('.y').onchange=e=>changeQuery('y',e.target.value);
  $('.path-list').onclick=e=>{const b=e.target.closest('[data-path]');if(!b)return;const paths=analyzePair(state.x,state.y);const p=paths[Number(b.dataset.path)];if(!p)return;focus=focus===key(p.ids)?null:key(p.ids);render();};
  $('.pair-list').onclick=e=>{const b=e.target.closest('[data-pair-a]');if(!b)return;save();state.x=b.dataset.pairA;state.y=b.dataset.pairB;focus=null;render();};
  $('.selected-node').onchange=e=>{selected=e.target.value;render();};
  function rename(){
    const n=state.nodes.find(n=>n.id===selected);if(!n)return;
    const v=$('.rename').value.trim();if(!v){$('.rename').value=n.label;return;}
    if(state.nodes.some(m=>m.id!==n.id&&m.label.toLowerCase()===v.toLowerCase())){hint('Every node must have a distinct label.');$('.rename').value=n.label;return;}
    save();n.label=v;render();
  }
  $('.rename-button').onclick=rename;
  $('.rename').onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();rename();}};
  $('.delete').onclick=()=>deleteNode(selected);
  $('svg').addEventListener('click',e=>{const edge=e.target.closest('[data-edge]');if(edge)removeEdge(Number(edge.dataset.edge));});
  $('svg').addEventListener('keydown',e=>{if(e.key!=='Enter'&&e.key!==' ')return;const n=e.target.closest('[data-node]'),edge=e.target.closest('[data-edge]');if(!n&&!edge)return;e.preventDefault();if(n)toggleNode(n.dataset.node);else removeEdge(Number(edge.dataset.edge));});
  function point(e){const svg=$('svg');const p=svg.createSVGPoint();p.x=e.clientX;p.y=e.clientY;return p.matrixTransform(svg.getScreenCTM().inverse());}
  $('svg').addEventListener('pointerdown',e=>{
    const node=e.target.closest('[data-node]');if(!node||e.button!==0)return;
    e.preventDefault();const n=state.nodes.find(n=>n.id===node.dataset.node),p=point(e);
    drag={id:n.id,px:p.x,py:p.y,x:n.x,y:n.y,moved:false};
    $('svg').setPointerCapture(e.pointerId);
  });
  $('svg').addEventListener('pointermove',e=>{
    if(!drag||arrowMode)return;
    const p=point(e),delta=Math.hypot(p.x-drag.px,p.y-drag.py);
    if(!drag.moved&&delta<5)return;
    if(!drag.moved){save();drag.moved=true;}
    const n=state.nodes.find(n=>n.id===drag.id);
    n.x=Math.max(55,Math.min(765,drag.x+p.x-drag.px));
    n.y=Math.max(52,Math.min(257,drag.y+p.y-drag.py));
    draw(analyzePair(state.x,state.y));
  });
  $('svg').addEventListener('pointerup',e=>{if(!drag)return;const d=drag;drag=null;if(d.moved){selected=d.id;render();return;}toggleNode(d.id);});
  $('svg').addEventListener('pointercancel',()=>{drag=null;render();});
  root.addEventListener('keydown',e=>{if(e.key==='Escape'){arrowMode=false;arrowSource=null;focus=null;render();}});
  $('.help').onclick=()=>$('.help-dialog').showModal();
  $('.close-help').onclick=()=>$('.help-dialog').close();
  load('collider');
  return root;
}