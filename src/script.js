 const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

    // FAQ Toggle
    document.querySelectorAll('.faq-item').forEach(item => {
      item.addEventListener('click', () => {
        const p = item.querySelector('p');
        p.classList.toggle('hidden');
      });
    });

  let lastScroll = 0;
  const header = document.getElementById('site-header');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
  });

  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });