//set active <nav> style for current page
const navLinks = document.getElementById("nav").getElementsByTagName("a");
//console.log(navLinks);
//setting active to 0 will highlight first nav item as current
let active = null;
for (let i = 0; i < navLinks.length; i++) {
  if (navLinks[i].href === document.URL) {
    active = i;
  }
}
//confirm variable is not null + not an empty string before changing className
if (active !== null && active !== '') {
  navLinks[active].className = "current";
}
/*
//register serviceworker to create cache of primary pages
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('serviceworker.js', { scope: '/msu-dataset-search/' })
    .then(function(registration) {
      console.log('Service Worker Registered. Scope is ' + registration.scope);
    });
  navigator.serviceWorker.ready.then(function(registration) {
    console.log('Service Worker Ready');
  });
}
*/
