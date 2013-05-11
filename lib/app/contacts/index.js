var app = require('../index.js');

app.get('/contacts', function(page, model, params) {
  model.subscribe('users.nandreasson', function(err, user) {
    model.ref('_contacts', user.at('contacts'));
    model.ref('_primaryContact', model.at('_contacts.0'));

    page.render('contacts');
  });
});

app.ready(function(model) {
  app.changePrimaryContact = function(e, el) {
    var contact = model.at('_contacts.' + $(el).index());
    model.ref('_primaryContact', contact);
  };

  app.addNewContact = function() {
    // add data
  };

  app.on('render:contacts', function() {
    $('.dropdown-toggle').dropdown();
  });
});