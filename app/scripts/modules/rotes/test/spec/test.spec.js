/*global define, describe, it, expect */
'use strict';

define([
    'app',
    '../entities/rote',
],

function (App, Rote) {

    var roteCollection = new App.Entities.RoteCollection();

    describe('Examples collection', function() {

        it('should exist', function() {
            expect(roteCollection).to.exist;
        });

//         it('should be an instance of roteEntity collection', function() {
//             // expect(roteEntity).to.be.an.instanceof(ExamplesCollection);
//         });

    });

});