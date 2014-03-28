visualivr.Label = draw2d.shape.basic.Label.extend({

    init:function(parent_obj)
    {
	this._parent = parent_obj;
	this._super();
	this.labelIsVisible = true;
    },

    toggleVisible:function()
    {
	if (this.labelIsVisible == true)
	    {
		this.setVisible(false);
		this.labelIsVisible = false;
	    }
	    else
		{
		    this.setVisible(true);
		    this.labelIsVisible = true;
		}
    },

    onMouseEnter: function() {

	if (this._parent.enableTooltip && this._parent.enableTooltip == true)
	    this._parent.showTooltip();
    },

    onMouseLeave: function(e){

	if (this._parent.enableTooltip)
	    this._parent.hideTooltip();
    }

});
