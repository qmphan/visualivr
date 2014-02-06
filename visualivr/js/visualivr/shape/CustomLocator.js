
visualivr.locator = draw2d.layout.locator.LeftLocator.extend({

	init: function(parent) {

		  this._super(parent);
	},

	relocate:function(index, target)
	{
	  var parent = this.getParent();
	  var boundingBox = parent.getBoundingBox();
	  var targetBoundingBox = target.getBoundingBox();
	  var width = targetBoundingBox.getWidth();
	  var height = targetBoundingBox.getHeight();

	  target.setPosition(-targetBoundingBox.w+width+2,(boundingBox.h/2)-(targetBoundingBox.h/2));
	},

})
