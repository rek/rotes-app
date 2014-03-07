App.module("RotesApp.List", function (List, App, Backbone, Marionette, $, _) {

  List.Rote = Marionette.ItemView.extend({
    template: "rote",
    tagName: "li",

  //   triggers: {
  //     "click": "selected"
  //   }
  });

  List.Rotes = Marionette.CollectionView.extend({
    tagName: "ul",
    className: "rote-list",
    itemViewEventPrefix: "rote",
    itemView: List.Rote
  });

});