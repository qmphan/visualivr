/**
 * @class example.connection_labeledit.LabelConnection
 *
 * A simple Connection with a label wehich sticks in the middle of the connection..
 *
 * @author Andreas Herz
 * @extend draw2d.Connection
 */

visualivr.shape.StartWithLabel = draw2d.shape.node.Start.extend({

  init:function(width, height)
  {
	this._super();

	this.typeNode='start';
	this.setDimension(width, height);
	this.setDeleteable(false);

	this.OutputPortTab = [];
	this.maxOutputPortNumber =  10;
	
	// Create any Draw2D figure as decoration for the connection
	this.label = new draw2d.shape.basic.Label("START");
	this.label.setColor("#0d0d0d");
	this.label.setFontColor("#0d0d0d");

	// add the new decoration to the connection with a position locator.
	this.addFigure(this.label, new draw2d.layout.locator.CenterLocator(this));

	this.label.installEditor(new draw2d.ui.LabelInplaceEditor());
  }
});
