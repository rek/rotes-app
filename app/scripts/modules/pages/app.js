define(['app', 'modules/pages/config'], function(App){

  App.module('PageApp', function(PageApp, App, Backbone, Marionette, $, _, ListController){
    var API = {
      listPages: function(){
        require(['pages_list_controller'], function(ListController){
          ListController.listPages();
        });
      }
    };

    App.commands.setHandler('set:active:page', function(name){
      require(['pages_list_controller'], function(ListController){
        ListController.setActivePage(name);
      });
    });

    PageApp.on('start', function(){
      API.listPages();
    });
  });

  return App.PageApp;
});
