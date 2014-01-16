
visualivr.Menu = Class.extend({

	init: function() {

		this.item_list = [];
		this.html = $('<div>');
	},

	getHtml: function() {

		return (this.html.html());
	},

	add_menu_item: function(item) {

		this.item_list.push(item);
		this.update_content();
	},

	remove_menu_item: function(item) {
		var occ_idx = $.inArray(item, this.item_list);
		this.item_list.splice(occ_idx, 1);
	},

	update_content: function() {

		this.clear();
		for (var i = 0; i < this.item_list.length; i++) {
			this.html.append(this.item_list[i].get_html());
		}
	},

	clear: function() {

		this.html = $('<div>');
	},

	get: function(idx) {

		if (idx >= 0 && idx < this.item_list.length)
			return (this.item_list[idx]);
		return (false);
	}
});
