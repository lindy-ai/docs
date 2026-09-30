export const ConnectionsMockup = () => {
  const [open, setOpen] = useState(null);
  const [guards, setGuards] = useState({});
  const [phase, setPhase] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = setTimeout(() => setPhase((value) => (value + 1) % 6), [1800, 800, 600, 1400, 300, 900][phase]);
    return () => clearTimeout(timer);
  }, [phase, paused, reducedMotion]);
  const icons = {"Google": (<svg width="17" height="17" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"></path><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"></path><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.600-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"></path><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.200-4.100 5.600l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"></path></svg>),
"Slack": (<svg width="16" height="16" viewBox="0 0 17 16"><path d="M3.376 10.115a1.681 1.681 0 1 1-1.682-1.682h1.682v1.682Zm.84 0a1.681 1.681 0 1 1 3.364 0v4.203a1.681 1.681 0 1 1-3.363 0v-4.203Z" fill="#E01E5A"></path><path d="M5.898 3.363a1.681 1.681 0 1 1 1.682-1.681v1.681H5.898Zm0 .854a1.681 1.681 0 1 1 0 3.363H1.682a1.681 1.681 0 1 1 0-3.363h4.216Z" fill="#36C5F0"></path><path d="M12.637 5.898a1.681 1.681 0 1 1 1.681 1.682h-1.681V5.898Zm-.841 0a1.681 1.681 0 1 1-3.363 0V1.682a1.681 1.681 0 1 1 3.363 0v4.216Z" fill="#2EB67D"></path><path d="M10.115 12.637a1.681 1.681 0 1 1-1.682 1.681v-1.681h1.682Zm0-.841a1.681 1.681 0 1 1 0-3.363h4.216a1.681 1.681 0 1 1 0 3.363h-4.216Z" fill="#ECB22E"></path></svg>),
"Gmail": (<svg width="22" height="22" viewBox="0 0 24 24"><path d="M5.091 18.002h2.545V11.82L5.97 8.909 4 9.092v7.819c0 .602.488 1.09 1.091 1.09Z" fill="#0085F7"></path><path d="M16.364 18.002h2.545c.603 0 1.091-.489 1.091-1.091V9.092l-1.967-.183-1.67 2.91v6.183Z" fill="#00A94B"></path><path d="m16.364 7.092-1.496 2.854 1.496 1.874L20 9.092V7.638c0-1.348-1.539-2.118-2.618-1.310l-1.018.764Z" fill="#FFBC00"></path><path fillRule="evenodd" d="M7.636 11.82 6.212 8.81l1.424-1.718L12 10.365l4.364-3.273v4.728L12 15.092 7.636 11.82Z" fill="#FF4131"></path><path d="M4 7.638v1.454l3.636 2.728V7.092l-1.018-.763C5.539 5.520 4 6.290 4 7.638Z" fill="#E51C19"></path></svg>),
"Zoom": (<svg width="22" height="22" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14.4" fill="#4a8cff"></circle><path fill="#fff" d="M7.1 11.5v6.8a2.8 2.8 0 0 0 2.8 2.8h9.9a.5.5 0 0 0 .5-.5v-6.8a2.8 2.8 0 0 0-2.8-2.8H7.6a.5.5 0 0 0-.5.5zm13.9 2.8 4.100-3c.360-.290.630-.220.630.310v9.100c0 .600-.340.530-.630.310L21 18.100z"></path></svg>),
"Snowflake": (<span aria-hidden="true" style={{ width: 20, height: 20, background: 'url(/lindy-brand-assets/integrations/connections-snowflake.png) center / contain no-repeat' }} />)};
  const rows = [
    ['Google', 'haneen@lindy.ai', 'Ask for approval', 'Only you'],
    ['Snowflake', 'Warehouse', 'Ask for approval', 'Your team'],
    ['Slack', 'Goldbar', 'Always allow', 'Your workspace'],
    ['Gmail', 'support@company.co', 'Ask for approval', 'Your team'],
    ['Zoom', 'sales@company.co', 'Always allow', 'Your team'],
  ];
  return (
    <div role="group" className="connections-demo not-prose" aria-label="Interactive Connections mockup">
      <div className="connections-demo-art" onKeyDown={(event) => { if (event.key === 'Escape') setOpen(null); }}>
        <div className="connections-demo-panel">
          <div className="connections-demo-title">Connections</div>
          <div className="connections-demo-grid connections-demo-head"><span>App</span><span>Guardrails</span><span className="connections-demo-shared">Shared</span></div>
          {rows.map(([name, account, initial, shared]) => {
            const value = guards[name] || initial;
            const demo = name === 'Snowflake' && !paused && !reducedMotion;
            const expanded = open === name || (demo && (phase === 2 || phase === 3));
            return (
              <div key={name} className="connections-demo-grid connections-demo-row">
                <div className="connections-demo-app">
                  <span className="connections-demo-icon">{icons[name]}<span /></span>
                  <div className="connections-demo-account"><strong>{name}</strong><span>{account}</span></div>
                </div>
                <div className="connections-demo-control" style={{ zIndex: expanded ? 3 : 1 }} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(null); }}>
                  <button type="button" aria-label={`${name} guardrail: ${value}`} aria-expanded={expanded} onClick={() => { setPaused(true); setOpen(open === name ? null : name); }} onFocus={() => setPaused(true)}>
                    {value}<svg className="connections-demo-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#889096" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
                  </button>
                  {expanded && <div className="connections-demo-options" role="group" aria-label={`${name} guardrail options`}>
                    {['Always allow', 'Ask for approval'].map((option) => <button key={option} type="button" aria-pressed={value === option} className={demo && phase === 3 && option === 'Always allow' ? 'connections-demo-highlight' : ''} onClick={() => { setGuards((current) => ({ ...current, [name]: option })); setOpen(null); setPaused(true); }}><span aria-hidden="true">{value === option ? '✓' : ''}</span>{option}</button>)}
                  </div>}
                  {demo && <svg className="connections-demo-cursor" style={{ left: [160,70,70,80,80,170][phase], top: [60,14,14,10,10,60][phase], opacity: phase === 0 || phase === 5 ? 0 : 1 }} width="20" height="22" viewBox="0 0 20 22" aria-hidden="true"><path d="M2 1.5v16.2l4.3-4.1 2.9 6.6 2.6-1.1-2.9-6.5H15z" fill="#11181c" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" /></svg>}
                </div>
                <span className="connections-demo-shared">{shared}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="connections-demo-caption">Example connections and guardrails. Changes here only affect this demo. {!reducedMotion && <button type="button" onClick={() => { setPaused(!paused); setOpen(null); }}>{paused ? 'Play animation' : 'Pause animation'}</button>}</div>
    </div>
  );
};
