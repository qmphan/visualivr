
visualivr.Xml_file_loader = Class.extend({

	init:function(app) {

		this.app = app;
		this.list_obj = [];
		this.known_obj = [];
	},

	getBlockInstanceById:function(id) {

		for (var i = 0; i < this.list_obj.length; i++) {
			if (id == this.list_obj[i].blockid)
				return (this.list_obj[i]);
		}
		return (false);
	},

	createNode:function(id) {

		var block = new visualivr.shape.inputBlock(
			id, 
			visualivr.Config.INPUT_BLOCK_WIDTH, 
			visualivr.Config.INPUT_BLOCK_HEIGHT
		);

		return (block);
	},

	parseNode:function (tree) {

		_self = this;
		$(tree).contents().each(function() {
			if (this.nodeType == 3) { // text node
				return ;
			}
			else
			{
				// a node
				if (this.nodeName == 'input') {

					var blockid = $(this).attr("id");
					var block = _self.createNode(blockid);
					block.blockid = blockid;
					block.column = null;
					block.setId(blockid);
					block.color = visualivr.Config.NODE_BGCOLOR;
					_self.list_obj.push(block);
				}
				// a link to another node (possibly in another file)
				else if (this.nodeName == 'goto') {

					var parent_name = $(tree).attr('id');
					var current_goto_dest = $(this).attr("dest");
					var parent_obj = _self.getBlockInstanceById(parent_name);

					if (current_goto_dest.indexOf('vxml') == -1) {

						parent_obj.out_link.push({ file_name : 0, node_name : current_goto_dest });
					}
					// link to another file. syntax : "vxml:///nodeName@fileName.xml"
					else {

					      // get file name
					      var file_name = current_goto_dest;
					      var pos = current_goto_dest.indexOf('@');
					      var file_name = current_goto_dest.substr(pos + 1, current_goto_dest.length - pos);

					      // get node name
					      var pos = current_goto_dest.indexOf('@') - 8;
					      var node_name = current_goto_dest.substr(8, pos);


					      var blockid = file_name + '.' + node_name;
					      var block = new visualivr.shape.linkedBlock(blockid, 100, 50);
					      block.app = _self.app;
					      block.target_file_name = file_name;
					      block.target_node_name = node_name;
					      block.column = null;
					      block.color = visualivr.Config.LINKOUT_NODE_BGCOLOR;
					      _self.list_obj.push(block);
					      parent_obj.out_link.push({ file_name : file_name, node_name : blockid });
					      console.debug('block id : ' + block.blockid);
					}

    				parent_obj.keyValue = $(this).attr("value");
    			}
				// optional : set up value for the current node
    			else if (this.nodeName == 'data') {

    				var parent_name = $(tree).attr('id');
    				var parent_obj = _self.getBlockInstanceById(parent_name);
    				var current_data_value = $(this).attr("value");

    				parent_obj.OutputData.push(current_data_value);
    			}
    			_self.parseNode(this);
    		}
    	});
	},

	drawConnection:function () {

		for (var i = 0; i < this.list_obj.length; i++) {

			// create output port
			for (var port_i = 0; port_i < this.list_obj[i].out_link.length; port_i++) {
				var nbr_outputPort = this.list_obj[i].outputPorts.getSize();

				if (nbr_outputPort == 0) {
					var outputport = this.list_obj[i].createPort('output');
					this.list_obj[i].repaint();
				}
				var targetInstance = this.getBlockInstanceById(this.list_obj[i].out_link[port_i].node_name);
				if (targetInstance == false)
				{
					break;
				}

					var c = new visualivr.Connection(this.list_obj[i].getOutputPort(0));
					var firstKeyAvailable = c.getFirstKeyAvailable();

					if (firstKeyAvailable == false)
						c.label.toggleVisible();
					c.setKey(false);
					c.setRouter(new draw2d.layout.connection.MazeConnectionRouter());
					c.setStroke(3);
					c.setSource(this.list_obj[i].getOutputPort(0));
					c.setTarget(targetInstance.getInputPort(0));
					this.view.addFigure(c);
			}
		}
	},

	// give a column number for each node.
	createVirtualColumn:function() {

		_self = this;

		var known_obj = []; // prevent stack overflow.
		function rec_setColumn(list, x) {

			// stop condition
			if  (list.length == 0)
				return ;
			else
			{
				var objList = [];
				for (var i = 0; i < list.length; i++) {
					var current_obj_instance = _self.getBlockInstanceById(list[i].node_name);
					if (current_obj_instance != false && $.inArray(current_obj_instance, known_obj) == -1) {

							current_obj_instance.column = x;
							for (var j = 0; j < current_obj_instance.out_link.length;  j++) {
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
		this.list_obj[0].column = x;
		objList = this.list_obj[0].out_link.slice();
		rec_setColumn(objList, x + 1);
	},

	displayBlocks:function() {

		_self = this;
		function getHigherColumn() {

			var n = _self.list_obj[0].column;
			for (var i = 0; i < _self.list_obj.length; i++) {
				if (_self.list_obj[i].column > n)
					n = _self.list_obj[i].column;
			}
			return (n);
		}

		function getBlocksListByColumn(column) {
			var listBlocks = [];

			for (var i = 0; i < _self.list_obj.length; i++) {
				if (_self.list_obj[i].column == column)
					listBlocks.push(_self.list_obj[i]);
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

				blockList[j].label.setText(blockList[j].blockid);
				blockList[j].setBackgroundColor(blockList[j].color);
				_self.view.addFigure(blockList[j], x, y);
				y += visualivr.Config.NODE_GAP_Y;
			}
			x += visualivr.Config.NODE_GAP_X;
		}
	},

	draw_file:function(xmlobj) {

		this.app.tab_manager.select_last_tab(); 
		this.view = this.app.view_manager.get_last_view	();
		this.app.tab_manager.refresh_tabs();
		this.parseNode(xmlobj); // store all nodes

		this.createVirtualColumn(); // set column number for each node

		this.displayBlocks();
		this.drawConnection();
	//	this.parseFile();

	},

	set_file_name:function(name) {

		if (name != null) {

			this.file_name = name;
		}
	},

	get_file_name:function() { return (this.file_name); }
});
