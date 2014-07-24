///<reference path="../../Scripts/sinon-1.9.1.js"/>
///<reference path="~/Scripts/require.js"/>
///<reference path="../../base/core.js"/>
///<reference path="../../base/myService.js"/>

require(['core', 'myService'], function (core, myService) {
    module("chutzpah test");
    test("will return correct version from core", function () {

        equal(core.version, 8);
    });

    test("my service test", function() {
        var actual = core.returnMessage();
        var expected = 'hello';

        equal(actual, expected);
    });

    test("my service with sinon", function() {
        sinon.stub(myService, 'getMessage').returns('fake');

        var actual = core.returnMessage();
        var expected = 'fake';

        equal(actual, expected, 'this is fake');
    })
});
