define("angular/seajs-lazy-angular/0.0.1/seajs-lazy-angular",["angularjs"],function(a){function b(a,b){this.url=a,this.resolveCallback=b||e.noop}function c(a,b){var c={name:a,requires:b,realModule:null,__runBlocks:[],__controllers:{},factory:function(){return f.$provide.factory.apply(null,arguments),c},directive:function(){return f.$compileProvider.directive.apply(null,arguments),c},filter:function(){return f.$filterProvider.register.apply(null,arguments),c},controller:function(a,b){return e.isObject(a)?(f.$controllerProvider.register.apply(null,arguments),e.extend(this.__controllers,a)):(f.$controllerProvider.register.apply(null,arguments),this.__controllers[a]=b),c},provider:function(){return f.$provide.provider.apply(null,arguments),c},service:function(){return f.$provide.service.apply(null,arguments),c},constant:function(){return f.$provide.constant.apply(null,arguments),c},run:function(a){return this.__runBlocks.push(a),c},seajsController:function(a){this.controller(a.__moduleUri,a)},retrieveController:function(a){return this.__controllers.hasOwnProperty(a)?this.__controllers[a]:null},template:function(a){this.run(["$templateCache",function(b){e.forEach(a,function(a,c){b.put(c,a)})}])},resolveRun:function(a){e.forEach(this.__runBlocks,function(b){a.invoke(b)}),e.forEach(this.requires,function(b){e.module(b).resolveRun(a)}),this.__runBlocks.length=0}};return c}function d(a){var b=a.split("/"),c=b[b.length-1].replace(/\.js$/,""),d="../template/"+c+".html";return seajs.resolve(d+"#",a)}var e=a("angularjs"),f={},g={},h=e.module;seajs.on("exec",function(a){a.exports&&(a.exports.__moduleUri=a.uri)});var i={cacheInternals:["$provide","$compileProvider","$filterProvider","$controllerProvider","$templateCacheProvider",function(a,b,c,e,g){f.$provide=a,f.$compileProvider=b,f.$filterProvider=c,f.$controllerProvider=e,f.$provide.factory({RelativeUrlFactory:function(){return{create:function(a){return function(b){var c=d(a.uri);return seajs.resolve(b+"#",c)}}}}}),g.$get=["$cacheFactory",function(a){var b=a("templates"),c=b.get;return b.get=function(a){var b=seajs.cache[a];return b?b.exec():c(a)},b}]}],patchAngular:function(){e.module=function(a,b){var d;return"undefined"==typeof b?d=g.hasOwnProperty(a)?g[a]:h.call(e,a):(d=c(a,b),g[a]=d,d.realModule=h.call(e,a,b)),d}},setResolveCallback:function(a){this.resolveCallback=a},createLazyStub:function(a,c){return new b(a,c||this.resolveCallback)}};return b.prototype.createRoute=function(b,c){var e=this.url,f=this.resolveCallback,g=seajs.resolve(b,seajs.resolve(this.url));return c=c||{},c.controller=g,c.resolve={module:["$q","$route","$templateCache","$exceptionHandler","$injector",function(b,c,h,i,j){var k=b.defer(),l=b.defer();return c.current.template||c.current.templateUrl||(c.current.template=function(){return l.promise}),a.async(e,function(b){b.resolveRun(j);var c=b.retrieveController(g);if(c.template){var e=c.template;l.resolve(e)}else{var h;h=c.templateUrl?seajs.resolve(c.templateUrl+"#",g):d(g),a.async(h+"#",function(a){l.resolve(a)})}j.invoke(f,null,{controller:c}),k.resolve(b)}),k.promise}]},c},i});