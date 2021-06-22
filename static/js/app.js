let router = navaid('/' + BASE_LAST_PATH);

router
  .on('*', () => {
    fetch(window.location.pathname)
      .then(r => r.text())
      .then(text => document.body.innerHTML = text);
  });

router.listen();