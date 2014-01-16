
/**
* @class example.connection_labeledit.LabelConnection
*
* A simple Connection with a label which sticks in the middle of the connection..
*
* @author Andreas Herz
* @extend draw2d.Connection
*/

visualivr.shape.linkedBlock = visualivr.shape.Choices.extend({

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



	    var targetView = this.app.bottomMenu.get(0).files[this.target_file_name].view;

	    console.debug('get selection');
	    console.debug(targetView);
	    var tabIdx = this.app.getTabIdxByView(targetView);
	    console.debug(tabIdx);
	    this.app.selectTabByIndex(tabIdx);

	    console.debug('id : ' + this.target_node_name);
	    console.debug(targetView.getFigure( this.target_node_name));
	    targetView.setCurrentSelection(targetView.getFigure( this.target_node_name));

	},

	onContextMenu:function(x,y){
		$.contextMenu({
			selector: 'body',
			events:
			{
				hide:function(){ $.contextMenu( 'destroy' ); }
			},
			callback: $.proxy(function(key, options)
			{
				switch(key){
					case "focus_target":
					  this.selectTarget();
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
				"delete": {name: "Delete"}
			}
		});
	},

});
