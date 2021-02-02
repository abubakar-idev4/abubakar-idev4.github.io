(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-admin-module~pages-setup-setup-module"],{

/***/ "./node_modules/angular-datatables/index.js":
/*!**************************************************!*\
  !*** ./node_modules/angular-datatables/index.js ***!
  \**************************************************/
/*! exports provided: DataTableDirective, DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"]; });

/* harmony import */ var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/angular-datatables.module */ "./node_modules/angular-datatables/src/angular-datatables.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"]; });

/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.directive.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
  \*****************************************************************************/
/*! exports provided: DataTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return DataTableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */


var DataTableDirective = /** @class */ (function () {
    function DataTableDirective(el) {
        this.el = el;
        /**
           * The DataTable option you pass to configure your table.
           */
        this.dtOptions = {};
    }
    DataTableDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dtTrigger) {
            this.dtTrigger.subscribe(function () {
                _this.displayTable();
            });
        }
        else {
            this.displayTable();
        }
    };
    DataTableDirective.prototype.ngOnDestroy = function () {
        if (this.dtTrigger) {
            this.dtTrigger.unsubscribe();
        }
        if (this.dt) {
            this.dt.destroy(true);
        }
    };
    DataTableDirective.prototype.displayTable = function () {
        var _this = this;
        this.dtInstance = new Promise(function (resolve, reject) {
            Promise.resolve(_this.dtOptions).then(function (dtOptions) {
                // Using setTimeout as a "hack" to be "part" of NgZone
                setTimeout(function () {
                    _this.dt = $(_this.el.nativeElement).DataTable(dtOptions);
                    resolve(_this.dt);
                });
            });
        });
    };
    DataTableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[datatable]'
                },] },
    ];
    /** @nocollapse */
    DataTableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    DataTableDirective.propDecorators = {
        "dtOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dtTrigger": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return DataTableDirective;
}());

//# sourceMappingURL=angular-datatables.directive.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.module.js":
/*!**************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
  \**************************************************************************/
/*! exports provided: DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return DataTablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */



var DataTablesModule = /** @class */ (function () {
    function DataTablesModule() {
    }
    DataTablesModule.forRoot = function () {
        return {
            ngModule: DataTablesModule
        };
    };
    DataTablesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
                    exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
                },] },
    ];
    return DataTablesModule;
}());

//# sourceMappingURL=angular-datatables.module.js.map

/***/ }),

/***/ "./src/app/shared/models/REF_CODE_GRP_KEYS.mocks.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/models/REF_CODE_GRP_KEYS.mocks.ts ***!
  \**********************************************************/
/*! exports provided: REGION_Typo, HEALTH_INSURANCE_PLAN, PAYMENT_MODE, EXPENSE_TYPE, INCOME_TYPE, GENDER, MARITAL_STATUS, EDUCATION, OCCUPATION, RESIDENCE, FORMS_ASSIGNMENT, SECTOR, ACTIVITY, BUSINESS_RUNNER, BUSINESS_OWNERSHIP, STATUS, QUESTION_TYPE, DOCUMENTATION_CATEGORY, DOCUMENTATION_TYPE, NATURE_OF_DISABILITY, RELATIONSHIP_TYPE, FUNDED_BY, LOAN_TERMS, LOAN_FREQUENCY, CHARGES_CALCULATION_TYPE, COLLECTION_TYPE, CHARGES_TYPE, ACCOUNT_CATEGORY, ADDRESS_TYPE, INCOME_CATEGORY, EXPENSE_CATEGORY, CURRENCY_CODE, FUNCTION, DATE_FIELDS, BRANCH_TYPE, HOUSEHOLD_EXPENSE, SECONDARY_INCOME, LOAN_UTILIZATION_EXPENSE, LOAN_UTILIZATION_EXPENSE_MEAT, LOAN_UTILIZATION_EXPENSE_DAIRY, LOAN_UTILIZATION_EXPENSE_SCHOOL, INSURANCE_RELATION, BREAD_EARNER, PAYMENT_FREQUENCY, TERMS, SCHOOL_BUILDING_OWNERSHIP, SECOND_INCOME_SOURCE, KSZB_EXCLUSION_CATEGORY, HOUSEHOLD_EXPENSES, HOUSEHOLD_EXPENSES_FOR_LIVESTOCK, BUSINESS_EXPENSES, SCHOOL_EXPENSES, LIVESTOCK_EXPENSES_DAIRY, LIVESTOCK_EXPENSES_MEAT, BUSINESS_LOCATION, RELATION_TYPE_NOMINEE, RELATION_TYPE_COBORROWER_KSS, RELATION_TYPE_COBORROWER, INCOME_SOURCE_RELATIVE, SCHOOL_PRINCIPAL, LIVESTOCK_ANML_TYP, LIVESTOCK_ANML_KND, SCHOOL_OWNERSHIP, SCHOOL_TYPE, SCHOOL_GRADE_LEVEL, SCHOOL_MEDIUM, SCHOOL_AREA, KSS_SECONDARY_INCOME, INCOME_SOURCE_SCHOOL_OTHER, LOAN_UTILIZATION_TYPE_SCHOOL, DOCUMENT_VERIFICATION, SCHOOL_ASSET, LOAN_PURPOSE, HEALTH_INSURANCE_EXCLUSION_CATEGORY, RELATIVE_RELATION_KEL, PRODUCT_TYPE, BANKS, APPLICATION_STATUS, BOOLEAN, DEFAULT_BOOLEAN, SCHOOL_LEVEL, REJECTION_REASON_CODE, RELATIONSHIP_WITH_CLIENT, RELATION_WITH_RESCHEDULING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGION_Typo", function() { return REGION_Typo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEALTH_INSURANCE_PLAN", function() { return HEALTH_INSURANCE_PLAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_MODE", function() { return PAYMENT_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPENSE_TYPE", function() { return EXPENSE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCOME_TYPE", function() { return INCOME_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENDER", function() { return GENDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARITAL_STATUS", function() { return MARITAL_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDUCATION", function() { return EDUCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OCCUPATION", function() { return OCCUPATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESIDENCE", function() { return RESIDENCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORMS_ASSIGNMENT", function() { return FORMS_ASSIGNMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECTOR", function() { return SECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVITY", function() { return ACTIVITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUSINESS_RUNNER", function() { return BUSINESS_RUNNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUSINESS_OWNERSHIP", function() { return BUSINESS_OWNERSHIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_TYPE", function() { return QUESTION_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCUMENTATION_CATEGORY", function() { return DOCUMENTATION_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCUMENTATION_TYPE", function() { return DOCUMENTATION_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NATURE_OF_DISABILITY", function() { return NATURE_OF_DISABILITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELATIONSHIP_TYPE", function() { return RELATIONSHIP_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FUNDED_BY", function() { return FUNDED_BY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAN_TERMS", function() { return LOAN_TERMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAN_FREQUENCY", function() { return LOAN_FREQUENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARGES_CALCULATION_TYPE", function() { return CHARGES_CALCULATION_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_TYPE", function() { return COLLECTION_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARGES_TYPE", function() { return CHARGES_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_CATEGORY", function() { return ACCOUNT_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDRESS_TYPE", function() { return ADDRESS_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCOME_CATEGORY", function() { return INCOME_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPENSE_CATEGORY", function() { return EXPENSE_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCY_CODE", function() { return CURRENCY_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FUNCTION", function() { return FUNCTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_FIELDS", function() { return DATE_FIELDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRANCH_TYPE", function() { return BRANCH_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOUSEHOLD_EXPENSE", function() { return HOUSEHOLD_EXPENSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECONDARY_INCOME", function() { return SECONDARY_INCOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAN_UTILIZATION_EXPENSE", function() { return LOAN_UTILIZATION_EXPENSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAN_UTILIZATION_EXPENSE_MEAT", function() { return LOAN_UTILIZATION_EXPENSE_MEAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAN_UTILIZATION_EXPENSE_DAIRY", function() { return LOAN_UTILIZATION_EXPENSE_DAIRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAN_UTILIZATION_EXPENSE_SCHOOL", function() { return LOAN_UTILIZATION_EXPENSE_SCHOOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSURANCE_RELATION", function() { return INSURANCE_RELATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAD_EARNER", function() { return BREAD_EARNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_FREQUENCY", function() { return PAYMENT_FREQUENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERMS", function() { return TERMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHOOL_BUILDING_OWNERSHIP", function() { return SCHOOL_BUILDING_OWNERSHIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECOND_INCOME_SOURCE", function() { return SECOND_INCOME_SOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KSZB_EXCLUSION_CATEGORY", function() { return KSZB_EXCLUSION_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOUSEHOLD_EXPENSES", function() { return HOUSEHOLD_EXPENSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOUSEHOLD_EXPENSES_FOR_LIVESTOCK", function() { return HOUSEHOLD_EXPENSES_FOR_LIVESTOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUSINESS_EXPENSES", function() { return BUSINESS_EXPENSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHOOL_EXPENSES", function() { return SCHOOL_EXPENSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVESTOCK_EXPENSES_DAIRY", function() { return LIVESTOCK_EXPENSES_DAIRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVESTOCK_EXPENSES_MEAT", function() { return LIVESTOCK_EXPENSES_MEAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUSINESS_LOCATION", function() { return BUSINESS_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELATION_TYPE_NOMINEE", function() { return RELATION_TYPE_NOMINEE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELATION_TYPE_COBORROWER_KSS", function() { return RELATION_TYPE_COBORROWER_KSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELATION_TYPE_COBORROWER", function() { return RELATION_TYPE_COBORROWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCOME_SOURCE_RELATIVE", function() { return INCOME_SOURCE_RELATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHOOL_PRINCIPAL", function() { return SCHOOL_PRINCIPAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVESTOCK_ANML_TYP", function() { return LIVESTOCK_ANML_TYP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVESTOCK_ANML_KND", function() { return LIVESTOCK_ANML_KND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHOOL_OWNERSHIP", function() { return SCHOOL_OWNERSHIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHOOL_TYPE", function() { return SCHOOL_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHOOL_GRADE_LEVEL", function() { return SCHOOL_GRADE_LEVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHOOL_MEDIUM", function() { return SCHOOL_MEDIUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHOOL_AREA", function() { return SCHOOL_AREA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KSS_SECONDARY_INCOME", function() { return KSS_SECONDARY_INCOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCOME_SOURCE_SCHOOL_OTHER", function() { return INCOME_SOURCE_SCHOOL_OTHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAN_UTILIZATION_TYPE_SCHOOL", function() { return LOAN_UTILIZATION_TYPE_SCHOOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCUMENT_VERIFICATION", function() { return DOCUMENT_VERIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHOOL_ASSET", function() { return SCHOOL_ASSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAN_PURPOSE", function() { return LOAN_PURPOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEALTH_INSURANCE_EXCLUSION_CATEGORY", function() { return HEALTH_INSURANCE_EXCLUSION_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELATIVE_RELATION_KEL", function() { return RELATIVE_RELATION_KEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_TYPE", function() { return PRODUCT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BANKS", function() { return BANKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLICATION_STATUS", function() { return APPLICATION_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOLEAN", function() { return BOOLEAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BOOLEAN", function() { return DEFAULT_BOOLEAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHOOL_LEVEL", function() { return SCHOOL_LEVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REJECTION_REASON_CODE", function() { return REJECTION_REASON_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELATIONSHIP_WITH_CLIENT", function() { return RELATIONSHIP_WITH_CLIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELATION_WITH_RESCHEDULING", function() { return RELATION_WITH_RESCHEDULING; });
var REGION_Typo = '0001';
var HEALTH_INSURANCE_PLAN = '0002';
var PAYMENT_MODE = '0003';
var EXPENSE_TYPE = '0004';
var INCOME_TYPE = '0005';
var GENDER = '0006';
var MARITAL_STATUS = '0007';
var EDUCATION = '0008';
var OCCUPATION = '0009';
var RESIDENCE = '0010';
var FORMS_ASSIGNMENT = '0011';
var SECTOR = '0012';
var ACTIVITY = '0013';
var BUSINESS_RUNNER = '0014';
var BUSINESS_OWNERSHIP = '0015';
var STATUS = '0016';
var QUESTION_TYPE = '0017';
var DOCUMENTATION_CATEGORY = '0018';
var DOCUMENTATION_TYPE = '0019';
var NATURE_OF_DISABILITY = '0020';
var RELATIONSHIP_TYPE = '0021';
var FUNDED_BY = '0022';
var LOAN_TERMS = '0023';
var LOAN_FREQUENCY = '0024';
var CHARGES_CALCULATION_TYPE = '0025';
var COLLECTION_TYPE = '0026';
var CHARGES_TYPE = '0027';
var ACCOUNT_CATEGORY = '0028';
var ADDRESS_TYPE = '0029';
var INCOME_CATEGORY = '0030';
var EXPENSE_CATEGORY = '0031';
var CURRENCY_CODE = '0033';
var FUNCTION = '0034';
var DATE_FIELDS = '0035';
var BRANCH_TYPE = '0036';
var HOUSEHOLD_EXPENSE = '0061';
var SECONDARY_INCOME = '0062';
var LOAN_UTILIZATION_EXPENSE = '0063';
var LOAN_UTILIZATION_EXPENSE_MEAT = '0388';
var LOAN_UTILIZATION_EXPENSE_DAIRY = '0063';
var LOAN_UTILIZATION_EXPENSE_SCHOOL = '0102';
var INSURANCE_RELATION = '0065';
var BREAD_EARNER = '0066';
var PAYMENT_FREQUENCY = '0067';
var TERMS = '0068';
var SCHOOL_BUILDING_OWNERSHIP = '0081';
var SECOND_INCOME_SOURCE = '0082';
var KSZB_EXCLUSION_CATEGORY = '0083';
var HOUSEHOLD_EXPENSES = '0084';
var HOUSEHOLD_EXPENSES_FOR_LIVESTOCK = '0061';
var BUSINESS_EXPENSES = '0085';
var SCHOOL_EXPENSES = '0086';
var LIVESTOCK_EXPENSES_DAIRY = '0087';
var LIVESTOCK_EXPENSES_MEAT = '0389';
var BUSINESS_LOCATION = '0088';
var RELATION_TYPE_NOMINEE = '0089';
var RELATION_TYPE_COBORROWER_KSS = '0090';
var RELATION_TYPE_COBORROWER = '0091';
var INCOME_SOURCE_RELATIVE = '0092';
var SCHOOL_PRINCIPAL = '0093';
var LIVESTOCK_ANML_TYP = '379';
var LIVESTOCK_ANML_KND = '378';
var SCHOOL_OWNERSHIP = '0094';
var SCHOOL_TYPE = '0095';
var SCHOOL_GRADE_LEVEL = '0096';
var SCHOOL_MEDIUM = '0097';
var SCHOOL_AREA = '0098';
var KSS_SECONDARY_INCOME = '0099';
var INCOME_SOURCE_SCHOOL_OTHER = '0100';
var LOAN_UTILIZATION_TYPE_SCHOOL = '0102';
var DOCUMENT_VERIFICATION = '0103';
var SCHOOL_ASSET = '0104';
var LOAN_PURPOSE = '0105';
var HEALTH_INSURANCE_EXCLUSION_CATEGORY = '0032';
var RELATIVE_RELATION_KEL = '0198';
var PRODUCT_TYPE = '161';
var BANKS = '178';
var APPLICATION_STATUS = '106';
var BOOLEAN = '0221';
var DEFAULT_BOOLEAN = '0394';
var SCHOOL_LEVEL = '0222';
var REJECTION_REASON_CODE = '0298';
var RELATIONSHIP_WITH_CLIENT = '02783';
var RELATION_WITH_RESCHEDULING = '02784';


/***/ }),

/***/ "./src/app/shared/services/file-loader.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/file-loader.service.ts ***!
  \********************************************************/
/*! exports provided: FileLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileLoaderService", function() { return FileLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_Api_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Api.model */ "./src/app/shared/models/Api.model.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FileLoaderService = /** @class */ (function () {
    //  object
    function FileLoaderService(http, toastr, spinner) {
        this.http = http;
        this.toastr = toastr;
        this.spinner = spinner;
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_4__["ApiModel"]();
        this.token = 'Bearer ' + sessionStorage.getItem('token');
    }
    FileLoaderService.prototype.loadFilePath = function (filePath) {
        // this.httpOptions = {
        //   headers: new HttpHeaders({
        //     'Authorization': this.token,
        //   }),
        //   responseType: "text/plain"
        // };
        return this.http.get(this.apiModel.host + filePath, {
            'responseType': "text/plain",
            headers: this.apiModel.httpHeaderGet
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (p) { return console.log(p); }));
    };
    FileLoaderService.prototype.uploadFile = function (type) {
        if (type == "Recovery") {
            return this.http.get(this.apiModel.host + '/setupservice/api/load-recovery-file', { 'responseType': "text/plain", headers: this.apiModel.httpHeaderGet });
        }
        else if (type == "Budget") {
            return this.http.get(this.apiModel.host + '/setupservice/api/load-budget-file', { 'responseType': "text/plain", headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (p) { return console.log(p); }));
        }
        else if (type == "Target") {
            return this.http.get(this.apiModel.host + '/setupservice/api/load-target-file', { 'responseType': "text/plain", headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (p) { return console.log(p); }));
        }
        else if (type == "Tagging") {
            return this.http.get(this.apiModel.host + '/setupservice/api/load-tagging-file', { 'responseType': "text/plain", headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (p) { return console.log(p); }));
        }
        else if (type == "InsuranceClaim") {
            return this.http.get(this.apiModel.host + '/setupservice/api/load-insurance-claim-file', { 'responseType': "text/plain", headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (p) { return console.log(p); }));
        }
        else if (type == "WriteOff") {
            return this.http.get(this.apiModel.host + '/setupservice/api/load-write-off-file', { 'responseType': "text/plain", headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (p) { return console.log(p); }));
        }
        else if (type == "Funds") {
            return this.http.get(this.apiModel.host + '/setupservice/api/load-funds-file', { headers: this.apiModel.httpHeaderGet }).pipe();
        }
        else if (type == "Aml") {
            return this.http.get(this.apiModel.host + '/setupservice/api/process-aml-list', { headers: this.apiModel.httpHeaderGet }).pipe();
        }
        else if (type == "defer") {
            return this.http.get(this.apiModel.host + '/setupservice/api/post-defer-file', { headers: this.apiModel.httpHeaderGet }).pipe();
        }
    };
    FileLoaderService.prototype.getClientAndBranchName = function (clntId) {
        return this.http.get(this.apiModel.host + '/setupservice/api/get-client-and-branch-name/' + clntId, { headers: this.apiModel.httpHeaderGet, 'responseType': "text/plain", }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (p) { return console.log(p); }));
    };
    FileLoaderService.prototype.getAgent = function (agentId) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-typs-by-seq/' + agentId, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (p) { return console.log(p); }));
    };
    FileLoaderService.prototype.getFileData = function (type) {
        if (type == "Recovery") {
            return this.http.get(this.apiModel.host + '/setupservice/api/get-file-data/' + type, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (p) { return console.log(p); }));
        }
    };
    FileLoaderService.prototype.postData = function () {
        console.log("))))");
        return this.http.get(this.apiModel.host + '/setupservice/api/process-recovery-file', { headers: this.apiModel.httpHeaderGet });
    };
    FileLoaderService.prototype.postFundsData = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/post-funds-file', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log(data); }), //this.toastr.success('Fund Posted', 'Success!')),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('adjustment')));
    };
    FileLoaderService.prototype.postDeferData = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/post-defer-file', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log(data); }), //this.toastr.success('Fund Posted', 'Success!')),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('adjustment')));
    };
    FileLoaderService.prototype.validateBudgetFile = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/validate-budget-file', { headers: this.apiModel.httpHeaderGet });
    };
    FileLoaderService.prototype.validateTargetFile = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/validate-target-file', { headers: this.apiModel.httpHeaderGet });
    };
    FileLoaderService.prototype.validateTaggingFile = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/validate-tagging-file', { headers: this.apiModel.httpHeaderGet });
    };
    FileLoaderService.prototype.validateClaimsFile = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/validate-insurance-claim-file', { headers: this.apiModel.httpHeaderGet });
    };
    FileLoaderService.prototype.validateWriteOffFile = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/validate-write-off-file', { headers: this.apiModel.httpHeaderGet });
    };
    FileLoaderService.prototype.validateFundsFile = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/validate-funds-file', { headers: this.apiModel.httpHeaderGet });
    };
    FileLoaderService.prototype.validateDeferFile = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/validate-defer-file', { headers: this.apiModel.httpHeaderGet });
    };
    FileLoaderService.prototype.validateRecoveryFile = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/validate-recovery-file', { headers: this.apiModel.httpHeaderGet });
    };
    FileLoaderService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        this.spinner.hide();
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            _this.toastr.error(error.message, operation + " failed:");
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    FileLoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], FileLoaderService);
    return FileLoaderService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-admin-admin-module~pages-setup-setup-module.js.map