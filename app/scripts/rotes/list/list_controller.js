define(["app", "rotes/list/list_view"], function (App, View) {
  App.module("RotesApp.List", function (List, App, Backbone, Marionette, $, _) {
    List.Controller = {
      listRotes: function () {
        require(["entities/rote"], function(){
        // require(["common/views", "entities/contact"], function(CommonViews){
          var Loading = Marionette.ItemView.extend({
            template: 'loading',
          });
          var loadingView = new Loading();
          var fetchingRotes = App.request("rote:entities");

          // var contactsListLayout = new View.Layout();
          // var contactsListPanel = new View.Panel();

          // require(["entities/common"], function(FilteredCollection){
            $.when(fetchingRotes).done(function(rotes){
              App.log('fetched', 'App', 1);
            });

          App.mainRegion.show(loadingView);
          // App.mainRegion.show(contactsListLayout);
        });
      }
    }
  });
  return App.RotesApp.List.Controller;
});

//   List.Controller = {
//     showAll: function() {
//       var func = _.bind(this._showAll, this);

//       $.when(App.request("rotes:entities")).then(func);
//     },
// listRotes
//     _showAll: function(rotes) {
//       var roteListView = this._getRoteListView(rotes);
//       // emailListView.on("email:selected", function(view) {
//         // App.vent.trigger("email:selected", view.model);
//       // });
//       App.main.show(roteListView);
//     },

//     _getRoteListView: function(rotes) {
//       return new List.Rotes({
//         collection: rotes
//       });
//     }
//   }

// });