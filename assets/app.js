import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://wayiiqdzqwquivrwtksv.supabase.co';
const SUPABASE_KEY = 'sb_publishable_OruW5Gy55bwP3HkRFKONYQ_zJcN2MMz';
const BUCKET = 'va-assessment-resumes';
const MAX = 5 * 1024 * 1024;
const OK_EXT = ['pdf', 'doc', 'docx'];
const MIME = { pdf: 'application/pdf', doc: 'application/msword', docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' };

const sb = createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: false } });
const form = document.getElementById('apply-form');
const err = document.getElementById('form-error');
const btn = document.getElementById('submit-btn');
const fileInput = form.querySelector('input[type=file]');
const drop = document.getElementById('drop');
const dropText = drop.querySelector('.drop-text');
const preview = document.getElementById('preview');
const PDF_ONLY = form.dataset.pdfonly === '1';
let previewUrl = '';

const showErr = m => { err.textContent = m; err.hidden = !m; if (m) err.scrollIntoView({ behavior: 'smooth', block: 'center' }); };

function checkFile(f) {
  if (!f) return 'Please attach your résumé.';
  const ext = f.name.split('.').pop().toLowerCase();
  if (PDF_ONLY && ext !== 'pdf') return 'Please upload your résumé as a PDF.';
  if (!OK_EXT.includes(ext)) return 'Résumé must be a PDF, DOC, or DOCX file.';
  if (f.size > MAX) return 'Résumé must be 5 MB or smaller.';
  if (f.size === 0) return 'That file looks empty. Please choose another.';
  return '';
}
function onFile() {
  const f = fileInput.files[0];
  const e = checkFile(f);
  drop.classList.toggle('has-file', !!f && !e);
  dropText.innerHTML = f ? `<strong>${f.name.replace(/</g, '&lt;')}</strong><br><small>${(f.size / 1024).toFixed(0)} KB · click to change</small>` : '<strong>Upload a file</strong><br><small>PDF, DOC, or DOCX, up to 5 MB</small>';
  showErr(f ? e : '');
  if (preview) {
    if (previewUrl) { URL.revokeObjectURL(previewUrl); previewUrl = ''; }
    if (f && !e && f.name.toLowerCase().endsWith('.pdf')) {
      previewUrl = URL.createObjectURL(new Blob([f], { type: 'application/pdf' }));
      preview.innerHTML = `<p><strong>Preview</strong> · this is how your résumé will look. <a href="${previewUrl}" target="_blank" rel="noopener">Open in a new tab</a></p><iframe title="Résumé preview" src="${previewUrl}#view=FitH"></iframe>`;
      preview.hidden = false;
    } else if (f && !e) {
      preview.innerHTML = '<p>Preview is available for PDF files only.</p>'; preview.hidden = false;
    } else { preview.innerHTML = ''; preview.hidden = true; }
  }
}
fileInput.addEventListener('change', onFile);
['dragover', 'dragenter'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.add('over'); }));
['dragleave', 'drop'].forEach(ev => drop.addEventListener(ev, () => drop.classList.remove('over')));
drop.addEventListener('drop', e => { e.preventDefault(); if (e.dataTransfer.files.length) { fileInput.files = e.dataTransfer.files; onFile(); } });

form.addEventListener('submit', async e => {
  e.preventDefault();
  showErr('');
  form.querySelectorAll('.invalid').forEach(x => x.classList.remove('invalid'));
  const fd = new FormData(form);
  const name = (fd.get('full_name') || '').trim();
  const email = (fd.get('email') || '').trim();
  const linkedin = '';
  const file = fileInput.files[0];

  const bad = [];
  if (name.length < 2) bad.push(['full_name', 'Please enter your full name.']);
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) bad.push(['email', 'Please enter a valid email address.']);
  const answers = {};
  form.querySelectorAll('[name^="q_"]').forEach(el => {
    const k = el.name.slice(2);
    if (!(k in answers)) answers[k] = (fd.get(el.name) || '').toString().trim();
  });
  for (const [k, v] of Object.entries(answers)) if (!v) bad.push(['q_' + k, 'Please answer all the questions.']);
  const fe = checkFile(file); if (fe) bad.push(['resume', fe]);
  if (bad.length) {
    bad.forEach(([n]) => form.querySelectorAll(`[name="${n}"]`).forEach(el => (el.closest('.field, .check, .drop') || el).classList.add('invalid')));
    showErr(bad[0][1]);
    return;
  }

  btn.disabled = true; btn.textContent = 'Uploading résumé…';
  try {
    const job = form.dataset.job;
    const ext = file.name.split('.').pop().toLowerCase();
    const safe = file.name.replace(/\.[^.]+$/, '').replace(/[^a-zA-Z0-9_-]+/g, '_').slice(0, 60) || 'resume';
    const path = `${job}/${crypto.randomUUID()}/${safe}.${ext}`;
    const up = await sb.storage.from(BUCKET).upload(path, file, { contentType: MIME[ext], upsert: false });
    if (up.error) throw new Error('upload: ' + up.error.message);
    btn.textContent = 'Submitting…';
    const { data, error } = await sb.rpc('va_assessment_submit', {
      p_job_slug: job, p_full_name: name, p_email: email, p_linkedin_url: linkedin,
      p_answers: answers, p_resume_path: path, p_resume_filename: file.name, p_user_agent: navigator.userAgent
    });
    if (error) throw new Error('submit: ' + error.message);
    form.hidden = true; if (preview) preview.innerHTML = '';
    document.getElementById('c-name').textContent = name.split(' ')[0];
    document.getElementById('c-id').textContent = data;
    const c = document.getElementById('confirmation');
    c.hidden = false; c.focus(); c.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } catch (x) {
    console.error(x);
    showErr('Something went wrong submitting your application. Please try again in a minute.');
    btn.disabled = false; btn.textContent = 'Submit application';
  }
});
