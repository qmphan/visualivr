
visualivr.File_loader = Class.extend({

    init:function(app) {

	var _self = this;
	this.app = app;
	this.view = app.get_view_manager_instance().get_current_tab_view();
	this.files_block = new Array(); // store all block for each file
	this.html = $('<div>');
	this.opened_files = []; // avoid opening a file more than once
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

	for (var i = 0; i < list_obj.length; i++) {

	    for (var j = 0; j < list_obj[i].out_link.length; j++) {

		if (list_obj[i].out_link[j].file_name != 0) {

		    if ($.inArray(list_obj[i].out_link[j].file_name, this.opened_files) == -1) {

			var file_name = list_obj[i].out_link[j].file_name;
			$.get(visualivr.Config.VXML_PATH + file_name, function( xmlobj ) {

			    var xml_file_loader = new visualivr.Xml_file_loader(_self.app);

			    _self.app.view_manager.create_view(file_name); // create a new view for this file
			    xml_file_loader.set_file_name(file_name);
			    xml_file_loader.draw_file(xmlobj);
			    _self.files_block[file_name] = xml_file_loader;
			    _self.parse_file(xml_file_loader);
			}, 'xml');
			this.opened_files.push(file_name);
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
	dialog.set_title('Choose a file');

        //$('.ui-icon-closethick').remove();

            var value = $(table).find('option:selected').val();

	    $.get(visualivr.Config.VXML_PATH + value, function( xmlobj ) {

		var xml_file_loader = new visualivr.Xml_file_loader(_self.app);

		_self.app.view_manager.create_view(value); // create a new view for this file
		xml_file_loader.set_file_name(value);
		xml_file_loader.draw_file(xmlobj);
		_self.files_block[value] = xml_file_loader;
		_self.parse_file(xml_file_loader);
	    }, 'xml');
	    _self.opened_files.push(value);
            container.dialog('close');
        });
        $(cancelButton).on('click', function(e) {
            container.dialog('close');
        });
	dialog.start();
    }

    /*
    open_file:function(e) {

	var _self = this;
	var file_name = e.target.files[0].name;

	var call = _self.load_file(e.target.files[0], function (file_content) {

	    var xmlobj = $.parseXML(file_content);

	    if ($.inArray(file_name, _self.opened_files) == -1 ) { // now we are sure this file hasn't been opened yet

		_self.app.view_manager.create_view(file_name); // create a new view for this file
		_self.app.view_manager.select_last_tab(); // select the corresponding tab
		var file_loader = new visualivr.Xml_file_loader(_self.app);
		file_loader.set_file_name(file_name);
		file_loader.draw_file(xmlobj);
		_self.files_block[file_name] = file_loader;
		_self.opened_files.push(file_name);
		_self.parse_file(file_loader);
	    }
	    else {

		console.debug('this file has already been loaded');
	    }
	});

    },

    load_file:function(new_file, callback) {

	var files_block = new_file;
	var reader = new FileReader();

	reader.onload = function() {

	    callback(reader.result);
	}
	reader.readAsText(files_block);
    },
    */


});
