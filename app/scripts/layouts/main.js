define([
    "underscore",
    "backbone",
    "marionette"
],

function (_, Backbone, Marionette) {

    return Backbone.Marionette.Layout.extend({

        template: "appSkeleton",

        regions: {
            menu   : "#menu",
            content: "#content"
        },

        initialize: function (options) {}

    });
});
