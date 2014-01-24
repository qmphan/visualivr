
visualivr.Connection = draw2d.Connection.extend({

    init:function(sourcePort)
    {
        this._super();

        this.label = new visualivr.Label("No key");
        this.label.setColor("#0d0d0d");
        this.label.setFontColor("#0d0d0d");
        this.sourcePort = sourcePort;
        this.key = '';
        this.node = this.getSource().getParent();

        this.addFigure(this.label, new draw2d.layout.locator.ManhattanMidpointLocator(this));
        this.label.installEditor(new draw2d.ui.LabelInplaceEditor());
        this.label.setGlow(true);
    },

    update_label:function() {
        this.label.setText(this.key);
    },

    setKey:function(key) {
        this.key = key;
        this.update_label();
    },

    connectionExist:function(value) {

        var connections = this.node.getConnections();

        for (var i = 0; i < connections.getSize(); i++) {
            if (value == connections.get(i).key)
                return (false);
        }
        return (true);
    },

    getFirstKeyAvailable:function() {
        for (var i = 0; i < this.node.OutputData.length; i++) {
            if (this.connectionExist(this.node.OutputData[i]) == true)
                return (this.node.OutputData[i]);
        }
        return (false);
    },

    setKeyDialog:function() {

        var _self = this;

	// CREATE A DIALOG
        var newSelect = $('<select>');
	var dialogArray = [];
	dialogArray.push({ key : "Set ouput", value : newSelect});
        for (var i = 0; i < this.node.OutputData.length; i++) {

            if (this.connectionExist(this.node.OutputData[i]) == true || this.node.OutputData[i] == this.key) {
                var newOption = $('<option>', {
                    text : this.node.OutputData[i],
                    value : this.node.OutputData[i]
                });
                newOption.data('value', this.node.OutputData[i]);
                if (this.node.OutputData[i] == this.key)
                    newOption.attr('selected', 'selected');
                newSelect.append(newOption);
            }
        }
	var dialog = new visualivr.Dialog();
	dialog.push_table(dialogArray);
	dialog.start();

	// SUBMIT EVENT
	dialog.set_submit_action(function(e) {

            var value = $(dialog.get_table_instance()).find('option:selected').val();
            _self.setKey(value);
	    _self.label.toggleVisible();
	    dialog.close_dialog();
        });

	// CANCEL EVENT
        dialog.set_cancel_action(function(e) {
	    dialog.close_dialog();
        });
    },

    onContextMenu:function(x,y){
        $.contextMenu({
            selector: 'body',
            events:
            {
                hide:function(){ $.contextMenu( 'destroy' ); }
            },
            callback: $.proxy(function(key, options)
            {
                switch(key){
                    case "switch_label":
                    this.label.toggleVisible();
                    break;
                    case "key":
                        this.setKeyDialog();
                    break;
                    case "delete":
                        var cmd = new draw2d.command.CommandDelete(this);
                        this.getCanvas().getCommandStack().execute(cmd);
                    default:
                    break;
                }
            },this),
            x:x,
            y:y,
            items:
            {
                "switch_label": {name: "Switch label on/off"},
                "key": {name: "Edit key"},
                "delete": {name: "Delete"}
            }
        });
    },

    onOtherFigureIsMoving:function( figure) {

	console.debug('other moving');
	//this.addCssClass('displaynone');
    }
});
