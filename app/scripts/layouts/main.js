define([
    "underscore",
    "backbone"
],

function (_, Backbone) {

    return Backbone.Marionette.Layout.extend({

        template: "appSkeleton",

        regions: {
            menu   : "#menu",
            content: "#content"
        },

        initialize: function (options) {}

    });
});
