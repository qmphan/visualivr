
visualivr.Stat = Class.extend({

    init: function(app) {

	var _self = this;
	this.app = app;

	this.html = $('<div>');
	this.input = $('<div>', {
	    class : 'btn',
	    id : "stat",
	    text : "Statistique",
	    style : "position: relative; left : 10px; top: 1px;"
	});
	this.html.append(this.input);

	$('#stat').live('click', function(e) {

	    /*
	    var stroke_updater = new visualivr.Update_stroke(_self.app);
	    var dialog = new visualivr.Dialog();
	    var dialogArray = [];
	    dialog.set_title("Statistique");
	    dialog.setContent(stroke_updater.get_html());
	    dialog.set_submit_action(stroke_updater.submit_action());
	    dialog.start();
	    */
	})
    },

    get_html:function() {

	return (this.html.html());
    },
})
