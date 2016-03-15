var browser_1 = require('angular2/platform/browser');
var app_component_1 = require('./app.component');
browser_1.bootstrap(app_component_1.AppComponent, [])
    .then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (error) { return console.log(error); });
//# sourceMappingURL=main.js.map