
visualivr.shape.CustomCircle = visualivr.shape.inputBlock.extend({

    init: function(name, width, color) {

	this._super();
	this.name = name;
	this.out_link = [];
	this.setDimension(width, width);
	this.init_default();
	this.tooltipText = '';
	this.label.setText(name);
	this.column = 0;
	this.setRadius(10);
	this.color = color;
    }
});
