
function initDecryptingRoles() {
  const roles = [
    "Full-Stack Development",
    "AI & LLM Integration",
    "Data Scraping & Automation",
    "Backend Engineering",
    "Web Automation",
    "API Development"
  ];

  const roleElement = document.getElementById('roleSwitcher');

  if (!roleElement) return;

  let roleIndex = 0;
  let interval;
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

  function scrambleTo(targetText) {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      roleElement.innerText = targetText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return targetText[index];
          }
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration >= targetText.length) {
        clearInterval(interval);
        setTimeout(nextRole, 2000);
      }

      iteration += 1 / 2;
    }, 30);
  }

  function nextRole() {
    roleIndex = (roleIndex + 1) % roles.length;
    const nextRoleText = roles[roleIndex];
    scrambleTo(nextRoleText);
  }


  if (roles.length > 0) {
    scrambleTo(roles[0]);
  }
}

document.addEventListener('DOMContentLoaded', initDecryptingRoles);



const skillsCategories = [
  {
    title: "Technical Skills",
    icon: "fas fa-code",
    skills: [
      { name: "Python", icon: "https://img.icons8.com/color/48/python--v1.png" },
      { name: "JavaScript", icon: "https://img.icons8.com/color/48/javascript--v1.png" },
      { name: "TypeScript", icon: "https://img.icons8.com/color/48/typescript.png" },
      { name: "C#", icon: "https://img.icons8.com/color/48/c-sharp-logo.png" },
      { name: "Java", icon: "https://img.icons8.com/color/48/java-coffee-cup-logo.png" },
      { name: "Go", icon: "https://img.icons8.com/color/48/golang.png" },
      { name: "PHP", icon: "https://img.icons8.com/officel/48/php-logo.png" },
      { name: "C++", icon: "https://img.icons8.com/color/48/c-plus-plus-logo.png" },
      { name: "React", icon: "https://img.icons8.com/color/48/react-native.png" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "Node.js", icon: "https://img.icons8.com/color/48/nodejs.png" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
      { name: "OpenAI", icon: "https://raw.githubusercontent.com/Sweem240211/Sweem240211/auxiliary/ai/OpenAI.png" },
      { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain/1C3C3C" },
      { name: "TensorFlow", icon: "https://img.icons8.com/color/48/tensorflow.png" },
      { name: "PyTorch", icon: "https://img.icons8.com/fluency/48/pytorch.png" },
      { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "Scrapy", icon: "https://cdn.simpleicons.org/scrapy/60A839" },
      { name: "Selenium", icon: "https://img.icons8.com/color/48/selenium-test-automation.png" },
      { name: "Playwright", icon: "https://raw.githubusercontent.com/Sweem240211/Sweem240211/auxiliary/libraries/playwright.svg" },
      { name: "MongoDB", icon: "https://img.icons8.com/color/48/mongodb.png" },
      { name: "PostgreSQL", icon: "https://img.icons8.com/color/48/postgreesql.png" },
      { name: "MySQL", icon: "https://img.icons8.com/color/48/mysql-logo.png" },
      { name: "Redis", icon: "https://img.icons8.com/color/48/redis.png" },
      { name: "Docker", icon: "https://img.icons8.com/color/48/docker.png" },
      { name: "AWS", icon: "https://img.icons8.com/color/48/amazon-web-services.png" },
      { name: "Kubernetes", icon: "https://img.icons8.com/color/48/kubernetes.png" },
      { name: "Git", icon: "https://img.icons8.com/color/48/git.png" },
      { name: "GitHub", icon: "https://img.icons8.com/fluency/48/github.png" },
      { name: "Linux", icon: "https://img.icons8.com/color/48/linux--v1.png" }
    ]
  },
  {
    title: "Soft Skills",
    icon: "fas fa-users",
    skills: [
      { name: "Problem Solving", faIcon: "fas fa-puzzle-piece" },
      { name: "Team Collaboration", faIcon: "fas fa-people-carry" },
      { name: "Communication", faIcon: "fas fa-comments" },
      { name: "Time Management", faIcon: "fas fa-clock" },
      { name: "Leadership", faIcon: "fas fa-chess-king" },
      { name: "Adaptability", faIcon: "fas fa-sync-alt" }
    ]
  }
];

const skillsContainer = document.getElementById("skillsContainer");
if (skillsContainer) {
  skillsCategories.forEach(category => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "skills-category";

    const titleDiv = document.createElement("div");
    titleDiv.className = "skills-category-title";
    titleDiv.innerHTML = `<i class="${category.icon}"></i><span>${category.title}</span>`;
    categoryDiv.appendChild(titleDiv);

    const gridDiv = document.createElement("div");
    gridDiv.className = "skills-row";
    category.skills.forEach(skill => {
      const div = document.createElement("div");
      div.className = skill.faIcon ? "skill-bar soft-skill-bar" : "skill-bar";
      div.style.opacity = "0";
      if (skill.faIcon) {
        div.innerHTML = `
          <i class="${skill.faIcon} soft-skill-icon"></i>
          <span>${skill.name}</span>
        `;
      } else {
        div.innerHTML = `
          <img src="${skill.icon}" alt="${skill.name}" onerror="this.style.display='none'">
          <span>${skill.name}</span>
        `;
      }
      gridDiv.appendChild(div);
    });
    categoryDiv.appendChild(gridDiv);
    skillsContainer.appendChild(categoryDiv);
  });

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.set(".skill-bar", { x: -30, opacity: 0 });
    ScrollTrigger.batch(".skill-bar", {
      onEnter: batch => {
        gsap.to(batch, {
          x: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.out"
        });
      },
      onLeave: batch => {
        gsap.set(batch, { x: -30, opacity: 0 });
      },
      onEnterBack: batch => {
        gsap.to(batch, {
          x: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.out"
        });
      },
      onLeaveBack: batch => {
        gsap.set(batch, { x: -30, opacity: 0 });
      },
      start: "top 90%",
      end: "bottom 10%"
    });
  }
}



const projectsData = [
  {
    name: "KeyForge \u2014 Software Licensing Portal",
    bullets: [
      "License key generation & management portal for desktop software",
      "ES256-signed licenses with fully offline verification on the client",
      "Modern web stack, deployed to the edge"
    ],
    tags: ["TypeScript", "Next.js", "Licensing", "ES256"],
    image: "https://opengraph.githubassets.com/1/sweem240211/Keyforge",
    github: "https://github.com/sweem240211/Keyforge"
  },
  {
    name: "Moon-Toolkit \u2014 Windows Productivity Suite",
    bullets: [
      "HotkeyX: customizable global keyboard/mouse shortcuts and macros",
      "CaptionCopier: capture and copy text from Windows Live Captions",
      "Native Windows utilities written in C++"
    ],
    tags: ["C++", "Win32", "Windows"],
    image: "https://opengraph.githubassets.com/1/BeautifulMoon211/Moon-Toolkit",
    github: "https://github.com/BeautifulMoon211/Moon-Toolkit"
  }
];

const projectsContainer = document.getElementById("projectsContainer");
if (projectsContainer) {
  projectsData.forEach(project => {
    const div = document.createElement("div");
    div.className = "project-box";

    const demoBtn = project.demo
      ? `<a href="${project.demo}" class="btn" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>`
      : `<span class="btn btn-disabled"><i class="fas fa-clock"></i> Coming Soon</span>`;

    const bulletsList = project.bullets.map(b => `<li>${b}</li>`).join('');

    div.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.name}">
      </div>
      <div class="project-content">
        <h3>${project.name}</h3>
        <ul class="project-bullets">${bulletsList}</ul>
        <div class="project-tags">
          ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
        <div class="btns">
          <a href="${project.github}" class="btn" target="_blank">
            <i class="fab fa-github"></i> Code
          </a>
          ${demoBtn}
        </div>
      </div>
    `;
    projectsContainer.appendChild(div);
  });

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.set(".project-box", { y: 40, opacity: 0 });
    ScrollTrigger.batch(".project-box", {
      onEnter: batch => {
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out"
        });
      },
      onLeave: batch => {
        gsap.set(batch, { y: 40, opacity: 0 });
      },
      onEnterBack: batch => {
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out"
        });
      },
      onLeaveBack: batch => {
        gsap.set(batch, { y: 40, opacity: 0 });
      },
      start: "top 90%",
      end: "bottom 10%"
    });
  }
}



const certificatesData = [];

const certificatesContainer = document.getElementById("certificatesContainer");
if (certificatesContainer) {
  certificatesData.forEach((cert, index) => {
    const div = document.createElement("div");
    div.className = `timeline-container ${index % 2 === 0 ? 'right' : 'left'}`;
    div.innerHTML = `
      <div class="content cert-card-modern">
        <img src="${cert.image}" alt="${cert.name}" class="cert-image" style="${cert.imgStyle || ''}" onerror="this.src='assets/images/placeholder.jpg'; this.onerror='';">
        <div class="cert-overlay">
          <div class="cert-overlay-content">
            <h3>${cert.name}</h3>
            <div class="cert-hidden-details">
              <span class="cert-tag">${cert.issuer}</span>
              <div class="cert-meta">
                <span><i class="fas fa-calendar-alt"></i> ${cert.date}</span>
              </div>
              <p class="cert-desc">${cert.description}</p>
              <a href="${cert.link}" class="btn cert-vw-btn" target="_blank">
                View Certificate <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    certificatesContainer.appendChild(div);
  });

  
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.refresh();
  }
}


const achievementsData = [
  {
    icon: "fas fa-briefcase",
    title: "10+ Years of Experience",
    description: "A decade-plus of building and shipping software across web, backend, and automation."
  },
  {
    icon: "fas fa-robot",
    title: "AI & LLM Integration",
    description: "Integrating OpenAI, Anthropic, and LangChain into real products and workflows."
  },
  {
    icon: "fas fa-spider",
    title: "Data Scraping & Automation",
    description: "Large-scale, resilient scraping and automation with Scrapy, Selenium, and Playwright."
  },
  {
    icon: "fab fa-github",
    title: "Open-Source on GitHub",
    description: "Multiple public projects and active contributions under @sweem240211."
  }
];

const achievementsContainer = document.getElementById("achievementsContainer");
if (achievementsContainer) {
  achievementsData.forEach(ach => {
    const div = document.createElement("div");
    div.className = "achievement-card";
    div.innerHTML = `
      <div class="achievement-icon">
        <i class="${ach.icon}"></i>
      </div>
      <div class="achievement-content">
        <h3>${ach.title}</h3>
        <p>${ach.description}</p>
      </div>
    `;
    achievementsContainer.appendChild(div);
  });

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.set(".achievement-card", { y: 30, opacity: 0 });
    ScrollTrigger.batch(".achievement-card", {
      onEnter: batch => {
        gsap.to(batch, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power2.out" });
      },
      onLeave: batch => {
        gsap.set(batch, { y: 30, opacity: 0 });
      },
      onEnterBack: batch => {
        gsap.to(batch, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power2.out" });
      },
      onLeaveBack: batch => {
        gsap.set(batch, { y: 30, opacity: 0 });
      },
      start: "top 90%",
      end: "bottom 10%"
    });
  }
}



if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.set(".education .box", { x: -40, opacity: 0 });
  ScrollTrigger.batch(".education .box", {
    onEnter: batch => {
      gsap.to(batch, {
        x: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out"
      });
    },
    onLeave: batch => {
      gsap.set(batch, { x: -40, opacity: 0 });
    },
    onEnterBack: batch => {
      gsap.to(batch, {
        x: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out"
      });
    },
    onLeaveBack: batch => {
      gsap.set(batch, { x: -40, opacity: 0 });
    },
    start: "top 90%",
    end: "bottom 10%"
  });
}



const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mainNav = document.getElementById("mainNav");

if (mobileMenuBtn && mainNav) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("active");
    mainNav.classList.toggle("active");
  });

  document.querySelectorAll(".nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenuBtn.classList.remove("active");
      mainNav.classList.remove("active");
    });
  });
}



const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav ul li a");

window.addEventListener("scroll", () => {
  let current = "home";

  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      current = sec.id;
    }
  });

  navLinks.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
});



const scrollTopBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (scrollTopBtn) {
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
  }
});



const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 50);
  }
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});



document.querySelectorAll('.tilt').forEach(el => {
  el.addEventListener('mousemove', e => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  el.addEventListener('mouseleave', () => {
    el.style.transform = '';
  });
});



const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;


    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    formStatus.textContent = '';
    formStatus.className = '';

    try {
      const formData = new FormData(contactForm);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        formStatus.textContent = '✓ Message sent successfully! I will get back to you soon.';
        formStatus.className = 'success';
        contactForm.reset();
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      formStatus.textContent = '✗ Failed to send. Please try again or email directly.';
      formStatus.className = 'error';
      console.error('Form submission error:', error);
    } finally {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  });
}

console.log(' Portfolio loaded successfully');



function initTickerLoop() {
  const tickerContent = document.querySelector('.ticker-content');
  if (!tickerContent) return;



  const blockHTML = `
        <div class="hud-item">
          <span class="status-dot"></span>
          <span class="sys-text">SYSTEM ONLINE</span>
        </div>

        <div class="hud-item">
          <span class="decode-text" data-value="Forging Digital Minds">Forging Digital Minds</span>
          <i class="fas fa-bolt cyber-spark"></i>
        </div>

        <div class="hud-item">
          <span class="dev-label">DEV:</span>
          <a href="https://github.com/sweem240211" class="name-glitch" data-text="Sweem240211">Sweem240211</a>
          <img src="https://flagcdn.com/48x36/in.png" alt="India Flag" class="flag-icon">
        </div>
        
        <div class="hud-item separator-hex">::</div>

        <div class="hud-item">
           <span class="sys-text">&copy; 2026</span>
        </div>

        <div class="hud-item separator-hex">::</div>
  `;

  tickerContent.innerHTML = blockHTML.repeat(8);
}





function initScrollSpy() {
  const spyItems = document.querySelectorAll('.spy-item');


  if (!spyItems.length || !sections.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        spyItems.forEach(item => item.classList.remove('active'));


        const id = entry.target.getAttribute('id');
        const activeItem = document.querySelector(`.spy-item[data-target="${id}"]`);
        if (activeItem) {
          activeItem.classList.add('active');
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));


  spyItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}


document.addEventListener('DOMContentLoaded', initScrollSpy);



const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const gainNode = audioCtx.createGain();
gainNode.connect(audioCtx.destination);
gainNode.gain.value = 0.05;

function playSound(type) {
  if (audioCtx.state === 'suspended') audioCtx.resume();

  const oscillator = audioCtx.createOscillator();
  const soundGain = audioCtx.createGain();

  oscillator.connect(soundGain);
  soundGain.connect(audioCtx.destination);

  const now = audioCtx.currentTime;

  if (type === 'hover') {

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(800, now);
    oscillator.frequency.exponentialRampToValueAtTime(1200, now + 0.05);

    soundGain.gain.setValueAtTime(0.03, now);
    soundGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    oscillator.start(now);
    oscillator.stop(now + 0.05);
  } else if (type === 'click') {

    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(150, now);
    oscillator.frequency.exponentialRampToValueAtTime(40, now + 0.1);

    soundGain.gain.setValueAtTime(0.05, now);
    soundGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    oscillator.start(now);
    oscillator.stop(now + 0.1);
  }
}

function resumeAudioContext() {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  if (audioCtx.state === 'running') {
    document.removeEventListener('click', resumeAudioContext);
    document.removeEventListener('keydown', resumeAudioContext);
    document.removeEventListener('touchstart', resumeAudioContext);
  }
}

document.addEventListener('click', resumeAudioContext);
document.addEventListener('keydown', resumeAudioContext);
document.addEventListener('touchstart', resumeAudioContext);

function initSoundFX() {
  const interactives = document.querySelectorAll('a, button, .spy-item, .project-box, .skill-bar');

  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => playSound('hover'));
    el.addEventListener('click', () => playSound('click'));
  });
}


document.addEventListener('DOMContentLoaded', initSoundFX);



function initGlobalMouseTracker() {
  const gridLayer = document.getElementById('bg-grid-layer');
  if (!gridLayer) return;

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;


    gridLayer.style.setProperty('--cursor-x', `${x}px`);
    gridLayer.style.setProperty('--cursor-y', `${y}px`);
  });
}

document.addEventListener('DOMContentLoaded', initGlobalMouseTracker);


function initTerminal() {
  const palette = document.getElementById('cmd-palette');
  const input = document.getElementById('cmd-input');
  const output = document.getElementById('cmd-output');
  const closeBtn = document.querySelector('.cmd-close');

  if (!palette || !input) return;


  function toggleTerminal() {
    palette.classList.toggle('active');
    if (palette.classList.contains('active')) {
      input.value = '';
      input.focus();
    }
  }


  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      toggleTerminal();
    }

    if (e.key === 'Escape' && palette.classList.contains('active')) {
      toggleTerminal();
    }
  });


  if (closeBtn) closeBtn.addEventListener('click', toggleTerminal);


  palette.addEventListener('click', (e) => {
    if (e.target === palette) toggleTerminal();
  });


  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim().toLowerCase();
      processCommand(cmd);
      input.value = '';
    }
  });

  function log(text) {
    const div = document.createElement('div');
    div.className = 'cmd-line';
    div.innerHTML = text;
    output.appendChild(div);
    output.scrollTop = output.scrollHeight;
  }

  function processCommand(cmd) {

    log(`<span class="prompt">➜</span> ${cmd}`);

    switch (cmd) {
      case 'help':
        log(`Available commands:
        <br><span class="cmd-keyword">home</span> - Go to top
        <br><span class="cmd-keyword">about</span> - Go to About Me
        <br><span class="cmd-keyword">skills</span> - View Skills
        <br><span class="cmd-keyword">projects</span> - View Projects
        <br><span class="cmd-keyword">contact</span> - Contact Me
        <br><span class="cmd-keyword">clear</span> - Clear screen
        <br><span class="cmd-keyword">exit</span> - Close terminal`);
        break;

      case 'clear':
        output.innerHTML = '';
        break;

      case 'exit':
        toggleTerminal();
        break;

      case 'home':
      case 'about':
      case 'skills':
      case 'projects':
      case 'contact':
        const target = document.getElementById(cmd === 'home' ? 'home' : cmd);
        if (target) {
          log(`Navigating to ${cmd}...`);
          target.scrollIntoView({ behavior: 'smooth' });
          setTimeout(toggleTerminal, 800);
        } else {
          log(`Error: Section '${cmd}' not found.`);
        }
        break;

      case 'whoami':
        log('User: Visitor<br>Role: Explorer<br>Access: Granted');
        break;

      case '':
        break;

      default:
        log(`Command not found: ${cmd}. Type <span class="cmd-keyword">help</span>.`);
    }
  }
}



document.addEventListener('DOMContentLoaded', initTerminal);



function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  const icon = toggleBtn ? toggleBtn.querySelector('i') : null;
  const body = document.body;

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  body.classList.remove('light-mode');
  if (icon) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('light-mode');

      const isLight = body.classList.contains('light-mode');


      if (icon) {
        if (isLight) {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
        } else {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
        }
      }


      localStorage.setItem('theme', isLight ? 'light' : 'dark');


      if (typeof playSound === 'function') {
        playSound('click');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', initThemeToggle);

