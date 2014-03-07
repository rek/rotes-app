define(["app"], function(App){
  App.module("Entities", function(Entities, App, Backbone, Marionette, $, _){
    Entities.Rote = Backbone.Model.extend({
      urlRoot: "rotes",

      defaults: {
        name: "",
        slug: ""
      },

    //   validate: function(attrs, options) {
    //     var errors = {}
    //     if (! attrs.firstName) {
    //       errors.firstName = "can't be blank";
    //     }
    //     if (! attrs.lastName) {
    //       errors.lastName = "can't be blank";
    //     }
    //     else{
    //       if (attrs.lastName.length < 2) {
    //         errors.lastName = "is too short";
    //       }
    //     }
    //     if( ! _.isEmpty(errors)){
    //       return errors;
    //     }
    //   }
    });

    // Entities.configureStorage(Entities.Contact);

    Entities.RoteCollection = Backbone.Collection.extend({
      url: "rotes"
      // model: Entities.Contact,
      // comparator: "firstName"
    });

    // Entities.configureStorage(Entities.ContactCollection);

    var initializeRotes = function(){
      App.log('setting up rotes', 'this.name', 1);
      // var contacts = new Entities.ContactCollection([
        // { id: 1, firstName: "Alice", lastName: "Arten", phoneNumber: "555-0184" },
        // { id: 2, firstName: "Bob", lastName: "Brigham", phoneNumber: "555-0163" },
        // { id: 3, firstName: "Charlie", lastName: "Campbell", phoneNumber: "555-0129" }
      // ]);

      // var roteCollection = new Backbone.Collection.extend({});
      // roteCollection.on("reset", callback);
      var Rote = Backbone.Model.extend({});

      var fakeRotes = [
          new Rote({ name: "First Rote", slug: "page-1" }),
          new Rote({ name: "Second Rote", slug: "page-2" })
      ]

      var fakeRote3 = new Rote({ name: "Third Rote", slug: "page-3" });

      // Entities.RoteCollection.add(fakeRote3);

      // contacts.forEach(function(contact){
        // contact.save();
      // });
      return fakeRotes;
      // return Entities.RoteCollection.models;
    };

    var API = {
      getRoteEntities: function(){
        App.log('getRotes called', 'rote entitie', 1);
        var rotes = new Entities.RoteCollection();
        var defer = $.Deferred();
        rotes.fetch({
          complete: function(data){
            App.log('fake datas', 'rote ent', 1);
            defer.resolve(rotes);
          },
          success: function(data){
            defer.resolve(data);
          }
        });
        var promise = defer.promise();
        $.when(promise).done(function(rotes){
          App.log('promise running: ' + rotes.length, 'rote ent', 1);
          if(rotes.length === 0){
            // if we don't have any rotes yet, create some for convenience
            var models = initializeRotes();
            rotes.reset(models);
          }
        });
        return promise;
      },

      getContactEntity: function(contactId){
        var contact = new Entities.Contact({id: contactId});
        var defer = $.Deferred();
        setTimeout(function(){
          contact.fetch({
            success: function(data){
              defer.resolve(data);
            },
            error: function(data){
              defer.resolve(undefined);
            }
          });
        }, 2000);
        return defer.promise();
      }
    };

    App.reqres.setHandler("rote:entities", function(){
      return API.getRoteEntities();
    });

    // App.reqres.setHandler("rote:entitie", function(id){
      // return API.getContactEntity(id);
    // });

    // App.reqres.setHandler("contact:entity:new", function(id){
      // return new Entities.Contact();
    // });
  });

  return ;
});
