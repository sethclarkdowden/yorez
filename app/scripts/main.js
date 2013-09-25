/*global yorez, $*/


window.yorez = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        new this.Views.AppView({
            collection: new this.Collections.ScreensCollection()
        });
    }
};

$(document).ready(function () {
    yorez.init();
});
