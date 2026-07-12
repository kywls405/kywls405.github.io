const projects = {
  rocket: {
    index: 'FEATURED / ROCKET',
    title: 'Rocket Avionics Stack',
    description: 'A flight computer, telemetry link, Qt ground station, and hardware-in-the-loop replay environment developed as one testable system.',
    meta: [['ROLE', 'Embedded / GCS'], ['STACK', 'C · C++ · Qt'], ['EVIDENCE', 'Flight tested']],
    href: 'https://github.com/kywls405/rocket-hils-replay'
  },
  navigation: {
    index: 'FEATURED / NAVIGATION',
    title: 'INS/GNSS Sensor Fusion',
    description: 'A 15-state extended Kalman filter that carries inertial state forward, applies GNSS corrections, and records trajectory-level evaluation results.',
    meta: [['ROLE', 'Estimation'], ['STACK', 'MATLAB · EKF'], ['INPUT', 'IMU 200 Hz · GNSS 10 Hz']],
    href: 'https://github.com/kywls405/ins-gnss-ekf-navigation'
  },
  compute: {
    index: 'FEATURED / COMPUTE',
    title: 'RISC-V CNN Optimization',
    description: 'Four address-generation and data-movement kernels optimized through reuse, specialized paths, and controlled unrolling across 168 validation cases.',
    meta: [['ROLE', 'Optimization'], ['STACK', 'RISC-V Assembly'], ['RESULT', '3.93× improvement']],
    href: 'https://github.com/kywls405/riscv-cnn-accelerator-optimization'
  }
};

const featureButtons = [...document.querySelectorAll('[data-project]')];
const featurePanels = [...document.querySelectorAll('[data-panel]')];
const featureIndex = document.getElementById('featureIndex');
const featureTitle = document.getElementById('featureTitle');
const featureDescription = document.getElementById('featureDescription');
const featureMeta = document.getElementById('featureMeta');
const featureLink = document.getElementById('featureLink');

featureButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const key = button.dataset.project;
    const project = projects[key];

    featureButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    featurePanels.forEach((panel) => {
      panel.toggleAttribute('hidden', panel.dataset.panel !== key);
    });

    featureIndex.textContent = project.index;
    featureTitle.textContent = project.title;
    featureDescription.textContent = project.description;
    featureMeta.replaceChildren(...project.meta.map(([label, value]) => {
      const row = document.createElement('div');
      const term = document.createElement('dt');
      const detail = document.createElement('dd');
      term.textContent = label;
      detail.textContent = value;
      row.append(term, detail);
      return row;
    }));
    featureLink.href = project.href;
  });
});

const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navLinks.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
  menuButton.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}" aria-hidden="true"></i>`;
  window.lucide?.createIcons();
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    navLinks.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    menuButton.innerHTML = '<i data-lucide="menu" aria-hidden="true"></i>';
    window.lucide?.createIcons();
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

window.addEventListener('load', () => {
  window.lucide?.createIcons();
});
