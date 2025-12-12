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