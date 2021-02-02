(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["operations-operations-module"],{

/***/ "./src/app/pages/report/operations/agencies-target-tracking-report/agencies-target-tracking-report.component.css":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/agencies-target-tracking-report/agencies-target-tracking-report.component.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/operations/agencies-target-tracking-report/agencies-target-tracking-report.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/agencies-target-tracking-report/agencies-target-tracking-report.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"content\">\r\n    <div class=\"cRow\">\r\n      <div class=\"mysearchbox\">\r\n        <h6 class=\"d-inline-block searchshow\">Agencies Target Tracking</h6>\r\n        <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n          <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\"\r\n            title=\"Type in a name\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div class=\"row\"> -->\r\n    <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"onSubmitAgenciesTargetReport()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <input *ngIf=\"auth.role == 'bm'\" type=\"hidden\" formControlName=\"branch\" readonly />\r\n\r\n          <ng-select *ngIf=\"auth.role != 'bm'\" [items]=\"branchs\" required bindLabel=\"brnchNm\" bindValue=\"brnchSeq\"\r\n            name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"branch\">\r\n          </ng-select>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n  <!-- </div> -->\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/operations/agencies-target-tracking-report/agencies-target-tracking-report.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/agencies-target-tracking-report/agencies-target-tracking-report.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: MY_FORMATS, AgenciesTargetTrackingReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgenciesTargetTrackingReportComponent", function() { return AgenciesTargetTrackingReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/operations-reports.service */ "./src/app/shared/services/operations-reports.service.ts");
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
var AgenciesTargetTrackingReportComponent = /** @class */ (function () {
    function AgenciesTargetTrackingReportComponent(fb, toaster, operationsReportsService, transfersService, spinner) {
        var _this = this;
        this.fb = fb;
        this.toaster = toaster;
        this.operationsReportsService = operationsReportsService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.tempInstituteArray = [];
        this.maxDate = new Date();
        if (this.auth.role != "bm") {
            this.transfersService.getBranches().subscribe(function (d) {
                _this.branchs = d;
            });
            this.ngForm = this.fb.group({
                branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
        }
        else {
            this.ngForm = this.fb.group({
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,],
            });
        }
    }
    AgenciesTargetTrackingReportComponent.prototype.ngOnInit = function () {
        console.log(this.ngForm.getRawValue());
    };
    AgenciesTargetTrackingReportComponent.prototype.onSubmitAgenciesTargetReport = function () {
        var _this = this;
        this.spinner.show();
        // const frmDt = new DatePipe('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy')
        // const toDt = new DatePipe('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy')
        this.operationsReportsService.printAgenciesTargetTracking(this.ngForm.get("branch").value).subscribe(function (response) {
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
    Object.defineProperty(AgenciesTargetTrackingReportComponent.prototype, "f", {
        get: function () { return this.ngForm.controls; },
        enumerable: true,
        configurable: true
    });
    AgenciesTargetTrackingReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agencies-target-tracking-report',
            template: __webpack_require__(/*! ./agencies-target-tracking-report.component.html */ "./src/app/pages/report/operations/agencies-target-tracking-report/agencies-target-tracking-report.component.html"),
            styles: [__webpack_require__(/*! ./agencies-target-tracking-report.component.css */ "./src/app/pages/report/operations/agencies-target-tracking-report/agencies-target-tracking-report.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_8__["OperationsReportsService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_5__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], AgenciesTargetTrackingReportComponent);
    return AgenciesTargetTrackingReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/operations/attendance-monitoring/attendance-monitoring.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/attendance-monitoring/attendance-monitoring.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/operations/attendance-monitoring/attendance-monitoring.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/attendance-monitoring/attendance-monitoring.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\">\r\n  <div class=\"content mb-md-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"mysearchbox\">\r\n          <h6 class=\"d-inline-block searchshow\">Attendance Monitoring Report<i class=\"fa fa-print\"> </i></h6>\r\n          <div class=\"mysearch\">\r\n            <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n            <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n              title=\"Type in a name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"rateOfRenewalReport()\">\r\n        <div class=\"cRow\">\r\n          <div class=\"cCol6-col\">\r\n\r\n            <mat-form-field>\r\n              <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                [matDatepicker]=\"picker1\" disabled readonly />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n              <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                [matDatepicker]=\"picker2\" disabled readonly />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n              <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/operations/attendance-monitoring/attendance-monitoring.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/attendance-monitoring/attendance-monitoring.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AttendanceMonitoringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceMonitoringComponent", function() { return AttendanceMonitoringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/operations-reports.service */ "./src/app/shared/services/operations-reports.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _due_recovery_due_recovery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../due-recovery/due-recovery.component */ "./src/app/pages/report/due-recovery/due-recovery.component.ts");
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









var AttendanceMonitoringComponent = /** @class */ (function () {
    function AttendanceMonitoringComponent(fb, toaster, operationsReportsService, spinner) {
        this.fb = fb;
        this.toaster = toaster;
        this.operationsReportsService = operationsReportsService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.maxDate = new Date();
        this.ngForm = this.fb.group({
            frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    AttendanceMonitoringComponent.prototype.ngOnInit = function () {
        this.returnFlag();
    };
    AttendanceMonitoringComponent.prototype.returnFlag = function () {
        if (this.auth.role == "bm") {
            this.rptFlag = 1;
        }
        else if (this.auth.role == "am") {
            this.rptFlag = 2;
        }
        else if (this.auth.role == "rm") {
            this.rptFlag = 3;
        }
        return this.rptFlag;
    };
    AttendanceMonitoringComponent.prototype.rateOfRenewalReport = function () {
        var _this = this;
        console.log(this.auth);
        console.log(this.rptFlag);
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        this.operationsReportsService.printAttendanceMonitoring(frmDt, toDt, this.rptFlag).subscribe(function (response) {
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
    AttendanceMonitoringComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attendance-monitoring',
            template: __webpack_require__(/*! ./attendance-monitoring.component.html */ "./src/app/pages/report/operations/attendance-monitoring/attendance-monitoring.component.html"),
            styles: [__webpack_require__(/*! ./attendance-monitoring.component.css */ "./src/app/pages/report/operations/attendance-monitoring/attendance-monitoring.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"], useValue: _due_recovery_due_recovery_component__WEBPACK_IMPORTED_MODULE_6__["MY_FORMATS"] },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_2__["OperationsReportsService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], AttendanceMonitoringComponent);
    return AttendanceMonitoringComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/operations/branch-target-managment/branch-target-managment.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/branch-target-managment/branch-target-managment.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-month-picker .mat-calendar-period-button {\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .example-month-picker .mat-calendar-arrow {\r\n    display: none;\r\n  }"

/***/ }),

/***/ "./src/app/pages/report/operations/branch-target-managment/branch-target-managment.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/branch-target-managment/branch-target-managment.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"content mb-md-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"mysearchbox\">\r\n          <h6 class=\"d-inline-block searchshow\">Branch Target Managment <i class=\"fa fa-print\"> </i></h6>\r\n          <div class=\"mysearch\">\r\n            <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n            <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n              title=\"Type in a name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"row\">\r\n      <div class=\"md-float-material\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol6-col\">\r\n\r\n              <mat-form-field>\r\n                <input matInput required [formControl]=\"frmDt\" [max]=\"maxDate\" placeholder=\"As Month:\"\r\n                  [matDatepicker]=\"picker1\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\" startView=\"multi-year\"\r\n                  (yearSelected)=\"chosenYearHandler($event)\" (monthSelected)=\"chosenMonthHandler($event, picker1)\"\r\n                  panelClass=\"example-month-picker\"></mat-datepicker>\r\n              </mat-form-field>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button type=\"submit\" (click)=\"branchTargetManagmentReport()\" class=\"btn btn-primary\">Print</button>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/operations/branch-target-managment/branch-target-managment.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/branch-target-managment/branch-target-managment.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: MY_FORMATS, BranchTargetManagmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchTargetManagmentComponent", function() { return BranchTargetManagmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/operations-reports.service */ "./src/app/shared/services/operations-reports.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
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






var moment = moment__WEBPACK_IMPORTED_MODULE_6__;



var MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
var BranchTargetManagmentComponent = /** @class */ (function () {
    function BranchTargetManagmentComponent(fb, toaster, operationsReportsService, spinner) {
        this.fb = fb;
        this.toaster = toaster;
        this.operationsReportsService = operationsReportsService;
        this.spinner = spinner;
        this.frmDt = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moment(new Date(new Date().getFullYear(), new Date().getMonth(), 30)));
        this.maxDate = new Date();
        // this.ngForm = this.fb.group({
        //   frmDt: [new Date(), Validators.required]
        // });
    }
    BranchTargetManagmentComponent.prototype.ngOnInit = function () {
    };
    BranchTargetManagmentComponent.prototype.branchTargetManagmentReport = function () {
        var _this = this;
        this.spinner.show();
        // const frmDt = new DatePipe('en-US').transform(this.frmDt.value, 'dd-MM-yyyy')
        var dt = new Date(new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US').transform(this.frmDt.value, 'yyyy-MM-dd'));
        dt.setMonth(dt.getMonth() + 1);
        dt.setDate(0);
        this.operationsReportsService.printBranchTargetManagment(new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US').transform(dt, 'dd-MM-yyyy')).subscribe(function (response) {
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
    BranchTargetManagmentComponent.prototype.chosenYearHandler = function (normalizedYear) {
        var ctrlValue = this.frmDt.value;
        ctrlValue.year(normalizedYear.year());
        this.frmDt.setValue(ctrlValue);
    };
    BranchTargetManagmentComponent.prototype.chosenMonthHandler = function (normalizedMonth, datepicker) {
        var ctrlValue = this.frmDt.value;
        ctrlValue.month(normalizedMonth.month());
        this.frmDt.setValue(ctrlValue);
        datepicker.close();
    };
    BranchTargetManagmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-branch-target-managment',
            template: __webpack_require__(/*! ./branch-target-managment.component.html */ "./src/app/pages/report/operations/branch-target-managment/branch-target-managment.component.html"),
            styles: [__webpack_require__(/*! ./branch-target-managment.component.css */ "./src/app/pages/report/operations/branch-target-managment/branch-target-managment.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_1__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_3__["OperationsReportsService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], BranchTargetManagmentComponent);
    return BranchTargetManagmentComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/operations/consolidated-loans/consolidated-loans.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/report/operations/consolidated-loans/consolidated-loans.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/operations/consolidated-loans/consolidated-loans.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/report/operations/consolidated-loans/consolidated-loans.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\">\r\n  <div class=\"content mb-md-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"mysearchbox\">\r\n          <h6 class=\"d-inline-block searchshow\">Consolidated Loans <i class=\"fa fa-print\"> </i></h6>\r\n          <div class=\"mysearch\">\r\n            <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n            <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n              title=\"Type in a name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"consolidatedLoansReport()\">\r\n        <div class=\"cRow\">\r\n          <div class=\"cCol6-col\">\r\n\r\n            <mat-form-field>\r\n              <input matInput required formControlName=\"frmDt\" placeholder=\"From Date:\" [max]=\"maxDate\"\r\n                [matDatepicker]=\"picker1\" disabled readonly />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n              <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput required formControlName=\"toDt\" [min]=\"ngForm.controls['frmDt'].value\" [max]=\"maxDate\"\r\n                placeholder=\"To Date:\" [matDatepicker]=\"picker2\" disabled readonly />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n              <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/operations/consolidated-loans/consolidated-loans.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/report/operations/consolidated-loans/consolidated-loans.component.ts ***!
  \********************************************************************************************/
/*! exports provided: MY_FORMATS, ConsolidatedLoansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolidatedLoansComponent", function() { return ConsolidatedLoansComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/operations-reports.service */ "./src/app/shared/services/operations-reports.service.ts");
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
var ConsolidatedLoansComponent = /** @class */ (function () {
    function ConsolidatedLoansComponent(fb, toaster, operationsReportsService, spinner) {
        this.fb = fb;
        this.toaster = toaster;
        this.operationsReportsService = operationsReportsService;
        this.spinner = spinner;
        this.maxDate = new Date();
        this.ngForm = this.fb.group({
            frmDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            toDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    ConsolidatedLoansComponent.prototype.ngOnInit = function () {
    };
    ConsolidatedLoansComponent.prototype.consolidatedLoansReport = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        this.operationsReportsService.printConsolidatedLoanReport(frmDt, toDt).subscribe(function (response) {
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
    ConsolidatedLoansComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consolidated-loans',
            template: __webpack_require__(/*! ./consolidated-loans.component.html */ "./src/app/pages/report/operations/consolidated-loans/consolidated-loans.component.html"),
            styles: [__webpack_require__(/*! ./consolidated-loans.component.css */ "./src/app/pages/report/operations/consolidated-loans/consolidated-loans.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_6__["OperationsReportsService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], ConsolidatedLoansComponent);
    return ConsolidatedLoansComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/operations/dues-reports/dues-reports.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/report/operations/dues-reports/dues-reports.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/operations/dues-reports/dues-reports.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/report/operations/dues-reports/dues-reports.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\">\r\n  <div class=\"content mb-md-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"mysearchbox\">\r\n          <h6 class=\"d-inline-block searchshow\">Dues Report <i class=\"fa fa-print\"> </i></h6>\r\n          <div class=\"mysearch\">\r\n            <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n            <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n              title=\"Type in a name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"dueReport()\">\r\n        <div class=\"cRow\">\r\n          <div class=\"cCol5\">\r\n\r\n            <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"branch\" readonly />\r\n\r\n            <!-- <mat-form-field *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\">\r\n              <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                  {{b.brnchNm}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field> -->\r\n\r\n            <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required bindLabel=\"brnchNm\"\r\n              bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"branch\">\r\n            </ng-select>\r\n\r\n            <mat-form-field>\r\n              <input matInput required formControlName=\"frmDt\" placeholder=\"From Date:\" [matDatepicker]=\"picker1\"\r\n                disabled readonly />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n              <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput required formControlName=\"toDt\" [min]=\"ngForm.controls['frmDt'].value\"\r\n                placeholder=\"To Date:\" [matDatepicker]=\"picker2\" disabled readonly />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n              <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/operations/dues-reports/dues-reports.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/report/operations/dues-reports/dues-reports.component.ts ***!
  \********************************************************************************/
/*! exports provided: MY_FORMATS, DuesReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuesReportsComponent", function() { return DuesReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/operations-reports.service */ "./src/app/shared/services/operations-reports.service.ts");
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
var DuesReportsComponent = /** @class */ (function () {
    function DuesReportsComponent(fb, transfersService, toaster, operationsReportsService, spinner) {
        var _this = this;
        this.fb = fb;
        this.transfersService = transfersService;
        this.toaster = toaster;
        this.operationsReportsService = operationsReportsService;
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
    DuesReportsComponent.prototype.ngOnInit = function () {
    };
    DuesReportsComponent.prototype.dueReport = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        this.operationsReportsService.printDuesReport(frmDt, toDt, this.ngForm.controls['branch'].value).subscribe(function (response) {
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
    DuesReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dues-reports',
            template: __webpack_require__(/*! ./dues-reports.component.html */ "./src/app/pages/report/operations/dues-reports/dues-reports.component.html"),
            styles: [__webpack_require__(/*! ./dues-reports.component.css */ "./src/app/pages/report/operations/dues-reports/dues-reports.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__["TransfersService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_6__["OperationsReportsService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], DuesReportsComponent);
    return DuesReportsComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/operations/female-participation-ratio/female-participation-ratio.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/female-participation-ratio/female-participation-ratio.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-month-picker .mat-calendar-period-button {\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .example-month-picker .mat-calendar-arrow {\r\n    display: none;\r\n  }"

/***/ }),

/***/ "./src/app/pages/report/operations/female-participation-ratio/female-participation-ratio.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/female-participation-ratio/female-participation-ratio.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"content\">\r\n    <div class=\"mysearchbox\">\r\n      <h6 class=\"d-inline-block searchshow\">Female Participation Ratio </h6>\r\n      <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n        <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\" title=\"Type in a name\">\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div [formGroup]=\"ngForm\" (ngSubmit)=\"portfolioStatusReport()\"> -->\r\n    <form [formGroup]=\"ngForm\" (ngSubmit)=\"onSubmitFemaleParticipationRatio()\">\r\n      <div class=\"row clearfix\">\r\n        <div class=\"col-sm-12\">\r\n          <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"brnchSeq\" readonly />\r\n\r\n          <div class=\"cRow\">\r\n\r\n            <!--------------- REGIONS DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledRegion\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am' && auth.role != 'rm'\"\r\n                (change)=\"getArea($event)\" [items]=\"allRegions\" bindLabel=\"regNm\" bindValue=\"regSeq\" name=\"regNm\"\r\n                placeholder=\"Select Region:\" formControlName=\"regSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n\r\n            <!--------------- AREA DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledArea\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am'\"\r\n                (change)=\"getBranch($event)\" [items]=\"allAreas\" bindLabel=\"areaNm\" bindValue=\"areaSeq\" name=\"areaNm\"\r\n                placeholder=\"Select Area:\" formControlName=\"areaSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <!--------------- BRANCH DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledBranch\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"allBranches\" bindLabel=\"brnchNm\"\r\n                bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"brnchSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div>\r\n\r\n              <mat-form-field>\r\n                <input matInput required [formControl]=\"frmDt\" [max]=\"maxDate\" placeholder=\"As Month:\"\r\n                  [matDatepicker]=\"picker1\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\" startView=\"multi-year\"\r\n                  (yearSelected)=\"chosenYearHandler($event)\" (monthSelected)=\"chosenMonthHandler($event, picker1)\"\r\n                  panelClass=\"example-month-picker\"></mat-datepicker>\r\n              </mat-form-field>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"buttons mt-3\">\r\n            <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary btn-min mr-3\">Print</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/operations/female-participation-ratio/female-participation-ratio.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/female-participation-ratio/female-participation-ratio.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: MY_FORMATS, FemaleParticipationRatioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FemaleParticipationRatioComponent", function() { return FemaleParticipationRatioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/operations-reports.service */ "./src/app/shared/services/operations-reports.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");
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
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
var FemaleParticipationRatioComponent = /** @class */ (function () {
    function FemaleParticipationRatioComponent(fb, toaster, transfersService, operationsReportsService, spinner, dataService) {
        this.fb = fb;
        this.toaster = toaster;
        this.transfersService = transfersService;
        this.operationsReportsService = operationsReportsService;
        this.spinner = spinner;
        this.dataService = dataService;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.disabledRegion = false;
        this.disabledArea = false;
        this.disabledBranch = false;
        this.frmDt = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moment(new Date(new Date().getFullYear(), new Date().getMonth(), 30)));
        this.maxDate = new Date();
    }
    FemaleParticipationRatioComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.role == "admin") {
            this.disabledRegion = true;
            this.disabledArea = false;
            this.disabledBranch = false;
            this.ngForm = this.fb.group({
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                regSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                areaSeq: [''],
                brnchSeq: [''],
            });
        }
        else if (this.auth.role == "rm") {
            this.disabledRegion = false;
            this.disabledArea = true;
            this.disabledBranch = true;
            this.ngForm = this.fb.group({
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
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
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
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
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
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
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                regSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                areaSeq: [''],
                brnchSeq: [''],
            });
        }
        this.transfersService.getRegions().subscribe(function (data) {
            _this.allRegions = data;
        });
    };
    FemaleParticipationRatioComponent.prototype.returnFlag = function () {
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
    FemaleParticipationRatioComponent.prototype.returnFlagForAdmin = function () {
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
    FemaleParticipationRatioComponent.prototype.getArea = function () {
        var _this = this;
        this.allAreas = [];
        this.disabledArea = false;
        this.disabledBranch = false;
        this.dataService.getArea(this.ngForm.controls["regSeq"].value).subscribe(function (d) {
            _this.allAreas = d;
            _this.disabledArea = true;
        });
    };
    FemaleParticipationRatioComponent.prototype.getBranch = function () {
        var _this = this;
        this.allBranches = [];
        this.disabledBranch = false;
        this.dataService.getBranch(this.ngForm.controls["areaSeq"].value).subscribe(function (d) {
            _this.allBranches = d;
            _this.disabledBranch = true;
        });
    };
    FemaleParticipationRatioComponent.prototype.onSubmitFemaleParticipationRatio = function () {
        // console.log(this.auth)
        // console.log(this.rptFlag);
        // this.spinner.show();
        // let dt = new Date(new DatePipe('en-US').transform(this.frmDt.value, 'yyyy-MM-dd'));
        // dt.setMonth(dt.getMonth() + 1);
        // dt.setDate(0);
        var _this = this;
        if (this.auth.role == "bm" || this.auth.role == "bdo" || this.auth.role == "rm" || this.auth.role == "am") {
            this.returnFlag();
        }
        else {
            this.returnFlagForAdmin();
        }
        this.spinner.show();
        var dt = new Date(new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(this.frmDt.value, 'yyyy-MM-dd'));
        console.log(dt);
        dt.setMonth(dt.getMonth() + 1);
        dt.setDate(0);
        var regSeq = this.ngForm.get('regSeq').value ? this.ngForm.get('regSeq').value : 0;
        var areaSeq = this.ngForm.get('areaSeq').value ? this.ngForm.get('areaSeq').value : 0;
        var brnchSeq = this.ngForm.get('brnchSeq').value ? this.ngForm.get('brnchSeq').value : 0;
        this.operationsReportsService.printFemaleParticipationRatio(new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(dt, 'dd-MM-yyyy'), this.rpt_flg, areaSeq, regSeq, brnchSeq).subscribe(function (response) {
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
    FemaleParticipationRatioComponent.prototype.chosenYearHandler = function (normalizedYear) {
        var ctrlValue = this.frmDt.value;
        ctrlValue.year(normalizedYear.year());
        this.frmDt.setValue(ctrlValue);
    };
    FemaleParticipationRatioComponent.prototype.chosenMonthHandler = function (normalizedMonth, datepicker) {
        var ctrlValue = this.frmDt.value;
        ctrlValue.month(normalizedMonth.month());
        this.frmDt.setValue(ctrlValue);
        datepicker.close();
    };
    FemaleParticipationRatioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-female-participation-ratio',
            template: __webpack_require__(/*! ./female-participation-ratio.component.html */ "./src/app/pages/report/operations/female-participation-ratio/female-participation-ratio.component.html"),
            styles: [__webpack_require__(/*! ./female-participation-ratio.component.css */ "./src/app/pages/report/operations/female-participation-ratio/female-participation-ratio.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__["TransfersService"],
            src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_5__["OperationsReportsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]])
    ], FemaleParticipationRatioComponent);
    return FemaleParticipationRatioComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/operations/loan-compilation/loan-compilation.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/report/operations/loan-compilation/loan-compilation.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/operations/loan-compilation/loan-compilation.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/report/operations/loan-compilation/loan-compilation.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\">\r\n  <div class=\"content mb-md-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"mysearchbox\">\r\n          <h6 class=\"d-inline-block searchshow\">Loan Compilation <i class=\"fa fa-print\"> </i></h6>\r\n          <div class=\"mysearch\">\r\n            <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n            <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n              title=\"Type in a name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"loanCompilationReport()\">\r\n        <div class=\"cRow\">\r\n          <div class=\"cCol6-col\">\r\n\r\n            <mat-form-field>\r\n              <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                [matDatepicker]=\"picker1\" disabled readonly />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n              <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                [matDatepicker]=\"picker2\" disabled readonly />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n              <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/operations/loan-compilation/loan-compilation.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/report/operations/loan-compilation/loan-compilation.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MY_FORMATS, LoanCompilationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanCompilationComponent", function() { return LoanCompilationComponent; });
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
var LoanCompilationComponent = /** @class */ (function () {
    function LoanCompilationComponent(fb, reportsService, toaster, spinner) {
        this.fb = fb;
        this.reportsService = reportsService;
        this.toaster = toaster;
        this.spinner = spinner;
        this.maxDate = new Date();
        this.ngForm = this.fb.group({
            frmDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            toDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    LoanCompilationComponent.prototype.ngOnInit = function () {
    };
    LoanCompilationComponent.prototype.loanCompilationReport = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        this.reportsService.printLoanCompilationReport(frmDt, toDt).subscribe(function (response) {
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
    LoanCompilationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loan-compilation',
            template: __webpack_require__(/*! ./loan-compilation.component.html */ "./src/app/pages/report/operations/loan-compilation/loan-compilation.component.html"),
            styles: [__webpack_require__(/*! ./loan-compilation.component.css */ "./src/app/pages/report/operations/loan-compilation/loan-compilation.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], LoanCompilationComponent);
    return LoanCompilationComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/operations/loan-utilization/loan-utilization.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/report/operations/loan-utilization/loan-utilization.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/operations/loan-utilization/loan-utilization.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/report/operations/loan-utilization/loan-utilization.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"content\">\r\n    <div class=\"cRow\">\r\n      <div class=\"mysearchbox\">\r\n        <h6 class=\"d-inline-block searchshow\">Credit Utilization</h6>\r\n        <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n          <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\"\r\n            title=\"Type in a name\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"rateOfRenewalReport()\">\r\n      <div class=\"row clearfix\">\r\n        <div class=\"col-sm-12\">\r\n          <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"brnchSeq\" readonly />\r\n\r\n          <div class=\"cRow\">\r\n\r\n            <!--------------- REGIONS DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledRegion\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am' && auth.role != 'rm'\"\r\n                (change)=\"getArea($event)\" [items]=\"allRegions\" bindLabel=\"regNm\" bindValue=\"regSeq\" name=\"regNm\"\r\n                placeholder=\"Select Region:\" formControlName=\"regSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n\r\n            <!--------------- AREA DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledArea\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am'\"\r\n                (change)=\"getBranch($event)\" [items]=\"allAreas\" bindLabel=\"areaNm\" bindValue=\"areaSeq\" name=\"areaNm\"\r\n                placeholder=\"Select Area:\" formControlName=\"areaSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <!--------------- BRANCH DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledBranch\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"allBranches\" bindLabel=\"brnchNm\"\r\n                bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"brnchSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <!------------- To Date Form---------------->\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                  [matDatepicker]=\"picker1\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <!-----------------  From Date Form               ----------------------->\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"toDt\" [min]=\"ngForm.controls['frmDt'].value\" [max]=\"maxDate\"\r\n                  placeholder=\"To Date:\" [matDatepicker]=\"picker2\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"buttons mt-3\">\r\n            <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary btn-min mr-3\">Print</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/operations/loan-utilization/loan-utilization.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/report/operations/loan-utilization/loan-utilization.component.ts ***!
  \****************************************************************************************/
/*! exports provided: LoanUtilizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanUtilizationComponent", function() { return LoanUtilizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/operations-reports.service */ "./src/app/shared/services/operations-reports.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _due_recovery_due_recovery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../due-recovery/due-recovery.component */ "./src/app/pages/report/due-recovery/due-recovery.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var moment = moment__WEBPACK_IMPORTED_MODULE_11__;
var LoanUtilizationComponent = /** @class */ (function () {
    function LoanUtilizationComponent(fb, toaster, operationsReportsService, spinner, dataService, transfersService) {
        this.fb = fb;
        this.toaster = toaster;
        this.operationsReportsService = operationsReportsService;
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
    LoanUtilizationComponent.prototype.ngOnInit = function () {
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
    LoanUtilizationComponent.prototype.returnFlag = function () {
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
    LoanUtilizationComponent.prototype.returnFlagForAdmin = function () {
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
    LoanUtilizationComponent.prototype.getArea = function () {
        var _this = this;
        this.allAreas = [];
        this.disabledArea = false;
        this.disabledBranch = false;
        this.dataService.getArea(this.ngForm.controls["regSeq"].value).subscribe(function (d) {
            _this.allAreas = d;
            _this.disabledArea = true;
        });
    };
    LoanUtilizationComponent.prototype.getBranch = function () {
        var _this = this;
        this.allBranches = [];
        this.disabledBranch = false;
        this.dataService.getBranch(this.ngForm.controls["areaSeq"].value).subscribe(function (d) {
            _this.allBranches = d;
            _this.disabledBranch = true;
        });
    };
    LoanUtilizationComponent.prototype.rateOfRenewalReport = function () {
        var _this = this;
        if (this.auth.role == "bm" || this.auth.role == "bdo" || this.auth.role == "rm" || this.auth.role == "am") {
            this.returnFlag();
        }
        else {
            this.returnFlagForAdmin();
        }
        console.log(this.auth);
        console.log(this.rpt_flg);
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        var regSeq = this.ngForm.get('regSeq').value ? this.ngForm.get('regSeq').value : 0;
        var areaSeq = this.ngForm.get('areaSeq').value ? this.ngForm.get('areaSeq').value : 0;
        var brnchSeq = this.ngForm.get('brnchSeq').value ? this.ngForm.get('brnchSeq').value : 0;
        this.operationsReportsService.printLoaprintLoanUtlizationnU(toDt, frmDt, this.rpt_flg, areaSeq, regSeq, brnchSeq).subscribe(function (response) {
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
    LoanUtilizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loan-utilization',
            template: __webpack_require__(/*! ./loan-utilization.component.html */ "./src/app/pages/report/operations/loan-utilization/loan-utilization.component.html"),
            styles: [__webpack_require__(/*! ./loan-utilization.component.css */ "./src/app/pages/report/operations/loan-utilization/loan-utilization.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"], useValue: _due_recovery_due_recovery_component__WEBPACK_IMPORTED_MODULE_6__["MY_FORMATS"] },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_2__["OperationsReportsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_10__["TransfersService"]])
    ], LoanUtilizationComponent);
    return LoanUtilizationComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/operations/monthly-status/monthly-status.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/report/operations/monthly-status/monthly-status.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/operations/monthly-status/monthly-status.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/report/operations/monthly-status/monthly-status.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\">\r\n  <div class=\"content mb-md-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"mysearchbox\">\r\n          <h6 class=\"d-inline-block searchshow\">Monthly Status <i class=\"fa fa-print\"> </i></h6>\r\n          <div class=\"mysearch\">\r\n            <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n            <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n              title=\"Type in a name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"rateOfRenewalReport()\">\r\n        <div class=\"cRow\">\r\n          <div class=\"cCol6-col\">\r\n\r\n            <mat-form-field>\r\n              <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                [matDatepicker]=\"picker1\" disabled readonly />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n              <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                [matDatepicker]=\"picker2\" disabled readonly />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n              <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/operations/monthly-status/monthly-status.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/report/operations/monthly-status/monthly-status.component.ts ***!
  \************************************************************************************/
/*! exports provided: MonthlyStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthlyStatusComponent", function() { return MonthlyStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/operations-reports.service */ "./src/app/shared/services/operations-reports.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _account_ledger_account_ledger_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../account-ledger/account-ledger.component */ "./src/app/pages/report/account-ledger/account-ledger.component.ts");
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









var MonthlyStatusComponent = /** @class */ (function () {
    function MonthlyStatusComponent(fb, toaster, operationsReportsService, spinner) {
        this.fb = fb;
        this.toaster = toaster;
        this.operationsReportsService = operationsReportsService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.maxDate = new Date();
        this.ngForm = this.fb.group({
            frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    MonthlyStatusComponent.prototype.ngOnInit = function () {
        this.returnFlag();
    };
    MonthlyStatusComponent.prototype.returnFlag = function () {
        if (this.auth.role == "bm") {
            this.rptFlag = 1;
        }
        else if (this.auth.role == "am") {
            this.rptFlag = 2;
        }
        else if (this.auth.role == "rm") {
            this.rptFlag = 3;
        }
        return this.rptFlag;
    };
    MonthlyStatusComponent.prototype.rateOfRenewalReport = function () {
        var _this = this;
        console.log(this.auth);
        console.log(this.rptFlag);
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        this.operationsReportsService.printMonthlyStatus(frmDt, toDt, this.rptFlag).subscribe(function (response) {
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
    MonthlyStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-monthly-status',
            template: __webpack_require__(/*! ./monthly-status.component.html */ "./src/app/pages/report/operations/monthly-status/monthly-status.component.html"),
            styles: [__webpack_require__(/*! ./monthly-status.component.css */ "./src/app/pages/report/operations/monthly-status/monthly-status.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: _account_ledger_account_ledger_component__WEBPACK_IMPORTED_MODULE_5__["MY_FORMATS"] },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_1__["OperationsReportsService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], MonthlyStatusComponent);
    return MonthlyStatusComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/operations/operations.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/report/operations/operations.module.ts ***!
  \**************************************************************/
/*! exports provided: routes, OperationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsModule", function() { return OperationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dues_reports_dues_reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dues-reports/dues-reports.component */ "./src/app/pages/report/operations/dues-reports/dues-reports.component.ts");
/* harmony import */ var _consolidated_loans_consolidated_loans_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consolidated-loans/consolidated-loans.component */ "./src/app/pages/report/operations/consolidated-loans/consolidated-loans.component.ts");
/* harmony import */ var _loan_compilation_loan_compilation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loan-compilation/loan-compilation.component */ "./src/app/pages/report/operations/loan-compilation/loan-compilation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _portfolio_segmentation_portfolio_segmentation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portfolio-segmentation/portfolio-segmentation.component */ "./src/app/pages/report/operations/portfolio-segmentation/portfolio-segmentation.component.ts");
/* harmony import */ var _portfolio_at_risk_portfolio_at_risk_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portfolio-at-risk/portfolio-at-risk.component */ "./src/app/pages/report/operations/portfolio-at-risk/portfolio-at-risk.component.ts");
/* harmony import */ var _risk_flagging_risk_flagging_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./risk-flagging/risk-flagging.component */ "./src/app/pages/report/operations/risk-flagging/risk-flagging.component.ts");
/* harmony import */ var _portfolio_status_portfolio_status_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./portfolio-status/portfolio-status.component */ "./src/app/pages/report/operations/portfolio-status/portfolio-status.component.ts");
/* harmony import */ var _rate_of_renewal_rate_of_renewal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rate-of-renewal/rate-of-renewal.component */ "./src/app/pages/report/operations/rate-of-renewal/rate-of-renewal.component.ts");
/* harmony import */ var _AuthGuard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../AuthGuard.service */ "./src/app/pages/report/AuthGuard.service.ts");
/* harmony import */ var _monthly_status_monthly_status_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./monthly-status/monthly-status.component */ "./src/app/pages/report/operations/monthly-status/monthly-status.component.ts");
/* harmony import */ var _loan_utilization_loan_utilization_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./loan-utilization/loan-utilization.component */ "./src/app/pages/report/operations/loan-utilization/loan-utilization.component.ts");
/* harmony import */ var _portfolio_at_risk_time_portfolio_at_risk_time_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./portfolio-at-risk-time/portfolio-at-risk-time.component */ "./src/app/pages/report/operations/portfolio-at-risk-time/portfolio-at-risk-time.component.ts");
/* harmony import */ var _female_participation_ratio_female_participation_ratio_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./female-participation-ratio/female-participation-ratio.component */ "./src/app/pages/report/operations/female-participation-ratio/female-participation-ratio.component.ts");
/* harmony import */ var _branch_target_managment_branch_target_managment_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./branch-target-managment/branch-target-managment.component */ "./src/app/pages/report/operations/branch-target-managment/branch-target-managment.component.ts");
/* harmony import */ var _portfolio_status_duration_portfolio_status_duration_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./portfolio-status-duration/portfolio-status-duration.component */ "./src/app/pages/report/operations/portfolio-status-duration/portfolio-status-duration.component.ts");
/* harmony import */ var _attendance_monitoring_attendance_monitoring_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./attendance-monitoring/attendance-monitoring.component */ "./src/app/pages/report/operations/attendance-monitoring/attendance-monitoring.component.ts");
/* harmony import */ var _agencies_target_tracking_report_agencies_target_tracking_report_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./agencies-target-tracking-report/agencies-target-tracking-report.component */ "./src/app/pages/report/operations/agencies-target-tracking-report/agencies-target-tracking-report.component.ts");
/* harmony import */ var _sales2_pending_report_sales2_pending_report_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sales2-pending-report/sales2-pending-report.component */ "./src/app/pages/report/operations/sales2-pending-report/sales2-pending-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var routes = [
    { path: 'dues-report', component: _dues_reports_dues_reports_component__WEBPACK_IMPORTED_MODULE_2__["DuesReportsComponent"] },
    { path: 'consolidated-loans', component: _consolidated_loans_consolidated_loans_component__WEBPACK_IMPORTED_MODULE_3__["ConsolidatedLoansComponent"] },
    { path: 'loan-compilation', component: _loan_compilation_loan_compilation_component__WEBPACK_IMPORTED_MODULE_4__["LoanCompilationComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'op-portfolio-segmentation', component: _portfolio_segmentation_portfolio_segmentation_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioSegmentationComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'op-portfolio-at-risk', component: _portfolio_at_risk_portfolio_at_risk_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioAtRiskComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'app-risk-flagging', component: _risk_flagging_risk_flagging_component__WEBPACK_IMPORTED_MODULE_11__["RiskFlaggingComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'op-portfolio-status', component: _portfolio_status_portfolio_status_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioStatusComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'rate-of-renewal', component: _rate_of_renewal_rate_of_renewal_component__WEBPACK_IMPORTED_MODULE_13__["RateOfRenewalComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'monthly-status', component: _monthly_status_monthly_status_component__WEBPACK_IMPORTED_MODULE_15__["MonthlyStatusComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'loan-utlization', component: _loan_utilization_loan_utilization_component__WEBPACK_IMPORTED_MODULE_16__["LoanUtilizationComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'opp-portfolio-at-risk-time-series', component: _portfolio_at_risk_time_portfolio_at_risk_time_component__WEBPACK_IMPORTED_MODULE_17__["PortfolioAtRiskTimeComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'op-female-participation-ratio', component: _female_participation_ratio_female_participation_ratio_component__WEBPACK_IMPORTED_MODULE_18__["FemaleParticipationRatioComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'branch-target-managment', component: _branch_target_managment_branch_target_managment_component__WEBPACK_IMPORTED_MODULE_19__["BranchTargetManagmentComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'oop-portfolio-status-duration', component: _portfolio_status_duration_portfolio_status_duration_component__WEBPACK_IMPORTED_MODULE_20__["PortfolioStatusDurationComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'attendance-monitoring', component: _attendance_monitoring_attendance_monitoring_component__WEBPACK_IMPORTED_MODULE_21__["AttendanceMonitoringComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'agencies-target-tracking', component: _agencies_target_tracking_report_agencies_target_tracking_report_component__WEBPACK_IMPORTED_MODULE_22__["AgenciesTargetTrackingReportComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'sales-2-pending', component: _sales2_pending_report_sales2_pending_report_component__WEBPACK_IMPORTED_MODULE_23__["Sales2PendingReportComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] }
];
var OperationsModule = /** @class */ (function () {
    function OperationsModule() {
    }
    OperationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            ],
            declarations: [_dues_reports_dues_reports_component__WEBPACK_IMPORTED_MODULE_2__["DuesReportsComponent"], _consolidated_loans_consolidated_loans_component__WEBPACK_IMPORTED_MODULE_3__["ConsolidatedLoansComponent"], _loan_compilation_loan_compilation_component__WEBPACK_IMPORTED_MODULE_4__["LoanCompilationComponent"], _portfolio_segmentation_portfolio_segmentation_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioSegmentationComponent"], _portfolio_at_risk_portfolio_at_risk_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioAtRiskComponent"], _risk_flagging_risk_flagging_component__WEBPACK_IMPORTED_MODULE_11__["RiskFlaggingComponent"], _portfolio_status_portfolio_status_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioStatusComponent"], _rate_of_renewal_rate_of_renewal_component__WEBPACK_IMPORTED_MODULE_13__["RateOfRenewalComponent"], _monthly_status_monthly_status_component__WEBPACK_IMPORTED_MODULE_15__["MonthlyStatusComponent"], _loan_utilization_loan_utilization_component__WEBPACK_IMPORTED_MODULE_16__["LoanUtilizationComponent"], _portfolio_at_risk_time_portfolio_at_risk_time_component__WEBPACK_IMPORTED_MODULE_17__["PortfolioAtRiskTimeComponent"], _female_participation_ratio_female_participation_ratio_component__WEBPACK_IMPORTED_MODULE_18__["FemaleParticipationRatioComponent"], _branch_target_managment_branch_target_managment_component__WEBPACK_IMPORTED_MODULE_19__["BranchTargetManagmentComponent"], _portfolio_status_duration_portfolio_status_duration_component__WEBPACK_IMPORTED_MODULE_20__["PortfolioStatusDurationComponent"], _attendance_monitoring_attendance_monitoring_component__WEBPACK_IMPORTED_MODULE_21__["AttendanceMonitoringComponent"], _agencies_target_tracking_report_agencies_target_tracking_report_component__WEBPACK_IMPORTED_MODULE_22__["AgenciesTargetTrackingReportComponent"], _sales2_pending_report_sales2_pending_report_component__WEBPACK_IMPORTED_MODULE_23__["Sales2PendingReportComponent"]],
            providers: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]]
        })
    ], OperationsModule);
    return OperationsModule;
}());



/***/ }),

/***/ "./src/app/pages/report/operations/portfolio-at-risk-time/portfolio-at-risk-time.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/portfolio-at-risk-time/portfolio-at-risk-time.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-month-picker .mat-calendar-period-button {\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .example-month-picker .mat-calendar-arrow {\r\n    display: none;\r\n  }"

/***/ }),

/***/ "./src/app/pages/report/operations/portfolio-at-risk-time/portfolio-at-risk-time.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/portfolio-at-risk-time/portfolio-at-risk-time.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"content\">\r\n    <div class=\"mysearchbox\">\r\n      <h6 class=\"d-inline-block searchshow\">Portfolio At Risk Time Series </h6>\r\n      <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n        <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\" title=\"Type in a name\">\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div [formGroup]=\"ngForm\" (ngSubmit)=\"portfolioStatusReport()\"> -->\r\n    <form [formGroup]=\"ngForm\" (ngSubmit)=\"onSubmitPortfolioAtRiskTimeSeries()\">\r\n      <div class=\"row clearfix\">\r\n        <div class=\"col-sm-12\">\r\n          <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"brnchSeq\" readonly />\r\n\r\n          <div class=\"cRow\">\r\n\r\n            <!--------------- REGIONS DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledRegion\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am' && auth.role != 'rm'\"\r\n                (change)=\"getArea($event)\" [items]=\"allRegions\" bindLabel=\"regNm\" bindValue=\"regSeq\" name=\"regNm\"\r\n                placeholder=\"Select Region:\" formControlName=\"regSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n\r\n            <!--------------- AREA DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledArea\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am'\"\r\n                (change)=\"getBranch($event)\" [items]=\"allAreas\" bindLabel=\"areaNm\" bindValue=\"areaSeq\" name=\"areaNm\"\r\n                placeholder=\"Select Area:\" formControlName=\"areaSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <!--------------- BRANCH DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledBranch\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"allBranches\" bindLabel=\"brnchNm\"\r\n                bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"brnchSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div>\r\n\r\n              <mat-form-field>\r\n                <input matInput required [formControl]=\"frmDt\" [max]=\"maxDate\" placeholder=\"As Month:\"\r\n                  [matDatepicker]=\"picker1\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\" startView=\"multi-year\"\r\n                  (yearSelected)=\"chosenYearHandler($event)\" (monthSelected)=\"chosenMonthHandler($event, picker1)\"\r\n                  panelClass=\"example-month-picker\"></mat-datepicker>\r\n              </mat-form-field>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"buttons mt-3\">\r\n            <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary btn-min mr-3\">Print</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/operations/portfolio-at-risk-time/portfolio-at-risk-time.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/portfolio-at-risk-time/portfolio-at-risk-time.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: MY_FORMATS, PortfolioAtRiskTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioAtRiskTimeComponent", function() { return PortfolioAtRiskTimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/operations-reports.service */ "./src/app/shared/services/operations-reports.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");
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
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
var PortfolioAtRiskTimeComponent = /** @class */ (function () {
    function PortfolioAtRiskTimeComponent(fb, toaster, transfersService, operationsReportsService, spinner, dataService) {
        this.fb = fb;
        this.toaster = toaster;
        this.transfersService = transfersService;
        this.operationsReportsService = operationsReportsService;
        this.spinner = spinner;
        this.dataService = dataService;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.disabledRegion = false;
        this.disabledArea = false;
        this.disabledBranch = false;
        this.frmDt = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moment(new Date(new Date().getFullYear(), new Date().getMonth(), 30)));
        this.maxDate = new Date();
    }
    PortfolioAtRiskTimeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.role == "admin") {
            this.disabledRegion = true;
            this.disabledArea = false;
            this.disabledBranch = false;
            this.ngForm = this.fb.group({
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                regSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                areaSeq: [''],
                brnchSeq: [''],
            });
        }
        else if (this.auth.role == "rm") {
            this.disabledRegion = false;
            this.disabledArea = true;
            this.disabledBranch = true;
            this.ngForm = this.fb.group({
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
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
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
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
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
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
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                regSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                areaSeq: [''],
                brnchSeq: [''],
            });
        }
        this.transfersService.getRegions().subscribe(function (data) {
            _this.allRegions = data;
        });
    };
    PortfolioAtRiskTimeComponent.prototype.returnFlag = function () {
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
    PortfolioAtRiskTimeComponent.prototype.returnFlagForAdmin = function () {
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
    PortfolioAtRiskTimeComponent.prototype.getArea = function () {
        var _this = this;
        this.allAreas = [];
        this.disabledArea = false;
        this.disabledBranch = false;
        this.dataService.getArea(this.ngForm.controls["regSeq"].value).subscribe(function (d) {
            _this.allAreas = d;
            _this.disabledArea = true;
        });
    };
    PortfolioAtRiskTimeComponent.prototype.getBranch = function () {
        var _this = this;
        this.allBranches = [];
        this.disabledBranch = false;
        this.dataService.getBranch(this.ngForm.controls["areaSeq"].value).subscribe(function (d) {
            _this.allBranches = d;
            _this.disabledBranch = true;
        });
    };
    PortfolioAtRiskTimeComponent.prototype.onSubmitPortfolioAtRiskTimeSeries = function () {
        // console.log(this.auth)
        // console.log(this.rptFlag);
        // this.spinner.show();
        // let dt = new Date(new DatePipe('en-US').transform(this.frmDt.value, 'yyyy-MM-dd'));
        // dt.setMonth(dt.getMonth() + 1);
        // dt.setDate(0);
        var _this = this;
        if (this.auth.role == "bm" || this.auth.role == "bdo" || this.auth.role == "rm" || this.auth.role == "am") {
            this.returnFlag();
        }
        else {
            this.returnFlagForAdmin();
        }
        this.spinner.show();
        var dt = new Date(new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US').transform(this.frmDt.value, 'yyyy-MM-dd'));
        console.log(dt);
        dt.setMonth(dt.getMonth() + 1);
        dt.setDate(0);
        var regSeq = this.ngForm.get('regSeq').value ? this.ngForm.get('regSeq').value : 0;
        var areaSeq = this.ngForm.get('areaSeq').value ? this.ngForm.get('areaSeq').value : 0;
        var brnchSeq = this.ngForm.get('brnchSeq').value ? this.ngForm.get('brnchSeq').value : 0;
        this.operationsReportsService.printPortfolioAtRiskTimeSerise(new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US').transform(dt, 'dd-MM-yyyy'), this.rpt_flg, areaSeq, regSeq, brnchSeq).subscribe(function (response) {
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
    PortfolioAtRiskTimeComponent.prototype.chosenYearHandler = function (normalizedYear) {
        var ctrlValue = this.frmDt.value;
        ctrlValue.year(normalizedYear.year());
        this.frmDt.setValue(ctrlValue);
    };
    PortfolioAtRiskTimeComponent.prototype.chosenMonthHandler = function (normalizedMonth, datepicker) {
        var ctrlValue = this.frmDt.value;
        ctrlValue.month(normalizedMonth.month());
        this.frmDt.setValue(ctrlValue);
        datepicker.close();
    };
    PortfolioAtRiskTimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio-at-risk-time',
            template: __webpack_require__(/*! ./portfolio-at-risk-time.component.html */ "./src/app/pages/report/operations/portfolio-at-risk-time/portfolio-at-risk-time.component.html"),
            styles: [__webpack_require__(/*! ./portfolio-at-risk-time.component.css */ "./src/app/pages/report/operations/portfolio-at-risk-time/portfolio-at-risk-time.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_1__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__["TransfersService"],
            src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_3__["OperationsReportsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]])
    ], PortfolioAtRiskTimeComponent);
    return PortfolioAtRiskTimeComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/operations/portfolio-at-risk/portfolio-at-risk.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/report/operations/portfolio-at-risk/portfolio-at-risk.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-month-picker .mat-calendar-period-button {\r\n  pointer-events: none;\r\n}\r\n\r\n.example-month-picker .mat-calendar-arrow {\r\n  display: none;\r\n}"

/***/ }),

/***/ "./src/app/pages/report/operations/portfolio-at-risk/portfolio-at-risk.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/report/operations/portfolio-at-risk/portfolio-at-risk.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"content\">\r\n    <div class=\"mysearchbox\">\r\n      <h6 class=\"d-inline-block searchshow\">Portfolio At Risk</h6>\r\n      <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n        <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\" title=\"Type in a name\">\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div [formGroup]=\"ngForm\" (ngSubmit)=\"portfolioStatusReport()\"> -->\r\n    <form [formGroup]=\"ngForm\" (ngSubmit)=\"portfolioAtRiskReport()\">\r\n      <div class=\"row clearfix\">\r\n        <div class=\"col-sm-12\">\r\n          <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"brnchSeq\" readonly />\r\n\r\n          <div class=\"cRow\">\r\n\r\n            <!--------------- REGIONS DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledRegion\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am' && auth.role != 'rm'\"\r\n                (change)=\"getArea($event)\" [items]=\"allRegions\" bindLabel=\"regNm\" bindValue=\"regSeq\" name=\"regNm\"\r\n                placeholder=\"Select Region:\" formControlName=\"regSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n\r\n            <!--------------- AREA DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledArea\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am'\"\r\n                (change)=\"getBranch($event)\" [items]=\"allAreas\" bindLabel=\"areaNm\" bindValue=\"areaSeq\" name=\"areaNm\"\r\n                placeholder=\"Select Area:\" formControlName=\"areaSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <!--------------- BRANCH DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledBranch\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"allBranches\" bindLabel=\"brnchNm\"\r\n                bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"brnchSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"As Month:\"\r\n                  [matDatepicker]=\"picker1\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\" startView=\"multi-year\"\r\n                  (yearSelected)=\"chosenYearHandler($event)\" (monthSelected)=\"chosenMonthHandler($event, picker1)\"\r\n                  panelClass=\"example-month-picker\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"buttons mt-3\">\r\n            <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary btn-min mr-3\">Print</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<!--------------------\r\n\r\n            <mat-form-field>\r\n              <input matInput required  formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"As Month:\"\r\n                [matDatepicker]=\"picker1\" disabled readonly />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n              <mat-datepicker required #picker1 disabled=\"false\" startView=\"multi-year\"\r\n                (yearSelected)=\"chosenYearHandler($event)\" (monthSelected)=\"chosenMonthHandler($event, picker1)\"\r\n                panelClass=\"example-month-picker\"></mat-datepicker>\r\n            </mat-form-field>\r\n\r\n-->"

/***/ }),

/***/ "./src/app/pages/report/operations/portfolio-at-risk/portfolio-at-risk.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/report/operations/portfolio-at-risk/portfolio-at-risk.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MY_FORMATS, PortfolioAtRiskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioAtRiskComponent", function() { return PortfolioAtRiskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/operations-reports.service */ "./src/app/shared/services/operations-reports.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");
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
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
var PortfolioAtRiskComponent = /** @class */ (function () {
    function PortfolioAtRiskComponent(fb, toaster, operationsReportsService, spinner, transfersService, dataService) {
        this.fb = fb;
        this.toaster = toaster;
        this.operationsReportsService = operationsReportsService;
        this.spinner = spinner;
        this.transfersService = transfersService;
        this.dataService = dataService;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.disabledRegion = false;
        this.disabledArea = false;
        this.disabledBranch = false;
        this.frmDt = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moment(new Date(new Date().getFullYear(), new Date().getMonth(), 30)));
        this.maxDate = new Date();
        this.ngForm = this.fb.group({
            frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    PortfolioAtRiskComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.role == "admin") {
            this.disabledRegion = true;
            this.disabledArea = false;
            this.disabledBranch = false;
            this.ngForm = this.fb.group({
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                regSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                areaSeq: [''],
                brnchSeq: [''],
            });
        }
        else if (this.auth.role == "rm") {
            this.disabledRegion = false;
            this.disabledArea = true;
            this.disabledBranch = true;
            this.ngForm = this.fb.group({
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
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
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
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
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
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
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                regSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                areaSeq: [''],
                brnchSeq: [''],
            });
        }
        this.transfersService.getRegions().subscribe(function (data) {
            _this.allRegions = data;
        });
    };
    PortfolioAtRiskComponent.prototype.returnFlag = function () {
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
    PortfolioAtRiskComponent.prototype.returnFlagForAdmin = function () {
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
    PortfolioAtRiskComponent.prototype.getArea = function () {
        var _this = this;
        this.allAreas = [];
        this.disabledArea = false;
        this.disabledBranch = false;
        this.dataService.getArea(this.ngForm.controls["regSeq"].value).subscribe(function (d) {
            _this.allAreas = d;
            _this.disabledArea = true;
        });
    };
    PortfolioAtRiskComponent.prototype.getBranch = function () {
        var _this = this;
        this.allBranches = [];
        this.disabledBranch = false;
        this.dataService.getBranch(this.ngForm.controls["areaSeq"].value).subscribe(function (d) {
            _this.allBranches = d;
            _this.disabledBranch = true;
        });
    };
    PortfolioAtRiskComponent.prototype.portfolioAtRiskReport = function () {
        var _this = this;
        if (this.auth.role == "bm" || this.auth.role == "bdo" || this.auth.role == "rm" || this.auth.role == "am") {
            this.returnFlag();
        }
        else {
            this.returnFlagForAdmin();
        }
        this.spinner.show();
        // const frmDt = new DatePipe('en-US').transform(this.frmDt.value, 'dd-MM-yyyy')
        var dt = new Date(new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'yyyy-MM-dd'));
        dt.setMonth(dt.getMonth() + 1);
        dt.setDate(0);
        var regSeq = this.ngForm.get('regSeq').value ? this.ngForm.get('regSeq').value : 0;
        var areaSeq = this.ngForm.get('areaSeq').value ? this.ngForm.get('areaSeq').value : 0;
        var brnchSeq = this.ngForm.get('brnchSeq').value ? this.ngForm.get('brnchSeq').value : 0;
        this.operationsReportsService.printPortfolioAtRiskReport(new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(dt, 'dd-MM-yyyy'), this.rpt_flg, areaSeq, regSeq, brnchSeq).subscribe(function (response) {
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
    PortfolioAtRiskComponent.prototype.chosenYearHandler = function (normalizedYear) {
        var ctrlValue = this.ngForm.get('toDt').value;
        ctrlValue.year(normalizedYear.year());
        this.frmDt.setValue(ctrlValue);
    };
    PortfolioAtRiskComponent.prototype.chosenMonthHandler = function (normalizedMonth, datepicker) {
        var ctrlValue = this.ngForm.get('toDt').value;
        ctrlValue.month(normalizedMonth.month());
        this.frmDt.setValue(ctrlValue);
        datepicker.close();
    };
    PortfolioAtRiskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio-at-risk',
            template: __webpack_require__(/*! ./portfolio-at-risk.component.html */ "./src/app/pages/report/operations/portfolio-at-risk/portfolio-at-risk.component.html"),
            styles: [__webpack_require__(/*! ./portfolio-at-risk.component.css */ "./src/app/pages/report/operations/portfolio-at-risk/portfolio-at-risk.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_5__["OperationsReportsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__["TransfersService"],
            src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]])
    ], PortfolioAtRiskComponent);
    return PortfolioAtRiskComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/operations/portfolio-segmentation/portfolio-segmentation.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/portfolio-segmentation/portfolio-segmentation.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/operations/portfolio-segmentation/portfolio-segmentation.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/portfolio-segmentation/portfolio-segmentation.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"content\">\r\n    <div class=\"cRow\">\r\n      <div class=\"mysearchbox\">\r\n        <h6 class=\"d-inline-block searchshow\">Portfolio Segmentation</h6>\r\n        <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n          <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\"\r\n            title=\"Type in a name\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"portfolioSegmentationReport()\">\r\n      <div class=\"row clearfix\">\r\n        <div class=\"col-sm-12\">\r\n          <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"brnchSeq\" readonly />\r\n\r\n          <div class=\"cRow\">\r\n\r\n            <!--------------- REGIONS DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledRegion\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am' && auth.role != 'rm'\"\r\n                (change)=\"getArea($event)\" [items]=\"allRegions\" bindLabel=\"regNm\" bindValue=\"regSeq\" name=\"regNm\"\r\n                placeholder=\"Select Region:\" formControlName=\"regSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n\r\n            <!--------------- AREA DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledArea\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am'\"\r\n                (change)=\"getBranch($event)\" [items]=\"allAreas\" bindLabel=\"areaNm\" bindValue=\"areaSeq\" name=\"areaNm\"\r\n                placeholder=\"Select Area:\" formControlName=\"areaSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <!--------------- BRANCH DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledBranch\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"allBranches\" bindLabel=\"brnchNm\"\r\n                bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"brnchSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <!------------- To Date Form---------------->\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                  [matDatepicker]=\"picker1\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <!-----------------  From Date Form               ----------------------->\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"toDt\" [min]=\"ngForm.controls['frmDt'].value\" [max]=\"maxDate\"\r\n                  placeholder=\"To Date:\" [matDatepicker]=\"picker2\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"buttons mt-3\">\r\n            <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary btn-min mr-3\">Print</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/operations/portfolio-segmentation/portfolio-segmentation.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/portfolio-segmentation/portfolio-segmentation.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: MY_FORMATS, PortfolioSegmentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioSegmentationComponent", function() { return PortfolioSegmentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/operations-reports.service */ "./src/app/shared/services/operations-reports.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var moment = moment__WEBPACK_IMPORTED_MODULE_10__;
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
var PortfolioSegmentationComponent = /** @class */ (function () {
    function PortfolioSegmentationComponent(fb, toaster, operationsReportsService, spinner, dataService, transfersService) {
        this.fb = fb;
        this.toaster = toaster;
        this.operationsReportsService = operationsReportsService;
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
    PortfolioSegmentationComponent.prototype.ngOnInit = function () {
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
    PortfolioSegmentationComponent.prototype.returnFlag = function () {
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
    PortfolioSegmentationComponent.prototype.returnFlagForAdmin = function () {
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
    PortfolioSegmentationComponent.prototype.getArea = function () {
        var _this = this;
        this.allAreas = [];
        this.disabledArea = false;
        this.disabledBranch = false;
        this.dataService.getArea(this.ngForm.controls["regSeq"].value).subscribe(function (d) {
            _this.allAreas = d;
            _this.disabledArea = true;
        });
    };
    PortfolioSegmentationComponent.prototype.getBranch = function () {
        var _this = this;
        this.allBranches = [];
        this.disabledBranch = false;
        this.dataService.getBranch(this.ngForm.controls["areaSeq"].value).subscribe(function (d) {
            _this.allBranches = d;
            _this.disabledBranch = true;
        });
    };
    PortfolioSegmentationComponent.prototype.portfolioSegmentationReport = function () {
        var _this = this;
        if (this.auth.role == "bm" || this.auth.role == "bdo" || this.auth.role == "rm" || this.auth.role == "am") {
            this.returnFlag();
        }
        else {
            this.returnFlagForAdmin();
        }
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        var regSeq = this.ngForm.get('regSeq').value ? this.ngForm.get('regSeq').value : 0;
        var areaSeq = this.ngForm.get('areaSeq').value ? this.ngForm.get('areaSeq').value : 0;
        var brnchSeq = this.ngForm.get('brnchSeq').value ? this.ngForm.get('brnchSeq').value : 0;
        this.operationsReportsService.printPortfolioSegmentation(toDt, frmDt, this.rpt_flg, areaSeq, regSeq, brnchSeq).subscribe(function (response) {
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
    PortfolioSegmentationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio-segmentation',
            template: __webpack_require__(/*! ./portfolio-segmentation.component.html */ "./src/app/pages/report/operations/portfolio-segmentation/portfolio-segmentation.component.html"),
            styles: [__webpack_require__(/*! ./portfolio-segmentation.component.css */ "./src/app/pages/report/operations/portfolio-segmentation/portfolio-segmentation.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_5__["OperationsReportsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__["TransfersService"]])
    ], PortfolioSegmentationComponent);
    return PortfolioSegmentationComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/operations/portfolio-status-duration/portfolio-status-duration.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/portfolio-status-duration/portfolio-status-duration.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/operations/portfolio-status-duration/portfolio-status-duration.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/portfolio-status-duration/portfolio-status-duration.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"content\">\r\n    <div class=\"cRow\">\r\n      <div class=\"mysearchbox\">\r\n        <h6 class=\"d-inline-block searchshow\">Portfolio Status Duration</h6>\r\n        <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n          <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\"\r\n            title=\"Type in a name\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"portfolioStatusDurationReport()\">\r\n      <div class=\"row clearfix\">\r\n        <div class=\"col-sm-12\">\r\n          <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"brnchSeq\" readonly />\r\n\r\n          <div class=\"cRow\">\r\n\r\n            <!--------------- REGIONS DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledRegion\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am' && auth.role != 'rm'\"\r\n                (change)=\"getArea($event)\" [items]=\"allRegions\" bindLabel=\"regNm\" bindValue=\"regSeq\" name=\"regNm\"\r\n                placeholder=\"Select Region:\" formControlName=\"regSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n\r\n            <!--------------- AREA DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledArea\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am'\"\r\n                (change)=\"getBranch($event)\" [items]=\"allAreas\" bindLabel=\"areaNm\" bindValue=\"areaSeq\" name=\"areaNm\"\r\n                placeholder=\"Select Area:\" formControlName=\"areaSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <!--------------- BRANCH DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledBranch\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"allBranches\" bindLabel=\"brnchNm\"\r\n                bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"brnchSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <!------------- To Date Form---------------->\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                  [matDatepicker]=\"picker1\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <!-----------------  From Date Form               ----------------------->\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"toDt\" [min]=\"ngForm.controls['frmDt'].value\" [max]=\"maxDate\"\r\n                  placeholder=\"To Date:\" [matDatepicker]=\"picker2\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"buttons mt-3\">\r\n            <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary btn-min mr-3\">Print</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/operations/portfolio-status-duration/portfolio-status-duration.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/portfolio-status-duration/portfolio-status-duration.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: PortfolioStatusDurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioStatusDurationComponent", function() { return PortfolioStatusDurationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/operations-reports.service */ "./src/app/shared/services/operations-reports.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _due_recovery_due_recovery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../due-recovery/due-recovery.component */ "./src/app/pages/report/due-recovery/due-recovery.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
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
var PortfolioStatusDurationComponent = /** @class */ (function () {
    function PortfolioStatusDurationComponent(fb, toaster, operationsReportsService, spinner, dataService, transfersService) {
        this.fb = fb;
        this.toaster = toaster;
        this.operationsReportsService = operationsReportsService;
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
    PortfolioStatusDurationComponent.prototype.ngOnInit = function () {
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
    PortfolioStatusDurationComponent.prototype.returnFlag = function () {
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
    PortfolioStatusDurationComponent.prototype.returnFlagForAdmin = function () {
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
    PortfolioStatusDurationComponent.prototype.getArea = function () {
        var _this = this;
        this.allAreas = [];
        this.disabledArea = false;
        this.disabledBranch = false;
        this.dataService.getArea(this.ngForm.controls["regSeq"].value).subscribe(function (d) {
            _this.allAreas = d;
            _this.disabledArea = true;
        });
    };
    PortfolioStatusDurationComponent.prototype.getBranch = function () {
        var _this = this;
        this.allBranches = [];
        this.disabledBranch = false;
        this.dataService.getBranch(this.ngForm.controls["areaSeq"].value).subscribe(function (d) {
            _this.allBranches = d;
            _this.disabledBranch = true;
        });
    };
    PortfolioStatusDurationComponent.prototype.portfolioStatusDurationReport = function () {
        var _this = this;
        if (this.auth.role == "bm" || this.auth.role == "bdo" || this.auth.role == "rm" || this.auth.role == "am") {
            this.returnFlag();
        }
        else {
            this.returnFlagForAdmin();
        }
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        var regSeq = this.ngForm.get('regSeq').value ? this.ngForm.get('regSeq').value : 0;
        var areaSeq = this.ngForm.get('areaSeq').value ? this.ngForm.get('areaSeq').value : 0;
        var brnchSeq = this.ngForm.get('brnchSeq').value ? this.ngForm.get('brnchSeq').value : 0;
        this.operationsReportsService.printportfolioStatusDuration(toDt, frmDt, this.rpt_flg, areaSeq, regSeq, brnchSeq).subscribe(function (response) {
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
    PortfolioStatusDurationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio-status-duration',
            template: __webpack_require__(/*! ./portfolio-status-duration.component.html */ "./src/app/pages/report/operations/portfolio-status-duration/portfolio-status-duration.component.html"),
            styles: [__webpack_require__(/*! ./portfolio-status-duration.component.css */ "./src/app/pages/report/operations/portfolio-status-duration/portfolio-status-duration.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"], useValue: _due_recovery_due_recovery_component__WEBPACK_IMPORTED_MODULE_7__["MY_FORMATS"] },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_2__["OperationsReportsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_11__["TransfersService"]])
    ], PortfolioStatusDurationComponent);
    return PortfolioStatusDurationComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/operations/portfolio-status/portfolio-status.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/report/operations/portfolio-status/portfolio-status.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/operations/portfolio-status/portfolio-status.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/report/operations/portfolio-status/portfolio-status.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"content\">\r\n    <div class=\"mysearchbox\">\r\n      <h6 class=\"d-inline-block searchshow\">Portfolio Status</h6>\r\n      <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n        <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\" title=\"Type in a name\">\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div [formGroup]=\"ngForm\" (ngSubmit)=\"portfolioStatusReport()\"> -->\r\n    <form [formGroup]=\"ngForm\" (ngSubmit)=\"portfolioStatusReport()\">\r\n      <div class=\"row clearfix\">\r\n        <div class=\"col-sm-12\">\r\n          <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"brnchSeq\" readonly />\r\n\r\n          <div class=\"cRow\">\r\n\r\n            <!--------------- REGIONS DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledRegion\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am' && auth.role != 'rm'\"\r\n                (change)=\"getArea($event)\" [items]=\"allRegions\" bindLabel=\"regNm\" bindValue=\"regSeq\" name=\"regNm\"\r\n                placeholder=\"Select Region:\" formControlName=\"regSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n\r\n            <!--------------- AREA DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledArea\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am'\"\r\n                (change)=\"getBranch($event)\" [items]=\"allAreas\" bindLabel=\"areaNm\" bindValue=\"areaSeq\" name=\"areaNm\"\r\n                placeholder=\"Select Area:\" formControlName=\"areaSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <!--------------- BRANCH DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledBranch\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"allBranches\" bindLabel=\"brnchNm\"\r\n                bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"brnchSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <!------------- To Date Form---------------->\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                  [matDatepicker]=\"picker1\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <!-----------------  From Date Form               ----------------------->\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"toDt\" [min]=\"ngForm.controls['frmDt'].value\" [max]=\"maxDate\"\r\n                  placeholder=\"To Date:\" [matDatepicker]=\"picker2\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"buttons mt-3\">\r\n            <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary btn-min mr-3\">Print</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/operations/portfolio-status/portfolio-status.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/report/operations/portfolio-status/portfolio-status.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MY_FORMATS, PortfolioStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioStatusComponent", function() { return PortfolioStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/operations-reports.service */ "./src/app/shared/services/operations-reports.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");
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
var PortfolioStatusComponent = /** @class */ (function () {
    function PortfolioStatusComponent(fb, toaster, operationsReportsService, spinner, dataService, transfersService) {
        this.fb = fb;
        this.toaster = toaster;
        this.operationsReportsService = operationsReportsService;
        this.spinner = spinner;
        this.dataService = dataService;
        this.transfersService = transfersService;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.disabledRegion = false;
        this.disabledArea = false;
        this.disabledBranch = false;
        this.maxDate = new Date();
    }
    PortfolioStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.auth);
        if (this.auth.role == "admin") {
            this.disabledRegion = true;
            this.disabledArea = false;
            this.disabledBranch = false;
            this.ngForm = this.fb.group({
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                regSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                areaSeq: [''],
                brnchSeq: [''],
            });
        }
        else if (this.auth.role == "rm") {
            this.disabledRegion = false;
            this.disabledArea = true;
            this.disabledBranch = true;
            this.ngForm = this.fb.group({
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
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
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
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
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
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
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                regSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                areaSeq: [''],
                brnchSeq: [''],
            });
        }
        this.transfersService.getRegions().subscribe(function (data) {
            _this.allRegions = data;
        });
    };
    PortfolioStatusComponent.prototype.returnFlag = function () {
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
    PortfolioStatusComponent.prototype.returnFlagForAdmin = function () {
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
    PortfolioStatusComponent.prototype.getArea = function () {
        var _this = this;
        this.allAreas = [];
        this.disabledArea = false;
        this.disabledBranch = false;
        this.dataService.getArea(this.ngForm.controls["regSeq"].value).subscribe(function (d) {
            _this.allAreas = d;
            _this.disabledArea = true;
        });
    };
    PortfolioStatusComponent.prototype.getBranch = function () {
        var _this = this;
        this.allBranches = [];
        this.disabledBranch = false;
        this.dataService.getBranch(this.ngForm.controls["areaSeq"].value).subscribe(function (d) {
            _this.allBranches = d;
            _this.disabledBranch = true;
        });
    };
    PortfolioStatusComponent.prototype.portfolioStatusReport = function () {
        var _this = this;
        if (this.auth.role == "bm" || this.auth.role == "bdo" || this.auth.role == "rm" || this.auth.role == "am") {
            this.returnFlag();
        }
        else {
            this.returnFlagForAdmin();
        }
        console.log(this.auth);
        console.log(this.rpt_flg);
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        var regSeq = this.ngForm.get('regSeq').value ? this.ngForm.get('regSeq').value : 0;
        var areaSeq = this.ngForm.get('areaSeq').value ? this.ngForm.get('areaSeq').value : 0;
        var brnchSeq = this.ngForm.get('brnchSeq').value ? this.ngForm.get('brnchSeq').value : 0;
        this.operationsReportsService.printPortfolioStatus(toDt, frmDt, this.rpt_flg, areaSeq, regSeq, brnchSeq).subscribe(function (response) {
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
    PortfolioStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio-status',
            template: __webpack_require__(/*! ./portfolio-status.component.html */ "./src/app/pages/report/operations/portfolio-status/portfolio-status.component.html"),
            styles: [__webpack_require__(/*! ./portfolio-status.component.css */ "./src/app/pages/report/operations/portfolio-status/portfolio-status.component.css")],
            providers: [{ provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: MY_FORMATS }]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_2__["OperationsReportsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__["TransfersService"]])
    ], PortfolioStatusComponent);
    return PortfolioStatusComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/operations/rate-of-renewal/rate-of-renewal.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/report/operations/rate-of-renewal/rate-of-renewal.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-month-picker .mat-calendar-period-button {\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .example-month-picker .mat-calendar-arrow {\r\n    display: none;\r\n  }"

/***/ }),

/***/ "./src/app/pages/report/operations/rate-of-renewal/rate-of-renewal.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/report/operations/rate-of-renewal/rate-of-renewal.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"content\">\r\n    <div class=\"mysearchbox\">\r\n      <h6 class=\"d-inline-block searchshow\">Rate Of Renewal</h6>\r\n      <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n        <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\" title=\"Type in a name\">\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div [formGroup]=\"ngForm\" (ngSubmit)=\"portfolioStatusReport()\"> -->\r\n    <form [formGroup]=\"ngForm\" (ngSubmit)=\"rateOfRenewalReport()\">\r\n      <div class=\"row clearfix\">\r\n        <div class=\"col-sm-12\">\r\n          <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"brnchSeq\" readonly />\r\n\r\n          <div class=\"cRow\">\r\n\r\n            <!--------------- REGIONS DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledRegion\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am' && auth.role != 'rm'\"\r\n                (change)=\"getArea($event)\" [items]=\"allRegions\" bindLabel=\"regNm\" bindValue=\"regSeq\" name=\"regNm\"\r\n                placeholder=\"Select Region:\" formControlName=\"regSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n\r\n            <!--------------- AREA DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledArea\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am'\"\r\n                (change)=\"getBranch($event)\" [items]=\"allAreas\" bindLabel=\"areaNm\" bindValue=\"areaSeq\" name=\"areaNm\"\r\n                placeholder=\"Select Area:\" formControlName=\"areaSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <!--------------- BRANCH DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledBranch\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"allBranches\" bindLabel=\"brnchNm\"\r\n                bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"brnchSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"As Month:\"\r\n                  [matDatepicker]=\"picker1\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\" startView=\"multi-year\"\r\n                  (yearSelected)=\"chosenYearHandler($event)\" (monthSelected)=\"chosenMonthHandler($event, picker1)\"\r\n                  panelClass=\"example-month-picker\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"buttons mt-3\">\r\n            <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary btn-min mr-3\">Print</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<!--------------------\r\n\r\n            <mat-form-field>\r\n              <input matInput required  formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"As Month:\"\r\n                [matDatepicker]=\"picker1\" disabled readonly />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n              <mat-datepicker required #picker1 disabled=\"false\" startView=\"multi-year\"\r\n                (yearSelected)=\"chosenYearHandler($event)\" (monthSelected)=\"chosenMonthHandler($event, picker1)\"\r\n                panelClass=\"example-month-picker\"></mat-datepicker>\r\n            </mat-form-field>\r\n\r\n-->"

/***/ }),

/***/ "./src/app/pages/report/operations/rate-of-renewal/rate-of-renewal.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/report/operations/rate-of-renewal/rate-of-renewal.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MY_FORMATS, RateOfRenewalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateOfRenewalComponent", function() { return RateOfRenewalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/operations-reports.service */ "./src/app/shared/services/operations-reports.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");
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
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
var RateOfRenewalComponent = /** @class */ (function () {
    function RateOfRenewalComponent(fb, toaster, operationsReportsService, spinner, transfersService, dataService) {
        this.fb = fb;
        this.toaster = toaster;
        this.operationsReportsService = operationsReportsService;
        this.spinner = spinner;
        this.transfersService = transfersService;
        this.dataService = dataService;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.disabledRegion = false;
        this.disabledArea = false;
        this.disabledBranch = false;
        this.frmDt = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment(new Date(new Date().getFullYear(), new Date().getMonth(), 30)));
        this.maxDate = new Date();
        this.ngForm = this.fb.group({
            frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    RateOfRenewalComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.role == "admin") {
            this.disabledRegion = true;
            this.disabledArea = false;
            this.disabledBranch = false;
            this.ngForm = this.fb.group({
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                regSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                areaSeq: [''],
                brnchSeq: [''],
            });
        }
        else if (this.auth.role == "rm") {
            this.disabledRegion = false;
            this.disabledArea = true;
            this.disabledBranch = true;
            this.ngForm = this.fb.group({
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
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
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
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
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
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
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                regSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                areaSeq: [''],
                brnchSeq: [''],
            });
        }
        this.transfersService.getRegions().subscribe(function (data) {
            _this.allRegions = data;
        });
    };
    RateOfRenewalComponent.prototype.returnFlag = function () {
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
    RateOfRenewalComponent.prototype.returnFlagForAdmin = function () {
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
    RateOfRenewalComponent.prototype.getArea = function () {
        var _this = this;
        this.allAreas = [];
        this.disabledArea = false;
        this.disabledBranch = false;
        this.dataService.getArea(this.ngForm.controls["regSeq"].value).subscribe(function (d) {
            _this.allAreas = d;
            _this.disabledArea = true;
        });
    };
    RateOfRenewalComponent.prototype.getBranch = function () {
        var _this = this;
        this.allBranches = [];
        this.disabledBranch = false;
        this.dataService.getBranch(this.ngForm.controls["areaSeq"].value).subscribe(function (d) {
            _this.allBranches = d;
            _this.disabledBranch = true;
        });
    };
    RateOfRenewalComponent.prototype.rateOfRenewalReport = function () {
        var _this = this;
        if (this.auth.role == "bm" || this.auth.role == "bdo" || this.auth.role == "rm" || this.auth.role == "am") {
            this.returnFlag();
        }
        else {
            this.returnFlagForAdmin();
        }
        this.spinner.show();
        // const frmDt = new DatePipe('en-US').transform(this.frmDt.value, 'dd-MM-yyyy')
        var dt = new Date(new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'yyyy-MM-dd'));
        dt.setMonth(dt.getMonth() + 1);
        dt.setDate(0);
        var regSeq = this.ngForm.get('regSeq').value ? this.ngForm.get('regSeq').value : 0;
        var areaSeq = this.ngForm.get('areaSeq').value ? this.ngForm.get('areaSeq').value : 0;
        var brnchSeq = this.ngForm.get('brnchSeq').value ? this.ngForm.get('brnchSeq').value : 0;
        this.operationsReportsService.printRateOfRenewalReport(new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(dt, 'dd-MM-yyyy'), this.rpt_flg, areaSeq, regSeq, brnchSeq).subscribe(function (response) {
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
    RateOfRenewalComponent.prototype.chosenYearHandler = function (normalizedYear) {
        var ctrlValue = this.ngForm.get('toDt').value;
        ctrlValue.year(normalizedYear.year());
        this.frmDt.setValue(ctrlValue);
    };
    RateOfRenewalComponent.prototype.chosenMonthHandler = function (normalizedMonth, datepicker) {
        var ctrlValue = this.ngForm.get('toDt').value;
        ctrlValue.month(normalizedMonth.month());
        this.frmDt.setValue(ctrlValue);
        datepicker.close();
    };
    RateOfRenewalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rate-of-renewal',
            template: __webpack_require__(/*! ./rate-of-renewal.component.html */ "./src/app/pages/report/operations/rate-of-renewal/rate-of-renewal.component.html"),
            styles: [__webpack_require__(/*! ./rate-of-renewal.component.css */ "./src/app/pages/report/operations/rate-of-renewal/rate-of-renewal.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_2__["OperationsReportsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__["TransfersService"],
            src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]])
    ], RateOfRenewalComponent);
    return RateOfRenewalComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/operations/risk-flagging/risk-flagging.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/report/operations/risk-flagging/risk-flagging.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/operations/risk-flagging/risk-flagging.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/report/operations/risk-flagging/risk-flagging.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"content\">\r\n    <div class=\"cRow\">\r\n      <div class=\"mysearchbox\">\r\n        <h6 class=\"d-inline-block searchshow\">Risk Flagging</h6>\r\n        <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n          <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\"\r\n            title=\"Type in a name\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"dueReport()\">\r\n      <div class=\"row clearfix\">\r\n        <div class=\"col-sm-12\">\r\n          <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"brnchSeq\" readonly />\r\n\r\n          <div class=\"cRow\">\r\n\r\n            <!--------------- REGIONS DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledRegion\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am' && auth.role != 'rm'\"\r\n                (change)=\"getArea($event)\" [items]=\"allRegions\" bindLabel=\"regNm\" bindValue=\"regSeq\" name=\"regNm\"\r\n                placeholder=\"Select Region:\" formControlName=\"regSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n\r\n            <!--------------- AREA DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledArea\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am'\"\r\n                (change)=\"getBranch($event)\" [items]=\"allAreas\" bindLabel=\"areaNm\" bindValue=\"areaSeq\" name=\"areaNm\"\r\n                placeholder=\"Select Area:\" formControlName=\"areaSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <!--------------- BRANCH DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledBranch\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"allBranches\" bindLabel=\"brnchNm\"\r\n                bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"brnchSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <!------------- To Date Form---------------->\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                  [matDatepicker]=\"picker1\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <!-----------------  From Date Form               ----------------------->\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"toDt\" [min]=\"ngForm.controls['frmDt'].value\" [max]=\"maxDate\"\r\n                  placeholder=\"To Date:\" [matDatepicker]=\"picker2\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"buttons mt-3\">\r\n            <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary btn-min mr-3\">Print</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/operations/risk-flagging/risk-flagging.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/report/operations/risk-flagging/risk-flagging.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MY_FORMATS, RiskFlaggingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskFlaggingComponent", function() { return RiskFlaggingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/operations-reports.service */ "./src/app/shared/services/operations-reports.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");
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
var RiskFlaggingComponent = /** @class */ (function () {
    function RiskFlaggingComponent(fb, toaster, operationsReportsService, spinner, dataService, transfersService) {
        this.fb = fb;
        this.toaster = toaster;
        this.operationsReportsService = operationsReportsService;
        this.spinner = spinner;
        this.dataService = dataService;
        this.transfersService = transfersService;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.disabledRegion = false;
        this.disabledArea = false;
        this.disabledBranch = false;
        this.maxDate = new Date();
    }
    RiskFlaggingComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.auth);
        if (this.auth.role == "admin") {
            this.disabledRegion = true;
            this.disabledArea = false;
            this.disabledBranch = false;
            this.ngForm = this.fb.group({
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                regSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                areaSeq: [''],
                brnchSeq: [''],
            });
        }
        else if (this.auth.role == "rm") {
            this.disabledRegion = false;
            this.disabledArea = true;
            this.disabledBranch = true;
            this.ngForm = this.fb.group({
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
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
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
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
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
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
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                frmDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                regSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                areaSeq: [''],
                brnchSeq: [''],
            });
        }
        this.transfersService.getRegions().subscribe(function (data) {
            _this.allRegions = data;
        });
    };
    RiskFlaggingComponent.prototype.returnFlag = function () {
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
    RiskFlaggingComponent.prototype.returnFlagForAdmin = function () {
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
    RiskFlaggingComponent.prototype.getArea = function () {
        var _this = this;
        this.allAreas = [];
        this.disabledArea = false;
        this.disabledBranch = false;
        this.dataService.getArea(this.ngForm.controls["regSeq"].value).subscribe(function (d) {
            _this.allAreas = d;
            _this.disabledArea = true;
        });
    };
    RiskFlaggingComponent.prototype.getBranch = function () {
        var _this = this;
        this.allBranches = [];
        this.disabledBranch = false;
        this.dataService.getBranch(this.ngForm.controls["areaSeq"].value).subscribe(function (d) {
            _this.allBranches = d;
            _this.disabledBranch = true;
        });
    };
    RiskFlaggingComponent.prototype.dueReport = function () {
        var _this = this;
        if (this.auth.role == "bm" || this.auth.role == "bdo" || this.auth.role == "rm" || this.auth.role == "am") {
            this.returnFlag();
        }
        else {
            this.returnFlagForAdmin();
        }
        console.log(this.auth);
        console.log(this.rpt_flg);
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        var regSeq = this.ngForm.get('regSeq').value ? this.ngForm.get('regSeq').value : 0;
        var areaSeq = this.ngForm.get('areaSeq').value ? this.ngForm.get('areaSeq').value : 0;
        var brnchSeq = this.ngForm.get('brnchSeq').value ? this.ngForm.get('brnchSeq').value : 0;
        this.operationsReportsService.printRiskFlagging(toDt, frmDt, this.rpt_flg, areaSeq, regSeq, brnchSeq).subscribe(function (response) {
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
    RiskFlaggingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-risk-flagging',
            template: __webpack_require__(/*! ./risk-flagging.component.html */ "./src/app/pages/report/operations/risk-flagging/risk-flagging.component.html"),
            styles: [__webpack_require__(/*! ./risk-flagging.component.css */ "./src/app/pages/report/operations/risk-flagging/risk-flagging.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_2__["OperationsReportsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_10__["TransfersService"]])
    ], RiskFlaggingComponent);
    return RiskFlaggingComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/operations/sales2-pending-report/sales2-pending-report.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/sales2-pending-report/sales2-pending-report.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/operations/sales2-pending-report/sales2-pending-report.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/sales2-pending-report/sales2-pending-report.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\">\r\n  <div class=\"content\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6\">\r\n        <div class=\"mysearchbox\">\r\n          <h6 class=\"d-inline-block searchshow\">Sales 2 Pending</h6>\r\n          <div class=\"mysearch\">\r\n            <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n            <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n              title=\"Type in a name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"printSales2PendingReport()\">\r\n        <div class=\"cRow\">\r\n          <div class=\"cCol5\">\r\n\r\n            <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"branch\" readonly />\r\n\r\n            <!-- <mat-form-field *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\">\r\n                      <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                        <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                          {{b.brnchNm}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field> -->\r\n\r\n            <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required bindLabel=\"brnchNm\"\r\n              bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"branch\">\r\n            </ng-select>\r\n\r\n\r\n            <mat-form-field>\r\n              <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                [matDatepicker]=\"picker1\" disabled readonly />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n              <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                [matDatepicker]=\"toDt\" disabled readonly />\r\n              <mat-datepicker-toggle matSuffix [for]=\"toDt\"></mat-datepicker-toggle>\r\n              <mat-datepicker required #toDt disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/operations/sales2-pending-report/sales2-pending-report.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/report/operations/sales2-pending-report/sales2-pending-report.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: MY_FORMATS, Sales2PendingReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sales2PendingReportComponent", function() { return Sales2PendingReportComponent; });
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
/* harmony import */ var src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/operations-reports.service */ "./src/app/shared/services/operations-reports.service.ts");
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
var Sales2PendingReportComponent = /** @class */ (function () {
    function Sales2PendingReportComponent(fb, toaster, reportsService, transfersService, spinner, operationsReportsService) {
        var _this = this;
        this.fb = fb;
        this.toaster = toaster;
        this.reportsService = reportsService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.operationsReportsService = operationsReportsService;
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
    Sales2PendingReportComponent.prototype.ngOnInit = function () {
    };
    Sales2PendingReportComponent.prototype.printSales2PendingReport = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MMM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MMM-yyyy');
        var branch = this.ngForm.get('branch').value;
        var userId = this.auth.role;
        this.operationsReportsService.printSales2Pending(frmDt, toDt, branch).subscribe(function (response) {
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
    Sales2PendingReportComponent.prototype.chosenYearHandler = function (normalizedYear, name) {
        var ctrlValue = this.date.value;
        console.log(ctrlValue);
        console.log(normalizedYear);
        ctrlValue.year(normalizedYear.year());
        var d = this.ngForm.controls[name].value;
        d.value.year(normalizedYear.year());
        this.ngForm.controls[name].setValue(d);
        this.date.setValue(ctrlValue);
    };
    Sales2PendingReportComponent.prototype.chosenMonthHandler = function (normlizedMonth, datepicker, name) {
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
    Sales2PendingReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales2-pending-report',
            template: __webpack_require__(/*! ./sales2-pending-report.component.html */ "./src/app/pages/report/operations/sales2-pending-report/sales2-pending-report.component.html"),
            styles: [__webpack_require__(/*! ./sales2-pending-report.component.css */ "./src/app/pages/report/operations/sales2-pending-report/sales2-pending-report.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_7__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_10__["OperationsReportsService"]])
    ], Sales2PendingReportComponent);
    return Sales2PendingReportComponent;
}());



/***/ })

}]);
//# sourceMappingURL=operations-operations-module.js.map