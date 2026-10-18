const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav) toggle.addEventListener('click', () => { const open = nav.classList.toggle('menu-open'); toggle.setAttribute('aria-expanded', String(open)); });
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
const chat = document.querySelector('.chat-widget');
const chatLaunch = document.querySelector('.chat-launch');
const chatClose = document.querySelector('.chat-close');
if (chat && chatLaunch) chatLaunch.addEventListener('click', () => chat.classList.toggle('open'));
if (chat && chatClose) chatClose.addEventListener('click', () => chat.classList.remove('open'));
document.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => {
  const box = document.querySelector('.chat-answer');
  if (!box) return;
  const answers = {
    products: 'We showcase signature scarves, designer bags and shoes, beauty ornaments, and heritage-inspired items. Use the enquiry form or WhatsApp to ask about current availability.',
    consultancy: 'Winza Heritage offers heritage consultancy. Please share a short description of your project through the enquiry form so the team can follow up.',
    shipping: 'Shipping destinations, delivery timelines and charges need to be confirmed for each order. Please contact Winza Heritage before placing an order.',
    partner: 'For partnerships and collaborations, choose “Partnership or collaboration” in the enquiry form and include a few details about your proposal.'
  };
  box.textContent = answers[button.dataset.answer] || 'Please contact Winza Heritage for more information.';
  box.classList.add('show');
}));
const form = document.querySelector('[data-mailto-form]');
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent('Winza Heritage website enquiry: ' + (data.get('interest') || 'General enquiry'));
  const body = encodeURIComponent(`Name: ${data.get('name')}\nContact: ${data.get('contact')}\nInterest: ${data.get('interest')}\n\nMessage:\n${data.get('message') || '(No message provided)'}`);
  window.location.href = `mailto:winza3745@gmail.com?subject=${subject}&body=${body}`;
  const note = form.querySelector('.form-note');
  if (note) note.textContent = 'Your email app should open with the enquiry prepared. Please press Send in your email app to deliver it.';
});
