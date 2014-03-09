define(['app', 'pages_list_view'], function(App, View){
  App.module('PageApp.List', function(List, App, Backbone, Marionette, $, _){
    List.Controller = {
      listPage: function(){
        require(['pages_entities_page'], function(){
          var links = App.request('page:entities');
          var pages = new View.Pages({collection: links});

          pages.on('brand:clicked', function(){
            App.trigger('pages:list');
          });

          pages.on('itemview:navigate', function(childView, model){
            var trigger = model.get('navigationTrigger');
            App.trigger(trigger);
          });

          App.pageRegion.show(pages);
        });
      },

      setActivePage: function(pageUrl){
        var links = App.request('page:entities');
        // var pageToSelect = links.find(function(page){ return page.get('url') === pageUrl; });
        // pageToSelect.select();
        links.trigger('reset');
      }
    };
  });

  return App.PageApp.List.Controller;
});
