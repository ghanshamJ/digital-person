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
        this.personService.addPerson(person).subscribe((res) => {
            alert("new Person added");
        });
    }
    getPersons() {
        this.personService.getPersons({}).subscribe((res) => {
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

/***/ "9m/g":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/person/components/person-detail/personDetail.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PersonDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonDetailComponent", function() { return PersonDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/person.service */ "jXhe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_Url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/Url */ "EzWU");
/* harmony import */ var primeng_gmap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/gmap */ "QRRn");
/* harmony import */ var src_app_shared_pipes_age_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/pipes/age.pipe */ "Uu0a");






const _c0 = function () { return { "width": "100%", "height": "320px", "margin-bottom": "1em" }; };
class PersonDetailComponent {
    constructor(personService, router, url) {
        this.personService = personService;
        this.router = router;
        this.url = url;
        this.person = this.router.getCurrentNavigation().extras.state;
        if (!this.person) {
            this.router.navigate(["persons-list"]);
        }
    }
    ngOnInit() {
        this.imgUrl = this.url.imageURL;
        this.country = this.personService.getCountry(this.person.country);
        this.initMap();
    }
    ngOnChanges(person) {
        this.initMap();
    }
    handleOverlayClick(event) {
        let isMarker = event.overlay.getTitle != undefined;
        if (isMarker) {
            let title = event.overlay.getTitle();
            this.infoWindow.setContent("" + title + "");
            this.infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());
        }
    }
    initMap() {
        this.country = this.personService.getCountry(this.person.country);
        this.options = {
            center: { lat: this.country.latlng[0], lng: this.country.latlng[1] },
            zoom: 2.5,
        };
        this.overlays = [
            new google.maps.Marker({
                position: {
                    lat: this.country.latlng[0],
                    lng: this.country.latlng[1],
                },
                title: this.country.name,
            }),
        ];
        this.infoWindow = new google.maps.InfoWindow();
    }
}
PersonDetailComponent.ɵfac = function PersonDetailComponent_Factory(t) { return new (t || PersonDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_person_service__WEBPACK_IMPORTED_MODULE_1__["PersonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_Url__WEBPACK_IMPORTED_MODULE_3__["URL"])); };
PersonDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonDetailComponent, selectors: [["app-person-detail"]], inputs: { person: "person" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 41, vars: 14, consts: [[2, "margin", "auto", "padding", "10px", "box-shadow", "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)", "margin-top", "6px", "width", "98%"], [1, "person-list-item"], ["width", "100px", 3, "src", "alt"], [1, "person-list-detail"], [1, "person-name"], [3, "options", "overlays", "onOverlayClick"], ["gmap", ""]], template: function PersonDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p-gmap", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onOverlayClick", function PersonDetailComponent_Template_p_gmap_onOverlayClick_37_listener($event) { return ctx.handleOverlayClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgUrl + ctx.person._id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.person.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.person.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.person.email ? ctx.person.email : "N/A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.person.address ? ctx.person.address : "N/A", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.person.country ? ctx.personService.getCountry(ctx.person.country).name : "N/A", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.person.dob ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 11, ctx.person.dob) : "N/A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options)("overlays", ctx.overlays);
    } }, directives: [primeng_gmap__WEBPACK_IMPORTED_MODULE_4__["GMap"]], pipes: [src_app_shared_pipes_age_pipe__WEBPACK_IMPORTED_MODULE_5__["AgePipe"]], styles: ["[_nghost-%COMP%]     .p-dropdown {\r\n    width: 14rem;\r\n    font-weight: normal;\r\n}\r\n[_nghost-%COMP%]     .person-name {\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n}\r\n[_nghost-%COMP%]     .person-description {\r\n    margin: 0 0 1rem 0;\r\n}\r\n[_nghost-%COMP%]     .person-counter-icon {\r\n    vertical-align: middle;\r\n    margin-right: 0.5rem;\r\n}\r\n[_nghost-%COMP%]     .person-counter {\r\n    font-weight: 600;\r\n    vertical-align: middle;\r\n}\r\n[_nghost-%COMP%]     .person-list-item {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 1rem;\r\n    width: 100%;\r\n}\r\n[_nghost-%COMP%]     .person-list-item img {\r\n    width: 150px;\r\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    margin-right: 2rem;\r\n}\r\n[_nghost-%COMP%]     .person-list-item .person-list-detail {\r\n    flex: 1 1 0;\r\n}\r\n[_nghost-%COMP%]     .person-list-item .p-rating {\r\n    margin: 0 0 0.5rem 0;\r\n}\r\n[_nghost-%COMP%]     .person-list-item .person-age {\r\n    font-size: 1.5rem;\r\n    font-weight: 600;\r\n    margin-bottom: 0.5rem;\r\n    align-self: flex-end;\r\n}\r\n[_nghost-%COMP%]     .person-list-item .person-list-action {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n[_nghost-%COMP%]     .person-list-item .p-button {\r\n    margin-bottom: 0.5rem;\r\n}\r\n[_nghost-%COMP%]     .person-grid-item {\r\n    margin: 0.5em;\r\n    border: 1px solid var(--surface-d);\r\n}\r\n[_nghost-%COMP%]     .person-grid-item .person-grid-item-top, [_nghost-%COMP%]     .person-grid-item .person-grid-item-bottom {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n[_nghost-%COMP%]     .person-grid-item img {\r\n    width: 75%;\r\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    margin: 2rem 0;\r\n}\r\n[_nghost-%COMP%]     .person-grid-item .person-grid-item-content {\r\n    text-align: center;\r\n}\r\n[_nghost-%COMP%]     .person-grid-item .person-age {\r\n    font-size: 1.5rem;\r\n    font-weight: 600;\r\n}\r\n@media screen and (max-width: 576px) {\r\n    [_nghost-%COMP%]     .person-list-item {\r\n        flex-direction: column;\r\n        align-items: center;\r\n   }\r\n    [_nghost-%COMP%]     .person-list-item img {\r\n        width: 75%;\r\n        margin: 2rem 0;\r\n   }\r\n    [_nghost-%COMP%]     .person-list-item .person-list-detail {\r\n        text-align: center;\r\n   }\r\n    [_nghost-%COMP%]     .person-list-item .person-age {\r\n        align-self: center;\r\n   }\r\n    [_nghost-%COMP%]     .person-list-item .person-list-action {\r\n        display: flex;\r\n        flex-direction: column;\r\n   }\r\n    [_nghost-%COMP%]     .person-list-item .person-list-action {\r\n        margin-top: 2rem;\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        width: 100%;\r\n   }\r\n}\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    padding: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbkRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWix3RUFBd0U7SUFDeEUsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysd0VBQXdFO0lBQ3hFLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsbUJBQW1CO0dBQ3hCO0lBQ0M7UUFDSSxVQUFVO1FBQ1YsY0FBYztHQUNuQjtJQUNDO1FBQ0ksa0JBQWtCO0dBQ3ZCO0lBQ0M7UUFDSSxrQkFBa0I7R0FDdkI7SUFDQztRQUNJLGFBQWE7UUFDYixzQkFBc0I7R0FDM0I7SUFDQztRQUNJLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsOEJBQThCO1FBQzlCLG1CQUFtQjtRQUNuQixXQUFXO0dBQ2hCO0FBQ0g7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoicGVyc29uRGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLnAtZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDE0cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tY291bnRlci1pY29uIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1jb3VudGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAucGVyc29uLWxpc3QtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0gaW1nIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcclxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0gLnBlcnNvbi1saXN0LWRldGFpbCB7XHJcbiAgICBmbGV4OiAxIDEgMDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0gLnAtcmF0aW5nIHtcclxuICAgIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAucGVyc29uLWxpc3QtaXRlbSAucGVyc29uLWFnZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0gLnBlcnNvbi1saXN0LWFjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0gLnAtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1ncmlkLWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtZCk7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tZ3JpZC1pdGVtIC5wZXJzb24tZ3JpZC1pdGVtLXRvcCwgOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tZ3JpZC1pdGVtIC5wZXJzb24tZ3JpZC1pdGVtLWJvdHRvbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1ncmlkLWl0ZW0gaW1nIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XHJcbiAgICBtYXJnaW46IDJyZW0gMDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1ncmlkLWl0ZW0gLnBlcnNvbi1ncmlkLWl0ZW0tY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tZ3JpZC1pdGVtIC5wZXJzb24tYWdlIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tbGlzdC1pdGVtIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIH1cclxuICAgIDpob3N0IDo6bmctZGVlcCAucGVyc29uLWxpc3QtaXRlbSBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgIH1cclxuICAgIDpob3N0IDo6bmctZGVlcCAucGVyc29uLWxpc3QtaXRlbSAucGVyc29uLWxpc3QtZGV0YWlsIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIH1cclxuICAgIDpob3N0IDo6bmctZGVlcCAucGVyc29uLWxpc3QtaXRlbSAucGVyc29uLWFnZSB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICB9XHJcbiAgICA6aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0gLnBlcnNvbi1saXN0LWFjdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICB9XHJcbiAgICA6aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0gLnBlcnNvbi1saXN0LWFjdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICB9XHJcbn1cclxuXHJcbnRhYmxlIHRyIHRke1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "jIHw");









class AddPersonComponent {
    constructor(personService, router) {
        this.personService = personService;
        this.router = router;
        this.errorMsg = "";
        this.fileToUpload = null;
        this.person = new src_app_shared_models_Person__WEBPACK_IMPORTED_MODULE_0__["Person"]();
    }
    ngOnInit() { }
    handleFileInput(e) {
        console.log(e);
        this.fileToUpload = e.target["files"].item(0);
        console.log(this.fileToUpload);
    }
    addPerson() {
        const fd = new FormData();
        fd.append("image", this.fileToUpload);
        fd.append("name", this.person.name);
        fd.append("email", this.person.email);
        fd.append("dob", this.person.dob.toString());
        fd.append("address", this.person.address);
        fd.append("country", this.person.country);
        this.personService.addPerson(fd).subscribe((res) => {
            alert("new Person added");
        });
    }
}
AddPersonComponent.ɵfac = function AddPersonComponent_Factory(t) { return new (t || AddPersonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AddPersonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddPersonComponent, selectors: [["app-add-person"]], decls: 22, vars: 9, consts: [[1, "centered"], ["type", "text", "pInputText", "", "placeholder", "Name", 3, "ngModel", "ngModelChange"], ["type", "text", "pInputText", "", "placeholder", "Email", 3, "ngModel", "ngModelChange"], ["type", "text", "pInputText", "", "placeholder", "Address", 3, "ngModel", "ngModelChange"], ["placeholder", "Birth Date", "yearRange", "1900:2021", 3, "monthNavigator", "yearNavigator", "ngModel", "ngModelChange"], ["placeholder", "Select a Country", "optionLabel", "name", "optionValue", "country_code", 3, "options", "ngModel", "showClear", "ngModelChange"], ["for", "file"], ["type", "file", "id", "file", 3, "change"], ["pButton", "", "type", "button", "label", "Add Person", 3, "click"]], template: function AddPersonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPersonComponent_Template_input_ngModelChange_1_listener($event) { return ctx.person.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPersonComponent_Template_input_ngModelChange_4_listener($event) { return ctx.person.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPersonComponent_Template_input_ngModelChange_7_listener($event) { return ctx.person.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p-calendar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPersonComponent_Template_p_calendar_ngModelChange_10_listener($event) { return ctx.person.dob = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p-dropdown", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddPersonComponent_Template_p_dropdown_ngModelChange_13_listener($event) { return ctx.person.country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddPersonComponent_Template_input_change_17_listener($event) { return ctx.handleFileInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddPersonComponent_Template_button_click_20_listener() { return ctx.addPerson(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.person.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.person.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.person.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("monthNavigator", true)("yearNavigator", true)("ngModel", ctx.person.dob);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.personService.getCountries())("ngModel", ctx.person.country)("showClear", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], primeng_calendar__WEBPACK_IMPORTED_MODULE_6__["Calendar"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__["Dropdown"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonDirective"]], styles: ["div[_ngcontent-%COMP%] {\r\n    \r\n    \r\n\r\n    padding: 12px;\r\n    display: inline-block;\r\n  }\r\n\r\n  .centered[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    height: 300px;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 220px; \r\n    margin-left: -150px;\r\n    margin-top: -150px;\r\n }\r\n\r\n  input[type=file][_ngcontent-%COMP%]::file-selector-button {\r\n  border: 2px solid #7e28f0;\r\n  padding: .2em .4em;\r\n  border-radius: .2em;\r\n  background-color: #801af5;\r\n  transition: 1s;\r\n  color: white;\r\n}\r\n\r\n  input[type=file][_ngcontent-%COMP%]::file-selector-button:hover {\r\n  background-color: #f311ba;\r\n  border: 2px solid #ec07c6;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZFBlcnNvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQix5QkFBeUI7O0lBRXpCLGFBQWE7SUFDYixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7O0VBR0E7RUFDQyx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVk7QUFDZDs7RUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0IiLCJmaWxlIjoiYWRkUGVyc29uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBkaXYge1xyXG4gICAgLyogY29sb3I6ICNmZmY7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjYWE5YjliOyAqL1xyXG5cclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuY2VudGVyZWQge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogMjIwcHg7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xNTBweDtcclxuIH1cclxuXHJcblxyXG4gaW5wdXRbdHlwZT1maWxlXTo6ZmlsZS1zZWxlY3Rvci1idXR0b24ge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM3ZTI4ZjA7XHJcbiAgcGFkZGluZzogLjJlbSAuNGVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwMWFmNTtcclxuICB0cmFuc2l0aW9uOiAxcztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9ZmlsZV06OmZpbGUtc2VsZWN0b3ItYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjMxMWJhO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlYzA3YzY7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });


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
        this.authURL = "https://person-apk.herokuapp.com/api/v1/auth";
        this.addPersonURL = "https://person-apk.herokuapp.com/api/v1/person";
        this.getPersonsURL = "https://person-apk.herokuapp.com/api/v1/persons";
        this.getPersonCountByCountryURL = "https://person-apk.herokuapp.com/api/v1/statistics-by-country";
        this.imageURL = "https://person-apk.herokuapp.com/api/v1/image/";
        this.updatePersonURL = "https://person-apk.herokuapp.com/api/v1/person/";
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

/***/ "LeoX":
/*!*************************************************************************!*\
  !*** ./src/app/modules/person/pages/statistics/statistics.component.ts ***!
  \*************************************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/person.service */ "jXhe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/chart */ "I5S5");




class StatisticsComponent {
    constructor(personService, router) {
        this.personService = personService;
        this.router = router;
    }
    ngOnInit() {
        this.getStats();
    }
    getStats() {
        this.personService.getPersonCountByCountry().subscribe((res) => {
            //this.data = res;
            this.buildChart(res);
        }, (err) => {
            console.log("failed!");
        });
    }
    buildChart(data) {
        const labels = [];
        function getColor() {
            function getRandomNum(min, max) {
                return Math.random() * (max - min) + min;
            }
            let r = getRandomNum(0, 255);
            let g = getRandomNum(0, 255);
            let b = getRandomNum(0, 255);
            return {
                backColor: `rgba(${r},${g},${b},1.5)`,
                hoverColor: `rgba(${r},${g},${b},2)`,
            };
        }
        const datasetsPie = [
            {
                label: "My dataset",
                data: [],
                backgroundColor: [],
                hoverBackgroundColor: [],
            },
        ];
        for (const obj of data) {
            if (obj._id) {
                const country = this.personService.getCountry(obj._id);
                if (country) {
                    labels.push(country.name);
                    datasetsPie[0].data.push(obj.count);
                    const color = getColor();
                    datasetsPie[0].backgroundColor.push(color.backColor);
                    datasetsPie[0].hoverBackgroundColor.push(color.hoverColor);
                }
            }
        }
        this.data = { datasets: datasetsPie, labels: labels };
    }
}
StatisticsComponent.ɵfac = function StatisticsComponent_Factory(t) { return new (t || StatisticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_person_service__WEBPACK_IMPORTED_MODULE_1__["PersonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
StatisticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatisticsComponent, selectors: [["app-statistics"]], decls: 9, vars: 2, consts: [[2, "margin", "auto", "padding", "10px", "box-shadow", "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)", "margin-top", "6px", "width", "98%"], ["type", "pie", 3, "data"], ["type", "polarArea", 3, "data"]], template: function StatisticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p-chart", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data);
    } }, directives: [primeng_chart__WEBPACK_IMPORTED_MODULE_3__["UIChart"]], encapsulation: 2 });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AppComponent_i_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} }
function AppComponent_i_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} }
class AppComponent {
    constructor(primengConfig, personService, authService, router) {
        this.primengConfig = primengConfig;
        this.personService = personService;
        this.authService = authService;
        this.router = router;
        this.items = [];
        this.selected = "chart";
        if (!this.authService.isAuthenticated) {
            router.navigate(["login"]);
        }
    }
    ngOnInit() {
        this.personService.setCountries();
    }
    logout() {
        if (this.authService.isAuthenticated) {
            this.authService.logout();
            this.router.navigate(["login"]);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["PrimeNGConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 20, vars: 9, consts: [[1, "active", "anima"], [1, "pi", "pi", "pi-user"], ["routerLink", "../persons-list"], [1, "pi", "pi", "pi-users"], ["routerLink", "../add-person"], [1, "pi", "pi-plus"], ["routerLink", "../statistics"], [1, "pi", "pi-chart-bar"], [2, "float", "right", 3, "click"], [1, "logout", 2, "cursor", "pointer"], ["class", "pi pi-power-off", 4, "ngIf"], ["class", "pi pi-sign-in", 4, "ngIf"], [1, "pi", "pi-power-off"], [1, "pi", "pi-sign-in"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " DiGi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_li_click_15_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_i_17_Template, 1, 0, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_i_18_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.selected == "users" ? "selected" : "", " 'circle'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.selected == "add-user" ? "selected" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.selected == "users" ? "chart" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.isAuthenticated());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["ul[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n  }\r\n  \r\n  li[_ngcontent-%COMP%] {\r\n    float: left;\r\n  }\r\n  \r\n  li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    \r\n  }\r\n  \r\n  li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(97, 87, 87);\r\n  }\r\n  \r\n  .active[_ngcontent-%COMP%] {\r\n    background-color: #3a5e94;\r\n  }\r\n  \r\n  .logout[_ngcontent-%COMP%] {\r\n    border-radius: 30px;\r\n    color: #fc2d08; \r\n  }\r\n  \r\n  .selected[_ngcontent-%COMP%] {\r\n    background-color: rgb(97, 87, 87);\r\n  }\r\n  \r\n  .anima[_ngcontent-%COMP%] {\r\n  \r\n  padding: .2em .4em;\r\n  border-radius: .2em;\r\n  background-color: #3a5e94;\r\n  transition: 1s;\r\n  \r\n  color: rgb(170, 16, 16);\r\n}\r\n  \r\n  .anima[_ngcontent-%COMP%]:hover {\r\n  background-color: #fcd0ac;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7O0VBRXZCOztFQUVBO0lBQ0UsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUdBO0lBQ0UsbUJBQW1CO0lBQ25CLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxpQ0FBaUM7RUFDbkM7O0VBR0E7RUFDQSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsY0FBYzs7RUFFZCx1QkFBdUI7QUFDekI7O0VBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIFxyXG4gIGxpIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICBsaSBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgODcsIDg3KTtcclxuICB9XHJcbiAgXHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E1ZTk0O1xyXG4gIH1cclxuXHJcblxyXG4gIC5sb2dvdXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGNvbG9yOiAjZmMyZDA4OyBcclxuICB9XHJcblxyXG4gIC5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDg3LCA4Nyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmFuaW1hIHtcclxuICAvKiBib3JkZXI6IDJweCBzb2xpZCAjYjFiMWIxOyAqL1xyXG4gIHBhZGRpbmc6IC4yZW0gLjRlbTtcclxuICBib3JkZXItcmFkaXVzOiAuMmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTVlOTQ7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbiAgXHJcbiAgY29sb3I6IHJnYigxNzAsIDE2LCAxNik7XHJcbn1cclxuXHJcbi5hbmltYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZDBhYztcclxufSJdfQ== */"] });


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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AgePipe {
    transform(value) {
        let today = moment__WEBPACK_IMPORTED_MODULE_0__();
        let birthdate = moment__WEBPACK_IMPORTED_MODULE_0__(value);
        let years = today.diff(birthdate, "years");
        let html = years + " yr ";
        html += today.subtract(years, "years").diff(birthdate, "months") + " mo";
        return html;
    }
}
AgePipe.ɵfac = function AgePipe_Factory(t) { return new (t || AgePipe)(); };
AgePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "age", type: AgePipe, pure: true });


/***/ }),

/***/ "WIsJ":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/person/components/edit-person/editPersonDetail.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EditPersonDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPersonDetailComponent", function() { return EditPersonDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/person.service */ "jXhe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_Url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/Url */ "EzWU");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var src_app_shared_pipes_age_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/pipes/age.pipe */ "Uu0a");









class EditPersonDetailComponent {
    constructor(personService, router, url) {
        this.personService = personService;
        this.router = router;
        this.url = url;
        this.errorMsg = "";
        this.isFirst = true;
        this.person = this.router.getCurrentNavigation().extras.state;
        if (!this.person) {
            this.router.navigate(["persons-list"]);
        }
    }
    ngOnInit() {
        this.imgUrl = this.url.imageURL;
        this.countries = this.personService.getCountries();
        this.setImage(this.person);
    }
    ngOnChanges(changes) {
        if (this.isFirst) {
            this.setImage(this.person);
            this.isFirst = false;
        }
    }
    setImage(person) {
        if (this.isFirst) {
            this.personService.getImage(person._id).then((res) => {
                if (res) {
                    this.imageToShow = res;
                }
            });
        }
    }
    updatePerson() {
        const fd = new FormData();
        fd.append("image", this.fileToUpload);
        fd.append("name", this.person.name);
        fd.append("email", this.person.email);
        fd.append("dob", this.person.dob.toString());
        fd.append("address", this.person.address);
        fd.append("country", this.person.country);
        this.personService.updatePerson(this.person._id, fd).subscribe((res) => {
            this.setImage(this.person);
            alert("Person data updated");
        });
    }
    handleFileInput(e) {
        console.log(e);
        this.fileToUpload = e.target["files"].item(0);
        console.log(this.fileToUpload);
    }
}
EditPersonDetailComponent.ɵfac = function EditPersonDetailComponent_Factory(t) { return new (t || EditPersonDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_person_service__WEBPACK_IMPORTED_MODULE_1__["PersonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_Url__WEBPACK_IMPORTED_MODULE_3__["URL"])); };
EditPersonDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditPersonDetailComponent, selectors: [["app-edit-person-detail"]], inputs: { person: "person" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 43, vars: 11, consts: [[2, "margin", "auto", "padding", "10px", "box-shadow", "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)", "margin-top", "6px", "width", "98%"], [1, "person-list-item"], [3, "src", "alt"], ["for", "file"], ["type", "file", "id", "file", 3, "change"], [1, "person-list-detail"], [1, "person-name"], ["type", "text", "pInputText", "", "placeholder", "Email", 3, "ngModel", "ngModelChange"], ["type", "text", "pInputText", "", "placeholder", "Address", 3, "ngModel", "ngModelChange"], ["placeholder", "Select a Country", "optionLabel", "name", "optionValue", "country_code", 3, "options", "ngModel", "showClear", "ngModelChange"], ["pButton", "", "type", "button", "label", "Update", 3, "click"]], template: function EditPersonDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditPersonDetailComponent_Template_input_change_6_listener($event) { return ctx.handleFileInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPersonDetailComponent_Template_input_ngModelChange_19_listener($event) { return ctx.person.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPersonDetailComponent_Template_input_ngModelChange_26_listener($event) { return ctx.person.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p-dropdown", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditPersonDetailComponent_Template_p_dropdown_ngModelChange_33_listener($event) { return ctx.person.country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPersonDetailComponent_Template_button_click_42_listener() { return ctx.updatePerson(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageToShow, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.person.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.person.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.person.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.person.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.countries)("ngModel", ctx.person.country)("showClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.person.dob ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 9, ctx.person.dob) : "N/A", " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonDirective"]], pipes: [src_app_shared_pipes_age_pipe__WEBPACK_IMPORTED_MODULE_8__["AgePipe"]], styles: ["[_nghost-%COMP%]     .p-dropdown {\r\n    width: 14rem;\r\n    font-weight: normal;\r\n}\r\n[_nghost-%COMP%]     .person-name {\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n}\r\n[_nghost-%COMP%]     .person-description {\r\n    margin: 0 0 1rem 0;\r\n}\r\n[_nghost-%COMP%]     .person-counter-icon {\r\n    vertical-align: middle;\r\n    margin-right: 0.5rem;\r\n}\r\n[_nghost-%COMP%]     .person-counter {\r\n    font-weight: 600;\r\n    vertical-align: middle;\r\n}\r\n[_nghost-%COMP%]     .person-list-item {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 1rem;\r\n    width: 100%;\r\n}\r\n[_nghost-%COMP%]     .person-list-item img {\r\n    width: 150px;\r\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    margin-right: 2rem;\r\n}\r\n[_nghost-%COMP%]     .person-list-item .person-list-detail {\r\n    flex: 1 1 0;\r\n}\r\n[_nghost-%COMP%]     .person-list-item .p-rating {\r\n    margin: 0 0 0.5rem 0;\r\n}\r\n[_nghost-%COMP%]     .person-list-item .person-age {\r\n    font-size: 1.5rem;\r\n    font-weight: 600;\r\n    margin-bottom: 0.5rem;\r\n    align-self: flex-end;\r\n}\r\n[_nghost-%COMP%]     .person-list-item .person-list-action {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n[_nghost-%COMP%]     .person-list-item .p-button {\r\n    margin-bottom: 0.5rem;\r\n}\r\n[_nghost-%COMP%]     .person-grid-item {\r\n    margin: 0.5em;\r\n    border: 1px solid var(--surface-d);\r\n}\r\n[_nghost-%COMP%]     .person-grid-item .person-grid-item-top, [_nghost-%COMP%]     .person-grid-item .person-grid-item-bottom {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n[_nghost-%COMP%]     .person-grid-item img {\r\n    width: 75%;\r\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    margin: 2rem 0;\r\n}\r\n[_nghost-%COMP%]     .person-grid-item .person-grid-item-content {\r\n    text-align: center;\r\n}\r\n[_nghost-%COMP%]     .person-grid-item .person-age {\r\n    font-size: 1.5rem;\r\n    font-weight: 600;\r\n}\r\n@media screen and (max-width: 576px) {\r\n    [_nghost-%COMP%]     .person-list-item {\r\n        flex-direction: column;\r\n        align-items: center;\r\n   }\r\n    [_nghost-%COMP%]     .person-list-item img {\r\n        width: 75%;\r\n        margin: 2rem 0;\r\n   }\r\n    [_nghost-%COMP%]     .person-list-item .person-list-detail {\r\n        text-align: center;\r\n   }\r\n    [_nghost-%COMP%]     .person-list-item .person-age {\r\n        align-self: center;\r\n   }\r\n    [_nghost-%COMP%]     .person-list-item .person-list-action {\r\n        display: flex;\r\n        flex-direction: column;\r\n   }\r\n    [_nghost-%COMP%]     .person-list-item .person-list-action {\r\n        margin-top: 2rem;\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        width: 100%;\r\n   }\r\n}\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    padding: 5px;\r\n}\r\ninput[type=file][_ngcontent-%COMP%]::file-selector-button {\r\n    border: 2px solid #7e28f0;\r\n    padding: .2em .4em;\r\n    border-radius: .2em;\r\n    background-color: #801af5;\r\n    transition: 1s;\r\n    color: white;\r\n  }\r\ninput[type=file][_ngcontent-%COMP%]::file-selector-button:hover {\r\n    background-color: #f311ba;\r\n    border: 2px solid #ec07c6;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRQZXJzb25EZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osd0VBQXdFO0lBQ3hFLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksVUFBVTtJQUNWLHdFQUF3RTtJQUN4RSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLG1CQUFtQjtHQUN4QjtJQUNDO1FBQ0ksVUFBVTtRQUNWLGNBQWM7R0FDbkI7SUFDQztRQUNJLGtCQUFrQjtHQUN2QjtJQUNDO1FBQ0ksa0JBQWtCO0dBQ3ZCO0lBQ0M7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO0dBQzNCO0lBQ0M7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLDhCQUE4QjtRQUM5QixtQkFBbUI7UUFDbkIsV0FBVztHQUNoQjtBQUNIO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFlBQVk7RUFDZDtBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJlZGl0UGVyc29uRGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLnAtZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDE0cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tY291bnRlci1pY29uIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1jb3VudGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAucGVyc29uLWxpc3QtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0gaW1nIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcclxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0gLnBlcnNvbi1saXN0LWRldGFpbCB7XHJcbiAgICBmbGV4OiAxIDEgMDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0gLnAtcmF0aW5nIHtcclxuICAgIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAucGVyc29uLWxpc3QtaXRlbSAucGVyc29uLWFnZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0gLnBlcnNvbi1saXN0LWFjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0gLnAtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1ncmlkLWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtZCk7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tZ3JpZC1pdGVtIC5wZXJzb24tZ3JpZC1pdGVtLXRvcCwgOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tZ3JpZC1pdGVtIC5wZXJzb24tZ3JpZC1pdGVtLWJvdHRvbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1ncmlkLWl0ZW0gaW1nIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XHJcbiAgICBtYXJnaW46IDJyZW0gMDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1ncmlkLWl0ZW0gLnBlcnNvbi1ncmlkLWl0ZW0tY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tZ3JpZC1pdGVtIC5wZXJzb24tYWdlIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tbGlzdC1pdGVtIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIH1cclxuICAgIDpob3N0IDo6bmctZGVlcCAucGVyc29uLWxpc3QtaXRlbSBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgIH1cclxuICAgIDpob3N0IDo6bmctZGVlcCAucGVyc29uLWxpc3QtaXRlbSAucGVyc29uLWxpc3QtZGV0YWlsIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIH1cclxuICAgIDpob3N0IDo6bmctZGVlcCAucGVyc29uLWxpc3QtaXRlbSAucGVyc29uLWFnZSB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICB9XHJcbiAgICA6aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0gLnBlcnNvbi1saXN0LWFjdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICB9XHJcbiAgICA6aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0gLnBlcnNvbi1saXN0LWFjdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICB9XHJcbn1cclxuXHJcbnRhYmxlIHRyIHRke1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWZpbGVdOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjN2UyOGYwO1xyXG4gICAgcGFkZGluZzogLjJlbSAuNGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDFhZjU7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1maWxlXTo6ZmlsZS1zZWxlY3Rvci1idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzMTFiYTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlYzA3YzY7XHJcbiAgfSJdfQ== */"] });


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
/* harmony import */ var _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/statistics/statistics.component */ "LeoX");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/chart */ "I5S5");
/* harmony import */ var src_app_shared_pipes_age_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/pipes/age.pipe */ "Uu0a");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var _components_person_detail_personDetail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/person-detail/personDetail.component */ "9m/g");
/* harmony import */ var primeng_gmap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/gmap */ "QRRn");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _components_edit_person_editPersonDetail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/edit-person/editPersonDetail.component */ "WIsJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ "fXoL");

























class PersonModule {
}
PersonModule.ɵfac = function PersonModule_Factory(t) { return new (t || PersonModule)(); };
PersonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: PersonModule });
PersonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ providers: [primeng_api__WEBPACK_IMPORTED_MODULE_21__["MessageService"]], imports: [[
            _agm_core__WEBPACK_IMPORTED_MODULE_19__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyCD2OG72cEGzk0pYasQkeUtz0qz_VGU6dw'
            }),
            primeng_dialog__WEBPACK_IMPORTED_MODULE_18__["DialogModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_20__["ToastModule"],
            primeng_gmap__WEBPACK_IMPORTED_MODULE_17__["GMapModule"],
            primeng_calendar__WEBPACK_IMPORTED_MODULE_15__["CalendarModule"],
            primeng_chart__WEBPACK_IMPORTED_MODULE_13__["ChartModule"],
            primeng_dataview__WEBPACK_IMPORTED_MODULE_9__["DataViewModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_6__["CardModule"],
            _person_routing_module__WEBPACK_IMPORTED_MODULE_1__["PersonRoutingModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["DropdownModule"],
            primeng_rating__WEBPACK_IMPORTED_MODULE_11__["RatingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](PersonModule, { declarations: [src_app_shared_pipes_age_pipe__WEBPACK_IMPORTED_MODULE_14__["AgePipe"],
        _pages_person_list_personList_component__WEBPACK_IMPORTED_MODULE_2__["PersonListComponent"],
        _pages_add_person_addPerson_component__WEBPACK_IMPORTED_MODULE_3__["AddPersonComponent"],
        _components_custom_card_custom_list_component__WEBPACK_IMPORTED_MODULE_8__["CustomListComponent"],
        _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_12__["StatisticsComponent"],
        _components_person_detail_personDetail_component__WEBPACK_IMPORTED_MODULE_16__["PersonDetailComponent"],
        _components_edit_person_editPersonDetail_component__WEBPACK_IMPORTED_MODULE_22__["EditPersonDetailComponent"]], imports: [_agm_core__WEBPACK_IMPORTED_MODULE_19__["AgmCoreModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_18__["DialogModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_20__["ToastModule"],
        primeng_gmap__WEBPACK_IMPORTED_MODULE_17__["GMapModule"],
        primeng_calendar__WEBPACK_IMPORTED_MODULE_15__["CalendarModule"],
        primeng_chart__WEBPACK_IMPORTED_MODULE_13__["ChartModule"],
        primeng_dataview__WEBPACK_IMPORTED_MODULE_9__["DataViewModule"],
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _modules_person_person_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/person/person.module */ "Xvq1");
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/auth/auth.module */ "305l");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/menubar */ "b1Ni");
/* harmony import */ var _core_http_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/http/interceptor */ "FWXr");
/* harmony import */ var _core_gaurds_OnlyLoggedInUsersGuard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/gaurds/OnlyLoggedInUsersGuard */ "qPaz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
            useClass: _core_http_interceptor__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptor"],
            multi: true
        },
        _core_gaurds_OnlyLoggedInUsersGuard__WEBPACK_IMPORTED_MODULE_11__["OnlyLoggedInUsersGuard"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            primeng_menubar__WEBPACK_IMPORTED_MODULE_9__["MenubarModule"],
            _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"],
            _modules_person_person_module__WEBPACK_IMPORTED_MODULE_7__["PersonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        primeng_menubar__WEBPACK_IMPORTED_MODULE_9__["MenubarModule"],
        _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_8__["AuthModule"],
        _modules_person_person_module__WEBPACK_IMPORTED_MODULE_7__["PersonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
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
/* harmony import */ var src_app_core_services_person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/person.service */ "jXhe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_Url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Url */ "EzWU");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dataview */ "8CEF");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_pipes_age_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/pipes/age.pipe */ "Uu0a");









function CustomListComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "age");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomListComponent_ng_template_3_div_0_Template_i_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const person_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.editPersonDetail(person_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomListComponent_ng_template_3_div_0_Template_i_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const person_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.showPersonDetail(person_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.imageToShow.get(person_r2._id), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", person_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r2.email ? person_r2.email : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r2.address ? person_r2.address : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r2.dob ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 6, person_r2.dob) : "N/A");
} }
function CustomListComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CustomListComponent_ng_template_3_div_0_Template, 32, 8, "div", 4);
} if (rf & 2) {
    const person_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", person_r2.name);
} }
class CustomListComponent {
    constructor(personService, router, url) {
        this.personService = personService;
        this.router = router;
        this.url = url;
        this.imageToShow = new Map();
        console.log(this.persons);
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        for (const person of this.persons) {
            this.personService.getImage(person._id).then(res => {
                this.imageToShow.set(person._id, res);
            });
        }
    }
    showPersonDetail(person) {
        this.router.navigate(["../person-detail"], { state: person });
    }
    editPersonDetail(person) {
        this.router.navigate(["../edit-person-detail"], { state: person });
    }
}
CustomListComponent.ɵfac = function CustomListComponent_Factory(t) { return new (t || CustomListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_person_service__WEBPACK_IMPORTED_MODULE_1__["PersonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_Url__WEBPACK_IMPORTED_MODULE_3__["URL"])); };
CustomListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomListComponent, selectors: [["app-custom-list"]], inputs: { persons: "persons" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 3, consts: [[1, "card"], ["layout", "list", 3, "value", "paginator", "rows"], ["dv", ""], ["pTemplate", "listItem"], ["class", "p-col-12", 4, "ngIf"], [1, "p-col-12"], [1, "person-list-item"], [3, "src", "alt"], [1, "person-list-detail"], [1, "person-name"], [1, "pi", "pi-send"], [1, "pi", "pi-globe", 2, "color", "blue"], [1, "pi", "pi-calendar"], [1, "person-list-action"], [1, "pi", "pi-user-edit", 2, "cursor", "pointer", "color", "cadetblue", "font-size", "20px", 3, "click"], [1, "pi", "pi-bars", 2, "cursor", "pointer", "color", "darkblue", "font-size", "20px", 3, "click"]], template: function CustomListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-dataView", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomListComponent_ng_template_3_Template, 1, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "agm-map");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.persons)("paginator", true)("rows", 9);
    } }, directives: [primeng_dataview__WEBPACK_IMPORTED_MODULE_4__["DataView"], primeng_api__WEBPACK_IMPORTED_MODULE_5__["PrimeTemplate"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmMap"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [src_app_shared_pipes_age_pipe__WEBPACK_IMPORTED_MODULE_8__["AgePipe"]], styles: ["[_nghost-%COMP%]     .p-dropdown {\r\n    width: 14rem;\r\n    font-weight: normal;\r\n}\r\n[_nghost-%COMP%]     .person-name {\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n}\r\n[_nghost-%COMP%]     .person-description {\r\n    margin: 0 0 1rem 0;\r\n}\r\n[_nghost-%COMP%]     .person-counter-icon {\r\n    vertical-align: middle;\r\n    margin-right: 0.5rem;\r\n}\r\n[_nghost-%COMP%]     .person-counter {\r\n    font-weight: 600;\r\n    vertical-align: middle;\r\n}\r\n[_nghost-%COMP%]     .person-list-item {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 1rem;\r\n    width: 100%;\r\n}\r\n[_nghost-%COMP%]     .person-list-item img {\r\n    width: 150px;\r\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    margin-right: 2rem;\r\n}\r\n[_nghost-%COMP%]     .person-list-item .person-list-detail {\r\n    flex: 1 1 0;\r\n}\r\n[_nghost-%COMP%]     .person-list-item .p-rating {\r\n    margin: 0 0 0.5rem 0;\r\n}\r\n[_nghost-%COMP%]     .person-list-item .person-age {\r\n    font-size: 1.5rem;\r\n    font-weight: 600;\r\n    margin-bottom: 0.5rem;\r\n    align-self: flex-end;\r\n}\r\n[_nghost-%COMP%]     .person-list-item .person-list-action {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n[_nghost-%COMP%]     .person-list-item .p-button {\r\n    margin-bottom: 0.5rem;\r\n}\r\n[_nghost-%COMP%]     .person-grid-item {\r\n    margin: 0.5em;\r\n    border: 1px solid var(--surface-d);\r\n}\r\n[_nghost-%COMP%]     .person-grid-item .person-grid-item-top, [_nghost-%COMP%]     .person-grid-item .person-grid-item-bottom {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n[_nghost-%COMP%]     .person-grid-item img {\r\n    width: 75%;\r\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    margin: 2rem 0;\r\n}\r\n[_nghost-%COMP%]     .person-grid-item .person-grid-item-content {\r\n    text-align: center;\r\n}\r\n[_nghost-%COMP%]     .person-grid-item .person-age {\r\n    font-size: 1.5rem;\r\n    font-weight: 600;\r\n}\r\n@media screen and (max-width: 576px) {\r\n    [_nghost-%COMP%]     .person-list-item {\r\n        flex-direction: column;\r\n        align-items: center;\r\n   }\r\n    [_nghost-%COMP%]     .person-list-item img {\r\n        width: 75%;\r\n        margin: 2rem 0;\r\n   }\r\n    [_nghost-%COMP%]     .person-list-item .person-list-detail {\r\n        text-align: center;\r\n   }\r\n    [_nghost-%COMP%]     .person-list-item .person-age {\r\n        align-self: center;\r\n   }\r\n    [_nghost-%COMP%]     .person-list-item .person-list-action {\r\n        display: flex;\r\n        flex-direction: column;\r\n   }\r\n    [_nghost-%COMP%]     .person-list-item .person-list-action {\r\n        margin-top: 2rem;\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        width: 100%;\r\n   }\r\n}\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    padding: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHdFQUF3RTtJQUN4RSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFVBQVU7SUFDVix3RUFBd0U7SUFDeEUsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7R0FDeEI7SUFDQztRQUNJLFVBQVU7UUFDVixjQUFjO0dBQ25CO0lBQ0M7UUFDSSxrQkFBa0I7R0FDdkI7SUFDQztRQUNJLGtCQUFrQjtHQUN2QjtJQUNDO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtHQUMzQjtJQUNDO1FBQ0ksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQiw4QkFBOEI7UUFDOUIsbUJBQW1CO1FBQ25CLFdBQVc7R0FDaEI7QUFDSDtBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJjdXN0b20tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5wLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxNHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tZGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAucGVyc29uLWNvdW50ZXItaWNvbiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tY291bnRlciB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tbGlzdC1pdGVtIGltZyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tbGlzdC1pdGVtIC5wZXJzb24tbGlzdC1kZXRhaWwge1xyXG4gICAgZmxleDogMSAxIDA7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tbGlzdC1pdGVtIC5wLXJhdGluZyB7XHJcbiAgICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0gLnBlcnNvbi1hZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tbGlzdC1pdGVtIC5wZXJzb24tbGlzdC1hY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tbGlzdC1pdGVtIC5wLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tZ3JpZC1pdGVtIHtcclxuICAgIG1hcmdpbjogMC41ZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWQpO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAucGVyc29uLWdyaWQtaXRlbSAucGVyc29uLWdyaWQtaXRlbS10b3AsIDpob3N0IDo6bmctZGVlcCAucGVyc29uLWdyaWQtaXRlbSAucGVyc29uLWdyaWQtaXRlbS1ib3R0b20ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tZ3JpZC1pdGVtIGltZyB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG4gICAgbWFyZ2luOiAycmVtIDA7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tZ3JpZC1pdGVtIC5wZXJzb24tZ3JpZC1pdGVtLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAucGVyc29uLWdyaWQtaXRlbSAucGVyc29uLWFnZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIDpob3N0IDo6bmctZGVlcCAucGVyc29uLWxpc3QtaXRlbSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICB9XHJcbiAgICA6aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0gaW1nIHtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICB9XHJcbiAgICA6aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0gLnBlcnNvbi1saXN0LWRldGFpbCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICB9XHJcbiAgICA6aG9zdCA6Om5nLWRlZXAgLnBlcnNvbi1saXN0LWl0ZW0gLnBlcnNvbi1hZ2Uge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgfVxyXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tbGlzdC1pdGVtIC5wZXJzb24tbGlzdC1hY3Rpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgfVxyXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5wZXJzb24tbGlzdC1pdGVtIC5wZXJzb24tbGlzdC1hY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgfVxyXG59XHJcblxyXG50YWJsZSB0ciB0ZHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4iXX0= */"] });


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
        component: _pages_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
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
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LoginComponent_ng_template_4_Template(rf, ctx) { }
function LoginComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMsg);
} }
function LoginComponent_ng_template_15_Template(rf, ctx) { }
class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.errorMsg = "";
        if (this.authService.isAuthenticated()) {
            this.router.navigate(["persons-list"]);
        }
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
            this.username = "";
            this.password = "";
            this.router.navigate(['persons-list']);
        }, err => {
            this.authService.setToken("");
            this.username = "";
            this.password = "";
            this.errorMsg = "Username or Password does not correct!";
            console.log("failed");
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 16, vars: 3, consts: [[1, "centered"], ["pTemplate", "header"], ["type", "text", "pInputText", "", "placeholder", "Username", 3, "ngModel", "ngModelChange"], ["type", "password", "pInputText", "", "placeholder", "Password", 3, "ngModel", "ngModelChange"], ["pButton", "", "type", "button", "label", "Login", 3, "click"], ["style", "color: red;", 4, "ngIf"], ["pTemplate", "footer"], [2, "color", "red"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User admin, Pass admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_ng_template_4_Template, 0, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_5_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_11_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_span_14_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_ng_template_15_Template, 0, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);
    } }, directives: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["div[_ngcontent-%COMP%] {\r\n    \r\n    \r\n\r\n    padding: 12px;\r\n    display: inline-block;\r\n  }\r\n\r\n  .centered[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    height: 300px;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 220px; \r\n    margin-left: -150px;\r\n    margin-top: -150px;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5Qjs7SUFFekIsYUFBYTtJQUNiLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgZGl2IHtcclxuICAgIC8qIGNvbG9yOiAjZmZmOyAqL1xyXG4gICAgLyogYmFja2dyb3VuZDogI2FhOWI5YjsgKi9cclxuXHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlcmVkIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDIyMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTUwcHg7XHJcbiB9Il19 */"] });


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
        this.contentHeaderForm = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            //"Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
        });
        this.contentHeaderImage = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "Content-Type": "image/png",
            "Access-Control-Allow-Origin": "*",
        });
        this.requestOptions = {
            /* other options here */
            responseType: 'blob'
        };
    }
    login(reqParm) {
        return this.http.post(this.url.authURL, reqParm, {
            headers: this.contentHeader,
        });
    }
    addPerson(reqParm) {
        return this.http.post(this.url.addPersonURL, reqParm, {
            headers: this.contentHeaderForm,
        });
    }
    updatePerson(id, reqParm) {
        return this.http.put(this.url.updatePersonURL + id, reqParm, {
            headers: this.contentHeaderForm,
        });
    }
    getPersons(reqParm) {
        return this.http.get(this.url.getPersonsURL, {
            headers: this.contentHeader,
        });
    }
    getPersonCountByCountry() {
        return this.http.get(this.url.getPersonCountByCountryURL, {
            headers: this.contentHeader,
        });
    }
    getCountries() {
        return this.http.get("./assets/countries.json");
    }
    getImage(id) {
        return this.http.get(this.url.imageURL + id, this.requestOptions);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http/http.service */ "gHic");



class PersonService {
    constructor(httpService) {
        this.httpService = httpService;
        this.countryMap = new Map();
    }
    addPerson(reqParam) {
        return this.httpService.addPerson(reqParam);
    }
    updatePerson(id, reqParm) {
        return this.httpService.updatePerson(id, reqParm);
    }
    getPersons(reqParam) {
        return this.httpService.getPersons(reqParam);
    }
    getPersonCountByCountry() {
        return this.httpService.getPersonCountByCountry();
    }
    getCountriesHttp() {
        return this.httpService.getCountries();
    }
    setCountries() {
        this.getCountriesHttp().subscribe((res) => {
            res.forEach((country) => {
                this.countryMap.set(country.country_code, country);
                //this.countryMap.set(country.name, country);
            });
        });
    }
    getCountries() {
        return Array.from(this.countryMap.values());
    }
    getCountry(countryCode) {
        return this.countryMap.get(countryCode);
    }
    // getImage(id: string): Observable<any> {
    //   return this.httpService.getImage(id);
    // }
    getImage(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promise = new Promise((res, rej) => {
                this.httpService.getImage(id).subscribe((data) => {
                    this.createImageFromBlob(data, id).then(result => {
                        res(result);
                    });
                }, (error) => {
                    console.log("Error occured", error);
                });
            });
            return promise;
        });
    }
    createImageFromBlob(image, id) {
        const promise = new Promise((res, rej) => {
            let reader = new FileReader();
            reader.addEventListener("load", () => {
                //this.imageToShow.set(id, reader.result);
                res(reader.result);
            }, false);
            if (image) {
                reader.readAsDataURL(image);
            }
            else {
                //rej("error");
            }
        });
        return promise;
    }
}
PersonService.ɵfac = function PersonService_Factory(t) { return new (t || PersonService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
PersonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PersonService, factory: PersonService.ɵfac, providedIn: "root" });


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
/* harmony import */ var _components_edit_person_editPersonDetail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/edit-person/editPersonDetail.component */ "WIsJ");
/* harmony import */ var _components_person_detail_personDetail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/person-detail/personDetail.component */ "9m/g");
/* harmony import */ var _pages_add_person_addPerson_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/add-person/addPerson.component */ "CL/o");
/* harmony import */ var _pages_person_list_personList_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/person-list/personList.component */ "/OYR");
/* harmony import */ var _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/statistics/statistics.component */ "LeoX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    {
        path: 'add-person',
        component: _pages_add_person_addPerson_component__WEBPACK_IMPORTED_MODULE_4__["AddPersonComponent"],
        canActivate: [src_app_core_gaurds_OnlyLoggedInUsersGuard__WEBPACK_IMPORTED_MODULE_1__["OnlyLoggedInUsersGuard"]]
    },
    {
        path: 'persons-list',
        component: _pages_person_list_personList_component__WEBPACK_IMPORTED_MODULE_5__["PersonListComponent"],
        canActivate: [src_app_core_gaurds_OnlyLoggedInUsersGuard__WEBPACK_IMPORTED_MODULE_1__["OnlyLoggedInUsersGuard"]]
    },
    {
        path: 'statistics',
        component: _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_6__["StatisticsComponent"],
        canActivate: [src_app_core_gaurds_OnlyLoggedInUsersGuard__WEBPACK_IMPORTED_MODULE_1__["OnlyLoggedInUsersGuard"]]
    },
    {
        path: 'person-detail',
        component: _components_person_detail_personDetail_component__WEBPACK_IMPORTED_MODULE_3__["PersonDetailComponent"],
        canActivate: [src_app_core_gaurds_OnlyLoggedInUsersGuard__WEBPACK_IMPORTED_MODULE_1__["OnlyLoggedInUsersGuard"]]
    },
    {
        path: 'edit-person-detail',
        component: _components_edit_person_editPersonDetail_component__WEBPACK_IMPORTED_MODULE_2__["EditPersonDetailComponent"],
        canActivate: [src_app_core_gaurds_OnlyLoggedInUsersGuard__WEBPACK_IMPORTED_MODULE_1__["OnlyLoggedInUsersGuard"]]
    },
];
class PersonRoutingModule {
}
PersonRoutingModule.ɵfac = function PersonRoutingModule_Factory(t) { return new (t || PersonRoutingModule)(); };
PersonRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: PersonRoutingModule });
PersonRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](PersonRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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