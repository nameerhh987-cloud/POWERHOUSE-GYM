/**
 * POWERHOUSE GYM - DOWNTOWN MIAMI, FL
 * Modern Luxury Monochrome Animation & Interactive Engine
 * STRICT RULE: Absolutely Zero Emojis
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileDrawer();
  initHeroStats();
  initWhyABF();
  initPrograms();
  initPricing();
  initFitnessCalculator();
  initGallery();
  initFooterYear();
  initScrollReveal();
  init3DTilt();
});

/* ==========================================================================
   Header Scroll & Active Navigation Indicator
   ========================================================================== */
function initHeader() {
  const header = document.getElementById('siteHeader');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const sections = document.querySelectorAll('main section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    let currentSection = '';
    const scrollPos = window.scrollY + 180;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   Mobile Slide-Over Drawer
   ========================================================================== */
function initMobileDrawer() {
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const closeLinks = document.querySelectorAll('[data-close-drawer]');

  function openDrawer() {
    mobileToggle.classList.add('active');
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileToggle.classList.remove('active');
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      if (mobileDrawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeDrawer);
  }

  closeLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   Hero Clean Stats Ticker with Number Counting Animation
   ========================================================================== */
function initHeroStats() {
  const container = document.getElementById('heroStatsRow');
  if (!container || !abfData.stats) return;

  container.innerHTML = abfData.stats.map(s => `
    <div class="hero-stat-item">
      <div class="stat-number" data-target="${s.number}">${s.number}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');

  // Animate stats upon entering viewport
  animateStatNumbers();
}

function animateStatNumbers() {
  const statNumbers = document.querySelectorAll('.hero-stat-item .stat-number');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statNumbers.forEach(stat => {
          const raw = stat.getAttribute('data-target') || stat.textContent;
          if (raw.includes('+')) {
            const num = parseInt(raw.replace(/\D/g, ''), 10);
            animateCount(stat, 0, num, 1200, '+');
          } else if (raw.includes('★')) {
            const num = parseFloat(raw.replace(/[^\d.]/g, ''));
            animateFloat(stat, 0.0, num, 1200, '★');
          }
        });
        obs.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const statsRow = document.getElementById('heroStatsRow');
  if (statsRow) observer.observe(statsRow);
}

function animateCount(el, start, end, duration, suffix = '') {
  let startTime = null;
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(ease * (end - start) + start);
    el.textContent = current + suffix;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      el.textContent = end + suffix;
    }
  }
  window.requestAnimationFrame(step);
}

function animateFloat(el, start, end, duration, suffix = '') {
  let startTime = null;
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = (ease * (end - start) + start).toFixed(1);
    el.textContent = current + suffix;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      el.textContent = end.toFixed(1) + suffix;
    }
  }
  window.requestAnimationFrame(step);
}

/* ==========================================================================
   Why Powerhouse Cards (Clean 4 Cards Grid)
   ========================================================================== */
function initWhyABF() {
  const container = document.getElementById('whyCardsGrid');
  if (!container) return;

  container.innerHTML = abfData.whyABF.map((item, idx) => `
    <div class="feature-card reveal delay-${(idx % 2) + 1}">
      <div class="feature-header-row">
        <span class="feature-tag">${item.tag}</span>
        <span class="feature-number">${item.number}</span>
      </div>
      <h3 class="feature-title">${item.title}</h3>
      <p class="feature-desc">${item.description}</p>
      <div class="feature-meta">
        <span class="feature-spec">${item.spec}</span>
        <span class="feature-metric">${item.metric}</span>
      </div>
    </div>
  `).join('');
  setTimeout(init3DTilt, 50);
}

/* ==========================================================================
   Programs Grid
   ========================================================================== */
function initPrograms() {
  const container = document.getElementById('programsGrid');
  if (!container) return;

  container.innerHTML = abfData.programs.map((prog, idx) => `
    <div class="program-card reveal delay-${(idx % 3) + 1}">
      <div>
        <div class="program-badge">${prog.badge}</div>
        <h3 class="program-title">${prog.title}</h3>
        <div class="program-subtitle">${prog.level} &bull; ${prog.duration}</div>
        <p class="program-desc">${prog.description}</p>
        
        <div class="program-checklist">
          ${prog.features.map(f => `
            <div class="program-check-item">
              <span class="check-dot"></span>
              <span>${f}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div>
        <a href="#pricing" class="btn-outline" style="width: 100%; text-align: center;">SELECT PROGRAM</a>
      </div>
    </div>
  `).join('');
  setTimeout(init3DTilt, 50);
}

/* ==========================================================================
   Pricing Cards
   ========================================================================== */
function initPricing() {
  const container = document.getElementById('pricingGrid');
  if (!container) return;

  container.innerHTML = abfData.pricing.map((tier, idx) => `
    <div class="pricing-card ${tier.highlighted ? 'highlighted' : ''} reveal delay-${(idx % 3) + 1}">
      ${tier.badge ? `<div class="popular-badge">${tier.badge}</div>` : ''}
      <div>
        <h3 class="tier-name">${tier.tier}</h3>
        <p class="tier-desc">${tier.description}</p>
        
        <div class="price-box">
          <div>
            <span class="currency">${tier.currency}</span>
            <span class="price-num">${tier.price}</span>
          </div>
          <div class="period">${tier.period}</div>
        </div>

        <div class="features-list">
          ${tier.features.map(f => `
            <div class="feature-item">
              <span class="feature-bullet"></span>
              <span>${f}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="pricing-btn-wrap">
        <a href="${(abfData.gymInfo && abfData.gymInfo.whatsappUrl) ? abfData.gymInfo.whatsappUrl : '#contact'}?text=Hello%20Powerhouse%20Gym%2C%20I%20want%20to%20inquire%20about%20the%20${encodeURIComponent(tier.tier)}%20Tier." 
           target="_blank" rel="noopener noreferrer" 
           class="${tier.highlighted ? 'btn-white' : 'btn-outline'}" 
           style="display: block; text-align: center;">
          ${tier.ctaText}
        </a>
      </div>
    </div>
  `).join('');
  setTimeout(init3DTilt, 50);
}

/* ==========================================================================
   Simple & User-Friendly Fitness Calculator
   ========================================================================== */
function initFitnessCalculator() {
  const heightRange = document.getElementById('heightRange');
  const weightRange = document.getElementById('weightRange');
  const heightValue = document.getElementById('heightValue');
  const weightValue = document.getElementById('weightValue');
  const imperialEquivalent = document.getElementById('imperialEquivalent');
  const bmiDisplay = document.getElementById('bmiDisplay');
  const bmiCategory = document.getElementById('bmiCategory');
  const bmiRecommendation = document.getElementById('bmiRecommendation');

  function calculateBMI() {
    const hCm = parseFloat(heightRange.value);
    const wKg = parseFloat(weightRange.value);

    heightValue.textContent = hCm;
    weightValue.textContent = wKg;

    // Convert to Imperial for user convenience
    const totalInches = hCm / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    const lbs = (wKg * 2.20462).toFixed(1);
    imperialEquivalent.textContent = `${feet} ft ${inches} in • ${lbs} lbs`;

    // BMI Calculation: kg / (m)^2
    const hM = hCm / 100;
    const bmi = (wKg / (hM * hM)).toFixed(1);
    bmiDisplay.textContent = bmi;

    // Category & Athletic Guidance
    if (bmi < 18.5) {
      bmiCategory.textContent = 'Lean / Underweight';
      bmiCategory.style.borderColor = 'rgba(255, 255, 255, 0.4)';
      bmiRecommendation.textContent = 'Focus on caloric surplus nutrition and structured progressive overload lifting to build foundational strength and density.';
    } else if (bmi >= 18.5 && bmi < 25.0) {
      bmiCategory.textContent = 'Healthy Athletic Range';
      bmiCategory.style.borderColor = '#FFFFFF';
      bmiRecommendation.textContent = 'Your body composition is in a prime athletic range. Ideal for heavy resistance hypertrophy and functional conditioning workouts.';
    } else if (bmi >= 25.0 && bmi < 30.0) {
      bmiCategory.textContent = 'Athletic Mass / Overweight';
      bmiCategory.style.borderColor = 'rgba(255, 255, 255, 0.6)';
      bmiRecommendation.textContent = 'Ideal composition for power and strength development. Pair heavy barbell compound lifts with high-intensity turf conditioning rounds.';
    } else {
      bmiCategory.textContent = 'High Density Range';
      bmiCategory.style.borderColor = '#FFFFFF';
      bmiRecommendation.textContent = 'Prioritize metabolic circuits, structured nutrition deficit, and daily low-impact cardio alongside guided resistance training.';
    }
  }

  if (heightRange && weightRange) {
    heightRange.addEventListener('input', calculateBMI);
    weightRange.addEventListener('input', calculateBMI);
    calculateBMI();
  }
}

/* ==========================================================================
   Clean Gallery & Lightbox Viewer
   ========================================================================== */
function initGallery() {
  const container = document.getElementById('galleryGrid');
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImage');
  const modalTitle = document.getElementById('lightboxTitle');
  const closeBtn = document.getElementById('lightboxClose');

  if (!container || !abfData.gallery) return;

  container.innerHTML = abfData.gallery.map((item, index) => `
    <div class="gallery-card reveal delay-${(index % 3) + 1}" data-index="${index}">
      <img src="${item.image}" alt="${item.title}" class="gallery-img" loading="lazy">
      <div class="gallery-overlay">
        <span class="gallery-tag">${item.tag}</span>
        <h4 class="gallery-title">${item.title}</h4>
      </div>
    </div>
  `).join('');

  const cards = container.querySelectorAll('.gallery-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-index'), 10);
      const item = abfData.gallery[idx];
      modalImg.src = item.image;
      modalImg.alt = item.title;
      modalTitle.textContent = item.title;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   Scroll-Triggered Reveal Animations (IntersectionObserver)
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .section-header, .contact-info-card, .contact-action-card, .calc-simple-container');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => {
    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal');
    }
    observer.observe(el);
  });
}

/* ==========================================================================
   Footer Current Year
   ========================================================================== */
function initFooterYear() {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   3D Card Tilt & Specular Light Glare Physics
   ========================================================================== */
function init3DTilt() {
  const tiltElements = document.querySelectorAll('.feature-card, .program-card, .pricing-card, .hero-stat-item, [data-tilt]');

  tiltElements.forEach(card => {
    let glare = card.querySelector('.tilt-glare');
    if (!glare) {
      glare = document.createElement('div');
      glare.className = 'tilt-glare';
      card.appendChild(glare);
    }

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px) scale3d(1.02, 1.02, 1.02)`;

      glare.style.opacity = '1';
      glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.16) 0%, transparent 65%)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale3d(1, 1, 1)';
      if (glare) glare.style.opacity = '0';
    });
  });
}
