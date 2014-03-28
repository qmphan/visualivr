
visualivr.Xml_loader = Class.extend({

    init:function(loadfilemenu) {

	this.loadfilemenu = loadfilemenu;
	this.app = loadfilemenu.app;
	this.view_manager = this.app.get_view_manager_instance();
	this.file_name;
	this.nodes = new Array();

	return (false);
    },

    set_file_name: function(name) {

	if (name != null) {

	    this.file_name = name;
	}
    },

    get_node_idx: function(block_name, file_name) {

	for (var i = 0; i < this.nodes.length; i++) {

	    if (this.nodes[i].is_set == false) {
		if (this.nodes[i].get_name() == block_name &&
		    this.nodes[i].get_file_name() == file_name)
		    return (i);
	    }
	}
	return (false);
    },

    node_exist: function(name, file_name) {

	for (var i = 0; i < this.nodes.length; i++) {

	    if (this.nodes[i].get_name() == name &&
		this.nodes[i].get_file_name() == file_name)
		return (i);
	}
	return (-1);
    },

    node_exists_in_file: function(file_path, blockname) {

	xmlobj = this.xmlobj;
	if (file_path.indexOf('?') != -1) {
	    var path = this.loadfilemenu.resolve_path(file_path);

	    xmlobj = $.ajax({

		url : path,
		type : "GET",
		async : false,
	    }).responseXML;
	}

	function	parse_tree(tree, blockname) {

	    var res = [];
	    $(tree).contents().each(function() {

		var name =  $(this).attr('name');
		if (blockname == name) {

		    search_ret = true;
		}
		if (parse_tree(this, blockname) == true) {
		    search_ret = true;
		}
	    });
	}

	search_ret = -1;
	parse_tree(xmlobj, blockname);

	return (search_ret);

    },

    create_node: function(node_name, block_name) {

	var _self = this;
	var block = this.get_block_instance(block_name, this.file_name);

	if (block == false || block.is_set == false) {

	    if (node_name == 'field') {

		if (block == false)
		    block = new visualivr.shape.inputBlock(block_name, visualivr.Config.INPUT_BLOCK_WIDTH, visualivr.Config.INPUT_BLOCK_HEIGHT);
		block.set_color(visualivr.Config.FIELD_BGCOLOR);
		block.setRadius(4);
		block.setImage(visualivr.Config.SCREEN_ICON, 16, 16);
	    }
	    else if (node_name == 'block') {

		if (block == false)
		    block = new visualivr.shape.inputBlock(block_name,visualivr.Config.INPUT_BLOCK_WIDTH, visualivr.Config.INPUT_BLOCK_HEIGHT);
		block.set_color(visualivr.Config.BLOCK_BGCOLOR);
		block.setRadius(40);
		block.setImage(visualivr.Config.TEXT_ICON, 16, 16);
	    }
	    else if (node_name == 'object') {

		if (block == false)
		    block = new visualivr.shape.inputBlock(block_name, visualivr.Config.INPUT_BLOCK_WIDTH, visualivr.Config.INPUT_BLOCK_HEIGHT);
		block.set_color(visualivr.Config.OBJECT_BGCOLOR);
		block.setRadius(20);
		block.setImage(visualivr.Config.BLUE_TEL_ICON, 16, 16);
	    }
	    var idx = this.get_node_idx(block_name, this.file_name);
	    if (idx != false) {
		this.nodes.splice(idx, 1, block);
	    }
	    else
		this.nodes.push(block);
	    parent_node = block;
	    block.set_app(_self.app);
	    block.setId(block_name);
	    block.set_name(block_name);
	    block.set_file_name(this.file_name);
	    block.setCssClass('node');
	    block.is_set = true;
	    parent_node = block;
	}

	return (block);
    },

    get_block_instance: function(name, filename) {

	for (var i = 0; i < this.nodes.length; i++) {

	    if (this.nodes[i].is_set != false &&
		this.nodes[i].get_name() == name &&
		this.nodes[i].get_file_name() == filename)
		return (this.nodes[i]);
	}
	return (false);
    },

    node_is_set: function(name, filename) {

	for (var i = 0; i < this.nodes.length; i++) {

	    if (this.nodes[i].is_set == false &&
		this.nodes[i].get_name() == name &&
		this.nodes[i].get_file_name() == filename)
		return (this.nodes[i]);
	}
	return (false);
    },

    parseNode:function (tree, parent_node) {

	_self = this;

	function	get_file_name_from_path(path) {

	    // get file name
	    var temp1 = path.split('?');
	    if (temp1.length <= 1)
		return (-1);
	    var temp2 = temp1.shift().split('/');
	    if (temp2.length <= 1)
		return (-1);
	    var file_name = temp2.pop();
	    return (file_name);
	}

	function	get_node_name_from_path(path) {

	    // get node name
	    var temp1 = path.split('?');
	    if (temp1.length <= 1)
		return (path);
	    var temp2 = temp1.pop().split('=');
	    if (temp2.length <= 1)
		return (path);
	    var node_name = temp2.pop();
	    return (node_name);
	}

	function	node_search(node_name, node_list) {

	    for (var i = 0; i < node_list.length; i++) {

		if (node_list[i].node_name == node_name)
		    return (true);
	    }
	    return (false);
	}

	var _self = this;

	$(tree).contents().each(function() {

	    if (this.nodeName == 'field' || this.nodeName == 'block' || this.nodeName == 'object') {

		var block_name = $(this).attr("name");

		parent_node = _self.create_node(this.nodeName, block_name);
		parent_node.type = this.nodeName;
	    }
	    else if (this.nodeName == 'goto') {

		// get comment
		var comment = $(this).attr('comment');
		var current_goto_dest = $(this).attr("next");
		if (current_goto_dest == null)
		    current_goto_dest = $(this).attr("nextitem");
		if (parent_node == null || current_goto_dest == null) {
		    return (false);
		}

		// from current file
		if ($(this).attr("nextitem") != null) {

		    var node_name = current_goto_dest;
		    var block = _self.node_exist(node_name, _self.file_name);
		    if (node_search(node_name, parent_node.out_link) == false) {
			if (block == -1) {

			    var block = new visualivr.shape.inputBlock(
				node_name, 0, 0
			    );
			    block.parent_node = parent_node;
			    block.set_app(_self.app);
			    block.setId(node_name);
			    block.set_name(node_name);
			    block.set_file_name(_self.file_name);
			    block.set_color(visualivr.Config.INVALID_BGCOLOR);
			    block.setDimension(80, 40);
			    block.setStroke(2);
			    //block.setImage(visualivr.Config.DENIED_ICON, 16, 16);
			    _self.nodes.push(block);
			    if (_self.node_exists_in_file(current_goto_dest, node_name) != true)
				block.is_set = true;
			    else
				block.is_set = false;
			}

			parent_node.out_link.push({

			    file_name : _self.file_name,
			    node_name : node_name,
			    comment : comment
			});
		    }
		}

		// from other file
		else {

		    // get file name
		    var file_name = get_file_name_from_path(current_goto_dest);
		    var node_name = get_node_name_from_path(current_goto_dest);

		    var block = _self.get_block_instance(node_name, file_name);

		    if (block == false) {
			if (_self.node_exists_in_file(current_goto_dest, node_name) != true) {

			    var block = new visualivr.shape.linkedBlock(node_name, 100, 50);
			    block.set_color(visualivr.Config.INVALID_BGCOLOR);
			    block.setDimension(80, 40);
			    //block.setImage(visualivr.Config.DENIED_ICON, 16, 16);
			}
			else {

			    var block = new visualivr.shape.linkedBlock(node_name, 100, 50);
			    block.set_color(visualivr.Config.LINKOUT_NODE_BGCOLOR);
			    block.setImage(visualivr.Config.LINKOUT_ICON, 16, 16);
			}
			block.parent_node = parent_node;
			block.set_app(_self.app);
			block.set_target_file_name(file_name);
			block.set_target_node_name(node_name);
			block.set_name(node_name);
			block.set_file_name(file_name);
			block.setCssClass('node');
			block.is_link = true;
			_self.nodes.push(block);
		    }

		    parent_node.get_links().push({

			file_name : file_name,
			node_name : node_name,
			comment : comment
		    });
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
			var current_obj_instance = _self.get_block_instance(list[i].node_name, list[i].file_name);
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

	this.nodes[0].column = x;
	for (var i = 0; i < this.nodes.length; i++) {
	    objList = this.nodes[i].out_link.slice();
	    rec_setColumn(objList, x + 1);
	}
    },

    displayBlocks:function() {

	var _self = this;
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

	var known_obj = new Array();
	function	count_node_child(node, column) {

	    var		nbr = 0;

	    for (var i = 0; i < node.out_link.length; i++) {
		var blockInstance = _self.get_block_instance(node.out_link[i].node_name, node.out_link[i].file_name);
		if ($.inArray(node.out_link[i].node_name, known_obj) != -1) {
		    continue;
		}
		known_obj.push(node.out_link[i].node_name);
		if (blockInstance.column == column + 1) {
		    nbr++;
		}
	    }
	    return (nbr);
	}

	var higherColumn = getHigherColumn();
	var x = visualivr.Config.MARGIN_LEFT + (higherColumn * visualivr.Config.NODE_GAP_X);
	var y;
	var deeper = 0;

	for (var i = higherColumn; i >= 0; i--) {

	    var node_child_nbr = 0;
	    var blockList = getBlocksListByColumn(i);
	    var res = 0;
	    known_obj = [];
	    last_col_deeper = deeper;
	    for (var j = 0; j < blockList.length; j++) {

		var opti = false;
		if (blockList[j].get_name() && blockList[j].get_name().length > visualivr.Config.MAX_CHAR_DISPLAY) {
		    var chars_to_display = blockList[j].get_name().substr(0, visualivr.Config.MAX_CHAR_DISPLAY);
		    blockList[j].label.setText(chars_to_display + "...");
		    blockList[j].enableTooltip = true;
		    blockList[j].setTooltipText(blockList[j].get_name());
		}
		else
		    blockList[j].label.setText(blockList[j].get_name());
		blockList[j].setBackgroundColor(blockList[j].color);

		var filename = blockList[j].get_file_name();
		var name = blockList[j].get_name();

		// optimisation du placement
		if (j != 0) { // si c'est le premier de la colonne, aucune opti a faire

		    var prev_node = blockList[j - 1];
		    res += count_node_child(prev_node, blockList[j].column);

		    if (j > res) {

		    }
		    else if (res > j) {
			opti = true;
			y = visualivr.Config.MARGIN_TOP + ((res - 1) * visualivr.Config.NODE_GAP_Y);
			deeper = res - 1;
		    }
		}
		// fin optimisation

		if (opti == false) {
		    y = visualivr.Config.MARGIN_TOP + (j * visualivr.Config.NODE_GAP_Y);
		    deeper++;
		}
		_self.view.addFigure(blockList[j], x, y);
	    }
	    x -= visualivr.Config.NODE_GAP_X;
	}
    },



    set_connections: function() {

      	for (var i = 0; i < this.nodes.length; i++) {
	    // create output port
	    for (var port_i = 0; port_i < this.nodes[i].out_link.length; port_i++) {
		var nbr_outputPort = this.nodes[i].outputPorts.getSize();

		if (nbr_outputPort == 0) {
		    var outputport = this.nodes[i].createPort('output');
		}
		var targetInstance = this.get_block_instance(this.nodes[i].out_link[port_i].node_name, this.nodes[i].out_link[port_i].file_name);
		if (targetInstance == false)
		    break;
		c = this.nodes[i].search_connection(targetInstance.name);
		if (c == false) {
		  var c = new visualivr.Connection(this.nodes[i].getOutputPort(0));
		  c.label.setBackgroundColor(visualivr.Config.LABEL_BGCOLOR);
		  c.label.setStroke(1);
		  var firstKeyAvailable = c.getFirstKeyAvailable();
		  c.setKey(firstKeyAvailable);
		  c.target_name = this.nodes[i].out_link[port_i].node_name;
		  var comment = this.nodes[i].out_link[port_i].comment;
		  if (comment != null)
		      c.setKey(comment);
		  else {
		    if (firstKeyAvailable != false)
			c.setKey(firstKeyAvailable);
		    else
			c.label.toggleVisible();
		  }
		  this.nodes[i].connections.push(c);
		}

		c.setRouter(this.app.get_router());
		c.setSource(this.nodes[i].getOutputPort(0));
		c.setTarget(targetInstance.getInputPort(0));

		this.view.addFigure(c);
	    }
	}
    },

    draw_connections:function () {

	for (var i = 0; i < this.nodes.length; i++) {

	    // create output port
	    for (var j = 0; j < this.nodes[i].connections.length; j++) {

		this.view.addFigure(this.nodes[i].connections[j]);

	    }
	}
    },

    repaint: function() {

      this.view.clear();
      this.set_node_position(xmlobj);
      this.displayBlocks();
      this.set_connections();
      this.draw_connections();
    },

    draw_file:function(xmlobj) {

      this.xmlobj = xmlobj;
      this.view_manager.select_last_tab();
      this.view = this.view_manager.get_last_view();
      this.parseNode(xmlobj, null);
      this.set_node_position(xmlobj);

      this.displayBlocks();
      this.set_connections();
      this.draw_connections();
    },

    get_file_name:function() { return (this.file_name); }
});
