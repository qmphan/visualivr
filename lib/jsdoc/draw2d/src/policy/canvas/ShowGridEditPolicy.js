/*****************************************
 *   Library is under GPL License (GPL)
 *   Copyright (c) 2012 Andreas Herz
 ****************************************/
/**
 * @class draw2d.policy.canvas.ShowGridEditPolicy
 * 
 * Just to paint a grid in the background. 
 * 
 * 
 * @author Andreas Herz
 * 
 * @extends draw2d.policy.canvas.CanvasPolicy
 */
draw2d.policy.canvas.ShowGridEditPolicy = draw2d.policy.canvas.CanvasPolicy.extend({

    NAME : "draw2d.policy.canvas.ShowGridEditPolicy",
    
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
	}
    

});