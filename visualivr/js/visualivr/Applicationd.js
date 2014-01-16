
visualivr.Application = Class.extend(
{

	NAME : "visualivr.Application",

	init : function()
	{
		_self = this;
		this.views = [];
		this.createView();

		this.currentTab = 0;
		this.toolbar = new visualivr.Toolbar("toolbar", this.views[0]);

		// create tabs item
		app = this;
		var tabsList = $('<ul>');
		for (var i = 0; i < app.views.length; i++) {
			tabsList.append($('<li>').append($('<a>', {
				href : "#tab" + i, text : "Item" + i
			})));
		}

		// create "add tab" tab
		var addTabsButton = $('<li>').append($('<a>', { href : "#addTabs", text : "+" }));
		tabsList.append(addTabsButton);

		// append tabs item list to canvas
		$('#canvas').prepend(tabsList);


		// enable tabs
		$Tabs = $("#canvas")
		.tabs({
			closable: true,
			// when tab is selected
			beforeActivate : function(evt, ui) {
				_self = app;
				//console.debug(ui.newPanel);
				_self.setCurrentTab($(ui.newPanel).data('id'));
				var currentTab = $(ui.newPanel).data('id');
				var numberTab = _self.getNumberTab();

				// "add tab" is selected, create a new view
				if (currentTab == null) {

					console.debug('toto');
					_self.createView();
					_self.refreshTabs();
					console.debug(numberTab);
					_self.selectTabByIndex(numberTab);

					return false;
				}
				// a tab is selected.
				else {
					_self.setCurrentTab($(ui.newPanel).data('id')); // give focus
				}
			}
		})
		.find(".ui-tabs-nav")
		.sortable({
			items: "li:not(:last-child)",
			axis: 'x',
			zIndex: 2
		}); // make tabs sortable (drag & drop)

		// create bottom menu
		this.bottomMenu = new visualivr.Menu(); // bottom menu
		var fileMenu = new visualivr.FileMenu(this); // file loader (<input type="file">)
		this.bottomMenu.addMenuItem(fileMenu); // push the "file loader" into the bottom menu

		// position bottomMenu on the screen
		this.addMenu('bottomMenu', this.bottomMenu);

		// set connection layout
		this.defaultRouter = new draw2d.layout.connection.MazeConnectionRouter();

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
				paneSelector: "#bottomMenu"
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

	createView:function() {

		app = this;
		// add a tab
		var CanvasName = "tab" + this.views.length;
		var canvasContainer = $('<div>', { id : CanvasName, style : "overflow: scroll;" });
		canvasContainer.data('id', this.views.length);

		var btn_close = $('<span>', { class : 'ui-icon ui-close-btn' });
		var menuItem = $('<li>')
		.append(
			$('<a>', { href  : '#' + CanvasName, text : CanvasName })
		).append(btn_close);

		var lastElement = $('#canvas ul li').last();
		$(menuItem).insertBefore(lastElement); // put the new tab before the "add tab" tab


		$('#canvas').append(canvasContainer); // insert it

		// create a new view and push it into the views list
		var view = new visualivr.View(CanvasName);
		menuItem.data('view', view);
		this.views.push(view);


		$(view.paper.canvas).css('position', 'relative'); // trick

		$(btn_close).on( "click", function(e) {
			_self = app;
			var tab = $(e.target).closest('li');
			$(e.target).closest('li').remove();
			console.log(_self);
			_self.refreshTabs();
			var idx = $.inArray(tab.data('view'), _self.views);
			_self.views.splice(idx, 1);
		});
		return (view);
	},

	// add menu obj to DOM
	addMenu:function(locator, menu) {

		$('#' + locator).append(menu.getHtml());
	},

	getCurrentTab:function() {

		return (this.currentTab);
	},

	getCurrentView:function() {

		return (this.views[this.currentTab]);
	},

	getNumberTab:function() {

		return (this.views.length);
	},

	setCurrentTab:function(newValue) {

		if (newValue > 0 && newValue < this.views.length && newValue != null) {

			this.currentTab = newValue;
		}
	},

	refreshTabs:function() {

		$('#canvas').tabs('refresh');
	},

	selectTabByIndex:function(value) {

		if (value > 0 && value <= this.getNumberTab() && value != null)
			$('#canvas').tabs("option", "active", value);
	},

	getTabIdxByView: function(view) {

	      return ($(this.views).index(view));
	}
});
