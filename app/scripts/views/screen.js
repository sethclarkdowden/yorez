/*global yorez, Backbone, JST*/

yorez.Views.ScreenView = Backbone.View.extend({
	tagName: 'li',

  className: "col-xs-1 col-sm-1",

  template: JST['app/scripts/templates/screen.ejs'],

  events: {
    'click':          'rezIframe'
  },

  initialize: function () {
      this.listenTo(this.model, 'change', this.render);
  },

  render: function () {
      this.$el.html(this.template(this.model.toJSON()));

      return this;
  },

  rezIframe: function () {
    modell = this.model.toJSON()
    $('#rtxy').attr("height", modell.Height)
    $('#rtxy').attr("width", modell.Width)
  }
  

});
