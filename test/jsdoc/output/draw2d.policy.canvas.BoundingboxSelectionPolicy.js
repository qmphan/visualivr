Ext.data.JsonP.draw2d_policy_canvas_BoundingboxSelectionPolicy({"requires":[],"uses":[],"superclasses":["draw2d.policy.EditPolicy","draw2d.policy.canvas.CanvasPolicy","draw2d.policy.canvas.SelectionPolicy"],"extends":"draw2d.policy.canvas.SelectionPolicy","alternateClassNames":[],"mixins":[],"tagname":"class","meta":{},"files":[{"href":"BoundingboxSelectionPolicy.html#draw2d-policy-canvas-BoundingboxSelectionPolicy","filename":"BoundingboxSelectionPolicy.js"}],"component":false,"members":[{"owner":"draw2d.policy.canvas.BoundingboxSelectionPolicy","tagname":"method","meta":{},"name":"constructor","id":"method-constructor"},{"owner":"draw2d.policy.canvas.CanvasPolicy","tagname":"method","meta":{"template":true},"name":"onClick","id":"method-onClick"},{"owner":"draw2d.policy.EditPolicy","tagname":"method","meta":{},"name":"onInstall","id":"method-onInstall"},{"owner":"draw2d.policy.canvas.BoundingboxSelectionPolicy","tagname":"method","meta":{},"name":"onMouseDown","id":"method-onMouseDown"},{"owner":"draw2d.policy.canvas.BoundingboxSelectionPolicy","tagname":"method","meta":{"template":true},"name":"onMouseDrag","id":"method-onMouseDrag"},{"owner":"draw2d.policy.canvas.CanvasPolicy","tagname":"method","meta":{"template":true},"name":"onMouseMove","id":"method-onMouseMove"},{"owner":"draw2d.policy.canvas.BoundingboxSelectionPolicy","tagname":"method","meta":{},"name":"onMouseUp","id":"method-onMouseUp"},{"owner":"draw2d.policy.EditPolicy","tagname":"method","meta":{},"name":"onUninstall","id":"method-onUninstall"},{"owner":"draw2d.policy.canvas.CanvasPolicy","tagname":"method","meta":{},"name":"snap","id":"method-snap"}],"author":[{"email":null,"tagname":"author","name":"Andreas Herz"}],"autodetected":{},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/draw2d.policy.EditPolicy' rel='draw2d.policy.EditPolicy' class='docClass'>draw2d.policy.EditPolicy</a><div class='subclass '><a href='#!/api/draw2d.policy.canvas.CanvasPolicy' rel='draw2d.policy.canvas.CanvasPolicy' class='docClass'>draw2d.policy.canvas.CanvasPolicy</a><div class='subclass '><a href='#!/api/draw2d.policy.canvas.SelectionPolicy' rel='draw2d.policy.canvas.SelectionPolicy' class='docClass'>draw2d.policy.canvas.SelectionPolicy</a><div class='subclass '><strong>draw2d.policy.canvas.BoundingboxSelectionPolicy</strong></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/BoundingboxSelectionPolicy.html#draw2d-policy-canvas-BoundingboxSelectionPolicy' target='_blank'>BoundingboxSelectionPolicy.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.policy.canvas.BoundingboxSelectionPolicy'>draw2d.policy.canvas.BoundingboxSelectionPolicy</span><br/><a href='source/BoundingboxSelectionPolicy.html#draw2d-policy-canvas-BoundingboxSelectionPolicy-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.policy.canvas.BoundingboxSelectionPolicy-method-constructor' class='name expandable'>draw2d.policy.canvas.BoundingboxSelectionPolicy</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.policy.canvas.BoundingboxSelectionPolicy\" rel=\"draw2d.policy.canvas.BoundingboxSelectionPolicy\" class=\"docClass\">draw2d.policy.canvas.BoundingboxSelectionPolicy</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a new Router object ...</div><div class='long'><p>Creates a new Router object</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.policy.canvas.BoundingboxSelectionPolicy\" rel=\"draw2d.policy.canvas.BoundingboxSelectionPolicy\" class=\"docClass\">draw2d.policy.canvas.BoundingboxSelectionPolicy</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.policy.canvas.SelectionPolicy-method-constructor\" rel=\"draw2d.policy.canvas.SelectionPolicy-method-constructor\" class=\"docClass\">draw2d.policy.canvas.SelectionPolicy.constructor</a></p></div></div></div><div id='method-onClick' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.canvas.CanvasPolicy' rel='draw2d.policy.canvas.CanvasPolicy' class='defined-in docClass'>draw2d.policy.canvas.CanvasPolicy</a><br/><a href='source/CanvasPolicy.html#draw2d-policy-canvas-CanvasPolicy-method-onClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.canvas.CanvasPolicy-method-onClick' class='name expandable'>onClick</a>( <span class='pre'>canvas, mouseX, mouseY</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Called by the canvas if the user click on a figure. ...</div><div class='long'><p>Called by the canvas if the user click on a figure.</p>\n        <p>Available since: <b>3.0.0</b></p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'>\n</div></li><li><span class='pre'>mouseX</span> : Number<div class='sub-desc'><p>the x coordinate of the mouse during the click event</p>\n</div></li><li><span class='pre'>mouseY</span> : Number<div class='sub-desc'><p>the y coordinate of the mouse during the click event</p>\n</div></li></ul></div></div></div><div id='method-onInstall' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.EditPolicy' rel='draw2d.policy.EditPolicy' class='defined-in docClass'>draw2d.policy.EditPolicy</a><br/><a href='source/EditPolicy.html#draw2d-policy-EditPolicy-method-onInstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.EditPolicy-method-onInstall' class='name expandable'>onInstall</a>( <span class='pre'>host</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called by the host if the policy has been installed. ...</div><div class='long'><p>Called by the host if the policy has been installed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>host</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a>/<a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onMouseDown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.policy.canvas.BoundingboxSelectionPolicy'>draw2d.policy.canvas.BoundingboxSelectionPolicy</span><br/><a href='source/BoundingboxSelectionPolicy.html#draw2d-policy-canvas-BoundingboxSelectionPolicy-method-onMouseDown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.canvas.BoundingboxSelectionPolicy-method-onMouseDown' class='name expandable'>onMouseDown</a>( <span class='pre'>canvas, x, y</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'>\n</div></li><li><span class='pre'>x</span> : Number<div class='sub-desc'><p>the x-coordinate of the mouse down event</p>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'><p>the y-coordinate of the mouse down event</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.policy.canvas.CanvasPolicy-method-onMouseDown\" rel=\"draw2d.policy.canvas.CanvasPolicy-method-onMouseDown\" class=\"docClass\">draw2d.policy.canvas.CanvasPolicy.onMouseDown</a></p></div></div></div><div id='method-onMouseDrag' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.policy.canvas.BoundingboxSelectionPolicy'>draw2d.policy.canvas.BoundingboxSelectionPolicy</span><br/><a href='source/BoundingboxSelectionPolicy.html#draw2d-policy-canvas-BoundingboxSelectionPolicy-method-onMouseDrag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.canvas.BoundingboxSelectionPolicy-method-onMouseDrag' class='name expandable'>onMouseDrag</a>( <span class='pre'>canvas, dx, dy, dx2, dy2</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'>\n</div></li><li><span class='pre'>dx</span> : Number<div class='sub-desc'><p>The x diff between start of dragging and this event</p>\n</div></li><li><span class='pre'>dy</span> : Number<div class='sub-desc'><p>The y diff between start of dragging and this event</p>\n</div></li><li><span class='pre'>dx2</span> : Number<div class='sub-desc'><p>The x diff since the last call of this dragging operation</p>\n</div></li><li><span class='pre'>dy2</span> : Number<div class='sub-desc'><p>The y diff since the last call of this dragging operation</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.policy.canvas.CanvasPolicy-method-onMouseDrag\" rel=\"draw2d.policy.canvas.CanvasPolicy-method-onMouseDrag\" class=\"docClass\">draw2d.policy.canvas.CanvasPolicy.onMouseDrag</a></p></div></div></div><div id='method-onMouseMove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.canvas.CanvasPolicy' rel='draw2d.policy.canvas.CanvasPolicy' class='defined-in docClass'>draw2d.policy.canvas.CanvasPolicy</a><br/><a href='source/CanvasPolicy.html#draw2d-policy-canvas-CanvasPolicy-method-onMouseMove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.canvas.CanvasPolicy-method-onMouseMove' class='name expandable'>onMouseMove</a>( <span class='pre'>canvas, x, y</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'>\n</div></li><li><span class='pre'>x</span> : Number<div class='sub-desc'><p>the x-coordinate of the mouse event</p>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'><p>the y-coordinate of the mouse event</p>\n</div></li></ul></div></div></div><div id='method-onMouseUp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.policy.canvas.BoundingboxSelectionPolicy'>draw2d.policy.canvas.BoundingboxSelectionPolicy</span><br/><a href='source/BoundingboxSelectionPolicy.html#draw2d-policy-canvas-BoundingboxSelectionPolicy-method-onMouseUp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.canvas.BoundingboxSelectionPolicy-method-onMouseUp' class='name expandable'>onMouseUp</a>( <span class='pre'>canvas, x, y</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'>\n</div></li><li><span class='pre'>x</span> : Number<div class='sub-desc'><p>the x-coordinate of the mouse down event</p>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'><p>the y-coordinate of the mouse down event</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.policy.canvas.CanvasPolicy-method-onMouseUp\" rel=\"draw2d.policy.canvas.CanvasPolicy-method-onMouseUp\" class=\"docClass\">draw2d.policy.canvas.CanvasPolicy.onMouseUp</a></p></div></div></div><div id='method-onUninstall' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.EditPolicy' rel='draw2d.policy.EditPolicy' class='defined-in docClass'>draw2d.policy.EditPolicy</a><br/><a href='source/EditPolicy.html#draw2d-policy-EditPolicy-method-onUninstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.EditPolicy-method-onUninstall' class='name expandable'>onUninstall</a>( <span class='pre'>host</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called by the host if the policy has been uninstalled. ...</div><div class='long'><p>Called by the host if the policy has been uninstalled.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>host</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a>/<a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-snap' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.canvas.CanvasPolicy' rel='draw2d.policy.canvas.CanvasPolicy' class='defined-in docClass'>draw2d.policy.canvas.CanvasPolicy</a><br/><a href='source/CanvasPolicy.html#draw2d-policy-canvas-CanvasPolicy-method-snap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.canvas.CanvasPolicy-method-snap' class='name expandable'>snap</a>( <span class='pre'>figure, clientPos</span> ) : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Adjust the coordinates to the given constraint. ...</div><div class='long'><p>Adjust the coordinates to the given constraint.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>figure</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>clientPos</span> : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a></span><div class='sub-desc'><p>the contraint position of th efigure</p>\n</div></li></ul></div></div></div></div></div></div></div>","mixedInto":[],"name":"draw2d.policy.canvas.BoundingboxSelectionPolicy","id":"class-draw2d.policy.canvas.BoundingboxSelectionPolicy","parentMixins":[],"subclasses":[],"aliases":{}});