(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["operations-operations-module~pages-report-report-module"],{

/***/ "./src/app/pages/report/AuthGuard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/report/AuthGuard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(toaster) {
        this.toaster = toaster;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        this.auth = JSON.parse(sessionStorage.getItem("auth"));
        var b = false;
        this.auth.modules.forEach(function (screen) {
            if (screen.modUrl.indexOf("reports") >= 0) {
                b = true;
            }
        });
        if (!b)
            this.toaster.error("Permission Denied");
        // ('Please Login to Continue');?
        return b;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/pages/report/account-ledger/account-ledger.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/pages/report/account-ledger/account-ledger.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .ng-select.custom {\r\n    border:0px;\r\n    min-height: 0px;\r\n    border-radius: 0;\r\n    width:100%;\r\n}\r\n.ng-select.custom .ng-select-container  {            \r\n    min-height: 0px;\r\n    border-radius: 0;\r\n    width:100%;\r\n} */\r\n/* .ng-dropdown-panel{\r\n    width:200px !important;\r\n} */\r\n.ng-dropdown-panel {\r\n    min-width: 120% !important;\r\n}"

/***/ }),

/***/ "./src/app/pages/report/account-ledger/account-ledger.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/report/account-ledger/account-ledger.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Accounts Ledger <i class=\"fa fa-print\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form [formGroup]=\"ngForm\" (ngSubmit)=\"printReport()\">\r\n              <div class=\"cRow\">\r\n                <!-- <div style=\"min-width: {{GlAccounts.length}}% !important;\">ABC</div> -->\r\n                <!-- <ng-select  class=\"custom\" autoCorrect [items]=\"GlAccounts\" required required bindLabel=\"desc\" bindValue=\"accNum\"\r\n                    name=\"glMapping\" placeholder=\"Select GL Account Mapping\" formControlName=\"account\">\r\n                  </ng-select> -->\r\n                <div class=\"cCol6\">\r\n\r\n                  <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"branch\"\r\n                    readonly />\r\n\r\n                  <!-- <mat-form-field *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\">\r\n                    <mat-select placeholder=\"Branch\" formControlName=\"branch\"\r\n                      (selectionChange)=\"onBranchSelectionChange($event)\">\r\n                      <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                        {{b.brnchNm}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field> -->\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\"\r\n                    (change)=\"onBranchSelectionChange($event)\" [items]=\"branchs\" required bindLabel=\"brnchNm\"\r\n                    bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"branch\">\r\n                  </ng-select>\r\n\r\n\r\n                  <ng-select [ngStyle]=\"getStyleList()\" class=\"custom\" autoCorrect [items]=\"GlAccounts\" required\r\n                    required bindLabel=\"accDesc\" bindValue=\"accNum\" name=\"glMapping\"\r\n                    placeholder=\"Select GL Account Mapping\" formControlName=\"account\">\r\n                  </ng-select>\r\n\r\n\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                      [matDatepicker]=\"picker1\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                      [matDatepicker]=\"picker2\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/account-ledger/account-ledger.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/report/account-ledger/account-ledger.component.ts ***!
  \*************************************************************************/
/*! exports provided: MY_FORMATS, AccountLedgerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountLedgerComponent", function() { return AccountLedgerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var moment = moment__WEBPACK_IMPORTED_MODULE_4__;
var MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
var AccountLedgerComponent = /** @class */ (function () {
    function AccountLedgerComponent(fb, toaster, reportsService, productService, transfersService, spinner) {
        var _this = this;
        this.fb = fb;
        this.toaster = toaster;
        this.reportsService = reportsService;
        this.productService = productService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.GlAccounts = [];
        this.maxVal = 0;
        this.maxDate = new Date();
        this.ngForm = this.fb.group({
            frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            account: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            branch: [''],
        });
        if (this.auth.role == "bm" || this.auth.role == "bdo") {
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                account: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
        else {
            this.transfersService.getBranches().subscribe(function (d) {
                console.log(d);
                _this.branchs = d;
            });
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                account: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: [''],
            });
        }
    }
    AccountLedgerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getGlAccounts().subscribe(function (res) {
            console.log(res);
            _this.GlAccounts = res;
        }, function (error) {
            console.log(error);
        });
    };
    AccountLedgerComponent.prototype.printReport = function () {
        var _this = this;
        this.spinner.show();
        this.reportsService.printAccountLedger(this.ngForm.value).subscribe(function (response) {
            _this.spinner.hide();
            var binaryData = [];
            binaryData.push(response);
            var fileURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
            window.open(fileURL, '_blank');
        }, function (error) {
            _this.spinner.hide();
            if (error.status == 500) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
            else if (error) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
        });
    };
    Object.defineProperty(AccountLedgerComponent.prototype, "f", {
        get: function () { return this.ngForm.controls; },
        enumerable: true,
        configurable: true
    });
    AccountLedgerComponent.prototype.getStyleList = function () {
        var _this = this;
        this.GlAccounts.forEach(function (acc) {
            if (acc.accDesc.length > _this.maxVal) {
                _this.maxVal = acc.accDesc.length;
            }
        });
        // console.log({'display':'block', 'width': this.maxVal*10+'px !important'})
        return { 'display': 'block', 'width': this.maxVal * 0.75 + 'em' };
    };
    AccountLedgerComponent.prototype.onBranchSelectionChange = function (e) {
        var _this = this;
        this.spinner.show();
        this.productService.getGlAccountsForAccountLedger(this.ngForm.controls['branch'].value).subscribe(function (res) {
            _this.spinner.hide();
            console.log(res);
            _this.GlAccounts = res;
        }, function (error) {
            console.log(error);
        });
    };
    AccountLedgerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-ledger',
            template: __webpack_require__(/*! ./account-ledger.component.html */ "./src/app/pages/report/account-ledger/account-ledger.component.html"),
            styles: [__webpack_require__(/*! ./account-ledger.component.css */ "./src/app/pages/report/account-ledger/account-ledger.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"], src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_7__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], AccountLedgerComponent);
    return AccountLedgerComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/due-recovery/due-recovery.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/pages/report/due-recovery/due-recovery.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/due-recovery/due-recovery.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/report/due-recovery/due-recovery.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Due Recovery <i class=\"fa fa-print\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"printReport()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol3\">\r\n                  <input *ngIf=\"auth.role != 'admin'\" type=\"hidden\" formControlName=\"branch\" readonly />\r\n\r\n\r\n                  <!-- <mat-form-field *ngIf=\"auth.role == 'admin'\">\r\n                      <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                        <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                          {{b.brnchNm}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field> -->\r\n\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"frmDt\" placeholder=\"From Date:\" [matDatepicker]=\"picker1\"\r\n                      disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"toDt\" placeholder=\"To Date:\" [matDatepicker]=\"picker2\"\r\n                      disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/due-recovery/due-recovery.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/report/due-recovery/due-recovery.component.ts ***!
  \*********************************************************************/
/*! exports provided: MY_FORMATS, DueRecoveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DueRecoveryComponent", function() { return DueRecoveryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/recovery.service */ "./src/app/shared/services/recovery.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var moment = moment__WEBPACK_IMPORTED_MODULE_1__;
var MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
var DueRecoveryComponent = /** @class */ (function () {
    function DueRecoveryComponent(fb, toaster, reportsService, recoveryService, transfersService, spinner) {
        var _this = this;
        this.fb = fb;
        this.toaster = toaster;
        this.reportsService = reportsService;
        this.recoveryService = recoveryService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.tempInstituteArray = [];
        this.maxDate = new Date();
        if (this.auth.role == "admin") {
            this.transfersService.getBranches().subscribe(function (d) { _this.branchs = d; });
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            });
        }
        else {
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,],
            });
        }
    }
    DueRecoveryComponent.prototype.ngOnInit = function () {
    };
    DueRecoveryComponent.prototype.printReport = function () {
        var _this = this;
        if (new Date(this.ngForm.controls['toDt'].value) < new Date(this.ngForm.controls['frmDt'].value)) {
            this.toaster.error("From Date Can not be greater than To Date");
            return;
        }
        this.spinner.show();
        this.reportsService.printDueRecovery(this.ngForm.value).subscribe(function (response) {
            _this.spinner.hide();
            var binaryData = [];
            binaryData.push(response);
            var fileURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
            window.open(fileURL, '_blank');
        }, function (error) {
            _this.spinner.hide();
            if (error.status == 500) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
            else if (error) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
        });
    };
    Object.defineProperty(DueRecoveryComponent.prototype, "f", {
        get: function () { return this.ngForm.controls; },
        enumerable: true,
        configurable: true
    });
    DueRecoveryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-due-recovery',
            template: __webpack_require__(/*! ./due-recovery.component.html */ "./src/app/pages/report/due-recovery/due-recovery.component.html"),
            styles: [__webpack_require__(/*! ./due-recovery.component.css */ "./src/app/pages/report/due-recovery/due-recovery.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_6__["ReportsService"], src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_4__["RecoveryService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_7__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]])
    ], DueRecoveryComponent);
    return DueRecoveryComponent;
}());



/***/ })

}]);
//# sourceMappingURL=operations-operations-module~pages-report-report-module.js.map