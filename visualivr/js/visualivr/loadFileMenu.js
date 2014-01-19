
visualivr.File_loader = Class.extend({

    init:function(app) {

	var _self = this;
	this.app = app;
	this.view = app.get_view_manager_instance().get_current_tab_view();
	this.files_block = new Array(); // store all block for each file
	this.html = $('<div>');
	this.input = $('<input>', { type : "file", id : "file_menu_chooser"});
	this.html.append(this.input);

	// catch file input event
	$('#file_menu_chooser').live('click', function(e) {

	    e.preventDefault();

	    _self.open_file(e);
	    /*
	    // reset file chooser (weird solution from stackoverflow)
	    var input = $('#file_menu_chooser');
	    input.type = "text";
	    input.type = "file";
	    */
	});
    },

    get_html:function() {

	return (this.html.html());
    },

    parse_file:function(file_loader) {

	var _self = this;
	var list_obj = file_loader.list_obj;

	function	get_xml_obj(file_name) {

	    $.get(visualivr.Config.VXML_PATH + file_name, function( xmlobj ) {

		var xml_file_loader = new visualivr.Xml_file_loader(_self.app);

		console.debug('open ' + file_name);
		_self.app.view_manager.create_view(file_name); // create a new view for this file
		xml_file_loader.set_file_name(file_name);
		xml_file_loader.draw_file(xmlobj);
		_self.files_block[file_name] = xml_file_loader;
		_self.parse_file(xml_file_loader);
	    }, 'xml');
	}

	for (var i = 0; i < list_obj.length; i++) {

	    for (var j = 0; j < list_obj[i].out_link.length; j++) {

		if (list_obj[i].out_link[j].file_name != 0) {

		    if (this.app.get_view_manager_instance().get_idx_by_name(list_obj[i].out_link[j].file_name) == false) {

			var file_name = list_obj[i].out_link[j].file_name;

			get_xml_obj(file_name);
		    }
		}
	    }
	}
    },

    open_file:function() {

	var _self = this;

	function	get_xml_files() {

	    /* get some values from elements on the page: */

	    /* Send the data using post and put the results in a div */

	    var files;
	    $.ajax({
		type: "GET",
		url: '../ws/publicapi.php?method=xml_file_list',
		async: false,
		success : function(data)
		{
		    console.debug(data);
		    files = data;
		    return (data);
		},
		error:function(){
		    console.debug('error');
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
	dialog.set_title('Choose a file')

        //$('.ui-icon-closethick').remove();

	dialog.start();

	dialog.set_submit_action(function() {

	    var value = $(dialog.table).find('option:selected').val();

	    if (_self.app.get_view_manager_instance().get_idx_by_name(value) == false) {

		$.get(visualivr.Config.VXML_PATH + value, function( xmlobj ) {

		    var xml_file_loader = new visualivr.Xml_file_loader(_self.app);

		    _self.app.view_manager.create_view(value); // create a new view for this file
		    xml_file_loader.set_file_name(value);
		    xml_file_loader.draw_file(xmlobj);
		    _self.files_block[value] = xml_file_loader;
		    _self.parse_file(xml_file_loader);
		}, 'xml');
	    }
	    dialog.close_dialog();
	});

	dialog.set_cancel_action(function() {

	    dialog.close_dialog();
	})
    }
});
