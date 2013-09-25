/*global yorez, Backbone*/

yorez.Collections.ScreensCollection = Backbone.Collection.extend({

		localStorage: new Backbone.LocalStorage('backbone-generator-todos'),
    model: yorez.Models.ScreenModel

});