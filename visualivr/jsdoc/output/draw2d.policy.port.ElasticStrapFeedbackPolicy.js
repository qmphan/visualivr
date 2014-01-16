Ext.data.JsonP.draw2d_policy_port_ElasticStrapFeedbackPolicy({"requires":[],"short_doc":"A draw2d.policy.SelectionFeedbackPolicy that is sensitive to the canvas selection. ...","uses":[],"superclasses":["draw2d.policy.EditPolicy","draw2d.policy.figure.DragDropEditPolicy"],"extends":"draw2d.policy.figure.DragDropEditPolicy","alternateClassNames":[],"mixins":[],"tagname":"class","meta":{},"files":[{"href":"ElasticStrapFeedbackPolicy.html#draw2d-policy-port-ElasticStrapFeedbackPolicy","filename":"ElasticStrapFeedbackPolicy.js"}],"component":false,"members":[{"owner":"draw2d.policy.port.ElasticStrapFeedbackPolicy","tagname":"method","meta":{},"name":"constructor","id":"method-constructor"},{"owner":"draw2d.policy.figure.DragDropEditPolicy","tagname":"method","meta":{},"name":"adjustDimension","id":"method-adjustDimension"},{"owner":"draw2d.policy.figure.DragDropEditPolicy","tagname":"method","meta":{"template":true},"name":"adjustPosition","id":"method-adjustPosition"},{"owner":"draw2d.policy.figure.DragDropEditPolicy","tagname":"method","meta":{"template":true},"name":"moved","id":"method-moved"},{"owner":"draw2d.policy.port.ElasticStrapFeedbackPolicy","tagname":"method","meta":{"template":true},"name":"onDrag","id":"method-onDrag"},{"owner":"draw2d.policy.port.ElasticStrapFeedbackPolicy","tagname":"method","meta":{"template":true},"name":"onDragEnd","id":"method-onDragEnd"},{"owner":"draw2d.policy.port.ElasticStrapFeedbackPolicy","tagname":"method","meta":{"template":true},"name":"onDragStart","id":"method-onDragStart"},{"owner":"draw2d.policy.EditPolicy","tagname":"method","meta":{},"name":"onInstall","id":"method-onInstall"},{"owner":"draw2d.policy.EditPolicy","tagname":"method","meta":{},"name":"onUninstall","id":"method-onUninstall"}],"author":[{"email":null,"tagname":"author","name":"Andreas Herz"}],"autodetected":{},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/draw2d.policy.EditPolicy' rel='draw2d.policy.EditPolicy' class='docClass'>draw2d.policy.EditPolicy</a><div class='subclass '><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='docClass'>draw2d.policy.figure.DragDropEditPolicy</a><div class='subclass '><strong>draw2d.policy.port.ElasticStrapFeedbackPolicy</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/ElasticStrapFeedbackPolicy.html#draw2d-policy-port-ElasticStrapFeedbackPolicy' target='_blank'>ElasticStrapFeedbackPolicy.js</a></div></pre><div class='doc-contents'><p>A draw2d.policy.SelectionFeedbackPolicy that is sensitive to the canvas selection. Subclasses will typically\ndecorate the <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">figure</a> with things like selection handles and/or focus feedback.\n<br>\nIf you want to change the handle visibility for a figure, then you should use SelectionFeedbackPolicy to do that.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.policy.port.ElasticStrapFeedbackPolicy'>draw2d.policy.port.ElasticStrapFeedbackPolicy</span><br/><a href='source/ElasticStrapFeedbackPolicy.html#draw2d-policy-port-ElasticStrapFeedbackPolicy-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.policy.port.ElasticStrapFeedbackPolicy-method-constructor' class='name expandable'>draw2d.policy.port.ElasticStrapFeedbackPolicy</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.policy.port.ElasticStrapFeedbackPolicy\" rel=\"draw2d.policy.port.ElasticStrapFeedbackPolicy\" class=\"docClass\">draw2d.policy.port.ElasticStrapFeedbackPolicy</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a new Router object ...</div><div class='long'><p>Creates a new Router object</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.policy.port.ElasticStrapFeedbackPolicy\" rel=\"draw2d.policy.port.ElasticStrapFeedbackPolicy\" class=\"docClass\">draw2d.policy.port.ElasticStrapFeedbackPolicy</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.policy.figure.DragDropEditPolicy-method-constructor\" rel=\"draw2d.policy.figure.DragDropEditPolicy-method-constructor\" class=\"docClass\">draw2d.policy.figure.DragDropEditPolicy.constructor</a></p></div></div></div><div id='method-adjustDimension' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='defined-in docClass'>draw2d.policy.figure.DragDropEditPolicy</a><br/><a href='source/DragDropEditPolicy.html#draw2d-policy-figure-DragDropEditPolicy-method-adjustDimension' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy-method-adjustDimension' class='name expandable'>adjustDimension</a>( <span class='pre'>figure, w, h</span> ) : <a href=\"#!/api/draw2d.geo.Rectangle\" rel=\"draw2d.geo.Rectangle\" class=\"docClass\">draw2d.geo.Rectangle</a><span class=\"signature\"></span></div><div class='description'><div class='short'>ensure that the dimension didn't goes outside the given restrictions ...</div><div class='long'><p>ensure that the dimension didn't goes outside the given restrictions</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>figure</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>w</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>h</span> : number<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.geo.Rectangle\" rel=\"draw2d.geo.Rectangle\" class=\"docClass\">draw2d.geo.Rectangle</a></span><div class='sub-desc'><p>the constraint position of the figure</p>\n</div></li></ul></div></div></div><div id='method-adjustPosition' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='defined-in docClass'>draw2d.policy.figure.DragDropEditPolicy</a><br/><a href='source/DragDropEditPolicy.html#draw2d-policy-figure-DragDropEditPolicy-method-adjustPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy-method-adjustPosition' class='name expandable'>adjustPosition</a>( <span class='pre'>figure, x, [y]</span> ) : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Adjust the coordinates to the rectangle/region of this constraint. ...</div><div class='long'><p>Adjust the coordinates to the rectangle/region of this constraint.</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>figure</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>x</span> : Number|<a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : number (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a></span><div class='sub-desc'><p>the constraint position of the figure</p>\n</div></li></ul></div></div></div><div id='method-moved' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy' rel='draw2d.policy.figure.DragDropEditPolicy' class='defined-in docClass'>draw2d.policy.figure.DragDropEditPolicy</a><br/><a href='source/DragDropEditPolicy.html#draw2d-policy-figure-DragDropEditPolicy-method-moved' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.figure.DragDropEditPolicy-method-moved' class='name expandable'>moved</a>( <span class='pre'>canvas, figure</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Callback if the figure has been moved ...</div><div class='long'><p>Callback if the figure has been moved</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'><p>The host canvas</p>\n</div></li><li><span class='pre'>figure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'><p>The related figure</p>\n</div></li></ul></div></div></div><div id='method-onDrag' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.policy.port.ElasticStrapFeedbackPolicy'>draw2d.policy.port.ElasticStrapFeedbackPolicy</span><br/><a href='source/ElasticStrapFeedbackPolicy.html#draw2d-policy-port-ElasticStrapFeedbackPolicy-method-onDrag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.port.ElasticStrapFeedbackPolicy-method-onDrag' class='name expandable'>onDrag</a>( <span class='pre'>canvas, figure</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Called by the framework during drag a figure. ...</div><div class='long'><p>Called by the framework during drag a figure.</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'><p>The host canvas</p>\n</div></li><li><span class='pre'>figure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'><p>The related figure</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.policy.figure.DragDropEditPolicy-method-onDrag\" rel=\"draw2d.policy.figure.DragDropEditPolicy-method-onDrag\" class=\"docClass\">draw2d.policy.figure.DragDropEditPolicy.onDrag</a></p></div></div></div><div id='method-onDragEnd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.policy.port.ElasticStrapFeedbackPolicy'>draw2d.policy.port.ElasticStrapFeedbackPolicy</span><br/><a href='source/ElasticStrapFeedbackPolicy.html#draw2d-policy-port-ElasticStrapFeedbackPolicy-method-onDragEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.port.ElasticStrapFeedbackPolicy-method-onDragEnd' class='name expandable'>onDragEnd</a>( <span class='pre'>canvas, figure</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Called by the framework if the drag drop operation ends. ...</div><div class='long'><p>Called by the framework if the drag drop operation ends.</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'><p>The host canvas</p>\n</div></li><li><span class='pre'>figure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'><p>The related figure</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.policy.figure.DragDropEditPolicy-method-onDragEnd\" rel=\"draw2d.policy.figure.DragDropEditPolicy-method-onDragEnd\" class=\"docClass\">draw2d.policy.figure.DragDropEditPolicy.onDragEnd</a></p></div></div></div><div id='method-onDragStart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.policy.port.ElasticStrapFeedbackPolicy'>draw2d.policy.port.ElasticStrapFeedbackPolicy</span><br/><a href='source/ElasticStrapFeedbackPolicy.html#draw2d-policy-port-ElasticStrapFeedbackPolicy-method-onDragStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.port.ElasticStrapFeedbackPolicy-method-onDragStart' class='name expandable'>onDragStart</a>( <span class='pre'>canvas, figure</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Called by the framework if the related shape has init a drag&amp;drop\noperation ...</div><div class='long'><p>Called by the framework if the related shape has init a drag&amp;drop\noperation</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'><p>The host canvas</p>\n</div></li><li><span class='pre'>figure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'><p>The related figure</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.policy.figure.DragDropEditPolicy-method-onDragStart\" rel=\"draw2d.policy.figure.DragDropEditPolicy-method-onDragStart\" class=\"docClass\">draw2d.policy.figure.DragDropEditPolicy.onDragStart</a></p></div></div></div><div id='method-onInstall' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.EditPolicy' rel='draw2d.policy.EditPolicy' class='defined-in docClass'>draw2d.policy.EditPolicy</a><br/><a href='source/EditPolicy.html#draw2d-policy-EditPolicy-method-onInstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.EditPolicy-method-onInstall' class='name expandable'>onInstall</a>( <span class='pre'>host</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called by the host if the policy has been installed. ...</div><div class='long'><p>Called by the host if the policy has been installed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>host</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a>/<a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onUninstall' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.policy.EditPolicy' rel='draw2d.policy.EditPolicy' class='defined-in docClass'>draw2d.policy.EditPolicy</a><br/><a href='source/EditPolicy.html#draw2d-policy-EditPolicy-method-onUninstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.policy.EditPolicy-method-onUninstall' class='name expandable'>onUninstall</a>( <span class='pre'>host</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called by the host if the policy has been uninstalled. ...</div><div class='long'><p>Called by the host if the policy has been uninstalled.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>host</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a>/<a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","mixedInto":[],"name":"draw2d.policy.port.ElasticStrapFeedbackPolicy","id":"class-draw2d.policy.port.ElasticStrapFeedbackPolicy","parentMixins":[],"subclasses":[],"aliases":{}});