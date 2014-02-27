Ext.data.JsonP.draw2d_layout_connection_MazeConnectionRouter({"requires":[],"short_doc":"BETA VERSION. ...","uses":[],"superclasses":["draw2d.layout.connection.ConnectionRouter"],"extends":"draw2d.layout.connection.ConnectionRouter","alternateClassNames":[],"mixins":[],"tagname":"class","meta":{},"files":[{"href":"MazeConnectionRouter.html#draw2d-layout-connection-MazeConnectionRouter","filename":"MazeConnectionRouter.js"}],"component":false,"members":[{"owner":"draw2d.layout.connection.MazeConnectionRouter","tagname":"method","meta":{},"name":"constructor","id":"method-constructor"},{"owner":"draw2d.layout.connection.MazeConnectionRouter","tagname":"method","meta":{"private":true},"name":"_route","id":"method-_route"},{"owner":"draw2d.layout.connection.MazeConnectionRouter","tagname":"method","meta":{},"name":"generateNoGoGrid","id":"method-generateNoGoGrid"},{"owner":"draw2d.layout.connection.MazeConnectionRouter","tagname":"method","meta":{},"name":"getAddjustedPoint","id":"method-getAddjustedPoint"},{"owner":"draw2d.layout.connection.ConnectionRouter","tagname":"method","meta":{},"name":"getPersistentAttributes","id":"method-getPersistentAttributes"},{"owner":"draw2d.layout.connection.ConnectionRouter","tagname":"method","meta":{"template":true},"name":"onInstall","id":"method-onInstall"},{"owner":"draw2d.layout.connection.ConnectionRouter","tagname":"method","meta":{"template":true},"name":"onUninstall","id":"method-onUninstall"},{"owner":"draw2d.layout.connection.MazeConnectionRouter","tagname":"method","meta":{},"name":"route","id":"method-route"},{"owner":"draw2d.layout.connection.ConnectionRouter","tagname":"method","meta":{},"name":"setPersistentAttributes","id":"method-setPersistentAttributes"}],"author":[{"email":null,"tagname":"author","name":"Andreas Herz"}],"autodetected":{},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='docClass'>draw2d.layout.connection.ConnectionRouter</a><div class='subclass '><strong>draw2d.layout.connection.MazeConnectionRouter</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/draw2d.layout.connection.SketchBridgedConnectionRouter' rel='draw2d.layout.connection.SketchBridgedConnectionRouter' class='docClass'>draw2d.layout.connection.SketchBridgedConnectionRouter</a></div><h4>Files</h4><div class='dependency'><a href='source/MazeConnectionRouter.html#draw2d-layout-connection-MazeConnectionRouter' target='_blank'>MazeConnectionRouter.js</a></div></pre><div class='doc-contents'><p><b>BETA VERSION. Not for production!!!<br></b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.MazeConnectionRouter'>draw2d.layout.connection.MazeConnectionRouter</span><br/><a href='source/MazeConnectionRouter.html#draw2d-layout-connection-MazeConnectionRouter-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter-method-constructor' class='name expandable'>draw2d.layout.connection.MazeConnectionRouter</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.layout.connection.MazeConnectionRouter\" rel=\"draw2d.layout.connection.MazeConnectionRouter\" class=\"docClass\">draw2d.layout.connection.MazeConnectionRouter</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a new Router object. ...</div><div class='long'><p>Creates a new Router object.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.layout.connection.MazeConnectionRouter\" rel=\"draw2d.layout.connection.MazeConnectionRouter\" class=\"docClass\">draw2d.layout.connection.MazeConnectionRouter</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.layout.connection.ConnectionRouter-method-constructor\" rel=\"draw2d.layout.connection.ConnectionRouter-method-constructor\" class=\"docClass\">draw2d.layout.connection.ConnectionRouter.constructor</a></p></div></div></div><div id='method-_route' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.MazeConnectionRouter'>draw2d.layout.connection.MazeConnectionRouter</span><br/><a href='source/MazeConnectionRouter.html#draw2d-layout-connection-MazeConnectionRouter-method-_route' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter-method-_route' class='name expandable'>_route</a>( <span class='pre'>conn, fromPt, fromDir, toPt, toDir</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Internal routing algorithm. ...</div><div class='long'><p>Internal routing algorithm.\n     * <p>\nPossible values:</p>\n\n<ul>\n  <li>up -&gt; 0</li>\n  <li>right -&gt; 1</li>\n  <li>down -&gt; 2</li>\n  <li>left -&gt; 3</li>\n</ul>\n\n\n<p><p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conn</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'>\n</div></li><li><span class='pre'>fromPt</span> : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><div class='sub-desc'>\n</div></li><li><span class='pre'>fromDir</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>toPt</span> : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><div class='sub-desc'>\n</div></li><li><span class='pre'>toDir</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-generateNoGoGrid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.MazeConnectionRouter'>draw2d.layout.connection.MazeConnectionRouter</span><br/><a href='source/MazeConnectionRouter.html#draw2d-layout-connection-MazeConnectionRouter-method-generateNoGoGrid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter-method-generateNoGoGrid' class='name expandable'>generateNoGoGrid</a>( <span class='pre'>conn</span> ) : PF.Grid<span class=\"signature\"></span></div><div class='description'><div class='short'>Generate a grid base no go map required for the path finding algorithm ...</div><div class='long'><p>Generate a grid base no go map required for the path finding algorithm</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conn</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>PF.Grid</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAddjustedPoint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.MazeConnectionRouter'>draw2d.layout.connection.MazeConnectionRouter</span><br/><a href='source/MazeConnectionRouter.html#draw2d-layout-connection-MazeConnectionRouter-method-getAddjustedPoint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter-method-getAddjustedPoint' class='name expandable'>getAddjustedPoint</a>( <span class='pre'>pt, direction, adjustment</span> ) : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><span class=\"signature\"></span></div><div class='description'><div class='short'>move the point in the given direction with the given offset ...</div><div class='long'><p>move the point in the given direction with the given offset</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pt</span> : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><div class='sub-desc'>\n</div></li><li><span class='pre'>direction</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>adjustment</span> : Number<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPersistentAttributes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ConnectionRouter</a><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-getPersistentAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-getPersistentAttributes' class='name expandable'>getPersistentAttributes</a>( <span class='pre'>line, memento</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Tweak or enrich the polyline persistence data with routing information ...</div><div class='long'><p>Tweak or enrich the polyline persistence data with routing information</p>\n        <p>Available since: <b>2.10.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>line</span> : <a href=\"#!/api/draw2d.shape.basic.PolyLine\" rel=\"draw2d.shape.basic.PolyLine\" class=\"docClass\">draw2d.shape.basic.PolyLine</a><div class='sub-desc'>\n</div></li><li><span class='pre'>memento</span> : Object<div class='sub-desc'><p>The memento data of the polyline</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onInstall' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ConnectionRouter</a><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-onInstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-onInstall' class='name expandable'>onInstall</a>( <span class='pre'>connection</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Callback method if the router has been assigned to a connection. ...</div><div class='long'><p>Callback method if the router has been assigned to a connection.</p>\n        <p>Available since: <b>2.7.2</b></p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>connection</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>The assigned connection</p>\n</div></li></ul></div></div></div><div id='method-onUninstall' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ConnectionRouter</a><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-onUninstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-onUninstall' class='name expandable'>onUninstall</a>( <span class='pre'>connection</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Callback method if the router has been removed from the connection. ...</div><div class='long'><p>Callback method if the router has been removed from the connection.</p>\n        <p>Available since: <b>2.7.2</b></p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>connection</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>The related connection</p>\n</div></li></ul></div></div></div><div id='method-route' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.MazeConnectionRouter'>draw2d.layout.connection.MazeConnectionRouter</span><br/><a href='source/MazeConnectionRouter.html#draw2d-layout-connection-MazeConnectionRouter-method-route' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.MazeConnectionRouter-method-route' class='name expandable'>route</a>( <span class='pre'>conn, oldJunctionPoints</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Layout the hands over connection in a manhattan like layout ...</div><div class='long'><p>Layout the hands over connection in a manhattan like layout</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conn</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'>\n</div></li><li><span class='pre'>oldJunctionPoints</span> : <a href=\"#!/api/draw2d.util.ArrayList\" rel=\"draw2d.util.ArrayList\" class=\"docClass\">draw2d.util.ArrayList</a><div class='sub-desc'><p>old/existing junction points of the Connection</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.layout.connection.ConnectionRouter-method-route\" rel=\"draw2d.layout.connection.ConnectionRouter-method-route\" class=\"docClass\">draw2d.layout.connection.ConnectionRouter.route</a></p></div></div></div><div id='method-setPersistentAttributes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ConnectionRouter</a><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-setPersistentAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-setPersistentAttributes' class='name expandable'>setPersistentAttributes</a>( <span class='pre'>memento</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>set the attributes for the polyline with routing information ...</div><div class='long'><p>set the attributes for the polyline with routing information</p>\n        <p>Available since: <b>2.10.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>memento</span> : Object<div class='sub-desc'><p>the JSON data to read</p>\n</div></li></ul></div></div></div></div></div></div></div>","mixedInto":[],"name":"draw2d.layout.connection.MazeConnectionRouter","id":"class-draw2d.layout.connection.MazeConnectionRouter","parentMixins":[],"subclasses":["draw2d.layout.connection.SketchBridgedConnectionRouter"],"aliases":{},"inheritable":true});