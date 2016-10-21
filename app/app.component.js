"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  \t\t\t<div class=\"wrap\">\n  \t\t\t\t<div class=\"logo\">\n\t  \t\t\t\t<a href=\"#\"><img src=\"../img/logo.png\" alt=\"\"/>\n\t  \t\t\t\t<span class=\"logo-text\">\u4F01\u4E1A\u7248</span>\n\t  \t\t\t\t</a>\n  \t\t\t\t</div>\n  \t\t\t\t<div class=\"single-card\">\n  \t\t\t\t\t<div class=\"card-header ng-binding\">\u767B\u5F55 </div>\n  \t\t\t\t\t<div class=\"card-body ng-scope\" ng-switch-when=\"1\">\n  \t\t\t\t\t  <span class=\"sub-title ng-scope\" translate=\"user.ENTER_LOGIN_DOMAIN\">\u8F93\u5165\u4F60\u8981\u767B\u5F55\u7684\u4F01\u4E1A\u57DF\u540D</span>\n  \t\t\t\t\t  <form class=\"form-signin w5c-form form-horizontal m-t-20 ng-pristine ng-invalid ng-invalid-required\" role=\"form\" name=\"formSelectDomain\" w5c-form-validate=\"\">\n  \t\t\t\t\t  <div class=\"form-group\">\n\t  \t\t\t\t\t  <div class=\"input-group\">\n\t  \t\t\t\t\t  <input type=\"text\" lc-auto-focus=\"\" name=\"teamDomain\" required=\"\" ng-model=\"vm.team.inputDomain\" class=\"form-control ng-pristine valid ng-empty ng-invalid ng-invalid-required ng-touched\" placeholder=\"\u4F01\u4E1A\u57DF\u540D\"> \n\t  \t\t\t\t\t  <span class=\"input-group-addon ng-binding\">.worktile.com</span>\n\t  \t\t\t\t\t  </div>\n  \t\t\t\t\t  </div>\n  \t\t\t\t\t  <div class=\"form-group\"><button type=\"button\" w5c-form-submit=\"vm.checkDomain(formSelectDomain)\" class=\"btn btn-primary btn-lg btn-block ng-scope\" translate=\"user.NEXT\">\u4E0B\u4E00\u6B65</button>\n  \t\t\t\t\t  </div>\n  \t\t\t\t\t  <div class=\"form-group\">\n  \t\t\t\t\t  \t  <div class=\"col-sm-offset-6 col-sm-6 right\">\n  \t\t\t\t\t  \t       <span class=\"sub-title\"><a href=\"/find\" class=\"ng-binding\">\u5FD8\u8BB0\u4F01\u4E1A\u57DF\u540D?</a></span>\n  \t\t\t\t\t  \t  </div>\n  \t\t\t\t\t  </div>\n  \t\t\t\t\t  </form>\n  \t\t\t\t\t  </div>\n  \t\t\t\t</div>\n  \t\t\t\t<div class=\"secondary-panel ng-scope\" ng-if=\"vm.step==1\">\n\t\t\t\t\t<div translate=\"user.CREATE_NEW_ENTERPRISE\" class=\"ng-scope\">\u5982\u679C\u8FD8\u6CA1\u6709\u521B\u5EFA\u4F01\u4E1A\uFF0C\n\t\t\t\t\t<a href=\"/signup\">\u70B9\u51FB\u8FD9\u91CC</a>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4F01\u4E1A\u3002\n\t\t\t\t\t</div>\n\t\t\t    </div>\n  \t\t\t</div>\n\t  ",
            styles: ["\n    \t.wrap{\n    \t     max-width: 560px;\n             margin: 6% auto;\n    \t}\n    \t.logo{\n    \t\tmargin-bottom: 30px;\n    \t\ttext-align: center;\n    \t\tbox-sizing: border-box;\n    \t}\n    \t.logo a{\n    \t\tposition: relative;\n    \t\tdisplay: inline-block;\n    \t\t-webkit-font-smoothing: subpixel-antialiased;\n    \t\tcolor: #69d0d1;\n    \t\ttext-decoration: none;\n    \t\tbackground-color: transparent;\n    \t\tbox-sizing: border-box;\n    \t}\n    \t.logo img{\n    \t\theight: 54px;\n    \t\tmargin-bottom: 15px;\n    \t\tborder: 0;\n    \t\tvertical-align: middle;\n    \t\tbox-sizing: border-box;\n    \t}\n    \t.logo .logo-text{\n    \t\tposition: absolute;\n\t\t    display: inline-block;\n\t\t    right: 0;\n\t\t    bottom: 21px;\n\t\t    font-size: 15px;\n\t\t    font-weight: 700;\n    \t}\n    \t.single-card{\n    \t\tborder: 1px solid #ececec;\n\t\t    background: #fff;\n\t\t    padding: 30px;\n\t\t    box-shadow: 0 0 3px #eee,inset 0 0 3px #fff;\n\t\t    box-sizing:border-box;\n    \t}\n    \t.single-card .card-header {\n\t\t    border-bottom: solid 3px #ececec;\n\t\t    padding-bottom: 10px;\n\t\t    position: relative;\n\t\t    font-size: 22px;\n\t\t    color: #4d5250;\n\t\t    letter-spacing: 2px;\n\t\t}\n\t\t.single-card .card-body {\n\t\t    border-top: solid 1px #eaeaea;\n\t\t    margin-top: 5px;\n\t\t    padding: 20px 20px 0;\n\t\t}\n\t\t.single-card .sub-title {\n\t\t    font-size: 15px;\n\t\t    display: block;\n\t\t    line-height: 180%;\n\t\t    box-sizing:border-box;\n\t\t}\n\t\t.m-t-20 {\n    \t\tmargin-top: 20px;\n    \t\tbox-sizing: border-box;\n    \t}\n    \t.single-card .form-group {\n\t\t    margin-left: 0;\n\t\t    margin-right: 0;\n\t\t    margin-bottom: 15px;\n\t\t}\n\t\t.form-horizontal .form-group {\n\t\t    margin: 0 0 20px;\n\t\t}\n\t\t.input-group {\n\t\t    position: relative;\n\t\t    display: table;\n\t\t    border-collapse: separate;\n\t\t    box-sizing: border-box;\n\t\t}\n\t\t.single-card .card-body input.form-control {\n\t\t    padding: 10px 15px;\n\t\t    height: 44px;\n\t\t    font-size: 15px;\n\t\t    border-bottom-right-radius: 0;\n    \t\tborder-top-right-radius: 0;\n    \t\tborder-collapse: separate;\n\t\t    background: #fbfbfb;\n\t\t    border-radius: 3px;\n\t\t}\n\t\t.input-group-addon:last-child {\n    \t\tborder-left: 0;\n        }\n\t\t.input-group-addon {\n\t\t    font-size: 14px;\n\t\t    font-weight: 400;\n\t\t    line-height: 1;\n\t\t    color: #555;\n\t\t    text-align: center;\n\t\t    border-radius: 4px;\n\t\t    border: 1px solid #f3f3f3;\n\t\t    background: #fbfbfb;\n\t\t    cursor: pointer;\n\t\t    padding: 5px 15px;\n\t\t}\n\t\t.input-group-addon, .input-group-btn {\n\t\t    width: 1%;\n\t\t    white-space: nowrap;\n\t\t    vertical-align: middle;\n\t\t    display: table-cell;\n\t\t    box-sizing: border-box;\n\t\t}\n\t\t.input-group-addon, .input-group-btn {\n\t\t    width: 1%;\n\t\t    white-space: nowrap;\n\t\t    vertical-align: middle;\n\t\t}\n\t\t.input-group-addon, .input-group-btn {\n\t\t    display: table-cell;\n\t\t}\n\t\t.form-horizontal .form-group {\n\t\t    margin: 0 0 20px;\n\t\t    box-sizing: border-box;\n\t\t}\n\t\t.single-card .form-group {\n\t\t    margin-left: 0;\n\t\t    margin-right: 0;\n\t\t    margin-bottom: 15px;\n\t\t}\n\t\t.btn {\n\t\t    border-radius: 3px;\n\t\t    font-weight: 500;\n\t\t    border: 0;\n\t\t    margin-bottom: 0;\n\t\t    text-align: center;\n\t\t    vertical-align: middle;\n\t\t    -ms-touch-action: manipulation;\n\t\t    touch-action: manipulation;\n\t\t    cursor: pointer;\n\t\t    white-space: nowrap;\n\t\t}\n\t\t.btn-block {\n\t\t    display: block;\n\t\t}\n\t\t.btn-lg {\n\t\t    padding: 10px 16px;\n\t\t    font-size: 18px;\n\t\t    line-height: 1.3333333;\n\t\t    border-radius: 6px;\n\t\t}\n\t\t.btn-primary {\n\t\t    color: #fff;\n\t\t    background-color: #69d0d1;\n\t\t    border-color: #55cacb;\n\t\t}\n\t\t.single-card .right {\n\t\t    text-align: right;\n\t\t}\n\t\t.sub-title a{\n\t\t\t-webkit-font-smoothing: subpixel-antialiased;\n    \t\tcolor: #69d0d1;\n\t\t}\n    \t.secondary-panel {\n\t\t    margin-top: 30px;\n\t\t    font-size: 15px;\n\t\t    box-sizing: border-box;\n\t\t}\n\t\t.secondary-panel a{\n\t\t\t-webkit-font-smoothing: subpixel-antialiased;\n    \t\tcolor: #69d0d1;\n\t\t}\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map