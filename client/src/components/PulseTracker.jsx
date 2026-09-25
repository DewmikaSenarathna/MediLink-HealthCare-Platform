export default function PulseTracker({index=0}) {
  const steps=['Doctor','Slot','Summary','Details','Payment','Done'];
  return <div className="pulse-track">
    {steps.map((s,i)=><React.Fragment key={s}>
      <div className="pulse-node-wrap">
        <div className={`pulse-node ${i<index?'done':i===index?'active':''}`}></div>
        <span className={`pulse-label ${i<=index?'on':''}`}>{s}</span>
      </div>
      {i<steps.length-1 && <div className="pulse-seg"><svg viewBox="0 0 100 22" preserveAspectRatio="none">
        <path className="pulse-line-todo" d="M0 11 H100" strokeWidth="2" fill="none"/>
        {i===index
          ? <path className="pulse-beat" d="M0 11 H30 L38 3 L46 19 L54 11 H100" strokeWidth="2.3" fill="none"/>
          : <path className={i<index?'pulse-line-done':'pulse-line-todo'} d="M0 11 H100" strokeWidth="2" fill="none"/>}
      </svg></div>}
    </React.Fragment>)}
  </div>
}
