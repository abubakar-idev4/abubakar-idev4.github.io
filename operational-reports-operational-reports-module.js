(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["operational-reports-operational-reports-module"],{

/***/ "./src/app/pages/report/operational-reports/advance-client-report/advance-client-report.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/report/operational-reports/advance-client-report/advance-client-report.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/operational-reports/advance-client-report/advance-client-report.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/report/operational-reports/advance-client-report/advance-client-report.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"content\">\r\n    <div class=\"cRow\">\r\n      <div class=\"mysearchbox\">\r\n        <h6 class=\"d-inline-block searchshow\">Advance Client Report</h6>\r\n        <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n          <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\"\r\n            title=\"Type in a name\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"submitAdvanceClient()\">\r\n      <div class=\"row clearfix\">\r\n        <div class=\"col-sm-12\">\r\n          <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"brnchSeq\" readonly />\r\n\r\n          <div class=\"cRow\">\r\n\r\n            <!--------------- REGIONS DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledRegion\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am' && auth.role != 'rm'\"\r\n                (change)=\"getArea($event)\" [items]=\"allRegions\" bindLabel=\"regNm\" bindValue=\"regSeq\" name=\"regNm\"\r\n                placeholder=\"Select Region:\" formControlName=\"regSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n\r\n            <!--------------- AREA DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledArea\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am'\"\r\n                (change)=\"getBranch($event)\" [items]=\"allAreas\" bindLabel=\"areaNm\" bindValue=\"areaSeq\" name=\"areaNm\"\r\n                placeholder=\"Select Area:\" formControlName=\"areaSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <!--------------- BRANCH DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledBranch\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"allBranches\" bindLabel=\"brnchNm\"\r\n                bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"brnchSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <!------------- To Date Form---------------->\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                  [matDatepicker]=\"picker1\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <!-----------------  From Date Form               ----------------------->\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                  [matDatepicker]=\"picker2\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"buttons mt-3\">\r\n            <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary btn-min mr-3\">Print</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/operational-reports/advance-client-report/advance-client-report.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/report/operational-reports/advance-client-report/advance-client-report.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: MY_FORMATS, AdvanceClientReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceClientReportComponent", function() { return AdvanceClientReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/operations-reports.service */ "./src/app/shared/services/operations-reports.service.ts");
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
var AdvanceClientReportComponent = /** @class */ (function () {
    function AdvanceClientReportComponent(fb, toaster, operationService, spinner, dataService, transfersService) {
        this.fb = fb;
        this.toaster = toaster;
        this.operationService = operationService;
        this.spinner = spinner;
        this.dataService = dataService;
        this.transfersService = transfersService;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.disabledRegion = false;
        this.disabledArea = false;
        this.disabledBranch = false;
        this.maxDate = new Date();
    }
    AdvanceClientReportComponent.prototype.ngOnInit = function () {
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
    AdvanceClientReportComponent.prototype.returnFlag = function () {
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
    AdvanceClientReportComponent.prototype.returnFlagForAdmin = function () {
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
    AdvanceClientReportComponent.prototype.getArea = function () {
        var _this = this;
        this.allAreas = [];
        this.disabledArea = false;
        this.disabledBranch = false;
        this.dataService.getArea(this.ngForm.controls["regSeq"].value).subscribe(function (d) {
            _this.allAreas = d;
            _this.disabledArea = true;
        });
    };
    AdvanceClientReportComponent.prototype.getBranch = function () {
        var _this = this;
        this.allBranches = [];
        this.disabledBranch = false;
        this.dataService.getBranch(this.ngForm.controls["areaSeq"].value).subscribe(function (d) {
            _this.allBranches = d;
            _this.disabledBranch = true;
        });
    };
    AdvanceClientReportComponent.prototype.submitAdvanceClient = function () {
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
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        var regSeq = this.ngForm.get('regSeq').value ? this.ngForm.get('regSeq').value : 0;
        var areaSeq = this.ngForm.get('areaSeq').value ? this.ngForm.get('areaSeq').value : 0;
        var brnchSeq = this.ngForm.get('brnchSeq').value ? this.ngForm.get('brnchSeq').value : 0;
        this.operationService.printAdvanceClientReport(toDt, frmDt, this.rpt_flg, areaSeq, regSeq, brnchSeq).subscribe(function (response) {
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
    AdvanceClientReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advance-client-report',
            template: __webpack_require__(/*! ./advance-client-report.component.html */ "./src/app/pages/report/operational-reports/advance-client-report/advance-client-report.component.html"),
            styles: [__webpack_require__(/*! ./advance-client-report.component.css */ "./src/app/pages/report/operational-reports/advance-client-report/advance-client-report.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_8__["OperationsReportsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_10__["TransfersService"]])
    ], AdvanceClientReportComponent);
    return AdvanceClientReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/operational-reports/advance-maturity-report/advance-maturity-report.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/report/operational-reports/advance-maturity-report/advance-maturity-report.component.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/operational-reports/advance-maturity-report/advance-maturity-report.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/report/operational-reports/advance-maturity-report/advance-maturity-report.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"content\">\r\n    <div class=\"mysearchbox\">\r\n      <h6 class=\"d-inline-block searchshow\">Advance Maturity Report</h6>\r\n      <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n        <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\" title=\"Type in a name\">\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div [formGroup]=\"ngForm\" (ngSubmit)=\"portfolioStatusReport()\"> -->\r\n    <form [formGroup]=\"ngForm\" (ngSubmit)=\"submitAdvanceMaturity()\">\r\n      <div class=\"row clearfix\">\r\n        <div class=\"col-sm-12\">\r\n          <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"brnchSeq\" readonly />\r\n\r\n          <div class=\"cRow\">\r\n\r\n            <!--------------- REGIONS DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledRegion\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am' && auth.role != 'rm'\"\r\n                (change)=\"getArea($event)\" [items]=\"allRegions\" bindLabel=\"regNm\" bindValue=\"regSeq\" name=\"regNm\"\r\n                placeholder=\"Select Region:\" formControlName=\"regSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n\r\n            <!--------------- AREA DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledArea\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am'\"\r\n                (change)=\"getBranch($event)\" [items]=\"allAreas\" bindLabel=\"areaNm\" bindValue=\"areaSeq\" name=\"areaNm\"\r\n                placeholder=\"Select Area:\" formControlName=\"areaSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <!--------------- BRANCH DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledBranch\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"allBranches\" bindLabel=\"brnchNm\"\r\n                bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"brnchSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"As Of Date:\"\r\n                  [matDatepicker]=\"picker1\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"buttons mt-3\">\r\n            <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary btn-min mr-3\">Print</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/operational-reports/advance-maturity-report/advance-maturity-report.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/report/operational-reports/advance-maturity-report/advance-maturity-report.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: MY_FORMATS, AdvanceMaturityReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceMaturityReportComponent", function() { return AdvanceMaturityReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/operations-reports.service */ "./src/app/shared/services/operations-reports.service.ts");
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
var AdvanceMaturityReportComponent = /** @class */ (function () {
    function AdvanceMaturityReportComponent(fb, toaster, transfersService, operationService, spinner, dataService) {
        this.fb = fb;
        this.toaster = toaster;
        this.transfersService = transfersService;
        this.operationService = operationService;
        this.spinner = spinner;
        this.dataService = dataService;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.disabledRegion = false;
        this.disabledArea = false;
        this.disabledBranch = false;
        this.maxDate = new Date();
    }
    AdvanceMaturityReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.role == "admin") {
            this.disabledRegion = true;
            this.disabledArea = false;
            this.disabledBranch = false;
            this.ngForm = this.fb.group({
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
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
                regSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                areaSeq: [''],
                brnchSeq: [''],
            });
        }
        this.transfersService.getRegions().subscribe(function (data) {
            _this.allRegions = data;
        });
    };
    AdvanceMaturityReportComponent.prototype.returnFlag = function () {
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
    AdvanceMaturityReportComponent.prototype.returnFlagForAdmin = function () {
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
    AdvanceMaturityReportComponent.prototype.getArea = function () {
        var _this = this;
        this.allAreas = [];
        this.disabledArea = false;
        this.disabledBranch = false;
        this.dataService.getArea(this.ngForm.controls["regSeq"].value).subscribe(function (d) {
            _this.allAreas = d;
            _this.disabledArea = true;
        });
    };
    AdvanceMaturityReportComponent.prototype.getBranch = function () {
        var _this = this;
        this.allBranches = [];
        this.disabledBranch = false;
        this.dataService.getBranch(this.ngForm.controls["areaSeq"].value).subscribe(function (d) {
            _this.allBranches = d;
            _this.disabledBranch = true;
        });
    };
    AdvanceMaturityReportComponent.prototype.submitAdvanceMaturity = function () {
        var _this = this;
        if (this.auth.role == "bm" || this.auth.role == "bdo" || this.auth.role == "rm" || this.auth.role == "am") {
            this.returnFlag();
        }
        else {
            this.returnFlagForAdmin();
        }
        this.spinner.show();
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        var regSeq = this.ngForm.get('regSeq').value ? this.ngForm.get('regSeq').value : 0;
        var areaSeq = this.ngForm.get('areaSeq').value ? this.ngForm.get('areaSeq').value : 0;
        var brnchSeq = this.ngForm.get('brnchSeq').value ? this.ngForm.get('brnchSeq').value : 0;
        this.operationService.printAdvanceMaturityReport(toDt, this.rpt_flg, areaSeq, regSeq, brnchSeq).subscribe(function (response) {
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
    AdvanceMaturityReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advance-maturity-report',
            template: __webpack_require__(/*! ./advance-maturity-report.component.html */ "./src/app/pages/report/operational-reports/advance-maturity-report/advance-maturity-report.component.html"),
            styles: [__webpack_require__(/*! ./advance-maturity-report.component.css */ "./src/app/pages/report/operational-reports/advance-maturity-report/advance-maturity-report.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__["TransfersService"],
            src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_8__["OperationsReportsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]])
    ], AdvanceMaturityReportComponent);
    return AdvanceMaturityReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/operational-reports/advance-recovery-report-overall/advance-recovery-report-overall.component.css":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/report/operational-reports/advance-recovery-report-overall/advance-recovery-report-overall.component.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/operational-reports/advance-recovery-report-overall/advance-recovery-report-overall.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/pages/report/operational-reports/advance-recovery-report-overall/advance-recovery-report-overall.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"content\">\r\n    <div class=\"cRow\">\r\n      <div class=\"mysearchbox\">\r\n        <h6 class=\"d-inline-block searchshow\">Advance Recovery Report Overall</h6>\r\n        <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n          <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\"\r\n            title=\"Type in a name\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"submitAdvanceRecovery()\">\r\n      <div class=\"row clearfix\">\r\n        <div class=\"col-sm-12\">\r\n          <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"brnchSeq\" readonly />\r\n\r\n          <div class=\"cRow\">\r\n\r\n            <!--------------- REGIONS DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledRegion\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am' && auth.role != 'rm'\"\r\n                (change)=\"getArea($event)\" [items]=\"allRegions\" bindLabel=\"regNm\" bindValue=\"regSeq\" name=\"regNm\"\r\n                placeholder=\"Select Region:\" formControlName=\"regSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n\r\n            <!--------------- AREA DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledArea\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am'\"\r\n                (change)=\"getBranch($event)\" [items]=\"allAreas\" bindLabel=\"areaNm\" bindValue=\"areaSeq\" name=\"areaNm\"\r\n                placeholder=\"Select Area:\" formControlName=\"areaSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <!--------------- BRANCH DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledBranch\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"allBranches\" bindLabel=\"brnchNm\"\r\n                bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"brnchSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <!------------- To Date Form---------------->\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                  [matDatepicker]=\"picker1\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <!-----------------  From Date Form               ----------------------->\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"toDt\" [min]=\"ngForm.controls['frmDt'].value\" [max]=\"maxDate\"\r\n                  placeholder=\"To Date:\" [matDatepicker]=\"picker2\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"buttons mt-3\">\r\n            <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary btn-min mr-3\">Print</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/operational-reports/advance-recovery-report-overall/advance-recovery-report-overall.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/report/operational-reports/advance-recovery-report-overall/advance-recovery-report-overall.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: MY_FORMATS, AdvanceRecoveryReportOverallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceRecoveryReportOverallComponent", function() { return AdvanceRecoveryReportOverallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/operations-reports.service */ "./src/app/shared/services/operations-reports.service.ts");
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
var AdvanceRecoveryReportOverallComponent = /** @class */ (function () {
    function AdvanceRecoveryReportOverallComponent(fb, toaster, operationService, spinner, dataService, transfersService) {
        this.fb = fb;
        this.toaster = toaster;
        this.operationService = operationService;
        this.spinner = spinner;
        this.dataService = dataService;
        this.transfersService = transfersService;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.disabledRegion = false;
        this.disabledArea = false;
        this.disabledBranch = false;
        this.maxDate = new Date();
    }
    AdvanceRecoveryReportOverallComponent.prototype.ngOnInit = function () {
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
    AdvanceRecoveryReportOverallComponent.prototype.returnFlag = function () {
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
    AdvanceRecoveryReportOverallComponent.prototype.returnFlagForAdmin = function () {
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
    AdvanceRecoveryReportOverallComponent.prototype.getArea = function () {
        var _this = this;
        this.allAreas = [];
        this.disabledArea = false;
        this.disabledBranch = false;
        this.dataService.getArea(this.ngForm.controls["regSeq"].value).subscribe(function (d) {
            _this.allAreas = d;
            _this.disabledArea = true;
        });
    };
    AdvanceRecoveryReportOverallComponent.prototype.getBranch = function () {
        var _this = this;
        this.allBranches = [];
        this.disabledBranch = false;
        this.dataService.getBranch(this.ngForm.controls["areaSeq"].value).subscribe(function (d) {
            _this.allBranches = d;
            _this.disabledBranch = true;
        });
    };
    AdvanceRecoveryReportOverallComponent.prototype.submitAdvanceRecovery = function () {
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
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        var regSeq = this.ngForm.get('regSeq').value ? this.ngForm.get('regSeq').value : 0;
        var areaSeq = this.ngForm.get('areaSeq').value ? this.ngForm.get('areaSeq').value : 0;
        var brnchSeq = this.ngForm.get('brnchSeq').value ? this.ngForm.get('brnchSeq').value : 0;
        this.operationService.printAdvanceRecoveryOverallReport(toDt, frmDt, this.rpt_flg, areaSeq, regSeq, brnchSeq).subscribe(function (response) {
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
    AdvanceRecoveryReportOverallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advance-recovery-report-overall',
            template: __webpack_require__(/*! ./advance-recovery-report-overall.component.html */ "./src/app/pages/report/operational-reports/advance-recovery-report-overall/advance-recovery-report-overall.component.html"),
            styles: [__webpack_require__(/*! ./advance-recovery-report-overall.component.css */ "./src/app/pages/report/operational-reports/advance-recovery-report-overall/advance-recovery-report-overall.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_8__["OperationsReportsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_10__["TransfersService"]])
    ], AdvanceRecoveryReportOverallComponent);
    return AdvanceRecoveryReportOverallComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/operational-reports/area-disbursment-report/area-disbursment-report.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/report/operational-reports/area-disbursment-report/area-disbursment-report.component.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/operational-reports/area-disbursment-report/area-disbursment-report.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/report/operational-reports/area-disbursment-report/area-disbursment-report.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"content\">\r\n    <div class=\"mysearchbox\">\r\n      <h6 class=\"d-inline-block searchshow\">Area Disbursement Report</h6>\r\n      <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n        <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\" title=\"Type in a name\">\r\n      </div>\r\n    </div>\r\n\r\n    <form [formGroup]=\"ngForm\" (ngSubmit)=\"submitAreaDisbursement()\">\r\n      <div class=\"row clearfix\">\r\n        <div class=\"col-sm-12\">\r\n          <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"brnchSeq\" readonly />\r\n\r\n          <div class=\"cRow\">\r\n\r\n            <!--------------- REGIONS DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledRegion\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am' && auth.role != 'rm'\"\r\n                (change)=\"getArea($event)\" [items]=\"allRegions\" bindLabel=\"regNm\" bindValue=\"regSeq\" name=\"regNm\"\r\n                placeholder=\"Select Region:\" formControlName=\"regSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n\r\n            <!--------------- AREA DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledArea\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am'\"\r\n                (change)=\"getBranch($event)\" [items]=\"allAreas\" bindLabel=\"areaNm\" bindValue=\"areaSeq\" name=\"areaNm\"\r\n                placeholder=\"Select Area:\" formControlName=\"areaSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <!--------------- BRANCH DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledBranch\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"allBranches\" bindLabel=\"brnchNm\"\r\n                bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"brnchSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"As Of Date:\"\r\n                  [matDatepicker]=\"picker1\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"buttons mt-3\">\r\n            <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary btn-min mr-3\">Print</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/operational-reports/area-disbursment-report/area-disbursment-report.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/report/operational-reports/area-disbursment-report/area-disbursment-report.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: MY_FORMATS, AreaDisbursmentReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaDisbursmentReportComponent", function() { return AreaDisbursmentReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/operations-reports.service */ "./src/app/shared/services/operations-reports.service.ts");
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
var AreaDisbursmentReportComponent = /** @class */ (function () {
    function AreaDisbursmentReportComponent(fb, toaster, transfersService, operationService, spinner, dataService) {
        this.fb = fb;
        this.toaster = toaster;
        this.transfersService = transfersService;
        this.operationService = operationService;
        this.spinner = spinner;
        this.dataService = dataService;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.disabledRegion = false;
        this.disabledArea = false;
        this.disabledBranch = false;
        this.maxDate = new Date();
    }
    AreaDisbursmentReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.role == "admin") {
            this.disabledRegion = true;
            this.disabledArea = false;
            this.disabledBranch = false;
            this.ngForm = this.fb.group({
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
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
                regSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                areaSeq: [''],
                brnchSeq: [''],
            });
        }
        this.transfersService.getRegions().subscribe(function (data) {
            _this.allRegions = data;
        });
    };
    AreaDisbursmentReportComponent.prototype.returnFlag = function () {
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
    AreaDisbursmentReportComponent.prototype.returnFlagForAdmin = function () {
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
    AreaDisbursmentReportComponent.prototype.getArea = function () {
        var _this = this;
        this.allAreas = [];
        this.disabledArea = false;
        this.disabledBranch = false;
        this.dataService.getArea(this.ngForm.controls["regSeq"].value).subscribe(function (d) {
            _this.allAreas = d;
            _this.disabledArea = true;
        });
    };
    AreaDisbursmentReportComponent.prototype.getBranch = function () {
        var _this = this;
        this.allBranches = [];
        this.disabledBranch = false;
        this.dataService.getBranch(this.ngForm.controls["areaSeq"].value).subscribe(function (d) {
            _this.allBranches = d;
            _this.disabledBranch = true;
        });
    };
    AreaDisbursmentReportComponent.prototype.submitAreaDisbursement = function () {
        var _this = this;
        if (this.auth.role == "bm" || this.auth.role == "bdo" || this.auth.role == "rm" || this.auth.role == "am") {
            this.returnFlag();
        }
        else {
            this.returnFlagForAdmin();
        }
        this.spinner.show();
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        var regSeq = this.ngForm.get('regSeq').value ? this.ngForm.get('regSeq').value : 0;
        var areaSeq = this.ngForm.get('areaSeq').value ? this.ngForm.get('areaSeq').value : 0;
        var brnchSeq = this.ngForm.get('brnchSeq').value ? this.ngForm.get('brnchSeq').value : 0;
        this.operationService.printAreaDisbursementReport(toDt, this.rpt_flg, areaSeq, regSeq, brnchSeq).subscribe(function (response) {
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
    AreaDisbursmentReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-area-disbursment-report',
            template: __webpack_require__(/*! ./area-disbursment-report.component.html */ "./src/app/pages/report/operational-reports/area-disbursment-report/area-disbursment-report.component.html"),
            styles: [__webpack_require__(/*! ./area-disbursment-report.component.css */ "./src/app/pages/report/operational-reports/area-disbursment-report/area-disbursment-report.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__["TransfersService"],
            src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_8__["OperationsReportsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]])
    ], AreaDisbursmentReportComponent);
    return AreaDisbursmentReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/operational-reports/late-closing-report/late-closing-report.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/report/operational-reports/late-closing-report/late-closing-report.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/operational-reports/late-closing-report/late-closing-report.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/report/operational-reports/late-closing-report/late-closing-report.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"content\">\r\n    <div class=\"cRow\">\r\n      <div class=\"mysearchbox\">\r\n        <h6 class=\"d-inline-block searchshow\">Late Closing</h6>\r\n        <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n          <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\"\r\n            title=\"Type in a name\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"printLateClosingReport()\">\r\n      <div class=\"row clearfix\">\r\n        <div class=\"col-sm-12\">\r\n          <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"brnchSeq\" readonly />\r\n\r\n          <div class=\"cRow\">\r\n\r\n            <!--------------- REGIONS DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledRegion\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am' && auth.role != 'rm'\"\r\n                (change)=\"getArea($event)\" [items]=\"allRegions\" bindLabel=\"regNm\" bindValue=\"regSeq\" name=\"regNm\"\r\n                placeholder=\"Select Region:\" formControlName=\"regSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n\r\n            <!--------------- AREA DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledArea\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am'\"\r\n                (change)=\"getBranch($event)\" [items]=\"allAreas\" bindLabel=\"areaNm\" bindValue=\"areaSeq\" name=\"areaNm\"\r\n                placeholder=\"Select Area:\" formControlName=\"areaSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <!--------------- BRANCH DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledBranch\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"allBranches\" bindLabel=\"brnchNm\"\r\n                bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"brnchSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <!------------- To Date Form---------------->\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                  [matDatepicker]=\"picker1\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <!-----------------  From Date Form               ----------------------->\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"toDt\" [min]=\"ngForm.controls['frmDt'].value\" [max]=\"maxDate\"\r\n                  placeholder=\"To Date:\" [matDatepicker]=\"picker2\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"buttons mt-3\">\r\n            <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary btn-min mr-3\">Print</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/operational-reports/late-closing-report/late-closing-report.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/report/operational-reports/late-closing-report/late-closing-report.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: MY_FORMATS, LateClosingReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LateClosingReportComponent", function() { return LateClosingReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/operations-reports.service */ "./src/app/shared/services/operations-reports.service.ts");
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
var LateClosingReportComponent = /** @class */ (function () {
    function LateClosingReportComponent(fb, toaster, operationService, spinner, dataService, transfersService) {
        this.fb = fb;
        this.toaster = toaster;
        this.operationService = operationService;
        this.spinner = spinner;
        this.dataService = dataService;
        this.transfersService = transfersService;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.disabledRegion = false;
        this.disabledArea = false;
        this.disabledBranch = false;
        this.maxDate = new Date();
    }
    LateClosingReportComponent.prototype.ngOnInit = function () {
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
    LateClosingReportComponent.prototype.returnFlag = function () {
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
    LateClosingReportComponent.prototype.returnFlagForAdmin = function () {
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
    LateClosingReportComponent.prototype.getArea = function () {
        var _this = this;
        this.allAreas = [];
        this.disabledArea = false;
        this.disabledBranch = false;
        this.dataService.getArea(this.ngForm.controls["regSeq"].value).subscribe(function (d) {
            _this.allAreas = d;
            _this.disabledArea = true;
        });
    };
    LateClosingReportComponent.prototype.getBranch = function () {
        var _this = this;
        this.allBranches = [];
        this.disabledBranch = false;
        this.dataService.getBranch(this.ngForm.controls["areaSeq"].value).subscribe(function (d) {
            _this.allBranches = d;
            _this.disabledBranch = true;
        });
    };
    LateClosingReportComponent.prototype.printLateClosingReport = function () {
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
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        var regSeq = this.ngForm.get('regSeq').value ? this.ngForm.get('regSeq').value : 0;
        var areaSeq = this.ngForm.get('areaSeq').value ? this.ngForm.get('areaSeq').value : 0;
        var brnchSeq = this.ngForm.get('brnchSeq').value ? this.ngForm.get('brnchSeq').value : 0;
        this.operationService.printLateClosingReportForAllArea(toDt, frmDt, this.rpt_flg, areaSeq, regSeq, brnchSeq).subscribe(function (response) {
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
    LateClosingReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-late-closing-report',
            template: __webpack_require__(/*! ./late-closing-report.component.html */ "./src/app/pages/report/operational-reports/late-closing-report/late-closing-report.component.html"),
            styles: [__webpack_require__(/*! ./late-closing-report.component.css */ "./src/app/pages/report/operational-reports/late-closing-report/late-closing-report.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_8__["OperationsReportsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__["TransfersService"]])
    ], LateClosingReportComponent);
    return LateClosingReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/operational-reports/operational-reports.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/report/operational-reports/operational-reports.module.ts ***!
  \********************************************************************************/
/*! exports provided: routes, OperationalReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationalReportsModule", function() { return OperationalReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _advance_recovery_report_overall_advance_recovery_report_overall_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advance-recovery-report-overall/advance-recovery-report-overall.component */ "./src/app/pages/report/operational-reports/advance-recovery-report-overall/advance-recovery-report-overall.component.ts");
/* harmony import */ var _pending_loan_utilization_pending_loan_utilization_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pending-loan-utilization/pending-loan-utilization.component */ "./src/app/pages/report/operational-reports/pending-loan-utilization/pending-loan-utilization.component.ts");
/* harmony import */ var _late_closing_report_late_closing_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./late-closing-report/late-closing-report.component */ "./src/app/pages/report/operational-reports/late-closing-report/late-closing-report.component.ts");
/* harmony import */ var _advance_client_report_advance_client_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./advance-client-report/advance-client-report.component */ "./src/app/pages/report/operational-reports/advance-client-report/advance-client-report.component.ts");
/* harmony import */ var _advance_maturity_report_advance_maturity_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./advance-maturity-report/advance-maturity-report.component */ "./src/app/pages/report/operational-reports/advance-maturity-report/advance-maturity-report.component.ts");
/* harmony import */ var _weekly_target_report_weekly_target_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./weekly-target-report/weekly-target-report.component */ "./src/app/pages/report/operational-reports/weekly-target-report/weekly-target-report.component.ts");
/* harmony import */ var _area_disbursment_report_area_disbursment_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./area-disbursment-report/area-disbursment-report.component */ "./src/app/pages/report/operational-reports/area-disbursment-report/area-disbursment-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'advance-recovery-overall', component: _advance_recovery_report_overall_advance_recovery_report_overall_component__WEBPACK_IMPORTED_MODULE_6__["AdvanceRecoveryReportOverallComponent"] },
    { path: 'pending-loan-utilization', component: _pending_loan_utilization_pending_loan_utilization_component__WEBPACK_IMPORTED_MODULE_7__["PendingLoanUtilizationComponent"] },
    { path: 'late-closing', component: _late_closing_report_late_closing_report_component__WEBPACK_IMPORTED_MODULE_8__["LateClosingReportComponent"] },
    { path: 'advance-client-report', component: _advance_client_report_advance_client_report_component__WEBPACK_IMPORTED_MODULE_9__["AdvanceClientReportComponent"] },
    { path: 'advance-maturity-report', component: _advance_maturity_report_advance_maturity_report_component__WEBPACK_IMPORTED_MODULE_10__["AdvanceMaturityReportComponent"] },
    { path: 'weekly-target-report', component: _weekly_target_report_weekly_target_report_component__WEBPACK_IMPORTED_MODULE_11__["WeeklyTargetReportComponent"] },
    { path: 'area-disbursement-report', component: _area_disbursment_report_area_disbursment_report_component__WEBPACK_IMPORTED_MODULE_12__["AreaDisbursmentReportComponent"] },
];
var OperationalReportsModule = /** @class */ (function () {
    function OperationalReportsModule() {
    }
    OperationalReportsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            ],
            declarations: [_advance_recovery_report_overall_advance_recovery_report_overall_component__WEBPACK_IMPORTED_MODULE_6__["AdvanceRecoveryReportOverallComponent"], _pending_loan_utilization_pending_loan_utilization_component__WEBPACK_IMPORTED_MODULE_7__["PendingLoanUtilizationComponent"], _late_closing_report_late_closing_report_component__WEBPACK_IMPORTED_MODULE_8__["LateClosingReportComponent"], _advance_client_report_advance_client_report_component__WEBPACK_IMPORTED_MODULE_9__["AdvanceClientReportComponent"], _advance_maturity_report_advance_maturity_report_component__WEBPACK_IMPORTED_MODULE_10__["AdvanceMaturityReportComponent"], _weekly_target_report_weekly_target_report_component__WEBPACK_IMPORTED_MODULE_11__["WeeklyTargetReportComponent"], _area_disbursment_report_area_disbursment_report_component__WEBPACK_IMPORTED_MODULE_12__["AreaDisbursmentReportComponent"],]
        })
    ], OperationalReportsModule);
    return OperationalReportsModule;
}());



/***/ }),

/***/ "./src/app/pages/report/operational-reports/pending-loan-utilization/pending-loan-utilization.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/report/operational-reports/pending-loan-utilization/pending-loan-utilization.component.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/operational-reports/pending-loan-utilization/pending-loan-utilization.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/report/operational-reports/pending-loan-utilization/pending-loan-utilization.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\">\r\n    <div class=\"content mb-md-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"mysearchbox\">\r\n            <h6 class=\"d-inline-block searchshow\">Pending Loan Utilization <i class=\"fa fa-print\"> </i></h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <form [formGroup]=\"ngForm\" (ngSubmit)=\"printPendingLoanUtilization()\">\r\n          <div class=\"modal-body\">\r\n            <div class=\"cRow\">\r\n              <div class=\"cCol5\">\r\n  \r\n                <mat-form-field>\r\n                  <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                    [matDatepicker]=\"picker1\" disabled readonly />\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                  <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                  <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"To Date:\"\r\n                    [matDatepicker]=\"picker2\" disabled readonly />\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                  <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                </mat-form-field>\r\n  \r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer text-center\">\r\n            <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/pages/report/operational-reports/pending-loan-utilization/pending-loan-utilization.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/report/operational-reports/pending-loan-utilization/pending-loan-utilization.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: MY_FORMATS, PendingLoanUtilizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingLoanUtilizationComponent", function() { return PendingLoanUtilizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
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
var PendingLoanUtilizationComponent = /** @class */ (function () {
    function PendingLoanUtilizationComponent(fb, toaster, operationService, spinner) {
        this.fb = fb;
        this.toaster = toaster;
        this.operationService = operationService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.maxDate = new Date();
        this.ngForm = this.fb.group({
            frmDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            toDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    PendingLoanUtilizationComponent.prototype.ngOnInit = function () {
        this.returnFlag();
    };
    PendingLoanUtilizationComponent.prototype.returnFlag = function () {
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
    PendingLoanUtilizationComponent.prototype.printPendingLoanUtilization = function () {
        var _this = this;
        console.log(this.auth);
        console.log(this.rptFlag);
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MMM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MMM-yyyy');
        this.operationService.printPendingLoanUtilizationReport(frmDt, toDt, this.rptFlag).subscribe(function (response) {
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
    PendingLoanUtilizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pending-loan-utilization',
            template: __webpack_require__(/*! ./pending-loan-utilization.component.html */ "./src/app/pages/report/operational-reports/pending-loan-utilization/pending-loan-utilization.component.html"),
            styles: [__webpack_require__(/*! ./pending-loan-utilization.component.css */ "./src/app/pages/report/operational-reports/pending-loan-utilization/pending-loan-utilization.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_8__["OperationsReportsService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], PendingLoanUtilizationComponent);
    return PendingLoanUtilizationComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/operational-reports/weekly-target-report/weekly-target-report.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/report/operational-reports/weekly-target-report/weekly-target-report.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/operational-reports/weekly-target-report/weekly-target-report.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/report/operational-reports/weekly-target-report/weekly-target-report.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"content\">\r\n    <div class=\"mysearchbox\">\r\n      <h6 class=\"d-inline-block searchshow\">Weekly Target Report</h6>\r\n      <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n        <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\" title=\"Type in a name\">\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div [formGroup]=\"ngForm\" (ngSubmit)=\"portfolioStatusReport()\"> -->\r\n    <form [formGroup]=\"ngForm\" (ngSubmit)=\"submitWeeklyTarget()\">\r\n      <div class=\"row clearfix\">\r\n        <div class=\"col-sm-12\">\r\n          <input *ngIf=\"auth.role == 'bdo' || auth.role == 'bm'\" type=\"hidden\" formControlName=\"brnchSeq\" readonly />\r\n\r\n          <div class=\"cRow\">\r\n\r\n            <!--------------- REGIONS DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledRegion\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am' && auth.role != 'rm'\"\r\n                (change)=\"getArea($event)\" [items]=\"allRegions\" bindLabel=\"regNm\" bindValue=\"regSeq\" name=\"regNm\"\r\n                placeholder=\"Select Region:\" formControlName=\"regSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n\r\n            <!--------------- AREA DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledArea\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm' && auth.role !='am'\"\r\n                (change)=\"getBranch($event)\" [items]=\"allAreas\" bindLabel=\"areaNm\" bindValue=\"areaSeq\" name=\"areaNm\"\r\n                placeholder=\"Select Area:\" formControlName=\"areaSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <!--------------- BRANCH DROPDOWN---------->\r\n\r\n            <div *ngIf=\"disabledBranch\">\r\n              <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"allBranches\" bindLabel=\"brnchNm\"\r\n                bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"brnchSeq\">\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"toDt\" [max]=\"maxDate\" placeholder=\"As Of Date:\"\r\n                  [matDatepicker]=\"picker1\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"buttons mt-3\">\r\n            <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary btn-min mr-3\">Print</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/operational-reports/weekly-target-report/weekly-target-report.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/report/operational-reports/weekly-target-report/weekly-target-report.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: MY_FORMATS, WeeklyTargetReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyTargetReportComponent", function() { return WeeklyTargetReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/operations-reports.service */ "./src/app/shared/services/operations-reports.service.ts");
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
var WeeklyTargetReportComponent = /** @class */ (function () {
    function WeeklyTargetReportComponent(fb, toaster, transfersService, operationService, spinner, dataService) {
        this.fb = fb;
        this.toaster = toaster;
        this.transfersService = transfersService;
        this.operationService = operationService;
        this.spinner = spinner;
        this.dataService = dataService;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.disabledRegion = false;
        this.disabledArea = false;
        this.disabledBranch = false;
        this.maxDate = new Date();
    }
    WeeklyTargetReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.role == "admin") {
            this.disabledRegion = true;
            this.disabledArea = false;
            this.disabledBranch = false;
            this.ngForm = this.fb.group({
                toDt: [new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](moment()), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
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
                regSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                areaSeq: [''],
                brnchSeq: [''],
            });
        }
        this.transfersService.getRegions().subscribe(function (data) {
            _this.allRegions = data;
        });
    };
    WeeklyTargetReportComponent.prototype.returnFlag = function () {
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
    WeeklyTargetReportComponent.prototype.returnFlagForAdmin = function () {
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
    WeeklyTargetReportComponent.prototype.getArea = function () {
        var _this = this;
        this.allAreas = [];
        this.disabledArea = false;
        this.disabledBranch = false;
        this.dataService.getArea(this.ngForm.controls["regSeq"].value).subscribe(function (d) {
            _this.allAreas = d;
            _this.disabledArea = true;
        });
    };
    WeeklyTargetReportComponent.prototype.getBranch = function () {
        var _this = this;
        this.allBranches = [];
        this.disabledBranch = false;
        this.dataService.getBranch(this.ngForm.controls["areaSeq"].value).subscribe(function (d) {
            _this.allBranches = d;
            _this.disabledBranch = true;
        });
    };
    WeeklyTargetReportComponent.prototype.submitWeeklyTarget = function () {
        var _this = this;
        if (this.auth.role == "bm" || this.auth.role == "bdo" || this.auth.role == "rm" || this.auth.role == "am") {
            this.returnFlag();
        }
        else {
            this.returnFlagForAdmin();
        }
        this.spinner.show();
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        var regSeq = this.ngForm.get('regSeq').value ? this.ngForm.get('regSeq').value : 0;
        var areaSeq = this.ngForm.get('areaSeq').value ? this.ngForm.get('areaSeq').value : 0;
        var brnchSeq = this.ngForm.get('brnchSeq').value ? this.ngForm.get('brnchSeq').value : 0;
        this.operationService.printWeeklyTargetReport(toDt, this.rpt_flg, areaSeq, regSeq, brnchSeq).subscribe(function (response) {
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
    WeeklyTargetReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weekly-target-report',
            template: __webpack_require__(/*! ./weekly-target-report.component.html */ "./src/app/pages/report/operational-reports/weekly-target-report/weekly-target-report.component.html"),
            styles: [__webpack_require__(/*! ./weekly-target-report.component.css */ "./src/app/pages/report/operational-reports/weekly-target-report/weekly-target-report.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__["TransfersService"],
            src_app_shared_services_operations_reports_service__WEBPACK_IMPORTED_MODULE_8__["OperationsReportsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]])
    ], WeeklyTargetReportComponent);
    return WeeklyTargetReportComponent;
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
//# sourceMappingURL=operational-reports-operational-reports-module.js.map