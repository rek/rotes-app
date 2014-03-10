define(['app', 'backbone.picky'], function(App){

  var contextName = 'Entity Page';

  App.module('Entities', function(Entities, App, Backbone, Marionette, $, _){
    Entities.Page = Backbone.Model.extend({
      initialize: function(){
        App.log('Creating Pages Entity', contextName, 2);
        var selectable = new Backbone.Picky.Selectable(this);
        _.extend(this, selectable);
      }
    });

    Entities.PageCollection = Backbone.Collection.extend({
      model: Entities.Page,
      initialize: function(){
        App.log('Creating Pages Collection', contextName, 2);
        var singleSelect = new Backbone.Picky.SingleSelect(this);
        _.extend(this, singleSelect);
      }
    });

    var initializePages = function(){
      App.log('Init Pages Collection', contextName, 2);
      Entities.Pages = new Entities.PageCollection([
        // { name: 'Rotes', url: 'rotes', navigationTrigger: 'rotes:list' },
        // { name: 'About', url: 'about', navigationTrigger: 'about:show' }
      ]);
    };

    var API = {
      getPages: function(){
        if(Entities.Pages === undefined){
          initializePages();
        }
        App.log('Returning Pages', contextName, 3);
        return Entities.Pages;
      },

      registerPage: function(pages) {
        // TODO: check for array or single item.
        for (var i=0;i<pages.length;i++) {
          var name = pages[i].get('name');
          App.log('Found page: '+ name, this.name, 1);
          Entities.Pages.add({name: name, url: pages[i].get('url')});
        };
        // Entities.Pages.trigger('reset');
      }

    };

    App.reqres.setHandler('page:entities', function(){
      App.log('page:entities called', contextName, 1);
      return API.getPages();
    });

    App.on('page:register', function(name){
      // App.log('page:add called: ' + name, contextName, 1);
      return API.registerPage(name);
    });

  });

  return ;
});