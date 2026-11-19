// Counts visits with Google Analytics, but only once the visitor has said that
// is all right. Until then nothing is loaded from Google and no cookie is set.
// The answer is kept in this browser (localStorage) and can be changed with the
// "Cookie choice" link at the foot of a page.
//
// On the page of the game (data-play on the script tag) the question goes away
// as soon as somebody starts playing, without an answer: it is asked again next time.
(function () {
  'use strict';

  var ID = 'G-2MGLKF5EK4';
  var KEY = 'rw-analytics';
  // Only the real site counts; a copy on a laptop asks the question but sends nothing.
  var LIVE = /^(www\.)?ramonwieleman\.nl$/.test(location.hostname);
  var tag = document.currentScript;
  var onGame = !!(tag && tag.hasAttribute('data-play'));
  var root = document.documentElement;

  function read() {
    try {
      return localStorage.getItem(KEY);
    } catch (e) {
      return null;
    }
  }

  function write(answer) {
    try {
      localStorage.setItem(KEY, answer);
    } catch (e) {
      // A browser that keeps nothing: the question comes back on the next page.
    }
  }

  var loaded = false;
  function load() {
    root.setAttribute('data-analytics', 'on');
    window['ga-disable-' + ID] = false;
    if (loaded || !LIVE) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    // Counting visits only: nothing for advertising.
    window.gtag('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    window.gtag('js', new Date());
    window.gtag('config', ID, { allow_google_signals: false, allow_ad_personalization_signals: false });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
    document.head.appendChild(s);
  }

  /** Stops the counting and throws away the cookies it made. */
  function forget() {
    root.setAttribute('data-analytics', 'off');
    window['ga-disable-' + ID] = true;
    var host = location.hostname.replace(/^www\./, '');
    document.cookie.split(';').forEach(function (pair) {
      var name = pair.split('=')[0].trim();
      if (!/^_ga/.test(name)) return;
      ['', '; domain=' + host, '; domain=.' + host].forEach(function (domain) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + domain;
      });
    });
  }

  var CSS =
    '.rw-ask{position:fixed;left:0;right:0;bottom:0;z-index:50;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;' +
    'gap:.6rem 1.2rem;padding:.8rem 1rem calc(.8rem + env(safe-area-inset-bottom));background:#16261f;color:#f8faf6;' +
    'font:1rem/1.45 Charter,"Bitstream Charter","Sitka Text",Cambria,Georgia,serif;box-shadow:0 -2px 0 #f1d44a}' +
    '.rw-ask p{margin:0;max-width:44rem}' +
    '.rw-ask div{display:flex;gap:.6rem}' +
    '.rw-ask button{font:700 1rem/1 "Avenir Next Condensed","Barlow Condensed","Roboto Condensed","Arial Narrow",Arial,sans-serif;' +
    'letter-spacing:.01em;padding:.55em 1.1em;border:2px solid #f8faf6;border-radius:2px;background:transparent;color:#f8faf6;cursor:pointer;white-space:nowrap}' +
    '.rw-ask button:hover{background:#f8faf6;color:#16261f}' +
    '.rw-ask button:focus-visible{outline:3px solid #f1d44a;outline-offset:2px}';

  var bar = null;
  function hide() {
    if (bar) bar.remove();
    bar = null;
  }

  function ask() {
    if (bar) return;
    root.setAttribute('data-analytics', read() === 'yes' ? 'on' : 'ask');
    if (!document.getElementById('rw-ask-style')) {
      var style = document.createElement('style');
      style.id = 'rw-ask-style';
      style.textContent = CSS;
      document.head.appendChild(style);
    }
    bar = document.createElement('div');
    bar.className = 'rw-ask';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', 'Cookies');
    var text = document.createElement('p');
    text.textContent =
      'I use Google Analytics to see how many people visit. It sets cookies and sends your visit to Google. Is that all right?';
    var buttons = document.createElement('div');
    var yes = document.createElement('button');
    yes.type = 'button';
    yes.textContent = 'OK';
    yes.addEventListener('click', function () {
      write('yes');
      hide();
      load();
    });
    var no = document.createElement('button');
    no.type = 'button';
    no.textContent = 'No thanks';
    no.addEventListener('click', function () {
      write('no');
      hide();
      forget();
    });
    buttons.appendChild(yes);
    buttons.appendChild(no);
    bar.appendChild(text);
    bar.appendChild(buttons);
    document.body.appendChild(bar);

    if (onGame) {
      // Playing comes first: the first tap on the game or the first key puts the question away.
      var away = function (event) {
        if (bar && bar.contains(event.target)) return;
        hide();
        window.removeEventListener('pointerdown', away, true);
        window.removeEventListener('keydown', away, true);
      };
      window.addEventListener('pointerdown', away, true);
      window.addEventListener('keydown', away, true);
    }
  }

  function start() {
    // A way back to the question, at the foot of every page that has a foot.
    var foot = document.querySelector('.foot');
    if (foot) {
      var again = document.createElement('a');
      again.href = '#cookies';
      again.textContent = 'Cookie choice';
      again.addEventListener('click', function (event) {
        event.preventDefault();
        ask();
      });
      foot.appendChild(document.createTextNode(' '));
      foot.appendChild(again);
    }

    var answer = read();
    if (answer === 'yes') return load();
    if (answer === 'no') return root.setAttribute('data-analytics', 'off');
    // A browser that says "do not track me" has answered already.
    if (navigator.globalPrivacyControl) return root.setAttribute('data-analytics', 'off');
    ask();
  }

  if (document.body) start();
  else document.addEventListener('DOMContentLoaded', start);
})();
