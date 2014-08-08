
TriangleFigure = draw2d.VectorFigure.extend({

    init : function(attr)
    {
        this._super($.extend({width:100, height:100},attr));
    },

  
    /**
     * @inheritdoc
     **/
    repaint : function(attributes)
    {
        if(this.repaintBlocked ===true && this.shape===null){
            return;
        }
        

        this._super($.extend({path  : ' M '+this.getAbsoluteX()+' '+this.getAbsoluteY()+  // absolute move to upper left
					                  ' l '+(this.getWidth()/2)+' '+this.getHeight()+     // relative line to bottom middle
					                  ' l '+this.getWidth()/2+' -'+this.getHeight()+      // relative line to top right corner
					                  ' Z'}, attributes));                                // close the path

        return this;
    },

    /**
     * @inheritdoc
     */
    createShapeElement : function()
    {
       return this.canvas.paper.path("");
    }

});
