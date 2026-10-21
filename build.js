const fs = require('fs'); const path = require('path');
const jobs = require('./jobs.js');
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const COMPANY = 'Okapi Lantern Labs';
const icon = `<svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#1f3b2d"/><path d="M16 6c-3 3-5 6-5 9a5 5 0 0010 0c0-3-2-6-5-9z" fill="#f6b73c"/><path d="M11 22h10v3H11z" fill="#9fd3b0"/></svg>`;
const head = (title, base) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="robots" content="noindex"><link rel="stylesheet" href="${base}assets/style.css?v=2"></head><body>`;
const header = base => `<header class="site-header"><div class="wrap"><a class="brand" href="${base}">${icon}<span>${COMPANY}</span></a><a class="navlink" href="${base}">Open roles</a></div></header>`;
const footer = `<footer class="site-footer"><div class="wrap">© 2026 ${COMPANY} · Equal opportunity employer</div></footer>`;
const list = a => `<ul>${a.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
function q(x){
  if(x.type==='select') return `<label class="field"><span class="lbl">${esc(x.label)} <span class="req">*</span></span><select name="q_${x.id}" required><option value="">Select…</option>${x.options.map(o=>`<option>${esc(o)}</option>`).join('')}</select></label>`;
  return `<fieldset class="field"><legend class="lbl">${esc(x.label)} <span class="req">*</span></legend><div class="radios">${x.options.map(o=>`<label class="radio"><input type="radio" name="q_${x.id}" value="${esc(o)}"> ${esc(o)}</label>`).join('')}</div></fieldset>`;
}
const STEPS = [
  "Create a separate resume for each of the two jobs. Each resume should be the best possible fit for that one posting.",
  "Match the tools and keywords listed in that specific job. Use the Required tools list and the Requirements as your guide.",
  "Keep the years of experience consistent. Use the same total years on both resumes and in the form.",
  "Do not copy the job description word for word. Write it the way a real resume reads, in your own words.",
  "Use a placeholder candidate name of your choosing, for example Alex Rivera. Any working email address is fine.",
  "Save each resume as a PDF and upload it. After you choose your file you can view it right on the page before you submit.",
  "Apply to both jobs. Job A is the QA Automation Engineer role and Job B is the SDET role."
];
const steps = `<ol class="steps">${STEPS.map(x=>`<li>${esc(x)}</li>`).join('')}</ol>`;
const instrBox = (base) => `<aside class="instr"><h2>Interview assessment instructions</h2>${steps}<p class="muted"><a href="${base}interview.html">See both jobs on the assessment page</a></p></aside>`;
function jobPage(j){
  const base='../../';
  return head(`${j.title} | ${COMPANY}`, base) + header(base) + `
<main class="wrap narrow">
  <a class="back" href="${j.inCall?base+'interview.html':base}">← ${j.inCall?'Interview assessment':'All roles'}</a>
  ${j.inCall?`<p class="tag">${esc(j.ref)}</p>`:''}
  <h1>${esc(j.title)}</h1>
  <p class="meta">${esc(j.location)} · ${esc(j.type)} · ${esc(j.salary)}</p>
  <p class="lead">${esc(j.summary)}</p>
  ${j.inCall?instrBox(base):''}
  <h2>Responsibilities</h2>${list(j.responsibilities)}
  <h2>Requirements</h2>${list(j.requirements)}
  ${j.niceToHave?`<h2>Nice to have</h2>${list(j.niceToHave)}`:''}
  ${j.inCall?'<h2>Required tools</h2>':''}<div class="chips">${j.tools.map(t=>`<span class="chip">${esc(t)}</span>`).join('')}</div>
  <section id="apply" class="card apply">
    <h2>Apply</h2>
    <form id="apply-form" data-job="${j.slug}"${j.inCall?' data-pdfonly="1"':''} novalidate>
      <label class="field"><span class="lbl">Full name <span class="req">*</span></span><input name="full_name" autocomplete="name" maxlength="200"></label>
      <label class="field"><span class="lbl">Email <span class="req">*</span></span><input name="email" type="email" autocomplete="email" maxlength="320"></label>
      <div class="field"><span class="lbl">Resume <span class="req">*</span></span>
        <label class="drop" id="drop"><input type="file" name="resume" accept="${j.inCall?'.pdf,application/pdf':'.pdf,.doc,.docx'}"><span class="drop-text"><strong>Upload a file</strong><br><small>${j.inCall?'PDF only':'PDF, DOC, or DOCX'}, up to 5 MB</small></span></label>
        <div id="preview" class="preview" hidden></div></div>
      ${j.questions.map(q).join('\n')}
      <p class="error" id="form-error" role="alert" hidden></p>
      <button class="btn" type="submit" id="submit-btn">Submit application</button>
    </form>
    <div id="confirmation" class="confirm" hidden tabindex="-1">
      <div class="tick">✓</div><h2>Application received</h2>
      <p>Thanks, <span id="c-name"></span>. We've received your application for <strong>${esc(j.title)}</strong>.</p>
      <p class="appid">Application ID: <code id="c-id"></code></p>
      <a class="btn ghost" href="${base}">View other roles</a>
    </div>
  </section>
</main>` + footer + `<script type="module" src="${base}assets/app.js?v=2"></script></body></html>`;
}
function indexPage(){
  return head(`Careers | ${COMPANY}`, './') + header('./') + `
<main class="wrap narrow">
  <h1>Careers at ${COMPANY}</h1>
  <p class="lead">We're a fully remote software team. Explore our open roles below.</p>
  <ul class="job-list">${jobs.filter(j=>!j.inCall).map(j=>`<li><a class="job-row" href="jobs/${j.slug}/"><div><h3>${esc(j.title)}</h3><p class="muted">${esc(j.location)} · ${esc(j.type)} · ${esc(j.salary)}</p></div><span class="arrow">View →</span></a></li>`).join('')}</ul>
</main>` + footer + `</body></html>`;
}
fs.writeFileSync('index.html', indexPage());
function interviewPage(){
  const ic = jobs.filter(j=>j.inCall);
  return head(`Interview assessment | ${COMPANY}`, './') + header('./') + `
<main class="wrap narrow">
  <h1>Interview assessment</h1>
  <p class="lead">During our call you will apply to the two jobs below. Read each posting carefully, then build a resume that fits it.</p>
  <aside class="instr"><h2>Instructions</h2>${steps}</aside>
  <ul class="job-list">${ic.map(j=>`<li><a class="job-row" href="jobs/${j.slug}/"><div><p class="tag">${esc(j.ref)}</p><h3>${esc(j.title)}</h3><p class="muted">${esc(j.location)} · ${esc(j.type)}</p><p class="muted"><strong>Tools:</strong> ${esc(j.tools.join(', '))}</p></div><span class="arrow">View and apply →</span></a></li>`).join('')}</ul>
</main>` + footer + `</body></html>`;
}
fs.writeFileSync('interview.html', interviewPage());
for(const j of jobs){ fs.mkdirSync(path.join('jobs',j.slug),{recursive:true}); fs.writeFileSync(path.join('jobs',j.slug,'index.html'), jobPage(j)); }
fs.writeFileSync('.nojekyll','');
console.log('built');
