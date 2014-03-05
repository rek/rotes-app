define([
    "underscore",
    "backbone",
    "routers/router",
    "layouts/main",
    "marionette",
    "dustMarionette"
],

function (_, Backbone, Router, Layout) {

    var App = new Backbone.Marionette.Application();


    // An init function for your main application object
    App.addInitializer(function () {
        this.root = '/';

        // layout = new Main();
        // layout.render();
    App.layout = new Layout();
// var layoutRender = BBCloneMail.layout.render()
    $("body").prepend(App.layout.el);
    App.layout.render();

        // App.layout.menu.show(myMenu);
        // App.layout.content.show(myContent);

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

    App.on('initialize:before', function(options) {
        console.log('Initialization Started');
        // options.anotherThing = true; // Add more data to your options
    });

    App.on('initialize:after', function(options) {
        console.log('Initialization Finished');
    });

    // Return the instantiated app (there should only be one)
    return App;

});
