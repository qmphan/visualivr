
visualivr.Xml_loader = Class.extend({

    init:function(app) {

	this.app = app;
	this.view_manager = app.get_view_manager_instance();
	this.file_name;
	this.list_obj = false;
	this.nodes = [];

	return (false);
    },

    set_file_name: function(name) {

	if (name != null) {

	    this.file_name = name;
	}
    },

    createNode: function(block_name) {

	var block = new visualivr.shape.inputBlock(
	    block_name,
	    visualivr.Config.INPUT_BLOCK_WIDTH,
	    visualivr.Config.INPUT_BLOCK_HEIGHT
	);

	return (block);
    },

    get_block_instance_by_name: function(name) {

	for (var i = 0; i < this.nodes.length; i++) {

	    if (this.nodes[i].get_name() == name)
		return (this.nodes[i]);
	}
	return (false);
    },

    parseNode:function (tree, parent_node) {

	var _self = this;

	$(tree).contents().each(function() {

	    console.debug(this.nodeName);

	    if (this.nodeName == 'field') {

		var block_name = $(this).attr("name");
		var block = _self.createNode(block_name);
		_self.nodes.push(block);
		parent_node = block;
		block.set_color(visualivr.Config.NODE_BGCOLOR);
		block.setId(block_name);
		block.set_name(block_name);
		block.setCssClass('node');
	    }
	    else if (this.nodeName == 'block') {

	    }
	    else if (this.nodeName == 'object') {

	    }
	    else if (this.nodeName == 'goto') {

		var current_goto_dest = $(this).attr("dest");
		if (parent_node == null) {

		    console.debug('goto but no parent, abort.');
		}
		if (current_goto_dest == null)
		    return (false);
		// from current file
		if (current_goto_dest.indexOf('vxml') == -1) {

		    parent_node.get_links().push({

			file_name : _self.file_name,
			node_name : current_goto_dest
		    });
		}
		// from other file
		else {
		}
	    }

	    _self.parseNode(this, parent_node);
	});
    },

    set_node_position: function() {

	var _self = this;
	var known_obj = []; // prevent stack overflow.

	function rec_setColumn(list, x) {
	    // stop condition
	    if  (list.length == 0)
		return ;
	    else
		{
		    var objList = [];
		    for (var i = 0; i < list.length; i++) {
			var current_obj_instance = _self.get_block_instance_by_name(list[i].node_name);
			if (current_obj_instance != false && $.inArray(current_obj_instance, known_obj) == -1) {

			    current_obj_instance.column = x;
			    for (var j = 0; j < current_obj_instance.out_link.length; j++) {
				objList.push(current_obj_instance.out_link[j]);
			    }
			    known_obj.push(current_obj_instance);
			}
		    }
		    rec_setColumn(objList, x + 1);
		}
	}

	var columnList = [];
	var objList = [];
	var x = 0;

	columnList.push(this.list_obj[0]);
	this.nodes[0].column = x;
	objList = this.nodes[0].out_link.slice();
	rec_setColumn(objList, x + 1);
    },

    displayBlocks:function() {

	_self = this;
	function getHigherColumn() {

	    var n = _self.nodes[0].column;
	    for (var i = 0; i < _self.nodes.length; i++) {
		if (_self.nodes[i].column > n)
		    n = _self.nodes[i].column;
	    }
	    return (n);
	}

	function getBlocksListByColumn(column) {

	    var listBlocks = [];

	    for (var i = 0; i < _self.nodes.length; i++) {
		if (_self.nodes[i].column == column)
		    listBlocks.push(_self.nodes[i]);
	    }
	    return (listBlocks);
	}

	var higherColumn = getHigherColumn();
	var x = visualivr.Config.MARGIN_LEFT;
	var y;

	for (var i = 0; i <= higherColumn; i++) {

	    var blockList = getBlocksListByColumn(i);
	    y = visualivr.Config.MARGIN_TOP;
	    for (var j = 0; j < blockList.length; j++) {

		blockList[j].label.setText(blockList[j].get_name());
		blockList[j].setBackgroundColor(blockList[j].color);
		_self.view.addFigure(blockList[j], x, y);
		y += visualivr.Config.NODE_GAP_Y;
	    }
	    x += visualivr.Config.NODE_GAP_X;
	}
    },

    draw_connections:function () {

	for (var i = 0; i < this.nodes.length; i++) {

	    // create output port
	    for (var port_i = 0; port_i < this.nodes[i].out_link.length; port_i++) {

		var nbr_outputPort = this.nodes[i].outputPorts.getSize();

		if (nbr_outputPort == 0) {
		    var outputport = this.nodes[i].createPort('output');
		    this.nodes[i].repaint();
		}
		var targetInstance = this.get_block_instance_by_name(this.nodes[i].out_link[port_i].node_name);
		if (targetInstance == false)
		    break;
		var c = new visualivr.Connection(this.nodes[i].getOutputPort(0));
		var firstKeyAvailable = c.getFirstKeyAvailable();

		if (firstKeyAvailable == false)
		    c.label.toggleVisible();
		c.setKey(false);
		c.setRouter(this.app.get_router());
		c.setStroke(3);
		c.setSource(this.nodes[i].getOutputPort(0));
		c.setTarget(targetInstance.getInputPort(0));
		this.view.addFigure(c);
	    }
	}
    },

    draw_file:function(xmlobj) {

	this.view_manager.select_last_tab();
	this.view = this.view_manager.get_last_view();
	console.debug('parse node ');
	this.parseNode(xmlobj, null);
	console.debug(' -- nodes --');
	console.debug(this.nodes);
	this.set_node_position(xmlobj);
	this.displayBlocks();
	this.draw_connections();
    },

    get_file_name:function() { return (this.file_name); }
});