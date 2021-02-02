(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-report-report-module"],{

/***/ "./src/app/pages/report/active-clients/active-clients.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/pages/report/active-clients/active-clients.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/active-clients/active-clients.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/report/active-clients/active-clients.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Active Clients <i class=\"fa fa-print\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <br>\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"onSubmitActiveClients()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol3\">\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print Active Clients</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/active-clients/active-clients.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/report/active-clients/active-clients.component.ts ***!
  \*************************************************************************/
/*! exports provided: ActiveClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveClientsComponent", function() { return ActiveClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ActiveClientsComponent = /** @class */ (function () {
    function ActiveClientsComponent(fb, toaster, spinner, dataService, transfersService, reportService) {
        this.fb = fb;
        this.toaster = toaster;
        this.spinner = spinner;
        this.dataService = dataService;
        this.transfersService = transfersService;
        this.reportService = reportService;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.maxDate = new Date();
    }
    ActiveClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.auth);
        this.ngForm = this.fb.group({});
        this.transfersService.getBranches().subscribe(function (d) {
            _this.branchs = d;
        });
    };
    ActiveClientsComponent.prototype.getBranch = function () {
        var _this = this;
        this.allBranches = [];
        this.dataService.getBranch(this.ngForm.controls["areaSeq"].value).subscribe(function (d) {
            _this.allBranches = d;
        });
    };
    ActiveClientsComponent.prototype.onSubmitActiveClients = function () {
        var _this = this;
        this.spinner.show();
        // const frmDt = new DatePipe('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy')
        // const toDt = new DatePipe('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy')
        // let brnchSeq = this.ngForm.get('brnchSeq').value ? this.ngForm.get('brnchSeq').value : 0;
        // let isXls = this.ngForm.get('isXls').value;
        // console.log(isXls)
        this.reportService.printActiveClients().subscribe(function (response) {
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
    ActiveClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-active-clients',
            template: __webpack_require__(/*! ./active-clients.component.html */ "./src/app/pages/report/active-clients/active-clients.component.html"),
            styles: [__webpack_require__(/*! ./active-clients.component.css */ "./src/app/pages/report/active-clients/active-clients.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_5__["TransfersService"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_6__["ReportsService"]])
    ], ActiveClientsComponent);
    return ActiveClientsComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/adc-wise-branch-recovery/adc-wise-branch-recovery.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/report/adc-wise-branch-recovery/adc-wise-branch-recovery.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/adc-wise-branch-recovery/adc-wise-branch-recovery.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/report/adc-wise-branch-recovery/adc-wise-branch-recovery.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">ADCs and Branch Wise Recovery <i class=\"fa fa-print\"> </i></h6>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <form [formGroup]=\"ngForm\" (ngSubmit)=\"printReport()\">\r\n              <div class=\"modal-body\">\r\n                <div class=\"cRow\">\r\n                  <div class=\"cCol4\">\r\n                    <mat-form-field>\r\n                      <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                        [matDatepicker]=\"picker1\" disabled readonly />\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                      <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                      <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                        [matDatepicker]=\"picker2\" disabled readonly />\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                      <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                    </mat-form-field>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/adc-wise-branch-recovery/adc-wise-branch-recovery.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/report/adc-wise-branch-recovery/adc-wise-branch-recovery.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: MY_FORMATS, AdcWiseBranchRecoveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdcWiseBranchRecoveryComponent", function() { return AdcWiseBranchRecoveryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









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
var AdcWiseBranchRecoveryComponent = /** @class */ (function () {
    function AdcWiseBranchRecoveryComponent(fb, reportsService, transfersService, toaster, spinner) {
        this.fb = fb;
        this.reportsService = reportsService;
        this.transfersService = transfersService;
        this.toaster = toaster;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.maxDate = new Date();
        this.ngForm = this.fb.group({
            frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    AdcWiseBranchRecoveryComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(AdcWiseBranchRecoveryComponent.prototype, "f", {
        get: function () { return this.ngForm.controls; },
        enumerable: true,
        configurable: true
    });
    AdcWiseBranchRecoveryComponent.prototype.printReport = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MMM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MMM-yyyy');
        this.reportsService.printAdcBranchWise(frmDt, toDt).subscribe(function (response) {
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
    AdcWiseBranchRecoveryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adc-wise-branch-recovery',
            template: __webpack_require__(/*! ./adc-wise-branch-recovery.component.html */ "./src/app/pages/report/adc-wise-branch-recovery/adc-wise-branch-recovery.component.html"),
            styles: [__webpack_require__(/*! ./adc-wise-branch-recovery.component.css */ "./src/app/pages/report/adc-wise-branch-recovery/adc-wise-branch-recovery.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_5__["TransfersService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], AdcWiseBranchRecoveryComponent);
    return AdcWiseBranchRecoveryComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/agencies-target-tracking/agencies-target-tracking.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/report/agencies-target-tracking/agencies-target-tracking.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/agencies-target-tracking/agencies-target-tracking.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/report/agencies-target-tracking/agencies-target-tracking.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Agencies Target Tracking <i class=\"fa fa-print\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"scheduleForm\" (ngSubmit)=\"postedReport()\">\r\n              <div class=\"modal-body\">\r\n                <div class=\"cRow\">\r\n                  <div class=\"cCol8\">\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button [disabled]=\"!scheduleForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/agencies-target-tracking/agencies-target-tracking.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/report/agencies-target-tracking/agencies-target-tracking.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AgenciesTargetTrackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgenciesTargetTrackingComponent", function() { return AgenciesTargetTrackingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AgenciesTargetTrackingComponent = /** @class */ (function () {
    function AgenciesTargetTrackingComponent(reportsService, fb, toaster, spinner) {
        this.reportsService = reportsService;
        this.fb = fb;
        this.toaster = toaster;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.maxDate = new Date();
        this.scheduleForm = this.fb.group({
            clntId: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    AgenciesTargetTrackingComponent.prototype.ngOnInit = function () {
    };
    AgenciesTargetTrackingComponent.prototype.postedReport = function () {
        var _this = this;
        this.spinner.show();
        this.reportsService.printAgenciesTargetTracking(this.auth.emp_branch).subscribe(function (response) {
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
    AgenciesTargetTrackingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agencies-target-tracking',
            template: __webpack_require__(/*! ./agencies-target-tracking.component.html */ "./src/app/pages/report/agencies-target-tracking/agencies-target-tracking.component.html"),
            styles: [__webpack_require__(/*! ./agencies-target-tracking.component.css */ "./src/app/pages/report/agencies-target-tracking/agencies-target-tracking.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_1__["ReportsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], AgenciesTargetTrackingComponent);
    return AgenciesTargetTrackingComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/bm-bdo-recovery/bm-bdo-recovery.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/report/bm-bdo-recovery/bm-bdo-recovery.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/bm-bdo-recovery/bm-bdo-recovery.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/report/bm-bdo-recovery/bm-bdo-recovery.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">BM BDO Recovery Report <i class=\"fa fa-print\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                         title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"portfolioReport()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol6-col\">\r\n\r\n                  <input *ngIf=\"auth.role != 'admin'\" type=\"hidden\" formControlName=\"branch\" readonly />\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                           [matDatepicker]=\"picker1\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                           [matDatepicker]=\"picker2\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/bm-bdo-recovery/bm-bdo-recovery.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/report/bm-bdo-recovery/bm-bdo-recovery.component.ts ***!
  \***************************************************************************/
/*! exports provided: MY_FORMATS, BmBdoRecoveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BmBdoRecoveryComponent", function() { return BmBdoRecoveryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/recovery.service */ "./src/app/shared/services/recovery.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var moment = moment__WEBPACK_IMPORTED_MODULE_6__;
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
var BmBdoRecoveryComponent = /** @class */ (function () {
    function BmBdoRecoveryComponent(fb, reportsService, toaster, recoveryService, transfersService, spinner) {
        this.fb = fb;
        this.reportsService = reportsService;
        this.toaster = toaster;
        this.recoveryService = recoveryService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.tempInstituteArray = [];
        this.maxDate = new Date();
        this.ngForm = this.fb.group({
            frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    BmBdoRecoveryComponent.prototype.ngOnInit = function () {
    };
    BmBdoRecoveryComponent.prototype.portfolioReport = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        this.reportsService.bmBdoRecoveryReport(frmDt, toDt).subscribe(function (response) {
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
    BmBdoRecoveryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bm-bdo-recovery',
            template: __webpack_require__(/*! ./bm-bdo-recovery.component.html */ "./src/app/pages/report/bm-bdo-recovery/bm-bdo-recovery.component.html"),
            styles: [__webpack_require__(/*! ./bm-bdo-recovery.component.css */ "./src/app/pages/report/bm-bdo-recovery/bm-bdo-recovery.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_9__["RecoveryService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_10__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], BmBdoRecoveryComponent);
    return BmBdoRecoveryComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/book-details/book-details.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/pages/report/book-details/book-details.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/book-details/book-details.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/report/book-details/book-details.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Book Detail <i class=\"fa fa-print\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"printReport()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol3\">\r\n\r\n\r\n                  <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"branch\"\r\n                    readonly />\r\n\r\n                  <!-- <mat-form-field *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\">\r\n                      <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                        <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                          {{b.brnchNm}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field> -->\r\n\r\n\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Report Type\" formControlName=\"type\">\r\n                      <mat-option [value]=\"1\">Bank</mat-option>\r\n                      <mat-option [value]=\"2\">Cash</mat-option>\r\n\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                      [matDatepicker]=\"picker1\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                      [matDatepicker]=\"picker2\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/book-details/book-details.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/report/book-details/book-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: MY_FORMATS, BookDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsComponent", function() { return BookDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/recovery.service */ "./src/app/shared/services/recovery.service.ts");
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










var moment = moment__WEBPACK_IMPORTED_MODULE_3__;
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
var BookDetailsComponent = /** @class */ (function () {
    function BookDetailsComponent(spinner, toaster, fb, reportsService, recoveryService, transfersService) {
        var _this = this;
        this.spinner = spinner;
        this.toaster = toaster;
        this.fb = fb;
        this.reportsService = reportsService;
        this.recoveryService = recoveryService;
        this.transfersService = transfersService;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.tempInstituteArray = [];
        this.maxDate = new Date();
        if (this.auth.role == "bm" || this.auth.role == "bdo") {
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
        else {
            this.transfersService.getBranches().subscribe(function (d) { _this.branchs = d; });
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: [''],
            });
        }
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
    };
    BookDetailsComponent.prototype.printReport = function () {
        var _this = this;
        this.spinner.show();
        this.reportsService.printBookDetails(this.ngForm.value).subscribe(function (response) {
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
    BookDetailsComponent.prototype.getPaymentType = function () {
        var _this = this;
        this.recoveryService.getRecoveryTypes().subscribe((function (data) {
            _this.tempInstituteArray = data;
        }));
    };
    Object.defineProperty(BookDetailsComponent.prototype, "f", {
        get: function () { return this.ngForm.controls; },
        enumerable: true,
        configurable: true
    });
    BookDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-details',
            template: __webpack_require__(/*! ./book-details.component.html */ "./src/app/pages/report/book-details/book-details.component.html"),
            styles: [__webpack_require__(/*! ./book-details.component.css */ "./src/app/pages/report/book-details/book-details.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"], src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_6__["RecoveryService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_7__["TransfersService"]])
    ], BookDetailsComponent);
    return BookDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/branch-performance-review/branch-performance-review.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/report/branch-performance-review/branch-performance-review.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/branch-performance-review/branch-performance-review.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/report/branch-performance-review/branch-performance-review.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Branch Performance Review <i class=\"fa fa-print\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"printReport()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol3\">\r\n\r\n                  <input *ngIf=\"auth.role != 'admin'\" type=\"hidden\" formControlName=\"branch\" readonly />\r\n                  <!-- <mat-form-field *ngIf=\"auth.role == 'admin'\">\r\n                      <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                        <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                          {{b.brnchNm}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field> -->\r\n\r\n\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n\r\n\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                      [matDatepicker]=\"picker1\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                      [matDatepicker]=\"picker2\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/branch-performance-review/branch-performance-review.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/report/branch-performance-review/branch-performance-review.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: BranchPerformanceReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchPerformanceReviewComponent", function() { return BranchPerformanceReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/recovery.service */ "./src/app/shared/services/recovery.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BranchPerformanceReviewComponent = /** @class */ (function () {
    function BranchPerformanceReviewComponent(fb, toaster, spinner, reportsService, recoveryService, transfersService) {
        var _this = this;
        this.fb = fb;
        this.toaster = toaster;
        this.spinner = spinner;
        this.reportsService = reportsService;
        this.recoveryService = recoveryService;
        this.transfersService = transfersService;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.tempInstituteArray = [];
        this.maxDate = new Date();
        if (this.auth.role == "admin") {
            this.transfersService.getBranches().subscribe(function (d) { _this.branchs = d; });
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                branch: [''],
            });
        }
        else {
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
        }
    }
    BranchPerformanceReviewComponent.prototype.ngOnInit = function () {
    };
    BranchPerformanceReviewComponent.prototype.printReport = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MMM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MMM-yyyy');
        this.reportsService.printBranchPerformanceReview(frmDt, toDt, this.ngForm.get("branch").value).subscribe(function (response) {
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
    BranchPerformanceReviewComponent.prototype.getPaymentType = function () {
        var _this = this;
        this.recoveryService.getRecoveryTypes().subscribe((function (data) {
            _this.tempInstituteArray = data;
        }));
    };
    Object.defineProperty(BranchPerformanceReviewComponent.prototype, "f", {
        get: function () { return this.ngForm.controls; },
        enumerable: true,
        configurable: true
    });
    BranchPerformanceReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-branch-performance-review',
            template: __webpack_require__(/*! ./branch-performance-review.component.html */ "./src/app/pages/report/branch-performance-review/branch-performance-review.component.html"),
            styles: [__webpack_require__(/*! ./branch-performance-review.component.css */ "./src/app/pages/report/branch-performance-review/branch-performance-review.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_3__["ReportsService"], src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_4__["RecoveryService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_5__["TransfersService"]])
    ], BranchPerformanceReviewComponent);
    return BranchPerformanceReviewComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/brnch-turnover-anlysis/brnch-turnover-anlysis.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/report/brnch-turnover-anlysis/brnch-turnover-anlysis.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/brnch-turnover-anlysis/brnch-turnover-anlysis.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/report/brnch-turnover-anlysis/brnch-turnover-anlysis.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Branch Turnover Anlysis & Planing <i class=\"fa fa-print\"> </i>\r\n                </h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"printReport()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol6\">\r\n                  <input *ngIf=\"auth.role != 'admin'\" type=\"hidden\" formControlName=\"branch\" readonly />\r\n\r\n\r\n                  <!-- <mat-form-field *ngIf=\"auth.role == 'admin'\">\r\n                      <mat-select placeholder=\"Report Type\" formControlName=\"branch\">\r\n                        <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                          {{b.brnchNm}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field> -->\r\n\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"Date:\"\r\n                      [matDatepicker]=\"picker2\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/brnch-turnover-anlysis/brnch-turnover-anlysis.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/report/brnch-turnover-anlysis/brnch-turnover-anlysis.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MY_FORMATS, BrnchTurnoverAnlysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrnchTurnoverAnlysisComponent", function() { return BrnchTurnoverAnlysisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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










var moment = moment__WEBPACK_IMPORTED_MODULE_1__;
var MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
    },
};
var BrnchTurnoverAnlysisComponent = /** @class */ (function () {
    function BrnchTurnoverAnlysisComponent(fb, toaster, reportsService, transfersService, spinner) {
        var _this = this;
        this.fb = fb;
        this.toaster = toaster;
        this.reportsService = reportsService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.tempInstituteArray = [];
        this.maxDate = new Date();
        if (this.auth.role == "admin") {
            this.transfersService.getBranches().subscribe(function (d) { _this.branchs = d; });
            this.ngForm = this.fb.group({
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
        }
        else {
            this.ngForm = this.fb.group({
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,],
            });
        }
    }
    BrnchTurnoverAnlysisComponent.prototype.ngOnInit = function () {
    };
    BrnchTurnoverAnlysisComponent.prototype.printReport = function () {
        var _this = this;
        this.spinner.show();
        var branch = this.ngForm.get('branch').value;
        var date = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        this.reportsService.printBranchTurnoverAnalysisAndPlaning(date, branch).subscribe(function (response) {
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
    Object.defineProperty(BrnchTurnoverAnlysisComponent.prototype, "f", {
        get: function () { return this.ngForm.controls; },
        enumerable: true,
        configurable: true
    });
    BrnchTurnoverAnlysisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brnch-turnover-anlysis',
            template: __webpack_require__(/*! ./brnch-turnover-anlysis.component.html */ "./src/app/pages/report/brnch-turnover-anlysis/brnch-turnover-anlysis.component.html"),
            styles: [__webpack_require__(/*! ./brnch-turnover-anlysis.component.css */ "./src/app/pages/report/brnch-turnover-anlysis/brnch-turnover-anlysis.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_6__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], BrnchTurnoverAnlysisComponent);
    return BrnchTurnoverAnlysisComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/client-health-beneficiary/client-health-beneficiary.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/report/client-health-beneficiary/client-health-beneficiary.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/client-health-beneficiary/client-health-beneficiary.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/report/client-health-beneficiary/client-health-beneficiary.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Client Health Beneficiary <i class=\"fa fa-print\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"printReport()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol5\">\r\n\r\n\r\n                  <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"branch\"\r\n                    readonly />\r\n\r\n                  <!-- <mat-form-field *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\">\r\n                    <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                      <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                        {{b.brnchNm}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field> -->\r\n\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                      [matDatepicker]=\"picker1\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                      [matDatepicker]=\"picker2\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/client-health-beneficiary/client-health-beneficiary.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/report/client-health-beneficiary/client-health-beneficiary.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: MY_FORMATS, ClientHealthBeneficiaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientHealthBeneficiaryComponent", function() { return ClientHealthBeneficiaryComponent; });
/* harmony import */ var node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/recovery.service */ "./src/app/shared/services/recovery.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var node_modules_angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! node_modules/@angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
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
var ClientHealthBeneficiaryComponent = /** @class */ (function () {
    function ClientHealthBeneficiaryComponent(fb, reportsService, toaster, recoveryService, transfersService, spinner) {
        var _this = this;
        this.fb = fb;
        this.reportsService = reportsService;
        this.toaster = toaster;
        this.recoveryService = recoveryService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.tempInstituteArray = [];
        this.maxDate = new Date();
        if (this.auth.role == "bdo" || this.auth.role == "bm") {
            this.ngForm = this.fb.group({
                frmDt: [new Date(), node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new Date(), node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                type: ['', node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
        else {
            this.transfersService.getBranches().subscribe(function (d) { _this.branchs = d; });
            this.ngForm = this.fb.group({
                frmDt: [new Date(), node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new Date(), node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                type: ['', node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: [''],
            });
        }
    }
    ClientHealthBeneficiaryComponent.prototype.ngOnInit = function () {
    };
    ClientHealthBeneficiaryComponent.prototype.printReport = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new node_modules_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MMM-yyyy');
        var toDt = new node_modules_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MMM-yyyy');
        this.reportsService.printClientHealthBeneficiery(frmDt, toDt, this.ngForm.get("branch").value).subscribe(function (response) {
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
    ClientHealthBeneficiaryComponent.prototype.getPaymentType = function () {
        var _this = this;
        this.recoveryService.getRecoveryTypes().subscribe((function (data) {
            _this.tempInstituteArray = data;
        }));
    };
    Object.defineProperty(ClientHealthBeneficiaryComponent.prototype, "f", {
        get: function () { return this.ngForm.controls; },
        enumerable: true,
        configurable: true
    });
    ClientHealthBeneficiaryComponent = __decorate([
        Object(node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-health-beneficiary',
            template: __webpack_require__(/*! ./client-health-beneficiary.component.html */ "./src/app/pages/report/client-health-beneficiary/client-health-beneficiary.component.html"),
            styles: [__webpack_require__(/*! ./client-health-beneficiary.component.css */ "./src/app/pages/report/client-health-beneficiary/client-health-beneficiary.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_3__["RecoveryService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_4__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], ClientHealthBeneficiaryComponent);
    return ClientHealthBeneficiaryComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/female-participation/female-participation.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/report/female-participation/female-participation.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-month-picker .mat-calendar-period-button {\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .example-month-picker .mat-calendar-arrow {\r\n    display: none;\r\n  }"

/***/ }),

/***/ "./src/app/pages/report/female-participation/female-participation.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/report/female-participation/female-participation.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"content\">\r\n          <div class=\"cRow\">\r\n            <div class=\"mysearchbox\">\r\n              <h6 class=\"d-inline-block searchshow\">Female Participation</h6>\r\n              <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\"\r\n                  title=\"Type in a name\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"printFemaleParticipationReport()\">\r\n            <div class=\"row clearfix\">\r\n              <div class=\"col-sm-12\">\r\n                <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"brnchSeq\"\r\n                  readonly />\r\n\r\n                <div class=\"cRow\">\r\n\r\n                  <!--------------- REGIONS DROPDOWN---------->\r\n\r\n                  <div *ngIf=\"disabledRegion\">\r\n                    <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am' && auth.role != 'rm'\"\r\n                      (change)=\"getArea($event)\" [items]=\"allRegions\" bindLabel=\"regNm\" bindValue=\"regSeq\" name=\"regNm\"\r\n                      placeholder=\"Select Region:\" formControlName=\"regSeq\">\r\n                    </ng-select>\r\n                  </div>\r\n\r\n\r\n                  <!--------------- AREA DROPDOWN---------->\r\n\r\n                  <div *ngIf=\"disabledArea\">\r\n                    <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am'\"\r\n                      (change)=\"getBranch($event)\" [items]=\"allAreas\" bindLabel=\"areaNm\" bindValue=\"areaSeq\"\r\n                      name=\"areaNm\" placeholder=\"Select Area:\" formControlName=\"areaSeq\">\r\n                    </ng-select>\r\n                  </div>\r\n\r\n                  <!--------------- BRANCH DROPDOWN---------->\r\n\r\n                  <div *ngIf=\"disabledBranch\">\r\n                    <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"allBranches\" bindLabel=\"brnchNm\"\r\n                      bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"brnchSeq\">\r\n                    </ng-select>\r\n                  </div>\r\n\r\n                  <!------------- To Date Form---------------->\r\n                  <div>\r\n                    <mat-form-field>\r\n                      <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                        [matDatepicker]=\"picker1\" disabled readonly />\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                      <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                  <!-----------------  From Date Form               ----------------------->\r\n                  <div>\r\n                    <mat-form-field>\r\n                      <input matInput required formControlName=\"toDt\" [min]=\"ngForm.controls['frmDt'].value\" [max]=\"maxDate\"\r\n                        placeholder=\"To Date:\" [matDatepicker]=\"picker2\" disabled readonly />\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                      <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"buttons mt-3\">\r\n                  <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary btn-min mr-3\">Print</button>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/female-participation/female-participation.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/report/female-participation/female-participation.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FemaleParticipationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FemaleParticipationComponent", function() { return FemaleParticipationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/operations-reports.service */ "./src/app/shared/services/operations-reports.service.ts");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var moment = moment__WEBPACK_IMPORTED_MODULE_7__;
var FemaleParticipationComponent = /** @class */ (function () {
    function FemaleParticipationComponent(fb, toaster, operationsReportsService, reportsService, spinner, dataService, transfersService) {
        this.fb = fb;
        this.toaster = toaster;
        this.operationsReportsService = operationsReportsService;
        this.reportsService = reportsService;
        this.spinner = spinner;
        this.dataService = dataService;
        this.transfersService = transfersService;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.disabledRegion = false;
        this.disabledArea = false;
        this.disabledBranch = false;
        this.maxDate = new Date();
        this.ngForm = this.fb.group({
            frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    FemaleParticipationComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.auth);
        if (this.auth.role == "admin") {
            this.disabledRegion = true;
            this.disabledArea = false;
            this.disabledBranch = false;
            this.ngForm = this.fb.group({
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                regSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                areaSeq: [''],
                brnchSeq: [''],
            });
        }
        else if (this.auth.role == "rm") {
            this.disabledRegion = false;
            this.disabledArea = true;
            this.disabledBranch = true;
            this.ngForm = this.fb.group({
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                regSeq: [this.auth.emp_reg],
                areaSeq: [''],
                brnchSeq: [''],
            });
            this.getArea();
        }
        else if (this.auth.role == "am") {
            this.disabledRegion = false;
            this.disabledArea = false;
            this.disabledBranch = true;
            this.ngForm = this.fb.group({
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                regSeq: [0],
                areaSeq: [this.auth.emp_area],
                brnchSeq: [''],
            });
            this.getBranch();
        }
        else if (this.auth.role == "bm" || this.auth.role == "bdo") {
            this.disabledRegion = false;
            this.disabledArea = false;
            this.disabledBranch = false;
            this.ngForm = this.fb.group({
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                regSeq: [0],
                areaSeq: [0],
                brnchSeq: [this.auth.emp_branch],
            });
        }
        else {
            this.transfersService.getBranches().subscribe(function (d) {
                _this.branchs = d;
            });
            this.ngForm = this.fb.group({
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                regSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                areaSeq: [''],
                brnchSeq: [''],
            });
        }
        this.transfersService.getRegions().subscribe(function (data) {
            _this.allRegions = data;
        });
    };
    FemaleParticipationComponent.prototype.returnFlag = function () {
        if (this.auth.role == "bm" || this.auth.role == "bdo") {
            this.rpt_flg = 1;
        }
        else if (this.auth.role == "am") {
            this.rpt_flg = 2;
        }
        else if (this.auth.role == "rm") {
            this.rpt_flg = 3;
        }
        return this.rpt_flg;
    };
    FemaleParticipationComponent.prototype.returnFlagForAdmin = function () {
        if (this.auth.role == "admin" && this.ngForm.controls['regSeq'].value !== 0 && this.ngForm.controls['areaSeq'].value !== 0 && this.ngForm.controls['brnchSeq'].value !== 0) {
            this.rpt_flg = 1;
        }
        else if (this.auth.role == "admin" && this.ngForm.controls['regSeq'].value !== 0 && this.ngForm.controls['areaSeq'].value !== 0 &&
            this.ngForm.controls['brnchSeq'].value == 0) {
            this.rpt_flg = 2;
        }
        else if (this.auth.role == "admin" && this.ngForm.controls['regSeq'].value !== 0 && this.ngForm.controls['areaSeq'].value == 0 && this.ngForm.controls['brnchSeq'].value == 0) {
            this.rpt_flg = 3;
        }
        return this.rpt_flg;
    };
    FemaleParticipationComponent.prototype.getArea = function () {
        var _this = this;
        this.allAreas = [];
        this.disabledArea = false;
        this.disabledBranch = false;
        this.dataService.getArea(this.ngForm.controls["regSeq"].value).subscribe(function (d) {
            _this.allAreas = d;
            _this.disabledArea = true;
        });
    };
    FemaleParticipationComponent.prototype.getBranch = function () {
        var _this = this;
        this.allBranches = [];
        this.disabledBranch = false;
        this.dataService.getBranch(this.ngForm.controls["areaSeq"].value).subscribe(function (d) {
            _this.allBranches = d;
            _this.disabledBranch = true;
        });
    };
    FemaleParticipationComponent.prototype.printFemaleParticipationReport = function () {
        var _this = this;
        if (this.auth.role == "bm" || this.auth.role == "bdo" || this.auth.role == "rm" || this.auth.role == "am") {
            this.returnFlag();
        }
        else {
            this.returnFlagForAdmin();
        }
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        var regSeq = this.ngForm.get('regSeq').value ? this.ngForm.get('regSeq').value : 0;
        var areaSeq = this.ngForm.get('areaSeq').value ? this.ngForm.get('areaSeq').value : 0;
        var brnchSeq = this.ngForm.get('brnchSeq').value ? this.ngForm.get('brnchSeq').value : 0;
        this.reportsService.printFemalearticipation(toDt, frmDt, this.rpt_flg, areaSeq, regSeq, brnchSeq).subscribe(function (response) {
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
    Object.defineProperty(FemaleParticipationComponent.prototype, "f", {
        get: function () { return this.ngForm.controls; },
        enumerable: true,
        configurable: true
    });
    FemaleParticipationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-female-participation',
            template: __webpack_require__(/*! ./female-participation.component.html */ "./src/app/pages/report/female-participation/female-participation.component.html"),
            styles: [__webpack_require__(/*! ./female-participation.component.css */ "./src/app/pages/report/female-participation/female-participation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_8__["OperationsReportsService"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_3__["TransfersService"]])
    ], FemaleParticipationComponent);
    return FemaleParticipationComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/five-day-advance/five-day-advance.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/pages/report/five-day-advance/five-day-advance.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/five-day-advance/five-day-advance.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/report/five-day-advance/five-day-advance.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">5 Days Advance Recovery Trend Analysis <i class=\"fa fa-print\">\r\n                  </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"printReport()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol3\">\r\n                  <input *ngIf=\"auth.role != 'admin'\" type=\"hidden\" formControlName=\"branch\" readonly />\r\n\r\n\r\n                  <!-- <mat-form-field *ngIf=\"auth.role == 'admin'\">\r\n                      <mat-select placeholder=\"Report Type\" formControlName=\"branch\">\r\n                        <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                          {{b.brnchNm}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field> -->\r\n\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                      [matDatepicker]=\"picker1\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                      [matDatepicker]=\"picker2\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/five-day-advance/five-day-advance.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/report/five-day-advance/five-day-advance.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MY_FORMATS, FiveDayAdvanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiveDayAdvanceComponent", function() { return FiveDayAdvanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
var FiveDayAdvanceComponent = /** @class */ (function () {
    function FiveDayAdvanceComponent(fb, toaster, reportsService, transfersService, spinner) {
        var _this = this;
        this.fb = fb;
        this.toaster = toaster;
        this.reportsService = reportsService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.tempInstituteArray = [];
        this.maxDate = new Date();
        if (this.auth.role == "admin") {
            this.transfersService.getBranches().subscribe(function (d) { _this.branchs = d; });
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
        }
        else {
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,],
            });
        }
    }
    FiveDayAdvanceComponent.prototype.ngOnInit = function () {
    };
    FiveDayAdvanceComponent.prototype.printReport = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        this.reportsService.printFiveDaysAdvanceRecoveryTrends(frmDt, toDt, this.ngForm.get("branch").value).subscribe(function (response) {
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
    Object.defineProperty(FiveDayAdvanceComponent.prototype, "f", {
        get: function () { return this.ngForm.controls; },
        enumerable: true,
        configurable: true
    });
    FiveDayAdvanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-five-day-advance',
            template: __webpack_require__(/*! ./five-day-advance.component.html */ "./src/app/pages/report/five-day-advance/five-day-advance.component.html"),
            styles: [__webpack_require__(/*! ./five-day-advance.component.css */ "./src/app/pages/report/five-day-advance/five-day-advance.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_6__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], FiveDayAdvanceComponent);
    return FiveDayAdvanceComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/fund-stmnt/fund-stmnt.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pages/report/fund-stmnt/fund-stmnt.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-month-picker .mat-calendar-period-button {\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .example-month-picker .mat-calendar-arrow {\r\n    display: none;\r\n  }"

/***/ }),

/***/ "./src/app/pages/report/fund-stmnt/fund-stmnt.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/report/fund-stmnt/fund-stmnt.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Fund Statement <i class=\"fa fa-print\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"portfolioReport()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol5\">\r\n\r\n                  <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"branch\"\r\n                    readonly />\r\n\r\n                  <!-- <mat-form-field *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\">\r\n                      <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                        <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                          {{b.brnchNm}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field> -->\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n\r\n\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                      [matDatepicker]=\"picker1\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                      [matDatepicker]=\"toDt\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"toDt\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #toDt disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/fund-stmnt/fund-stmnt.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/report/fund-stmnt/fund-stmnt.component.ts ***!
  \*****************************************************************/
/*! exports provided: MY_FORMATS, FundStmntComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundStmntComponent", function() { return FundStmntComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
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










var moment = moment__WEBPACK_IMPORTED_MODULE_6__;
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
var FundStmntComponent = /** @class */ (function () {
    function FundStmntComponent(fb, toaster, reportsService, transfersService, spinner) {
        var _this = this;
        this.fb = fb;
        this.toaster = toaster;
        this.reportsService = reportsService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment());
        this.maxDate = new Date();
        if (this.auth.role == "bm" || this.auth.role == "bdo") {
            this.ngForm = this.fb.group({
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,],
            });
        }
        else {
            this.transfersService.getBranches().subscribe(function (d) { _this.branchs = d; });
            this.ngForm = this.fb.group({
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
    }
    FundStmntComponent.prototype.ngOnInit = function () {
    };
    FundStmntComponent.prototype.portfolioReport = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MMM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MMM-yyyy');
        var branch = this.ngForm.get('branch').value;
        this.reportsService.printFundStmntReport(frmDt, toDt, branch).subscribe(function (response) {
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
    FundStmntComponent.prototype.chosenYearHandler = function (normalizedYear, name) {
        var ctrlValue = this.date.value;
        console.log(ctrlValue);
        console.log(normalizedYear);
        ctrlValue.year(normalizedYear.year());
        var d = this.ngForm.controls[name].value;
        d.value.year(normalizedYear.year());
        this.ngForm.controls[name].setValue(d);
        this.date.setValue(ctrlValue);
    };
    FundStmntComponent.prototype.chosenMonthHandler = function (normlizedMonth, datepicker, name) {
        //const ctrlValue = this.date.value;
        // let d = this.ngForm.controls[name].value;
        // this.ngForm.controls[name].setValue(this.date.value);
        //let d = this.ngForm.controls[name].value;
        //d.value.month(normlizedMonth.month());
        //d.value.year(normlizedMonth.year());
        this.ngForm.controls[name].setValue(normlizedMonth);
        //ctrlValue.month(normlizedMonth.month());
        //this.date.setValue(ctrlValue);
        datepicker.close();
    };
    FundStmntComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fund-stmnt',
            template: __webpack_require__(/*! ./fund-stmnt.component.html */ "./src/app/pages/report/fund-stmnt/fund-stmnt.component.html"),
            styles: [__webpack_require__(/*! ./fund-stmnt.component.css */ "./src/app/pages/report/fund-stmnt/fund-stmnt.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_7__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], FundStmntComponent);
    return FundStmntComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/insurance-claim/insurance-claim.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/report/insurance-claim/insurance-claim.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/insurance-claim/insurance-claim.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/report/insurance-claim/insurance-claim.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Insurance Claim Report <i class=\"fa fa-print\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"printReport()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol3\">\r\n\r\n                  <input *ngIf=\"auth.role != 'admin'\" type=\"hidden\" formControlName=\"branch\" readonly />\r\n                  <!-- <mat-form-field *ngIf=\"auth.role == 'admin'\">\r\n                      <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                        <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                          {{b.brnchNm}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field> -->\r\n\r\n\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                      [matDatepicker]=\"picker1\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                      [matDatepicker]=\"picker2\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/insurance-claim/insurance-claim.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/report/insurance-claim/insurance-claim.component.ts ***!
  \***************************************************************************/
/*! exports provided: MY_FORMATS, InsuranceClaimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceClaimComponent", function() { return InsuranceClaimComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/recovery.service */ "./src/app/shared/services/recovery.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
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
var InsuranceClaimComponent = /** @class */ (function () {
    function InsuranceClaimComponent(fb, toaster, reportsService, recoveryService, transfersService, spinner) {
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
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                branch: [''],
            });
        }
        else {
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
        }
    }
    InsuranceClaimComponent.prototype.ngOnInit = function () {
    };
    InsuranceClaimComponent.prototype.printReport = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MMM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MMM-yyyy');
        this.reportsService.printInsuranceClaimReport(frmDt, toDt, this.ngForm.get("branch").value).subscribe(function (response) {
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
    InsuranceClaimComponent.prototype.getPaymentType = function () {
        var _this = this;
        this.recoveryService.getRecoveryTypes().subscribe((function (data) {
            _this.tempInstituteArray = data;
        }));
    };
    Object.defineProperty(InsuranceClaimComponent.prototype, "f", {
        get: function () { return this.ngForm.controls; },
        enumerable: true,
        configurable: true
    });
    InsuranceClaimComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-insurance-claim',
            template: __webpack_require__(/*! ./insurance-claim.component.html */ "./src/app/pages/report/insurance-claim/insurance-claim.component.html"),
            styles: [__webpack_require__(/*! ./insurance-claim.component.css */ "./src/app/pages/report/insurance-claim/insurance-claim.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_3__["ReportsService"], src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_4__["RecoveryService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_5__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], InsuranceClaimComponent);
    return InsuranceClaimComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/landing/landing.component.css":
/*!************************************************************!*\
  !*** ./src/app/pages/report/landing/landing.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/landing/landing.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/report/landing/landing.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/landing/landing.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/report/landing/landing.component.ts ***!
  \***********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/pages/report/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/pages/report/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/overdueloans-report/overdueloans-report.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/pages/report/overdueloans-report/overdueloans-report.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/overdueloans-report/overdueloans-report.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/report/overdueloans-report/overdueloans-report.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Overdue Credit <i class=\"fa fa-print\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"overdueForm\" (ngSubmit)=\"overdueReport()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol5\">\r\n\r\n                  <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"branch\"\r\n                    readonly />\r\n\r\n                  <!-- <mat-form-field *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\">\r\n                    <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                      <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                        {{b.brnchNm}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field> -->\r\n\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Product Type\" formControlName=\"prdId\">\r\n                      <mat-option *ngFor=\"let product of allItems\" [value]=\"product.prdGrpSeq\">{{product.prdGrpNm}}\r\n                      </mat-option>\r\n                      <mat-error *ngIf=\"overdueForm.errors?.prdId\">\r\n                        Payment Mode is <strong>required</strong>\r\n                      </mat-error>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"asDt\" [max]=\"maxDate\" placeholder=\"As Of Date:\"\r\n                      [matDatepicker]=\"picker1\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button [disabled]=\"!overdueForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/overdueloans-report/overdueloans-report.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/report/overdueloans-report/overdueloans-report.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MY_FORMATS, OverdueloansReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverdueloansReportComponent", function() { return OverdueloansReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










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
var OverdueloansReportComponent = /** @class */ (function () {
    function OverdueloansReportComponent(productService, transfersService, toaster, fb, reportsService, spinner) {
        var _this = this;
        this.productService = productService;
        this.transfersService = transfersService;
        this.toaster = toaster;
        this.fb = fb;
        this.reportsService = reportsService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.overdueForm = this.fb.group({
            prdId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            asDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        if (this.auth.role == "bm" || this.auth.role == "bdo") {
            this.overdueForm = this.fb.group({
                prdId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                asDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
        }
        else {
            this.transfersService.getBranches().subscribe(function (d) {
                _this.branchs = d;
            });
            this.overdueForm = this.fb.group({
                prdId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                asDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                branch: [''],
            });
        }
    }
    OverdueloansReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.maxDate = new Date();
        this.productService.getAllProductGroups().subscribe(function (data) {
            _this.allItems = data;
            console.log(_this.allItems);
        });
    };
    OverdueloansReportComponent.prototype.overdueReport = function () {
        var _this = this;
        this.spinner.show();
        var asDt = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US').transform(this.overdueForm.get('asDt').value, 'dd-MM-yyyy');
        this.reportsService.printOverDueReport(this.overdueForm.get('prdId').value, asDt, this.overdueForm.controls['branch'].value).subscribe(function (response) {
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
    OverdueloansReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-overdueloans-report',
            template: __webpack_require__(/*! ./overdueloans-report.component.html */ "./src/app/pages/report/overdueloans-report/overdueloans-report.component.html"),
            styles: [__webpack_require__(/*! ./overdueloans-report.component.css */ "./src/app/pages/report/overdueloans-report/overdueloans-report.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__["TransfersService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_3__["ReportsService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], OverdueloansReportComponent);
    return OverdueloansReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/par-branch-wise/par-branch-wise.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/report/par-branch-wise/par-branch-wise.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/par-branch-wise/par-branch-wise.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/report/par-branch-wise/par-branch-wise.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">PAR Branch Wise <i class=\"fa fa-print\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"printReport()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol3\">\r\n\r\n                  <input *ngIf=\"auth.role != 'admin'\" type=\"hidden\" formControlName=\"branch\" readonly />\r\n                  <!-- <mat-form-field *ngIf=\"auth.role == 'admin'\">\r\n                      <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                        <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                          {{b.brnchNm}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field> -->\r\n\r\n\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n\r\n\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                      [matDatepicker]=\"picker1\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                      [matDatepicker]=\"picker2\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/par-branch-wise/par-branch-wise.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/report/par-branch-wise/par-branch-wise.component.ts ***!
  \***************************************************************************/
/*! exports provided: PARBranchWiseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARBranchWiseComponent", function() { return PARBranchWiseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PARBranchWiseComponent = /** @class */ (function () {
    function PARBranchWiseComponent(fb, toaster, reportsService, transfersService, spinner) {
        var _this = this;
        this.fb = fb;
        this.toaster = toaster;
        this.reportsService = reportsService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.tempInstituteArray = [];
        this.maxDate = new Date();
        if (this.auth.role == "admin") {
            this.transfersService.getBranches().subscribe(function (d) { _this.branchs = d; });
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: [''],
            });
        }
        else {
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
    }
    PARBranchWiseComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(PARBranchWiseComponent.prototype, "f", {
        get: function () { return this.ngForm.controls; },
        enumerable: true,
        configurable: true
    });
    PARBranchWiseComponent.prototype.printReport = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MMM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MMM-yyyy');
        this.reportsService.parBranchWise(frmDt, toDt, this.ngForm.get("branch").value).subscribe(function (response) {
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
    PARBranchWiseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-par-branch-wise',
            template: __webpack_require__(/*! ./par-branch-wise.component.html */ "./src/app/pages/report/par-branch-wise/par-branch-wise.component.html"),
            styles: [__webpack_require__(/*! ./par-branch-wise.component.css */ "./src/app/pages/report/par-branch-wise/par-branch-wise.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_3__["ReportsService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_4__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], PARBranchWiseComponent);
    return PARBranchWiseComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/par-md/par-md.component.css":
/*!**********************************************************!*\
  !*** ./src/app/pages/report/par-md/par-md.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/par-md/par-md.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/report/par-md/par-md.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">PAR Report <i class=\"fa fa-print\"> </i></h6>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"portfolioReport()\">\r\n              <div class=\"modal-body\">\r\n                <div class=\"cRow\">\r\n                  <div class=\"cCol5\">\r\n                    <!-- <mat-form-field>\r\n                      <input matInput required formControlName=\"frmDt\"  placeholder=\"From Date:\"\r\n                        [matDatepicker]=\"picker1\" disabled readonly />\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                      <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                    </mat-form-field> -->\r\n                    <mat-form-field>\r\n                      <input matInput required formControlName=\"toDt\" placeholder=\"As Of Date:\" [matDatepicker]=\"toDt\"\r\n                        disabled readonly />\r\n                      <mat-datepicker-toggle matSuffix [for]=\"toDt\"></mat-datepicker-toggle>\r\n                      <mat-datepicker required #toDt disabled=\"false\"></mat-datepicker>\r\n                    </mat-form-field>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/par-md/par-md.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/report/par-md/par-md.component.ts ***!
  \*********************************************************/
/*! exports provided: ParMdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParMdComponent", function() { return ParMdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ParMdComponent = /** @class */ (function () {
    function ParMdComponent(fb, toaster, reportsService, spinner) {
        this.fb = fb;
        this.toaster = toaster;
        this.reportsService = reportsService;
        this.spinner = spinner;
        this.ngForm = this.fb.group({
            // frmDt: [new Date,Validators.required],
            toDt: [new Date, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    ParMdComponent.prototype.ngOnInit = function () {
    };
    ParMdComponent.prototype.portfolioReport = function () {
        var _this = this;
        this.spinner.show();
        // const frmDt = new DatePipe('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy')
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        console.log(toDt);
        this.reportsService.printParMdReport(toDt).subscribe(function (response) {
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
    ParMdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-par-md',
            template: __webpack_require__(/*! ./par-md.component.html */ "./src/app/pages/report/par-md/par-md.component.html"),
            styles: [__webpack_require__(/*! ./par-md.component.css */ "./src/app/pages/report/par-md/par-md.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_1__["ReportsService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], ParMdComponent);
    return ParMdComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/party-ledger/party-ledger.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/pages/report/party-ledger/party-ledger.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/party-ledger/party-ledger.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/report/party-ledger/party-ledger.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n                <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                        <div class=\"mysearchbox\">\r\n              <h6 class=\"d-inline-block searchshow\">Party Ledger <i class=\"fa fa-print\"> </i></h6>\r\n                            <div class=\"mysearch\">\r\n                              <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                               <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\" title=\"Type in a name\">\r\n                            </div>\r\n                            </div>\r\n            </div>\r\n            \r\n          </div>\r\n        \r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"scheduleForm\" (ngSubmit)=\"postedReport()\" >\r\n              <div class=\"modal-body\">\r\n                <div class=\"cRow\">\r\n                  <div class=\"cCol8\">\r\n                    <mat-form-field>\r\n                      <input  matInput required  formControlName=\"clntId\" \r\n                             placeholder=\"Client Id:\" [matDatepicker]=\"picker3\" disabled readonly/>\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n                      <mat-datepicker  required #picker3 disabled=\"false\"></mat-datepicker>\r\n                      <mat-error *ngIf=\"!scheduleForm.get('frstInstDt').valid\">\r\n                        First Installment Date is <strong>required</strong>\r\n                      </mat-error> \r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n              </div>\r\n            </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div></div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/party-ledger/party-ledger.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/report/party-ledger/party-ledger.component.ts ***!
  \*********************************************************************/
/*! exports provided: PartyLedgerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyLedgerComponent", function() { return PartyLedgerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PartyLedgerComponent = /** @class */ (function () {
    function PartyLedgerComponent(reportsService, fb) {
        this.reportsService = reportsService;
        this.fb = fb;
        this.maxDate = new Date();
        this.scheduleForm = this.fb.group({
            clntId: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    PartyLedgerComponent.prototype.ngOnInit = function () {
    };
    PartyLedgerComponent.prototype.postedReport = function () {
    };
    PartyLedgerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-party-ledger',
            template: __webpack_require__(/*! ./party-ledger.component.html */ "./src/app/pages/report/party-ledger/party-ledger.component.html"),
            styles: [__webpack_require__(/*! ./party-ledger.component.css */ "./src/app/pages/report/party-ledger/party-ledger.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], PartyLedgerComponent);
    return PartyLedgerComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/pdc-detail/pdc-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pages/report/pdc-detail/pdc-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/pdc-detail/pdc-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/report/pdc-detail/pdc-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">PDC Details <i class=\"fa fa-print\"> </i></h6>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <form [formGroup]=\"ngForm\" (ngSubmit)=\"printReport()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol3\">\r\n                  <input *ngIf=\"auth.role != 'admin'\" type=\"hidden\" formControlName=\"branch\" readonly />\r\n\r\n\r\n                  <!-- <mat-form-field *ngIf=\"auth.role == 'admin'\">\r\n                      <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                        <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                          {{b.brnchNm}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field> -->\r\n\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                      [matDatepicker]=\"picker1\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                      [matDatepicker]=\"picker2\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/pdc-detail/pdc-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/report/pdc-detail/pdc-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: MY_FORMATS, PdcDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdcDetailComponent", function() { return PdcDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
    },
};
var PdcDetailComponent = /** @class */ (function () {
    function PdcDetailComponent(fb, reportsService, transfersService, toaster, spinner) {
        var _this = this;
        this.fb = fb;
        this.reportsService = reportsService;
        this.transfersService = transfersService;
        this.toaster = toaster;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.maxDate = new Date();
        if (this.auth.role == 'admin') {
            this.transfersService.getBranches().subscribe(function (d) { _this.branchs = d; });
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
        else {
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,],
            });
        }
    }
    PdcDetailComponent.prototype.ngOnInit = function () {
    };
    PdcDetailComponent.prototype.printReport = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        this.reportsService.printPdcDetail(frmDt, toDt, this.ngForm.get("branch").value).subscribe(function (response) {
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
    Object.defineProperty(PdcDetailComponent.prototype, "f", {
        get: function () { return this.ngForm.controls; },
        enumerable: true,
        configurable: true
    });
    PdcDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pdc-detail',
            template: __webpack_require__(/*! ./pdc-detail.component.html */ "./src/app/pages/report/pdc-detail/pdc-detail.component.html"),
            styles: [__webpack_require__(/*! ./pdc-detail.component.css */ "./src/app/pages/report/pdc-detail/pdc-detail.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_3__["TransfersService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], PdcDetailComponent);
    return PdcDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/pending-clients/pending-clients.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/report/pending-clients/pending-clients.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/pending-clients/pending-clients.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/report/pending-clients/pending-clients.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Pending Clients <i class=\"fa fa-print\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"overdueReport()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol4\">\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Type\" formControlName=\"typ\">\r\n                      <mat-option [value]=\"0\">\r\n                        Pending Clients\r\n                      </mat-option>\r\n                      <mat-option [value]=\"1\">\r\n                        Exit Clients\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n\r\n                  <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"branch\"\r\n                    readonly />\r\n\r\n                  <!-- <mat-form-field *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\">\r\n                      <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                        <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                          {{b.brnchNm}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field> -->\r\n\r\n\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n\r\n\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Product Type\" formControlName=\"prdId\">\r\n                      <mat-option *ngFor=\"let product of allItems\" [value]=\"product.prdGrpSeq\">{{product.prdGrpNm}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"asDt\" [max]=\"maxDate\" placeholder=\"As Of Date:\"\r\n                      [matDatepicker]=\"picker1\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/pending-clients/pending-clients.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/report/pending-clients/pending-clients.component.ts ***!
  \***************************************************************************/
/*! exports provided: MY_FORMATS, PendingClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingClientsComponent", function() { return PendingClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
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
var PendingClientsComponent = /** @class */ (function () {
    function PendingClientsComponent(productService, toaster, fb, reportsService, transfersService, spinner) {
        var _this = this;
        this.productService = productService;
        this.toaster = toaster;
        this.fb = fb;
        this.reportsService = reportsService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        if (this.auth.role == 'admin') {
            this.transfersService.getBranches().subscribe(function (d) { _this.branchs = d; });
            this.ngForm = this.fb.group({
                typ: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                prdId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                asDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
        else {
            this.ngForm = this.fb.group({
                typ: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                prdId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                asDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,],
            });
        }
    }
    PendingClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.maxDate = new Date();
        this.productService.getAllProductGroups().subscribe(function (data) {
            _this.allItems = data;
        });
    };
    Object.defineProperty(PendingClientsComponent.prototype, "f", {
        get: function () { return this.ngForm.controls; },
        enumerable: true,
        configurable: true
    });
    PendingClientsComponent.prototype.overdueReport = function () {
        var _this = this;
        console.log(this.auth.emp_branch);
        this.spinner.show();
        var asDt = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US').transform(this.ngForm.get('asDt').value, 'dd-MM-yyyy');
        this.reportsService.printPendingClients(this.ngForm.get('prdId').value, this.ngForm.get('branch').value, asDt, this.ngForm.get('typ').value).subscribe(function (response) {
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
    PendingClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pending-clients',
            template: __webpack_require__(/*! ./pending-clients.component.html */ "./src/app/pages/report/pending-clients/pending-clients.component.html"),
            styles: [__webpack_require__(/*! ./pending-clients.component.css */ "./src/app/pages/report/pending-clients/pending-clients.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_3__["ReportsService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_4__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], PendingClientsComponent);
    return PendingClientsComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/portfolio-concentration/portfolio-concentration.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/report/portfolio-concentration/portfolio-concentration.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/portfolio-concentration/portfolio-concentration.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/report/portfolio-concentration/portfolio-concentration.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Portfolio Concentration <i class=\"fa fa-print\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"overdueReport()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol4\">\r\n                  <input *ngIf=\"auth.role != 'admin'\" type=\"hidden\" formControlName=\"branch\" readonly />\r\n\r\n\r\n                  <!-- <mat-form-field *ngIf=\"auth.role == 'admin'\">\r\n                      <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                        <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                          {{b.brnchNm}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field> -->\r\n\r\n\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n\r\n\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Product Name\" formControlName=\"prd\">\r\n                      <mat-option *ngFor=\"let product of allItems\" [value]=\"product.prdGrpSeq\">{{product.prdGrpNm}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"asDt\" [max]=\"maxDate\" placeholder=\"As Of Date:\"\r\n                      [matDatepicker]=\"picker1\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/portfolio-concentration/portfolio-concentration.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/report/portfolio-concentration/portfolio-concentration.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: MY_FORMATS, PortfolioConcentrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioConcentrationComponent", function() { return PortfolioConcentrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
var PortfolioConcentrationComponent = /** @class */ (function () {
    function PortfolioConcentrationComponent(productService, toaster, fb, reportsService, transfersService, spinner) {
        var _this = this;
        this.productService = productService;
        this.toaster = toaster;
        this.fb = fb;
        this.reportsService = reportsService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.allItems = [];
        if (this.auth.role == 'admin') {
            this.transfersService.getBranches().subscribe(function (d) { _this.branchs = d; });
            this.ngForm = this.fb.group({
                prd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                asDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
        else {
            this.ngForm = this.fb.group({
                prd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                asDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,],
            });
        }
    }
    PortfolioConcentrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.maxDate = new Date();
        this.productService.getAllProductGroups().subscribe(function (data) {
            _this.allItems = data;
        });
    };
    Object.defineProperty(PortfolioConcentrationComponent.prototype, "f", {
        get: function () { return this.ngForm.controls; },
        enumerable: true,
        configurable: true
    });
    PortfolioConcentrationComponent.prototype.overdueReport = function () {
        var _this = this;
        this.spinner.show();
        var asDt = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US').transform(this.ngForm.get('asDt').value, 'dd-MM-yyyy');
        this.reportsService.printPortfolioConcentration(this.ngForm.get('prd').value, this.ngForm.get('branch').value, asDt).subscribe(function (response) {
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
    PortfolioConcentrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio-concentration',
            template: __webpack_require__(/*! ./portfolio-concentration.component.html */ "./src/app/pages/report/portfolio-concentration/portfolio-concentration.component.html"),
            styles: [__webpack_require__(/*! ./portfolio-concentration.component.css */ "./src/app/pages/report/portfolio-concentration/portfolio-concentration.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_3__["ReportsService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_7__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], PortfolioConcentrationComponent);
    return PortfolioConcentrationComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/portfolio/portfolio.component.css":
/*!****************************************************************!*\
  !*** ./src/app/pages/report/portfolio/portfolio.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/portfolio/portfolio.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/report/portfolio/portfolio.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Portfolio Monitoring <i class=\"fa fa-print\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"portfolioReport()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol6-col\">\r\n\r\n                  <input *ngIf=\"auth.role != 'admin'\" type=\"hidden\" formControlName=\"branch\" readonly />\r\n                  <!-- <mat-form-field *ngIf=\"auth.role == 'admin'\">\r\n                      <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                        <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                          {{b.brnchNm}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field> -->\r\n\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n\r\n\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                      [matDatepicker]=\"picker1\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                      [matDatepicker]=\"picker2\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/portfolio/portfolio.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/report/portfolio/portfolio.component.ts ***!
  \***************************************************************/
/*! exports provided: MY_FORMATS, PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/recovery.service */ "./src/app/shared/services/recovery.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var moment = moment__WEBPACK_IMPORTED_MODULE_6__;
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
var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(fb, reportsService, toaster, recoveryService, transfersService, spinner) {
        var _this = this;
        this.fb = fb;
        this.reportsService = reportsService;
        this.toaster = toaster;
        this.recoveryService = recoveryService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.tempInstituteArray = [];
        this.maxDate = new Date();
        if (this.auth.role == "bm" || this.auth.role == "bdo") {
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
        else {
            this.transfersService.getBranches().subscribe(function (d) {
                _this.branchs = d;
            });
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: [''],
            });
        }
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent.prototype.portfolioReport = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        this.reportsService.printPortfolooReport(frmDt, toDt, this.ngForm.controls['branch'].value).subscribe(function (response) {
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
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/pages/report/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/pages/report/portfolio/portfolio.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_9__["RecoveryService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_10__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/product-wise-report-edition/product-wise-report-edition.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/report/product-wise-report-edition/product-wise-report-edition.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/product-wise-report-edition/product-wise-report-edition.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/report/product-wise-report-edition/product-wise-report-edition.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Product Wise Report Addition <i class=\"fa fa-print\"> </i></h6>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <form [formGroup]=\"ngForm\" (ngSubmit)=\"printReport()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol3\">\r\n                  <input *ngIf=\"auth.role != 'admin'\" type=\"hidden\" formControlName=\"branch\" readonly />\r\n\r\n\r\n                  <!-- <mat-form-field *ngIf=\"auth.role == 'admin'\">\r\n                      <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                        <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                          {{b.brnchNm}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field> -->\r\n\r\n\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n\r\n\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                      [matDatepicker]=\"picker1\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                      [matDatepicker]=\"picker2\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/product-wise-report-edition/product-wise-report-edition.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/report/product-wise-report-edition/product-wise-report-edition.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: MY_FORMATS, ProductWiseReportEditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductWiseReportEditionComponent", function() { return ProductWiseReportEditionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









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
var ProductWiseReportEditionComponent = /** @class */ (function () {
    function ProductWiseReportEditionComponent(fb, reportsService, transfersService, toaster, spinner) {
        var _this = this;
        this.fb = fb;
        this.reportsService = reportsService;
        this.transfersService = transfersService;
        this.toaster = toaster;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.maxDate = new Date();
        if (this.auth.role == 'admin') {
            this.transfersService.getBranches().subscribe(function (d) { _this.branchs = d; });
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
        else {
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,],
            });
        }
    }
    ProductWiseReportEditionComponent.prototype.ngOnInit = function () {
    };
    ProductWiseReportEditionComponent.prototype.printReport = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        this.reportsService.printProductWiseAddition(frmDt, toDt, this.ngForm.get("branch").value).subscribe(function (response) {
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
    Object.defineProperty(ProductWiseReportEditionComponent.prototype, "f", {
        get: function () { return this.ngForm.controls; },
        enumerable: true,
        configurable: true
    });
    ProductWiseReportEditionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-wise-report-edition',
            template: __webpack_require__(/*! ./product-wise-report-edition.component.html */ "./src/app/pages/report/product-wise-report-edition/product-wise-report-edition.component.html"),
            styles: [__webpack_require__(/*! ./product-wise-report-edition.component.css */ "./src/app/pages/report/product-wise-report-edition/product-wise-report-edition.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_3__["TransfersService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], ProductWiseReportEditionComponent);
    return ProductWiseReportEditionComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/projected-clients-loan-completion/projected-clients-loan-completion.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/report/projected-clients-loan-completion/projected-clients-loan-completion.component.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/projected-clients-loan-completion/projected-clients-loan-completion.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/report/projected-clients-loan-completion/projected-clients-loan-completion.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Projected Clients Loan Completeion <i class=\"fa fa-print\"> </i>\r\n                </h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"printReport()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol3\">\r\n\r\n                  <input *ngIf=\"auth.role != 'admin'\" type=\"hidden\" formControlName=\"branch\" readonly />\r\n                  <!-- <mat-form-field *ngIf=\"auth.role == 'admin'\">\r\n                      <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                        <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                          {{b.brnchNm}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field> -->\r\n\r\n\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n\r\n\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"frmDt\" placeholder=\"From Date:\" [matDatepicker]=\"picker1\"\r\n                      disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"toDt\" placeholder=\"To Date:\" [matDatepicker]=\"picker2\"\r\n                      disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/projected-clients-loan-completion/projected-clients-loan-completion.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/report/projected-clients-loan-completion/projected-clients-loan-completion.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: MY_FORMATS, ProjectedClientsLoanCompletionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectedClientsLoanCompletionComponent", function() { return ProjectedClientsLoanCompletionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
    },
};
var ProjectedClientsLoanCompletionComponent = /** @class */ (function () {
    function ProjectedClientsLoanCompletionComponent(fb, toaster, reportsService, transfersService, spinner) {
        var _this = this;
        this.fb = fb;
        this.toaster = toaster;
        this.reportsService = reportsService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.tempInstituteArray = [];
        this.maxDate = new Date();
        if (this.auth.role == "admin") {
            this.transfersService.getBranches().subscribe(function (d) { _this.branchs = d; });
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: [''],
            });
        }
        else {
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
    }
    ProjectedClientsLoanCompletionComponent.prototype.ngOnInit = function () {
    };
    ProjectedClientsLoanCompletionComponent.prototype.printReport = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        this.reportsService.printProjectedClientsLoanCompletetion(frmDt, toDt, this.ngForm.get("branch").value).subscribe(function (response) {
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
    Object.defineProperty(ProjectedClientsLoanCompletionComponent.prototype, "f", {
        get: function () { return this.ngForm.controls; },
        enumerable: true,
        configurable: true
    });
    ProjectedClientsLoanCompletionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projected-clients-loan-completion',
            template: __webpack_require__(/*! ./projected-clients-loan-completion.component.html */ "./src/app/pages/report/projected-clients-loan-completion/projected-clients-loan-completion.component.html"),
            styles: [__webpack_require__(/*! ./projected-clients-loan-completion.component.css */ "./src/app/pages/report/projected-clients-loan-completion/projected-clients-loan-completion.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_3__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], ProjectedClientsLoanCompletionComponent);
    return ProjectedClientsLoanCompletionComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/rate-of-retention/rate-of-retention.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/pages/report/rate-of-retention/rate-of-retention.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/rate-of-retention/rate-of-retention.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/report/rate-of-retention/rate-of-retention.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Rate of Retention <i class=\"fa fa-print\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"scheduleForm\" (ngSubmit)=\"postedReport()\">\r\n              <div class=\"modal-body\">\r\n                <div class=\"cRow\">\r\n                  <div class=\"cCol8\">\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button [disabled]=\"!scheduleForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/rate-of-retention/rate-of-retention.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/report/rate-of-retention/rate-of-retention.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RateOfRetentionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateOfRetentionComponent", function() { return RateOfRetentionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RateOfRetentionComponent = /** @class */ (function () {
    function RateOfRetentionComponent(reportsService, toaster, fb, spinner) {
        this.reportsService = reportsService;
        this.toaster = toaster;
        this.fb = fb;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.maxDate = new Date();
        this.scheduleForm = this.fb.group({
            clntId: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    RateOfRetentionComponent.prototype.ngOnInit = function () {
    };
    RateOfRetentionComponent.prototype.postedReport = function () {
        var _this = this;
        this.spinner.show();
        this.reportsService.printRateOfRetention(this.auth.emp_branch).subscribe(function (response) {
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
    RateOfRetentionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rate-of-retention',
            template: __webpack_require__(/*! ./rate-of-retention.component.html */ "./src/app/pages/report/rate-of-retention/rate-of-retention.component.html"),
            styles: [__webpack_require__(/*! ./rate-of-retention.component.css */ "./src/app/pages/report/rate-of-retention/rate-of-retention.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], RateOfRetentionComponent);
    return RateOfRetentionComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/report.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/report/report.module.ts ***!
  \***********************************************/
/*! exports provided: routes, ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _overdueloans_report_overdueloans_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overdueloans-report/overdueloans-report.component */ "./src/app/pages/report/overdueloans-report/overdueloans-report.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _reports_leftside_bar_reports_leftside_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports-leftside-bar/reports-leftside-bar.component */ "./src/app/pages/report/reports-leftside-bar/reports-leftside-bar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/pages/report/portfolio/portfolio.component.ts");
/* harmony import */ var _fund_stmnt_fund_stmnt_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fund-stmnt/fund-stmnt.component */ "./src/app/pages/report/fund-stmnt/fund-stmnt.component.ts");
/* harmony import */ var _validation_report_validation_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validation-report/validation-report.component */ "./src/app/pages/report/validation-report/validation-report.component.ts");
/* harmony import */ var _account_ledger_account_ledger_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account-ledger/account-ledger.component */ "./src/app/pages/report/account-ledger/account-ledger.component.ts");
/* harmony import */ var _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./book-details/book-details.component */ "./src/app/pages/report/book-details/book-details.component.ts");
/* harmony import */ var _due_recovery_due_recovery_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./due-recovery/due-recovery.component */ "./src/app/pages/report/due-recovery/due-recovery.component.ts");
/* harmony import */ var _womenparticipation_womenparticipation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./womenparticipation/womenparticipation.component */ "./src/app/pages/report/womenparticipation/womenparticipation.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _party_ledger_party_ledger_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./party-ledger/party-ledger.component */ "./src/app/pages/report/party-ledger/party-ledger.component.ts");
/* harmony import */ var _projected_clients_loan_completion_projected_clients_loan_completion_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./projected-clients-loan-completion/projected-clients-loan-completion.component */ "./src/app/pages/report/projected-clients-loan-completion/projected-clients-loan-completion.component.ts");
/* harmony import */ var _brnch_turnover_anlysis_brnch_turnover_anlysis_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./brnch-turnover-anlysis/brnch-turnover-anlysis.component */ "./src/app/pages/report/brnch-turnover-anlysis/brnch-turnover-anlysis.component.ts");
/* harmony import */ var _insurance_claim_insurance_claim_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./insurance-claim/insurance-claim.component */ "./src/app/pages/report/insurance-claim/insurance-claim.component.ts");
/* harmony import */ var _par_branch_wise_par_branch_wise_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./par-branch-wise/par-branch-wise.component */ "./src/app/pages/report/par-branch-wise/par-branch-wise.component.ts");
/* harmony import */ var _branch_performance_review_branch_performance_review_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./branch-performance-review/branch-performance-review.component */ "./src/app/pages/report/branch-performance-review/branch-performance-review.component.ts");
/* harmony import */ var _five_day_advance_five_day_advance_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./five-day-advance/five-day-advance.component */ "./src/app/pages/report/five-day-advance/five-day-advance.component.ts");
/* harmony import */ var _top_sheet_top_sheet_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./top-sheet/top-sheet.component */ "./src/app/pages/report/top-sheet/top-sheet.component.ts");
/* harmony import */ var _rate_of_retention_rate_of_retention_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./rate-of-retention/rate-of-retention.component */ "./src/app/pages/report/rate-of-retention/rate-of-retention.component.ts");
/* harmony import */ var _pdc_detail_pdc_detail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pdc-detail/pdc-detail.component */ "./src/app/pages/report/pdc-detail/pdc-detail.component.ts");
/* harmony import */ var _product_wise_report_edition_product_wise_report_edition_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./product-wise-report-edition/product-wise-report-edition.component */ "./src/app/pages/report/product-wise-report-edition/product-wise-report-edition.component.ts");
/* harmony import */ var _adc_wise_branch_recovery_adc_wise_branch_recovery_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./adc-wise-branch-recovery/adc-wise-branch-recovery.component */ "./src/app/pages/report/adc-wise-branch-recovery/adc-wise-branch-recovery.component.ts");
/* harmony import */ var _portfolio_concentration_portfolio_concentration_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./portfolio-concentration/portfolio-concentration.component */ "./src/app/pages/report/portfolio-concentration/portfolio-concentration.component.ts");
/* harmony import */ var _pending_clients_pending_clients_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pending-clients/pending-clients.component */ "./src/app/pages/report/pending-clients/pending-clients.component.ts");
/* harmony import */ var _tag_client_claim_tag_client_claim_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./tag-client-claim/tag-client-claim.component */ "./src/app/pages/report/tag-client-claim/tag-client-claim.component.ts");
/* harmony import */ var _agencies_target_tracking_agencies_target_tracking_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./agencies-target-tracking/agencies-target-tracking.component */ "./src/app/pages/report/agencies-target-tracking/agencies-target-tracking.component.ts");
/* harmony import */ var _transferred_clients_transferred_clients_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./transferred-clients/transferred-clients.component */ "./src/app/pages/report/transferred-clients/transferred-clients.component.ts");
/* harmony import */ var _AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./AuthGuard.service */ "./src/app/pages/report/AuthGuard.service.ts");
/* harmony import */ var _turn_around_time_turn_around_time_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./turn-around-time/turn-around-time.component */ "./src/app/pages/report/turn-around-time/turn-around-time.component.ts");
/* harmony import */ var _female_participation_female_participation_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./female-participation/female-participation.component */ "./src/app/pages/report/female-participation/female-participation.component.ts");
/* harmony import */ var _shared_shared_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/shared.component */ "./src/app/pages/report/shared/shared.component.ts");
/* harmony import */ var _reversed_entries_reversed_entries_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./reversed-entries/reversed-entries.component */ "./src/app/pages/report/reversed-entries/reversed-entries.component.ts");
/* harmony import */ var _trail_balance_trail_balance_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./trail-balance/trail-balance.component */ "./src/app/pages/report/trail-balance/trail-balance.component.ts");
/* harmony import */ var _par_md_par_md_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./par-md/par-md.component */ "./src/app/pages/report/par-md/par-md.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/pages/report/landing/landing.component.ts");
/* harmony import */ var _bm_bdo_recovery_bm_bdo_recovery_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./bm-bdo-recovery/bm-bdo-recovery.component */ "./src/app/pages/report/bm-bdo-recovery/bm-bdo-recovery.component.ts");
/* harmony import */ var _client_health_beneficiary_client_health_beneficiary_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./client-health-beneficiary/client-health-beneficiary.component */ "./src/app/pages/report/client-health-beneficiary/client-health-beneficiary.component.ts");
/* harmony import */ var _active_clients_active_clients_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./active-clients/active-clients.component */ "./src/app/pages/report/active-clients/active-clients.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































var routes = [
    { path: '', redirectTo: 'landing', canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_40__["LandingComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'overdue', component: _overdueloans_report_overdueloans_report_component__WEBPACK_IMPORTED_MODULE_3__["OverdueloansReportComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'fund-stmnt', component: _fund_stmnt_fund_stmnt_component__WEBPACK_IMPORTED_MODULE_9__["FundStmntComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'validation', component: _validation_report_validation_report_component__WEBPACK_IMPORTED_MODULE_10__["ValidationReportComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'accounts-ledger', component: _account_ledger_account_ledger_component__WEBPACK_IMPORTED_MODULE_11__["AccountLedgerComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'book-details', component: _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_12__["BookDetailsComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'due-recovery', component: _due_recovery_due_recovery_component__WEBPACK_IMPORTED_MODULE_13__["DueRecoveryComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'women-participation', component: _womenparticipation_womenparticipation_component__WEBPACK_IMPORTED_MODULE_14__["WomenparticipationComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'party-ledger', component: _party_ledger_party_ledger_component__WEBPACK_IMPORTED_MODULE_16__["PartyLedgerComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'client-health-beneficiary', component: _client_health_beneficiary_client_health_beneficiary_component__WEBPACK_IMPORTED_MODULE_42__["ClientHealthBeneficiaryComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'brnch-turnover-anlysis', component: _brnch_turnover_anlysis_brnch_turnover_anlysis_component__WEBPACK_IMPORTED_MODULE_18__["BrnchTurnoverAnlysisComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'insurance-claim', component: _insurance_claim_insurance_claim_component__WEBPACK_IMPORTED_MODULE_19__["InsuranceClaimComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'par-branch-wise', component: _par_branch_wise_par_branch_wise_component__WEBPACK_IMPORTED_MODULE_20__["PARBranchWiseComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'branch-performance-review', component: _branch_performance_review_branch_performance_review_component__WEBPACK_IMPORTED_MODULE_21__["BranchPerformanceReviewComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'five-days-advance-recovery', component: _five_day_advance_five_day_advance_component__WEBPACK_IMPORTED_MODULE_22__["FiveDayAdvanceComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'top-sheet', component: _top_sheet_top_sheet_component__WEBPACK_IMPORTED_MODULE_23__["TopSheetComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'rate-of-retention', component: _rate_of_retention_rate_of_retention_component__WEBPACK_IMPORTED_MODULE_24__["RateOfRetentionComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'pdc-detail', component: _pdc_detail_pdc_detail_component__WEBPACK_IMPORTED_MODULE_25__["PdcDetailComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'product-wise-report-edition', component: _product_wise_report_edition_product_wise_report_edition_component__WEBPACK_IMPORTED_MODULE_26__["ProductWiseReportEditionComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'projected-clients-loan-completeion', component: _projected_clients_loan_completion_projected_clients_loan_completion_component__WEBPACK_IMPORTED_MODULE_17__["ProjectedClientsLoanCompletionComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'par-branch-wise-report', component: _par_branch_wise_par_branch_wise_component__WEBPACK_IMPORTED_MODULE_20__["PARBranchWiseComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'adc-wise-branch-recovery', component: _adc_wise_branch_recovery_adc_wise_branch_recovery_component__WEBPACK_IMPORTED_MODULE_27__["AdcWiseBranchRecoveryComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'portfolio-concentration', component: _portfolio_concentration_portfolio_concentration_component__WEBPACK_IMPORTED_MODULE_28__["PortfolioConcentrationComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'pending-clients', component: _pending_clients_pending_clients_component__WEBPACK_IMPORTED_MODULE_29__["PendingClientsComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'tagged-client-claim', component: _tag_client_claim_tag_client_claim_component__WEBPACK_IMPORTED_MODULE_30__["TagClientClaimComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'agencies-target-tracking', component: _agencies_target_tracking_agencies_target_tracking_component__WEBPACK_IMPORTED_MODULE_31__["AgenciesTargetTrackingComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'transferred-clients', component: _transferred_clients_transferred_clients_component__WEBPACK_IMPORTED_MODULE_32__["TransferredClientsComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'turn-around-time', component: _turn_around_time_turn_around_time_component__WEBPACK_IMPORTED_MODULE_34__["TurnAroundTimeComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'female-participation', component: _female_participation_female_participation_component__WEBPACK_IMPORTED_MODULE_35__["FemaleParticipationComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'reversed-enteries', component: _reversed_entries_reversed_entries_component__WEBPACK_IMPORTED_MODULE_37__["ReversedEntriesComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'trail-balance', component: _trail_balance_trail_balance_component__WEBPACK_IMPORTED_MODULE_38__["TrailBalanceComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'md-par', component: _par_md_par_md_component__WEBPACK_IMPORTED_MODULE_39__["ParMdComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'bm-bdo-recovery', component: _bm_bdo_recovery_bm_bdo_recovery_component__WEBPACK_IMPORTED_MODULE_41__["BmBdoRecoveryComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    { path: 'active-clients', component: _active_clients_active_clients_component__WEBPACK_IMPORTED_MODULE_43__["ActiveClientsComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]] },
    {
        path: 'operations',
        component: _shared_shared_component__WEBPACK_IMPORTED_MODULE_36__["SharedComponent"],
        loadChildren: './operations/operations.module#OperationsModule'
    },
    {
        path: 'finance',
        component: _shared_shared_component__WEBPACK_IMPORTED_MODULE_36__["SharedComponent"],
        loadChildren: './finance/finance.module#FinanceModule'
    },
    {
        path: 'operational-reports',
        component: _shared_shared_component__WEBPACK_IMPORTED_MODULE_36__["SharedComponent"],
        loadChildren: './operational-reports/operational-reports.module#OperationalReportsModule'
    },
    {
        path: 'rescheduling-reports',
        component: _shared_shared_component__WEBPACK_IMPORTED_MODULE_36__["SharedComponent"],
        loadChildren: './rescheduling-reports/rescheduling-reports.module#ReschedulingReportsModule'
    },
    {
        path: 'compliance-repot',
        component: _shared_shared_component__WEBPACK_IMPORTED_MODULE_36__["SharedComponent"],
        loadChildren: './compliance-repot/compliance-repot.module#ComplianceRepotModule'
    },
];
var ReportModule = /** @class */ (function () {
    function ReportModule() {
    }
    ReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"]
            ],
            declarations: [_overdueloans_report_overdueloans_report_component__WEBPACK_IMPORTED_MODULE_3__["OverdueloansReportComponent"], _reports_leftside_bar_reports_leftside_bar_component__WEBPACK_IMPORTED_MODULE_6__["ReportsLeftsideBarComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"], _fund_stmnt_fund_stmnt_component__WEBPACK_IMPORTED_MODULE_9__["FundStmntComponent"], _validation_report_validation_report_component__WEBPACK_IMPORTED_MODULE_10__["ValidationReportComponent"], _account_ledger_account_ledger_component__WEBPACK_IMPORTED_MODULE_11__["AccountLedgerComponent"], _book_details_book_details_component__WEBPACK_IMPORTED_MODULE_12__["BookDetailsComponent"], _due_recovery_due_recovery_component__WEBPACK_IMPORTED_MODULE_13__["DueRecoveryComponent"], _womenparticipation_womenparticipation_component__WEBPACK_IMPORTED_MODULE_14__["WomenparticipationComponent"], _client_health_beneficiary_client_health_beneficiary_component__WEBPACK_IMPORTED_MODULE_42__["ClientHealthBeneficiaryComponent"], _party_ledger_party_ledger_component__WEBPACK_IMPORTED_MODULE_16__["PartyLedgerComponent"], _brnch_turnover_anlysis_brnch_turnover_anlysis_component__WEBPACK_IMPORTED_MODULE_18__["BrnchTurnoverAnlysisComponent"], _insurance_claim_insurance_claim_component__WEBPACK_IMPORTED_MODULE_19__["InsuranceClaimComponent"], _par_branch_wise_par_branch_wise_component__WEBPACK_IMPORTED_MODULE_20__["PARBranchWiseComponent"], _branch_performance_review_branch_performance_review_component__WEBPACK_IMPORTED_MODULE_21__["BranchPerformanceReviewComponent"], _five_day_advance_five_day_advance_component__WEBPACK_IMPORTED_MODULE_22__["FiveDayAdvanceComponent"], _projected_clients_loan_completion_projected_clients_loan_completion_component__WEBPACK_IMPORTED_MODULE_17__["ProjectedClientsLoanCompletionComponent"], _top_sheet_top_sheet_component__WEBPACK_IMPORTED_MODULE_23__["TopSheetComponent"], _pdc_detail_pdc_detail_component__WEBPACK_IMPORTED_MODULE_25__["PdcDetailComponent"], _rate_of_retention_rate_of_retention_component__WEBPACK_IMPORTED_MODULE_24__["RateOfRetentionComponent"], _pdc_detail_pdc_detail_component__WEBPACK_IMPORTED_MODULE_25__["PdcDetailComponent"], _product_wise_report_edition_product_wise_report_edition_component__WEBPACK_IMPORTED_MODULE_26__["ProductWiseReportEditionComponent"], _par_branch_wise_par_branch_wise_component__WEBPACK_IMPORTED_MODULE_20__["PARBranchWiseComponent"], _adc_wise_branch_recovery_adc_wise_branch_recovery_component__WEBPACK_IMPORTED_MODULE_27__["AdcWiseBranchRecoveryComponent"], _portfolio_concentration_portfolio_concentration_component__WEBPACK_IMPORTED_MODULE_28__["PortfolioConcentrationComponent"], _pending_clients_pending_clients_component__WEBPACK_IMPORTED_MODULE_29__["PendingClientsComponent"], _tag_client_claim_tag_client_claim_component__WEBPACK_IMPORTED_MODULE_30__["TagClientClaimComponent"], _agencies_target_tracking_agencies_target_tracking_component__WEBPACK_IMPORTED_MODULE_31__["AgenciesTargetTrackingComponent"], _transferred_clients_transferred_clients_component__WEBPACK_IMPORTED_MODULE_32__["TransferredClientsComponent"], _turn_around_time_turn_around_time_component__WEBPACK_IMPORTED_MODULE_34__["TurnAroundTimeComponent"], _female_participation_female_participation_component__WEBPACK_IMPORTED_MODULE_35__["FemaleParticipationComponent"], _shared_shared_component__WEBPACK_IMPORTED_MODULE_36__["SharedComponent"], _reversed_entries_reversed_entries_component__WEBPACK_IMPORTED_MODULE_37__["ReversedEntriesComponent"], _trail_balance_trail_balance_component__WEBPACK_IMPORTED_MODULE_38__["TrailBalanceComponent"], _par_md_par_md_component__WEBPACK_IMPORTED_MODULE_39__["ParMdComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_40__["LandingComponent"], _bm_bdo_recovery_bm_bdo_recovery_component__WEBPACK_IMPORTED_MODULE_41__["BmBdoRecoveryComponent"], _active_clients_active_clients_component__WEBPACK_IMPORTED_MODULE_43__["ActiveClientsComponent"]],
            providers: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_33__["AuthGuard"]],
        })
    ], ReportModule);
    return ReportModule;
}());



/***/ }),

/***/ "./src/app/pages/report/reports-leftside-bar/reports-leftside-bar.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/report/reports-leftside-bar/reports-leftside-bar.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-expansion-panel{\r\n    margin: 5px;\r\n}"

/***/ }),

/***/ "./src/app/pages/report/reports-leftside-bar/reports-leftside-bar.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/report/reports-leftside-bar/reports-leftside-bar.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-accordion>\r\n\r\n        <!------------------------- Starting of Simple Reports------------------------------->\r\n\r\n        <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                                Branch MWX Reports\r\n                        </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n\r\n                <div class=\"leftmenu\">\r\n                        <ul class=\"leftmenu\">\r\n\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/overdue')\"><a\r\n                                                [routerLink]=\"['/reports/overdue']\">{{getName(\"/overdue\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/portfolio')\"><a\r\n                                                [routerLink]=\"['/reports/portfolio']\">{{getName(\"/portfolio\")}}</a></li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/fund-stmnt')\"><a\r\n                                                [routerLink]=\"['/reports/fund-stmnt']\">{{getName(\"/fund-stmnt\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/validation')\"><a\r\n                                                [routerLink]=\"['/reports/validation']\">{{getName(\"/validation\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/accounts-ledger')\"><a\r\n                                                [routerLink]=\"['/reports/accounts-ledger']\">{{getName(\"/accounts-ledger\")}}\r\n                                        </a></li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/book-details')\"><a\r\n                                                [routerLink]=\"['/reports/book-details']\">{{getName(\"/book-details\")}}\r\n                                        </a></li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/due-recovery')\"><a\r\n                                                [routerLink]=\"['/reports/due-recovery']\">{{getName(\"/due-recovery\")}}\r\n                                        </a></li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/client-health-beneficiary')\"><a\r\n                                                [routerLink]=\"['/reports/client-health-beneficiary']\">{{getName(\"/client-health-beneficiary\")}}\r\n                                        </a></li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/brnch-turnover-anlysis')\"><a\r\n                                                [routerLink]=\"['/reports/brnch-turnover-anlysis']\">{{getName(\"/brnch-turnover-anlysis\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/insurance-claim')\"><a\r\n                                                [routerLink]=\"['/reports/insurance-claim']\">{{getName(\"/insurance-claim\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/par-branch-wise')\"><a\r\n                                                [routerLink]=\"['/reports/par-branch-wise']\">{{getName(\"/par-branch-wise\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/five-days-advance-recovery')\"><a\r\n                                                [routerLink]=\"['/reports/five-days-advance-recovery']\">{{getName(\"/five-days-advance-recovery\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/top-sheet')\"><a\r\n                                                [routerLink]=\"['/reports/top-sheet']\">{{getName(\"/top-sheet\")}}</a></li>\r\n                                <li [routerLinkActive]=\"['active']\"\r\n                                        *ngIf=\"hasSubMod('/projected-clients-loan-completeion')\"><a\r\n                                                [routerLink]=\"['/reports/projected-clients-loan-completeion']\">{{getName(\"/projected-clients-loan-completeion\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/adc-wise-branch-recovery')\"><a\r\n                                                [routerLink]=\"['/reports/adc-wise-branch-recovery']\">{{getName(\"/adc-wise-branch-recovery\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/pending-clients')\"><a\r\n                                                [routerLink]=\"['/reports/pending-clients']\">{{getName(\"/pending-clients\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/tagged-client-claim')\"><a\r\n                                                [routerLink]=\"['/reports/tagged-client-claim']\">{{getName(\"/tagged-client-claim\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/transferred-clients')\"><a\r\n                                                [routerLink]=\"['/reports/transferred-clients']\">{{getName(\"/transferred-clients\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/reversed-enteries')\"><a\r\n                                                [routerLink]=\"['/reports/reversed-enteries']\">{{getName(\"/reversed-enteries\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/trail-balance')\"><a\r\n                                                [routerLink]=\"['/reports/trail-balance']\">{{getName(\"/trail-balance\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/md-par')\"><a\r\n                                                [routerLink]=\"['/reports/md-par']\">Par MD</a>\r\n                                </li>\r\n\r\n                        </ul>\r\n                </div>\r\n        </mat-expansion-panel>\r\n\r\n        <!------------------------- Ending of Simple Reports------------------------------->\r\n\r\n\r\n\r\n        <!------------------------- Starting of operationl Reports------------------------------->\r\n\r\n        <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                                AM / RM Reports\r\n                        </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"leftmenu\">\r\n                        <ul class=\"leftmenu\">\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/advance-recovery-overall')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operational-reports/advance-recovery-overall']\">{{getName(\"/advance-recovery-overall\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/pending-loan-utilization')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operational-reports/pending-loan-utilization']\">{{getName(\"/pending-loan-utilization\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/late-closing')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operational-reports/late-closing']\">{{getName(\"/late-closing\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/advance-client-report')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operational-reports/advance-client-report']\">{{getName(\"/advance-client-report\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/advance-maturity-report')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operational-reports/advance-maturity-report']\">{{getName(\"/advance-maturity-report\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/weekly-target-report')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operational-reports/weekly-target-report']\">{{getName(\"/weekly-target-report\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/area-disbursement-report')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operational-reports/area-disbursement-report']\">{{getName(\"/area-disbursement-report\")}}</a>\r\n                                </li>\r\n\r\n                        </ul>\r\n                </div>\r\n        </mat-expansion-panel>\r\n\r\n        <!------------------------- Ending of operational Reports------------------------------->\r\n\r\n\r\n\r\n\r\n        <!------------------------- Starting of operations Reports------------------------------->\r\n\r\n        <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                                BDO / BM Reports\r\n                        </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n\r\n                <div class=\"leftmenu\">\r\n                        <ul class=\"leftmenu\">\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/dues-report')\"><a\r\n                                                [routerLink]=\"['/reports/operations/dues-report']\">{{getName(\"/dues-report\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/consolidated-loans')\"><a\r\n                                                [routerLink]=\"['/reports/operations/consolidated-loans']\">{{getName(\"/consolidated-loans\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/op-portfolio-segmentation')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operations/op-portfolio-segmentation']\">{{getName(\"/op-portfolio-segmentation\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/op-portfolio-at-risk')\"><a\r\n                                                [routerLink]=\"['/reports/operations/op-portfolio-at-risk']\">{{getName(\"/op-portfolio-at-risk\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/app-risk-flagging')\"><a\r\n                                                [routerLink]=\"['/reports/operations/app-risk-flagging']\">{{getName(\"/app-risk-flagging\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/turn-around-time')\"><a\r\n                                                [routerLink]=\"['/reports/turn-around-time']\">{{getName(\"/turn-around-time\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/female-participation')\"><a\r\n                                                [routerLink]=\"['/reports/female-participation']\">{{getName(\"/female-participation\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/op-portfolio-status')\"><a\r\n                                                [routerLink]=\"['/reports/operations/op-portfolio-status']\">{{getName(\"/op-portfolio-status\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/rate-of-renewal')\"><a\r\n                                                [routerLink]=\"['/reports/operations/rate-of-renewal']\">{{getName(\"/rate-of-renewal\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/monthly-status')\"><a\r\n                                                [routerLink]=\"['/reports/operations/monthly-status']\">{{getName(\"/monthly-status\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/loan-utlization')\"><a\r\n                                                [routerLink]=\"['/reports/operations/loan-utlization']\">{{getName(\"/loan-utlization\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\"\r\n                                        *ngIf=\"hasSubMod('/opp-portfolio-at-risk-time-series')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operations/opp-portfolio-at-risk-time-series']\">{{getName(\"/opp-portfolio-at-risk-time-series\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/op-female-participation-ratio')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operations/op-female-participation-ratio']\">{{getName(\"/op-female-participation-ratio\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/branch-target-managment')\"><a\r\n                                                [routerLink]=\"['/reports/operations/branch-target-managment']\">{{getName(\"/branch-target-managment\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/oop-portfolio-status-duration')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operations/oop-portfolio-status-duration']\">{{getName(\"/oop-portfolio-status-duration\")}}</a>\r\n                                </li>\r\n\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/attendance-monitoring')\"><a\r\n                                                [routerLink]=\"['/reports/operations/attendance-monitoring']\">{{getName(\"/attendance-monitoring\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/agencies-target-tracking')\"><a\r\n                                                [routerLink]=\"['/reports/operations/agencies-target-tracking']\">{{getName(\"/agencies-target-tracking\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/sales-2-pending')\"><a\r\n                                                [routerLink]=\"['/reports/operations/sales-2-pending']\">{{getName(\"/sales-2-pending\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/active-clients')\"><a\r\n                                                [routerLink]=\"['/reports/active-clients']\">{{getName(\"/active-clients\")}}</a>\r\n                                </li>\r\n\r\n                                  <!-- Added By Naveed, Dated: 13/11/2020 -->\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/bm-bdo-recovery')\"><a\r\n                                        [routerLink]=\"['/reports/bm-bdo-recovery']\">BM BDO Recovery Report</a>\r\n                                </li>\r\n                        </ul>\r\n                </div>\r\n        </mat-expansion-panel>\r\n\r\n        <!------------------------- Ending of operations Reports------------------------------->\r\n\r\n\r\n\r\n\r\n        <!------------------------- Starting of finance Reports------------------------------->\r\n\r\n        <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                                Finance Reports\r\n                        </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"leftmenu\">\r\n                        <ul class=\"leftmenu\">\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/funds-report')\"><a\r\n                                                [routerLink]=\"['/reports/finance/funds-report']\">{{getName(\"/funds-report\")}}</a>\r\n                                </li>\r\n\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/recovery-report')\"><a\r\n                                                [routerLink]=\"['/reports/finance/recovery-report']\">{{getName(\"/recovery-report\")}}</a>\r\n                                </li>\r\n\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/disbursment-report')\"><a\r\n                                                [routerLink]=\"['/reports/finance/disbursment-report']\">{{getName(\"/disbursment-report\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/fund-managment-tool')\"><a\r\n                                                [routerLink]=\"['/reports/finance/fund-managment-tool']\">{{getName(\"/fund-managment-tool\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/organization-tagging-report')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/finance/organization-tagging-report']\">{{getName(\"/organization-tagging-report\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/product-wise-disbursement')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/finance/product-wise-disbursement']\">{{getName(\"/product-wise-disbursement\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/organization-time')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/finance/organization-time']\">{{getName(\"/organization-time\")}}</a>\r\n                                </li>\r\n\r\n                        </ul>\r\n                </div>\r\n        </mat-expansion-panel>\r\n\r\n        <!------------------------- Ending of finance Reports------------------------------->\r\n\r\n\r\n\r\n        <!------------------------- Starting of RESCHEDULING Reports------------------------------->\r\n\r\n        <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                                Rescheduling Reports\r\n                        </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"leftmenu\">\r\n                        <ul class=\"leftmenu\">\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/client-recovery-status')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/rescheduling-reports/client-recovery-status']\">{{getName(\"/client-recovery-status\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/due-vs-recovery')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/rescheduling-reports/due-vs-recovery']\">{{getName(\"/due-vs-recovery\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/managment-dashboard')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/rescheduling-reports/managment-dashboard']\">{{getName(\"/managment-dashboard\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/rescheduling-portfolio')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/rescheduling-reports/rescheduling-portfolio']\">{{getName(\"/rescheduling-portfolio\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\"\r\n                                        *ngIf=\"hasSubMod('/portfolio-quality-old-portfolio')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/rescheduling-reports/portfolio-quality-old-portfolio']\">{{getName(\"/portfolio-quality-old-portfolio\")}}</a>\r\n                                </li>\r\n\r\n                        </ul>\r\n                </div>\r\n        </mat-expansion-panel>\r\n\r\n\r\n        <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                                Compliance Reports\r\n                        </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"leftmenu\">\r\n                        <ul class=\"leftmenu\">\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/aml-matches')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/compliance-repot/aml-matches']\">{{getName(\"/aml-matches\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/cnic-match')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/compliance-repot/cnic-match']\">{{getName(\"/cnic-match\")}}</a>\r\n                                </li>\r\n\r\n                        </ul>\r\n                </div>\r\n        </mat-expansion-panel>\r\n\r\n        <!------------------------- Ending of RESCHEDULING Reports------------------------------->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <!------------------ BRANCH MWX REPORTS  ---------------->\r\n\r\n\r\n        <!-- <mat-expansion-panel *ngIf=\"auth.role == 'admin'\">\r\n                <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                                Branch MWX Reports\r\n                        </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n\r\n                <div class=\"leftmenu\">\r\n                        <ul class=\"leftmenu\">\r\n\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/overdue')\"><a\r\n                                                [routerLink]=\"['/reports/overdue']\">{{getName(\"/overdue\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/attendance-monitoring')\"><a\r\n                                                [routerLink]=\"['/reports/operations/attendance-monitoring']\">{{getName(\"/attendance-monitoring\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/portfolio')\"><a\r\n                                                [routerLink]=\"['/reports/portfolio']\">{{getName(\"/portfolio\")}}</a></li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/fund-stmnt')\"><a\r\n                                                [routerLink]=\"['/reports/fund-stmnt']\">{{getName(\"/fund-stmnt\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/validation')\"><a\r\n                                                [routerLink]=\"['/reports/validation']\">{{getName(\"/validation\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/accounts-ledger')\"><a\r\n                                                [routerLink]=\"['/reports/accounts-ledger']\">{{getName(\"/accounts-ledger\")}}\r\n                                        </a></li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/book-details')\"><a\r\n                                                [routerLink]=\"['/reports/book-details']\">{{getName(\"/book-details\")}}\r\n                                        </a></li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/due-recovery')\"><a\r\n                                                [routerLink]=\"['/reports/due-recovery']\">{{getName(\"/due-recovery\")}}\r\n                                        </a></li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/client-health-beneficiary')\"><a\r\n                                                [routerLink]=\"['/reports/client-health-beneficiary']\">{{getName(\"/client-health-beneficiary\")}}\r\n                                        </a></li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/brnch-turnover-anlysis')\"><a\r\n                                                [routerLink]=\"['/reports/brnch-turnover-anlysis']\">{{getName(\"/brnch-turnover-anlysis\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/insurance-claim')\"><a\r\n                                                [routerLink]=\"['/reports/insurance-claim']\">{{getName(\"/insurance-claim\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/par-branch-wise')\"><a\r\n                                                [routerLink]=\"['/reports/par-branch-wise']\">{{getName(\"/par-branch-wise\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/five-days-advance-recovery')\"><a\r\n                                                [routerLink]=\"['/reports/five-days-advance-recovery']\">{{getName(\"/five-days-advance-recovery\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/top-sheet')\"><a\r\n                                                [routerLink]=\"['/reports/top-sheet']\">{{getName(\"/top-sheet\")}}</a></li>\r\n                               <li [routerLinkActive]=\"['active']\"\r\n                                        *ngIf=\"hasSubMod('/projected-clients-loan-completeion')\"><a\r\n                                                [routerLink]=\"['/reports/projected-clients-loan-completeion']\">{{getName(\"/projected-clients-loan-completeion\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/adc-wise-branch-recovery')\"><a\r\n                                                [routerLink]=\"['/reports/adc-wise-branch-recovery']\">{{getName(\"/adc-wise-branch-recovery\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/pending-clients')\"><a\r\n                                                [routerLink]=\"['/reports/pending-clients']\">{{getName(\"/pending-clients\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/tagged-client-claim')\"><a\r\n                                                [routerLink]=\"['/reports/tagged-client-claim']\">{{getName(\"/tagged-client-claim\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/transferred-clients')\"><a\r\n                                                [routerLink]=\"['/reports/transferred-clients']\">{{getName(\"/transferred-clients\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/reversed-enteries')\"><a\r\n                                                [routerLink]=\"['/reports/reversed-enteries']\">{{getName(\"/reversed-enteries\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/trail-balance')\"><a\r\n                                                [routerLink]=\"['/reports/trail-balance']\">{{getName(\"/trail-balance\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/md-par')\"><a\r\n                                                [routerLink]=\"['/reports/md-par']\">Par MD</a>\r\n                                </li>\r\n\r\n                        </ul>\r\n                </div>\r\n        </mat-expansion-panel> -->\r\n\r\n\r\n        <!------------------ AM / RM REPORTS  ---------------->\r\n\r\n\r\n        <!-- <mat-expansion-panel *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\">\r\n                <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                                AM / RM Reports\r\n                        </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"leftmenu\">\r\n                        <ul class=\"leftmenu\">\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/advance-recovery-overall')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operational-reports/advance-recovery-overall']\">{{getName(\"/advance-recovery-overall\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/pending-loan-utilization')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operational-reports/pending-loan-utilization']\">{{getName(\"/pending-loan-utilization\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/late-closing')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operational-reports/late-closing']\">{{getName(\"/late-closing\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/advance-client-report')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operational-reports/advance-client-report']\">{{getName(\"/advance-client-report\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/advance-maturity-report')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operational-reports/advance-maturity-report']\">{{getName(\"/advance-maturity-report\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/weekly-target-report')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operational-reports/weekly-target-report']\">{{getName(\"/weekly-target-report\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/area-disbursement-report')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operational-reports/area-disbursement-report']\">{{getName(\"/area-disbursement-report\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/op-portfolio-segmentation')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operations/op-portfolio-segmentation']\">{{getName(\"/op-portfolio-segmentation\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/op-portfolio-at-risk')\"><a\r\n                                                [routerLink]=\"['/reports/operations/op-portfolio-at-risk']\">{{getName(\"/op-portfolio-at-risk\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/op-portfolio-status')\"><a\r\n                                                [routerLink]=\"['/reports/operations/op-portfolio-status']\">{{getName(\"/op-portfolio-status\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/rate-of-renewal')\"><a\r\n                                                [routerLink]=\"['/reports/operations/rate-of-renewal']\">{{getName(\"/rate-of-renewal\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/pending-loan-utilization')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operational-reports/pending-loan-utilization']\">{{getName(\"/pending-loan-utilization\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\"\r\n                                        *ngIf=\"hasSubMod('/opp-portfolio-at-risk-time-series')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operations/opp-portfolio-at-risk-time-series']\">{{getName(\"/opp-portfolio-at-risk-time-series\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/op-female-participation-ratio')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operations/op-female-participation-ratio']\">{{getName(\"/op-female-participation-ratio\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/oop-portfolio-status-duration')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operations/oop-portfolio-status-duration']\">{{getName(\"/oop-portfolio-status-duration\")}}</a>\r\n                                </li>\r\n\r\n                        </ul>\r\n                </div>\r\n        </mat-expansion-panel> -->\r\n\r\n\r\n        <!------------------ BRANCH MANAGER REPORTS  ---------------->\r\n\r\n        <!-- <mat-expansion-panel *ngIf=\"auth.role == 'bm' || auth.role == 'admin'\">\r\n                <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                                Branch Manager Reports\r\n                        </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"leftmenu\">\r\n                        <ul class=\"leftmenu\">\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/dues-report')\"><a\r\n                                                [routerLink]=\"['/reports/operations/dues-report']\">{{getName(\"/dues-report\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/consolidated-loans')\"><a\r\n                                                [routerLink]=\"['/reports/operations/consolidated-loans']\">{{getName(\"/consolidated-loans\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/op-portfolio-segmentation')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operations/op-portfolio-segmentation']\">{{getName(\"/op-portfolio-segmentation\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/op-portfolio-at-risk')\"><a\r\n                                                [routerLink]=\"['/reports/operations/op-portfolio-at-risk']\">{{getName(\"/op-portfolio-at-risk\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/app-risk-flagging')\"><a\r\n                                                [routerLink]=\"['/reports/operations/app-risk-flagging']\">{{getName(\"/app-risk-flagging\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/turn-around-time')\"><a\r\n                                                [routerLink]=\"['/reports/turn-around-time']\">{{getName(\"/turn-around-time\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/female-participation')\"><a\r\n                                                [routerLink]=\"['/reports/female-participation']\">{{getName(\"/female-participation\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/op-portfolio-status')\"><a\r\n                                                [routerLink]=\"['/reports/operations/op-portfolio-status']\">{{getName(\"/op-portfolio-status\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/rate-of-renewal')\"><a\r\n                                                [routerLink]=\"['/reports/operations/rate-of-renewal']\">{{getName(\"/rate-of-renewal\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/monthly-status')\"><a\r\n                                                [routerLink]=\"['/reports/operations/monthly-status']\">{{getName(\"/monthly-status\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/loan-utlization')\"><a\r\n                                                [routerLink]=\"['/reports/operations/loan-utlization']\">{{getName(\"/loan-utlization\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\"\r\n                                        *ngIf=\"hasSubMod('/opp-portfolio-at-risk-time-series')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operations/opp-portfolio-at-risk-time-series']\">{{getName(\"/opp-portfolio-at-risk-time-series\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/op-female-participation-ratio')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operations/op-female-participation-ratio']\">{{getName(\"/op-female-participation-ratio\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/branch-target-managment')\"><a\r\n                                                [routerLink]=\"['/reports/operations/branch-target-managment']\">{{getName(\"/branch-target-managment\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/oop-portfolio-status-duration')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operations/oop-portfolio-status-duration']\">{{getName(\"/oop-portfolio-status-duration\")}}</a>\r\n                                </li>\r\n\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/attendance-monitoring')\"><a\r\n                                                [routerLink]=\"['/reports/operations/attendance-monitoring']\">{{getName(\"/attendance-monitoring\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/agencies-target-tracking')\"><a\r\n                                                [routerLink]=\"['/reports/operations/agencies-target-tracking']\">{{getName(\"/agencies-target-tracking\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/sales-2-pending')\"><a\r\n                                                [routerLink]=\"['/reports/operations/sales-2-pending']\">{{getName(\"/sales-2-pending\")}}</a>\r\n                                </li>\r\n\r\n                        </ul>\r\n                </div>\r\n        </mat-expansion-panel> -->\r\n\r\n        <!------------------ BDO     REPORTS  ---------------->\r\n\r\n\r\n        <!-- <mat-expansion-panel *ngIf=\"auth.role == 'bdo' || auth.role == 'admin'\">\r\n                <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                                BDO Reports\r\n                        </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"leftmenu\">\r\n                        <ul class=\"leftmenu\">\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/dues-report')\"><a\r\n                                                [routerLink]=\"['/reports/operations/dues-report']\">{{getName(\"/dues-report\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/consolidated-loans')\"><a\r\n                                                [routerLink]=\"['/reports/operations/consolidated-loans']\">{{getName(\"/consolidated-loans\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/op-portfolio-segmentation')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/operations/op-portfolio-segmentation']\">{{getName(\"/op-portfolio-segmentation\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/op-portfolio-at-risk')\"><a\r\n                                                [routerLink]=\"['/reports/operations/op-portfolio-at-risk']\">{{getName(\"/op-portfolio-at-risk\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/turn-around-time')\"><a\r\n                                                [routerLink]=\"['/reports/turn-around-time']\">{{getName(\"/turn-around-time\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/female-participation')\"><a\r\n                                                [routerLink]=\"['/reports/female-participation']\">{{getName(\"/female-participation\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/op-portfolio-status')\"><a\r\n                                                [routerLink]=\"['/reports/operations/op-portfolio-status']\">{{getName(\"/op-portfolio-status\")}}</a>\r\n                                </li>\r\n\r\n                        </ul>\r\n                </div>\r\n        </mat-expansion-panel> -->\r\n\r\n        <!------------------ FINANCE REPORTS  ---------------->\r\n\r\n\r\n        <!-- <mat-expansion-panel *ngIf=\"auth.role == 'admin'\">\r\n                <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                                Finance Reports\r\n                        </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                <div class=\"leftmenu\">\r\n                        <ul class=\"leftmenu\">\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/funds-report')\"><a\r\n                                                [routerLink]=\"['/reports/finance/funds-report']\">{{getName(\"/funds-report\")}}</a>\r\n                                </li>\r\n\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/recovery-report')\"><a\r\n                                                [routerLink]=\"['/reports/finance/recovery-report']\">{{getName(\"/recovery-report\")}}</a>\r\n                                </li>\r\n\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/disbursment-report')\"><a\r\n                                                [routerLink]=\"['/reports/finance/disbursment-report']\">{{getName(\"/disbursment-report\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/fund-managment-tool')\"><a\r\n                                                [routerLink]=\"['/reports/finance/fund-managment-tool']\">{{getName(\"/fund-managment-tool\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/organization-tagging-report')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/finance/organization-tagging-report']\">{{getName(\"/organization-tagging-report\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/product-wise-disbursement')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/finance/product-wise-disbursement']\">{{getName(\"/product-wise-disbursement\")}}</a>\r\n                                </li>\r\n                                <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/organization-time')\">\r\n                                        <a\r\n                                                [routerLink]=\"['/reports/finance/organization-time']\">{{getName(\"/organization-time\")}}</a>\r\n                                </li>\r\n\r\n                        </ul>\r\n                </div>\r\n        </mat-expansion-panel> -->\r\n\r\n</mat-accordion>"

/***/ }),

/***/ "./src/app/pages/report/reports-leftside-bar/reports-leftside-bar.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/report/reports-leftside-bar/reports-leftside-bar.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ReportsLeftsideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsLeftsideBarComponent", function() { return ReportsLeftsideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportsLeftsideBarComponent = /** @class */ (function () {
    function ReportsLeftsideBarComponent() {
        this.subMods = [];
        $(document).ready(function () {
            $('.acc_trigger').toggleClass('inactive-header');
            $('.acc_trigger').click(function () {
                if ($(this).next().is(':hidden')) {
                    $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
                    $(this).toggleClass('active-header').toggleClass('inactive-header');
                    $(this).next().slideToggle().toggleClass('open-content');
                }
                else {
                    $(this).toggleClass('active-header').toggleClass('inactive-header');
                    $(this).next().slideToggle().toggleClass('open-content');
                }
            });
            return false;
        });
    }
    ReportsLeftsideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth = JSON.parse(sessionStorage.getItem("auth"));
        console.log(this.auth.modules);
        this.auth.modules.forEach(function (screen) {
            if (screen.modUrl.indexOf("reports") >= 0) {
                _this.subMods = screen.subMods;
            }
        });
        console.log(this.subMods);
    };
    ReportsLeftsideBarComponent.prototype.hasSubMod = function (url) {
        var v = false;
        this.subMods.forEach(function (sub) {
            if (sub.subModUrl.indexOf(url) >= 0) {
                v = true;
            }
        });
        return v;
    };
    ReportsLeftsideBarComponent.prototype.getName = function (url) {
        var v = "";
        this.subMods.forEach(function (sub) {
            if (sub.subModUrl.indexOf(url) >= 0) {
                v = sub.subModNm;
            }
        });
        return v;
    };
    ReportsLeftsideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports-leftside-bar',
            template: __webpack_require__(/*! ./reports-leftside-bar.component.html */ "./src/app/pages/report/reports-leftside-bar/reports-leftside-bar.component.html"),
            styles: [__webpack_require__(/*! ./reports-leftside-bar.component.css */ "./src/app/pages/report/reports-leftside-bar/reports-leftside-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportsLeftsideBarComponent);
    return ReportsLeftsideBarComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/reversed-entries/reversed-entries.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/pages/report/reversed-entries/reversed-entries.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/reversed-entries/reversed-entries.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/report/reversed-entries/reversed-entries.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Reversed Enteries <i class=\"fa fa-print\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"onSubmitReversedEnteries()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol6-col\">\r\n\r\n\r\n                  <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"branch\"\r\n                    readonly />\r\n\r\n                  <!-- <mat-form-field *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\">\r\n                      <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                        <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                          {{b.brnchNm}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field> -->\r\n\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n\r\n\r\n\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                      [matDatepicker]=\"picker1\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                      [matDatepicker]=\"picker2\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/reversed-entries/reversed-entries.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/report/reversed-entries/reversed-entries.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MY_FORMATS, ReversedEntriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversedEntriesComponent", function() { return ReversedEntriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
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










var moment = moment__WEBPACK_IMPORTED_MODULE_6__;
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
var ReversedEntriesComponent = /** @class */ (function () {
    function ReversedEntriesComponent(fb, toaster, reportsService, transfersService, spinner) {
        var _this = this;
        this.fb = fb;
        this.toaster = toaster;
        this.reportsService = reportsService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.maxDate = new Date();
        if (this.auth.role == "bm" || this.auth.role == "bdo") {
            this.ngForm = this.fb.group({
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,],
            });
        }
        else {
            this.transfersService.getBranches().subscribe(function (d) { _this.branchs = d; });
            this.ngForm = this.fb.group({
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
    }
    ReversedEntriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transfersService.getBranches().subscribe(function (d) {
            _this.branchs = d;
        });
    };
    ReversedEntriesComponent.prototype.onSubmitReversedEnteries = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        this.reportsService.printReversedEnteriesReprt(frmDt, toDt, this.ngForm.get('branch').value).subscribe(function (response) {
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
    ReversedEntriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reversed-entries',
            template: __webpack_require__(/*! ./reversed-entries.component.html */ "./src/app/pages/report/reversed-entries/reversed-entries.component.html"),
            styles: [__webpack_require__(/*! ./reversed-entries.component.css */ "./src/app/pages/report/reversed-entries/reversed-entries.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_7__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], ReversedEntriesComponent);
    return ReversedEntriesComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/shared/shared.component.css":
/*!**********************************************************!*\
  !*** ./src/app/pages/report/shared/shared.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/shared/shared.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/report/shared/shared.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/shared/shared.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/report/shared/shared.component.ts ***!
  \*********************************************************/
/*! exports provided: SharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponent", function() { return SharedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedComponent = /** @class */ (function () {
    function SharedComponent() {
    }
    SharedComponent.prototype.ngOnInit = function () {
    };
    SharedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shared',
            template: __webpack_require__(/*! ./shared.component.html */ "./src/app/pages/report/shared/shared.component.html"),
            styles: [__webpack_require__(/*! ./shared.component.css */ "./src/app/pages/report/shared/shared.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SharedComponent);
    return SharedComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/tag-client-claim/tag-client-claim.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/pages/report/tag-client-claim/tag-client-claim.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/tag-client-claim/tag-client-claim.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/report/tag-client-claim/tag-client-claim.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Tagged Overdue Clients Detail Report <i class=\"fa fa-print\"> </i>\r\n                </h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"overdueReport()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol4\">\r\n                  <input *ngIf=\"auth.role != 'admin'\" type=\"hidden\" formControlName=\"branch\" readonly />\r\n\r\n\r\n                  <!-- <mat-form-field *ngIf=\"auth.role == 'admin'\">\r\n                      <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                        <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                          {{b.brnchNm}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field> -->\r\n\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n\r\n\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Product Name\" formControlName=\"prd\">\r\n                      <mat-option *ngFor=\"let product of allItems\" [value]=\"product.prdGrpSeq\">{{product.prdGrpNm}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"asDt\" [max]=\"maxDate\" placeholder=\"As Of Date:\"\r\n                      [matDatepicker]=\"picker1\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/tag-client-claim/tag-client-claim.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/report/tag-client-claim/tag-client-claim.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MY_FORMATS, TagClientClaimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagClientClaimComponent", function() { return TagClientClaimComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
var TagClientClaimComponent = /** @class */ (function () {
    function TagClientClaimComponent(productService, toaster, fb, reportsService, transfersService, spinner) {
        var _this = this;
        this.productService = productService;
        this.toaster = toaster;
        this.fb = fb;
        this.reportsService = reportsService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.allItems = [];
        if (this.auth.role == 'admin') {
            this.transfersService.getBranches().subscribe(function (d) { _this.branchs = d; });
            this.ngForm = this.fb.group({
                prd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                asDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            });
        }
        else {
            this.ngForm = this.fb.group({
                prd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                asDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,],
            });
        }
    }
    TagClientClaimComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.maxDate = new Date();
        this.productService.getAllProductGroups().subscribe(function (data) {
            _this.allItems = data;
        });
    };
    Object.defineProperty(TagClientClaimComponent.prototype, "f", {
        get: function () { return this.ngForm.controls; },
        enumerable: true,
        configurable: true
    });
    TagClientClaimComponent.prototype.overdueReport = function () {
        var _this = this;
        this.spinner.show();
        var asDt = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en-US').transform(this.ngForm.get('asDt').value, 'dd-MM-yyyy');
        this.reportsService.printTaggedClientClaim(this.ngForm.get('prd').value, this.ngForm.get('branch').value, asDt).subscribe(function (response) {
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
    TagClientClaimComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tag-client-claim',
            template: __webpack_require__(/*! ./tag-client-claim.component.html */ "./src/app/pages/report/tag-client-claim/tag-client-claim.component.html"),
            styles: [__webpack_require__(/*! ./tag-client-claim.component.css */ "./src/app/pages/report/tag-client-claim/tag-client-claim.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_6__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], TagClientClaimComponent);
    return TagClientClaimComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/top-sheet/top-sheet.component.css":
/*!****************************************************************!*\
  !*** ./src/app/pages/report/top-sheet/top-sheet.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/top-sheet/top-sheet.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/report/top-sheet/top-sheet.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Top Sheet <i class=\"fa fa-print\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"printReport()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol3\">\r\n                  <!-- <input *ngIf=\"auth.role != 'admin'\" type=\"hidden\" formControlName=\"branch\" readonly /> -->\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Type\" formControlName=\"flg\">\r\n                      <mat-option [value]=\"0\">\r\n                        Top Sheet\r\n                      </mat-option>\r\n                      <mat-option [value]=\"1\">\r\n                        Tag Top Sheet\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n\r\n                  <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"branch\"\r\n                    readonly />\r\n\r\n                  <!-- <mat-form-field *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\">\r\n                      <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                        <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                          {{b.brnchNm}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field> -->\r\n\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Product Name\" formControlName=\"prd\">\r\n                      <mat-option *ngFor=\"let product of allItems\" [value]=\"product.prdGrpSeq\">{{product.prdGrpNm}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                      [matDatepicker]=\"picker1\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                      [matDatepicker]=\"picker2\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/top-sheet/top-sheet.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/report/top-sheet/top-sheet.component.ts ***!
  \***************************************************************/
/*! exports provided: MY_FORMATS, TopSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopSheetComponent", function() { return TopSheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
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
var TopSheetComponent = /** @class */ (function () {
    function TopSheetComponent(fb, reportsService, transfersService, productService, toaster, spinner) {
        var _this = this;
        this.fb = fb;
        this.reportsService = reportsService;
        this.transfersService = transfersService;
        this.productService = productService;
        this.toaster = toaster;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.tempInstituteArray = [];
        this.allItems = [];
        this.maxDate = new Date();
        if (this.auth.role == "bm" || this.auth.role == "bdo") {
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                flg: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                prd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,],
            });
        }
        else {
            this.transfersService.getBranches().subscribe(function (d) { _this.branchs = d; });
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                flg: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                prd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            });
        }
        this.productService.getAllProductGroups().subscribe(function (data) {
            _this.allItems = data;
        });
    }
    TopSheetComponent.prototype.ngOnInit = function () {
    };
    TopSheetComponent.prototype.printReport = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        this.reportsService.printTopSheet(frmDt, toDt, this.ngForm.get("branch").value, this.ngForm.get('prd').value, this.ngForm.get('flg').value).subscribe(function (response) {
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
    Object.defineProperty(TopSheetComponent.prototype, "f", {
        get: function () { return this.ngForm.controls; },
        enumerable: true,
        configurable: true
    });
    TopSheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-sheet',
            template: __webpack_require__(/*! ./top-sheet.component.html */ "./src/app/pages/report/top-sheet/top-sheet.component.html"),
            styles: [__webpack_require__(/*! ./top-sheet.component.css */ "./src/app/pages/report/top-sheet/top-sheet.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_5__["TransfersService"],
            src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], TopSheetComponent);
    return TopSheetComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/trail-balance/trail-balance.component.css":
/*!************************************************************************!*\
  !*** ./src/app/pages/report/trail-balance/trail-balance.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/trail-balance/trail-balance.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/report/trail-balance/trail-balance.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Trail Balance <i class=\"fa fa-print\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"onSubmitTrailBalance()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol6-col\">\r\n\r\n                  <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"branch\"\r\n                    readonly />\r\n\r\n                  <!-- <mat-form-field *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\">\r\n                      <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                        <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                          {{b.brnchNm}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field> -->\r\n\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n\r\n\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                      [matDatepicker]=\"picker1\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                      [matDatepicker]=\"picker2\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/trail-balance/trail-balance.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/report/trail-balance/trail-balance.component.ts ***!
  \***********************************************************************/
/*! exports provided: MY_FORMATS, TrailBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailBalanceComponent", function() { return TrailBalanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
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










var moment = moment__WEBPACK_IMPORTED_MODULE_6__;
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
var TrailBalanceComponent = /** @class */ (function () {
    function TrailBalanceComponent(fb, toaster, reportsService, transfersService, spinner) {
        var _this = this;
        this.fb = fb;
        this.toaster = toaster;
        this.reportsService = reportsService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.maxDate = new Date();
        if (this.auth.role == "bm" || this.auth.role == "bdo") {
            this.ngForm = this.fb.group({
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,],
            });
        }
        else {
            this.transfersService.getBranches().subscribe(function (d) { _this.branchs = d; });
            this.ngForm = this.fb.group({
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
    }
    TrailBalanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transfersService.getBranches().subscribe(function (d) {
            _this.branchs = d;
        });
    };
    TrailBalanceComponent.prototype.onSubmitTrailBalance = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        this.reportsService.printTrailBalanceReport(frmDt, toDt, this.ngForm.get('branch').value).subscribe(function (response) {
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
    TrailBalanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trail-balance',
            template: __webpack_require__(/*! ./trail-balance.component.html */ "./src/app/pages/report/trail-balance/trail-balance.component.html"),
            styles: [__webpack_require__(/*! ./trail-balance.component.css */ "./src/app/pages/report/trail-balance/trail-balance.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_7__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]])
    ], TrailBalanceComponent);
    return TrailBalanceComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/transferred-clients/transferred-clients.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/pages/report/transferred-clients/transferred-clients.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/transferred-clients/transferred-clients.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/report/transferred-clients/transferred-clients.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Transferred Clients <i class=\"fa fa-print\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"printReport()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol4\">\r\n\r\n                  <input *ngIf=\"auth.role != 'admin'\" type=\"hidden\" formControlName=\"branch\" readonly />\r\n                  <!-- <mat-form-field *ngIf=\"auth.role == 'admin'\">\r\n                      <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                        <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                          {{b.brnchNm}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field> -->\r\n\r\n\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                      [matDatepicker]=\"picker1\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                      [matDatepicker]=\"picker2\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/transferred-clients/transferred-clients.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/report/transferred-clients/transferred-clients.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MY_FORMATS, TransferredClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferredClientsComponent", function() { return TransferredClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/recovery.service */ "./src/app/shared/services/recovery.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
var TransferredClientsComponent = /** @class */ (function () {
    function TransferredClientsComponent(fb, toaster, reportsService, recoveryService, transfersService, spinner) {
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
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: [''],
            });
        }
        else {
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
    }
    TransferredClientsComponent.prototype.ngOnInit = function () {
    };
    TransferredClientsComponent.prototype.printReport = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        this.reportsService.printTransferredClients(frmDt, toDt).subscribe(function (response) {
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
    Object.defineProperty(TransferredClientsComponent.prototype, "f", {
        get: function () { return this.ngForm.controls; },
        enumerable: true,
        configurable: true
    });
    TransferredClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transferred-clients',
            template: __webpack_require__(/*! ./transferred-clients.component.html */ "./src/app/pages/report/transferred-clients/transferred-clients.component.html"),
            styles: [__webpack_require__(/*! ./transferred-clients.component.css */ "./src/app/pages/report/transferred-clients/transferred-clients.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"], src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_5__["RecoveryService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_6__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], TransferredClientsComponent);
    return TransferredClientsComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/turn-around-time/turn-around-time.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/pages/report/turn-around-time/turn-around-time.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/turn-around-time/turn-around-time.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/report/turn-around-time/turn-around-time.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Turn Around Time <i class=\"fa fa-print\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"printReport()\">\r\n              <div class=\"modal-body\">\r\n                <div class=\"cRow\">\r\n                  <!--------------- REGIONS DROPDOWN---------->\r\n\r\n                  <div *ngIf=\"disabledRegion\">\r\n                    <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am' && auth.role != 'rm'\"\r\n                      (change)=\"getArea($event)\" [items]=\"allRegions\" bindLabel=\"regNm\" bindValue=\"regSeq\" name=\"regNm\"\r\n                      placeholder=\"Select Region:\" formControlName=\"regSeq\">\r\n                    </ng-select>\r\n                  </div>\r\n\r\n\r\n                  <!--------------- AREA DROPDOWN---------->\r\n\r\n                  <div *ngIf=\"disabledArea\">\r\n                    <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am'\"\r\n                      (change)=\"getBranch($event)\" [items]=\"allAreas\" bindLabel=\"areaNm\" bindValue=\"areaSeq\"\r\n                      name=\"areaNm\" placeholder=\"Select Area:\" formControlName=\"areaSeq\">\r\n                    </ng-select>\r\n                  </div>\r\n\r\n                  <!--------------- BRANCH DROPDOWN---------->\r\n\r\n                  <div *ngIf=\"disabledBranch\">\r\n                    <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"allBranches\" bindLabel=\"brnchNm\"\r\n                      bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"brnchSeq\">\r\n                    </ng-select>\r\n                  </div>\r\n\r\n\r\n\r\n                  <div class=\"cCol3\">\r\n                    <mat-form-field>\r\n                      <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                        [matDatepicker]=\"picker1\"  readonly />\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                      <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                      <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                        [matDatepicker]=\"picker2\" disabled readonly />\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                      <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                    </mat-form-field>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/turn-around-time/turn-around-time.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/report/turn-around-time/turn-around-time.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MY_FORMATS, TurnAroundTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnAroundTimeComponent", function() { return TurnAroundTimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var moment = moment__WEBPACK_IMPORTED_MODULE_6__;
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
var TurnAroundTimeComponent = /** @class */ (function () {
    function TurnAroundTimeComponent(fb, reportsService, transfersService, productService, toaster, dataService, spinner) {
        var _this = this;
        this.fb = fb;
        this.reportsService = reportsService;
        this.transfersService = transfersService;
        this.productService = productService;
        this.toaster = toaster;
        this.dataService = dataService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.tempInstituteArray = [];
        this.allItems = [];
        this.disabledRegion = false;
        this.disabledArea = false;
        this.disabledBranch = false;
        this.maxDate = new Date();
        if (this.auth.role == "admin") {
            this.transfersService.getBranches().subscribe(function (d) { _this.branchs = d; });
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                brnchSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
        else {
            this.ngForm = this.fb.group({
                frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                brnchSeq: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,],
            });
        }
        this.productService.getAllProductGroups().subscribe(function (data) {
            _this.allItems = data;
        });
    }
    TurnAroundTimeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.role == "admin") {
            this.disabledRegion = true;
            this.disabledArea = false;
            this.disabledBranch = false;
            this.ngForm = this.fb.group({
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                regSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                areaSeq: [''],
                brnchSeq: [''],
            });
        }
        else if (this.auth.role == "rm") {
            this.disabledRegion = false;
            this.disabledArea = true;
            this.disabledBranch = true;
            this.ngForm = this.fb.group({
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                regSeq: [this.auth.emp_reg],
                areaSeq: [''],
                brnchSeq: [''],
            });
            this.getArea();
        }
        else if (this.auth.role == "am") {
            this.disabledRegion = false;
            this.disabledArea = false;
            this.disabledBranch = true;
            this.ngForm = this.fb.group({
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                regSeq: [0],
                areaSeq: [this.auth.emp_area],
                brnchSeq: [''],
            });
            this.getBranch();
        }
        else if (this.auth.role == "bm" || this.auth.role == "bdo") {
            this.disabledRegion = false;
            this.disabledArea = false;
            this.disabledBranch = false;
            this.ngForm = this.fb.group({
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                regSeq: [0],
                areaSeq: [0],
                brnchSeq: [this.auth.emp_branch],
            });
        }
        else {
            this.transfersService.getBranches().subscribe(function (d) {
                _this.branchs = d;
            });
            this.ngForm = this.fb.group({
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                regSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                areaSeq: [''],
                brnchSeq: [''],
            });
        }
        this.transfersService.getRegions().subscribe(function (data) {
            _this.allRegions = data;
        });
    };
    TurnAroundTimeComponent.prototype.returnFlag = function () {
        if (this.auth.role == "bm" || this.auth.role == "bdo") {
            this.rpt_flg = 1;
        }
        else if (this.auth.role == "am") {
            this.rpt_flg = 2;
        }
        else if (this.auth.role == "rm") {
            this.rpt_flg = 3;
        }
        return this.rpt_flg;
    };
    TurnAroundTimeComponent.prototype.returnFlagForAdmin = function () {
        if (this.auth.role == "admin" && this.ngForm.controls['regSeq'].value !== 0 && this.ngForm.controls['areaSeq'].value !== 0 && this.ngForm.controls['brnchSeq'].value !== 0) {
            this.rpt_flg = 1;
        }
        else if (this.auth.role == "admin" && this.ngForm.controls['regSeq'].value !== 0 && this.ngForm.controls['areaSeq'].value !== 0 &&
            this.ngForm.controls['brnchSeq'].value == 0) {
            this.rpt_flg = 2;
        }
        else if (this.auth.role == "admin" && this.ngForm.controls['regSeq'].value !== 0 && this.ngForm.controls['areaSeq'].value == 0 && this.ngForm.controls['brnchSeq'].value == 0) {
            this.rpt_flg = 3;
        }
        return this.rpt_flg;
    };
    TurnAroundTimeComponent.prototype.getArea = function () {
        var _this = this;
        this.allAreas = [];
        this.disabledArea = false;
        this.disabledBranch = false;
        this.dataService.getArea(this.ngForm.controls["regSeq"].value).subscribe(function (d) {
            _this.allAreas = d;
            _this.disabledArea = true;
        });
    };
    TurnAroundTimeComponent.prototype.getBranch = function () {
        var _this = this;
        this.allBranches = [];
        this.disabledBranch = false;
        this.dataService.getBranch(this.ngForm.controls["areaSeq"].value).subscribe(function (d) {
            _this.allBranches = d;
            _this.disabledBranch = true;
        });
    };
    TurnAroundTimeComponent.prototype.printReport = function () {
        var _this = this;
        this.spinner.show();
        if (this.auth.role == "bm" || this.auth.role == "bdo" || this.auth.role == "rm" || this.auth.role == "am") {
            this.returnFlag();
        }
        else {
            this.returnFlagForAdmin();
        }
        this.spinner.show();
        var regSeq = this.ngForm.get('regSeq').value ? this.ngForm.get('regSeq').value : 0;
        var areaSeq = this.ngForm.get('areaSeq').value ? this.ngForm.get('areaSeq').value : 0;
        var brnchSeq = this.ngForm.get('brnchSeq').value ? this.ngForm.get('brnchSeq').value : 0;
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        this.reportsService.printTurnAroundTime(frmDt, toDt, this.rpt_flg, areaSeq, regSeq, brnchSeq).subscribe(function (response) {
            _this.spinner.show();
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
    Object.defineProperty(TurnAroundTimeComponent.prototype, "f", {
        get: function () { return this.ngForm.controls; },
        enumerable: true,
        configurable: true
    });
    TurnAroundTimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-turn-around-time',
            template: __webpack_require__(/*! ./turn-around-time.component.html */ "./src/app/pages/report/turn-around-time/turn-around-time.component.html"),
            styles: [__webpack_require__(/*! ./turn-around-time.component.css */ "./src/app/pages/report/turn-around-time/turn-around-time.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_3__["TransfersService"],
            src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"], src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]])
    ], TurnAroundTimeComponent);
    return TurnAroundTimeComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/validation-report/validation-report.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/pages/report/validation-report/validation-report.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/validation-report/validation-report.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/report/validation-report/validation-report.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Validation Report <i class=\"fa fa-print\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form [formGroup]=\"scheduleForm\" (ngSubmit)=\"postedReport()\">\r\n              <div class=\"cRow\">\r\n                <div class=\"cCol12\">\r\n\r\n                  <input *ngIf=\"auth.role != 'admin'\" type=\"hidden\" formControlName=\"branch\" readonly />\r\n                  <!-- <mat-form-field *ngIf=\"auth.role == 'admin'\">\r\n                      <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                        <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                          {{b.brnchNm}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field> -->\r\n\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n\r\n                  <mat-form-field>\r\n                    <input matInput required formControlName=\"frstInstDt\" [max]=\"maxDate\" placeholder=\"Reported Date:\"\r\n                      [matDatepicker]=\"picker3\" disabled readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n                    <mat-datepicker required #picker3 disabled=\"false\"></mat-datepicker>\r\n                    <mat-error *ngIf=\"!scheduleForm.get('frstInstDt').valid\">\r\n                      First Installment Date is <strong>required</strong>\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button [disabled]=\"!scheduleForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/validation-report/validation-report.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/report/validation-report/validation-report.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MY_FORMATS, ValidationReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationReportComponent", function() { return ValidationReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var moment = moment__WEBPACK_IMPORTED_MODULE_6__;
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
var ValidationReportComponent = /** @class */ (function () {
    function ValidationReportComponent(reportsService, toaster, transfersService, fb, spinner) {
        var _this = this;
        this.reportsService = reportsService;
        this.toaster = toaster;
        this.transfersService = transfersService;
        this.fb = fb;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.maxDate = new Date();
        if (this.auth.role == "bm" || this.auth.role == "bdo") {
            this.scheduleForm = this.fb.group({
                frstInstDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
        }
        else {
            this.transfersService.getBranches().subscribe(function (d) {
                _this.branchs = d;
            });
            this.scheduleForm = this.fb.group({
                frstInstDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                branch: [''],
            });
        }
    }
    ValidationReportComponent.prototype.ngOnInit = function () {
    };
    ValidationReportComponent.prototype.postedReport = function () {
        var _this = this;
        this.spinner.show();
        var d = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]('en-US').transform(this.scheduleForm.get('frstInstDt').value, 'MM-dd-yyyy');
        var a = this.scheduleForm.controls['branch'].value;
        this.reportsService.getPostedReport(d, a).subscribe(function (response) {
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
    ValidationReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-validation-report',
            template: __webpack_require__(/*! ./validation-report.component.html */ "./src/app/pages/report/validation-report/validation-report.component.html"),
            styles: [__webpack_require__(/*! ./validation-report.component.css */ "./src/app/pages/report/validation-report/validation-report.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_3__["ReportsService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__["TransfersService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], ValidationReportComponent);
    return ValidationReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/womenparticipation/womenparticipation.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/report/womenparticipation/womenparticipation.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/womenparticipation/womenparticipation.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/report/womenparticipation/womenparticipation.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-reports-leftside-bar></app-reports-leftside-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Women Participation <i class=\"fa fa-print\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"printReport()\">\r\n              <div class=\"modal-body\">\r\n                <div class=\"cRow\">\r\n                  <div class=\"cCol6\">\r\n                    <input *ngIf=\"auth.role != 'admin'\" type=\"hidden\" formControlName=\"branch\" readonly />\r\n\r\n\r\n                    <mat-form-field *ngIf=\"auth.role == 'admin'\">\r\n                      <mat-select placeholder=\"Report Type\" formControlName=\"branch\">\r\n                        <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                          {{b.brnchNm}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                    <mat-form-field>\r\n                      <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"Date:\"\r\n                        [matDatepicker]=\"picker2\" disabled readonly />\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                      <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                    </mat-form-field>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/report/womenparticipation/womenparticipation.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/report/womenparticipation/womenparticipation.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MY_FORMATS, WomenparticipationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WomenparticipationComponent", function() { return WomenparticipationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/recovery.service */ "./src/app/shared/services/recovery.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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
        monthYearA11yLabel: 'MMMM YYYY'
    },
};
var WomenparticipationComponent = /** @class */ (function () {
    function WomenparticipationComponent(fb, toaster, reportsService, recoveryService, transfersService, spinner) {
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
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
        }
        else {
            this.ngForm = this.fb.group({
                toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,],
            });
        }
    }
    WomenparticipationComponent.prototype.ngOnInit = function () {
    };
    WomenparticipationComponent.prototype.printReport = function () {
        var _this = this;
        this.spinner.show();
        var branch = this.ngForm.get('branch').value;
        var date = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'yyyy-MM-dd');
        this.reportsService.printWomenParticipation(date, branch).subscribe(function (response) {
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
    Object.defineProperty(WomenparticipationComponent.prototype, "f", {
        get: function () { return this.ngForm.controls; },
        enumerable: true,
        configurable: true
    });
    WomenparticipationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-womenparticipation',
            template: __webpack_require__(/*! ./womenparticipation.component.html */ "./src/app/pages/report/womenparticipation/womenparticipation.component.html"),
            styles: [__webpack_require__(/*! ./womenparticipation.component.css */ "./src/app/pages/report/womenparticipation/womenparticipation.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"], src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_6__["RecoveryService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_7__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]])
    ], WomenparticipationComponent);
    return WomenparticipationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-report-report-module.js.map