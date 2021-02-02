(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finance-finance-module"],{

/***/ "./src/app/pages/report/finance/disbursment-report/disbursment-report.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/report/finance/disbursment-report/disbursment-report.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/finance/disbursment-report/disbursment-report.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/report/finance/disbursment-report/disbursment-report.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\">\r\n  <div class=\"content mb-md-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"mysearchbox\">\r\n          <h6 class=\"d-inline-block searchshow\">Disbursement Report <i class=\"fa fa-print\"> </i></h6>\r\n          <div class=\"mysearch\">\r\n            <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n            <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n              title=\"Type in a name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"disbursementReport()\">\r\n        <div class=\"cRow\">\r\n          <div class=\"cCol6\">\r\n\r\n            <!-- <mat-form-field>\r\n                <mat-select placeholder=\"Branch\" formControlName=\"branch\">\r\n                  <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                    {{b.brnchNm}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field> -->\r\n\r\n\r\n            <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required bindLabel=\"brnchNm\"\r\n              bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"branch\">\r\n            </ng-select>\r\n\r\n            <mat-form-field>\r\n              <input matInput required formControlName=\"frmDt\" placeholder=\"From Date:\" [matDatepicker]=\"picker1\"\r\n                disabled readonly />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n              <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput required formControlName=\"toDt\" [min]=\"ngForm.controls['frmDt'].value\"\r\n                placeholder=\"To Date:\" [matDatepicker]=\"picker2\" disabled readonly />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n              <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n\r\n            <mat-radio-group formControlName=\"isXls\">\r\n              <mat-radio-button value=\"1\">Excel </mat-radio-button>\r\n              <mat-radio-button class=\"ml-3\" checked value=\"0\">PDF </mat-radio-button>\r\n            </mat-radio-group>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/finance/disbursment-report/disbursment-report.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/report/finance/disbursment-report/disbursment-report.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MY_FORMATS, DisbursmentReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisbursmentReportComponent", function() { return DisbursmentReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var src_app_shared_services_finance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/finance.service */ "./src/app/shared/services/finance.service.ts");
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
var DisbursmentReportComponent = /** @class */ (function () {
    function DisbursmentReportComponent(fb, toaster, financeService, transfersService, spinner) {
        var _this = this;
        this.fb = fb;
        this.toaster = toaster;
        this.financeService = financeService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem("auth"));
        this.maxDate = new Date();
        if (this.auth.role == "admin") {
            this.transfersService.getBranches().subscribe(function (d) { _this.branchs = d; });
            this.ngForm = this.fb.group({
                branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                frmDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                isXls: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
        else {
            this.ngForm = this.fb.group({
                frmDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                isXls: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,],
            });
        }
        // this.ngForm = this.fb.group({
        //   branch: ['', Validators.required],
        //   frmDt: ['', Validators.required],
        //   toDt: ['', Validators.required],
        //   isXls:[0, Validators.required],
        // });
    }
    DisbursmentReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transfersService.getBranches().subscribe(function (d) {
            _this.branchs = d;
        });
    };
    DisbursmentReportComponent.prototype.disbursementReport = function () {
        var _this = this;
        this.spinner.show();
        console.log(this.ngForm.controls['branch'].value);
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        var isXls = this.ngForm.get('isXls').value;
        console.log(isXls);
        this.financeService.printDisbursementReport(frmDt, toDt, this.ngForm.controls['branch'].value, isXls).subscribe(function (response) {
            _this.spinner.hide();
            var binaryData = [];
            binaryData.push(response);
            var fileURL = "";
            if (isXls == true) {
                console.log("ex");
                fileURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/vnd.ms-excel" }));
            }
            else {
                console.log("pdf");
                fileURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
            }
            console.log(fileURL);
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
    DisbursmentReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-disbursment-report',
            template: __webpack_require__(/*! ./disbursment-report.component.html */ "./src/app/pages/report/finance/disbursment-report/disbursment-report.component.html"),
            styles: [__webpack_require__(/*! ./disbursment-report.component.css */ "./src/app/pages/report/finance/disbursment-report/disbursment-report.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], src_app_shared_services_finance_service__WEBPACK_IMPORTED_MODULE_6__["FinanceService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_7__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], DisbursmentReportComponent);
    return DisbursmentReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/finance/finance.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/report/finance/finance.module.ts ***!
  \********************************************************/
/*! exports provided: routes, FinanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceModule", function() { return FinanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _funds_report_funds_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funds-report/funds-report.component */ "./src/app/pages/report/finance/funds-report/funds-report.component.ts");
/* harmony import */ var _recovery_report_recovery_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recovery-report/recovery-report.component */ "./src/app/pages/report/finance/recovery-report/recovery-report.component.ts");
/* harmony import */ var _disbursment_report_disbursment_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./disbursment-report/disbursment-report.component */ "./src/app/pages/report/finance/disbursment-report/disbursment-report.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _fund_managment_tool_fund_managment_tool_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fund-managment-tool/fund-managment-tool.component */ "./src/app/pages/report/finance/fund-managment-tool/fund-managment-tool.component.ts");
/* harmony import */ var _organization_tagging_report_organization_tagging_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./organization-tagging-report/organization-tagging-report.component */ "./src/app/pages/report/finance/organization-tagging-report/organization-tagging-report.component.ts");
/* harmony import */ var _product_wise_disbursement_product_wise_disbursement_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-wise-disbursement/product-wise-disbursement.component */ "./src/app/pages/report/finance/product-wise-disbursement/product-wise-disbursement.component.ts");
/* harmony import */ var _organization_time_organization_time_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./organization-time/organization-time.component */ "./src/app/pages/report/finance/organization-time/organization-time.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'funds-report', component: _funds_report_funds_report_component__WEBPACK_IMPORTED_MODULE_2__["FundsReportComponent"] },
    { path: 'recovery-report', component: _recovery_report_recovery_report_component__WEBPACK_IMPORTED_MODULE_3__["RecoveryReportComponent"] },
    { path: 'disbursment-report', component: _disbursment_report_disbursment_report_component__WEBPACK_IMPORTED_MODULE_4__["DisbursmentReportComponent"] },
    { path: 'fund-managment-tool', component: _fund_managment_tool_fund_managment_tool_component__WEBPACK_IMPORTED_MODULE_9__["FundManagmentToolComponent"] },
    { path: 'organization-tagging-report', component: _organization_tagging_report_organization_tagging_report_component__WEBPACK_IMPORTED_MODULE_10__["OrganizationTaggingReportComponent"] },
    { path: 'product-wise-disbursement', component: _product_wise_disbursement_product_wise_disbursement_component__WEBPACK_IMPORTED_MODULE_11__["ProductWiseDisbursementComponent"] },
    { path: 'organization-time', component: _organization_time_organization_time_component__WEBPACK_IMPORTED_MODULE_12__["OrganizationTimeComponent"] },
];
var FinanceModule = /** @class */ (function () {
    function FinanceModule() {
    }
    FinanceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            ],
            declarations: [_funds_report_funds_report_component__WEBPACK_IMPORTED_MODULE_2__["FundsReportComponent"], _recovery_report_recovery_report_component__WEBPACK_IMPORTED_MODULE_3__["RecoveryReportComponent"], _disbursment_report_disbursment_report_component__WEBPACK_IMPORTED_MODULE_4__["DisbursmentReportComponent"], _fund_managment_tool_fund_managment_tool_component__WEBPACK_IMPORTED_MODULE_9__["FundManagmentToolComponent"], _organization_tagging_report_organization_tagging_report_component__WEBPACK_IMPORTED_MODULE_10__["OrganizationTaggingReportComponent"], _product_wise_disbursement_product_wise_disbursement_component__WEBPACK_IMPORTED_MODULE_11__["ProductWiseDisbursementComponent"], _organization_time_organization_time_component__WEBPACK_IMPORTED_MODULE_12__["OrganizationTimeComponent"]]
        })
    ], FinanceModule);
    return FinanceModule;
}());



/***/ }),

/***/ "./src/app/pages/report/finance/fund-managment-tool/fund-managment-tool.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/report/finance/fund-managment-tool/fund-managment-tool.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/finance/fund-managment-tool/fund-managment-tool.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/report/finance/fund-managment-tool/fund-managment-tool.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\">\r\n  <div class=\"content mb-md-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"mysearchbox\">\r\n          <h6 class=\"d-inline-block searchshow\">E & P Remittance Ratio <i class=\"fa fa-print\"> </i></h6>\r\n          <div class=\"mysearch\">\r\n            <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n            <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n              title=\"Type in a name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"fundManagmentTool()\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol6-col\">\r\n\r\n              <!-- <mat-form-field>\r\n                <mat-select placeholder=\"Report Type\" formControlName=\"branch\">\r\n                  <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                    {{b.brnchNm}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field> -->\r\n\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"frmDt\" placeholder=\"From Date:\" [matDatepicker]=\"picker1\"\r\n                  disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"toDt\" [min]=\"ngForm.controls['frmDt'].value\"\r\n                  placeholder=\"To Date:\" [matDatepicker]=\"picker2\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/finance/fund-managment-tool/fund-managment-tool.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/report/finance/fund-managment-tool/fund-managment-tool.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: MY_FORMATS, FundManagmentToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundManagmentToolComponent", function() { return FundManagmentToolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var src_app_shared_services_finance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/finance.service */ "./src/app/shared/services/finance.service.ts");
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
var FundManagmentToolComponent = /** @class */ (function () {
    function FundManagmentToolComponent(fb, toaster, financeService, transfersService, spinner) {
        this.fb = fb;
        this.toaster = toaster;
        this.financeService = financeService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.maxDate = new Date();
        this.ngForm = this.fb.group({
            // branch: ['', Validators.required],
            frmDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            toDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    FundManagmentToolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transfersService.getBranches().subscribe(function (d) {
            _this.branchs = d;
        });
    };
    FundManagmentToolComponent.prototype.fundManagmentTool = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        this.financeService.printFundManagmentTool(frmDt, toDt).subscribe(function (response) {
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
    FundManagmentToolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fund-managment-tool',
            template: __webpack_require__(/*! ./fund-managment-tool.component.html */ "./src/app/pages/report/finance/fund-managment-tool/fund-managment-tool.component.html"),
            styles: [__webpack_require__(/*! ./fund-managment-tool.component.css */ "./src/app/pages/report/finance/fund-managment-tool/fund-managment-tool.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], src_app_shared_services_finance_service__WEBPACK_IMPORTED_MODULE_6__["FinanceService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_7__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], FundManagmentToolComponent);
    return FundManagmentToolComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/finance/funds-report/funds-report.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/pages/report/finance/funds-report/funds-report.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/finance/funds-report/funds-report.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/report/finance/funds-report/funds-report.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\">\r\n  <div class=\"content mb-md-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"mysearchbox\">\r\n          <h6 class=\"d-inline-block searchshow\">Funds Report <i class=\"fa fa-print\"> </i></h6>\r\n          <div class=\"mysearch\">\r\n            <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n            <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n              title=\"Type in a name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <form [formGroup]=\"ngForm\" (ngSubmit)=\"fundsReport()\">\r\n        <div class=\"cRow\">\r\n          <div class=\"cCol6\">\r\n\r\n            <!-- <mat-form-field>\r\n                <mat-select placeholder=\"Report Type\" formControlName=\"branch\">\r\n                  <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                    {{b.brnchNm}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field> -->\r\n\r\n            <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required bindLabel=\"brnchNm\"\r\n              bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"branch\">\r\n            </ng-select>\r\n\r\n            <mat-form-field>\r\n              <input matInput required formControlName=\"frmDt\" placeholder=\"From Date:\" [matDatepicker]=\"picker1\"\r\n                disabled readonly />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n              <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput required formControlName=\"toDt\" [min]=\"ngForm.controls['frmDt'].value\"\r\n                placeholder=\"To Date:\" [matDatepicker]=\"picker2\" disabled readonly />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n              <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n\r\n            <mat-radio-group formControlName=\"isXls\">\r\n              <mat-radio-button value=\"1\">Excel </mat-radio-button>\r\n              <mat-radio-button class=\"ml-3\" checked value=\"0\">PDF </mat-radio-button>\r\n            </mat-radio-group>\r\n\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/finance/funds-report/funds-report.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/report/finance/funds-report/funds-report.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MY_FORMATS, FundsReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundsReportComponent", function() { return FundsReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var src_app_shared_services_finance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/finance.service */ "./src/app/shared/services/finance.service.ts");
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
var FundsReportComponent = /** @class */ (function () {
    function FundsReportComponent(fb, toaster, financeService, transfersService, spinner) {
        var _this = this;
        this.fb = fb;
        this.toaster = toaster;
        this.financeService = financeService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem("auth"));
        this.maxDate = new Date();
        if (this.auth.role == "admin") {
            this.transfersService.getBranches().subscribe(function (d) { _this.branchs = d; });
            this.ngForm = this.fb.group({
                branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                frmDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                isXls: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
        else {
            this.ngForm = this.fb.group({
                frmDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                toDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                isXls: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,],
            });
        }
        // this.ngForm = this.fb.group({
        //   branch: ['', Validators.required],
        //   frmDt: ['', Validators.required],
        //   toDt: ['', Validators.required],
        //   isXls:[0, Validators.required],
        // });
    }
    FundsReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transfersService.getBranches().subscribe(function (d) {
            _this.branchs = d;
        });
    };
    FundsReportComponent.prototype.fundsReport = function () {
        var _this = this;
        this.spinner.show();
        console.log(this.ngForm.controls['branch'].value);
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        var isXls = this.ngForm.get('isXls').value;
        console.log(isXls);
        this.financeService.printFundsReport(frmDt, toDt, this.ngForm.controls['branch'].value, isXls).subscribe(function (response) {
            _this.spinner.hide();
            var binaryData = [];
            binaryData.push(response);
            var fileURL = "";
            if (isXls == true) {
                console.log("ex");
                fileURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/vnd.ms-excel" }));
            }
            else {
                console.log("pdf");
                fileURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
            }
            console.log(fileURL);
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
    FundsReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-funds-report',
            template: __webpack_require__(/*! ./funds-report.component.html */ "./src/app/pages/report/finance/funds-report/funds-report.component.html"),
            styles: [__webpack_require__(/*! ./funds-report.component.css */ "./src/app/pages/report/finance/funds-report/funds-report.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], src_app_shared_services_finance_service__WEBPACK_IMPORTED_MODULE_6__["FinanceService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_7__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], FundsReportComponent);
    return FundsReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/finance/organization-tagging-report/organization-tagging-report.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/report/finance/organization-tagging-report/organization-tagging-report.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/finance/organization-tagging-report/organization-tagging-report.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/report/finance/organization-tagging-report/organization-tagging-report.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\">\r\n  <div class=\"content mb-md-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"mysearchbox\">\r\n          <h6 class=\"d-inline-block searchshow\">Client Wise Disbursement <i class=\"fa fa-print\"> </i></h6>\r\n          <div class=\"mysearch\">\r\n            <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n            <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n              title=\"Type in a name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"organizationTaggingReport()\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol6-col\">\r\n\r\n              <!-- <mat-form-field>\r\n                  <mat-select placeholder=\"Report Type\" formControlName=\"branch\">\r\n                    <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                      {{b.brnchNm}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field> -->\r\n\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"frmDt\" placeholder=\"From Date:\" [matDatepicker]=\"picker1\"\r\n                  disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"toDt\" [min]=\"ngForm.controls['frmDt'].value\"\r\n                  placeholder=\"To Date:\" [matDatepicker]=\"picker2\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/finance/organization-tagging-report/organization-tagging-report.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/report/finance/organization-tagging-report/organization-tagging-report.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: MY_FORMATS, OrganizationTaggingReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationTaggingReportComponent", function() { return OrganizationTaggingReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var src_app_shared_services_finance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/finance.service */ "./src/app/shared/services/finance.service.ts");
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
var OrganizationTaggingReportComponent = /** @class */ (function () {
    function OrganizationTaggingReportComponent(fb, toaster, financeService, transfersService, spinner) {
        this.fb = fb;
        this.toaster = toaster;
        this.financeService = financeService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.maxDate = new Date();
        this.ngForm = this.fb.group({
            // branch: ['', Validators.required],
            frmDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            toDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    OrganizationTaggingReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transfersService.getBranches().subscribe(function (d) {
            _this.branchs = d;
        });
    };
    OrganizationTaggingReportComponent.prototype.organizationTaggingReport = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        this.financeService.printOrganizationTaggingReport(frmDt, toDt).subscribe(function (response) {
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
    OrganizationTaggingReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organization-tagging-report',
            template: __webpack_require__(/*! ./organization-tagging-report.component.html */ "./src/app/pages/report/finance/organization-tagging-report/organization-tagging-report.component.html"),
            styles: [__webpack_require__(/*! ./organization-tagging-report.component.css */ "./src/app/pages/report/finance/organization-tagging-report/organization-tagging-report.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], src_app_shared_services_finance_service__WEBPACK_IMPORTED_MODULE_6__["FinanceService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_7__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], OrganizationTaggingReportComponent);
    return OrganizationTaggingReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/finance/organization-time/organization-time.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/report/finance/organization-time/organization-time.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/finance/organization-time/organization-time.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/report/finance/organization-time/organization-time.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\">\r\n  <div class=\"content mb-md-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"mysearchbox\">\r\n          <h6 class=\"d-inline-block searchshow\">Date Wise Disbursement <i class=\"fa fa-print\"> </i></h6>\r\n          <div class=\"mysearch\">\r\n            <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n            <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n              title=\"Type in a name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"organizationTime()\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol6-col\">\r\n\r\n              <!-- <mat-form-field>\r\n                <mat-select placeholder=\"Report Type\" formControlName=\"branch\">\r\n                  <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                    {{b.brnchNm}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field> -->\r\n\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"frmDt\" placeholder=\"From Date:\" [matDatepicker]=\"picker1\"\r\n                  disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"toDt\" [min]=\"ngForm.controls['frmDt'].value\"\r\n                  placeholder=\"To Date:\" [matDatepicker]=\"picker2\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/finance/organization-time/organization-time.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/report/finance/organization-time/organization-time.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MY_FORMATS, OrganizationTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationTimeComponent", function() { return OrganizationTimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var src_app_shared_services_finance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/finance.service */ "./src/app/shared/services/finance.service.ts");
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
var OrganizationTimeComponent = /** @class */ (function () {
    function OrganizationTimeComponent(fb, toaster, financeService, transfersService, spinner) {
        this.fb = fb;
        this.toaster = toaster;
        this.financeService = financeService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.maxDate = new Date();
        this.ngForm = this.fb.group({
            // branch: ['', Validators.required],
            frmDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            toDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    OrganizationTimeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transfersService.getBranches().subscribe(function (d) {
            _this.branchs = d;
        });
    };
    OrganizationTimeComponent.prototype.organizationTime = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        this.financeService.printOrganizationTime(frmDt, toDt).subscribe(function (response) {
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
    OrganizationTimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organization-time',
            template: __webpack_require__(/*! ./organization-time.component.html */ "./src/app/pages/report/finance/organization-time/organization-time.component.html"),
            styles: [__webpack_require__(/*! ./organization-time.component.css */ "./src/app/pages/report/finance/organization-time/organization-time.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], src_app_shared_services_finance_service__WEBPACK_IMPORTED_MODULE_6__["FinanceService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_7__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], OrganizationTimeComponent);
    return OrganizationTimeComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/finance/product-wise-disbursement/product-wise-disbursement.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/report/finance/product-wise-disbursement/product-wise-disbursement.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/finance/product-wise-disbursement/product-wise-disbursement.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/report/finance/product-wise-disbursement/product-wise-disbursement.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\">\r\n  <div class=\"content mb-md-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"mysearchbox\">\r\n          <h6 class=\"d-inline-block searchshow\">Product Wise Disbursement <i class=\"fa fa-print\"> </i></h6>\r\n          <div class=\"mysearch\">\r\n            <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n            <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n              title=\"Type in a name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"productWiseDisbursement()\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol6-col\">\r\n\r\n              <label class=\"mb-0\">File Type:</label>\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Product Type\" formControlName=\"prdId\">\r\n                  <mat-option [value]=\"0\">All Products</mat-option>\r\n                  <mat-option *ngFor=\"let product of allItems\" [value]=\"product.prdGrpSeq\">{{product.prdGrpNm}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"frmDt\" placeholder=\"From Date:\" [matDatepicker]=\"picker1\"\r\n                  disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"toDt\" [min]=\"ngForm.controls['frmDt'].value\"\r\n                  placeholder=\"To Date:\" [matDatepicker]=\"picker2\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/finance/product-wise-disbursement/product-wise-disbursement.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/report/finance/product-wise-disbursement/product-wise-disbursement.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: MY_FORMATS, ProductWiseDisbursementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductWiseDisbursementComponent", function() { return ProductWiseDisbursementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var src_app_shared_services_finance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/finance.service */ "./src/app/shared/services/finance.service.ts");
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
var ProductWiseDisbursementComponent = /** @class */ (function () {
    function ProductWiseDisbursementComponent(fb, toaster, financeService, productService, spinner) {
        this.fb = fb;
        this.toaster = toaster;
        this.financeService = financeService;
        this.productService = productService;
        this.spinner = spinner;
        this.maxDate = new Date();
        this.ngForm = this.fb.group({
            // branch: ['', Validators.required],
            prdId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            frmDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            toDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    ProductWiseDisbursementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getAllProductGroups().subscribe(function (data) {
            _this.allItems = data;
            console.log(_this.allItems);
        });
    };
    ProductWiseDisbursementComponent.prototype.productWiseDisbursement = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        this.financeService.printProductWiseDisbursement(frmDt, toDt, this.ngForm.controls['prdId'].value).subscribe(function (response) {
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
    ProductWiseDisbursementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-wise-disbursement',
            template: __webpack_require__(/*! ./product-wise-disbursement.component.html */ "./src/app/pages/report/finance/product-wise-disbursement/product-wise-disbursement.component.html"),
            styles: [__webpack_require__(/*! ./product-wise-disbursement.component.css */ "./src/app/pages/report/finance/product-wise-disbursement/product-wise-disbursement.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], src_app_shared_services_finance_service__WEBPACK_IMPORTED_MODULE_6__["FinanceService"], src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], ProductWiseDisbursementComponent);
    return ProductWiseDisbursementComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/finance/recovery-report/recovery-report.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/pages/report/finance/recovery-report/recovery-report.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/finance/recovery-report/recovery-report.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/report/finance/recovery-report/recovery-report.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\">\r\n  <div class=\"content mb-md-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"mysearchbox\">\r\n          <h6 class=\"d-inline-block searchshow\">Recovery Report <i class=\"fa fa-print\"> </i></h6>\r\n          <div class=\"mysearch\">\r\n            <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n            <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n              title=\"Type in a name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <form class=\"md-float-material\" [formGroup]=\"ngForm\" (ngSubmit)=\"recoveryReport()\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol6-col\">\r\n\r\n              <!-- <mat-form-field>\r\n                <mat-select placeholder=\"Report Type\" formControlName=\"branch\">\r\n                  <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                    {{b.brnchNm}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field> -->\r\n\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"frmDt\" placeholder=\"From Date:\" [matDatepicker]=\"picker1\"\r\n                  disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"toDt\" [min]=\"ngForm.controls['frmDt'].value\"\r\n                  placeholder=\"To Date:\" [matDatepicker]=\"picker2\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n\r\n              <mat-radio-group formControlName=\"isXls\">\r\n                <mat-radio-button value=\"1\">Excel </mat-radio-button>\r\n                <mat-radio-button class=\"ml-3\" checked value=\"0\">PDF </mat-radio-button>\r\n              </mat-radio-group>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/finance/recovery-report/recovery-report.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/report/finance/recovery-report/recovery-report.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MY_FORMATS, RecoveryReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryReportComponent", function() { return RecoveryReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var src_app_shared_services_finance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/finance.service */ "./src/app/shared/services/finance.service.ts");
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
var RecoveryReportComponent = /** @class */ (function () {
    function RecoveryReportComponent(fb, toaster, financeService, transfersService, spinner) {
        this.fb = fb;
        this.toaster = toaster;
        this.financeService = financeService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.maxDate = new Date();
        this.ngForm = this.fb.group({
            // branch: ['', Validators.required],
            frmDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            toDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            isXls: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    RecoveryReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transfersService.getBranches().subscribe(function (d) {
            _this.branchs = d;
        });
    };
    RecoveryReportComponent.prototype.recoveryReport = function () {
        var _this = this;
        this.spinner.show();
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        var isXls = this.ngForm.get('isXls').value;
        console.log(isXls);
        this.financeService.printRecoveryReport(frmDt, toDt, isXls).subscribe(function (response) {
            _this.spinner.hide();
            var binaryData = [];
            binaryData.push(response);
            var fileURL = "";
            if (isXls == true) {
                console.log("ex");
                fileURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/vnd.ms-excel" }));
            }
            else {
                console.log("pdf");
                fileURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
            }
            console.log(fileURL);
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
    RecoveryReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recovery-report',
            template: __webpack_require__(/*! ./recovery-report.component.html */ "./src/app/pages/report/finance/recovery-report/recovery-report.component.html"),
            styles: [__webpack_require__(/*! ./recovery-report.component.css */ "./src/app/pages/report/finance/recovery-report/recovery-report.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], src_app_shared_services_finance_service__WEBPACK_IMPORTED_MODULE_6__["FinanceService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_7__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], RecoveryReportComponent);
    return RecoveryReportComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/finance.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/finance.service.ts ***!
  \****************************************************/
/*! exports provided: FinanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceService", function() { return FinanceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_Api_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Api.model */ "./src/app/shared/models/Api.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FinanceService = /** @class */ (function () {
    function FinanceService(http, toastr, spinner) {
        this.http = http;
        this.toastr = toastr;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_4__["ApiModel"]();
    }
    FinanceService.prototype.printFundsReport = function (frmDt, toDt, branch, isXls) {
        var url = this.apiModel.host + "/reportservice/api/print-funds-report/" + frmDt + "/" + toDt + "/" + branch + "/" + isXls;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    FinanceService.prototype.printRecoveryReport = function (frmDt, toDt, isXls) {
        var url = this.apiModel.host + "/reportservice/api/print-recovery-report/" + frmDt + "/" + toDt + "/" + isXls;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    FinanceService.prototype.printDisbursementReport = function (frmDt, toDt, branch, isXls) {
        var url = this.apiModel.host + "/reportservice/api/print-disbursement-report/" + frmDt + "/" + toDt + "/" + branch + "/" + isXls;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    FinanceService.prototype.printFundManagmentTool = function (frmDt, toDt) {
        var url = this.apiModel.host + "/reportservice/api/print-fund-management-report/" + frmDt + "/" + toDt;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    FinanceService.prototype.printOrganizationTaggingReport = function (frmDt, toDt) {
        var url = this.apiModel.host + "/reportservice/api/print-organization-tagging-report/" + frmDt + "/" + toDt;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    FinanceService.prototype.printProductWiseDisbursement = function (frmDt, toDt, prd) {
        var url = this.apiModel.host + "/reportservice/api/print-product-wise-disbursement-report/" + frmDt + "/" + toDt + "/" + prd;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    FinanceService.prototype.printOrganizationTime = function (frmDt, toDt) {
        var url = this.apiModel.host + "/reportservice/api/print-ogranization-time-report/" + frmDt + "/" + toDt;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    FinanceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]])
    ], FinanceService);
    return FinanceService;
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
//# sourceMappingURL=finance-finance-module.js.map