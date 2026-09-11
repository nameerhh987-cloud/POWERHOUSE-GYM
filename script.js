/**
 * ABF Boxing & Fitness - Gulshan-e-Iqbal
 * Simple, Clean & Fast Athletic Engine
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
});

/* ==========================================================================
   Header Scroll & Navigation
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
   Hero Clean Stats Ticker
   ========================================================================== */
function initHeroStats() {
  const container = document.getElementById('heroStatsRow');
  if (!container || !abfData.stats) return;

  container.innerHTML = abfData.stats.map(s => `
    <div class="hero-stat-item">
      <div class="stat-number">${s.number}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');
}

/* ==========================================================================
   Why ABF Cards (Clean 4 Cards Grid)
   ========================================================================== */
function initWhyABF() {
  const container = document.getElementById('whyCardsGrid');
  if (!container) return;

  container.innerHTML = abfData.whyABF.map(item => `
    <div class="feature-card">
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
}

/* ==========================================================================
   Programs Section
   ========================================================================== */
function initPrograms() {
  const container = document.getElementById('programsGrid');
  if (!container) return;

  container.innerHTML = abfData.programs.map(prog => `
    <div class="program-card">
      <div>
        <span class="program-badge">${prog.badge}</span>
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
        <a href="https://wa.me/923132338812?text=Hello%20ABF%2C%20I%20want%20to%20enroll%20in%20${encodeURIComponent(prog.title)}." 
           target="_blank" rel="noopener noreferrer" 
           class="btn-outline" 
           style="width: 100%; text-align: center; display: block;">
          ENROLL IN PROGRAM
        </a>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Pricing & Memberships
   ========================================================================== */
function initPricing() {
  const container = document.getElementById('pricingGrid');
  if (!container) return;

  container.innerHTML = abfData.pricing.map(tier => `
    <div class="pricing-card ${tier.highlighted ? 'highlighted' : ''}">
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
        <a href="https://wa.me/923132338812?text=Hello%20ABF%2C%20I%20want%20to%20join%20the%20${encodeURIComponent(tier.tier)}%20Tier." 
           target="_blank" rel="noopener noreferrer" 
           class="${tier.highlighted ? 'btn-orange' : 'btn-outline'}" 
           style="display: block; text-align: center;">
          ${tier.ctaText}
        </a>
      </div>
    </div>
  `).join('');
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

    // Imperial conversion
    const totalInches = hCm / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    const lbs = (wKg * 2.20462).toFixed(1);
    imperialEquivalent.textContent = `${feet} ft ${inches} in \u2022 ${lbs} lbs`;

    // Formula: BMI = kg / (m^2)
    const hM = hCm / 100;
    const bmi = (wKg / (hM * hM)).toFixed(1);
    const bmiNum = parseFloat(bmi);

    bmiDisplay.textContent = bmi;

    if (bmiNum < 18.5) {
      bmiCategory.textContent = "Underweight / Mass Building";
      bmiRecommendation.textContent = "Focus on muscle hypertrophy and structured caloric intake. High-resistance training and compound boxing punches will build solid muscle mass.";
    } else if (bmiNum >= 18.5 && bmiNum <= 24.9) {
      bmiCategory.textContent = "Healthy Athletic Range";
      bmiRecommendation.textContent = "Your body composition is in a prime athletic range. Ideal for high-tempo boxing combinations and athletic conditioning workouts.";
    } else if (bmiNum >= 25.0 && bmiNum <= 29.9) {
      bmiCategory.textContent = "Overweight / Fat Loss Focus";
      bmiRecommendation.textContent = "Focus on high-output calorie burn with heavy bag rounds, battle ropes, and air-bike circuits to lean down while maintaining power.";
    } else {
      bmiCategory.textContent = "Elevated BMI / High-Impact Cardio";
      bmiRecommendation.textContent = "Controlled-tempo boxing conditioning, low-impact footwork drills, and clean nutritional consistency will deliver steady, safe weight loss.";
    }
  }

  if (heightRange && weightRange) {
    heightRange.addEventListener('input', calculateBMI);
    weightRange.addEventListener('input', calculateBMI);
    calculateBMI();
  }
}

/* ==========================================================================
   Clean Facility Gallery & Simple Lightbox
   ========================================================================== */
function initGallery() {
  const container = document.getElementById('galleryGrid');
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImage');
  const modalTitle = document.getElementById('lightboxTitle');
  const closeBtn = document.getElementById('lightboxClose');

  if (!container) return;

  container.innerHTML = abfData.gallery.map((item, index) => `
    <div class="gallery-card" data-index="${index}" tabindex="0" role="button" aria-label="View ${item.title}">
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
   Footer Current Year
   ========================================================================== */
function initFooterYear() {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}
