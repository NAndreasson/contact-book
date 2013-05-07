var derby = require('derby')
  , app = derby.createApp(module)
  , get = app.get
  , view = app.view;

derby.use(require('../../ui'));
derby.use(require('derby-ui-boot'));

get('/', function(page, model, params) {
  page.render();
});

app.ready(function(model) {

});
