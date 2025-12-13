document.addEventListener('DOMContentLoaded', () => {
  // ===== Mobile Menu Toggle =====
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // ===== Header Hide / Show on Scroll =====
  let lastScroll = 0;
  const header = document.getElementById('site-header');
  const navLinks = header.querySelectorAll('nav a'); // All nav links
  const bookBtn = header.querySelector('nav a[href="#booking"]'); // Optional CTA color switch

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Hide / show header
    if (currentScroll > lastScroll && currentScroll > 100) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;

    // ===== Dynamic Nav Color =====
    const heroHeight = document.getElementById('home').offsetHeight;

    if (currentScroll > heroHeight - 80) {
      // Past hero → switch to brand green
      navLinks.forEach(a => {
        a.classList.remove('text-white');
        a.classList.add('text-[#14261e]');
      });

      if (bookBtn) {
        bookBtn.classList.remove('bg-white', 'text-[#14261e]');
        bookBtn.classList.add('bg-[#14261e]', 'text-white');
      }

    } else {
      // Hero → switch to white
      navLinks.forEach(a => {
        a.classList.add('text-white');
        a.classList.remove('text-[#14261e]');
      });

      if (bookBtn) {
        bookBtn.classList.add('bg-white', 'text-[#14261e]');
        bookBtn.classList.remove('bg-[#14261e]', 'text-white');
      }
    }
  });

  // ===== FAQ Toggle (Safe) =====
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      const p = item.querySelector('p');
      if (p) p.classList.toggle('hidden');
    });
  });
});