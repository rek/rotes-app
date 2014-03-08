define(["app"], function(App){
  App.module("HeaderApp.List.View", function(View, App, Backbone, Marionette, $, _){
    View.Header = Marionette.ItemView.extend({
      template: 'pages_list_one',
      tagName: "li",

      events: {
        "click a": "navigate"
      },

      navigate: function(e){
        e.preventDefault();
        this.trigger("navigate", this.model);
      },

      onRender: function(){
        if(this.model.selected){
          // add class so Bootstrap will highlight the active entry in the navbar
          this.$el.addClass("active");
        };
      }
    });

    View.Headers = Marionette.CompositeView.extend({
      template: 'pages_list',
      className: "navbar navbar-inverse navbar-fixed-top",
      itemView: View.Header,
      itemViewContainer: "ul",

      events: {
        "click a.brand": "brandClicked"
      },

      brandClicked: function(e){
        e.preventDefault();
        this.trigger("brand:clicked");
      }
    });
  });

  return App.HeaderApp.List.View;
});
