
visualivr.View_manager = Class.extend({
	
	init: function(element_id, app) {

		this.app = app;
		this.views = [];
		this.element_id = element_id;
		this.view_start();
	},

	create_view: function(view_name) {

		if (view_name == null)
			view_name = 'auto generated tab ' + this.views.length;
		var tab_container_id = this.app.tab_manager.create_new_tab(view_name); // create a new tab for this view
		var new_view = new visualivr.View(tab_container_id); // linked a new canvas to the tab
		$(new_view.paper.canvas).css('position', 'relative'); // trick
		this.views.push(new_view);
	},

	view_start: function() {

		var _self = this;

		$tabs = $('#' + this.element_id)
		.tabs({
				
			beforeActivate : function(evt, ui) {

				var tab_idx = $(ui.newTab).data('id');

				if (tab_idx == null) {

					_self.create_view('Tab ' + _self.views.length);
					_self.app.tab_manager.select_last_tab();
					return (false);
				}
				else {
					console.debug('select : ' + tab_idx);
					//_self.app.tab_manager.select_first_tab();

				}
			}
		});
	},

	get_views_number:function() {
		
		return (this.views.length);
	},

	get_view_by_idx:function(index) {

		if (index >= 0 && index <= this.views.length && index != null)
			return (this.views[index]);
	},

	get_last_view:function() {

		return (this.views[this.views.length - 1]);
	},

	get_current_tab_view:function() {

		return (this.views[this.app.tab_manager.get_current_tab()]);
	}
});