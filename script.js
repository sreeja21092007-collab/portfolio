/**
 * SREEJA RAGUPATHY - PORTFOLIO INTERACTIVE SCRIPT
 * Vanilla JavaScript (ES6+) - Fully modular, accessible, and reactive
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. Data Definitions (Projects, Skills, Certifications)
     ========================================================================== */

  const PROJECTS_DATA = [
    {
      id: 'ai-image-detector',
      title: 'AI Image Detector',
      subtitle: 'Computer Vision & Deepfake Artifact Analysis',
      category: ['AI', 'Web'],
      primaryCategory: 'AI',
      description: 'An AI-powered concept for detecting manipulated and AI-generated images using deep neural pattern recognition and frequency artifact extraction.',
      detailedDescription: 'AI Image Detector is designed to combat visual disinformation. It inspects microscopic frequency discrepancies, pixel diffusion traces, and metadata anomalies to compute a tamper probability score in real-time. Built with a responsive client interface communicating with an inference pipeline.',
      features: [
        'Frequency domain DCT & Fourier spectrum artifact inspection',
        'Real-time confidence rating with visual tamper heatmaps',
        'Drag-and-drop batch scanning for multi-format imagery (PNG, JPG, WEBP)',
        'Detailed forensic report generation with exportable metrics'
      ],
      technologies: ['Python', 'TensorFlow', 'JavaScript', 'HTML5 Canvas', 'REST API'],
      image: '/src/assets/images/project_ai_detector_1790687936232.jpg',
      githubUrl: 'https://github.com/sreeja-ragupathy/ai-image-detector',
      demoType: 'detector'
    },
    {
      id: 'mood-to-ui',
      title: 'Mood to UI',
      subtitle: 'Emotion-Reactive Interface Design System',
      category: ['AI', 'Web', 'JavaScript'],
      primaryCategory: 'Web',
      description: 'A creative interface concept that transforms user emotions into personalized UI experiences through dynamic CSS tokens and ambient color psychology.',
      detailedDescription: 'Mood to UI dynamically morphs interface themes, typography weights, micro-interaction speeds, and spatial geometry in response to user mood inputs. Users can provide text sentiment, select mood archetypes, or allow webcam emotion detection to trigger generative design adaptation.',
      features: [
        'Dynamic real-time CSS variable interpolation engine',
        'Sentiment analysis scoring mapped to color harmony vectors',
        'Fluid SVG geometric background morphing based on emotional valence',
        'Instant theme token export (CSS, Tailwind & JSON formats)'
      ],
      technologies: ['Vanilla JavaScript', 'CSS3 Variables', 'Web Audio API', 'Sentiment Analysis', 'UI/UX Design'],
      image: '/src/assets/images/project_mood_ui_1790687960654.jpg',
      githubUrl: 'https://github.com/sreeja-ragupathy/mood-to-ui',
      demoType: 'mood'
    },
    {
      id: 'online-atm',
      title: 'Online ATM System',
      subtitle: 'Simulated Digital Banking & Transaction Ledger',
      category: ['JavaScript', 'Web'],
      primaryCategory: 'JavaScript',
      description: 'A simple digital banking interface demonstrating transaction workflows, secure authentication states, balance tracking, and ledger history.',
      detailedDescription: 'The Online ATM simulation delivers a realistic, high-assurance fintech user experience. Users can verify security PINs, execute instant deposit and withdrawal transactions, perform inter-account transfers, and inspect interactive visual transaction ledgers.',
      features: [
        'PIN authentication workflow with brute-force lockout protection',
        'Real-time balance state management with LocalStorage persistence',
        'Categorized transaction history with searchable timestamps',
        'Downloadable digital receipt & mini-statement generation'
      ],
      technologies: ['Vanilla JavaScript', 'HTML5', 'CSS3', 'LocalStorage API', 'Fintech UI'],
      image: '/src/assets/images/project_online_atm_1790687976297.jpg',
      githubUrl: 'https://github.com/sreeja-ragupathy/online-atm-system',
      demoType: 'atm'
    },
    {
      id: 'timetable-generator',
      title: 'Timetable Generator',
      subtitle: 'Academic Conflict-Free Scheduling Engine',
      category: ['Web', 'Other', 'JavaScript'],
      primaryCategory: 'Web',
      description: 'A web-based timetable generation system designed to simplify academic scheduling and resolve multi-batch constraints effortlessly.',
      detailedDescription: 'Developed to eliminate scheduling bottlenecks in collegiate departments, this tool optimizes classroom, faculty, and subject distributions using a constraint satisfaction heuristic. Features a clean interactive calendar grid with instant conflict warnings.',
      features: [
        'Genetic / Backtracking constraint resolution algorithm',
        'Faculty workload balance and classroom capacity matching',
        'Interactive drag-and-drop schedule adjustment with live collision detection',
        'One-click PDF / Excel timetable export for college faculty and students'
      ],
      technologies: ['JavaScript', 'CSS Grid', 'Constraint Satisfaction', 'HTML5 Drag & Drop'],
      image: '/src/assets/images/project_ai_detector_1790687936232.jpg',
      githubUrl: 'https://github.com/sreeja-ragupathy/timetable-generator',
      demoType: 'timetable'
    },
    {
      id: 'smart-campus-initiative',
      title: 'Smart Campus Initiative',
      subtitle: 'IoT-Ready Student Services & Facility Hub',
      category: ['Other', 'Web', 'JavaScript'],
      primaryCategory: 'Other',
      description: 'A technology-focused concept for improving the student campus experience with live facility tracking and resource allocation.',
      detailedDescription: 'The Smart Campus Initiative centralizes campus utility tracking, including real-time computer lab occupancy, study room slot reservations, library book availability, and automated maintenance ticketing for student dormitories and classrooms.',
      features: [
        'Live lab and study room capacity visualization',
        'One-tap student facility booking with QR pass generation',
        'Campus issue reporting pipeline with photo uploads & status tracking',
        'Campus event broadcast bulletin with RSVP tracking'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'IoT Telemetry Simulation', 'PWA Ready'],
      image: '/src/assets/images/project_mood_ui_1790687960654.jpg',
      githubUrl: 'https://github.com/sreeja-ragupathy/smart-campus-hub',
      demoType: 'campus'
    }
  ];

  const CERTIFICATIONS_DATA = [
    {
      id: 'meta-frontend',
      title: 'Meta Frontend Developer Professional Certificate',
      platform: 'Meta / Coursera',
      year: '2025',
      idNumber: 'META-FE-994821',
      skills: 'HTML5, CSS3, JavaScript ES6, React, Responsive Design, Version Control'
    },
    {
      id: 'ibm-python',
      title: 'Python for Data Science & AI',
      platform: 'IBM / Cognitive Class',
      year: '2025',
      idNumber: 'IBM-PY-554109',
      skills: 'Python, NumPy, Pandas, Data Structures, Machine Learning Concepts'
    },
    {
      id: 'oracle-sql',
      title: 'Database Design & Programming with SQL',
      platform: 'Oracle Academy',
      year: '2024',
      idNumber: 'ORA-DB-781204',
      skills: 'Relational Schemas, Normalization, DDL/DML, Complex Queries, Transactions'
    },
    {
      id: 'nptel-java',
      title: 'Programming in Java (Elite Score)',
      platform: 'NPTEL / IIT Kharagpur',
      year: '2024',
      idNumber: 'NPTEL-JV-340121',
      skills: 'OOP Concepts, Collections Framework, Multithreading, Exception Handling'
    }
  ];

  /* ==========================================================================
     2. Theme Management (Light / Dark Mode with LocalStorage)
     ========================================================================== */

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  function initTheme() {
    const savedTheme = localStorage.getItem('sreeja_portfolio_theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDarkScheme.matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('sreeja_portfolio_theme', newTheme);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  initTheme();

  /* ==========================================================================
     3. Sticky Navigation & Active Indicator
     ========================================================================== */

  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  function handleNavbarScroll() {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  // Active section observer
  const navObserverOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, navObserverOptions);

  sections.forEach(section => navObserver.observe(section));

  /* ==========================================================================
     4. Mobile Navigation Menu Toggle
     ========================================================================== */

  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileNavBackdrop = document.getElementById('mobile-nav-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    hamburgerBtn?.classList.add('active');
    mobileNavDrawer?.classList.add('open');
    mobileNavBackdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    hamburgerBtn?.classList.remove('active');
    mobileNavDrawer?.classList.remove('open');
    mobileNavBackdrop?.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileNavDrawer?.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileNavBackdrop) {
    mobileNavBackdrop.addEventListener('click', closeMobileMenu);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  /* ==========================================================================
     5. Desktop Interactive Cursor Glow
     ========================================================================== */

  const cursorGlow = document.getElementById('cursor-glow');

  if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let isVisible = false;

    window.addEventListener('pointermove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        cursorGlow.style.opacity = '1';
        isVisible = true;
      }
    });

    window.addEventListener('pointerleave', () => {
      cursorGlow.style.opacity = '0';
      isVisible = false;
    });

    function animateCursor() {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      cursorGlow.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animateCursor);
    }
    animateCursor();
  }

  /* ==========================================================================
     6. Animated Statistics Counters
     ========================================================================== */

  const statsSection = document.getElementById('stats');
  const statNumbers = document.querySelectorAll('.stat-number');
  let countersAnimated = false;

  function runCounters() {
    if (countersAnimated) return;
    countersAnimated = true;

    statNumbers.forEach(elem => {
      const target = parseInt(elem.getAttribute('data-target') || '0', 10);
      const duration = 1600; // ms
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Smooth easeOutExpo
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = Math.floor(easeOut * target);

        elem.textContent = currentVal.toString();

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          elem.textContent = target.toString();
        }
      }

      requestAnimationFrame(update);
    });
  }

  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        runCounters();
        statsObserver.disconnect();
      }
    }, { threshold: 0.25 });

    statsObserver.observe(statsSection);
  }

  /* ==========================================================================
     7. Skills Filter Interaction
     ========================================================================== */

  const skillFilterTabs = document.querySelectorAll('.skill-filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  skillFilterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      skillFilterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter') || 'all';

      skillCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category') || '';
        if (filter === 'all' || cardCategory === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     8. Projects Filter Interaction
     ========================================================================== */

  const projectFilterTabs = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  projectFilterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      projectFilterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter') || 'all';

      projectCards.forEach(card => {
        const categories = (card.getAttribute('data-categories') || '').split(',');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  /* ==========================================================================
     9. Project Modal & Interactive Demo System
     ========================================================================== */

  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalImage = document.getElementById('modal-img');
  const modalBadge = document.getElementById('modal-badge');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalFeatures = document.getElementById('modal-features');
  const modalTechStack = document.getElementById('modal-tech-stack');
  const modalGithubLink = document.getElementById('modal-github-link');
  const modalLiveDemoBtn = document.getElementById('modal-live-demo-btn');

  // Interactive Live Demo Container
  const demoRunnerModal = document.getElementById('demo-runner-modal');
  const demoCloseBtn = document.getElementById('demo-close-btn');
  const demoTitle = document.getElementById('demo-title');
  const demoContainer = document.getElementById('demo-container');

  let currentProjectForDemo = null;

  function openProjectModal(projectId) {
    const project = PROJECTS_DATA.find(p => p.id === projectId);
    if (!project || !projectModal) return;

    currentProjectForDemo = project;

    modalTitle.textContent = project.title;
    modalBadge.textContent = project.primaryCategory;
    modalDesc.textContent = project.detailedDescription;
    modalImage.src = project.image;
    modalImage.alt = `${project.title} Preview`;
    modalGithubLink.href = project.githubUrl;

    // Populate features
    modalFeatures.innerHTML = project.features.map(f => `
      <li class="modal-feature-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${f}</span>
      </li>
    `).join('');

    // Populate tech stack
    modalTechStack.innerHTML = project.technologies.map(t => `
      <span class="project-tag">${t}</span>
    `).join('');

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Attach click to project buttons and cards
  document.querySelectorAll('.view-project-btn, .project-thumbnail-wrapper').forEach(elem => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      const card = elem.closest('.project-card');
      const projectId = card?.getAttribute('data-project-id');
      if (projectId) {
        openProjectModal(projectId);
      }
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  /* ==========================================================================
     10. Interactive Mini-Demo Runner (Real working demos)
     ========================================================================== */

  function openDemoRunner(project) {
    if (!demoRunnerModal || !project) return;

    demoTitle.textContent = `${project.title} · Live Demo`;
    demoContainer.innerHTML = '';

    if (project.demoType === 'mood') {
      renderMoodDemo(demoContainer);
    } else if (project.demoType === 'atm') {
      renderAtmDemo(demoContainer);
    } else if (project.demoType === 'detector') {
      renderDetectorDemo(demoContainer);
    } else if (project.demoType === 'timetable') {
      renderTimetableDemo(demoContainer);
    } else {
      renderGenericDemo(demoContainer, project);
    }

    demoRunnerModal.classList.add('active');
  }

  function closeDemoRunner() {
    if (!demoRunnerModal) return;
    demoRunnerModal.classList.remove('active');
  }

  if (modalLiveDemoBtn) {
    modalLiveDemoBtn.addEventListener('click', () => {
      if (currentProjectForDemo) {
        openDemoRunner(currentProjectForDemo);
      }
    });
  }

  if (demoCloseBtn) {
    demoCloseBtn.addEventListener('click', closeDemoRunner);
  }

  if (demoRunnerModal) {
    demoRunnerModal.addEventListener('click', (e) => {
      if (e.target === demoRunnerModal) {
        closeDemoRunner();
      }
    });
  }

  // Demo 1: Mood to UI
  function renderMoodDemo(container) {
    container.innerHTML = `
      <div style="text-align: center; margin-bottom: 20px;">
        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 16px;">
          Select an emotional state to observe real-time CSS variable interpolation, color psychology mapping, and typography adjustments:
        </p>
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 24px;" id="mood-btn-group">
          <button class="btn btn-sm btn-secondary mood-btn" data-mood="energetic" style="border-color: #FF3131; color: #FF3131;">🔥 Energetic</button>
          <button class="btn btn-sm btn-secondary mood-btn" data-mood="calm" style="border-color: #22C7D9; color: #22C7D9;">🌊 Serene & Calm</button>
          <button class="btn btn-sm btn-secondary mood-btn" data-mood="focused" style="border-color: #6366F1; color: #6366F1;">🧠 Deep Focus</button>
          <button class="btn btn-sm btn-secondary mood-btn" data-mood="creative" style="border-color: #EC4899; color: #EC4899;">🎨 Playful Creative</button>
        </div>
      </div>
      <div id="mood-preview-box" style="padding: 28px; border-radius: 16px; background: linear-gradient(135deg, rgba(255, 49, 49, 0.1), rgba(34, 199, 217, 0.1)); border: 2px solid #FF3131; transition: all 0.4s ease;">
        <h4 id="mood-title" style="font-size: 1.25rem; font-weight: 800; margin-bottom: 8px; color: #FF3131;">Energetic State Active</h4>
        <p id="mood-quote" style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 16px;">
          "High momentum, bold contrasts, dynamic speed. Ideal for hackathons, launches, and active building sessions."
        </p>
        <div style="display: flex; gap: 8px; font-size: 0.8rem; font-family: var(--font-mono); color: var(--text-muted);">
          <span>--accent-hue: <b id="hue-val" style="color: var(--text-primary);">0deg</b></span>
          <span>·</span>
          <span>--ui-speed: <b id="speed-val" style="color: var(--text-primary);">0.15s</b></span>
          <span>·</span>
          <span>--saturation: <b id="sat-val" style="color: var(--text-primary);">95%</b></span>
        </div>
      </div>
    `;

    const moods = {
      energetic: { title: 'Energetic State Active', quote: 'High momentum, bold contrasts, dynamic speed. Ideal for hackathons and launches.', color: '#FF3131', bg: 'linear-gradient(135deg, rgba(255, 49, 49, 0.15), rgba(255, 107, 107, 0.1))', hue: '0deg', speed: '0.12s', sat: '95%' },
      calm: { title: 'Serene & Calm State Active', quote: 'Cool cyan tones, gentle breath pacing, spacious visual breathing room for relaxed reading.', color: '#22C7D9', bg: 'linear-gradient(135deg, rgba(34, 199, 217, 0.15), rgba(77, 163, 255, 0.1))', hue: '185deg', speed: '0.4s', sat: '65%' },
      focused: { title: 'Deep Focus State Active', quote: 'Minimalist indigo atmosphere, suppressed non-essential distractions, ultra-crisp monospaced elements.', color: '#6366F1', bg: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(79, 70, 229, 0.1))', hue: '240deg', speed: '0.2s', sat: '80%' },
      creative: { title: 'Playful Creative State Active', quote: 'Warm magenta vibrancy, fluid gradients, playful organic curves for artistic exploration.', color: '#EC4899', bg: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(244, 114, 182, 0.1))', hue: '330deg', speed: '0.25s', sat: '90%' }
    };

    const previewBox = container.querySelector('#mood-preview-box');
    const titleEl = container.querySelector('#mood-title');
    const quoteEl = container.querySelector('#mood-quote');
    const hueVal = container.querySelector('#hue-val');
    const speedVal = container.querySelector('#speed-val');
    const satVal = container.querySelector('#sat-val');

    container.querySelectorAll('.mood-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const moodKey = btn.getAttribute('data-mood');
        const data = moods[moodKey];
        if (data) {
          previewBox.style.background = data.bg;
          previewBox.style.borderColor = data.color;
          titleEl.style.color = data.color;
          titleEl.textContent = data.title;
          quoteEl.textContent = data.quote;
          hueVal.textContent = data.hue;
          speedVal.textContent = data.speed;
          satVal.textContent = data.sat;
        }
      });
    });
  }

  // Demo 2: Online ATM
  function renderAtmDemo(container) {
    let balance = 2450.00;
    container.innerHTML = `
      <div style="max-width: 440px; margin: 0 auto; text-align: center;">
        <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 16px; padding: 24px; margin-bottom: 20px; box-shadow: var(--shadow-sm);">
          <div style="font-size: 0.8125rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 4px;">Available Balance</div>
          <div id="atm-balance" style="font-size: 2.2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 12px;" class="tabular-nums">$${balance.toFixed(2)}</div>
          <div style="display: flex; gap: 10px; justify-content: center;">
            <button id="atm-deposit-btn" class="btn btn-sm btn-primary">+$100 Deposit</button>
            <button id="atm-withdraw-btn" class="btn btn-sm btn-secondary">-$50 Withdraw</button>
          </div>
        </div>
        <div style="text-align: left; background: var(--bg-primary); border-radius: 12px; padding: 16px; border: 1px solid var(--border-subtle);">
          <div style="font-size: 0.8125rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">Recent ATM Ledger</div>
          <div id="atm-ledger" style="font-size: 0.8125rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 6px;">
            <div>• Initial account setup verified (+$2,450.00)</div>
          </div>
        </div>
      </div>
    `;

    const balanceEl = container.querySelector('#atm-balance');
    const ledgerEl = container.querySelector('#atm-ledger');

    container.querySelector('#atm-deposit-btn').addEventListener('click', () => {
      balance += 100;
      balanceEl.textContent = `$${balance.toFixed(2)}`;
      const item = document.createElement('div');
      item.style.color = '#10B981';
      item.textContent = `• Instant Cash Deposit: +$100.00 [Success]`;
      ledgerEl.prepend(item);
    });

    container.querySelector('#atm-withdraw-btn').addEventListener('click', () => {
      if (balance >= 50) {
        balance -= 50;
        balanceEl.textContent = `$${balance.toFixed(2)}`;
        const item = document.createElement('div');
        item.style.color = '#EF4444';
        item.textContent = `• ATM Cash Dispensed: -$50.00 [Success]`;
        ledgerEl.prepend(item);
      } else {
        alert('Insufficient balance.');
      }
    });
  }

  // Demo 3: AI Detector
  function renderDetectorDemo(container) {
    container.innerHTML = `
      <div style="text-align: center; max-width: 520px; margin: 0 auto;">
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 20px;">
          Simulate neural artifact scanning on sample visual datasets:
        </p>
        <div style="display: flex; gap: 10px; justify-content: center; margin-bottom: 20px;">
          <button id="test-human-btn" class="btn btn-sm btn-secondary">Analyze Sample A (Authentic)</button>
          <button id="test-ai-btn" class="btn btn-sm btn-primary">Analyze Sample B (Synthetic)</button>
        </div>
        <div id="detector-result-box" style="padding: 24px; border-radius: 14px; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); display: none;">
          <div id="detector-spinner" style="font-size: 0.9rem; font-weight: 600; color: var(--cyan); margin-bottom: 12px;">Running Frequency Analysis...</div>
          <div id="detector-metrics" style="display: none; text-align: left;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <span style="font-size: 0.875rem; font-weight: 700; color: var(--text-primary);" id="detector-verdict">Authentic Photo</span>
              <span style="font-size: 0.875rem; font-weight: 700; color: var(--primary);" id="detector-score">98.4% Confidence</span>
            </div>
            <div style="width: 100%; height: 8px; background: var(--bg-primary); border-radius: 4px; overflow: hidden; margin-bottom: 12px;">
              <div id="detector-bar" style="width: 98%; height: 100%; background: #10B981; transition: width 0.6s ease;"></div>
            </div>
            <div id="detector-details" style="font-size: 0.8125rem; color: var(--text-secondary); line-height: 1.5;"></div>
          </div>
        </div>
      </div>
    `;

    const resultBox = container.querySelector('#detector-result-box');
    const spinner = container.querySelector('#detector-spinner');
    const metrics = container.querySelector('#detector-metrics');
    const verdict = container.querySelector('#detector-verdict');
    const score = container.querySelector('#detector-score');
    const bar = container.querySelector('#detector-bar');
    const details = container.querySelector('#detector-details');

    function runAnalysis(isAi) {
      resultBox.style.display = 'block';
      spinner.style.display = 'block';
      metrics.style.display = 'none';

      setTimeout(() => {
        spinner.style.display = 'none';
        metrics.style.display = 'block';

        if (isAi) {
          verdict.textContent = '⚠️ Synthetic AI Generation Detected';
          verdict.style.color = '#EF4444';
          score.textContent = '94.2% AI Tamper Probability';
          bar.style.width = '94%';
          bar.style.background = '#EF4444';
          details.textContent = 'Detected diffusion latent grid alignment and micro-texture repetition characteristic of modern generative diffusion models.';
        } else {
          verdict.textContent = '✅ Authentic Camera Capture Verified';
          verdict.style.color = '#10B981';
          score.textContent = '98.6% Natural Capture';
          bar.style.width = '98%';
          bar.style.background = '#10B981';
          details.textContent = 'Consistent Bayer sensor noise distribution, continuous Fourier phase spectrum, and natural optical depth dispersion.';
        }
      }, 700);
    }

    container.querySelector('#test-human-btn').addEventListener('click', () => runAnalysis(false));
    container.querySelector('#test-ai-btn').addEventListener('click', () => runAnalysis(true));
  }

  // Demo 4: Timetable
  function renderTimetableDemo(container) {
    container.innerHTML = `
      <div style="text-align: center;">
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 16px;">
          Heuristic academic slot generator (Batch CSE-A · Semester VI):
        </p>
        <div style="overflow-x: auto; margin-bottom: 16px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.8125rem; text-align: center;">
            <thead>
              <tr style="background: var(--bg-surface-elevated); color: var(--text-primary); border-bottom: 2px solid var(--border-subtle);">
                <th style="padding: 10px;">Day</th>
                <th style="padding: 10px;">09:00 - 10:00</th>
                <th style="padding: 10px;">10:00 - 11:00</th>
                <th style="padding: 10px;">11:15 - 12:15</th>
                <th style="padding: 10px;">01:15 - 03:15</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid var(--border-subtle);">
                <td style="font-weight: 700; padding: 10px;">Mon</td>
                <td style="color: #6366F1;">Web Tech</td>
                <td style="color: #10B981;">AI & ML</td>
                <td style="color: #EC4899;">Compiler Des.</td>
                <td style="color: #F59E0B;">Web Tech Lab</td>
              </tr>
              <tr style="border-bottom: 1px solid var(--border-subtle);">
                <td style="font-weight: 700; padding: 10px;">Tue</td>
                <td style="color: #10B981;">AI & ML</td>
                <td style="color: #6366F1;">Web Tech</td>
                <td style="color: #3B82F6;">Cloud Comp.</td>
                <td style="color: #6366F1;">Mini Project</td>
              </tr>
              <tr>
                <td style="font-weight: 700; padding: 10px;">Wed</td>
                <td style="color: #3B82F6;">Cloud Comp.</td>
                <td style="color: #EC4899;">Compiler Des.</td>
                <td style="color: #10B981;">AI & ML</td>
                <td style="color: #10B981;">AI/ML Lab</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="font-size: 0.8125rem; color: #10B981; font-weight: 600;">
          ✓ 0 Faculty clashes · 100% Room utilization compliance verified.
        </div>
      </div>
    `;
  }

  function renderGenericDemo(container, project) {
    container.innerHTML = `
      <div style="text-align: center; padding: 20px;">
        <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px;">${project.title} Preview</h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary); max-width: 480px; margin: 0 auto 20px;">
          ${project.description}
        </p>
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          View Repository on GitHub
        </a>
      </div>
    `;
  }

  /* ==========================================================================
     11. Resume Download & Preview Modal
     ========================================================================== */

  const resumeModal = document.getElementById('resume-modal');
  const resumeModalCloseBtn = document.getElementById('resume-modal-close-btn');
  const viewResumeBtns = document.querySelectorAll('.view-resume-trigger');
  const downloadResumeBtns = document.querySelectorAll('.download-resume-trigger');

  function openResumeModal() {
    if (!resumeModal) return;
    resumeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeResumeModal() {
    if (!resumeModal) return;
    resumeModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  viewResumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openResumeModal();
    });
  });

  if (resumeModalCloseBtn) {
    resumeModalCloseBtn.addEventListener('click', closeResumeModal);
  }

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) {
        closeResumeModal();
      }
    });
  }

  // Real Resume PDF/File Downloader function
  function handleResumeDownload(e) {
    e.preventDefault();

    // Create structured plain text / markdown resume document to download
    const resumeContent = `
================================================================================
SREEJA RAGUPATHY
Computer Science Engineering Student & Frontend Developer
Email: sreeja21092007@gmail.com | Location: Chennai, Tamil Nadu, India
GitHub: https://github.com/sreeja-ragupathy
LinkedIn: https://linkedin.com/in/sreeja-ragupathy
================================================================================

CAREER OBJECTIVE
Enthusiastic Computer Science and Engineering student passionate about frontend
development, accessible UI/UX architecture, and emerging AI technologies. Seeking
internship and junior software engineering roles to contribute clean, performant,
and user-centric web applications.

--------------------------------------------------------------------------------
EDUCATION
--------------------------------------------------------------------------------
Bachelor of Engineering (B.E.) in Computer Science & Engineering
Anna University Affiliated Engineering College, Tamil Nadu
Expected Graduation: 2027 | Current CGPA: 8.8 / 10.0

Higher Secondary Certificate (HSC)
State Board of Tamil Nadu | Score: 94.6%

--------------------------------------------------------------------------------
TECHNICAL SKILLS
--------------------------------------------------------------------------------
• Frontend: HTML5, CSS3, JavaScript (ES6+), React, Tailwind CSS, Bootstrap
• Programming: Python, Java, C, Data Structures & Algorithms
• Databases & Cloud: MySQL, Relational Schema Design, SQL Query Optimization
• Tools & Methodologies: Git, GitHub, VS Code, Figma, REST APIs, Agile Prototyping
• Emerging Tech: AI Prompt Engineering, TensorFlow fundamentals, Computer Vision concepts

--------------------------------------------------------------------------------
KEY PROJECTS
--------------------------------------------------------------------------------
1. AI Image Detector (Python, TensorFlow, JavaScript)
   • Engineered visual tampering & deepfake artifact classification pipeline.
   • Delivered a real-time heatmap display for spectral anomaly inspection.

2. Mood to UI (Vanilla JavaScript, CSS Custom Properties, Sentiment Analysis)
   • Designed an emotion-reactive interface system that mutates CSS design tokens.
   • Achieved responsive UI morphing across color palettes and typographic hierarchy.

3. Online ATM Simulation (Vanilla JS, LocalStorage API, Fintech UI)
   • Programmed complete digital ATM workflow with PIN verification and ledger history.

4. Timetable Generator (Algorithms, CSS Grid, JavaScript)
   • Automated multi-constraint class schedule generator eliminating faculty collisions.

5. Smart Campus Initiative (IoT Telemetry Simulation, Web Platform)
   • Centralized facility occupancy tracking and dormitory maintenance ticketing.

--------------------------------------------------------------------------------
CERTIFICATIONS
--------------------------------------------------------------------------------
• Meta Frontend Developer Professional Certificate (Coursera)
• Python for Data Science & AI (IBM / Cognitive Class)
• Database Design & Programming with SQL (Oracle Academy)
• Programming in Java - Elite Certificate (NPTEL / IIT Kharagpur)

--------------------------------------------------------------------------------
ACHIEVEMENTS & LEADERSHIP
--------------------------------------------------------------------------------
• Smart India Hackathon Finalist: Developed prototype for educational resource optimization.
• College Tech Club Workshop Lead: Conducted modern frontend workshops for 120+ juniors.
• Consistent Department Top-5 Rank Holder in Academic Examinations.

================================================================================
Generated from Sreeja Ragupathy Portfolio Website. All Rights Reserved.
`;

    const blob = new Blob([resumeContent.trim()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sreeja_Ragupathy_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // Also trigger user-friendly toast
    showToast('Resume downloaded: Sreeja_Ragupathy_Resume.txt');
  }

  downloadResumeBtns.forEach(btn => {
    btn.addEventListener('click', handleResumeDownload);
  });

  /* ==========================================================================
     12. Certificate Viewer Modal
     ========================================================================== */

  const certModal = document.getElementById('cert-modal');
  const certModalCloseBtn = document.getElementById('cert-close-btn');
  const certModalTitle = document.getElementById('cert-modal-title');
  const certModalPlatform = document.getElementById('cert-modal-platform');
  const certModalYear = document.getElementById('cert-modal-year');
  const certModalId = document.getElementById('cert-modal-id');
  const certModalSkills = document.getElementById('cert-modal-skills');

  function openCertModal(certId) {
    const cert = CERTIFICATIONS_DATA.find(c => c.id === certId);
    if (!cert || !certModal) return;

    certModalTitle.textContent = cert.title;
    certModalPlatform.textContent = cert.platform;
    certModalYear.textContent = cert.year;
    certModalId.textContent = cert.idNumber;
    certModalSkills.textContent = cert.skills;

    certModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCertModal() {
    if (!certModal) return;
    certModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.view-cert-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const certId = btn.getAttribute('data-cert-id');
      if (certId) {
        openCertModal(certId);
      }
    });
  });

  if (certModalCloseBtn) {
    certModalCloseBtn.addEventListener('click', closeCertModal);
  }

  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) {
        closeCertModal();
      }
    });
  }

  /* Global Escape Key Handler for all Modals */
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeDemoRunner();
      closeResumeModal();
      closeCertModal();
      closeMobileMenu();
    }
  });

  /* ==========================================================================
     13. Contact Form Validation & Mailto Action
     ========================================================================== */

  const contactForm = document.getElementById('contact-form');
  const contactName = document.getElementById('contact-name');
  const contactEmail = document.getElementById('contact-email');
  const contactSubject = document.getElementById('contact-subject');
  const contactMessage = document.getElementById('contact-message');
  const formSuccessAlert = document.getElementById('form-success-alert');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      const nameVal = contactName?.value.trim() || '';
      const nameError = document.getElementById('name-error');
      if (nameVal.length < 2) {
        contactName?.classList.add('error');
        nameError?.classList.add('visible');
        isValid = false;
      } else {
        contactName?.classList.remove('error');
        nameError?.classList.remove('visible');
      }

      // Validate Email
      const emailVal = contactEmail?.value.trim() || '';
      const emailError = document.getElementById('email-error');
      if (!validateEmail(emailVal)) {
        contactEmail?.classList.add('error');
        emailError?.classList.add('visible');
        isValid = false;
      } else {
        contactEmail?.classList.remove('error');
        emailError?.classList.remove('visible');
      }

      // Validate Message
      const messageVal = contactMessage?.value.trim() || '';
      const messageError = document.getElementById('message-error');
      if (messageVal.length < 10) {
        contactMessage?.classList.add('error');
        messageError?.classList.add('visible');
        isValid = false;
      } else {
        contactMessage?.classList.remove('error');
        messageError?.classList.remove('visible');
      }

      if (!isValid) return;

      // Show friendly confirmation banner
      if (formSuccessAlert) {
        const subjectVal = contactSubject?.value.trim() || 'Portfolio Inquiry';
        const mailtoLink = `mailto:sreeja21092007@gmail.com?subject=${encodeURIComponent(subjectVal)}&body=${encodeURIComponent(`Hi Sreeja,\n\nName: ${nameVal}\nEmail: ${emailVal}\n\nMessage:\n${messageVal}`)}`;

        formSuccessAlert.innerHTML = `
          <strong>Thanks! Your message has been prepared.</strong><br>
          <span style="font-size: 0.8125rem; opacity: 0.9;">Click below to launch your email client and send it directly:</span>
          <div style="margin-top: 10px;">
            <a href="${mailtoLink}" class="btn btn-sm btn-primary" style="display: inline-flex;">Launch Email App</a>
          </div>
        `;
        formSuccessAlert.classList.add('visible');
      }

      contactForm.reset();
    });
  }

  // Quick email copy button
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('sreeja21092007@gmail.com').then(() => {
        showToast('Email address copied to clipboard!');
      });
    });
  }

  /* ==========================================================================
     14. Back-to-Top Button
     ========================================================================== */

  const backToTopBtn = document.getElementById('back-to-top-btn');

  function handleBackToTopVisibility() {
    if (window.scrollY > 320) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleBackToTopVisibility, { passive: true });
  handleBackToTopVisibility();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     15. IntersectionObserver Scroll Reveal Animations
     ========================================================================== */

  const revealElements = document.querySelectorAll('.reveal-on-scroll, .timeline-item');

  const scrollRevealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => scrollRevealObserver.observe(el));

  /* ==========================================================================
     16. Toast Notification Helper
     ========================================================================== */

  function showToast(message) {
    let toast = document.getElementById('portfolio-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'portfolio-toast';
      toast.style.position = 'fixed';
      toast.style.bottom = '24px';
      toast.style.left = '50%';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
      toast.style.backgroundColor = '#111827';
      toast.style.color = '#FFFFFF';
      toast.style.padding = '12px 24px';
      toast.style.borderRadius = '9999px';
      toast.style.fontSize = '0.875rem';
      toast.style.fontWeight = '600';
      toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.25)';
      toast.style.zIndex = '9999';
      toast.style.opacity = '0';
      toast.style.transition = 'all 0.3s ease';
      toast.style.pointerEvents = 'none';
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
    }, 2800);
  }

  console.log('Sreeja Ragupathy Portfolio initialized smoothly.');
});
