define([
    // 'underscore',
    // 'backbone',
    // 'routers/router',
    // 'layouts/main',
    // 'rotes/rotes_app',
    'marionette',
],

// function (_, Backbone) {
function (Marionette) {
    'use strict';

    var App = new Backbone.Marionette.Application();

    // An init function for your main application object
    App.addInitializer(function () {
        this.root = '/';
        // App.switchApp('RotesApp');
        // App.layout = new Layout();
        // $('body').prepend(App.layout.el);
        // App.layout.render();

        // App.layout.menu.show(myMenu);
        // new Router();
    });

    //3 ways to add.
    // App.addRegions({
        // mainRegion: "#main"
        // same as:
        // App.container = new Backbone.Marionette.Region({el:"#main"});
    // });

    // region.show(new MyView());
    // Close out the view and display nothing in #container.
    // region.close();

    // Add as many of these as you like
    App.addInitializer(function () {

    });

    App.on('initialize:before', function (options) {
        console.log('Initialization Started');
        // options.anotherThing = true; // Add more data to your options
    });

    App.on('initialize:after', function (options) {
        console.log('Initialization Finished');

        if(Backbone.history){
            require(["rotes/rotes_app"], function () {
                // Backbone.history.start();

                App.switchApp("RotesApp", {});
            });
        }


    });

    App.switchApp = function(appName, args){
        var currentApp = App.module(appName);
        if (App.currentApp === currentApp){ return; }

        if (App.currentApp){
            App.currentApp.stop();
        }

        App.currentApp = currentApp;
        currentApp.start(args);
    };

    /**
    * Log function.
    * Pass all messages through here so we can disable for prod
    */
    App.log = function(message, domain){
        if(typeof message !== "string"){
            console.log('Fancy object in log msg, implemoent this plz');
        } else {
            console.log((domain || false ? '('+domain+') ' : '') + message);
        }
    };

    // Return the instantiated App (there should only be one)
    return App;

});
