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

    App.addRegions({
        headerRegion: "#header-region",
        mainRegion:   "#main-region",
    });

    // An init function for your main application object
    App.addInitializer(function () {
        this.debug = 2;
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

    App.navigate = function(route,  options){
        options || (options = {});
        Backbone.history.navigate(route, options);
    };

    App.getCurrentRoute = function(){
        return Backbone.history.fragment
    };

    App.on('initialize:before', function (options) {
        App.log('Initialization Started');
        // options.anotherThing = true; // Add more data to your options
    });

    App.on('initialize:after', function (options) {
        App.log('Initialization Finished');

        if(Backbone.history){
            require(["rotes/rotes_app"], function () {
                // Backbone.history.start();
                // Trigger the initial route and enable HTML5 History API support
                Backbone.history.start({ pushState: true, root: App.root });

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
    App.log = function(message, domain, level){
        if(App.debug < level) { return; }
        if(typeof message !== "string"){
            console.log('Fancy object in log msg, implemoent this plz', message);
        } else {
            console.log((domain || false ? '('+domain+') ' : '') + message);
        }
    };

    // Return the instantiated App (there should only be one)
    return App;

});
