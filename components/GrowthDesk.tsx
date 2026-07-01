export function GrowthDesk() {
  return (
    <div className="growth-desk" aria-label="A visual overview of a growing online presence">
      <div className="desk-topline">
        <div><span className="status-dot" /> LIVE GROWTH DESK</div>
        <span>GLOWLINE / 01</span>
      </div>
      <div className="enquiry-card">
        <span className="mini-label">NEW WEBSITE ENQUIRY</span>
        <div className="enquiry-row">
          <span className="avatar">KM</span>
          <div><strong>Kopano Interiors</strong><small>Wants a website quote</small></div>
          <span className="time">NOW</span>
        </div>
      </div>
      <div className="desk-grid">
        <div className="content-card">
          <span className="mini-label">CONTENT PLAN</span>
          <div className="calendar-head"><b>JULY</b><span>12 posts ready</span></div>
          <div className="calendar-days">{["M","T","W","T","F"].map((d,i)=><span key={i}>{d}</span>)}</div>
          <div className="calendar-grid">{Array.from({length:15},(_,i)=><i key={i} className={[1,4,7,10,13].includes(i)?"active":""} />)}</div>
        </div>
        <div className="performance-card">
          <div className="card-line"><span className="mini-label">META ADS</span><span className="positive">+28%</span></div>
          <strong>136</strong><small>qualified actions</small>
          <div className="chart-bars">{[34,46,42,63,58,79,92].map((h,i)=><i key={i} style={{height:`${h}%`}} />)}</div>
        </div>
      </div>
      <div className="lead-strip">
        <div className="lead-icon">WA</div>
        <div><span className="mini-label">WHATSAPP LEADS</span><b>18 conversations started</b></div>
        <strong>+7</strong>
      </div>
      <div className="brand-strip">
        <div><span className="mini-label">BRAND CONSISTENCY</span><b>Everything feels like you.</b></div>
        <div className="swatches"><i/><i/><i/></div>
      </div>
      <div className="desk-caption"><span>One connected online presence</span><span>Websites / Social / Ads</span></div>
    </div>
  );
}
