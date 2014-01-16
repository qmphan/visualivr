var Polygon = draw2d.VectorFigure.extend({
    
    init:function()
    {
      this._super();
    
      // all line segments with start/end as simple object member
      this.vertices   = new draw2d.util.ArrayList();

    },
    
    setVertex : function(index, x, y) 
    {
        var vertex = this.vertices.get(index);

        // invalid point or nothing todo
        //
        if (vertex === null || (vertex.x === x && vertex.y === y)) {
            return;
        }

        vertex.x = parseFloat(x);
        vertex.y = parseFloat(y);
        
        this.svgPathString = null;
        this.repaint();

        this.editPolicy.each($.proxy(function(i, e) {
            if (e instanceof draw2d.policy.figure.DragDropEditPolicy) {
                e.moved(this.canvas, this);
            }
        }, this));

        return this;
    },
    

    insertVertexAt:function(index, x, y) 
    {
        var vertex = new draw2d.geo.Point(x,y);

        this.vertices.insertElementAt(vertex,index);
        
        this.svgPathString = null;
        this.repaint();

        if(!this.selectionHandles.isEmpty()){
	        this.editPolicy.each($.proxy(function(i, e) {
	            if (e instanceof draw2d.policy.figure.SelectionFeedbackPolicy) {
	                e.onUnselect(this.canvas, this);
	                e.onSelect(this.canvas, this);
	            }
	        }, this));
        }

        return this;
    },


    /**
     * @method
     * Remove a vertix from the polygon and return the removed point.
     * 
     * @param index
     * @returns {draw2d.geo.Point} the removed point
     */
    removeVertexAt:function(index) 
    {

        var vertex = this.vertices.removeElementAt(index);
        
        this.svgPathString = null;
        this.repaint();

        if(!this.selectionHandles.isEmpty()){
	        this.editPolicy.each($.proxy(function(i, e) {
	            if (e instanceof draw2d.policy.figure.SelectionFeedbackPolicy) {
	                e.onUnselect(this.canvas, this);
	                e.onSelect(this.canvas, this);
	            }
	        }, this));
        }

        return vertex;
    }
});
