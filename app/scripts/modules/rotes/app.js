define(function(require) {
    var App = require('app');

    var path = 'modules/rotes/';

    requirejs.config({
        paths: {
            list_view       : path + 'list/list_view',
            list_controller : path + 'list/list_controller',
            show_view       : path + 'show/show_view',
            show_controller : path + 'show/show_controller',
            entities_rote   : path + 'entities/rote',
        }
    });

    // create a new module
    App.module('RotesApp', {
        startWithParent: false,
        // only avaiable with object literal def of module;
        initialize: function (options, moduleName, app) { // on prototype chain thus interitable
            this.name = moduleName;
            App.log('Initalize: ' + App.getCurrentRoute(), this.name, 2);
        },
        define: function (RotesApp, App, Backbone, Marionette, $, _) { // non interitable
            // temp stuff for logging
            // TODO: find a better way to get module name
        }
    });

    // create a new sub module
    App.module("Routers.RotesApp", function(RotesAppRouter, App, Backbone, Marionette, $, _){
        this.name = 'Routers.RotesApp';

        RotesAppRouter.Router = Marionette.AppRouter.extend({
            initialize: function () {
                // App.log('Before Router', RotesAppRouter.name);
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
            App.switchApp("RotesApp");
            action(arg);
            App.execute("set:active:page", "rotes");
        };

        var API = {
            listRotes: function(){
                require(['list_controller'], function(ListController){
                    App.log('List rotes: Controller loaded, requesting rotes..', RotesAppRouter.name, 2);
                    executeAction(ListController.listRotes);
                });
            },
            showRote: function (slug) {
                App.log('showing all rotes', RotesAppRouter.name);
                require(['show_controller'], function(ShowController){
                    App.log('showing all rotes', RotesAppRouter.name);
                    executeAction(ShowController.showRote, slug);
                });
                // RotesApp.List.Controller.showAll();
            },
        };

        App.on("rotes:list", function(){
          App.navigate("/rotes");
          API.listRotes();
        });

        App.on("rote:show", function(){
          App.navigate("/rote");
          API.showRote();
        });

        App.addInitializer(function(){
            App.log('Initalizer running: Starting Router', RotesAppRouter.name, 2);
            new RotesAppRouter.Router({
                controller: API
            });
        });
    });

    return App.RotesAppRouter;
});