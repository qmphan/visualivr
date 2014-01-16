
example.Toolbar = Class.extend({
	
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
		
		// Inject the UNDO Button and the callbacks
		//
		this.undoButton  = $("<button class=\"btn btn-default\" >Undo</button>");
		this.html.append(this.undoButton);
		this.undoButton.on("click",$.proxy(function(){
		       this.view.getCommandStack().undo();
		},this)).button( "option", "disabled", true );

		// Inject the REDO Button and the callback
		//
		this.redoButton  = $("<button class=\"btn btn-default\" >Redo</button>");
		this.html.append(this.redoButton);
		this.redoButton.on("click",$.proxy(function(){
		    this.view.getCommandStack().redo();
		},this)).button( "option", "disabled", true );
		
		this.delimiter  = $("<span class='toolbar_delimiter'>&nbsp;</span>");
		this.html.append(this.delimiter);

		// Inject the DELETE Button
		//
		this.deleteButton  = $("<button class=\"btn btn-default\" >Delete</button>");
		this.html.append(this.deleteButton);
		this.deleteButton.on("click",$.proxy(function(){
			var node = this.view.getCurrentSelection();
			var command= new draw2d.command.CommandDelete(node);
			this.view.getCommandStack().execute(command);
		},this)).button( "option", "disabled", true );
		
		
		this.delimiter  = $("<span class='toolbar_delimiter'>&nbsp;</span>");
		this.html.append(this.delimiter);
	
		var buttonGroup=$("<div class=\"btn-group\"></div>");
		this.html.append(buttonGroup);
		
		// Inject the ZoomIn Button and the callbacks
		//
		this.zoomInButton  = $("<button class=\"btn btn-default\" >Zoom In</button>");
		buttonGroup.append(this.zoomInButton);
		this.zoomInButton.on("click",$.proxy(function(){
		      this.view.setZoom(this.view.getZoom()*0.7,true);
		},this));

		// Inject the OneToOne Button
		//
		this.resetButton  = $("<button class=\"btn btn-default\" >1:1</button>");
		buttonGroup.append(this.resetButton);
		this.resetButton.on("click",$.proxy(function(){
		    this.view.setZoom(1.0, true);
		},this));
		
		// Inject the ZoomOut Button and the callback
		//
		this.zoomOutButton  = $("<button class=\"btn btn-default\" >Zoom Out</button>");
		buttonGroup.append(this.zoomOutButton);
		this.zoomOutButton.on("click",$.proxy(function(){
            this.view.setZoom(this.view.getZoom()*1.3, true);
		},this));
		
	},

	/**
	 * @method
	 * Called if the selection in the cnavas has been changed. You must register this
	 * class on the canvas to receive this event.
	 * 
	 * @param {draw2d.Figure} figure
	 */
	onSelectionChanged : function(figure){
		this.deleteButton.button( "option", "disabled", figure===null );
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
		this.undoButton.button( "option", "disabled", !event.getStack().canUndo() );
		this.redoButton.button( "option", "disabled", !event.getStack().canRedo() );
	}
});