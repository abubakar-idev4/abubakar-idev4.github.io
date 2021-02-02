(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["compliance-repot-compliance-repot-module"],{

/***/ "./src/app/pages/report/compliance-repot/aml-report/aml-report.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/report/compliance-repot/aml-report/aml-report.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/compliance-repot/aml-report/aml-report.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/report/compliance-repot/aml-report/aml-report.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\">\r\n  <div class=\"content mb-md-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"mysearchbox\">\r\n          <h6 class=\"d-inline-block searchshow\">AML / NECTA Matches <i class=\"fa fa-print\"> </i></h6>\r\n          <div class=\"mysearch\">\r\n            <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n            <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n              title=\"Type in a name\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <form [formGroup]=\"ngForm\" (ngSubmit)=\"onSubmitAmlReport()\">\r\n        <div class=\"cRow\">\r\n          <div class=\"cCol6\">\r\n\r\n            <!-- <mat-form-field>\r\n                <mat-select placeholder=\"Report Type\" formControlName=\"branch\">\r\n                  <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                    {{b.brnchNm}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field> -->\r\n\r\n            <ng-select *ngIf=\"auth.role != 'bdo' && auth.role != 'bm'\" [items]=\"branchs\" required bindLabel=\"brnchNm\"\r\n              bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"branch\">\r\n            </ng-select>\r\n\r\n            <mat-form-field>\r\n              <input matInput required formControlName=\"frmDt\" placeholder=\"From Date:\" [matDatepicker]=\"picker1\"\r\n                disabled readonly />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n              <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput required formControlName=\"toDt\" [min]=\"ngForm.controls['frmDt'].value\"\r\n                placeholder=\"To Date:\" [matDatepicker]=\"picker2\" disabled readonly />\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n              <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n\r\n            <!-- <mat-radio-group formControlName=\"isXls\">\r\n              <mat-radio-button value=\"1\">Excel </mat-radio-button>\r\n              <mat-radio-button class=\"ml-3\" checked value=\"0\">PDF </mat-radio-button>\r\n            </mat-radio-group> -->\r\n\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary\">Print</button>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/compliance-repot/aml-report/aml-report.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/report/compliance-repot/aml-report/aml-report.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AmlReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmlReportComponent", function() { return AmlReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var src_app_pages_admin_loan_servicing_loan_servicing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/admin/loan-servicing/loan-servicing.component */ "./src/app/pages/admin/loan-servicing/loan-servicing.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_shared_services_compliance_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/compliance.service */ "./src/app/shared/services/compliance.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var moment = moment__WEBPACK_IMPORTED_MODULE_9__;
var AmlReportComponent = /** @class */ (function () {
    function AmlReportComponent(fb, toaster, complianceService, transfersService, spinner) {
        var _this = this;
        this.fb = fb;
        this.toaster = toaster;
        this.complianceService = complianceService;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem("auth"));
        this.maxDate = new Date();
        if (this.auth.role == "admin") {
            this.transfersService.getBranches().subscribe(function (d) { _this.branchs = d; });
            this.ngForm = this.fb.group({
                branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                frmDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                toDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                isXls: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
        }
        else {
            this.ngForm = this.fb.group({
                frmDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                toDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                isXls: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                branch: [{ value: this.auth.emp_branch, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,],
            });
        }
        // this.ngForm = this.fb.group({
        //   branch: ['', Validators.required],
        //   frmDt: ['', Validators.required],
        //   toDt: ['', Validators.required],
        //   isXls:[0, Validators.required],
        // });
    }
    AmlReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transfersService.getBranches().subscribe(function (d) {
            _this.branchs = d;
        });
    };
    AmlReportComponent.prototype.onSubmitAmlReport = function () {
        var _this = this;
        this.spinner.show();
        console.log(this.ngForm.controls['branch'].value);
        var frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy');
        var toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy');
        var isXls = this.ngForm.get('isXls').value;
        console.log(isXls);
        this.complianceService.printAmlCompliaanceReport(frmDt, toDt, this.ngForm.controls['branch'].value, isXls).subscribe(function (response) {
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
    AmlReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aml-report',
            template: __webpack_require__(/*! ./aml-report.component.html */ "./src/app/pages/report/compliance-repot/aml-report/aml-report.component.html"),
            styles: [__webpack_require__(/*! ./aml-report.component.css */ "./src/app/pages/report/compliance-repot/aml-report/aml-report.component.css")],
            providers: [{ provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_FORMATS"], useValue: src_app_pages_admin_loan_servicing_loan_servicing_component__WEBPACK_IMPORTED_MODULE_3__["MY_FORMATS"] }]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], src_app_shared_services_compliance_service__WEBPACK_IMPORTED_MODULE_10__["ComplianceService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_7__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], AmlReportComponent);
    return AmlReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/compliance-repot/cnic-expiry/cnic-expiry.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/report/compliance-repot/cnic-expiry/cnic-expiry.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/report/compliance-repot/cnic-expiry/cnic-expiry.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/report/compliance-repot/cnic-expiry/cnic-expiry.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"content\">\r\n    <div class=\"mysearchbox\">\r\n      <h6 class=\"d-inline-block searchshow\">CNIC Expiry</h6>\r\n      <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n        <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\" title=\"Type in a name\">\r\n      </div>\r\n    </div>\r\n\r\n    <form [formGroup]=\"ngForm\" (ngSubmit)=\"onSubmitCnicExpiry()\">\r\n      <div class=\"row clearfix\">\r\n        <div class=\"col-sm-12\">\r\n          <!-- <input type=\"hidden\" formControlName=\"brnchSeq\" readonly /> -->\r\n\r\n          <!-- <div class=\"cRow\">\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"frmDt\" [max]=\"maxDate\" placeholder=\"From Date:\"\r\n                  [matDatepicker]=\"picker1\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n            <div>\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"toDt\" [min]=\"ngForm.controls['frmDt'].value\" [max]=\"maxDate\"\r\n                  placeholder=\"To Date:\" [matDatepicker]=\"picker2\" disabled readonly />\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div>\r\n\r\n              <mat-radio-group formControlName=\"isXls\">\r\n                <mat-radio-button value=true>Excel </mat-radio-button>\r\n                <mat-radio-button class=\"ml-3\" checked value=false>PDF </mat-radio-button>\r\n              </mat-radio-group>\r\n\r\n            </div>\r\n          </div> -->\r\n          <div class=\"buttons mt-3\">\r\n            <button [disabled]=\"!ngForm.valid\" type=\"submit\" class=\"btn btn-primary btn-min mr-3\">Print CNIC\r\n              Expiry</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/report/compliance-repot/cnic-expiry/cnic-expiry.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/report/compliance-repot/cnic-expiry/cnic-expiry.component.ts ***!
  \************************************************************************************/
/*! exports provided: CnicExpiryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CnicExpiryComponent", function() { return CnicExpiryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_shared_services_compliance_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/compliance.service */ "./src/app/shared/services/compliance.service.ts");
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
var CnicExpiryComponent = /** @class */ (function () {
    function CnicExpiryComponent(fb, toaster, spinner, dataService, transfersService, complianceService) {
        this.fb = fb;
        this.toaster = toaster;
        this.spinner = spinner;
        this.dataService = dataService;
        this.transfersService = transfersService;
        this.complianceService = complianceService;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.maxDate = new Date();
    }
    CnicExpiryComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.auth);
        this.ngForm = this.fb.group({});
        this.transfersService.getBranches().subscribe(function (d) {
            _this.branchs = d;
        });
    };
    CnicExpiryComponent.prototype.getBranch = function () {
        var _this = this;
        this.allBranches = [];
        this.dataService.getBranch(this.ngForm.controls["areaSeq"].value).subscribe(function (d) {
            _this.allBranches = d;
        });
    };
    CnicExpiryComponent.prototype.onSubmitCnicExpiry = function () {
        var _this = this;
        this.spinner.show();
        // const frmDt = new DatePipe('en-US').transform(this.ngForm.get('frmDt').value, 'dd-MM-yyyy')
        // const toDt = new DatePipe('en-US').transform(this.ngForm.get('toDt').value, 'dd-MM-yyyy')
        // let brnchSeq = this.ngForm.get('brnchSeq').value ? this.ngForm.get('brnchSeq').value : 0;
        // let isXls = this.ngForm.get('isXls').value;
        // console.log(isXls)
        this.complianceService.printCnicExpiryReport().subscribe(function (response) {
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
    CnicExpiryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cnic-expiry',
            template: __webpack_require__(/*! ./cnic-expiry.component.html */ "./src/app/pages/report/compliance-repot/cnic-expiry/cnic-expiry.component.html"),
            styles: [__webpack_require__(/*! ./cnic-expiry.component.css */ "./src/app/pages/report/compliance-repot/cnic-expiry/cnic-expiry.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_5__["TransfersService"],
            src_app_shared_services_compliance_service__WEBPACK_IMPORTED_MODULE_7__["ComplianceService"]])
    ], CnicExpiryComponent);
    return CnicExpiryComponent;
}());



/***/ }),

/***/ "./src/app/pages/report/compliance-repot/compliance-repot.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/report/compliance-repot/compliance-repot.module.ts ***!
  \**************************************************************************/
/*! exports provided: routes, ComplianceRepotModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplianceRepotModule", function() { return ComplianceRepotModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _aml_report_aml_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aml-report/aml-report.component */ "./src/app/pages/report/compliance-repot/aml-report/aml-report.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _cnic_expiry_cnic_expiry_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cnic-expiry/cnic-expiry.component */ "./src/app/pages/report/compliance-repot/cnic-expiry/cnic-expiry.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: 'aml-matches' },
    { path: 'aml-matches', component: _aml_report_aml_report_component__WEBPACK_IMPORTED_MODULE_2__["AmlReportComponent"] },
    { path: 'cnic-match', component: _cnic_expiry_cnic_expiry_component__WEBPACK_IMPORTED_MODULE_7__["CnicExpiryComponent"] },
];
var ComplianceRepotModule = /** @class */ (function () {
    function ComplianceRepotModule() {
    }
    ComplianceRepotModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"]
            ],
            declarations: [_aml_report_aml_report_component__WEBPACK_IMPORTED_MODULE_2__["AmlReportComponent"], _cnic_expiry_cnic_expiry_component__WEBPACK_IMPORTED_MODULE_7__["CnicExpiryComponent"]]
        })
    ], ComplianceRepotModule);
    return ComplianceRepotModule;
}());



/***/ })

}]);
//# sourceMappingURL=compliance-repot-compliance-repot-module.js.map