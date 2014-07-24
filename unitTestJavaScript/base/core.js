define('core', ['myService'], function (myService) {
    return {
        version: 8,
        returnMessage: function () {
            return myService.getMessage();
        }
    };
});