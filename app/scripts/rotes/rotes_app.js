define(['app'], function(App){
    // create a new module
    App.module('RotesApp', {
        startWithParent: false,
        // only avaiable with object literal def of module;
        initialize: function (options, moduleName, app) { // on prototype chain thus interitable
            // this.someProperty = 'someValue';
            console.log('(Rotes App) Initalize');
        },
        define: function (RotesApp, App, Backbone, Marionette, $, _) { // non interitable
            // temp stuff for logging
            // TODO: find a better way to get module name
            this.name = 'RotesApp';
            var self = this;
        }
    });

  // App.module("RotesApp", function(RotesApp, App, Backbone, Marionette, $, _){
  //   RotesApp.startWithParent = false;

  //   RotesApp.onStart = function(){
  //     console.log("starting RotesApp");
  //   };

  //   RotesApp.onStop = function(){
  //     console.log("stopping RotesApp");
  //   };
  // });

    App.module("Routers.RotesApp", function(RotesAppRouter, App, Backbone, Marionette, $, _){
        RotesAppRouter.Router = Marionette.AppRouter.extend({
            before: function () {
                App.log('Before Router', self.name);
                // start ourselves
                // App.switchApp('RotesApp', {});
            },
            appRoutes: {
                ''            : 'listRotes',
                'rotes'       : 'listRotes',
                // 'rotes/create': 'createRote',
                'rote/:slug'  : 'showRote'
            }
        });

        var executeAction = function(action, arg){
            App.log('exe act', self.name);
            App.switchApp("RotesApp");
            action(arg);
            // App.execute("set:active:header", "contacts");
        };

        var API = {
            listRotes: function(criterion){
                require(["apps/scripts/rotes/list/list_controller"], function(ListController){
                    App.log('listing all rotes', this.name);
                    executeAction(ListController.listRotes, criterion);
                });
            },
            showRote: function (slug) {
                App.log('showing all rotes', this.name);
                require(["apps/scripts/rotes/show/show_controller"], function(ShowController){
                    App.log('showing all rotes', this.name);
                    executeAction(ShowController.showRote, slug);
                });
                // RotesApp.List.Controller.showAll();
            },
        };

        App.on("rotes:list", function(){
          AppManager.navigate("rotes");
          API.listRotes();
        });

        App.on("rote", function(){
          AppManager.navigate("rote");
          API.showRote();
        });

        App.addInitializer(function(){
            App.log('Initalizer running: Starting Router', self.name, 2);
            new RotesAppRouter.Router({
                controller: API
            });
        });
    });

    return App.RotesAppRouter;
});