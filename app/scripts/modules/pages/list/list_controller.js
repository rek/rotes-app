define(["app", "pages_list_view"], function(App, View){
  App.module("HeaderApp.List", function(List, App, Backbone, Marionette, $, _){
    List.Controller = {
      listHeader: function(){
        require(["pages_entities_page"], function(){
          var links = App.request("header:entities");
          var headers = new View.Headers({collection: links});

          headers.on("brand:clicked", function(){
            App.trigger("contacts:list");
          });

          headers.on("itemview:navigate", function(childView, model){
            var trigger = model.get("navigationTrigger");
            App.trigger(trigger);
          });

          App.headerRegion.show(headers);
        });
      },

      setActiveHeader: function(headerUrl){
        var links = App.request("header:entities");
        var headerToSelect = links.find(function(header){ return header.get("url") === headerUrl; });
        headerToSelect.select();
        links.trigger("reset");
      }
    };
  });

  return App.HeaderApp.List.Controller;
});
