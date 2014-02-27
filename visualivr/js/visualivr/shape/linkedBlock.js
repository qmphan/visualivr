
/**
 * @class example.connection_labeledit.LabelConnection
 *
 * A simple Connection with a label which sticks in the middle of the connection..
 *
 * @author Andreas Herz
 * @extend draw2d.Connection
 */

visualivr.shape.linkedBlock = visualivr.shape.inputBlock.extend({

    init:function(id_block, width, height) {

	this._super();
	this.blockid = id_block;
	this.out_link = [];
	this.setDimension(width, height);
	this.init_default();
	this.tooltipText = '';
	this.addCssClass('linkedBlock');
    },

    selectTarget: function() {

	var view_manager = this.app.get_view_manager_instance();
	var target_view = view_manager.get_view_by_name(this.target_file_name);

	view_manager.select_tab_by_name(this.target_file_name);
	target_view.setCurrentSelection(target_view.getFigure(this.target_node_name));
    },
    
    onContextMenu:function(x,y){

	_self = this;
	$.contextMenu({
	    selector: 'body',
	    events:
		{
		hide:function(){ $.contextMenu( 'destroy' ); }
	    },
	    callback: $.proxy(function(key, options) {
		switch(key){
		    case "focus_target":
			this.selectTarget();
		    break;
		    case "goto_code":
			_self.gotoCode();
		    break;
		    case "delete":
			var cmd = new draw2d.command.CommandDelete(this);
		    this.getCanvas().getCommandStack().execute(cmd);
		    default:
		    break;
		}
	    },this),
	    x:x,
	    y:y,
	    items:
		{
		"focus_target": {name: "Select target"},
	        "goto_code" : { name: "Goto xml"},
		"delete": {name: "Delete"}
	    }
	});
    },
});
