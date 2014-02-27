
visualivr.Editor = Class.extend({

  init: function(view_manager) {
  
    _self = this;
    
    this.files = new Array();
    this.files.push({ name : view_manager.get_tabs()[0].name, content : ""});
    this.view_manager = view_manager;
    this.html = $("<div>");
    this.codeArea = $("<textarea>", { id : "codeArea"});
    this.html.append(this.codeArea);
  },
  
  start: function() {
    
    _self = this;
    
    this.editor = CodeMirror.fromTextArea(document.getElementById("codeArea"), {
      lineNumbers: true,
      mode: "xml",
      matchBrackets: true,
      theme: "monokai",
    });
  
    this.editor.setSize(null, "100%");
  
    
    // event right click
    this.editor.on("contextmenu", function(x, y) {
      
      var elem = _self.view_manager.get_tabs();

      console.debug(_self);
      $.contextMenu({
	selector: 'body',
	events: {
	  hide:function(){ $.contextMenu( 'destroy' ); }
	},
	callback: $.proxy(function(key, options) {

	  // elem[key].callback();
	 var file_content = _self.open_file(elem[key].name);

	 console.debug('content :' + file_content);
	 _self.editor.setValue(file_content);
	},this),
	x:x,
	y:y,
	items: elem,
      });
    });    
  },
  
  get_html:function() {

    return (this.html.html());
  },
  
  file_is_open: function(filename) {
    
      for (var i = 0; i < this.files.length; i++) {
	
	if (this.files[i].name == filename)
	  return (i);
      }
      return (-1);
  },
  
  open_file: function(filename) {

    var file_idx = this.file_is_open(filename);
    if (file_idx != -1)
      return (this.files[file_idx].content);
    
    var file_content = $.ajax({

    url :	visualivr.Config.VXML_PATH + filename,
      type : "GET",
      async : false,
    }).responseText;
    this.files.push({ name : filename, content : file_content});
   //console.debug("content : " + file_content);
    return (file_content);
  }
});