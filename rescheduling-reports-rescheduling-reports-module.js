(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rescheduling-reports-rescheduling-reports-module"],{

/***/ "./src/app/pages/report/rescheduling-reports/client-recovery-status/client-recovery-status.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/report/rescheduling-reports/client-recovery-status/client-recovery-status.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/rescheduling-reports/client-recovery-status/client-recovery-status.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/report/rescheduling-reports/client-recovery-status/client-recovery-status.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"content\">\r\n    <div class=\"mysearchbox\">\r\n      <h6 class=\"d-inline-block searchshow\">Client Recovery Status</h6>\r\n      <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n        <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\" title=\"Type in a name\">\r\n      </div>\r\n    </div>\r\n\r\n    <form [formGroup]=\"ngForm\" (ngSubmit)=\"onSubmitClientRecoveryReport()\">\r\n      <div class=\"cRow\">\r\n        <div class=\"cCol12\">\r\n\r\n          <input *ngIf=\"auth.role != 'admin'\" type=\"hidden\" formControlName=\"branch\" readonly />\r\n          <!-- <mat-form-field *ngIf=\"auth.role == 'admin'\">\r\n              <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                  {{b.brnchNm}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field> -->\r\n\r\n\r\n          <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required\r\n            bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n            formControlName=\"branch\">\r\n          </ng-select>\r\n\r\n          <mat-form-field>\r\n            <input matInput required formControlName=\"frstInstDt\" [max]=\"maxDate\" placeholder=\"Reported Date:\"\r\n              [matDatepicker]=\"picker3\" disabled readonly />\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n            <mat-datepicker required #picker3 disabled=\"false\"></mat-datepicker>\r\n            <mat-error *ngIf=\"!ngForm.get('frstInstDt').valid\">\r\n              First Installment Date is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer text-center\">\r\n        <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n      </div>\r\n    </form>\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/rescheduling-reports/client-recovery-status/client-recovery-status.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/report/rescheduling-reports/client-recovery-status/client-recovery-status.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: MY_FORMATS, ClientRecoveryStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRecoveryStatusComponent", function() { return ClientRecoveryStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var src_app_shared_services_rescheduling_reports_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/rescheduling-reports.service */ "./src/app/shared/services/rescheduling-reports.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var moment = moment__WEBPACK_IMPORTED_MODULE_5__;
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
var ClientRecoveryStatusComponent = /** @class */ (function () {
    function ClientRecoveryStatusComponent(reschedulingReportService, toaster, transfersService, fb, spinner) {
        var _this = this;
        this.reschedulingReportService = reschedulingReportService;
        this.toaster = toaster;
        this.transfersService = transfersService;
        this.fb = fb;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.maxDate = new Date();
        if (this.auth.role == "bm" || this.auth.role == "bdo") {
            this.ngForm = this.fb.group({
                frstInstDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
        }
        else {
            this.transfersService.getBranches().subscribe(function (d) {
                _this.branchs = d;
            });
            this.ngForm = this.fb.group({
                frstInstDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                branch: [''],
            });
        }
    }
    ClientRecoveryStatusComponent.prototype.ngOnInit = function () {
    };
    ClientRecoveryStatusComponent.prototype.onSubmitClientRecoveryReport = function () {
        var _this = this;
        this.spinner.show();
        var d = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]('en-US').transform(this.ngForm.get('frstInstDt').value, 'dd-MMM-yyyy');
        console.log(d);
        var a = this.ngForm.controls['branch'].value;
        this.reschedulingReportService.getClientRecoveryStatus(d, a).subscribe(function (response) {
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
    ClientRecoveryStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-recovery-status',
            template: __webpack_require__(/*! ./client-recovery-status.component.html */ "./src/app/pages/report/rescheduling-reports/client-recovery-status/client-recovery-status.component.html"),
            styles: [__webpack_require__(/*! ./client-recovery-status.component.css */ "./src/app/pages/report/rescheduling-reports/client-recovery-status/client-recovery-status.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_rescheduling_reports_service__WEBPACK_IMPORTED_MODULE_9__["ReschedulingReportsService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_8__["TransfersService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], ClientRecoveryStatusComponent);
    return ClientRecoveryStatusComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/rescheduling-reports/due-vs-recovery/due-vs-recovery.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/report/rescheduling-reports/due-vs-recovery/due-vs-recovery.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/rescheduling-reports/due-vs-recovery/due-vs-recovery.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/report/rescheduling-reports/due-vs-recovery/due-vs-recovery.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"content\">\r\n    <div class=\"mysearchbox\">\r\n      <h6 class=\"d-inline-block searchshow\">Due Vs Recovery</h6>\r\n      <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n        <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\" title=\"Type in a name\">\r\n      </div>\r\n    </div>\r\n\r\n\r\n      <div class=\"cRow\">\r\n        <button type=\"button\" (click)=\"onSubmitDueVsRecovery()\" class=\"btn btn-primary\">Print Due Vs Recovery</button>\r\n      </div>\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/rescheduling-reports/due-vs-recovery/due-vs-recovery.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/report/rescheduling-reports/due-vs-recovery/due-vs-recovery.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DueVsRecoveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DueVsRecoveryComponent", function() { return DueVsRecoveryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_rescheduling_reports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/rescheduling-reports.service */ "./src/app/shared/services/rescheduling-reports.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DueVsRecoveryComponent = /** @class */ (function () {
    function DueVsRecoveryComponent(reschedulingReportService, toaster, spinner) {
        this.reschedulingReportService = reschedulingReportService;
        this.toaster = toaster;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
    }
    DueVsRecoveryComponent.prototype.ngOnInit = function () {
    };
    DueVsRecoveryComponent.prototype.onSubmitDueVsRecovery = function () {
        var _this = this;
        this.spinner.show();
        this.reschedulingReportService.getDueVsRecovery().subscribe(function (response) {
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
    DueVsRecoveryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-due-vs-recovery',
            template: __webpack_require__(/*! ./due-vs-recovery.component.html */ "./src/app/pages/report/rescheduling-reports/due-vs-recovery/due-vs-recovery.component.html"),
            styles: [__webpack_require__(/*! ./due-vs-recovery.component.css */ "./src/app/pages/report/rescheduling-reports/due-vs-recovery/due-vs-recovery.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_rescheduling_reports_service__WEBPACK_IMPORTED_MODULE_1__["ReschedulingReportsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], DueVsRecoveryComponent);
    return DueVsRecoveryComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/rescheduling-reports/managment-dashboard/managment-dashboard.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/report/rescheduling-reports/managment-dashboard/managment-dashboard.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/rescheduling-reports/managment-dashboard/managment-dashboard.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/report/rescheduling-reports/managment-dashboard/managment-dashboard.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"content\">\r\n    <div class=\"mysearchbox\">\r\n      <h6 class=\"d-inline-block searchshow\">Managment Dashboard</h6>\r\n      <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n        <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\" title=\"Type in a name\">\r\n      </div>\r\n    </div>\r\n\r\n\r\n      <div class=\"cRow\">\r\n        <button type=\"button\" (click)=\"onSubmitManagmentDashboard()\" class=\"btn btn-primary\">Print Managment Dashboard</button>\r\n      </div>\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/rescheduling-reports/managment-dashboard/managment-dashboard.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/report/rescheduling-reports/managment-dashboard/managment-dashboard.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ManagmentDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagmentDashboardComponent", function() { return ManagmentDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_rescheduling_reports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/rescheduling-reports.service */ "./src/app/shared/services/rescheduling-reports.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManagmentDashboardComponent = /** @class */ (function () {
    function ManagmentDashboardComponent(reschedulingReportService, toaster, spinner) {
        this.reschedulingReportService = reschedulingReportService;
        this.toaster = toaster;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
    }
    ManagmentDashboardComponent.prototype.ngOnInit = function () {
    };
    ManagmentDashboardComponent.prototype.onSubmitManagmentDashboard = function () {
        var _this = this;
        this.spinner.show();
        this.reschedulingReportService.getManagmentDashboard().subscribe(function (response) {
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
    ManagmentDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-managment-dashboard',
            template: __webpack_require__(/*! ./managment-dashboard.component.html */ "./src/app/pages/report/rescheduling-reports/managment-dashboard/managment-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./managment-dashboard.component.css */ "./src/app/pages/report/rescheduling-reports/managment-dashboard/managment-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_rescheduling_reports_service__WEBPACK_IMPORTED_MODULE_1__["ReschedulingReportsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], ManagmentDashboardComponent);
    return ManagmentDashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/rescheduling-reports/portfolio-quality-old-portfolio/portfolio-quality-old-portfolio.component.css":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/pages/report/rescheduling-reports/portfolio-quality-old-portfolio/portfolio-quality-old-portfolio.component.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/rescheduling-reports/portfolio-quality-old-portfolio/portfolio-quality-old-portfolio.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/report/rescheduling-reports/portfolio-quality-old-portfolio/portfolio-quality-old-portfolio.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"content\">\r\n    <div class=\"mysearchbox\">\r\n      <h6 class=\"d-inline-block searchshow\">Portfolio Quality Old Portfolio</h6>\r\n      <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n        <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\" title=\"Type in a name\">\r\n      </div>\r\n    </div>\r\n\r\n\r\n      <div class=\"cRow\">\r\n        <button type=\"button\" (click)=\"onSubmitPortfolioQualityOldPortfolio()\" class=\"btn btn-primary\">Print Portfolio Quality Old Portfolio</button>\r\n      </div>\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/rescheduling-reports/portfolio-quality-old-portfolio/portfolio-quality-old-portfolio.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/report/rescheduling-reports/portfolio-quality-old-portfolio/portfolio-quality-old-portfolio.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: PortfolioQualityOldPortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioQualityOldPortfolioComponent", function() { return PortfolioQualityOldPortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_rescheduling_reports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/rescheduling-reports.service */ "./src/app/shared/services/rescheduling-reports.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PortfolioQualityOldPortfolioComponent = /** @class */ (function () {
    function PortfolioQualityOldPortfolioComponent(reschedulingReportService, toaster, spinner) {
        this.reschedulingReportService = reschedulingReportService;
        this.toaster = toaster;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
    }
    PortfolioQualityOldPortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioQualityOldPortfolioComponent.prototype.onSubmitPortfolioQualityOldPortfolio = function () {
        var _this = this;
        this.spinner.show();
        this.reschedulingReportService.getPortfolioQualityOldPortfolio().subscribe(function (response) {
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
    PortfolioQualityOldPortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio-quality-old-portfolio',
            template: __webpack_require__(/*! ./portfolio-quality-old-portfolio.component.html */ "./src/app/pages/report/rescheduling-reports/portfolio-quality-old-portfolio/portfolio-quality-old-portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio-quality-old-portfolio.component.css */ "./src/app/pages/report/rescheduling-reports/portfolio-quality-old-portfolio/portfolio-quality-old-portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_rescheduling_reports_service__WEBPACK_IMPORTED_MODULE_1__["ReschedulingReportsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], PortfolioQualityOldPortfolioComponent);
    return PortfolioQualityOldPortfolioComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/rescheduling-reports/rescheduling-portfolio/rescheduling-portfolio.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/report/rescheduling-reports/rescheduling-portfolio/rescheduling-portfolio.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/rescheduling-reports/rescheduling-portfolio/rescheduling-portfolio.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/report/rescheduling-reports/rescheduling-portfolio/rescheduling-portfolio.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"content\">\r\n    <div class=\"mysearchbox\">\r\n      <h6 class=\"d-inline-block searchshow\">Rescheduling Portfolio</h6>\r\n      <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n        <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\" title=\"Type in a name\">\r\n      </div>\r\n    </div>\r\n\r\n\r\n      <div class=\"cRow\">\r\n        <button type=\"button\" (click)=\"onSubmitReschedulingPortfolio()\" class=\"btn btn-primary\">Print Rescheduling Portfolio</button>\r\n      </div>\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/rescheduling-reports/rescheduling-portfolio/rescheduling-portfolio.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/report/rescheduling-reports/rescheduling-portfolio/rescheduling-portfolio.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ReschedulingPortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReschedulingPortfolioComponent", function() { return ReschedulingPortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_rescheduling_reports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/rescheduling-reports.service */ "./src/app/shared/services/rescheduling-reports.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReschedulingPortfolioComponent = /** @class */ (function () {
    function ReschedulingPortfolioComponent(reschedulingReportService, toaster, spinner) {
        this.reschedulingReportService = reschedulingReportService;
        this.toaster = toaster;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
    }
    ReschedulingPortfolioComponent.prototype.ngOnInit = function () {
    };
    ReschedulingPortfolioComponent.prototype.onSubmitReschedulingPortfolio = function () {
        var _this = this;
        this.spinner.show();
        this.reschedulingReportService.getReschedulingPortfolio().subscribe(function (response) {
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
    ReschedulingPortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rescheduling-portfolio',
            template: __webpack_require__(/*! ./rescheduling-portfolio.component.html */ "./src/app/pages/report/rescheduling-reports/rescheduling-portfolio/rescheduling-portfolio.component.html"),
            styles: [__webpack_require__(/*! ./rescheduling-portfolio.component.css */ "./src/app/pages/report/rescheduling-reports/rescheduling-portfolio/rescheduling-portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_rescheduling_reports_service__WEBPACK_IMPORTED_MODULE_1__["ReschedulingReportsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], ReschedulingPortfolioComponent);
    return ReschedulingPortfolioComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/rescheduling-reports/rescheduling-reports.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/report/rescheduling-reports/rescheduling-reports.module.ts ***!
  \**********************************************************************************/
/*! exports provided: routes, ReschedulingReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReschedulingReportsModule", function() { return ReschedulingReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _client_recovery_status_client_recovery_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-recovery-status/client-recovery-status.component */ "./src/app/pages/report/rescheduling-reports/client-recovery-status/client-recovery-status.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _due_vs_recovery_due_vs_recovery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./due-vs-recovery/due-vs-recovery.component */ "./src/app/pages/report/rescheduling-reports/due-vs-recovery/due-vs-recovery.component.ts");
/* harmony import */ var _managment_dashboard_managment_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./managment-dashboard/managment-dashboard.component */ "./src/app/pages/report/rescheduling-reports/managment-dashboard/managment-dashboard.component.ts");
/* harmony import */ var _rescheduling_portfolio_rescheduling_portfolio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rescheduling-portfolio/rescheduling-portfolio.component */ "./src/app/pages/report/rescheduling-reports/rescheduling-portfolio/rescheduling-portfolio.component.ts");
/* harmony import */ var _portfolio_quality_old_portfolio_portfolio_quality_old_portfolio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portfolio-quality-old-portfolio/portfolio-quality-old-portfolio.component */ "./src/app/pages/report/rescheduling-reports/portfolio-quality-old-portfolio/portfolio-quality-old-portfolio.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: 'client-recovery-status', component: _client_recovery_status_client_recovery_status_component__WEBPACK_IMPORTED_MODULE_2__["ClientRecoveryStatusComponent"] },
    { path: 'due-vs-recovery', component: _due_vs_recovery_due_vs_recovery_component__WEBPACK_IMPORTED_MODULE_7__["DueVsRecoveryComponent"] },
    { path: 'managment-dashboard', component: _managment_dashboard_managment_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["ManagmentDashboardComponent"] },
    { path: 'rescheduling-portfolio', component: _rescheduling_portfolio_rescheduling_portfolio_component__WEBPACK_IMPORTED_MODULE_9__["ReschedulingPortfolioComponent"] },
    { path: 'portfolio-quality-old-portfolio', component: _portfolio_quality_old_portfolio_portfolio_quality_old_portfolio_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioQualityOldPortfolioComponent"] },
];
var ReschedulingReportsModule = /** @class */ (function () {
    function ReschedulingReportsModule() {
    }
    ReschedulingReportsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            ],
            declarations: [_client_recovery_status_client_recovery_status_component__WEBPACK_IMPORTED_MODULE_2__["ClientRecoveryStatusComponent"], _due_vs_recovery_due_vs_recovery_component__WEBPACK_IMPORTED_MODULE_7__["DueVsRecoveryComponent"], _managment_dashboard_managment_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["ManagmentDashboardComponent"], _rescheduling_portfolio_rescheduling_portfolio_component__WEBPACK_IMPORTED_MODULE_9__["ReschedulingPortfolioComponent"], _portfolio_quality_old_portfolio_portfolio_quality_old_portfolio_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioQualityOldPortfolioComponent"]]
        })
    ], ReschedulingReportsModule);
    return ReschedulingReportsModule;
}());



/***/ }),

/***/ "./src/app/shared/services/rescheduling-reports.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/rescheduling-reports.service.ts ***!
  \*****************************************************************/
/*! exports provided: ReschedulingReportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReschedulingReportsService", function() { return ReschedulingReportsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Api_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Api.model */ "./src/app/shared/models/Api.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReschedulingReportsService = /** @class */ (function () {
    function ReschedulingReportsService(http, toastr, spinner) {
        this.http = http;
        this.toastr = toastr;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_1__["ApiModel"]();
    }
    ReschedulingReportsService.prototype.getClientRecoveryStatus = function (date, a) {
        var url = this.apiModel.host + "/reportservice/api/print-client-recovery-status/" + date + "/" + a;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReschedulingReportsService.prototype.getDueVsRecovery = function () {
        var url = this.apiModel.host + "/reportservice/api/print-due-vs-recovery";
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReschedulingReportsService.prototype.getManagmentDashboard = function () {
        var url = this.apiModel.host + "/reportservice/api/print-management-dashboard";
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReschedulingReportsService.prototype.getReschedulingPortfolio = function () {
        var url = this.apiModel.host + "/reportservice/api/print-rescheduling-portfolio";
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReschedulingReportsService.prototype.getPortfolioQualityOldPortfolio = function () {
        var url = this.apiModel.host + "/reportservice/api/print-portfolio-quality-old-portfolio";
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReschedulingReportsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], ReschedulingReportsService);
    return ReschedulingReportsService;
}());



/***/ }),

/***/ "./src/app/shared/services/transfers.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/transfers.service.ts ***!
  \******************************************************/
/*! exports provided: TransfersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransfersService", function() { return TransfersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_Api_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Api.model */ "./src/app/shared/models/Api.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransfersService = /** @class */ (function () {
    function TransfersService(http) {
        this.http = http;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_2__["ApiModel"]();
        this.token = 'Bearer ' + sessionStorage.getItem('token');
    }
    // getTransfers(): Observable<AppDto[]> {
    //   return this.http.get<AppDto[]>(this.apiModel.host + '/setupservice/api/all-transfers/' + this.auth.user.username, { headers: this.apiModel.httpHeaderGet }).pipe(
    //     tap((p: AppDto[]) => console.log(p))
    //   );
    // }
    TransfersService.prototype.getTransfers = function (brnchSeq, pageIndex, pageSize, filter, isCount) {
        return this.http.get(this.apiModel.host + '/setupservice/api/all-transfers?userId=' + this.auth.user.username + '&brnchSeq=' + brnchSeq + '&pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&filter=' + filter + '&isCount=' + isCount, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (p) { return console.log(p); }));
    };
    TransfersService.prototype.getPortfoliosByBranch = function (branchSeq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-ports-by-branch/' + branchSeq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (p) { return console.log(p); }));
    };
    //teting Data for umair
    TransfersService.prototype.hello = function () {
        return this.http.get(this.apiModel.host + '/loanservice/api/get-test/', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (p) { return console.log(p); }));
    };
    //end testing data for umair
    TransfersService.prototype.getRegions = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': this.token
            })
        };
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-regs', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (p) { return console.log(p); }));
    };
    TransfersService.prototype.getAreas = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': this.token
            })
        };
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-areas', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (p) { return console.log(p); }));
    };
    TransfersService.prototype.getBranches = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': this.token
            })
        };
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-brnches', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (p) { return console.log(p); }));
    };
    TransfersService.prototype.getBranchesByUser = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Authorization': this.token
            })
        };
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-brnches-by-user', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (p) { return console.log(p); }));
    };
    TransfersService.prototype.updatePort = function (appDtos) {
        return this.http.put(this.apiModel.host + '/loanservice/api/update-client-port', appDtos, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (p) { return console.log(p); }));
    };
    TransfersService.prototype.getAllProducts = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-prd-grp-fr-brnch/' + this.auth.emp_branch, { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (p) { console.log(p); }));
    };
    TransfersService.prototype.getAllPeriodsOfBranchPortfolio = function (prdGrpSeq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/brnch-perd-by-prd-grp/' + this.auth.emp_branch + '/' + prdGrpSeq, { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (p) { console.log(p); }));
    };
    TransfersService.prototype.getListingsForBranchPortfolio = function (brnchTrgtSeq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/brnch-trgt-by-prd-grp/' + this.auth.emp_branch + '/' + brnchTrgtSeq, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (p) { console.log(p); }));
    };
    TransfersService.prototype.savingAllBranchPortfolios = function (arr) {
        return this.http.post(this.apiModel.host + '/setupservice/api/add-port-trgt', arr, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (p) { console.log(p); }));
    };
    TransfersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TransfersService);
    return TransfersService;
}());



/***/ })

}]);
//# sourceMappingURL=rescheduling-reports-rescheduling-reports-module.js.map