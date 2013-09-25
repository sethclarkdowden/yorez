/*global yorez, Backbone, JST*/

yorez.Views.ScreensView = Backbone.View.extend({
	el: '#screens',

	template: JST['app/scripts/templates/screens.ejs'],

  events: {

  },

  initialize: function(){
  	this.render();

    this.collection.create(new yorez.Models.ScreenModel({
      Device: "iPhone",
      Height: "1136",
      Width: "640",
      Icon: "icon-mobile-phone"
    }));
    this.collection.create(new yorez.Models.ScreenModel({
      Device: "iPad",
      Height: "1536",
      Width: "2048",
      Icon: "icon-tablet"
    }));
    this.collection.create(new yorez.Models.ScreenModel({
      Device: "iPad mini",
      Height: "768",
      Width: "1024",
      Icon: "icon-tablet"
    }));
    this.collection.create(new yorez.Models.ScreenModel({
      Device: "iMac",
      Height: "1080",
      Width: "1920",
      Icon: "icon-desktop"
    }));
    this.collection.create(new yorez.Models.ScreenModel({
      Device: "HDTV",
      Height: "1440",
      Width: "2560",
      Icon: "icon-desktop"
    }));
    this.collection.create(new yorez.Models.ScreenModel({
      Device: "1366x768",
      Height: "768",
      Width: "1366",
      Icon: "icon-desktop"
    }));
    this.collection.create(new yorez.Models.ScreenModel({
      Device: "1024x768",
      Height: "768",
      Width: "1024",
      Icon: "icon-desktop"
    }));
    this.addScreenItems();
  },

  render: function(){
  	this.$el.html(this.template());

  	return this;
  },

  addScreenItem: function(model){
  	var view = new yorez.Views.ScreenView({ model: model });
    this.$('ul').append(view.render().el);
  },

  addScreenItems: function(){
  	this.collection.each(this.addScreenItem, this);
  }
});