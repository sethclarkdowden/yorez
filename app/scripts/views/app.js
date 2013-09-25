/*global yorez, Backbone, JST*/

yorez.Views.AppView = Backbone.View.extend({
	el: $('body'),

    template: JST['app/scripts/templates/app.ejs'],

    events: {

    },

    initialize: function(){
        iurl = "www.reddit.com";    
    	this.render();

    	new yorez.Views.ScreensView({
    		collection: this.collection
    	});

        new yorez.Views.IframeView();

        $('#discount_credits').change( function() {
        var newValue = this.value;
        console.log($('#rtxy').attr("height"))
        var newHeight = 
        $('#newValue').html(newValue);
        $('#rtxy').attr("style", " -webkit-transform: scale("+newValue+"); -webkit-transform-origin: 0 0;")
        });
    },

    render: function(){
    	this.$el.html(this.template());

    	return this;
    }

});


