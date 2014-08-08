/*****************************************
 *   Library is under GPL License (GPL)
 *   Copyright (c) 2012 Andreas Herz
 ****************************************/
/**
 * @class draw2d.shape.basic.Diamond
 * A Diamond Figure.
 * 
 * See the example:
 *
 *     @example preview small frame
 *     
 *     var d1 =  new draw2d.shape.basic.Diamond({x:10,y:10});
 *     var d2 =  new draw2d.shape.basic.Diamond({x:100,y:10, bgColor:"#f0f000", alpha:0.7, width:100, height:60});
 *     
 *     canvas.add(d1);
 *     canvas.add(d2);
 *     
 *     canvas.setCurrentSelection(d2);
 *     
 * @author Andreas Herz
 * @extends draw2d.VectorFigure
 */
draw2d.shape.basic.Diamond = draw2d.VectorFigure.extend({
    NAME : "draw2d.shape.basic.Diamond",

    /**
     * @constructor
     * Creates a new figure element which are not assigned to any canvas.
     * 
     * @param {Object} [attr] the configuration of the shape
     */
    init: function( attr) {
      this._super($.extend({bgColor:"#00a3f6",color:"#1B1B1B"},attr));

    },

    /**
     * @inheritdoc
     **/
    repaint : function(attributes)
    {
        if(this.repaintBlocked===true || this.shape===null){
            return this;
        } 
        
        attributes= attributes || {};
        
        var box = this.getBoundingBox();
        var path = ["M",box.x+(box.w/2)," ",box.y];         // Go to the top center..
        path.push("L", box.x+box.w, " ", box.y+box.h/2);    // ...draw line to the right middle
        path.push("L", box.x+box.w/2, " ", box.y+ box.h);   // ...bottom center...
        path.push("L", box.x, " ", box.y+box.h/2);          // ...left middle...
        path.push("L", box.x+box.w/2, " ", box.y);          // and close the path
        attributes.path = path.join("");

        this._super(attributes);
        
        return this;
    },


    /**
     * @inheritdoc
     */
    createShapeElement:function()
    {
      // create dummy line
      return this.canvas.paper.path("M0 0L1 1");
    }
    
});