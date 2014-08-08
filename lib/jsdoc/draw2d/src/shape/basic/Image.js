/*****************************************
 *   Library is under GPL License (GPL)
 *   Copyright (c) 2012 Andreas Herz
 ****************************************/
/**
 * @class draw2d.shape.basic.Image
 * Simple Image shape.
 * 
 * @inheritable
 * @author Andreas Herz
 * @extends draw2d.shape.node.Node
 */
draw2d.shape.basic.Image = draw2d.shape.node.Node.extend({
    NAME : "draw2d.shape.basic.Image",

    /**
     * @constructor
     * Creates a new figure element which are not assigned to any canvas.
     * 
     * @param {Object} [attr] the configuration of the shape
     */
    init : function(attr)
    {
        /** @attr {String} path the image path (absolute or relative) of the shape */
        this.setterWhitelist.path  = this.setPath;
        
        this.getterWhitelist.path = this.getPath;

        this._super(attr);
    },
      

    /**
     * @method
     * Set the image path attribute of the Image shape and repaint them.
     * The path can be relative or absolute
     * 
     * @param path
     * @since 2.8.0
     */
    setPath: function(path){
        this.path = path;
        
        if(this.shape!==null){
            this.shape.attr({src:this.path});
        }
        
        return this;
    },
    
    /**
     * @method
     * Return the image path attribute of the shape.
     * 
     * @returns {String}
     * @since 2.8.0
     */
    getPath: function(){
        return this.path;
    },
    
    /**
     * @inheritdoc
     */
    repaint : function(attributes)
    {
        if (this.repaintBlocked===true || this.shape === null){
            return this;
        }

        attributes= attributes || {};

        attributes.x = this.getAbsoluteX();
        attributes.y = this.getAbsoluteY();
        attributes.width = this.getWidth();
        attributes.height = this.getHeight();
        attributes.src = this.path;
        
        this._super(attributes);
        
        return this;
    },

    /**
     * @inheritdoc
     */
    createShapeElement : function()
    {
       return this.canvas.paper.image(this.path,this.getX(),this.getY(),this.getWidth(), this.getHeight());
    },
    

    /**
     * @inheritdoc
     */
    getPersistentAttributes : function()
    {
        return $.extemd( this._super(),{
            path : this.path
        });
    },
    
    /**
     * @inheritdoc
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);
        if(typeof memento.path !=="undefined"){
            this.setPath(memento.path);
        }
    }

});

