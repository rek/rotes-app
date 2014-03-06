(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define([App, backbone], function(App, Backbone) {
    'use strict';
    return App.Models.RoteModel = (function(_super) {
      __extends(RoteModel, _super);

      function RoteModel() {
        return RoteModel.__super__.constructor.apply(this, arguments);
      }

      initalize(function() {
        return console.log('could it be cooler? ss');
      });

      return RoteModel;

    })(Backbone.Model);
  });

}).call(this);
