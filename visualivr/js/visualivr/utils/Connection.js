
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

        var container = $('<div>', {
            style : "background-color: #f0f0f0;text-align:center; \
            border: 1px solid #dddddd; padding:5px;margin: 10px;"
        });
        var table = $('<table>', { 
            style : "width: 100%;text-align:center"
        });
        var newSelect = $('<select>');
        var submitButton = $('<input>', { 
            type : "submit", 
            style : "margin:0px 10px 0px 10px; width:100px;text-align:center;display:inline; color:grey",
            value : "Submit"
        });
        var cancelButton = $('<input>', { 
            type : "submit", 
            style : "margin:0px 10px 0px 10px;width:100px;text-align:center;display:inline; color:grey",
            value : "Cancel"
        });
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
        table.append($('<tr>').append($('<td>').append("Set key value")).append($('<td>').append(newSelect)));
        container.append(table);
        container.append($('<div>', { style : "padding: 10px;margin-top:10px;" })
            .append(submitButton)
            .append(cancelButton));
        container.dialog({title: "Settings"});
        $('.ui-icon-closethick').remove();

        $(submitButton).on('click', function(e) {
            var value = $(table).find('option:selected').val();

            _self.setKey(value);
			_self.label.toggleVisible();
            container.dialog('close');
        }); 
        $(cancelButton).on('click', function(e) {
            container.dialog('close');
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

});
