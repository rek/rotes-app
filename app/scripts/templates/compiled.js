(function(){dust.register("appSkeleton",body_0);function body_0(chk,ctx){return chk.write("<div id=\"layout-template\"><header><h1>").reference(ctx.get(["title"], false),ctx,"h").write("<h1></header><section><navigation id=\"menu\">...</navigation><article id=\"content\">.......</article></section></div>");}return body_0;})();
(function(){dust.register("rote",body_0);function body_0(chk,ctx){return chk.write("<h2>").reference(ctx.get(["title"], false),ctx,"h").write("</h2><ul>").section(ctx.get(["names"], false),ctx,{"block":body_1},null).write("</ul>");}function body_1(chk,ctx){return chk.write("<li>").reference(ctx.get(["name"], false),ctx,"h").write("</li>\n");}return body_0;})();