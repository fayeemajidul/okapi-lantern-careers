const fs = require('fs'); const path = require('path');
const jobs = require('./jobs.js');
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const COMPANY = 'Okapi Lantern Labs';
const logo = (base) => `<a class="brand" href="${base}"><span class="logo" aria-hidden="true"><svg viewBox="0 0 32 32" width="28" height="28"><rect width="32" height="32" rx="8" fill="#1f3b2d"/><path d="M16 6c-3 3-5 6-5 9a5 5 0 0010 0c0-3-2-6-5-9z" fill="#f6b73c"/><path d="M11 22h10v3H11z" fill="#9fd3b0"/></svg></span><span>${COMPANY}</span></a>`;
const head = (title, base, desc) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(desc)}"><meta name="robots" content="noindex"><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%231f3b2d'/%3E%3Cpath d='M16 6c-3 3-5 6-5 9a5 5 0 0010 0c0-3-2-6-5-9z' fill='%23f6b73c'/%3E%3C/svg%3E"><link rel="stylesheet" href="${base}assets/style.css"></head><body>`;
const header = base => `<header class="site-header"><div class="wrap">${logo(base)}<nav><a href="${base}#about">About</a><a href="${base}#openings">Open roles</a></nav></div></header>`;
const footer = `<footer class="site-footer"><div class="wrap"><p>© 2026 ${COMPANY}. ${COMPANY} is an equal opportunity employer. All qualified applicants will receive consideration without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, disability, or veteran status.</p><p class="muted">Applications are reviewed by our hiring team. Résumés are stored privately and are never shared publicly.</p></div></footer>`;
const about = `<p>${COMPANY} builds quiet, reliable software for places that can't afford downtime: logistics hubs, clinics, and one very well connected wildlife sanctuary. We're a fully remote team of 60 across 14 countries, backed by long-term investors, and we care more about calm, careful engineering than heroics.</p>`;
const benefits = ['Fully remote, async-first culture','Home office stipend of $1,500','20 days paid time off plus local holidays','Health coverage or monthly wellness allowance','Annual learning budget of $2,000','Company retreat once a year'];

function questionField(q){
  const req = q.required ? ' required' : '';
  const star = q.required ? ' <span class="req">*</span>' : '';
  if(q.type==='select') return `<label class="field"><span class="lbl">${esc(q.label)}${star}</span><select name="q_${q.id}"${req}><option value="">Select…</option>${q.options.map(o=>`<option>${esc(o)}</option>`).join('')}</select></label>`;
  if(q.type==='radio') return `<fieldset class="field"><legend class="lbl">${esc(q.label)}${star}</legend><div class="radios">${q.options.map((o,i)=>`<label class="radio"><input type="radio" name="q_${q.id}" value="${esc(o)}"${i===0?req:''}> ${esc(o)}</label>`).join('')}</div></fieldset>`;
  return `<label class="field"><span class="lbl">${esc(q.label)}${star}</span><textarea name="q_${q.id}" rows="3" maxlength="1000"${req}></textarea></label>`;
}

function jobPage(j){
  const base='../../';
  const list = a => `<ul>${a.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
  return head(`${j.title} | ${COMPANY} Careers`, base, j.summary) + header(base) + `
<main class="wrap job">
  <a class="back" href="${base}#openings">← All open roles</a>
  <div class="job-head">
    <p class="team">${esc(j.team)}</p>
    <h1>${esc(j.title)}</h1>
    <div class="meta"><span>📍 ${esc(j.location)}</span><span>🕒 ${esc(j.type)}</span><span>💵 ${esc(j.salary)}</span></div>
    <a class="btn" href="#apply">Apply for this job</a>
  </div>
  <div class="cols">
    <article class="desc">
      <h2>About ${COMPANY}</h2>${about}
      <h2>About the role</h2><p>${esc(j.intro)}</p>
      <h2>What you'll do</h2>${list(j.responsibilities)}
      <h2>What we're looking for</h2>${list(j.requirements)}
      <h2>Nice to have</h2>${list(j.nice)}
      <h2>Our stack for this role</h2><div class="chips">${j.tools.map(t=>`<span class="chip">${esc(t)}</span>`).join('')}</div>
      <h2>Benefits</h2>${list(benefits)}
    </article>
    <aside class="side"><div class="card"><h3>Job details</h3><dl><dt>Location</dt><dd>${esc(j.location)}</dd><dt>Employment type</dt><dd>${esc(j.type)}</dd><dt>Compensation</dt><dd>${esc(j.salary)}</dd><dt>Team</dt><dd>${esc(j.team)}</dd></dl><a class="btn block" href="#apply">Apply now</a></div></aside>
  </div>
  <section id="apply" class="apply card">
    <h2>Apply for ${esc(j.title)}</h2>
    <p class="muted">Fields marked <span class="req">*</span> are required.</p>
    <form id="apply-form" data-job="${j.slug}" data-title="${esc(j.title)}" novalidate>
      <div class="grid2">
        <label class="field"><span class="lbl">Full name <span class="req">*</span></span><input name="full_name" autocomplete="name" required maxlength="200"></label>
        <label class="field"><span class="lbl">Email <span class="req">*</span></span><input name="email" type="email" autocomplete="email" required maxlength="320"></label>
      </div>
      <label class="field"><span class="lbl">LinkedIn profile URL</span><input name="linkedin_url" type="url" placeholder="https://www.linkedin.com/in/your-name" maxlength="500"></label>
      <div class="field"><span class="lbl">Résumé / CV <span class="req">*</span></span>
        <label class="drop" id="drop"><input type="file" name="resume" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" required><span class="drop-text"><strong>Attach a file</strong> or drag it here<br><small>PDF, DOC, or DOCX, up to 5 MB</small></span></label>
      </div>
      <h3>A few questions</h3>
      ${j.questions.map(questionField).join('\n')}
      <label class="check"><input type="checkbox" name="consent" required> I agree that ${COMPANY} may store my application and résumé to evaluate me for this role. <span class="req">*</span></label>
      <p class="error" id="form-error" role="alert" hidden></p>
      <button class="btn" type="submit" id="submit-btn">Submit application</button>
    </form>
    <div id="confirmation" class="confirm" hidden tabindex="-1">
      <div class="tick">✓</div>
      <h2>Application received</h2>
      <p>Thanks, <span id="c-name"></span>. Your application for <strong>${esc(j.title)}</strong> has been submitted.</p>
      <p class="appid">Application ID: <code id="c-id"></code></p>
      <p class="muted">Keep this ID for your records. Our hiring team reviews every application and will reach out by email if there's a match.</p>
      <a class="btn ghost" href="${base}#openings">View other roles</a>
    </div>
  </section>
</main>` + footer + `<script type="module" src="${base}assets/app.js"></script></body></html>`;
}

function indexPage(){
  const base='./';
  return head(`Careers | ${COMPANY}`, base, `Open roles at ${COMPANY}`) + header(base) + `
<section class="hero"><div class="wrap"><p class="eyebrow">Careers at ${COMPANY}</p><h1>Build calm, reliable software. From anywhere.</h1><p>We're a remote-first team that keeps critical systems running, including a wildlife sanctuary's smart habitats. Come help us.</p><a class="btn light" href="#openings">See open roles</a></div></section>
<main class="wrap">
  <section id="about" class="about"><h2>About us</h2>${about}<div class="stats"><div><strong>60</strong><span>teammates</span></div><div><strong>14</strong><span>countries</span></div><div><strong>100%</strong><span>remote</span></div><div><strong>3</strong><span>resident okapis (we sponsor them)</span></div></div></section>
  <section id="openings"><h2>Open roles <span class="count">${jobs.length}</span></h2>
  <div class="filters"><input id="search" type="search" placeholder="Search roles…" aria-label="Search roles"></div>
  <ul class="job-list">${jobs.map(j=>`<li class="job-row" data-search="${esc((j.title+' '+j.team+' '+j.tools.join(' ')).toLowerCase())}"><a href="jobs/${j.slug}/"><div><h3>${esc(j.title)}</h3><p class="muted">${esc(j.summary)}</p><div class="chips small">${j.tools.slice(0,5).map(t=>`<span class="chip">${esc(t)}</span>`).join('')}</div></div><div class="row-meta"><span>${esc(j.team)}</span><span>Remote · ${esc(j.type)}</span><span>${esc(j.salary)}</span><span class="arrow">Apply →</span></div></a></li>`).join('')}</ul>
  </section>
</main>` + footer + `<script>document.getElementById('search').addEventListener('input',e=>{const v=e.target.value.toLowerCase();document.querySelectorAll('.job-row').forEach(r=>r.hidden=!r.dataset.search.includes(v));});</script></body></html>`;
}

fs.writeFileSync('index.html', indexPage());
for(const j of jobs){ fs.mkdirSync(path.join('jobs',j.slug),{recursive:true}); fs.writeFileSync(path.join('jobs',j.slug,'index.html'), jobPage(j)); }
fs.writeFileSync('.nojekyll','');
console.log('built');
