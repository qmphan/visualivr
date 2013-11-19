// declare the namespace for visualivr
var visualivr = {"shape": {}};

/**
 * 
 * The **GraphicalEditor** is responsible for layout and dialog handling.
 * 
 * @author Andreas Herz
 * @extends draw2d.ui.parts.GraphicalEditor
 */
visualivr.Application = Class.extend(
{
    NAME : "visualivr.Application", 

    /**
     * @constructor
     * 
     * @param {String} canvasId the id of the DOM element to use as paint container
     */
    init : function()
    {
	      this.view    = new visualivr.View("canvas");
          this.toolbar = new visualivr.Toolbar("toolbar",  this.view );
	      this.defaultRouter = new draw2d.layout.connection.ManhattanBridgedConnectionRouter();
	       
	       // layout FIRST the body
	       this.appLayout = $('#container').layout({
	   	     west: {
	              resizable:true,
	              closable:true,
	              resizeWhileDragging:true,
	              paneSelector: "#navigation"
	            },
	            center: {
	              resizable:true,
	              closable:true,
	              resizeWhileDragging:true,
	              paneSelector: "#content"
	            }
	       });
	      
	       //
	       this.contentLayout = $('#content').layout({
	   	     north: {
	              resizable:false,
	              closable:false,
                  spacing_open:0,
                  spacing_closed:0,
                  size:50,
	              paneSelector: "#toolbar"
	            },
	            center: {
	              resizable:false,
	              closable:false,
                  spacing_open:0,
                  spacing_closed:0,
	              paneSelector: "#canvas"
	            }
	       });
	       
	},

	createConnection: function(sourcePort, targetPort){
	    var conn = new draw2d.Connection();
	    conn.setRouter(this.defaultRouter);
	    conn.setStroke(3);
	    return conn;
	}


});
