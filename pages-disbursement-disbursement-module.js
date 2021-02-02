(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-disbursement-disbursement-module"],{

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

/***/ "./src/app/pages/disbursement/AuthGuard.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/disbursement/AuthGuard.service.ts ***!
  \*********************************************************/
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
            if (screen.modUrl.indexOf("disbursement") >= 0) {
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

/***/ "./src/app/pages/disbursement/agency/agency.component.css":
/*!****************************************************************!*\
  !*** ./src/app/pages/disbursement/agency/agency.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/disbursement/agency/agency.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/disbursement/agency/agency.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <app-voucher-info></app-voucher-info>\r\n    <app-bread-crumb></app-bread-crumb>\r\n    <div class=\"content\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6 \">\r\n          <h6 class=\"colorBlack\">Advance Payment</h6>\r\n        </div>\r\n        <div class=\"col-sm-6 addBtn mb-2\">\r\n          <button class=\"btn btn-primary btn-sm\" (click)=\"openAddVoucher()\">\r\n            <i class=\"fa fa-plus\"></i> Add</button>\r\n          <div class=\"modal fade\" id=\"addVoucher\" role=\"dialog\">\r\n            <div class=\"modal-dialog mymodal\">\r\n\r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Agency Info</h5>\r\n                </div>\r\n                <form class=\"md-float-material\" [formGroup]=\"agencyForm\" (ngSubmit)=\"onSubmit()\" >\r\n                  <div class=\"modal-body\">\r\n                    <div class=\"cRow\">\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <mat-select placeholder=\"Payment Mode\"  formControlName=\"pymtTypSeq\"\r\n                                      [errorStateMatcher]=\"matcher\">\r\n                            <mat-option  *ngFor=\"let code of paymentModes\" [value]=\"code.typSeq\">\r\n                              {{code.typStr}}\r\n                            </mat-option>\r\n                          </mat-select>\r\n                          <mat-error *ngIf=\"!agencyForm.get('pymtTypSeq').valid\">\r\n                            Payment Mode is <strong>required</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Instruement No:\" formControlName=\"instrNum\"\r\n                                 [errorStateMatcher]=\"matcher\">\r\n                          <mat-error *ngIf=\"!agencyForm.get('instrNum').valid\">\r\n                            Instruement Number is <strong>required</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"amount:\" formControlName=\"amt\"\r\n                                 [errorStateMatcher]=\"matcher\">\r\n                          <mat-error *ngIf=\"!agencyForm.get('amt').valid\">\r\n                            Amount is <strong>required</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"modal-footer text-center\">\r\n                    <button type=\"submit\" class=\"btn btn-primary\">Ok</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-responsive mb-md-5\">\r\n        <table class=\"table order-list\"  id=\"myTable\">\r\n          <thead class=\"thead-light\">\r\n          <tr>\r\n            <th>Payment Mode</th>\r\n            <th>Instruement No.</th>\r\n            <th>Amount</th>\r\n            <th>Action</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let code of allItems\">\r\n            <td><select class=\"form-control tbl-form\" readonly [(ngModel)]=\"code.pymtTypSeq\">\r\n              <option *ngFor=\"let code of paymentModes\" [value]=\"code.typSeq\">{{code.typStr}}</option>\r\n            </select>\r\n            </td>\r\n            <td><input type=\"text\" readonly value=\"{{code.instrNum}}\" class=\"form-control tbl-form\"></td>\r\n            <td><input type=\"text\" readonly value=\"{{code.amt}}\" class=\"form-control tbl-form\"></td>\r\n            <td>\r\n              <a (click)=\"editVoucher(code)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n              <a (click)=\"deleteItem(code)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n              <a class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n            </td>\r\n          </tr>\r\n          <!-- <tr>\r\n            <td><select class=\"form-control tbl-form\">\r\n              <option value=\"\">Cheque</option>\r\n              <option value=\"\">Easy Pay</option>\r\n            </select>\r\n            </td>\r\n            <td><input type=\"text\" placeholder=\"2132456\" class=\"form-control tbl-form\"></td>\r\n            <td><input type=\"text\" placeholder=\"20,000\" class=\"form-control tbl-form\"></td>\r\n            <td><a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n              <a (click)=\"deleteItem(12)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n              <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a></td>\r\n          </tr> -->\r\n          </tbody>\r\n          <tbody>\r\n          <tr class=\"total-info\">\r\n            <td></td>\r\n            <td class=\"text-right\"><b>Total Amount:</b></td>\r\n            <td><input type=\"text\" class=\"form-control small\" value=\"{{totalAmount}}/-\"></td>\r\n            <td>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n\r\n\r\n\r\n        </table>\r\n      </div>\r\n      <button class=\"btn btn-primary\" routerLink=\"/disbursement/voucher\">Continue</button>\r\n      <button class=\"btn btn-default\">Save</button>\r\n    </div>\r\n  </div>\r\n</main>\r\n\r\n<script>\r\n  $('.date').datepicker({\r\n    //format: ‘dd/mm/yyyy’;\r\n  });\r\n  $('#rowadd').click(function () {\r\n    $('.addrow').show();\r\n  });\r\n\r\n\r\n  $(document).ready(function () {\r\n    var counter = 0;\r\n\r\n    $(\"#addrow\").on(\"click\", function () {\r\n      var newRow = $(\"<tr>\");\r\n      var cols = \"\";\r\n\r\n      cols += '<td><select class=\"form-control tbl-form\"><option value=\"\">Cheque</option><option value=\"\">Cash</option></select></td>';\r\n      cols += ' <td><input type=\"text\" placeholder=\"\" class=\"form-control tbl-form\"></td>';\r\n      cols += ' <td><input type=\"text\" placeholder=\"\" class=\"form-control tbl-form\"></td>';\r\n\r\n      cols += '<td><a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a> <a href=\"#\" class=\"iconBtn ibtnDel delBtn\"><i class=\"fa fa-trash-o\"></i></a> <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a></td>';\r\n      newRow.append(cols);\r\n      $(\"table.order-list\").append(newRow);\r\n      counter++;\r\n    });\r\n\r\n\r\n\r\n    $(\"table.order-list\").on(\"click\", \".ibtnDel\", function (event) {\r\n      $(this).closest(\"tr\").remove();\r\n      counter -= 1\r\n    });\r\n\r\n  });\r\n  function calculateRow(row) {\r\n    var price = +row.find('input[name^=\"price\"]').val();\r\n\r\n  }\r\n  function calculateGrandTotal() {\r\n    var grandTotal = 0;\r\n    $(\"table.order-list\").find('input[name^=\"price\"]').each(function () {\r\n      grandTotal += +$(this).val();\r\n    });\r\n    $(\"#grandtotal\").text(grandTotal.toFixed(2));\r\n  }\r\n\r\n</script>\r\n"

/***/ }),

/***/ "./src/app/pages/disbursement/agency/agency.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/disbursement/agency/agency.component.ts ***!
  \***************************************************************/
/*! exports provided: AgencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyComponent", function() { return AgencyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_disbursement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/disbursement.service */ "./src/app/shared/services/disbursement.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _shared_models_disbursementVoucherListItem_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/models/disbursementVoucherListItem.model */ "./src/app/shared/models/disbursementVoucherListItem.model.ts");
/* harmony import */ var _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/helpers/MyErrorStateMatcher.helper */ "./src/app/shared/helpers/MyErrorStateMatcher.helper.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AgencyComponent = /** @class */ (function () {
    function AgencyComponent(router, disbursementService, spinner, fb, commonService) {
        this.router = router;
        this.disbursementService = disbursementService;
        this.spinner = spinner;
        this.fb = fb;
        this.commonService = commonService;
        this.allItems = [];
        this.totalAmount = 0;
        this.matcher = new _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_7__["MyErrorStateMatcher"]();
        this.submitted = false;
        this.model = new _shared_models_disbursementVoucherListItem_model__WEBPACK_IMPORTED_MODULE_6__["AgencyVoucher"]();
        this.paymentModes = [];
        this.edit = false;
        this.agencyForm = this.fb.group({
            pymtTypSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            instrNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            amt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            loanAppSeq: [''],
            dsbmtDtlKey: ['']
        });
    }
    AgencyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.disbursementService.loanAppSeq = Number.parseInt(sessionStorage.getItem('loanAppSeq'));
        this.disbursementService.getAllAgencies().subscribe(function (data) {
            _this.model = data;
            _this.allItems = _this.model.disbursementVoucherDetailDTOs;
            _this.allItems.forEach(function (d) { return _this.totalAmount += d.amt; });
        });
        // this.model = DISB_VOUCHER;
        // this.allItems = this.model.disbursementVoucherDetailDTOs;
        // console.log(this.allItems);
        // this.allItems.forEach((d: DisbursementVoucherListItem) => this.totalAmount += d.amt);
        this.loadPaymentModes();
    };
    AgencyComponent.prototype.onSubmit = function () {
        var _this = this;
        var result = Object.assign({}, this.agencyForm.value);
        $('#addVoucher').modal('hide');
        result.loanAppSeq = this.disbursementService.loanAppSeq;
        if (!this.edit) {
            this.disbursementService.addAgency(result, 'add').subscribe(function (d) {
                result.dsbmtDtlKey = d.dsbmtDtlKey;
                _this.allItems.push(result);
            });
        }
        else {
            this.disbursementService.addAgency(result, 'update').subscribe(function (d) {
                var itemIndex = _this.allItems.findIndex(function (item) { return item.dsbmtDtlKey === result.dsbmtDtlKey; });
                _this.allItems[itemIndex] = result;
                _this.edit = false;
            });
        }
    };
    AgencyComponent.prototype.openAddVoucher = function () {
        $('#addVoucher').modal('show');
        this.agencyForm.reset();
    };
    AgencyComponent.prototype.editVoucher = function (voucher) {
        $('#addVoucher').modal('show');
        this.agencyForm.patchValue(voucher);
        this.edit = true;
    };
    AgencyComponent.prototype.deleteItem = function (voucher) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this agency?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.disbursementService.deleteAgency(voucher).subscribe(function () {
                    _this.allItems.splice(_this.allItems.indexOf(voucher.dsbmtDtlKey), 1);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()('Deleted!', 'agency values has been deleted.', 'success');
                }, function (error) { return console.log('There was an error: ', error); });
            }
        });
    };
    AgencyComponent.prototype.loadPaymentModes = function () {
        var _this = this;
        this.disbursementService.getPaymentModes().subscribe(function (data) {
            _this.paymentModes = data;
        });
        // this.paymentModes = [
        //   {
        //     'typSeq': 9,
        //     'typStr': 'EASY PAISA',
        //     'glAcctNum': null,
        //     'typStsKey': null,
        //     'typCtgryKey': null,
        //     'typId': null,
        //     'chrgTyp': null,
        //     'effStartDt': null,
        //     'effEndDt': null,
        //     'crtdBy': null,
        //     'crtdDt': null,
        //     'lastUpdBy': null,
        //     'lastUpdDt': null,
        //     'delFlg': null,
        //     'crntRecFlg': null
        //   },
        //   {
        //     'typSeq': 11,
        //     'typStr': 'UBL OMNI',
        //     'glAcctNum': null,
        //     'typStsKey': null,
        //     'typCtgryKey': null,
        //     'typId': null,
        //     'chrgTyp': null,
        //     'effStartDt': null,
        //     'effEndDt': null,
        //     'crtdBy': null,
        //     'crtdDt': null,
        //     'lastUpdBy': null,
        //     'lastUpdDt': null,
        //     'delFlg': null,
        //     'crntRecFlg': null
        //   },
        //   {
        //     'typSeq': 13,
        //     'typStr': 'NADRA',
        //     'glAcctNum': null,
        //     'typStsKey': null,
        //     'typCtgryKey': null,
        //     'typId': null,
        //     'chrgTyp': null,
        //     'effStartDt': null,
        //     'effEndDt': null,
        //     'crtdBy': null,
        //     'crtdDt': null,
        //     'lastUpdBy': null,
        //     'lastUpdDt': null,
        //     'delFlg': null,
        //     'crntRecFlg': null
        //   },
        //   {
        //     'typSeq': 14,
        //     'typStr': 'JAZZ Cash',
        //     'glAcctNum': null,
        //     'typStsKey': null,
        //     'typCtgryKey': null,
        //     'typId': null,
        //     'chrgTyp': null,
        //     'effStartDt': null,
        //     'effEndDt': null,
        //     'crtdBy': null,
        //     'crtdDt': null,
        //     'lastUpdBy': null,
        //     'lastUpdDt': null,
        //     'delFlg': null,
        //     'crntRecFlg': null
        //   }
        // ];
    };
    AgencyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agency',
            template: __webpack_require__(/*! ./agency.component.html */ "./src/app/pages/disbursement/agency/agency.component.html"),
            styles: [__webpack_require__(/*! ./agency.component.css */ "./src/app/pages/disbursement/agency/agency.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_disbursement_service__WEBPACK_IMPORTED_MODULE_2__["DisbursementService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], AgencyComponent);
    return AgencyComponent;
}());



/***/ }),

/***/ "./src/app/pages/disbursement/auth.service.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/disbursement/auth.service.ts ***!
  \****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.routes = [];
    }
    AuthService.prototype.isValid = function (state) {
        return true;
    };
    return AuthService;
}());



/***/ }),

/***/ "./src/app/pages/disbursement/can-activate-route.guard.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/disbursement/can-activate-route.guard.ts ***!
  \****************************************************************/
/*! exports provided: CanActivateRouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateRouteGuard", function() { return CanActivateRouteGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/pages/disbursement/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CanActivateRouteGuard = /** @class */ (function () {
    function CanActivateRouteGuard(auth) {
        this.auth = auth;
    }
    CanActivateRouteGuard.prototype.canActivate = function (route, state) {
        return this.auth.isValid(state);
    };
    CanActivateRouteGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], CanActivateRouteGuard);
    return CanActivateRouteGuard;
}());



/***/ }),

/***/ "./src/app/pages/disbursement/disbursement-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/disbursement/disbursement-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DisbursementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisbursementRoutingModule", function() { return DisbursementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _disbursement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disbursement.component */ "./src/app/pages/disbursement/disbursement.component.ts");
/* harmony import */ var _disbursement_voucher_disbursement_voucher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./disbursement-voucher/disbursement-voucher.component */ "./src/app/pages/disbursement/disbursement-voucher/disbursement-voucher.component.ts");
/* harmony import */ var _pdcs_pdcs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pdcs/pdcs.component */ "./src/app/pages/disbursement/pdcs/pdcs.component.ts");
/* harmony import */ var _payment_schedule_payment_schedule_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-schedule/payment-schedule.component */ "./src/app/pages/disbursement/payment-schedule/payment-schedule.component.ts");
/* harmony import */ var _agency_agency_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agency/agency.component */ "./src/app/pages/disbursement/agency/agency.component.ts");
/* harmony import */ var _can_activate_route_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./can-activate-route.guard */ "./src/app/pages/disbursement/can-activate-route.guard.ts");
/* harmony import */ var _AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AuthGuard.service */ "./src/app/pages/disbursement/AuthGuard.service.ts");
/* harmony import */ var _edit_pdc_edit_pdc_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-pdc/edit-pdc.component */ "./src/app/pages/disbursement/edit-pdc/edit-pdc.component.ts");
/* harmony import */ var _edit_voucher_edit_voucher_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-voucher/edit-voucher.component */ "./src/app/pages/disbursement/edit-voucher/edit-voucher.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: _disbursement_component__WEBPACK_IMPORTED_MODULE_2__["DisbursementComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'voucher', component: _disbursement_voucher_disbursement_voucher_component__WEBPACK_IMPORTED_MODULE_3__["DisbursementVoucherComponent"],
        data: {
            breadcrumbs: [
                { label: 'Disbursement Voucher', href: '/disbursement/voucher' },
                { label: 'Payment Schedule', href: '/disbursement/payment-schedule' },
                { label: 'PDCs', href: '/disbursement/pdcs' }
            ]
        }, canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]], },
    //   { path: 'pdcs', component: VoucherInfoComponent,
    // loadChildren: './add-disbursement/add-disbursement.module#AddDisbursementModule'},
    { path: 'pdcs', component: _pdcs_pdcs_component__WEBPACK_IMPORTED_MODULE_4__["PdcsComponent"],
        data: {
            breadcrumbs: [
                { label: 'Disbursement Voucher', href: '/disbursement/voucher' },
                { label: 'Payment Schedule', href: '/disbursement/payment-schedule' },
                { label: 'PDCs', href: '/disbursement/pdcs' }
            ]
        }, canActivate: [_can_activate_route_guard__WEBPACK_IMPORTED_MODULE_7__["CanActivateRouteGuard"], _AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'edit-pdcs', component: _edit_pdc_edit_pdc_component__WEBPACK_IMPORTED_MODULE_9__["EditPdcComponent"], canActivate: [_can_activate_route_guard__WEBPACK_IMPORTED_MODULE_7__["CanActivateRouteGuard"], _AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'edit-voucher', component: _edit_voucher_edit_voucher_component__WEBPACK_IMPORTED_MODULE_10__["EditVoucherComponent"], canActivate: [_can_activate_route_guard__WEBPACK_IMPORTED_MODULE_7__["CanActivateRouteGuard"], _AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'payment-schedule',
        component: _payment_schedule_payment_schedule_component__WEBPACK_IMPORTED_MODULE_5__["PaymentScheduleComponent"],
        data: {
            breadcrumbs: [
                { label: 'Disbursement Voucher', href: '/disbursement/voucher' },
                { label: 'Payment Schedule', href: '/disbursement/payment-schedule' },
                { label: 'PDCs', href: '/disbursement/pdcs' }
            ]
        }, canActivate: [_can_activate_route_guard__WEBPACK_IMPORTED_MODULE_7__["CanActivateRouteGuard"], _AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'agency', component: _agency_agency_component__WEBPACK_IMPORTED_MODULE_6__["AgencyComponent"],
        data: {
            breadcrumbs: [
                { label: 'PDCs', href: '/disbursement/pdcs' },
                { label: 'Agency', href: '/disbursement/agency' }
            ]
        }, canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
];
var DisbursementRoutingModule = /** @class */ (function () {
    function DisbursementRoutingModule() {
    }
    DisbursementRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DisbursementRoutingModule);
    return DisbursementRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/disbursement/disbursement-voucher/disbursement-voucher.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/disbursement/disbursement-voucher/disbursement-voucher.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/disbursement/disbursement-voucher/disbursement-voucher.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/disbursement/disbursement-voucher/disbursement-voucher.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n\r\n  <div class=\"container-fluid\">\r\n    <app-voucher-info (disbursementAmt)=\"recievemsg($event)\" (isPaymentReq)=\"paymentReq($event)\"\r\n      (prdSeq)=\"getPrdSeq($event)\" (appSts)=\"getAppSts($event)\"></app-voucher-info>\r\n    <nav aria-label=\"breadcrumb\">\r\n      <ol class=\"breadcrumb breadcrumb-arrow\">\r\n        <li class=\"ng-star-inserted active\">\r\n          <a>{{prdSeq==='0010' && appSts==='0004'?\"Agency Creation\":\"Disbursement Voucher\"}}</a>\r\n        </li>\r\n        <li *ngIf=\"isPaymentReq\">\r\n          <a>Repayment Schedule</a>\r\n        </li>\r\n        <li>\r\n          <a>PDCs</a>\r\n        </li>\r\n\r\n      </ol>\r\n    </nav>\r\n    <div class=\"content\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6 \">\r\n          <h6 class=\"colorBlack\">{{prdSeq==='0010' && appSts==='0004'?\"Agency Creation\":\"Disbursement Voucher\"}}</h6>\r\n        </div>\r\n        <div class=\"col-sm-6 addBtn mb-2\">\r\n          <button class=\"btn btn-primary btn-sm\" (click)=\"openAddVoucher()\">\r\n            <i class=\"fa fa-plus\"></i> Add </button>\r\n          <div class=\"modal fade\" id=\"addVoucher\" role=\"dialog\">\r\n            <div class=\"modal-dialog mymodal\">\r\n\r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Voucher</h5>\r\n                </div>\r\n                <form class=\"md-float-material\" [formGroup]=\"agencyForm\" (ngSubmit)=\"onSubmit()\">\r\n                  <div class=\"modal-body\">\r\n                    <div class=\"cRow\">\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <mat-select placeholder=\"Payment Mode\" formControlName=\"pymtTypSeq\"\r\n                            (selectionChange)=\"onRecoveryChange()\" [errorStateMatcher]=\"matcher\">\r\n                            <mat-option *ngFor=\"let code of paymentModes\" [value]=\"code\">\r\n                              {{code.typStr}}\r\n                            </mat-option>\r\n                          </mat-select>\r\n                          <mat-error *ngIf=\"!agencyForm.get('pymtTypSeq').valid\">\r\n                            Payment Mode is <strong>required</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"cCol3-col\" *ngIf=\"isCheck\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"{{instrNumPlaceHolder}}\" formControlName=\"instrNum\"\r\n                            [errorStateMatcher]=\"matcher\">\r\n                          <mat-error *ngIf=\"!agencyForm.get('instrNum').valid\">\r\n                            {{instrNumPlaceHolder}} is <strong>required</strong>. {{instrNumFormat}}\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Amount:\" formControlName=\"amt\"\r\n                            [errorStateMatcher]=\"matcher\" pattern=\"[0-9]{1,6}\">\r\n                          <mat-error *ngIf=\"!agencyForm.get('amt').valid\">\r\n                            Amount is <strong>invalid</strong>\r\n                          </mat-error>\r\n                          <mat-error *ngIf=\"agencyForm.errors?.pattern\">\r\n                            Voucher amount is <strong>invalid </strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"modal-footer text-center\">\r\n                    <button type=\"button\" appNoDblClick (click)=\"onSubmit()\" class=\"btn btn-primary\"\r\n                      [disabled]=\"!agencyForm.valid\">Ok</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-responsive mb-md-5\">\r\n        <table class=\"table order-list\" id=\"myTable\">\r\n          <thead class=\"thead-light\">\r\n            <tr>\r\n              <th>Payment Mode</th>\r\n              <th>Instrument/Mobile No.</th>\r\n              <th>Amount</th>\r\n              <th>Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let code of allItems\">\r\n              <td>\r\n                <!-- <div *ngFor=\"let pm of paymentModes\">\r\n                  <div *ngIf=\"code.pymtTypSeq === pm.typSeq\">\r\n                    {{pm.typStr}}\r\n                  </div>\r\n                </div> -->\r\n                {{getCashModes(code.pymtTypSeq)}}\r\n              </td>\r\n              <td>{{code.instrNum}}</td>\r\n              <td>{{code.amt | currency:'PKR':''}}</td>\r\n              <td>\r\n                <a *ngIf=\"editDisableButton\" (click)=\"editVoucher(code)\" class=\"iconBtn\"><i\r\n                    class=\"fa fa-pencil\"></i></a>\r\n                <a *ngIf=\"thingsForKm.prdSeq !== '0010' && thingsForKm.loanAppStatus !== '1305'\"\r\n                  (click)=\"deleteItem(code)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                <!-- <a class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>-->\r\n              </td>\r\n            </tr>\r\n\r\n          </tbody>\r\n          <tbody>\r\n            <tr class=\"total-info\">\r\n              <td></td>\r\n              <td class=\"text-right\"><b>Total Amount:</b></td>\r\n              <td>{{totalAmount | currency:'PKR':''}}</td>\r\n              <td>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n\r\n\r\n\r\n        </table>\r\n      </div>\r\n      <button *ngIf=\"isPaymentReq\" [disabled]=\"totalAmount!=disbursementAmt\" class=\"btn btn-primary\"\r\n        routerLink=\"/disbursement/payment-schedule\">Continue</button>\r\n      <button *ngIf=\"!isPaymentReq\" [disabled]=\"totalAmount!=disbursementAmt\" class=\"btn btn-primary\"\r\n        routerLink=\"/disbursement/pdcs\">Continue</button>\r\n      <!--<button class=\"btn btn-default\">Save</button>-->\r\n    </div>\r\n  </div>\r\n</main>\r\n\r\n<script>\r\n  $('.date').datepicker({\r\n    //format: ‘dd/mm/yyyy’;\r\n  });\r\n  $('#rowadd').click(function () {\r\n    $('.addrow').show();\r\n  });\r\n\r\n\r\n  $(document).ready(function () {\r\n    var counter = 0;\r\n\r\n    $(\"#addrow\").on(\"click\", function () {\r\n      var newRow = $(\"<tr>\");\r\n      var cols = \"\";\r\n\r\n      cols += '<td><select class=\"form-control tbl-form\"><option value=\"\">Cheque</option><option value=\"\">Cash</option></select></td>';\r\n      cols += ' <td><input type=\"text\" placeholder=\"\" class=\"form-control tbl-form\"></td>';\r\n      cols += ' <td><input type=\"text\" placeholder=\"\" class=\"form-control tbl-form\"></td>';\r\n\r\n      cols += '<td><a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a> <a href=\"#\" class=\"iconBtn ibtnDel delBtn\"><i class=\"fa fa-trash-o\"></i></a> <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a></td>';\r\n      newRow.append(cols);\r\n      $(\"table.order-list\").append(newRow);\r\n      counter++;\r\n    });\r\n\r\n\r\n\r\n    $(\"table.order-list\").on(\"click\", \".ibtnDel\", function (event) {\r\n      $(this).closest(\"tr\").remove();\r\n      counter -= 1\r\n    });\r\n\r\n  });\r\n  function calculateRow(row) {\r\n    var price = +row.find('input[name^=\"price\"]').val();\r\n\r\n  }\r\n  function calculateGrandTotal() {\r\n    var grandTotal = 0;\r\n    $(\"table.order-list\").find('input[name^=\"price\"]').each(function () {\r\n      grandTotal += +$(this).val();\r\n    });\r\n    $(\"#grandtotal\").text(grandTotal.toFixed(2));\r\n  }\r\n\r\n</script>"

/***/ }),

/***/ "./src/app/pages/disbursement/disbursement-voucher/disbursement-voucher.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/disbursement/disbursement-voucher/disbursement-voucher.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DisbursementVoucherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisbursementVoucherComponent", function() { return DisbursementVoucherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_disbursement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/disbursement.service */ "./src/app/shared/services/disbursement.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_models_disbursementVoucherListItem_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/models/disbursementVoucherListItem.model */ "./src/app/shared/models/disbursementVoucherListItem.model.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/helpers/MyErrorStateMatcher.helper */ "./src/app/shared/helpers/MyErrorStateMatcher.helper.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DisbursementVoucherComponent = /** @class */ (function () {
    // End by 
    function DisbursementVoucherComponent(router, disbursementService, spinner, toastr, fb, commonService) {
        this.router = router;
        this.disbursementService = disbursementService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.fb = fb;
        this.commonService = commonService;
        this.allItems = [];
        this.totalAmount = 0;
        this.matcher = new _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_9__["MyErrorStateMatcher"]();
        this.submitted = false;
        this.model = new _shared_models_disbursementVoucherListItem_model__WEBPACK_IMPORTED_MODULE_6__["AgencyVoucher"]();
        this.paymentModes = [];
        this.edit = false;
        this.isCheck = false;
        this.isPaymentReq = false;
        this.disableButton = false;
        this.editDisableButton = false;
        this.agencyForm = this.fb.group({
            pymtTypSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            instrNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]+$')])],
            amt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            loanAppSeq: [''],
            dsbmtDtlKey: ['']
        });
    }
    DisbursementVoucherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.disbursementService.loanAppSeq = Number.parseInt(sessionStorage.getItem('loanAppSeq'));
        this.disbursementService.getDisbursementVoucher().subscribe(function (data) {
            _this.thingsForKm = data;
            console.log(_this.thingsForKm);
            if (_this.thingsForKm.prdSeq === '0010' && _this.thingsForKm.loanAppStatus == "1305") {
                _this.editDisableButton = false;
            }
            else {
                _this.editDisableButton = true;
            }
        });
        this.disbursementService.getAllAgencies().subscribe(function (data) {
            _this.model = data;
            console.log(_this.model);
            _this.allItems = _this.model.disbursementVoucherDetailDTOs;
            _this.allItems.forEach(function (d) { return _this.totalAmount += +d.amt; });
            console.table(_this.allItems);
        });
        this.loadPaymentModes();
        sessionStorage.setItem("frstInstDt", new _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]('en-US').transform(new Date(), 'dd-MM-yyyy'));
        sessionStorage.setItem("lsatInstDt", new _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]('en-US').transform(new Date(), 'dd-MM-yyyy'));
    };
    DisbursementVoucherComponent.prototype.getCashModes = function (pymtTypSeq) {
        var str = "";
        for (var a = 0; a < this.paymentModes.length; a++) {
            if (this.paymentModes[a].typSeq == pymtTypSeq) {
                str = this.paymentModes[a].typStr;
            }
        }
        ;
        if (str.length == 0) {
            str = 'Advanced To Agent';
        }
        ;
        return str;
    };
    DisbursementVoucherComponent.prototype.onRecoveryChange = function () {
        var instrNum = this.agencyForm.get('instrNum');
        if (this.agencyForm.get('pymtTypSeq').value.typId === '0008') {
            this.isCheck = true;
            instrNum.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]+$')]));
            // Added by Zohaib Asim - Dated 25/01/2021
            this.instrNumPlaceHolder = 'Instrument No:';
            this.instrNumFormat = '';
            instrNum.setValue('');
            // End by Zohaib
        }
        else if (this.agencyForm.get('pymtTypSeq').value.typId === '16228' || this.agencyForm.get('pymtTypSeq').value.typId === '16229') {
            this.isCheck = true;
            this.instrNumPlaceHolder = 'Mobile No:';
            this.instrNumFormat = 'e.g. 923001234567';
            instrNum.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[92][0-9]+$')]));
            instrNum.setValue('92');
        }
        else {
            instrNum.clearValidators();
            this.isCheck = false;
        }
        instrNum.updateValueAndValidity();
    };
    DisbursementVoucherComponent.prototype.onSubmit = function () {
        var _this = this;
        this.disableButton = true;
        var result = Object.assign({}, this.agencyForm.value);
        result.pymtTypSeq = result.pymtTypSeq.typSeq;
        $('#addVoucher').modal('hide');
        this.disableButton = false;
        var validAmt = this.totalAmount + Number(result.amt);
        var editValidAmt = this.totalAmount + Number(result.amt) - this.editPrivousAmt;
        result.loanAppSeq = this.disbursementService.loanAppSeq;
        if (!this.edit && validAmt <= this.disbursementAmt) {
            this.disbursementService.addAgency(result, 'add').subscribe(function (d) {
                result.dsbmtDtlKey = d.dsbmtDtlKey;
                _this.allItems.push(result);
                _this.calTotalAmount();
            }, function (error) {
                console.log(error);
                if (error.status == 400) {
                    _this.toastr.error(error.error.error);
                }
                else {
                    _this.toastr.error("something Went Wrong");
                }
            });
        }
        else if (this.edit && editValidAmt <= this.disbursementAmt) {
            if (result.pymtTypSeq == 124) {
                result.instrNum = '';
            }
            this.disbursementService.addAgency(result, 'update').subscribe(function (d) {
                var itemIndex = _this.allItems.findIndex(function (item) { return item.dsbmtDtlKey === result.dsbmtDtlKey; });
                _this.allItems[itemIndex] = result;
                _this.calTotalAmount();
                _this.edit = false;
            }, function (error) {
                if (error.status == 400) {
                    _this.toastr.error(error.error.error);
                }
                else {
                    _this.toastr.error("something Went Wrong");
                }
            });
        }
        else {
            this.toastr.warning('Total Amount of Vouchers Should be Equal to Disburse Amount', 'Error!');
        }
    };
    DisbursementVoucherComponent.prototype.openAddVoucher = function () {
        $('#addVoucher').modal('show');
        this.agencyForm.reset();
        console.log(this.appSts);
        var pyments = [];
        if (this.appSts != '1305') {
            this.paymentModes.forEach(function (p) {
                if (p.typId !== '0009' && p.typId !== '0010' && p.typId !== '0011') {
                    pyments.push(p);
                }
            });
            this.paymentModes = null;
            this.paymentModes = pyments;
        }
        this.agencyForm = this.fb.group({
            pymtTypSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            instrNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]+$')])],
            amt: [this.disbursementAmt, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            loanAppSeq: [''],
            dsbmtDtlKey: ['']
        });
    };
    DisbursementVoucherComponent.prototype.editVoucher = function (voucher) {
        var _this = this;
        console.log(voucher);
        this.editPrivousAmt = 0;
        this.onRecoveryChange();
        $('#addVoucher').modal('show');
        this.paymentModes.forEach(function (mode) {
            if (mode.typSeq == voucher.pymtTypSeq) {
                // Modified by Zohaib Asim - Dated 26/01/2021
                _this.isCheck = mode.typId === '0008' || mode.typId === '16228' || mode.typId === '16229' ? true : false;
                voucher.pymtTypSeq = mode;
            }
        });
        this.agencyForm.patchValue(voucher);
        this.editPrivousAmt = voucher.amt;
        this.edit = true;
    };
    DisbursementVoucherComponent.prototype.deleteItem = function (voucher) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Disbursement Voucher?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.disbursementService.deleteAgency(voucher).subscribe(function () {
                    _this.allItems.splice(_this.allItems.indexOf(voucher.dsbmtDtlKey), 1);
                    _this.calTotalAmount();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()('Deleted!', 'Disbursement Voucher values has been deleted.', 'success');
                }, function (error) { return console.log('There was an error: ', error); });
            }
        });
    };
    DisbursementVoucherComponent.prototype.calTotalAmount = function () {
        var _this = this;
        this.totalAmount = 0;
        this.allItems.forEach(function (d) { return _this.totalAmount += +d.amt; });
    };
    DisbursementVoucherComponent.prototype.loadPaymentModes = function () {
        var _this = this;
        this.disbursementService.getPaymentModes().subscribe(function (data) {
            _this.paymentModes = data;
            console.table(_this.paymentModes);
        });
    };
    DisbursementVoucherComponent.prototype.recievemsg = function ($event) {
        this.disbursementAmt = $event;
    };
    DisbursementVoucherComponent.prototype.paymentReq = function ($event) {
        this.isPaymentReq = $event;
    };
    DisbursementVoucherComponent.prototype.getPrdSeq = function ($event) {
        this.prdSeq = $event;
    };
    DisbursementVoucherComponent.prototype.getAppSts = function ($event) {
        this.appSts = $event;
    };
    DisbursementVoucherComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    DisbursementVoucherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-disbursement-voucher',
            template: __webpack_require__(/*! ./disbursement-voucher.component.html */ "./src/app/pages/disbursement/disbursement-voucher/disbursement-voucher.component.html"),
            styles: [__webpack_require__(/*! ./disbursement-voucher.component.css */ "./src/app/pages/disbursement/disbursement-voucher/disbursement-voucher.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_disbursement_service__WEBPACK_IMPORTED_MODULE_1__["DisbursementService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], DisbursementVoucherComponent);
    return DisbursementVoucherComponent;
}());



/***/ }),

/***/ "./src/app/pages/disbursement/disbursement.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/disbursement/disbursement.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button:disabled{\r\n  cursor: not-allowed;\r\n  background-color: lightgrey;\r\n  border-color: lightgrey;\r\n}\r\ni.fa-times:hover{\r\n  color: #990b0b;\r\n}\r\ni.fa-times{\r\n  color: #999999;\r\n}\r\ni:hover{\r\n  cursor: pointer;\r\n}\r\n.cdk-overlay-container {\r\n  z-index: 1100 !important;\r\n}\r\n.Rejected{\r\n  color: #db0707;\r\n}\r\n.Draft{\r\n  color: #db8407;\r\n}\r\n.Submitted{\r\n  color:#0792db;\r\n}\r\n.Approved{\r\n  color: #51de65;\r\n}\r\n.DRAFT{\r\n  color: #db8407;\r\n}\r\n.REJECTED{\r\n  color: #db0707;\r\n}\r\n.SUBMITTED{\r\n  color:#0792db;\r\n}\r\n.APPROVED{\r\n  color: #51de65;\r\n}\r\n.CLARIFICATION{\r\n  color:#ba55d3;\r\n}\r\n.clarification{\r\n  color:#ba55d3;\r\n}\r\n.Clarification{\r\n  color:#ba55d3;\r\n}\r\n.Completed{\r\n  color:#00bfff\r\n}\r\n.COMPLETED{\r\n  color:#00bfff\r\n}\r\n.completed{\r\n  color:#00bfff\r\n}\r\n/* Structure */\r\ntable {\r\n  width: 100%;\r\n}\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\nth.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n.mat-cell, .mat-footer-cell {\r\n  font-size: 13px;\r\n}\r\ntd,th{\r\n  padding-left: 16px !important;\r\n  width: 11% !important;\r\n}\r\ntd:first-child, th:first-child{\r\n  padding-left: 16px !important;\r\n  width: 15% !important;\r\n}\r\n.w-20{\r\n  width: 20% !important;\r\n}\r\nth{\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n.mat-cell, .mat-header-cell {\r\n  font-size: 14px;\r\n  }\r\n.mat-cell, .mat-footer-cell {\r\n  font-size: 13px;\r\n  }\r\ntable {\r\n  width: 100%;\r\n  }\r\nth.mat-header-cell {\r\n      vertical-align: middle;\r\n  }"

/***/ }),

/***/ "./src/app/pages/disbursement/disbursement.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/disbursement/disbursement.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">\r\n        <div class=\"leftSideBar\">\r\n          <h6>\r\n            <i class=\"fa fa-sliders fa-lg\"></i> Filter</h6>\r\n          <div class=\"selectedFilter\">\r\n            <ul>\r\n              <li *ngFor=\"let filter of filters\">{{filter.key}} : {{filter.value}}\r\n                <a (click)=\"deleteFilter(filter)\">\r\n                  <i class=\"fa fa-times\"></i>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"filtersWrap\">\r\n            <div class=\"filter\">\r\n              <a class=\"acc_trigger\">Organization</a>\r\n              <div class=\"collapse acc_container\" id=\"region\">\r\n                <div class=\"listmenu\">\r\n                  <ul class=\"sub-menu\">\r\n                    <li *ngFor=\"let reg of organization\">\r\n                      <span class=\"nav-click\" style=\"width: 10%;margin-left: 90%;\"\r\n                        (click)=\"navClick($event.srcElement)\"></span>\r\n                      <span (click)=\"regionClick(reg)\">{{reg.regionName}}</span>\r\n                      <ul class=\"sub-menu\">\r\n                        <li *ngFor=\"let area of reg.areas\">\r\n                          <span class=\"nav-click\" style=\"width: 10%;margin-left: 90%;\"\r\n                            (click)=\"navClick($event.srcElement)\"></span>{{area.areaName}}\r\n                          <ul class=\"sub-menu\">\r\n                            <li *ngFor=\"let branch of area.branches\">\r\n                              <span class=\"nav-click\" style=\"width: 10%;margin-left: 90%;\"\r\n                                (click)=\"navClick($event.srcElement)\"></span>{{branch.branchName}}\r\n                              <ul class=\"sub-menu\">\r\n                                <li *ngFor=\"let port of branch.portfolio\">{{port.portfolioName}}</li>\r\n                              </ul>\r\n                            </li>\r\n                          </ul>\r\n                        </li>\r\n                      </ul>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"filter\">\r\n              <a class=\"acc_trigger\">Geography </a>\r\n              <div class=\"collapse acc_container\" id=\"country\">\r\n                <div class=\"listmenu\">\r\n                  <ul>\r\n                    <li *ngFor=\"let country of geography\">\r\n                      <span class=\"nav-click\" style=\"width: 10%;margin-left: 90%;\"\r\n                        (click)=\"navClick($event.srcElement)\"></span>\r\n                      <span>{{country.countryName}}</span>\r\n                      <ul class=\"sub-menu\">\r\n                        <li *ngFor=\"let state of country.states\">\r\n                          <span class=\"nav-click\" style=\"width: 10%;margin-left: 90%;\"\r\n                            (click)=\"navClick($event.srcElement)\"></span>\r\n                          <span (click)=\"stateClick(state)\">{{state.provName}}</span>\r\n                          <ul class=\"sub-menu\">\r\n                            <li *ngFor=\"let district of state.districts\">\r\n                              <span class=\"nav-click\" style=\"width: 10%;margin-left: 90%;\"\r\n                                (click)=\"navClick($event.srcElement)\"></span>\r\n                              <span (click)=\"districtClick(district)\">{{district.districtName}}</span>\r\n                              <ul class=\"sub-menu\">\r\n                                <li *ngFor=\"let tehsil of district.tehsils\">\r\n                                  <span class=\"nav-click\" style=\"width: 10%;margin-left: 90%;\"\r\n                                    (click)=\"navClick($event.srcElement)\"></span>\r\n                                  <span (click)=\"tehsilClick(tehsil)\">{{tehsil.thslName}}</span>\r\n                                  <ul class=\"sub-menu\">\r\n                                    <li *ngFor=\"let uc of tehsil.ucs\">\r\n                                      <span (click)=\"ucClick(uc)\">{{uc.ucName}}- {{uc.ucDescription}}</span>\r\n                                    </li>\r\n                                  </ul>\r\n                                </li>\r\n                              </ul>\r\n                            </li>\r\n                          </ul>\r\n                        </li>\r\n                      </ul>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"filter\">\r\n              <a class=\"acc_trigger\">More Filters</a>\r\n              <div class=\"collapse acc_container\">\r\n                <label>Gender</label>\r\n                <br>\r\n                <mat-radio-group (change)=\"genderFilter()\" [(ngModel)]=\"genderSelected\" name=\"disableFlag\" required>\r\n                  <mat-radio-button class=\"w-50\" *ngFor=\"let gen of gender\" [value]=\"gen.codeValue\">{{gen.codeValue}}\r\n                  </mat-radio-button>\r\n                </mat-radio-group>\r\n                <br>\r\n                <!-- <label class=\"mt-2\">Marital Status</label>\r\n                <br>\r\n                <div class=\"custom-control custom-radio custom-control-inline\">\r\n                  <input type=\"radio\" id=\"yesM\" name=\"mStatus\" class=\"custom-control-input\">\r\n                  <label class=\"custom-control-label\" for=\"yesM\">Yes</label>\r\n                </div>\r\n                <div class=\"custom-control custom-radio custom-control-inline\">\r\n                  <input type=\"radio\" id=\"noM\" name=\"mStatus\" class=\"custom-control-input\">\r\n                  <label class=\"custom-control-label\" for=\"noM\">No</label>\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n            <button class=\"btn btn-primary btn-sm\">More Filters</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-10\">\r\n        <div class=\"content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\" *ngIf=\"allItems.length>0  || (this.auth.role == 'bm')\">\r\n              <div class=\"mysearchbox\" (click)=\"showField()\" *ngIf=\"!showFields\">\r\n                <h6 class=\"d-inline-block searchshow\" style=\"cursor: pointer;\">Search\r\n                  <i class=\"fa fa-search\"> </i>\r\n                </h6>\r\n              </div>\r\n              <div class=\"mysearch\" *ngIf=\"showFields\">\r\n\r\n                <!-- <mat-form-field *ngIf=\"showFields\">\r\n                  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\r\n                </mat-form-field> -->\r\n\r\n                <form (ngSubmit)=\"applyFilter(searchVal)\" #searchForm=\"ngForm\">\r\n                  <div class=\"col-sm-10\" style=\"float:left;\">\r\n                    <mat-form-field *ngIf=\"showFields\">\r\n                      <!-- <a  *ngIf=\"showFields\">\r\n                            <i class=\"fa fa-window-close\" (click)=\"cloaseField()\"> </i> (keyup)=\"applyFilter($event.target.value)\"\r\n                          </a> -->\r\n                      <input id=\"searchBox\" (keyup)=\"searchValue()\" autofocus matInput name=\"searchValue\"\r\n                        [(ngModel)]=\"searchVal\" placeholder=\"Search\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-sm-2\" style=\"float:right;\">\r\n                    <button mat-raised-button color=\"primary\" type=\"submit\"\r\n                      style=\" background-color: #76b1e7; height: 31px; margin: 6px; \">Search</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <form [formGroup]=\"branchForm\" (ngSubmit)=\"onSubmitBranchForm()\">\r\n                <ng-select *ngIf=\"auth.role != 'bm'\" [items]=\"branchs\" required (change)=\"getAllItems($event)\"\r\n                  bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                  formControlName=\"branch\">\r\n                </ng-select>\r\n              </form>\r\n            </div>\r\n            <div class=\"col-sm-6 addBtn\">\r\n              <!--<button class=\"btn btn-primary btn-sm\" (click)=\"printDisbs()\">Print</button>-->\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table mat-table class=\"table\" [dataSource]=\"dataSource\" matSort>\r\n              <!-- Applicant Id Column -->\r\n              <ng-container matColumnDef=\"applicantid\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Application ID</th>\r\n                <td mat-cell *matCellDef=\"let code\">{{code.loanAppSeq}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Client id Column -->\r\n              <ng-container matColumnDef=\"clientid\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Client ID</th>\r\n                <td mat-cell *matCellDef=\"let code\">{{code.clientDto.clntSeq}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Client Name Column -->\r\n              <ng-container matColumnDef=\"clientname\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Client Name</th>\r\n                <td mat-cell *matCellDef=\"let code\">{{code.clientDto.frstNm}} {{code.clientDto.lastNm}}</td>\r\n              </ng-container>\r\n\r\n              <!-- App Date Column -->\r\n              <ng-container matColumnDef=\"appdate\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>App Date</th>\r\n                <td mat-cell *matCellDef=\"let code\">{{code.crtdDt | date :'dd-MM-yyyy'}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Approval Date Column -->\r\n              <ng-container matColumnDef=\"approvaldate\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Approval Date</th>\r\n                <td mat-cell *matCellDef=\"let code\">{{code.lastUpdDt | date :'dd-MM-yyyy'}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Amount Column -->\r\n              <ng-container matColumnDef=\"amount\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Amount</th>\r\n                <td mat-cell *matCellDef=\"let code\">{{code.aprvdLoanAmt  | currency:'PKR':''}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Product Column -->\r\n              <ng-container matColumnDef=\"product\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Product</th>\r\n                <td mat-cell *matCellDef=\"let code\">{{code.mwPrdDTO.prdNm}} <span class=\"badge badge-info\"\r\n                    *ngIf=\"code.mwPrdDTO.prdId=='0010'\">{{code.loanAppSts==='0004'?\"Sale 1\":\"Sale 2\"}}</span></td>\r\n              </ng-container>\r\n\r\n              <!-- BDO Column -->\r\n              <ng-container matColumnDef=\"bdo\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>BDO</th>\r\n                <td mat-cell *matCellDef=\"let code\">{{code.mwPortDTO.portNm}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Action Column -->\r\n              <ng-container matColumnDef=\"action\">\r\n                <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                <td mat-cell *matCellDef=\"let code\">\r\n                  <ng-container *ngIf=\"auth.role!=='admin'; else notpost\">\r\n                    <a (click)=\"onEditDisbursement(code.loanAppSeq)\" class=\"iconBtn\" data-toggle=\"tooltip\"\r\n                      title=\"Detail\"><img src=\"assets/images/rs-icon.png\" alt=\"\"></a>\r\n                    <ng-container\r\n                      *ngIf=\"code.mwPrdDTO.prdId!=='0010' || (code.mwPrdDTO.prdId==='0010' && code.loanAppSts==='0004')\">\r\n                      <a (click)=\"revertApp(code)\" class=\"iconBtn\" data-toggle=\"tooltip\" title=\"Revert to Submitted\"><i\r\n                          class=\"fa fa-step-backward\"></i></a>\r\n                      <a (click)=\"disgardApp(code)\" class=\"iconBtn delBtn\" data-toggle=\"tooltip\"\r\n                        title=\"Discard Application\"> <i class=\"fa fa-trash-o\"></i></a>\r\n                    </ng-container>\r\n                  </ng-container>\r\n                  <ng-template #notpost>\r\n                    <a (click)=\"editPdcs(code.loanAppSeq)\" class=\"iconBtn\" data-toggle=\"tooltip\" title=\"Detail\"><i\r\n                        class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i></a>\r\n                    <ng-container\r\n                      *ngIf=\"code.mwPrdDTO.prdId!=='0010' || (code.mwPrdDTO.prdId==='0010' && code.loanAppSts==='0004')\">\r\n                      <a (click)=\"revertApp(code)\" class=\"iconBtn\" data-toggle=\"tooltip\" title=\"Revert to Submitted\"><i\r\n                          class=\"fa fa-step-backward\"></i></a>\r\n                      <a (click)=\"disgardApp(code)\" class=\"iconBtn delBtn\" data-toggle=\"tooltip\"\r\n                        title=\"Discard Application\"> <i class=\"fa fa-trash-o\"></i></a>\r\n                    </ng-container>\r\n                  </ng-template>\r\n                </td>\r\n\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"thead-light thead-blue\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n\r\n            <mat-paginator [length]=\"datalength\" [pageSizeOptions]=\"[10, 15, 20]\"></mat-paginator>\r\n          </div>\r\n          <!-- <nav aria-label=\"Page navigation \">\r\n            <ul class=\"pagination justify-content-center\" *ngIf=\"pager.pages && pager.pages.length\">\r\n              <li class=\"page-item disabled\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n              </li>\r\n              <li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                <a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n              </li>\r\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n              </li>\r\n            </ul>\r\n          </nav> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<div class=\"modal fade\" id=\"disgardApp\" role=\"dialog\">\r\n  <div class=\"modal-dialog mymodal\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Discard Application</h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"disgardForm\" (ngSubmit)=\"onSubmitDisgardApp()\">\r\n        <input type=\"hidden\" formControlName=\"loanAppSeq\" />\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol6\">\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"cmnt\" placeholder=\"Remarks:\" />\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button type=\"button\" appNoDblClick (click)=\"onSubmitDisgardApp()\" class=\"btn btn-primary\">Ok</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"revertApp\" role=\"dialog\">\r\n  <div class=\"modal-dialog mymodal\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Revert Application</h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"disgardForm\" (ngSubmit)=\"onSubmitRevertApp()\">\r\n        <input type=\"hidden\" formControlName=\"loanAppSeq\" />\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol6\">\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"cmnt\" placeholder=\"Remarks:\" />\r\n                <mat-error *ngIf=\"df.cmnt.errors?.required\">\r\n                  Comments are <strong>required</strong>\r\n                </mat-error>\r\n                <mat-error *ngIf=\"df.cmnt.errors?.pattern\">\r\n                  special characters <strong>not allowed </strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button type=\"button\" appNoDblClick (click)=\"onSubmitRevertApp()\" class=\"btn btn-primary\">Ok</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<script>\r\n  $(document).ready(function () {\r\n    $('[data-toggle=\"tooltip\"]').tooltip();\r\n  });\r\n</script>\r\n<script type=\"text/javascript\">\r\n  $(document).ready(function () {\r\n    $('.acc_trigger').toggleClass('inactive-header');\r\n\r\n    $('.acc_trigger:first').addClass('active-header').next().show();\r\n    $('.acc_trigger').click(function () {\r\n      if ($(this).next().is(':hidden')) {\r\n        $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');\r\n        $(this).toggleClass('active-header').toggleClass('inactive-header');\r\n        $(this).next().slideToggle().toggleClass('open-content');\r\n      }\r\n\r\n      else {\r\n        $(this).toggleClass('active-header').toggleClass('inactive-header');\r\n        $(this).next().slideToggle().toggleClass('open-content');\r\n      }\r\n    });\r\n\r\n    return false;\r\n  });\r\n</script>\r\n<script>\r\n  $(\".searchshow\").click(function () {\r\n    $(\".mysearchbox\").addClass(\"intro\");\r\n  });\r\n  $(\".remove-search\").click(function () {\r\n    $(\".mysearchbox\").removeClass(\"intro\");\r\n  });\r\n\r\n\r\n  function myFunction() {\r\n    var input, filter, table, tr, td, i;\r\n    input = document.getElementById(\"myInput\");\r\n    filter = input.value.toUpperCase();\r\n    table = document.getElementById(\"myTable\");\r\n    tr = table.getElementsByTagName(\"tr\");\r\n    for (i = 0; i < tr.length; i++) {\r\n      td = tr[i].getElementsByTagName(\"td\")[1];\r\n      td = tr[i].getElementsByTagName(\"td\")[0];\r\n      if (td) {\r\n        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {\r\n          tr[i].style.display = \"\";\r\n        } else {\r\n          tr[i].style.display = \"none\";\r\n        }\r\n      }\r\n    }\r\n  }\r\n</script>\r\n<script>\r\n\r\n  $('.listmenu ul li:has(ul.sub-menu)').prepend('<span class=\"nav-click\" />');\r\n  $(function ($) {\r\n    $('.listmenu .nav-click').click(function () {\r\n      var parent = $(this).parent();\r\n      if (parent.hasClass('toparrow')) {\r\n        $(\".sub-menu:first\", parent).hide(300);\r\n        parent.removeClass('toparrow');\r\n      } else {\r\n        $(\".sub-menu:first\", parent).show(300);\r\n        parent.addClass('toparrow');\r\n      }\r\n    });\r\n  });\r\n</script>"

/***/ }),

/***/ "./src/app/pages/disbursement/disbursement.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/disbursement/disbursement.component.ts ***!
  \**************************************************************/
/*! exports provided: DisbursementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisbursementComponent", function() { return DisbursementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_services_disbursement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/disbursement.service */ "./src/app/shared/services/disbursement.service.ts");
/* harmony import */ var _shared_models_disbursement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/disbursement */ "./src/app/shared/models/disbursement.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/helpers/MyErrorStateMatcher.helper */ "./src/app/shared/helpers/MyErrorStateMatcher.helper.ts");
/* harmony import */ var _shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/models/REF_CODE_GRP_KEYS.mocks */ "./src/app/shared/models/REF_CODE_GRP_KEYS.mocks.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var DisbursementComponent = /** @class */ (function () {
    function DisbursementComponent(router, disbursementService, spinner, fb, transfersService, commonService, toaster) {
        this.router = router;
        this.disbursementService = disbursementService;
        this.spinner = spinner;
        this.fb = fb;
        this.transfersService = transfersService;
        this.commonService = commonService;
        this.toaster = toaster;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.matcher = new _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_8__["MyErrorStateMatcher"]();
        this.submitted = false;
        this.formSaved = true;
        this.disburment = new _shared_models_disbursement__WEBPACK_IMPORTED_MODULE_4__["Disbursement"]();
        this.disbs = [];
        this.allItems = [];
        this.pager = {};
        // paged items
        this.pagedItems = [];
        this.onBranchSelection = false;
        this.isCount = false;
        this.filters = [];
        this.genderSelected = '';
        this.displayedColumns = [];
        this.filterValue = "";
        // applyFilter(filterValue: string) {
        //   filterValue = filterValue.trim();
        //   filterValue = filterValue.toLowerCase();
        //   this.dataSource.filter = filterValue;
        // }
        this.searchVal = "";
        this.datalength = 0;
        this.lastPageIndex = 0;
        this.showFields = false;
        this.now = new Date();
        this.spinner.hide();
        var month;
        if ((this.now.getMonth() + 1) < 10) {
            month = '0' + (this.now.getMonth() + 1);
        }
        else {
            month = '' + (this.now.getMonth() + 1);
        }
        var day;
        if ((this.now.getDate() + 1) < 10) {
            day = '0' + (this.now.getDate());
        }
        else {
            day = '' + (this.now.getDate());
        }
        var year = this.now.getFullYear();
        var currentDate = year + '-' + month + '-' + day;
        this.date = currentDate;
        console.log(this.date);
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
    DisbursementComponent.prototype.applyFilter = function (filterValue) {
        this.filterValue = filterValue;
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.datalength = this.countBeforeFilter;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            return;
        }
        this.getFilteredData(filterValue.trim().toLowerCase());
    };
    DisbursementComponent.prototype.searchValue = function () {
        this.filterValue = this.searchVal.trim();
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            // this.dataSource.sort = this.sort;
            this.datalength = this.countBeforeFilter;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            console.log(this.dataSource);
            return;
        }
    };
    DisbursementComponent.prototype.getFilteredData = function (filterValue) {
        var _this = this;
        this.isCount = true;
        this.paginator.pageIndex = 0;
        setTimeout(function () { _this.spinner.show(); }, 10);
        this.disbursementService.getAllDisbursements(this.branchForm.controls['branch'].value, this.paginator.pageIndex + 1, this.paginator.pageSize, filterValue, this.isCount).subscribe(function (data) {
            _this.spinner.hide();
            _this.allItems = data.data;
            if (_this.allItems.length <= 0 && _this.branchForm.controls['branch'].value != 0) {
                _this.toaster.info('No Data Found Against This Search', 'Information');
            }
            ;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](data.data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = 0;
            setTimeout(function () { _this.datalength = data.count; }, 200);
        }, function (error) {
            _this.spinner.hide();
            console.log('err Disbursement Service');
            console.log('err', error);
        });
    };
    DisbursementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.displayedColumns = ['applicantid', 'clientid', 'clientname', 'appdate', 'approvaldate', 'amount', 'product', 'bdo', 'action'];
        this.disburmentForm = this.fb.group({
            loanNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            clientName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            appDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            approvalDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            product: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
        this.disgardForm = this.fb.group({
            loanAppSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            cmnt: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern("^[0-9a-zA-Z ]+$")]],
        });
        this.branchForm = this.fb.group({
            branch: [this.auth.emp_branch],
        });
        if (this.auth.role != 'bm' && this.auth.role != 'bdo') {
            this.commonService.getBrnchsForUsr().subscribe(function (res) {
                _this.branchs = res;
                _this.toaster.info('Please Select Branch', 'Information');
            });
        }
        this.loadLovs();
    };
    DisbursementComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // this.paginator.pageIndex = 110;
        this.getAllItems();
        // reset the paginator after sorting
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function () { return _this.loadDisbursementPage(); }))
            .subscribe();
    };
    DisbursementComponent.prototype.onEditDisbursement = function (loanAppSeq) {
        this.disbursementService.loanAppSeq = loanAppSeq;
        sessionStorage.setItem('loanAppSeq', loanAppSeq.toString());
        console.log(sessionStorage.setItem('loanAppSeq', loanAppSeq.toString()));
        this.router.navigate(['disbursement/voucher']);
    };
    DisbursementComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.commonService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    DisbursementComponent.prototype.getAllItems = function () {
        var _this = this;
        this.isCount = true;
        this.allItems = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.allItems);
        this.paginator.pageIndex = 0;
        this.dataSource.paginator = this.paginator;
        this.filterValue = '';
        this.searchVal = '';
        this.lastPageIndex = 0;
        if (this.branchForm.controls['branch'].value == null || this.branchForm.controls['branch'].value == 0) {
            this.onBranchSelection = false;
            this.dataSource = null;
            this.datalength = 0;
            return;
        }
        setTimeout(function () { _this.spinner.show(); }, 10);
        this.disbursementService.getAllDisbursements(this.branchForm.controls['branch'].value, this.paginator.pageIndex + 1, this.paginator.pageSize, "", this.isCount).subscribe(function (data) {
            _this.allItems = data.data;
            if (_this.allItems.length <= 0 && _this.branchForm.controls['branch'].value != 0) {
                _this.toaster.info('No Data Found Against This Branch', 'Information');
            }
            ;
            _this.allItems.forEach(function (d, index) {
                _this.spinner.hide();
                if (d.clientDto) {
                    _this.allItems[index].clientId = d.clientDto.clntId;
                    _this.allItems[index].clientName = d.clientDto.frstNm + ' ' + d.clientDto.lastNm;
                }
                if (d.mwPrdDTO) {
                    _this.allItems[index].product = d.mwPrdDTO.prdNm;
                }
                if (d.mwPortDTO) {
                    _this.allItems[index].portNm = d.mwPortDTO.portNm;
                }
                _this.disbs = _this.allItems;
            });
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.allItems);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = data.count;
            _this.dataBeforeFilter = _this.dataSource.data;
            _this.countBeforeFilter = data.count;
            _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
        }, function (error) {
            console.log(error);
            _this.spinner.hide();
        });
    };
    DisbursementComponent.prototype.loadDisbursementPage = function () {
        var _this = this;
        this.isCount = false;
        if (this.paginator.pageIndex < this.lastPageIndex)
            return;
        if (this.dataSource.paginator.length == this.dataSource.data.length)
            return;
        if (((this.paginator.pageIndex + 1) * this.paginator.pageSize) - this.dataSource.data.length > 0) {
            setTimeout(function () { _this.spinner.show(); }, 10);
            this.disbursementService.getAllDisbursements(this.branchForm.controls['branch'].value, this.paginator.pageIndex + 1, this.paginator.pageSize, this.filterValue, this.isCount).subscribe(function (data) {
                _this.spinner.hide();
                _this.allItems = data.data;
                if (_this.allItems.length <= 0 && _this.auth.role != 'bm' && _this.branchForm.controls['branch'].value != 0) {
                    _this.toaster.info('No Data Found Against This Branch', 'Information');
                }
                ;
                _this.dataSource.data = _this.dataSource.data.concat(_this.allItems);
                _this.lastPageIndex = _this.lastPageIndex + 1;
                data.count = _this.datalength;
                _this.datalength = 0;
                setTimeout(function () { _this.datalength = data.count; }, 200);
            }, function (error) {
                _this.spinner.hide();
                console.log(error);
            });
        }
    };
    DisbursementComponent.prototype.onSubmitBranchForm = function () {
        console.log(this.branchForm.value);
    };
    Object.defineProperty(DisbursementComponent.prototype, "df", {
        get: function () { return this.disgardForm.controls; },
        enumerable: true,
        configurable: true
    });
    DisbursementComponent.prototype.disgardApp = function (app) {
        $('#disgardApp').modal('show');
        this.disgardForm.patchValue(app);
    };
    DisbursementComponent.prototype.onSubmitDisgardApp = function () {
        var _this = this;
        $('#disgardApp').modal('hide');
        setTimeout(function () {
            _this.spinner.show();
        }, 5);
        this.disgardForm.value.cmnt == null ? ' ' : this.disgardForm.value.cmnt;
        this.disbursementService.deleteApplication(this.disgardForm.value).subscribe(function () {
            _this.spinner.hide();
            var index = _this.allItems.findIndex(function (r) { return r.loanAppSeq === _this.disgardForm.value.loanAppSeq; });
            _this.allItems.splice(index, 1);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.allItems);
            _this.setPage(0);
        }, function (error) {
            _this.spinner.hide();
            console.log('There was an error: ', error);
        });
    };
    DisbursementComponent.prototype.revertApp = function (app) {
        $('#revertApp').modal('show');
        this.disgardForm.patchValue(app);
    };
    DisbursementComponent.prototype.onSubmitRevertApp = function () {
        var _this = this;
        if (!this.disgardForm.valid) {
            return false;
        }
        setTimeout(function () {
            _this.spinner.show();
        }, 5);
        $('#revertApp').modal('hide');
        // tslint:disable-next-line:no-unused-expression
        this.disgardForm.value.cmnt == null ? ' ' : this.disgardForm.value.cmnt;
        this.disbursementService.revertApplication(this.disgardForm.value).subscribe(function () {
            var index = _this.allItems.findIndex(function (r) { return r.loanAppSeq === _this.disgardForm.value.loanAppSeq; });
            _this.spinner.hide();
            _this.allItems.splice(index, 1);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.allItems);
            _this.setPage(0);
        }, function (error) {
            _this.spinner.hide();
            console.log('There was an error: ', error);
        });
    };
    DisbursementComponent.prototype.printDisbs = function () {
        if (this.allItems.length > 0) {
            var tempdisbs = this.allItems.filter(function (d) { return d.isChecked === true; });
            console.log(tempdisbs);
        }
    };
    DisbursementComponent.prototype.editPdcs = function (loanAppSeq) {
        this.disbursementService.loanAppSeq = loanAppSeq;
        sessionStorage.setItem('loanAppSeq', loanAppSeq.toString());
        this.router.navigate(['disbursement/edit-voucher']);
    };
    // FILTERS
    DisbursementComponent.prototype.deleteFilter = function (filter) {
        var index = this.filters.indexOf(filter, 0);
        if (index > -1) {
            this.filters.splice(index, 1);
        }
        if (filter.key === 'Gender') {
            this.genderSelected = '';
            this.allItems = this.disbs;
            this.setPage(0);
        }
        if (filter.type === 'geography') {
            this.allItems = this.disbs;
            this.setPage(0);
            if (this.genderSelected !== '') {
                this.genderFilter();
            }
        }
    };
    DisbursementComponent.prototype.genderFilter = function () {
        console.log(this.genderSelected);
        var found = false;
        for (var j = 0; j < this.filters.length; j++) {
            if (this.filters[j].key === 'Gender') {
                found = true;
                break;
            }
        }
        if (!found) {
            this.filters.push({ key: 'Gender', value: this.genderSelected });
        }
        else if (this.filters.length < 1) {
            this.allItems = this.disbs;
        }
        var filteredItems = [];
        for (var i = 0; i < this.allItems.length; i++) {
            console.log(i);
            if (this.allItems[i].gender === this.genderSelected) {
                console.log(this.allItems[i]);
                filteredItems.push(this.allItems[i]);
            }
        }
        console.log(filteredItems);
        this.allItems = filteredItems;
        this.setPage(0);
    };
    DisbursementComponent.prototype.loadLovs = function () {
        var _this = this;
        this.commonService.getValues(_shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_9__["GENDER"]).subscribe(function (res) {
            _this.gender = res;
        }, function (error) {
            console.log('err', error);
        });
        this.commonService.getValues(_shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_9__["MARITAL_STATUS"]).subscribe(function (res) {
            _this.maritalStatus = res;
        }, function (error) {
            console.log('err', error);
        });
        // this.commonService.getAllFilters().subscribe((res) => {
        //   console.log(res);
        //   this.organization = res.organization;
        //   this.geography = res.geography;
        // }, (error) => {
        //   console.log('err', error);
        // });
    };
    DisbursementComponent.prototype.navClick = function (element) {
        var parent = $(element).parent();
        if (parent.hasClass('toparrow')) {
            $('.sub-menu:first', parent).hide(300);
            parent.removeClass('toparrow');
        }
        else {
            $('.sub-menu:first', parent).show(300);
            parent.addClass('toparrow');
        }
    };
    DisbursementComponent.prototype.regionClick = function (region) {
        console.log(region);
    };
    DisbursementComponent.prototype.stateClick = function (state) {
        var _this = this;
        this.appendGeographyFilter('State', state.provName);
        this.commonService.applyFilter('state', state.provSeq).subscribe(function (res) {
            console.log(res);
            _this.allItems = res;
            if (_this.genderSelected !== '') {
                _this.genderFilter();
            }
            _this.setPage(0);
        }, function (error) { console.log(error); });
    };
    DisbursementComponent.prototype.districtClick = function (district) {
        var _this = this;
        this.appendGeographyFilter('District', district.districtName);
        this.commonService.applyFilter('district', district.districtSeq).subscribe(function (res) {
            console.log(res);
            _this.allItems = res;
            if (_this.genderSelected !== '') {
                _this.genderFilter();
            }
            _this.setPage(0);
        }, function (error) { console.log(error); });
    };
    DisbursementComponent.prototype.tehsilClick = function (tehsil) {
        var _this = this;
        this.appendGeographyFilter('Tehsil', tehsil.thslName);
        this.commonService.applyFilter('tehsil', tehsil.thslSeq).subscribe(function (res) {
            console.log(res);
            _this.allItems = res;
            if (_this.genderSelected !== '') {
                _this.genderFilter();
            }
            _this.setPage(0);
        }, function (error) { console.log(error); });
    };
    DisbursementComponent.prototype.ucClick = function (uc) {
        var _this = this;
        this.appendGeographyFilter('UC', uc.ucName + '-' + uc.ucDescription);
        this.commonService.applyFilter('uc', uc.ucSeq).subscribe(function (res) {
            console.log(res);
            _this.allItems = res;
            if (_this.genderSelected !== '') {
                _this.genderFilter();
            }
            _this.setPage(0);
        }, function (error) { console.log(error); });
    };
    DisbursementComponent.prototype.appendGeographyFilter = function (key, value) {
        var found = false;
        for (var i = 0; i < this.filters.length; i++) {
            if (this.filters[i].type === 'geography') {
                found = true;
                this.filters[i].key = key;
                this.filters[i].value = value;
            }
        }
        if (!found) {
            this.filters.push({ key: key, value: value, type: 'geography' });
        }
        if (this.genderSelected !== '') {
            this.genderFilter();
        }
    };
    DisbursementComponent.prototype.showField = function () {
        this.showFields = true;
    };
    DisbursementComponent.prototype.closeField = function () {
        this.showFields = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], DisbursementComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], DisbursementComponent.prototype, "paginator", void 0);
    DisbursementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-disbursement',
            template: __webpack_require__(/*! ./disbursement.component.html */ "./src/app/pages/disbursement/disbursement.component.html"),
            styles: [__webpack_require__(/*! ./disbursement.component.css */ "./src/app/pages/disbursement/disbursement.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_disbursement_service__WEBPACK_IMPORTED_MODULE_3__["DisbursementService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_12__["TransfersService"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]])
    ], DisbursementComponent);
    return DisbursementComponent;
}());



/***/ }),

/***/ "./src/app/pages/disbursement/disbursement.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/disbursement/disbursement.module.ts ***!
  \***********************************************************/
/*! exports provided: DisbursementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisbursementModule", function() { return DisbursementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _disbursement_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disbursement-routing.module */ "./src/app/pages/disbursement/disbursement-routing.module.ts");
/* harmony import */ var _disbursement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./disbursement.component */ "./src/app/pages/disbursement/disbursement.component.ts");
/* harmony import */ var _disbursement_voucher_disbursement_voucher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./disbursement-voucher/disbursement-voucher.component */ "./src/app/pages/disbursement/disbursement-voucher/disbursement-voucher.component.ts");
/* harmony import */ var _payment_schedule_payment_schedule_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-schedule/payment-schedule.component */ "./src/app/pages/disbursement/payment-schedule/payment-schedule.component.ts");
/* harmony import */ var _pdcs_pdcs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pdcs/pdcs.component */ "./src/app/pages/disbursement/pdcs/pdcs.component.ts");
/* harmony import */ var _voucher_info_voucher_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./voucher-info/voucher-info.component */ "./src/app/pages/disbursement/voucher-info/voucher-info.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.service */ "./src/app/pages/disbursement/auth.service.ts");
/* harmony import */ var _can_activate_route_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./can-activate-route.guard */ "./src/app/pages/disbursement/can-activate-route.guard.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agency_agency_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./agency/agency.component */ "./src/app/pages/disbursement/agency/agency.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _AuthGuard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AuthGuard.service */ "./src/app/pages/disbursement/AuthGuard.service.ts");
/* harmony import */ var _edit_pdc_edit_pdc_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-pdc/edit-pdc.component */ "./src/app/pages/disbursement/edit-pdc/edit-pdc.component.ts");
/* harmony import */ var _edit_voucher_edit_voucher_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./edit-voucher/edit-voucher.component */ "./src/app/pages/disbursement/edit-voucher/edit-voucher.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// import { NoDblClickDirective } from 'src/app/shared/directives/double-click-preventing.directive';
var DisbursementModule = /** @class */ (function () {
    function DisbursementModule() {
    }
    DisbursementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                _disbursement_routing_module__WEBPACK_IMPORTED_MODULE_2__["DisbursementRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_14__["DataTablesModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
            ],
            declarations: [
                _disbursement_component__WEBPACK_IMPORTED_MODULE_3__["DisbursementComponent"],
                _disbursement_voucher_disbursement_voucher_component__WEBPACK_IMPORTED_MODULE_4__["DisbursementVoucherComponent"],
                _payment_schedule_payment_schedule_component__WEBPACK_IMPORTED_MODULE_5__["PaymentScheduleComponent"],
                _pdcs_pdcs_component__WEBPACK_IMPORTED_MODULE_6__["PdcsComponent"],
                _voucher_info_voucher_info_component__WEBPACK_IMPORTED_MODULE_7__["VoucherInfoComponent"],
                _agency_agency_component__WEBPACK_IMPORTED_MODULE_12__["AgencyComponent"],
                _edit_pdc_edit_pdc_component__WEBPACK_IMPORTED_MODULE_16__["EditPdcComponent"],
                _edit_voucher_edit_voucher_component__WEBPACK_IMPORTED_MODULE_17__["EditVoucherComponent"],
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _can_activate_route_guard__WEBPACK_IMPORTED_MODULE_9__["CanActivateRouteGuard"], _AuthGuard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]
            ]
        })
    ], DisbursementModule);
    return DisbursementModule;
}());



/***/ }),

/***/ "./src/app/pages/disbursement/edit-pdc/edit-pdc.component.css":
/*!********************************************************************!*\
  !*** ./src/app/pages/disbursement/edit-pdc/edit-pdc.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/disbursement/edit-pdc/edit-pdc.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/disbursement/edit-pdc/edit-pdc.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <app-voucher-info (recvAmt)=\"recievemsg($event)\" (pdcslimit)=\"pdcRequired($event)\"\r\n      (isPaymentReq)=\"paymentReq($event)\"></app-voucher-info>\r\n      <nav aria-label=\"breadcrumb\">\r\n        <ol class=\"breadcrumb breadcrumb-arrow\">\r\n          <li class=\"ng-star-inserted active\">\r\n            <a >Disbursement Voucher</a>\r\n          </li>\r\n            <li >\r\n                <a  >PDCs</a>\r\n              </li>\r\n      \r\n        </ol>\r\n      </nav>\r\n    <div class=\"content\" *ngIf=\"pdcslimit==0 && pdcslimit==null\">\r\n      <h6 class=\"colorBlack\"><span>PDCs not required for this product.</span> </h6>\r\n    </div>\r\n    <div class=\"content\" *ngIf=\"pdcslimit>0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6 \">\r\n          <h6 class=\"colorBlack\">PDCs</h6>\r\n        </div>\r\n\r\n        <div class=\"modal fade\" id=\"addmember\" role=\"dialog\">\r\n          <div class=\"modal-dialog mymodal\">\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">PDC</h5>\r\n              </div>\r\n              <form class=\"md-float-material\" [formGroup]=\"pdcForm\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"modal-body\">\r\n                  <div class=\"cRow\">\r\n                    <div class=\"cCol2\">\r\n                      <mat-form-field>\r\n                        <input matInput required [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"collDt\"\r\n                          placeholder=\"Cheque Date:\" [matDatepicker]=\"picker1\" disabled readonly />\r\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                        <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                        <mat-error *ngIf=\"!pdcForm.get('collDt').valid\">\r\n                          Cheque Date is <strong>required</strong>\r\n                        </mat-error>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"cCol2\">\r\n                      <mat-form-field>\r\n                        <input type=\"text\" matInput required placeholder=\"Cheque Number:\" formControlName=\"cheqNum\"\r\n                          [errorStateMatcher]=\"matcher\" pattern=\"[0-9]{1,16}\">\r\n                        <mat-error *ngIf=\"!pdcForm.get('cheqNum').valid\">\r\n                          max 16 digets <strong>required</strong>\r\n                        </mat-error>\r\n\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"cCol2\">\r\n                      <mat-form-field>\r\n                        <input type=\"text\" matInput required placeholder=\"Amount:\" formControlName=\"amt\"\r\n                          [errorStateMatcher]=\"matcher\" pattern=\"[0-9]{1,6}\">\r\n                        <mat-error *ngIf=\"!pdcForm.get('amt').valid\">\r\n                          Amount is <strong>Invalid</strong>\r\n                        </mat-error>\r\n                      </mat-form-field>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"modal-footer text-center\">\r\n                  <button type=\"submit\" class=\"btn btn-primary\">Ok</button>\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"cRow\">\r\n        <div class=\"cCol1\">\r\n          <label>Bank Name:</label>\r\n          <mat-select [(ngModel)]=\"model.bankKey\" placeholder=\"Bank\" name=\"bankNm\" required\r\n            [errorStateMatcher]=\"matcher\" pattern=\"^[1-9]\\d*$\" class=\"form-control\">\r\n            <mat-option *ngFor=\"let bank of banks\" [value]=\"bank.codeKey\">\r\n              {{bank.codeValue}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </div>\r\n        <div class=\"cCol1\">\r\n          <label>Branch:</label>\r\n          <input type=\"text\" [(ngModel)]=\"model.brnchNm\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"cCol1\">\r\n          <label>Account No.:</label>\r\n          <input type=\"text\" pattern=\"[0-9]{1,20}\" (keypress)=\"onlyNumbers($event)\" [(ngModel)]=\"model.acctNum\"\r\n            #hhMembers=\"ngModel\" class=\"form-control\">\r\n          <mat-error *ngIf=\"hhMembers.errors?.pattern\">\r\n            20 digits are <strong>allowed </strong>\r\n          </mat-error>\r\n        </div>\r\n        <div class=\"cCol1\">\r\n          <div>\r\n            <button class=\"btn btn-primary btn-sm mt-4\" (click)=\"addPdcHeader()\"><i class=\"fa fa-floppy-o\"\r\n                aria-hidden=\"true\"></i></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 addBtn mb-2\">\r\n        <button class=\"btn btn-primary btn-sm\" (click)=\"onAddPdc()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n      </div>\r\n      <div class=\"table-responsive mb-md-5\">\r\n        <table class=\"table\">\r\n          <thead class=\"thead-light\">\r\n            <tr>\r\n              <th>PDCs ID</th>\r\n              <th>Collection Date</th>\r\n              <th>Cheque No.</th>\r\n              <th>Amount</th>\r\n              <th>Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let code of allItems\">\r\n              <td>{{code.pdcId}}</td>\r\n              <td>{{code.collDt | date :'dd-MM-yyyy'}}</td>\r\n              <td>{{code.cheqNum}}</td>\r\n              <td>{{code.amt | currency:'PKR':''}}</td>\r\n              <td>\r\n                <a (click)=\"editPdc(code)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                <a (click)=\"deleteItem(code)\" class=\"iconBtn delBtn\"> <i class=\"fa fa-trash-o\"></i></a>\r\n                <!--              <a href=\"#.\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>-->\r\n              </td>\r\n            </tr>\r\n\r\n          </tbody>\r\n          <tbody>\r\n            <tr class=\"total-info\">\r\n              <td></td>\r\n              <td></td>\r\n              <td class=\"text-right\"><b>Total Amount:</b></td>\r\n              <td>{{totalAmount | currency:'PKR':''}}</td>\r\n              <td>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <!-- \r\n                 <button class=\"btn btn-primary\" (click)=\"disbursementPosting()\">Disburse Credit</button>\r\n        <button class=\"btn btn-default\">Save</button> -->\r\n    </div>\r\n    <button class=\"btn btn-primary\" routerLink=\"/disbursement/edit-voucher\">Back</button>\r\n    <button class=\"btn btn-primary\" (click)=\"savePdcs()\">Save Pdcs</button>\r\n\r\n    <!-- <button *ngIf=\"isPaymentReq\" class=\"btn btn-primary\" routerLink=\"/disbursement/payment-schedule\">Back</button>\r\n      <button *ngIf=\"!isPaymentReq\" class=\"btn btn-primary\" routerLink=\"/disbursement/voucher\">Back</button>\r\n      <button class=\"btn btn-primary\" (click)=\"openDialog()\">Disburse Credit</button> -->\r\n\r\n  </div>\r\n</main>\r\n<div class=\"modal fade\" id=\"DisburseLoan\" role=\"dialog\">\r\n  <div class=\"modal-dialog mymodal big\" style=\"width: 20%\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Disburse Credit Application</h5>\r\n      </div>\r\n      <form (ngSubmit)=\"disbursementPosting()\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol2\">\r\n              <mat-checkbox class=\"example-margin\" [(ngModel)]=\"post\" name=\"post\" labelPosition=\"before\">Do you want to\r\n                Post this transaction?</mat-checkbox>\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button type=\"submit\" class=\"btn btn-primary btn-min\">Ok</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<script>\r\n  $('.date').datepicker({\r\n  });\r\n\r\n  $('input#yescheque').change(function () {\r\n    if (this.checked) {\r\n      $('#addpdcsrow').show();\r\n    }\r\n    else {\r\n\r\n    }\r\n  })\r\n\r\n  $('input#ChequeNot').change(function () {\r\n    if (this.checked) {\r\n      $('#checknotrow').show();\r\n    }\r\n    else {\r\n\r\n    }\r\n  })\r\n\r\n</script>"

/***/ }),

/***/ "./src/app/pages/disbursement/edit-pdc/edit-pdc.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/disbursement/edit-pdc/edit-pdc.component.ts ***!
  \*******************************************************************/
/*! exports provided: MY_FORMATS, EditPdcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPdcComponent", function() { return EditPdcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_disbursement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/disbursement.service */ "./src/app/shared/services/disbursement.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_models_pdc_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/models/pdc.model */ "./src/app/shared/models/pdc.model.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/helpers/MyErrorStateMatcher.helper */ "./src/app/shared/helpers/MyErrorStateMatcher.helper.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/models/REF_CODE_GRP_KEYS.mocks */ "./src/app/shared/models/REF_CODE_GRP_KEYS.mocks.ts");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var moment = moment__WEBPACK_IMPORTED_MODULE_13__;
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
var EditPdcComponent = /** @class */ (function () {
    // should be false temporary true
    function EditPdcComponent(router, disbursementService, spinner, fb, toaster, commonService) {
        this.router = router;
        this.disbursementService = disbursementService;
        this.spinner = spinner;
        this.fb = fb;
        this.toaster = toaster;
        this.commonService = commonService;
        this.totalAmount = 0;
        this.allItems = [];
        this.matcher = new _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_8__["MyErrorStateMatcher"]();
        this.model = new _shared_models_pdc_model__WEBPACK_IMPORTED_MODULE_6__["Pdc"]();
        this.isPdcHeaderAdded = false;
        this.rcevAmt = 0;
        //isPdcs:boolean=false;
        this.isPaymentReq = false;
        this.post = false;
        this.pdcForm = this.fb.group({
            pdcId: [''],
            collDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            cheqNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[0-9]{1,16}')])],
            amt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            pdcHdrSeq: [''],
            pdcDtlSeq: ['']
        });
        // this.minDate = new Date(sessionStorage.getItem("frstInstDt"));
        // this.maxDate = new Date(sessionStorage.getItem("lsatInstDt"));
        //this.pdcslimit=+sessionStorage.getItem("pdcsLimit");
    }
    EditPdcComponent.prototype.onSubmit = function () {
        if (this.pdcForm.invalid) {
            return;
        }
        var allowPdc = true;
        var result = Object.assign({}, this.pdcForm.value);
        this.allItems.forEach(function (item) {
            if (item.cheqNum == result.cheqNum && item.pdcDtlSeq != result.pdcDtlSeq) {
                allowPdc = false;
            }
        });
        if (!allowPdc) {
            this.toaster.warning('Check Number Already Exist!', 'Error!');
            return;
        }
        $('#addmember').modal('hide');
        var validAmt = this.totalAmount + Number(result.amt);
        var editValidAmt = this.totalAmount + Number(result.amt) - this.editPrivousAmt;
        if (!this.edit && validAmt <= this.rcevAmt) {
            result.pdcHdrSeq = this.model.pdcHdrSeq;
            result.pdcId = this.allItems == null ? 1 : this.allItems.length + 1;
            this.allItems.push(result);
            this.calTotalAmount();
        }
        else if (this.edit && editValidAmt <= this.rcevAmt) {
            var itemIndex = this.allItems.findIndex(function (item) { return item.pdcId === result.pdcId; });
            this.allItems[itemIndex] = result;
            this.edit = false;
            this.calTotalAmount();
        }
        else {
            this.toaster.warning('Total of PDCs should be equal to Receiveable Amount', 'Error!');
        }
    };
    EditPdcComponent.prototype.savePdcs = function () {
        var _this = this;
        if (this.allItems.length != this.pdcslimit && this.pdcslimit > 0) {
            this.toaster.warning('Accepted number of PDCs are: ' + this.pdcslimit, 'Error!');
            return false;
        }
        if (this.totalAmount != this.rcevAmt && this.pdcslimit != 0) {
            this.toaster.warning('PDC amount should be equal to payable amount', 'Error!');
            return false;
        }
        this.disbursementService.batchPostingPdc(this.model.pdcHdrSeq, this.allItems).subscribe(function (d) {
            _this.getAllItems();
        });
    };
    EditPdcComponent.prototype.editPdc = function (mwPdcDtlDTOs) {
        this.pdcForm.reset();
        this.editPrivousAmt = 0;
        this.edit = true;
        $('#addmember').modal('show');
        this.pdcForm.patchValue(mwPdcDtlDTOs);
        this.editPrivousAmt = mwPdcDtlDTOs.amt;
    };
    EditPdcComponent.prototype.ngOnInit = function () {
        this.disbursementService.loanAppSeq = Number.parseInt(sessionStorage.getItem('loanAppSeq'));
        this.getAllItems();
        this.loadBankList();
    };
    EditPdcComponent.prototype.getAllItems = function () {
        var _this = this;
        if (this.pdcslimit != 0) {
            this.disbursementService.getAllPdcs().subscribe(function (data) {
                _this.model = data;
                if (_this.model != null) {
                    _this.allItems = _this.model.mwPdcDtlDTOs;
                }
                if (_this.allItems != null) {
                    _this.allItems.forEach(function (d) { return _this.totalAmount += +d.amt; });
                }
            });
        }
    };
    EditPdcComponent.prototype.onAddPdc = function () {
        if (this.allItems.length == this.pdcslimit) {
            this.toaster.warning('Not Allowed to add more PDcs for this product', 'Info!');
            return false;
        }
        if (!this.isPdcHeaderAdded) {
            this.addPdcHeader();
            $('#addmember').modal('show');
        }
        else {
            this.pdcForm.reset();
            $('#addmember').modal('show');
        }
    };
    EditPdcComponent.prototype.deleteItem = function (pdcDetail) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this PDC?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                pdcDetail.delFlg = true;
                _this.allItems.splice(_this.allItems.indexOf(pdcDetail.pdcId), 1);
                _this.calTotalAmount();
            }
        });
    };
    EditPdcComponent.prototype.addPdcHeader = function () {
        var _this = this;
        this.spinner.show();
        this.model.loanAppSeq = this.disbursementService.loanAppSeq;
        this.disbursementService.addPdcHeader(this.model).subscribe(function (p) {
            _this.spinner.hide();
            _this.isPdcHeaderAdded = true;
            _this.model.pdcHdrSeq = p.pdcHdrSeq;
        }, function (error) {
            _this.spinner.hide();
            _this.toaster.error(error.error.error, "Login failed:");
        });
    };
    EditPdcComponent.prototype.loadBankList = function () {
        var _this = this;
        this.commonService.getValues(_shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_10__["BANKS"]).subscribe(function (res) {
            _this.banks = res;
        }, function (error) {
            console.log('err', error);
        });
    };
    EditPdcComponent.prototype.calTotalAmount = function () {
        var _this = this;
        this.totalAmount = 0;
        this.allItems.forEach(function (d) { return _this.totalAmount += +d.amt; });
    };
    EditPdcComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    EditPdcComponent.prototype.recievemsg = function ($event) {
        this.rcevAmt = $event;
    };
    EditPdcComponent.prototype.pdcRequired = function ($event) {
        this.pdcslimit = $event;
    };
    EditPdcComponent.prototype.paymentReq = function ($event) {
        this.isPaymentReq = $event;
    };
    EditPdcComponent.prototype.disbursementPosting = function () {
        var _this = this;
        $('#DisburseLoan').modal('hide');
        console.log(this.allItems.length + "---" + this.pdcslimit);
        if (this.allItems.length != this.pdcslimit && this.pdcslimit > 0) {
            this.toaster.warning('Accepted number of PDCs are: ' + this.pdcslimit, 'Error!');
            return false;
        }
        if (this.totalAmount != this.rcevAmt && this.pdcslimit != 0) {
            this.toaster.warning('PDC amount should be equal to payable amount', 'Error!');
            return false;
        }
        this.disbursementService.disbursementPosting(this.post, false).subscribe(function (data) {
            _this.router.navigate(['/disbursement']);
        });
    };
    EditPdcComponent.prototype.openDialog = function () {
        $('#DisburseLoan').modal('show');
    };
    EditPdcComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-pdc',
            template: __webpack_require__(/*! ./edit-pdc.component.html */ "./src/app/pages/disbursement/edit-pdc/edit-pdc.component.html"),
            styles: [__webpack_require__(/*! ./edit-pdc.component.css */ "./src/app/pages/disbursement/edit-pdc/edit-pdc.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_11__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_disbursement_service__WEBPACK_IMPORTED_MODULE_1__["DisbursementService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], EditPdcComponent);
    return EditPdcComponent;
}());



/***/ }),

/***/ "./src/app/pages/disbursement/edit-voucher/edit-voucher.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/disbursement/edit-voucher/edit-voucher.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/disbursement/edit-voucher/edit-voucher.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/disbursement/edit-voucher/edit-voucher.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n\r\n  <div class=\"container-fluid\">\r\n    <app-voucher-info  (disbursementAmt)=\"recievemsg($event)\" (isPaymentReq)=\"paymentReq($event)\" (prdSeq)=\"getPrdSeq($event)\" (appSts)=\"getAppSts($event)\" ></app-voucher-info>\r\n    <nav aria-label=\"breadcrumb\">\r\n        <ol class=\"breadcrumb breadcrumb-arrow\">\r\n          <li class=\"ng-star-inserted active\">\r\n            <a >{{prdSeq==='0010' && appSts==='0004'?\"Agency Creation\":\"Disbursement Voucher\"}}</a>\r\n          </li>\r\n            <li >\r\n                <a  >PDCs</a>\r\n              </li>\r\n      \r\n        </ol>\r\n      </nav>\r\n    <div class=\"content\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6 \">\r\n          <h6 class=\"colorBlack\">{{prdSeq==='0010' && appSts==='0004'?\"Agency Creation\":\"Disbursement Voucher\"}}</h6>\r\n        </div>\r\n        <div class=\"col-sm-6 addBtn mb-2\">\r\n        \r\n          <div class=\"modal fade\" id=\"addVoucher\" role=\"dialog\">\r\n            <div class=\"modal-dialog mymodal\">\r\n\r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Voucher</h5>\r\n                </div>\r\n                <form class=\"md-float-material\" [formGroup]=\"agencyForm\" (ngSubmit)=\"onSubmit()\" >\r\n                  <div class=\"modal-body\">\r\n                    <div class=\"cRow\">\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <mat-select placeholder=\"Payment Mode\"  formControlName=\"pymtTypSeq\" (selectionChange)=\"onRecoveryChange()\"\r\n                                      [errorStateMatcher]=\"matcher\">\r\n                            <mat-option  *ngFor=\"let code of paymentModes\" [value]=\"code\">\r\n                              {{code.typStr}}\r\n                            </mat-option>\r\n                          </mat-select>\r\n                          <mat-error *ngIf=\"!agencyForm.get('pymtTypSeq').valid\">\r\n                            Payment Mode is <strong>required</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"cCol3-col\" *ngIf=\"isCheck\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Instrument No:\" formControlName=\"instrNum\"\r\n                                 [errorStateMatcher]=\"matcher\">\r\n                          <mat-error *ngIf=\"!agencyForm.get('instrNum').valid\">\r\n                            Instrument Number is <strong>required</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Amount:\" formControlName=\"amt\"\r\n                                 [errorStateMatcher]=\"matcher\" pattern=\"[0-9]{1,6}\">\r\n                          <mat-error *ngIf=\"!agencyForm.get('amt').valid\">\r\n                            Amount is <strong>invalid</strong>\r\n                          </mat-error>\r\n                          <mat-error *ngIf=\"agencyForm.errors?.pattern\">\r\n                            Voucher amount is  <strong>invalid </strong>\r\n                           </mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"modal-footer text-center\">\r\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!agencyForm.valid\">Ok</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-responsive mb-md-5\">\r\n        <table class=\"table order-list\"  id=\"myTable\">\r\n          <thead class=\"thead-light\">\r\n          <tr>\r\n            <th>Payment Mode</th>\r\n            <th>Instrument No.</th>\r\n            <th>Amount</th>\r\n            <th>Action</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let code of allItems\">\r\n              <td>\r\n                  <div *ngFor=\"let pm of paymentModesOrig\" >\r\n                    <div *ngIf=\"code.pymtTypSeq.typSeq===pm.typSeq\">\r\n                        {{pm.typStr}}\r\n                    </div>\r\n                   </div>\r\n                </td>\r\n            <td>{{code.instrNum}}</td>\r\n            <td>{{code.amt  | currency:'PKR':''}}</td>\r\n            <td>\r\n              <a (click)=\"editVoucher(code)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n            </td>\r\n          </tr>\r\n         \r\n          </tbody>\r\n          <tbody>\r\n          <tr class=\"total-info\">\r\n            <td></td>\r\n            <td class=\"text-right\"><b>Total Amount:</b></td>\r\n            <td>{{totalAmount  | currency:'PKR':''}}</td>\r\n            <td>\r\n            </td>\r\n          </tr>\r\n          </tbody>\r\n\r\n\r\n\r\n        </table>\r\n      </div>\r\n      <button class=\"btn btn-primary\" (click)=\"saveVouchers()\">Save Vouchers</button>\r\n      <button  [disabled]=\"totalAmount!=disbursementAmt\"  class=\"btn btn-primary\" routerLink=\"/disbursement/edit-pdcs\">Next</button>\r\n      \r\n      <!--<button class=\"btn btn-default\">Save</button>-->\r\n    </div>\r\n  </div>\r\n  </main>\r\n"

/***/ }),

/***/ "./src/app/pages/disbursement/edit-voucher/edit-voucher.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/disbursement/edit-voucher/edit-voucher.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditVoucherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVoucherComponent", function() { return EditVoucherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_disbursementVoucherListItem_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/disbursementVoucherListItem.model */ "./src/app/shared/models/disbursementVoucherListItem.model.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_services_disbursement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/disbursement.service */ "./src/app/shared/services/disbursement.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var src_app_shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/helpers/MyErrorStateMatcher.helper */ "./src/app/shared/helpers/MyErrorStateMatcher.helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var EditVoucherComponent = /** @class */ (function () {
    function EditVoucherComponent(router, disbursementService, spinner, toastr, fb, commonService, toaster) {
        this.router = router;
        this.disbursementService = disbursementService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.fb = fb;
        this.commonService = commonService;
        this.toaster = toaster;
        this.allItems = [];
        this.totalAmount = 0;
        this.matcher = new src_app_shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_10__["MyErrorStateMatcher"]();
        this.submitted = false;
        this.model = new src_app_shared_models_disbursementVoucherListItem_model__WEBPACK_IMPORTED_MODULE_1__["AgencyVoucher"]();
        this.paymentModes = [];
        this.edit = false;
        this.isCheck = false;
        this.isPaymentReq = false;
        this.paymentModesOrig = [];
        this.agencyForm = this.fb.group({
            pymtTypSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            instrNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]+$')])],
            amt: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            loanAppSeq: [''],
            dsbmtDtlKey: ['']
        });
    }
    EditVoucherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.disbursementService.loanAppSeq = Number.parseInt(sessionStorage.getItem('loanAppSeq'));
        console.log(this.disbursementService.loanAppSeq = Number.parseInt(sessionStorage.getItem('loanAppSeq')));
        this.disbursementService.getAllAgencies().subscribe(function (data) {
            _this.model = data;
            _this.allItems = _this.model.disbursementVoucherDetailDTOs;
            _this.allItems.forEach(function (d) {
                _this.totalAmount += +d.amt;
                console.log(d);
                d.pymtTypSeq = { typSeq: d.pymtTypSeq };
            });
            console.log(_this.allItems);
        });
        console.table(this.allItems);
        this.loadPaymentModes();
        sessionStorage.setItem("frstInstDt", new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US').transform(new Date(), 'dd-MM-yyyy'));
        sessionStorage.setItem("lsatInstDt", new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US').transform(new Date(), 'dd-MM-yyyy'));
    };
    EditVoucherComponent.prototype.onRecoveryChange = function () {
        var instrNum = this.agencyForm.get('instrNum');
        if (this.agencyForm.get('pymtTypSeq').value.typId === '0008') {
            this.isCheck = true;
            instrNum.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]+$')]));
        }
        else {
            instrNum.clearValidators();
            this.isCheck = false;
        }
        instrNum.updateValueAndValidity();
    };
    EditVoucherComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.edit) {
            var a = this.agencyForm.controls['pymtTypSeq'].value;
            if (this.voucher.pymtTypSeq.typSeq == a.typSeq) {
                this.toastr.info('Payment Cannot Same', 'Information');
                return;
            }
            if ((this.voucher.pymtTypSeq.typId == "0001" || this.voucher.pymtTypSeq.typId == "0008") && a.typId == "0004") {
                this.toastr.info('Easy Pay Not Allowed', 'Information');
                return;
            }
        }
        // console.log(this.voucher.pymtTypSeq.typSeq)
        // console.log(this.agencyForm.controls['pymtTypSeq'].value)
        // return;
        var result = Object.assign({}, this.agencyForm.getRawValue());
        result.pymtTypSeq = result.pymtTypSeq.typSeq;
        $('#addVoucher').modal('hide');
        var validAmt = this.totalAmount + Number(result.amt);
        var editValidAmt = this.totalAmount + Number(result.amt) - this.editPrivousAmt;
        result.loanAppSeq = this.disbursementService.loanAppSeq;
        if (!this.edit && validAmt <= this.disbursementAmt) {
            this.disbursementService.addAgency(result, 'add').subscribe(function (d) {
                result.dsbmtDtlKey = d.dsbmtDtlKey;
                _this.allItems.push(result);
                _this.calTotalAmount();
            });
        }
        else if (this.edit && editValidAmt <= this.disbursementAmt) {
            if (result.pymtTypSeq == 124) {
                result.instrNum = '';
            }
            this.disbursementService.addAgency(result, 'update').subscribe(function (d) {
                console.log(result);
                _this.paymentModes.forEach(function (mode) {
                    if (mode.typSeq == result.pymtTypSeq) {
                        _this.isCheck = mode.typId === '0008' ? true : false;
                        result.pymtTypSeq = mode;
                    }
                });
                var itemIndex = _this.allItems.findIndex(function (item) { return item.dsbmtDtlKey === result.dsbmtDtlKey; });
                _this.allItems[itemIndex] = result;
                _this.calTotalAmount();
                _this.edit = false;
            });
        }
        else {
            this.toastr.warning('Total Amount of Vouchers Should be Equal to Disburse Amount', 'Error!');
        }
    };
    EditVoucherComponent.prototype.openAddVoucher = function () {
        $('#addVoucher').modal('show');
        this.agencyForm.reset();
        this.agencyForm = this.fb.group({
            pymtTypSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            instrNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]+$')])],
            amt: [this.disbursementAmt, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            loanAppSeq: [''],
            dsbmtDtlKey: ['']
        });
    };
    EditVoucherComponent.prototype.editVoucher = function (voucher) {
        var _this = this;
        console.log(this.allItems);
        this.editPrivousAmt = 0;
        this.onRecoveryChange();
        this.paymentModes.forEach(function (mode) {
            if (mode.typSeq == voucher.pymtTypSeq.typSeq) {
                _this.isCheck = mode.typId === '0008' ? true : false;
                voucher.pymtTypSeq = mode;
            }
        });
        this.agencyForm.patchValue(voucher);
        // this.agencyForm.controls.pymtTypSeq.setValue(this.voucher.pymtTypSeq.typSeq)
        this.editPrivousAmt = voucher.amt;
        this.edit = true;
        this.voucher = voucher;
        console.log(this.voucher);
        $('#addVoucher').modal('show');
    };
    EditVoucherComponent.prototype.gettingValueOfPayment = function (typStr) {
        var a = '';
    };
    EditVoucherComponent.prototype.deleteItem = function (voucher) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Disbursement Voucher?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.disbursementService.deleteAgency(voucher).subscribe(function () {
                    _this.allItems.splice(_this.allItems.indexOf(voucher.dsbmtDtlKey), 1);
                    _this.calTotalAmount();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Deleted!', 'Disbursement Voucher values has been deleted.', 'success');
                }, function (error) { return console.log('There was an error: ', error); });
            }
        });
    };
    EditVoucherComponent.prototype.calTotalAmount = function () {
        var _this = this;
        this.totalAmount = 0;
        this.allItems.forEach(function (d) { return _this.totalAmount += +d.amt; });
    };
    EditVoucherComponent.prototype.loadPaymentModes = function () {
        var _this = this;
        this.disbursementService.getClntPaymentTypes().subscribe(function (data) {
            _this.paymentModes = data;
            _this.paymentModesOrig = data;
            console.log(_this.paymentModes);
            var i = -1;
            _this.paymentModes.forEach(function (m, ind) {
                if (m.typId == '0007') {
                    i = ind;
                }
            });
            if (i > -1) {
                _this.paymentModes.splice(i, 1);
            }
        });
    };
    EditVoucherComponent.prototype.saveVouchers = function () {
        var _this = this;
        this.disbursementService.saveVoucherErrorRectifications().subscribe(function (d) {
        }, function (error) {
            _this.spinner.hide();
            if (error.status == 500) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
            else if (error.status == 404) {
                _this.toaster.error("404", "Error");
            }
            else if (error) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
        });
    };
    EditVoucherComponent.prototype.recievemsg = function ($event) {
        this.disbursementAmt = $event;
    };
    EditVoucherComponent.prototype.paymentReq = function ($event) {
        this.isPaymentReq = $event;
    };
    EditVoucherComponent.prototype.getPrdSeq = function ($event) {
        this.prdSeq = $event;
    };
    EditVoucherComponent.prototype.getAppSts = function ($event) {
        this.appSts = $event;
    };
    EditVoucherComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    EditVoucherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-voucher',
            template: __webpack_require__(/*! ./edit-voucher.component.html */ "./src/app/pages/disbursement/edit-voucher/edit-voucher.component.html"),
            styles: [__webpack_require__(/*! ./edit-voucher.component.css */ "./src/app/pages/disbursement/edit-voucher/edit-voucher.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_shared_services_disbursement_service__WEBPACK_IMPORTED_MODULE_5__["DisbursementService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]])
    ], EditVoucherComponent);
    return EditVoucherComponent;
}());



/***/ }),

/***/ "./src/app/pages/disbursement/payment-schedule/payment-schedule.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/pages/disbursement/payment-schedule/payment-schedule.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/disbursement/payment-schedule/payment-schedule.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/disbursement/payment-schedule/payment-schedule.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n\r\n  <div class=\"container-fluid\">\r\n    <app-voucher-info [totalRev]=\"totalRev\" [frstInstDt]=\"frstInstDt\" (prdSeq)=\"getPrdSeq($event)\"></app-voucher-info>\r\n    <nav aria-label=\"breadcrumb\">\r\n      <ol class=\"breadcrumb breadcrumb-arrow\">\r\n        <li>\r\n          <a>Disbursement Voucher</a>\r\n        </li>\r\n        <li class=\"ng-star-inserted active\">\r\n          <a>Repayment Schedule</a>\r\n        </li>\r\n        <li>\r\n          <a>PDCs</a>\r\n        </li>\r\n\r\n      </ol>\r\n    </nav>\r\n    <div class=\"content\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6 \">\r\n          <h6 class=\"colorBlack\">Payment Schedule</h6>\r\n        </div>\r\n        <div class=\"col-sm-6 addBtn mb-2\">\r\n          <button *ngIf=\"prdSeq!='0019'\" class=\"btn btn-primary btn-sm\" id=\"addrow\" (click)=\"generateSchedule()\">\r\n            {{isPaymentSchedle?'Regenerate':'Generate'}}</button>\r\n          <button appNoDblClick *ngIf=\"prdSeq=='0019'\" class=\"btn btn-primary btn-sm\" id=\"addrow\"\r\n            (click)=\"kskLRSGenrate()\">\r\n            {{isPaymentSchedle?'Regenerate':'Generate'}}</button>\r\n          <div class=\"modal fade\" id=\"AssignCheque\" role=\"dialog\">\r\n            <div class=\"modal-dialog mymodal\">\r\n\r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Charges Detail</h5>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <thead class=\"thead-light\">\r\n                        <tr>\r\n                          <th><b>Charge Type</b></th>\r\n                          <th><b>Amount</b></th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let code of assignCheck\">\r\n                          <td>{{code.chrgTyp}}/-</td>\r\n                          <td>{{code.amt}}/-</td>\r\n                        </tr>\r\n\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                  <div class=\"modal-footer smmodal-footer text-center\">\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Ok</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal fade\" id=\"generatemodal\" role=\"dialog\">\r\n            <div class=\"modal-dialog mymodal\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Payment Schedule</h5>\r\n                </div>\r\n                <form class=\"md-float-material\" [formGroup]=\"scheduleForm\" (ngSubmit)=\"onSubmit()\">\r\n                  <div class=\"modal-body\">\r\n                    <div class=\"cRow\">\r\n                      <div class=\"cCol2\">\r\n                        <mat-form-field>\r\n                          <input [min]=\"minDate\" [max]=\"maxDate\" matInput required formControlName=\"frstInstDt\"\r\n                            placeholder=\"First Installment Date:\" [matDatepicker]=\"picker1\" disabled readonly />\r\n                          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                          <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                          <mat-error *ngIf=\"!scheduleForm.get('frstInstDt').valid\">\r\n                            First Installment Date is <strong>required</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"modal-footer text-center\">\r\n                    <button type=\"button\" appNoDblClick (click)=\"onSubmit()\" [disabled]=\"regen\"\r\n                      class=\"btn btn-primary\">Ok</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-responsive mb-md-5\">\r\n        <table class=\"table\">\r\n          <thead class=\"thead-light\">\r\n            <tr>\r\n              <th>Installment No</th>\r\n              <th>Due Date</th>\r\n              <th>Principal Amount Due</th>\r\n              <th>Total Charged Amount Due</th>\r\n              <th>Total Amount Due</th>\r\n              <th>Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let code of allItems\">\r\n              <td>{{code.instNum}}</td>\r\n              <td>{{code.dueDt | date :'dd-MM-yyyy'}}</td>\r\n              <td>{{code.ppalAmtDue | currency:'PKR':''}}</td>\r\n              <td>{{code.totChrgDue | currency:'PKR':''}}</td>\r\n              <td>{{code.ppalAmtDue+code.totChrgDue | currency:'PKR':''}}</td>\r\n              <td><a (click)=\"onAssignCheque(code.paySchedDtlSeq)\" class=\"iconBtn\"><img src=\"assets/images/rs-icon.png\"\r\n                    alt=\"\"></a></td>\r\n            </tr>\r\n\r\n\r\n          </tbody>\r\n\r\n\r\n\r\n        </table>\r\n      </div>\r\n      <button class=\"btn btn-primary\" routerLink=\"/disbursement/voucher\">Back</button>\r\n      <button [disabled]=\"!isPaymentSchedle\" class=\"btn btn-primary\" routerLink=\"/disbursement/pdcs\">Continue</button>\r\n\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/disbursement/payment-schedule/payment-schedule.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/disbursement/payment-schedule/payment-schedule.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MY_FORMATS, PaymentScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentScheduleComponent", function() { return PaymentScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_disbursement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/disbursement.service */ "./src/app/shared/services/disbursement.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
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
var PaymentScheduleComponent = /** @class */ (function () {
    function PaymentScheduleComponent(router, disbursementService, toastr, spinner, fb, commonService) {
        this.router = router;
        this.disbursementService = disbursementService;
        this.toastr = toastr;
        this.spinner = spinner;
        this.fb = fb;
        this.commonService = commonService;
        this.allItems = [];
        this.assignCheck = [];
        this.isPaymentSchedle = true;
        this.totlPpl = 0;
        this.totlcharg = 0;
        this.totltotl = 0;
        this.totalRev = 0;
        this.isPaymentReq = false;
        this.regen = false;
        this.myFilter = function (d) {
            var day = d.getDay();
            return day !== 0 && day !== 6;
        };
        var today = new Date();
        this.minDate = new Date();
        this.maxDate = new Date();
        this.minDate.setDate(today.getDate() + 10);
        this.maxDate.setDate(today.getDate() + 30);
        if (this.maxDate.getDay() === 0) {
            this.maxDate = new Date();
            this.maxDate.setDate(today.getDate() + 31);
        }
        if (this.maxDate.getDay() === 6) {
            this.maxDate = new Date();
            this.maxDate.setDate(today.getDate() + 29);
        }
        console.log(this.minDate + "" + this.maxDate);
        this.scheduleForm = this.fb.group({
            frstInstDt: [this.maxDate, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    }
    PaymentScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.disbursementService.loanAppSeq = Number.parseInt(sessionStorage.getItem('loanAppSeq'));
        this.disbursementService.getAllPaymentSchedules().subscribe(function (data) {
            _this.allItems = data;
            if (_this.allItems.length == 0) {
                _this.isPaymentSchedle = false;
            }
            _this.setPdcsLimits();
        });
    };
    PaymentScheduleComponent.prototype.onAssignCheque = function (number) {
        var _this = this;
        // this.assignCheck = code.assignCheck; // AssignCheque
        $('#AssignCheque').modal('show');
        this.disbursementService.getPaymenrScheduleDetail(number).subscribe(function (d) {
            _this.assignCheck = d;
            _this.assignCheck.forEach(function (as, index) {
                _this.assignCheck[index].chrgTyp = as.chargesTypesDTO.chrgTyp;
            });
        });
    };
    PaymentScheduleComponent.prototype.generateSchedule = function () {
        $('#generatemodal').modal('show');
    };
    PaymentScheduleComponent.prototype.onSubmit = function () {
        var _this = this;
        this.regen = true;
        console.log("Sublmit");
        $('#generatemodal').modal('hide');
        var dateSendingToServer = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en-US').transform(this.scheduleForm.get('frstInstDt').value, 'dd-MM-yyyy');
        this.isPaymentSchedle = true;
        this.disbursementService.generatePaymentSchedule(dateSendingToServer).subscribe(function (data) {
            _this.allItems = data;
            _this.frstInstDt = dateSendingToServer;
            data.forEach(function (d) {
                _this.totalRev = _this.totalRev + d.ppalAmtDue + d.totChrgDue;
            });
            if (data.length == 0) {
                _this.isPaymentSchedle = true;
            }
            _this.setPdcsLimits();
            _this.regen = false;
        }, function (error) {
            console.log("ERROR - REGEN");
            _this.regen = false;
        });
    };
    PaymentScheduleComponent.prototype.kskLRSGenrate = function () {
        var _this = this;
        var dateSendingToServer = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en-US').transform(new Date(), 'dd-MM-yyyy');
        this.isPaymentSchedle = true;
        this.disbursementService.generatePaymentSchedule(dateSendingToServer).subscribe(function (data) {
            _this.allItems = data;
            _this.frstInstDt = dateSendingToServer;
            data.forEach(function (d) {
                _this.totalRev = _this.totalRev + d.ppalAmtDue + d.totChrgDue;
            });
            if (data.length == 0) {
                _this.isPaymentSchedle = true;
            }
            _this.setPdcsLimits();
        });
    };
    PaymentScheduleComponent.prototype.getPrdSeq = function ($event) {
        this.prdSeq = $event;
    };
    PaymentScheduleComponent.prototype.setPdcsLimits = function () {
        if (this.allItems.length > 0) {
            sessionStorage.setItem("frstInstDt", this.allItems[0].dueDt);
            sessionStorage.setItem("lsatInstDt", this.allItems[this.allItems.length - 1].dueDt);
            //sessionStorage.setItem("pdcsLimit",JSON.stringify(this.allItems.length/6));
            // this.disbursementService.genrateHelthCard(new DatePipe('en-US').transform(this.allItems[this.allItems.length-1].dueDt, 'yyyy-MM-dd')).subscribe((data) => {
            // });
        }
    };
    PaymentScheduleComponent.prototype.method2 = function () {
        console.log("ASDASD");
        return false;
    };
    PaymentScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-schedule',
            template: __webpack_require__(/*! ./payment-schedule.component.html */ "./src/app/pages/disbursement/payment-schedule/payment-schedule.component.html"),
            styles: [__webpack_require__(/*! ./payment-schedule.component.css */ "./src/app/pages/disbursement/payment-schedule/payment-schedule.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_disbursement_service__WEBPACK_IMPORTED_MODULE_1__["DisbursementService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], PaymentScheduleComponent);
    return PaymentScheduleComponent;
}());



/***/ }),

/***/ "./src/app/pages/disbursement/pdcs/pdcs.component.css":
/*!************************************************************!*\
  !*** ./src/app/pages/disbursement/pdcs/pdcs.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/disbursement/pdcs/pdcs.component.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/disbursement/pdcs/pdcs.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <app-voucher-info (recvAmt)=\"recievemsg($event)\" (pdcslimit)=\"pdcRequired($event)\"\r\n      (isPaymentReq)=\"paymentReq($event)\" (showHlthCard)=\"isHealthCard($event)\"></app-voucher-info>\r\n    <nav aria-label=\"breadcrumb\">\r\n      <ol class=\"breadcrumb breadcrumb-arrow\">\r\n        <li>\r\n          <a>Disbursement Voucher</a>\r\n        </li>\r\n        <li *ngIf=\"isPaymentReq\">\r\n          <a>Repayment Schedule</a>\r\n        </li>\r\n        <li class=\"ng-star-inserted active\">\r\n          <a>PDCs</a>\r\n        </li>\r\n\r\n      </ol>\r\n    </nav>\r\n    <div class=\"content\" *ngIf=\"pdcslimit==null || pdcslimit==0 \">\r\n      <h6 class=\"colorBlack\"><span>PDCs not required </span> </h6>\r\n    </div>\r\n    <div class=\"content\" *ngIf=\"pdcslimit>0\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6 \">\r\n          <h6 class=\"colorBlack\">PDCs</h6>\r\n        </div>\r\n        <div *ngIf=\"model.pdcHdrSeq==null   && (pdcslimit!=null && pdcslimit!=0 )\" class=\"col-sm-6 addBtn mb-2\">\r\n          <!-- <button class=\"btn btn-primary btn-sm\" (click)=\"onAddPdc()\"><i class=\"fa fa-plus\"></i> Add</button> -->\r\n          <button class=\"btn btn-primary btn-sm\" (click)=\"onGenerateClick()\"> Generate PDCs</button>\r\n        </div>\r\n\r\n      </div>\r\n      <div *ngIf=\"model.pdcHdrSeq!=null\" class=\"cRow\">\r\n        <div class=\"cCol1\">\r\n          <label>Bank Name:</label>\r\n          <mat-select [(ngModel)]=\"model.bankKey\" placeholder=\"Bank\" name=\"bankNm\" required\r\n            [errorStateMatcher]=\"matcher\" pattern=\"^[1-9]\\d*$\" class=\"form-control\">\r\n            <mat-option *ngFor=\"let bank of banks\" [value]=\"bank.codeKey\">\r\n              {{bank.codeValue}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </div>\r\n        <div class=\"cCol1\">\r\n          <label>Branch:</label>\r\n          <input type=\"text\" [(ngModel)]=\"model.brnchNm\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"cCol1\">\r\n          <label>Account No.:</label>\r\n          <input type=\"text\" pattern=\"[0-9]{1,20}\" (keypress)=\"onlyNumbers($event)\" [(ngModel)]=\"model.acctNum\"\r\n            #hhMembers=\"ngModel\" class=\"form-control\">\r\n          <mat-error *ngIf=\"hhMembers.errors?.pattern\">\r\n            20 digits are <strong>allowed </strong>\r\n          </mat-error>\r\n        </div>\r\n        <!-- <div class=\"cCol1\">\r\n          <label>Cheque Number:</label>\r\n          <input type=\"text\" [(ngModel)]=\"model.cheque\" class=\"form-control\">\r\n        </div> -->\r\n        <div class=\"cCol1\" style=\"padding-top: 27px;\">\r\n          <button appNoDblClick type=\"button\" class=\"btn btn-primary btn-min\" (click)=\"addPdcHeader()\">Save</button>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"table-responsive mb-md-5\">\r\n        <table *ngIf=\"allItems!=null && allItems.length>0\" class=\"table\">\r\n          <thead class=\"thead-light\">\r\n            <tr>\r\n              <th>PDCs ID</th>\r\n              <th>Collection Date</th>\r\n              <th>Cheque No.</th>\r\n              <th>Amount</th>\r\n              <th>Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let code of allItems\">\r\n              <td>{{code.pdcId}}</td>\r\n              <td>{{code.collDt | date :'dd-MM-yyyy'}}</td>\r\n              <td>{{code.cheqNum}}</td>\r\n              <td>{{code.amt | currency:'PKR':''}}</td>\r\n              <td>\r\n                <a (click)=\"editPdc(code)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                <!-- <a (click)=\"deleteItem(code)\" class=\"iconBtn delBtn\"> <i class=\"fa fa-trash-o\"></i></a> -->\r\n                <!--              <a href=\"#.\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>-->\r\n              </td>\r\n            </tr>\r\n\r\n          </tbody>\r\n          <tbody>\r\n            <tr class=\"total-info\">\r\n              <td></td>\r\n              <td></td>\r\n              <td class=\"text-right\"><b>Total Amount:</b></td>\r\n              <td>{{totalAmount | currency:'PKR':''}}</td>\r\n              <td>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <!-- \r\n               <button class=\"btn btn-primary\" (click)=\"disbursementPosting()\">Disburse Credit</button>\r\n      <button class=\"btn btn-default\">Save</button> -->\r\n    </div>\r\n    <button *ngIf=\"isPaymentReq\" class=\"btn btn-primary\" routerLink=\"/disbursement/payment-schedule\">Back</button>\r\n    <button *ngIf=\"!isPaymentReq\" class=\"btn btn-primary\" routerLink=\"/disbursement/voucher\">Back</button>\r\n    <button class=\"btn btn-primary\" (click)=\"openDialog()\">Disburse Credit</button>\r\n  </div>\r\n</main>\r\n<div class=\"modal fade\" id=\"DisburseLoan\" role=\"dialog\">\r\n  <div class=\"modal-dialog mymodal big\" style=\"width: 35%\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Disburse Credit Application</h5>\r\n      </div>\r\n      <form (ngSubmit)=\"disbursementPosting()\">\r\n        <div class=\"modal-body\">\r\n\r\n          <div *ngIf=\"hasAmlMatch\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n                <h6 class=\"text-dark\">{{amlMtch.reason}}</h6>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n                <mat-checkbox [(ngModel)]=\"amlChck\" name=\"amlChck\" labelPosition=\"before\">\r\n                </mat-checkbox>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\" *ngIf=\"(hasAmlMatch && amlChck) || !hasAmlMatch\">\r\n            <div class=\"col-sm-10\">\r\n              <mat-checkbox [(ngModel)]=\"post\" name=\"post\" labelPosition=\"before\"><b>Do you\r\n                  want\r\n                  to\r\n                  Post this transaction?</b></mat-checkbox>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button type=\"submit\" *ngIf=\"(hasAmlMatch && amlChck) || !hasAmlMatch\" appNoDblClick\r\n            (click)=\"disbursementPosting()\" [disabled]=\"disbFlg\" class=\"btn btn-primary btn-min\">Ok</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!--- Bhayoo model--->\r\n<div class=\"modal fade\" id=\"generatePdcsModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog mymodal big\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">PDCs</h5>\r\n      </div>\r\n      <form (ngSubmit)=\"generatePdcSubmit()\" [formGroup]=\"generatePdcForm\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\">\r\n            <input type=\"hidden\" formControlName=\"loanAppSeq\">\r\n\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Bank Name\" formControlName=\"bankKey\">\r\n                  <mat-option *ngFor=\"let bank of banks\" [value]=\"bank.codeKey\">\r\n                    {{bank.codeValue}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"Branch Name:\" formControlName=\"brnchNm\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"text\" (keypress)=\"onlyNumbers($event)\" matInput placeholder=\"Account Number:\"\r\n                  formControlName=\"acctNum\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"text\" matInput (keypress)=\"onlyNumbers($event)\" placeholder=\"First Cheque Number:\"\r\n                  formControlName=\"cheqNum\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button [disabled]=\"pdcGenFlg\" type=\"button\" (click)=\"generatePdcSubmit()\" appNoDblClick\r\n            class=\"btn btn-primary btn-min\">Ok</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"AmountModal\" role=\"dialog\" data-backdrop=\"static\" data-keyboard=\"false\">\r\n  <div class=\"modal-dialog mymodal big\" style=\"width: 35%\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Cheque Amount</h5>\r\n      </div>\r\n        <div class=\"modal-body\">\r\n\r\n          <div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n                <h6 class=\"text-dark\">Cheque Amount RS:                 {{chckAmnt}}</h6>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button type=\"button\"  appNoDblClick\r\n            (click)=\"chckAmtSubmit()\" class=\"btn btn-primary btn-min\">Ok</button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"addmember\" role=\"dialog\">\r\n  <div class=\"modal-dialog mymodal\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">PDC</h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"pdcForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input matInput required [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"collDt\"\r\n                  placeholder=\"Cheque Date:\" disabled readonly />\r\n                <!-- <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker> -->\r\n                <mat-error *ngIf=\"!pdcForm.get('collDt').valid\">\r\n                  Cheque Date is <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"text\" matInput required placeholder=\"Cheque Number:\" formControlName=\"cheqNum\"\r\n                  [errorStateMatcher]=\"matcher\" pattern=\"[0-9]{1,16}\">\r\n                <mat-error *ngIf=\"!pdcForm.get('cheqNum').valid\">\r\n                  max 16 digets <strong>required</strong>\r\n                </mat-error>\r\n\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"text\" matInput required placeholder=\"Amount:\" formControlName=\"amt\"\r\n                  [errorStateMatcher]=\"matcher\" pattern=\"[0-9]{1,6}\">\r\n                <mat-error *ngIf=\"!pdcForm.get('amt').valid\">\r\n                  Amount is <strong>Invalid</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button type=\"button\" appNoDblClick (click)=\"onSubmit()\" class=\"btn btn-primary\">Ok</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<script>\r\n  $('.date').datepicker({\r\n  });\r\n\r\n  $('input#yescheque').change(function () {\r\n    if (this.checked) {\r\n      $('#addpdcsrow').show();\r\n    }\r\n    else {\r\n\r\n    }\r\n  })\r\n\r\n  $('input#ChequeNot').change(function () {\r\n    if (this.checked) {\r\n      $('#checknotrow').show();\r\n    }\r\n    else {\r\n\r\n    }\r\n  })\r\n\r\n</script>"

/***/ }),

/***/ "./src/app/pages/disbursement/pdcs/pdcs.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/disbursement/pdcs/pdcs.component.ts ***!
  \***********************************************************/
/*! exports provided: MY_FORMATS, PdcsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdcsComponent", function() { return PdcsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_disbursement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/disbursement.service */ "./src/app/shared/services/disbursement.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_models_pdc_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/models/pdc.model */ "./src/app/shared/models/pdc.model.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/helpers/MyErrorStateMatcher.helper */ "./src/app/shared/helpers/MyErrorStateMatcher.helper.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/models/REF_CODE_GRP_KEYS.mocks */ "./src/app/shared/models/REF_CODE_GRP_KEYS.mocks.ts");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_app_shared_services_loan_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/loan.service */ "./src/app/shared/services/loan.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var moment = moment__WEBPACK_IMPORTED_MODULE_13__;
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
var PdcsComponent = /** @class */ (function () {
    // should be false temporary true
    function PdcsComponent(router, disbursementService, spinner, fb, toaster, commonService, loanService) {
        this.router = router;
        this.disbursementService = disbursementService;
        this.spinner = spinner;
        this.fb = fb;
        this.toaster = toaster;
        this.commonService = commonService;
        this.loanService = loanService;
        this.isGenerate = false;
        this.totalAmount = 0;
        this.allItems = [];
        this.matcher = new _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_8__["MyErrorStateMatcher"]();
        this.model = new _shared_models_pdc_model__WEBPACK_IMPORTED_MODULE_6__["Pdc"]();
        this.isPdcHeaderAdded = false;
        this.rcevAmt = 0;
        //isPdcs:boolean=false;
        this.isPaymentReq = false;
        this.post = false;
        this.showHlthCard = false;
        this.plans = [];
        this.obj = null;
        this.hasAmlMatch = false;
        this.amlChck = false;
        this.amlMtch = null;
        this.disbFlg = false;
        this.chckAmnt = 0;
        this.pdcGenFlg = false;
        this.pdcForm = this.fb.group({
            pdcId: [''],
            collDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            cheqNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[0-9]{1,16}')])],
            amt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            pdcHdrSeq: [''],
            pdcDtlSeq: ['']
        });
        this.minDate = new Date(sessionStorage.getItem("frstInstDt"));
        this.maxDate = new Date(sessionStorage.getItem("lsatInstDt"));
        //this.pdcslimit=+sessionStorage.getItem("pdcsLimit");
    }
    PdcsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.pdcForm.invalid) {
            return;
        }
        var allowPdc = true;
        var result = Object.assign({}, this.pdcForm.getRawValue());
        this.allItems.forEach(function (item) {
            if (item.cheqNum == result.cheqNum && item.pdcDtlSeq != result.pdcDtlSeq) {
                allowPdc = false;
            }
        });
        if (!allowPdc) {
            this.toaster.warning('Check Number Already Exist!', 'Error!');
            return;
        }
        $('#addmember').modal('hide');
        var validAmt = this.totalAmount + Number(result.amt);
        var editValidAmt = this.totalAmount + Number(result.amt) - this.editPrivousAmt;
        console.log(editValidAmt);
        if (!this.edit && validAmt <= this.rcevAmt) {
            result.pdcHdrSeq = this.model.pdcHdrSeq;
            result.pdcId = this.allItems == null ? 1 : this.allItems.length + 1;
            this.disbursementService.addPdc(result, 'add').subscribe(function (d) {
                result.pdcDtlSeq = d.pdcDtlSeq;
                _this.allItems.push(result);
                _this.calTotalAmount();
            });
        }
        else if (this.edit && editValidAmt <= this.rcevAmt) {
            this.disbursementService.addPdc(result, 'update').subscribe(function (d) {
                var itemIndex = _this.allItems.findIndex(function (item) { return item.pdcId === result.pdcId; });
                _this.allItems[itemIndex] = result;
                _this.edit = false;
                _this.calTotalAmount();
            });
        }
        else {
            this.toaster.warning('Total of PDCs should be equal to Receiveable Amount', 'Error!');
        }
    };
    PdcsComponent.prototype.editPdc = function (mwPdcDtlDTOs) {
        var collectionDate = this.pdcForm.get('collDt');
        var amt = this.pdcForm.get('amt');
        console.log(mwPdcDtlDTOs);
        this.pdcForm.reset();
        this.editPrivousAmt = 0;
        this.edit = true;
        collectionDate.disable();
        amt.disable();
        $('#addmember').modal('show');
        // this.pdcForm = this.fb.group({
        //   pdcId: [mwPdcDtlDTOs.pdcId],
        //   collDt: [{ value: '', disabled: true }, mwPdcDtlDTOs.collDt],
        //   cheqNum: [{ value: '', disabled: true }, mwPdcDtlDTOs.cheqNum],
        //   amt: [mwPdcDtlDTOs.amt],
        //   pdcHdrSeq: [mwPdcDtlDTOs.pdcHdrSeq],
        //   pdcDtlSeq: [mwPdcDtlDTOs.pdcDtlSeq]
        // });
        this.pdcForm.patchValue(mwPdcDtlDTOs);
        this.editPrivousAmt = mwPdcDtlDTOs.amt;
    };
    PdcsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(Number.parseInt(sessionStorage.getItem('loanAppSeq')));
        this.disbursementService.loanAppSeq = Number.parseInt(sessionStorage.getItem('loanAppSeq'));
        console.log(this.pdcslimit);
        if (this.pdcslimit != 0) {
            this.disbursementService.getAllPdcs().subscribe(function (data) {
                _this.model = data;
                if (_this.model) {
                    _this.allItems = _this.model.mwPdcDtlDTOs;
                }
                if (_this.allItems != null) {
                    _this.allItems.forEach(function (d) { return _this.totalAmount += +d.amt; });
                }
            });
        }
        this.loadBankList();
        this.generatePdcForm = this.fb.group({
            loanAppSeq: [Number.parseInt(sessionStorage.getItem('loanAppSeq'))],
            bankKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            brnchNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            acctNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            cheqNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.loanService.getInsurancePlans().subscribe(function (res) {
            console.log(res);
            _this.plans = res;
        }, function (error) {
            _this.spinner.hide();
            console.log(error);
        });
        this.loanService.getSavedInsurancePlan(sessionStorage.getItem('loanAppSeq')).subscribe(function (res) {
            _this.obj = res;
            console.log(res);
        }, function (error) {
            console.log('err In Loan Info Service');
            console.log('err', error);
        });
        this.disbursementService.checkForAml().subscribe(function (res) {
            if (res != null) {
                _this.amlMtch = res;
                if (res.matched == 'true')
                    _this.hasAmlMatch = true;
            }
        });
    };
    PdcsComponent.prototype.onAddPdc = function () {
        if (this.allItems.length == this.pdcslimit) {
            this.toaster.warning('Not Allowed to add more PDcs for this product', 'Info!');
            return false;
        }
        if (!this.isPdcHeaderAdded) {
            this.addPdcHeader();
        }
        else {
            this.pdcForm.reset();
            $('#addmember').modal('show');
        }
    };
    PdcsComponent.prototype.deleteItem = function (pdcDetail) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this PDC?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                pdcDetail.delFlg = true;
                console.log(pdcDetail);
                _this.disbursementService.deletePdc(pdcDetail).subscribe(function () {
                    _this.allItems.splice(_this.allItems.indexOf(pdcDetail.pdcId), 1);
                    _this.calTotalAmount();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()('Deleted!', 'Pdcs values has been deleted.', 'success');
                }, function (error) { return console.log('There was an error: ', error); });
            }
        });
    };
    PdcsComponent.prototype.addPdcHeader = function () {
        var _this = this;
        this.spinner.show();
        this.model.loanAppSeq = this.disbursementService.loanAppSeq;
        this.disbursementService.addPdcHeader(this.model).subscribe(function (p) {
            _this.spinner.hide();
            _this.isPdcHeaderAdded = true;
            _this.model.pdcHdrSeq = p.pdcHdrSeq;
        }
        // , (error) => {
        //   console.log(error)
        //   console.log(error.status)
        //   this.spinner.hide();
        //   this.toaster.error(error.error.error, `Login failed:`);
        //   console.log('err In User Service');
        //   console.log('err', error);
        // });
        , function (error) {
            console.log(error);
            _this.spinner.hide();
            if (error.status == 500) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
            else if (error.status == 400) {
                _this.toaster.error(error.error.error, "Error");
            }
        });
    };
    PdcsComponent.prototype.loadBankList = function () {
        var _this = this;
        this.commonService.getValues(_shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_10__["BANKS"]).subscribe(function (res) {
            console.log(_this.banks);
            _this.banks = res;
        }, function (error) {
            console.log('err', error);
        });
    };
    PdcsComponent.prototype.calTotalAmount = function () {
        var _this = this;
        this.totalAmount = 0;
        this.allItems.forEach(function (d) { return _this.totalAmount += +d.amt; });
    };
    PdcsComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    PdcsComponent.prototype.recievemsg = function ($event) {
        this.rcevAmt = $event;
    };
    PdcsComponent.prototype.pdcRequired = function ($event) {
        this.pdcslimit = $event;
        console.log(this.pdcslimit);
    };
    PdcsComponent.prototype.paymentReq = function ($event) {
        this.isPaymentReq = $event;
    };
    PdcsComponent.prototype.isHealthCard = function ($event) {
        this.showHlthCard = $event;
    };
    PdcsComponent.prototype.disbursementPosting = function () {
        var _this = this;
        this.disbFlg = true;
        this.spinner.show();
        $('#DisburseLoan').modal('hide');
        if (this.hasAmlMatch) {
            for (var z = 0; z < this.amlMtch.length; z++) {
                if (this.amlMtch[z].stpFlg) {
                    this.toaster.warning('AML Match Found', 'Error!');
                    this.spinner.hide();
                    this.disbFlg = false;
                    return false;
                }
            }
        }
        if (this.allItems != null && this.pdcslimit > 0 && this.allItems.length != this.pdcslimit) {
            this.toaster.warning('Accepted number of PDCs are: ' + this.pdcslimit, 'Error!');
            this.spinner.hide();
            this.disbFlg = false;
            return false;
        }
        if (this.totalAmount != this.rcevAmt && this.pdcslimit != 0) {
            this.toaster.warning('PDC amount should be equal to payable amount', 'Error!');
            this.spinner.hide();
            this.disbFlg = false;
            return false;
        }
        this.disbursementService.disbursementPosting(this.post, this.amlChck).subscribe(function (data) {
            _this.spinner.hide();
            // Else-IF Condition added by Zohaib Asim - 19-12-2020 - KSZB Claims
            if (_this.post && _this.showHlthCard) {
                _this.printHealthCard();
            }
            else if (_this.post && (data.prdSeq == 10 && data.loanAppSts == "1305")
                || (data.prdSeq == 25 || data.prdSeq == 26 || data.prdSeq == 30 || data.prdSeq == 31
                    || data.prdSeq == 32)) {
                _this.printHealthCard();
            }
            // End by Zohaib Asim
            _this.toaster.success(data.sucess, 'Success!');
            if (data.chckAmnt != undefined || data.chckAmnt != null) {
                _this.chckAmnt = data.chckAmnt;
                $('#AmountModal').modal('show');
                return;
            }
            _this.router.navigate(['/disbursement']);
        }, function (err) {
            console.log(err);
            _this.spinner.hide();
            if (err.status === 409) {
                _this.spinner.hide();
                _this.toaster.warning(err.error.error, "Error");
            }
        });
    };
    PdcsComponent.prototype.chckAmtSubmit = function () {
        $('#AmountModal').modal('hide');
        this.router.navigate(['/disbursement']);
    };
    PdcsComponent.prototype.openDialog = function () {
        $('#DisburseLoan').modal('show');
    };
    PdcsComponent.prototype.printHealthCard = function () {
        var _this = this;
        var plan = null;
        // Added by Zohaib Asim - Dated 23-12-2020
        // Object should have values to Print report
        if (this.obj == null) {
            this.loanService.getSavedInsurancePlan(sessionStorage.getItem('loanAppSeq')).subscribe(function (res) {
                _this.obj = res;
                console.log("printHealthCard -> getSavedInsurancePlan:", res);
            }, function (error) {
                console.log('err In Loan Info Service');
                console.log('err', error);
            });
        }
        console.log("After this.obj condition");
        // End by Zohaib Asim
        if (this.obj != null && this.obj.healthInsrPlanSeq != null) {
            this.plans.forEach(function (pln) {
                if (_this.obj.healthInsrPlanSeq == pln.hlthInsrPlanSeq) {
                    plan = pln;
                }
            });
        }
        console.log(plan);
        if (plan != null && plan.hlthCardFlg != undefined && plan.hlthCardFlg != null && plan.hlthCardFlg != undefined) {
            if (plan.hlthCardFlg == true) {
                this.disbursementService.getHealthCardPdf().subscribe(function (response) {
                    var binaryData = [];
                    binaryData.push(response);
                    var fileURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
                    window.open(fileURL, '_blank');
                });
            }
        }
    };
    // onSubmitGenerate() {
    //   this.isGenerate = !this.isGenerate;
    // }
    PdcsComponent.prototype.onGenerateClick = function () {
        $('#generatePdcsModal').modal('show');
    };
    PdcsComponent.prototype.generatePdcSubmit = function () {
        var _this = this;
        this.spinner.show();
        this.pdcGenFlg = true;
        console.log(this.generatePdcForm.value);
        // if (this.generatePdcForm.controls['acctNum'].value == this.generatePdcForm.controls['cheqNum'].value) {
        //   this.pdcGenFlg = false;
        //   this.spinner.hide();
        //   this.toaster.error("Account Num & Cheque Num Cannot be Same", "Error");
        //   return;
        // } else {
        this.disbursementService.generatePdcs(this.generatePdcForm.value).subscribe(function (res) {
            console.log(res);
            _this.spinner.hide();
            _this.pdcGenFlg = false;
            console.log(res.mwPdcDtlDTOs);
            _this.model = res;
            if (res != null) {
                _this.allItems = _this.model.mwPdcDtlDTOs;
            }
            if (_this.allItems != null) {
                _this.allItems.forEach(function (d) { return _this.totalAmount += +d.amt; });
            }
            $('#generatePdcsModal').modal('hide');
            // this.isGenerate = !this.isGenerate;
        }, function (error) {
            console.log(error.status);
            _this.pdcGenFlg = false;
            _this.spinner.hide();
            if (error.status == 500) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
            else if (error.status == 400) {
                _this.toaster.error(error.error.error, "Error");
            }
            else if (error) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
        });
    };
    PdcsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pdcs',
            template: __webpack_require__(/*! ./pdcs.component.html */ "./src/app/pages/disbursement/pdcs/pdcs.component.html"),
            styles: [__webpack_require__(/*! ./pdcs.component.css */ "./src/app/pages/disbursement/pdcs/pdcs.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_11__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_disbursement_service__WEBPACK_IMPORTED_MODULE_1__["DisbursementService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            src_app_shared_services_loan_service__WEBPACK_IMPORTED_MODULE_14__["LoanService"]])
    ], PdcsComponent);
    return PdcsComponent;
}());



/***/ }),

/***/ "./src/app/pages/disbursement/voucher-info/voucher-info.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/disbursement/voucher-info/voucher-info.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loaninfo {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 1rem;\r\n    background-color: transparent;\r\n}\r\n.loaninfo tr {\r\n    border-bottom: 1px solid #dee2e6;\r\n    }\r\n.loaninfo td{\r\n    padding: .1rem;\r\n}\r\n.loaninfo td span{\r\n    color: #5ea5e5; \r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/disbursement/voucher-info/voucher-info.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/disbursement/voucher-info/voucher-info.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"voucherinfo\">\r\n    <div class=\"row\" *ngIf=\"auth.role!='admin'\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"addBtn mb-2 pull-right\">\r\n          <!-- <button>{{isKMWK}}</button> -->\r\n          <button *ngIf=\"!isKSK\" class=\"btn btn-primary btn-sm\" (click)=\"printClientInfo()\"> Print Client Info</button>\r\n          <button *ngIf=\"showLPDButton\" class=\"btn btn-primary btn-sm\" (click)=\"printLPD()\"> Print LPD</button>\r\n          <button class=\"btn btn-primary btn-sm\" (click)=\"printPaymentSchedule()\">Print Repayment Schedule</button>\r\n          <button *ngIf=\"!isKSK\" class=\"btn btn-primary btn-sm\" (click)=\"printUndertaking()\"> Print Undertaking</button>\r\n          <button *ngIf=\"isKMWK\" class=\"btn btn-primary btn-sm\" (click)=\"printAgencyInfoReport()\"> Print Agency Info\r\n          </button>\r\n          <!-- <button *ngIf=\"showHlthCard\" class=\"btn btn-primary btn-sm\"(click)=\"printHealthCard()\"> Print Health Card</button> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <table class=\"loaninfo\">\r\n          <tr>\r\n            <td>Client ID:</td>\r\n            <td> <span>{{model?.clientId | uppercase }} </span></td>\r\n            <td>Client Name:</td>\r\n            <td> <span>{{model?.firstName + ' ' + model?.lastName | uppercase }}</span></td>\r\n            <td>Branch ID:</td>\r\n            <td> <span>{{model?.brnchSeq}}</span></td>\r\n            <td>Branch Name:</td>\r\n            <td><span>{{model?.brnchNm | uppercase }}</span></td>\r\n          </tr>\r\n          <tr>\r\n            <td>Portfolio ID:</td>\r\n            <td> <span>{{model?.portSeq}}</span></td>\r\n            <td>Portfolio Name:</td>\r\n            <td> <span>{{model?.portNm | uppercase }}</span></td>\r\n            <td>BDO Name:</td>\r\n            <td><span>{{model?.bdoNm | uppercase }}</span></td>\r\n            <td>Application ID:</td>\r\n            <td><span>{{model?.loanAppId}}</span></td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <td>Product ID:</td>\r\n            <td> <span>{{model?.prdSeq}}</span></td>\r\n            <td>Product Name:</td>\r\n            <td> <span>{{model?.prdNm | uppercase }}</span><span class=\"badge badge-secondary\"\r\n                *ngIf=\"model?.prdSeq==='0010'\">{{model?.loanAppStatus==='0004'?\"Sale 1\":\"Sale 2\"}}</span></td>\r\n            <td>Disbursement Amount:</td>\r\n            <td> <span> {{model?.aprvdLoanAmt  | currency:'PKR':''}}</span></td>\r\n            <td>Total Receivable Amount:</td>\r\n            <td> <span>{{model?.totRecv  | currency:'PKR':''}}</span></td>\r\n          </tr>\r\n          <tr>\r\n            <td>First Installment Date:</td>\r\n            <td> <span>{{frstInstDt | date :'dd-MM-yyyy'}}</span></td>\r\n            <td>Credit Cycle:</td>\r\n            <td> <span>{{model?.loanCyclNum}}</span></td>\r\n            <td>Business Activity/Business Detail:</td>\r\n            <td> <span>{{model?.bizActyNm | uppercase }}</span></td>\r\n            <td *ngIf=\"model?.preActivity!='/ ' \">Previous Business Activity/Business Detail:</td>\r\n            <td *ngIf=\"model?.preActivity!='/ '\"> <span>{{model?.preActivity | uppercase }}</span></td>\r\n          </tr>\r\n        </table>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <script>\r\n    $('.date').datepicker({\r\n    });\r\n  </script>"

/***/ }),

/***/ "./src/app/pages/disbursement/voucher-info/voucher-info.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/disbursement/voucher-info/voucher-info.component.ts ***!
  \***************************************************************************/
/*! exports provided: VoucherInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherInfoComponent", function() { return VoucherInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_disbursement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/disbursement.service */ "./src/app/shared/services/disbursement.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VoucherInfoComponent = /** @class */ (function () {
    function VoucherInfoComponent(disbursementService, fb, router, toaster, spinner) {
        this.disbursementService = disbursementService;
        this.fb = fb;
        this.router = router;
        this.toaster = toaster;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.isKSK = false;
        this.isKMWK = false;
        this.showLPDButton = false;
        this.pdcslimit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isPaymentReq = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.disbursementAmt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.recvAmt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.prdSeq = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.appSts = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showHlthCard = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.myFilter = function (d) {
            var day = d.getDay();
            return day !== 0 && day !== 6;
        };
    }
    VoucherInfoComponent.prototype.ngOnInit = function () {
        //this.maxDate.setDate(this.minDate.getDate()+30);
        var _this = this;
        this.disbursementService.loanAppSeq = Number.parseInt(sessionStorage.getItem('loanAppSeq'));
        this.disbursementService.getDisbursementVoucher().subscribe(function (data) {
            _this.model = data;
            console.log(_this.model);
            _this.disbursementAmt.emit(data.aprvdLoanAmt);
            _this.pdcslimit.emit(data.prdSeq === '0010' && data.loanAppStatus === '1305' ? 0 : +data.pdcNum);
            _this.isPaymentReq.emit(true);
            _this.recvAmt.emit(data.totRecv);
            _this.prdSeq.emit(data.prdSeq);
            _this.appSts.emit(data.loanAppStatus);
            if (_this.model != undefined) {
                //this.totalRev=data.totRecv;
                _this.frstInstDt = data.frstInstDt;
                _this.showHlthCard.emit(data.prdSeq === '2657' || data.prdSeq === '0010' || data.prdSeq === '0019' ? false : true);
                _this.isKSK = data.prdSeq == '0019' ? true : false;
                _this.isKMWK = data.prdSeq == '0010' ? true : false;
                _this.showLPDButton = data.prdSeq == '0019' ? true : false;
                if (_this.model.loanCyclNum === null) {
                    _this.model.loanCyclNum = '1';
                }
            }
        });
        this.disbursementService.getPaymentSchedule().subscribe(function (data) {
            var amt = 0;
            data.forEach(function (e) {
                amt = amt + e.detail.ppalAmtDue + e.detail.totChrgDue + _this.calculateTotalCharge(e.chargers);
            });
            // this.recvAmt.emit(amt);
            _this.totalRev = amt;
        });
    };
    VoucherInfoComponent.prototype.calculateTotalCharge = function (chargers) {
        var amt = 0;
        chargers.forEach(function (ch) {
            amt = amt + ch.amt;
        });
        return amt;
    };
    VoucherInfoComponent.prototype.printHealthCard = function () {
        this.disbursementService.getHealthCardPdf().subscribe(function (response) {
            var binaryData = [];
            binaryData.push(response);
            var fileURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
            window.open(fileURL, '_blank');
        });
    };
    VoucherInfoComponent.prototype.printPaymentSchedule = function () {
        var _this = this;
        this.spinner.show();
        this.disbursementService.getPaymentSchedulePdf().subscribe(function (response) {
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
    VoucherInfoComponent.prototype.printUndertaking = function () {
        var _this = this;
        this.spinner.show();
        this.disbursementService.getUndertakingPdf().subscribe(function (response) {
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
    VoucherInfoComponent.prototype.printAgencyInfoReport = function () {
        var _this = this;
        this.spinner.show();
        this.disbursementService.getPrintSomeFunckingShit().subscribe(function (response) {
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
    VoucherInfoComponent.prototype.printClientInfo = function () {
        var _this = this;
        this.spinner.show();
        this.disbursementService.getClientInfoPdf().subscribe(function (response) {
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
    VoucherInfoComponent.prototype.printLPD = function () {
        var _this = this;
        this.spinner.show();
        this.disbursementService.getLPD().subscribe(function (response) {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], VoucherInfoComponent.prototype, "totalRev", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VoucherInfoComponent.prototype, "frstInstDt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VoucherInfoComponent.prototype, "pdcslimit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VoucherInfoComponent.prototype, "isPaymentReq", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VoucherInfoComponent.prototype, "disbursementAmt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VoucherInfoComponent.prototype, "recvAmt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VoucherInfoComponent.prototype, "prdSeq", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VoucherInfoComponent.prototype, "appSts", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VoucherInfoComponent.prototype, "showHlthCard", void 0);
    VoucherInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-voucher-info',
            template: __webpack_require__(/*! ./voucher-info.component.html */ "./src/app/pages/disbursement/voucher-info/voucher-info.component.html"),
            styles: [__webpack_require__(/*! ./voucher-info.component.css */ "./src/app/pages/disbursement/voucher-info/voucher-info.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_disbursement_service__WEBPACK_IMPORTED_MODULE_1__["DisbursementService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], VoucherInfoComponent);
    return VoucherInfoComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/disbursementVoucherListItem.model.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/models/disbursementVoucherListItem.model.ts ***!
  \********************************************************************/
/*! exports provided: DisbursementVoucherListItem, AgencyVoucher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisbursementVoucherListItem", function() { return DisbursementVoucherListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgencyVoucher", function() { return AgencyVoucher; });
var DisbursementVoucherListItem = /** @class */ (function () {
    function DisbursementVoucherListItem() {
        this.delFlg = false;
    }
    return DisbursementVoucherListItem;
}());

var AgencyVoucher = /** @class */ (function () {
    function AgencyVoucher() {
    }
    return AgencyVoucher;
}());



/***/ }),

/***/ "./src/app/shared/models/pdc.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/models/pdc.model.ts ***!
  \********************************************/
/*! exports provided: Pdc, MwPdcDtlDTOs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pdc", function() { return Pdc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MwPdcDtlDTOs", function() { return MwPdcDtlDTOs; });
var Pdc = /** @class */ (function () {
    function Pdc(obj) {
        Object.assign(this, obj);
    }
    return Pdc;
}());

var MwPdcDtlDTOs = /** @class */ (function () {
    function MwPdcDtlDTOs(obj) {
        this.delFlg = false;
        Object.assign(this, obj);
    }
    return MwPdcDtlDTOs;
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
//# sourceMappingURL=pages-disbursement-disbursement-module.js.map