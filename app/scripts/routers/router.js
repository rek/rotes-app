define([
    'marionette'
],

function (Marionette) {

    var API = {
      showRotes: function () {
        // MailApp.List.Controller.showInbox();
        console.log('yay');
      },
      showRote: function (id) {
        // MailApp.Show.Controller.showEmail(email);
        console.log(id)
      },
    };

    return Marionette.AppRouter.extend({

        // Format is "route": "methodName" where the router's controller
        // must have the method methodName
        appRoutes: {
          ""    : "showRotes",
          "rote": "showRote",
        },

        // Standard backbone routes. Methods called must be in this object.
        routes: API,

    });

});
