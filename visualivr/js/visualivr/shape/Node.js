/**
 * @class example.connection_labeledit.LabelConnection
 *
 * A simple Connection with a label which sticks in the middle of the connection..
 *
 * @author Andreas Herz
 * @extend draw2d.Connection
 */

visualivr.shape.Choices = draw2d.shape.node.End.extend({

    init:function(width, height)
    {
	this._super();
	this.setDimension(width, height);
	this.label = new visualivr.Label();
	this.label.setColor("#0d0d0d").setFontColor("#0d0d0d");
	this.label.setText('default');
	this.addFigure(this.label, new draw2d.layout.locator.CenterLocator(this));
	this.label.installEditor(new draw2d.ui.LabelInplaceEditor());
	this.init_default();
	this.tooltip = null;
	this.enableTooltip = false;
	this.tooltipText = '';
    },

    init_default:function() {

	this.typeNode='choices';
	this.setDeleteable(true);
	this.bufferData = [];
	this.OutputData = [];
	this.maxOutputPortNumber = 10;
	this.allowed_char = "0123456789*#";
    },

    bufferData_update:function() {

	this.bufferData = [];
	this.bufferData = this.OutputData.slice();
	this.lastVal = [];
	this.lastVal = this.OutputData.slice();
    },

    apply_modification:function() {
	this.OutputData = [];
	this.OutputData = this.bufferData.slice();
    },

    draw_option:function(table) {

	var _self = this;
	var blacklist = [];

	$(table).find('tr:gt(0)').remove();
	if (this.bufferData.length > 0) {

	    for (var i = 0; i < this.bufferData.length; i++) {
		var select = $('<select>', {
		    style : "width: 100px;text-align:center;display:inline;",
		});

		for (var j = -1; j < this.allowed_char.length; j++) {

		    if ($.inArray(this.allowed_char[j], blacklist) == -1) {

			if (j == -1) {

			    var option = $('<option>', {
				text : "select",
				value : "new",
			    });
			}
			else {

			    var option = $('<option>', {
				text : this.allowed_char[j],
				value : this.allowed_char[j],
			    });
			}

			if (this.allowed_char[j] == this.bufferData[i]) {

			    option.attr('selected', 'selected');
			    blacklist.push(this.allowed_char[j]);
			}

			select.append(option);
		    }
		    else {

			if (this.allowed_char[j] == this.bufferData[i])
			    this.bufferData[i] = 'new';
		    }
		}
		select.data('id', i);
		table.append($('<tr>').append($('<td>').append("Choice " + i)).append($('<td>').append(select)));

		$(select).on('change', function(e) {

		    var select_element = $(e.target).data('id');

		    _self.bufferData[select_element] = e.target.value;
		    _self.draw_option(table);
		});
	    }
	}
    },

    setOutput:function()
    {
	var _self = this;

	this.bufferData_update();

	var spinner = $('<input>', {
	    type : "text",
	    style : "margin:0px 10px 0px 10px; width:100px;text-align:center;display:inline;",
	    value : this.OutputData.length
	});

	var dialogArray = [];
	dialogArray.push({ key : "Set ouput", value : spinner});
	var dialog = new visualivr.Dialog();
	dialog.push_table(dialogArray);
	dialog.start();
	spinner.spinner({min:0,max:this.maxOutputPortNumber});

	// SPINNER CHANGE EVENT
	$(spinner).on('change', function(e) {
	    var newValue = e.target.value;

	    console.debug(newValue);
	    if (newValue > _self.bufferData.length) {
		_self.bufferData.push('new');
	    }
	    else {
		while (_self.bufferData.length > newValue)
		    _self.bufferData.pop();
	    }
	    _self.draw_option(dialog.get_table_instance());
	});
	$('.ui-spinner-button').click(function() {
	    $(this).siblings('input').change();
	});

	this.draw_option(dialog.get_table_instance());

	// SUBMIT EVENT
	dialog.set_submit_action(function() {

	    console.debug(_self.bufferData);
	    if ($.inArray('new', _self.bufferData) == -1) {
		_self.apply_modification();
		dialog.close_dialog();
	    }

	    if (_self.outputPorts.getSize() == 0 && _self.OutputData.length > 0) {
		_self.createPort("output");
		_self.repaint();
	    }

	    else if (_self.outputPorts.getSize() > 0 && _self.OutputData.length == 0) {
		_self.removePort(_self.outputPorts.get(0));
	    }

	    var connections = _self.getConnections();
	    for (var i = 0; i < connections.getSize(); i++) {
		for (var j = 0; j < _self.bufferData.length; j++) {
		    if (_self.lastVal[j] == connections.get(i).key)
			connections.get(i).setKey(_self.OutputData[j]);
		}
	    }
	});

	// CANCEL EVENT
	dialog.set_cancel_action(function() {

	    dialog.close_dialog();
	});
    },

    onContextMenu:function(x,y){
	$.contextMenu({
	    selector: 'body',
	    events: {
		hide:function(){ $.contextMenu( 'destroy' ); }
	    },
	    callback: $.proxy(function(key, options) {

		switch(key) {

		    case "set_number":
			this.setOutput();
		    break;
		    case "delete":
			var cmd = new draw2d.command.CommandDelete(this);
		    this.getCanvas().getCommandStack().execute(cmd);
		    default:
			break;
		}
	    },this),
	    x:x,
	    y:y,
	    items:
		{
		"set_number": {name: "Set output port"},
		"delete": {name: "Delete"}
	    }
	});
    },

    onMouseEnter: function(){

	if (this.enableTooltip == true) {

	    this.showTooltip();
	}
	else {
	    //console.debug('no');
	}
    },

    onMouseLeave: function(){
	this.hideTooltip();
    },

    setPosition: function(x,y){
	this._super(x,y);
	this.positionTooltip();
    },

    hideTooltip:function(){

	if (this.tooltip != null) {
	    this.tooltip.remove();
	    this.tooltip = null;
	}
    },

    showTooltip:function(){

	this.tooltip =  $('<div class="tooltip">' + this.tooltipText + '</div>').appendTo($('#canvas'));
	this.positionTooltip();
    },

    setTooltipText:function(text) {

	this.tooltipText = text;
    },

    getTooltipText:function() {

	return (this.tooltipText);
    },

    positionTooltip: function() {

	if(this.tooltip === null) {
	    return;

	    var width =  this.tooltip.outerWidth(true);
	    var tPosX = this.getAbsoluteX()+this.getWidth()/2-width/2+8;
	    var tPosY = this.getAbsoluteY()+this.getHeight() + 50;
	    this.tooltip.css({'top': tPosY, 'left': tPosX});
	}
    },

    onDoubleClick: function() {

	return (false);
    },

    onDrag : function( dx,  dy, dx2, dy2) {

      this.editPolicy.each($.proxy(function(i,e){
            if(e instanceof draw2d.policy.figure.DragDropEditPolicy){
                var newPos = e.adjustPosition(this,this.ox+dx,this.oy+dy);
                dx = newPos.x-this.ox;
                dy = newPos.y-this.oy;
            }
      },this));

      this.x = this.ox+dx;
      this.y = this.oy+dy;

      // Adjust the new location if the object can snap to a helper
      // like grid, geometry, ruler,...
      //
      if(this.getCanSnapToHelper())
      {
        var p = new draw2d.geo.Point(this.x,this.y);
        p = this.getCanvas().snapToHelper(this, p);
        this.x = p.x;
        this.y = p.y;
      }

      this.setPosition(this.x, this.y);

      // notify all installed policies
      //
      this.editPolicy.each($.proxy(function(i,e){
          if(e instanceof draw2d.policy.figure.DragDropEditPolicy){
              e.onDrag(this.canvas, this);
          }
      },this));
    }
});

