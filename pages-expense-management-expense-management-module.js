(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expense-management-expense-management-module"],{

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

/***/ "./src/app/pages/expense-management/AuthGuard.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/expense-management/AuthGuard.service.ts ***!
  \***************************************************************/
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
            if (screen.modUrl.indexOf("expense-management") >= 0) {
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

/***/ "./src/app/pages/expense-management/expense-management.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/expense-management/expense-management.module.ts ***!
  \***********************************************************************/
/*! exports provided: routes, ExpenseManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseManagementModule", function() { return ExpenseManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _AuthGuard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AuthGuard.service */ "./src/app/pages/expense-management/AuthGuard.service.ts");
/* harmony import */ var _expense_expense_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expense/expense.component */ "./src/app/pages/expense-management/expense/expense.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: 'expense' },
    { path: 'expense', component: _expense_expense_component__WEBPACK_IMPORTED_MODULE_5__["ExpenseComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
];
var ExpenseManagementModule = /** @class */ (function () {
    function ExpenseManagementModule() {
    }
    ExpenseManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"]
            ],
            declarations: [
                _expense_expense_component__WEBPACK_IMPORTED_MODULE_5__["ExpenseComponent"],
            ],
            providers: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
        })
    ], ExpenseManagementModule);
    return ExpenseManagementModule;
}());



/***/ }),

/***/ "./src/app/pages/expense-management/expense/expense.component.css":
/*!************************************************************************!*\
  !*** ./src/app/pages/expense-management/expense/expense.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  tr.example-detail-row {\r\n    height: 0;\r\n    line-height: 1;\r\n\r\n  }\r\n  \r\n  .example-element-detail {\r\n    overflow: hidden;\r\n    display: flex;\r\n  }\r\n  \r\n  tr.mat-header-row {\r\n    height: 1.5px;\r\n}\r\n  \r\n  tr.mat-row {\r\n  height: 1.5px;\r\n}\r\n  \r\n  .mat-cell, .mat-footer-cell {\r\n  color: rgba(0,0,0,.87);\r\n  font-size: 0.750rem;\r\n}\r\n  \r\n  .trx-table td:last-child {\r\n text-align: center;\r\n}\r\n  \r\n  .td-center {\r\n  text-align: right;\r\n}\r\n  \r\n  .td-right{\r\n  text-align: center;\r\n}\r\n  \r\n  .table .thead-light th:last-child {\r\n  text-align: center;\r\n}\r\n  \r\n  .table .thead-light th:first-child {\r\n  text-align: center;\r\n}\r\n  \r\n  .table .thead-light>th {\r\n  padding: .45rem 0rem;\r\n}\r\n  \r\n  th.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n  \r\n  .mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n  \r\n  th.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n  \r\n  .mat-cell, .mat-footer-cell {\r\n  font-size: 13px;\r\n}\r\n  \r\n  td,th{\r\n  padding-left: 16px !important;\r\n  width: 11% !important;\r\n}\r\n  \r\n  td:first-child, th:first-child{\r\n  padding-left: 16px !important;\r\n  width: 15% !important;\r\n}\r\n  \r\n  .w-20{\r\n  width: 20% !important;\r\n}\r\n  \r\n  th{\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n  \r\n  th:last-child{\r\n  text-align: right;\r\n}"

/***/ }),

/***/ "./src/app/pages/expense-management/expense/expense.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/expense-management/expense/expense.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <!-- <div class=\"col-md-3\">\r\n\r\n      </div> -->\r\n      <div class=\"col-md-12\">\r\n        <div class=\"content\">\r\n          <div class=\"row\">\r\n\r\n            <div class=\"col-sm-8\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\" *ngIf=\"expenses.length>0  || (this.auth.role == 'bm')\">\r\n                  <div class=\"mysearchbox\" (click)=\"showField()\" *ngIf=\"!showFields\">\r\n                    <h6 class=\"d-inline-block searchshow\" style=\"cursor: pointer;\">Search\r\n                      <i class=\"fa fa-search\"> </i>\r\n                    </h6>\r\n                  </div>\r\n                  <div class=\"mysearch\" *ngIf=\"showFields\">\r\n                    <form (ngSubmit)=\"applyFilter(searchVal)\" #searchForm=\"ngForm\">\r\n                      <div class=\"col-sm-10\" style=\"float:left;\">\r\n                        <mat-form-field *ngIf=\"showFields\">\r\n                          <input id=\"searchBox\" (keyup)=\"searchValue()\" autofocus matInput name=\"searchValue\"\r\n                            [(ngModel)]=\"searchVal\" placeholder=\"Search\">\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"col-sm-2\" style=\"float:right;\">\r\n                        <button class=\"btn btn-primary btn-lg\" type=\"submit\">Search</button>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n\r\n              <div class=\"col-sm-6\">\r\n                <form [formGroup]=\"branchForm\" (ngSubmit)=\"onSubmitBranchForm()\">\r\n                  <!-- <mat-form-field *ngIf=\"auth.role != 'bm'\">\r\n                    <mat-select placeholder=\"Select Branch\" formControlName=\"branch\"\r\n                      (selectionChange)=\"onSelectBranch()\">\r\n                      <mat-option *ngFor=\"let b of branchs\" [value]=\"b.brnchSeq\">\r\n                        {{b.brnchNm}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field> -->\r\n\r\n\r\n                  <ng-select *ngIf=\"auth.role != 'bm'\" [items]=\"branchs\" required (change)=\"onSelectBranch($event)\"\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n                </form>\r\n              </div>\r\n            </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"col-sm-8 addBtn mt-3\" *ngIf=\"!onBranchSelection\">\r\n              <button [disabled]=\"!onBranchSelection\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#businessector\"\r\n                (click)=\"onAddNewClick()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n            </div> -->\r\n\r\n            <div class=\"col-sm-4 addBtn mt-3\">\r\n              <button [disabled]=\"onBranchSelection\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\"\r\n                data-target=\"#businessector\" (click)=\"onAddNewClick()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n            </div>\r\n          </div>\r\n\r\n          <!---- DATA TABLES---->\r\n\r\n          <div class=\"table-responsive mb-md-5\">\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"table\" multiTemplateDataRows matSort>\r\n\r\n              <!-- Reference Id Column -->\r\n              <ng-container matColumnDef=\"expnsId\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Reference Code</th>\r\n                <td mat-cell *matCellDef=\"let exp\">{{exp.expnsId}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Description Column -->\r\n              <ng-container matColumnDef=\"expnsDscr\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Description</th>\r\n                <td mat-cell *matCellDef=\"let exp\">{{exp.expnsDscr}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Category Column -->\r\n              <ng-container matColumnDef=\"expnsTypSeq\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Category</th>\r\n                <td mat-cell *matCellDef=\"let exp\">{{findExpenseTypeKey(exp.expnsTypSeq)}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Amount Column -->\r\n              <ng-container matColumnDef=\"expnsAmt\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Amount</th>\r\n                <td mat-cell *matCellDef=\"let exp\">{{exp.expnsAmt | currency:'PKR':''}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Instrument No. Column -->\r\n              <ng-container matColumnDef=\"instrNum\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Instrument No.</th>\r\n                <td mat-cell *matCellDef=\"let exp\">{{exp.instrNum}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Mode Column -->\r\n              <ng-container matColumnDef=\"pymtTypSeq\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Mode</th>\r\n                <td mat-cell *matCellDef=\"let exp\">{{findPaymentTypeKey(exp.pymtTypSeq)}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Date Column -->\r\n              <ng-container matColumnDef=\"crtdDt\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Date</th>\r\n                <td mat-cell *matCellDef=\"let exp\">{{exp.crtdDt |date :'dd-MM-yyyy' }}</td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"pymtRctFlg\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Type</th>\r\n                <td mat-cell *matCellDef=\"let exp\">\r\n                  {{exp.delFlg===true && exp.crntRecFlg === true?'Reversal': exp.pymtRctFlg===1?'Payment':'Receipt' }}\r\n                </td>\r\n              </ng-container>\r\n\r\n              <!-- Action Column -->\r\n              <ng-container matColumnDef=\"action\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Action</th>\r\n                <td mat-cell *matCellDef=\"let exp\">\r\n                  <ng-container *ngIf=\"exp.delFlg===true && exp.crntRecFlg === true; else actions\">\r\n\r\n                  </ng-container>\r\n                  <ng-template #actions>\r\n                    <a *ngIf=\"!exp.postFlg\" class=\"iconBtn\" (click)=\"onEdit(exp)\"><i class=\"fa fa-pencil\"></i></a>\r\n                    <a *ngIf=\"!exp.postFlg\" data-toggle=\"tooltip\" title=\"Delete\" class=\"iconBtn delBtn\"\r\n                      (click)=\"onDelete(exp.expSeq)\"><i class=\"fa fa-trash-o\"></i></a>\r\n                    <a *ngIf=\"exp.postFlg!=null && exp.postFlg && (role=='admin' || role ==='ho')\"\r\n                      class=\"iconBtn delBtn\" data-toggle=\"tooltip\" title=\"Reversal\" (click)=\"onReverse(exp)\"><i\r\n                        class=\"fa fa-arrow-left\"></i></a>\r\n                    <!-- <a  class=\"iconBtn\"><i class=\"fa fa-history\"></i></a> -->\r\n                    <a *ngIf=\"findPaymentTypeKey(exp.pymtTypSeq) == 'CASH'\" (click)=\"printCash(exp.expSeq)\"\r\n                      class=\"iconBtn\" data-toggle=\"tooltip\" title=\"Print\"><img src=\"assets/images/print-icon.png\"\r\n                        alt=\"\"></a>\r\n                  </ng-template>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"thead-light thead-blue\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n\r\n            <mat-paginator [length]=\"datalength\"  [pageSizeOptions]=\"[10, 15, 20]\" showFirstLastButtons></mat-paginator>\r\n          </div>\r\n          <!-- <div class=\"table-responsive\">\r\n            <table class=\"table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>Expense ID</th>\r\n                  <th>Description</th>\r\n                  <th>Category</th>\r\n                  <th>Amount</th>\r\n                  <th>Instrument No.</th>\r\n                  <th>Mode</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let exp of expenses\">\r\n                  <td>{{exp.expnsId}}</td>\r\n                  <td>{{exp.expnsDscr}}</td>\r\n                  <td>{{findExpenseTypeKey(exp.expnsTypSeq)}}</td>\r\n                  <td>{{exp.expnsAmt | currency:'PKR':''}}</td>\r\n                  <td>{{exp.instrNum}}</td>\r\n                  <td>{{findPaymentTypeKey(exp.pymtTypSeq)}}</td>\r\n                  <td>\r\n                    <a *ngIf=\"!exp.postFlg\" class=\"iconBtn\" (click)=\"onEdit(exp)\"><i class=\"fa fa-pencil\"></i></a>\r\n                    <a *ngIf=\"!exp.postFlg\" class=\"iconBtn delBtn\" (click)=\"onDelete(exp.expSeq)\"><i\r\n                        class=\"fa fa-trash-o\"></i></a>\r\n                    <a *ngIf=\"exp.postFlg!=null && exp.postFlg && role=='admin'\" class=\"iconBtn delBtn\"\r\n                      (click)=\"onReverse(exp)\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n                     <a  class=\"iconBtn\"><i class=\"fa fa-history\"></i></a> \r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div> -->\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n\r\n<div class=\"modal fade\" id=\"businessector\" role=\"dialog\">\r\n  <div class=\"modal-dialog big mymodal\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" *ngIf=\"isEdit\">Edit Expense</h5>\r\n        <h5 class=\"modal-title\" *ngIf=\"!isEdit\">Add Expense</h5>\r\n      </div>\r\n\r\n      <form [formGroup]=\"expenseForm\" (ngSubmit)=\"addExpensesSubmit()\">\r\n        <div class=\"modal-body\">\r\n          <ul class=\"infolist\">\r\n          </ul>\r\n          <div class=\"cRow\">\r\n\r\n            <div class=\"cCol6\">\r\n              <label>Type:</label>\r\n              <mat-radio-group name=\"pymtRctFlg\" required formControlName=\"pymtRctFlg\">\r\n                <mat-radio-button class=\"w-100\" [value]=\"1\">Payment</mat-radio-button>\r\n                <mat-radio-button class=\"w-100\" [value]=\"2\">Receipt</mat-radio-button>\r\n\r\n              </mat-radio-group>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"cRow\">\r\n            <!-- <div class=\"cCol2\" >\r\n                    <label>Expense Id:</label>\r\n                    <input type=\"text\" formControlName=\"expnsId\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.expnsId.errors }\" />\r\n                    <div *ngIf=\"submitted && form.expnsId.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"form.expnsId.errors.required\">Expense Id is required                                \r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n\r\n\r\n            <div class=\"cCol2\">\r\n              <label>Description:</label>\r\n              <input type=\"text\" formControlName=\"expnsDscr\" class=\"form-control\"\r\n                [ngClass]=\"{ 'is-invalid': form.expnsDscr.errors && form.expnsDscr.touched }\" />\r\n              <div *ngIf=\"form.expnsDscr.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"form.expnsDscr.errors.required\">Description is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"cCol2\">\r\n              <label>Category:</label>\r\n              <select type=\"\" (change)=\"onSelectCategory($event)\" formControlName=\"expnsTypSeq\" class=\"form-control\"\r\n                id=\"expnsTypSeq\" [ngClass]=\"{ 'is-invalid': form.expnsTypSeq.errors && form.expnsTypSeq.touched }\"\r\n                (change)=\"onSelectChange1($event)\">\r\n                <option *ngFor=\"let expense of expenseArray\" [value]=\"expense.typSeq\">{{expense.typStr}}</option>\r\n              </select>\r\n              <div *ngIf=\"form.expnsTypSeq.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"form.expnsTypSeq.errors.required\">Category is required</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"cCol2\">\r\n              <label>Amount:</label>\r\n              <input type=\"text\" formControlName=\"expnsAmt\" class=\"form-control\"\r\n                [ngClass]=\"{ 'is-invalid': form.expnsAmt.errors && form.expnsAmt.touched  }\" />\r\n              <div *ngIf=\"form.expnsAmt.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"form.expnsAmt.errors.required\">Expense Amount is required\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <label>Mode:</label>\r\n              <mat-select type=\"\" formControlName=\"pymtTypSeq\" class=\"form-control\" id=\"payment\"\r\n                [ngClass]=\"{ 'is-invalid': form.pymtTypSeq.errors?.required && form.pymtTypSeq.touched }\"\r\n                (selectionChange)=\"onSelectChange()\">\r\n                <mat-option *ngFor=\"let payment of paymentArray\" [value]=\"payment\">{{payment.typStr}}</mat-option>\r\n              </mat-select>\r\n              <div *ngIf=\"form.pymtTypSeq.errors?.required\" class=\"invalid-feedback\">\r\n                Mode is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"cRow\">\r\n\r\n            <div class=\"cCol2\" *ngIf=\"!isCash\">\r\n              <label>Instrument No.:</label>\r\n              <input type=\"text\" formControlName=\"instrNum\" class=\"form-control\"\r\n                [ngClass]=\"{ 'is-invalid': form.instrNum.errors?.required && form.instrNum.touched }\" />\r\n              <div *ngIf=\"form.instrNum.errors?.required\" class=\"invalid-feedback\">\r\n                <div>Instrument # is required\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button appNoDblClick type=\"button\" (click)=\"addExpensesSubmit()\" class=\"btn btn-primary btn-min\">Ok</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n        <!-- </div> -->\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"reverse\" role=\"dialog\">\r\n  <div class=\"modal-dialog mymodal\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Reverse Expense</h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"disgardForm\" (ngSubmit)=\"onReverseSubmit()\">\r\n        <input type=\"hidden\" formControlName=\"expSeq\" />\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol6\">\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"rmrks\" placeholder=\"Remarks:\" />\r\n                <mat-error *ngIf=\"df.rmrks.errors?.required\">\r\n                  Remarks are <strong>required</strong>\r\n                </mat-error>\r\n                <mat-error *ngIf=\"df.rmrks.errors?.pattern\">\r\n                  Special characters <strong>not allowed </strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button appNoDblClick type=\"button\" (click)=\"onReverseSubmit()\" class=\"btn btn-primary\">Ok</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/expense-management/expense/expense.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/expense-management/expense/expense.component.ts ***!
  \***********************************************************************/
/*! exports provided: ExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseComponent", function() { return ExpenseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_expense_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/expense.service */ "./src/app/shared/services/expense.service.ts");
/* harmony import */ var _shared_models_expense_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/expense.model */ "./src/app/shared/models/expense.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_shared_services_paymentTypes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/paymentTypes.service */ "./src/app/shared/services/paymentTypes.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/recovery.service */ "./src/app/shared/services/recovery.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ExpenseComponent = /** @class */ (function () {
    function ExpenseComponent(toaster, transfersService, spinner, changeDetectorRefs, paymentTypesService, recoveryService, formBuilder, expenseService, commonService) {
        this.toaster = toaster;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.changeDetectorRefs = changeDetectorRefs;
        this.paymentTypesService = paymentTypesService;
        this.recoveryService = recoveryService;
        this.formBuilder = formBuilder;
        this.expenseService = expenseService;
        this.commonService = commonService;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.role = this.auth.role;
        this.addExpense = new _shared_models_expense_model__WEBPACK_IMPORTED_MODULE_2__["Expense"]();
        this.isEdit = false;
        this.submitted = false;
        this.onBranchSelection = false;
        this.events = [];
        this.datalength = 0;
        this.lastPageIndex = 0;
        this.filterValue = "";
        this.searchVal = "";
        this.isCount = true;
        this.showFields = false;
    }
    ExpenseComponent.prototype.applyFilter = function (filterValue) {
        this.filterValue = filterValue;
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.dataBeforeFilter);
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
    ExpenseComponent.prototype.searchValue = function () {
        var _this = this;
        this.filterValue = this.searchVal.trim();
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            this.datalength = 0;
            setTimeout(function () { _this.datalength = _this.countBeforeFilter; }, 200);
            return;
        }
    };
    ExpenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.expenses = [];
        this.displayedColumns = ['expnsId', 'expnsDscr', 'expnsTypSeq', 'expnsAmt', 'instrNum', 'pymtTypSeq', 'crtdDt', 'pymtRctFlg', 'action'];
        this.expenseForm = this.formBuilder.group({
            pymtTypSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            expnsStsKey: [''],
            //expnsId: [''],
            expnsDscr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            instrNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            expnsAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            expnsTypSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pymtRctFlg: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.reverseForm = this.formBuilder.group({
            pymtTypSeq: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            expnsStsKey: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            //expnsId: [''],
            expnsDscr: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            instrNum: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            expnsAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            expnsTypSeq: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pymtRctFlg: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.commonService.getValuesByGroupName('\tSTATUS').subscribe(function (d) { return _this.statusArray = d; });
        // this.expenseService.getPaymentModes().subscribe((data) => {
        //   this.paymentArray = data;
        //   this.paymentArrayOrig = JSON.parse(JSON.stringify(data));
        //   console.log(this.paymentArrayOrig)
        //   console.log(this.paymentArray)
        // });
        // this.paymentTypesService.getAllTypes(5).subscribe((data) => {
        //   this.paymentArray  = data;
        // });
        if (this.auth.role == 'bm') {
            this.spinner.show();
            this.expenseService.getAllCatgoriesModes().subscribe(function (data) {
                _this.spinner.hide();
                _this.expenseArray = data;
                console.log(_this.expenseArray);
                _this.expenseService.getPaymentModes().subscribe(function (data) {
                    _this.paymentArray = data;
                    _this.paymentArrayOrig = JSON.parse(JSON.stringify(data));
                    console.log(_this.paymentArrayOrig);
                    console.log(_this.paymentArray);
                });
            });
        }
        else {
            this.toaster.info('Please Select Branch', 'Information');
            this.expenseArray = [];
            this.paymentArray = [];
            // this.expenseService.getAllCatgoriesModesByBranches(this.branchForm.controls['branch'].value).subscribe((data) => {
            //   this.expenseArray = data;
            //   console.log(this.expenseArray)
            // })
        }
        // if (this.auth.role == 'bm') {
        //   this.onBranchSelection = true;
        //   this.expenseService.getExpensesByBranchSeq(this.auth.emp_branch).subscribe(data => {
        //     this.expenses = data;
        //     this.dataSource = new MatTableDataSource(this.expenses);
        //     this.dataSource.paginator = this.paginator;
        //     this.dataSource.sort = this.sort;
        //   });
        // }
        this.branchForm = this.formBuilder.group({
            branch: [this.auth.emp_branch],
        });
        if (this.auth.role != 'bm' && this.auth.role != 'bdo') {
            this.commonService.getBrnchsForUsr().subscribe(function (res) {
                _this.branchs = res;
                console.log(res);
            });
        }
        else {
            this.onSelectBranch();
        }
        this.disgardForm = this.formBuilder.group({
            expSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            rmrks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9a-zA-Z ]+$")]],
        });
    };
    Object.defineProperty(ExpenseComponent.prototype, "form", {
        get: function () {
            return this.expenseForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpenseComponent.prototype, "df", {
        get: function () {
            return this.disgardForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ExpenseComponent.prototype.onSubmitBranchForm = function () {
        console.log(this.branchForm.value);
    };
    ExpenseComponent.prototype.onSelectCategory = function (e) {
        var _this = this;
        console.log(e.value);
        var cat = this.expenseForm.controls['expnsTypSeq'].value;
        console.log(cat);
        this.expenseArray.forEach(function (exp) {
            if (exp.typSeq == cat) {
                if (exp.typId == "0008") {
                    _this.isCash = false;
                }
            }
        });
    };
    ExpenseComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["tap"])(function () { return _this.loadSelectBranch(); }))
            .subscribe();
    };
    ExpenseComponent.prototype.onSelectBranch = function () {
        var _this = this;
        this.isCount = true;
        this.expenses = [];
        this.expenseArray = [];
        this.paymentArray = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.expenses);
        this.paginator.pageIndex = 0;
        this.lastPageIndex = 0;
        this.dataSource.paginator = this.paginator;
        this.searchVal = '';
        this.filterValue = '';
        if (this.branchForm.controls['branch'].value == null || this.branchForm.controls['branch'].value == 0) {
            this.onBranchSelection = false;
            this.expenses = [];
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
        this.expenseService.getAllCatgoriesModesByBranches(this.branchForm.controls['branch'].value).subscribe(function (data) {
            _this.expenseService.getPaymentModesByBranches(_this.branchForm.controls['branch'].value).subscribe(function (data2) {
                _this.expenseArray = data;
                _this.paymentArray = data2;
                _this.paymentArrayOrig = JSON.parse(JSON.stringify(data2));
            });
        });
        // } 
        if (this.branchForm.controls['branch'].value == 0) {
            this.onBranchSelection = true;
            this.expenseArray = [];
        }
        else {
            this.onBranchSelection = false;
            this.expenseService.getExpensesByBranchSeq(this.branchForm.controls['branch'].value, this.paginator.pageIndex, 10, "", this.isCount).subscribe(function (data) {
                _this.expenses = data.exp;
                _this.spinner.hide();
                if (_this.expenses.length <= 0 && _this.auth.role != 'bm' && _this.branchForm.controls['branch'].value != 0) {
                    _this.toaster.info('No Data Found Against This Branch', 'Information');
                }
                ;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.expenses);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
                _this.datalength = 0;
                setTimeout(function () { _this.datalength = data.count; console.log('date', data.count); }, 200);
                _this.dataBeforeFilter = _this.dataSource.data;
                _this.countBeforeFilter = data.count;
                _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
            }, function (error) {
                _this.spinner.hide();
                console.log('err All Expense Service');
                console.log('err', error);
            });
        }
    };
    ExpenseComponent.prototype.loadSelectBranch = function () {
        var _this = this;
        this.isCount = false;
        if (this.paginator.pageIndex < this.lastPageIndex)
            return;
        if (this.dataSource.paginator.length == this.dataSource.data.length)
            return;
        if (((this.paginator.pageIndex + 1) * this.paginator.pageSize) - this.dataSource.data.length > 0) {
            this.spinner.show();
            this.expenseService.getExpensesByBranchSeq(this.branchForm.controls['branch'].value, this.paginator.pageIndex, this.paginator.pageSize, this.filterValue, this.isCount).subscribe(function (data) {
                _this.spinner.hide();
                _this.expenses = data.exp;
                _this.lastPageIndex = _this.lastPageIndex + 1;
                _this.dataSource.data = _this.dataSource.data.concat(_this.expenses);
                data.count = _this.datalength;
                _this.datalength = 0;
                setTimeout(function () { _this.datalength = data.count; }, 200);
                if (_this.expenses.length <= 0 && _this.auth.role != 'bm' && _this.branchForm.controls['branch'].value != 0) {
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
    ExpenseComponent.prototype.getFilteredData = function (filterValue) {
        var _this = this;
        this.isCount = true;
        this.paginator.pageIndex = 0;
        this.spinner.show();
        this.expenseService.getExpensesByBranchSeq(this.branchForm.controls['branch'].value, this.paginator.pageIndex, this.paginator.pageSize, filterValue, this.isCount).subscribe(function (data) {
            _this.expenses = data.exp;
            _this.spinner.hide();
            if (_this.expenses.length <= 0 && _this.branchForm.controls['branch'].value != 0) {
                _this.toaster.info('No Data Found Against This Search', 'Information');
            }
            ;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.expenses);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = data.count;
        }, function (error) {
            _this.spinner.hide();
            console.log('err All Expense Service');
            console.log('err', error);
        });
    };
    ExpenseComponent.prototype.onAddNewClick = function () {
        this.expenseForm.reset();
        this.isEdit = false;
        this.addExpense = new _shared_models_expense_model__WEBPACK_IMPORTED_MODULE_2__["Expense"]();
        this.expenseForm = this.formBuilder.group({
            pymtTypSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            expnsStsKey: [''],
            //expnsId: [''],
            expnsDscr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            instrNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            expnsAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            expnsTypSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pymtRctFlg: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        $('#businessector').modal('show');
    };
    ExpenseComponent.prototype.addExpensesSubmit = function () {
        var _this = this;
        if (this.expenseForm.invalid) {
            console.log(this.expenseForm.value);
            return;
        }
        console.log(this.auth.role == 'bm');
        var a;
        // if (this.auth.role == 'bm') {
        //   a = this.auth.emp_branch;
        //   console.log(a)
        // } else {
        a = this.branchForm.controls['branch'].value;
        // }
        console.log(a);
        if (a.length == 0) {
            this.toaster.error('Please Enter Branch');
        }
        this.addExpense.pymtTypSeq = this.expenseForm.value.pymtTypSeq.typSeq;
        this.addExpense.brnchSeq = a;
        this.addExpense.expnsStsKey = this.expenseForm.value.expnsStsKey;
        //this.addExpense.expnsId= this.expenseForm.value.expnsId;
        this.addExpense.expnsDscr = this.expenseForm.value.expnsDscr;
        this.addExpense.instrNum = this.expenseForm.value.instrNum;
        this.addExpense.expnsAmt = this.expenseForm.value.expnsAmt;
        this.addExpense.expnsTypSeq = this.expenseForm.value.expnsTypSeq;
        this.addExpense.pymtRctFlg = this.expenseForm.value.pymtRctFlg;
        this.addExpense.expnsStsKey = 200;
        $('#businessector').modal('hide');
        console.log(this.addExpense);
        if (this.isEdit) {
            this.expenseService.updateExpense(this.addExpense).subscribe(function (data) {
                _this.addExpense = data;
                // this.expenseService.getExpenses(this.auth.role).subscribe(data => {
                //   this.expenses = data;
                //   this.dataSource = new MatTableDataSource(this.expenses);
                //   this.dataSource.paginator = this.paginator;
                //   this.dataSource.sort = this.sort;
                // });
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
        else {
            this.spinner.show();
            this.expenseService.addExpense(this.addExpense).subscribe(function (data) {
                _this.addExpense = data;
                _this.spinner.hide();
                // this.expenseService.getExpenses(this.auth.role).subscribe(data => {
                //   this.expenses = data;
                //   this.dataSource = new MatTableDataSource(this.expenses);
                //   this.dataSource.paginator = this.paginator;
                //   this.dataSource.sort = this.sort;
                // });
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
    };
    ExpenseComponent.prototype.onEdit = function (exp) {
        this.isEdit = true;
        this.expenseForm.patchValue(exp);
        this.addExpense = exp;
        $('#businessector').modal('show');
    };
    ExpenseComponent.prototype.onReverse = function (exp) {
        this.addExpense = null;
        this.addExpense = exp;
        $('#reverse').modal('show');
        this.disgardForm.patchValue(this.addExpense);
    };
    ExpenseComponent.prototype.onReverseSubmit = function () {
        var _this = this;
        this.addExpense.rmrks = this.disgardForm.get("rmrks").value;
        this.expenseService.reverseExpense(this.addExpense).subscribe(function (data) {
            // this.expenses.splice(this.expenses.indexOf(this.addExpense), 1);
            _this.expenses = [];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.expenses);
            _this.paginator.pageIndex = 0;
            _this.lastPageIndex = 0;
            _this.dataSource.paginator = _this.paginator;
            _this.searchVal = '';
            _this.filterValue = '';
            _this.onSelectBranch();
            _this.toaster.success("Expense Reversed", "Success");
            // this.dataSource = new MatTableDataSource(this.expenses);
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
        }, function (error) {
            _this.spinner.hide();
            if (error.status == 500) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
            else if (error) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
        });
        this.addExpense = null;
        $('#reverse').modal('hide');
        this.disgardForm.reset();
    };
    // onReverseSubmit() {
    //   this.submitted = true;
    //   (<any>$('#reverse')).modal('hide');
    //   if (this.reverseForm.invalid) {
    //     return;
    //   }
    //   this.addExpense.expnsAmt = this.reverseForm.value.expnsAmt;
    //   this.expenseService.reverseExpense(this.addExpense).subscribe(data => {
    //     this.addExpense = data;
    //   });
    // }
    ExpenseComponent.prototype.onDelete = function (Expenses) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Expense?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.expenseService.deleteExpense(Expenses).subscribe(function (data) {
                    _this.expenses.splice(_this.expenses.indexOf(Expenses), 1);
                    _this.expenses = [];
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.expenses);
                    _this.paginator.pageIndex = 0;
                    _this.lastPageIndex = 0;
                    _this.dataSource.paginator = _this.paginator;
                    _this.searchVal = '';
                    _this.filterValue = '';
                    _this.onSelectBranch();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Deleted!', 'Expense Deleted Successfully.', 'success');
                });
            }
        });
        console.log(Expenses);
    };
    ExpenseComponent.prototype.findValueByKey = function (key) {
        var status = '';
        if (this.statusArray) {
            this.statusArray.forEach(function (s) {
                if (s.codeKey === key) {
                    status = s.codeValue;
                }
            });
        }
        return status;
    };
    ExpenseComponent.prototype.findPaymentTypeKey = function (key) {
        var payment = '';
        if (this.paymentArray) {
            this.paymentArray.forEach(function (p) {
                if (p.typSeq === key) {
                    payment = p.typStr;
                }
            });
        }
        return payment;
    };
    ExpenseComponent.prototype.findExpenseTypeKey = function (key) {
        var expense = '';
        if (this.expenseArray) {
            this.expenseArray.forEach(function (e) {
                if (e.typSeq === key) {
                    expense = e.typStr;
                }
            });
        }
        return expense;
    };
    ExpenseComponent.prototype.showField = function () {
        this.showFields = true;
    };
    ExpenseComponent.prototype.closeField = function () {
        this.showFields = false;
    };
    ExpenseComponent.prototype.onSelectChange = function () {
        var _this = this;
        var instrNum = this.expenseForm.get('instrNum');
        if (this.expenseForm.get('pymtTypSeq').value.typId === '0001') {
            this.isCash = true;
            var cat_1 = this.expenseForm.controls['expnsTypSeq'].value;
            this.expenseArray.forEach(function (exp) {
                if (exp.typSeq == cat_1) {
                    if (exp.typId == "0008") {
                        _this.isCash = false;
                    }
                }
            });
            if (this.isCash)
                instrNum.clearValidators();
        }
        else {
            instrNum.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]+$')]));
            this.isCash = false;
        }
        instrNum.updateValueAndValidity();
    };
    ExpenseComponent.prototype.getTypeIdOfExpenseType = function (seq) {
        var cd = '';
        this.expenseArray.forEach(function (obj) {
            if (obj.typSeq == seq) {
                cd = obj.typId;
            }
        });
        return cd;
    };
    ExpenseComponent.prototype.onSelectChange1 = function (e) {
        var _this = this;
        console.log(e);
        console.log(this.getTypeIdOfExpenseType(this.expenseForm.controls['expnsTypSeq'].value));
        console.log(this.expenseArray);
        console.log(this.paymentArrayOrig);
        if (this.getTypeIdOfExpenseType(this.expenseForm.controls['expnsTypSeq'].value) == '0001' || this.getTypeIdOfExpenseType(this.expenseForm.controls['expnsTypSeq'].value) == '0008') {
            var i_1 = -1;
            this.paymentArray.forEach(function (pym, index) {
                if (pym.typId == _this.getTypeIdOfExpenseType(_this.expenseForm.controls['expnsTypSeq'].value)) {
                    i_1 = index;
                }
            });
            if (i_1 > -1) {
                this.paymentArray.splice(i_1, 1);
            }
        }
        else {
            this.paymentArray = JSON.parse(JSON.stringify(this.paymentArrayOrig));
        }
    };
    ExpenseComponent.prototype.printCash = function (trx) {
        this.recoveryService.getPostedReport(trx, 1).subscribe(function (response) {
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
    ExpenseComponent.prototype.refreshExpense = function () {
        var _this = this;
        this.isCount = true;
        this.spinner.show();
        this.expenseService.getExpensesByBranchSeq(this.branchForm.controls['branch'].value, this.paginator.pageIndex, 10, "", this.isCount).subscribe(function (data) {
            _this.spinner.hide();
            _this.expenses = data.exp;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.expenses);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = data.count;
            _this.dataBeforeFilter = _this.dataSource.data;
            _this.countBeforeFilter = data.count;
            _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"])
    ], ExpenseComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
    ], ExpenseComponent.prototype, "paginator", void 0);
    ExpenseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expense',
            template: __webpack_require__(/*! ./expense.component.html */ "./src/app/pages/expense-management/expense/expense.component.html"),
            styles: [__webpack_require__(/*! ./expense.component.css */ "./src/app/pages/expense-management/expense/expense.component.css")],
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_11__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], src_app_shared_services_paymentTypes_service__WEBPACK_IMPORTED_MODULE_6__["PaymentTypesService"], src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_8__["RecoveryService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_services_expense_service__WEBPACK_IMPORTED_MODULE_1__["ExpenseService"], _shared_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], ExpenseComponent);
    return ExpenseComponent;
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
//# sourceMappingURL=pages-expense-management-expense-management-module.js.map