/**
 * @class example.connection_labeledit.LabelConnection
 *
 * A simple Connection with a label which sticks in the middle of the connection..
 *
 * @author Andreas Herz
 * @extend draw2d.Connection
 */

visualivr.shape.inputBlock = visualivr.shape.Choices.extend({

    init: function(name, width, height) {

	this._super();
	this.name = name;
	this.out_link = [];
	this.setDimension(width, height);
	this.init_default();
	this.tooltipText = '';
	this.label.setText(name);
	this.column = 0;
    },

    // SETTERS
    set_file_name: function(file_name) {

	this.file_name = file_name;
    },

    set_app: function(app) {

	this.app = app;
    },

    set_name: function(name) {

	this.name = name;
    },

    set_column: function(column) {

	this.column = column;
    },

    set_color: function(color) {

	this.color = color;
    },

    set_target_file_name: function(target_file_name) {

	this.target_file_name = target_file_name;
    },

    set_target_node_name: function(target_node_name) {

	this.target_node_name = target_node_name;
    },

    // GETTERS
    get_name: function() { return (this.name); },
    get_file_name: function() { return (this.file_name); },
    get_column: function() { return (this.column); },
    get_color: function() { return (this.color); },
    get_target_file_name: function() { return (this.target_file_name); },
    get_target_node_name: function() { return (this.target_node_name); },
    get_links: function() { return (this.out_link); }
});
