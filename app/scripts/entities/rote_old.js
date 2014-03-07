App.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {
  "use strict";

  var Rote = App.Entities.Model.extend({
  });

  var RoteCollection = App.Entities.Collection.extend({
    model: Rote,
    url: "/rotes"
  });

  var API = {

    getAll: function() {
      var deferred = $.Deferred();

      this._getAll(function(mail) {
        deferred.resolve(mail);
      });

      return deferred.promise();
    },

    _getAll: function(callback) {
      var roteCollection = new RoteCollection();
      roteCollection.on("reset", callback);

      var fakeRotes = {
          new Rote({ name: "First Rote", slug: "page-1" }),
          new Rote({ name: "Second Rote", slug: "page-2" })
      }

      var fakeRote3 = new Rote({ name: "Third Rote", slug: "page-3" });

      roteCollection.add(fakeRote3);

      // roteCollection.fetch();
    }
  };

  App.reqres.addHandler("rotes:entities", function() {
    return API.getAll();
  });
});