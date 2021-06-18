import { router } from './moduloRouter/ruteo.js';

window.addEventListener('hashchange', () => {
  router(window.location.hash);
});
router(window.location.hash);
