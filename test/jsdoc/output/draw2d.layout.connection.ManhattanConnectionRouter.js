Ext.data.JsonP.draw2d_layout_connection_ManhattanConnectionRouter({"requires":[],"short_doc":"Provides a draw2d.Connection with an orthogonal route between the Connection's source\nand target anchors. ...","uses":[],"superclasses":["draw2d.layout.connection.ConnectionRouter"],"extends":"draw2d.layout.connection.ConnectionRouter","alternateClassNames":[],"mixins":[],"tagname":"class","meta":{},"files":[{"href":"ManhattanConnectionRouter.html#draw2d-layout-connection-ManhattanConnectionRouter","filename":"ManhattanConnectionRouter.js"}],"component":false,"members":[{"owner":"draw2d.layout.connection.ManhattanConnectionRouter","tagname":"method","meta":{},"name":"constructor","id":"method-constructor"},{"owner":"draw2d.layout.connection.ManhattanConnectionRouter","tagname":"method","meta":{"private":true},"name":"_route","id":"method-_route"},{"owner":"draw2d.layout.connection.ConnectionRouter","tagname":"method","meta":{},"name":"getPersistentAttributes","id":"method-getPersistentAttributes"},{"owner":"draw2d.layout.connection.ConnectionRouter","tagname":"method","meta":{"template":true},"name":"onInstall","id":"method-onInstall"},{"owner":"draw2d.layout.connection.ConnectionRouter","tagname":"method","meta":{"template":true},"name":"onUninstall","id":"method-onUninstall"},{"owner":"draw2d.layout.connection.ManhattanConnectionRouter","tagname":"method","meta":{},"name":"route","id":"method-route"},{"owner":"draw2d.layout.connection.ConnectionRouter","tagname":"method","meta":{},"name":"setPersistentAttributes","id":"method-setPersistentAttributes"}],"author":[{"email":null,"tagname":"author","name":"Andreas Herz"}],"autodetected":{},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='docClass'>draw2d.layout.connection.ConnectionRouter</a><div class='subclass '><strong>draw2d.layout.connection.ManhattanConnectionRouter</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/draw2d.layout.connection.CircuitConnectionRouter' rel='draw2d.layout.connection.CircuitConnectionRouter' class='docClass'>draw2d.layout.connection.CircuitConnectionRouter</a></div><div class='dependency'><a href='#!/api/draw2d.layout.connection.ManhattanBridgedConnectionRouter' rel='draw2d.layout.connection.ManhattanBridgedConnectionRouter' class='docClass'>draw2d.layout.connection.ManhattanBridgedConnectionRouter</a></div><div class='dependency'><a href='#!/api/draw2d.layout.connection.MuteableManhattanConnectionRouter' rel='draw2d.layout.connection.MuteableManhattanConnectionRouter' class='docClass'>draw2d.layout.connection.MuteableManhattanConnectionRouter</a></div><div class='dependency'><a href='#!/api/draw2d.layout.connection.SplineConnectionRouter' rel='draw2d.layout.connection.SplineConnectionRouter' class='docClass'>draw2d.layout.connection.SplineConnectionRouter</a></div><h4>Files</h4><div class='dependency'><a href='source/ManhattanConnectionRouter.html#draw2d-layout-connection-ManhattanConnectionRouter' target='_blank'>ManhattanConnectionRouter.js</a></div></pre><div class='doc-contents'><p>Provides a <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a> with an orthogonal route between the Connection's source\nand target anchors.</p>\n\n<p>See the example:</p>\n\n<pre class='inline-example preview small frame'><code>// Override the default connection type. This is used during drag&amp;drop operations of ports.\n//\n<a href=\"#!/api/draw2d.Connection-method-createConnection\" rel=\"draw2d.Connection-method-createConnection\" class=\"docClass\">draw2d.Connection.createConnection</a>=function(sourcePort, targetPort){\n   // return my special kind of connection\n   var con = new <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a>();\n   con.setRouter(new <a href=\"#!/api/draw2d.layout.connection.ManhattanConnectionRouter\" rel=\"draw2d.layout.connection.ManhattanConnectionRouter\" class=\"docClass\">draw2d.layout.connection.ManhattanConnectionRouter</a>());\n   return con;\n};\n\n// create and add two nodes which contains Ports (In and OUT)\n//\nvar start = new <a href=\"#!/api/draw2d.shape.node.Start\" rel=\"draw2d.shape.node.Start\" class=\"docClass\">draw2d.shape.node.Start</a>();\nvar end   = new <a href=\"#!/api/draw2d.shape.node.End\" rel=\"draw2d.shape.node.End\" class=\"docClass\">draw2d.shape.node.End</a>();\n\n// ...add it to the canvas \ncanvas.addFigure( start, 50,50);\ncanvas.addFigure( end, 230,80);\n\n// first Connection\n//\nvar c = <a href=\"#!/api/draw2d.Connection-method-createConnection\" rel=\"draw2d.Connection-method-createConnection\" class=\"docClass\">draw2d.Connection.createConnection</a>();\nc.setSource(start.getOutputPort(0));\nc.setTarget(end.getInputPort(0));\ncanvas.addFigure(c);\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.ManhattanConnectionRouter'>draw2d.layout.connection.ManhattanConnectionRouter</span><br/><a href='source/ManhattanConnectionRouter.html#draw2d-layout-connection-ManhattanConnectionRouter-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.layout.connection.ManhattanConnectionRouter-method-constructor' class='name expandable'>draw2d.layout.connection.ManhattanConnectionRouter</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.layout.connection.ManhattanConnectionRouter\" rel=\"draw2d.layout.connection.ManhattanConnectionRouter\" class=\"docClass\">draw2d.layout.connection.ManhattanConnectionRouter</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a new Router object. ...</div><div class='long'><p>Creates a new Router object.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.layout.connection.ManhattanConnectionRouter\" rel=\"draw2d.layout.connection.ManhattanConnectionRouter\" class=\"docClass\">draw2d.layout.connection.ManhattanConnectionRouter</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.layout.connection.ConnectionRouter-method-constructor\" rel=\"draw2d.layout.connection.ConnectionRouter-method-constructor\" class=\"docClass\">draw2d.layout.connection.ConnectionRouter.constructor</a></p></div></div></div><div id='method-_route' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.ManhattanConnectionRouter'>draw2d.layout.connection.ManhattanConnectionRouter</span><br/><a href='source/ManhattanConnectionRouter.html#draw2d-layout-connection-ManhattanConnectionRouter-method-_route' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ManhattanConnectionRouter-method-_route' class='name expandable'>_route</a>( <span class='pre'>conn, fromPt, fromDir, toPt, toDir</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Internal routing algorithm. ...</div><div class='long'><p>Internal routing algorithm.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conn</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'>\n</div></li><li><span class='pre'>fromPt</span> : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><div class='sub-desc'>\n</div></li><li><span class='pre'>fromDir</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>toPt</span> : <a href=\"#!/api/draw2d.geo.Point\" rel=\"draw2d.geo.Point\" class=\"docClass\">draw2d.geo.Point</a><div class='sub-desc'>\n</div></li><li><span class='pre'>toDir</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPersistentAttributes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ConnectionRouter</a><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-getPersistentAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-getPersistentAttributes' class='name expandable'>getPersistentAttributes</a>( <span class='pre'>line, memento</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Tweak or enrich the polyline persistence data with routing information ...</div><div class='long'><p>Tweak or enrich the polyline persistence data with routing information</p>\n        <p>Available since: <b>2.10.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>line</span> : <a href=\"#!/api/draw2d.shape.basic.PolyLine\" rel=\"draw2d.shape.basic.PolyLine\" class=\"docClass\">draw2d.shape.basic.PolyLine</a><div class='sub-desc'>\n</div></li><li><span class='pre'>memento</span> : Object<div class='sub-desc'><p>The memento data of the polyline</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onInstall' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ConnectionRouter</a><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-onInstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-onInstall' class='name expandable'>onInstall</a>( <span class='pre'>connection</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Callback method if the router has been assigned to a connection. ...</div><div class='long'><p>Callback method if the router has been assigned to a connection.</p>\n        <p>Available since: <b>2.7.2</b></p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>connection</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>The assigned connection</p>\n</div></li></ul></div></div></div><div id='method-onUninstall' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ConnectionRouter</a><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-onUninstall' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-onUninstall' class='name expandable'>onUninstall</a>( <span class='pre'>connection</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Callback method if the router has been removed from the connection. ...</div><div class='long'><p>Callback method if the router has been removed from the connection.</p>\n        <p>Available since: <b>2.7.2</b></p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>connection</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>The related connection</p>\n</div></li></ul></div></div></div><div id='method-route' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.ManhattanConnectionRouter'>draw2d.layout.connection.ManhattanConnectionRouter</span><br/><a href='source/ManhattanConnectionRouter.html#draw2d-layout-connection-ManhattanConnectionRouter-method-route' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ManhattanConnectionRouter-method-route' class='name expandable'>route</a>( <span class='pre'>conn, oldJunctionPoints</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Layout the hands over connection in a manhattan like layout ...</div><div class='long'><p>Layout the hands over connection in a manhattan like layout</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conn</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'>\n</div></li><li><span class='pre'>oldJunctionPoints</span> : <a href=\"#!/api/draw2d.util.ArrayList\" rel=\"draw2d.util.ArrayList\" class=\"docClass\">draw2d.util.ArrayList</a><div class='sub-desc'><p>old/existing junction points of the Connection</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/draw2d.layout.connection.ConnectionRouter-method-route\" rel=\"draw2d.layout.connection.ConnectionRouter-method-route\" class=\"docClass\">draw2d.layout.connection.ConnectionRouter.route</a></p></div></div></div><div id='method-setPersistentAttributes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ConnectionRouter</a><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-setPersistentAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-setPersistentAttributes' class='name expandable'>setPersistentAttributes</a>( <span class='pre'>memento</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>set the attributes for the polyline with routing information ...</div><div class='long'><p>set the attributes for the polyline with routing information</p>\n        <p>Available since: <b>2.10.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>memento</span> : Object<div class='sub-desc'><p>the JSON data to read</p>\n</div></li></ul></div></div></div></div></div></div></div>","mixedInto":[],"name":"draw2d.layout.connection.ManhattanConnectionRouter","id":"class-draw2d.layout.connection.ManhattanConnectionRouter","parentMixins":[],"subclasses":["draw2d.layout.connection.CircuitConnectionRouter","draw2d.layout.connection.ManhattanBridgedConnectionRouter","draw2d.layout.connection.MuteableManhattanConnectionRouter","draw2d.layout.connection.SplineConnectionRouter"],"aliases":{},"inheritable":true});