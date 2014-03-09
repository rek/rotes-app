define(['app'], function(App){
  App.module('PageApp.List.View', function(View, App, Backbone, Marionette, $, _){
    View.Page = Marionette.ItemView.extend({
      template: 'pages_list_one',
      tagName: 'li',

      events: {
        'click a': 'navigate'
      },

      navigate: function(e){
        e.preventDefault();
        this.trigger('navigate', this.model);
      },

      onRender: function(){
        if(this.model.selected){
          // add class so Bootstrap will highlight the active entry in the navbar
          this.$el.addClass('active');
        };
      }
    });

    View.Pages = Marionette.CompositeView.extend({
      template: 'pages_list',
      className: 'navbar navbar-inverse navbar-fixed-top',
      itemView: View.Page,
      itemViewContainer: 'ul',

      events: {
        'click a.brand': 'brandClicked'
      },

      brandClicked: function(e){
        e.preventDefault();
        this.trigger('brand:clicked');
      }
    });
  });

  return App.PageApp.List.View;
});
