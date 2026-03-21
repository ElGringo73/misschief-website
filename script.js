// Always start at top on reload
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.addEventListener('load', () => window.scrollTo(0, 0));

// ─── Translations ───────────────────────────────────────────────────
const t = {
  en: {
    'nav.about': 'About', 'nav.band': 'The Band', 'nav.media': 'Media',
    'nav.shows': 'Shows', 'nav.contact': 'Contact',
    'hero.tagline': 'We steal your favourite songs \u2014<br class="mobile-break"> and your heart.',
    'hero.cta.live': 'See Us Live', 'hero.cta.book': 'Book Us',
    'about.tag': 'Who we are', 'about.title': 'Good Vibes, <span class="nowrap">Great Songs</span>',
    'about.p1': 'Miss Chief and the Bandits are a six-piece pop rock cover band with one simple mission: fill your venue, your dance floor, and your soul with nothing but pure, unfiltered fun.',
    'about.p2': 'From anthems you screamed in your car to guilty pleasures you secretly adore, we play it all with a smile and a whole lot of energy. No fuss, all killer no filler \u2014 just great music and even better vibes.',
    'about.p3': 'Based in Twente, perfect for festivals, corporate parties, club nights, or any occasion that deserves an upgrade from a Spotify playlist.',
    'about.party': 'Party',
    'band.tag': 'Meet the crew', 'band.title': 'The Band',
    'band.misses': 'The Miss Chiefs', 'band.bandits': 'The Bandits',
    'role.vocals': 'Vocals', 'role.guitar': 'Guitar', 'role.bass': 'Bass',
    'role.keys': 'Keyboards', 'role.drums': 'Drums & Vocals',
    'role.sound': 'Chief of Sound',
    'band.david': 'The Accomplices',
    'bio.david': 'The man behind the mix. While the band steals songs, David steals the show from behind the desk — shaping every note, balancing every voice, and making sure the kick drum hits you right in the chest. He always knows exactly which fader to push, which knob to turn, and which cable to pull. Nothing can upset him. The unsung hero of every great night out.',
    'bio.nikki': 'Nikki doesn\'t just sing like an angel — the choreographies she and Emma conjure up on stage are in a league of their own. Pure soul, unstoppable presence, and moves that will keep you on your feet all night long.',
    'bio.emma': 'Power, sweetness, and a smile that could melt stadiums. Together with Nikki, Emma makes every chorus twice as dangerous. She is also hilarious — with a sense of humour so sharp that the rest of the band regularly cracks up mid-song, instruments and all.',
    'bio.ruud': "Riffs that'll make your hair stand on end and solos that'll make you forget your own name. Ruud keeps the fire burning six strings at a time — but don't let the pyrotechnics fool you. When he switches to sweet, silky lead, the room goes quiet and the goosebumps arrive. It's earned him a nickname that says it all: Carlos.",
    'bio.erikjan': 'The groove machine. Erik-Jan lays down the low end with surgical precision and a coolness that makes the whole band look good. And while his fingers hold the foundation together, his face tells the whole story — the trademark bass face: that unmistakable expression of deep concentration, quiet swagger, and pure low-end satisfaction.',
    'bio.pieter': 'From lush synth pads to thundering piano chords, Pieter fills every corner of the room with sound and leaves no ear unattended. A certified synthesizer geek, he can conjure virtually any sound known to man — and a few that probably aren\'t.',
    'bio.ingo': 'They say the drummer is the conductor of the band — only nobody\'s looking at him. Ingo doesn\'t lose sleep over it. He lays down the groove, holds everyone together and makes the whole thing feel good. Then, just to make things interesting, he sings too. At the same time. Yes, really.',
    'media.tag': 'See & hear us', 'media.title': 'Media',
    'media.recording': 'Live recording \u2014 December 2025',
    'shows.tag': 'On the road', 'shows.title': 'Upcoming Shows',
    'show1.title': 'Summer Kick-off Festival', 'show2.title': 'Rooftop Party Night',
    'show3.title': 'Beach Club Bonanza', 'show4.title': 'Corporate Summer Bash',
    'show.main-stage': 'Main Stage', 'show.rooftop': 'Rooftop Venue',
    'show.private': 'Private Event', 'show.private.note': 'Location to be announced',
    'show.soon': 'Soon', 'show.your-show': 'Your show here', 'show.your-show.note': 'Your crowd deserves better than a DJ.',
    'show.tickets': 'Tickets', 'show.info': 'Info',
    'shows.note': 'Want us at your event?', 'shows.note.link': 'Get in touch!',
    'contact.tag': 'Say hello', 'contact.title': 'Book or Contact Us',
    'contact.p': "Want to book Miss Chief and the Bandits for your event, festival, or party? We'd love to hear from you!",
    'form.name': 'Your name', 'form.email': 'Your email',
    'form.subject': 'Subject (e.g. Booking enquiry)',
    'form.message': 'Tell us about your event...',
    'form.submit': 'Send it! \u26a1',
    'form.sent': 'Message sent! \uD83C\uDF89',
    'rider.title': 'Technical Rider',
    'rider.sound.title': 'Sound',
    'rider.sound.p1': 'The band carries its own IEM rig with passive splitters (Behringer Ultralink MS8000) and a Behringer Wing Rack. All members use wired in-ears with individual headphone amplifiers.',
    'rider.sound.p2': 'Lead vocals rotate per song between the two vocalists and drummer.',
    'rider.venue.title': 'Venue provides',
    'rider.venue.li1': 'Drum mics & cabling (kick, snare, 3\u00d7 rack tom, floor tom, 2\u00d7 overhead)',
    'rider.venue.li2': '3\u00d7 vocal mic (SM58 or similar) + stands',
    'rider.venue.li3': '3 power outlets (230V) for amps',
    'rider.venue.li4': 'Mixing desk', 'rider.venue.li5': 'PA system',
    'rider.venue.li6': '🍬 M&Ms — blue ones only. We\'re serious.',
    'rider.venue.pa-note': 'The band can also offer to bring a PA system. Please contact us on the possibilities.',
    'rider.band.title': 'Band brings',
    'rider.band.li1': 'Drum kit', 'rider.band.li6': 'In-ears + headphone amplifiers',
    'rider.band.li7': '🐄🔔 More cowbell !!',
    'rider.stage.title': 'Stage Plot', 'rider.stage.left': 'Stage Left',
    'rider.stage.right': 'Stage Right', 'rider.stage.lefthanded': 'left-handed',
    'rider.stage.vocal': 'Vocal', 'rider.stage.audience': 'Audience',
    'rider.input.title': 'Input List',
    'rider.input.th.instrument': 'Instrument', 'rider.input.th.type': 'Type',
    'rider.input.th.notes': 'Notes',
    'rider.input.akg-similar': 'AKG kit or similar',
    'rider.input.pedal': 'Direct out from pedal board',
    'rider.input.sm58': 'SM58 or similar',
    'setlist.tag': 'What we play', 'setlist.title': 'Crowd Favorites on Our Setlist',
    'setlist.intro': 'A taste of what we play — order and selection vary per show.',
    'setlist.badge': 'Crowd Favorites on Our Setlist',
    'nav.setlist': 'Setlist',
    'footer.main': 'Stealing songs since 2021',
    'footer.sub.before': 'Made with',
    'footer.sub.after': 'and way too much reverb',
  },
  nl: {
    'nav.about': 'Over ons', 'nav.band': 'De Band', 'nav.media': 'Media',
    'nav.shows': 'Shows', 'nav.contact': 'Contact',
    'hero.tagline': 'We stelen je favoriete nummers \u2014<br class="mobile-break"> en je hart.',
    'hero.cta.live': 'Kom ons zien', 'hero.cta.book': 'Boek ons',
    'about.tag': 'Wie we zijn', 'about.title': 'Goede Vibes, <span class="nowrap">Geweldige Nummers</span>',
    'about.p1': 'Miss Chief and the Bandits is een zeskoppige pop rock coverband met \u00e9\u00e9n simpele missie: jouw zaal, dansvloer en ziel vullen met pure, onversneden fun.',
    'about.p2': 'Van nummers die je meebrult in de auto tot guilty pleasures waarvan je stiekem geniet \u2014 wij spelen het allemaal met een glimlach en een hoop energie. Geen gedoe, all killer no filler \u2014 gewoon geweldige muziek en nog betere sfeer.',
    'about.p3': 'Thuis in Twente, perfect voor festivals, bedrijfsfeesten, clubavonden of elk evenement dat een upgrade van een Spotify-playlist verdient.',
    'about.party': 'Feest',
    'band.tag': 'Maak kennis', 'band.title': 'De Band',
    'band.misses': 'The Miss Chiefs', 'band.bandits': 'The Bandits',
    'role.vocals': 'Zang', 'role.guitar': 'Gitaar', 'role.bass': 'Bas',
    'role.keys': 'Toetsen', 'role.drums': 'Drums & Zang',
    'role.sound': 'Chief of Sound',
    'band.david': 'The Accomplices',
    'bio.david': 'De man achter de mix. Terwijl de band nummers steelt, steelt David de show vanachter zijn tafel — elke noot perfect ingekaderd, elke stem in balans, en die kickdrum recht in je borst. Hij weet altijd precies welke fader hij moet opentrekken, welke knop hij moet draaien en welke kabel hij moet uittrekken. Niets kan hem van zijn stuk brengen. De stille kracht achter elke geweldige avond.',
    'bio.nikki': 'Nikki zingt niet alleen als een engel \u2014 de choreografie\u00ebn die zij en Emma op het podium bedenken zijn ongeëvenaard. Pure soul, onweerstaanbare aanwezigheid en moves die je de hele avond op de been houden.',
    'bio.emma': 'Kracht, zoetheid en een glimlach die stadions doet smelten. Samen met Nikki maakt Emma elk refrein twee keer zo gevaarlijk. Ze krijgt altijd de zaal in beweging en vaak de hele band plat van het lachen. Stand-up comedy, iemand?',
    'bio.ruud': 'Riffs die je haar recht overeind zetten en solo\u2019s waarna je je eigen naam vergeet. Ruud houdt het vuur brandend, zes snaren tegelijk \u2014 maar laat de pyrotechniek je niet misleiden. Als hij overschakelt op zoet, zijdezacht leadgitaar wordt de zaal stil en verschijnen de kippenvel. Dat heeft hem een bijnaam opgeleverd die alles zegt: Carlos.',
    'bio.erikjan': 'De groovemachine. Erik-Jan legt de lage noten met chirurgische precisie en een coolheid die de hele band er goed uit laat zien. En terwijl zijn vingers het fundament bewaken, vertelt zijn gezicht het hele verhaal \u2014 het kenmerkende bassface: die onmiskenbare uitdrukking van diepe concentratie, ingehouden swagger en pure lage-frequentie-voldoening.',
    'bio.pieter': 'Van weelderige synthpads tot donderende pianakkoorden, Pieter vult elke hoek van de zaal met geluid en laat geen oor onberoerd. Een doorgewinterde synthesizer-fanaat, hij kan vrijwel elk geluid nabootsen dat de mens kent — en een paar die waarschijnlijk nog niet bestaan.',
    'bio.ingo': 'Ze zeggen wel eens dat de drummer de dirigent van de band is — alleen staat hij achterin en kijkt niemand naar hem. Ingo trekt zich daar niets van aan. Hij is de fundering waar alles op rust, legt de groove neer en houdt iedereen in het gareel. Hij drijft de motor en zorgt dat iedereen zich lekker voelt. Oh, en hij zingt er ook nog bij. Tegelijk. Ja, echt.',
    'media.tag': 'Zie & hoor ons', 'media.title': 'Media',
    'media.recording': 'Live opname \u2014 december 2025',
    'shows.tag': 'Op pad', 'shows.title': 'Aankomende Shows',
    'show1.title': 'Zomerkick-off Festival', 'show2.title': 'Rooftop Party Night',
    'show3.title': 'Beach Club Bonanza', 'show4.title': 'Bedrijfsfeest',
    'show.main-stage': 'Hoofdpodium', 'show.rooftop': 'Rooftop Locatie',
    'show.private': 'Besloten Evenement', 'show.private.note': 'Locatie wordt bekendgemaakt',
    'show.soon': 'Binnenkort', 'show.your-show': 'Jouw show hier', 'show.your-show.note': 'Jouw publiek verdient meer dan een DJ.',
    'show.tickets': 'Tickets', 'show.info': 'Info',
    'shows.note': 'Wil je ons op jouw evenement?', 'shows.note.link': 'Neem contact op!',
    'contact.tag': 'Zeg hallo', 'contact.title': 'Boek of Contacteer Ons',
    'contact.p': 'Wil je Miss Chief and the Bandits boeken voor jouw evenement, festival of feest? We horen het graag!',
    'form.name': 'Jouw naam', 'form.email': 'Jouw e-mail',
    'form.subject': 'Onderwerp (bijv. Boekingsaanvraag)',
    'form.message': 'Vertel ons over jouw evenement...',
    'form.submit': 'Verstuur! \u26a1',
    'form.sent': 'Bericht verzonden! \uD83C\uDF89',
    'rider.title': 'Technische Rider',
    'rider.sound.title': 'Geluid',
    'rider.sound.p1': 'De band heeft een eigen IEM rig met passieve splitters (Behringer Ultralink MS8000) en een Behringer Wing Rack. Alle bandleden gebruiken bedrade in-ears met individuele koptelefoonversterkers.',
    'rider.sound.p2': 'De leadzang wisselt per nummer tussen de twee zangeressen en de zanger.',
    'rider.venue.title': 'Locatie verzorgt',
    'rider.venue.li1': 'Drum microfoons & bekabeling (kick, snare, 3\u00d7 racktom, floortom, 2\u00d7 overhead)',
    'rider.venue.li2': '3\u00d7 zangmicrofoon (SM58 of vergelijkbaar) + standaards',
    'rider.venue.li3': '3 stroompunten (230V) voor versterkers',
    'rider.venue.li4': 'Mengtafel', 'rider.venue.li5': 'PA systeem',
    'rider.venue.li6': '🍬 M&Ms — alleen de blauwe. We menen het.',
    'rider.venue.pa-note': 'De band kan ook aanbieden een PA systeem mee te brengen. Neem contact met ons op voor de mogelijkheden.',
    'rider.band.title': 'Band neemt mee',
    'rider.band.li1': 'Drumkit', 'rider.band.li6': 'In-ears + koptelefoonversterkers',
    'rider.band.li7': '🐄🔔 More cowbell !!',
    'rider.stage.title': 'Podiumopstelling', 'rider.stage.left': 'Podium Links',
    'rider.stage.right': 'Podium Rechts', 'rider.stage.lefthanded': 'linkshandig',
    'rider.stage.vocal': 'Zang', 'rider.stage.audience': 'Publiek',
    'rider.input.title': 'Priklijst',
    'rider.input.th.instrument': 'Instrument', 'rider.input.th.type': 'Type',
    'rider.input.th.notes': 'Opmerkingen',
    'rider.input.akg-similar': 'AKG kit of vergelijkbaar',
    'rider.input.pedal': 'Direct uit pedalboard',
    'rider.input.sm58': 'SM58 of vergelijkbaar',
    'setlist.tag': 'Wat we spelen', 'setlist.title': 'Publieksfavorieten op onze setlist',
    'setlist.intro': 'Een greep uit wat we spelen — volgorde en selectie wisselen per show.',
    'setlist.badge': 'Publieksfavorieten op onze setlist',
    'nav.setlist': 'Setlist',
    'footer.main': 'Stealing songs since 2021',
    'footer.sub.before': 'Made with',
    'footer.sub.after': 'and way too much reverb',
  }
};

// ─── i18n apply ─────────────────────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[lang][key] !== undefined) el.textContent = t[lang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[lang][key] !== undefined) el.innerHTML = t[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[lang][key] !== undefined) el.placeholder = t[lang][key];
  });
  document.getElementById('langToggle').textContent = lang === 'en' ? 'NL' : 'EN';
}

applyLang(currentLang);

document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'nl' : 'en';
  localStorage.setItem('lang', currentLang);
  applyLang(currentLang);
});


// ─── Logo fallback ─────────────────────────────────────────────────
const heroLogo  = document.getElementById('heroLogo');
const heroTitle = document.getElementById('heroTitle');
heroLogo.addEventListener('error', () => {
  heroLogo.style.display = 'none';
  heroTitle.style.display = '';
});


// ─── Floating Music Notes ──────────────────────────────────────────
const noteSymbols = ['♩', '♪', '♫', '♬', '★', '✦', '✧', '⚡'];
const notesBg = document.getElementById('notesBg');

function createNote() {
  const note = document.createElement('span');
  note.className = 'note';
  note.textContent = noteSymbols[Math.floor(Math.random() * noteSymbols.length)];
  note.style.left = Math.random() * 100 + 'vw';
  note.style.animationDuration = (8 + Math.random() * 14) + 's';
  note.style.animationDelay = (Math.random() * 6) + 's';
  note.style.fontSize = (1 + Math.random() * 1.4) + 'rem';
  const colors = ['#00c896', '#1a6fd4', '#f2ede0', '#00e0aa', '#3a8fd4'];
  note.style.color = colors[Math.floor(Math.random() * colors.length)];
  notesBg.appendChild(note);
  setTimeout(() => note.remove(), 24000);
}

// Detect low-end hardware to reduce animated compositor layers and prevent GPU crashes.
// Uses three signals for broadest cross-platform coverage:
//   - deviceMemory: RAM in GB (Chrome/Android; not available on iOS Safari)
//   - hardwareConcurrency: logical CPU cores (all platforms)
//   - viewport width: fallback for iOS where the above may be unavailable
const isLowEnd = (
  (navigator.deviceMemory  && navigator.deviceMemory      <= 2) ||
  (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
  window.matchMedia('(max-width: 768px)').matches
);

const NOTE_INIT     = isLowEnd ?  3 : 18;
const NOTE_DELAY    = isLowEnd ? 1500 : 500;
const NOTE_INTERVAL = isLowEnd ? 6000 : 1800;
const NOTE_MAX      = isLowEnd ?  4 : Infinity;

for (let i = 0; i < NOTE_INIT; i++) setTimeout(createNote, i * NOTE_DELAY);
setInterval(() => { if (notesBg.children.length < NOTE_MAX) createNote(); }, NOTE_INTERVAL);


// ─── Nav scroll effect ──────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });


// ─── Mobile burger menu ─────────────────────────────────────────────
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});


// ─── Scroll-reveal ──────────────────────────────────────────────────
const revealEls = document.querySelectorAll(
  '.member-card, .show-item, .about-grid, .icon-card, .contact-grid'
);

revealEls.forEach(el => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const siblings = [...entry.target.parentElement.children];
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => entry.target.classList.add('visible'), idx * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('visible'));
}


// ─── YouTube lazy embed ─────────────────────────────────────────────
document.querySelectorAll('.yt-thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    const id = thumb.dataset.ytid;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    thumb.replaceWith(iframe);
  });
});


// ─── Photo lightbox ─────────────────────────────────────────────────
const lightbox    = document.getElementById('photoLightbox');
const lightboxImg = document.getElementById('lightboxImg');

// Also trigger lightbox from zoomed-out background-image avatars
document.querySelectorAll('.member-avatar--zoomed').forEach(div => {
  div.addEventListener('click', () => {
    const img = div.querySelector('.member-photo--hidden');
    if (img) { lightboxImg.src = img.src; lightboxImg.alt = img.alt; lightbox.classList.add('open'); }
  });
});

document.querySelectorAll('.member-photo:not(.member-photo--hidden)').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
  });
});

lightbox.addEventListener('click', () => lightbox.classList.remove('open'));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') lightbox.classList.remove('open');
});


// ─── Technical rider toggle ────────────────────────────────────────
const riderToggle = document.getElementById('riderToggle');
const riderBody   = document.getElementById('riderBody');

riderToggle.addEventListener('click', () => {
  const open = riderBody.classList.toggle('open');
  riderToggle.setAttribute('aria-expanded', open);
});


// ─── Contact form ───────────────────────────────────────────────────
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const btn  = form.querySelector('button[type="submit"]');
  btn.disabled = true;

  fetch(window.location.pathname, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(new FormData(form)).toString(),
  })
    .then(() => {
      btn.textContent = t[currentLang]['form.sent'];
      btn.style.background = 'linear-gradient(135deg, #00c896, #1a6fd4)';
      setTimeout(() => {
        btn.textContent = t[currentLang]['form.submit'];
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3500);
    })
    .catch(() => {
      btn.textContent = 'Something went wrong — please email us directly.';
      btn.disabled = false;
    });
});
