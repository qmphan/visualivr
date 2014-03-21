visualivr.Label = draw2d.shape.basic.Label.extend({

    init:function(text)
    {
	this._super();
	this.setText(text);
	this.labelIsVisible = true;
    },

    toggleVisible:function()
    {
	if (this.labelIsVisible == true)
	    {
		//console.debug("set false");
		this.setVisible(false);
		this.labelIsVisible = false;
	    }
	    else
		{
		    this.setVisible(true);
		    this.labelIsVisible = true;
		}
    }
});
