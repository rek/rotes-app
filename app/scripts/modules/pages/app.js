define(["app", "modules/pages/config"], function(App){

  App.module("HeaderApp", function(Header, App, Backbone, Marionette, $, _, ListController){
    var API = {
      listHeader: function(){
        require(['pages_list_controller'], function(ListController){
          ListController.listHeader();
        });
      }
    };

    App.commands.setHandler("set:active:header", function(name){
      require(['pages_list_controller'], function(ListController){
        ListController.setActiveHeader(name);
      });
    });

    Header.on("start", function(){
      API.listHeader();
    });
  });

  return App.HeaderApp;
});
