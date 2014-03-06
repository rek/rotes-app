define([
    'underscore',
    'marionette',
    'views/menu'
],

function (_, Marionette, MenuView) {

    // A Layout is a hybrid of an ItemView and a collection of Region objects.
    // They are ideal for rendering application layouts with multiple sub-regions
    // managed by specified region managers.
    return Backbone.Marionette.Layout.extend({

        template: 'appSkeleton',

        regions: {
            // menu   : '#menu',
            content: '#content'
        },

        initialize: function (options) {

            this.addRegion('menu', '#menu');

            // init here if expensive
            // this.subView = new SubView();
        },

        onShow: function () {
            this.menu.show(new MenuView());
        }
    });
});
