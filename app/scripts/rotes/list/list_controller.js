define(["app", "app/scripts/rotes/list_view"], function(App, View){
  App.module("RotesApp.List", function(List, App, Backbone, Marionette, $, _){
    List.Controller = {
      listContacts: function(criterion){
        App.log('woah here', 'nice', 2);
        // require(["common/views", "entities/contact"], function(CommonViews){
          // var loadingView = new CommonViews.Loading();
          // ContactManager.mainRegion.show(loadingView);
          // ContactManager.mainRegion.show(contactsListLayout);
        // });
      });
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