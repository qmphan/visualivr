
visualivr.Dialog = Class.extend({

    init: function() {

	this.generate_element();
    },

    generate_element: function() {

	this.container = $('<div>', {
            style : "background-color: #f0f0f0;text-align:center; \
            border: 1px solid #dddddd; padding:5px;margin: 10px;"
        });

        this.table = $('<table>', {
            style : "width: 100%;text-align:center"
        });

        this.submitButton = $('<input>', {
            type : "submit",
            style : "margin:0px 10px 0px 10px; width:100px;text-align:center;display:inline; color:grey",
            value : "Submit"
        });
        this.cancelButton = $('<input>', {
            type : "submit",
            style : "margin:0px 10px 0px 10px;width:100px;text-align:center;display:inline; color:grey",
            value : "Cancel"
        });

	$(this.container).append($('<div>', { style : "padding: 10px;margin-top:10px;" }).append(this.submitButton).append(this.cancelButton));
    },

    setContent: function(tableContent) {

	$(this.container).prepend(tableContent);
    },

    /*
     *  exemple :
     *  assoc_arr_data = [
     *    {
     *    	key : "foo"
     *    	value : "bar"
     *    }
     *  ]
     */
    push_table: function(assoc_arr_data) {

	var table = $(this.table);
	for (var i = 0; i < assoc_arr_data.length; i++) {

	    $(table).append($('<tr>').append($('<td>').append(assoc_arr_data[i].key)).append($('<td>').append(assoc_arr_data[i].value)));
	}
	$(this.table).remove();
	$(this.container).prepend(table);
    },

    start: function() {

	$(this.container).dialog({ title: this.title });
    },

    set_title: function(title) {

	if (title != null && title.length < visualivr.Config.MAX_DIALOG_LENGTH) {

	    this.title = title;
	}
	else
	    return (false);
    },

    set_submit_action: function(callback) {

	$(this.submitButton).on('click', callback);
    },

    set_cancel_action: function(callback) {

	$(this.cancelButton).on('click', callback);
    },

    close_dialog: function() {

	$(this.container).dialog('close');
    },

    get_table_instance: function() {

	return (this.table);
    },

    get_submit_instance: function() {

	return (this.submitButton);
    },

    get_cancel_instance: function() {

	return (this.cancelButton);
    },
});


