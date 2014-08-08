
var TimerFigure = draw2d.shape.basic.Label.extend({

    init : function(attr)
    {
    	this.counter = 0;
    	
        this._super($.extend({text:"Counter: 0"},attr));
        
        this.startTimer(10);
        
    },

    /**
     * @method
     * private callback method for the internal timer.
     * 
     * @private
     */
    onTimer:function(){
    	this.counter+=4;
    	
        this.setText("Counter: "+(this.counter));
        this.setRotationAngle(this.counter%360);
    }

});
