
example.Layer = Class.extend({
	
	init:function(elementId, view){
		this.html = $("#"+elementId);
		this.view = view;
		
		// register this class as event listener for the canvas
		// CommandStack. This is required to update the state of 
		// the Undo/Redo Buttons.
		//
		view.getCommandStack().addEventListener(this);

		// Register a Selection listener for the state hnadling
		// of the Delete Button
		//
		view.addSelectionListener(this);
		
	},

	/**
	 * @method
	 * Called if the selection in the cnavas has been changed. You must register this
	 * class on the canvas to receive this event.
	 * 
	 * @param {draw2d.Figure} figure
	 */
	onSelectionChanged : function(figure){
        this._updateSelection();
	},
	
	/**
	 * @method
	 * Sent when an event occurs on the command stack. draw2d.command.CommandStackEvent.getDetail() 
	 * can be used to identify the type of event which has occurred.
	 * 
	 * @template
	 * 
	 * @param {draw2d.command.CommandStackEvent} event
	 **/
	stackChanged:function(event)
	{
	    this.html.html("");
	    var figures = this.view.getFigures();
	    figures.each($.proxy(function(i, figure){
	        this.html.append("<div class='layerElement' data-figure='"+figure.id+"' id='layerElement_"+figure.id+"' >"+figure.getUserData().name+"</div>");
	    },this),true);
	    
	    this.html.sortable({
	        axis:"y",
	        update: $.proxy(function( event, ui ) {
	            $(".layerElement").reverse().each($.proxy(function(i,e){
	                this.view.getFigure($(e).data("figure")).toFront();
	            },this));
	        },this)
	    });

        $(".layerElement").on("click", $.proxy(function(event){
           var figure =this.view.getFigure($(event.target).data("figure"));
           this.view.setCurrentSelection(figure);
        },this));

        this._updateSelection();
	},
	
	_updateSelection: function(){
        $(".layerElement").removeClass("layerSelectedElement");
	    var selection = this.view.getSelection();
	    selection.each(function(i,e){
	        $("#layerElement_"+e.id).addClass("layerSelectedElement");
	    });
	}
});