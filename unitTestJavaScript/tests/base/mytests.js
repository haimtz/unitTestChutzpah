define(['base/core', 'base/myService'], function(core, myService) {
    module("chutzpah test");
    test("will return correct version from core", function() {
        var version = core.version;
        equal(version, 8);
    });

    test("sinon checking", function() {
        sinon.stub(myService, 'getMessage').returns('abc');

        var result = core.returnMessage();

        equal(result, 'abc');
    });
});