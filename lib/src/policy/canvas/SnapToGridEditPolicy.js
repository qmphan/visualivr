/*****************************************
 *   Library is under GPL License (GPL)
 *   Copyright (c) 2012 Andreas Herz
 ****************************************/
/**
 * @class draw2d.policy.canvas.SnapToGridEditPolicy
 * 
 * A helper used to perform snapping to a grid, which is specified on the canvas via the various 
 * properties defined in this class. 
 * 
 * 
 * @author Andreas Herz
 * 
 * @extends draw2d.policy.canvas.SnapToEditPolicy
 */
draw2d.policy.canvas.SnapToGridEditPolicy = draw2d.policy.canvas.SnapToEditPolicy.extend({

    NAME : "draw2d.policy.canvas.SnapToGridEditPolicy",
    
    GRID_COLOR  : "#e0e0f0",
    GRID_WIDTH  : 10,
    
    /**
     * @constructor 
     * Creates a new constraint policy for snap to grid
     * 
     * @param {Number} grid the grid width of the canvas
     */
    init: function( grid){
        this._super();
        this.canvas = null;
        this.lines = null;
        
        if(grid){
            this.grid = grid;
        }
        else{
            this.grid = this.GRID_WIDTH;
        }
	
	    // generate the background pattern with an data URL GIF image. This is much faster than draw
	    // the pattern via the canvas and the raphael.circle method
	    //
	    var mypixels = Array(this.grid*this.grid);
	    // set the pixel at the coordinate [0,0] as opaque.       
	    for(var x=0; x<this.grid; x++){
    	    mypixels[x] = 1;
	    }
    	for(var y=0; y<(this.grid*this.grid); y+=this.grid){
    	    mypixels[y] = 1;
    	}
	    this.imageDataURL = this.createMonochromGif(this.grid, this.grid, mypixels,  "#eee0f0");
	},
	
	onInstall: function(canvas){
	    this.canvas = canvas;
	    this.oldBg =  this.canvas.html.css("background-image");
	    $(canvas.paper.canvas).css({"background-image": "url('"+this.imageDataURL+"')"});
	},
	
	onUninstall: function(canvas){
	    this.canvas = null;
	    $(canvas.paper.canvas).css({"background-image": this.oldBg});
	},

    /**
     * @method
     * Applies a snapping correction to the given result. 
     * 
     * @param figure
     * @param {draw2d.geo.Point} pos
     * @returns {draw2d.geo.Point} the contraint position of the figure
     * @since 2.3.0
     */
    snap: function(canvas, figure, pos){
        
        var snapPoint = figure.getSnapToGridAnchor();

        pos.x= pos.x+snapPoint.x;
        pos.y= pos.y+snapPoint.y;

       
        pos.x = this.grid*Math.floor(((pos.x + this.grid/2.0) / this.grid));
        pos.y = this.grid*Math.floor(((pos.y + this.grid/2.0) / this.grid));
        
        pos.x= pos.x-snapPoint.x;
        pos.y= pos.y-snapPoint.y;
        
        return pos;
    }
});