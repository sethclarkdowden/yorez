/*global yorez, Backbone, JST*/

yorez.Views.IframeView = Backbone.View.extend({
		el: "#iframe",

    template: JST['app/scripts/templates/iframe.ejs'],

    events: {
        'submit': 'changeAdress'
    },

    initialize: function () {
    	def = ({
    		iurl: iurl
    	})
    	this.render();
    },

    render: function () {
        this.$el.html(this.template(def));

        return this;
    },

    changeAdress: function () {
        event.preventDefault();
        iurl = this.$('#iurl').val().trim();
        def = ({
            iurl: iurl
        })
        this.render();

    }
});
