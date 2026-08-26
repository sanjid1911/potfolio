// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Tech stack marquee — built from real framework/language logos (devicon CDN)
const STACK = [
  { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
  { name: 'Python', icon: 'python/python-original.svg' },
  { name: 'React.js', icon: 'react/react-original.svg' },
  { name: 'Next.js', icon: 'nextjs/nextjs-original.svg' },
  { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
  { name: 'NestJS', icon: 'nestjs/nestjs-original.svg' },
  { name: 'FastAPI', icon: 'fastapi/fastapi-original.svg' },
  { name: 'MongoDB', icon: 'mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
  { name: 'Redis', icon: 'redis/redis-original.svg' },
  { name: 'Docker', icon: 'docker/docker-original.svg' },
  { name: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-original.svg' },
  { name: 'LangChain', icon: null },
  { name: 'Socket.io', icon: null },
];

const ICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';

function buildStackChip(item) {
  const chip = document.createElement('span');
  chip.className = 'stack-chip';

  if (item.icon) {
    const iconWrap = document.createElement('span');
    iconWrap.className = 'stack-icon';
    const img = document.createElement('img');
    img.src = ICON_BASE + item.icon;
    img.alt = '';
    img.loading = 'lazy';
    img.onerror = () => iconWrap.remove();
    iconWrap.appendChild(img);
    chip.appendChild(iconWrap);
  }

  const label = document.createElement('span');
  label.textContent = item.name;
  chip.appendChild(label);

  return chip;
}

const stackTrack = document.getElementById('stackTrack');
if (stackTrack) {
  // render twice back-to-back for a seamless scrolling loop
  [...STACK, ...STACK].forEach((item) => {
    stackTrack.appendChild(buildStackChip(item));
  });
}
