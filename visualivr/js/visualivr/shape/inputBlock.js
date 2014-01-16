/**
* @class example.connection_labeledit.LabelConnection
*
* A simple Connection with a label which sticks in the middle of the connection..
*
* @author Andreas Herz
* @extend draw2d.Connection
*/

visualivr.shape.inputBlock = visualivr.shape.Choices.extend({

	init:function(id_block, width, height) {

		this._super();
		this.blockid = id_block;
		this.out_link = [];
		this.setDimension(width, height);
		this.init_default();
		this.tooltipText = '';
	}
});
