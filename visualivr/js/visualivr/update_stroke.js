

 visualivr.Update_stroke = Class.extend({

  init: function(app) {

    var _self = this;
    this.app = app;
    this.html = $('<div>');
    this.newForm = $('<form>', { method : "POST" });
    this.date_start = $('<input>', { type : "date", id : "update_stroke_start" });
    this.date_end = $('<input>', { type : "date", id : "update_stroke_end" });
    this.input = $('<div>', {
	class : 'btn',
	id : "stat",
	text : "Statistique",
	style : "position: relative; left : 10px; top: 1px;"
    });
    this.html.append(this.input);
    //var submit_btn = $('<input>', { type : "input", id : "update_stroke_btn" });

    $('#stat').live('click', function(e) {

	_self.set_statistique();
    })

  },

  set_statistique: function() {

      var _self = this;
      var dialog = new visualivr.Dialog();
      dialog.set_title('Statistique');
      var dialogArray = [];
      dialogArray.push( { key : "Date start", value : this.date_start},
		       { key : "Date end", value : this.date_end});
      dialog.push_table(dialogArray);
      dialog.start();

      dialog.set_submit_action(function() {

	  _self.submit_action();
	  dialog.close_dialog();
      });

      dialog.set_cancel_action(function() {

	  dialog.close_dialog();
      });
  },

  submit_action: function() {

      var _self = this;
      var view_manager = _self.app.get_view_manager_instance();
      var current_file = view_manager.tabs[view_manager.get_current_tab()].name;

      var date_start_val = $("#update_stroke_start").val();
      var date_end_val = $("#update_stroke_end").val();
      //_self.get_link_info(current_file, date_start_val, date_end_val).done(function(data) {
      _self.get_link_info(current_file, 0, 0).done(function(data) {

	  var response = $.parseJSON(data);
	  if (data != "BAD NAME" && data != "ERROR")
	    _self.set_connection_stroke(current_file, $.parseJSON(data));
      });
  },

  set_connection_stroke: function(current_file, data) {

    var view_manager = this.app.get_view_manager_instance();
    var file_loader = this.app.bottom_menu.get(0);
    var xml_file_loader = file_loader.files_block[current_file];

    $.each(data, function(index, value) {

      var current_block = xml_file_loader.get_block_instance(index, current_file);
      var total = 0;
      var temp = [];
      var res = [];
      $.each(value, function(connections_i, connections_val) {

	if (current_block.is_linked_to(connections_i) == false) {

	  var newblock = xml_file_loader.create_node("block", connections_i);
	  newblock.type = "block";
	  current_block.out_link.push( {

	    file_name : current_file,
	    node_name : connections_i,
	    comment : null
	  });
	  xml_file_loader.set_connections();
	  var connection = current_block.search_connection(connections_i);
	  connection.setColor(visualivr.Config.INVALID_BGCOLOR);
	}
	total += connections_val;
      });
      $.each(value, function(connections_i, connections_val) {
	temp.push(100 * connections_val / total);
      });
      for (var i = 0; i < temp.length; i++) {
	res.push(temp[i] * 4 / 100);
      }
      for (var i = 0; i < current_block.connections.length; i++) {
       var val = value[current_block.connections[i].target_name];

        var nbr = temp[i].toString(10);
	var dot_idx = nbr.indexOf('.');
	if (dot_idx != -1)
	    var truncated_nbr = nbr.substr(0, dot_idx + visualivr.Config.STAT_NBR_DECIMAL + 1);
	else
	    var truncated_nbr = nbr;
	current_block.connections[i].setKey(val + " - " + truncated_nbr + "%");
	current_block.connections[i].setStroke(res[i]);
	current_block.connections[i].label.toggleVisible();
     }
    });
    xml_file_loader.repaint();
  },

  get_link_info: function(current_file, date_start_val, date_end_val) {

    return $.ajax({
	type: "GET",
	url: './foo.php?filename=' + current_file + '&date_start=' + date_start_val + '&date_end=' + date_end_val,
    });
  },

  get_html:function() {

    return (this.html.html());
  },

});
