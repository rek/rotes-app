define(["app", "backbone.picky"], function(App){

  var contextName = 'Entity Page';

  App.module("Entities", function(Entities, App, Backbone, Marionette, $, _){
    Entities.Page = Backbone.Model.extend({
      initialize: function(){
        App.log('Init', contextName, 2);
        var selectable = new Backbone.Picky.Selectable(this);
        _.extend(this, selectable);
      }
    });

    Entities.PageCollection = Backbone.Collection.extend({
      model: Entities.Page,

      initialize: function(){
        var singleSelect = new Backbone.Picky.SingleSelect(this);
        _.extend(this, singleSelect);
      }
    });

    var initializePages = function(){
      App.log('Init Pages Collection', contextName, 2);
      Entities.Pages = new Entities.PageCollection([
        { name: "Rotes", url: "rotes", navigationTrigger: "rotes:list" },
        // { name: "About", url: "about", navigationTrigger: "about:show" }
      ]);
    };

    var API = {
      getPages: function(){
        if(Entities.Pages === undefined){
          initializePages();
        }
        App.log('Returning Pages', contextName, 1);
        return Entities.Pages;
      }
    };

    App.reqres.setHandler("page:entities", function(){
      return API.getPages();
    });
  });

  return ;
});