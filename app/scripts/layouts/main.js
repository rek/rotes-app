define([
    "underscore",
    "marionette"
],

function (_, Marionette) {

    return Backbone.Marionette.Layout.extend({

        template: "appSkeleton",

        regions: {
            menu   : "#menu",
            content: "#content"
        },

        initialize: function (options) {}

    });
});
