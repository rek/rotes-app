var path = 'modules/rotes/';

requirejs.config({
    paths: {
        list_view       : path + 'list/list_view',
        list_controller : path + 'list/list_controller',
        show_view       : path + 'show/show_view',
        shot_controller : path + 'show/show_controller',
        entities_rote   : path + 'entities/rote',
    }
});