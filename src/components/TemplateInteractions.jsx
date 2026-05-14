import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function TemplateInteractions() {
  const { pathname } = useLocation();

  useEffect(() => {
    const body = document.body;

    const removeMobileNav = () => {
      document.getElementById('mobile-nav-toggle')?.remove();
      document.getElementById('mobile-nav')?.remove();
      document.getElementById('mobile-body-overly')?.remove();
      body.classList.remove('mobile-nav-active');
    };

    const getHeader = () => document.getElementById('header');

    const setHeroHeights = () => {
      const header = getHeader();
      const windowHeight = window.innerHeight;
      const headerHeight = document.querySelector('.default-header')?.offsetHeight || header?.offsetHeight || 0;

      document.querySelectorAll('.fullscreen').forEach((element) => {
        element.style.height = `${windowHeight}px`;
      });

      document.querySelectorAll('.fitscreen').forEach((element) => {
        element.style.height = `${windowHeight - headerHeight}px`;
      });
    };

    const setScrolledHeader = () => {
      getHeader()?.classList.toggle('header-scrolled', window.scrollY > 100);
    };

    const closeMobileNav = () => {
      if (!body.classList.contains('mobile-nav-active')) return;

      body.classList.remove('mobile-nav-active');
      document.querySelector('#mobile-nav-toggle i')?.classList.remove('lnr-cross');
      document.querySelector('#mobile-nav-toggle i')?.classList.add('lnr-menu');
      document.getElementById('mobile-body-overly')?.classList.remove('is-visible');
    };

    const buildMobileNav = () => {
      const navContainer = document.getElementById('nav-menu-container');
      if (!navContainer) return;

      removeMobileNav();

      const mobileNav = navContainer.cloneNode(true);
      mobileNav.id = 'mobile-nav';
      mobileNav.querySelectorAll('ul').forEach((list) => {
        list.removeAttribute('id');
      });
      mobileNav.querySelectorAll('.menu-has-children').forEach((item) => {
        const icon = document.createElement('i');
        icon.className = 'lnr lnr-chevron-down mobile-child-toggle';
        item.prepend(icon);
      });

      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.id = 'mobile-nav-toggle';
      toggle.setAttribute('aria-label', 'Open navigation');
      toggle.innerHTML = '<i class="lnr lnr-menu"></i>';

      const overlay = document.createElement('div');
      overlay.id = 'mobile-body-overly';

      body.prepend(toggle);
      body.append(mobileNav, overlay);
    };

    const normalizeDateInputs = () => {
      document.querySelectorAll('#datepicker, #datepicker2').forEach((input) => {
        if (input instanceof HTMLInputElement) {
          input.type = 'datetime-local';
        }
      });
    };

    const onDocumentClick = (event) => {
      const childToggle = event.target.closest('.mobile-child-toggle');
      if (childToggle) {
        event.preventDefault();
        const parent = childToggle.parentElement;
        parent?.classList.toggle('menu-item-active');
        childToggle.classList.toggle('lnr-chevron-up');
        childToggle.classList.toggle('lnr-chevron-down');
        return;
      }

      if (event.target.closest('#mobile-nav-toggle')) {
        body.classList.toggle('mobile-nav-active');
        const icon = document.querySelector('#mobile-nav-toggle i');
        icon?.classList.toggle('lnr-cross');
        icon?.classList.toggle('lnr-menu');
        document.getElementById('mobile-body-overly')?.classList.toggle('is-visible');
        return;
      }

      if (event.target.closest('#mobile-body-overly')) {
        closeMobileNav();
        return;
      }

      const popupLink = event.target.closest('.img-gal, .play-btn');
      if (popupLink) {
        event.preventDefault();
        window.open(popupLink.getAttribute('href'), '_blank', 'noopener,noreferrer');
        return;
      }

      const anchor = event.target.closest('.nav-menu a, #mobile-nav a, .scrollto');
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';
      if (!href.startsWith('#')) {
        closeMobileNav();
        return;
      }

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      const headerOffset = getHeader()?.offsetHeight || 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
      closeMobileNav();
    };

    const onDocumentSubmit = (event) => {
      const form = event.target.closest('#myForm, #mc_embed_signup form');
      if (!form) return;

      event.preventDefault();
      form.reset();
      form.querySelector('.alert-msg')?.replaceChildren(document.createTextNode('Thanks, we will contact you soon.'));
    };

    const onPlaceholderFocus = (event) => {
      const field = event.target;
      if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) return;
      if (!field.placeholder) return;

      field.dataset.placeholder = field.placeholder;
      field.placeholder = '';
    };

    const onPlaceholderBlur = (event) => {
      const field = event.target;
      if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) return;
      if (!field.dataset.placeholder) return;

      field.placeholder = field.dataset.placeholder;
      delete field.dataset.placeholder;
    };

    buildMobileNav();
    normalizeDateInputs();
    setHeroHeights();
    setScrolledHeader();

    window.addEventListener('resize', setHeroHeights);
    window.addEventListener('scroll', setScrolledHeader);
    document.addEventListener('click', onDocumentClick);
    document.addEventListener('submit', onDocumentSubmit);
    document.addEventListener('focusin', onPlaceholderFocus);
    document.addEventListener('focusout', onPlaceholderBlur);

    return () => {
      window.removeEventListener('resize', setHeroHeights);
      window.removeEventListener('scroll', setScrolledHeader);
      document.removeEventListener('click', onDocumentClick);
      document.removeEventListener('submit', onDocumentSubmit);
      document.removeEventListener('focusin', onPlaceholderFocus);
      document.removeEventListener('focusout', onPlaceholderBlur);
      removeMobileNav();
    };
  }, [pathname]);

  return null;
}
