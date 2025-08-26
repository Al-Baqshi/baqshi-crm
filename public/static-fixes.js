// Static hosting fixes for animations and interactive components
(function() {
  'use strict';

  // Ensure DOM is ready
  function domReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }

  // Initialize all scripts when DOM is ready
  domReady(function() {
    // Trigger custom events for script initialization
    const initEvent = new CustomEvent('static-site-ready', {
      bubbles: true,
      detail: { timestamp: Date.now() }
    });

    // Dispatch after a small delay to ensure all scripts are loaded
    setTimeout(() => {
      document.dispatchEvent(initEvent);
    }, 100);
  });

  // Handle potential GSAP loading issues
  let gsapCheckInterval;
  let gsapCheckCount = 0;
  const maxGsapChecks = 50; // Check for 5 seconds max

  function checkGSAP() {
    if (window.gsap) {
      clearInterval(gsapCheckInterval);
      // GSAP is loaded, trigger initialization
      const gsapEvent = new CustomEvent('gsap-ready', {
        bubbles: true,
        detail: { gsap: window.gsap }
      });
      document.dispatchEvent(gsapEvent);
      return;
    }

    gsapCheckCount++;
    if (gsapCheckCount >= maxGsapChecks) {
      clearInterval(gsapCheckInterval);
      console.warn('GSAP not loaded after 5 seconds, animations may not work');
    }
  }

  // Start checking for GSAP
  gsapCheckInterval = setInterval(checkGSAP, 100);

  // Handle Alpine.js loading
  let alpineCheckInterval;
  let alpineCheckCount = 0;
  const maxAlpineChecks = 50;

  function checkAlpine() {
    if (window.Alpine) {
      clearInterval(alpineCheckInterval);
      // Alpine is loaded
      const alpineEvent = new CustomEvent('alpine-ready', {
        bubbles: true,
        detail: { Alpine: window.Alpine }
      });
      document.dispatchEvent(alpineEvent);
      return;
    }

    alpineCheckCount++;
    if (alpineCheckCount >= maxAlpineChecks) {
      clearInterval(alpineCheckInterval);
      console.warn('Alpine.js not loaded after 5 seconds, interactive features may not work');
    }
  }

  // Start checking for Alpine
  alpineCheckInterval = setInterval(checkAlpine, 100);

})();
