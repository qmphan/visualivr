
visualivr.Tab_manager = Class.extend({
		
	init : function(element_id)
	{
		this.element_id = element_id;
		this.current_tab = 0;
		this.tabs = new Array();
		this.init_item_list();
		this.tabs_start();
	},

	init_item_list:function() {

		var list_item = $('<ul>');
		$('#' + this.element_id).append(list_item);
	},

	create_new_tab: function(view_name, content) {
	
		console.debug('creating');
		console.debug('size : ' + this.tabs.length);
		var tab_container_id = 'tab' + this.tabs.length;
		
		// generate tab item
		var btn_close = $('<span>', { class : 'ui-icon ui-close-btn' }); // create a close button for tab
		var menu_item = $('<li>').append($('<a>', { href  : '#' + tab_container_id, text : view_name })).append(btn_close); //create a new tab and append the close button to it.
		$(menu_item).data('id', this.tabs.length);
		var last_element = $('#' + this.element_id + ' ul li').last();
		$(menu_item).insertBefore(last_element); // put the new tab before the last one. (close tab)

		// generate tab content
		var tab_container = $('<div>', { id : tab_container_id, style : "overflow: scroll;" });
		$('#' + this.element_id).append(tab_container);
		this.tabs.push(tab_container);
		console.debug('new size : ' + this.tabs.length);
		this.refresh_tabs();

		return (tab_container_id);
	},
	
	get_tab_number: function() {
		
		return (this.tabs.length);
	},
	
	tabs_start: function() {
	
		// create "add tab" tab
		var add_tabs_button = $('<li>').append($('<a>', { href : "#add_tab", text : "+" }));
		$('#' + this.element_id + ' ul').append(add_tabs_button);

		// enable tabs
		$tabs = $('#' + this.element_id)
		.tabs({
			closable: true,
			// when tab is selected
		}); 
	},

	refresh_tabs:function() {

		$('#' + this.element_id).tabs('refresh');
	},

	select_tab_by_idx:function(value) {

		if (value >= 0 && value <= this.tabs.length && value != null) {

			this.current_tab = value;
			$('#' + this.element_id).tabs("option", "active", value);
		}
	},

	select_first_tab:function() {

		console.debug('select first');
		$('#' + this.element_id).tabs("option", "active", 0);
	},

	select_last_tab:function() {

		$('#' + this.element_id).tabs("option", "active", this.tabs.length - 1);
	},

	get_current_tab:function() {

		return (this.current_tab);
	},

	get_last_tab:function() {

		return (this.tabs.length - 1);
	}
});