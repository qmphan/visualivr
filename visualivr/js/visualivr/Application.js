
visualivr.Application = Class.extend(
    {

    NAME : "visualivr.Application",

    init : function()
    {
	this.view_manager = new visualivr.View_manager('canvas', this);
	this.view_manager.create_view("Draw");
	this.view_manager.select_tab_by_idx(0);

	this.toolbar = new visualivr.Toolbar("toolbar", this.view_manager.tabs[0].view);

	// create bottom menu
	this.bottom_menu = new visualivr.Menu(); // bottom menu
	var file_loader = new visualivr.File_loader(this); // file loader (<input type="file">)
	this.bottom_menu.add_menu_item(file_loader); // push the "file loader" into the bottom menu
	this.addMenu('bottom_menu', this.bottom_menu); // position bottom_menu on the screen

	// set connection layout
	this.defaultRouter = new draw2d.layout.connection.MazeConnectionRouter();

	this.setLayout();
    },

    // create a connection between 2 nodes.
    createConnection: function(sourcePort, targetPort){

	var conn = new visualivr.Connection(sourcePort);
	var sourcePortType = sourcePort.getParent().typeNode;
	conn.setRouter(this.defaultRouter);
	conn.setStroke(3);
	if (sourcePortType == 'choices') { // connection from "choices" node to another node

	    // set label with the first available key.
	    var firstKeyAvailable = conn.getFirstKeyAvailable();
	    if (firstKeyAvailable != false) {
		conn.setKey(firstKeyAvailable);
		conn.setKeyDialog();
	    }
	    else
		conn.setKey('no key available');
	}
	else if (sourcePortType == 'start') // toggle off label. (useless in this case)
	    conn.label.toggleVisible();
	return conn;
    },

    // add menu obj to DOM
    addMenu:function(locator, menu) {

	$('#' + locator).append(menu.getHtml());
    },

    setLayout:function() {

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
		resizable:true,
		closable:false,
		spacing_open:0,
		spacing_closed:0,
		allowOverflow:true,
		paneSelector: "#canvas"
	    },

	    south: {
		resizable:false,
		closable:false,
		spacing_open:0,
		spacing_closed:0,
		paneSelector: "#bottom_menu"
	    }
	});

	var $Tabs, outerLayout, innerLayout, innerWestLayout, middleLayout;

	var tabLayoutSettings = {
	    center__paneSelector:	".tab-center"
	};

	function resizeTabLayout ( ui ) {
	    var $TabPanel = $(ui.panel);

	    if ($TabPanel.data("layoutContainer")) {
		var layoutInstance = $TabPanel.layout();
		layoutInstance.resizeAll();
	    }
	    else if (ui.index > 0) {
		$TabPanel.layout( tabLayoutSettings );
	    }
	}

	outerLayout = $("body").layout( {
	    resizable:				false
			,	closable:				false
			,	center__paneSelector:	"#canvas"
			,	center__onresize:		"middleLayout.resizeAll"
	} );
    },

    get_view_manager_instance: function() {

	return (this.view_manager);
    },

    get_bottom_menu_instance: function() {

	return (this.bottomMenu);
    }

});
