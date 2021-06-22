let router = navaid('/' + BASE_LAST_PATH);

router
  .on('*', () => {
    fetch(window.location.pathname)
      .then(r => r.text())
      .then(text => document.querySelector('html').innerHTML = text);
  });

router.listen();