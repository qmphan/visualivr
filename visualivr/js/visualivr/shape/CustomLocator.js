
visualivr.locator = draw2d.layout.locator.LeftLocator.extend({

	init: function(parent, top, left) {

	  this._super(parent);
	  this.top = top;
	  this.left = left;
	},

	relocate:function(index, target)
	{
	  var parent = this.getParent();
	  var boundingBox = parent.getBoundingBox();
	  var targetBoundingBox = target.getBoundingBox();
	  var width = targetBoundingBox.getWidth();
	  var height = targetBoundingBox.getHeight();

	  target.setPosition(-targetBoundingBox.w+width+this.top,(boundingBox.h/2)-(targetBoundingBox.h/2));
	},

})
