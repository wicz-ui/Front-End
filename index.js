// Scroll suave para os links de navegação
document.addEventListener('DOMContentLoaded', function(){
  const links = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('main section');
  const animElements = document.querySelectorAll('[class*="animate-"]');

  // Smooth scroll
  links.forEach(link => {
    link.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        target.scrollIntoView({behavior:'smooth'});
      }
    });
  });

  // Intersection Observer para animações ao scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animElements.forEach(el => {
    observer.observe(el);
  });

  // Destaque de navegação ao rolar
  function highlightNav(){
    const fromTop = window.scrollY + 140;
    let activeFound = false;
    sections.forEach(section => {
      const id = section.id;
      const link = document.querySelector(`nav a[href="#${id}"]`);
      if(section.offsetTop <= fromTop && (section.offsetTop + section.offsetHeight) > fromTop){
        // active
        links.forEach(l => l.style.opacity = '0.6');
        if(link) link.style.opacity = '1';
        // set header/link color opposite to section background
        const isLight = section.classList.contains('light');
        const rootStyles = getComputedStyle(document.documentElement);
        const black = rootStyles.getPropertyValue('--black').trim() || '#000';
        const white = rootStyles.getPropertyValue('--white').trim() || '#fff';
        const headerColor = isLight ? black : white;
        document.querySelector('header').style.color = headerColor;
        activeFound = true;
      }
    });
    if(!activeFound){
      document.querySelector('header').style.color = getComputedStyle(document.documentElement).getPropertyValue('--white').trim();
    }
  }

  window.addEventListener('scroll', highlightNav);
  highlightNav();
});
