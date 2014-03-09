define(["app", "modules/pages/config"], function(App){

  App.module("PageApp", function(Header, App, Backbone, Marionette, $, _, ListController){
    var API = {
      listHeader: function(){
        require(['pages_list_controller'], function(ListController){
          ListController.listPage();
        });
      }
    };

    App.commands.setHandler("set:active:page", function(name){
      require(['pages_list_controller'], function(ListController){
        ListController.setActivePage(name);
      });
    });

    Header.on("start", function(){
      API.listHeader();
    });
  });

  return App.HeaderApp;
});
