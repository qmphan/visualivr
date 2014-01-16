
visualivr.View_manager = Class.extend({
	
	init: function(element_id, app) {

		this.app = app;
		this.tabs = new Array();
		this.element_id = element_id;
		this.current_tab = 0;
		this.init_item_list();
		this.view_start();
	},	

	init_item_list:function() {

		var list_item = $('<ul>');

		$('#' + this.element_id).append(list_item);
	},

	create_new_tab: function(view_name, content) {
	
		var _self = this;
		console.debug('creating');
		console.debug('size : ' + this.get_tabs_number());
		var tab_container_id = 'tab' + this.get_tabs_number();
		
		// generate tab item
		var btn_close = $('<span>', { id : "btn_close_" + this.get_tabs_number(), class : 'ui-icon ui-close-btn' }); // create a close button for tab
		var menu_item = $('<li>').append($('<a>', { href  : '#' + tab_container_id, text : view_name })).append(btn_close); //create a new tab and append the close button to it.
		$(menu_item).data('id', 'tabItem' + this.get_tabs_number());
		var last_element = $('#' + this.element_id + ' ul li').last();
		$(menu_item).insertBefore(last_element); // put the new tab before the last one. (close tab)

		// generate tab content
		var tab_container = $('<div>', { id : tab_container_id, style : "overflow: scroll;" });
		$('#' + this.element_id).append(tab_container);

		this.refresh_tabs();

		// event handler
		$(btn_close).on('click', function(e) {

			var tab_id = $(e.target).closest('li').data('id');
			
			console.debug(_self.get_tab_by_id_name(tab_id).html_reference);

			$(e.target).closest('li').remove(); // remove tab
			this.tabs.splice($.inArray(this.tabs, _self.get_tab_by_id_name(tab_id)), 1);
			$('#' + _self.get_tab_by_id_name(tab_id).html_reference).remove(); // remove tab container
		});

		return (tab_container_id);
	},

	create_view: function(view_name) {

		if (view_name == null)
			view_name = 'auto generated tab ' + this.get_tabs_number();
		var tab_container_id = this.create_new_tab(view_name); // create a new tab for this view
		var new_view = new visualivr.View(tab_container_id); // linked a new canvas to the tab
		new_view.html_reference = tab_container_id; 
		$(new_view.paper.canvas).css('position', 'relative'); // trick
		this.tabs.push({ name : 'tabItem' + this.tabs.length, view : new_view});

		console.debug(this.tabs);
	},

	refresh_tabs:function() {

		$('#' + this.element_id).tabs('refresh');
	},


	view_start: function() {

		var _self = this;
		// create "add tab" tab
		var add_tabs_button = $('<li>').append($('<a>', { href : "#add_tab", text : "+" }));
		$('#' + this.element_id + ' ul').append(add_tabs_button);

		// enable tabs
		$tabs = $('#' + this.element_id)
		.tabs({
			closable: true,
			// when tab is selected
			beforeActivate : function(evt, ui) {

				var tab_idx = $(ui.newTab).data('id');

				if (tab_idx == null) {

					_self.create_view('Tab ' + _self.views.length);
					_self.select_last_tab();
					return (false);
				}
				else {

					console.debug('select : ' + tab_idx);
					//_self.select_first_tab();

				}
			}
		}); 
	},

	select_tab_by_idx:function(value) {

		if (value >= 0 && value <= this.get_tabs_number() && value != null) {

			this.current_tab = value;
			$('#' + this.element_id).tabs("option", "active", value);
		}
	},

	select_first_tab:function() {

		$('#' + this.element_id).tabs("option", "active", 0);
	},

	select_last_tab:function() {

		$('#' + this.element_id).tabs("option", "active", this.get_tabs_number() - 1);
	},

	delete_tab_by_idx:function(idx) {

		if (idx >= 0 && idx <= this.get_tabs_number() && idx != null) {

			var tab = $('#' + element_id).closest('li');
			for (var i = 0; i < this.get_tabs_number(); i++) {

				tab = tab.next('li');
			}
			tab.remove();
		}
	},

	get_current_tab:function() {

		return (this.current_tab);
	},

	get_tabs_number:function() {
		
		return (this.tabs.length);
	},

	get_view_by_idx:function(index) {

		if (index >= 0 && index <= this.get_tabs_number() && index != null)
			return (this.tabs[index]);
	},

	get_last_view:function() {

		return (this.tabs[this.tabs.length - 1].view);
	},

	get_current_tab_view:function() {

		return (this.tabs[this.tabs.length - 1].view);
	},

	get_tab_by_id_name:function(id_name) {
	
		if ( id_name != null) {

			for (var i = 0; i < this.tabs.length; i++) {

				if (this.tabs[i].name == id_name) {

					return (this.tabs[i].view);
				}
			}
		}
	}
});