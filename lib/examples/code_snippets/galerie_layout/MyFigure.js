
var MyFigure = draw2d.shape.layout.VerticalLayout.extend({

	NAME: "MyFigure",
	
    init : function()
    {
        this._super();
        
        var hshape = new draw2d.shape.layout.HorizontalLayout();
        hshape.add( new draw2d.shape.basic.Label({text:"Label2"}));
        hshape.add( new draw2d.shape.basic.Label({text:"Label3"}));
        hshape.add( new draw2d.shape.basic.Label({text:"Label4"}));
             
        // add the new decoration to the connection with a position locator.
        //
        var l3 = new draw2d.shape.basic.Label({text:"Lafff ll fbel3"});
        l3.setDimension(300,10);
        l3.createPort("input").setName("BLUBBER");
        l3.createPort("output");
        l3.installEditor(new draw2d.ui.LabelInplaceEditor());

        this.add( new draw2d.shape.basic.Label({text:"Label2"}));
        this.add( new draw2d.shape.basic.Label({text:"Label4"}));
        this.add( l3);
//        this.add( hshape);
     }

});
