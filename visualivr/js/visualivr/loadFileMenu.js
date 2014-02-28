
visualivr.File_loader = Class.extend({

    init:function(app) {

	var _self = this;
	this.app = app;
	this.view = app.get_view_manager_instance().get_current_tab_view();
	this.files_block = new Array(); // store all block for each file
	this.html = $('<div>');
	this.input = $('<input>', { type : "file", id : "file_menu_chooser"});
	this.html.append(this.input);
	this.opened_files = [];

	// catch file input event
	$('#file_menu_chooser').live('click', function(e) {

	    e.preventDefault();

	    _self.open_file(e);
	});
    },

    get_html:function() {

	return (this.html.html());
    },

    resolve_path: function(xml_path) {

	var path = null;
	ret = null;
	val = null;
	$.each(visualivr.Config.XML_PATH, function(index, value) {

	    if (xml_path.indexOf(index) == 0) {
		ret = index;
		val = value;
		return ;
	    }
	});
	path = xml_path.replace(ret, val);

	return (path);
    },

    parse_file: function(file_loader) {

	var _self = this;
	var list_obj = file_loader.nodes;

	function	get_xml_obj(file_name) {

	    $.get(visualivr.Config.VXML_PATH + file_name, function( xmlobj ) {

		var xml_file_loader = new visualivr.Xml_loader(_self);

		_self.app.view_manager.create_view(file_name); // create a new view for this file
		xml_file_loader.set_file_name(file_name);
		xml_file_loader.draw_file(xmlobj);
		_self.files_block[file_name] = xml_file_loader;
	    }, 'xml').fail(function() {


	    });
	}

	// boucle sur la liste de node
	for (var i = 0; i < list_obj.length; i++) {

	    // pour chaque node, on boucle sur ses connections
	    for (var j = 0; j < list_obj[i].out_link.length; j++) {

		var tabs = this.app.get_view_manager_instance().tabs;
		// le node courrant pointent vers un autre fichier
		if (list_obj[i].out_link[j].file_name != file_loader.get_file_name()) {

		    var file_name = list_obj[i].out_link[j].file_name;

		    //var ret = this.app.get_view_manager_instance().get_idx_by_name(file_name);
		    if ($.inArray(file_name, _self.opened_files) == -1) {

			if (file_name == -1)
			    continue;
			get_xml_obj(file_name);
			_self.opened_files.push(file_name);
		    }
		}
	    }
	}
    },

    open_file:function() {

	var _self = this;

	function	get_xml_files() {

	    var files;
	    $.ajax({
		type: "GET",
		url: '../ws/publicapi.php?method=xml_file_list',
		async: false,
		success : function(data)
		{
		    files = data;
		    return (data);
		},
		error:function(){
		    return (false);
		}
	    });
	    return (files);
	}

	var xml_files = $.parseJSON(get_xml_files());
	if (xml_files == null)
	    return (false);

	var newSelect = $('<select>');
	var dialogArray = [];
	for (var i = 0; i < xml_files.length; i++) {

	    var newOption = $('<option>', {
		text : xml_files[i],
		value : xml_files[i]
	    });
	    newSelect.append(newOption);
	}
	dialogArray.push({ key : "XML file", value : newSelect });
	var dialog = new visualivr.Dialog();
	dialog.push_table(dialogArray);
	dialog.set_title('Choose a file');
	dialog.set_size(500);
	dialog.start();

	// SET SUBMIT EVENT
	dialog.set_submit_action(function() {

	    var value = $(dialog.table).find('option:selected').val();

	    if (_self.app.get_view_manager_instance().get_idx_by_name(value) == false) {

		$.get(visualivr.Config.VXML_PATH + value, function( xmlobj ) {

		    var xml_file_loader = new visualivr.Xml_loader(_self);

		    if (xml_file_loader == false)
			exit(0);
		    _self.opened_files.push(value);
		    _self.app.view_manager.create_view(value); // create a new view for this file
		    xml_file_loader.set_file_name(value);
		    xml_file_loader.draw_file(xmlobj);
		    _self.files_block[value] = xml_file_loader;
		    _self.parse_file(xml_file_loader);
		}, 'xml');
	    }
	    else {
	    }
	    dialog.close_dialog();
	});

	// SET CANCEL EVENT
	dialog.set_cancel_action(function() {

	    dialog.close_dialog();
	})
    },
    
    get_xml_loader_instance: function(filename) {
      
      return (this.files_block[filename]);
    }
});
