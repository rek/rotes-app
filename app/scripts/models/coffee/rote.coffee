define (require) ->
    $                   = require 'jquery'
    _                   = require 'lodash'
    Backbone            = require 'backbone'
    ->
    'use strict';

    class rotesApp.Models.RoteModel extends Backbone.Model
        initalize ->
            console.log 'could it be cooler? perhaps lol'