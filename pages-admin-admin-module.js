(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-admin-module"],{

/***/ "./src/app/pages/admin/AuthGuard.service.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/admin/AuthGuard.service.ts ***!
  \**************************************************/
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
        for (var i = 0; i < this.auth.modules.length; i++) {
            if (this.auth.modules[i].modUrl == "admin")
                return true;
        }
        this.toaster.error("Permission Denied");
        // ('Please Login to Continue');?
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/admin/admin.module.ts ***!
  \*********************************************/
/*! exports provided: routes, AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/pages/admin/admin/admin.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _client_health_insurance_claim_client_health_insurance_claim_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-health-insurance-claim/client-health-insurance-claim.component */ "./src/app/pages/admin/client-health-insurance-claim/client-health-insurance-claim.component.ts");
/* harmony import */ var _admin_left_side_bar_left_side_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/left-side-bar/left-side-bar.component */ "./src/app/pages/admin/admin/left-side-bar/left-side-bar.component.ts");
/* harmony import */ var _file_loader_file_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file-loader/file-loader.component */ "./src/app/pages/admin/file-loader/file-loader.component.ts");
/* harmony import */ var _AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AuthGuard.service */ "./src/app/pages/admin/AuthGuard.service.ts");
/* harmony import */ var _reschedule_reschedule_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reschedule/reschedule.component */ "./src/app/pages/admin/reschedule/reschedule.component.ts");
/* harmony import */ var _write_off_write_off_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./write-off/write-off.component */ "./src/app/pages/admin/write-off/write-off.component.ts");
/* harmony import */ var _loan_servicing_loan_servicing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loan-servicing/loan-servicing.component */ "./src/app/pages/admin/loan-servicing/loan-servicing.component.ts");
/* harmony import */ var _closing_closing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./closing/closing.component */ "./src/app/pages/admin/closing/closing.component.ts");
/* harmony import */ var _admin_access_recovery_access_recovery_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/access-recovery/access-recovery.component */ "./src/app/pages/admin/admin/access-recovery/access-recovery.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _animal_death_animal_death_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./animal-death/animal-death.component */ "./src/app/pages/admin/animal-death/animal-death.component.ts");
/* harmony import */ var _journel_voucher_journel_voucher_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./journel-voucher/journel-voucher.component */ "./src/app/pages/admin/journel-voucher/journel-voucher.component.ts");
/* harmony import */ var _attendance_attendance_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./attendance/attendance.component */ "./src/app/pages/admin/attendance/attendance.component.ts");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _animal_insurance_claim_animal_insurance_claim_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./animal-insurance-claim/animal-insurance-claim.component */ "./src/app/pages/admin/animal-insurance-claim/animal-insurance-claim.component.ts");
/* harmony import */ var _branch_portfolio_branch_portfolio_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./branch-portfolio/branch-portfolio.component */ "./src/app/pages/admin/branch-portfolio/branch-portfolio.component.ts");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/pages/admin/portfolio/portfolio.component.ts");
/* harmony import */ var _donner_tagging_donner_tagging_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./donner-tagging/donner-tagging.component */ "./src/app/pages/admin/donner-tagging/donner-tagging.component.ts");
/* harmony import */ var _area_attendance_area_attendance_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./area-attendance/area-attendance.component */ "./src/app/pages/admin/area-attendance/area-attendance.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/pages/admin/landing/landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var routes = [
    { path: '', redirectTo: 'landing' },
    { path: 'landing', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_27__["LandingComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'transfers', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'ClientHealthInsuranceClaims', component: _client_health_insurance_claim_client_health_insurance_claim_component__WEBPACK_IMPORTED_MODULE_5__["ClientHealthInsuranceClaimComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'file-upload', component: _file_loader_file_loader_component__WEBPACK_IMPORTED_MODULE_7__["FileLoaderComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'reschedule', component: _reschedule_reschedule_component__WEBPACK_IMPORTED_MODULE_9__["RescheduleComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'write-off', component: _write_off_write_off_component__WEBPACK_IMPORTED_MODULE_10__["WriteOffComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'loan-servicing', component: _loan_servicing_loan_servicing_component__WEBPACK_IMPORTED_MODULE_11__["LoanServicingComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'closing', component: _closing_closing_component__WEBPACK_IMPORTED_MODULE_12__["ClosingComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'journel-voucher', component: _journel_voucher_journel_voucher_component__WEBPACK_IMPORTED_MODULE_18__["JournelVoucherComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'attendance', component: _attendance_attendance_component__WEBPACK_IMPORTED_MODULE_19__["AttendanceComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'area-attendance', component: _area_attendance_area_attendance_component__WEBPACK_IMPORTED_MODULE_26__["AreaAttendanceComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'access-recoveries', component: _admin_access_recovery_access_recovery_component__WEBPACK_IMPORTED_MODULE_13__["AccessRecoveryComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'animal-death/:id', component: _animal_death_animal_death_component__WEBPACK_IMPORTED_MODULE_17__["AnimalDeathComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'animal-insr-claim', component: _animal_insurance_claim_animal_insurance_claim_component__WEBPACK_IMPORTED_MODULE_21__["AnimalInsuranceClaimComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'target-managment', component: _branch_portfolio_branch_portfolio_component__WEBPACK_IMPORTED_MODULE_22__["BranchPortfolioComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'employee-assignment', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_24__["PortfolioComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'donor-tagging', component: _donner_tagging_donner_tagging_component__WEBPACK_IMPORTED_MODULE_25__["DonnerTaggingComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
];
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_16__["DataTablesModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_20__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_20__["OwlNativeDateTimeModule"],
                _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_23__["MatMomentDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"]
            ],
            declarations: [
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
                _client_health_insurance_claim_client_health_insurance_claim_component__WEBPACK_IMPORTED_MODULE_5__["ClientHealthInsuranceClaimComponent"],
                _admin_left_side_bar_left_side_bar_component__WEBPACK_IMPORTED_MODULE_6__["LeftSideBarComponent"],
                _file_loader_file_loader_component__WEBPACK_IMPORTED_MODULE_7__["FileLoaderComponent"],
                _reschedule_reschedule_component__WEBPACK_IMPORTED_MODULE_9__["RescheduleComponent"],
                _write_off_write_off_component__WEBPACK_IMPORTED_MODULE_10__["WriteOffComponent"],
                _loan_servicing_loan_servicing_component__WEBPACK_IMPORTED_MODULE_11__["LoanServicingComponent"],
                _closing_closing_component__WEBPACK_IMPORTED_MODULE_12__["ClosingComponent"],
                _admin_access_recovery_access_recovery_component__WEBPACK_IMPORTED_MODULE_13__["AccessRecoveryComponent"],
                _animal_death_animal_death_component__WEBPACK_IMPORTED_MODULE_17__["AnimalDeathComponent"],
                _journel_voucher_journel_voucher_component__WEBPACK_IMPORTED_MODULE_18__["JournelVoucherComponent"],
                _attendance_attendance_component__WEBPACK_IMPORTED_MODULE_19__["AttendanceComponent"],
                _animal_insurance_claim_animal_insurance_claim_component__WEBPACK_IMPORTED_MODULE_21__["AnimalInsuranceClaimComponent"],
                _branch_portfolio_branch_portfolio_component__WEBPACK_IMPORTED_MODULE_22__["BranchPortfolioComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_24__["PortfolioComponent"],
                _donner_tagging_donner_tagging_component__WEBPACK_IMPORTED_MODULE_25__["DonnerTaggingComponent"],
                _area_attendance_area_attendance_component__WEBPACK_IMPORTED_MODULE_26__["AreaAttendanceComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_27__["LandingComponent"],
            ],
            providers: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], { provide: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_23__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"], useValue: { useUtc: true } }]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin/access-recovery/access-recovery.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/admin/admin/access-recovery/access-recovery.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mat-cell, .mat-header-cell {\r\n    font-size: 14px;\r\n    }\r\n    \r\n    .mat-cell, .mat-footer-cell {\r\n    font-size: 13px;\r\n    }\r\n    \r\n    table {\r\n    width: 100%;\r\n    }\r\n    \r\n    th.mat-header-cell {\r\n        vertical-align: middle;\r\n    }\r\n    "

/***/ }),

/***/ "./src/app/pages/admin/admin/access-recovery/access-recovery.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/admin/admin/access-recovery/access-recovery.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar-admin></app-left-side-bar-admin>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\" *ngIf=\"accessRecoveries?.length>0 || (this.auth.role == 'bm')\">\r\n              <div class=\"mysearchbox\" (click)=\"showField()\" *ngIf=\"!showFields\">\r\n                <h6 class=\"d-inline-block searchshow\" style=\"cursor: pointer;\">Search\r\n                  <i class=\"fa fa-search\"> </i>\r\n                </h6>\r\n              </div>\r\n              <div class=\"mysearch\" *ngIf=\"showFields\">\r\n                <form (ngSubmit)=\"applyFilter(searchVal)\" #searchForm=\"ngForm\">\r\n                  <div class=\"col-sm-10\" style=\"float:left;\">\r\n                    <mat-form-field *ngIf=\"showFields\">\r\n                      <input id=\"searchBox\" (keyup)=\"searchValue()\" autofocus matInput name=\"searchValue\"\r\n                        [(ngModel)]=\"searchVal\" placeholder=\"Search\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-sm-2\" style=\"float:right;\">\r\n                    <button class=\"btn btn-primary btn-lg\" type=\"submit\">Search</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-6\">\r\n              <form [formGroup]=\"branchForm\" (ngSubmit)=\"onSubmitBranchForm()\">\r\n                <!-- <mat-form-field *ngIf=\"auth.role != 'bm'\">\r\n                  <mat-select placeholder=\"Select Branch\" formControlName=\"branch\"\r\n                    (selectionChange)=\"onSelectBranch()\">\r\n                    <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                      {{b.brnchNm}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field> -->\r\n\r\n\r\n                <ng-select *ngIf=\"auth.role != 'bm'\" [items]=\"branchs\" required (change)=\"onSelectBranch($event)\"\r\n                  bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                  formControlName=\"branch\">\r\n                </ng-select>\r\n\r\n\r\n              </form>\r\n            </div>\r\n\r\n\r\n            <!-- <div class=\"col-sm-6 addBtn\"> -->\r\n            <!-- <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#applyExcessPayment\"><i\r\n                  class=\"fa fa-plus\"></i> Add</button> -->\r\n            <!-- </div> -->\r\n          </div>\r\n          <div class=\"modal fade\" id=\"ApplyPayment\" role=\"dialog\">\r\n            <div class=\"modal-dialog mymodal bigger\">\r\n\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Excess Recovery</h5>\r\n                </div>\r\n                <form [formGroup]=\"accessRecoveryForm\" (ngSubmit)=\"onPayClick()\">\r\n                  <div class=\"modal-body\">\r\n\r\n                    <div class=\"cRow\">\r\n                      <!-- <div class=\"cCol2\">\r\n                                    <label>Branch</label>\r\n                                    <input type=\"text\" disabled=\"readonly\" formControlName=\"brnchSeq\" class=\"form-control\" />\r\n                            </div>  -->\r\n                      <div class=\"cCol2\">\r\n                        <label>Transaction Id</label>\r\n                        <input type=\"text\" disabled=\"readonly\" formControlName=\"txId\" class=\"form-control\" />\r\n                      </div>\r\n\r\n                      <div class=\"cCol2\">\r\n                        <label>Client Id</label>\r\n                        <input type=\"text\" disabled=\"readonly\" formControlName=\"clientId\" class=\"form-control\" />\r\n                      </div>\r\n                      <div class=\"cCol2\">\r\n                        <label>Client Name</label>\r\n                        <input type=\"text\" disabled=\"readonly\" formControlName=\"clientName\" class=\"form-control\" />\r\n                      </div>\r\n\r\n                      <div class=\"cCol2\">\r\n                        <label>Access Amount</label>\r\n                        <input type=\"text\" disabled=\"readonly\" formControlName=\"accessAmount\" class=\"form-control\" />\r\n                      </div>\r\n                      <div class=\"cCol2\">\r\n                        <label>Payment Mode</label>\r\n                        <mat-select type=\"\" formControlName=\"paymentMode\" class=\"form-control\" id=\"paymentMode\"\r\n                          [ngClass]=\"{ 'is-invalid': form.paymentMode.errors?.required && form.paymentMode.touched }\"\r\n                          (selectionChange)=\"onSelectChange()\">\r\n                          <mat-option *ngFor=\"let payment of paymentArray\" [value]=\"payment\">{{payment.typStr}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                        <div *ngIf=\"form.paymentMode.errors?.required\" class=\"invalid-feedback\">\r\n                          Payment Mode is required\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"cCol2\" *ngIf=\"!isCash\">\r\n                        <label>Instrument #</label>\r\n                        <input type=\"text\" formControlName=\"instrumentNum\" class=\"form-control\"\r\n                          [ngClass]=\"{ 'is-invalid': form.instrumentNum.errors?.required && form.instrumentNum.touched }\" />\r\n                        <div *ngIf=\"form.instrumentNum.errors?.required\" class=\"invalid-feedback\">\r\n                          Instrument No. is required\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"modal-footer text-center\">\r\n                    <button type=\"button\" (click)=\"onPayClick()\" appNoDblClick [disabled]=\"!accessRecoveryForm.valid\"\r\n                      class=\"btn btn-primary btn-min\">Pay</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n          <!--------------------------------   APPLY EXCESS RECOVERY              -------------------------------------->\r\n\r\n          <div class=\"modal fade\" id=\"applyExcessPayment\" role=\"dialog\">\r\n            <div class=\"modal-dialog mymodal big\">\r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Apply Excess Payment</h5>\r\n                </div>\r\n                <form [formGroup]=\"applyExcessPayment\" (ngSubmit)=\"onApplyExcessPaymentSubmit()\">\r\n                  <div class=\"modal-body\">\r\n                    <div class=\"cRow\">\r\n                      <div class=\"cRow\">\r\n                        <div class=\"cCol4\">\r\n                          <mat-form-field>\r\n                            <input type=\"text\" matInput placeholder=\"Client Sequence:\" formControlName=\"clntSeq\"\r\n                              [errorStateMatcher]=\"matcher\">\r\n                            <mat-error *ngIf=\"fApplyPayment.clntSeq.errors?.required\">\r\n                              Client Sequence <strong>required</strong>\r\n                            </mat-error>\r\n                          </mat-form-field>\r\n                        </div>\r\n                        <div class=\"cCol3-col\">\r\n                          <button mat-stroked-button color=\"primary\" type=\"submit\" (click)=\"validateClient()\">Validate\r\n                            Client</button>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"cCol2\" *ngIf=\"payment\">\r\n                        <mat-form-field>\r\n                          <mat-select placeholder=\"Payment Mode:\" formControlName=\"pymntMod\" name=\"pymntMod\"\r\n                            [errorStateMatcher]=\"matcher\">\r\n                            <mat-option *ngFor=\"let edu of tempInstituteArray\" [value]=\"edu\">\r\n                              {{edu.typStr}}\r\n                            </mat-option>\r\n                          </mat-select>\r\n                          <mat-error *ngIf=\"fApplyPayment.pymntMod.errors?.required\">\r\n                            Payment Mode is <strong>required</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"cCol2\" *ngIf=\"payment\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Payment Amount:\" pattern=\"^-?[\\d]+(?:e-?\\d+)?$\"\r\n                            formControlName=\"pymtAmt\" [errorStateMatcher]=\"matcher\">\r\n                          <mat-error *ngIf=\"fApplyPayment.pymtAmt.errors?.required\">\r\n                            Payment Amount is <strong>required</strong>\r\n                          </mat-error>\r\n                          <mat-error *ngIf=\"fApplyPayment.pymtAmt.errors?.paymtamterror\">\r\n                            Payment Amount is <strong>Greater then Due Amount</strong>\r\n                          </mat-error>\r\n                          <mat-error *ngIf=\"fApplyPayment.pymtAmt.errors?.pattern\">\r\n                            Payment Amount is <strong>Invalid</strong>\r\n                          </mat-error>\r\n\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"modal-footer text-center\">\r\n                    <button appNoDblClick type=\"button\" (click)=\"onApplyExcessPaymentSubmit()\"\r\n                      class=\"btn btn-primary btn-min\" [disabled]=\"!applyExcessPayment.valid\">Ok</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!------------------------           End Apply Excess Payment           ------------------------->\r\n\r\n\r\n\r\n\r\n\r\n          <!-- <div class=\"table-responsive\">\r\n              <table class=\"table record\" id=\"myTable\">\r\n                <thead class=\"thead-blue thead-light\">\r\n                  <tr>\r\n                      <th>Transaction Number</th>\r\n                      <th>Branch</th>\r\n                      <th>Client ID</th>\r\n                      <th>Client Name</th>\r\n                      <th>Excess Amount</th>\r\n                      <th>Transaction Date</th>\r\n                      <th>Agent</th>\r\n                      <th>Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let accessRecovery of accessRecoveries\">                  \r\n                    <td>{{accessRecovery.txId}}</td>\r\n                    <td>{{accessRecovery.branchNm}}</td>\r\n                    <td>{{accessRecovery.clientId}}</td>\r\n                    <td>{{accessRecovery.clientName}}</td>\r\n                    <td>{{accessRecovery.accessAmount}}</td>\r\n                    <td>{{accessRecovery.pymtDt}}</td>\r\n                    <td>{{accessRecovery.agent}}</td>\r\n                    <td>\t\t\t\t\t\t\r\n                            <a href=\"#\" data-toggle=\"modal\" data-target=\"#ApplyPayment\" (click)=\"onPaymentClick(accessRecovery)\" class=\"iconBtn\"><img src=\"assets/images/rscheck.png\" alt=\"\"></a>\r\n                    </td>                          \r\n                  </tr> \r\n                </tbody>\r\n              </table>\r\n            </div> -->\r\n\r\n\r\n\r\n\r\n          <!---- DATA TABLES---->\r\n\r\n          <div class=\"table-responsive\">\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"table\" multiTemplateDataRows matSort id=\"myTable\">\r\n\r\n              <!-- Transaction Number Column -->\r\n              <ng-container matColumnDef=\"txId\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Transaction #</th>\r\n                <td mat-cell *matCellDef=\"let accessRecovery\">{{accessRecovery.txId}}</td>\r\n              </ng-container>\r\n\r\n              <!--Branch Name Column -->\r\n              <ng-container matColumnDef=\"branchNm\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\r\n                <td mat-cell *matCellDef=\"let accessRecovery\">{{accessRecovery.branchNm}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Client ID Column -->\r\n              <ng-container matColumnDef=\"clientId\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Client ID</th>\r\n                <td mat-cell *matCellDef=\"let accessRecovery\">{{accessRecovery.clientId}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Client Name Column -->\r\n              <ng-container matColumnDef=\"clientName\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Client Name</th>\r\n                <td mat-cell *matCellDef=\"let accessRecovery\">{{accessRecovery.clientName}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Excess Amount Column -->\r\n              <ng-container matColumnDef=\"accessAmount\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Excess Amount</th>\r\n                <td mat-cell *matCellDef=\"let accessRecovery\">{{accessRecovery.accessAmount}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Payment Date Column -->\r\n              <ng-container matColumnDef=\"pymtDt\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Payment Date</th>\r\n                <td mat-cell *matCellDef=\"let accessRecovery\">{{accessRecovery.pymtDt | date:'dd-MM-yyyy'}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Agent Column -->\r\n              <ng-container matColumnDef=\"agent\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Agent</th>\r\n                <td mat-cell *matCellDef=\"let accessRecovery\">{{accessRecovery.agent}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Action Column -->\r\n              <ng-container matColumnDef=\"action\">\r\n                <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                <td mat-cell *matCellDef=\"let accessRecovery\">\r\n                  <a href=\"#\" data-toggle=\"modal\" data-target=\"#ApplyPayment\" (click)=\"onPaymentClick(accessRecovery)\"\r\n                    class=\"iconBtn\"><img src=\"assets/images/rscheck.png\" alt=\"\"></a>\r\n\r\n                  <a *ngIf=\"accessRecovery.prntRef=='' && auth.role=='admin'\" matTooltip=\"text\" class=\"iconBtn delBtn\"\r\n                    (click)=\"onClickExcessRecoveryButton(accessRecovery.txId)\" title=\"Excess Recovery Reversal\"><img\r\n                      alt=\"\"><i _ngcontent-c19=\"\" class=\"fa fa-undo\"></i></a>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"thead-light thead-blue\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n            <h5>Total Excess Amount : {{isTotalAmt  | currency:'PKR':''}}</h5>\r\n            <mat-paginator [length]=\"datalength\" [pageSizeOptions]=\"[10, 15, 20]\" showFirstLastButtons>\r\n            </mat-paginator>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal fade\" id=\"excessRecoveryReversal\" role=\"dialog\">\r\n    <div class=\"modal-dialog mymodal\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">Excess Recovery Reversal</h5>\r\n        </div>\r\n        <form [formGroup]=\"excessRecoveryReversalForm\" (ngSubmit)=\"onSubmitExcessRecoveryReversal()\">\r\n          <input type=\"hidden\" formControlName=\"loanAppSeq\" />\r\n          <div class=\"modal-body\">\r\n            <div class=\"cRow\">\r\n              <div class=\"cCol6\">\r\n                <mat-form-field>\r\n                  <input matInput required formControlName=\"cmnt\" placeholder=\"Remarks:\" />\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer text-center\">\r\n            <button appNoDblClick type=\"button\" (click)=\"onSubmitExcessRecoveryReversal()\"\r\n              class=\"btn btn-primary\">Ok</button>\r\n            <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/admin/admin/access-recovery/access-recovery.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/admin/admin/access-recovery/access-recovery.component.ts ***!
  \********************************************************************************/
/*! exports provided: AccessRecoveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessRecoveryComponent", function() { return AccessRecoveryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_models_access_recovery_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/models/access-recovery.model */ "./src/app/shared/models/access-recovery.model.ts");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _shared_services_access_recovery_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/access-recovery.service */ "./src/app/shared/services/access-recovery.service.ts");
/* harmony import */ var src_app_shared_services_expense_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/expense.service */ "./src/app/shared/services/expense.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/helpers/MyErrorStateMatcher.helper */ "./src/app/shared/helpers/MyErrorStateMatcher.helper.ts");
/* harmony import */ var src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/recovery.service */ "./src/app/shared/services/recovery.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AccessRecoveryComponent = /** @class */ (function () {
    function AccessRecoveryComponent(expenseService, recoveryService, spinner, fb, toaster, changeDetectorRefs, formBuilder, accessRecoveryService, commonService) {
        this.expenseService = expenseService;
        this.recoveryService = recoveryService;
        this.spinner = spinner;
        this.fb = fb;
        this.toaster = toaster;
        this.changeDetectorRefs = changeDetectorRefs;
        this.formBuilder = formBuilder;
        this.accessRecoveryService = accessRecoveryService;
        this.commonService = commonService;
        this.showFields = false;
        this.paymentModeArray = [];
        this.matcher = new src_app_shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_7__["MyErrorStateMatcher"]();
        this.addAccessRecovery = new _shared_models_access_recovery_model__WEBPACK_IMPORTED_MODULE_2__["AccessRecovery"]();
        this.isEdit = false;
        this.submitted = false;
        this.onBranchSelection = false;
        this.datalength = 0;
        this.lastPageIndex = 0;
        this.filterValue = "";
        this.searchVal = "";
        this.isCount = true;
        this.isTotalAmt = 0;
        this.seq = 0;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
    }
    AccessRecoveryComponent.prototype.applyFilter = function (filterValue) {
        this.filterValue = filterValue;
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.datalength = this.countBeforeFilter;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            return;
        }
        this.getFilteredData(filterValue.trim().toLowerCase());
    };
    AccessRecoveryComponent.prototype.searchValue = function () {
        var _this = this;
        this.filterValue = this.searchVal.trim();
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            this.datalength = 0;
            setTimeout(function () { _this.datalength = _this.countBeforeFilter; }, 200);
            return;
        }
    };
    AccessRecoveryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accessRecoveries = [];
        this.accessRecoveries = [];
        this.branchForm = this.formBuilder.group({
            branch: [this.auth.emp_branch],
        });
        this.expenseService.getPaymentModes().subscribe((function (data) {
            _this.paymentArray = data;
        }));
        this.applyExcessPayment = this.fb.group({
            clntSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pymntMod: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pymtAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.recoveryService.getRecoveryTypes().subscribe((function (temp) {
            _this.tempInstituteArray = temp;
        }));
        // this.refreshExcessRecovery();
        this.displayedColumns = ['txId', 'branchNm', 'clientId', 'clientName', 'accessAmount', 'pymtDt', 'agent', 'action'];
        this.accessRecoveryForm = this.formBuilder.group({
            txId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            clientId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            clientName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            accessAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            paymentMode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            instrumentNum: [''],
        });
        this.expenseService.getPaymentModes().subscribe(function (d) {
            console.log("here");
            _this.paymentModeArray = d;
            console.log(_this.paymentModeArray);
            console.log("there");
        });
        // this.accessRecoveryService.getAccessRecoveries().subscribe(data => {
        //   this.accessRecoveries = data;
        //   this.dataSource = new MatTableDataSource(this.accessRecoveries);
        //   this.dataSource.paginator = this.paginator;
        //   this.dataSource.sort = this.sort;
        //   console.log(data);
        // });
        this.excessRecoveryReversalForm = this.fb.group({
            loanAppSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cmnt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        if (this.auth.role != 'bm' && this.auth.role != 'bdo') {
            this.commonService.getBrnchsForUsr().subscribe(function (res) {
                _this.branchs = res;
                _this.toaster.info('Please Select Branch', 'Information');
            });
        }
        else {
            this.onSelectBranch();
        }
    };
    AccessRecoveryComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["tap"])(function () { return _this.loadAccessRcvry(); }))
            .subscribe();
    };
    AccessRecoveryComponent.prototype.onSelectBranch = function () {
        var _this = this;
        this.accessRecoveries = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.accessRecoveries);
        this.paginator.pageIndex = 0;
        this.dataSource.paginator = this.paginator;
        this.filterValue = '';
        this.searchVal = '';
        this.lastPageIndex = 0;
        this.isCount = true;
        if (this.branchForm.controls['branch'].value == null || this.branchForm.controls['branch'].value == 0) {
            this.accessRecoveries = [];
            this.dataSource = null;
            this.datalength = 0;
            this.searchVal = '';
            return;
        }
        // this.expenseArray = [];
        // console.log(this.expenseArray)
        // if (!this.branchForm.controls['branch'].value == null || !this.branchForm.controls['branch'].value == undefined) {
        //   this.expenseService.getAllCatgoriesModesByBranches(this.branchForm.controls['branch'].value).subscribe((data) => {
        //     this.expenseArray = data;
        //     console.log(this.expenseArray)
        //   })
        // }
        // if (this.auth.role != 'bm') {
        // this.expenseService.getAllCatgoriesModesByBranches(this.branchForm.controls['branch'].value).subscribe((data) => {
        //   this.expenseArray = data;
        //   console.log(this.expenseArray)
        // })
        //   this.accessRecoveryService.getAccessRecoveriesManually(this.branchForm.controls['branch'].value).subscribe(data => {
        //     this.accessRecoveries = data;
        //     this.dataSource = new MatTableDataSource(this.accessRecoveries);
        //     this.dataSource.paginator = this.paginator;
        //     this.dataSource.sort = this.sort;
        //   });
        // }
        if (this.branchForm.controls['branch'].value == null) {
            this.onBranchSelection = false;
        }
        this.onBranchSelection = true;
        this.spinner.show();
        this.accessRecoveryService.getAccessRecoveriesManually(this.branchForm.controls['branch'].value, this.paginator.pageIndex, 10, "", this.isCount).subscribe(function (data) {
            _this.accessRecoveries = data.accessrcvry;
            _this.isTotalAmt = data.totAmt;
            _this.spinner.hide();
            if (_this.accessRecoveries.length <= 0 && _this.branchForm.controls['branch'].value != 0) {
                _this.toaster.info('No Data Found Against This Branch', 'Information');
            }
            ;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.accessRecoveries);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            setTimeout(function () { return _this.datalength = data.count; }, 10);
            _this.dataBeforeFilter = _this.dataSource.data;
            _this.countBeforeFilter = data.count;
            _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
        }, function (error) {
            _this.spinner.hide();
            if (error.status == 500) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
            else if (error) {
                _this.toaster.error("Internal Server Error", "Error");
            }
        });
    };
    AccessRecoveryComponent.prototype.loadAccessRcvry = function () {
        var _this = this;
        this.isCount = false;
        if (this.paginator.pageIndex < this.lastPageIndex)
            return;
        if (this.dataSource.paginator.length == this.dataSource.data.length)
            return;
        if (((this.paginator.pageIndex + 1) * this.paginator.pageSize) - this.dataSource.data.length > 0) {
            this.spinner.show();
            this.accessRecoveryService.getAccessRecoveriesManually(this.branchForm.controls['branch'].value, this.paginator.pageIndex, this.paginator.pageSize, this.filterValue, this.isCount).subscribe(function (data) {
                _this.spinner.hide();
                _this.accessRecoveries = data.accessrcvry;
                _this.lastPageIndex = _this.lastPageIndex + 1;
                _this.dataSource.data = _this.dataSource.data.concat(_this.accessRecoveries);
                data.count = _this.datalength;
                _this.datalength = 0;
                setTimeout(function () { _this.datalength = data.count; }, 10);
                if (_this.accessRecoveries.length <= 0 && _this.branchForm.controls['branch'].value != 0) {
                    _this.toaster.info('No Data Found Against This Branch', 'Information');
                }
                if (_this.filterValue.length == 0) {
                    _this.dataBeforeFilter = _this.dataSource.data;
                    _this.countBeforeFilter = data.count;
                    _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
                }
            }, function (error) {
                _this.spinner.hide();
                console.log('err All Expense Service');
                console.log('err', error);
            });
        }
    };
    AccessRecoveryComponent.prototype.getFilteredData = function (filterValue) {
        var _this = this;
        this.isCount = true;
        this.paginator.pageIndex = 0;
        this.spinner.show();
        this.accessRecoveryService.getAccessRecoveriesManually(this.branchForm.controls['branch'].value, this.paginator.pageIndex, this.paginator.pageSize, filterValue, this.isCount).subscribe(function (data) {
            _this.accessRecoveries = data.accessrcvry;
            _this.spinner.hide();
            if (_this.accessRecoveries.length <= 0 && _this.branchForm.controls['branch'].value != 0) {
                _this.toaster.info('No Data Found Against This Search', 'Information');
            }
            ;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.accessRecoveries);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = data.count;
        }, function (error) {
            _this.spinner.hide();
            console.log('err All Expense Service');
            console.log('err', error);
        });
    };
    Object.defineProperty(AccessRecoveryComponent.prototype, "form", {
        get: function () {
            return this.accessRecoveryForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessRecoveryComponent.prototype, "fApplyPayment", {
        get: function () {
            return this.applyExcessPayment.controls;
        },
        enumerable: true,
        configurable: true
    });
    AccessRecoveryComponent.prototype.onRecoveryChange = function () {
        var pymtDt = this.applyExcessPayment.get('pymtDt');
        var instr = this.applyExcessPayment.get('instr');
        if (this.applyExcessPayment.get('rcvryTypsSeq').value.typId === '0001') {
            this.isCash = true;
            pymtDt.clearValidators();
            instr.clearValidators();
        }
        else {
            this.isCash = false;
            instr.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+$')]));
            pymtDt.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        }
        pymtDt.updateValueAndValidity();
        instr.updateValueAndValidity();
    };
    AccessRecoveryComponent.prototype.onPaymentClick = function (AccessRecovery) {
        this.isEdit = true;
        this.accessRecoveryForm.patchValue(AccessRecovery);
        this.addAccessRecovery = AccessRecovery;
        $('#ApplyPayment').modal('show');
    };
    AccessRecoveryComponent.prototype.onPayClick = function () {
        this.spinner.show();
        this.addAccessRecovery.insturmentNum = this.form.instrumentNum.value;
        this.addAccessRecovery.paymentMode = this.form.paymentMode.value;
        this.accessRecoveryService.addAccessRecoveryRecordInExpense(this.addAccessRecovery);
        this.accessRecoveries = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.accessRecoveries);
        this.paginator.pageIndex = 0;
        this.dataSource.paginator = this.paginator;
        this.filterValue = '';
        this.searchVal = '';
        this.lastPageIndex = 0;
        this.isCount = true;
        this.onSelectBranch();
        $('#ApplyPayment').modal('hide');
    };
    AccessRecoveryComponent.prototype.showField = function () {
        this.showFields = true;
    };
    AccessRecoveryComponent.prototype.onSelectChange = function () {
        var instrNum = this.accessRecoveryForm.get('instrumentNum');
        if (this.accessRecoveryForm.get('paymentMode').value.typId === '0001') {
            this.isCash = true;
            instrNum.clearValidators();
        }
        else {
            instrNum.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+$')]));
            this.isCash = false;
        }
        instrNum.updateValueAndValidity();
    };
    AccessRecoveryComponent.prototype.validateClient = function () {
        var _this = this;
        this.payment = false;
        this.accessRecoveryService.validateClients(this.applyExcessPayment.controls['clntSeq'].value).subscribe((function (temp) {
            console.log(temp);
            if (temp == null) {
                _this.toaster.error("Client does not have an active loan.");
                return;
            }
            ;
            if (temp != null) {
                _this.toaster.success("You can do things with these");
                _this.payment = true;
            }
            ;
        }));
    };
    AccessRecoveryComponent.prototype.onApplyExcessPaymentSubmit = function () {
        var _this = this;
        this.accessRecoveryService.addExcessRecoveryManually().subscribe((function (temp) {
            _this.tempInstituteArray = temp;
        }));
    };
    ;
    AccessRecoveryComponent.prototype.onClickExcessRecoveryButton = function (seq) {
        $('#excessRecoveryReversal').modal('show');
        this.seq = seq;
    };
    AccessRecoveryComponent.prototype.onSubmitExcessRecoveryReversal = function () {
        var _this = this;
        console.log('excess recovery service');
        console.log(this.excessRecoveryReversalForm.controls['cmnt'].value);
        this.spinner.show();
        this.accessRecoveryService.reverseExcessRecovery(this.seq, this.excessRecoveryReversalForm.controls['cmnt'].value).subscribe(function (temp) {
            _this.spinner.hide();
            _this.toaster.success('Reverted Sucessfully', 'Success');
            _this.accessRecoveries = [];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.accessRecoveries);
            _this.paginator.pageIndex = 0;
            _this.dataSource.paginator = _this.paginator;
            _this.filterValue = '';
            _this.searchVal = '';
            _this.lastPageIndex = 0;
            _this.isCount = true;
            _this.onSelectBranch();
            $('#excessRecoveryReversal').modal('hide');
        }, function (error) {
            _this.spinner.hide();
            console.log(error);
            _this.toaster.error("Something Went Wrong");
        });
    };
    AccessRecoveryComponent.prototype.onSubmitBranchForm = function () {
        console.log(this.branchForm.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], AccessRecoveryComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], AccessRecoveryComponent.prototype, "paginator", void 0);
    AccessRecoveryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-access-recovery',
            template: __webpack_require__(/*! ./access-recovery.component.html */ "./src/app/pages/admin/admin/access-recovery/access-recovery.component.html"),
            styles: [__webpack_require__(/*! ./access-recovery.component.css */ "./src/app/pages/admin/admin/access-recovery/access-recovery.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_expense_service__WEBPACK_IMPORTED_MODULE_5__["ExpenseService"],
            src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_8__["RecoveryService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_services_access_recovery_service__WEBPACK_IMPORTED_MODULE_4__["AccessRecoveryService"], _shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], AccessRecoveryComponent);
    return AccessRecoveryComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin/admin.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/admin/admin/admin.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tr.mat-header-row {\r\n    height: 0px;\r\n}\r\n\r\ntr.mat-row {\r\n  height: 0px;\r\n}\r\n\r\n.mat-cell, .mat-header-cell {\r\n  font-size: 14px;\r\n}\r\n\r\n.mat-cell, .mat-footer-cell {\r\n  font-size: 13px;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\ntd,\r\nth {\r\n  width: 27%;\r\n}"

/***/ }),

/***/ "./src/app/pages/admin/admin/admin.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/admin/admin/admin.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar-admin></app-left-side-bar-admin>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content\">\r\n          <div class=\"row clearfix\">\r\n            <div class=\"col-sm-5\" *ngIf=\"allTransfers?.length>0 || this.auth.role == 'bm'\">\r\n              <div class=\"mysearchbox\" (click)=\"showField()\" *ngIf=\"!showFields\">\r\n                <h6 class=\"d-inline-block searchshow\" style=\"cursor: pointer;\">Search\r\n                  <i class=\"fa fa-search\"> </i>\r\n                </h6>\r\n              </div>\r\n              <div class=\"mysearch\" *ngIf=\"showFields\">\r\n                <form (ngSubmit)=\"applyFilter(searchVal)\" #searchForm=\"ngForm\">\r\n                  <div class=\"col-sm-10\" style=\"float:left;\">\r\n                    <mat-form-field *ngIf=\"showFields\">\r\n                      <input id=\"searchBox\" (keyup)=\"searchValue()\" autofocus matInput name=\"searchValue\"\r\n                        [(ngModel)]=\"searchVal\" placeholder=\"Search\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-sm-2\" style=\"float:right;\">\r\n                    <button class=\"btn btn-primary btn-lg\" type=\"submit\">Search</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <form [formGroup]=\"branchForm\" (ngSubmit)=\"onSubmitBranchForm()\">\r\n                <ng-select *ngIf=\"auth.role != 'bm'\" [items]=\"branchs\" required (change)=\"getAllTransferRecord($event)\"\r\n                  bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                  formControlName=\"branch\">\r\n                </ng-select>\r\n              </form>\r\n            </div>\r\n            <div class=\"col-sm-1 addBtn\">\r\n              <!-- *ngIf=\"allTransfersToUpdate.length=1\" disabled=\"true\" -->\r\n              <button [disabled]=\"tranferButtonFlag\" class=\"btn btn-primary btn-sm\"\r\n                (click)=\"onEditClick(allTransfersToUpdate,'',allTransfersToUpdate[0])\">Transfer</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal fade\" id=\"cmmoncodes\" role=\"dialog\">\r\n            <div class=\"modal-dialog mymodal bigger\">\r\n\r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Transfer Client</h5>\r\n                </div>\r\n                <form [formGroup]=\"transferForm\" (ngSubmit)=\"updatePortfolio(allTransfersToUpdate)\">\r\n                  <div class=\"modal-body\">\r\n                    <ul class=\"infolist mt-1 mb-1\">\r\n                      <!--     \r\n                      <label ><li>Current Region: <span> {{transferForm.region}}</span></li></label>\r\n                      <label ><li> Current Area: <span> {{transferForm.area}}</span></li></label>\r\n                      <label ><li> Current Branch: <span> {{transferForm.branch}}</span></li></label>-->\r\n                    </ul>\r\n                    <h6 class=\"colorBlack mt-3 mb-0 small\">Transfer to:</h6>\r\n                    <div class=\"cRow\">\r\n                      <div class=\"cCol2  \" *ngIf=\"isAdmin\">\r\n                        <label>Select Region:</label>\r\n                        <select class=\"form-control\" [disabled]=\"!isAdmin\" name=\"regSeq\" formControlName=\"regSeq\"\r\n                          (change)=\"getArea()\">\r\n                          <option value=\"0\">Select</option>\r\n                          <option *ngFor=\"let reg of allRegions\" [selected]=\"transferForm.region == reg.regNm\"\r\n                            [value]=\"reg.regSeq\">{{reg.regNm}}</option>\r\n                        </select>\r\n                      </div>\r\n                      <div class=\"cCol2\" *ngIf=\"isAdmin\">\r\n                        <label>Select Area:</label>\r\n                        <select class=\"form-control\" [disabled]=\"!isAdmin\" formControlName=\"area\"\r\n                          (change)=\"getBranch()\">\r\n                          <option>Select</option>\r\n                          <option *ngFor=\"let area of allAreas\" [selected]=\"transferForm.area == area.areaNm\"\r\n                            [value]=\"area.areaSeq\">{{area.areaNm}}</option>\r\n                        </select>\r\n                      </div>\r\n                      <div class=\"cCol2\" *ngIf=\"isAdmin\">\r\n                        <label>Select Branch:</label>\r\n                        <select class=\"form-control\" formControlName=\"branch\" [disabled]=\"!isAdmin\"\r\n                          (change)=\"getPortfolio()\">\r\n                          <option>Select</option>\r\n                          <option *ngFor=\"let branch of allBranches\" [selected]=\"transferForm.branch == branch.brnchNm\"\r\n                            [value]=\"branch.brnchSeq\">{{branch.brnchNm}}</option>\r\n                        </select>\r\n                      </div>\r\n                      <div class=\"cCol2\">\r\n                        <label>Select Portfolio: </label>\r\n                        <select class=\"form-control\" (change)=\"onSelectedIndexChanged()\" formControlName=\"portfolio\"\r\n                          name=\"portfolio\">\r\n                          <option>Select</option>\r\n                          <option *ngFor=\"let port of allPortfolios\" [value]=\"port.portSeq\">{{port.portNm}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"modal-footer text-center\">\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\"\r\n                      (click)=\"updatePortfolio(allTransfersToUpdate)\" data-dismiss=\"modal\">Transfer</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" (click)=\"onCancelClick()\"\r\n                      data-dismiss=\"modal\">Cancel</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"table-responsive\">\r\n            <table class=\"table record\" id=\"myTable\">\r\n              <thead class=\"thead-blue thead-light\">\r\n                <tr>\r\n                  <th>\r\n                    Client <a href=\"#\" class=\"icon\" data-toggle=\"tooltip\" title=\"we will help you\"><img\r\n                        src=\"assets/images/info_icon.png\" alt=\"\"></a></th>\r\n                  <th> Address <a href=\"#\" class=\"icon\" data-toggle=\"tooltip\" title=\"we will help you\"><img\r\n                        src=\"assets/images/info_icon.png\" alt=\"\"></a></th>\r\n                  <th>Branch <a href=\"#\" class=\"icon\" data-toggle=\"tooltip\" title=\"we will help you\"><img\r\n                        src=\"assets/images/info_icon.png\" alt=\"\"></a></th>\r\n                  <th>Portfolio <a href=\"#\" class=\"icon\" data-toggle=\"tooltip\" title=\"we will help you\"><img\r\n                        src=\"assets/images/info_icon.png\" alt=\"\"></a></th>\r\n                  <th class=\"text-center\">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let transfer of allTransfers\">\r\n                  <td><input type=\"checkbox\" class=\"check1\" [(ngModel)]=\"transfer.ischecked\"\r\n                      (change)=\"addTransfer(transfer, $event)\">\r\n                    <a href=\"#\" class=\"userImg\"><img src=\"assets/images/user_img.png\" alt=\"\">\r\n                      <span>{{transfer.firstName}}\r\n                        <br><sup>{{transfer.clientId}}</sup></span>\r\n                    </a></td>\r\n                  <td>{{transfer.house_num}}</td>\r\n                  <td>{{transfer.branch}}</td>\r\n                  <td>{{transfer.portfolio}}</td>\r\n                  <td class=\"text-center\">\r\n                    <div *ngIf=\"!checkBoxFlag\" (click)=\"onEditClick(allTransfersToUpdate,'empty',transfer)\"><a\r\n                        data-toggle=\"modal\" data-target=\"#cmmoncodes\" class=\"iconBtn\"></a><img\r\n                        src=\"assets/images/icon4.png\" alt=\"\" /></div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div> -->\r\n\r\n\r\n          <!---- DATA TABLES---->\r\n\r\n          <div class=\"table-responsive\">\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"table\" multiTemplateDataRows matSort>\r\n\r\n              <!-- Client Column -->\r\n              <ng-container matColumnDef=\"firstName\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Client</th>\r\n                <td mat-cell *matCellDef=\"let transfer\">\r\n                  <input type=\"checkbox\" class=\"check1\" [(ngModel)]=\"transfer.ischecked\"\r\n                    (change)=\"addTransfer(transfer, $event)\">\r\n                  <a class=\"userImg\"><img src=\"assets/images/user_img.png\" alt=\"\">\r\n                    <span>{{transfer.firstName}} {{transfer.lastName}}\r\n                      <br><sup>{{transfer.clntSeq}}</sup></span>\r\n                  </a></td>\r\n              </ng-container>\r\n\r\n              <!--Address Column -->\r\n              <ng-container matColumnDef=\"house_num\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>CNIC NO.</th>\r\n                <td mat-cell *matCellDef=\"let transfer\">{{transfer.cnicNum}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Branch Column -->\r\n              <ng-container matColumnDef=\"branch\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Branch</th>\r\n                <td mat-cell *matCellDef=\"let transfer\">{{transfer.branch}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Portfolio Column -->\r\n              <ng-container matColumnDef=\"portfolio\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Portfolio</th>\r\n                <td mat-cell *matCellDef=\"let transfer\">{{transfer.portfolio}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Action Column -->\r\n              <ng-container matColumnDef=\"action\">\r\n                <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                <td mat-cell *matCellDef=\"let transfer\">\r\n                  <div *ngIf=\"!checkBoxFlag\" (click)=\"onEditClick(allTransfersToUpdate,'empty',transfer)\"><a\r\n                      data-toggle=\"modal\" data-target=\"#cmmoncodes\" class=\"iconBtn\"></a><img\r\n                      src=\"assets/images/icon4.png\" alt=\"\" /></div>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"thead-light thead-blue\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n\r\n            <mat-paginator [length]=\"datalength\"  [pageSizeOptions]=\"[10, 15, 20]\" showFirstLastButtons>\r\n            </mat-paginator>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/admin/admin/admin.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/admin/admin/admin.component.ts ***!
  \******************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var _shared_models_app_dto_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/app-dto.model */ "./src/app/shared/models/app-dto.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AdminComponent = /** @class */ (function () {
    function AdminComponent(transfersService, formBuilder, dataService, spinner, toaster, commonService) {
        this.transfersService = transfersService;
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.spinner = spinner;
        this.toaster = toaster;
        this.commonService = commonService;
        this.isAdmin = false;
        this.greaterLengthFlag = false;
        this.tranferButtonFlag = true;
        this.allTransfersToUpdate = [];
        this.submitted = false;
        this.transfer = new _shared_models_app_dto_model__WEBPACK_IMPORTED_MODULE_2__["AppDto"]();
        this.datalength = 0;
        this.lastPageIndex = 0;
        this.onBranchSelection = false;
        this.filterValue = "";
        this.searchVal = "";
        this.isCount = true;
        this.checkBoxFlag = false;
        this.checkMethodFlag = false;
        this.flag = false;
        this.showFields = false;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.isAdmin = ((this.auth.role == "admin") ? true : false);
    }
    AdminComponent.prototype.applyFilter = function (filterValue) {
        this.filterValue = filterValue;
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            // this.dataSource.sort = this.sort;
            this.datalength = this.countBeforeFilter;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            // this.lastPageIndex = 0;
            return;
        }
        this.getFilteredData(filterValue.trim().toLowerCase());
    };
    AdminComponent.prototype.searchValue = function () {
        var _this = this;
        this.filterValue = this.searchVal.trim();
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            this.datalength = 0;
            setTimeout(function () { _this.datalength = _this.countBeforeFilter; }, 200);
            return;
        }
    };
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.displayedColumns = ['firstName', 'house_num', 'branch', 'portfolio', 'action'];
        this.transferForm = this.formBuilder.group({
            isChecked: [''],
            clntSeq: [''],
            loanAppSeq: [''],
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            area: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            portfolio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            regSeq: 0,
        });
        this.branchForm = this.formBuilder.group({
            branch: [this.auth.emp_branch],
        });
        if (this.auth.role != 'bm' && this.auth.role != 'bdo') {
            this.commonService.getBrnchsForUsr().subscribe(function (res) {
                _this.branchs = res;
                _this.toaster.info('Please Select Branch', 'Information');
            });
        }
        else {
            this.getAllTransferRecord();
        }
    };
    AdminComponent.prototype.getArea = function () {
        var _this = this;
        this.dataService.getArea(this.transferForm.controls["regSeq"].value).subscribe(function (d) {
            _this.allAreas = d;
        });
    };
    AdminComponent.prototype.getBranch = function () {
        var _this = this;
        this.dataService.getBranch(this.transferForm.controls["area"].value).subscribe(function (d) {
            _this.allBranches = d;
        });
    };
    AdminComponent.prototype.getPortfolio = function () {
        var _this = this;
        this.dataService.getPortfolio(this.transferForm.controls["branch"].value).subscribe(function (d) {
            _this.allPortfolios = d;
        });
    };
    Object.defineProperty(AdminComponent.prototype, "form", {
        get: function () {
            return this.transferForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AdminComponent.prototype.onSubmitBranchForm = function () {
        console.log(this.branchForm.value);
    };
    AdminComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function () { return _this.loadData(); }))
            .subscribe();
    };
    AdminComponent.prototype.getAllTransferRecord = function () {
        var _this = this;
        this.isCount = true;
        this.allTransfers = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.allTransfers);
        this.paginator.pageIndex = 0;
        this.dataSource.paginator = this.paginator;
        if (this.branchForm.controls['branch'].value == null || this.branchForm.controls['branch'].value == 0) {
            this.onBranchSelection = false;
            this.allTransfers = [];
            this.dataSource = null;
            this.datalength = 0;
            this.searchVal = '';
            return;
        }
        this.spinner.show();
        this.transfersService.getTransfers(this.branchForm.controls['branch'].value, this.paginator.pageIndex, 10, "", this.isCount).subscribe(function (data) {
            _this.spinner.hide();
            _this.allTransfers = data.apps;
            if (_this.allTransfers.length <= 0 && _this.auth.role != 'bm') {
                _this.toaster.info('No Data Found Against This Branch', 'Information');
            }
            ;
            console.log(_this.allTransfers);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.allTransfers);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = data.count;
            _this.dataBeforeFilter = _this.dataSource.data;
            _this.countBeforeFilter = data.count;
            _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
            _this.transfersService.getRegions().subscribe(function (data) {
                _this.allRegions = data;
                // console.log(this.allRegions)
                // this.dataSource = new MatTableDataSource(this.allRegions);
                // this.dataSource.paginator = this.paginator;
                // this.dataSource.sort = this.sort;
            });
            // this.transfersService.getAreas().subscribe(data => this.allAreas = data);
            // this.transfersService.getBranches().subscribe(data => this.allBranches = data);
        }, function (error) {
            _this.spinner.hide();
            _this.toaster.error("Something Went Wrong");
            console.log(error);
        });
    };
    AdminComponent.prototype.loadData = function () {
        var _this = this;
        this.isCount = false;
        if (this.paginator.pageIndex < this.lastPageIndex)
            return;
        if (this.dataSource.paginator.length == this.dataSource.data.length)
            return;
        if (((this.paginator.pageIndex + 1) * this.paginator.pageSize) - this.dataSource.data.length > 0) {
            this.spinner.show();
            this.transfersService.getTransfers(this.branchForm.controls['branch'].value, this.paginator.pageIndex, this.paginator.pageSize, this.filterValue, this.isCount).subscribe(function (data) {
                _this.spinner.hide();
                _this.allTransfers = data.apps;
                _this.lastPageIndex = _this.lastPageIndex + 1;
                _this.dataSource.data = _this.dataSource.data.concat(data.apps);
                data.count = _this.datalength;
                _this.datalength = 0;
                setTimeout(function () { _this.datalength = data.count; }, 50);
                if (_this.allTransfers.length <= 0 && _this.auth.role != 'bm') {
                    _this.toaster.info('No Data Found Against This Branch', 'Information');
                }
                if (_this.filterValue.length == 0) {
                    _this.dataBeforeFilter = _this.dataSource.data;
                    _this.countBeforeFilter = data.count;
                    _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
                }
            }, function (error) {
                _this.spinner.hide();
                console.log('err All Expense Service');
                console.log('err', error);
            });
        }
    };
    AdminComponent.prototype.getFilteredData = function (filterValue) {
        var _this = this;
        this.isCount = true;
        this.paginator.pageIndex = 0;
        this.lastPageIndex = 0;
        this.spinner.show();
        this.transfersService.getTransfers(this.branchForm.controls['branch'].value, this.paginator.pageIndex, this.paginator.pageSize, filterValue, this.isCount).subscribe(function (data) {
            _this.allTransfers = data.apps;
            _this.spinner.hide();
            if (_this.allTransfers.length <= 0) {
                _this.toaster.info('No Data Found Against This Search', 'Information');
            }
            ;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.allTransfers);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = data.count;
        }, function (error) {
            _this.spinner.hide();
            console.log('err All Expense Service');
            console.log('err', error);
        });
    };
    AdminComponent.prototype.onCancelClick = function () {
        var _this = this;
        this.isCount = true;
        this.spinner.show();
        this.allTransfers = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.allTransfers);
        this.paginator.pageIndex = 0;
        this.dataSource.paginator = this.paginator;
        this.transfersService.getTransfers(this.branchForm.controls['branch'].value, this.paginator.pageIndex, 10, "", this.isCount).subscribe(function (data) {
            _this.allTransfers = data.apps;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.allTransfers);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            data.count = _this.datalength;
            _this.datalength = 0;
            setTimeout(function () { _this.datalength = data.count; }, 50);
            _this.spinner.hide();
            _this.dataBeforeFilter = _this.dataSource.data;
            _this.countBeforeFilter = data.count;
            _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
            _this.allTransfersToUpdate = [];
        });
        this.allTransfersToUpdate.forEach(function (element) {
            _this.allTransfersToUpdate.pop();
        });
        this.tranferButtonFlag = true;
        this.checkBoxFlag = false;
        this.greaterLengthFlag = true;
        this.allTransfers.forEach(function (element) {
            element.isChecked = false;
        });
        this.transferForm.reset;
    };
    AdminComponent.prototype.onEditClick = function (transferObj, check, transfer) {
        var _this = this;
        if (!this.isAdmin) {
            this.transferForm.get('regSeq').disable();
            this.transferForm.get('area').disable();
            this.transferForm.get('branch').disable();
            this.transfersService.getPortfoliosByBranch(transfer.branchSeq).subscribe(function (data) {
                _this.allPortfolios = data;
                // this.dataSource = new MatTableDataSource(this.allPortfolios);
                // this.dataSource.paginator = this.paginator;
                // this.dataSource.sort = this.sort;
            });
        }
        this.tranferButtonFlag = false;
        this.isEdit = true;
        if (check == "empty") {
            // this.allTransfersToUpdate.forEach(element => {
            //   if (element.loanAppId == transfer.loanAppId) {
            //     console.log(element.clntSeq + "               " + transfer.clntSeq);
            //     this.flag = true;
            //   }
            // });
            if (this.flag == false) {
                transferObj.push(transfer);
                this.flag = false;
            }
        }
        console.log(transferObj[0]);
        // this.transferForm = transferObj[0];
        this.transferForm = this.formBuilder.group({
            isChecked: [transferObj[0].isChecked],
            clntSeq: [transferObj[0].clntSeq],
            loanAppSeq: [transferObj[0].loanAppSeq],
            region: [transferObj[0].regSeq, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            area: [transferObj[0].area, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            branch: [transferObj[0].branch, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            portfolio: [transferObj[0].portSeq, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            regSeq: 0,
        });
        if (transferObj.length > 1) {
            this.greaterLengthFlag = true;
        }
        else {
            this.greaterLengthFlag = false;
        }
        $('#cmmoncodes').modal({
            keyboard: false,
            backdrop: 'static'
        });
        $('#cmmoncodes').modal('show');
    };
    AdminComponent.prototype.onBranchIndexChanged = function (selectedValue) {
        var _this = this;
        this.allTransfersToUpdate.forEach(function (element) {
            element.branchSeq = selectedValue;
            _this.transfersService.getPortfoliosByBranch(element.branchSeq).subscribe(function (data) {
                _this.allPortfolios = data;
                // this.dataSource = new MatTableDataSource(this.allPortfolios);
                // this.dataSource.paginator = this.paginator;
                // this.dataSource.sort = this.sort;
            });
        });
    };
    AdminComponent.prototype.onSelectedIndexChanged = function () {
        var _this = this;
        this.allTransfersToUpdate.forEach(function (element) {
            element.portSeq = _this.transferForm.controls["portfolio"].value;
        });
        console.log(this.allTransfersToUpdate);
    };
    AdminComponent.prototype.updatePortfolio = function (allTransfersToUpdate) {
        var _this = this;
        this.spinner.show();
        this.isCount = true;
        this.transfersService.updatePort(allTransfersToUpdate).subscribe(function (d) {
            _this.toaster.success('Client Transfered');
            _this.allTransfersToUpdate = [];
            _this.checkBoxFlag = false;
            _this.allTransfers = [];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.allTransfers);
            _this.paginator.pageIndex = 0;
            _this.dataSource.paginator = _this.paginator;
            _this.transfersService.getTransfers(_this.branchForm.controls['branch'].value, _this.paginator.pageIndex, 10, "", _this.isCount).subscribe(function (data) {
                _this.allTransfers = data.apps;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.allTransfers);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
                data.count = _this.datalength;
                _this.datalength = 0;
                setTimeout(function () { _this.datalength = data.count; }, 50);
                _this.spinner.hide();
                _this.dataBeforeFilter = _this.dataSource.data;
                _this.countBeforeFilter = data.count;
                _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
                _this.allTransfersToUpdate = [];
            });
            _this.spinner.hide();
        }, function (error) {
            _this.spinner.hide();
            _this.toaster.error("Something Went Wrong");
            console.log(error);
        });
    };
    AdminComponent.prototype.addTransfer = function (transfer, event) {
        this.checkMethodFlag = false;
        if (transfer.ischecked) {
            this.checkBoxFlag = true;
            this.tranferButtonFlag = false;
            // this.allTransfersToUpdate.forEach(element => {
            //   if (element.loanAppId == transfer.loanAppId) {
            //     console.log("check      " + element.clntSeq + "               " + transfer.clntSeq);
            //     this.flag = true;
            //   }
            // });
            if (this.flag == false) {
                this.allTransfersToUpdate.push(transfer);
                this.flag = false;
            }
            console.log(this.allTransfersToUpdate);
        }
        else if (!transfer.ischecked) {
            this.allTransfersToUpdate.splice(this.allTransfersToUpdate.indexOf(transfer), 1);
            if (this.allTransfersToUpdate.length < 1) {
                this.tranferButtonFlag = true;
                this.checkMethodFlag = true;
                this.checkBoxFlag = false;
            }
            console.log(this.allTransfersToUpdate);
        }
    };
    AdminComponent.prototype.showField = function () {
        this.showFields = true;
    };
    AdminComponent.prototype.closeField = function () {
        this.showFields = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], AdminComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], AdminComponent.prototype, "paginator", void 0);
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/pages/admin/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/pages/admin/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_1__["TransfersService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin/left-side-bar/left-side-bar.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/admin/admin/left-side-bar/left-side-bar.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/admin/left-side-bar/left-side-bar.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/admin/admin/left-side-bar/left-side-bar.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"leftSideBar\">\r\n  <ul class=\"nav nav-tabs borrowerTabs\" id=\"borrowerTabs\" role=\"tablist\">\r\n    <li class=\"nav-item\"> <a class=\"nav-link active\" id=\"nominee-tab\" data-toggle=\"tab\" href=\"#nominee\" role=\"tab\"\r\n        aria-controls=\"home\" aria-selected=\"true\"> <i class=\"fa fa-sliders fa-lg\"></i> Admin</a> </li>\r\n    <li class=\"nav-item\"> <a class=\"nav-link\" id=\"address-tab\" data-toggle=\"tab\" href=\"#addressTab\" role=\"tab\"\r\n        aria-controls=\"addressTab\" aria-selected=\"false\"><i class=\"fa fa-sliders fa-lg\"></i> Filter</a> </li>\r\n  </ul>\r\n\r\n  <div class=\"tab-content\" id=\"borrowerTabsContent\">\r\n    <div class=\"tab-pane fade show active\" id=\"nominee\" role=\"tabpanel\" aria-labelledby=\"nominee-tab\">\r\n\r\n      <div class=\"leftmenu  mt-3\">\r\n        <ul>\r\n          <li [routerLinkActive]=\"['active']\"  *ngIf=\"hasSubMod('/closing')\"><a [routerLink]=\"['/admin/closing']\">{{getName(\"/closing\")}}</a></li>\r\n          <li [routerLinkActive]=\"['active']\"  *ngIf=\"hasSubMod('/transfers')\"><a [routerLink]=\"['/admin/transfers']\" >{{getName(\"/transfers\")}}</a></li>\r\n          <!--\r\n              <li [routerLinkActive]=\"['active']\" ><a [routerLink]=\"['/admin/reschedule']\" >Reschedule</a></li>\r\n              <li [routerLinkActive]=\"['active']\" ><a [routerLink]=\"['/admin/write-off']\" >Write-off</a></li>\r\n              -->\r\n          <li [routerLinkActive]=\"['active']\"  *ngIf=\"hasSubMod('/loan-servicing')\"><a [routerLink]=\"['/admin/loan-servicing']\">{{getName(\"/loan-servicing\")}}</a></li>\r\n          <li *ngIf=\"hasSubMod('/file-upload')\" [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/admin/file-upload']\">{{getName(\"/file-upload\")}}</a></li>\r\n          <li [routerLinkActive]=\"['active']\"  *ngIf=\"hasSubMod('/access-recoveries')\"><a [routerLink]=\"['/admin/access-recoveries']\">{{getName(\"/access-recoveries\")}}</a></li>\r\n          <li [routerLinkActive]=\"['active']\"  *ngIf=\"hasSubMod('/ClientHealthInsuranceClaims')\"><a [routerLink]=\"['/admin/ClientHealthInsuranceClaims']\">{{getName(\"/ClientHealthInsuranceClaims\")}}</a>\r\n          </li>\r\n          <li *ngIf=\"hasSubMod('/journel-voucher')\" [routerLinkActive]=\"['active']\"><a\r\n              [routerLink]=\"['/admin/journel-voucher']\">{{getName(\"/journel-voucher\")}}</a></li>\r\n          <li *ngIf=\"hasSubMod('/attendance')\" [routerLinkActive]=\"['active']\"><a\r\n              [routerLink]=\"['/admin/attendance']\">{{getName(\"/attendance\")}}</a></li>\r\n          <!-- <li  [routerLinkActive]=\"['active']\" ><a [routerLink]=\"['/admin/animal-insr-claim']\" >Animal Insurance Claim</a></li> -->\r\n          <li *ngIf=\"auth.role=='bm'\" [routerLinkActive]=\"['active']\"><a\r\n              [routerLink]=\"['/admin/target-managment']\">Target Managment</a></li>\r\n          <li *ngIf=\"hasSubMod('/employee-assignment')\" [routerLinkActive]=\"['active']\"><a\r\n              [routerLink]=\"['/admin/employee-assignment']\">{{getName(\"/employee-assignment\")}}</a></li>\r\n          <!-- <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/admin/donor-tagging']\">Donor Tagging</a></li> -->\r\n          <li *ngIf=\"hasSubMod('/donor-tagging')\" [routerLinkActive]=\"['active']\"><a\r\n            [routerLink]=\"['/admin/donor-tagging']\">{{getName(\"/donor-tagging\")}}</a></li>\r\n            <li *ngIf=\"hasSubMod('/write-off')\" [routerLinkActive]=\"['active']\"><a\r\n              [routerLink]=\"['/admin/write-off']\">{{getName(\"/write-off\")}}</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"tab-pane fade\" id=\"addressTab\" role=\"tabpanel\" aria-labelledby=\"address-tab\">\r\n      <div class=\"filtersWrap mt-3\">\r\n        <div class=\"cRow\">\r\n          <div class=\"cCol3\">\r\n            <label class=\"mb-0\">From Date:</label>\r\n            <div class=\"input-group date\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"DD / MM / YYYY\">\r\n              <div class=\"input-group-append input-group-addon\t\">\r\n                <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"cCol3\">\r\n            <label class=\"mb-0\">To Date:</label>\r\n            <div class=\"input-group date\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"DD / MM / YYYY\">\r\n              <div class=\"input-group-append input-group-addon\t\">\r\n                <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"cCol2\">\r\n            <label class=\"blankLabel d-block mb-0\">&nbsp;</label>\r\n            <div class=\"checkbox mb-1 mr-2 d-inline-block\">\r\n              <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" id=\"checkbox1\" name=\"coBorrower\" class=\"custom-control-input\">\r\n                <label class=\"custom-control-label\" for=\"checkbox1\"> Overdue</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"filter\"> <a href=\"#.\" class=\"acc_trigger\">Organization</a>\r\n          <div class=\"collapse acc_container\" id=\"region\">\r\n            <div class=\"listmenu\">\r\n              <ul class=\"sub-menu\">\r\n                <li>LAHORE REGION\r\n                  <ul class=\"sub-menu\">\r\n                    <li>ALAHORE-02\r\n                      <ul class=\"sub-menu\">\r\n                        <li>SIRAJ PURA\r\n                          <ul class=\"sub-menu\">\r\n                            <li>North</li>\r\n                          </ul>\r\n                        </li>\r\n                        <li>BEDIAN\r\n                          <ul class=\"sub-menu\">\r\n                            <li>South</li>\r\n                          </ul>\r\n                        </li>\r\n                      </ul>\r\n                    </li>\r\n                  </ul>\r\n                </li>\r\n                <li>SAHIWAL REGION\r\n                  <ul class=\"sub-menu\">\r\n                    <li>KASUR-01\r\n                      <ul class=\"sub-menu\">\r\n                        <li>KASUR-01\r\n                          <ul class=\"sub-menu\">\r\n                            <li>East</li>\r\n                          </ul>\r\n                        </li>\r\n                      </ul>\r\n                    </li>\r\n                  </ul>\r\n                </li>\r\n                <li>BAHAWALPUR REGION\r\n                  <ul class=\"sub-menu\">\r\n                    <li>BAHAWALPUR-01\r\n                      <ul class=\"sub-menu\">\r\n                        <li>BAHAWALPUR-01\r\n                          <ul class=\"sub-menu\">\r\n                            <li>West</li>\r\n                          </ul>\r\n                        </li>\r\n                      </ul>\r\n                    </li>\r\n                  </ul>\r\n                </li>\r\n                <li>KPK/PINDI REGION\r\n                  <ul class=\"sub-menu\">\r\n                    <li>MARDAN\r\n                      <ul class=\"sub-menu\">\r\n                        <li>MARDAN KHAAS\r\n                          <ul class=\"sub-menu\">\r\n                            <li>South</li>\r\n                          </ul>\r\n                        </li>\r\n                      </ul>\r\n                    </li>\r\n                  </ul>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/admin/left-side-bar/left-side-bar.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/admin/admin/left-side-bar/left-side-bar.component.ts ***!
  \****************************************************************************/
/*! exports provided: LeftSideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSideBarComponent", function() { return LeftSideBarComponent; });
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

var LeftSideBarComponent = /** @class */ (function () {
    function LeftSideBarComponent() {
        this.auth = JSON.parse(sessionStorage.getItem("auth"));
        this.subMods = [];
    }
    LeftSideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.auth.modules);
        this.auth.modules.forEach(function (screen) {
            if (screen.modUrl.indexOf("admin") >= 0) {
                _this.subMods = screen.subMods;
            }
        });
        console.log(this.subMods);
    };
    LeftSideBarComponent.prototype.checkIfBM = function () {
        if (this.auth.role == 'bm') {
            return true;
        }
        return false;
    };
    LeftSideBarComponent.prototype.hasSubMod = function (url) {
        var v = false;
        this.subMods.forEach(function (sub) {
            if (sub.subModUrl == url) {
                v = true;
            }
        });
        return v;
    };
    LeftSideBarComponent.prototype.getName = function (url) {
        var v = "";
        this.subMods.forEach(function (sub) {
            if (sub.subModUrl == url) {
                v = sub.subModNm;
            }
        });
        return v;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], LeftSideBarComponent.prototype, "commonCodes", void 0);
    LeftSideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-left-side-bar-admin',
            template: __webpack_require__(/*! ./left-side-bar.component.html */ "./src/app/pages/admin/admin/left-side-bar/left-side-bar.component.html"),
            styles: [__webpack_require__(/*! ./left-side-bar.component.css */ "./src/app/pages/admin/admin/left-side-bar/left-side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftSideBarComponent);
    return LeftSideBarComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/animal-death/animal-death.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/admin/animal-death/animal-death.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/animal-death/animal-death.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin/animal-death/animal-death.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"content mb-md-5\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <h6 class=\"d-inline-block searchshow\">Report Animal Death</h6>\r\n                        </div>\r\n                        <div class=\"col-sm-6 addBtn\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table\" id=\"myTable\">\r\n                            <thead class=\"thead-light\">\r\n                                <tr>\r\n                                    <th>Tag Number</th>\r\n                                    <!-- <th>Animal Kind</th> -->\r\n                                    <th>Animal Type</th>\r\n                                    <th>Animal Breed</th>\r\n                                    <th>Purchase Date</th>\r\n                                    <th>Age</th>\r\n                                    <th>Purchase Amount</th>\r\n                                    <th>Date</th>\r\n                                    <th>Cause</th>\r\n                                    <th>Animal Status</th>\r\n                                    <th>Action</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let anml of allItems\">\r\n\r\n                                    <td>{{anml.tagNum}}</td>\r\n                                    <!-- <td>{{anml.anmlKnd}}</td> -->\r\n                                    <td>{{anml.anmlTyp}}</td>\r\n                                    <td>{{anml.anmlBrd}}</td>\r\n                                    <td>{{anml.prchDt | date: 'dd-MM-yyyy'}}</td>\r\n                                    <td>{{anml.ageYr+\" Years \"+anml.ageMnth+\" Months\"}}</td>\r\n                                    <td>{{anml.prchAmt}}</td>\r\n                                    <td>{{anml.dthDt | date: 'dd-MM-yyyy'}}</td>\r\n                                    <td>{{anml.dthCase}}</td>\r\n                                    <td>{{animalStatus(anml.anmlSts)}}</td>\r\n                                    <!-- <td>{{animalStatus(anml.dthCase)}}</td> -->\r\n                                    <td>\r\n                                        <a *ngIf=\"anml.anmlSts=='-1' || anml.anmlSts==''\" (click)=\"animalReportDeath(anml)\" class=\"iconBtn\"\r\n                                            data-toggle=\"tooltip\" title=\"Report Death\"><img\r\n                                                src=\"assets/images/report-icon.png\" alt=\"\"></a>\r\n                                        <a *ngIf=\"anml.dthDt!='' && anml.flag===3\"\r\n                                            (click)=\"printInsuClmForm(anml.anmlRgstrSeq)\" class=\"iconBtn\"\r\n                                            data-toggle=\"tooltip\" title=\"Print\"><img src=\"assets/images/print-icon.png\"\r\n                                                alt=\"\"></a>\r\n                                        <a *ngIf=\"(anml.anmlSts == 3 || anml.anmlSts == 4) &&  anml.clmSts == 0\"\r\n                                            class=\"iconBtn\" data-toggle=\"tooltip\" title=\"Animal Credit Adjustment\"\r\n                                            (click)=\"onClickOpenDeathAdjustmentForm(anml)\"><i class=\"fa fa-paw\"></i>\r\n                                        </a>\r\n\r\n                                        <a *ngIf=\"anml.anmlSts!='-1' && anml.clmSts == '' && auth.role=='admin'\"\r\n                                            (click)=\"reverseAnimal(anml)\" class=\"iconBtn delBtn\" data-toggle=\"tooltip\"\r\n                                            title=\"Revert\"> <i class=\"fa fa-undo\"></i></a>\r\n\r\n                                        <a *ngIf=\"anml.anmlSts != 5\" class=\"iconBtn\" data-toggle=\"tooltip\"\r\n                                            title=\"Print Death Claim\" (click)=\"printInsuClmForm(anml.anmlRgstrSeq)\"><i\r\n                                                class=\"fa fa-print\"></i>\r\n                                        </a>\r\n\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <a [routerLink]=\"['/admin/loan-servicing']\" class=\"btn btn-primary\">Back</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"modal fade\" id=\"reportAnimalDeath\" role=\"dialog\">\r\n        <div class=\"modal-dialog mymodal\">\r\n\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\">Report Death/Lost/Sold</h5>\r\n                </div>\r\n                <div class=\"alert alert-warning\" *ngIf=\"isLastAnml\">\r\n                    After posting this entry, insurance premium amount will be discarded in LRS for future installments\r\n                    in this application.\r\n                </div>\r\n\r\n                <form [formGroup]=\"animalDeathForm\" (ngSubmit)=\"submitAnimalReportDeath()\">\r\n                    <div class=\"modal-body\">\r\n                        <div class=\"cRow mt-2\">\r\n                            <input type=\"hidden\" formControlName=\"anmlRgstrSeq\" />\r\n                            <div class=\"cCol3-col\">\r\n                                <mat-form-field>\r\n                                    <input type=\"text\" matInput placeholder=\"Tag Number:\" formControlName=\"tagNum\">\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"cCol3-col\">\r\n                                <mat-form-field>\r\n                                    <mat-select placeholder=\"Report\" formControlName=\"type\">\r\n                                        <mat-option [value]=\"3\">\r\n                                            Death\r\n                                        </mat-option>\r\n                                        <mat-option [value]=\"4\">\r\n                                            Theft\r\n                                        </mat-option>\r\n                                        <mat-option [value]=\"5\">\r\n                                            Sold\r\n                                        </mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cRow mt-2\">\r\n                            <div class=\"cCol3-col\">\r\n                                <mat-form-field>\r\n                                    <input matInput required [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"dthDt\"\r\n                                        placeholder=\"Date of Death/Lost/Sold:\" [matDatepicker]=\"picker1\" disabled\r\n                                        readonly />\r\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                                    <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"cCol3-col\">\r\n                                <mat-form-field>\r\n                                    <input type=\"text\" matInput placeholder=\"Cause of Death/Lost/Sold:\"\r\n                                        formControlName=\"dthCase\">\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"modal-footer text-center\">\r\n                        <button type=\"button\" appNoDblClick (click)=\"submitAnimalReportDeath()\"\r\n                            class=\"btn btn-primary btn-min\">OK</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</main>\r\n<div class=\"modal fade\" id=\"reverseAnimal\" role=\"dialog\">\r\n    <div class=\"modal-dialog mymodal\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Reverse Death</h5>\r\n            </div>\r\n            <form class=\"md-float-material\" [formGroup]=\"reverseForm\" (ngSubmit)=\"onSubmitReverseAnimal()\">\r\n                <input type=\"hidden\" formControlName=\"dthRptSeq\" />\r\n                <div class=\"modal-body\">\r\n                    <div class=\"cRow\">\r\n                        <div class=\"cCol6\">\r\n                            <mat-form-field>\r\n                                <input matInput required formControlName=\"cmnt\" placeholder=\"Remarks:\" />\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer text-center\">\r\n                    <button type=\"submit\" class=\"btn btn-primary\">Ok</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"deathAdjustment\" role=\"dialog\">\r\n    <div class=\"modal-dialog mymodal\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Animal Death Adjustment</h5>\r\n            </div>\r\n            <form class=\"md-float-material\" [formGroup]=\"deathAdjustmentForm\"\r\n                (ngSubmit)=\"onSubmitAnimalDeathAdjustmentForm()\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"cRow\">\r\n                        <div class=\"cCol6\">\r\n\r\n                            <mat-form-field>\r\n                                <input matInput (keypress)=\"onlyNumbers($event)\" formControlName=\"anmlDthAdj\"\r\n                                    placeholder=\"Animal Death Adjustment:\" />\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer text-center\">\r\n                    <button type=\"button\" appNoDblClick (click)=\"onSubmitAnimalDeathAdjustmentForm()\"  [disabled]=\"!deathAdjustmentForm.valid\" class=\"btn btn-primary\">Ok</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/animal-death/animal-death.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/admin/animal-death/animal-death.component.ts ***!
  \********************************************************************/
/*! exports provided: AnimalDeathComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalDeathComponent", function() { return AnimalDeathComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_anml_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/anml.service */ "./src/app/shared/services/anml.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_loan_servicing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/loan-servicing.service */ "./src/app/shared/services/loan-servicing.service.ts");
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







var AnimalDeathComponent = /** @class */ (function () {
    function AnimalDeathComponent(fb, anmlService, route, loanServicingService, toaster, spinner) {
        this.fb = fb;
        this.anmlService = anmlService;
        this.route = route;
        this.loanServicingService = loanServicingService;
        this.toaster = toaster;
        this.spinner = spinner;
        this.maxDate = new Date();
        this.submitted = false;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.animalDeathForm = this.fb.group({
            anmlRgstrSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tagNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dthDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dthCase: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.deathAdjustmentForm = this.fb.group({
            anmlDthAdj: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    AnimalDeathComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.clntSeq = +params['id'];
        });
        console.log(this.clntSeq);
        this.anmlService.getAnmlList(this.clntSeq).subscribe((function (data) {
            _this.allItems = data;
            _this.allItems.forEach(function (ele) {
                _this.minDate = ele.rgstrDt;
            });
        }));
        this.reverseForm = this.fb.group({
            dthRptSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cmnt: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9a-zA-Z ]+$")]],
        });
    };
    AnimalDeathComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    AnimalDeathComponent.prototype.animalStatus = function (flag) {
        var str = '';
        if (flag == 3) {
            str = 'Death';
        }
        else if (flag == 4) {
            str = 'Theft';
        }
        else if (flag == 5) {
            str = 'Sold';
        }
        return str;
    };
    AnimalDeathComponent.prototype.animalReportDeath = function (anml) {
        var dthAnmlCount = 0;
        this.allItems.forEach(function (a) {
            if (a.flag != 0) {
                dthAnmlCount++;
            }
        });
        if (this.allItems.length - 1 == dthAnmlCount) {
            this.isLastAnml = true;
        }
        this.animal = anml;
        this.animalDeathForm = this.fb.group({
            anmlRgstrSeq: [anml.anmlRgstrSeq, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tagNum: [{ value: anml.tagNum, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dthDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dthCase: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        $('#reportAnimalDeath').modal('show');
    };
    AnimalDeathComponent.prototype.submitAnimalReportDeath = function () {
        var _this = this;
        this.spinner.show();
        console.log(this.animalDeathForm.value);
        $('#reportAnimalDeath').modal('hide');
        this.submitted = true;
        this.anmlService.addAnmlDeath(this.animalDeathForm.value).subscribe(function (data) {
            console.log(_this.clntSeq);
            _this.spinner.hide();
            _this.anmlService.getAnmlList(_this.clntSeq).subscribe((function (data) {
                _this.allItems = data;
            }));
            _this.animal.dthDt = _this.animalDeathForm.value.dthDt;
            _this.animal.dthCase = _this.animalDeathForm.value.dthCase;
            if (_this.animalDeathForm.value.type === 3) {
                _this.printInsuClmForm(_this.animal.anmlRgstrSeq);
            }
        }, function (error) {
            _this.spinner.hide();
            if (error.status == 500) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
            else if (error) {
                _this.toaster.error("Internal Server Error", "Error");
            }
        });
    };
    AnimalDeathComponent.prototype.reverseAnimal = function (anml) {
        $('#reverseAnimal').modal('show');
        this.animal = null;
        this.animal = anml;
        this.reverseForm = this.fb.group({
            dthRptSeq: [anml.anmlRgstrSeq, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cmnt: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9a-zA-Z ]+$")]],
        });
    };
    AnimalDeathComponent.prototype.onSubmitReverseAnimal = function () {
        var _this = this;
        this.spinner.show();
        $('#reverseAnimal').modal('hide');
        console.log(this.reverseForm.value);
        this.reverseForm.value.cmnt == null ? ' ' : this.reverseForm.value.cmnt;
        this.loanServicingService.reversAnimalReportDeath(this.animal.anmlRgstrSeq, this.reverseForm.value.cmnt).subscribe(function (d) {
            _this.spinner.hide();
            console.log(_this.clntSeq);
            _this.anmlService.getAnmlList(_this.clntSeq).subscribe((function (data) {
                _this.allItems = data;
                _this.allItems.forEach(function (ele) {
                    _this.minDate = ele.rgstrDt;
                });
            }));
            if (d != null) {
                _this.animal.dthDt = "";
                _this.animal.dthCase = "";
                _this.animal.flag = "";
            }
        }, function (error) {
            _this.spinner.hide();
        });
    };
    AnimalDeathComponent.prototype.printInsuClmForm = function (anmlRgstrSeq) {
        this.loanServicingService.printAnmlInsuClmForm(anmlRgstrSeq).subscribe(function (response) {
            var binaryData = [];
            binaryData.push(response);
            var fileURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
            window.open(fileURL, '_blank');
        });
    };
    AnimalDeathComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AnimalDeathComponent.prototype.onClickOpenDeathAdjustmentForm = function (anml) {
        $('#deathAdjustment').modal('show');
        this.deathAdjustmentForm.reset();
        this.animal = null;
        this.animal = anml;
    };
    AnimalDeathComponent.prototype.onSubmitAnimalDeathAdjustmentForm = function () {
        var _this = this;
        console.log(this.clntSeq);
        console.log(this.deathAdjustmentForm.controls['anmlDthAdj'].value);
        this.spinner.show();
        this.anmlService.postAnimalLoanAdjust(this.animal.anmlRgstrSeq, this.animal.anmlSts, this.deathAdjustmentForm.controls['anmlDthAdj'].value).subscribe(function (data) {
            _this.animal.clmSts = 1;
            _this.spinner.hide();
            console.log(data);
            _this.toaster.success("Animal Death Adjusted");
            $('#deathAdjustment').modal('hide');
            _this.anmlService.getAnmlList(_this.clntSeq).subscribe((function (data) {
                _this.allItems = data;
            }));
        }, function (error) {
            _this.spinner.hide();
            $('#deathAdjustment').modal('hide');
            if (error.status == 500) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
            else if (error) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
        });
    };
    AnimalDeathComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-animal-death',
            template: __webpack_require__(/*! ./animal-death.component.html */ "./src/app/pages/admin/animal-death/animal-death.component.html"),
            styles: [__webpack_require__(/*! ./animal-death.component.css */ "./src/app/pages/admin/animal-death/animal-death.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_anml_service__WEBPACK_IMPORTED_MODULE_2__["AnmlService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_shared_services_loan_servicing_service__WEBPACK_IMPORTED_MODULE_4__["LoanServicingService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], AnimalDeathComponent);
    return AnimalDeathComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/animal-insurance-claim/animal-insurance-claim.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/admin/animal-insurance-claim/animal-insurance-claim.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mat-cell, .mat-header-cell {\r\n  font-size: 14px;\r\n  }\r\n  \r\n  .mat-cell, .mat-footer-cell {\r\n  font-size: 13px;\r\n  }\r\n  \r\n  table {\r\n  width: 100%;\r\n  }\r\n  \r\n  th.mat-header-cell {\r\n      vertical-align: middle;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/pages/admin/animal-insurance-claim/animal-insurance-claim.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/admin/animal-insurance-claim/animal-insurance-claim.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar-admin></app-left-side-bar-admin>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content\">\r\n          <div class=\"mysearchbox\">\r\n            <h6 class=\"d-inline-block searchshow\">Animal Insurance Claim <i class=\"fa fa-search\"> </i></h6>\r\n            <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n              <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\"\r\n                title=\"Type in a name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row clearfix\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"cRow\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal fade\" id=\"ApplyPayment\" role=\"dialog\">\r\n            <div class=\"modal-dialog mymodal bigger\">\r\n\r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Animal Insurance Claim</h5>\r\n                </div>\r\n                <form [formGroup]=\"insrForm\" (ngSubmit)=\"onSaveClick()\">\r\n                  <div class=\"modal-body\">\r\n\r\n                    <div class=\"cRow\">\r\n                      <div class=\"cCol2\">\r\n                        <label>Claim Status</label>\r\n                        <select type=\"\" formControlName=\"sts\" class=\"form-control\" id=\"sts\">\r\n                          <option *ngFor=\"let sts of statusArray\" [value]=\"sts.codeKey\">{{sts.codeValue}}</option>\r\n                        </select>\r\n                      </div>\r\n\r\n                      <div class=\"cCol2\">\r\n                        <label>Remarks</label>\r\n                        <input type=\"text\" formControlName=\"rmrks\" class=\"form-control\" />\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"modal-footer text-center\">\r\n                    <button type=\"submit\" class=\"btn btn-primary btn-min\">Save</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"table-responsive\">\r\n            <table class=\"table record\" id=\"myTable\">\r\n              <thead class=\"thead-blue thead-light\">\r\n                <tr>\r\n                  <th>Client Id</th>\r\n                  <th>Client CNIC</th>\r\n                  <th>Client Name</th>\r\n                  <th>Claim Amount</th>\r\n                  <th>Tag Num</th>\r\n                  <th>Reason</th>\r\n                  <th>Date</th>\r\n                  <th>Status</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let claim of claims\">\r\n                  <td>{{claim.clntId}}</td>\r\n                  <td>{{claim.cnicNum}}</td>\r\n                  <td>{{claim.frstNm}} {{claim.lastNm}}</td>\r\n                  <td>{{claim.amt}}</td>\r\n                  <td>{{claim.tagNum}}</td>\r\n                  <td>{{claim.clntNomFlg == '3' ? \"DEATH\" : \"STOLEN\"}}</td>\r\n                  <td>{{claim.dtOfDth | date : 'dd-MM-yyyy'}}</td>\r\n                  <td>{{findValueByKey(claim.sts)}}</td>\r\n                  <td>\r\n                    <span><a data-toggle=\"modal\" data-target=\"#ApplyPayment\" (click)=\"onInstUpdate(claim)\"\r\n                        class=\"iconBtn\"><img src=\"assets/images/rscheck.png\" alt=\"\"></a></span> -->\r\n          <!-- <a  class=\"iconBtn\" (click)=\"onEdit(businessSector)\"><i class=\"fa fa-pencil\"></i></a> -->\r\n          <!-- </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div> -->\r\n\r\n          <!-------------------------DATA TABLE----------------------------->\r\n          <div class=\"table-responsive\">\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"table\" multiTemplateDataRows matSort id=\"myTable\">\r\n\r\n              <!-- Client ID Column -->\r\n              <ng-container matColumnDef=\"clntId\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Client ID</th>\r\n                <td mat-cell *matCellDef=\"let claim\">{{claim.clntId}}</td>\r\n              </ng-container>\r\n\r\n              <!--CLient CNIC Column -->\r\n              <ng-container matColumnDef=\"cnicNum\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Client CNIC</th>\r\n                <td mat-cell *matCellDef=\"let claim\">{{claim.cnicNum}}</td>\r\n              </ng-container>\r\n\r\n              <!-- CLient Name Column -->\r\n              <ng-container matColumnDef=\"frstNm\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Client Name</th>\r\n                <td mat-cell *matCellDef=\"let claim\">{{claim.frstNm}} {{claim.lastNm}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Claim Amount Column -->\r\n              <ng-container matColumnDef=\"amt\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Claim Amount</th>\r\n                <td mat-cell *matCellDef=\"let claim\">{{claim.amt}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Tag Number Column -->\r\n              <ng-container matColumnDef=\"tagNum\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Tag Num</th>\r\n                <td mat-cell *matCellDef=\"let claim\">{{claim.tagNum}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Reason Column -->\r\n              <ng-container matColumnDef=\"clntNomFlg\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Reason</th>\r\n                <td mat-cell *matCellDef=\"let claim\">{{claim.clntNomFlg == '3' ? \"DEATH\" : \"STOLEN\"}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Date Column -->\r\n              <ng-container matColumnDef=\"dtOfDth\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Date</th>\r\n                <td mat-cell *matCellDef=\"let claim\">{{claim.dtOfDth | date : 'dd-MM-yyyy'}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Status Column -->\r\n              <ng-container matColumnDef=\"sts\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r\n                <td mat-cell *matCellDef=\"let claim\">{{findValueByKey(claim.sts)}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Action Column -->\r\n              <ng-container matColumnDef=\"action\">\r\n                <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                <td mat-cell *matCellDef=\"let claim\">\r\n                  <span><a data-toggle=\"modal\" data-target=\"#ApplyPayment\" (click)=\"onInstUpdate(claim)\"\r\n                      class=\"iconBtn\"><img src=\"assets/images/rscheck.png\" alt=\"\"></a></span>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"thead-light thead-blue\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n\r\n            <mat-paginator [pageSizeOptions]=\"[10, 20]\" showFirstLastButtons>\r\n            </mat-paginator>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/admin/animal-insurance-claim/animal-insurance-claim.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/admin/animal-insurance-claim/animal-insurance-claim.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AnimalInsuranceClaimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalInsuranceClaimComponent", function() { return AnimalInsuranceClaimComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var src_app_shared_services_anml_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/anml.service */ "./src/app/shared/services/anml.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AnimalInsuranceClaimComponent = /** @class */ (function () {
    function AnimalInsuranceClaimComponent(formBuilder, anmlService, toaster, spinner, commonService) {
        this.formBuilder = formBuilder;
        this.anmlService = anmlService;
        this.toaster = toaster;
        this.spinner = spinner;
        this.commonService = commonService;
    }
    AnimalInsuranceClaimComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    AnimalInsuranceClaimComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.displayedColumns = ['clntId', 'cnicNum', 'frstNm', 'amt', 'tagNum', 'clntNomFlg', 'dtOfDth', 'sts', 'action'];
        this.spinner.show();
        this.anmlService.getAnmlInsuranceClaims().subscribe(function (res) {
            console.log(res);
            _this.spinner.hide();
            _this.claims = res;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.claims);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) {
            _this.spinner.hide();
        });
        this.loadLovs();
        this.insrForm = this.formBuilder.group({
            dthRptSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sts: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            rmrks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    Object.defineProperty(AnimalInsuranceClaimComponent.prototype, "form", {
        get: function () {
            return this.insrForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ;
    AnimalInsuranceClaimComponent.prototype.onSaveClick = function () {
        var _this = this;
        this.spinner.show();
        console.log(this.insrForm.value);
        this.anmlService.updateAnmlInsuranceClaims(this.insrForm.value.dthRptSeq, this.insrForm.value.sts, this.insrForm.value.rmrks).subscribe(function (res) {
            _this.claim.sts = _this.insrForm.value.sts;
            _this.claim.rmrks = _this.insrForm.value.rmrks;
            _this.spinner.hide();
            $('#ApplyPayment').modal('hide');
            _this.toaster.success("Saved");
        }, function (error) {
            console.log(error);
            _this.spinner.hide();
        });
    };
    AnimalInsuranceClaimComponent.prototype.onInstUpdate = function (claim) {
        this.insrForm.reset();
        $('#ApplyPayment').modal('show');
        this.claim = claim;
        this.insrForm = this.formBuilder.group({
            dthRptSeq: [this.claim.dthRptSeq, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sts: [this.claim.sts, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            rmrks: [this.claim.rmrks],
        });
    };
    ;
    AnimalInsuranceClaimComponent.prototype.findValueByKey = function (key) {
        var status = '';
        if (this.statusArray) {
            this.statusArray.forEach(function (s) {
                if (s.codeKey == key) {
                    status = s.codeValue;
                }
            });
        }
        return status;
    };
    AnimalInsuranceClaimComponent.prototype.loadLovs = function () {
        var _this = this;
        this.commonService.getValues("0385").subscribe(function (res) {
            _this.statusArray = res;
        }, function (error) {
            console.log('err', error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], AnimalInsuranceClaimComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], AnimalInsuranceClaimComponent.prototype, "paginator", void 0);
    AnimalInsuranceClaimComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-animal-insurance-claim',
            template: __webpack_require__(/*! ./animal-insurance-claim.component.html */ "./src/app/pages/admin/animal-insurance-claim/animal-insurance-claim.component.html"),
            styles: [__webpack_require__(/*! ./animal-insurance-claim.component.css */ "./src/app/pages/admin/animal-insurance-claim/animal-insurance-claim.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_shared_services_anml_service__WEBPACK_IMPORTED_MODULE_3__["AnmlService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], _shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], AnimalInsuranceClaimComponent);
    return AnimalInsuranceClaimComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/area-attendance/area-attendance.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin/area-attendance/area-attendance.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/area-attendance/area-attendance.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/admin/area-attendance/area-attendance.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n        <div class=\"content\">\r\n            <div class=\"row clearfix\">\r\n              <div class=\"col-sm-4\">\r\n                <mat-form-field>\r\n                  <input [matDatepickerFilter]=\"myFilter\" matInput required [max]=\"maxDate\" [min]=\"minDate\"\r\n                    [(ngModel)]=\"attDate\" (dateChange)=\"getForDate()\" placeholder=\"Attendance Date:\"\r\n                    [matDatepicker]=\"picker1\" readonly>\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                  <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n              <!-- <div class=\"col-sm-6\">\r\n                  <button class=\"btn btn-primary\" type=\"button\"  (click)=\"getForDate()\">Get Attedance</button>\r\n              </div> -->\r\n              <div class=\"col-sm-2\">\r\n                <button *ngIf=\"showGen\" class=\"btn btn-primary btn-sm\" type=\"button\"\r\n                  (click)=\"generate()\">Generate</button>\r\n              </div>\r\n              <div class=\"col-sm-6 addBtn\">\r\n                <button [disabled]=\"fieldpost\" class=\"btn btn-primary btn-sm\" (click)=\"postAllAttendence()\"> Post All\r\n                </button>\r\n              </div>\r\n            </div>\r\n  \r\n            <!-- <form [formGroup]=\"attendanceForm\" (ngSubmit)=\"onAttendSubmit()\"> -->\r\n  \r\n            <div class=\"table-responsive\">\r\n              <table class=\"table\">\r\n                <thead class=\"thead-light\">\r\n                  <tr>\r\n                    <th>Employee ID</th>\r\n                    <!-- <th style=\"width:13%\">Employee Sequence</th> -->\r\n                    <th>Name</th>\r\n                    <th>Designation</th>\r\n                    <th>Department</th>\r\n                    <th>Status</th>\r\n                    <th>Check In</th>\r\n                    <th>Check Out</th>\r\n                    <th style=\"width:13%\">Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let obj of attendanceListing; let i = index; let k = index\">\r\n                    <td>{{obj.employee_id}}</td>\r\n                    <!-- <td>\r\n                          <input type=\"text\" formControlName=\"empSeq\" class=\"form-control\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && f.empSeq.errors }\">\r\n    \r\n    \r\n                          <div *ngIf=\"submitted && f.empSeq.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.empSeq.errors.required\">Employee Sequence is required</div>\r\n                          </div>\r\n                        </td> -->\r\n                    <td>{{obj.emp_nm}}</td>\r\n                    <td>{{obj.designation}}</td>\r\n                    <td>{{obj.department}}</td>\r\n                    <td style=\"width: 10%\">\r\n                      <select [disabled]=\"obj.postFlg\" *ngIf=\"obj.gender == 'M'\" [(ngModel)]=\"obj.leave_id\"\r\n                        class=\"form-control\" (change)=\"onLeaveIdChange($event)\">\r\n  \r\n                        <option *ngFor=\"let leave of leaveStatusListingForMale\" [disabled]=\"leave.short_desc === 'MT'\"\r\n                          [value]=\"leave.leave_id\">{{leave.short_desc}}\r\n                        </option>\r\n                      </select>\r\n  \r\n                      <select [disabled]=\"obj.postFlg\" *ngIf=\"obj.gender == 'F'\" [(ngModel)]=\"obj.leave_id\"\r\n                        class=\"form-control\" (change)=\"onLeaveIdChange($event)\">\r\n  \r\n                        <option *ngFor=\"let leave of leaveStatusListingForFemale\" [disabled]=\"leave.short_desc == 'PAT'\"\r\n                          [value]=\"leave.leave_id\">\r\n                          {{leave.short_desc}}\r\n                        </option>\r\n                      </select>\r\n                      <!-- <div *ngIf=\"submitted && f.leaveTypes.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.leaveTypes.errors.required\">Select a Leave Type</div>\r\n                          </div> -->\r\n                    </td>\r\n                    <td>\r\n                      <span *ngIf=\"obj.leave_id == 6 || obj.leave_id == 3\">\r\n                        <input [disabled]=\"obj.postFlg\" [owlDateTime]=\"i\" [(ngModel)]=\"obj.time_in\"\r\n                          [ngClass]=\"{'redshadow': obj.checkInSaved == false, 'greenshadow': obj.checkInSaved == true}\"\r\n                          [owlDateTimeTrigger]=\"i\" placeholder=\"Check In Time\">\r\n                        <owl-date-time [hour12Timer]=\"true\" [pickerType]=\"'timer'\" #i></owl-date-time>\r\n                      </span>\r\n                    </td>\r\n                    <td>\r\n                      <ng-container *ngIf=\"obj.checkInSaved && obj.time_in \">\r\n                        <span *ngIf=\"obj.leave_id == 6 || obj.leave_id == 3\">\r\n                          <input [disabled]=\"obj.postFlg\" [min]=\"obj.time_in\" [max]=\"maxAttDate\" [owlDateTime]=\"k\"\r\n                            [ngClass]=\"{'redshadow': obj.checkOutSaved == false, 'greenshadow': obj.checkOutSaved == true}\"\r\n                            [(ngModel)]=\"obj.time_out\" [owlDateTimeTrigger]=\"k\" placeholder=\"Check Out Time\" required>\r\n                          <owl-date-time [hour12Timer]=\"true\" [pickerType]=\"'timer'\" #k></owl-date-time>\r\n                        </span>\r\n                      </ng-container>\r\n                    </td>\r\n                    <td>\r\n  \r\n                      <ng-container>\r\n                        <button *ngIf=\"obj.leave_id == 6 || obj.leave_id == 3\" [disabled]=\"!obj.time_in || obj.postFlg \"\r\n                          (click)=\"onCheckInSubmit(obj)\" class=\"btn btn-group-sm\" data-toggle=\"tooltip\" title=\"Save\"><i\r\n                            class=\"fa fa-sign-in\"></i></button>\r\n                      </ng-container>\r\n                      <!-- \r\n                        <ng-container *ngIf=\"obj.checkInSaved && obj.time_out\">\r\n                          <button *ngIf=\"obj.leave_id == 6\" [disabled]=\"!obj.time_out || obj.postFlg \"\r\n                            (click)=\"onCheckOutSubmit(obj)\" class=\"btn btn-group-sm\" data-toggle=\"tooltip\"\r\n                            title=\"Check Out\"><i class=\"fa fa-sign-out\"></i></button>\r\n                        </ng-container> -->\r\n  \r\n                      <span *ngIf=\"obj.leave_id != 6\" data-toggle=\"tooltip\" title=\"Leave Application\">\r\n                        <a class=\"iconBtn\" (click)=\"onLeaveRequestClick(obj)\"><i class=\"fa fa-user\"></i></a>\r\n                      </span>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <!-- </form> -->\r\n            <div class=\"modal fade\" id=\"attendance\" role=\"dialog\">\r\n              <div class=\"modal-dialog bigger mymodal\">\r\n  \r\n                <!-- Modal content-->\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\">Leave Application</h5>\r\n                  </div>\r\n                  <form [formGroup]=\"leaveForm\" (ngSubmit)=\"onLeaveSubmit()\">\r\n                    <div class=\"modal-body\">\r\n                      <div class=\"cRow\">\r\n  \r\n  \r\n  \r\n                        <div class=\"cCol2\">\r\n                          <label>Leave Type:</label>\r\n                          <select disabled formControlName=\"leaveId\" name=\"leaveId\" class=\"form-control\">\r\n  \r\n                            <option *ngFor=\"let leave of leaveStatusListing\" [value]=\"leave.leave_id\">\r\n                              {{leave.description}}\r\n                            </option>\r\n                          </select>\r\n                        </div>\r\n  \r\n  \r\n                        <!-- <div class=\"cCol2\">\r\n                      <mat-form-field>\r\n                        <mat-label>Leave ID</mat-label>\r\n                        <mat-select disabled formControlName=\"leaveId\" name=\"leaveId\">\r\n                          <mat-option *ngFor=\"let leave of leaveStatusListing\" [value]=\"leave.leave_id\">\r\n                            {{leave.description}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div> -->\r\n  \r\n  \r\n  \r\n  \r\n                        <!---------------------------             Original latest Transaction Number          -------------------------------------------->\r\n  \r\n                        <!-- <div class=\"cCol2\">\r\n                      <label>Transaction Number:</label>\r\n                      <input maxlength=\"5\" (keypress)=\"onlyNumbers($event)\" [readonly]=\"leaveForm.controls['postFlg'].value\"\r\n                        type=\"text\" class=\"form-control\" formControlName=\"transactionNo\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.transactionNo.errors && f.transactionNo.touched }\" />\r\n                      <div *ngIf=\"submitted && f.transactionNo.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.transactionNo.errors.required\">Transaction Number is required</div>\r\n                      </div>\r\n                    </div> -->\r\n  \r\n                        <!---------------------------             old one dont use it Transaction Number          ---------------------------------------------------->\r\n  \r\n  \r\n                        <!-- <div class=\"cCol2\">\r\n                      <mat-form-field>\r\n                        <input matInput placeholder=\"Transaction Number:\" maxlength=\"5\" (keypress)=\"onlyNumbers($event)\"\r\n                          [readonly]=\"leaveForm.controls['postFlg'].value\" type=\"text\" formControlName=\"transactionNo\"\r\n                          [ngClass]=\"{ 'is-invalid': submitted && f.transactionNo.errors && f.transactionNo.touched }\">\r\n                        <div *ngIf=\"submitted && f.transactionNo.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.transactionNo.errors.required\">Transaction Number is required</div>\r\n                        </div>\r\n                      </mat-form-field>\r\n                    </div> -->\r\n  \r\n  \r\n  \r\n                        <div class=\"cCol2\">\r\n                          <label>Application Date:</label>\r\n                          <input disabled type=\"text\" class=\"form-control\" formControlName=\"applicationDate\">\r\n                        </div>\r\n  \r\n  \r\n                        <!-- <div class=\"cCol2\">\r\n                      <mat-form-field>\r\n                        <input matInput readonly placeholder=\"Application Date:\" formControlName=\"applicationDate\">\r\n                      </mat-form-field>\r\n                    </div> -->\r\n  \r\n  \r\n                        <div class=\"cCol2\">\r\n                          <label>From Date/Time:</label>\r\n                          <input [disabled]=\"leaveForm.controls['postFlg'].value\" [min]=\"minLeaveRequestDate\"\r\n                            class=\"form-control\" formControlName=\"fromDate\" [owlDateTime]=\"dt2\" [owlDateTimeTrigger]=\"dt2\"\r\n                            [max]=\"fromDateMax\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && f.fromDate.errors && f.fromDate.touched }\" />\r\n                          <owl-date-time [hour12Timer]=\"true\"\r\n                            [pickerType]=\"leaveForm.controls['leaveId'].value=='3' ? 'timer':'calendar'\" #dt2>\r\n                          </owl-date-time>\r\n                          <div *ngIf=\"submitted && f.fromDate.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.fromDate.errors.required\">From Date/Time is required</div>\r\n                          </div>\r\n                        </div>\r\n  \r\n  \r\n                        <!-- <div class=\"cCol2\">\r\n                      <mat-form-field>\r\n                        <input matInput [matDatepicker]=\"picker\" placeholder=\"From Date/Time:\"\r\n                          [disabled]=\"leaveForm.controls['postFlg'].value\" [min]=\"minLeaveRequestDate\"\r\n                          formControlName=\"fromDate\"\r\n                          [ngClass]=\"{ 'is-invalid': submitted && f.fromDate.errors && f.fromDate.touched }\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #picker></mat-datepicker>\r\n                      </mat-form-field>\r\n                      <div *ngIf=\"submitted && f.fromDate.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.fromDate.errors.required\">From Date/Time is required</div>\r\n                      </div>\r\n                    </div> -->\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n                        <div class=\"cCol2\">\r\n                          <label>To Date/Time:</label>\r\n                          <input [disabled]=\"leaveForm.controls['postFlg'].value\"\r\n                            [min]=\"leaveForm.controls['fromDate'].value || fromDateMax\" [max]=\"\" class=\"form-control\"\r\n                            formControlName=\"toDate\" [owlDateTime]=\"dt3\" [owlDateTimeTrigger]=\"dt3\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && f.toDate.errors && f.toDate.touched }\" />\r\n                          <owl-date-time [hour12Timer]=\"true\"\r\n                            [pickerType]=\"leaveForm.controls['leaveId'].value=='3' ? 'timer':'calendar'\" #dt3>\r\n                          </owl-date-time>\r\n                          <div *ngIf=\"submitted && f.toDate.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.toDate.errors.required\">To Date/Time is required</div>\r\n                          </div>\r\n                        </div>\r\n  \r\n  \r\n                        <!-- <div class=\"cCol2\">\r\n                      <mat-form-field>\r\n                        <input matInput [matDatepicker]=\"picker2\" placeholder=\"To Date/Time:\"\r\n                          [disabled]=\"leaveForm.controls['postFlg'].value\" [min]=\"leaveForm.controls['fromDate'].value\"\r\n                          formControlName=\"toDate\"\r\n                          [ngClass]=\"{ 'is-invalid': submitted && f.toDate.errors && f.toDate.touched }\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #picker2></mat-datepicker>\r\n                        <div *ngIf=\"submitted && f.toDate.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.toDate.errors.required\">To Date/Time is required</div>\r\n                        </div>\r\n                      </mat-form-field>\r\n                    </div> -->\r\n  \r\n  \r\n  \r\n  \r\n  \r\n                        <div class=\"cCol2\">\r\n                          <label>Approved By Code:</label>\r\n                          <select class=\"form-control\" formControlName=\"approvedId\" [(ngModel)]=\"selectedApprovedBy\"\r\n                            (change)=\"onSelectionChanged($event)\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && f.approvedId.errors && f.approvedId.touched }\">\r\n                            <option [disabled]=\"leaveForm.controls['postFlg'].value\" *ngFor=\"let approv of approvedBy\"\r\n                              [value]=\"approv\">{{approv}}\r\n                            </option>\r\n                          </select>\r\n                          <div *ngIf=\"submitted && f.approvedId.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.approvedId.errors.required\">Approved By Code is required</div>\r\n                          </div>\r\n                        </div>\r\n  \r\n  \r\n                        <!-- <div class=\"cCol2\">\r\n                      <mat-form-field>\r\n                        <mat-label>Approved By Code:</mat-label>\r\n                        <mat-select formControlName=\"approvedId\" [(ngModel)]=\"selectedApprovedBy\"\r\n                          (change)=\"onSelectionChanged($event)\"\r\n                          [ngClass]=\"{ 'is-invalid': submitted && f.approvedId.errors && f.approvedId.touched }\">\r\n                          <mat-option [disabled]=\"leaveForm.controls['postFlg'].value\" *ngFor=\"let approv of approvedBy\"\r\n                            [value]=\"approv\">{{approv}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                        <div *ngIf=\"submitted && f.approvedId.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.approvedId.errors.required\">Approved By Code is required</div>\r\n                        </div>\r\n                      </mat-form-field>\r\n                    </div> -->\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n                        <div class=\"cCol2\" *ngIf=\"this.leaveForm.controls['approvedId'].value == 'Other'\">\r\n                          <label>Approved By Other:</label>\r\n                          <input [readonly]=\"leaveForm.controls['postFlg'].value\" maxlength=\"5\" class=\"form-control\"\r\n                            type=\"text\" formControlName=\"selectedAppreoved\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && f.selectedAppreoved.errors && f.selectedAppreoved.touched}\">\r\n                          <div *ngIf=\"submitted && f.selectedAppreoved.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.selectedAppreoved.errors.required\">Approved By Other is required</div>\r\n                          </div>\r\n                        </div>\r\n  \r\n                        <!-- <div class=\"cCol2\" *ngIf=\"this.leaveForm.controls['approvedId'].value == 'Other'\">\r\n                      <mat-form-field>\r\n                        <input [readonly]=\"leaveForm.controls['postFlg'].value\" maxlength=\"5\" type=\"text\"\r\n                          formControlName=\"selectedAppreoved\"\r\n                          [ngClass]=\"{ 'is-invalid': submitted && f.selectedAppreoved.errors && f.selectedAppreoved.touched}\"\r\n                          matInput placeholder=\"Approved By Other:\">\r\n                        <div *ngIf=\"submitted && f.selectedAppreoved.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.selectedAppreoved.errors.required\">Approved By Other is required</div>\r\n                        </div>\r\n                      </mat-form-field>\r\n                    </div> -->\r\n  \r\n  \r\n  \r\n                        <div class=\"col-full\">\r\n                          <label>Reason:</label>\r\n                          <textarea [readonly]=\"leaveForm.controls['postFlg'].value\" type=\"text\" class=\"form-control\"\r\n                            formControlName=\"reason\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && f.reason.errors && f.reason.touched}\">\r\n                                  </textarea>\r\n                          <div *ngIf=\"submitted && f.reason.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.reason.errors.required\">Reason is required</div>\r\n                          </div>\r\n                        </div>\r\n  \r\n  \r\n                        <!-- <div class=\"col-full\">\r\n                      <mat-form-field>\r\n                        <textarea matInput placeholder=\"Reason\" [readonly]=\"leaveForm.controls['postFlg'].value\" type=\"text\"\r\n                          formControlName=\"reason\"\r\n                          [ngClass]=\"{ 'is-invalid': submitted && f.reason.errors && f.reason.touched}\">\r\n                                  ></textarea>\r\n                        <div *ngIf=\"submitted && f.reason.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.reason.errors.required\">Reason is required</div>\r\n                        </div>\r\n                      </mat-form-field>\r\n                    </div> -->\r\n  \r\n  \r\n  \r\n  \r\n                      </div>\r\n                    </div>\r\n                    <div class=\"modal-footer text-center\">\r\n                      <button [disabled]=\"leaveForm.controls['postFlg'].value || !leaveForm.valid\" type=\"submit\"\r\n                        class=\"btn btn-primary btn-min\">Ok</button>\r\n                      <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>"

/***/ }),

/***/ "./src/app/pages/admin/area-attendance/area-attendance.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin/area-attendance/area-attendance.component.ts ***!
  \**************************************************************************/
/*! exports provided: MY_FORMATS, AreaAttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaAttendanceComponent", function() { return AreaAttendanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
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
        dateInput: 'DD-MM-YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
var AreaAttendanceComponent = /** @class */ (function () {
    // chkOt: boolean = false;
    function AreaAttendanceComponent(commonService, fb, spinner, toaster) {
        this.commonService = commonService;
        this.fb = fb;
        this.spinner = spinner;
        this.toaster = toaster;
        this.chekInSeq = [];
        this.checkOut = false;
        this.submitted = false;
        this.fieldpost = false;
        this.chkOut = false;
        //Leave Application
        this.attDate = moment();
        this.maxAttDate = new Date();
        this.fromDateMax = moment(new Date());
        this.selectedApprovedBy = "";
        this.leaveTypes = [
            'Annual Leave',
            'Casual Leave',
            'Maternity Leave',
            'Medical Leave'
        ];
        this.approvedBy = [
            'Cr BM',
            'Cr AM',
            'Cr RM',
            'Other'
        ];
        this.selectedValue = '';
        this.postAll = { "att_date": this.attDate, "brnchSeq": JSON.parse(sessionStorage.getItem("auth")).emp_branch };
        this.showGen = false;
        this.attendanceListing = [];
        //preventing saturdays and sundays
        this.myFilter = function (d) {
            console.log(d);
            var day = d.day();
            return day !== 0 && day !== 6;
        };
        //      this.maxAttDate.set({
        //     hour:   23,
        //     minute: 59,
        //     second: 59
        // });
        // this.maxAttDate.setHours(23);
        // this.maxAttDate.setMinutes(59);
        // this.maxAttDate.setSeconds(59)
        console.log(this.maxAttDate);
        this.maxDate = new Date();
        this.minDate = new Date();
        // this.minDate = new Date(this.minDate.setDate(this.minDate.getDate() +2 1));
        console.log(this.minDate);
        var i = 0;
        while (i <= 1) {
            var d = new Date(this.minDate);
            d.setDate(d.getDate() - 1);
            if (d.getDay() != 0 && d.getDay() != 6) {
                i++;
            }
            this.minDate = new Date(this.minDate.setDate(this.minDate.getDate() - 1));
        }
        // this.minDate = new Date(new Date().setDate(new Date().getDate() - 2));
        console.log(this.minDate);
    }
    AreaAttendanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.fromDateMax);
        //Attendance Form
        this.attendanceForm = this.fb.group({
            empSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            leaveTypes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            clndrDt: [''],
            expSeq: ['']
        });
        //Leave Form
        this.leaveForm = this.fb.group({
            employeeId: [''],
            // transactionNo: ['', Validators.required],
            leaveId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            applicationDate: [moment.parseZone(this.attDate.format('DD-MM-YYYY'))['_i']],
            totalDays: [''],
            appDat: [moment.parseZone(this.attDate.format('DD-MM-YYYY'))['_i']],
            bal: [''],
            fromDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            toDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            approvedId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nam: [''],
            gender: [''],
            selectedAppreoved: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reason: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            transDate: [new Date()],
            postFlg: [false]
        });
        this.commonService.getStatusListing().subscribe(function (res) {
            _this.leaveStatusListing = res;
            console.log(_this.leaveStatusListing);
            _this.leaveStatusListingForFemale = _this.leaveStatusListing;
            console.log(_this.leaveStatusListingForFemale);
            _this.leaveStatusListingForMale = _this.leaveStatusListing;
            console.log(_this.leaveStatusListingForMale);
        });
        this.spinner.show();
        this.getForDate();
        //   this.attendanceForm.controls['checkIn'].valueChanges.subscribe(
        //     (selectedValue) => {
        //       console.log(selectedValue);
        //       console.log(this.attendanceForm.get('checkIn').value);     
        //     }
        // );
    };
    AreaAttendanceComponent.prototype.generate = function () {
        var _this = this;
        this.fieldpost = true;
        this.spinner.show();
        this.commonService.generateAttendanceForToday({ "att_date": this.attDate, "brnchSeq": JSON.parse(sessionStorage.getItem("auth")).emp_branch }).subscribe(function (res) {
            console.log(res);
            res.forEach(function (element) {
                element.checkOutSaved = false;
                element.checkInSaved = false;
            });
            // this.fieldpost = false;
            _this.attendanceListing = res;
            _this.spinner.hide();
            _this.showGen = false;
            _this.temp = JSON.parse(JSON.stringify(res));
        }, function (error) {
            console.log(error);
            _this.toaster.error("Something Went Wrong");
            _this.spinner.hide();
        });
    };
    AreaAttendanceComponent.prototype.onSelectionChanged = function (e) {
        console.log(e);
        if (this.selectedApprovedBy != 'Other') {
            this.leaveForm.controls['selectedAppreoved'].setValue(this.selectedApprovedBy);
        }
        else {
            this.leaveForm.controls['selectedAppreoved'].setValue("");
        }
    };
    AreaAttendanceComponent.prototype.onLeaveIdChange = function (e) {
    };
    AreaAttendanceComponent.prototype.postAllAttendence = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to Post Attendance?',
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#007bff',
            confirmButtonText: 'Yes, Post it!'
        }).then(function (result) {
            if (result.value) {
                // if (this.leaveForm.controls['leave_id']) {
                //   return;
                // }
                // if (this.leaveForm.valid) {
                //   this.toaster.success("Forms are Valid!!");
                // }
                // if (this.leaveForm.invalid) {
                //   console.log(this.leaveForm.controls['employeeId'].value)
                //   this.toaster.error("Some forms are not Valid!!");
                //   return (this.leaveForm.controls['employeeId'].value);
                // }
                console.log(_this.leaveStatusListing);
                _this.spinner.show();
                console.log(_this.attDate);
                console.log(moment.parseZone(_this.attDate.format('DD-MM-YYYY'))['_i']);
                _this.fieldpost = true;
                // let x = this.attDate;
                // console.log(x)
                // let dtStr = x.getDate()+ "-"+(x.getMonth()+1)+'-'+x.getFullYear();
                var date = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US').transform(new Date, 'dd-MM-yyyy');
                _this.commonService.postAllPostFlg(moment.parseZone(_this.attDate.format('DD-MM-YYYY'))['_i']).subscribe(function (res) {
                    console.log(res);
                    _this.postingAllAttendance = res;
                    _this.attendanceListing.forEach(function (r) {
                        r.postFlg = true;
                    });
                    _this.fieldpost = true;
                    _this.spinner.hide();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()('Posted!', 'Attendance Posted Successfully.', 'success');
                }, function (error) {
                    console.log(error);
                    _this.spinner.hide();
                });
            }
        });
    };
    AreaAttendanceComponent.prototype.getForDate = function () {
        var _this = this;
        this.fieldpost = false;
        this.showGen = false;
        this.spinner.show();
        // let d = moment.parseZone(this.attDate.format('YYYY-MM-DD'))['_i'];
        this.commonService.getAllAttendanceForToday({ "att_date": moment.parseZone(this.attDate.format('YYYY-MM-DD'))['_i'], "brnchSeq": JSON.parse(sessionStorage.getItem("auth")).emp_branch }).subscribe(function (res) {
            console.log(res);
            if (_this.maxAttDate.getDate() == _this.attDate.date()) {
                _this.maxAttDate = new Date();
            }
            else {
                _this.maxAttDate.setHours(23);
                _this.maxAttDate.setMinutes(59);
                _this.maxAttDate.setSeconds(59);
            }
            res.forEach(function (element) {
                if (element.time_in != null) {
                    element.time_in = new Date(element.time_in);
                    element.checkInSaved = true;
                }
                else {
                    element.checkInSaved = false;
                }
                if (element.time_out != null) {
                    element.time_out = new Date(element.time_out);
                    element.checkOutSaved = true;
                }
                else {
                    element.checkOutSaved = false;
                }
            });
            _this.attendanceListing = res;
            _this.temp = JSON.parse(JSON.stringify(res));
            res.forEach(function (obj) {
                _this.fieldpost = obj.postFlg;
            });
            if (_this.attendanceListing.length <= 0)
                _this.showGen = true;
            _this.spinner.hide();
            var t = 0;
            for (var i = 0; i < _this.temp.length; i++) {
                var obj1 = _this.temp[i];
                if (obj1.leave_id == 6 || obj1.leave_id == 3) {
                    if (obj1.time_in == null || !obj1.checkInSaved || obj1.time_out == null || !obj1.checkOutSaved) {
                        _this.fieldpost = true;
                        t++;
                    }
                    else if (obj1.time_in != null && obj1.checkInSaved && obj1.time_out != null && obj1.checkOutSaved && t == 0) {
                        _this.fieldpost = false;
                    }
                }
            }
        }, function (error) {
            console.log(error);
            _this.spinner.hide();
        });
    };
    Object.defineProperty(AreaAttendanceComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.leaveForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AreaAttendanceComponent.prototype.onCheckOutSubmit = function (obj) {
        var _this = this;
        console.log(obj.time_in);
        var difference = obj.time_out - obj.time_in;
        if (difference < 10800000) {
            this.toaster.error("Check OUT msut be greater than 3 hours after Check IN");
            this.spinner.hide();
            return;
        }
        if (obj.time_in > obj.time_out) {
            this.toaster.error("Check Out Time must be greater than Check In Time");
            this.spinner.hide();
            return;
        }
        if (obj.time_out < new Date().setHours(12, 0, 0)) {
            this.toaster.error("Check Out Time cannot be less than 12:00 PM");
            this.spinner.hide();
            return;
        }
        if (obj.time_in > new Date().setHours(14, 0, 0)) {
            this.toaster.error("Check In Time cannot be greater than 02:00 PM");
            this.spinner.hide();
            return;
        }
        console.log(obj);
        this.spinner.show();
        this.commonService.updateAttendanceForEmployee(obj).subscribe(function (res) {
            _this.fieldpost = false;
            obj.checkOutSaved = true;
            for (var z = 0; z < _this.temp.length; z++) {
                var y = _this.temp[z];
                if (obj.employee_id == y.employee_id) {
                    _this.temp[z] = obj;
                }
            }
            // this.temp[this.temp.indexOf(obj)] = obj
            var t = 0;
            for (var i = 0; i < _this.temp.length; i++) {
                var obj1 = _this.temp[i];
                if (obj1.leave_id == 6 || obj1.leave_id == 3) {
                    if (obj1.time_in == null || !obj1.checkInSaved || obj1.time_out == null || !obj1.checkOutSaved) {
                        _this.fieldpost = true;
                        t++;
                    }
                    else if (obj1.time_in != null && obj1.checkInSaved && obj1.time_out != null && obj1.checkOutSaved && t == 0) {
                        _this.fieldpost = false;
                    }
                }
            }
            console.log(res);
            _this.spinner.hide();
            _this.toaster.success("Saved");
        }, function (error) {
            console.log(error);
            _this.spinner.hide();
        });
        // this.attendanceForm.controls['clndrDt'].setValue(this.attendanceForm.controls['time'].value);
        // console.log(this.attendanceForm.value);
        // this.checkOut = true;
        // if (this.attendanceForm.invalid) {
        //   return;
        // }
        // this.recoveryService.checkInAttendance(this.attendanceForm.value).subscribe(
        //   Response => console.log('Success!', Response),
        //   error => console.error('Error!', error)
        // );
    };
    AreaAttendanceComponent.prototype.onCheckInSubmit = function (obj) {
        var _this = this;
        if (obj.time_in > new Date().setHours(14, 0, 0)) {
            this.toaster.error("Check In Time cannot be greater than 02:00 PM");
            return;
        }
        if (obj.time_out != null) {
            var difference = obj.time_out - obj.time_in;
            if (difference < 10800000) {
                this.toaster.error("Check OUT msut be greater than 3 hours after Check IN");
                return;
            }
            if (obj.time_in > obj.time_out) {
                this.toaster.error("Check Out Time must be greater than Check In Time");
                return;
            }
            if (obj.time_out < new Date().setHours(12, 0, 0)) {
                this.toaster.error("Check Out Time cannot be less than 12:00 PM");
                return;
            }
            if (obj.time_in > new Date().setHours(14, 0, 0)) {
                this.toaster.error("Check In Time cannot be greater than 02:00 PM");
                return;
            }
        }
        // if (obj.time_in == null){
        //   this.chkOt = false;
        // } else {
        //   this.chkOt = true;
        // }
        this.commonService.updateAttendanceForEmployee(obj).subscribe(function (res) {
            _this.fieldpost = false;
            for (var z = 0; z < _this.temp.length; z++) {
                var y = _this.temp[z];
                if (obj.employee_id == y.employee_id) {
                    _this.temp[z] = obj;
                }
            }
            obj.checkInSaved = true;
            if (obj.time_out != null) {
                obj.checkOutSaved = true;
            }
            // this.temp[this.temp.indexOf(obj)] = obj
            var t = 0;
            for (var i = 0; i < _this.temp.length; i++) {
                var obj1 = _this.temp[i];
                if (obj1.leave_id == 6 || obj1.leave_id == 3) {
                    if (obj1.time_in == null || !obj1.checkInSaved || obj1.time_out == null || !obj1.checkOutSaved) {
                        _this.fieldpost = true;
                        t++;
                    }
                    else if (obj1.time_in != null && obj1.checkInSaved && obj1.time_out != null && obj1.checkOutSaved && t == 0) {
                        _this.fieldpost = false;
                    }
                }
            }
            // if(t>0){
            //   this.fieldpost = true;
            // }
            _this.toaster.success("Saved");
        }, function (error) {
            console.log(error);
            _this.spinner.hide();
        });
    };
    AreaAttendanceComponent.prototype.onLeaveSubmit = function () {
        var _this = this;
        var fromDate = new Date(this.leaveForm.controls['fromDate'].value);
        console.log(fromDate.getDay());
        var toDate = this.leaveForm.controls['toDate'].value;
        console.log(toDate.getDate());
        var i = 0;
        while ((fromDate.getDate() <= toDate.getDate() &&
            fromDate.getMonth() == toDate.getMonth() && fromDate.getFullYear() == toDate.getFullYear())
            || (fromDate.getMonth() < toDate.getMonth() && fromDate.getFullYear() == toDate.getFullYear())
            || (fromDate.getFullYear() < toDate.getFullYear())) {
            if (fromDate.getDay() != 0 && fromDate.getDay() != 6) {
                i += 1;
            }
            fromDate.setDate(fromDate.getDate() + 1);
        }
        console.log(i);
        if (this.leaveForm.controls['leaveId'].value == "5") {
            if (i > 66) {
                this.toaster.error("MATERNITY LEAVES CANNOT EXCEED 66 DAYS!!");
                return;
            }
        }
        if (this.leaveForm.controls['leaveId'].value == "17") {
            if (i > 10) {
                this.toaster.error("PATERNITY LEAVES CANNOT EXCEED 10 DAYS!!");
                return;
            }
        }
        // if (this.leaveForm.controls['gender'].value == "F") {
        //   console.log(this.leaveForm.controls['gender'].value === "F")
        //   let differneceInLeaves1 = this.leaveForm.controls['toDate'].value - this.leaveForm.controls['fromDate'].value;
        //   console.log(differneceInLeaves1)
        //   if (differneceInLeaves1 > 5702400000) {
        //     this.toaster.error("Leaves cannot exceed 66 days");
        //     return;
        //   }
        // }
        // if (this.leaveForm.controls['gender'].value == "M") {
        //   console.log(this.leaveForm.controls['gender'].value == "M");
        //   let differneceInLeaves = this.leaveForm.controls['toDate'].value - this.leaveForm.controls['fromDate'].value;
        //   if (differneceInLeaves > 864000000) {
        //     this.toaster.error("Leaves cannot exceed 10 days");
        //     return;
        //   }
        // }
        if (this.leaveForm.controls['approvedId'].value == 'Other') {
            this.leaveForm.controls['approvedId'].setValue(this.leaveForm.controls['selectedAppreoved'].value);
        }
        this.submitted = true;
        if (!this.leaveForm.valid) {
            this.toaster.error("Fileds Are Invalid!!");
            return;
        }
        this.commonService.saveLeaveSummary(this.leaveForm.value).subscribe(function (res) {
            console.log(res);
            _this.spinner.hide();
            _this.toaster.success("Saved");
            $('#attendance').modal('hide');
            //post all disable
            _this.fieldpost = false;
            for (var z = 0; z < _this.temp.length; z++) {
                var y = _this.temp[z];
                if (_this.leaveForm.controls['employeeId'].value == y.employee_id) {
                    _this.temp[z].leave_id = _this.leaveForm.controls['leaveId'].value;
                }
            }
            var t = 0;
            for (var i = 0; i < _this.temp.length; i++) {
                var obj = _this.temp[i];
                if (obj.leave_id == 6 || obj.leave_id == 3) {
                    if (obj.time_in == null || obj.time_out == null) {
                        _this.fieldpost = true;
                        t++;
                    }
                    else if (obj.time_in != null && obj.checkInSaved && obj.time_out != null && obj.checkOutSaved && t == 0) {
                        _this.fieldpost = false;
                    }
                }
            }
            //end
        }, function (error) {
            console.log(error);
            _this.spinner.hide();
            // this.leaveForm.reset(this.leaveForm.value);
            // this.leaveForm.reset();
            _this.leaveForm.markAsPristine();
        });
    };
    AreaAttendanceComponent.prototype.onAttendSubmit = function () { };
    AreaAttendanceComponent.prototype.onLeaveChange = function () { };
    AreaAttendanceComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AreaAttendanceComponent.prototype.onLeaveRequestClick = function (obj) {
        var _this = this;
        this.selectedApprovedBy = '';
        console.log(obj);
        if (obj.leave_id == '3') {
            this.minLeaveRequestDate = new Date();
            this.minLeaveRequestDate.setHours(0);
            this.minLeaveRequestDate.setMinutes(0);
        }
        else {
            this.minLeaveRequestDate = new Date(new Date().setDate(new Date().getDate() - 2));
            this.minLeaveRequestDate.setHours(0);
            this.minLeaveRequestDate.setMinutes(0);
            this.minLeaveRequestDate.setSeconds(0);
            console.log(new Date(new Date().setDate(new Date().getDate() - 2)));
        }
        // let atdt = new Date(this.attDate.setHours(0, 0, 0, 0)); console.log(atdt); console.log(new Date(atdt));
        obj.applicationDate = moment.parseZone(this.attDate.format('DD-MM-YYYY'))['_i'];
        obj.employeeId = obj.employee_id;
        this.leaveForm = this.fb.group({
            employeeId: [obj.employee_id],
            // transactionNo: ['', Validators.required],
            leaveId: [+obj.leave_id],
            applicationDate: [moment.parseZone(this.attDate.format('DD-MM-YYYY'))['_i']],
            totalDays: [''],
            appDat: [moment.parseZone(this.attDate.format('DD-MM-YYYY'))['_i']],
            bal: [''],
            fromDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            toDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            approvedId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            selectedAppreoved: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gender: [obj.gender],
            nam: [''],
            reason: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            transDate: [new Date()],
            postFlg: [obj.postFlg]
        });
        this.commonService.getLeaveSummary(obj).subscribe(function (res) {
            console.log(res);
            if (res != null) {
                _this.leaveForm = _this.fb.group({
                    employeeId: [obj.employeeId],
                    // transactionNo: [res.transactionNo],
                    leaveId: [+res.leaveId],
                    applicationDate: [moment.parseZone(_this.attDate.format('DD-MM-YYYY'))['_i']],
                    totalDays: [''],
                    appDat: [moment.parseZone(_this.attDate.format('DD-MM-YYYY'))['_i']],
                    bal: [''],
                    fromDate: [new Date(res.fromDate)],
                    toDate: [new Date(res.toDate)],
                    approvedId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    selectedAppreoved: [""],
                    nam: [''],
                    gender: [obj.gender],
                    reason: [res.reason],
                    transDate: [res.transDate],
                    postFlg: [obj.postFlg]
                });
                var found_1 = false;
                _this.approvedBy.forEach(function (apb) {
                    if (apb == res.approvedId) {
                        _this.leaveForm.controls['approvedId'].setValue(res.approvedId);
                        found_1 = true;
                    }
                });
                if (!found_1) {
                    _this.leaveForm.controls['approvedId'].setValue('Other');
                    _this.leaveForm.controls['selectedAppreoved'].setValue(res.approvedId);
                    _this.selectedApprovedBy = 'Other';
                }
            }
            _this.spinner.hide();
            $('#attendance').modal('show');
        }, function (error) {
            console.log(error);
            _this.spinner.hide();
        });
    };
    AreaAttendanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-area-attendance',
            template: __webpack_require__(/*! ./area-attendance.component.html */ "./src/app/pages/admin/area-attendance/area-attendance.component.html"),
            styles: [__webpack_require__(/*! ./area-attendance.component.css */ "./src/app/pages/admin/area-attendance/area-attendance.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AreaAttendanceComponent);
    return AreaAttendanceComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/attendance/attendance.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/admin/attendance/attendance.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".redshadow {\r\n    box-shadow: 0 0 5px rgb(255, 255, 255);\r\n    padding: 3px 0px 3px 3px;\r\n    margin: 5px 1px 3px 0px;\r\n    border: 1px solid rgb(223, 41, 41);\r\n  }\r\n\r\n  .greenshadow {\r\n    box-shadow: 0 0 5px rgb(255, 255, 255);\r\n    padding: 3px 0px 3px 3px;\r\n    margin: 5px 1px 3px 0px;\r\n    border: 1px solid rgb(68, 161, 84);\r\n  }\r\n\r\n  .attendanceTabsContent { padding: 1.2rem; border:1px solid #dee2e6; border-top: none; margin-bottom: 2rem;}"

/***/ }),

/***/ "./src/app/pages/admin/attendance/attendance.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/admin/attendance/attendance.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar-admin></app-left-side-bar-admin>\r\n      </div>\r\n\r\n      <div class=\"col-md-9\">\r\n\r\n        <!--------------------------- Start List of names in tabs------------------------------>\r\n        <!-- <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\"\r\n              aria-selected=\"true\">Branch Attendance</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\"\r\n              aria-selected=\"false\">Area Attendance</a>\r\n          </li>\r\n        </ul> -->\r\n        <!--------------------------- End List of names in tabs------------------------------>\r\n\r\n\r\n        <!------------------    Start Tabs in attendance     ------------------------------->\r\n        <!-- <div class=\"tab-content\" id=\"myTabContent\"> -->\r\n\r\n        <!---------------------       Start  Branch Attendance              --------------------------------->\r\n        <!-- <div class=\"tab-pane fade show active mb-md-3\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\r\n            <div class=\"tab-content attendanceTabsContent mb-md-3\"> -->\r\n        <div class=\"content\">\r\n          <div class=\"row clearfix\">\r\n            <div class=\"col-sm-4\">\r\n              <mat-form-field>\r\n                <input [matDatepickerFilter]=\"myFilter\" matInput required [max]=\"maxDate\"\r\n                       [min]=\"minDate\"\r\n                       [(ngModel)]=\"attDate\" (dateChange)=\"getForDate()\" placeholder=\"Attendance Date:\"\r\n                       [matDatepicker]=\"picker1\" readonly>\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n            <!-- <div class=\"col-sm-6\">\r\n                <button class=\"btn btn-primary\" type=\"button\"  (click)=\"getForDate()\">Get Attedance</button>\r\n            </div> -->\r\n            <div class=\"col-sm-2\">\r\n              <button *ngIf=\"showGen\" class=\"btn btn-primary btn-sm\" type=\"button\"\r\n                      (click)=\"generate()\">Generate\r\n              </button>\r\n            </div>\r\n            <div class=\"col-sm-6 addBtn\">\r\n              <button [disabled]=\"fieldpost\" class=\"btn btn-primary btn-sm\" (click)=\"postAllAttendence()\">\r\n                Post\r\n                All\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- <form [formGroup]=\"attendanceForm\" (ngSubmit)=\"onAttendSubmit()\"> -->\r\n\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <thead class=\"thead-light\">\r\n              <tr>\r\n                <th>Employee ID</th>\r\n                <!-- <th style=\"width:13%\">Employee Sequence</th> -->\r\n                <th>Name</th>\r\n                <th>Designation</th>\r\n                <th>Department</th>\r\n                <th>Status</th>\r\n                <th>Check In</th>\r\n                <th>Check Out</th>\r\n                <th style=\"width:13%\">Action</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n              <tr *ngFor=\"let obj of attendanceListing; let i = index; let k = index\">\r\n                <td>{{obj.employee_id}}</td>\r\n                <!-- <td>\r\n                      <input type=\"text\" formControlName=\"empSeq\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.empSeq.errors }\">\r\n\r\n\r\n                      <div *ngIf=\"submitted && f.empSeq.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.empSeq.errors.required\">Employee Sequence is required</div>\r\n                      </div>\r\n                    </td> -->\r\n                <td>{{obj.emp_nm}}</td>\r\n                <td>{{obj.designation}}</td>\r\n                <td>{{obj.department}}</td>\r\n                <td style=\"width: 10%\">\r\n                  <!-- <select [disabled]=\"obj.postFlg\" *ngIf=\"obj.gender == 'M'\" [(ngModel)]=\"obj.leave_id\"\r\n                          class=\"form-control\" (change)=\"onLeaveIdChange($event)\">\r\n\r\n                          <option *ngFor=\"let leave of leaveStatusListingForMale\"\r\n                            [disabled]=\"leave.short_desc === 'MT'\" [value]=\"leave.leave_id\">{{leave.short_desc}}\r\n                          </option>\r\n                        </select> -->\r\n\r\n                  <!-- <select [disabled]=\"obj.postFlg\" *ngIf=\"obj.gender == 'F'\" [(ngModel)]=\"obj.leave_id\"\r\n                          class=\"form-control\" (change)=\"onLeaveIdChange($event)\">\r\n\r\n                          <option *ngFor=\"let leave of leaveStatusListingForFemale\"\r\n                            [disabled]=\"leave.short_desc == 'PAT'\" [value]=\"leave.leave_id\">\r\n                            {{leave.short_desc}}\r\n                          </option>\r\n                        </select> -->\r\n\r\n                  <select [disabled]=\"obj.postFlg\" [(ngModel)]=\"obj.leave_id\" class=\"form-control\">\r\n\r\n                    <!-- condition added BY: Naveed, Date: 02-11-2020-->\r\n                    <!-- BM, AM will not be eligible to mark MAT, PAT, LL leaves -->\r\n                    <option *ngFor=\"let leave of leaveStatusListing\" [value]=\"leave.leave_id\"\r\n                            [disabled]=\"\r\n                                                  (leave.leave_id == 4 ||\r\n                                                    leave.leave_id == 5 ||\r\n                                                    leave.leave_id == 7 ||\r\n                                                    leave.leave_id == 17) &&\r\n                                                  (auth.role == 'bm' || auth.role == 'am')\r\n                                                \">\r\n                      {{leave.short_desc}}\r\n                    </option>\r\n                  </select>\r\n                  <!-- <div *ngIf=\"submitted && f.leaveTypes.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.leaveTypes.errors.required\">Select a Leave Type</div>\r\n                      </div> -->\r\n                </td>\r\n                <td>\r\n                    <span *ngIf=\"obj.leave_id == 6 || obj.leave_id == 3\">\r\n                      <input [disabled]=\"obj.postFlg\" [owlDateTime]=\"i\" [(ngModel)]=\"obj.time_in\"\r\n                             [ngClass]=\"{'redshadow': obj.checkInSaved == false, 'greenshadow': obj.checkInSaved == true}\"\r\n                             [owlDateTimeTrigger]=\"i\" placeholder=\"Check In Time\">\r\n                      <owl-date-time [hour12Timer]=\"true\" [pickerType]=\"'timer'\" #i></owl-date-time>\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                  <ng-container *ngIf=\"obj.checkInSaved && obj.time_in \">\r\n                      <span *ngIf=\"obj.leave_id == 6 || obj.leave_id == 3\">\r\n                        <input [disabled]=\"obj.postFlg\" [min]=\"obj.time_in\" [max]=\"maxAttDate\" [owlDateTime]=\"k\"\r\n                               [ngClass]=\"{'redshadow': obj.checkOutSaved == false, 'greenshadow': obj.checkOutSaved == true}\"\r\n                               [(ngModel)]=\"obj.time_out\" [owlDateTimeTrigger]=\"k\" placeholder=\"Check Out Time\"\r\n                               required>\r\n                        <owl-date-time [hour12Timer]=\"true\" [pickerType]=\"'timer'\" #k></owl-date-time>\r\n                      </span>\r\n                  </ng-container>\r\n                </td>\r\n                <td>\r\n\r\n                  <ng-container>\r\n                    <button *ngIf=\"obj.leave_id == 6 || obj.leave_id == 3\"\r\n                            [disabled]=\"!obj.time_in || obj.postFlg \"\r\n                            (click)=\"onCheckInSubmit(obj)\" class=\"btn btn-group-sm\"\r\n                            data-toggle=\"tooltip\" title=\"Save\"><i\r\n                            class=\"fa fa-sign-in\"></i></button>\r\n                  </ng-container>\r\n                  <!--\r\n                    <ng-container *ngIf=\"obj.checkInSaved && obj.time_out\">\r\n                      <button *ngIf=\"obj.leave_id == 6\" [disabled]=\"!obj.time_out || obj.postFlg \"\r\n                        (click)=\"onCheckOutSubmit(obj)\" class=\"btn btn-group-sm\" data-toggle=\"tooltip\"\r\n                        title=\"Check Out\"><i class=\"fa fa-sign-out\"></i></button>\r\n                    </ng-container> -->\r\n\r\n                  <span *ngIf=\"obj.leave_id != 6\" data-toggle=\"tooltip\" title=\"Leave Application\">\r\n                      <a class=\"iconBtn\" (click)=\"onLeaveRequestClick(obj)\"><i class=\"fa fa-user\"></i></a>\r\n                    </span>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- </form> -->\r\n\r\n          <!---------------------------- Modal Attendance --------------------------->\r\n\r\n          <div class=\"modal fade\" id=\"attendance\" role=\"dialog\">\r\n            <div class=\"modal-dialog bigger mymodal\">\r\n\r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Leave Application</h5>\r\n                </div>\r\n                <form [formGroup]=\"leaveForm\" (ngSubmit)=\"onLeaveSubmit()\">\r\n                  <div class=\"modal-body\">\r\n                    <div class=\"cRow\">\r\n\r\n\r\n                      <div class=\"cCol2\">\r\n                        <label>Leave Type:</label>\r\n                        <select disabled formControlName=\"leaveId\" name=\"leaveId\"\r\n                                class=\"form-control\">\r\n\r\n                          <option *ngFor=\"let leave of leaveStatusListing\"\r\n                                  [value]=\"leave.leave_id\">\r\n                            {{leave.description}}\r\n                          </option>\r\n                        </select>\r\n                      </div>\r\n\r\n\r\n                      <!-- <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <mat-label>Leave ID</mat-label>\r\n                      <mat-select disabled formControlName=\"leaveId\" name=\"leaveId\">\r\n                        <mat-option *ngFor=\"let leave of leaveStatusListing\" [value]=\"leave.leave_id\">\r\n                          {{leave.description}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div> -->\r\n\r\n\r\n                      <!---------------------------             Original latest Transaction Number          -------------------------------------------->\r\n\r\n                      <!-- <div class=\"cCol2\">\r\n                    <label>Transaction Number:</label>\r\n                    <input maxlength=\"5\" (keypress)=\"onlyNumbers($event)\" [readonly]=\"leaveForm.controls['postFlg'].value\"\r\n                      type=\"text\" class=\"form-control\" formControlName=\"transactionNo\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.transactionNo.errors && f.transactionNo.touched }\" />\r\n                    <div *ngIf=\"submitted && f.transactionNo.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.transactionNo.errors.required\">Transaction Number is required</div>\r\n                    </div>\r\n                  </div> -->\r\n\r\n                      <!---------------------------             old one dont use it Transaction Number          ---------------------------------------------------->\r\n\r\n\r\n                      <!-- <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"Transaction Number:\" maxlength=\"5\" (keypress)=\"onlyNumbers($event)\"\r\n                        [readonly]=\"leaveForm.controls['postFlg'].value\" type=\"text\" formControlName=\"transactionNo\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.transactionNo.errors && f.transactionNo.touched }\">\r\n                      <div *ngIf=\"submitted && f.transactionNo.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.transactionNo.errors.required\">Transaction Number is required</div>\r\n                      </div>\r\n                    </mat-form-field>\r\n                  </div> -->\r\n\r\n\r\n                      <div class=\"cCol2\">\r\n                        <label>Application Date:</label>\r\n                        <input disabled type=\"text\" class=\"form-control\"\r\n                               formControlName=\"applicationDate\">\r\n                      </div>\r\n\r\n                      <!-- Added by Naveed - Dated 7/11/2020\r\n                      To show Leave Balance on Screen -->\r\n                      <div class=\"cCol2\">\r\n                        <label>Total Days:</label>\r\n                        <input disabled type=\"text\" class=\"form-control\"\r\n                               formControlName=\"totalDays\"/>\r\n                      </div>\r\n\r\n                      <div class=\"cCol2\">\r\n                        <label>Current Balance:</label>\r\n                        <input disabled type=\"text\" class=\"form-control\"\r\n                               formControlName=\"leaveBalance\"/>\r\n                      </div>\r\n                      <!-- Ended By Naveed -->\r\n\r\n\r\n                      <!-- <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input matInput readonly placeholder=\"Application Date:\" formControlName=\"applicationDate\">\r\n                    </mat-form-field>\r\n                  </div> -->\r\n\r\n\r\n                      <div class=\"cCol2\">\r\n                        <label>From Date/Time:</label>\r\n                        <input [disabled]=\"leaveForm.controls['postFlg'].value\"\r\n                               class=\"form-control\"\r\n                               formControlName=\"fromDate\" [owlDateTime]=\"dt2\"\r\n                               [owlDateTimeTrigger]=\"dt2\"\r\n                               [min]=\"minLeaveRequestDate\" [max]=\"fromDateMax\"\r\n                               [owlDateTimeFilter]=\"myFilter2\"\r\n                               [ngClass]=\"{ 'is-invalid': submitted && f.fromDate.errors && f.fromDate.touched }\"/>\r\n                        <owl-date-time [hour12Timer]=\"true\"\r\n                                       [pickerType]=\"leaveForm.controls['leaveId'].value=='3' ? 'timer':'calendar'\"\r\n                                       #dt2>\r\n                        </owl-date-time>\r\n                        <div *ngIf=\"submitted && f.fromDate.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.fromDate.errors.required\">From Date/Time is required\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n                      <!-- <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input matInput [matDatepicker]=\"picker\" placeholder=\"From Date/Time:\"\r\n                        [disabled]=\"leaveForm.controls['postFlg'].value\" [min]=\"minLeaveRequestDate\"\r\n                        formControlName=\"fromDate\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.fromDate.errors && f.fromDate.touched }\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <div *ngIf=\"submitted && f.fromDate.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.fromDate.errors.required\">From Date/Time is required</div>\r\n                    </div>\r\n                  </div> -->\r\n\r\n\r\n                      <div class=\"cCol2\">\r\n                        <label>To Date/Time:</label>\r\n                        <input [disabled]=\"leaveForm.controls['postFlg'].value\"\r\n                               [min]=\"leaveForm.controls['fromDate'].value || fromDateMax\" [max]=\"\" class=\"form-control\"\r\n                               formControlName=\"toDate\" [owlDateTime]=\"dt3\" [owlDateTimeTrigger]=\"dt3\"\r\n                               [ngClass]=\"{ 'is-invalid': submitted && f.toDate.errors && f.toDate.touched }\"\r\n                               (ngModelChange)=\"currentPeriodClicked($event, leaveForm.controls['leaveId'].value)\" />\r\n                        <owl-date-time [hour12Timer]=\"true\"\r\n                                       [pickerType]=\"leaveForm.controls['leaveId'].value=='3' ? 'timer':'calendar'\" #dt3>\r\n                        </owl-date-time>\r\n                        <div *ngIf=\"submitted && f.toDate.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.toDate.errors.required\">To Date/Time is required</div>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n                      <!-- <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input matInput [matDatepicker]=\"picker2\" placeholder=\"To Date/Time:\"\r\n                        [disabled]=\"leaveForm.controls['postFlg'].value\" [min]=\"leaveForm.controls['fromDate'].value\"\r\n                        formControlName=\"toDate\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.toDate.errors && f.toDate.touched }\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker2></mat-datepicker>\r\n                      <div *ngIf=\"submitted && f.toDate.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.toDate.errors.required\">To Date/Time is required</div>\r\n                      </div>\r\n                    </mat-form-field>\r\n                  </div> -->\r\n\r\n\r\n                      <div class=\"cCol2\">\r\n                        <label>Approved By Code:</label>\r\n                        <select class=\"form-control\" formControlName=\"approvedId\"\r\n                                [(ngModel)]=\"selectedApprovedBy\"\r\n                                (change)=\"onSelectionChanged($event)\"\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.approvedId.errors && f.approvedId.touched }\">\r\n                          <option [disabled]=\"leaveForm.controls['postFlg'].value\"\r\n                                  *ngFor=\"let approv of approvedBy\"\r\n                                  [value]=\"approv\">{{approv}}\r\n                          </option>\r\n                        </select>\r\n                        <div *ngIf=\"submitted && f.approvedId.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.approvedId.errors.required\">Approved By Code is\r\n                            required\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n                      <!-- <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <mat-label>Approved By Code:</mat-label>\r\n                      <mat-select formControlName=\"approvedId\" [(ngModel)]=\"selectedApprovedBy\"\r\n                        (change)=\"onSelectionChanged($event)\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.approvedId.errors && f.approvedId.touched }\">\r\n                        <mat-option [disabled]=\"leaveForm.controls['postFlg'].value\" *ngFor=\"let approv of approvedBy\"\r\n                          [value]=\"approv\">{{approv}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                      <div *ngIf=\"submitted && f.approvedId.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.approvedId.errors.required\">Approved By Code is required</div>\r\n                      </div>\r\n                    </mat-form-field>\r\n                  </div> -->\r\n\r\n\r\n                      <div class=\"cCol2\"\r\n                           *ngIf=\"this.leaveForm.controls['approvedId'].value == 'Other'\">\r\n                        <label>Approved By Other:</label>\r\n                        <input [readonly]=\"leaveForm.controls['postFlg'].value\" maxlength=\"5\"\r\n                               class=\"form-control\"\r\n                               type=\"text\" formControlName=\"selectedAppreoved\"\r\n                               [ngClass]=\"{ 'is-invalid': submitted && f.selectedAppreoved.errors && f.selectedAppreoved.touched}\">\r\n                        <div *ngIf=\"submitted && f.selectedAppreoved.errors\"\r\n                             class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.selectedAppreoved.errors.required\">Approved By Other\r\n                            is required\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <!-- <div class=\"cCol2\" *ngIf=\"this.leaveForm.controls['approvedId'].value == 'Other'\">\r\n                    <mat-form-field>\r\n                      <input [readonly]=\"leaveForm.controls['postFlg'].value\" maxlength=\"5\" type=\"text\"\r\n                        formControlName=\"selectedAppreoved\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.selectedAppreoved.errors && f.selectedAppreoved.touched}\"\r\n                        matInput placeholder=\"Approved By Other:\">\r\n                      <div *ngIf=\"submitted && f.selectedAppreoved.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.selectedAppreoved.errors.required\">Approved By Other is required</div>\r\n                      </div>\r\n                    </mat-form-field>\r\n                  </div> -->\r\n\r\n\r\n                      <div class=\"col-full\">\r\n                        <label>Reason:</label>\r\n                        <textarea [readonly]=\"leaveForm.controls['postFlg'].value\" type=\"text\"\r\n                                  class=\"form-control\"\r\n                                  formControlName=\"reason\"\r\n                                  [ngClass]=\"{ 'is-invalid': submitted && f.reason.errors && f.reason.touched}\">\r\n                                </textarea>\r\n                        <div *ngIf=\"submitted && f.reason.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.reason.errors.required\">Reason is required</div>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n                      <!-- <div class=\"col-full\">\r\n                    <mat-form-field>\r\n                      <textarea matInput placeholder=\"Reason\" [readonly]=\"leaveForm.controls['postFlg'].value\" type=\"text\"\r\n                        formControlName=\"reason\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.reason.errors && f.reason.touched}\">\r\n                                ></textarea>\r\n                      <div *ngIf=\"submitted && f.reason.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.reason.errors.required\">Reason is required</div>\r\n                      </div>\r\n                    </mat-form-field>\r\n                  </div> -->\r\n\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"modal-footer text-center\">\r\n                    <button [disabled]=\"leaveForm.controls['postFlg'].value || !leaveForm.valid\"\r\n                            type=\"submit\"\r\n                            class=\"btn btn-primary btn-min\">Ok\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">\r\n                      Cancel\r\n                    </button>\r\n\r\n                    <!-- Added By Naveed - Dated: 10/11/2020\r\n                    To Allow AM/BM to delete applied leaves -->\r\n                    <button class=\"btn btn-danger btn-min\" type=\"button\"\r\n                            *ngIf=\"!(leaveForm.controls['leaveId'].value == 4 ||\r\n                                                leaveForm.controls['leaveId'].value == 5 ||\r\n                                                leaveForm.controls['leaveId'].value == 7 ||\r\n                                                leaveForm.controls['leaveId'].value == 17)\"\r\n                            [disabled]=\"isReverseEnable && (leaveForm.controls['postFlg'].value)\"\r\n                            (click)=\"reverseLeaveRequest()\">Delete Leave Request\r\n                    </button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n        <!-- </div>\r\n          </div> -->\r\n        <!------------------------      Branch Attendance End              ------------------------------>\r\n\r\n\r\n        <!---------------------      Start  Area Attendance              --------------------------------->\r\n        <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\r\n          <div class=\"tab-content attendanceTabsContent mb-md-3\">\r\n            <app-area-attendance></app-area-attendance>\r\n          </div>\r\n        </div>\r\n        <!-- </div> -->\r\n        <!---------------------      Start  Area Attendance              --------------------------------->\r\n\r\n\r\n        <!----------------------     End Tabs in attendance            --------------------------->\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</main>"

/***/ }),

/***/ "./src/app/pages/admin/attendance/attendance.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/admin/attendance/attendance.component.ts ***!
  \****************************************************************/
/*! exports provided: MY_FORMATS, AttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceComponent", function() { return AttendanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//added BY Naveed 10/11/2020 'DecimalPipe'





var moment = moment__WEBPACK_IMPORTED_MODULE_6__;
var MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'DD-MM-YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
var AttendanceComponent = /** @class */ (function () {
    // chkOt: boolean = false;
    function AttendanceComponent(commonService, fb, spinner, toaster, 
    // Added BY Naveed 10/11/2020 'DecimalPipe'
    _decimalPipe) {
        this.commonService = commonService;
        this.fb = fb;
        this.spinner = spinner;
        this.toaster = toaster;
        this._decimalPipe = _decimalPipe;
        this.chekInSeq = [];
        this.checkOut = false;
        this.submitted = false;
        this.fieldpost = false;
        this.chkOut = false;
        this.isReverseEnable = false;
        //Leave Application
        this.attDate = moment();
        this.maxAttDate = new Date();
        this.fromDateMax = moment(new Date());
        this.selectedApprovedBy = "";
        this.leaveTypes = [
            'Annual Leave',
            'Casual Leave',
            'Maternity Leave',
            'Medical Leave'
        ];
        this.approvedBy = [
            'Cr BM',
            'Cr AM',
            'Cr RM',
            'Other'
        ];
        this.selectedValue = '';
        this.postAll = { "att_date": this.attDate, "brnchSeq": JSON.parse(sessionStorage.getItem("auth")).emp_branch };
        //end method
        this.showGen = false;
        this.attendanceListing = [];
        //preventing saturdays and sundays
        this.myFilter = function (d) {
            console.log(d);
            var day = d.day();
            return day !== 0 && day !== 6;
        };
        this.myFilter2 = function (d) {
            var day = d.getDay();
            return day !== 0 && day !== 6;
        };
        this.auth = JSON.parse(sessionStorage.getItem("auth"));
        // End by Naveed
        //      this.maxAttDate.set({
        //     hour:   23,
        //     minute: 59,
        //     second: 59
        // });
        // this.maxAttDate.setHours(23);
        // this.maxAttDate.setMinutes(59);
        // this.maxAttDate.setSeconds(59)
        //console.log(this.maxAttDate)
        this.maxDate = new Date();
        this.minDate = new Date();
        // this.minDate = new Date(this.minDate.setDate(this.minDate.getDate() +2 1));
        //console.log(this.minDate)
        var i = 0;
        while (i <= 1) {
            var d = new Date(this.minDate);
            d.setDate(d.getDate() - 1);
            if (d.getDay() != 0 && d.getDay() != 6) {
                i++;
            }
            this.minDate = new Date(this.minDate.setDate(this.minDate.getDate() - 1));
        }
    }
    AttendanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fieldpost = true;
        //console.log(this.fromDateMax)
        //Attendance Form
        this.attendanceForm = this.fb.group({
            empSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            leaveTypes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            clndrDt: [''],
            expSeq: ['']
        });
        //Leave Form
        this.leaveForm = this.fb.group({
            employeeId: [''],
            // transactionNo: ['', Validators.required],
            leaveId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            applicationDate: [moment.parseZone(this.attDate.format('DD-MM-YYYY'))['_i']],
            totalDays: ["0"],
            appDat: [moment.parseZone(this.attDate.format('DD-MM-YYYY'))['_i']],
            leaveBalance: ["0"],
            fromDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            toDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            approvedId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            nam: [''],
            gender: [''],
            selectedAppreoved: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reason: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            transDate: [new Date()],
            postFlg: [false]
        });
        this.commonService.getStatusListing().subscribe(function (res) {
            _this.leaveStatusListing = res;
            _this.originalStatusListing = res;
            // Edited By: Naveed 02-11-2020
            // reason:  LL, MT, HL, PAT and traning was not being displayed on MWX
            // system will display above metioned leaves
            /*
            let i;
            for (i = this.leaveStatusListing.length - 1; i >= 0; i -= 1) {
                if (this.leaveStatusListing[i].short_desc == 'LL' || this.leaveStatusListing[i].short_desc == 'MT' || this.leaveStatusListing[i].short_desc == 'HL' || this.leaveStatusListing[i].short_desc == 'PAT') {
                    // console.log('i am in if')
                    this.leaveStatusListing.splice(i, 1);
                }
            }*/
            // this.leaveStatusListingForFemale = this.originalStatusListing;
            // console.log(this.leaveStatusListingForFemale);
            // this.leaveStatusListingForMale = this.originalStatusListing;
            // console.log(this.leaveStatusListingForMale);
        });
        this.spinner.show();
        this.getForDate();
        //   this.attendanceForm.controls['checkIn'].valueChanges.subscribe(
        //     (selectedValue) => {
        //       console.log(selectedValue);
        //       console.log(this.attendanceForm.get('checkIn').value);
        //     }
        // );
    };
    // Added By Naveed  10/11/2020
    // this method will be called when to date selected
    AttendanceComponent.prototype.currentPeriodClicked = function (event, leaveId) {
        var todt = new Date(event);
        var frmdt = new Date(this.leaveForm.get('fromDate').value);
        //console.log("currentPeriodClicked - todt", todt);
        //console.log("currentPeriodClicked - frmdt", frmdt);
        var balance;
        if (leaveId == '3') {
            balance = this._decimalPipe.transform(Math.fround((todt.getTime() - frmdt.getTime()) / (1000 * 60 * 60)), '1.2-2');
            ;
        }
        else {
            //balance = (todt.getTime() - frmdt.getTime()) / (1000 * 60 * 60 * 24) + 1;
            var nextDay = new Date(frmdt);
            var cnt = 0;
            do {
                cnt += (nextDay.getDay() >= 1 && nextDay.getDay() <= 5) ? 1 : 0;
                nextDay.setDate(nextDay.getDate() + 1);
            } while (nextDay <= todt);
            //console.log("Number of week days between " + frmdt + " and " + todt + " = " + cnt);
            balance = cnt;
        }
        //  this.leaveForm.controls["remainingBalance"].setValue(+this.leaveForm.get('leaveBalance').value - +balance);
        this.leaveForm.controls["totalDays"].setValue(balance);
        // ----------------------------------------------------
        // ----------------------------------------------------
    };
    AttendanceComponent.prototype.generate = function () {
        var _this = this;
        this.fieldpost = true;
        this.spinner.show();
        this.commonService.generateAttendanceForToday({
            "att_date": this.attDate,
            "brnchSeq": JSON.parse(sessionStorage.getItem("auth")).emp_branch
        }).subscribe(function (res) {
            //console.log(res);
            res.forEach(function (element) {
                element.checkOutSaved = false;
                element.checkInSaved = false;
            });
            // this.fieldpost = false;
            _this.attendanceListing = res;
            _this.spinner.hide();
            _this.showGen = false;
            _this.temp = JSON.parse(JSON.stringify(res));
        }, function (error) {
            console.log(error);
            _this.toaster.error("Something Went Wrong");
            _this.spinner.hide();
        });
    };
    AttendanceComponent.prototype.onSelectionChanged = function (e) {
        //console.log(e);
        if (this.selectedApprovedBy != 'Other') {
            this.leaveForm.controls['selectedAppreoved'].setValue(this.selectedApprovedBy);
        }
        else {
            this.leaveForm.controls['selectedAppreoved'].setValue("");
        }
    };
    AttendanceComponent.prototype.onLeaveIdChange = function (e) {
    };
    AttendanceComponent.prototype.postAllAttendence = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to Post Attendance?',
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#007bff',
            confirmButtonText: 'Yes, Post it!'
        }).then(function (result) {
            if (result.value) {
                // if (this.leaveForm.controls['leave_id']) {
                //   return;
                // }
                // if (this.leaveForm.valid) {
                //   this.toaster.success("Forms are Valid!!");
                // }
                // if (this.leaveForm.invalid) {
                //   console.log(this.leaveForm.controls['employeeId'].value)
                //   this.toaster.error("Some forms are not Valid!!");
                //   return (this.leaveForm.controls['employeeId'].value);
                // }
                //console.log(this.leaveStatusListing);
                _this.spinner.show();
                //console.log(this.attDate)
                //console.log(moment.parseZone(this.attDate.format('DD-MM-YYYY'))['_i']);
                _this.fieldpost = true;
                // let x = this.attDate;
                // console.log(x)
                // let dtStr = x.getDate()+ "-"+(x.getMonth()+1)+'-'+x.getFullYear();
                var date = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US').transform(new Date, 'dd-MM-yyyy');
                _this.commonService.postAllPostFlg(moment.parseZone(_this.attDate.format('DD-MM-YYYY'))['_i']).subscribe(function (res) {
                    //console.log(res);
                    _this.postingAllAttendance = res;
                    _this.attendanceListing.forEach(function (r) {
                        r.postFlg = true;
                    });
                    _this.fieldpost = true;
                    _this.spinner.hide();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()('Posted!', 'Attendance Posted Successfully.', 'success');
                }, function (error) {
                    _this.fieldpost = false;
                    console.log(error);
                    _this.spinner.hide();
                    _this.toaster.error('Something went wrong');
                });
            }
        });
    };
    AttendanceComponent.prototype.getForDate = function () {
        var _this = this;
        this.fieldpost = true;
        this.showGen = false;
        this.spinner.show();
        // let d = moment.parseZone(this.attDate.format('YYYY-MM-DD'))['_i'];
        this.commonService.getAllAttendanceForToday({
            "att_date": moment.parseZone(this.attDate.format('YYYY-MM-DD'))['_i'],
            "brnchSeq": JSON.parse(sessionStorage.getItem("auth")).emp_branch
        }).subscribe(function (res) {
            //console.log(res);
            if (_this.maxAttDate.getDate() == _this.attDate.date()) {
                _this.maxAttDate = new Date();
            }
            else {
                _this.maxAttDate.setHours(23);
                _this.maxAttDate.setMinutes(59);
                _this.maxAttDate.setSeconds(59);
            }
            res.forEach(function (element) {
                if (element.time_in != null) {
                    element.time_in = new Date(element.time_in);
                    element.checkInSaved = true;
                }
                else {
                    element.checkInSaved = false;
                }
                if (element.time_out != null) {
                    element.time_out = new Date(element.time_out);
                    element.checkOutSaved = true;
                }
                else {
                    element.checkOutSaved = false;
                }
            });
            _this.attendanceListing = res;
            //console.log(this.attendanceListing)
            _this.temp = JSON.parse(JSON.stringify(res));
            res.forEach(function (obj) {
                _this.fieldpost = obj.postFlg;
            });
            if (_this.attendanceListing.length <= 0)
                _this.showGen = true;
            _this.spinner.hide();
            var t = 0;
            for (var i = 0; i < _this.temp.length; i++) {
                var obj1 = _this.temp[i];
                if (obj1.leave_id == 6 || obj1.leave_id == 3) {
                    if (obj1.time_in == null || !obj1.checkInSaved || obj1.time_out == null || !obj1.checkOutSaved) {
                        _this.fieldpost = true;
                        t++;
                    }
                    else if (obj1.time_in != null && obj1.checkInSaved && obj1.time_out != null && obj1.checkOutSaved && t == 0) {
                        _this.fieldpost = false;
                    }
                }
            }
            for (var sub = 0; sub < _this.attendanceListing.length; sub++) {
                if (_this.attendanceListing.length != 0 && _this.attendanceListing[sub].postFlg == true) {
                    _this.fieldpost = true;
                }
            }
        }, function (error) {
            console.log(error);
            _this.spinner.hide();
        });
    };
    Object.defineProperty(AttendanceComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.leaveForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AttendanceComponent.prototype.onCheckOutSubmit = function (obj) {
        var _this = this;
        //console.log(obj.time_in)
        var difference = obj.time_out - obj.time_in;
        if (difference < 10800000) {
            this.toaster.error("Check OUT msut be greater than 3 hours after Check IN");
            this.spinner.hide();
            return;
        }
        if (obj.time_in > obj.time_out) {
            this.toaster.error("Check Out Time must be greater than Check In Time");
            this.spinner.hide();
            return;
        }
        if (obj.time_out < new Date().setHours(12, 0, 0)) {
            this.toaster.error("Check Out Time cannot be less than 12:00 PM");
            this.spinner.hide();
            return;
        }
        if (obj.time_in > new Date().setHours(14, 0, 0)) {
            this.toaster.error("Check In Time cannot be greater than 02:00 PM");
            this.spinner.hide();
            return;
        }
        //console.log(obj);
        this.spinner.show();
        this.commonService.updateAttendanceForEmployee(obj).subscribe(function (res) {
            _this.fieldpost = false;
            obj.checkOutSaved = true;
            for (var z = 0; z < _this.temp.length; z++) {
                var y = _this.temp[z];
                if (obj.employee_id == y.employee_id) {
                    _this.temp[z] = obj;
                }
            }
            // this.temp[this.temp.indexOf(obj)] = obj
            var t = 0;
            for (var i = 0; i < _this.temp.length; i++) {
                var obj1 = _this.temp[i];
                if (obj1.leave_id == 6 || obj1.leave_id == 3) {
                    if (obj1.time_in == null || !obj1.checkInSaved || obj1.time_out == null || !obj1.checkOutSaved) {
                        _this.fieldpost = true;
                        t++;
                    }
                    else if (obj1.time_in != null && obj1.checkInSaved && obj1.time_out != null && obj1.checkOutSaved && t == 0) {
                        _this.fieldpost = false;
                    }
                }
            }
            //console.log(res);
            _this.spinner.hide();
            _this.toaster.success("Saved");
        }, function (error) {
            console.log(error);
            _this.spinner.hide();
        });
        // this.attendanceForm.controls['clndrDt'].setValue(this.attendanceForm.controls['time'].value);
        // console.log(this.attendanceForm.value);
        // this.checkOut = true;
        // if (this.attendanceForm.invalid) {
        //   return;
        // }
        // this.recoveryService.checkInAttendance(this.attendanceForm.value).subscribe(
        //   Response => console.log('Success!', Response),
        //   error => console.error('Error!', error)
        // );
    };
    /* Commented by Zohaib Asim
    onCheckInSubmit(obj) {
  
      if (obj.time_in > new Date().setHours(14, 0, 0)) {
        this.toaster.error("Check In Time cannot be greater than 02:00 PM");
        return;
      }
      if (obj.time_out != null) {
        let difference = obj.time_out - obj.time_in;
  
        if (difference < 10800000) {
          this.toaster.error("Check OUT msut be greater than 3 hours after Check IN");
          return;
        }
  
        if (obj.time_in > obj.time_out) {
          this.toaster.error("Check Out Time must be greater than Check In Time");
          return;
        }
  
        if (obj.time_out < new Date().setHours(12, 0, 0)) {
          this.toaster.error("Check Out Time cannot be less than 12:00 PM");
          return;
        }
  
        if (obj.time_in > new Date().setHours(14, 0, 0)) {
          this.toaster.error("Check In Time cannot be greater than 02:00 PM");
          return;
        }
      }
      // if (obj.time_in == null){
      //   this.chkOt = false;
      // } else {
      //   this.chkOt = true;
      // }
  
      this.commonService.updateAttendanceForEmployee(obj).subscribe(res => {
        this.fieldpost = false;
        for (var z = 0; z < this.temp.length; z++) {
          var y = this.temp[z];
          if (obj.employee_id == y.employee_id) {
            this.temp[z] = obj;
          }
        }
        obj.checkInSaved = true;
        if (obj.time_out != null) {
          obj.checkOutSaved = true;
        }
        // this.temp[this.temp.indexOf(obj)] = obj
        let t = 0;
        for (var i = 0; i < this.temp.length; i++) {
          var obj1 = this.temp[i];
          if (obj1.leave_id == 6 || obj1.leave_id == 3) {
            if (obj1.time_in == null || !obj1.checkInSaved || obj1.time_out == null || !obj1.checkOutSaved) {
              this.fieldpost = true;
              t++
            } else if (obj1.time_in != null && obj1.checkInSaved && obj1.time_out != null && obj1.checkOutSaved && t == 0) {
              this.fieldpost = false;
            }
          }
        }
        // if(t>0){
        //   this.fieldpost = true;
        // }
        this.toaster.success("Saved")
      }, error => {
        console.log(error)
        this.spinner.hide();
      });
    }*/
    // Edit By Naveed  10/11/2020
    // this when method will be called when you save attendance(Present) of employee
    // show message if employee leave on that day
    AttendanceComponent.prototype.onCheckInSubmit = function (obj) {
        var _this = this;
        obj.applicationDate = moment.parseZone(this.attDate.format("DD-MM-YYYY"))["_i"];
        obj.employeeId = obj.employee_id;
        this.commonService.getLeaveSummary(obj).subscribe(function (res) {
            var diff = null;
            var frmTime, frmDate;
            var toTime, toDate;
            if (res != null) {
                if (res.leaveId == '3') {
                    frmTime = _this.formatAMPM(new Date(res.fromDate));
                    toTime = _this.formatAMPM(new Date(res.toDate));
                    diff = _this._decimalPipe.transform(Math.fround((new Date(res.toDate).getTime() - new Date(res.fromDate).getTime()) / (1000 * 60 * 60)), '1.2-2');
                    //console.log(new Date(obj.time_in).getTime() - new Date(res.fromDate).getTime());
                }
                // Added by Zohaib - Dated 16/11/2020
                var currDate = obj.applicationDate;
                frmDate = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]("en-US").transform(new Date(res.fromDate), "dd-MM-yyyy");
                toDate = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]("en-US").transform(new Date(res.toDate), "dd-MM-yyyy");
                //console.log("CurrentDate", currDate);
                //console.log("FromDate", frmDate);
                //console.log("ToDate", toDate);
                //let currDate = moment.parseZone(this.attDate.format("DD-MM-YYYY"))["_i"];
                // If User has applied for the Leave, They cannot mark any status
                if (res.leaveId != '3' && (currDate >= frmDate && currDate <= toDate)) {
                    _this.toaster.info("Your Leave Application Submitted " + _this.getLeaveDesc(res.leaveId) + " For " + (diff != null ? diff + (" Hour's From  " + frmTime + " To " + toTime + " ") : '') + " Current Date, Please Contact Your's Manager");
                    return;
                }
            }
            _this.savePresent(obj);
        }, function (error) {
            console.log(error);
        });
    };
    //end
    // Edit By Naveed  10/11/2020
    AttendanceComponent.prototype.savePresent = function (obj) {
        var _this = this;
        if (obj.time_in > new Date().setHours(14, 0, 0)) {
            this.toaster.error("Check In Time cannot be greater than 02:00 PM");
            return;
        }
        if (obj.time_out != null) {
            var difference = obj.time_out - obj.time_in;
            if (difference < 10800000) {
                this.toaster.error("Check OUT msut be greater than 3 hours after Check IN");
                return;
            }
            if (obj.time_in > obj.time_out) {
                this.toaster.error("Check Out Time must be greater than Check In Time");
                return;
            }
            if (obj.time_out < new Date().setHours(12, 0, 0)) {
                this.toaster.error("Check Out Time cannot be less than 12:00 PM");
                return;
            }
            if (obj.time_in > new Date().setHours(14, 0, 0)) {
                this.toaster.error("Check In Time cannot be greater than 02:00 PM");
                return;
            }
        }
        // if (obj.time_in == null){
        //   this.chkOt = false;
        // } else {
        //   this.chkOt = true;
        // }
        this.commonService.updateAttendanceForEmployee(obj).subscribe(function (res) {
            _this.fieldpost = false;
            for (var z = 0; z < _this.temp.length; z++) {
                var y = _this.temp[z];
                if (obj.employee_id == y.employee_id) {
                    _this.temp[z] = obj;
                }
            }
            obj.checkInSaved = true;
            if (obj.time_out != null) {
                obj.checkOutSaved = true;
            }
            // this.temp[this.temp.indexOf(obj)] = obj
            var t = 0;
            for (var i = 0; i < _this.temp.length; i++) {
                var obj1 = _this.temp[i];
                if (obj1.leave_id == 6 || obj1.leave_id == 3) {
                    if (obj1.time_in == null ||
                        !obj1.checkInSaved ||
                        obj1.time_out == null ||
                        !obj1.checkOutSaved) {
                        _this.fieldpost = true;
                        t++;
                    }
                    else if (obj1.time_in != null &&
                        obj1.checkInSaved &&
                        obj1.time_out != null &&
                        obj1.checkOutSaved &&
                        t == 0) {
                        _this.fieldpost = false;
                    }
                }
            }
            // if(t>0){
            //   this.fieldpost = true;
            // }
            _this.toaster.success("Saved");
        }, function (error) {
            _this.toaster.error(error.error.error);
            console.log(error);
            _this.spinner.hide();
        });
    };
    // end method
    // Added By Naveed  10/11/2020
    // this method will be called when delete/reverse leave request
    AttendanceComponent.prototype.reverseLeaveRequest = function () {
        var _this = this;
        var appDate = this.leaveForm.value.applicationDate;
        var fromDate = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]("en-US").transform(this.leaveForm.value.fromDate, "dd-MM-yyyy");
        var toDate = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]("en-US").transform(this.leaveForm.value.toDate, "dd-MM-yyyy");
        var employeeId = this.leaveForm.value.employeeId;
        var attendanceDate = moment.parseZone(this.attDate.format("DD-MM-YYYY"))["_i"];
        // User can not reverse leave
        if (appDate < attendanceDate && !(attendanceDate >= fromDate && attendanceDate <= toDate)) {
            this.toaster.info("You cannot Reverse Applied Leaves.");
            return;
        }
        //
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
            title: "Are you sure?",
            text: "Are you sure you want to Reverse Leave Request?",
            type: "info",
            showCancelButton: true,
            confirmButtonColor: "#28a745",
            cancelButtonColor: "#007bff",
            confirmButtonText: "Yes, Reverse Leave Request !",
        }).then(function (result) {
            if (result.value) {
                _this.commonService.reverseLeaveRequest(employeeId, appDate).subscribe(function (res) {
                    _this.toaster.success("Leave Request Reversed");
                    $("#attendance").modal("hide");
                    _this.isReverseEnable = true;
                }, function (error) {
                    console.log(error);
                });
            }
        });
    };
    //end method
    AttendanceComponent.prototype.onLeaveSubmit = function () {
        var _this = this;
        var fromDate = new Date(this.leaveForm.controls['fromDate'].value);
        // console.log("fromDate.getDay()", fromDate.getDay());
        var toDate = this.leaveForm.controls['toDate'].value;
        // console.log("toDate.getDate()", toDate.getDate());
        var i = 0;
        while ((fromDate.getDate() <= toDate.getDate() &&
            fromDate.getMonth() == toDate.getMonth() && fromDate.getFullYear() == toDate.getFullYear())
            || (fromDate.getMonth() < toDate.getMonth() && fromDate.getFullYear() == toDate.getFullYear())
            || (fromDate.getFullYear() < toDate.getFullYear())) {
            if (fromDate.getDay() != 0 && fromDate.getDay() != 6) {
                i += 1;
            }
            fromDate.setDate(fromDate.getDate() + 1);
        }
        //console.log(i)
        if (this.leaveForm.controls['leaveId'].value == "5") {
            if (i > 66) {
                this.toaster.error("MATERNITY LEAVES CANNOT EXCEED 66 DAYS!!");
                return;
            }
        }
        if (this.leaveForm.controls['leaveId'].value == "17") {
            if (i > 10) {
                this.toaster.error("PATERNITY LEAVES CANNOT EXCEED 10 DAYS!!");
                return;
            }
        }
        // if (this.leaveForm.controls['gender'].value == "F") {
        //   console.log(this.leaveForm.controls['gender'].value === "F")
        //   let differneceInLeaves1 = this.leaveForm.controls['toDate'].value - this.leaveForm.controls['fromDate'].value;
        //   console.log(differneceInLeaves1)
        //   if (differneceInLeaves1 > 5702400000) {
        //     this.toaster.error("Leaves cannot exceed 66 days");
        //     return;
        //   }
        // }
        // if (this.leaveForm.controls['gender'].value == "M") {
        //   console.log(this.leaveForm.controls['gender'].value == "M");
        //   let differneceInLeaves = this.leaveForm.controls['toDate'].value - this.leaveForm.controls['fromDate'].value;
        //   if (differneceInLeaves > 864000000) {
        //     this.toaster.error("Leaves cannot exceed 10 days");
        //     return;
        //   }
        // }
        if (this.leaveForm.controls['approvedId'].value == 'Other') {
            this.leaveForm.controls['approvedId'].setValue(this.leaveForm.controls['selectedAppreoved'].value);
        }
        this.submitted = true;
        if (!this.leaveForm.valid) {
            this.toaster.error("Fileds Are Invalid!!");
            return;
        }
        /* Commented by Zohaib Asim
        this.commonService.saveLeaveSummary(this.leaveForm.value).subscribe(res => {
          console.log(res);
          this.spinner.hide();
          this.toaster.success("Saved");
          (<any>$('#attendance')).modal('hide');
          //post all disable
          this.fieldpost = false;
          for (var z = 0; z < this.temp.length; z++) {
            var y = this.temp[z];
            if (this.leaveForm.controls['employeeId'].value == y.employee_id) {
              this.temp[z].leave_id = this.leaveForm.controls['leaveId'].value;
            }
          }
          let t = 0;
          for (var i = 0; i < this.temp.length; i++) {
            var obj = this.temp[i];
            if (obj.leave_id == 6 || obj.leave_id == 3) {
              if (obj.time_in == null || obj.time_out == null) {
                this.fieldpost = true;
                t++
              } else if (obj.time_in != null && obj.checkInSaved && obj.time_out != null && obj.checkOutSaved && t == 0) {
                this.fieldpost = false;
              }
            }
          }
          //end
        }, error => {
          console.log(error)
          this.spinner.hide();
          // this.leaveForm.reset(this.leaveForm.value);
          // this.leaveForm.reset();
          this.leaveForm.markAsPristine();
        });*/
        // Added by Zohaib Asim - Dated 12/11/2020
        // Check Leave Balance should be greater than Total Days
        // System will Allow following leaves to be submitted - Dated 2/12/2020
        // 13-SUSPENDED, 18-COMPENSATORY LEAVE, 19-WORK FROM HOME, 8-UNINFORMED LEAVE
        // 9-ON TRAINING, 11-RESIGNED, 14-RECOMMENDED FOR TERMINATION, 15-DEATH, 16-UN-APPROVED LEAVE
        /*let formLeaveId = this.leaveForm.controls['leaveId'].value;
        if ( (formLeaveId == 1 || formLeaveId == 2 || formLeaveId == 3) &&
            this.leaveForm.controls['leaveBalance'].value < this.leaveForm.controls['totalDays'].value) {
            this.toaster.info('Total Days Cannot Greater Then Leave Balance');
            return;
        }*/
        // Added by Zohaib Asim - Dated 16/11/2020
        // If user marked itself present and same day applying for AL,ML
        var saveLeaveFlag = false;
        this.commonService.getAttendanceDetails(this.leaveForm.controls['employeeId'].value, this.leaveForm.controls['appDat'].value).subscribe(function (res) {
            console.log("GetAttendanceDetails:", res);
            if (res != null && res.leaveId != null) {
                //console.log("res is not null");
                // let currDate = new DatePipe("en-US").transform(new Date(), "dd-MM-yyyy");
                var attendanceDate = moment.parseZone(_this.attDate.format("DD-MM-YYYY"))["_i"];
                //let appDate = this.leaveForm.controls["applicationDate"].value
                var formFromDate = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]("en-US").transform(new Date(_this.leaveForm.controls["fromDate"].value), "dd-MM-yyyy");
                var formToDate = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]("en-US").transform(new Date(toDate), "dd-MM-yyyy");
                console.log("CurrentDate", attendanceDate);
                console.log("FromDate", formFromDate);
                console.log("ToDate", formToDate);
                // console.log(appDate == formFromDate);
                // console.log("attendanceDate >= fromDate", attendanceDate >= formFromDate);
                // console.log("attendanceDate <= toDate", attendanceDate <= formToDate);
                //
                if (res.leaveId == 6 &&
                    (_this.leaveForm.controls['leaveId'].value == 1 || _this.leaveForm.controls['leaveId'].value == 2)
                    && (attendanceDate >= formFromDate && attendanceDate <= formToDate)) {
                    _this.toaster.info('User Leave cannot be applied, because his/her attendance has been marked for today.');
                    return;
                }
                else {
                    saveLeaveFlag = true;
                }
            }
            else {
                saveLeaveFlag = true;
            }
            // Flag to save leave details
            //console.log("Leave Form Object: ", this.leaveForm.value)
            if (saveLeaveFlag) {
                _this.saveLeaveForm(_this.leaveForm.value);
            }
        }, function (error) {
            console.log(error);
        });
    };
    // Added by Zohaib Asim - Dated 16/11/2020
    // Save Leave Form will save the user input details
    AttendanceComponent.prototype.saveLeaveForm = function (leaveFormValues) {
        var _this = this;
        // Save Leave Form
        this.commonService.saveLeaveSummary(leaveFormValues).subscribe(function (res) {
            //console.log(res);
            _this.spinner.hide();
            _this.toaster.success("Saved");
            $("#attendance").modal("hide");
            //post all disable
            _this.fieldpost = false;
            for (var z = 0; z < _this.temp.length; z++) {
                var y = _this.temp[z];
                if (_this.leaveForm.controls["employeeId"].value == y.employee_id) {
                    _this.temp[z].leave_id = _this.leaveForm.controls["leaveId"].value;
                }
            }
            var t = 0;
            for (var i = 0; i < _this.temp.length; i++) {
                var obj = _this.temp[i];
                if (obj.leave_id == 6 || obj.leave_id == 3) {
                    if (obj.time_in == null || obj.time_out == null) {
                        _this.fieldpost = true;
                        t++;
                    }
                    else if (obj.time_in != null &&
                        obj.checkInSaved &&
                        obj.time_out != null &&
                        obj.checkOutSaved &&
                        t == 0) {
                        _this.fieldpost = false;
                    }
                }
            }
            //end
        }, function (error) {
            console.log(error);
            _this.spinner.hide();
            // this.leaveForm.reset(this.leaveForm.value);
            // this.leaveForm.reset();
            _this.leaveForm.markAsPristine();
        });
    };
    // End
    AttendanceComponent.prototype.onAttendSubmit = function () {
    };
    AttendanceComponent.prototype.onLeaveChange = function () {
    };
    AttendanceComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AttendanceComponent.prototype.onLeaveRequestClick = function (obj) {
        var _this = this;
        this.selectedApprovedBy = '';
        //console.log(obj);
        if (obj.leave_id == '3') {
            this.minLeaveRequestDate = new Date();
            this.minLeaveRequestDate.setHours(0);
            this.minLeaveRequestDate.setMinutes(0);
        }
        else {
            //   this.minLeaveRequestDate = new Date(new Date().setDate(new Date().getDate() - 2));
            //   this.minLeaveRequestDate.setHours(0);
            //   this.minLeaveRequestDate.setMinutes(0);
            //   this.minLeaveRequestDate.setSeconds(0);
            //   console.log(new Date(new Date().setDate(new Date().getDate() - 2)))
            this.minLeaveRequestDate = new Date();
            var index = 0;
            while (index <= 1) {
                var date = new Date(this.minLeaveRequestDate);
                date.setDate(date.getDate() - 1);
                if (date.getDay() != 0 && date.getDay() != 6) {
                    index++;
                }
                this.minLeaveRequestDate = new Date(this.minLeaveRequestDate.setDate(this.minLeaveRequestDate.getDate() - 1));
                this.minLeaveRequestDate.setHours(0);
                this.minLeaveRequestDate.setMinutes(0);
                this.minLeaveRequestDate.setSeconds(0);
                // console.log(this.minLeaveRequestDate)
            }
        }
        // let atdt = new Date(this.attDate.setHours(0, 0, 0, 0)); console.log(atdt); console.log(new Date(atdt));
        obj.applicationDate = moment.parseZone(this.attDate.format('DD-MM-YYYY'))['_i'];
        obj.employeeId = obj.employee_id;
        this.leaveForm = this.fb.group({
            employeeId: [obj.employee_id],
            // transactionNo: ['', Validators.required],
            leaveId: [+obj.leave_id],
            applicationDate: [moment.parseZone(this.attDate.format('DD-MM-YYYY'))['_i']],
            totalDays: ["0"],
            appDat: [moment.parseZone(this.attDate.format('DD-MM-YYYY'))['_i']],
            leaveBalance: ["0"],
            fromDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            toDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            approvedId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            selectedAppreoved: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            gender: [obj.gender],
            nam: [''],
            reason: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            transDate: [new Date()],
            postFlg: [obj.postFlg]
        });
        // Get Leave Summary Details will return current date employee leave
        var getLeaveSummaryFlag = false;
        this.commonService.getLeaveSummary(obj).subscribe(function (res) {
            //console.log("onLeaveRequestClick -> getLeaveSummary", res);
            // Edit By  Naveed, date 04-11-2020
            // if employee already apply for leave then system will fetch stored application date
            _this.isReverseEnable = true;
            var appDate;
            if (res == null) {
                appDate = [moment.parseZone(_this.attDate.format("DD-MM-YYYY"))["_i"]];
                _this.leaveForm.controls["totalDays"].setValue("0");
            }
            else if (res.applicationDate == null) {
                appDate = [moment.parseZone(_this.attDate.format("DD-MM-YYYY"))["_i"]];
            }
            else {
                appDate = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]("en-US").transform(new Date(res.applicationDate), "dd-MM-yyyy");
            }
            // end if
            if (res != null) {
                // Addedd by Naveed
                _this.isReverseEnable = false;
                getLeaveSummaryFlag = true;
                //
                _this.leaveForm = _this.fb.group({
                    employeeId: [obj.employeeId],
                    // transactionNo: [res.transactionNo],
                    leaveId: [+res.leaveId],
                    applicationDate: [moment.parseZone(_this.attDate.format('DD-MM-YYYY'))['_i']],
                    totalDays: [res.totalDays],
                    appDat: [moment.parseZone(_this.attDate.format('DD-MM-YYYY'))['_i']],
                    leaveBalance: ["0"],
                    fromDate: [new Date(res.fromDate)],
                    toDate: [new Date(res.toDate)],
                    approvedId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    selectedAppreoved: [""],
                    nam: [''],
                    gender: [obj.gender],
                    reason: [res.reason],
                    transDate: [res.transDate],
                    postFlg: [obj.postFlg]
                });
                var found_1 = false;
                _this.approvedBy.forEach(function (apb) {
                    if (apb == res.approvedId) {
                        _this.leaveForm.controls['approvedId'].setValue(res.approvedId);
                        found_1 = true;
                    }
                });
                if (!found_1) {
                    _this.leaveForm.controls['approvedId'].setValue('Other');
                    _this.leaveForm.controls['selectedAppreoved'].setValue(res.approvedId);
                    _this.selectedApprovedBy = 'Other';
                }
                // Added By Naveed  10/11/2020
                // Get Leave Balance
                _this.getLeaveBalanceByEmployeeAndLeave(obj.employeeId, res.leaveId, [moment.parseZone(_this.attDate.format('DD-MM-YYYY'))['_i']]);
                // End
            }
            _this.spinner.hide();
            $('#attendance').modal('show');
        }, function (error) {
            console.log(error);
            _this.spinner.hide();
        });
        // Added by Zohaib Asim - Dated 16/11/2020
        // Get Leave Balance if no leave applied
        if (!getLeaveSummaryFlag) {
            this.getLeaveBalanceByEmployeeAndLeave(obj.employeeId, obj.leave_id, [moment.parseZone(this.attDate.format('DD-MM-YYYY'))['_i']]);
        }
    };
    // added By Naveed  10/11/2020
    // gte Leave Desc against leaveId
    AttendanceComponent.prototype.getLeaveDesc = function (obj) {
        var desc;
        this.leaveStatusListing.forEach(function (element) {
            if (obj == element.leave_id) {
                desc = element.description;
            }
        });
        return desc;
    };
    // Added by Zohaib Asim - Dated 16/11/2020
    // Get Leave Balance
    AttendanceComponent.prototype.getLeaveBalanceByEmployeeAndLeave = function (employeeId, leaveId, attendanceDate) {
        var _this = this;
        if (leaveId == '1' || leaveId == '2' || leaveId == '3') {
            //this.commonService.getLeaveBalanceByEmployeeLeaveId(employeeId, leaveId).subscribe(
            this.commonService.getLeaveBalanceByEmployeeLeaveIdAndAttDate(employeeId, leaveId, attendanceDate).subscribe(function (res) {
                //console.log("getLeaveBalanceByEmployeeLeaveIdAndAttDate", res);
                // this.leaveForm.controls["leaveBalance"].setValue(res.balance);
                _this.leaveForm.patchValue({
                    leaveBalance: res.balance
                });
            }, function (error) {
                console.log("Error->getLeaveBalanceByEmployeeLeaveIdAndAttDate", error);
            }); // end
        }
        else {
            this.leaveForm.controls["leaveBalance"].setValue("0");
        }
    };
    // End
    // added By Naveed  10/11/2020
    // get AM/AM against Date
    AttendanceComponent.prototype.formatAMPM = function (date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }; //end
    AttendanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attendance',
            template: __webpack_require__(/*! ./attendance.component.html */ "./src/app/pages/admin/attendance/attendance.component.html"),
            styles: [__webpack_require__(/*! ./attendance.component.css */ "./src/app/pages/admin/attendance/attendance.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]])
    ], AttendanceComponent);
    return AttendanceComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/branch-portfolio/branch-portfolio.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/admin/branch-portfolio/branch-portfolio.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/branch-portfolio/branch-portfolio.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/admin/branch-portfolio/branch-portfolio.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar-admin></app-left-side-bar-admin>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content\">\r\n          <div class=\"voucherinfo\">\r\n            <br>\r\n            <br>\r\n\r\n            <!-- Branch Name  -->\r\n            <ul class=\"infolist\">\r\n              <li> <strong>Branch Name : </strong> <span> {{branchName}} </span></li>\r\n            </ul>\r\n\r\n            <!--  Total Target Clients and Amount   -->\r\n            <ul class=\"infolist\">\r\n              <li><strong>Total Branch Target Client : </strong><span> {{totalBranchTargetClient}} </span></li>\r\n              <li><strong>Total Branch Target Amount : </strong><span> {{totalBranchTargetAmount}} </span></li>\r\n            </ul>\r\n          </div>\r\n\r\n          <!--      Generate Listing Form               -->\r\n\r\n          <form [formGroup]=\"generateListForm\" (ngSubmit)=\"generateListings()\">\r\n            <div class=\"cRow\">\r\n\r\n              <!--  All Products Dropdown   -->\r\n\r\n              <div class=\"cCol2\">\r\n                <ng-select [items]=\"allProducts\" required bindValue=\"prdGrpSeq\" name=\"prdNm\" bindLabel=\"prdGrpNm\"\r\n                  placeholder=\"Select Product\" formControlName=\"productControl\"\r\n                  (change)=\"onSelectionChangeProducts($event)\">\r\n                </ng-select>\r\n              </div>\r\n\r\n              <!--  All Period Dropdown   -->\r\n\r\n              <div class=\"cCol2\" *ngIf=\"selectPeriod\">\r\n                <ng-select [items]=\"periodSpan\" required bindValue=\"perdKey\" name=\"perdKey\" bindLabel=\"perdKey\"\r\n                  placeholder=\"Select Period\" formControlName=\"perd\" (change)=\"onSelectionChangPeriod($event)\">\r\n                </ng-select>\r\n              </div>\r\n\r\n            </div>\r\n          </form>\r\n\r\n          <!--  Table for Listing of branch Portfolios  -->\r\n          <form [formGroup]=\"branchPortfolioForm\" (submit)=\"onSubmitBranchPortfolioForAll()\">\r\n\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table record\" id=\"myTable\">\r\n                <thead class=\"thead-blue thead-light\">\r\n                  <tr>\r\n                      <th>Potfolio ID</th>\r\n                    <th>BDO Name</th>\r\n                    <th>Target Client</th>\r\n                    <th style=\"text-align: left\">Target Amount</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr formArrayName=\"branchTargetPortfolio\"\r\n                    *ngFor=\"let bdo of branchPortfolioForm['controls'].branchTargetPortfolio['controls'] ;let i=index;\">\r\n\r\n                    <td formGroupName={{i}}>\r\n                      {{bdo.get('portId').value}}\r\n                    </td>\r\n\r\n                    <td formGroupName={{i}}>\r\n                      {{bdo.get('bdoName').value}}\r\n                    </td>\r\n\r\n                    <td formGroupName={{i}}>\r\n                      <mat-form-field>\r\n                        <input matInput placeholder=\"Target Clients\" formControlName=\"trgtClnt\"\r\n                          (keypress)=\"onlyNumbers($event)\" (keyup)=\"onSelectionChangTargetBdoClient($event)\">\r\n                      </mat-form-field>\r\n                    </td>\r\n\r\n                    <td formGroupName={{i}}>\r\n                      <mat-form-field>\r\n                        <input matInput placeholder=\"Target Amount\" formControlName=\"trgtAmt\"\r\n                          (keypress)=\"onlyNumbers($event)\" (keyup)=\"onSelectionChangTargetBdoAmount($event)\">\r\n                      </mat-form-field>\r\n                    </td>\r\n\r\n                  </tr>\r\n                </tbody>\r\n                <tbody>\r\n                  <tr class=\"total-info\">\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td><b>Total BDO Target Client:</b> {{totalBdoTargetClient}}</td>\r\n                    <td class=\"text-left\"><b>Total BDO Target Amount:</b> {{totalBdoTargetAmount}}</td>\r\n                  </tr>\r\n                </tbody>\r\n\r\n              </table>\r\n            </div>\r\n\r\n            <div *ngIf=\"saveAllPortfolio\" class=\"text-left mt-2 pb-3\">\r\n              <button type=\"submit\" class=\"btn btn-primary btn-min\">Save\r\n                All</button>\r\n            </div>\r\n\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/admin/branch-portfolio/branch-portfolio.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/admin/branch-portfolio/branch-portfolio.component.ts ***!
  \****************************************************************************/
/*! exports provided: MY_FORMATS, BranchPortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchPortfolioComponent", function() { return BranchPortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var src_app_shared_services_paymentTypes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/paymentTypes.service */ "./src/app/shared/services/paymentTypes.service.ts");
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
var BranchPortfolioComponent = /** @class */ (function () {
    function BranchPortfolioComponent(transferService, paymentTypesService, fb, toaster) {
        this.transferService = transferService;
        this.paymentTypesService = paymentTypesService;
        this.fb = fb;
        this.toaster = toaster;
        this.allBranchTargets = [];
        this.selectPeriod = false;
        this.saveAllPortfolio = false;
        //Total Branch Target
        this.totalBranchTargetClient = "0";
        this.totalBranchTargetAmount = "0";
        //Total Bdo Target
        this.totalBdoTargetClient = "0";
        this.totalBdoTargetAmount = "0";
    }
    BranchPortfolioComponent.prototype.ngOnInit = function () {
        var _this = this;
        //All Products
        this.transferService.getAllProducts().subscribe(function (data) {
            _this.allProducts = data;
        });
        //All Branches
        this.paymentTypesService.getAllBrnches().subscribe(function (response) {
            _this.allBrnches = response;
            var branch;
            branch = _this.allBrnches;
            branch.forEach(function (element) {
                if (element.brnchSeq == JSON.parse(sessionStorage.getItem("auth")).emp_branch) {
                    _this.branchName = element.brnchNm;
                }
            });
        });
        // Branch Portfolio Form
        // this.branchPortfolioForm = this.fb.group({
        //   trgtClnt: ['', Validators.required],
        //   trgtAmt: ['', Validators.required],
        // });
        // Generate List Form
        this.generateListForm = this.fb.group({
            productControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            perd: ['']
        });
        this.createform();
    };
    BranchPortfolioComponent.prototype.createform = function () {
        var arr = [];
        for (var i = 0; i < this.allBranchTargets.length; i++) {
            arr.push(this.BuildFormDynamic(this.allBranchTargets[i]));
        }
        this.branchPortfolioForm = this.fb.group({
            branchTargetPortfolio: this.fb.array(arr)
        });
    };
    BranchPortfolioComponent.prototype.BuildFormDynamic = function (bdo) {
        return this.fb.group({
            portId: [bdo.portId],
            brnchTrgtsSeq: [bdo.brnchTrgtsSeq],
            bdoName: [bdo.empNm],
            trgtClnt: [bdo.trgtClnt],
            trgtAmt: [bdo.trgtAmnt]
        });
    };
    // only numbers 
    BranchPortfolioComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    //Generating Listings for Table
    BranchPortfolioComponent.prototype.generateListings = function () {
        console.log(this.generateListForm.value);
    };
    BranchPortfolioComponent.prototype.onSelectionChangeProducts = function (e) {
        var _this = this;
        this.selectPeriod = false;
        this.generateListForm.controls['perd'].reset();
        this.totalBranchTargetClient = "0";
        this.totalBranchTargetAmount = "0";
        this.totalBdoTargetClient = "0";
        this.totalBdoTargetAmount = "0";
        this.allBranchTargets = [];
        this.createform();
        this.transferService.getAllPeriodsOfBranchPortfolio(this.generateListForm.controls['productControl'].value).subscribe(function (response) {
            _this.periodSpan = response;
            _this.selectPeriod = true;
        });
    };
    BranchPortfolioComponent.prototype.onSelectionChangPeriod = function (e) {
        var _this = this;
        this.totalBranchTargetClient = e.clients;
        this.totalBranchTargetAmount = e.amount;
        this.totalBdoTargetClient = "0";
        this.totalBdoTargetAmount = "0";
        this.allBranchTargets = [];
        this.createform();
        this.transferService.getListingsForBranchPortfolio(e.brnchTrgtSeq).subscribe(function (res) {
            _this.allBranchTargets = res;
            _this.saveAllPortfolio = true;
            _this.createform();
            _this.onSelectionChangTargetBdoAmount(0);
            _this.onSelectionChangTargetBdoClient(0);
        });
    };
    BranchPortfolioComponent.prototype.onSelectionChangTargetBdoClient = function (e) {
        // console.log(this.branchPortfolioForm.value.branchTargetPortfolio.length)
        // console.log(this.branchPortfolioForm)
        // console.log(this.branchPortfolioForm.value)
        // console.log(this.branchPortfolioForm.value.branchTargetPortfolio)
        // for (let i = 0; i < this.branchPortfolioForm.value.branchTargetPortfolio.length; i++) {
        //   console.log(this.branchPortfolioForm.value.branchTargetPortfolio[i].trgtClnt)
        //   if(this.branchPortfolioForm.value.branchTargetPortfolio[i].trgtClnt = 0){
        //     alert("you can't enter 0 against target amount or ");
        //   }
        // }
        var total = 0;
        this.branchPortfolioForm.value.branchTargetPortfolio.forEach(function (element) {
            total = total + +element.trgtClnt;
        });
        this.totalBdoTargetClient = '' + total;
    };
    BranchPortfolioComponent.prototype.onSelectionChangTargetBdoAmount = function (e) {
        var total = 0;
        this.branchPortfolioForm.value.branchTargetPortfolio.forEach(function (element) {
            total = total + +element.trgtAmt;
        });
        this.totalBdoTargetAmount = '' + total;
    };
    //Submitting function for all table data
    BranchPortfolioComponent.prototype.onSubmitBranchPortfolioForAll = function () {
        var _this = this;
        console.log(this.branchPortfolioForm.value);
        // for (let i = 0; i < this.branchPortfolioForm.value.branchTargetPortfolio.length; i++) {
        //   console.log(this.branchPortfolioForm.value.branchTargetPortfolio[i].trgtClnt)
        //   if (this.branchPortfolioForm.value.branchTargetPortfolio[i].trgtClnt == "0") {
        //     this.toaster.error('Target Client Cannot be 0')
        //     return;
        //   }
        // }
        // for (let i = 0; i < this.branchPortfolioForm.value.branchTargetPortfolio.length; i++) {
        //   console.log(this.branchPortfolioForm.value.branchTargetPortfolio[i].trgtAmt)
        //   if (this.branchPortfolioForm.value.branchTargetPortfolio[i].trgtAmt == "0") {
        //     this.toaster.error('Target Amount Cannot be 0')
        //     return;
        //   }
        // }
        if (this.totalBdoTargetClient > this.totalBranchTargetClient) {
            this.toaster.error('Total BDO Target Client is greater than Total Branch Target Client');
            return;
        }
        if (this.totalBdoTargetClient < this.totalBranchTargetClient) {
            this.toaster.error('Total BDO Target Client is less than Total Branch Target Client');
            return;
        }
        if (this.totalBdoTargetAmount > this.totalBranchTargetAmount) {
            this.toaster.error('Total BDO Target Amount is greater than Total Branch Target Amount');
            return;
        }
        if (this.totalBdoTargetAmount < this.totalBranchTargetAmount) {
            this.toaster.error('Total BDO Target Amount is less than Total Branch Target Amount');
            return;
        }
        this.transferService.savingAllBranchPortfolios(this.branchPortfolioForm.value.branchTargetPortfolio).subscribe(function (res) {
            _this.toaster.success('Saved');
        }, function (error) {
            _this.toaster.error('Something Went Wrong');
        });
    };
    BranchPortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-branch-portfolio',
            template: __webpack_require__(/*! ./branch-portfolio.component.html */ "./src/app/pages/admin/branch-portfolio/branch-portfolio.component.html"),
            styles: [__webpack_require__(/*! ./branch-portfolio.component.css */ "./src/app/pages/admin/branch-portfolio/branch-portfolio.component.css")],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_2__["TransfersService"],
            src_app_shared_services_paymentTypes_service__WEBPACK_IMPORTED_MODULE_6__["PaymentTypesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], BranchPortfolioComponent);
    return BranchPortfolioComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/client-health-insurance-claim/client-health-insurance-claim.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/admin/client-health-insurance-claim/client-health-insurance-claim.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/client-health-insurance-claim/client-health-insurance-claim.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/admin/client-health-insurance-claim/client-health-insurance-claim.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar-admin></app-left-side-bar-admin>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content\">\r\n          <!-- <div class=\"mysearchbox\">\r\n            <h6 class=\"d-inline-block searchshow\">KSZB Claims <i class=\"fa fa-search\"> </i></h6>\r\n            <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n              <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\"\r\n                title=\"Type in a name\">\r\n            </div>\r\n          </div> -->\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\" *ngIf=\"clientHealthInsuranceClaims?.length>0 || this.auth.role == 'bm'\">\r\n              <div class=\"mysearchbox\" (click)=\"showField()\" *ngIf=\"!showFields\">\r\n                <!-- Modified by Zohaib Asim - Dated 24-12-2020 - KSZB Claims to Health Claims -->\r\n                <h6 class=\"d-inline-block searchshow\" style=\"cursor: pointer;\">Health Claims\r\n                  <i class=\"fa fa-search\"> </i>\r\n                </h6>\r\n              </div>\r\n              <div class=\"mysearch\" *ngIf=\"showFields\">\r\n                <form (ngSubmit)=\"applyFilter(searchVal)\" #searchForm=\"ngForm\">\r\n                  <div class=\"col-sm-10\" style=\"float:left;\">\r\n                    <mat-form-field *ngIf=\"showFields\">\r\n                      <input id=\"searchBox\" (keyup)=\"searchValue()\" autofocus matInput name=\"searchValue\"\r\n                        [(ngModel)]=\"searchVal\" placeholder=\"Search\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-sm-2\" style=\"float:right;\">\r\n                    <button class=\"btn btn-primary btn-lg\" type=\"submit\">Search</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Added by Zohaib Asim - Dated 16-12-2020 -->\r\n            <!-- Claim Type selection -->\r\n            <div class=\"col-sm-4\">\r\n              <form [formGroup]=\"hlthClmTypeForm\" (ngSubmit)=\"onSubmitBranchForm()\">\r\n                <ng-select [items]=\"hlthClmTypes\" required (change)=\"onSelectHlthClmType($event)\"\r\n                  bindLabel=\"refCdDscr\" bindValue=\"refCd\" name=\"refCdDscr\" placeholder=\"Select Claim Type:\"\r\n                  formControlName=\"hlthClmType\">\r\n                </ng-select>\r\n              </form>\r\n            </div>\r\n            <!-- End by Zohaib Asim -->\r\n\r\n            <div class=\"col-sm-4\">\r\n              <form [formGroup]=\"branchForm\" (ngSubmit)=\"onSubmitBranchForm()\">\r\n                <ng-select *ngIf=\"auth.role != 'bm'\" [items]=\"branchs\" required (change)=\"onSelectBranch($event)\"\r\n                  bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                  formControlName=\"branch\">\r\n                </ng-select>\r\n              </form>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row clearfix\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"cRow\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal fade\" id=\"ApplyPayment\" role=\"dialog\">\r\n            <div class=\"modal-dialog mymodal bigger\">\r\n\r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">KSZB Claim</h5>\r\n                </div>\r\n                <form [formGroup]=\"clientHealthInsuranceClaimForm\">\r\n                  <div class=\"modal-body\">\r\n\r\n                    <div class=\"cRow\">\r\n                      <div class=\"cCol2\">\r\n                        <label>Branch</label>\r\n                        <input type=\"text\" disabled=\"readonly\" formControlName=\"brnchSeq\" class=\"form-control\" />\r\n                      </div>\r\n                      <div class=\"cCol2\">\r\n                        <label>Client</label>\r\n                        <input type=\"text\" disabled=\"readonly\" formControlName=\"clntSeq\" class=\"form-control\" />\r\n                      </div>\r\n                      <div class=\"cCol2\">\r\n                        <label>Claim Amount</label>\r\n                        <input type=\"text\" disabled=\"readonly\" formControlName=\"clmAmt\" class=\"form-control\" />\r\n                      </div>\r\n                      <div class=\"cCol2\">\r\n                        <label>Claim ID</label>\r\n                        <input type=\"text\" disabled=\"readonly\" formControlName=\"transactionId\" class=\"form-control\" />\r\n                      </div>\r\n                      <div class=\"cCol2\">\r\n                        <label>Claim Status</label>\r\n                        <label>{{findValueByKey(form.clmStsKey)}}</label>\r\n                        <input type=\"text\" disabled=\"readonly\" formControlName=\"clmStsKey\" class=\"form-control\">\r\n                      </div>\r\n                      <div class=\"cCol2\">\r\n                        <label>Payment Mode</label>\r\n                        <mat-select type=\"\" formControlName=\"paymentMode\" class=\"form-control\" id=\"paymentMode\"\r\n                          [ngClass]=\"{ 'is-invalid': form.paymentMode.errors?.required }\"\r\n                          (selectionChange)=\"onSelectChange()\">\r\n                          <mat-option *ngFor=\"let payment of paymentArray\" [value]=\"payment\">{{payment.typStr}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                        <div *ngIf=\"form.paymentMode.errors?.required\" class=\"invalid-feedback\">\r\n                          Payment Mode is required\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"cCol2\" *ngIf=\"!isCash\">\r\n                        <label>Instrument #</label>\r\n                        <input type=\"text\" formControlName=\"instrumentNum\" class=\"form-control\"\r\n                          [ngClass]=\"{ 'is-invalid': form.instrumentNum.errors?.required }\" />\r\n                        <div *ngIf=\"form.instrumentNum.errors?.required\" class=\"invalid-feedback\">\r\n                          Instrument No. is required\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"modal-footer text-center\">\r\n                    <button appNoDblClick [disabled]=\"!clientHealthInsuranceClaimForm.valid\" type=\"button\"\r\n                      class=\"btn btn-primary btn-min\" (click)=\"onPayClick()\">Pay</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n           <!---- DATA TABLES---->\r\n\r\n           <div class=\"table-responsive mb-md-5\">\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"table\" multiTemplateDataRows matSort>\r\n\r\n              <!-- Reference Id Column -->\r\n              <ng-container matColumnDef=\"brnch\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Branch</th>\r\n                <td mat-cell *matCellDef=\"let clnt\">{{clnt.brnchNm}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Description Column -->\r\n              <ng-container matColumnDef=\"clntId\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Client Id</th>\r\n                <td mat-cell *matCellDef=\"let clnt\">{{clnt.clntId}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Category Column -->\r\n              <ng-container matColumnDef=\"clntName\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Client Name</th>\r\n                <td mat-cell *matCellDef=\"let clnt\">{{clnt.clntName}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Amount Column -->\r\n              <ng-container matColumnDef=\"clmAmount\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Claim Amount</th>\r\n                <td mat-cell *matCellDef=\"let clnt\">{{clnt.clmAmt | currency:'PKR':''}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Instrument No. Column -->\r\n              <ng-container matColumnDef=\"clmId\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Claim Id</th>\r\n                <td mat-cell *matCellDef=\"let clnt\">{{clnt.transactionId}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Action Column -->\r\n              <ng-container matColumnDef=\"action\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Action</th>\r\n                <td mat-cell *matCellDef=\"let clnt\">\r\n                  <ng-container >\r\n                    <span><a href=\"#\" data-toggle=\"modal\" (click)=\"onPaymentClick(clnt)\"\r\n                      class=\"iconBtn\"><img src=\"assets/images/rscheck.png\" alt=\"\"></a></span>\r\n                  <a *ngIf=\"auth.role=='admin'\" class=\"iconBtn delBtn\"\r\n                    (click)=\"onDelete(clnt.clntHlthClmSeq)\"><i class=\"fa fa-trash-o\"></i></a>\r\n                  </ng-container>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"thead-light thead-blue\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n\r\n            <mat-paginator [length]=\"datalength\"  [pageSizeOptions]=\"[10, 15, 20]\" showFirstLastButtons></mat-paginator>\r\n          </div>\r\n          \r\n          <!-- <div class=\"table-responsive\">\r\n            <table class=\"table record\" id=\"myTable\">\r\n              <thead class=\"thead-blue thead-light\">\r\n                <tr>\r\n                  <th>Branch</th>\r\n                  <th>Client Id</th>\r\n                  <th>Client Name</th>\r\n                  <th>Claim Amount</th>\r\n                  <th>Claim ID</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let clientHealthInsuranceClaim of clientHealthInsuranceClaims\">\r\n                  <td>{{clientHealthInsuranceClaim.brnchNm}}</td>\r\n                  <td>{{clientHealthInsuranceClaim.clntId}}</td>\r\n                  <td>{{clientHealthInsuranceClaim.clntName}}</td>\r\n                  <td>{{clientHealthInsuranceClaim.clmAmt}}</td>\r\n                  <td>{{clientHealthInsuranceClaim.transactionId}}</td>\r\n                  <td>\r\n                    <span><a href=\"#\" data-toggle=\"modal\" (click)=\"onPaymentClick(clientHealthInsuranceClaim)\"\r\n                        class=\"iconBtn\"><img src=\"assets/images/rscheck.png\" alt=\"\"></a></span>\r\n                    <a *ngIf=\"auth.role=='admin'\" class=\"iconBtn delBtn\"\r\n                      (click)=\"onDelete(clientHealthInsuranceClaim.clntHlthClmSeq)\"><i class=\"fa fa-trash-o\"></i></a>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/admin/client-health-insurance-claim/client-health-insurance-claim.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/admin/client-health-insurance-claim/client-health-insurance-claim.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ClientHealthInsuranceClaimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientHealthInsuranceClaimComponent", function() { return ClientHealthInsuranceClaimComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_shared_models_client_health_insurance_claim_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/client-health-insurance-claim.model */ "./src/app/shared/models/client-health-insurance-claim.model.ts");
/* harmony import */ var src_app_shared_services_client_health_insurance_claim_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/client-health-insurance-claim.service */ "./src/app/shared/services/client-health-insurance-claim.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_expense_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/expense.service */ "./src/app/shared/services/expense.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













// End by Zohaib Asim
var ClientHealthInsuranceClaimComponent = /** @class */ (function () {
    function ClientHealthInsuranceClaimComponent(formBuilder, clientHealthInsuranceClaimService, commonService, expenseService, spinner, toaster, fb, transfersService) {
        this.formBuilder = formBuilder;
        this.clientHealthInsuranceClaimService = clientHealthInsuranceClaimService;
        this.commonService = commonService;
        this.expenseService = expenseService;
        this.spinner = spinner;
        this.toaster = toaster;
        this.fb = fb;
        this.transfersService = transfersService;
        this.isCash = false;
        this.onBranchSelection = false;
        this.datalength = 0;
        this.lastPageIndex = 0;
        this.filterValue = "";
        this.searchVal = "";
        this.isCount = true;
        this.addClientHealthInsuranceClaim = new src_app_shared_models_client_health_insurance_claim_model__WEBPACK_IMPORTED_MODULE_4__["ClientHealthInsuranceClaim"]();
        this.isEdit = false;
        this.submitted = false;
        this.showFields = false;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
    }
    ClientHealthInsuranceClaimComponent.prototype.applyFilter = function (filterValue) {
        this.filterValue = filterValue;
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.datalength = this.countBeforeFilter;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            return;
        }
        this.getFilteredData(filterValue.trim().toLowerCase());
    };
    ClientHealthInsuranceClaimComponent.prototype.searchValue = function () {
        var _this = this;
        this.filterValue = this.searchVal.trim();
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            this.datalength = 0;
            setTimeout(function () { _this.datalength = _this.countBeforeFilter; }, 200);
            return;
        }
    };
    ClientHealthInsuranceClaimComponent.prototype.showField = function () {
        this.showFields = true;
    };
    ClientHealthInsuranceClaimComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.displayedColumns = ['brnch', 'clntId', 'clntName', 'clmAmount', 'clmId', 'action'];
        this.clientHealthInsuranceClaimForm = this.formBuilder.group({
            brnchSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            clntSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            clmAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            transactionId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            clmStsKey: [''],
            paymentMode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            instrumentNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            clntHlthClmSeq: ['']
        });
        this.expenseService.getPaymentModes().subscribe(function (data) {
            _this.paymentArray = data;
        });
        this.commonService.getValues('0258').subscribe(function (d) { return _this.claimStatusArray = d; });
        this.branchForm = this.fb.group({
            branch: [this.auth.emp_branch],
        });
        // this.transfersService.getBranches().subscribe(d => {
        //   this.branchs = d;
        //   console.log(this.branchs)
        // });
        // Added by Zohaib Asim - Dated 16-12-2020
        // Initialize Form
        this.hlthClmTypeForm = this.fb.group({
            hlthClmType: [0],
        });
        // Health Claim Types
        // Fetch Health Claim Types on Initiate
        if (this.hlthClmTypes == null) {
            this.toaster.info('Please Select Health Claim Type', 'Information');
            // 
            this.commonService.getHlthClmTypes().subscribe(function (res) {
                _this.hlthClmTypes = res;
                console.log("hlthClmTypes:", _this.hlthClmTypes);
            });
        }
        // End by Zohaib Asim
        if (this.auth.role != 'bm' && this.auth.role != 'bdo') {
            this.toaster.info('Please Select Branch', 'Information');
            this.commonService.getBrnchsForUsr().subscribe(function (res) {
                _this.branchs = res;
                console.log(res);
            });
        }
        else {
            this.onSelectBranch();
        }
    };
    Object.defineProperty(ClientHealthInsuranceClaimComponent.prototype, "form", {
        get: function () {
            return this.clientHealthInsuranceClaimForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ClientHealthInsuranceClaimComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function () { return _this.loadClms(); }))
            .subscribe();
    };
    // Added by Zohaib Asim - Dated 16-12-2020
    // Function for Health Claim Type changing
    ClientHealthInsuranceClaimComponent.prototype.onSelectHlthClmType = function () {
        var _this = this;
        if (this.branchForm.controls['branch'].value == null || this.branchForm.controls['branch'].value == 0) {
            this.onBranchSelection = false;
            this.clientHealthInsuranceClaims = [];
            this.dataSource = null;
            this.datalength = 0;
            this.searchVal = '';
            this.toaster.info('Please Select Branch', 'Information');
            return;
        }
        this.spinner.show();
        // Modified by Zohaib Asim - Dated 16-12-2020
        // Health Claim Type parameter added
        this.clientHealthInsuranceClaimService.getClientHealthInsuranceClaims(this.branchForm.controls['branch'].value, this.hlthClmTypeForm.controls['hlthClmType'].value, this.paginator.pageIndex, 10, "", this.isCount).subscribe(function (data) {
            _this.clientHealthInsuranceClaims = data.clnts;
            _this.spinner.hide();
            if (_this.clientHealthInsuranceClaims.length <= 0 && _this.branchForm.controls['branch'].value != 0) {
                _this.toaster.info('No Data Found Against This Branch', 'Information');
            }
            ;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.clientHealthInsuranceClaims);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            setTimeout(function () { return _this.datalength = data.count; }, 10);
            _this.dataBeforeFilter = _this.dataSource.data;
            _this.countBeforeFilter = data.count;
            _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
        }, function (error) {
            _this.spinner.hide();
            console.log('err All client Health InsuranceClaims Service');
            console.log('err', error);
        });
    };
    // End by Zohaib Asim
    ClientHealthInsuranceClaimComponent.prototype.onSelectBranch = function () {
        var _this = this;
        this.isCount = true;
        this.clientHealthInsuranceClaims = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.clientHealthInsuranceClaims);
        this.paginator.pageIndex = 0;
        this.dataSource.paginator = this.paginator;
        this.searchVal = '';
        this.filterValue = '';
        this.lastPageIndex = 0;
        if (this.branchForm.controls['branch'].value == null || this.branchForm.controls['branch'].value == 0) {
            this.onBranchSelection = false;
            this.clientHealthInsuranceClaims = [];
            this.dataSource = null;
            this.datalength = 0;
            this.searchVal = '';
            return;
        }
        // Added by Zohaib Asim - Dated 16-12-2020
        //console.log("Branch Value :", this.branchForm.controls['branch'].value);
        //console.log("Health Claim Type Value :", this.hlthClmTypeForm.controls['hlthClmType'].value);
        // Health Claim Types Form
        if (this.hlthClmTypeForm.controls['hlthClmType'].value == null || this.hlthClmTypeForm.controls['hlthClmType'].value == 0) {
            this.toaster.info('Please Select Health Claim Type', 'Information');
            return;
        }
        this.spinner.show();
        // Modified by Zohaib Asim - Dated 16-12-2020
        // Health Claim Type parameter added
        //this.clientHealthInsuranceClaimService.getClientHealthInsuranceClaims(this.branchForm.controls['branch'].value, this.paginator.pageIndex, 10, "", this.isCount).subscribe(data => {
        this.clientHealthInsuranceClaimService.getClientHealthInsuranceClaims(this.branchForm.controls['branch'].value, this.hlthClmTypeForm.controls['hlthClmType'].value, this.paginator.pageIndex, 10, "", this.isCount).subscribe(function (data) {
            _this.clientHealthInsuranceClaims = data.clnts;
            _this.spinner.hide();
            if (_this.clientHealthInsuranceClaims.length <= 0 && _this.branchForm.controls['branch'].value != 0) {
                _this.toaster.info('No Data Found Against This Branch', 'Information');
            }
            ;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.clientHealthInsuranceClaims);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            setTimeout(function () { return _this.datalength = data.count; }, 10);
            _this.dataBeforeFilter = _this.dataSource.data;
            _this.countBeforeFilter = data.count;
            _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
        }, function (error) {
            _this.spinner.hide();
            console.log('err All client Health InsuranceClaims Service');
            console.log('err', error);
        });
    };
    ClientHealthInsuranceClaimComponent.prototype.loadClms = function () {
        var _this = this;
        this.isCount = false;
        if (this.paginator.pageIndex < this.lastPageIndex)
            return;
        if (this.dataSource.paginator.length == this.dataSource.data.length)
            return;
        if (((this.paginator.pageIndex + 1) * this.paginator.pageSize) - this.dataSource.data.length > 0) {
            this.spinner.show();
            // Modified by Zohaib Asim - Dated 16-12-2020
            // Health Claim Type parameter added
            //this.clientHealthInsuranceClaimService.getClientHealthInsuranceClaims(this.branchForm.controls['branch'].value, this.paginator.pageIndex, this.paginator.pageSize, this.filterValue, this.isCount).subscribe(data => {
            this.clientHealthInsuranceClaimService.getClientHealthInsuranceClaims(this.branchForm.controls['branch'].value, this.hlthClmTypeForm.controls['hlthClmType'].value, this.paginator.pageIndex, this.paginator.pageSize, this.filterValue, this.isCount).subscribe(function (data) {
                _this.spinner.hide();
                _this.clientHealthInsuranceClaims = data.clnts;
                _this.lastPageIndex = _this.lastPageIndex + 1;
                _this.dataSource.data = _this.dataSource.data.concat(_this.clientHealthInsuranceClaims);
                data.count = _this.datalength;
                _this.datalength = 0;
                setTimeout(function () { _this.datalength = data.count; }, 10);
                if (_this.clientHealthInsuranceClaims.length <= 0 && _this.auth.role != 'bm' && _this.branchForm.controls['branch'].value != 0) {
                    _this.toaster.info('No Data Found Against This Branch', 'Information');
                }
                ;
                if (_this.filterValue.length == 0) {
                    _this.dataBeforeFilter = _this.dataSource.data;
                    _this.countBeforeFilter = data.count;
                    _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
                }
            }, function (error) {
                _this.spinner.hide();
                console.log('err All client Health InsuranceClaims Service');
                console.log('err', error);
            });
        }
    };
    ClientHealthInsuranceClaimComponent.prototype.getFilteredData = function (filterValue) {
        var _this = this;
        this.isCount = true;
        this.paginator.pageIndex = 0;
        this.lastPageIndex = 0;
        this.spinner.show();
        // Modified by Zohaib Asim - Dated 16-12-2020
        // Health Claim Type parameter added
        //this.clientHealthInsuranceClaimService.getClientHealthInsuranceClaims(this.branchForm.controls['branch'].value, this.paginator.pageIndex, this.paginator.pageSize, filterValue, this.isCount).subscribe(data => {
        this.clientHealthInsuranceClaimService.getClientHealthInsuranceClaims(this.branchForm.controls['branch'].value, this.hlthClmTypeForm.controls['hlthClmType'].value, this.paginator.pageIndex, this.paginator.pageSize, filterValue, this.isCount).subscribe(function (data) {
            _this.clientHealthInsuranceClaims = data.clnts;
            _this.spinner.hide();
            if (_this.clientHealthInsuranceClaims.length <= 0 && _this.branchForm.controls['branch'].value != 0) {
                _this.toaster.info('No Data Found Against This Search', 'Information');
            }
            ;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.clientHealthInsuranceClaims);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = data.count;
        }, function (error) {
            _this.spinner.hide();
            console.log('err All client Health InsuranceClaims Service');
            console.log('err', error);
        });
    };
    ClientHealthInsuranceClaimComponent.prototype.onSubmitBranchForm = function () {
        console.log(this.branchForm.value);
    };
    ClientHealthInsuranceClaimComponent.prototype.onAddNewClick = function () {
        this.clientHealthInsuranceClaimForm.reset();
        this.isEdit = false;
        this.addClientHealthInsuranceClaim = new src_app_shared_models_client_health_insurance_claim_model__WEBPACK_IMPORTED_MODULE_4__["ClientHealthInsuranceClaim"]();
        $('#businessector').modal('show');
    };
    ClientHealthInsuranceClaimComponent.prototype.onPaymentClick = function (ClientHealthInsuranceClaim) {
        var _this = this;
        console.log(ClientHealthInsuranceClaim);
        this.expenseService.getClntOdDays(ClientHealthInsuranceClaim.clntSeq).subscribe(function (temp) {
            console.log(temp['days'] !== 0);
            if (temp['days'] !== 0) {
                _this.toaster.error("Client is in OD or has unposted Recovery.");
            }
            else {
                _this.tempEditClientHealthInsuranceClaim = ClientHealthInsuranceClaim;
                $('#ApplyPayment').modal('show');
                _this.isEdit = true;
                _this.clientHealthInsuranceClaimForm.patchValue(ClientHealthInsuranceClaim);
                _this.clientHealthInsuranceClaimForm.controls.clmStsKey.setValue(_this.findValueByKey(ClientHealthInsuranceClaim.clmStsKey));
                console.log(ClientHealthInsuranceClaim);
                _this.addClientHealthInsuranceClaim = ClientHealthInsuranceClaim;
            }
        });
    };
    ClientHealthInsuranceClaimComponent.prototype.onDelete = function (ClientHealthInsuranceClaims) {
        var _this = this;
        console.log(ClientHealthInsuranceClaims);
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Claim?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.spinner.show();
                _this.clientHealthInsuranceClaimService.deleteClientHealthInsuranceClaim(ClientHealthInsuranceClaims).subscribe(function (data) {
                    _this.spinner.hide();
                    _this.isCount = true;
                    _this.clientHealthInsuranceClaims = [];
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.clientHealthInsuranceClaims);
                    _this.paginator.pageIndex = 0;
                    _this.dataSource.paginator = _this.paginator;
                    _this.searchVal = '';
                    _this.filterValue = '';
                    _this.lastPageIndex = 0;
                    _this.onSelectBranch();
                }, function (error) {
                    _this.spinner.hide();
                    if (error.status == 500) {
                        _this.toaster.error("Something Went Wrong", "Error");
                    }
                    else if (error) {
                        _this.toaster.error("Something Went Wrong", "Error");
                    }
                });
            }
        });
        console.log(ClientHealthInsuranceClaims);
    };
    ClientHealthInsuranceClaimComponent.prototype.findValueByKey = function (key) {
        var status = '';
        if (this.claimStatusArray) {
            this.claimStatusArray.forEach(function (s) {
                if (s.codeKey === key) {
                    status = s.codeValue;
                }
            });
        }
        return status;
    };
    ClientHealthInsuranceClaimComponent.prototype.findClientName = function (seq) {
        var _this = this;
        this.clientHealthInsuranceClaimService.getClientName(seq).subscribe(function (data) { return _this.name = data; });
        return this.name;
    };
    ClientHealthInsuranceClaimComponent.prototype.onPayClick = function () {
        var _this = this;
        console.log(this.clientHealthInsuranceClaimForm);
        if (this.clientHealthInsuranceClaimForm.invalid) {
            return;
        }
        this.isCount = true;
        this.clientHealthInsuranceClaims = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.clientHealthInsuranceClaims);
        this.paginator.pageIndex = 0;
        this.dataSource.paginator = this.paginator;
        this.searchVal = '';
        this.filterValue = '';
        this.lastPageIndex = 0;
        this.spinner.show();
        this.clientHealthInsuranceClaimService.isClaimPaid(this.clientHealthInsuranceClaimForm.controls['clntHlthClmSeq'].value).subscribe(function (res) {
            if (!res.paid) {
                _this.addClientHealthInsuranceClaim.clmStsKey = 1;
                _this.addClientHealthInsuranceClaim.insturmentNum = _this.form.instrumentNum.value;
                _this.addClientHealthInsuranceClaim.paymentMode = _this.form.paymentMode.value.typSeq;
                // Added by Zohaib Asim - Dated 23-12-2020
                // KSZB Claims
                _this.addClientHealthInsuranceClaim.hlthClmTyp = _this.hlthClmTypeForm.controls['hlthClmType'].value;
                // End by Zohaib Asim
                _this.clientHealthInsuranceClaimService.addClientHealthInsuranceClaimRecordInExpense(_this.addClientHealthInsuranceClaim);
                if (_this.clientHealthInsuranceClaims.indexOf(_this.tempEditClientHealthInsuranceClaim) != -1) {
                    _this.clientHealthInsuranceClaims.splice(_this.clientHealthInsuranceClaims.indexOf(_this.tempEditClientHealthInsuranceClaim), 1);
                }
                $('#ApplyPayment').modal('hide');
                _this.clientHealthInsuranceClaimForm.reset();
                setTimeout(function () { _this.getFilteredData(""), 300; });
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
                _this.toaster.error("This claim is already paid", "Error");
            }
        });
    };
    ClientHealthInsuranceClaimComponent.prototype.onSelectChange = function () {
        var instrNum = this.clientHealthInsuranceClaimForm.get('instrumentNum');
        if (this.clientHealthInsuranceClaimForm.get('paymentMode').value.typId === '0001') {
            this.isCash = true;
            instrNum.clearValidators();
        }
        else {
            instrNum.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+$')]));
            this.isCash = false;
        }
        instrNum.updateValueAndValidity();
    };
    ClientHealthInsuranceClaimComponent.prototype.onDeleteKszbClaim = function () {
        console.log('i am to delete');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSort"])
    ], ClientHealthInsuranceClaimComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"])
    ], ClientHealthInsuranceClaimComponent.prototype, "paginator", void 0);
    ClientHealthInsuranceClaimComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-health-insurance-claim',
            template: __webpack_require__(/*! ./client-health-insurance-claim.component.html */ "./src/app/pages/admin/client-health-insurance-claim/client-health-insurance-claim.component.html"),
            styles: [__webpack_require__(/*! ./client-health-insurance-claim.component.css */ "./src/app/pages/admin/client-health-insurance-claim/client-health-insurance-claim.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_shared_services_client_health_insurance_claim_service__WEBPACK_IMPORTED_MODULE_5__["ClientHealthInsuranceClaimService"], _shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            src_app_shared_services_expense_service__WEBPACK_IMPORTED_MODULE_7__["ExpenseService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_12__["TransfersService"]])
    ], ClientHealthInsuranceClaimComponent);
    return ClientHealthInsuranceClaimComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/closing/closing.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/admin/closing/closing.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tr.mat-header-row {\r\n    height: 0px;\r\n}\r\n\r\ntr.mat-row {\r\n  vertical-align: center;\r\n}\r\n\r\n.mat-cell, .mat-header-cell {\r\n  font-size: 13px;\r\n}\r\n\r\n.mat-cell, .mat-footer-cell {\r\n  font-size: 13px;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/admin/closing/closing.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/admin/closing/closing.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header *ngIf=\"closing\" class=\"header\" style=\"top: 0px;position: absolute;width: 100%;\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-7\">\r\n        <a class=\"logo\"><img [src]=\"'../../../assets/images/logo.png'\" alt=\"Logo Image\"></a>\r\n        <form class=\"form-inline searchForm\" style=\"display:none\">\r\n          <input class=\"form-control mr-2 form-control-sm\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n          <button class=\"btn btn-sm searchBtn\" type=\"submit\">Search</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"col-sm-5\">\r\n        <div class=\"helpSection\">\r\n          <a class=\"btn btn-link btn-sm\"><i class=\"fa fa-question fa-lg\"></i> Help</a>\r\n          <div class=\"dropdown\">\r\n            <button type=\"button\" class=\"btn btn-link btn-sm dropdown-toggle\" data-toggle=\"dropdown\"\r\n              aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"fa fa-user fa-lg\"></i> Hi\r\n              {{auth.emp_name | uppercase}} </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right\">\r\n              <a (click)=\"logout()\" class=\"dropdown-item\">Logout</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"topNavBar\">\r\n    <nav class=\"navbar navbar-expand-md\">\r\n      <button class=\"navbar-toggler fa fa-bars\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n        aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"></button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n        <ul class=\"navbar-nav\">\r\n          <li class=\"nav-item active\"><a class=\"nav-link\">Admin</a></li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n</header>\r\n\r\n<!--<br><br>-->\r\n<!--<br><br>-->\r\n\r\n\r\n<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <div *ngIf=\"!closing\">\r\n          <app-left-side-bar-admin></app-left-side-bar-admin>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal fade\" id=\"businessector\" role=\"dialog\">\r\n        <div class=\"modal-dialog big mymodal\">\r\n          <!-- Modal content-->\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\">Edit Expense</h5>\r\n            </div>\r\n\r\n            <form [formGroup]=\"expenseForm\" (ngSubmit)=\"addExpensesSubmit()\">\r\n              <div class=\"modal-body\">\r\n                <ul class=\"infolist\">\r\n                </ul>\r\n                <div class=\"cRow\">\r\n\r\n                  <div class=\"cCol6\">\r\n                    <label>Type:</label>\r\n                    <mat-radio-group name=\"pymtRctFlg\" required formControlName=\"pymtRctFlg\">\r\n                      <mat-radio-button class=\"w-100\" [value]=\"1\">Payment</mat-radio-button>\r\n                      <mat-radio-button class=\"w-100\" [value]=\"2\">Receipt</mat-radio-button>\r\n\r\n                    </mat-radio-group>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"cRow\">\r\n                  <!-- <div class=\"cCol2\" >\r\n                    <label>Expense Id:</label>\r\n                    <input type=\"text\" formControlName=\"expnsId\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.expnsId.errors }\" />\r\n                    <div *ngIf=\"submitted && form.expnsId.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"form.expnsId.errors.required\">Expense Id is required                                \r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n                  <div class=\"cCol2\">\r\n                    <label>Description:</label>\r\n                    <input type=\"text\" formControlName=\"expnsDscr\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': form.expnsDscr.errors }\" />\r\n                    <div *ngIf=\"form.expnsDscr.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"form.expnsDscr.errors.required\">Description is required</div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"cCol2\">\r\n                    <label>Category:</label>\r\n                    <select type=\"\" formControlName=\"expnsTypSeq\" class=\"form-control\" id=\"expnsTypSeq\"\r\n                      [ngClass]=\"{ 'is-invalid': form.expnsTypSeq.errors }\">\r\n                      <option *ngFor=\"let expense of expenseArray\" [value]=\"expense.typSeq\">{{expense.typStr}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"form.expnsTypSeq.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"form.expnsTypSeq.errors.required\">Expense Type is required</div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"cCol2\">\r\n                    <label>Amount:</label>\r\n                    <input type=\"text\" formControlName=\"expnsAmt\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': form.expnsAmt.errors }\" />\r\n                    <div *ngIf=\"form.expnsAmt.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"form.expnsAmt.errors.required\">Expense Amount is required\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"cCol2\">\r\n                    <label>Instrument No.:</label>\r\n                    <input type=\"text\" formControlName=\"instrNum\" class=\"form-control\"\r\n                      [ngClass]=\"{ 'is-invalid': form.instrNum.errors }\" />\r\n                    <div *ngIf=\"form.instrNum.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"form.instrNum.errors.required\">Instrument # is required\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n\r\n                  <div class=\"cCol2\">\r\n                    <label>Mode:</label>\r\n                    <select type=\"\" formControlName=\"pymtTypSeq\" class=\"form-control\" id=\"payment\"\r\n                      [ngClass]=\"{ 'is-invalid': form.pymtTypSeq.errors }\">\r\n                      <option *ngFor=\"let payment of paymentArray\" [value]=\"payment.typSeq\">{{payment.typStr}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"form.pymtTypSeq.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"form.pymtTypSeq.errors.required\">Payment Type is required</div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button appNoDblClick type=\"button\" (click)=\"addExpensesSubmit()\"\r\n                  class=\"btn btn-primary btn-min\">Ok</button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n              </div>\r\n              <!-- </div> -->\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal fade\" id=\"AdjustPayment\" role=\"dialog\">\r\n        <div class=\"modal-dialog mymodal big\">\r\n          <!-- Modal content-->\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\">Adjust Payment</h5>\r\n            </div>\r\n            <form [formGroup]=\"adjustPayment\" (ngSubmit)=\"onAdjustPaymentSubmit()\">\r\n              <div class=\"modal-body\">\r\n                <div class=\"cRow\">\r\n                  <input type=\"hidden\" formControlName=\"trxId\" />\r\n                  <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Client Id:\" formControlName=\"clntId\">\r\n                      <mat-error *ngIf=\"af.clntId.errors?.required\">\r\n                        Client Id <strong>required</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Client Name:\" formControlName=\"clientNm\">\r\n                      <mat-error *ngIf=\"af.clientNm.errors?.required\">\r\n                        Client Name <strong>required</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Loan Id:\" formControlName=\"loanId\">\r\n                      <mat-error *ngIf=\"af.loanId.errors?.required\">\r\n                        Loan Id is <strong>required</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                  <div class=\"cCol2 \">\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"Institution Name:\" formControlName=\"rcvryTypsSeq\">\r\n                        <mat-option *ngFor=\"let edu of tempInstituteArray\" [value]=\"edu.typSeq\">\r\n                          {{edu.typStr}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                      <mat-error *ngIf=\"af.rcvryTypsSeq.errors?.required\">\r\n                        Institution Name is <strong>required</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Instrument Number:\" formControlName=\"instr\">\r\n                      <mat-error *ngIf=\"af.instr.errors?.required\">\r\n                        instrument number is <strong>required</strong>\r\n                      </mat-error>\r\n                      <mat-error *ngIf=\"af.instr.errors?.maxlength\">\r\n                        instrument number length should be <strong>20 characters</strong>\r\n                      </mat-error>\r\n                      <mat-error *ngIf=\"af.instr.errors?.minlength\">\r\n                        instrument number length should be <strong>20 characters</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input matInput required name=\"adjPymtDt\" [min]=\"minDate\" [max]=\"maxDate\" id=\"adjPymtDt\"\r\n                        formControlName=\"adjPymtDt\" disabled readonly placeholder=\"Slip Date:\"\r\n                        [matDatepicker]=\"picker2\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                      <mat-datepicker required #picker2 disabled=\"false\"></mat-datepicker>\r\n                      <mat-error *ngIf=\"af.adjPymtDt.errors?.required\">\r\n                        Slip Date is <strong>required</strong>\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n\r\n                  </div>\r\n                  <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Payment Amount:\" pattern=\"^-?[\\d.]+(?:e-?\\d+)?$\"\r\n                        formControlName=\"pymtAmt\">\r\n                      <mat-error *ngIf=\"af.pymtAmt.errors?.required\">\r\n                        Payment Amount is <strong>required</strong>\r\n                      </mat-error>\r\n                      <mat-error *ngIf=\"af.pymtAmt.errors?.paymtamterror\">\r\n                        Payment Amount is <strong>Greater then Due Amount</strong>\r\n                      </mat-error>\r\n                      <mat-error *ngIf=\"af.pymtAmt.errors?.pattern\">\r\n                        Payment Amount is <strong>Invalid</strong>\r\n                      </mat-error>\r\n\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button type=\"button\" appNoDblClick (click)=\"onAdjustPaymentSubmit()\" [disabled]=\"!adjustPayment.valid\"\r\n                  class=\"btn btn-primary btn-min\">Ok</button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content\">\r\n          <h6 class=\"d-inline-block searchshow\">Closing Type</h6>\r\n          <!-- <div class=\"cRow\">\r\n                <div class=\"cCol1 pt-0\">\r\n                \t<label class=\"mb-0\">Closing Type:</label>\r\n                  <select class=\"form-control\">\r\n                    <option>Day</option>\r\n                    <option>Day</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n          \r\n\t\t<div class=\"cRow\">\r\n                <div class=\"cCol1\">\r\n                <label class=\"mb-0\">Closing Date:</label>\r\n                <div class=\"input-group date\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"DD / MM / YYYY\">\r\n                  <div class=\"input-group-append input-group-addon\t\">\r\n                    <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              </div> \r\n         -->\r\n          <div class=\"buttons mt-3\">\r\n            <button [disabled]=\"allDisbursements.length>0 || allRecoveries.length>0 || allExpenses.length>0\"\r\n              class=\"btn btn-primary btn-min mr-3\" (click)=\"postMultiple()\">Close</button>\r\n            <!-- <button class=\"btn btn-default btn-min\">Cancel</button> -->\r\n\r\n          </div>\r\n\r\n          <!---------------------------------------------           DISBURSMENT          ------------------------------------------------------------->\r\n\r\n          <h2>Disbursement</h2>\r\n          <div class=\"buttons mt-3\">\r\n            <!-- <button class=\"btn btn-primary btn-min mr-3\">Post All Disbursement</button> -->\r\n            <!-- <button class=\"btn btn-default btn-min\">Cancel</button> -->\r\n\r\n          </div>\r\n          <!--      \r\n        <span><input type=\"checkbox\" class=\"check1\" [(ngModel)]=\"disbursementCheck\" (change)=\"addDisbursements($event)\"/></span>\r\n        -->\r\n\r\n          <!-- <div class=\"table-responsive\">\r\n            <table class=\"table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th></th>\r\n                  <th>Tx ID</th>\r\n                  <th>Client ID</th>\r\n                  <th>Client Name</th>\r\n                  <th>Product</th>\r\n                  <th>Voucher Date</th>\r\n                  <th>Payment Mode</th>\r\n                  <th>Amount</th>\r\n                  <th>Status</th>\r\n                  <th>Actions</th>\r\n                </tr>\r\n              </thead>\r\n\r\n              <tbody>\r\n                <tr *ngFor=\"let disbursement of allDisbursements\">\r\n\r\n                  <td><input type=\"checkbox\" class=\"check1\"></td>\r\n                  <td>{{disbursement.txId}}</td>\r\n                  <td>{{disbursement.clientId}}</td>\r\n                  <td>{{disbursement.clientName}}</td>\r\n                  <td>{{disbursement.product}}</td>\r\n                  <td>{{disbursement.voucherDate | date :'dd-MM-yyyy'}}</td>\r\n                  <td>{{disbursement.paymentMode}}</td>\r\n                  <td>{{disbursement.amount | currency:'PKR':''}}</td>\r\n                  <td><span>Unposted</span></td>\r\n                  <td><span>\r\n                      <a class=\"iconBtn\" (click)=\"onEditDisbursement(disbursement.loanAppSeq)\"><i\r\n                          class=\"fa fa-pencil\"></i></a>\r\n                      <a class=\"iconBtn\" (click)=\"postSingleDisbursement(disbursement)\"><i\r\n                          class=\"fa fa-check-square-o\"></i></a>\r\n                    </span>\r\n                  </td>\r\n                </tr>\r\n\r\n              </tbody>\r\n            </table>\r\n          </div> -->\r\n\r\n\r\n          <!---- DATA TABLES---->\r\n\r\n          <div class=\"table-responsive\">\r\n            <table mat-table [dataSource]=\"dataSourceDisbursment\" class=\"table\" multiTemplateDataRows matSort\r\n              id=\"myTable\">\r\n\r\n              <!-- Checkbox Column -->\r\n              <ng-container matColumnDef=\"select\">\r\n                <th mat-header-cell *matHeaderCellDef>\r\n                  <mat-checkbox color=\"primary\" (change)=\"$event ? masterToggleDisbursment() : null\"\r\n                    [checked]=\"selectionDisbursment.hasValue() && isAllSelectedDisbursment()\"\r\n                    [indeterminate]=\"selectionDisbursment.hasValue() && !isAllSelectedDisbursment()\"\r\n                    [aria-label]=\"isAllSelectedDisbursment()\">\r\n                  </mat-checkbox>\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\">\r\n                  <mat-checkbox color=\"primary\" (click)=\"$event.stopPropagation()\"\r\n                    (change)=\"$event ? selectionDisbursment.toggle(row) : null\"\r\n                    [checked]=\"selectionDisbursment.isSelected(row)\" [aria-label]=\"checkboxLabelDisbursment(row)\">\r\n                  </mat-checkbox>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <!-- Tx ID Column -->\r\n              <ng-container matColumnDef=\"txId\">\r\n                <th mat-header-cell *matHeaderCellDef>Tx ID</th>\r\n                <td mat-cell *matCellDef=\"let disbursement\"> {{disbursement.txId}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Client ID Column -->\r\n              <ng-container matColumnDef=\"clientId\">\r\n                <th mat-header-cell *matHeaderCellDef> Client ID </th>\r\n                <td mat-cell *matCellDef=\"let disbursement\"> {{disbursement.clientId}} </td>\r\n              </ng-container>\r\n\r\n              <!-- clientName Column -->\r\n              <ng-container matColumnDef=\"clientName\">\r\n                <th mat-header-cell *matHeaderCellDef> Client Name </th>\r\n                <td mat-cell *matCellDef=\"let disbursement\"> {{disbursement.clientName}} </td>\r\n              </ng-container>\r\n\r\n              <!-- product Column -->\r\n              <ng-container matColumnDef=\"product\">\r\n                <th mat-header-cell *matHeaderCellDef> Product </th>\r\n                <td mat-cell *matCellDef=\"let disbursement\"> {{disbursement.product}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Voucher Date Column -->\r\n              <ng-container matColumnDef=\"voucherDate\">\r\n                <th mat-header-cell *matHeaderCellDef> Voucher Date </th>\r\n                <td mat-cell *matCellDef=\"let disbursement\"> {{disbursement.voucherDate | date :'dd-MM-yyyy'}} </td>\r\n              </ng-container>\r\n\r\n              <!-- paymentMode Column -->\r\n              <ng-container matColumnDef=\"paymentMode\">\r\n                <th mat-header-cell *matHeaderCellDef> Payment Mode </th>\r\n                <td mat-cell *matCellDef=\"let disbursement\"> {{disbursement.paymentMode}} </td>\r\n              </ng-container>\r\n\r\n              <!-- amount Column -->\r\n              <ng-container matColumnDef=\"amount\">\r\n                <th mat-header-cell *matHeaderCellDef> Amount </th>\r\n                <td mat-cell *matCellDef=\"let disbursement\"> {{disbursement.amount | currency:'PKR':''}} </td>\r\n              </ng-container>\r\n\r\n              <!-- status Column -->\r\n              <ng-container matColumnDef=\"status\">\r\n                <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                <td mat-cell *matCellDef=\"let disbursement\"> {{disbursement.status}} </td>\r\n              </ng-container>\r\n\r\n\r\n              <!-- Action Column -->\r\n              <ng-container matColumnDef=\"action\">\r\n                <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                <td mat-cell *matCellDef=\"let disbursement\">\r\n                  <span>\r\n                    <button class=\"customButtonForAnchors\" (click)=\"onEditDisbursement(disbursement.loanAppSeq)\"><i\r\n                        class=\"fa fa-pencil\"></i></button>\r\n                    <button class=\"customButtonForAnchors\" (click)=\"postSingleDisbursement(disbursement)\"><i\r\n                        class=\"fa fa-check-square-o\"></i></button>\r\n                  </span>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumnsDisbursment\" class=\"thead-light thead-blue\"></tr>\r\n              <tr mat-row *matRowDef=\"let row1; columns: displayedColumnsDisbursment;\">\r\n              </tr>\r\n            </table>\r\n\r\n            <!-- <mat-paginator [pageSizeOptions]=\"[10, 20]\" showFirstLastButtons>\r\n            </mat-paginator> -->\r\n          </div>\r\n          <label>Total Transaction: {{disbTxCounter}}</label> <br>\r\n          <label>Total Amount: {{disbAmountCalculator}}</label>\r\n\r\n\r\n\r\n\r\n          <!-------------------------------------------------  RECOVERY -------------------------------------------------------->\r\n\r\n\r\n\r\n          <h2>Recovery</h2>\r\n          <!--          \r\n    <span><input type=\"checkbox\" class=\"check1\" [(ngModel)]=\"recoveryCheck\" (change)=\"addRecoveries($event)\"/></span>\r\n     -->\r\n          <!-- <table class=\"table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th></th>\r\n                  <th>Tx ID</th>\r\n                  <th>Client ID</th>\r\n                  <th>Client Name</th>\r\n                  <th>Product</th>\r\n                  <th>Credit ID</th>\r\n                  <th>Payment Mode</th>\r\n                  <th>Instrument</th>\r\n                  <th>Amount</th>\r\n                  <th>Status</th>\r\n                  <th>Actions</th>\r\n                </tr>\r\n              </thead>\r\n\r\n              <tbody>\r\n                <tr *ngFor=\"let recovery of allRecoveries\">\r\n                  <td><input type=\"checkbox\" class=\"check1\"></td>\r\n                  <td>{{recovery.txId}}</td>\r\n                  <td>{{recovery.clientId}}</td>\r\n                  <td>{{recovery.clientName}}</td>\r\n                  <td>{{recovery.product}}</td>\r\n                  <td>{{recovery.loanId}}</td>\r\n                  <td>{{recovery.paymentMode}}</td>\r\n                  <td>{{recovery.instrument}}</td>\r\n                  <td>{{recovery.amount | currency:'PKR':''}}</td>\r\n                  <td>{{recovery.status}}</td>\r\n                  <td><span *ngIf=\"recovery.status=='Unposted' && !recoveryCheck\">\r\n                      <a class=\"iconBtn\" (click)=\"openAdjustPayment(recovery)\"><i class=\"fa fa-pencil\"></i></a>\r\n                      <a class=\"iconBtn\" (click)=\"postSingleRecovery(recovery)\"><i class=\"fa fa-check-square-o\"></i></a>\r\n                    </span>\r\n                  </td>\r\n\r\n                </tr>\r\n\r\n              </tbody>\r\n            </table> -->\r\n\r\n\r\n          <!---- DATA TABLES---->\r\n\r\n          <div class=\"table-responsive\">\r\n            <table mat-table [dataSource]=\"dataSourceRecovery\" class=\"table\" multiTemplateDataRows matSort id=\"myTable\">\r\n\r\n              <!-- Checkbox Column -->\r\n              <ng-container matColumnDef=\"select\">\r\n                <th mat-header-cell *matHeaderCellDef>\r\n                  <mat-checkbox color=\"primary\" (change)=\"$event ? masterToggleRecoveries() : null\"\r\n                    [checked]=\"selectionRecovery.hasValue() && isAllSelectedRecoveries()\"\r\n                    [indeterminate]=\"selectionRecovery.hasValue() && !isAllSelectedRecoveries()\"\r\n                    [aria-label]=\"checkboxLabelRecoveries()\">\r\n                  </mat-checkbox>\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\">\r\n                  <mat-checkbox color=\"primary\" (click)=\"$event.stopPropagation()\"\r\n                    (change)=\"$event ? selectionRecovery.toggle(row) : null\"\r\n                    [checked]=\"selectionRecovery.isSelected(row)\" [aria-label]=\"checkboxLabelRecoveries(row)\">\r\n                  </mat-checkbox>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <!-- Tx ID Column -->\r\n              <ng-container matColumnDef=\"txId\">\r\n                <th mat-header-cell *matHeaderCellDef>Tx ID</th>\r\n                <td mat-cell *matCellDef=\"let recovery\"> {{recovery.txId}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Client ID Column -->\r\n              <ng-container matColumnDef=\"clientId\">\r\n                <th mat-header-cell *matHeaderCellDef> Client ID </th>\r\n                <td mat-cell *matCellDef=\"let recovery\"> {{recovery.clientId}} </td>\r\n              </ng-container>\r\n\r\n              <!-- clientName Column -->\r\n              <ng-container matColumnDef=\"clientName\">\r\n                <th mat-header-cell *matHeaderCellDef> Client Name </th>\r\n                <td mat-cell *matCellDef=\"let recovery\"> {{recovery.clientName}} </td>\r\n              </ng-container>\r\n\r\n              <!-- product Column -->\r\n              <ng-container matColumnDef=\"product\">\r\n                <th mat-header-cell *matHeaderCellDef> Product </th>\r\n                <td mat-cell *matCellDef=\"let recovery\"> {{recovery.product}} </td>\r\n              </ng-container>\r\n\r\n              <!-- loanId Column -->\r\n              <ng-container matColumnDef=\"loanId\">\r\n                <th mat-header-cell *matHeaderCellDef> Loan ID </th>\r\n                <td mat-cell *matCellDef=\"let recovery\"> {{recovery.loanId}} </td>\r\n              </ng-container>\r\n\r\n              <!-- paymentMode Column -->\r\n              <ng-container matColumnDef=\"paymentMode\">\r\n                <th mat-header-cell *matHeaderCellDef> Payment Mode </th>\r\n                <td mat-cell *matCellDef=\"let recovery\"> {{recovery.paymentMode}} </td>\r\n              </ng-container>\r\n\r\n              <!-- instrument Column -->\r\n              <ng-container matColumnDef=\"instrument\">\r\n                <th mat-header-cell *matHeaderCellDef> Instrument </th>\r\n                <td mat-cell *matCellDef=\"let recovery\"> {{recovery.instrument}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Amount Column -->\r\n              <ng-container matColumnDef=\"amount\">\r\n                <th mat-header-cell *matHeaderCellDef> Amount </th>\r\n                <td mat-cell *matCellDef=\"let recovery\"> {{recovery.amount}} </td>\r\n              </ng-container>\r\n\r\n              <!-- status Column -->\r\n              <ng-container matColumnDef=\"status\">\r\n                <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                <td mat-cell *matCellDef=\"let recovery\"> {{recovery.status}} </td>\r\n              </ng-container>\r\n\r\n\r\n              <!-- Action Column -->\r\n              <ng-container matColumnDef=\"action\">\r\n                <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                <td mat-cell *matCellDef=\"let recovery\">\r\n                  <span *ngIf=\"recovery.status=='Unposted' && !recoveryCheck\">\r\n                    <button class=\"customButtonForAnchors\" (click)=\"openAdjustPayment(recovery)\"><i\r\n                        class=\"fa fa-pencil\"></i></button>\r\n                    <button class=\"customButtonForAnchors\" (click)=\"postSingleRecovery(recovery)\"><i\r\n                        class=\"fa fa-check-square-o\"></i></button>\r\n                  </span>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumnsRecovery\" class=\"thead-light thead-blue\"></tr>\r\n              <tr mat-row *matRowDef=\"let row1; columns: displayedColumnsRecovery;\">\r\n              </tr>\r\n            </table>\r\n\r\n            <!-- <mat-paginator [pageSizeOptions]=\"[10, 20]\" showFirstLastButtons>\r\n            </mat-paginator> -->\r\n          </div>\r\n          <label>Total Transaction: {{recoveryTxCounter}}</label> <br>\r\n          <label>Total Amount: {{recoveryAmountCalculator}}</label>\r\n\r\n          <!-------------------------------------------          EXPENSES      ---------------------------------->\r\n\r\n          <h2>Expenses</h2>\r\n\r\n          <!-- <span><input type=\"checkbox\" class=\"check1\" [(ngModel)]=\"expenseCheck\"\r\n                (change)=\"addExpenses($event)\" /></span>\r\n            <a class=\"iconBtn\"><i class=\"fa fa-check-square-o\"></i></a> -->\r\n          <!-- <table class=\"table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th></th>\r\n                  <th>Client ID</th>\r\n                  <th>Expense ID</th>\r\n                  <th>Description</th>\r\n                  <th>Expense Type</th>\r\n                  <th>Insutrument #</th>\r\n                  <th>Amount</th>\r\n                  <th>Status</th>\r\n                  <th>Actions</th>\r\n                </tr>\r\n              </thead>\r\n\r\n              <tbody>\r\n                <tr *ngFor=\"let exp of allExpenses; let i = index\">\r\n                  <td><input type=\"checkbox\" class=\"check1\"></td>\r\n                  <td>{{exp.txId}}</td>\r\n                  <td>{{exp.expenseId}}</td>\r\n                  <td>{{exp.description}}</td>\r\n                  <td>{{exp.expenseType}}</td>\r\n                  <td>{{exp.instrumentNum}}</td>\r\n                  <td>{{exp.amount | currency:'PKR':''}}</td>\r\n                  <td>{{exp.status}}</td>\r\n                  <td><span> <a class=\"iconBtn\" (click)=\"onEditExpenses(exp)\"><i class=\"fa fa-pencil\"></i></a>\r\n                      <a class=\"iconBtn\" (click)=\"postSingleExpense(exp)\"><i class=\"fa fa-check-square-o\"></i></a>\r\n                      <a class=\"iconBtn delBtn\" (click)=\"onItDelete(exp.expenseId , i)\"><i\r\n                          class=\"fa fa-trash-o\"></i></a>\r\n                    </span>\r\n                  </td>\r\n\r\n                </tr>\r\n\r\n              </tbody>\r\n            </table> -->\r\n\r\n\r\n          <!---- DATA TABLES---->\r\n\r\n          <div class=\"table-responsive\">\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"table\" multiTemplateDataRows matSort id=\"myTable\">\r\n\r\n              <!-- Checkbox Column -->\r\n              <ng-container matColumnDef=\"select\">\r\n                <th mat-header-cell *matHeaderCellDef>\r\n                  <mat-checkbox color=\"primary\" (change)=\"$event ? masterToggle() : null\"\r\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [aria-label]=\"checkboxLabel()\">\r\n                  </mat-checkbox>\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\">\r\n                  <mat-checkbox color=\"primary\" (click)=\"$event.stopPropagation()\"\r\n                    (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\"\r\n                    [aria-label]=\"checkboxLabel(row)\">\r\n                  </mat-checkbox>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <!-- Tx ID Column -->\r\n              <ng-container matColumnDef=\"txId\">\r\n                <th mat-header-cell *matHeaderCellDef>Client ID</th>\r\n                <td mat-cell *matCellDef=\"let exp\"> {{exp.txId}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Expense ID Column -->\r\n              <ng-container matColumnDef=\"expenseId\">\r\n                <th mat-header-cell *matHeaderCellDef> Expense ID </th>\r\n                <td mat-cell *matCellDef=\"let exp\"> {{exp.expenseId}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Description Column -->\r\n              <ng-container matColumnDef=\"description\">\r\n                <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                <td mat-cell *matCellDef=\"let exp\"> {{exp.description}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Expense Type Column -->\r\n              <ng-container matColumnDef=\"expenseType\">\r\n                <th mat-header-cell *matHeaderCellDef> Expense Type </th>\r\n                <td mat-cell *matCellDef=\"let exp\"> {{exp.expenseType}} </td>\r\n              </ng-container>\r\n\r\n              <!-- instrument Num Column -->\r\n              <ng-container matColumnDef=\"instrumentNum\">\r\n                <th mat-header-cell *matHeaderCellDef> Instrument Number </th>\r\n                <td mat-cell *matCellDef=\"let exp\"> {{exp.instrumentNum}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Amount Column -->\r\n              <ng-container matColumnDef=\"amount\">\r\n                <th mat-header-cell *matHeaderCellDef> Amount </th>\r\n                <td mat-cell *matCellDef=\"let exp\"> {{exp.amount | currency:'PKR':''}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Status Column -->\r\n              <ng-container matColumnDef=\"status\">\r\n                <th mat-header-cell *matHeaderCellDef> Status </th>\r\n                <td mat-cell *matCellDef=\"let exp\"> {{exp.status}} </td>\r\n              </ng-container>\r\n\r\n\r\n              <!-- Action Column -->\r\n              <ng-container matColumnDef=\"action\">\r\n                <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                <td mat-cell *matCellDef=\"let exp\">\r\n                  <button *ngIf=\"expenseType == 'FUNERAL CHARGES'\" class=\"customButtonForAnchors\"\r\n                    (click)=\"onEditExpenses(exp)\"><i class=\"fa fa-pencil\"></i></button>\r\n                  <button class=\"customButtonForAnchors\" (click)=\"postSingleExpense(exp)\"><i\r\n                      class=\"fa fa-check-square-o\"></i></button>\r\n                  <button class=\"customButtonForAnchors delBtn\" (click)=\"onItDelete(exp.expenseId , i)\"><i\r\n                      class=\"fa fa-trash-o\"></i></button>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"thead-light thead-blue\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n              </tr>\r\n            </table>\r\n\r\n            <!-- <mat-paginator [pageSizeOptions]=\"[10, 20]\" showFirstLastButtons>\r\n            </mat-paginator> -->\r\n          </div>\r\n          <label>Total Transaction: {{expenseTxCounter}}</label><br>\r\n          <label>Total Amount: {{expenseAmountCalculator}}</label>\r\n\r\n          <!-- \r\n<h2>Insurance Claims</h2>      <label >Total Transaction: {{insuranceClaimTxCounter}}</label> <label >Total Amount: {{insuranceClaimAmountCalculator}}</label>\r\n<span><input type=\"checkbox\" class=\"check1\" [(ngModel)]=\"insuranceclaimCheck\" (change)=\"addInsuranceclaim($event)\"/></span>\r\n\r\n<table class=\"table\" id=\"myTable\" >\r\n<thead class=\"thead-light\">\r\n<tr>\r\n<th>Tx ID</th>\r\n<th>Client ID</th>\r\n<th>Client Name</th>\r\n<th>Payment Mode</th>\r\n<th>Insutrument #</th>\r\n<th>Claim Amount</th>\r\n<th>Status</th>\r\n<th>Actions</th>\r\n</tr>\r\n</thead>\r\n\r\n<tbody>\t\r\n<tr *ngFor=\"let ic of allInsuranceClaims\">      \r\n<td>{{ic.txId}}</td> \r\n<td>{{ic.clientId}}</td>\r\n<td>{{ic.clientName}}</td>\r\n<td>{{ic.paymentMode}}</td>\r\n<td>{{ic.instrument}}</td>\r\n<td>{{ic.claimAmount}}</td>\r\n<td>{{ic.status}}</td>\r\n<td ><span *ngIf=\"ic.status=='Unposted' && !insuranceClaimCheck\">\r\n<a  class=\"iconBtn\" (click)=\"postSingleInsuranceClaim(ic)\"><i class=\"fa-envelope-o\"></i></a>\r\n</span>\r\n</td>\r\n\r\n</tr>\r\n\r\n</tbody>\r\n</table> -->\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</main>"

/***/ }),

/***/ "./src/app/pages/admin/closing/closing.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/admin/closing/closing.component.ts ***!
  \**********************************************************/
/*! exports provided: MY_FORMATS, ClosingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosingComponent", function() { return ClosingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_recovery_closing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/recovery-closing.service */ "./src/app/shared/services/recovery-closing.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_services_disbursement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/disbursement.service */ "./src/app/shared/services/disbursement.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/recovery.service */ "./src/app/shared/services/recovery.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_shared_models_expense_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/models/expense.model */ "./src/app/shared/models/expense.model.ts");
/* harmony import */ var src_app_shared_services_expense_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/expense.service */ "./src/app/shared/services/expense.service.ts");
/* harmony import */ var src_app_shared_services_paymentTypes_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/paymentTypes.service */ "./src/app/shared/services/paymentTypes.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { DatePipe } from '@angular/common'


















var moment = moment__WEBPACK_IMPORTED_MODULE_12__;
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
var ClosingComponent = /** @class */ (function () {
    function ClosingComponent(recoveryService, changeDetectorRefs, recoveryClosingService, toaster, disbursementService, expenseService, paymentTypesService, router, fb, datepipe, spinner) {
        this.recoveryService = recoveryService;
        this.changeDetectorRefs = changeDetectorRefs;
        this.recoveryClosingService = recoveryClosingService;
        this.toaster = toaster;
        this.disbursementService = disbursementService;
        this.expenseService = expenseService;
        this.paymentTypesService = paymentTypesService;
        this.router = router;
        this.fb = fb;
        this.datepipe = datepipe;
        this.spinner = spinner;
        this.disbTxCounter = 0;
        this.recoveryTxCounter = 0;
        this.expenseTxCounter = 0;
        this.insuranceClaimTxCounter = 0;
        this.disbAmountCalculator = 0;
        this.recoveryAmountCalculator = 0;
        this.expenseAmountCalculator = 0;
        this.insuranceClaimAmountCalculator = 0;
        this.recoveryCheck = false;
        this.disbursementCheck = false;
        this.expenseCheck = false;
        this.insuranceClaimCheck = false;
        this.allRecoveries = [];
        this.allDisbursements = [];
        this.allExpenses = [];
        this.allInsuranceClaims = [];
        this.allRecoveriesToPost = [];
        this.allDisbursementsToPost = [];
        this.allExpensesToPost = [];
        this.allInsuranceClaimsToPost = [];
        this.tempInstituteArray = [];
        this.closing = (sessionStorage.getItem("closing") == "true") ? true : false;
        this.addExpense = new src_app_shared_models_expense_model__WEBPACK_IMPORTED_MODULE_9__["Expense"]();
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        // EXPENSES
        this.displayedColumns = ['txId', 'expenseId', 'description', 'expenseType', 'instrumentNum', 'amount', 'status', 'action'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableDataSource"](this.allExpenses);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_16__["SelectionModel"](true, []);
        //RECOVERY
        this.displayedColumnsRecovery = ['txId', 'clientId', 'clientName', 'product', 'loanId', 'paymentMode', 'instrument', 'amount', 'status', 'action'];
        this.dataSourceRecovery = new _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableDataSource"](this.allRecoveries);
        this.selectionRecovery = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_16__["SelectionModel"](true, []);
        //Disbursment
        this.displayedColumnsDisbursment = ['txId', 'clientId', 'clientName', 'product', 'voucherDate', 'paymentMode', 'amount', 'status', 'action'];
        this.dataSourceDisbursment = new _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableDataSource"](this.allDisbursements);
        this.selectionDisbursment = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_16__["SelectionModel"](true, []);
        this.closingMods = [{
                "modSeq": 1,
                "modNm": "Home",
                "modCmnts": "Dashboard",
                "modUrl": "dashboard/bm",
                "subMods": [{
                        "sbModSeq": 2,
                        "modSeq": 1,
                        "subModNm": "BM Landing",
                        "subModUrl": null,
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }]
            }, {
                "modSeq": 9,
                "modNm": "Process Application",
                "modCmnts": "BM LO",
                "modUrl": "loan-origination",
                "subMods": [{
                        "sbModSeq": 3,
                        "modSeq": 9,
                        "subModNm": "Process Application",
                        "subModUrl": null,
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }]
            }, {
                "modSeq": 5,
                "modNm": "Reports",
                "modCmnts": "reports",
                "modUrl": "reports",
                "subMods": [{
                        "sbModSeq": 7,
                        "modSeq": 5,
                        "subModNm": "Overdue Credit",
                        "subModUrl": "/overdue",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 8,
                        "modSeq": 5,
                        "subModNm": "Portfolio Monitoring",
                        "subModUrl": "/portfolio",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 11,
                        "modSeq": 5,
                        "subModNm": "Funds Report",
                        "subModUrl": "/funds-report",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 41,
                        "modSeq": 5,
                        "subModNm": "Client Wise Disbursement ",
                        "subModUrl": "/finance/organization-tagging-report",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 40,
                        "modSeq": 5,
                        "subModNm": "EMP Remittance Ratio",
                        "subModUrl": "/finance/fund-managment-tool",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 42,
                        "modSeq": 5,
                        "subModNm": "Product Wise Disbursement",
                        "subModUrl": "/finance/product-wise-disbursement",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 43,
                        "modSeq": 5,
                        "subModNm": "Validation Report",
                        "subModUrl": "/validation",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 44,
                        "modSeq": 5,
                        "subModNm": "Account Ledger",
                        "subModUrl": "/accounts-ledger",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 45,
                        "modSeq": 5,
                        "subModNm": "BB/CB Details",
                        "subModUrl": "/book-details",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 46,
                        "modSeq": 5,
                        "subModNm": "Due Recovery",
                        "subModUrl": "/due-recovery",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 47,
                        "modSeq": 5,
                        "subModNm": "Client Health Beneficiary",
                        "subModUrl": "/client-health-beneficiary",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 48,
                        "modSeq": 5,
                        "subModNm": "Branch Turnover Analysis 1",
                        "subModUrl": "/brnch-turnover-anlysis",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 49,
                        "modSeq": 5,
                        "subModNm": "Insurance Claim",
                        "subModUrl": "/insurance-claim",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 50,
                        "modSeq": 5,
                        "subModNm": "PAR Branch Wise",
                        "subModUrl": "/par-branch-wise",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 51,
                        "modSeq": 5,
                        "subModNm": "5 Days Advance Recovery Trends",
                        "subModUrl": "/five-days-advance-recovery",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 52,
                        "modSeq": 5,
                        "subModNm": "Top Sheet",
                        "subModUrl": "/top-sheet",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 53,
                        "modSeq": 5,
                        "subModNm": "Projected Clients Loan Completion",
                        "subModUrl": "/projected-clients-loan-completeion",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 54,
                        "modSeq": 5,
                        "subModNm": "ADCs and Branch Wise Recovery",
                        "subModUrl": "/adc-wise-branch-recovery",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 55,
                        "modSeq": 5,
                        "subModNm": "Pending Clients",
                        "subModUrl": "/pending-clients",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 56,
                        "modSeq": 5,
                        "subModNm": "Tagged Overdue Clients Detail",
                        "subModUrl": "/tagged-client-claim",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 57,
                        "modSeq": 5,
                        "subModNm": "Transferred Clients",
                        "subModUrl": "/transferred-clients",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 58,
                        "modSeq": 5,
                        "subModNm": "Consolidated Loan",
                        "subModUrl": "/operations/consolidated-loans",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 59,
                        "modSeq": 5,
                        "subModNm": "Portfolio Segmentation",
                        "subModUrl": "/operations/op-portfolio-segmentation",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 60,
                        "modSeq": 5,
                        "subModNm": "Portfolio At Risk",
                        "subModUrl": "/operations/op-portfolio-at-risk",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 61,
                        "modSeq": 5,
                        "subModNm": "Risk Flagging",
                        "subModUrl": "/operations/app-risk-flagging",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 62,
                        "modSeq": 5,
                        "subModNm": "Turn Around Time",
                        "subModUrl": "/turn-around-time",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 63,
                        "modSeq": 5,
                        "subModNm": "Female Participation",
                        "subModUrl": "/female-participation",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 64,
                        "modSeq": 5,
                        "subModNm": "Portfolio Status",
                        "subModUrl": "/operations/op-portfolio-status",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 65,
                        "modSeq": 5,
                        "subModNm": "Rate Of Renewal",
                        "subModUrl": "/operations/rate-of-renewal",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 66,
                        "modSeq": 5,
                        "subModNm": "Monthly Status",
                        "subModUrl": "/operations/monthly-status",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 67,
                        "modSeq": 5,
                        "subModNm": "Credit Utilization",
                        "subModUrl": "/operations/loan-utlization",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 68,
                        "modSeq": 5,
                        "subModNm": "Portfolio At Risk Time Series",
                        "subModUrl": "/operations/opp-portfolio-at-risk-time-series",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 69,
                        "modSeq": 5,
                        "subModNm": "Female Participation Ratio",
                        "subModUrl": "/operations/op-female-participation-ratio",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 70,
                        "modSeq": 5,
                        "subModNm": "Branch Target Managment ",
                        "subModUrl": "/operations/branch-target-managment",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 71,
                        "modSeq": 5,
                        "subModNm": "Portfolio Status Duration",
                        "subModUrl": "/operations/oop-portfolio-status-duration",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 72,
                        "modSeq": 5,
                        "subModNm": "Recovery\n  Report",
                        "subModUrl": "/finance/recovery-report",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 73,
                        "modSeq": 5,
                        "subModNm": "Disbursement Report ",
                        "subModUrl": "finance/disbursment-report",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 74,
                        "modSeq": 5,
                        "subModNm": "E & P Remittance Ratio",
                        "subModUrl": "/finance/fund-managment-tool",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 75,
                        "modSeq": 5,
                        "subModNm": "Client wise Disbursment ",
                        "subModUrl": "/finance/organization-tagging-report",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 76,
                        "modSeq": 5,
                        "subModNm": "Product Wise Disbursement",
                        "subModUrl": "/finance/product-wise-disbursement",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 77,
                        "modSeq": 5,
                        "subModNm": "Date Wise Disbursement",
                        "subModUrl": "/finance/organization-time",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 80,
                        "modSeq": 5,
                        "subModNm": "Trail Balance",
                        "subModUrl": "/trail-balance",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 79,
                        "modSeq": 5,
                        "subModNm": "Reversal Entries",
                        "subModUrl": "/reversed-enteries",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }, {
                        "sbModSeq": 9,
                        "modSeq": 5,
                        "subModNm": "Funds Statement",
                        "subModUrl": "/fund-stmnt",
                        "readFlg": true,
                        "writeFlg": true,
                        "delFlg": true
                    }]
            }
        ];
        this.disbursment = this.fb.group({
            disbursed: []
        });
        this.expenseForm = this.fb.group({
            pymtTypSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            expnsStsKey: [''],
            //expnsId: [''],
            expnsDscr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            instrNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            expnsAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            expnsTypSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            pymtRctFlg: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    ClosingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this.refreshExpense();
        this.refreshRecovery();
        this.refreshDisbursment();
        // this.spinner.hide();
        this.minDate = new Date();
        this.maxDate = new Date();
        this.minDate.setDate(this.maxDate.getDate() - 30);
        this.recoveryService.getRecoveryTypes().subscribe((function (data) {
            _this.tempInstituteArray = data;
        }));
        this.adjustPayment = this.fb.group({
            loanId: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            clientNm: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            clntId: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            rcvryTypsSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            instr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20)])],
            adjPymtDt: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            pymtAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            trxId: [''],
            post: [''],
        });
        this.expenseService.getPaymentModes().subscribe(function (data) {
            _this.paymentArray = data;
        });
        this.expenseService.getAllCatgoriesModes().subscribe(function (data) {
            _this.expenseArray = data;
        });
        var load = 0;
        this.recoveryClosingService.getRecoveryClosing().subscribe(function (data) {
            _this.allRecoveries = data;
            _this.dataSourceRecovery = new _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableDataSource"](_this.allRecoveries);
            _this.dataSourceRecovery.paginator = _this.paginator;
            _this.dataSourceRecovery.sort = _this.sort;
            _this.recoveryTxCounter = _this.allRecoveries.length;
            _this.allRecoveries.forEach(function (element) {
                _this.recoveryAmountCalculator += parseInt(element.amount);
            });
            load = load + 1;
            if (load == 3) {
                _this.spinner.hide();
            }
        });
        this.recoveryClosingService.getDisbursementClosing().subscribe(function (data) {
            _this.allDisbursements = data;
            _this.dataSourceDisbursment = new _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableDataSource"](_this.allDisbursements);
            _this.dataSourceDisbursment.paginator = _this.paginator;
            _this.dataSourceDisbursment.sort = _this.sort;
            _this.disbTxCounter = _this.allDisbursements.length;
            _this.allDisbursements.forEach(function (element) {
                _this.disbAmountCalculator = _this.disbAmountCalculator + parseInt(element.amount);
            });
            load = load + 1;
            if (load == 3) {
                _this.spinner.hide();
            }
        });
        this.recoveryClosingService.getExpenseClosing().subscribe(function (data) {
            _this.allExpenses = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableDataSource"](_this.allExpenses);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.expenseTxCounter = _this.allExpenses.length;
            _this.allExpenses.forEach(function (element) {
                _this.expenseAmountCalculator += parseInt(element.amount);
            });
            load = load + 1;
            if (load == 3) {
                _this.spinner.hide();
            }
        });
        // this.recoveryClosingService.getInsuranceClaimClosing().subscribe(data => {
        //   this.allInsuranceClaims = data;
        //   this.insuranceClaimTxCounter = this.allInsuranceClaims.length;
        //   this.allInsuranceClaims.forEach(element => {
        //     this.insuranceClaimAmountCalculator += parseInt(element.claimAmount);
        //   });
        // });
    };
    ClosingComponent.prototype.getCodeForPaymentType = function (seq) {
        var p = "";
        this.paymentArray.forEach(function (type) {
            if (type.typSeq == seq) {
                p = type.typId;
            }
        });
        return p;
    };
    ClosingComponent.prototype.logout = function () {
        sessionStorage.clear();
        this.router.navigate([''], { replaceUrl: true }).then(function () {
            window.location.reload();
        });
        ;
    };
    Object.defineProperty(ClosingComponent.prototype, "form", {
        get: function () {
            return this.expenseForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ClosingComponent.prototype.submitDisbursment = function () {
        //console.log(this.disbursment.value);
    };
    // get fadjustPayment() {
    //   return this.adjustPayment.controls;
    // }
    ClosingComponent.prototype.addDisbursements = function (event) {
        var _this = this;
        if (this.disbursementCheck == true) {
            this.allDisbursements.forEach(function (element) {
                if (element.status != "Active") {
                    _this.allDisbursementsToPost.push(element);
                }
            });
        }
        else if (this.disbursementCheck == false) {
            this.allDisbursementsToPost = [];
        }
        console.log(this.allDisbursementsToPost);
    };
    ClosingComponent.prototype.addRecoveries = function (event) {
        var _this = this;
        if (this.recoveryCheck == true) {
            this.allRecoveries.forEach(function (element) {
                if (element.status != "Posted") {
                    _this.allRecoveriesToPost.push(element);
                }
            });
        }
        else if (this.recoveryCheck == false) {
            this.allRecoveriesToPost = [];
        }
        console.log(this.allRecoveriesToPost);
    };
    ClosingComponent.prototype.addExpenses = function (event) {
        var _this = this;
        if (this.expenseCheck == true) {
            this.allExpenses.forEach(function (element) {
                if (element.status != "Posted") {
                    _this.allExpensesToPost.push(element);
                }
            });
        }
        else if (this.expenseCheck == false) {
            this.allExpensesToPost = [];
        }
        console.log(this.allExpensesToPost);
    };
    ClosingComponent.prototype.addInsuranceClaims = function (event) {
        var _this = this;
        if (this.insuranceClaimCheck == true) {
            this.allInsuranceClaims.forEach(function (element) {
                if (element.status != "Posted") {
                    _this.allInsuranceClaimsToPost.push(element);
                }
            });
        }
        else if (this.insuranceClaimCheck == false) {
            this.allInsuranceClaimsToPost = [];
        }
        console.log(this.allInsuranceClaimsToPost);
    };
    // refresh()
    // {
    //   this.recoveryClosingService.getRecoveryClosing().subscribe(data => {this.allRecoveries = data});
    //   this.recoveryClosingService.getDisbursementClosing().subscribe(data => {this.allDisbursements = data;});
    //   this.recoveryClosingService.getExpenseClosing().subscribe(data => {this.allExpenses = data;});  
    //   this.recoveryClosingService.getInsuranceClaimClosing().subscribe(data => {this.allInsuranceClaims = data;});  
    // }
    ClosingComponent.prototype.postSingleRecovery = function (temp) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to Post this Recovery?',
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#007bff',
            confirmButtonText: 'Yes, Post it!'
        }).then(function (result) {
            if (result.value) {
                _this.recoveryClosingService.postSingleRecovery(temp).subscribe(function (data) {
                    _this.postedReport(temp.txId, 0);
                    if (_this.allRecoveries.indexOf(temp) !== -1) {
                        _this.allRecoveries.splice(_this.allRecoveries.indexOf(temp), 1);
                    }
                    _this.refreshRecovery();
                    _this.toaster.success("Recovery Posted Successfully");
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()('Posted!', 'Recovery has been posted.', 'success');
                }, function (error) {
                    _this.toaster.error(error.error.error, "Error");
                    console.log('There was an error: ', error);
                });
            }
        });
    };
    ClosingComponent.prototype.F = function (temp) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to Post this Disbursement?',
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#007bff',
            confirmButtonText: 'Yes, Post it!'
        }).then(function (result) {
            if (result.value) {
                _this.recoveryClosingService.postSingleDisbursement(temp).subscribe(function (data) {
                    if (_this.allDisbursements.indexOf(temp) !== -1) {
                        _this.allDisbursements.splice(_this.allDisbursements.indexOf(temp), 1);
                    }
                    _this.refreshDisbursment();
                    _this.toaster.success("Disbursement Posted Successfully");
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()('Posted!', 'Disbursement has been posted.', 'success');
                }, function (error) {
                    _this.toaster.error(error.error.error, "Error");
                    console.log('There was an error: ', error);
                });
            }
        });
    };
    ClosingComponent.prototype.getCodeFromExpenseType = function (seq) {
        var p = "";
        this.expenseArray.forEach(function (type) {
            if (type.typSeq == seq) {
                p = type.typId;
            }
        });
        return p;
    };
    ClosingComponent.prototype.postSingleExpense = function (temp) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to Post this Expense?',
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#007bff',
            confirmButtonText: 'Yes, Post it!'
        }).then(function (result) {
            if (result.value) {
                _this.recoveryClosingService.postSingleExpense(temp).subscribe(function (data) {
                    console.log(data);
                    console.log(_this.allExpenses.splice(_this.allExpenses.indexOf(temp), 1));
                    if (temp.flg == '2' && _this.getCodeForPaymentType(temp['mode']) == "0001")
                        _this.postedReport(data.expSeq, 1);
                    if (temp.flg == '1' && _this.getCodeFromExpenseType(temp['catogory']) == "0424")
                        _this.postedReport(data.expSeq, 1);
                    if (_this.allExpenses.indexOf(temp) != -1) {
                        _this.allExpenses.splice(_this.allExpenses.indexOf(temp), 2);
                    }
                    _this.refreshExpense();
                    _this.toaster.success("Expense Posted Successfully");
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()('Posted!', 'Expense has been posted.', 'success');
                }, function (error) {
                    _this.toaster.error(error.error.error, "Error");
                    console.log('There was an error: ', error);
                });
            }
        });
    };
    ClosingComponent.prototype.postedReport = function (trx, type) {
        this.recoveryService.getPostedReport(trx, type).subscribe(function (response) {
            var binaryData = [];
            console.log("response");
            console.log(response.byteLength);
            binaryData.push(response);
            if (response.byteLength > 0) {
                var fileURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
                window.open(fileURL, '_blank');
            }
        });
    };
    ClosingComponent.prototype.postSingleInsuranceClaim = function (temp) {
        var _this = this;
        this.recoveryClosingService.postSingleInsuranceClaim(temp).subscribe(function (data) {
            //this.refresh();
            _this.toaster.success("Insurance Claim Posted Successfully");
        });
    };
    ClosingComponent.prototype.postMultiple = function () {
        var _this = this;
        this.spinner.show();
        if (this.disbursementCheck == true) {
            this.postMultipleDisbursements();
        }
        if (this.recoveryCheck == true) {
            this.postMultipleRecoveries();
        }
        if (this.expenseCheck == true) {
            this.postMultipleExpenses();
        }
        this.recoveryClosingService.closeBranch(JSON.parse(sessionStorage.getItem("auth")).emp_branch).subscribe(function (d) {
            var auth = JSON.parse(sessionStorage.getItem("auth"));
            auth.modules = d.body;
            auth.brnchOpnDt = new Date();
            sessionStorage.setItem("auth", JSON.stringify(auth));
            _this.router.navigate(['dashboard/bm']);
            _this.spinner.hide();
            _this.closing = false;
            sessionStorage.setItem("closing", "true");
        }, function (error) {
            _this.toaster.error("Branch Already Closed");
            _this.spinner.hide();
        });
    };
    ClosingComponent.prototype.postMultipleDisbursements = function () {
        var _this = this;
        this.allDisbursementsToPost.forEach(function (element) {
            _this.recoveryClosingService.postSingleDisbursement(element).subscribe(function (data) {
            });
        });
    };
    ClosingComponent.prototype.postSingleDisbursement = function (element) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to Post this Disbursement?',
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#007bff',
            confirmButtonText: 'Yes, Post it!'
        }).then(function (result) {
            if (result.value) {
                _this.recoveryClosingService.postSingleDisbursement(element).subscribe(function (data) {
                    console.log(data);
                    console.log(_this.allDisbursements.splice(_this.allExpenses.indexOf(element), 1));
                    if (_this.allDisbursements.indexOf(element) != -1) {
                        _this.allDisbursements.splice(_this.allDisbursements.indexOf(element), 1);
                    }
                    _this.refreshDisbursment();
                    // Added by Zohaib Asim - Dated 24-12-2020
                    // CR: KSZB Claims
                    _this.recoveryClosingService.getHealthCardPdf(element).subscribe(function (response) {
                        var binaryData = [];
                        binaryData.push(response);
                        var fileURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
                        window.open(fileURL, '_blank');
                    });
                    // End by Zohaib Asim
                    _this.toaster.success("Expense Posted Successfully");
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()('Posted!', 'Expense has been posted.', 'success');
                }, function (error) { return console.log('There was an error: ', error); });
            }
        });
    };
    ClosingComponent.prototype.postMultipleRecoveries = function () {
        var _this = this;
        this.allRecoveriesToPost.forEach(function (element) {
            _this.recoveryClosingService.postSingleRecovery(element).subscribe(function (data) {
            });
        });
    };
    ClosingComponent.prototype.postMultipleExpenses = function () {
        var _this = this;
        this.allExpensesToPost.forEach(function (element) {
            _this.recoveryClosingService.postSingleExpense(element).subscribe(function (data) {
            });
        });
    };
    ClosingComponent.prototype.onEditDisbursement = function (loanAppSeq) {
        this.disbursementService.loanAppSeq = loanAppSeq;
        sessionStorage.setItem('loanAppSeq', loanAppSeq.toString());
        this.router.navigate(['disbursement/voucher']);
    };
    Object.defineProperty(ClosingComponent.prototype, "af", {
        get: function () {
            return this.adjustPayment.controls;
        },
        enumerable: true,
        configurable: true
    });
    ClosingComponent.prototype.openAdjustPayment = function (recoveryClosingDto) {
        this.recoveryClosingDto = recoveryClosingDto;
        this.adjustPayment.reset();
        console.log(recoveryClosingDto);
        $('#AdjustPayment').modal('show');
        this.adjustPayment.patchValue({
            loanId: recoveryClosingDto.loanId,
            clientNm: recoveryClosingDto.clientName,
            clntId: recoveryClosingDto.clientId,
            trxId: recoveryClosingDto.txId,
            rcvryTypsSeq: +recoveryClosingDto.recoveryTypeSeq,
            instr: recoveryClosingDto.instrument,
            adjPymtDt: new Date(recoveryClosingDto.paymentDate),
            pymtAmt: recoveryClosingDto.amount
        });
    };
    ClosingComponent.prototype.onAdjustPaymentSubmit = function () {
        var _this = this;
        var result = this.adjustPayment.value;
        console.log(result);
        $('#AdjustPayment').modal('hide');
        this.recoveryService.adjustPayment(result).subscribe(function (d) {
            _this.recoveryClosingDto.recoveryTypeSeq = result.rcvryTypsSeq;
            _this.recoveryClosingDto.instrument = result.instr;
            _this.recoveryClosingDto.amount = result.pymtAmt;
        });
    };
    ClosingComponent.prototype.onEditExpenses = function (exp) {
        $('#businessector').modal('show');
        this.addExpense.expSeq = +exp.expenseId;
        this.expenseForm = this.fb.group({
            pymtTypSeq: [exp.mode, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            expnsStsKey: [''],
            //expnsId: [exp.expenseId],
            expnsDscr: [exp.description, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            instrNum: [exp.instrumentNum, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            expnsAmt: [exp.amount, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            expnsTypSeq: [exp.catogory, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            pymtRctFlg: [exp.flg == "" ? +1 : +exp.flg, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    ClosingComponent.prototype.addExpensesSubmit = function () {
        var _this = this;
        if (this.expenseForm.invalid) {
            return;
        }
        this.addExpense.pymtTypSeq = this.expenseForm.value.pymtTypSeq;
        this.addExpense.brnchSeq = this.auth.emp_branch;
        this.addExpense.expnsStsKey = this.expenseForm.value.expnsStsKey;
        this.addExpense.expnsDscr = this.expenseForm.value.expnsDscr;
        this.addExpense.instrNum = this.expenseForm.value.instrNum;
        this.addExpense.expnsAmt = this.expenseForm.value.expnsAmt;
        this.addExpense.expnsTypSeq = this.expenseForm.value.expnsTypSeq;
        this.addExpense.pymtRctFlg = this.expenseForm.value.pymtRctFlg;
        this.addExpense.expnsStsKey = 200;
        $('#businessector').modal('hide');
        this.expenseService.updateExpense(this.addExpense).subscribe(function (data) {
            _this.addExpense = data;
            _this.recoveryClosingService.getExpenseClosing().subscribe(function (data) {
                _this.allExpenses = data;
                _this.expenseTxCounter = _this.allExpenses.length;
                _this.allExpenses.forEach(function (element) {
                    _this.expenseAmountCalculator += parseInt(element.amount);
                });
            });
        });
    };
    ClosingComponent.prototype.onItDelete = function (Expenses, i) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Expense?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.expenseService.deleteItExpense(Expenses).subscribe(function (data) {
                    console.log(data);
                    _this.expenseService.getItExpenses(_this.auth.user.role).subscribe(function (data) {
                        _this.expenses = data;
                        _this.allExpenses.splice(i, 1);
                    });
                    _this.refreshExpense();
                });
            }
        });
        console.log(Expenses);
    };
    /** Whether the number of selected elements matches the total number of rows. */
    ClosingComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    ClosingComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    /** The label for the checkbox on the passed row */
    ClosingComponent.prototype.checkboxLabel = function (row) {
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
        return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + (row.expenseId + 1);
    };
    /** Whether the number of selected elements matches the total number of rows. */
    ClosingComponent.prototype.isAllSelectedRecoveries = function () {
        var numSelected = this.selectionRecovery.selected.length;
        var numRows = this.dataSourceRecovery.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    ClosingComponent.prototype.masterToggleRecoveries = function () {
        var _this = this;
        this.isAllSelectedRecoveries() ?
            this.selectionRecovery.clear() :
            this.dataSourceRecovery.data.forEach(function (row) { return _this.selectionRecovery.select(row); });
    };
    /** The label for the checkbox on the passed row */
    ClosingComponent.prototype.checkboxLabelRecoveries = function (row) {
        if (!row) {
            return (this.isAllSelectedRecoveries() ? 'select' : 'deselect') + " all";
        }
        return (this.selectionRecovery.isSelected(row) ? 'deselect' : 'select') + " row " + (row.clientId + 1);
    };
    /** Whether the number of selected elements matches the total number of rows. */
    ClosingComponent.prototype.isAllSelectedDisbursment = function () {
        var numSelected = this.selectionDisbursment.selected.length;
        var numRows = this.dataSourceDisbursment.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    ClosingComponent.prototype.masterToggleDisbursment = function () {
        var _this = this;
        this.isAllSelectedDisbursment() ?
            this.selectionDisbursment.clear() :
            this.dataSourceDisbursment.data.forEach(function (row) { return _this.selectionDisbursment.select(row); });
    };
    /** The label for the checkbox on the passed row */
    ClosingComponent.prototype.checkboxLabelDisbursment = function (row) {
        if (!row) {
            return (this.isAllSelectedDisbursment() ? 'select' : 'deselect') + " all";
        }
        return (this.selectionDisbursment.isSelected(row) ? 'deselect' : 'select') + " row " + (row.clientId + 1);
    };
    ClosingComponent.prototype.refreshExpense = function () {
        var _this = this;
        this.recoveryClosingService.getExpenseClosing().subscribe(function (data) {
            _this.allExpenses = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableDataSource"](_this.allExpenses);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.changeDetectorRefs.detectChanges();
        });
    };
    ClosingComponent.prototype.refreshRecovery = function () {
        var _this = this;
        this.recoveryClosingService.getRecoveryClosing().subscribe(function (data) {
            _this.allRecoveries = data;
            _this.dataSourceRecovery = new _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableDataSource"](_this.allRecoveries);
            _this.dataSourceRecovery.paginator = _this.paginator;
            _this.dataSourceRecovery.sort = _this.sort;
            _this.changeDetectorRefs.detectChanges();
        });
    };
    ClosingComponent.prototype.refreshDisbursment = function () {
        var _this = this;
        this.recoveryClosingService.getDisbursementClosing().subscribe(function (data) {
            _this.allDisbursements = data;
            _this.dataSourceDisbursment = new _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableDataSource"](_this.allDisbursements);
            _this.dataSourceDisbursment.paginator = _this.paginator;
            _this.dataSourceDisbursment.sort = _this.sort;
            _this.changeDetectorRefs.detectChanges();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSort"])
    ], ClosingComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginator"])
    ], ClosingComponent.prototype, "paginator", void 0);
    ClosingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-closing',
            template: __webpack_require__(/*! ./closing.component.html */ "./src/app/pages/admin/closing/closing.component.html"),
            styles: [__webpack_require__(/*! ./closing.component.css */ "./src/app/pages/admin/closing/closing.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_13__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_14__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_13__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_13__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_6__["RecoveryService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _shared_services_recovery_closing_service__WEBPACK_IMPORTED_MODULE_1__["RecoveryClosingService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _shared_services_disbursement_service__WEBPACK_IMPORTED_MODULE_3__["DisbursementService"],
            src_app_shared_services_expense_service__WEBPACK_IMPORTED_MODULE_10__["ExpenseService"],
            src_app_shared_services_paymentTypes_service__WEBPACK_IMPORTED_MODULE_11__["PaymentTypesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_15__["NgxSpinnerService"]])
    ], ClosingComponent);
    return ClosingComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/donner-tagging/donner-tagging.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/admin/donner-tagging/donner-tagging.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tr.mat-header-row {\r\n    height: 0px;\r\n}\r\n\r\ntr.mat-row {\r\n  vertical-align: center;\r\n}\r\n\r\n.mat-cell, .mat-header-cell {\r\n  font-size: 13px;\r\n}\r\n\r\n.mat-cell, .mat-footer-cell {\r\n  font-size: 13px;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/admin/donner-tagging/donner-tagging.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin/donner-tagging/donner-tagging.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar-admin></app-left-side-bar-admin>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content\">\r\n          <div class=\"mysearchbox\">\r\n            <h6 class=\"d-inline-block searchshow\">Donor Tagging</h6>\r\n            <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n              <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\"\r\n                title=\"Type in a name\">\r\n            </div>\r\n          </div>\r\n\r\n          <form (ngSubmit)=\"onSubmitFilters()\" [formGroup]=\"filterForm\">\r\n            <div class=\"borderbox\">\r\n              <div class=\"row clearfix\">\r\n                <div class=\"col-sm-12\">\r\n\r\n                  <div class=\"pt-1\">\r\n                    <label>Funder</label>\r\n                  </div>\r\n                  <div class=\"borderbox\">\r\n                    <div class=\"cRow\">\r\n\r\n                      <div class=\"cCol3\">\r\n                        <ng-select [multiple]=\"false\" placeholder=\"Funder\" formControlName=\"funder\">\r\n                          <ng-option *ngFor=\"let fun of funderData\" [value]=\"fun.codeKey\">{{fun.codeValue}}\r\n                          </ng-option>\r\n                        </ng-select>\r\n                        <mat-error\r\n                          *ngIf=\"filterFormsControl.funder.errors?.required && filterFormsControl.funder.touched\">\r\n                          Funder is <strong>required</strong>\r\n                        </mat-error>\r\n                      </div>\r\n\r\n                      <div class=\"cCol3\">\r\n                        <mat-form-field>\r\n                          <input matInput type=\"text\" (keypress)=\"onlyNumbers($event)\" placeholder=\"Fund Amount\"\r\n                            formControlName=\"fundAmt\">\r\n                        </mat-form-field>\r\n                        <mat-error\r\n                          *ngIf=\"filterFormsControl.fundAmt.errors?.required && filterFormsControl.fundAmt.touched\">\r\n                          Funder Amount is <strong>required</strong>\r\n                        </mat-error>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"pt-1\">\r\n                    <label>Other Filters</label>\r\n                  </div>\r\n                  <div class=\"borderbox\">\r\n                    <div class=\"cRow\">\r\n\r\n                      <div class=\"cCol2\">\r\n                        <mat-form-field>\r\n                          <input matInput type=\"text\" placeholder=\"From Disbursment Amount\"\r\n                            (keypress)=\"onlyNumbers($event)\" formControlName=\"frmAmt\">\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"cCol2\">\r\n                        <mat-form-field>\r\n                          <input matInput type=\"text\" placeholder=\"To Disbursment Amount\"\r\n                            (keypress)=\"onlyNumbers($event)\" formControlName=\"toAmt\">\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"cCol2\">\r\n                        <mat-form-field>\r\n                          <input matInput type=\"text\" (keypress)=\"onlyNumbers($event)\" placeholder=\"Loan Cycle\"\r\n                            formControlName=\"cycle\">\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <!-- <div class=\"borderbox\"> -->\r\n                    <div class=\"cRow\">\r\n\r\n                      <div class=\"cCol2\">\r\n                        <mat-form-field>\r\n                          <input matInput formControlName=\"frmDt\" placeholder=\"From Disbursment Date:\"\r\n                            [matDatepicker]=\"picker1\" />\r\n                          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                          <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"cCol2\">\r\n                        <mat-form-field>\r\n                          <input matInput formControlName=\"toDt\" placeholder=\"To Disbursment Date:\"\r\n                            [min]=\"filterForm.controls['frmDt'].value\" [matDatepicker]=\"picker2\" />\r\n                          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                          <mat-datepicker #picker2 disabled=\"false\"></mat-datepicker>\r\n                        </mat-form-field>\r\n                      </div>\r\n\r\n                    </div>\r\n                    <!-- </div> -->\r\n\r\n                    <div class=\"cRow\">\r\n                      <div class=\"cCol2\">\r\n                        <ng-select [multiple]=\"true\" placeholder=\"Branch\" formControlName=\"branchs\">\r\n                          <ng-option *ngFor=\"let branche of branchData\" [value]=\"branche.brnchSeq\">\r\n                            {{branche.brnchNm}}\r\n                          </ng-option>\r\n                        </ng-select>\r\n                      </div>\r\n\r\n                      <div class=\"cCol2\">\r\n                        <ng-select [multiple]=\"true\" placeholder=\"Districts\" formControlName=\"districts\">\r\n                          <ng-option *ngFor=\"let districts of districtListings\" [value]=\"districts.distSeq\">\r\n                            {{districts.distNm}}\r\n                          </ng-option>\r\n                        </ng-select>\r\n                      </div>\r\n\r\n                      <div class=\"cCol2\">\r\n                        <ng-select [multiple]=\"true\" placeholder=\"Activity\" formControlName=\"activities\">\r\n                          <ng-option *ngFor=\"let activity of activityData\" [value]=\"activity.codeKey\">\r\n                            {{activity.codeValue}}\r\n                          </ng-option>\r\n                        </ng-select>\r\n                      </div>\r\n\r\n                      <div class=\"cCol2\">\r\n                        <ng-select [multiple]=\"true\" placeholder=\"Sector\" formControlName=\"sectors\">\r\n                          <ng-option *ngFor=\"let sector of sectorData\" [value]=\"sector.codeKey\">{{sector.codeValue}}\r\n                          </ng-option>\r\n                        </ng-select>\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n                  <button [disabled]=\"!filterForm.valid\" class=\"btn btn-primary mt-3 mb-3\" type=\"submit\">Search</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form><br><br>\r\n\r\n          <!-- <div class=\"table-responsive\">\r\n            <table class=\"table record\" id=\"myTable\">\r\n              <thead class=\"thead-blue thead-light\">\r\n                <tr>\r\n                  <th>Client ID</th>\r\n                  <th>Client Name</th>\r\n                  <th>Disbursment Date</th>\r\n                  <th>Amount</th>\r\n                  <th>Branch</th>\r\n                  <th>District</th>\r\n                  <th>Sector</th>\r\n                  <th>Activity</th>\r\n                  <th>Loan Cycle</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let filter of filterData\">\r\n                  <td>{{filter.clntId}}</td>\r\n                  <td>{{filter.clntName}}</td>\r\n                  <td>{{filter.disbDt}}</td>\r\n                  <td>{{filter.amt}}</td>\r\n                  <td>{{filter.branch}}</td>\r\n                  <td>{{filter.dist}}</td>\r\n                  <td>{{filter.sector}}</td>\r\n                  <td>{{filter.activity}}</td>\r\n                  <td>{{filter.loan_cycl_num}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div> -->\r\n\r\n\r\n          <!---- DATA TABLES---->\r\n          <label *ngIf=\"taggingButton\">Total Number Of Clients: {{totalClients}}</label><br>\r\n          <label *ngIf=\"taggingButton\">Total Amount: {{totalAmont}}</label><br>\r\n\r\n          <div class=\"row\" *ngIf=\"taggingButton\">\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"mysearchbox\" (click)=\"showField()\" *ngIf=\"!showFields\">\r\n                <h6 class=\"d-inline-block searchshow\" style=\"cursor: pointer;\">Search\r\n                  <i class=\"fa fa-search\"> </i>\r\n                </h6>\r\n              </div>\r\n              <div class=\"mysearch\" *ngIf=\"showFields\">\r\n                <mat-form-field>\r\n                  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-8 addBtn\">\r\n              <button class=\"btn btn-primary btn-sm\" (click)=\"onClickTagging()\"> Tag Clients </button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"table-responsive\" *ngIf=\"taggingButton\">\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"table\" multiTemplateDataRows matSort id=\"myTable\">\r\n\r\n              <!-- Client ID Column -->\r\n              <ng-container matColumnDef=\"clntId\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Client ID</th>\r\n                <td mat-cell *matCellDef=\"let filter\"> {{filter.clntId}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Client Name Column -->\r\n              <ng-container matColumnDef=\"clntName\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Client Name </th>\r\n                <td mat-cell *matCellDef=\"let filter\"> {{filter.clntName}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Disbersment Date Column -->\r\n              <ng-container matColumnDef=\"disbDt\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Disbursement Date </th>\r\n                <td mat-cell *matCellDef=\"let filter\"> {{filter.disbDt | date}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Amount Column -->\r\n              <ng-container matColumnDef=\"amt\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Amount </th>\r\n                <td mat-cell *matCellDef=\"let filter\"> {{filter.amt}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Branch Column -->\r\n              <ng-container matColumnDef=\"branch\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Branch </th>\r\n                <td mat-cell *matCellDef=\"let filter\"> {{filter.branch}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Amount Column -->\r\n              <ng-container matColumnDef=\"dist\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> District </th>\r\n                <td mat-cell *matCellDef=\"let filter\"> {{filter.dist}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Activity Column -->\r\n              <ng-container matColumnDef=\"activity\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Activity </th>\r\n                <td mat-cell *matCellDef=\"let filter\"> {{filter.activity}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Sector Column -->\r\n              <ng-container matColumnDef=\"sector\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Sector </th>\r\n                <td mat-cell *matCellDef=\"let filter\"> {{filter.sector}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Loan Cycle Column -->\r\n              <ng-container matColumnDef=\"loan_cycl_num\">\r\n                <th mat-header-cell *matHeaderCellDef> Loan Cycle </th>\r\n                <td mat-cell *matCellDef=\"let filter\"> {{filter.loan_cycl_num}} </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns,\" class=\"thead-light thead-blue\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n              </tr>\r\n            </table>\r\n            <mat-paginator [pageSizeOptions]=\"[10, 20]\" showFirstLastButtons>\r\n            </mat-paginator>\r\n\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/admin/donner-tagging/donner-tagging.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/admin/donner-tagging/donner-tagging.component.ts ***!
  \************************************************************************/
/*! exports provided: MY_FORMATS, DonnerTaggingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonnerTaggingComponent", function() { return DonnerTaggingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/models/REF_CODE_GRP_KEYS.mocks */ "./src/app/shared/models/REF_CODE_GRP_KEYS.mocks.ts");
/* harmony import */ var src_app_shared_services_donor_tagging_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/donor-tagging.service */ "./src/app/shared/services/donor-tagging.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
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
var DonnerTaggingComponent = /** @class */ (function () {
    function DonnerTaggingComponent(fb, toaster, commonService, donorTaggingService, transfersService) {
        this.fb = fb;
        this.toaster = toaster;
        this.commonService = commonService;
        this.donorTaggingService = donorTaggingService;
        this.transfersService = transfersService;
        this.displayedColumns = ['clntId', 'clntName', 'disbDt', 'amt', 'branch', 'dist', 'activity', 'sector', 'loan_cycl_num'];
        this.totalClients = "0";
        this.totalAmont = "0";
        this.taggingButton = false;
        this.totalTagging = [];
        this.showFields = false;
    }
    DonnerTaggingComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    DonnerTaggingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterForm = this.fb.group({
            funder: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fundAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            frmAmt: [''],
            toAmt: [''],
            branchs: [[]],
            frmDt: [''],
            toDt: [''],
            districts: [[]],
            sectors: [[]],
            activities: [[]],
            cycle: ['']
        });
        this.transfersService.getBranches().subscribe(function (d) {
            _this.branchData = d;
        });
        //Sector Data
        this.commonService.getValues(_shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_5__["SECTOR"]).subscribe(function (res) {
            _this.sectorData = res;
        }, function (error) {
            console.log('err', error);
        });
        //Activity Data
        this.commonService.getValues(_shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_5__["ACTIVITY"]).subscribe(function (res) {
            _this.activityData = res;
        }, function (error) {
            console.log('err', error);
        });
        //BRANCH Data
        // this.donorTaggingService.getBranch(4).subscribe((res) => {
        //   this.branchData = res;
        // }, (error) => {
        //   console.log('err', error);
        // })
        //funder Data
        this.commonService.getValues(_shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_5__["FUNDED_BY"]).subscribe(function (res) {
            _this.funderData = res;
        }, function (error) {
            console.log('err', error);
        });
        //funder Data
        this.donorTaggingService.getDistrict(1).subscribe(function (res) {
            _this.districtListings = res;
        }, function (error) {
            console.log('err', error);
        });
    };
    DonnerTaggingComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    DonnerTaggingComponent.prototype.onlyLetters = function (event) {
        var pattern = /[a-zA-Z ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    Object.defineProperty(DonnerTaggingComponent.prototype, "filterFormsControl", {
        get: function () {
            return this.filterForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    DonnerTaggingComponent.prototype.onSubmitFilters = function () {
        var _this = this;
        if (this.filterForm.invalid) {
            this.toaster.error("Please Fill Funder Form Fields  ", "Error ");
            return;
        }
        else {
            var d = this.filterForm.value;
            d.frmDt = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en-US').transform(this.filterForm.get('frmDt').value, 'dd-MM-yyyy');
            d.toDt = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en-US').transform(this.filterForm.get('toDt').value, 'dd-MM-yyyy');
            this.donorTaggingService.postFiltersDonorTagging(d).subscribe(function (res) {
                _this.filterDonnorData = res;
                _this.filterData = _this.filterDonnorData;
                // Sorting Data in Ascending Order
                _this.filterData.sort(function (a, b) { return parseFloat(b.amt) - parseFloat(a.amt); });
                // Comparing Value of amount 
                var total = 0;
                _this.totalTagging = [];
                for (var i = 0; i < _this.filterData.length; i++) {
                    if (_this.filterForm.controls['fundAmt'].value < _this.filterData[i].amt) {
                        _this.toaster.error('The Funder Amount is less than Client Amount', 'Error');
                        // DataSource of Table
                        _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.totalTagging);
                        _this.dataSource.paginator = _this.paginator;
                        _this.dataSource.sort = _this.sort;
                        _this.totalClients = "0";
                        _this.totalAmont = "0";
                        _this.taggingButton = false;
                        return;
                    }
                    if ((total + _this.filterData[i].amt) <= _this.filterForm.controls['fundAmt'].value) {
                        total = total + _this.filterData[i].amt;
                        var totalTaggingFromData = _this.filterData[i];
                        _this.totalTagging.push(totalTaggingFromData);
                    }
                    else {
                        break;
                    }
                }
                // Total Total Amount
                _this.totalAmont = '' + total;
                // Total Number Of Clients
                _this.totalClients = _this.totalTagging.length;
                // DataSource of Table
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.totalTagging);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
                _this.taggingButton = true;
            }, function (error) {
                if (error.status == 500) {
                    _this.toaster.error(error.error.title, "Error");
                }
                else if (error) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
            });
        }
    };
    DonnerTaggingComponent.prototype.onClickTagging = function () {
        console.log(this.totalTagging);
    };
    DonnerTaggingComponent.prototype.showField = function () {
        this.showFields = true;
    };
    DonnerTaggingComponent.prototype.closeField = function () {
        this.showFields = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], DonnerTaggingComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DonnerTaggingComponent.prototype, "paginator", void 0);
    DonnerTaggingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-donner-tagging',
            template: __webpack_require__(/*! ./donner-tagging.component.html */ "./src/app/pages/admin/donner-tagging/donner-tagging.component.html"),
            styles: [__webpack_require__(/*! ./donner-tagging.component.css */ "./src/app/pages/admin/donner-tagging/donner-tagging.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], src_app_shared_services_donor_tagging_service__WEBPACK_IMPORTED_MODULE_6__["DonorTaggingService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_8__["TransfersService"]])
    ], DonnerTaggingComponent);
    return DonnerTaggingComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/file-loader/file-loader.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/file-loader/file-loader.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tr.mat-header-row {\r\n    height: 0px;\r\n  }\r\n  \r\n  tr.mat-row {\r\n  height: 0px;\r\n  }\r\n  \r\n  .mat-cell, .mat-header-cell {\r\n  font-size: 14px;\r\n  }\r\n  \r\n  .mat-cell, .mat-footer-cell {\r\n  font-size: 13px;\r\n  }\r\n  \r\n  table {\r\n  width: 100%;\r\n  }\r\n  \r\n  td,\r\n  th {\r\n  width: 27%;\r\n  }\r\n  \r\n  /* Structure */\r\n  \r\n  table {\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  th.mat-sort-header-sorted {\r\n    color: black;\r\n  }\r\n  \r\n  .mat-cell, .mat-footer-cell {\r\n    font-size: 13px;\r\n}\r\n  \r\n  td,th{\r\n    padding-left: 16px !important;\r\n    width: 11% !important;\r\n}\r\n  \r\n  td:first-child, th:first-child{\r\n    padding-left: 16px !important;\r\n    width: 15% !important;\r\n}\r\n  \r\n  .w-20{\r\n    width: 20% !important;\r\n}\r\n  \r\n  th{\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n}"

/***/ }),

/***/ "./src/app/pages/admin/file-loader/file-loader.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/admin/file-loader/file-loader.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar-admin></app-left-side-bar-admin>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content\">\r\n          <h6 class=\"d-inline-block searchshow\">File Upload</h6>\r\n          <form class=\"md-float-material\" [formGroup]=\"uploadFor\" (ngSubmit)=\"uploadFile()\">\r\n            <div class=\"cRow\">\r\n              <div class=\"cCol1 pt-0\">\r\n                <label class=\"mb-0\">File Type:</label>\r\n                <select class=\"form-control\" name=\"type\" formControlName=\"type\"\r\n                  (change)=\"onSelectedIndexChanged($event.target.value)\">\r\n                  <option value=\"\">Select</option>\r\n                  <option value=\"Budget\">Budget</option>\r\n                  <option value=\"Recovery\">Recovery</option>\r\n                  <option value=\"Target\">Target</option>\r\n                  <option value=\"Tagging\">Tagging / KSZB Blacklist</option>\r\n                  <option value=\"InsuranceClaim\">Insurance Claim</option>\r\n                  <option value=\"WriteOff\">Write Off</option>\r\n                  <option value=\"Funds\">Funds</option>\r\n                  <option value=\"Aml\">AML List</option>\r\n                  <option value=\"defer\">Defer Loans</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"cRow\">\r\n              <label class=\"mb-0\">File Path:</label>\r\n              <input type=\"text\" class=\"mat-input-element \" disabled value=\"{{filePath}}\">\r\n              <!-- <div class=\"cCol2 pt-0\">\r\n               <button class=\"btn btn-default btn-min btn-upload\">Browse</button>\r\n                </div> -->\r\n            </div>\r\n            <div class=\"row\" style=\"margin-top: 2em;\" *ngIf=\"isValidated && validateResponse.hasActiveJob\">\r\n              <div class=\"col-md-12\">\r\n                <h4>Recovery Job is in progress. </h4>\r\n                <h6>Start Time : {{validateResponse.job.strt_dt | date : 'dd-MM-yyyy h:mm:ss a' }}</h6>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\" style=\"margin-top: 2em;\" *ngIf=\"isValidated && !validateResponse.hasActiveJob\">\r\n              <div class=\"col-md-12\">\r\n                <div *ngIf=\"validateResponse?.valid\">\r\n                  <h6 style=\"color:green\">File is Valid</h6>\r\n                  <p>Total Records : {{getTotalClients()}}</p>\r\n                  <p *ngIf=\"this.uploadFor.controls['type'].value == 'Recovery'\">Total Amount : {{getTotalAmount()}}</p>\r\n                  <p *ngIf=\"this.uploadFor.controls['type'].value == 'Funds'\">Total Amount : {{fundsTotal | currency:'PKR':''}}</p>\r\n                  <p *ngIf=\"this.uploadFor.controls['type'].value == 'InsuranceClaim'\">Total Amount : {{insrClmsTotal | currency:'PKR':''}}</p>\r\n                </div>\r\n                <div *ngIf=\"!validateResponse?.valid\">\r\n                  <h6 style=\"color:red\">File is Not Valid</h6>\r\n                  <p>Total Records : {{getTotalClients()}}</p>\r\n                  <p *ngIf=\"this.uploadFor.controls['type'].value == 'Recovery'\">Total Amount : {{getTotalAmount()}}</p>\r\n                  <p *ngIf=\"this.uploadFor.controls['type'].value == 'Funds'\">Total Amount : {{fundsTotal | currency:'PKR':''}}</p>\r\n                  <p *ngIf=\"this.uploadFor.controls['type'].value == 'InsuranceClaim'\">Total Amount : {{insrClmsTotal | currency:'PKR':''}}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf='isValidated'>\r\n              <div class=\"col-md-12\">\r\n                <div class=\"content\">\r\n                  <div class=\"table-responsive\">\r\n                    <table mat-table [dataSource]=\"dataSource\" matSort style=\" width: 100%; \">\r\n                      <ng-container *ngFor=\"let column of columns\" matColumnDef=\"{{column.name}}\">\r\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{column.label}}</th>\r\n                        <td mat-cell *matCellDef=\"let element\"> <span *ngIf=\"column.name=='valid'\">\r\n                            <img *ngIf=\"element[column.name]\" width=\"20px\"\r\n                              src=\"data:image/png;base64, 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\"\r\n                              alt=\"Red dot\" />\r\n                            <img *ngIf=\"!element[column.name]\" width=\"20px\"\r\n                              src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYsAAAIACAMAAABEobA/AAADAFBMVEUAAAD/AAD/f3//VVX/P3/MM2bUVVXaSG3fP1/iOFTlTGbnRVzpP2rrOmLsSFvdRGbfP1/hPFriRmPkQ13lP2bmPGHnRVzoQmPfP1/gPWXhRGLiQl7jP2TkPWDlRF3mQWLnP1/nPWThQ2HhQV7iP2PjPmDkQ13kQWLlP1/mPmPmQmHhQV7iP2LiPmDjQl7jQWHkP1/kPmLlQmDmQV/hP2LiPmDiQmPjQGHjP1/kPmLkQWDlQF/lP2HlPmDiQWLiQGHjP1/jPmLjQWDkQF/kP2HlPmDlQWLiQGDiP1/jPmHjQWDjQGLkP2HkPmDkQWLlQGDlP1/iPmHjQWDjQGLjP2HkP2DkQWHkQGDkP1/lP2HiQWDiQGLjP2HjP1/jQWHkQGDkP2LkP2HkQWDlQGHiP2DjP1/jQWHjQGDkP2LkP2HkQGDkQGHlP2DiP1/jQGHjQGDjP2HjP2HkQGDkQGHkP2DkP2LlQGHjQGDjP2HjP2DjQGDkQGHkP2DkP2HkQGHkQGDjP2HjP2DjQGDjQGHjP2DkP2HkQGHkQGDkP2HjP2DjQGDjQGHjP2DjP2HkQF/kQGDkP2HkP2DkQGHjQGHjP2DjP2HjQF/iQGDkP2HkP2DkQGHkQGHjP2DjP2HjQF/jQGDiP2HkP2DkQGHkQF/kP2DkP2HjQF/jQGHjP2HiP2DkQGHkQF/kPmDkP2HkQGDjQGHjPmHjP2DiQGHiQF/kPmDkP2HkQGDkQGHkPmHjP2DjQGHiQF/iPmHkP2HkQGDkQGHkPl/kP2DjQGHjQF/iPmHiP2HiQGDkQGHkPl/kP2DkQGHkQF/jPmHiP2HiQGDiQGHkPl/kP2HkQGHkQF/kPmHjP1/iQGDiQGHiPl/iP2HkQGHkQF/kPmHkP1/jQGDjQGHiPl/iP2HiQGHkQF/kPmHkP1/kQGDkQGHjPl/iP2HiQF/iQF/iPmHkP1/kQGHkQGHkPl/jP2HiQF/iQF/iPmHiP1/kQGHkQGHkPl/kP2HkQF/iQF/iPmHiP1/iQGHkQGEPESw2AAAA/3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+f4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7rCNk1AAAYSElEQVR42u2dZ2BVVbaA97mpJJAGhCIIQgQmCAgKiggqqKhYGEAEohRBEUXGigwoxTJEYhJJ1CdKGQF5KoiPJkUEfUYReTQJBo0IoYUaWiip+/2Y9xxRWXufc3a9Wd//u9da57v3nn12O4QgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIJIJfqKux95fur7qzbtPUd/z7k9m1a+P/X5R+5qGYUXSiY1Og15ae43Bykfhd/MfXHwddXxsgnGaXjn8wvyqQcq8+ePu7OBg5dQCNVueGHlMeqPoyvGdYnES+mLuB6pX5dSMZTkTL49Fi+pJwLtJ26opGKpWD/+qgBeWnfE9Jl1kMqhcEavGniBeak94vMyKpPSz4bXxMvM8YsYuLycyqdsWQp2d0Eie80/R1Vx9sOeEXjJL0Ly1ONULUUZLfCy/5GIAV9SHazthz+OC0macoTq4nBqExTw6whH5yVUL4uuQwuEEBLo+Q3VT87d+AwYMexHagY/DAmv2uN+TxdSc9j/RNUdPwx7ZD81i73DQqukiZD7d1Lz+Klf1btvOH/NpWay9a4qNvPUfh01l5x2VchEnRnUaCqn1a4iJsKfOklN5/jjVeIm3j2P2kBut6A3UXcBtYUPEoO79zT4OLWHoylB3KNqvIraxdKGwToI+HgxtY1TjwTlo19Sjoxp69PHCgvyt2/dnl9QeOy0jBULX1wWfHeKQafFfVm3LX1z7PA+Xds0+N0CZieqYZuufYaPfWvZtlPCop0cEGQq4v5TxGU5v3nOc/e0iee5ozrxV/YcM3dLiYiws2OCSUWn3b4fvlZM6t3c/fNXaPPeL6484Tf4zg5BYyJ0QoWvEYncdx/8i59baCB56PTt/m5LY0OC5PHOzwKPvdP7ilniV7vfzH0+8vg8KEaoOnqeMCr59G8tRD5tOclPLPd8Aym42v7+03CPa/bPfdxfxi0zNuWT8x47DkMsVxE53ePyynvlrXatcd9H3haKvmX14oSG33mped1DsjuRscPXe0ns6/r2quhwyH29h9KSleR2Rfph98kdsHbGr+dZ18V+1TtMWXrh937tOr/iHnaq+JvbHV5lc1T3VTrMczuEVTHCQhMhr7us8tgrOv6NG0wucpnnFOtGbqM+cTlv85yubUIxY13a+NCy1YUJ37ozMUbndsaYce5s5MTZpKLO967+ncbo3lgaM87V3O+mWvaoaLDDRWGl6fEGpFxzqpu7+PZ6tqhosstFWQuTDMm6+WIXWf/cyA4VLVyMh268waDEu23lT3zP5TaoaM3/sH1yhFn9w5CR/BPBhS3NV9HyKHc5C8wb3mm4iDv7w8ZvR07i3mi07x4T83d6HeAuwPAVIo0KeCt509QJ/dhpvCX80sBkFfV4zz4r7G5wFT1473g76phbRG3eGf6PzX5YSuTt3m5NMLWE2E18FZweYvqaYefhM3ylfGfoUVThqzlHEJpa0DNvxjmKs9zIPTPOP/myn1HNiifWqDl85Uwz8Tc+gW+dzTBbRnKcx/hWsIwxL/VBwbfK6Fq+wZz+puXdjWuY80uLBpsJIYlcE+IlXQwb+eDamjrHtmOzIj/kKauouUk5x/3Mk/NE+7a/Bf7BU1ieQWMIgWU8c0aDiI0M4zkVdKE5482TeDYT3UTs5FaeXYZ/NyXbu3n+U9sTW+nIsZem0pDxtWYc9+1DrYm9tOU4l7LIiPMja3AMCO5tRmwmmWNOY4sJL6LhGCvY2ZjYTVOO1RTT9aeZws5yt/2nBzTeyy6zj+4km7A3Uh9IIvbTjP0KiOOav3Kh7PPRjiaTYKAVe53nl3o3u77ITPBEsBwY1579DzBOZ35dmBu3zwTP6dSdmbv8yq/Vl13sHuYzENfCm8iHNF/mh7kGLfuwV4boe78Je/XKE1wqVtBMrSqy6VIuGaOZ9WbpKuEmZmrZDp8KqlVGNqV8Mhzml6+yk54SopgD5UtCeFXolJFNKa+MsJXM4XM9m5ZeYw4LVOdXoU9G9v/F55IRwzxt+hUdNXRg9aGON3GjQpeM7F/jc8loxurZll+pvoZw5jekhzsVemRk/yY+l4y/Mpd/qV8xNY6V0yS3KnTIyL4gPpeMV1mFP626iIasRY4rQlyrUC8j+3fxeWSErmHNYNZVXAXr/MCCmh5UqJaR/Yf4PDISWQdizVQ8HsDqZ3f2pEKtjOw/ic8j42bWv5TS4wlDtjCymexRhUoZ2X8an0dGBqP69SqXhTzC6kuEe1WhTkb2ReJzyIjcxqhf4fKjhGOM8+n+4l2FKhnZF43PIaM149jCg+oWr7F+oyP9qFAjIxuIzyHjKcYV+Iey/izj9MQvHF8qVMjIBuOzZQQYq57PqNrJ9w5j3XVznyrky8hmxGfLuIKxrn6qGhVJjBWmL/hWIVtGFjM+W8bLjC/kpUpcvM84Qybcvwq5MrI44jNlVMs3YLlUa8Yxgp1EqJApI4srPlNGV8Z4rYpNGYwTM94Ro0KejCzO+EwZs+HPfyBfxVWMo28SBamQJSOLOz5LRn3G8OgV0l0wdk2NFqZCjowsF/FZMsbDH39Ptoqm8GzerkhxKmTIyHIVnyEjGt7nWiZ7TeebcPb3ilQhXkaWy/gMGQ/An06XqyIRXjuX4whVIVpGluv4sIzABvjcE7mHWjLWz14nWIVYGVke4sMyGCvExspUUR1ebL0C+myYFxUiZWR5ir8UXErwBbwzTubRJ4/DeXcEP5xJtcrwpoJOARu9Ef7ww/JUOHnefxa6ZUhRwfphbJF3usANcN7MFe8aZUhSwfphXCPNxTww7nJ2A9pkyFJByFqwgVnSOrTwgUocSz90yZCngtwCzzbL6tbC2w/+h+u/UYuMqfJUEAdehzBKjooAvMb/fr5WNMiQqYKQoWAjP8i5e8O/xgO8L59TLkOuChJ52Pc/t+g7N/8eTsUyJKtgnRIkZUFnNDhcf87F6XVKZUhXQeqAi6VOyDhLrp+4zptCGfJVEDIXbKqnBBfwudLXEyNlqFDBmPn+SLyKBPDh4ieX3QVFMpSoIIFd4L+3+GO2h4HZuz4wV4kMNSpYk633C3fxORSuwv0bXhTIUKWCNAKXKS0TraIuGG6JhxYzZMvwqOJVD7WsAue9awp2MdTHNLceGQpVMA40SxHsYiEU7Iy3s/akylCpgsSAjxjzxKqIAA9pne+xVYkylKpgdPiPi93xDY9F3UdMk6FYBRmocEzqdUk9aEkyVKsg8eDTV6pQF+AC9//y0bAUGa+rVkHIcqjhbSJVNANreICYJUODCkY/U+TGmFFQoEp/LxgRLkOHClIfbHu4QBcfg5OrPhsXLEOLCkLAqdb3xalwwKkr3/tnhcrQpIKkQ63vEeeiOVjGjcQgGbpUkO5g++JevQ6O0RaHE3NkaFNBos5L695cwHuixwVlydCngjE++I4wF+BcyZPEGBk6VZAxUIg8USoagJUIWjIqQIZWFaQLGCRRkIt7oSAlotY5pPuV4VGFqAGKKPA4iHsERXkFCvKNsH9CnzI0qyBkIxRmvKAg4NvzBG4Q9CVDuwryBhRnoaAg4FmHIt9M40OGfhXw5N5OMTFqg9U0IAbIcAxQQZqAocSctAYeO3lI7PyhRxmbDVBBnOPiFvNdjGegEJ8TI2QYoIKQHCjYSCEhwBfoCT8/LN1aFeRtKNq7QkKAZ9GKf7tOuq0qyEgo3LdC/gbBtwxIeDVVuqUq4D2th0VEqAWWFEvslCFBBaPDKWKJcwcowF5CrJSRKiXvQ1BIEW9qBvfArCVWypCjgnwDxewpIMDfoQD/JDbKkKQCfhHFUwICvAsFmEQslCFLBUmFor4hIAC48eJBYp8MaSrICCjspwIC7IQCdJNWF/uVcR6ZLC/lO6C4PwgIAD5eyHw192u2qSAtocBH/LcfAVYWQSyTIVMFqQEur/Tf/iVQ+ycIsUvGZLkJgydj+m/+SgUzJMpkSFZB9sl1Ac5ebCBWyZCtgnwv10V/qPkVxCYZ0lXAh6z5bx48enMesUiGfBXwenz/zYMn8mQTe2QoUAG/vch/81O0DIGIl6FCBZks1wW4DXE0sUWGEhXkBbkuwEncJ4glMtSoIM/JdTELav5RYocMRSrIk3JdgG8NG0askKFKBXlUrosFUPMDiQ0ylKmAN3D5b34J1Hw/YoEMdSrgoyj8Nw9ufeqtrkySZr4KeG2A/+ZXmuIi26OLzOBxAf5H9TdfhVIZAzXeuwdZoEKljGEa+7QP2aBCoYzH5LqYCTX/mBUq1MmQ/KwHjoE8aYcKZTIkj4GAY4PPWaJClYzxGsfMX7RFhSIZqXJdTJS9LlGNCjUy3pXrYqTmOVZRKpTIkDzHCj5KrrRIhQoZX8h10U3rmhyRKhTIkLwmpw3U/C9WqZAvY79cF/U1ruEUrUK6DMlrOOG1zZF2qZAsIwaKXCEgALjmv5llKuTKaCV5zT8B3zZ5i20qpMq4E4q7XUCA1XoWH8hSIVMGOEy7VEAAcF3iS/apkChjiuz1ruD5krMtVCFPxoeyx7T7QgG+tFGFNBnfQjFFnP54NRRgn5UqZMk4AoVsJSBATbCoOCtVyJGRCEasLiCCcxKK0MlOFVJkgO9lFXMY4CYoxHBLVciQAb6xZZ2QEO/J7qlpUSFBxjQompjT5Z+CQqy1VoV4GV/L3x4B/g0edUxQscEEGSpurHBH6lIDVKR5XYUuVEYSGErQW7z3QjH6mqCCmCDjASjQz4KCLFFUjQ8VJsh4C4qzQFCQl6Eg35qhwgAZm6EwLwgK0gcKUhpphgrtMqIroCh3CYoCv1OxoyEqdMsATwqmtUT9+sCpvadNUaFZxljZk3r/YhYU5lNjVOiVAZ6R+bYwFw9CYc5GGKNCp4zoEijAAGEuLgcL6WqOCo0ybgfbbyju6b4QipNqkAp9MjKh1ncLfKT8CAq0ySQV2mRsV7UsAFxs4vOdioJVaJIBv5tT5NKlpmCkwUap0CPjYbBpoS9b2wFFWmKWCi0ywKM6tggdmwdPei+JMUuFgHe7up5XAF/G+opQF+B8kvfesyQV6mUMAZsV+1KpcHC1+ULTVCiXAb6y9miIUBfwsSDnqpumQrGMuFKozbliVZDBYAX9jFOhVsZA8VcHIBEcnV9ungqlMsBxwdJ4wS7gTltlQ/NUKJRxGdjeYtEqGD2FcQaqUCcDPGdcwoFnceCY8M6AgSpUyQgUQI2diRbugiwE07/BRBWKZICvCJFyTse9VNhIpDIVamSArzgUturgt1Q7DUU8n2ikChUy6oEPF0XhElzA71Sn481UoUAGuHxM0DvU3Y1JHYwwU4V0GdWOKhyL+nWm9UcRsxjKVciWAc9cfO9IcQFvxKBbHENVyJURyAPbkHVSac3zYNibTFVBSIY8GfD6jzOxklww7t6fGatCogznK7CB6bJUkOvhzK83VoU8GfBzHr1amgsnFwy82lwVsmQ4OeCnNxJ5PAon3tlcFZJkMH4WQyW6iDri/YcRtlSrCq8yFoV6/1kUSj12bjyceBfosxFLtarwJmMROIRxC/xhuUeM1zwDBl8fECwjTWj2GYJVhGwGP3wqTqoLkkV9rM5xLSNNcPYZQlXAeyEonSJXBWkMLsqie6qJlJEmPP0MkSqqg8vvaWl9yS7g98QwJ1tdyUiTkH6GOBXkJfjjM2SrIFfCCRTXFSYjTUr+GcJUNARPBqaVLaS7gFetUTqLCJKRJin/DEEqyDz483PkqyDJlXAON4qRkSatgAwxKrrDny9rqsAFfJ4UpT9GipCRJrGADBEqon6BG3hbhQpyWSmcBfPFPRwy0qRWkOFfBXkVbuD8JUpckDfhNEqTfctIk1xBpm8VbeC+PX1NjQpSH+5A0JyATxlp0kvI9Kki5Dv4EpyupcgFfFY05TmiGJSRpqCETF8q4BfpUUonqVJB4g7DmZS08iMjTUkNmX5UtGPcMvdXV+aCDGV8Lb6P9C4jTVENmd5VROVRP8NyYgmwDlvkuHVdREaasiIyvaogbzCqz3EUuiAdWZ3Cbh5lpCksItOjijsYtVe2I0qZzchnf6InGWlKi8j0pKLeQUbt09SqIPVPMxL6PNSDjDTFVWR6UBGWw6j8RG3FVZDRrH+pycS1DNUqfi+DRwXzOZGOUl5F2GZWTj3dylCv4sIry6WiL6vs9SHqq2jHGAWgJy93J0OHit/K4FKRXMyouvQKHVVMZn1DcmPcyNCj4t8yuFTE72AVPUFLEdV+ZOW1Ioxfhi4V/y+DS0X4GlbJ28L1FHE9c+h5msMrQ5+Kf8ngUuHMYhVc0UFXEW8wZYwmfDJ0qiAkk08FeZ5Zb7q2GmrsYibXh0vGEKKXB7lUDGBWmx+tr4aOrL4UPdeFBAtdS1jFll2tM78XmF+VUx2CREXHYjH/yNII+W9mgkWtg0JF2xPMSlcH9KZ4KTvFQ82CQEXyEWadR+vrTpI5JkDp3sbWq2iyn13m3frTnMHOcndTy1U028Mu8i0D8ozays7zQLLVKlodZJe4IdKI328RO9Mj7SxW0Z6nwEvNyPW2SnauJ66zVkWXU+zyKrqaku04jgWqxbdaqqLHWY7qnjYm3cAnHOmWP2SliscqOGr7wDEn4Zg8joRpasA6EyFcGwS2RZuUc/Minpw/qmaZimieHzw9YliXvXMJT9br6liloh7X+4/PXWta3v24dvvst6k71eUgT0mVvczLfAyXjLLHHUtMOE+Xc1X0pIm5v8O3J3FetBUqasznKyfbyO9W6HK+7HNbWKCiZR5fMYtCDP0qrefL/+wI0/+nAqPO85XytbE/8oStfBXQpWb3p+qv5KxjY6y5RSTu4Czi8N0Gq+h1lLOK3Fomf6Mu+YX3hIfpcab+uGfxlpBfz+x/2sv28VZS2NfEu4Yz4BBvAQWXEsNpcZj78JOljcz7Kq3gzr7wcmI8LQu5yznzVKhRqYc9e5Y793029MxJUgH/EU253Q36e+qRx5/4L5fZMXrQKN/FgVnLTZkKb/WZi6x3NCCWUC/XRVnlb9U2IOU671S4yHlrIrGGWhtdFEZPTorXnG/Cy6fdJLw+gVhE7FfUHhsJL59yle2aGsQqIj9wVR49MVHXs1/CS+5M0NnhxDICqe4qpCfTG2tIs8nrp13m+aJD7GN4hcsqK+Zfp7ZOp/NCtzmWPUis5I5i6pb1/SPU/Y2mbHCd38lbiKW0PeC6WHos60o1uWUXuU9uTytiLfVyqAc2jZTdZ6w5aouXxNYmEosJ9/YCkpJFD8jrVsUPWlLiKav0UGI3g855qpuWLhtSU8ZT6NDlZd4SOtufWE+73dQj5Wueayty2Weg3Zi15V6T2RkU2w5rraLeOTR3oJjZs0sGzzviI49l8SQoCIwuo37In/1oWz9/1aHtHpu701cGpU8GSLDQPp/6pHht6oDW7p89ItqkpH5xxm/wHW1JEFF9JhVAed78CfddU5fnOxqod+19ExfklYsIOy2aBBf9TlBRnP/ps+mTRqXc3iEp/kItgfikDrenjJo0Y3X+eWHRinqToKPRGiqB0uKiwoL8H/ILCouKS2UEWNWQBCHOsJPUNo4Pdkhwcsliy1R8XJcELc59hy0ycbA3CWpqzbVGxawEEuzcsNUKExs7kSpA6Ihjxps4MiyEVA0S3qgw2kT56/Gk6tB6rcEqPmtJqhTObRsNNfHdzQ6paji98ww0kduz6pkghJCQQbsMM7EzJYRUVcIfLTDIxK7hYaQqE5byvSEmNvcPJVUd5zYT+lSrb3UIQgjpsKBSq4iKj65GCf+e3HipUJuJ/ZMaooALbxy9VukQUbmiJ94m/oSkV1WPqB+a3AQv+8V+HHfMOa1MxKn3bgvDSw4R1feTEgUizn/cpxpebDZxQ5adkyri7NJBsXiZuX8dd/7HHkkidr95B/4i3D4DthrzVZlgD2Vfjm6Jz3TeiO42cc1ZQR7OrJ5wUxReUn/jh9c+u/iA38e5xc9cg30mQSTe8uzcXC+LY8u3zXnm5tp4AUUTeVX/cTPWFvCNXVXsXjN9bL92kXjZpP5pXd59yLNTZi5Z9/Mfl0ufyF+3eOaUZ4d0TwrHC4UgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgiFz+F79CyIcwMuqPAAAAAElFTkSuQmCC\"\r\n                              alt=\"Red dot\" />\r\n                          </span>\r\n                          <span *ngIf=\"column.name!='valid'\"> {{element[column.name]}}</span> </td>\r\n                      </ng-container>\r\n\r\n                      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                    </table>\r\n\r\n                    <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"cRow\">\r\n                <div class=\"cCol1\">\r\n                <label class=\"mb-0\">Load Date:</label>\r\n                <div class=\"input-group date\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"DD / MM / YYYY\">\r\n                  <div class=\"input-group-append input-group-addon\t\">\r\n                    <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              </div>  -->\r\n\r\n            <div class=\"buttons mt-3\">\r\n              <button  (click)=\"validate()\" *ngIf=\"showValidate\" type=\"button\" class=\"btn btn-primary btn-min mr-3\">Validate</button>\r\n              <button *ngIf=\"(validateResponse?.valid && isValidated)\" [disabled]=\"buttonDisabled\" type=\"submit\"\r\n                class=\"btn btn-primary btn-min mr-3\">Process</button>\r\n              <button class=\"btn btn-default btn-min\" type=\"reset\">Cancel</button>\r\n            </div>\r\n\r\n          </form>\r\n          <!-- <select class=\"form-control\" id=\"selectionOption\">\r\n          <option value=\"2\" >All</option>\r\n          <option value=\"1\">Approved</option>\r\n          <option value=\"0\">Rejected</option>\r\n        </select> -->\r\n\r\n          <!-- <div class=\"table-responsive\" *ngIf=\"type!='' && type=='Recovery'\">\r\n            <table class=\"table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>Transaction Number</th>\r\n                  <th>Branch</th>\r\n                  <th>Client</th>\r\n                  <th>Recovery Amount</th>\r\n                  <th>Transaction Date</th>\r\n                  <th>Agent</th>\r\n                  <th>Status</th>\r\n                  <th>Comments</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let rsd of recoveryStagingData\">\r\n                  <td>{{rsd.trxId}}</td>\r\n                  <td>{{rsd.branchNm}}</td>\r\n                  <td>{{rsd.clntNm}}</td>\r\n                  <td>{{rsd.amt}}</td>\r\n                  <td>{{rsd.loadDt}}</td>\r\n                  <td>{{rsd.agentName}}</td>\r\n                  <td><span *ngIf=\"rsd.trxStsKey==0\">Rejected</span><span *ngIf=\"rsd.trxStsKey==1\">Approved</span></td>\r\n                  <td>{{rsd.cmnt}}</td>\r\n                </tr>\r\n                <tr *ngIf=\"recoveryStagingData!=null\">\r\n                  <td></td>\r\n                  <td></td>\r\n                  <td>Success Amount</td>\r\n                  <td>{{totalRecv}}</td>\r\n                  <td>Rejected Amount</td>\r\n                  <td>{{totalRecverr}}</td>\r\n                  <td></td>\r\n                  <td></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <div class=\"buttons mt-3\">\r\n              <button *ngIf=\"recValidated\" (click)=\"postFile()\" class=\"btn btn-primary btn-min mr-3\">Post Data</button>\r\n            </div>\r\n          </div> -->\r\n          <!--Funds-->\r\n          <div class=\"table-responsive\" *ngIf=\"type!='' && type=='Funds' && allFunds!=null\">\r\n            <table class=\"table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>Branch</th>\r\n                  <th>Funds</th>\r\n                  <th>Created By</th>\r\n                  <th>Date</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let f of allFunds\">\r\n                  <td>{{f.branchSeq}}</td>\r\n                  <td>{{f.funds}}</td>\r\n                  <td>{{f.crtdBy}}</td>\r\n                  <td>{{f.crtdDt |date: 'dd-MM-yyyy'}}</td>\r\n                </tr>\r\n\r\n              </tbody>\r\n            </table>\r\n            <div class=\"buttons mt-3\">\r\n              <button (click)=\"postFunds()\" class=\"btn btn-primary btn-min mr-3\">Post Data</button>\r\n            </div>\r\n          </div>\r\n          <!--End Funds Table-->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/admin/file-loader/file-loader.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/admin/file-loader/file-loader.component.ts ***!
  \******************************************************************/
/*! exports provided: FileLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileLoaderComponent", function() { return FileLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_file_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/file-loader.service */ "./src/app/shared/services/file-loader.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FileLoaderComponent = /** @class */ (function () {
    function FileLoaderComponent(datePipe, fileLoaderService, toaster, fb, spinner) {
        this.datePipe = datePipe;
        this.fileLoaderService = fileLoaderService;
        this.toaster = toaster;
        this.fb = fb;
        this.spinner = spinner;
        this.totalRecv = 0;
        this.totalRecverr = 0;
        this.isRec = false;
        this.recValidated = false;
        this.showValidate = true;
        this.isValidated = false;
        this.insrClmsTotal = 0;
        this.columns = [];
        this.displayedColumns = this.columns.map(function (column) { return column.name; });
        this.fundsTotal = 0;
    }
    FileLoaderComponent.prototype.ngOnInit = function () {
        this.uploadFor = this.fb.group({
            type: [''],
        });
        this.buttonDisabled = true;
    };
    FileLoaderComponent.prototype.onChange = function (deviceValue) {
        console.log(deviceValue);
    };
    FileLoaderComponent.prototype.onSelectedIndexChanged = function (selectedValue) {
        var _this = this;
        this.showValidate = true;
        this.isValidated = false;
        this.isRec = false;
        this.recoveryStagingData = null;
        this.totalRecv = 0;
        this.totalRecverr = 0;
        if (selectedValue == "Recovery") {
            this.fileLoaderService.loadFilePath('/setupservice/api/load-file-path/Recovery').subscribe(function (d) {
                _this.filePath = d;
                if (_this.filePath == "/opt/RecoveryFile/ADC_FILE.csv") 
                //          if(this.filePath=="C:\\Users\\Admin\\Desktop\\ADC_FILE.csv")
                {
                    _this.buttonDisabled = false;
                    _this.type = "Recovery";
                    // NEED TO BE FIXED
                    _this.isRec = true;
                    // this.validateResponse = { valid: true };
                    // this.isValidated = true;
                    //-fix till here
                }
                else {
                    _this.filePath = "File does not exist !!";
                    _this.buttonDisabled = true;
                }
            });
        }
        else if (selectedValue == "Budget") {
            this.fileLoaderService.loadFilePath('/setupservice/api/load-file-path/Budget').subscribe(function (d) {
                _this.filePath = d;
                if (_this.filePath == "File does not exist !!") {
                    _this.buttonDisabled = true;
                }
                else {
                    _this.type = "Budget";
                    _this.buttonDisabled = false;
                }
            });
        }
        else if (selectedValue == "Target") {
            this.fileLoaderService.loadFilePath('/setupservice/api/load-file-path/Target').subscribe(function (d) {
                _this.filePath = d;
                if (_this.filePath == "File does not exist !!") {
                    _this.buttonDisabled = true;
                }
                else {
                    _this.type = "Target";
                    _this.buttonDisabled = false;
                }
            });
        }
        else if (selectedValue == "Tagging") {
            this.fileLoaderService.loadFilePath('/setupservice/api/load-file-path/Tagging').subscribe(function (d) {
                _this.filePath = d;
                if (_this.filePath == "File does not exist !!") {
                    _this.buttonDisabled = true;
                }
                else {
                    _this.type = "Tagging";
                    _this.buttonDisabled = false;
                }
            });
        }
        else if (selectedValue == "InsuranceClaim") {
            this.fileLoaderService.loadFilePath('/setupservice/api/load-file-path/InsuranceClaim').subscribe(function (d) {
                _this.filePath = d;
                if (_this.filePath == "File does not exist !!") {
                    _this.buttonDisabled = true;
                }
                else {
                    _this.type = "InsuranceClaim";
                    _this.buttonDisabled = false;
                }
            });
        }
        else if (selectedValue == "WriteOff") {
            this.fileLoaderService.loadFilePath('/setupservice/api/load-file-path/WriteOff').subscribe(function (d) {
                _this.filePath = d;
                if (_this.filePath == "File does not exist !!") {
                    _this.buttonDisabled = true;
                }
                else {
                    _this.type = "WriteOff";
                    _this.buttonDisabled = false;
                }
            });
        }
        else if (selectedValue == "Funds") {
            this.fileLoaderService.loadFilePath('/setupservice/api/load-file-path/Funds').subscribe(function (d) {
                _this.filePath = d;
                if (_this.filePath == "File does not exist !!") {
                    _this.buttonDisabled = true;
                }
                else {
                    _this.type = "Funds";
                    _this.buttonDisabled = false;
                }
            });
        }
        else if (selectedValue == "Aml") {
            this.filePath = "https://scsanctions.un.org/resources/xml/en/consolidated.xml";
            this.buttonDisabled = false;
            this.isValidated = true;
            this.showValidate = false;
            this.type = "Aml";
            this.validateResponse = { "hasActiveJob": false, "valid": true, "list": [] };
        }
        else if (selectedValue == "defer") {
            this.fileLoaderService.loadFilePath('/setupservice/api/load-file-path/Defer').subscribe(function (d) {
                _this.filePath = d;
                if (_this.filePath == "File does not exist !!") {
                    _this.buttonDisabled = true;
                }
                else {
                    _this.type = "defer";
                    _this.buttonDisabled = false;
                }
            });
        }
    };
    FileLoaderComponent.prototype.getFileData = function () {
        var _this = this;
        this.recValidated = true;
        this.fileLoaderService.getFileData(this.type).subscribe(function (data) {
            _this.recoveryStagingData = data;
            _this.recoveryStagingData.forEach(function (element) {
                if (element.cmnt == null) {
                    _this.totalRecv = _this.totalRecv + element.amt;
                }
                if (element.cmnt != null) {
                    _this.totalRecverr = _this.totalRecverr + element.amt;
                }
                _this.fileLoaderService.getClientAndBranchName(element.clntId).subscribe(function (d) {
                    _this.temp = d;
                    console.log(d);
                    element.clntNm = _this.temp.split('+')[0];
                    element.branchNm = _this.temp.split('+')[1];
                    _this.fileLoaderService.getAgent(element.agentId).subscribe(function (res) {
                        var da = res;
                        element.agentName = da.typStr;
                    });
                });
            });
        });
    };
    FileLoaderComponent.prototype.resetFile = function () {
        this.uploadFor.reset();
        this.type = "";
        this.buttonDisabled = true;
        this.filePath = "";
    };
    FileLoaderComponent.prototype.uploadFile = function () {
        var _this = this;
        this.uploadFor.reset();
        this.spinner.show();
        this.fileLoaderService.uploadFile(this.type).subscribe(function (d) {
            _this.spinner.hide();
            _this.toaster.success("Successfully Processed");
            if (_this.type == "Recovery") {
                // this.getFileData();
                _this.fileLoaderService.postData().subscribe(function (r) {
                }, function (error) {
                });
            }
            else if (_this.type == "Funds") {
                _this.allFunds = d;
                _this.fileLoaderService.postFundsData().subscribe(function (r) {
                }, function (error) {
                });
            }
            else if (_this.type == "Aml") {
                console.log(d);
                d.forEach(function (e) {
                    e.valid = true;
                    e.reason = "";
                });
                _this.spinner.hide();
                _this.columns = [
                    { name: 'amlDataId', label: 'Data ID' },
                    { name: 'frstNm', label: 'First Name' },
                    { name: 'scndNm', label: 'Second Name' },
                    { name: 'thrdNm', label: 'Third Name' },
                    { name: 'cmnts', label: 'Comments' },
                    { name: 'valid', label: 'Valid' },
                    { name: 'reason', label: 'Reason' }
                ];
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](d);
                _this.displayedColumns = _this.columns.map(function (column) { return column.name; });
            }
            else {
                // this.toaster.success(d + "");
            }
        }, function (error) {
            _this.spinner.hide();
            _this.toaster.error("Something Went Wrong");
        });
        this.filePath = null;
        this.buttonDisabled = true;
    };
    FileLoaderComponent.prototype.postFile = function () {
        console.log("@@@@@");
        // this.spinner.show();
        // setTimeout(() => {
        //   this.spinner.hide();
        //   this.toaster.show("Posted");
        //   this.recValidated = false;
        // }, 6000);
        this.fileLoaderService.postData().subscribe();
    };
    FileLoaderComponent.prototype.postFunds = function () {
        var _this = this;
        this.fileLoaderService.postFundsData().subscribe(function (res) {
            _this.toaster.success("Funds Posted");
        });
    };
    FileLoaderComponent.prototype.getTotalClients = function () {
        return this.validateResponse['list'].length;
    };
    FileLoaderComponent.prototype.getTotalAmount = function () {
        var x = 0;
        this.validateResponse['list'].forEach(function (d) {
            if (d.amt != undefined && d.amt != null) {
                x += +d.amt;
            }
        });
        return x;
    };
    FileLoaderComponent.prototype.getTotalAmount1 = function () {
        var x = 0;
        this.validateResponse['list'].forEach(function (d) {
            if (d.amount != undefined && d.amount != null) {
                x += +d.amt;
            }
        });
        return x;
    };
    FileLoaderComponent.prototype.validate = function () {
        var _this = this;
        console.log(this.uploadFor.controls['type'].value);
        if (this.uploadFor.controls['type'].value == "Budget") {
            this.spinner.show();
            this.fileLoaderService.validateBudgetFile().subscribe(function (res) {
                _this.spinner.hide();
                _this.isValidated = true;
                _this.validateResponse = res;
                _this.columns = [
                    { name: 'header', label: 'Budget GL Header' },
                    { name: 'type', label: 'Budget Type' },
                    { name: 'category', label: 'Budget Category' },
                    { name: 'period', label: 'Period' },
                    { name: 'year', label: 'Year' },
                    { name: 'amount', label: 'Amount' },
                    { name: 'branch', label: 'Branch' },
                    { name: 'valid', label: 'Valid' },
                    { name: 'reason', label: 'Reason' }
                ];
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res['list']);
                _this.displayedColumns = _this.columns.map(function (column) { return column.name; });
                // if()
            }, function (error) {
                _this.spinner.hide();
                _this.toaster.error("Something Went Wrong");
            });
        }
        else if (this.uploadFor.controls['type'].value == "Target") {
            this.spinner.show();
            this.fileLoaderService.validateTargetFile().subscribe(function (res) {
                _this.spinner.hide();
                _this.isValidated = true;
                _this.validateResponse = res;
                _this.columns = [
                    { name: 'year', label: 'Year' },
                    { name: 'period', label: 'Period' },
                    { name: 'branch', label: 'Branch' },
                    { name: 'prdGrp', label: 'Product ID' },
                    { name: 'clients', label: 'No. Of Clients' },
                    { name: 'amount', label: 'Amount' },
                    { name: 'valid', label: 'Valid' },
                    { name: 'reason', label: 'Reason' }
                ];
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res['list']);
                _this.displayedColumns = _this.columns.map(function (column) { return column.name; });
            }, function (error) {
                _this.spinner.hide();
                _this.toaster.error("Something Went Wrong");
            });
        }
        else if (this.uploadFor.controls['type'].value == "Tagging") {
            this.spinner.show();
            this.fileLoaderService.validateTaggingFile().subscribe(function (res) {
                _this.spinner.hide();
                _this.isValidated = true;
                _this.validateResponse = res;
                _this.columns = [
                    { name: 'clientSeq', label: 'Client Seq' },
                    { name: 'tagSeq', label: 'Tag Seq' },
                    { name: 'valid', label: 'Valid' },
                    { name: 'reason', label: 'Reason' }
                ];
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res['list']);
                _this.displayedColumns = _this.columns.map(function (column) { return column.name; });
            }, function (error) {
                _this.spinner.hide();
                _this.toaster.error("Something Went Wrong");
            });
        }
        else if (this.uploadFor.controls['type'].value == "InsuranceClaim") {
            this.spinner.show();
            this.insrClmsTotal = 0;
            this.fileLoaderService.validateClaimsFile().subscribe(function (res) {
                _this.spinner.hide();
                _this.isValidated = true;
                _this.validateResponse = res;
                res['list'].forEach(function (obj) {
                    obj.clntName = obj.firstName + " " + obj.lastName;
                    _this.insrClmsTotal = _this.insrClmsTotal + +obj.amount;
                });
                _this.columns = [
                    { name: 'regname', label: 'Region' },
                    { name: 'areaName', label: 'Area' },
                    { name: 'brnchName', label: 'Branch' },
                    { name: 'active', label: 'Claim Type' },
                    { name: 'claim', label: 'Claim #' },
                    { name: 'client', label: 'Client ID' },
                    { name: 'clntName', label: 'Client Name' },
                    { name: 'amount', label: 'Amount' },
                    { name: 'valid', label: 'Valid' },
                    { name: 'reason', label: 'Reason' },
                    // Added by Zohaib Asim - Dated 17-12-2020
                    // Health Claim Type
                    { name: 'healthClaimType', label: 'Health Claim Type' }
                ];
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res['list']);
                _this.displayedColumns = _this.columns.map(function (column) { return column.name; });
            }, function (error) {
                _this.spinner.hide();
                _this.toaster.error("Something Went Wrong");
            });
        }
        else if (this.uploadFor.controls['type'].value == "WriteOff") {
            this.spinner.show();
            this.fileLoaderService.validateWriteOffFile().subscribe(function (res) {
                _this.spinner.hide();
                _this.isValidated = true;
                _this.validateResponse = res;
                console.log(_this.validateResponse);
                _this.columns = [
                    { name: 'branch', label: 'Branch' },
                    { name: 'product', label: 'Product' },
                    { name: 'client', label: 'Client ID' },
                    { name: 'loan', label: 'Loan App Seq' },
                    { name: 'disbDate', label: 'Disbursement Date' },
                    { name: 'recAmount', label: 'Recovered Amount' },
                    { name: 'odAmount', label: 'Overdue Amount' },
                    { name: 'odDays', label: 'Overdue Days' },
                    { name: 'outstanding', label: 'Outstanding' },
                    { name: 'valid', label: 'Valid' },
                    { name: 'reason', label: 'Reason' }
                ];
                console.log(res['list']);
                res['list'].forEach(function (obj) {
                    // obj.clntName = ((obj.firstName != undefined) ? obj.firstName : "") + " " + ((obj.lastName != undefined) ? obj.lastName : "");
                    obj.date = _this.datePipe.transform(obj.date, 'dd-MM-yyyy');
                });
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res['list']);
                _this.displayedColumns = _this.columns.map(function (column) { return column.name; });
            }, function (error) {
                _this.spinner.hide();
                _this.toaster.error("Something Went Wrong");
            });
        }
        else if (this.uploadFor.controls['type'].value == "Funds") {
            this.spinner.show();
            this.fileLoaderService.validateFundsFile().subscribe(function (res) {
                _this.spinner.hide();
                _this.isValidated = true;
                _this.validateResponse = res;
                _this.columns = [
                    { name: 'branch', label: 'Branch' },
                    { name: 'funds', label: 'Funds' },
                    { name: 'valid', label: 'Valid' },
                    { name: 'reason', label: 'Reason' }
                ];
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res['list']);
                _this.displayedColumns = _this.columns.map(function (column) { return column.name; });
                res['list'].forEach(function (ele) {
                    _this.fundsTotal = _this.fundsTotal + +ele.funds;
                });
            }, function (error) {
                _this.spinner.hide();
                _this.toaster.error("Something Went Wrong");
            });
        }
        else if (this.uploadFor.controls['type'].value == "defer") {
            this.spinner.show();
            this.fileLoaderService.validateDeferFile().subscribe(function (res) {
                _this.spinner.hide();
                _this.isValidated = true;
                _this.validateResponse = res;
                _this.columns = [
                    { name: 'clntName', label: 'Clnt Name' },
                    { name: 'clntId', label: 'Client Id' },
                    { name: 'loanAppSeq', label: 'Credit Seq' },
                    { name: 'loanSts', label: 'Status' },
                    { name: 'instNum', label: 'Paid Inst.' },
                    { name: 'valid', label: 'Valid' },
                    { name: 'reason', label: 'Reason' }
                ];
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res['list']);
                _this.displayedColumns = _this.columns.map(function (column) { return column.name; });
                // res['list'].forEach(ele=>{
                //   this.fundsTotal = this.fundsTotal + +ele.funds;
                // })
            }, function (error) {
                _this.spinner.hide();
                _this.toaster.error("Something Went Wrong");
            });
        }
        if (this.uploadFor.controls['type'].value == "Recovery") {
            this.spinner.show();
            this.fileLoaderService.validateRecoveryFile().subscribe(function (res) {
                console.log(res);
                _this.spinner.hide();
                _this.isValidated = true;
                _this.validateResponse = res;
                if (res['hasActiveJob'] == true) {
                    return;
                }
                res['list'].forEach(function (obj) {
                    obj.clntName = ((obj.firstName != undefined) ? obj.firstName : "") + " " + ((obj.lastName != undefined) ? obj.lastName : "");
                    obj.date = _this.datePipe.transform(obj.date, 'dd-MM-yyyy');
                });
                _this.columns = [
                    { name: 'transNum', label: 'Transaction No.' },
                    { name: 'clntId', label: 'Client ID' },
                    { name: 'clntName', label: 'Name' },
                    { name: 'amt', label: 'Recovery Amount' },
                    { name: 'date', label: 'Date' },
                    { name: 'agntId', label: 'Agent ID' },
                    { name: 'valid', label: 'Valid' },
                    { name: 'reason', label: 'Reason' }
                ];
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res['list']);
                _this.displayedColumns = _this.columns.map(function (column) { return column.name; });
            }, function (error) {
                _this.spinner.hide();
                _this.toaster.error("Something Went Wrong");
            });
        }
    };
    FileLoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-loader',
            template: __webpack_require__(/*! ./file-loader.component.html */ "./src/app/pages/admin/file-loader/file-loader.component.html"),
            styles: [__webpack_require__(/*! ./file-loader.component.css */ "./src/app/pages/admin/file-loader/file-loader.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], src_app_shared_services_file_loader_service__WEBPACK_IMPORTED_MODULE_3__["FileLoaderService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], FileLoaderComponent);
    return FileLoaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/journel-voucher/journel-voucher.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin/journel-voucher/journel-voucher.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  tr.example-detail-row {\r\n    height: 0;\r\n    line-height: 1;\r\n\r\n  }\r\n  \r\n  .example-element-detail {\r\n    overflow: hidden;\r\n    display: flex;\r\n  }\r\n  \r\n  tr.mat-header-row {\r\n    height: 0px;\r\n}\r\n  \r\n  tr.mat-row {\r\n  height: 0px;\r\n}\r\n  \r\n  .mat-cell, .mat-footer-cell {\r\n  color: rgba(0,0,0,.87);\r\n  font-size: 0.750rem;\r\n}\r\n  \r\n  /*.trx-table td:last-child {\r\n text-align: center;\r\n}\r\n*/\r\n  \r\n  .td-right{\r\n  text-align: center;\r\n}\r\n  \r\n  .table .thead-light th:last-child {\r\n  text-align: center;\r\n}\r\n  \r\n  .table .thead-light th:first-child {\r\n  text-align: center;\r\n}\r\n  \r\n  .table .thead-light>th {\r\n  padding: .45rem 0rem;\r\n}\r\n  \r\n  th.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n  \r\n  .mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n  \r\n  th.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n  \r\n  .mat-cell, .mat-footer-cell {\r\n  font-size: 13px;\r\n}\r\n  \r\n  td,th{\r\n  padding-left: 16px !important;\r\n  width: 11% !important;\r\n}\r\n  \r\n  td:first-child, th:first-child{\r\n  padding-left: 16px !important;\r\n}\r\n  \r\n  .w-20{\r\n  width: 20% !important;\r\n}\r\n  \r\n  th{\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}"

/***/ }),

/***/ "./src/app/pages/admin/journel-voucher/journel-voucher.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/admin/journel-voucher/journel-voucher.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar-admin></app-left-side-bar-admin>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\" *ngIf=\"journelVouchersArray?.length>0\">\r\n              <div class=\"mysearchbox\" (click)=\"showField()\" *ngIf=\"!showFields\">\r\n                <h6 class=\"d-inline-block searchshow\" style=\"cursor: pointer;\">Journel Vouchers\r\n                  <i class=\"fa fa-search\"> </i>\r\n                </h6>\r\n              </div>\r\n              <div class=\"mysearch\" *ngIf=\"showFields\">\r\n                <form (ngSubmit)=\"applyFilter(searchVal)\" #searchForm=\"ngForm\">\r\n                  <div class=\"col-sm-10\" style=\"float:left;\">\r\n                    <mat-form-field *ngIf=\"showFields\">\r\n                      <input id=\"searchBox\" (keyup)=\"searchValue()\" autofocus matInput name=\"searchValue\"\r\n                        [(ngModel)]=\"searchVal\" placeholder=\"Search\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-sm-2\" style=\"float:right;\">\r\n                    <button class=\"btn btn-primary btn-lg\" type=\"submit\">Search</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <form [formGroup]=\"branchForm\" (ngSubmit)=\"onSubmitBranchForm()\">\r\n                <ng-select *ngIf=\"auth.role != 'bm'\" [items]=\"branchs\" required (change)=\"onSelectBranch($event)\"\r\n                  bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                  formControlName=\"branch\">\r\n                </ng-select>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"table\" multiTemplateDataRows matSort\r\n              matSortDirection=\"asc\" matSortDisableClear>\r\n              <ng-container matColumnDef=\"jvId\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.jvId}} </td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"jvDt\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.jvDt | date :'dd-MM-yyyy'}} </td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"jvDscr\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Description</th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.jvDscr}} </td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"entyTyp\">\r\n                <th class=\"td-center\" mat-header-cell *matHeaderCellDef mat-sort-header>Type </th>\r\n                <td class=\"td-center\" mat-cell *matCellDef=\"let element\"> {{element.entyTyp}} </td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"entySeq\">\r\n                <th class=\"td-center\" mat-header-cell *matHeaderCellDef>Entity Sequence </th>\r\n                <td class=\"td-center\" mat-cell *matCellDef=\"let element\"> {{element.entySeq}}\r\n                </td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"expandedDetail\">\r\n                <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\r\n                  <div class=\"table-responsive\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\r\n                    <table class=\"table\">\r\n                      <tr>\r\n                        <th>ID</th>\r\n                        <th>Ledger Account</th>\r\n                        <th>Ledger Account Desc.</th>\r\n                        <th>Description</th>\r\n                        <th>Debit</th>\r\n                        <th>Credit</th>\r\n                        <!-- <th>Amount</th> -->\r\n                      </tr>\r\n                      <tr *ngFor=\"let voucher of element.JVoucherDetials\">\r\n                        <td>{{voucher.jvDtlSeq}}</td>\r\n                        <td>{{voucher.generalLedgerAcct}}</td>\r\n                        <td>{{voucher.ledgerAcctDesc}}</td>\r\n                        <td>{{voucher.dscr}}</td>\r\n                        <td><span *ngIf=\"voucher.crdtDbtFlg == 1\">{{voucher.amt}}</span></td>\r\n                        <td><span *ngIf=\"voucher.crdtDbtFlg == 0\">{{voucher.amt}}</span></td>\r\n                        <!-- <td>{{voucher.amt}}</td> -->\r\n                      </tr>\r\n                      <tr>\r\n                        <td style=\" background-color: white; \"></td>\r\n                        <td style=\" background-color: white; \"></td>\r\n                        <td style=\" background-color: white; \"></td>\r\n                        <td><b>Total:</b></td>\r\n                        <td><b>{{element.creditTotal}}</b></td>\r\n                        <td><b>{{element.debitTotal}}</b></td>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                </td>\r\n              </ng-container>\r\n              <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\" class=\"thead-light thead-blue\"></tr>\r\n              <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\r\n                [class.example-expanded-row]=\"expandedElement === element\" (click)=\"expandFunction(element)\">\r\n              </tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n            </table>\r\n            <mat-paginator [length]=\"datalength\" [pageSizeOptions]=\"[15]\" [pageSize]=\"limit\" (page)=\"changePage($event)\">\r\n            </mat-paginator>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/admin/journel-voucher/journel-voucher.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin/journel-voucher/journel-voucher.component.ts ***!
  \**************************************************************************/
/*! exports provided: JournelVoucherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JournelVoucherComponent", function() { return JournelVoucherComponent; });
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/recovery.service */ "./src/app/shared/services/recovery.service.ts");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
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











var JournelVoucherComponent = /** @class */ (function () {
    function JournelVoucherComponent(toaster, recoveryService, spinner, fb, transfersService, commonService) {
        this.toaster = toaster;
        this.recoveryService = recoveryService;
        this.spinner = spinner;
        this.fb = fb;
        this.transfersService = transfersService;
        this.commonService = commonService;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.role = this.auth.role;
        this.filters = [];
        this.columnsToDisplay = ['jvId', 'jvDt', 'jvDscr', 'entyTyp', 'entySeq'];
        this.searchVal = "";
        this.limit = 15;
        this.skip = 0;
        this.totalLength = 0;
        this.pageIndex = 0;
        this.pageLimit = [];
        this.filterValue = "";
        this.datalength = 0;
        this.jvs = [];
        this.lastPageIndex = 0;
        this.onBranchSelection = false;
        this.isCount = true;
        this.showFields = false;
    }
    JournelVoucherComponent.prototype.applyFilter = function (filterValue) {
        this.filterValue = filterValue;
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.datalength = this.countBeforeFilter;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            return;
        }
        this.getFilteredData(filterValue.trim().toLowerCase());
    };
    JournelVoucherComponent.prototype.searchValue = function () {
        var _this = this;
        this.filterValue = this.searchVal.trim();
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            this.datalength = 0;
            setTimeout(function () { _this.datalength = _this.countBeforeFilter; }, 200);
            return;
        }
    };
    JournelVoucherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.branchForm = this.fb.group({
            branch: [this.auth.emp_branch],
        });
        if (this.auth.role != 'bm' && this.auth.role != 'bdo') {
            this.toaster.info('Please Select Branch', 'Information');
            this.commonService.getBrnchsForUsr().subscribe(function (res) {
                _this.branchs = res;
                console.log(res);
            });
        }
        else {
            this.onSelectBranch();
        }
    };
    JournelVoucherComponent.prototype.onSelectBranch = function () {
        var _this = this;
        this.isCount = true;
        this.journelVouchersArray = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.journelVouchersArray);
        this.paginator.pageIndex = 0;
        this.dataSource.paginator = this.paginator;
        this.lastPageIndex = 0;
        this.searchVal = '';
        this.filterValue = '';
        if (this.branchForm.controls['branch'].value == null || this.branchForm.controls['branch'].value == 0) {
            this.onBranchSelection = false;
            this.journelVouchersArray = [];
            this.dataSource = null;
            this.datalength = 0;
            this.searchVal = '';
            return;
        }
        setTimeout(function () { _this.spinner.show(); }, 10);
        this.recoveryService.getJounrelVoucher(this.branchForm.controls['branch'].value, this.paginator.pageIndex, 15, "", this.isCount).subscribe((function (data) {
            _this.journelVouchersArray = data.jvHdr;
            _this.spinner.hide();
            if (_this.journelVouchersArray.length <= 0 && _this.auth.role != 'bm' && _this.branchForm.controls['branch'].value != 0) {
                _this.toaster.info('No Data Found Against This Branch', 'Information');
            }
            ;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.journelVouchersArray);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = data.count;
            _this.dataBeforeFilter = _this.dataSource.data;
            _this.countBeforeFilter = data.count;
            _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
        }), function (error) {
            console.log(error);
            _this.spinner.hide();
        });
    };
    JournelVoucherComponent.prototype.onSubmitBranchForm = function () {
        console.log(this.branchForm.value);
    };
    JournelVoucherComponent.prototype.ngAfterViewInIt = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.changePage(); }))
            .subscribe();
    };
    // ngAfterViewInIt() {
    //   this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    //   merge(this.sort.sortChange, this.paginator.page)
    //     .pipe(
    //       tap(() => this.getJounrelVoucher())
    //     )
    //     .subscribe();
    // }
    JournelVoucherComponent.prototype.expandFunction = function (element) {
        var _this = this;
        if (this.expandedElement === element) {
            this.expandedElement = null;
        }
        else {
            this.recoveryService.getJournelVoucherDetails(element.jvHdrSeq).subscribe(function (d) {
                element.JVoucherDetials = d;
                _this.expandedElement = element;
                console.log(d);
                element.creditTotal = 0;
                element.debitTotal = 0;
                d.forEach(function (dtl) {
                    (dtl.crdtDbtFlg == "1") ? element.creditTotal = +element.creditTotal + +dtl.amt : element.debitTotal = +element.debitTotal + +dtl.amt;
                });
            });
        }
    };
    JournelVoucherComponent.prototype.showField = function () {
        this.showFields = true;
    };
    // changePage(event) {
    //   console.log('event', event)
    //   // if (event.pageSize !== this.limit) {
    //   //   this.limit = event.pageSize;
    //   //   this.skip = event.pageSize * event.pageIndex;
    //   //   this.pageIndex = event.pageIndex
    //   //   this.limit = event.pageSize;
    //   //   this.getJounrelVoucher(true);
    //   // } else {
    //   //   if (this.totalLength > this.dataSource.data.length) {
    //   //     //if(this.pageIndex < event.pageIndex){
    //   //     // next page
    //   //     this.skip = event.pageSize * event.pageIndex;
    //   //     this.pageIndex = event.pageIndex
    //   //     this.limit = event.pageSize;
    //   //     this.getJounrelVoucher(true);
    //   //   }
    //   // }
    //   if (event.pageIndex < event.previousPageIndex)
    //     return
    //   if (event.length == this.dataSource.data.length)
    //     return;
    //   if (((event.pageIndex + 1) * event.pageSize) - this.dataSource.data.length > 0) {
    //     this.getJounrelVoucher(event.pageIndex, event.pageSize, event.previousPageIndex);
    //   }
    // }
    // public getJounrelVoucher(pageIndex, pageSize, previousPageIndex) {
    //   this.recoveryService.getJournelVoucherPaged(pageIndex, pageSize, this.filterValue).subscribe((data => {
    //     let jv = this.dataSource.data;
    //     jv.concat(data.content);
    //     this.dataSource = new MatTableDataSource(data.content);
    //     if (this.filterValue.length == 0) {
    //       this.dataBeforeFilter = this.dataSource.data;
    //       this.countBeforeFilter = data.totalElements;
    //       this.lastPageIndexBeforeFilter = previousPageIndex;
    //     }
    //   }));
    // }
    // dataBeforeFilter; countBeforeFilter; lastPageIndexBeforeFilter;
    // getFilteredData(filterValue) {
    //   this.spinner.show();
    //   this.paginator.pageIndex = 0;
    //   this.spinner.show();
    //   this.recoveryService.getJournelVoucherPaged(this.paginator.pageIndex, this.paginator.pageSize, filterValue).subscribe((data) => {
    //     this.spinner.hide();
    //     this.jvs = data.content;
    //     this.dataSource = new MatTableDataSource(data.content);
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //     this.totalLength = 0;
    //     setTimeout(() => { this.totalLength = data.totalElements; }, 200);
    //   }, (error) => {
    //     this.spinner.hide();
    //     console.log('err All Loans Service');
    //     console.log('err', error);
    //   });
    // }
    JournelVoucherComponent.prototype.changePage = function () {
        var _this = this;
        this.isCount = false;
        setTimeout(function () { _this.spinner.show(); }, 10);
        if (this.paginator.pageIndex < this.lastPageIndex)
            return;
        if (this.dataSource.paginator.length == this.dataSource.data.length)
            return;
        if (((this.paginator.pageIndex + 1) * this.paginator.pageSize) - this.dataSource.data.length > 0) {
            this.recoveryService.getJounrelVoucher(this.branchForm.controls['branch'].value, this.paginator.pageIndex, this.paginator.pageSize, this.filterValue, this.isCount).subscribe(function (data) {
                _this.journelVouchersArray = data.jvHdr;
                _this.lastPageIndex = _this.lastPageIndex + 1;
                _this.dataSource.data = _this.dataSource.data.concat(data.jvHdr);
                _this.spinner.hide();
                data.count = _this.datalength;
                _this.datalength = 0;
                setTimeout(function () { _this.datalength = data.count; }, 200);
                if (_this.filterValue.length == 0) {
                    _this.dataBeforeFilter = _this.dataSource.data;
                    _this.countBeforeFilter = data.count;
                    _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
                }
            }, function (error) {
                _this.spinner.hide();
                console.log('err All Jv Vorcher Service');
                console.log('err', error);
            });
        }
    };
    JournelVoucherComponent.prototype.getFilteredData = function (filterValue) {
        var _this = this;
        this.isCount = true;
        setTimeout(function () { _this.spinner.show(); }, 10);
        this.paginator.pageIndex = 0;
        this.lastPageIndex = 0;
        this.recoveryService.getJounrelVoucher(this.branchForm.controls['branch'].value, this.paginator.pageIndex, this.paginator.pageSize, filterValue, this.isCount).subscribe(function (data) {
            _this.journelVouchersArray = data.jvHdr;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.journelVouchersArray);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.totalLength = 0;
            _this.datalength = data.count;
            if (_this.journelVouchersArray.length <= 0 && _this.branchForm.controls['branch'].value != 0) {
                _this.toaster.info('No Data Found Against This Search', 'Information');
            }
            ;
            _this.spinner.hide();
        }, function (error) {
            _this.spinner.hide();
            console.log('err All Loans Service');
            console.log('err', error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], JournelVoucherComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], JournelVoucherComponent.prototype, "paginator", void 0);
    JournelVoucherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-journel-voucher',
            template: __webpack_require__(/*! ./journel-voucher.component.html */ "./src/app/pages/admin/journel-voucher/journel-voucher.component.html"),
            styles: [__webpack_require__(/*! ./journel-voucher.component.css */ "./src/app/pages/admin/journel-voucher/journel-voucher.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"],
            _shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_8__["RecoveryService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__["TransfersService"],
            src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_0__["CommonService"]])
    ], JournelVoucherComponent);
    return JournelVoucherComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/landing/landing.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/admin/landing/landing.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/landing/landing.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/admin/landing/landing.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <div >\r\n          <app-left-side-bar-admin></app-left-side-bar-admin>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</main>"

/***/ }),

/***/ "./src/app/pages/admin/landing/landing.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/admin/landing/landing.component.ts ***!
  \**********************************************************/
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
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/pages/admin/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/pages/admin/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/portfolio/portfolio.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/admin/portfolio/portfolio.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/portfolio/portfolio.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/admin/portfolio/portfolio.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar-admin></app-left-side-bar-admin>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Portfolio <i class=\"fa fa-search\"> </i></h6>\r\n                <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 addBtn\">\r\n              <!-- <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" (click)=\"addItem()\"><i class=\"fa fa-plus\"></i>\r\n                Add</button> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <!-- <ul class=\"infolist\">\r\n              <li>Branch ID: <span>{{clickBranch}}</span></li>\r\n              <li>Branch Name: <span>{{branchName}}</span></li>\r\n            </ul> -->\r\n            <table class=\"table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>Portfolio ID</th>\r\n                  <th>Portfolio Name</th>\r\n                  <th>Status</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let portfolio of pagedItems\">\r\n                  <td>{{portfolio.portCd}}</td>\r\n                  <td>{{portfolio.portNm}}</td>\r\n                  <td>{{findValueByKeyStatus(portfolio.portStsKey)}}</td>\r\n                  <td>\r\n                    <!-- <a class=\"iconBtn\" data-toggle=\"modal\" (click)=\"openTabAssignment(portfolio.portSeq)\"><i\r\n                        class=\"fa fa-tablet\"></i></a>\r\n                    <a class=\"iconBtn\" (click)=\"portfolioFun(portfolio.portSeq, portfolio.portNm)\">\r\n                      <i data-toggle=\"modal\" class=\"fa fa-users\"></i></a>\r\n                    <a href=\"#\" class=\"iconBtn\" data-toggle=\"modal\"\r\n                      (click)=\"AssignLocation(portfolio.portSeq, portfolio.brnchSeq)\"><img\r\n                        src=\"assets/images/pin-icon.png\" alt=\"\"></a> -->\r\n                    <a (click)=\"UserAssignment(portfolio.portSeq)\" class=\"iconBtn\"><i class=\"fa fa-user\"></i></a>\r\n                    <!--<a href=\"#\" class=\"iconBtn marker\"><i class=\"fa fa-map-marker\"></i></a>-->\r\n                    <!-- <a (click)=\"editItem(portfolio.portSeq)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                    <a (click)=\"deleteItem(portfolio.portSeq)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a> -->\r\n                    <!-- <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a> -->\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- <div class=\"back\"> <a routerLink=\"\"\r\n              class=\"btn btn-primary btn-min\"><i class=\"fa fa-chevron-left\"></i> Back</a> </div> -->\r\n          <nav aria-label=\"Page navigation \">\r\n            <ul class=\"pagination justify-content-center\" *ngIf=\"pager.pages && pager.pages.length\">\r\n              <li class=\"page-item disabled\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n              </li>\r\n              <li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                <a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n              </li>\r\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<div class=\"modal fade\" id=\"AssignLocation\" role=\"dialog\">\r\n  <div class=\"modal-dialog bigger mymodal\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Assign Location </h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"AssignLocationForm\" (ngSubmit)=\"onAssignLocationSubmit()\">\r\n\r\n        <div class=\"modal-body\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table last-left\" id=\"myTable\">\r\n              <thead class=\"thead-light last-left\">\r\n                <tr>\r\n                  <th></th>\r\n                  <th>Province</th>\r\n                  <th>District</th>\r\n                  <th>Tehseel</th>\r\n                  <th width=\"20%\">UC</th>\r\n                  <th>City</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n\r\n                <tr *ngFor=\"let assign of AssignLocationValue\">\r\n                  <td><input type=\"checkbox\" [checked]=\"assign.checked\" [id]=\"'check-'+assign.city\"\r\n                      value=\"{{assign.city}}\" (click)=\"changeRadioStatus($event)\"></td>\r\n                  <td>{{assign.provinceName}}</td>\r\n                  <td>{{assign.districtName}}</td>\r\n                  <td>{{assign.tehsilName}}</td>\r\n                  <td>{{assign.ucName}}</td>\r\n                  <td>{{assign.cityName}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"modal-footer text-center pt-0\">\r\n          <button class=\"btn btn-primary\">Ok</button>\r\n          <!-- <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button> -->\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"UserAssignment\" role=\"dialog\">\r\n  <div class=\"modal-dialog mymodal bigger\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Employee Assignment</h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"employeeAssignmentForm\" (ngSubmit)=\"onemployeeAssignmentSubmit()\">\r\n        <div class=\"modal-body pt-0\" style=\"overflow:visible\">\r\n          <div class=\"pt-1 pb-2\">\r\n            <h6 class=\"colorBlack small mb-0 pt-1\"><b>Position</b></h6>\r\n          </div>\r\n          <div class=\"borderbox p-2 pb-3\">\r\n            <div class=\"userfields\">\r\n              <div class=\"cRow vrbp0\">\r\n                <div class=\"cCol4\">\r\n                  <!-- <label>BDO</label> -->\r\n\r\n                  <!-- <ng-select autoCorrect [items]=\"userList\" required bindLabel=\"empNm\"\r\n                    bindValue=\"empNm && empLanId\" name=\"genderKey\" placeholder=\"BDO\" formControlName=\"regionManager\">\r\n                  </ng-select> -->\r\n\r\n\r\n                  <ng-select [items]=\"userList\" bindValue=\"empSeq\" bindLabel=\"empNm\" placeholder=\"BDO\"\r\n                    formControlName=\"regionManager\" [searchFn]=\"customSearchFn\">\r\n                    <ng-template ng-option-tmp let-item=\"item\">\r\n                      {{item.empNm}} <br />\r\n                      <small>{{item.empLanId}}</small>\r\n                    </ng-template>\r\n                  </ng-select>\r\n\r\n                  <!-- <mat-form-field>\r\n                    <mat-select placeholder=\"BDO\" formControlName=\"regionManager\" name=\"genderKey\">\r\n                      <mat-option *ngFor=\"let edu of userList\" [value]=\"edu.empSeq\">\r\n                        {{edu.empNm}} ({{edu.empLanId}})\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field> -->\r\n                  <!-- <select formControlName=\"regionManager\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select> -->\r\n                  <!--<div style=\"width: 50%;\"> \t\r\n                             <input formControlName=\"regionManager\" (keydown)=\"search($event, 'regionManager')\" type=\"text\"  class=\"form-control\" placeholder=\"Asad Khan\">\r\n                             <ul *ngIf=\"regionManager\" style=\"position: absolute;z-index: 999;background-color:#fff; width:16%;border:1px solid #999999;padding: 5px;\">\r\n                             <li *ngFor=\"let search of regionManager\" (click)=\"serchSelected(search.empSeq, 'regionManager')\" style=\"width: 100%;\">{{search.empNm}}</li>\r\n                             </ul>\r\n                             </div>-->\r\n                  <!-- <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a> -->\r\n                </div>\r\n                <div class=\"cCol2\" style=\"display:none;\">\r\n                  <!-- <label>Covering Employee</label> -->\r\n                  <!-- <ng-select autoCorrect [items]=\"userList\" required bindLabel=\"empLanId\" bindValue=\"empLanId\"\r\n                    name=\"genderKey\" placeholder=\"Covering Employee\" formControlName=\"coveringRegManager\">\r\n                  </ng-select> -->\r\n\r\n                  <ng-select [items]=\"userList\" bindValue=\"empSeq\" bindLabel=\"empNm\" placeholder=\"Covering Employee\"\r\n                    formControlName=\"coveringRegManager\" [searchFn]=\"customSearchF\">\r\n                    <ng-template ng-option-tmp let-item=\"item\">\r\n                      {{item.empNm}} <br />\r\n                      <small>{{item.empLanId}}</small>\r\n                    </ng-template>\r\n                  </ng-select>\r\n\r\n                  <!-- <mat-form-field>\r\n                    <mat-select placeholder=\"Covering Employee\" formControlName=\"coveringRegManager\" name=\"genderKey\">\r\n                      <mat-option *ngFor=\"let edu of userList\" [value]=\"edu.empSeq\">\r\n                        {{edu.empNm}} ({{edu.empLanId}})\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field> -->\r\n                  <!-- <select formControlName=\"coveringRegManager\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select> -->\r\n                  <!--<div style=\"width: 50%;\"> \t\t\r\n                             <input formControlName=\"coveringRegManager\"  value=\"\" (keydown)=\"search($event, 'coveringRegManager')\" type=\"text\" class=\"form-control\" placeholder=\"Asad Khan\">\r\n                              <ul *ngIf=\"coveringRegManager\" style=\"position: absolute;z-index: 999;background-color:#fff; width:16%;border:1px solid #999999;padding: 5px;\">\r\n                             <li *ngFor=\"let search of coveringRegManager\" (click)=\"serchSelected(search.empSeq, 'coveringRegManager')\" style=\"width: 100%;\">{{search.empNm}}</li>\r\n                             </ul>\r\n                             </div>-->\r\n                  <!-- <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a> -->\r\n                </div>\r\n                <div class=\"cCol4 date2\" style=\"display:none;\">\r\n                  <div class=\"input-group date mr-1\">\r\n                    <mat-form-field>\r\n                      <input matInput [matDatepicker]=\"picker1\" placeholder=\"From Date:\"\r\n                        formControlName=\"coveringRegManagerDateFrom\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                      <mat-datepicker startView=\"year\" #picker1></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <!-- <input formControlName=\"coveringRegManagerDateFrom\" type=\"date\" class=\"form-control\" placeholder=\"To Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div> -->\r\n                  </div>\r\n                  <div class=\"input-group date\">\r\n\r\n                    <mat-form-field>\r\n                      <input matInput [matDatepicker]=\"picker2\" placeholder=\"To Date:\"\r\n                        formControlName=\"coveringRegManagerDateTo\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                      <mat-datepicker startView=\"year\" #picker2></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <!-- <input type=\"date\" formControlName=\"coveringRegManagerDateTo\" class=\"form-control\" placeholder=\"From Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"cRow vrbp0\">\r\n                <div class=\"cCol5 inlincbox\">\r\n                  <label>Clerk</label>\r\n                  <select formControlName=\"clerk\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                </div>\r\n                <div class=\"cCol5 inlincbox\">\r\n                  <label>Covering Employee</label>\r\n                  <select formControlName=\"coveringClerk\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                </div>\r\n                <div class=\"cCol1 date2\">\r\n                  <div class=\"input-group date mr-1\">\r\n                    <input type=\"date\" formControlName=\"coveringClerkDateFrom\" class=\"form-control\" placeholder=\"To Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"input-group date\">\r\n                    <input formControlName=\"coveringClerkDateTo\" type=\"date\" class=\"form-control\" placeholder=\"From Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"cRow vrbp0\">\r\n                <div class=\"cCol5 inlincbox\">\r\n                  <label>Accountant</label>\r\n                  <select formControlName=\"manager\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                </div>\r\n                <div class=\"cCol5 inlincbox\">\r\n                  <label>Covering Employee</label>\r\n                  <select formControlName=\"coveringManager\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                </div>\r\n                <div class=\"cCol1 date2\">\r\n                  <div class=\"input-group date mr-1\">\r\n                    <input formControlName=\"coveringManagerDateFrom\" type=\"date\" class=\"form-control\" placeholder=\"To Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"input-group date\">\r\n                    <input formControlName=\"coveringManagerDateTo\" type=\"date\" class=\"form-control\" placeholder=\"From Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer text-center pb-3\">\r\n            <button class=\"btn btn-primary\">Ok</button>\r\n            <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"AssignTablet\" role=\"dialog\">\r\n  <div class=\"modal-dialog big mymodal\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Assign Tablet</h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"AssignTabletForm\">\r\n        <div class=\"modal-body\" style=\"padding-top:4em\">\r\n\r\n          <div class=\"row\">\r\n            <!-- <div class=\"cCol2\">\r\n                <label>Bank Name:</label>\r\n  \r\n                <select class=\"form-control\" formControlName=\"bankName\" [ngClass]=\"{ 'is-invalid': submitted && a.bankName.errors }\">\r\n                  <option *ngFor=\"let edu of banks\" [value]=\"edu.codeKey\">{{edu.codeValue}}</option>\r\n                </select>\r\n              </div> -->\r\n            <div class=\"col-sm-1\">\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <!-- <label>Bank Branch:</label>\r\n                <input (keypress)=\"keyPressText($event)\" type=\"text\" class=\"form-control\" formControlName=\"bankBranch\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && a.bankBranch.errors }\"> -->\r\n              <mat-form-field>\r\n                <input [readonly]=\"hasDvc\" type=\"text\" matInput formControlName=\"dvcAddr\" placeholder=\"Device Unique Id\"\r\n                  name=\"dvcAddr\" minlength=\"16\" maxlength=\"16\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <mat-form-field>\r\n                <input [readonly]=\"hasDvc\" type=\"text\" matInput formControlName=\"crtdBy\" placeholder=\"Identifier\"\r\n                  name=\"identifier\" maxlength=\"30\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-1\">\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <button *ngIf=\"hasDvc\" (click)=\"unregisterDevice()\" type=\"button\" mat-stroked-button\r\n                color=\"warn\">Un-Register Device</button>\r\n              <button *ngIf=\"!hasDvc\" (click)=\"registerDevice()\" type=\"button\" mat-stroked-button\r\n                color=\"primary\">Register Device</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-1\"></div>\r\n            <!-- <div class=\"col-sm-1\" *ngIf=\"\"></div> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"AddPortfolio\" role=\"dialog\">\r\n  <div class=\"modal-dialog mymodal\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Add Portfolio</h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"portfolioForm\" (ngSubmit)=\"onPortfolioSubmit()\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\" *ngIf=\"editPortfolio\">\r\n            <div class=\"cCol2\">\r\n              <ng-select [items]=\"regions\" required bindLabel=\"regNm\" bindValue=\"regSeq\" name=\"regNm\"\r\n                placeholder=\"Select Region:\" formControlName=\"regionSeq\" (change)=\"regionChange()\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <ng-select [items]=\"areas\" required bindLabel=\"areaNm\" bindValue=\"areaSeq\" name=\"areaNm\"\r\n                placeholder=\"Select Area:\" formControlName=\"areaSeq\" (change)=\"areaChange()\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <ng-select [items]=\"branches\" required bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\"\r\n                placeholder=\"Select Branch:\" formControlName=\"branchSeq\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol3-col\">\r\n              <label>Portfolio Name:</label>\r\n              <input (keypress)=\"keyPressText($event)\" type=\"text\" class=\"form-control\" formControlName=\"portfolioName\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.portfolioName.errors }\" />\r\n            </div>\r\n            <div class=\"cCol3-col\">\r\n              <label>Status:</label>\r\n              <select class=\"form-control\" formControlName=\"portfolioStatus\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.portfolioStatus.errors }\">\r\n                <option *ngFor=\"let status of statusListing\" value=\"{{status.codeKey}}\">{{status.codeValue}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"submitted && f.portfolioName.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n          <i class=\"fa fa-exclamation-circle\"></i>\r\n          <strong *ngIf=\"f.portfolioName.errors\">Please Enter Portfolio Name</strong>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button class=\"btn btn-primary\">Ok</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/portfolio/portfolio.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/admin/portfolio/portfolio.component.ts ***!
  \**************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/data.service */ "./src/app/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(router, DataService, formBuilder, toaster, spinner) {
        this.router = router;
        this.DataService = DataService;
        this.formBuilder = formBuilder;
        this.toaster = toaster;
        this.spinner = spinner;
        //portfolioList: any = [];
        this.clickBranch = JSON.parse(sessionStorage.getItem("auth")).emp_branch;
        this.branchName = sessionStorage.getItem('branchName');
        this.submitted = false;
        // array of all items to be paged
        this.allItems = [];
        // pager object
        this.pager = {};
        // paged items
        this.pagedItems = [];
        // search items
        this.userList = '';
        this.regionManager = '';
        this.coveringRegManager = '';
        this.clerk = '';
        this.coveringClerk = '';
        this.manager = '';
        this.coveringManager = '';
        //status
        this.statusListing = '';
        //location
        this.AssignLocationValue = [];
        this.AssignLocationId = [];
        this.AssignLocationCheckBox = [];
        this.editPortfolio = false;
        this.hasDvc = false;
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portfolioForm = this.formBuilder.group({
            formSaveKey: ['add'],
            branchSeq: [sessionStorage.getItem('clickBranch')],
            portfolioId: ['1'],
            portfolioName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            portfolioStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            regionSeq: [+sessionStorage.getItem('clickorganization')],
            areaSeq: [+sessionStorage.getItem('clickArea')],
        });
        this.AssignTabletForm = this.formBuilder.group({
            entyTypFlg: 1,
            dvcAddr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            entyTypSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            crtdBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        //STATUS LIST
        this.DataService.statusList().subscribe(function (result) {
            _this.statusListing = result;
            console.log(result);
        }, function (error) { return console.log('There was an error: ', error); });
        this.listing(1);
        //userlist
        this.DataService.getAllEmployeeListForBrnch(this.clickBranch, 2).subscribe(function (list) {
            _this.userList = list;
        }, function (error) { return console.log('There was an error: ', error); });
        //emplyee accignment
        this.employeeAssignmentForm = this.formBuilder.group({
            formSaveKey: ['add'],
            parentKey: [sessionStorage.getItem('UserAssignment')],
            regionManager: [''],
            coveringRegManager: [''],
            coveringRegManagerDateFrom: [''],
            coveringRegManagerDateTo: [''],
            clerk: [''],
            coveringClerk: [''],
            coveringClerkDateFrom: [''],
            coveringClerkDateTo: [''],
            manager: [''],
            coveringManager: [''],
            coveringManagerDateFrom: [''],
            coveringManagerDateTo: ['']
        });
        //AssignLocationForm
        this.AssignLocationForm = this.formBuilder.group({
            formSaveKey: ['add'],
            citySeq: [''],
        });
    };
    PortfolioComponent.prototype.listing = function (page) {
        var _this = this;
        // this.DataService.getOrganization().subscribe((data) => {
        // 	console.log(data);
        // 	this.regions = data;
        // }, (error) => {
        // 	console.log("err");
        // 	console.log("err", error);
        // });
        // this.DataService.getArea(sessionStorage.getItem('clickorganization')).subscribe((data) => {
        // 	console.log(data);
        // 	this.areas = data;
        // }, (error) => {
        // 	console.log('err');
        // 	console.log('err', error);
        // });
        // this.DataService.getBranch(sessionStorage.getItem('clickArea')).subscribe((data) => {
        // 	console.log(data);
        // 	this.branches = data;
        // }, (error) => {
        // 	console.log('err');
        // 	console.log('err', error);
        // });
        this.DataService.getPortfolio(JSON.parse(sessionStorage.getItem("auth")).emp_branch).subscribe(function (data) {
            console.log(data);
            _this.allItems = data;
            // initialize to page 1
            _this.setPage(page);
        }, function (error) {
            console.log('err');
            console.log('err', error);
        });
    };
    Object.defineProperty(PortfolioComponent.prototype, "f", {
        get: function () { return this.portfolioForm.controls; },
        enumerable: true,
        configurable: true
    });
    PortfolioComponent.prototype.onPortfolioSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.portfolioForm.invalid) {
            return;
        }
        var formValue = this.portfolioForm.value;
        console.log(formValue);
        if (formValue.formSaveKey === 'add') {
            this.DataService.addPortfolio(formValue).subscribe(function (data) {
                $('#AddPortfolio').modal('hide');
                // this.pagedItems.splice(0, 0, data.port);
                //this.pagedItems.push(data.port);
                // this.allItems.push(data.port);
                // this.setPage(1);
                _this.listing(1);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        else if (formValue.formSaveKey === 'update') {
            this.DataService.updatePortfolio(formValue).subscribe(function (data) {
                $('#AddPortfolio').modal('hide');
                _this.listing(_this.pager.currentPage);
                //this.pagedItems.splice(this.pagedItems.indexOf(data.port['portSeq']), 1);
                //this.pagedItems.push(data.port);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        return false;
    };
    PortfolioComponent.prototype.portfolioFun = function (id, name) {
        sessionStorage.setItem('clickPortfolio', id);
        sessionStorage.setItem('portfolioName', name);
        this.router.navigate(['setup/organization/community', id]);
        //this.router.navigate(['/product-details', id]);
    };
    //pagenation
    PortfolioComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.DataService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    //delete
    PortfolioComponent.prototype.deleteItem = function (passedId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Portfolio?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.DataService.delPortfolio(passedId).subscribe(function (result) {
                    _this.listing(_this.pager.currentPage);
                    //this.pagedItems.splice(this.pagedItems.indexOf(passedId), 1);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Deleted!', 'Portfolio has been deleted.', 'success');
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Deleted!', error.error['error'], 'error');
                    console.log('There was an error: ', error.error['error']);
                });
            }
        });
    };
    PortfolioComponent.prototype.regionChange = function () {
        var _this = this;
        this.DataService.getArea(this.portfolioForm.get('regionSeq').value).subscribe(function (data) {
            console.log(data);
            _this.areas = data;
            _this.portfolioForm.controls['areaSeq'].setValue(null);
            _this.portfolioForm.controls['branchSeq'].setValue(null);
        }, function (error) {
            console.log('err');
            console.log('err', error);
        });
    };
    PortfolioComponent.prototype.areaChange = function () {
        var _this = this;
        this.DataService.getBranch(this.portfolioForm.controls['areaSeq'].value).subscribe(function (data) {
            console.log(data);
            _this.branches = data;
            _this.portfolioForm.controls['branchSeq'].setValue(null);
        }, function (error) {
            console.log('err');
            console.log('err', error);
        });
    };
    //add
    PortfolioComponent.prototype.addItem = function () {
        this.editPortfolio = false;
        this.submitted = false;
        $('#AddPortfolio').modal('show');
        this.portfolioForm = this.formBuilder.group({
            formSaveKey: ['add'],
            branchSeq: [sessionStorage.getItem('clickBranch')],
            portfolioId: ['1'],
            portfolioName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            portfolioStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    //edit
    PortfolioComponent.prototype.editItem = function (passedId) {
        var _this = this;
        this.editPortfolio = true;
        console.log(passedId);
        this.DataService.editPortfolio(passedId).subscribe(function (result) {
            console.log(result);
            console.log(sessionStorage.getItem('clickorganization'));
            console.log(sessionStorage.getItem('clickArea'));
            $('#AddPortfolio').modal('show');
            _this.portfolioForm = _this.formBuilder.group({
                formSaveKey: ['update'],
                portfolioSeq: [result.portSeq],
                branchSeq: [result.brnchSeq],
                portfolioId: [result.portCd],
                portfolioName: [result.portNm],
                portfolioStatus: [result.portStsKey],
                regionSeq: [+sessionStorage.getItem('clickorganization')],
                areaSeq: [+sessionStorage.getItem('clickArea')],
            });
        }, function (error) { return console.log('There was an error: ', error); });
    };
    //UserAssignment
    PortfolioComponent.prototype.UserAssignment = function (passedId) {
        var _this = this;
        this.spinner.show();
        this.employeeAssignmentForm.controls['regionManager'].setValue("");
        this.employeeAssignmentForm.controls['coveringRegManagerDateFrom'].setValue("");
        this.employeeAssignmentForm.controls['coveringRegManagerDateTo'].setValue("");
        this.employeeAssignmentForm.controls['coveringRegManager'].setValue("");
        $('#UserAssignment').modal('show');
        console.log(passedId);
        this.passedId = passedId;
        sessionStorage.setItem('UserAssignment', passedId);
        this.DataService.getUserAssignmentPortfolio(passedId).subscribe(function (result) {
            console.log(result);
            _this.spinner.hide();
            if (result.length) {
                // result[result.length-1].coveringRegManagerDateFrom = result[result.length-1].coveringEmpFromDt;
                // result[result.length-1].coveringRegManagerDateTo = result[result.length-1].coveringEmpToDt;
                // result[result.length-1].coveringRegManager = result[result.length-1].coveringEmpSeq;
                // console.log(result[result.length-1])
                _this.employeeAssignmentForm.controls['regionManager'].setValue(+result[result.length - 1].empSeq);
                _this.employeeAssignmentForm.controls['coveringRegManagerDateFrom'].setValue(result[result.length - 1].coveringEmpFromDt);
                _this.employeeAssignmentForm.controls['coveringRegManagerDateTo'].setValue(result[result.length - 1].coveringEmpToDt);
                _this.employeeAssignmentForm.controls['coveringRegManager'].setValue(result[result.length - 1].coveringEmpSeq);
                console.log(_this.employeeAssignmentForm.controls['regionManager'].value);
            }
            // this.employeeAssignmentForm.controls['regionManager'].setValue(result.regionManager);
            // this.employeeAssignmentForm.controls['clerk'].setValue(result.clerk);
            // this.employeeAssignmentForm.controls['manager'].setValue(result.manager);
        }, function (error) {
            console.log('There was an error: ', error);
            _this.spinner.hide();
        });
    };
    Object.defineProperty(PortfolioComponent.prototype, "s", {
        //sarch start
        get: function () { return this.employeeAssignmentForm.controls; },
        enumerable: true,
        configurable: true
    });
    PortfolioComponent.prototype.onemployeeAssignmentSubmit = function () {
        var _this = this;
        console.log(this.employeeAssignmentForm.value);
        this.submitted = true;
        // stop here if form is invalid
        if (this.employeeAssignmentForm.invalid) {
            return;
        }
        var formValue = this.employeeAssignmentForm.value;
        formValue.parentKey = this.passedId;
        console.log(formValue);
        if (formValue.formSaveKey === 'add') {
            this.DataService.addEmployeePortfolio(formValue).subscribe(function (data) {
                $('#UserAssignment').modal('hide');
                _this.toaster.success("Saved");
                //this.pagedItems.push(data.region);
                console.log(data);
            }, function (error) {
                console.log('err', error);
                if (error.status == 400)
                    _this.toaster.error(error.error.error, "Bad Request");
                else
                    _this.toaster.error("Something Went Wrong");
            });
        }
        else if (formValue.formSaveKey === 'update') {
            this.DataService.updateOrganization(formValue).subscribe(function (data) {
                $('#UserAssignment').modal('hide');
                _this.pagedItems.splice(_this.pagedItems.indexOf(data.region['regSeq']), 1);
                _this.pagedItems.push(data.region);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        return false;
    };
    //search service
    PortfolioComponent.prototype.search = function ($event, field) {
        // search items
        this.regionManager = '';
        this.coveringRegManager = '';
        this.clerk = '';
        this.coveringClerk = '';
        this.manager = '';
        this.coveringManager = '';
        console.log(field);
        var value = $event.target.value;
        console.log(value);
        if (value.length >= 2) {
            // this.DataService.searchPortfolio().subscribe(result => {
            // 	if (field === 'regionManager') {
            // 		this.regionManager = result;
            // 	} else if (field === 'coveringRegManager') {
            // 		this.coveringRegManager = result;
            // 	} else if (field === 'clerk') {
            // 		this.clerk = result;
            // 	} else if (field === 'coveringClerk') {
            // 		this.coveringClerk = result;
            // 	} else if (field === 'manager') {
            // 		this.manager = result;
            // 	} else if (field === 'coveringManager') {
            // 		this.coveringManager = result;
            // 	}
            // 	console.log(result);
            // }, error => console.log('There was an error: ', error));
        }
    };
    PortfolioComponent.prototype.serchSelected = function (Value, field) {
        console.log(field);
        //let formValue: any = this.employeeAssignmentForm.value;
        //emplyee accignment
        if (field === 'regionManager') {
            this.employeeAssignmentForm.controls['regionManager'].setValue(Value);
            this.regionManager = '';
        }
        else if (field === 'coveringRegManager') {
            this.employeeAssignmentForm.controls['coveringRegManager'].setValue(Value);
            this.coveringRegManager = '';
        }
        else if (field === 'clerk') {
            this.employeeAssignmentForm.controls['clerk'].setValue(Value);
            this.clerk = '';
        }
        else if (field === 'coveringClerk') {
            this.employeeAssignmentForm.controls['coveringClerk'].setValue(Value);
            this.coveringClerk = '';
        }
        else if (field === 'manager') {
            this.employeeAssignmentForm.controls['manager'].setValue(Value);
            this.manager = '';
        }
        else if (field === 'coveringManager') {
            this.employeeAssignmentForm.controls['coveringManager'].setValue(Value);
            this.coveringManager = '';
        }
    };
    //update
    PortfolioComponent.prototype.StatusUpdate = function (passedId) {
        var _this = this;
        console.log(passedId);
        this.DataService.StatusUpdatePortfolio(passedId).subscribe(function (result) {
            console.log(result);
            _this.listing(_this.pager.currentPage);
            /*
            this.employeeAssignmentForm.controls['regionManager'].setValue(result.regionManager);
            (<any>$("#Countrycodes")).modal('show');
            this.organizationForm = this.formBuilder.group({
                regionSeq: [result.regSeq],
                regionCode: [""],
                formSaveKey: ['update'],
                            regionName: [result.regNm],
                            regionType: [result.regTyp],
                            regionStatus: [result.regStsKey],
                regionDescription: [result.regDscr],
                regionAddress: [""],
                //regionStatus: ['', Validators.required]
                    });*/
        }, function (error) { return console.log('There was an error: ', error); });
    };
    //AssignLocation
    PortfolioComponent.prototype.AssignLocation = function (passedId, branchId) {
        var _this = this;
        $('#AssignLocation').modal('show');
        console.log(branchId);
        this.AssignLocationId = passedId;
        this.DataService.getAssignLocationPort(branchId).subscribe(function (data) {
            console.log(data);
            _this.AssignLocationValue = data;
            //check already checked
            _this.DataService.getAssignLocationExistPort(passedId).subscribe(function (data) {
                for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
                    var i = _a[_i];
                    console.log(data[i].citySeq);
                    document.getElementById('check-' + data[i].citySeq).checked = true;
                }
                console.log(data);
            }, function (error) {
                console.log('err');
                console.log('err', error);
            });
            // initialize to page 1
            _this.setPage(1);
        }, function (error) {
            console.log('err');
            console.log('err', error);
        });
    };
    PortfolioComponent.prototype.changeRadioStatus = function ($event) {
        var value = $event.target.value;
        var checked = { 'citySeq': value, 'portSeq': this.AssignLocationId };
        if ($event.target.checked === true) {
            this.AssignLocationCheckBox.push(checked);
            console.log(JSON.stringify(this.AssignLocationCheckBox));
            this.AssignLocationForm.controls['citySeq'].setValue(this.AssignLocationCheckBox);
            this.DataService.assignLocationPort(checked).subscribe(function (data) {
                // (<any>$('#AssignLocation')).modal('hide');
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        else {
            this.DataService.removeLocationPort(checked).subscribe(function (data) {
                // (<any>$('#AssignLocation')).modal('hide');
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
            var index_1 = -1;
            var i_1 = 0;
            this.AssignLocationCheckBox.forEach(function (element) {
                i_1++;
                if (element.citySeq == $event.target.value) {
                    index_1 = i_1;
                }
            });
            if (index_1 >= 0) {
                this.AssignLocationCheckBox.splice(index_1);
                this.AssignLocationCheckBox.controls['prdSeq'].setValue(this.AssignLocationCheckBox);
            }
        }
        //console.log(value);
    };
    Object.defineProperty(PortfolioComponent.prototype, "l", {
        //AssignLocationForm
        get: function () { return this.AssignLocationForm.controls; },
        enumerable: true,
        configurable: true
    });
    PortfolioComponent.prototype.onAssignLocationSubmit = function () {
        var _this = this;
        console.log('1');
        this.submitted = true;
        // stop here if form is invalid
        if (this.AssignLocationForm.invalid) {
            return;
        }
        var formValue = this.AssignLocationForm.value;
        console.log(formValue.citySeq);
        if (formValue.formSaveKey === 'add') {
            // this.DataService.AssignLocationPort(formValue.citySeq).subscribe((data) => {
            $('#AssignLocation').modal('hide');
            // 	console.log(data);
            // }, (error) => {
            // 	console.log('err', error);
            // });
        }
        else if (formValue.formSaveKey === 'update') {
            this.DataService.updateOrganization(formValue).subscribe(function (data) {
                $('#UserAssignment').modal('hide');
                _this.pagedItems.splice(_this.pagedItems.indexOf(data.region['regSeq']), 1);
                _this.pagedItems.push(data.region);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        return false;
    };
    PortfolioComponent.prototype.keyPressText = function (event) {
        var pattern = /[a-zA-Z\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    PortfolioComponent.prototype.findValueByKeyStatus = function (key) {
        var status = 'not found';
        this.statusListing.forEach(function (s) {
            if (s.codeKey === key) {
                status = s.codeValue;
            }
        });
        return status;
    };
    PortfolioComponent.prototype.unregisterDevice = function () {
        var _this = this;
        this.spinner.show();
        this.DataService.unregisterDevice(this.AssignTabletForm.value).subscribe(function (res) {
            console.log(res);
            _this.spinner.hide();
            _this.hasDvc = false;
            _this.AssignTabletForm = _this.formBuilder.group({
                entyTypFlg: 1,
                dvcAddr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                entyTypSeq: [_this.AssignTabletForm.value.entyTypSeq, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                crtdBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
            _this.toaster.success(res["body"]);
        }, function (error) {
            _this.spinner.hide();
            console.log(error);
            _this.toaster.error(error.error.error, "Error");
        });
    };
    PortfolioComponent.prototype.registerDevice = function () {
        var _this = this;
        this.spinner.show();
        this.DataService.registerDevice(this.AssignTabletForm.value).subscribe(function (res) {
            console.log(res);
            _this.spinner.hide();
            _this.hasDvc = true;
            _this.toaster.success(res["body"]);
        }, function (error) {
            console.log(error);
            _this.spinner.hide();
            _this.toaster.error(error.error.error, "Error");
        });
    };
    PortfolioComponent.prototype.openTabAssignment = function (key) {
        var _this = this;
        this.spinner.show();
        this.DataService.getDvcRgstrFrTyp(1, key).subscribe(function (res) {
            _this.spinner.hide();
            if (res != null) {
                _this.hasDvc = true;
                _this.AssignTabletForm = _this.formBuilder.group({
                    entyTypFlg: 1,
                    dvcAddr: [res['dvcAddr'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    entyTypSeq: [key, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    crtdBy: [res['crtdBy'], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                });
            }
            else {
                _this.hasDvc = false;
                _this.AssignTabletForm = _this.formBuilder.group({
                    entyTypFlg: 1,
                    dvcAddr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    entyTypSeq: [key, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    crtdBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                });
            }
            $('#AssignTablet').modal('show');
        }, function (error) {
            _this.spinner.hide();
            console.log(error);
        });
    };
    PortfolioComponent.prototype.customSearchFn = function (term, item) {
        term = term.toLowerCase();
        return item.empNm.toLowerCase().indexOf(term) > -1 || item.empLanId.toLowerCase() === term;
    };
    PortfolioComponent.prototype.customSearchF = function (term, item) {
        term = term.toLowerCase();
        return item.empNm.toLowerCase().indexOf(term) > -1 || item.empLanId.toLowerCase() === term;
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/pages/admin/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/pages/admin/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/reschedule/reschedule.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/admin/reschedule/reschedule.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/reschedule/reschedule.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/admin/reschedule/reschedule.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar-admin></app-left-side-bar-admin>      \r\n    </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content\">\r\n            \r\n          <div class=\"row clearfix\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n            <h6 class=\"d-inline-block searchshow\">Reschedule <i class=\"fa fa-search\"> </i></h6>\r\n            <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n              <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by id\" title=\"Type in a name\">\r\n            </div>\r\n          </div>\r\n            </div>\r\n            <div class=\"col-sm-6 addBtn\">\r\n\t\t\t<a class=\"btn btn-primary btn-sm\" href=\"request.html\"><i class=\"fa fa-plus\"></i> Add</a>\t\t\t             \r\n            </div>\r\n          </div>\r\n          \r\n\t \r\n\t\t\t<div class=\"table-responsive mb-md-5\">\r\n\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t<thead class=\"thead-light\">\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>Request ID</th>\r\n\t\t\t\t\t\t\t<th>Description</th>\r\n\t\t\t\t\t\t\t<th>Request Date</th>\r\n\t\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>1</td>\r\n\t\t\t\t\t\t\t<td>Description will be here</td>\r\n\t\t\t\t\t\t\t<td>5/5/2018</td>\r\n\t\t\t\t\t\t\t<td class=\"colorGreen\">Active</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"iconBtn\"><img src=\"assets/images/crose-icon.png\" alt=\"\"></a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"iconBtn\"><img src=\"assets/images/check-icon.png\" alt=\"\"></a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>2</td>\r\n\t\t\t\t\t\t\t<td>Description will be here</td>\r\n\t\t\t\t\t\t\t<td>5/5/2018</td>\r\n\t\t\t\t\t\t\t<td class=\"colorBrown\">Pending</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"iconBtn\"><img src=\"assets/images/crose-icon.png\" alt=\"\"></a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"iconBtn\"><img src=\"assets/images/check-icon.png\" alt=\"\"></a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>3</td>\r\n\t\t\t\t\t\t\t<td>Description will be here</td>\r\n\t\t\t\t\t\t\t<td>5/5/2018</td>\r\n\t\t\t\t\t\t\t<td class=\"colorRed\">In-Active</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"iconBtn\"><img src=\"assets/images/crose-icon.png\" alt=\"\"></a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"iconBtn\"><img src=\"assets/images/check-icon.png\" alt=\"\"></a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>4</td>\r\n\t\t\t\t\t\t\t<td>Description will be here</td>\r\n\t\t\t\t\t\t\t<td>5/5/2018</td>\r\n\t\t\t\t\t\t\t<td class=\"colorGreen\">Active</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"iconBtn\"><img src=\"assets/images/crose-icon.png\" alt=\"\"></a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"iconBtn\"><img src=\"assets/images/check-icon.png\" alt=\"\"></a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>5</td>\r\n\t\t\t\t\t\t\t<td>Description will be here</td>\r\n\t\t\t\t\t\t\t<td>5/5/2018</td>\r\n\t\t\t\t\t\t\t<td class=\"colorBrown\">Pending</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"iconBtn\"><img src=\"assets/images/crose-icon.png\" alt=\"\"></a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"iconBtn\"><img src=\"assets/images/check-icon.png\" alt=\"\"></a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal fade\" id=\"AdjustLoan\" role=\"dialog\">\r\n            <div class=\"modal-dialog smallpop mymodal\"> \r\n              \r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Adjust Credit</h5>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <ul class=\"infolist infolistblock mt-1 mb-1\">\r\n                    <li>Client:   <span>Shabnam</span></li>\r\n                    <li>Address:  <span>Client Address will be placed here.</span></li>\r\n                    <li>Credit Amount:<span>30,000/-</span></li>\r\n\t\t\t\t\t<li>Disbursement Date:  <span> 05/05/2018</span></li>\r\n                    <li>Total Principle :<span> 30,000</span></li>\r\n                    <li>Total Charges : <span>3 0,000</span></li>\r\n                    <li>Remaining Principle : <span> 10,000</span></li>\r\n                    <li>Remaining Charges :  <span>10,000</span></li>\r\n                  </ul>\r\n                  \r\n\t\t\t\t  \r\n\t\t\t\t \r\n\t\t\t\t  \r\n\t\t\t\t  <div class=\"cRow mt-3\">\r\n                  <div class=\"cCol4\">\r\n                    <label>Adjust Principle Amount:</label>\r\n                    <input type=\"text\" class=\"form-control\">\r\n                  </div>\r\n                  <div class=\"cCol4 \">\r\n                    <label>Adjust Charges:</label>\r\n                    <input type=\"text\" class=\"form-control\">\r\n                  </div>\r\n                </div>\r\n                </div>\r\n                <div class=\"modal-footer text-center\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">OK</button>\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\t\t  \r\n\t\t  <div class=\"modal fade\" id=\"ClaimInsurance\" role=\"dialog\">\r\n            <div class=\"modal-dialog smallpop mymodal\"> \r\n              \r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Submit Claim Insurance</h5>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <ul class=\"infolist infolistblock mt-1 mb-1\">\r\n                    <li>Client:   <span>Shabnam</span></li>\r\n                    <li>Address:  <span>Client Address will be placed here.</span></li>\r\n                    <li>Credit Amount:<span>30,000/-</span></li>\r\n\t\t\t\t\t<li>Disbursement Date:  <span> 05/05/2018</span></li>\r\n                    <li>Total Principle :<span> 30,000</span></li>\r\n                    <li>Total Charges : <span>3 0,000</span></li>\r\n                    <li>Remaining Principle : <span> 10,000</span></li>\r\n                    <li>Remaining Charges :  <span>10,000</span></li>\r\n                  </ul>\r\n                  \r\n\t\t\t\t  \r\n\t\t\t\t \r\n\t\t\t\t  \r\n\t\t\t\t  <div class=\"cRow mt-3\">\r\n                  <div class=\"cCol4\">\r\n                    <label>Adjust Principle Amount:</label>\r\n                    <input type=\"text\" class=\"form-control\">\r\n                  </div>\r\n                  <div class=\"cCol4 \">\r\n                    <label>Adjust Charges:</label>\r\n                    <input type=\"text\" class=\"form-control\">\r\n                  </div>\r\n                </div>\r\n                </div>\r\n                <div class=\"modal-footer text-center\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">OK</button>\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\t\t\t\r\n\t\t\t\t<div class=\"modal fade\" id=\"cmmoncodes\" role=\"dialog\">\r\n            <div class=\"modal-dialog mymodal\"> \r\n              \r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Taging</h5>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <ul class=\"infolist infolistblock mt-1 mb-1\">\r\n                    <li>Client:   <span>Shabnam</span></li>\r\n                    <li> Address:  <span>Client Address will be placse here.</span></li>\r\n                    <li> Credit Amount:<span>  30,000/-</span></li>\r\n                  </ul>\r\n                  \r\n\t\t\t\t  <div class=\"checkbox mb-1 mt-4\">\r\n\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\r\n\t\t\t\t\t\t  <input type=\"checkbox\" id=\"checkbox2\" name=\"coBorrower\" class=\"custom-control-input\">\r\n\t\t\t\t\t\t  <label class=\"custom-control-label\" for=\"checkbox2\"> Block List</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"checkbox mb-1\">\r\n\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\r\n\t\t\t\t\t\t  <input type=\"checkbox\" id=\"checkbox3\" name=\"coBorrower\" class=\"custom-control-input\">\r\n\t\t\t\t\t\t  <label class=\"custom-control-label\" for=\"checkbox3\"> Opportunist</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t  </div>\r\n\t\t\t\t  <div class=\"checkbox mb-1\">\r\n\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\r\n\t\t\t\t\t\t  <input type=\"checkbox\" id=\"checkbox4\" name=\"coBorrower\" class=\"custom-control-input\">\r\n\t\t\t\t\t\t  <label class=\"custom-control-label\" for=\"checkbox4\"> Danger</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t  </div>\r\n                </div>\r\n                <div class=\"modal-footer text-center\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">OK</button>\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\t\t  \r\n\t\t  <div class=\"modal fade\" id=\"ReportDeath\" role=\"dialog\">\r\n            <div class=\"modal-dialog mymodal\"> \r\n              \r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Report Death</h5>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <ul class=\"infolist infolistblock mt-1 mb-1\">\r\n                    <li>Client:   <span>Shabnam</span></li>\r\n                    <li> Address:  <span>Client Address will be placse here.</span></li>\r\n                    <li> Credit Amount:<span>  30,000/-</span></li>\r\n                  </ul>\r\n                  \r\n\t\t\t\t  \r\n\t\t\t\t  <div class=\"collapse d-block mt-3\">\r\n               \r\n                <div class=\"custom-control custom-radio custom-control-inline\">\r\n                  <input type=\"radio\" id=\"Client\" name=\"gender\" class=\"custom-control-input\">\r\n                  <label class=\"custom-control-label\" for=\"Client\">Client </label>\r\n                </div>\r\n                <div class=\"custom-control custom-radio custom-control-inline\">\r\n                  <input type=\"radio\" id=\"Nominee\" name=\"gender\" class=\"custom-control-input\">\r\n                  <label class=\"custom-control-label\" for=\"Nominee\">Nominee</label>\r\n                </div>\r\n              </div>\r\n\t\t\t\t  \r\n\t\t\t\t  <div class=\"cRow mt-2\">\r\n\t\t\t\t  <div class=\"cCol3-col\">\r\n                <label>Date of Death:</label>\r\n                <div class=\"input-group date\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                  <div class=\"input-group-append input-group-addon\t\">\r\n                    <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n                  <div class=\"cCol3-col\">\r\n                    <label>Cause of Death:</label>\r\n                    <input type=\"text\" class=\"form-control\">\r\n                  </div>\r\n                  <div class=\"cCol3-col\">\r\n                    <label>Death Certifications:</label>\r\n                    <input type=\"text\" class=\"form-control\">\r\n                  </div>\r\n                </div>\r\n                </div>\r\n                <div class=\"modal-footer text-center\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">OK</button>\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/admin/reschedule/reschedule.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/admin/reschedule/reschedule.component.ts ***!
  \****************************************************************/
/*! exports provided: RescheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RescheduleComponent", function() { return RescheduleComponent; });
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

var RescheduleComponent = /** @class */ (function () {
    function RescheduleComponent() {
    }
    RescheduleComponent.prototype.ngOnInit = function () {
    };
    RescheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reschedule',
            template: __webpack_require__(/*! ./reschedule.component.html */ "./src/app/pages/admin/reschedule/reschedule.component.html"),
            styles: [__webpack_require__(/*! ./reschedule.component.css */ "./src/app/pages/admin/reschedule/reschedule.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RescheduleComponent);
    return RescheduleComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/write-off/write-off.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/admin/write-off/write-off.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n  \r\n  tr.example-detail-row {\r\n    height: 0;\r\n  }\r\n  \r\n  tr.example-element-row:not(.example-expanded-row):hover {\r\n    background: #c0dee7;\r\n  }\r\n  \r\n  tr.example-element-row:not(.example-expanded-row):active {\r\n    background: #efefef;\r\n  }\r\n  \r\n  .example-element-row td {\r\n    border-bottom-width: 0;\r\n  }\r\n  \r\n  .example-element-detail {\r\n    overflow: hidden;\r\n    display: flex;\r\n  }\r\n  \r\n  .example-element-symbol {\r\n    font-weight: bold;\r\n    font-size: 40px;\r\n    line-height: normal;\r\n  }\r\n  \r\n  .example-element-description {\r\n    padding: 16px;\r\n  }\r\n  \r\n  .example-element-description-attribution {\r\n    opacity: 0.5;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/pages/admin/write-off/write-off.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/admin/write-off/write-off.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar-admin></app-left-side-bar-admin>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\" *ngIf=\"allLoans?.length>0 || (this.auth.role == 'bm')\">\r\n              <div class=\"mysearchbox\" (click)=\"showField()\" *ngIf=\"!showFields\">\r\n                <h6 class=\"d-inline-block searchshow\" style=\"cursor: pointer;\">Search\r\n                  <i class=\"fa fa-search\"> </i>\r\n                </h6>\r\n              </div>\r\n              <div class=\"mysearch\" *ngIf=\"showFields\">\r\n                <form (ngSubmit)=\"applyFilter(searchVal)\" #searchForm=\"ngForm\">\r\n                  <div class=\"col-sm-10\" style=\"float:left;\">\r\n                    <mat-form-field *ngIf=\"showFields\">\r\n                      <input id=\"searchBox\" (keyup)=\"searchValue()\" autofocus matInput name=\"searchValue\"\r\n                        [(ngModel)]=\"searchVal\" placeholder=\"Search\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-sm-2\" style=\"float:right;\">\r\n                    <button class=\"btn btn-primary btn-lg\" type=\"submit\">Search</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"mysearch\" >\r\n                <form (ngSubmit)=\"applyFilter(searchVal)\" #searchForm=\"ngForm\">\r\n                  <div class=\"col-sm-10\" style=\"float:left;\">\r\n                    <mat-form-field >\r\n                      <input id=\"searchBox\" (keyup)=\"searchValue()\" autofocus matInput name=\"searchValue\"\r\n                        [(ngModel)]=\"searchVal\" placeholder=\"Search\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-sm-2\" style=\"float:right;\">\r\n                    <button mat-raised-button color=\"primary\" type=\"submit\"\r\n                      style=\" background-color: #76b1e7; height: 31px; margin: 6px; \">Search</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div> -->\r\n\r\n            <div class=\"col-sm-6\">\r\n              <form [formGroup]=\"branchForm\">\r\n                <ng-select *ngIf=\"auth.role != 'bm'\" [items]=\"branchs\" required (change)=\"onSelectBranch($event)\"\r\n                  bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                  formControlName=\"branch\">\r\n                </ng-select>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"table\" multiTemplateDataRows matSort>\r\n\r\n              <!-- Client ID Column -->\r\n              <ng-container matColumnDef=\"clntSeq\">\r\n                <th width=\"14%\" mat-header-cell *matHeaderCellDef mat-sort-header>Client ID</th>\r\n                <td width=\"14%\" mat-cell *matCellDef=\"let clnt\">{{clnt.clntSeq}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Client Column -->\r\n              <ng-container matColumnDef=\"frstNm\">\r\n                <th width=\"14%\" mat-header-cell *matHeaderCellDef mat-sort-header>Client Name</th>\r\n                <td width=\"14%\" mat-cell *matCellDef=\"let clnt\">{{clnt.frstNm}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Product Column -->\r\n              <ng-container matColumnDef=\"prd\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Product</th>\r\n                <td mat-cell *matCellDef=\"let clnt\">{{clnt.prd}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Due Amount Column -->\r\n              <ng-container matColumnDef=\"totalDue\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Due Amount</th>\r\n                <td mat-cell *matCellDef=\"let clnt\">{{clnt.totalDue| currency:'PKR':''}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Total Recoverd Amount Column -->\r\n              <ng-container matColumnDef=\"totalRecv\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Rec. Amount</th>\r\n                <td mat-cell *matCellDef=\"let clnt\"><a\r\n                    (click)=\"showTrxModal(clnt)\">{{clnt.totalRecv| currency:'PKR':''}}</a></td>\r\n              </ng-container>\r\n\r\n              <!-- Remaining Amount Column -->\r\n              <ng-container matColumnDef=\"remaingAmt\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Rem. Amount</th>\r\n                <td mat-cell *matCellDef=\"let clnt\">{{clnt.totalDue - clnt.totalRecv| currency:'PKR':''}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Paid Amount Column -->\r\n              <ng-container matColumnDef=\"rcvdAmt\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Paid Amount</th>\r\n                <td mat-cell *matCellDef=\"let clnt\">{{clnt.rcvdAmt| currency:'PKR':''}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Remaining Amount Column -->\r\n              <ng-container matColumnDef=\"status\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r\n                <td mat-cell *matCellDef=\"let clnt\">\r\n                  {{clnt.totalDue - clnt.totalRecv == 0 ? 'Complete' : (clnt.totalDue - clnt.totalRecv !== 0 ? 'Write Off' : '')}}\r\n                </td>\r\n              </ng-container>\r\n\r\n              <!-- Action Column -->\r\n              <ng-container matColumnDef=\"action\">\r\n                <th width=\"15%\" mat-header-cell *matHeaderCellDef>Action</th>\r\n                <td width=\"15%\" mat-cell *matCellDef=\"let clnt\">\r\n\r\n                  <a (click)=\"openPayModal(clnt)\" class=\"iconBtn\"><img src=\"assets/images/rsgrey-icon.png\" alt=\"\"\r\n                      data-toggle=\"tooltip\" title=\"Pay\"></a>\r\n                  <a (click)=\"openKcrForWriteOff(clnt)\" class=\"iconBtn\" data-toggle=\"tooltip\" title=\"Print KCR\"><img src=\"assets/images/print-icon.png\"\r\n                      alt=\"\"></a>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"thead-light thead-blue\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n\r\n            <mat-paginator [length]=\"datalength\" [pageSizeOptions]=\"[10, 15, 20]\" showFirstLastButtons></mat-paginator>\r\n          </div>\r\n\r\n          <div class=\"modal fade\" id=\"AdjustLoan\" role=\"dialog\">\r\n            <div class=\"modal-dialog fullpop mymodal\">\r\n\r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Transaction Details</h5>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table\" id=\"myTable\">\r\n                      <thead class=\"thead-light\">\r\n                        <tr>\r\n                          <th>Client Sequence</th>\r\n                          <th>Recovery Type</th>\r\n                          <th>Instrument Number</th>\r\n                          <th>Payment Amount</th>\r\n                          <th>Action</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <ng-container *ngFor=\"let item of transactionData\">\r\n                          <tr>\r\n                            <td (click)=\"item.expanded = !item.expanded\">{{item.trx.clntSeq}}</td>\r\n                            <td (click)=\"item.expanded = !item.expanded\">{{item.trx.rcvryTypSeq}}</td>\r\n                            <td (click)=\"item.expanded = !item.expanded\">{{item.trx.instrNum}}</td>\r\n                            <td (click)=\"item.expanded = !item.expanded\">{{item.trx.pymtAmt}}</td>\r\n                            <td>\r\n                              <a *ngIf=\"auth.role == 'admin'\" class=\"iconBtn delBtn\" (click)=\"onSubmitRevertData(item)\"\r\n                                data-toggle=\"tooltip\" title=\"Revert\">\r\n                                <i class=\"fa fa-undo\"></i></a>\r\n                            </td>\r\n                          </tr>\r\n\r\n                          <ng-container *ngIf=\"item.expanded\">\r\n                            <!-- <div class=\"table-responsive\"> -->\r\n                            <!-- <table> -->\r\n                            <!-- <thead class=\"thead-dark\"> -->\r\n                            <tr>\r\n                              <th>Detail Amount</th>\r\n                              <th>Detail Type String</th>\r\n                              <th>Detail Sequence</th>\r\n                              <th>Detail Type Sequence</th>\r\n                              <th></th>\r\n                            </tr>\r\n                            <!-- </thead> -->\r\n                            <tr *ngFor=\"let item of findDetails(item)\">\r\n                              <td> {{item.amt}} </td>\r\n                              <td> {{item.typ_str}} </td>\r\n                              <td> {{item.dtl_seq}} </td>\r\n                              <td> {{checkingTypeSeq(item.typ_seq)}} </td>\r\n                              <td></td>\r\n                            </tr>\r\n                            <!-- </table> -->\r\n                            <!-- </div> -->\r\n                          </ng-container>\r\n\r\n                        </ng-container>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"modal-footer text-center\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"modal fade\" id=\"ApplyPayment\" role=\"dialog\" data-keyboard=\"false\" data-backdrop=\"static\">\r\n            <div class=\"modal-dialog mymodal big\">\r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Apply Payment</h5>\r\n                </div>\r\n                <form [formGroup]=\"applyPayment\" (ngSubmit)=\"onApplyPaymentSubmit()\">\r\n                  <div class=\"modal-body\">\r\n                    <div class=\"cRow\">\r\n                      <input type=\"hidden\" formControlName=\"clientId\" />\r\n                      <div class=\"cCol2\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Client ID:\" formControlName=\"clntId\">\r\n                          <mat-error *ngIf=\"fApplyPayment.clntId.errors?.required\">\r\n                            Client Id <strong>required</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"cCol2\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Client Name:\" formControlName=\"clientNm\">\r\n                          <mat-error *ngIf=\"fApplyPayment.clientNm.errors?.required\">\r\n                            Client Name <strong>required</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"cCol2\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Product:\" formControlName=\"prd\">\r\n                          <mat-error *ngIf=\"fApplyPayment.prd.errors?.required\">\r\n                            branch name is <strong>required</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n\r\n                      <div class=\"cCol2\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Remaining Amount:\" formControlName=\"totalDue\">\r\n                          <mat-error *ngIf=\"fApplyPayment.totalDue.errors?.required\">\r\n                            Amount name is <strong>required</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n\r\n                      <div class=\"cCol2 \">\r\n                        <mat-form-field>\r\n                          <mat-select placeholder=\"Payment Mode:\" (selectionChange)=\"onRecoveryChange()\"\r\n                            formControlName=\"rcvryTypsSeq\" name=\"rcvryTypsSeq\">\r\n                            <mat-option *ngFor=\"let edu of tempInstituteArray\" [value]=\"edu\">\r\n                              {{edu.typStr}}\r\n                            </mat-option>\r\n                          </mat-select>\r\n                          <mat-error *ngIf=\"fApplyPayment.rcvryTypsSeq.errors?.required\">\r\n                            Payment Mode is <strong>required</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"cCol2\" *ngIf=\"!isCash\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Instrument Number:\" formControlName=\"instr\">\r\n                          <mat-error *ngIf=\"fApplyPayment.instr.errors?.required\">\r\n                            instrument number is <strong>required</strong>\r\n                          </mat-error>\r\n                          <mat-error *ngIf=\"fApplyPayment.instr.errors?.maxlength\">\r\n                            instrument number length should be <strong>20 characters</strong>\r\n                          </mat-error>\r\n                          <mat-error *ngIf=\"fApplyPayment.instr.errors?.minlength\">\r\n                            instrument number length should be <strong>20 characters</strong>\r\n                          </mat-error>\r\n                          <mat-error *ngIf=\"fApplyPayment.instr.errors?.pattern\">\r\n                            only number are <strong>allowed</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"cCol2\" *ngIf=\"!isCash\">\r\n                        <mat-form-field>\r\n                          <input matInput required name=\"pymtDt\" [min]=\"minDate\" [max]=\"maxDate\" id=\"pymtDt\"\r\n                            formControlName=\"pymtDt\" disabled readonly placeholder=\"Slip Date:\"\r\n                            [matDatepicker]=\"picker1\">\r\n                          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                          <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                          <mat-error *ngIf=\"fApplyPayment.pymtDt.errors?.required\">\r\n                            Slip Date is <strong>required</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n\r\n                      </div>\r\n                      <div class=\"cCol2\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Payment Amount:\" pattern=\"^-?[\\d]+(?:e-?\\d+)?$\"\r\n                            formControlName=\"pymtAmt\">\r\n                          <mat-error *ngIf=\"fApplyPayment.pymtAmt.errors?.required\">\r\n                            Payment Amount is <strong>required</strong>\r\n                          </mat-error>\r\n                          <mat-error *ngIf=\"fApplyPayment.pymtAmt.errors?.paymtamterror\">\r\n                            Payment Amount cannot <strong>Greater then Remaining Amount</strong>\r\n                          </mat-error>\r\n                          <mat-error *ngIf=\"fApplyPayment.pymtAmt.errors?.pattern\">\r\n                            Payment Amount is <strong>Invalid</strong>\r\n                          </mat-error>\r\n\r\n                        </mat-form-field>\r\n                      </div>\r\n\r\n                      <!-- <div class=\"cCol2\">\r\n          \r\n                        <mat-checkbox class=\"example-margin\" formControlName=\"post\">Post</mat-checkbox>\r\n          \r\n          \r\n                      </div> -->\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"modal-footer text-center\">\r\n                    <button type=\"button\" (click)=\"onApplyPaymentSubmit()\" class=\"btn btn-primary btn-min\"\r\n                      [disabled]=\"!applyPayment.valid || disable\">Ok</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/admin/write-off/write-off.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/admin/write-off/write-off.component.ts ***!
  \**************************************************************/
/*! exports provided: WriteOffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteOffComponent", function() { return WriteOffComponent; });
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/recovery.service */ "./src/app/shared/services/recovery.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var WriteOffComponent = /** @class */ (function () {
    function WriteOffComponent(toaster, recoveryService, fb, transfersService, spinner, commonService) {
        this.toaster = toaster;
        this.recoveryService = recoveryService;
        this.fb = fb;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.commonService = commonService;
        this.expandContent = true;
        this.panelOpenState = false;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.isCash = false;
        this.showFields = false;
        this.allLoans = [];
        this.onBranchSelection = false;
        // dueAmount: any;
        // recoveredAmount: any;
        this.datalength = 0;
        this.lastPageIndex = 0;
        this.filterValue = "";
        this.searchVal = "";
        this.isCount = true;
        this.tempInstituteArray = [];
        this.clnt = {};
        this.disable = false;
    }
    WriteOffComponent.prototype.applyFilter = function (filterValue) {
        this.filterValue = filterValue;
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            // this.dataSource.sort = this.sort;
            this.datalength = this.countBeforeFilter;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            // this.lastPageIndex = 0;
            return;
        }
        this.getFilteredData(filterValue.trim().toLowerCase());
    };
    WriteOffComponent.prototype.searchValue = function () {
        var _this = this;
        this.filterValue = this.searchVal.trim();
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            this.datalength = 0;
            setTimeout(function () { _this.datalength = _this.countBeforeFilter; }, 200);
            return;
        }
    };
    WriteOffComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transactionData = [];
        this.allLoans = [];
        this.applyPayment = this.fb.group({
            branchNm: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            prd: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            clientNm: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            clntId: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            installmentAmountDue: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            rcvryTypsSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            instr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')])],
            pymtDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            pymtAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.validate.bind(this)],
            clientId: [''],
            totalDue: [{ value: '', disabled: true }],
            post: [''],
        });
        this.displayedColumns = ['clntSeq', 'frstNm', 'prd', 'totalDue', 'totalRecv', 'remaingAmt', 'status', 'action'];
        // this.columnsToDisplay = ['Client Sequence', 'Transaction Number', 'Payment Amount', 'Instrument Number'];
        this.columnsToDisplay = ['clntSeq', 'wrtOfRcvryTrxSeq', 'instrNum', 'pymtAmt'];
        // this.displayedColumnsForTransaction = ['clntSeq', 'frstNm', 'prd', 'totalDue', 'totalRecv', 'status', 'action'];
        // this.spinner.show();
        // this.recoveryService.getWrtOffClients(this.auth.emp_branch).subscribe(res => {
        //   console.log(res);
        //   this.spinner.hide();
        //   this.allLoans = res;
        //   this.dataSource = new MatTableDataSource(res);
        //   this.dataSource.paginator = this.paginator;
        //   this.dataSource.sort = this.sort;
        // }, error => {
        //   this.spinner.hide();
        // })
        this.maxDate = new Date();
        // if (this.auth.role == 'bm') {
        //   this.isCount =true;
        //   this.spinner.show();
        //   this.recoveryService.getWrtOffClients(this.auth.emp_branch, this.paginator.pageIndex, 10, "", this.isCount).subscribe(res => {
        //     console.log(res);
        //     this.spinner.hide();
        //     this.allLoans = res.clnts;
        //     // for (let i = 0; i < this.allLoans.length; i++) {
        //     //   this.dueAmount = this.allLoans[i].totalDue;
        //     //   this.recoveredAmount = this.allLoans[i].totalRecv;
        //     // }
        //     this.dataSource = new MatTableDataSource(this.allLoans);
        //     this.dataSource.paginator = this.paginator;
        //     this.dataSource.sort = this.sort;
        //     this.datalength = res.count;
        //     this.dataBeforeFilter = this.dataSource.data;
        //     this.countBeforeFilter = res.count;
        //     this.lastPageIndexBeforeFilter = this.lastPageIndex;
        //   }, (error) => {
        //     this.spinner.hide();
        //     if (error.status == 500) {
        //       this.toaster.error("Something Went Wrong", "Error");
        //     } else if (error) {
        //       this.toaster.error("Something Went Wrong", "Error")
        //     }
        //   });
        //  } else {
        this.allLoans = [];
        //   }
        this.branchForm = this.fb.group({
            branch: [this.auth.emp_branch],
        });
        if (this.auth.role != 'bm' && this.auth.role != 'bdo') {
            this.toaster.info('Please Select Branch', 'Information');
            this.commonService.getBrnchsForUsr().subscribe(function (res) {
                _this.branchs = res;
                console.log(res);
            });
        }
        else {
            this.onSelectBranch();
        }
    };
    // statusOfWriteOf(status) {
    //   let a = '';
    //   if(status == 1){
    //   }
    // }
    WriteOffComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.loadSelectBranch(); }))
            .subscribe();
    };
    WriteOffComponent.prototype.openKcrForWriteOff = function (clnt) {
        this.recoveryService.getPostedReport(clnt.clntSeq, 0).subscribe(function (response) {
            var binaryData = [];
            binaryData.push(response);
            var fileURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
            window.open(fileURL, '_blank');
        });
    };
    WriteOffComponent.prototype.postedReport = function (trx) {
    };
    WriteOffComponent.prototype.onSelectBranch = function () {
        var _this = this;
        this.isCount = true;
        this.allLoans = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.allLoans);
        this.paginator.pageIndex = 0;
        this.dataSource.paginator = this.paginator;
        this.lastPageIndex = 0;
        this.searchVal = '';
        this.filterValue = '';
        if (this.branchForm.controls['branch'].value == null || this.branchForm.controls['branch'].value == 0) {
            this.onBranchSelection = false;
            this.dataSource = null;
            this.datalength = 0;
            return;
        }
        this.onBranchSelection = true;
        setTimeout(function () { _this.spinner.show(); }, 10);
        this.recoveryService.getWrtOffClientsBranchWise(this.branchForm.controls['branch'].value, this.paginator.pageIndex, 10, "", this.isCount).subscribe(function (data) {
            _this.allLoans = data.clnts;
            setTimeout(function () { _this.spinner.hide(); }, 5);
            if (_this.allLoans.length <= 0 && _this.auth.role != 'bm' && _this.branchForm.controls['branch'].value != 0) {
                _this.toaster.info('No Data Found Against This Branch', 'Information');
            }
            ;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.allLoans);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = data.count;
            _this.dataBeforeFilter = _this.dataSource.data;
            _this.countBeforeFilter = data.count;
            _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
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
    WriteOffComponent.prototype.loadSelectBranch = function () {
        var _this = this;
        this.isCount = false;
        setTimeout(function () { _this.spinner.show(); }, 10);
        if (this.paginator.pageIndex < this.lastPageIndex)
            return;
        if (this.dataSource.paginator.length == this.dataSource.data.length)
            return;
        if (((this.paginator.pageIndex + 1) * this.paginator.pageSize) - this.dataSource.data.length > 0) {
            this.recoveryService.getWrtOffClientsBranchWise(this.branchForm.controls['branch'].value, this.paginator.pageIndex, this.paginator.pageSize, this.filterValue, this.isCount).subscribe(function (data) {
                _this.spinner.hide();
                _this.allLoans = data.clnts;
                _this.lastPageIndex = _this.lastPageIndex + 1;
                _this.dataSource.data = _this.dataSource.data.concat(_this.allLoans);
                data.count = _this.datalength;
                _this.datalength = 0;
                setTimeout(function () { _this.datalength = data.count; }, 200);
                if (_this.filterValue.length == 0) {
                    _this.dataBeforeFilter = _this.dataSource.data;
                    _this.countBeforeFilter = data.count;
                    _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
                }
            }, function (error) {
                _this.spinner.hide();
                console.log('err Write Off Clnts Service');
                console.log('err', error);
            });
        }
    };
    WriteOffComponent.prototype.getFilteredData = function (filterValue) {
        var _this = this;
        this.isCount = true;
        this.paginator.pageIndex = 0;
        setTimeout(function () { _this.spinner.show(); }, 10);
        this.recoveryService.getWrtOffClientsBranchWise(this.branchForm.controls['branch'].value, this.paginator.pageIndex, this.paginator.pageSize, filterValue, this.isCount).subscribe(function (data) {
            _this.allLoans = data.clnts;
            _this.spinner.hide();
            if (_this.allLoans.length <= 0 && _this.branchForm.controls['branch'].value != 0) {
                _this.toaster.info('No Data Found Against This Search', 'Information');
            }
            ;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.allLoans);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = data.count;
        }, function (error) {
            _this.spinner.hide();
            console.log('err Write Off Clnts Service');
            console.log('err', error);
        });
    };
    WriteOffComponent.prototype.showField = function () {
        this.showFields = true;
    };
    WriteOffComponent.prototype.closeField = function () {
        this.showFields = false;
    };
    WriteOffComponent.prototype.openPayModal = function (clnt) {
        var _this = this;
        this.spinner.show();
        console.log(clnt);
        this.clnt = clnt;
        this.recoveryService.getWrtOfClntRecoveryTypes(clnt.clntSeq).subscribe(function (data) {
            _this.tempInstituteArray = data;
            _this.disable = false;
            _this.spinner.hide();
        }, function (error) {
            _this.spinner.hide();
            _this.disable = false;
            if (error.status == 500) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
            else if (error) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
        });
        // this.recovery = null;
        // this.recovery = recovery;
        this.applyPayment.reset();
        this.applyPayment.controls['clntId'].setValue(clnt.clntSeq);
        this.applyPayment.controls['clientId'].setValue(clnt.clntSeq);
        this.applyPayment.controls['clientNm'].setValue(clnt.frstNm);
        this.applyPayment.controls['prd'].setValue(clnt.prd);
        this.applyPayment.controls['totalDue'].setValue(clnt.totalDue - clnt.totalRecv);
        $('#ApplyPayment').modal('show');
    };
    WriteOffComponent.prototype.showTrxModal = function (clnt) {
        var _this = this;
        console.log(clnt);
        if (clnt.totalRecv == 0) {
            this.toaster.warning('No Data Found', 'Warning');
            return;
        }
        var data;
        this.spinner.show();
        this.recoveryService.getWrtOffTrxForClient(clnt.clntSeq).subscribe(function (res) {
            _this.transactionData = res;
            $('#AdjustLoan').modal('show');
            _this.spinner.hide();
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
    WriteOffComponent.prototype.findDetails = function (item) {
        return item.dtl;
    };
    WriteOffComponent.prototype.checkingTypeSeq = function (typ_seq) {
        var a;
        if (typ_seq == -1) {
            a = 'Principal';
        }
        else if (typ_seq == -2) {
            a = 'Insurance';
        }
        else {
            a = typ_seq;
        }
        return a;
    };
    WriteOffComponent.prototype.onSubmitRevertData = function (item) {
        var _this = this;
        var branchSeq;
        if (this.auth.role == 'bm') {
            branchSeq = this.auth.emp_branch;
        }
        else {
            branchSeq = this.branchForm.controls['branch'].value;
        }
        console.log(item.trx.wrtOfRcvryTrxSeq);
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to Revert?',
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#007bff',
            confirmButtonText: 'Yes, Post it!'
        }).then(function (result) {
            if (result.value) {
                _this.spinner.show();
                _this.recoveryService.revertWrtOffClient(item.trx.wrtOfRcvryTrxSeq).subscribe(function (res) {
                    _this.recoveryService.getWrtOffTrxForClient(item.trx.clntSeq).subscribe(function (res) {
                        _this.isCount = true;
                        _this.allLoans = [];
                        _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.allLoans);
                        _this.paginator.pageIndex = 0;
                        _this.dataSource.paginator = _this.paginator;
                        _this.lastPageIndex = 0;
                        _this.searchVal = '';
                        _this.filterValue = '';
                        _this.onSelectBranch();
                        _this.transactionData = res;
                    });
                    _this.spinner.hide();
                    _this.toaster.success('Reverted Sucessfully', 'Success');
                }, function (error) {
                    _this.spinner.hide();
                    if (error.status == 500) {
                        _this.toaster.error("Something Went Wrong", "Error");
                    }
                    else if (error) {
                        _this.toaster.error("Something Went Wrong", "Error");
                    }
                });
            }
        });
    };
    Object.defineProperty(WriteOffComponent.prototype, "fApplyPayment", {
        get: function () {
            return this.applyPayment.controls;
        },
        enumerable: true,
        configurable: true
    });
    WriteOffComponent.prototype.validate = function (control) {
        var pymtAmt = control;
        var totalDue = control.parent.get('totalDue');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(pymtAmt.value > totalDue.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) { return result ? { paymtamterror: true } : null; }));
    };
    WriteOffComponent.prototype.onApplyPaymentSubmit = function () {
        var _this = this;
        this.disable = true;
        var branchSeq;
        if (this.auth.role == 'bm') {
            branchSeq = this.auth.emp_branch;
        }
        else {
            branchSeq = this.branchForm.controls['branch'].value;
        }
        console.log(this.branchForm.controls['branch'].value);
        console.log(branchSeq);
        this.spinner.show();
        console.log(this.applyPayment.value);
        var obj = this.applyPayment.getRawValue();
        obj.rcvryTypsSeq = this.applyPayment.controls['rcvryTypsSeq'].value.typSeq;
        obj.rcvryTypId = this.applyPayment.controls['rcvryTypsSeq'].value.typId;
        // obj.brnchSeq = JSON.parse(sessionStorage.getItem("auth")).emp_branch;
        obj.brnchSeq = branchSeq;
        this.recoveryService.applyWrtOffClntPayment(obj).subscribe(function (res) {
            console.log(res);
            $('#ApplyPayment').modal('hide');
            _this.disable = false;
            _this.isCount = true;
            _this.allLoans = [];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.allLoans);
            _this.paginator.pageIndex = 0;
            _this.dataSource.paginator = _this.paginator;
            _this.lastPageIndex = 0;
            _this.searchVal = '';
            _this.filterValue = '';
            _this.loadSelectBranch();
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
    WriteOffComponent.prototype.onRecoveryChange = function () {
        var pymtDt = this.applyPayment.get('pymtDt');
        var instr = this.applyPayment.get('instr');
        if (this.applyPayment.get('rcvryTypsSeq').value.typId === '0001') {
            this.isCash = true;
            pymtDt.setValue(null);
            instr.setValue("");
            pymtDt.clearValidators();
            instr.clearValidators();
        }
        else {
            this.isCash = false;
            instr.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]+$')]));
            pymtDt.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        }
        pymtDt.updateValueAndValidity();
        instr.updateValueAndValidity();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], WriteOffComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], WriteOffComponent.prototype, "paginator", void 0);
    WriteOffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-write-off',
            template: __webpack_require__(/*! ./write-off.component.html */ "./src/app/pages/admin/write-off/write-off.component.html"),
            styles: [__webpack_require__(/*! ./write-off.component.css */ "./src/app/pages/admin/write-off/write-off.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ height: '0px', minHeight: '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_2__["RecoveryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_9__["TransfersService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_0__["CommonService"]])
    ], WriteOffComponent);
    return WriteOffComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/access-recovery.model.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/models/access-recovery.model.ts ***!
  \********************************************************/
/*! exports provided: AccessRecovery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessRecovery", function() { return AccessRecovery; });
var AccessRecovery = /** @class */ (function () {
    function AccessRecovery() {
    }
    return AccessRecovery;
}());



/***/ }),

/***/ "./src/app/shared/models/app-dto.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/app-dto.model.ts ***!
  \************************************************/
/*! exports provided: AppDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDto", function() { return AppDto; });
var AppDto = /** @class */ (function () {
    function AppDto() {
    }
    return AppDto;
}());



/***/ }),

/***/ "./src/app/shared/models/client-health-insurance-claim.model.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/models/client-health-insurance-claim.model.ts ***!
  \**********************************************************************/
/*! exports provided: ClientHealthInsuranceClaim */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientHealthInsuranceClaim", function() { return ClientHealthInsuranceClaim; });
var ClientHealthInsuranceClaim = /** @class */ (function () {
    // End by Zohaib Asim
    function ClientHealthInsuranceClaim() {
    }
    return ClientHealthInsuranceClaim;
}());



/***/ }),

/***/ "./src/app/shared/services/access-recovery.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/access-recovery.service.ts ***!
  \************************************************************/
/*! exports provided: AccessRecoveryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessRecoveryService", function() { return AccessRecoveryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_Api_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Api.model */ "./src/app/shared/models/Api.model.ts");
/* harmony import */ var _models_expense_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/expense.model */ "./src/app/shared/models/expense.model.ts");
/* harmony import */ var _models_paymentType_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/paymentType.model */ "./src/app/shared/models/paymentType.model.ts");
/* harmony import */ var _paymentTypes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paymentTypes.service */ "./src/app/shared/services/paymentTypes.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AccessRecoveryService = /** @class */ (function () {
    function AccessRecoveryService(http, paymentTypesService, spinner, toaster) {
        this.http = http;
        this.paymentTypesService = paymentTypesService;
        this.spinner = spinner;
        this.toaster = toaster;
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_3__["ApiModel"]();
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.exp = new _models_expense_model__WEBPACK_IMPORTED_MODULE_4__["Expense"]();
        this.temp = new _models_paymentType_model__WEBPACK_IMPORTED_MODULE_5__["PaymentType"]();
        this.token = 'Bearer ' + sessionStorage.getItem('token');
    }
    // getAccessRecoveries(): Observable<AccessRecovery[]> {
    //   return this.http.get<AccessRecovery[]>(this.apiModel.host + '/setupservice/api/get-access-rcvry/' + this.auth.emp_branch, { headers: this.apiModel.httpHeaderGet }).pipe(
    //     tap((p: AccessRecovery[]) => console.log(p))
    //   );
    // }
    // getAccessRecoveriesManually(branchSeq): Observable<AccessRecovery[]> {
    //   return this.http.get<AccessRecovery[]>(this.apiModel.host + '/setupservice/api/get-access-rcvry/' + branchSeq, { headers: this.apiModel.httpHeaderGet }).pipe(
    //     tap((p: AccessRecovery[]) => console.log(p))
    //   );
    // }
    AccessRecoveryService.prototype.getAccessRecoveriesManually = function (branchSeq, pageIndex, pageSize, filter, isCount) {
        return this.http.get(this.apiModel.host + '/setupservice/api/get-access-rcvry?branchSeq=' + branchSeq + '&pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&filter=' + filter + '&isCount=' + isCount, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    AccessRecoveryService.prototype.addExcessRecoveryManually = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/add-excess-manuly/' + this.auth.emp_branch, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    AccessRecoveryService.prototype.reverseExcessRecovery = function (seq, cmnt) {
        return this.http.get(this.apiModel.host + '/recoverydisbursementservice/api/reverse-excess-recovery/' + seq + '/' + cmnt, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    AccessRecoveryService.prototype.validateClients = function (clntSeq) {
        return this.http.get(this.apiModel.host + '/loanservice/api/get-clnt-for-brnch/' + this.auth.emp_branch, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    AccessRecoveryService.prototype.addAccessRecoveryRecordInExpense = function (accessRecovery) {
        var _this = this;
        this.temp.typId = '0005';
        this.temp.typCtgryKey = 2;
        this.temp.brnchSeq = 0;
        this.paymentTypesService.getTypeByIdAndCtgry(this.temp).subscribe(function (d) {
            _this.temp = d;
            console.log(_this.temp);
            _this.exp.pymtTypSeq = +accessRecovery.paymentMode['typSeq'];
            _this.exp.brnchSeq = +accessRecovery.branchSeq;
            _this.exp.expnsDscr = _this.temp.typStr;
            _this.exp.instrNum = accessRecovery.insturmentNum;
            _this.exp.expnsAmt = accessRecovery.accessAmount;
            _this.exp.expnsStsKey = 200;
            _this.exp.expnsTypSeq = _this.temp.typSeq;
            _this.exp.expRef = accessRecovery.txId;
            _this.exp.pymtRctFlg = 1;
            _this.http.post(_this.apiModel.host + '/setupservice/api/add-new-exp', _this.exp, { headers: _this.apiModel.httpHeaderPost }).subscribe(function (res) {
                _this.toaster.success('Excess Recovery Paid', 'Success');
            }, function (error) {
                _this.spinner.hide();
                if (error.status == 500) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
                else if (error) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
            });
        });
    };
    AccessRecoveryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _paymentTypes_service__WEBPACK_IMPORTED_MODULE_6__["PaymentTypesService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], AccessRecoveryService);
    return AccessRecoveryService;
}());



/***/ }),

/***/ "./src/app/shared/services/anml.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/anml.service.ts ***!
  \*************************************************/
/*! exports provided: AnmlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnmlService", function() { return AnmlService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Api_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Api.model */ "./src/app/shared/models/Api.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnmlService = /** @class */ (function () {
    function AnmlService(http) {
        this.http = http;
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_1__["ApiModel"]();
        this.token = 'Bearer ' + sessionStorage.getItem('token');
    }
    AnmlService.prototype.getAnmlList = function (clntSeq) {
        return this.http.get(this.apiModel.host + '/adminservice/api/clnts-anml-list/' + clntSeq, { headers: this.apiModel.httpHeaderGet });
    };
    AnmlService.prototype.addAnmlDeath = function (data) {
        return this.http.post(this.apiModel.host + '/adminservice/api/report-anml-death', data, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])());
    };
    AnmlService.prototype.getAnmlInsuranceClaims = function () {
        return this.http.get(this.apiModel.host + '/adminservice/api/anml-dth-rpt', { headers: this.apiModel.httpHeaderGet });
    };
    AnmlService.prototype.updateAnmlInsuranceClaims = function (seq, sts, rmrks) {
        return this.http.get(this.apiModel.host + '/adminservice/api/mark-dth-rpt-sts/' + seq + '/' + sts + '/' + rmrks, { headers: this.apiModel.httpHeaderGet });
    };
    AnmlService.prototype.postAnimalLoanAdjust = function (anmlRgstrSeq, sts, amt) {
        return this.http.get(this.apiModel.host + '/adminservice/api/mark-dth-rpt-adj/' + anmlRgstrSeq + '/' + sts + '/' + amt, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (p) { console.log(p); }));
    };
    AnmlService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AnmlService);
    return AnmlService;
}());



/***/ }),

/***/ "./src/app/shared/services/client-health-insurance-claim.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/services/client-health-insurance-claim.service.ts ***!
  \**************************************************************************/
/*! exports provided: ClientHealthInsuranceClaimService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientHealthInsuranceClaimService", function() { return ClientHealthInsuranceClaimService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_Api_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Api.model */ "./src/app/shared/models/Api.model.ts");
/* harmony import */ var _models_expense_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/expense.model */ "./src/app/shared/models/expense.model.ts");
/* harmony import */ var _paymentTypes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paymentTypes.service */ "./src/app/shared/services/paymentTypes.service.ts");
/* harmony import */ var _models_paymentType_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/paymentType.model */ "./src/app/shared/models/paymentType.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClientHealthInsuranceClaimService = /** @class */ (function () {
    function ClientHealthInsuranceClaimService(http, paymentTypesService) {
        this.http = http;
        this.paymentTypesService = paymentTypesService;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_3__["ApiModel"]();
        this.exp = new _models_expense_model__WEBPACK_IMPORTED_MODULE_4__["Expense"]();
        this.temp = new _models_paymentType_model__WEBPACK_IMPORTED_MODULE_6__["PaymentType"]();
        this.token = 'Bearer ' + sessionStorage.getItem('token');
    }
    // getClientHealthInsuranceClaims(): Observable<ClientHealthInsuranceClaim[]> {
    //   return this.http.get<ClientHealthInsuranceClaim[]>(this.apiModel.host + '/setupservice/api/all-mw-hlth-insr-clm/'+this.auth.user.username , {headers:this.apiModel.httpHeaderGet}).pipe(
    //     tap((p: ClientHealthInsuranceClaim[]) => console.log(p))
    //   );
    // }
    // Modified by Zohaib Asim - Dated 16-12-2020 - Health Claim Type added as parameter
    ClientHealthInsuranceClaimService.prototype.getClientHealthInsuranceClaims = function (brnchSeq, hlthClmType, pageIndex, pageSize, filter, isCount) {
        return this.http.get(this.apiModel.host + '/setupservice/api/all-mw-hlth-insr-clm?userId=' + this.auth.user.username + '&brnchSeq=' + brnchSeq + '&hlthClmType=' + hlthClmType + '&pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&filter=' + filter + '&isCount=' + isCount, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    ClientHealthInsuranceClaimService.prototype.addClientHealthInsuranceClaim = function (ClientHealthInsuranceClaim) {
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-hlth-insr-clm', ClientHealthInsuranceClaim, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log("Add ClientHealthInsuranceClaim"); }));
    };
    ClientHealthInsuranceClaimService.prototype.isClaimPaid = function (seq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/is-claim-paid/' + seq, { headers: this.apiModel.httpHeaderGet });
    };
    ClientHealthInsuranceClaimService.prototype.updateClientHealthInsuranceClaim = function (ClientHealthInsuranceClaim) {
        this.addClientHealthInsuranceClaimRecordInExpense(ClientHealthInsuranceClaim);
        return this.http.put(this.apiModel.host + '/setupservice/api/update-hlth-insr-clm', ClientHealthInsuranceClaim, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    ClientHealthInsuranceClaimService.prototype.addClientHealthInsuranceClaimRecordInExpense = function (ClientHealthInsuranceClaim) {
        var _this = this;
        // Added by Zohaib Asim - Dated 23-12-2020
        // Type Id will be as per selection
        if (ClientHealthInsuranceClaim.hlthClmTyp == 1) {
            // KSZB CLAIM PAYABLE
            this.temp.typId = '0343';
        }
        else if (ClientHealthInsuranceClaim.hlthClmTyp == 2) {
            // KSZB ISLAMIC CLAIM PAYABLE
            this.temp.typId = '16226';
        }
        else if (ClientHealthInsuranceClaim.hlthClmTyp == 3) {
            // KC CLAIM PAYABLE
            this.temp.typId = '16227';
        }
        // End by Zohaib Asim
        this.temp.typCtgryKey = 2;
        this.temp.brnchSeq = 0;
        return this.paymentTypesService.getTypeByIdAndCtgry(this.temp).subscribe(function (d) {
            _this.temp = d;
            _this.exp.pymtTypSeq = parseInt(ClientHealthInsuranceClaim.paymentMode);
            _this.exp.brnchSeq = ClientHealthInsuranceClaim.brnchSeq;
            _this.exp.expnsDscr = _this.temp.typStr;
            _this.exp.instrNum = ClientHealthInsuranceClaim.insturmentNum;
            _this.exp.expnsAmt = ClientHealthInsuranceClaim.clmAmt;
            _this.exp.expnsStsKey = 200;
            _this.exp.expnsTypSeq = _this.temp.typSeq;
            _this.exp.pymtRctFlg = 1;
            _this.exp.expRef = ClientHealthInsuranceClaim.clntHlthClmSeq;
            _this.http.post(_this.apiModel.host + '/setupservice/api/add-new-exp', _this.exp, { headers: _this.apiModel.httpHeaderPost }).subscribe();
        });
    };
    ClientHealthInsuranceClaimService.prototype.deleteClientHealthInsuranceClaim = function (id) {
        return this.http.delete(this.apiModel.host + '/setupservice/api/mw-hlth-insr-clm/' + id, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log("Delete ClientHealthInsuranceClaim"); }));
    };
    ClientHealthInsuranceClaimService.prototype.getClientName = function (clntSeq) {
        console.log("called");
        return this.http.get(this.apiModel.host + '/setupservice/api/get-client-name/' + clntSeq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    ClientHealthInsuranceClaimService.prototype.getAllClientName = function () {
        console.log("called");
        return this.http.get(this.apiModel.host + '/setupservice/api/get-all-client-name/', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    ClientHealthInsuranceClaimService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _paymentTypes_service__WEBPACK_IMPORTED_MODULE_5__["PaymentTypesService"]])
    ], ClientHealthInsuranceClaimService);
    return ClientHealthInsuranceClaimService;
}());



/***/ }),

/***/ "./src/app/shared/services/donor-tagging.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/donor-tagging.service.ts ***!
  \**********************************************************/
/*! exports provided: DonorTaggingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorTaggingService", function() { return DonorTaggingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_Api_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Api.model */ "./src/app/shared/models/Api.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DonorTaggingService = /** @class */ (function () {
    function DonorTaggingService(http, toastr, spinner) {
        this.http = http;
        this.toastr = toastr;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_4__["ApiModel"]();
    }
    DonorTaggingService.prototype.postFiltersDonorTagging = function (arr) {
        return this.http.post(this.apiModel.host + '/adminservice/api/filter-donor-list', arr, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { console.log(p); }));
    };
    DonorTaggingService.prototype.getDistrict = function (id) {
        return this.http.get(this.apiModel.host + "/setupservice/api/get-dists-by-state/" + 1, { headers: this.apiModel.httpHeaderGet });
    };
    DonorTaggingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]])
    ], DonorTaggingService);
    return DonorTaggingService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-admin-admin-module.js.map