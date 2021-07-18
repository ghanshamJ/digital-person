(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/OYR":
/*!**************************************************************************!*\
  !*** ./src/app/modules/person/pages/person-list/personList.component.ts ***!
  \**************************************************************************/
/*! exports provided: PersonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonListComponent", function() { return PersonListComponent; });
/* harmony import */ var src_app_shared_models_Person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/Person */ "f9vY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/person.service */ "jXhe");
/* harmony import */ var _components_custom_card_custom_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/custom-card/custom-list.component */ "bGAh");




class PersonListComponent {
    constructor(personService) {
        this.personService = personService;
        this.persons = [];
    }
    ngOnInit() {
        this.getPersons();
    }
    addPerson() {
        const person = new src_app_shared_models_Person__WEBPACK_IMPORTED_MODULE_0__["Person"]();
        this.personService.addPerson(person).subscribe(res => {
            alert("new Person added");
        });
    }
    getPersons() {
        this.personService.getPersons({}).subscribe(res => {
            this.persons = res;
        });
    }
}
PersonListComponent.ɵfac = function PersonListComponent_Factory(t) { return new (t || PersonListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"])); };
PersonListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PersonListComponent, selectors: [["app-person-list"]], decls: 1, vars: 1, consts: [[3, "persons"]], template: function PersonListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-custom-list", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("persons", ctx.persons);
    } }, directives: [_components_custom_card_custom_list_component__WEBPACK_IMPORTED_MODULE_3__["CustomListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJQZXJzb25MaXN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\digi-person\digital-person\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "305l":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-routing.module */ "cMCp");
/* harmony import */ var _pages_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login.component */ "d9Jh");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/password */ "+YxP");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "7dP1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_6__["CardModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__["AuthRoutingModule"],
            primeng_password__WEBPACK_IMPORTED_MODULE_4__["PasswordModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_pages_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        primeng_card__WEBPACK_IMPORTED_MODULE_6__["CardModule"],
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__["AuthRoutingModule"],
        primeng_password__WEBPACK_IMPORTED_MODULE_4__["PasswordModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"]], exports: [_pages_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]] }); })();


/***/ }),

/***/ "7dP1":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http/http.service */ "gHic");



const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__["JwtHelperService"]();
class AuthService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    login(reqParam) {
        return this.httpService.login(reqParam);
    }
    logout() {
        localStorage.setItem("token", "");
    }
    getToken() {
        return localStorage.getItem("token");
    }
    setToken(accessToken) {
        return localStorage.setItem("token", accessToken);
    }
    isAuthenticated() {
        const token = this.getToken();
        if (!token) {
            return false;
        }
        else {
            const isExpired = helper.isTokenExpired(token);
            return !isExpired;
        }
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CL/o":
/*!************************************************************************!*\
  !*** ./src/app/modules/person/pages/add-person/addPerson.component.ts ***!
  \************************************************************************/
/*! exports provided: AddPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPersonComponent", function() { return AddPersonComponent; });
/* harmony import */ var src_app_shared_models_Person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/Person */ "f9vY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/person.service */ "jXhe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "jIHw");








function AddPersonComponent_ng_template_1_Template(rf, ctx) { }
function AddPersonComponent_ng_template_16_Template(rf, ctx) { }
class AddPersonComponent {
    constructor(personService, router) {
        this.personService = personService;
        this.router = router;
        this.errorMsg = "";
    }
    ngOnInit() {
    }
    addPerson() {
        const person = new src_app_shared_models_Person__WEBPACK_IMPORTED_MODULE_0__["Person"]();
        person.name = this.name;
        person.email = this.email;
        person.address = this.address;
        person.country = this.country;
        person.dob = this.birthDate;
        this.personService.addPerson(person).subscribe(res => {
            alert("new Person added");
        });
    }
}
AddPersonComponent.ɵfac = function AddPersonComponent_Factory(t) { return new (t || AddPersonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AddPersonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddPersonComponent, selectors: [["app-add-person"]], decls: 17, vars: 4, consts: [["pTemplate", "header"], ["type", "text", "pInputText", "", "placeholder", "Name", 3, "ngModel", "ngModelChange"], ["type", "text", "pInputText", "", "placeholder", "Email", 3, "ngModel", "ngModelChange"], ["type", "text", "pInputText", "", "placeholder", "Address", 3, "ngModel", "ngModelChange"], ["type", "text", "pInputText", "", "placeholder", "Country", 3, "ngModel", "ngModelChange"], ["pButton", "", "type", "button", "label", "Add", 3, "click"], ["pTemplate", "footer"]], template: function AddPersonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddPersonComponent_ng_template_1_Template, 0, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPersonComponent_Template_input_ngModelChange_2_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPersonComponent_Template_input_ngModelChange_5_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPersonComponent_Template_input_ngModelChange_8_listener($event) { return ctx.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPersonComponent_Template_input_ngModelChange_11_listener($event) { return ctx.country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddPersonComponent_Template_button_click_14_listener() { return ctx.addPerson(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AddPersonComponent_ng_template_16_Template, 0, 0, "ng-template", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.country);
    } }, directives: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonDirective"]], encapsulation: 2 });


/***/ }),

/***/ "EzWU":
/*!*****************************!*\
  !*** ./src/app/core/Url.ts ***!
  \*****************************/
/*! exports provided: URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class URL {
    constructor() {
        this.authURL = "http://localhost:3000/api/v1/auth";
        this.authURL2 = "https://person-apk.herokuapp.com/auth";
        this.addPersonURL = "http://localhost:3000/api/v1/person";
        this.getPersonsURL = "http://localhost:3000/api/v1/persons";
    }
}
URL.ɵfac = function URL_Factory(t) { return new (t || URL)(); };
URL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: URL, factory: URL.ɵfac, providedIn: "root" });


/***/ }),

/***/ "FWXr":
/*!******************************************!*\
  !*** ./src/app/core/http/interceptor.ts ***!
  \******************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "7dP1");


class TokenInterceptor {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.auth.getToken()}`,
            },
        });
        return next.handle(request);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _core_services_person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/services/person.service */ "jXhe");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/services/auth.service */ "7dP1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/menubar */ "b1Ni");






function AppComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} }
function AppComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " hello ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 4);
} }
class AppComponent {
    constructor(primengConfig, personService, authService, router) {
        this.primengConfig = primengConfig;
        this.personService = personService;
        this.authService = authService;
        this.router = router;
        this.items = [];
    }
    ngOnInit() {
        this.items = [
            {
                label: "Persons",
                icon: "pi pi-users",
                items: [
                    {
                        label: "Add new",
                        icon: "pi pi-plus",
                        routerLink: "add-person",
                    },
                    {
                        label: "Show",
                        icon: "pi pi-list",
                        routerLink: "persons-list",
                    },
                ],
            },
            {
                label: "Graph",
                icon: "pi pi-chart-bar",
                routerLink: "graph",
            },
            this.authService.isAuthenticated()
                ? {
                    label: "Logout",
                    icon: "pi pi-fw pi-power-off",
                    command: () => {
                        this.logout();
                    },
                }
                : {
                    label: "Login",
                    icon: "pi pi-lock",
                    routerLink: "login",
                },
        ];
    }
    logout() {
        this.authService.logout();
        this.router.navigate(["login"]);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["PrimeNGConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[3, "model"], ["pTemplate", "start"], ["pTemplate", "end"], ["src", "assets/logo.png", "height", "40", 1, "p-mr-2"], ["type", "text", "pInputText", "", "placeholder", "Search"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-menubar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_template_1_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_template_2_Template, 2, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items);
    } }, directives: [primeng_menubar__WEBPACK_IMPORTED_MODULE_5__["Menubar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "Uu0a":
/*!******************************************!*\
  !*** ./src/app/shared/pipes/age.pipe.ts ***!
  \******************************************/
/*! exports provided: AgePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgePipe", function() { return AgePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AgePipe {
    transform(value, ...args) {
        return null;
    }
}
AgePipe.ɵfac = function AgePipe_Factory(t) { return new (t || AgePipe)(); };
AgePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "age", type: AgePipe, pure: true });


/***/ }),

/***/ "Xvq1":
/*!*************************************************!*\
  !*** ./src/app/modules/person/person.module.ts ***!
  \*************************************************/
/*! exports provided: PersonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonModule", function() { return PersonModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _person_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./person-routing.module */ "sSTA");
/* harmony import */ var _pages_person_list_personList_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/person-list/personList.component */ "/OYR");
/* harmony import */ var _pages_add_person_addPerson_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/add-person/addPerson.component */ "CL/o");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var _components_custom_card_custom_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/custom-card/custom-list.component */ "bGAh");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dataview */ "8CEF");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/rating */ "Js94");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class PersonModule {
}
PersonModule.ɵfac = function PersonModule_Factory(t) { return new (t || PersonModule)(); };
PersonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: PersonModule });
PersonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [], imports: [[
            primeng_dataview__WEBPACK_IMPORTED_MODULE_9__["DataViewModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_6__["CardModule"],
            _person_routing_module__WEBPACK_IMPORTED_MODULE_1__["PersonRoutingModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["DropdownModule"],
            primeng_rating__WEBPACK_IMPORTED_MODULE_11__["RatingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](PersonModule, { declarations: [_pages_person_list_personList_component__WEBPACK_IMPORTED_MODULE_2__["PersonListComponent"], _pages_add_person_addPerson_component__WEBPACK_IMPORTED_MODULE_3__["AddPersonComponent"], _components_custom_card_custom_list_component__WEBPACK_IMPORTED_MODULE_8__["CustomListComponent"]], imports: [primeng_dataview__WEBPACK_IMPORTED_MODULE_9__["DataViewModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        primeng_card__WEBPACK_IMPORTED_MODULE_6__["CardModule"],
        _person_routing_module__WEBPACK_IMPORTED_MODULE_1__["PersonRoutingModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["DropdownModule"],
        primeng_rating__WEBPACK_IMPORTED_MODULE_11__["RatingModule"]] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _shared_pipes_age_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/pipes/age.pipe */ "Uu0a");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _modules_person_person_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/person/person.module */ "Xvq1");
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/auth/auth.module */ "305l");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/menubar */ "b1Ni");
/* harmony import */ var _core_http_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/http/interceptor */ "FWXr");
/* harmony import */ var _core_gaurds_OnlyLoggedInUsersGuard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/gaurds/OnlyLoggedInUsersGuard */ "qPaz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
            useClass: _core_http_interceptor__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptor"],
            multi: true
        },
        _core_gaurds_OnlyLoggedInUsersGuard__WEBPACK_IMPORTED_MODULE_12__["OnlyLoggedInUsersGuard"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            primeng_menubar__WEBPACK_IMPORTED_MODULE_10__["MenubarModule"],
            _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["AuthModule"],
            _modules_person_person_module__WEBPACK_IMPORTED_MODULE_8__["PersonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _shared_pipes_age_pipe__WEBPACK_IMPORTED_MODULE_4__["AgePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        primeng_menubar__WEBPACK_IMPORTED_MODULE_10__["MenubarModule"],
        _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["AuthModule"],
        _modules_person_person_module__WEBPACK_IMPORTED_MODULE_8__["PersonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "bGAh":
/*!********************************************************************************!*\
  !*** ./src/app/modules/person/components/custom-card/custom-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: CustomListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomListComponent", function() { return CustomListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dataview */ "8CEF");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CustomListComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/logo.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", person_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r2.email ? person_r2.email : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", person_r2.address ? person_r2.address : "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r2.dob ? person_r2.dob + " Years" : "N/A");
} }
function CustomListComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CustomListComponent_ng_template_3_div_0_Template, 30, 6, "div", 4);
} if (rf & 2) {
    const person_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", person_r2.name);
} }
class CustomListComponent {
    ngOnInit() {
    }
}
CustomListComponent.ɵfac = function CustomListComponent_Factory(t) { return new (t || CustomListComponent)(); };
CustomListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomListComponent, selectors: [["app-custom-list"]], inputs: { persons: "persons" }, decls: 4, vars: 3, consts: [[1, "card"], ["layout", "list", 3, "value", "paginator", "rows"], ["dv", ""], ["pTemplate", "listItem"], ["class", "p-col-12", 4, "ngIf"], [1, "p-col-12"], [1, "person-list-item"], [3, "src", "alt"], [1, "person-list-detail"], [1, "person-name"], [1, "pi", "pi-send"], [1, "pi", "pi-globe", 2, "color", "blue"], [1, "pi", "pi-calendar"], [1, "person-list-action"], [1, "pi", "pi-user-edit", 2, "color", "cadetblue", "font-size", "20px"], [1, "pi", "pi-bars", 2, "color", "darkblue", "font-size", "20px"]], template: function CustomListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-dataView", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomListComponent_ng_template_3_Template, 1, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.persons)("paginator", true)("rows", 9);
    } }, directives: [primeng_dataview__WEBPACK_IMPORTED_MODULE_1__["DataView"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_nghost-%COMP%]     .p-dropdown {\r\n    width: 14rem;\r\n    font-weight: normal;\r\n}\r\n[_nghost-%COMP%]     .person-name {\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n}\r\n[_nghost-%COMP%]     .person-description {\r\n    margin: 0 0 1rem 0;\r\n}\r\n[_nghost-%COMP%]     .person-counter-icon {\r\n    vertical-align: middle;\r\n    margin-right: 0.5rem;\r\n}\r\n[_nghost-%COMP%]     .person-counter {\r\n    font-weight: 600;\r\n    vertical-align: middle;\r\n}\r\n[_nghost-%COMP%]     .person-list-item {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 1rem;\r\n    width: 100%;\r\n}\r\n[_nghost-%COMP%]     .person-list-item img {\r\n    width: 150px;\r\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    margin-right: 2rem;\r\n}\r\n[_nghost-%COMP%]     .person-list-item .person-list-detail {\r\n    flex: 1 1 0;\r\n}\r\n[_nghost-%COMP%]     .person-list-item .p-rating {\r\n    margin: 0 0 0.5rem 0;\r\n}\r\n[_nghost-%COMP%]     .person-list-item .person-age {\r\n    font-size: 1.5rem;\r\n    font-weight: 600;\r\n    margin-bottom: 0.5rem;\r\n    align-self: flex-end;\r\n}\r\n[_nghost-%COMP%]     .person-list-item .person-list-action {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n[_nghost-%COMP%]     .person-list-item .p-button {\r\n    margin-bottom: 0.5rem;\r\n}\r\n[_nghost-%COMP%]     .person-grid-item {\r\n    margin: 0.5em;\r\n    border: 1px solid var(--surface-d);\r\n}\r\n[_nghost-%COMP%]     .person-grid-item .person-grid-item-top, [_nghost-%COMP%]     .person-grid-item .person-grid-item-bottom {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n[_nghost-%COMP%]     .person-grid-item img {\r\n    width: 75%;\r\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    margin: 2rem 0;\r\n}\r\n[_nghost-%COMP%]     .person-grid-item .person-grid-item-content {\r\n    text-align: center;\r\n}\r\n[_nghost-%COMP%]     .person-grid-item .person-age {\r\n    font-size: 1.5rem;\r\n    font-weight: 600;\r\n}\r\n@media screen and (max-width: 576px) {\r\n    [_nghost-%COMP%]     .person-list-item {\r\n        flex-direction: column;\r\n        align-items: center;\r\n   }\r\n    [_nghost-%COMP%]     .person-list-item img {\r\n        width: 75%;\r\n        margin: 2rem 0;\r\n   }\r\n    [_nghost-%COMP%]     .person-list-item .person-list-detail {\r\n        text-align: center;\r\n   }\r\n    [_nghost-%COMP%]     .person-list-item .person-age {\r\n        align-self: center;\r\n   }\r\n    [_nghost-%COMP%]     .person-list-item .person-list-action {\r\n        display: flex;\r\n        flex-direction: column;\r\n   }\r\n    [_nghost-%COMP%]     .person-list-item .person-list-action {\r\n        margin-top: 2rem;\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        width: 100%;\r\n   }\r\n}\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    padding: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHdFQUF3RTtJQUN4RSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFVBQVU7SUFDVix3RUFBd0U7SUFDeEUsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7R0FDeEI7SUFDQztRQUNJLFVBQVU7UUFDVixjQUFjO0dBQ25CO0lBQ0M7UUFDSSxrQkFBa0I7R0FDdkI7SUFDQztRQUNJLGtCQUFrQjtHQUN2QjtJQUNDO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtHQUMzQjtJQUNDO1FBQ0ksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQiw4QkFBOEI7UUFDOUIsbUJBQW1CO1FBQ25CLFdBQVc7R0FDaEI7QUFDSDtBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJjdXN0b20tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5wLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxNHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tZGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAucGVyc29uLWNvdW50ZXItaWNvbiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tY291bnRlciB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tbGlzdC1pdGVtIGltZyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tbGlzdC1pdGVtIC5wZXJzb24tbGlzdC1kZXRhaWwge1xyXG4gICAgZmxleDogMSAxIDA7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tbGlzdC1pdGVtIC5wLXJhdGluZyB7XHJcbiAgICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0gLnBlcnNvbi1hZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tbGlzdC1pdGVtIC5wZXJzb24tbGlzdC1hY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tbGlzdC1pdGVtIC5wLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tZ3JpZC1pdGVtIHtcclxuICAgIG1hcmdpbjogMC41ZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWQpO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAucGVyc29uLWdyaWQtaXRlbSAucGVyc29uLWdyaWQtaXRlbS10b3AsIDpob3N0IDo6bmctZGVlcCAucGVyc29uLWdyaWQtaXRlbSAucGVyc29uLWdyaWQtaXRlbS1ib3R0b20ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tZ3JpZC1pdGVtIGltZyB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG4gICAgbWFyZ2luOiAycmVtIDA7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tZ3JpZC1pdGVtIC5wZXJzb24tZ3JpZC1pdGVtLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAucGVyc29uLWdyaWQtaXRlbSAucGVyc29uLWFnZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIDpob3N0IDo6bmctZGVlcCAucGVyc29uLWxpc3QtaXRlbSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICB9XHJcbiAgICA6aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0gaW1nIHtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICB9XHJcbiAgICA6aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0gLnBlcnNvbi1saXN0LWRldGFpbCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICB9XHJcbiAgICA6aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0gLnBlcnNvbi1hZ2Uge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgfVxyXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tbGlzdC1pdGVtIC5wZXJzb24tbGlzdC1hY3Rpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgfVxyXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tbGlzdC1pdGVtIC5wZXJzb24tbGlzdC1hY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgfVxyXG59XHJcblxyXG50YWJsZSB0ciB0ZHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "cMCp":
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login.component */ "d9Jh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: 'login',
        component: _pages_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "d9Jh":
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/pages/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/auth.service */ "7dP1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/password */ "+YxP");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









function LoginComponent_ng_template_1_Template(rf, ctx) { }
function LoginComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMsg);
} }
function LoginComponent_ng_template_11_Template(rf, ctx) { }
class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.errorMsg = "";
    }
    ngOnInit() {
    }
    login() {
        if (!this.username) {
            this.errorMsg = "Please enter username!";
            return;
        }
        if (!this.password) {
            this.errorMsg = "Please enter password!";
            return;
        }
        this.errorMsg = "";
        this.authService.login({ username: this.username, password: this.password }).subscribe(res => {
            this.authService.setToken(res.accessToken);
            console.log("success");
            this.router.navigate(['persons-list']);
        }, err => {
            this.authService.setToken("");
            console.log("failed");
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 12, vars: 3, consts: [["pTemplate", "header"], ["type", "text", "pInputText", "", "placeholder", "Email", 3, "ngModel", "ngModelChange"], ["placeholder", "Password", 3, "ngModel", "ngModelChange"], ["pButton", "", "type", "button", "label", "Login", 3, "click"], ["style", "color: red;", 4, "ngIf"], ["pTemplate", "footer"], [2, "color", "red"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_template_1_Template, 0, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_2_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-password", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_p_password_ngModelChange_5_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_8_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_span_10_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_ng_template_11_Template, 0, 0, "ng-template", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);
    } }, directives: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], primeng_password__WEBPACK_IMPORTED_MODULE_6__["Password"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "f9vY":
/*!*****************************************!*\
  !*** ./src/app/shared/models/Person.ts ***!
  \*****************************************/
/*! exports provided: Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
class Person {
}


/***/ }),

/***/ "gHic":
/*!*******************************************!*\
  !*** ./src/app/core/http/http.service.ts ***!
  \*******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Url */ "EzWU");




class HttpService {
    constructor(http, url) {
        this.http = http;
        this.url = url;
        this.contentHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        });
    }
    login(reqParm) {
        return this.http.post(this.url.authURL, reqParm, {
            headers: this.contentHeader,
        });
    }
    addPerson(reqParm) {
        return this.http.post(this.url.addPersonURL, reqParm, {
            headers: this.contentHeader,
        });
    }
    getPersons(reqParm) {
        return this.http.get(this.url.getPersonsURL, {
            headers: this.contentHeader,
        });
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_Url__WEBPACK_IMPORTED_MODULE_2__["URL"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "jXhe":
/*!*************************************************!*\
  !*** ./src/app/core/services/person.service.ts ***!
  \*************************************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http.service */ "gHic");


class PersonService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    addPerson(reqParam) {
        return this.httpService.addPerson(reqParam);
    }
    getPersons(reqParam) {
        return this.httpService.getPersons(reqParam);
    }
}
PersonService.ɵfac = function PersonService_Factory(t) { return new (t || PersonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
PersonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PersonService, factory: PersonService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qPaz":
/*!*******************************************************!*\
  !*** ./src/app/core/gaurds/OnlyLoggedInUsersGuard.ts ***!
  \*******************************************************/
/*! exports provided: OnlyLoggedInUsersGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyLoggedInUsersGuard", function() { return OnlyLoggedInUsersGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "7dP1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class OnlyLoggedInUsersGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        else {
            window.alert("You don't have permission to view this page");
            this.router.navigate(['login']);
            return false;
        }
    }
}
OnlyLoggedInUsersGuard.ɵfac = function OnlyLoggedInUsersGuard_Factory(t) { return new (t || OnlyLoggedInUsersGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
OnlyLoggedInUsersGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OnlyLoggedInUsersGuard, factory: OnlyLoggedInUsersGuard.ɵfac });


/***/ }),

/***/ "sSTA":
/*!*********************************************************!*\
  !*** ./src/app/modules/person/person-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PersonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonRoutingModule", function() { return PersonRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_gaurds_OnlyLoggedInUsersGuard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/gaurds/OnlyLoggedInUsersGuard */ "qPaz");
/* harmony import */ var _pages_add_person_addPerson_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/add-person/addPerson.component */ "CL/o");
/* harmony import */ var _pages_person_list_personList_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/person-list/personList.component */ "/OYR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: 'add-person',
        component: _pages_add_person_addPerson_component__WEBPACK_IMPORTED_MODULE_2__["AddPersonComponent"],
        canActivate: [src_app_core_gaurds_OnlyLoggedInUsersGuard__WEBPACK_IMPORTED_MODULE_1__["OnlyLoggedInUsersGuard"]]
    },
    {
        path: 'persons-list',
        component: _pages_person_list_personList_component__WEBPACK_IMPORTED_MODULE_3__["PersonListComponent"],
        canActivate: [src_app_core_gaurds_OnlyLoggedInUsersGuard__WEBPACK_IMPORTED_MODULE_1__["OnlyLoggedInUsersGuard"]]
    }
];
class PersonRoutingModule {
}
PersonRoutingModule.ɵfac = function PersonRoutingModule_Factory(t) { return new (t || PersonRoutingModule)(); };
PersonRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PersonRoutingModule });
PersonRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PersonRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map