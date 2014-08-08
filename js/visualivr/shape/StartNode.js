/**
 * @class example.connection_labeledit.LabelConnection
 * 
 * A simple Connection with a label wehich sticks in the middle of the connection..
 *
 * @author Andreas Herz
 * @extend draw2d.Connection
 */
visualivr.shape.StartNode = draw2d.shape.node.Start.extend({
    
    init:function()
    {
      this._super();
    
      // Create any Draw2D figure as decoration for the connection
      //
      this.label = new draw2d.shape.basic.Label("Call Starts");
      this.label.setColor("#0d0d0d");
      this.label.setFontColor("#0d0d0d");
      
      // add the new decoration to the connection with a position locator.
      //
      this.addFigure(this.label, new draw2d.layout.locator.CenterLocator(this));
      
      this.label.installEditor(new draw2d.ui.LabelInplaceEditor());
      var ports = this.getPorts();
      console.debug("Port are : ", ports);
      ports.getFirstElement().onConnect = function(c) {
            console.debug("New port connected, removing old one", c);
            if (this.getConnections().getSize() > 1) {
              this.canvas.removeFigure(this.getConnections().getFirstElement());
            }
            c.setTargetDecorator(new draw2d.decoration.connection.ArrowDecorator());
        }
    },

    onPortValueChanged: function(relatedPort)
    {
      console.debug("Port value chagned");
    }
});
