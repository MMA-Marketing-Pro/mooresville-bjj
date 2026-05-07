/* ==========================================================================
   MOORESVILLE BRAZILIAN JIU-JITSU
   Shared scripts: lead modal, nav scroll, marquee, stat counters,
   GSAP scroll reveals, dynamic copyright year, booking page logic.
   ========================================================================== */

(function () {
  'use strict';

  function initIcons() {
    try {
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    } catch (e) {}
  }

  function initYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  function initNavScroll() {
    var nav = document.querySelector('.nav');
    if (!nav) return;
    var toggleScrolled = function () {
      if (window.scrollY > 32) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    toggleScrolled();
    window.addEventListener('scroll', toggleScrolled, { passive: true });
  }

  function initNavDropdowns() {
    var dropdowns = document.querySelectorAll('.nav-dropdown');
    if (!dropdowns.length) return;

    dropdowns.forEach(function (dd) {
      var trigger = dd.querySelector('.nav-dropdown-trigger');
      if (!trigger) return;

      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        var isOpen = dd.classList.toggle('is-open');
        trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        // Close any other open dropdown
        dropdowns.forEach(function (other) {
          if (other !== dd) {
            other.classList.remove('is-open');
            var t = other.querySelector('.nav-dropdown-trigger');
            if (t) t.setAttribute('aria-expanded', 'false');
          }
        });
      });

      trigger.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          dd.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          trigger.blur();
        }
      });
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav-dropdown')) {
        dropdowns.forEach(function (dd) {
          dd.classList.remove('is-open');
          var t = dd.querySelector('.nav-dropdown-trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
      }
    });
  }

  function initMobileNav() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var isOpen = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    nav.querySelectorAll('.nav-mobile a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  function initMarquee() {
    document.querySelectorAll('.marquee-track').forEach(function (track) {
      if (track.dataset.duplicated === 'true') return;
      var children = Array.from(track.children);
      children.forEach(function (child) {
        track.appendChild(child.cloneNode(true));
      });
      track.dataset.duplicated = 'true';
    });
  }

  function initStatCounters() {
    var counters = document.querySelectorAll('.stat-num[data-target]');
    if (!counters.length || !('IntersectionObserver' in window)) return;

    var animateCounter = function (el) {
      var target = parseFloat(el.dataset.target);
      var suffix = el.dataset.suffix || '';
      var duration = 1200;
      var start = 0;
      var startTime = null;
      var ease = function (t) { return 1 - Math.pow(1 - t, 3); };

      var numNode = el.querySelector('.num-val');
      var suffixNode = el.querySelector('.suffix');
      if (!numNode) {
        el.textContent = '';
        numNode = document.createElement('span');
        numNode.className = 'num-val';
        el.appendChild(numNode);
        if (suffix) {
          suffixNode = document.createElement('span');
          suffixNode.className = 'suffix';
          suffixNode.textContent = suffix;
          el.appendChild(suffixNode);
        }
      }

      var step = function (timestamp) {
        if (!startTime) startTime = timestamp;
        var elapsed = timestamp - startTime;
        var progress = Math.min(elapsed / duration, 1);
        var current = Math.round(start + (target - start) * ease(progress));
        numNode.textContent = String(current);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = 'true';
          animateCounter(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { io.observe(el); });
  }

  function initScrollReveals() {
    if (!window.gsap || !window.ScrollTrigger) return;
    try {
      gsap.registerPlugin(ScrollTrigger);
    } catch (e) { return; }

    gsap.utils.toArray('.fade-in-up').forEach(function (el, idx) {
      gsap.fromTo(el,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          delay: (idx % 3) * 0.08,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true
          }
        }
      );
    });
  }

  function initLeadModal() {
    var modal = document.getElementById('leadModal');
    if (!modal) return;

    var form = modal.querySelector('form');
    var closeBtns = modal.querySelectorAll('[data-close-modal]');
    var programSelect = modal.querySelector('select[name="program"]');

    var openModal = function (preselectedProgram) {
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (preselectedProgram && programSelect) {
        programSelect.value = preselectedProgram;
      }
      var firstInput = modal.querySelector('input, select');
      if (firstInput) setTimeout(function () { firstInput.focus(); }, 120);
    };

    var closeModal = function () {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    document.addEventListener('click', function (e) {
      var trigger = e.target.closest('[data-cta="lead-modal"]');
      if (trigger) {
        e.preventDefault();
        openModal(trigger.dataset.program || '');
      }
    });

    closeBtns.forEach(function (btn) {
      btn.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });

    var phoneInput = modal.querySelector('input[name="phone"]');
    if (phoneInput) {
      phoneInput.addEventListener('input', function (e) {
        var digits = e.target.value.replace(/\D/g, '').slice(0, 10);
        var out = '';
        if (digits.length > 0) out = '(' + digits.slice(0, 3);
        if (digits.length >= 4) out += ') ' + digits.slice(3, 6);
        if (digits.length >= 7) out += '-' + digits.slice(6);
        e.target.value = out;
      });
    }

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var valid = true;
        form.querySelectorAll('[required]').forEach(function (field) {
          var parent = field.closest('.form-field');
          if (!field.value.trim()) {
            valid = false;
            if (parent) parent.classList.add('has-error');
          } else {
            if (parent) parent.classList.remove('has-error');
          }
        });
        var emailField = form.querySelector('input[type="email"]');
        if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
          valid = false;
          var parent = emailField.closest('.form-field');
          if (parent) parent.classList.add('has-error');
        }
        if (!valid) return;

        var data = Object.fromEntries(new FormData(form).entries());
        try {
          sessionStorage.setItem('leadFormData', JSON.stringify(data));
        } catch (err) {}

        // TODO: To wire backend capture, POST `data` to a webhook or GHL form endpoint here
        // before the redirect. Sessionstorage hand-off is the default.

        window.location.href = 'booking.html?program=' + encodeURIComponent(data.program || '');
      });
    }
  }

  function initBookingPage() {
    if (!document.body.classList.contains('booking-page')) return;

    var params = new URLSearchParams(window.location.search);
    var program = params.get('program') || 'adult-bjj';

    var showCalendar = function (programId) {
      var calendars = document.querySelectorAll('.booking-calendar');
      var found = false;
      calendars.forEach(function (c) {
        if (c.dataset.program === programId) {
          c.classList.add('active');
          found = true;
        } else {
          c.classList.remove('active');
        }
      });
      if (!found && calendars.length) {
        calendars[0].classList.add('active');
        programId = calendars[0].dataset.program;
      }
      document.querySelectorAll('.program-chip').forEach(function (chip) {
        chip.classList.toggle('active', chip.dataset.program === programId);
      });
    };

    showCalendar(program);

    document.querySelectorAll('.program-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        showCalendar(chip.dataset.program);
      });
    });

    try {
      var saved = JSON.parse(sessionStorage.getItem('leadFormData') || '{}');
      if (saved.firstName) {
        var greeting = document.querySelector('[data-lead-greeting]');
        if (greeting) {
          greeting.textContent = saved.firstName.toUpperCase() + ', ';
        }
      }
    } catch (err) {}
  }

  function initScrollRail() {
    var fill = document.querySelector('.scroll-rail-fill');
    if (!fill) return;
    var update = function () {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var height = (document.documentElement.scrollHeight - window.innerHeight) || 1;
      var pct = Math.max(0, Math.min(1, scrollTop / height));
      fill.style.height = (pct * 100).toFixed(2) + '%';
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
  }

  function initProgramCardParallax() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;
    var cards = document.querySelectorAll('.program-card');
    cards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty('--tilt-x', (-x).toFixed(3));
        card.style.setProperty('--tilt-y', (-y).toFixed(3));
      });
      card.addEventListener('mouseleave', function () {
        card.style.setProperty('--tilt-x', 0);
        card.style.setProperty('--tilt-y', 0);
      });
    });
  }

  function initBigCtaGhostWord() {
    var nodes = document.querySelectorAll('[data-rotate-word]');
    if (!nodes.length) return;
    var words = ['TECHNIQUE', 'PRESSURE', 'PRECISION', 'CONNECTION'];
    var idx = Math.floor(Math.random() * words.length);
    nodes.forEach(function (node) {
      var word = words[idx % words.length];
      node.setAttribute('data-ghost-word', word);
      // Inject into existing ::before via CSS variable fallback — set inline style for content
      var style = document.createElement('style');
      style.textContent = '.big-cta[data-ghost-word="' + word + '"]::before { content: "' + word + '"; }';
      document.head.appendChild(style);
      idx++;
    });
  }

  function initMagneticButtons() {
    var buttons = document.querySelectorAll('.btn-primary, .nav-cta');
    buttons.forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translate(' + (x * 0.12) + 'px, ' + (y * 0.12 - 2) + 'px)';
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
      });
    });
  }

  function initBioModal() {
    var modal = document.getElementById('bioModal');
    if (!modal) return;

    var titleEl = modal.querySelector('.bio-modal__title');
    var roleEl = modal.querySelector('.bio-modal__role');
    var bodyEl = modal.querySelector('.bio-modal__body');

    var openModal = function (card) {
      var name = card.querySelector('h3');
      var role = card.querySelector('.instructor-card-role');
      var bio = card.querySelector('.instructor-card-bio');

      if (titleEl && name) titleEl.textContent = name.textContent;
      if (roleEl && role) roleEl.textContent = role.textContent;
      if (bodyEl && bio) bodyEl.innerHTML = bio.innerHTML;

      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    var closeModal = function () {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    document.addEventListener('click', function (e) {
      var trigger = e.target.closest('.instructor-card-bio-btn');
      if (trigger) {
        e.preventDefault();
        var card = trigger.closest('.instructor-card');
        if (card) openModal(card);
        return;
      }
      if (e.target.closest('[data-close-bio-modal]')) {
        closeModal();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
  }

  function initTipsModal() {
    var modal = document.getElementById('tipsModal');
    if (!modal) return;

    var openModal = function () {
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    var closeModal = function () {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    document.addEventListener('click', function (e) {
      var trigger = e.target.closest('[data-tips-modal]');
      if (trigger) {
        e.preventDefault();
        openModal();
        return;
      }
      if (e.target.closest('[data-close-tips-modal]')) {
        closeModal();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
  }

  function initAll() {
    initIcons();
    initYear();
    initNavScroll();
    initNavDropdowns();
    initMobileNav();
    initMarquee();
    initStatCounters();
    initScrollReveals();
    initLeadModal();
    initBioModal();
    initTipsModal();
    initBookingPage();
    initMagneticButtons();
    initScrollRail();
    initProgramCardParallax();
    initBigCtaGhostWord();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
