(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recovery-recovery-module"],{

/***/ "./src/app/pages/recovery/AuthGuard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/recovery/AuthGuard.service.ts ***!
  \*****************************************************/
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
        console.log(this.auth);
        var b = false;
        this.auth.modules.forEach(function (screen) {
            if (screen.modUrl.indexOf("recovery") >= 0) {
                b = true;
            }
        });
        if (!b) {
            this.toaster.error("Permission Denied");
        }
        // ('Please Login to Continue');?
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/pages/recovery/mere.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/recovery/mere.pipe.ts ***!
  \*********************************************/
/*! exports provided: MergePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergePipe", function() { return MergePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MergePipe = /** @class */ (function () {
    function MergePipe() {
    }
    MergePipe.prototype.transform = function (arr1, arr2, arr3, arr4, arr5, arr6) {
        var a = arr1.split(',');
        var b = arr2.split(',');
        var c = arr3.split(',');
        var d = arr4.split(',');
        var e = arr5.split(',');
        var f = arr6.split(',');
        var arr = [];
        a.forEach(function (item, i) {
            arr.push({ inst: a[i], trx: b[i], post: c[i], amt: d[i], typ: e[i], dt: f[i] });
        });
        return arr;
    };
    MergePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'merge'
        })
    ], MergePipe);
    return MergePipe;
}());



/***/ }),

/***/ "./src/app/pages/recovery/recovery-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/recovery/recovery-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RecoveryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryRoutingModule", function() { return RecoveryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recovery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recovery.component */ "./src/app/pages/recovery/recovery.component.ts");
/* harmony import */ var _AuthGuard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthGuard.service */ "./src/app/pages/recovery/AuthGuard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _recovery_component__WEBPACK_IMPORTED_MODULE_2__["RecoveryComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
];
var RecoveryRoutingModule = /** @class */ (function () {
    function RecoveryRoutingModule() {
    }
    RecoveryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RecoveryRoutingModule);
    return RecoveryRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/recovery/recovery.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/recovery/recovery.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  tr.example-detail-row {\r\n    height: 0;\r\n    line-height: 1;\r\n\r\n  }\r\n  \r\n  .example-element-detail {\r\n    overflow: hidden;\r\n    display: flex;\r\n  }\r\n  \r\n  tr.mat-header-row {\r\n    height: 0px;\r\n}\r\n  \r\n  tr.mat-row {\r\n  height: 0px;\r\n}\r\n  \r\n  .mat-cell, .mat-footer-cell {\r\n  color: rgba(0,0,0,.87);\r\n  font-size: 0.750rem;\r\n}\r\n  \r\n  /*.trx-table td:last-child {\r\n text-align: center;\r\n}\r\n*/\r\n  \r\n  .td-center {\r\n  text-align: right;\r\n}\r\n  \r\n  .td-right{\r\n  text-align: center;\r\n}\r\n  \r\n  .table .thead-light th:last-child {\r\n  text-align: center;\r\n}\r\n  \r\n  .table .thead-light th:first-child {\r\n  text-align: center;\r\n}\r\n  \r\n  .table .thead-light>th {\r\n  padding: .45rem 0rem;\r\n}\r\n  \r\n  th.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n  \r\n  .mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n  \r\n  th.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n  \r\n  .mat-cell, .mat-footer-cell {\r\n  font-size: 13px;\r\n}\r\n  \r\n  td,th{\r\n  padding-left: 16px !important;\r\n  width: 11% !important;\r\n}\r\n  \r\n  td:first-child, th:first-child{\r\n  padding-left: 16px !important;\r\n  width: 15% !important;\r\n}\r\n  \r\n  .w-20{\r\n  width: 20% !important;\r\n}\r\n  \r\n  th{\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}"

/***/ }),

/***/ "./src/app/pages/recovery/recovery.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/recovery/recovery.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"leftSideBar\">\r\n          <h6><i class=\"fa fa-sliders fa-lg\"></i> Filter</h6>\r\n          <div class=\"selectedFilter\">\r\n            <ul>\r\n              <li *ngFor=\"let filter of filters\">{{filter.key}} : {{filter.value}}\r\n                <a (click)=\"deleteFilter(filter)\">\r\n                  <i class=\"fa fa-times\"></i>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"filtersWrap\">\r\n            <div class=\"filter\">\r\n              <a class=\"acc_trigger\">Organization</a>\r\n              <div class=\"collapse acc_container\" id=\"region\">\r\n                <div class=\"listmenu\">\r\n                  <ul class=\"sub-menu border-bottom pb-2\">\r\n                    <li *ngFor=\"let reg of organization\">\r\n                      <span class=\"nav-click\" style=\"width: 10%;margin-left: 90%;\"\r\n                        (click)=\"navClick($event.srcElement)\"></span>\r\n                      <span (click)=\"regionClick(reg)\">{{reg.regionName}}</span>\r\n                      <ul class=\"sub-menu\">\r\n                        <li *ngFor=\"let area of reg.areas\">\r\n                          <span class=\"nav-click\" style=\"width: 10%;margin-left: 90%;\"\r\n                            (click)=\"navClick($event.srcElement)\"></span>{{area.areaName}}\r\n                          <ul class=\"sub-menu\">\r\n                            <li *ngFor=\"let branch of area.branches\">\r\n                              <span class=\"nav-click\" style=\"width: 10%;margin-left: 90%;\"\r\n                                (click)=\"navClick($event.srcElement)\">\r\n                              </span>{{branch.branchName}}\r\n                              <ul class=\"sub-menu\">\r\n                                <li *ngFor=\"let port of branch.portfolio\" (click)=\"portfolioClick(port)\">\r\n                                  {{port.portfolioName}}</li>\r\n                              </ul>\r\n                            </li>\r\n                          </ul>\r\n                        </li>\r\n                      </ul>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"filter\"> <a class=\"acc_trigger\">Institution </a>\r\n              <div class=\"collapse acc_container\" id=\"country\">\r\n                <div class=\"pl-3 border-bottom pb-2\">\r\n                  <div class=\"checkbox mb-1\">\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                      <input type=\"checkbox\" id=\"filterEasyPaisa\" name=\"instEasyPaisa\" [ngModel]=\"filterEasyPaisa\"\r\n                        (ngModelChange)=\"onFilterCheckChange('Easy Paisa')\" class=\"custom-control-input\">\r\n                      <label class=\"custom-control-label\" for=\"filterEasyPaisa\"> Easy Paisa</label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"checkbox mb-1\">\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                      <input type=\"checkbox\" id=\"filterMobiCash\" name=\"filterMobiCash\" [ngModel]=\"filterMobiCash\"\r\n                        (ngModelChange)=\"onFilterCheckChange('MobiCash')\" class=\"custom-control-input\">\r\n                      <label class=\"custom-control-label\" for=\"filterMobiCash\"> Mobi Cash</label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"checkbox mb-1\">\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                      <input type=\"checkbox\" id=\"filterNadra\" name=\"filterNadra\" [ngModel]=\"filterNadra\"\r\n                        (ngModelChange)=\"onFilterCheckChange('Nadra')\" class=\"custom-control-input\">\r\n                      <label class=\"custom-control-label\" for=\"filterNadra\"> Nadra</label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"filter\"> <a class=\"acc_trigger\">Date Range (Due)</a>\r\n              <div class=\"collapse acc_container\">\r\n                <div class=\"pl-3 clearfix border-bottom pb-2\">\r\n                  <div class=\"cRow\">\r\n                    <div class=\"cCol1 clearfix  pt-0\">\r\n                      <label>From Date:</label>\r\n                      <div class=\"input-group date\">\r\n                        <input type=\"date\" class=\"form-control\" [ngModel]=\"dueDateFrom\" name=\"dueDateForm\" #dueDateFrom\r\n                          (ngModelChange)=\"onDateFilterChange(dueDateFrom.value,'dueFrom')\"\r\n                          placeholder=\"DD / MM / YYYY\">\r\n                        <div class=\"input-group-append input-group-addon\t\">\r\n                          <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"cCol1 clearfix pt-0\">\r\n                      <label>To Date:</label>\r\n                      <div class=\"input-group date\">\r\n                        <input type=\"date\" class=\"form-control\" [ngModel]=\"dueDateTo\" name=\"dueDateTo\" #dueDateTo\r\n                          (ngModelChange)=\"onDateFilterChange(dueDateTo.value,'dueTo')\" placeholder=\"DD / MM / YYYY\">\r\n                        <div class=\"input-group-append input-group-addon\t\">\r\n                          <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"filter\"> <a class=\"acc_trigger\">Date Range (Payment)</a>\r\n              <div class=\"collapse acc_container\">\r\n                <div class=\"pl-3 clearfix border-bottom pb-2\">\r\n                  <div class=\"cRow\">\r\n                    <div class=\"cCol1 clearfix  pt-0\">\r\n                      <label>From Date:</label>\r\n                      <div class=\"input-group date\">\r\n                        <input type=\"date\" class=\"form-control\" [ngModel]=\"paymentDateFrom\" #paymentDateFrom\r\n                          (ngModelChange)=\"onDateFilterChange(paymentDateFrom.value,'paymentFrom')\"\r\n                          placeholder=\"DD / MM / YYYY\">\r\n                        <div class=\"input-group-append input-group-addon\t\">\r\n                          <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"cCol1 clearfix pt-0\">\r\n                      <label>To Date:</label>\r\n                      <div class=\"input-group date\">\r\n                        <input type=\"date\" class=\"form-control\" [ngModel]=\"paymentDateTo\" name=\"paymentDateTo\"\r\n                          #paymentDateTo (ngModelChange)=\"onDateFilterChange(paymentDateTo.value,'paymentTo')\"\r\n                          placeholder=\"DD / MM / YYYY\">\r\n                        <div class=\"input-group-append input-group-addon\t\">\r\n                          <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"filter\"> <a class=\"acc_trigger\">Old Client ID</a>\r\n              <div class=\"collapse acc_container\">\r\n                <div class=\"pl-3 clearfix border-bottom pb-2\">\r\n                  <div class=\"cRow\">\r\n                    <div class=\"cCo11 clearfix pt-0\">\r\n                      <form class=\"form-inline searchForm\">\r\n                        <input class=\"form-control mr-2 form-control-sm\" type=\"text\" [ngModel]=\"oldClientId\"\r\n                          #oldClientId name=\"oldClientId\" placeholder=\"Search ID\" aria-label=\"Search\">\r\n                        <button class=\"btn btn-sm searchBtn\" (click)=\"onSearchOldClient(oldClientId.value)\"\r\n                          type=\"submit\">Search</button>\r\n                      </form>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"sidechecks mt-2\">\r\n              <div class=\"checkbox mb-1 mr-3 d-inline-block\">\r\n                <div class=\"custom-control custom-checkbox\">\r\n                  <input type=\"checkbox\" id=\"checkbox9\" name=\"coBorrower\" [ngModel]=\"filterPosted\"\r\n                    (ngModelChange)=\"onFilterCheckChange('Posted')\" class=\"custom-control-input\">\r\n                  <label class=\"custom-control-label\" for=\"checkbox9\"> Posted</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"checkbox mb-1 d-inline-block\">\r\n                <div class=\"custom-control custom-checkbox\">\r\n                  <input type=\"checkbox\" id=\"checkbox10\" name=\"coBorrower\" [ngModel]=\"filterOverdue\"\r\n                    (ngModelChange)=\"onFilterCheckChange('Overdue')\" class=\"custom-control-input\">\r\n                  <label class=\"custom-control-label\" for=\"checkbox10\"> Overdue</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\" *ngIf=\"allItems.length>0  || (this.auth.role == 'bm')\">\r\n              <div class=\"mysearchbox\" (click)=\"showField()\" *ngIf=\"!showFields\">\r\n                <h6 class=\"d-inline-block searchshow\" style=\"cursor: pointer;\">Search\r\n                  <i class=\"fa fa-search\"> </i>\r\n                </h6>\r\n              </div>\r\n              <div class=\"mysearch\" *ngIf=\"showFields\">\r\n\r\n                <form (ngSubmit)=\"applyFilter(searchVal)\" #searchForm=\"ngForm\">\r\n                  <div class=\"col-sm-9\" style=\"float:left;\">\r\n                    <mat-form-field *ngIf=\"showFields\">\r\n                      <!-- <a  *ngIf=\"showFields\">\r\n                            <i class=\"fa fa-window-close\" (click)=\"cloaseField()\"> </i> (keyup)=\"applyFilter($event.target.value)\"\r\n                          </a> -->\r\n                      <input id=\"searchBox\" (keyup)=\"searchValue()\" autofocus matInput name=\"searchValue\"\r\n                        [(ngModel)]=\"searchVal\" placeholder=\"Search\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-sm-2\" style=\"float:right;\">\r\n                    <button mat-raised-button color=\"primary\" type=\"submit\"\r\n                      style=\" background-color: #76b1e7; height: 31px; margin: 6px; \">Search</button>\r\n                  </div>\r\n                </form>\r\n                <!-- <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\" title=\"Type in a name\"> -->\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-6\" *ngIf=\"auth.role != 'bm' && auth.role != 'bdo'\">\r\n              <form [formGroup]=\"branchForm\" (ngSubmit)=\"onSubmitBranchForm()\">\r\n                <ng-select *ngIf=\"auth.role != 'bm' && auth.role != 'bdo'\" [items]=\"brnchs\" required\r\n                  (change)=\"onSelectBranch($event)\" bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\"\r\n                  placeholder=\"Select Branch:\" formControlName=\"branch\">\r\n                </ng-select>\r\n\r\n\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"table\" multiTemplateDataRows matSort>\r\n              <!--(matSortChange)=\"sortData($event)\">-->\r\n\r\n              <ng-container matColumnDef=\"frstNm\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Client Name</th>\r\n                <td class=\"tableRow\" mat-cell *matCellDef=\"let element\"> <a class=\"userImg\"><img\r\n                      src=\"assets/images/client2.png\" alt=\"\"><span>{{element.frstNm+\" \"+element.lastNm}}</span></a>\r\n                </td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"clntSeq\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Client ID </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.clntSeq}} </td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"prd\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Product(s)</th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.prd}} </td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"bdo\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> BDO</th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.bdo}} </td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"totalDue\">\r\n                <th class=\"td-center\" mat-header-cell *matHeaderCellDef>Total Due </th>\r\n                <td class=\"td-center\" mat-cell *matCellDef=\"let element\"> {{element.totalDue | currency:'PKR':''}} </td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"totalRecv\">\r\n                <th class=\"td-center\" mat-header-cell *matHeaderCellDef> Total Paid </th>\r\n                <td class=\"td-center\" mat-cell *matCellDef=\"let element\"> {{element.totalRecv | currency:'PKR':''}}\r\n                </td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"totalremain\">\r\n                <th class=\"td-center\" mat-header-cell *matHeaderCellDef> Total Remaining </th>\r\n                <td class=\"td-center\" mat-cell *matCellDef=\"let element\">\r\n                  {{element.totalDue-element.totalRecv | currency:'PKR':''}} </td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"nextDue\">\r\n                <th class=\"td-right\" mat-header-cell *matHeaderCellDef> Due Date </th>\r\n                <td class=\"td-right\" mat-cell *matCellDef=\"let element\"> {{element.nextDue | date :'dd-MM-yyyy' }} </td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"status\">\r\n                <th class=\"td-right\" mat-header-cell *matHeaderCellDef> Status </th>\r\n                <td class=\"td-right\" mat-cell *matCellDef=\"let element\"> {{element.status }} </td>\r\n              </ng-container>\r\n\r\n\r\n              <ng-container matColumnDef=\"action\">\r\n                <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                <td mat-cell *matCellDef=\"let element\"> <a *ngIf=\"element.totaldue-element.totalpaid!=0\" href=\"#\"\r\n                    data-toggle=\"modal\" (click)=\"openApplyPayment(element)\" class=\"iconBtn\"><img\r\n                      src=\"assets/images/rscheck.png\" alt=\"\"></a>\r\n                  <a *ngIf=\"element.totalpaid==0 && role=='admin'\" href=\"#\" data-toggle=\"modal\"\r\n                    (click)=\"disgardApp(element)\" class=\"iconBtn\"><img src=\"assets/images/crose-icon.png\" alt=\"\"></a>\r\n                </td>\r\n\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"expandedDetail\">\r\n                <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\r\n                  <div class=\"example-element-detail\"\r\n                    [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\r\n\r\n                    <table>\r\n\r\n                      <tr>\r\n                        <th>Inst. No</th>\r\n                        <th>Product</th>\r\n                        <th>Principal Due </th>\r\n                        <th>Charges Due </th>\r\n                        <th>Total Due </th>\r\n                        <th>Due Date</th>\r\n                        <th>Paid Amt.</th>\r\n                        <th>Paid Date</th>\r\n                        <th>Institution</th>\r\n                        <th>Instrument / Trans. Seq</th>\r\n                        <th>Status</th>\r\n                        <th style=\"min-width: 100px; display: inline-flex;\"> <span data-toggle=\"tooltip\"\r\n                            title=\"Pay Recovery\">\r\n                            <button class=\"customButtonForAnchors\" appNoDblClick\r\n                              *ngIf=\"element.totaldue-element.totalpaid!=0\" href=\"#\" data-toggle=\"modal\"\r\n                              (click)=\"openApplyPayment(element)\"><img src=\"assets/images/rscheck.png\" alt=\"\">\r\n                            </button></span>\r\n                          <button data-toggle=\"tooltip\" title=\"JV History\"\r\n                            (click)=\"revoceryVoucherHistry(element.clntSeq)\" class=\"customButtonForAnchors\"><i\r\n                              class=\"fa fa-history\"></i></button>\r\n                          <button *ngIf=\"auth.role=='admin' || auth.role == 'bm'\" href=\"#\" data-toggle=\"modal\"\r\n                            (click)=\"onExcessRecoverClick(element)\" class=\"customButtonForAnchors\"><i\r\n                              class=\"fa fa-money\" aria-hidden=\"true\"></i></button>\r\n                        </th>\r\n\r\n                      </tr>\r\n\r\n                      <tr *ngFor=\"let re of element.recoverySub;\">\r\n                        <td>{{re.instNum}}</td>\r\n                        <td>{{re.prd}}</td>\r\n                        <td>{{re.ppalAmtDue | currency:'PKR':''}}</td>\r\n                        <td><a href=\"#\" data-toggle=\"modal\" (click)=\"onCharges(re.paySchedDtlSeq)\">\r\n                            <span>{{re.totChrgDue | currency:'PKR':''}}</span></a></td>\r\n                        <td>{{re.ppalAmtDue+re.totChrgDue | currency:'PKR':''}}</td>\r\n                        <td>{{re.dueDt | date :'dd-MM-yyyy'}}</td>\r\n                        <td>\r\n                          <table class=\"thead-light thead-blue\">\r\n                            <tr *ngFor=\"let p of re.pymtAmt | split:','\">\r\n                              <td style=\"border:none\">{{p | currency:'PKR':''}}</td>\r\n                            </tr>\r\n                          </table>\r\n                        </td>\r\n                        <td>\r\n                          <table class=\"thead-light thead-blue\">\r\n                            <tr *ngFor=\"let p of re.pymtDt| split:','\">\r\n                              <td style=\"border:none\">{{p | date :'dd-MM-yyyy'}}</td>\r\n                            </tr>\r\n                          </table>\r\n                        </td>\r\n                        <td>\r\n                          <table class=\"thead-light thead-blue \">\r\n                            <tr *ngFor=\"let p of re.rcvryTyp| split:','\">\r\n                              <td style=\"border:none\">{{p}}</td>\r\n                            </tr>\r\n                          </table>\r\n                        </td>\r\n                        <td>\r\n                          <table class=\"thead-light thead-blue trx-table\">\r\n                            <div>\r\n                              <tr *ngFor=\"let p of re.instr| merge:re.trxSeq:re.post:re.trxPymt:re.pymtType:re.pymtDt\">\r\n                                <td style=\"border:none\"\r\n                                  *ngIf=\"(last==p.trx) &&  ((p.post==0) || (p.post==1 && (role==='admin' || role ==='ho'))); else notpost\">\r\n                                  {{p.inst}} <b *ngIf=\"p.trx!=''\">/</b><a data-toggle=\"modal\"\r\n                                    (click)=\"openAdjustPayment(element,p.trx,p.amt,p.inst,p.typ,p.dt)\"> {{p.trx}}</a>\r\n                                </td>\r\n                                <ng-template #notpost>\r\n                                  {{p.inst}} <b>/</b> {{p.trx}}\r\n                                  <a *ngIf=\"p.typ === '161'\" (click)=\"postedReport(p.trx)\" class=\"iconBtn\"\r\n                                    data-toggle=\"tooltip\" title=\"Print\"><img src=\"assets/images/print-icon.png\"\r\n                                      alt=\"\"></a>\r\n                                </ng-template>\r\n                              </tr>\r\n                            </div>\r\n\r\n                          </table>\r\n                        </td>\r\n                        <td>{{re.sts}}</td>\r\n                        <td></td>\r\n\r\n                      </tr>\r\n\r\n\r\n                    </table>\r\n                  </div>\r\n                </td>\r\n              </ng-container>\r\n              <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\" class=\"thead-light thead-blue\"></tr>\r\n              <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"example-element-row\"\r\n                [class.example-expanded-row]=\"expandedElement === element\" (click)=\"expandFunction(element)\">\r\n              </tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n\r\n\r\n            </table>\r\n            <mat-paginator [length]=\"datalength\" [pageSizeOptions]=\"[15]\"></mat-paginator>\r\n          </div>\r\n          <!-- \r\n              \r\n            <div class=\"table-responsive\">\r\n              <table class=\"table record\" id=\"myTable\" style=\"font-size:11px\">\r\n                <thead class=\"thead-light thead-blue\">\r\n                  <tr>\r\n                    <th width=\"15%\" style=\"text-align:center\">Client</th>\r\n                    <th>Loan Id</th>\r\n                    <th>Total Due </th>\r\n                    <th>Total Paid</th>\r\n                    <th>Status</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody *ngFor=\"let recovery of pagedItems\">\r\n                  <tr class=\"tableRow\" >\r\n                    <td>\r\n                      <div class=\"filter\"> <a class=\"acc_trigger\" style=\"border:none; padding:0px; padding-right:10px; float:left\"></a></div>\r\n                      <a class=\"userImg\"><img src=\"assets/images/client2.png\" alt=\"\"><span>{{recovery.frstNm}}\r\n                          {{recovery.lastNm}}<br><sup>{{recovery.oldClntId}}</sup></span></a>\r\n                    </td>\r\n                    <td>{{recovery.loanId}}</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td>{{recovery.recoverySub[0].refCd}}</td>\r\n                    <td><a href=\"#\" data-toggle=\"modal\" (click)=\"openApplyPayment(recovery,0)\" class=\"iconBtn\"><img src=\"assets/images/rscheck.png\" alt=\"\"></a></td>  \r\n                  </tr>\r\n                 \r\n                  <tr class=\" collapse acc_container collapseLogic\">\r\n                    <table >\r\n                    \r\n                        <tr>\r\n                          <th>inst.#</th>\r\n                          <th>Total Due </th>\r\n                          <th>Total Due </th>\r\n                          <th>Total Due </th>\r\n                          <th>Due Date</th>\r\n                          <th>Paid Amt.</th>\r\n                          <th>Paid Date</th>\r\n                          <th>Institution</th>\r\n                          <th>Instr.#</th>\r\n                          <th>Status</th>\r\n                          \r\n                        </tr>\r\n               \r\n                        <tr *ngFor=\"let re of recovery.recoverySub | slice:1; let i = index\">\r\n                          <td>{{re.instNum}}</td>\r\n                          <td>{{re.ppalAmtDue}}</td>\r\n                          <td>{{re.totChrgDue}}</td>\r\n                          <td>{{re.totalDueAmount}}</td>\r\n                          <td>{{re.dueDt | date :'dd-MM-yyyy'}}</td>\r\n                          <td>{{re.pymtAmt}}</td>\r\n                          <td>{{re.pymtDt | date :'dd-MM-yyyy'}}</td>\r\n                          <td>{{re.rcvryTyp}}</td>\r\n                          <td>{{re.instr}}</td>\r\n                          <td>{{re.refCd}}</td>\r\n                          \r\n                        </tr>\r\n                  \r\n                    \r\n                        </table>\r\n                  </tr>\r\n  \r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            -->\r\n          <!-- <nav aria-label=\"Page navigation \">\r\n              <ul class=\"pagination justify-content-center\" *ngIf=\"pager.pages && pager.pages.length\">\r\n                <li class=\"page-item disabled\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                  <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                </li>\r\n                <li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                  <a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n                </li>\r\n                <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                  <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                </li>\r\n              </ul>\r\n            </nav> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<div class=\"modal fade\" id=\"ApplyPayment\" role=\"dialog\">\r\n  <div class=\"modal-dialog mymodal big\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Apply Payment</h5>\r\n      </div>\r\n      <form [formGroup]=\"applyPayment\" (ngSubmit)=\"onApplyPaymentSubmit()\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\">\r\n            <input type=\"hidden\" formControlName=\"clientId\" />\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"Client ID:\" formControlName=\"clntId\"\r\n                  [errorStateMatcher]=\"matcher\">\r\n                <mat-error *ngIf=\"fApplyPayment.clntId.errors?.required\">\r\n                  Client Id <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"Client Name:\" formControlName=\"clientNm\"\r\n                  [errorStateMatcher]=\"matcher\">\r\n                <mat-error *ngIf=\"fApplyPayment.clientNm.errors?.required\">\r\n                  Client Name <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"Product:\" formControlName=\"prd\" [errorStateMatcher]=\"matcher\">\r\n                <mat-error *ngIf=\"fApplyPayment.prd.errors?.required\">\r\n                  branch name is <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"Remaining Amount:\" formControlName=\"totaldue\"\r\n                  [errorStateMatcher]=\"matcher\">\r\n                <mat-error *ngIf=\"fApplyPayment.totaldue.errors?.required\">\r\n                  branch name is <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"cCol2 \">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Payment Mode:\" (selectionChange)=\"onRecoveryChange()\"\r\n                  formControlName=\"rcvryTypsSeq\" name=\"rcvryTypsSeq\" [errorStateMatcher]=\"matcher\">\r\n                  <mat-option *ngFor=\"let edu of tempInstituteArray\" [value]=\"edu\">\r\n                    {{edu.typStr}}\r\n                  </mat-option>\r\n                </mat-select>\r\n                <mat-error *ngIf=\"fApplyPayment.rcvryTypsSeq.errors?.required\">\r\n                  Payment Mode is <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"cCol2\" *ngIf=\"!isCash\">\r\n              <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"Instrument Number:\" formControlName=\"instr\"\r\n                  [errorStateMatcher]=\"matcher\">\r\n                <mat-error *ngIf=\"fApplyPayment.instr.errors?.required\">\r\n                  instrument number is <strong>required</strong>\r\n                </mat-error>\r\n                <mat-error *ngIf=\"fApplyPayment.instr.errors?.maxlength\">\r\n                  instrument number length should be <strong>20 characters</strong>\r\n                </mat-error>\r\n                <mat-error *ngIf=\"fApplyPayment.instr.errors?.minlength\">\r\n                  instrument number length should be <strong>20 characters</strong>\r\n                </mat-error>\r\n                <mat-error *ngIf=\"fApplyPayment.instr.errors?.pattern\">\r\n                  only number are <strong>allowed</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"cCol2\" *ngIf=\"!isCash\">\r\n              <mat-form-field>\r\n                <input matInput required name=\"pymtDt\" [min]=\"minDate\" [max]=\"maxDate\" id=\"pymtDt\"\r\n                  formControlName=\"pymtDt\" disabled readonly placeholder=\"Slip Date:\" [matDatepicker]=\"picker1\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                <mat-error *ngIf=\"fApplyPayment.pymtDt.errors?.required\">\r\n                  Slip Date is <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"Payment Amount:\" pattern=\"^-?[\\d]+(?:e-?\\d+)?$\"\r\n                  formControlName=\"pymtAmt\" [errorStateMatcher]=\"matcher\">\r\n                <mat-error *ngIf=\"fApplyPayment.pymtAmt.errors?.required\">\r\n                  Payment Amount is <strong>required</strong>\r\n                </mat-error>\r\n                <mat-error *ngIf=\"fApplyPayment.pymtAmt.errors?.paymtamterror\">\r\n                  Payment Amount is <strong>Greater then Due Amount</strong>\r\n                </mat-error>\r\n                <mat-error *ngIf=\"fApplyPayment.pymtAmt.errors?.pattern\">\r\n                  Payment Amount is <strong>Invalid</strong>\r\n                </mat-error>\r\n\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"cCol2\">\r\n\r\n              <mat-checkbox class=\"example-margin\" formControlName=\"post\">Post</mat-checkbox>\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button type=\"button\" (click)=\"onApplyPaymentSubmit()\" class=\"btn btn-primary btn-min\"\r\n            [disabled]=\"!applyPayment.valid || disbFlg\">Ok</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"AdjustPayment\" role=\"dialog\" data-keyboard=\"false\" data-backdrop=\"static\">\r\n  <div class=\"modal-dialog mymodal bigger\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Adjust Payment</h5>\r\n      </div>\r\n      <form [formGroup]=\"adjustPayment\" (ngSubmit)=\"onAdjustPaymentSubmit()\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\">\r\n            <input type=\"hidden\" formControlName=\"trxId\" />\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"Client Id:\" formControlName=\"clntId\"\r\n                  [errorStateMatcher]=\"matcher\">\r\n                <mat-error *ngIf=\"fadjustPayment.clntId.errors?.required\">\r\n                  Client Id <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"Client Name:\" formControlName=\"clientNm\"\r\n                  [errorStateMatcher]=\"matcher\">\r\n                <mat-error *ngIf=\"fadjustPayment.clientNm.errors?.required\">\r\n                  Client Name <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"Product:\" formControlName=\"prd\" [errorStateMatcher]=\"matcher\">\r\n                <mat-error *ngIf=\"fApplyPayment.totaldue.errors?.required\">\r\n                  branch name is <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"Remaining Amount:\" formControlName=\"totaldue\"\r\n                  [errorStateMatcher]=\"matcher\">\r\n                <mat-error *ngIf=\"fadjustPayment.totaldue.errors?.required\">\r\n                  branch name is <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol3\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Reversal Reason:\" formControlName=\"chngRsnKey\" name=\"chngRsnKey\"\r\n                  [errorStateMatcher]=\"matcher\" (selectionChange)=\"onSelectionChanged($event)\">\r\n                  <mat-option *ngFor=\"let edu of revaslReasnsList\" [value]=\"edu.codeKey\">\r\n                    {{edu.codeValue}}\r\n                  </mat-option>\r\n                  <!-- <mat-error *ngIf=\"fadjustPayment.chngRsnKey.errors?.required && fadjustPayment.chngRsnKey.touched\">\r\n                    Remarks are <strong>required</strong>\r\n                  </mat-error> -->\r\n                </mat-select>\r\n                <mat-hint class=\"text-danger font-14\"\r\n                  *ngIf=\"fadjustPayment.chngRsnKey.errors?.required && fadjustPayment.chngRsnKey.touched\">\r\n                  Reversal Reason is <strong>required</strong>\r\n                </mat-hint>\r\n\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"Remarks:\" formControlName=\"chngRsnCmnt\"\r\n                  [errorStateMatcher]=\"matcher\">\r\n                <mat-error *ngIf=\"fadjustPayment.chngRsnCmnt.errors?.required && fadjustPayment.chngRsnCmnt.touched\">\r\n                  Remarks are <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"Payment Amount:\" pattern=\"^-?[\\d.]+(?:e-?\\d+)?$\"\r\n                  formControlName=\"pymtAmt\" [errorStateMatcher]=\"matcher\">\r\n                <mat-error *ngIf=\"fadjustPayment.pymtAmt.errors?.required\">\r\n                  Payment Amount is <strong>required</strong>\r\n                </mat-error>\r\n                <mat-error *ngIf=\"fadjustPayment.pymtAmt.errors?.paymtamterror\">\r\n                  Payment Amount is <strong>Greater then Due Amount</strong>\r\n                </mat-error>\r\n                <mat-error *ngIf=\"fadjustPayment.pymtAmt.errors?.pattern\">\r\n                  Payment Amount is <strong>Invalid</strong>\r\n                </mat-error>\r\n\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button appNoDblClick type=\"button\" (click)=\"onAdjustPaymentSubmit()\"\r\n            [disabled]=\"!adjustPayment.valid || disbFlg\" class=\"btn btn-primary btn-min\">Ok</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"chargesdetails\" role=\"dialog\">\r\n  <div class=\"modal-dialog mymodal\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Charges Detail</h5>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th><b>Charge Type</b></th>\r\n                <th><b>Amount</b></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let code of chargesDetails\">\r\n                <td>{{code.chrgTyp}}/-</td>\r\n                <td>{{code.amt}}/-</td>\r\n              </tr>\r\n\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"modal-footer smmodal-footer text-center\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Ok</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"disgardApp\" role=\"dialog\">\r\n  <div class=\"modal-dialog mymodal\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Defered Application</h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"disgardForm\" (ngSubmit)=\"onSubmitDisgardApp()\">\r\n        <input type=\"hidden\" formControlName=\"loanAppSeq\" />\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol6\">\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"cmnt\" placeholder=\"Remarks:\" />\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button type=\"submit\" class=\"btn btn-primary\">Ok</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"jvHistory\" role=\"dialog\">\r\n  <div class=\"modal-dialog mymodal\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Revocery jv History</h5>\r\n      </div>\r\n      <table>\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th>JV ID</th>\r\n            <th>JV Date</th>\r\n            <th>JV Type</th>\r\n            <th>JV Description</th>\r\n            <th>Credit</th>\r\n            <th>Debit</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let jv of history\">\r\n            <td>{{jv.hdrId}}</td>\r\n            <td>{{jv.jvDt}}</td>\r\n            <td>{{jv.Desc}}</td>\r\n            <td>{{jv.accDesc}}</td>\r\n            <td>{{jv.debit}}</td>\r\n            <td>{{jv.credit}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"exxcess_recovery\" role=\"dialog\" data-keyboard=\"false\" data-backdrop=\"static\">\r\n  <div class=\"modal-dialog mymodal big\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Add Excess Revocery</h5>\r\n      </div>\r\n      <form [formGroup]=\"excessPayment\" (ngSubmit)=\"onExcessRecoverSubmitt()\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\">\r\n            <input type=\"hidden\" formControlName=\"clientId\" />\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"Client ID:\" formControlName=\"clntId\"\r\n                  [errorStateMatcher]=\"matcher\">\r\n                <mat-error *ngIf=\"ef.clntId.errors?.required\">\r\n                  Client Id <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"Client Name:\" formControlName=\"clientNm\"\r\n                  [errorStateMatcher]=\"matcher\">\r\n                <mat-error *ngIf=\"ef.clientNm.errors?.required\">\r\n                  Client Name <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"Product:\" formControlName=\"prd\" [errorStateMatcher]=\"matcher\">\r\n                <mat-error *ngIf=\"ef.prd.errors?.required\">\r\n                  branch name is <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"Remaining Amount:\" formControlName=\"totaldue\"\r\n                  [errorStateMatcher]=\"matcher\">\r\n                <mat-error *ngIf=\"ef.totaldue.errors?.required\">\r\n                  branch name is <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"cCol2 \">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Payment Mode:\" (selectionChange)=\"onPaymentModeChange()\"\r\n                  formControlName=\"rcvryTypsSeq\" name=\"rcvryTypsSeq\" [errorStateMatcher]=\"matcher\">\r\n                  <mat-option *ngFor=\"let edu of tempInstituteArray\" [value]=\"edu\">\r\n                    {{edu.typStr}}\r\n                  </mat-option>\r\n                </mat-select>\r\n                <mat-error *ngIf=\"ef.rcvryTypsSeq.errors?.required\">\r\n                  Payment Mode is <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"cCol2\" *ngIf=\"!isCash\">\r\n              <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"Instrument Number:\" formControlName=\"instr\"\r\n                  [errorStateMatcher]=\"matcher\">\r\n                <mat-error *ngIf=\"ef.instr.errors?.required\">\r\n                  instrument number is <strong>required</strong>\r\n                </mat-error>\r\n                <mat-error *ngIf=\"ef.instr.errors?.maxlength\">\r\n                  instrument number length should be <strong>20 characters</strong>\r\n                </mat-error>\r\n                <mat-error *ngIf=\"ef.instr.errors?.minlength\">\r\n                  instrument number length should be <strong>20 characters</strong>\r\n                </mat-error>\r\n                <mat-error *ngIf=\"ef.instr.errors?.pattern\">\r\n                  only number are <strong>allowed</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"cCol2\" *ngIf=\"!isCash\">\r\n              <mat-form-field>\r\n                <input matInput required name=\"pymtDt\" [min]=\"minDate\" [max]=\"maxDate\" id=\"pymtDt\"\r\n                  formControlName=\"pymtDt\" disabled readonly placeholder=\"Slip Date:\" [matDatepicker]=\"picker1\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                <mat-error *ngIf=\"ef.pymtDt.errors?.required\">\r\n                  Slip Date is <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"text\" matInput placeholder=\"Payment Amount:\" pattern=\"^-?[\\d]+(?:e-?\\d+)?$\"\r\n                  formControlName=\"pymtAmt\" [errorStateMatcher]=\"matcher\">\r\n                <mat-error *ngIf=\"ef.pymtAmt.errors?.required\">\r\n                  Payment Amount is <strong>required</strong>\r\n                </mat-error>\r\n                <mat-error *ngIf=\"ef.pymtAmt.errors?.paymtamterror\">\r\n                  Payment Amount is <strong>Greater then Due Amount</strong>\r\n                </mat-error>\r\n                <mat-error *ngIf=\"ef.pymtAmt.errors?.pattern\">\r\n                  Payment Amount is <strong>Invalid</strong>\r\n                </mat-error>\r\n\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <!-- <div class=\"cCol2\">\r\n\r\n              <mat-checkbox class=\"example-margin\" formControlName=\"post\">Post</mat-checkbox>\r\n\r\n\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button type=\"button\" (click)=\"onExcessRecoverSubmitt()\" class=\"btn btn-primary btn-min\"\r\n            [disabled]=\"!excessPayment.valid || excessDisable\">Ok</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- <ngx-spinner\r\n    bdColor = \"rgba(51, 51, 51, 0.8)\"\r\n    size = \"medium\"\r\n    color = \"#ffffff\"\r\n    type = \"ball-newton-cradle\"></ngx-spinner> -->\r\n<!-- <script>\r\n    $(document).ready(function () {\r\n      $('[data-toggle=\"tooltip\"]').tooltip();\r\n    });\r\n  </script>\r\n  <script type=\"text/javascript\">\r\n    $(document).ready(function () {\r\n      $('.acc_trigger').toggleClass('inactive-header');\r\n  \r\n      $('.acc_trigger:first').addClass('active-header').next().show();\r\n      $('.acc_trigger').click(function () {\r\n        if ($(this).next().is(':hidden')) {\r\n          $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');\r\n          $(this).toggleClass('active-header').toggleClass('inactive-header');\r\n          $(this).next().slideToggle().toggleClass('open-content');\r\n        }\r\n  \r\n        else {\r\n          $(this).toggleClass('active-header').toggleClass('inactive-header');\r\n          $(this).next().slideToggle().toggleClass('open-content');\r\n        }\r\n      });\r\n  \r\n  \r\n      $('.tableRow').click(function () {\r\n        if ($(this).next().is(':hidden')) {\r\n          $('.active-header1').toggleClass('active-header1').toggleClass('inactive-header1').parents(\"tr:first\").next().slideToggle().toggleClass('open-content');\r\n          $(this).children(\":first\").children(\":first\").children(\":first\").toggleClass('active-header1').toggleClass('inactive-header1');\r\n          $(this).next().slideToggle().toggleClass('open-content');\r\n        }\r\n  \r\n        else {\r\n          $(this).children(\":first\").children(\":first\").children(\":first\").toggleClass('active-header1').toggleClass('inactive-header1');\r\n          $(this).next().slideToggle().toggleClass('open-content');\r\n        }\r\n      });\r\n      return false;\r\n    });\r\n  </script>\r\n  <script>\r\n    $(\".searchshow\").click(function () {\r\n      $(\".mysearchbox\").addClass(\"intro\");\r\n    });\r\n    $(\".remove-search\").click(function () {\r\n      $(\".mysearchbox\").removeClass(\"intro\");\r\n    });\r\n  \r\n  \r\n    function myFunction() {\r\n      var input, filter, table, tr, td, i;\r\n      input = document.getElementById(\"myInput\");\r\n      filter = input.value.toUpperCase();\r\n      table = document.getElementById(\"myTable\");\r\n      tr = table.getElementsByTagName(\"tr\");\r\n      for (i = 0; i < tr.length; i++) {\r\n        td = tr[i].getElementsByTagName(\"td\")[0];\r\n        if (td) {\r\n          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {\r\n            tr[i].style.display = \"\";\r\n          } else {\r\n            tr[i].style.display = \"none\";\r\n          }\r\n        }\r\n      }\r\n    }\r\n  </script>\r\n  <script>\r\n  \r\n    $('.listmenu ul li:has(ul.sub-menu)').prepend('<span class=\"nav-click\" />');\r\n    $(function ($) {\r\n      $('.listmenu .nav-click').click(function () {\r\n        var parent = $(this).parent();\r\n        if (parent.hasClass('toparrow')) {\r\n          $(\".sub-menu:first\", parent).hide(300);\r\n          parent.removeClass('toparrow');\r\n        } else {\r\n          $(\".sub-menu:first\", parent).show(300);\r\n          parent.addClass('toparrow');\r\n        }\r\n      });\r\n    });\r\n  </script> -->"

/***/ }),

/***/ "./src/app/pages/recovery/recovery.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/recovery/recovery.component.ts ***!
  \******************************************************/
/*! exports provided: MY_FORMATS, RecoveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryComponent", function() { return RecoveryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/recovery.service */ "./src/app/shared/services/recovery.service.ts");
/* harmony import */ var _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/helpers/MyErrorStateMatcher.helper */ "./src/app/shared/helpers/MyErrorStateMatcher.helper.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_services_disbursement_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/disbursement.service */ "./src/app/shared/services/disbursement.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var moment = moment__WEBPACK_IMPORTED_MODULE_15__;
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
var RecoveryComponent = /** @class */ (function () {
    function RecoveryComponent(router, recoveryService, spinner, fb, commonService, disbursementService, datepipe, toaster) {
        this.router = router;
        this.recoveryService = recoveryService;
        this.spinner = spinner;
        this.fb = fb;
        this.commonService = commonService;
        this.disbursementService = disbursementService;
        this.datepipe = datepipe;
        this.toaster = toaster;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.role = this.auth.role;
        this.columnsToDisplay = ['frstNm', 'clntSeq', 'prd', 'bdo', 'totalDue', 'totalRecv', 'totalremain', 'nextDue', 'status'];
        this.matcher = new _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_6__["MyErrorStateMatcher"]();
        this.submitted = false;
        this.test = 1233;
        this.filters = [];
        this.allItems = [];
        this.beforefiltereItems = [];
        // pager object
        this.pager = {};
        // paged items
        this.pagedItems = [];
        this.tempInstituteArray = [];
        this.chargesDetails = [];
        this.isCash = false;
        this.history = [];
        this.onBranchSelection = false;
        this.isCount = true;
        // applyFilter(filterValue: string) {
        //   this.dataSource.filter = filterValue.trim().toLowerCase();
        // }
        this.searchVal = "";
        this.filterValue = "";
        this.brnchs = [];
        this.lastPageIndex = 0;
        this.datalength = 0;
        this.disbFlg = false;
        this.showFields = false;
        this.excessDisable = false;
        this.minDate = new Date();
        this.maxDate = new Date();
        // this.minDate.setDate(this.maxDate.getDate() - 30);
        this.now = new Date();
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
        this.scheduleForm = this.fb.group({
            frstInstDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.disgardForm = this.fb.group({
            loanAppSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cmnt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        //
        // $(document).ready(function () {
        //   $('.acc_trigger').toggleClass('inactive-header');
        //   $('.acc_trigger').click(function () {
        //     if ($(this).next().is(':hidden')) {
        //       $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
        //       $(this).toggleClass('active-header').toggleClass('inactive-header');
        //       $(this).next().slideToggle().toggleClass('open-content');
        //     } else {
        //       $(this).toggleClass('active-header').toggleClass('inactive-header');
        //       $(this).next().slideToggle().toggleClass('open-content');
        //     }
        //   });
        //
        //   return false;
        // });
        // this.loadScript();
    }
    RecoveryComponent.prototype.applyFilter = function (filterValue) {
        // console.log(filterValue)
        // console.log(filterValue.trim().toLowerCase().length)
        this.filterValue = filterValue;
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.dataBeforeFilter);
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
    RecoveryComponent.prototype.searchValue = function () {
        this.filterValue = this.searchVal.trim();
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            // this.dataSource.sort = this.sort;
            this.datalength = this.countBeforeFilter;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            console.log(this.dataSource);
            return;
        }
    };
    RecoveryComponent.prototype.ngOnInit = function () {
        this.applyPayment = this.fb.group({
            branchNm: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            prd: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            clientNm: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            clntId: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            installmentAmountDue: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            rcvryTypsSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            instr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+$')])],
            pymtDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pymtAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.validate.bind(this)],
            clientId: [''],
            totaldue: [{ value: '', disabled: true }],
            post: [''],
        });
        this.excessPayment = this.fb.group({
            branchNm: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            prd: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            clientNm: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            clntId: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            installmentAmountDue: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            rcvryTypsSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            instr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+$')])],
            pymtDt: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pymtAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            clientId: [''],
            totaldue: [{ value: '', disabled: true }],
            post: [''],
        });
        this.adjustPayment = this.fb.group({
            prd: [{ value: '', disabled: true }],
            clientNm: [{ value: '', disabled: true }],
            clntId: [{ value: '', disabled: true }],
            rcvryTypsSeq: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: "", disabled: true }),
            instr: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: "", disabled: true }),
            adjPymtDt: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: "", disabled: true }),
            pymtAmt: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: "", disabled: true }),
            totaldue: [{ value: '', disabled: true }],
            trxId: [''],
            rcvryReverRea: [''],
            post: [''],
            chngRsnKey: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            chngRsnCmnt: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.loadLovs();
        this.branchForm = this.fb.group({
            branch: null,
        });
        // this.branchForm = this.fb.group({
        //   branch: [this.auth.emp_branch],
        // });
        // this.dataSource.sort = this.sort;
        // this.recoveries$ = this.allItems.includes('MobiCash');
    };
    RecoveryComponent.prototype.onSelectBranch = function () {
        console.log(this.branchForm.controls['branch'].value);
        this.getAllItems();
    };
    RecoveryComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.auth.role != 'bm' && this.auth.role != 'bdo') {
            this.toaster.info('Please Select Branch', 'Information');
            this.commonService.getBrnchsForUsr().subscribe(function (res) {
                _this.brnchs = res;
            });
        }
        else {
            this.getAllItems();
        }
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function () { return _this.loadRecoveryPage(); }))
            .subscribe();
    };
    RecoveryComponent.prototype.loadRecoveryPage = function () {
        var _this = this;
        this.isCount = false;
        if (this.paginator.pageIndex < this.lastPageIndex)
            return;
        if (this.dataSource.paginator.length == this.dataSource.data.length)
            return;
        if (((this.paginator.pageIndex + 1) * this.paginator.pageSize) - this.dataSource.data.length > 0) {
            setTimeout(function () { _this.spinner.show(); }, 5);
            this.recoveryService.getPagedRecoveries(this.paginator.pageIndex + 1, this.paginator.pageSize, this.filterValue, this.branchForm.controls['branch'].value, this.isCount).subscribe(function (data) {
                _this.allItems = data.data;
                if (_this.allItems.length <= 0 && _this.branchForm.controls['branch'].value != 0) {
                    _this.toaster.info('No Data Found Against This Branch', 'Information');
                }
                ;
                _this.dataSource.data = _this.dataSource.data.concat(_this.allItems);
                _this.lastPageIndex = _this.lastPageIndex + 1;
                data.count = _this.datalength;
                _this.datalength = 0;
                setTimeout(function () { _this.datalength = data.count; }, 10);
                _this.spinner.hide();
                if (_this.filterValue.length == 0) {
                    _this.dataBeforeFilter = _this.dataSource.data;
                    _this.countBeforeFilter = data.count;
                    _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
                }
                // this.setPage(1);
            }, function (error) {
                _this.spinner.hide();
                console.log(error);
            });
        }
    };
    RecoveryComponent.prototype.getFilteredData = function (filterValue) {
        var _this = this;
        this.paginator.pageIndex = 0;
        this.isCount = true;
        setTimeout(function () { _this.spinner.show(); }, 5);
        this.recoveryService.getPagedRecoveries(this.paginator.pageIndex + 1, this.paginator.pageSize, filterValue, this.branchForm.controls['branch'].value, this.isCount).subscribe(function (data) {
            _this.allItems = data.data;
            _this.spinner.hide();
            if (_this.allItems.length <= 0 && _this.branchForm.controls['branch'].value != 0) {
                _this.toaster.info('No Data Found Against This Search', 'Information');
            }
            ;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](data.data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = 0;
            setTimeout(function () { _this.datalength = data.count; }, 10);
        }, function (error) {
            _this.spinner.hide();
            console.log('err All Loans Service');
            console.log('err', error);
        });
    };
    RecoveryComponent.prototype.validate = function (control) {
        var pymtAmt = control;
        var totaldue = control.parent.get('totaldue');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(pymtAmt.value > totaldue.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (result) { return result ? { paymtamterror: true } : null; }));
    };
    // sortData(sort: Sort) {
    //   const data = this.dataSource.slice();
    //   if (!sort.active || sort.direction === '') {
    //     this.dataSource = data;
    //     return;
    //   }
    //   this.dataSource = data.sort((a, b) => {
    //     const isAsc = sort.direction === 'asc';
    //     switch (sort.active) {
    //       case 'name': return compare(a.name, b.name, isAsc);
    //       case 'calories': return compare(a.calories, b.calories, isAsc);
    //       case 'fat': return compare(a.fat, b.fat, isAsc);
    //       case 'carbs': return compare(a.carbs, b.carbs, isAsc);
    //       case 'protein': return compare(a.protein, b.protein, isAsc);
    //       default: return 0;
    //     }
    //   });
    //   function compare(a: number | string, b: number | string, isAsc: boolean) {
    //     return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    //   }
    // }
    RecoveryComponent.prototype.onRecoveryChange = function () {
        var pymtDt = this.applyPayment.get('pymtDt');
        var instr = this.applyPayment.get('instr');
        if (this.applyPayment.get('rcvryTypsSeq').value.typId === '0001') {
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
    RecoveryComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.commonService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
        // this.dataSource = this.pagedItems;
    };
    Object.defineProperty(RecoveryComponent.prototype, "fApplyPayment", {
        get: function () {
            return this.applyPayment.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecoveryComponent.prototype, "fadjustPayment", {
        get: function () {
            return this.adjustPayment.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RecoveryComponent.prototype, "ef", {
        get: function () {
            return this.excessPayment.controls;
        },
        enumerable: true,
        configurable: true
    });
    RecoveryComponent.prototype.getAllItems = function () {
        var _this = this;
        this.isCount = true;
        this.allItems = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.allItems);
        this.paginator.pageIndex = 0;
        this.dataSource.paginator = this.paginator;
        this.filterValue = '';
        this.searchVal = '';
        this.lastPageIndex = 0;
        if (this.branchForm.controls['branch'].value == null || this.branchForm.controls['branch'].value == 0) {
            this.onBranchSelection = false;
            this.dataSource = null;
            this.datalength = 0;
            if (this.auth.role != 'bm' && this.auth.role != 'bdo')
                return;
        }
        setTimeout(function () { _this.spinner.show(); }, 5);
        this.recoveryService.getPagedRecoveries(this.paginator.pageIndex + 1, this.paginator.pageSize, this.filterValue, this.branchForm.controls['branch'].value, this.isCount).subscribe(function (data) {
            _this.allItems = data.data;
            _this.spinner.hide();
            if (_this.allItems.length <= 0 && _this.branchForm.controls['branch'].value != 0) {
                _this.toaster.info('No Data Found Against This Branch', 'Information');
            }
            ;
            /*
            let clntSeq;
            data.forEach((r: Recovery) => {
              r.recoverySub = [];
              if (clntSeq !== r.clntSeq) {
                data.forEach(r2 => {
                  if (r2.clntSeq === r.clntSeq) {
                    r.recoverySub.push(new RecoverySub(r2));
                  }
                });
                this.allItems.push(r);
              }
              clntSeq = r.clntSeq;
            });
      
            this.allItems.forEach((r: Recovery) => {
              let totaldue: number = 0;
              let totalpaid: number = 0;
              let v = 0;
              r.recoverySub.forEach((s: RecoverySub) => {
                totaldue = +totaldue + +s.totalDueAmount;
                let toArray = s.pymtAmt === null ? null : s.pymtAmt.split(",");
      
                toArray.forEach(p => {
                  totalpaid = +totalpaid + +p;
                });
              });
      
              r.totalpaid = totalpaid;
              r.totaldue = totaldue;
            });*/
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.allItems);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            // this.dataSource.paginator.p
            _this.datalength = data.count;
            _this.dataBeforeFilter = _this.dataSource.data;
            _this.countBeforeFilter = data.count;
            _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
        }, function (error) {
            _this.spinner.hide();
            console.log(error);
        });
    };
    RecoveryComponent.prototype.removeDuplicates = function (myArr, prop) {
        return myArr.filter(function (obj, pos, arr) {
            return arr.map(function (mapObj) { return mapObj[prop]; }).indexOf(obj[prop]) === pos;
        });
    };
    RecoveryComponent.prototype.openApplyPayment = function (recovery) {
        var _this = this;
        this.recoveryService.getClntRecoveryTypes(recovery.clntSeq).subscribe((function (data) {
            _this.tempInstituteArray = data;
        }));
        this.recovery = recovery;
        this.applyPayment.reset();
        var v = 0;
        var inst = "";
        var cur_amt = 0;
        recovery.recoverySub.forEach(function (s) {
            var totalpaid = 0;
            var toArray = s.pymtAmt === null ? null : s.pymtAmt.split(",");
            toArray.forEach(function (p) {
                totalpaid = +totalpaid + +p;
            });
            console.log(totalpaid);
            if (s.dueDt == inst && v == 1) {
                cur_amt = cur_amt + (s.ppalAmtDue + s.totChrgDue) - totalpaid;
                v = 2;
            }
            else if ((s.ppalAmtDue + s.totChrgDue) > totalpaid && v == 0) {
                cur_amt = cur_amt + (s.ppalAmtDue + s.totChrgDue) - totalpaid;
                console.log(cur_amt);
                v = 1;
                inst = s.dueDt;
            }
        });
        this.applyPayment.patchValue({
            prd: recovery.prd,
            clientNm: recovery.frstNm + ' ' + recovery.lastNm,
            clientId: recovery.clntSeq,
            clntId: recovery.clntSeq,
            totaldue: recovery.totalDue - recovery.totalRecv,
            pymtAmt: cur_amt,
            pymtDt: new Date()
        });
        $('#ApplyPayment').modal('show');
    };
    RecoveryComponent.prototype.openAdjustPayment = function (recovery, trx, amt, inst, type, dt) {
        var _this = this;
        this.recoveryService.getClntRecoveryTypes(recovery.clntSeq).subscribe((function (data) {
            _this.tempInstituteArray = data;
        }));
        this.recovery = null;
        this.recovery = recovery;
        this.adjustPayment.reset();
        $('#AdjustPayment').modal('show');
        // this.commonService.getValuesByRefCdGRp('0358').subscribe(d=>{
        //   this.revaslReasnsList = d;
        // }
        // ); 
        this.commonService.getValues('0338').subscribe(function (d) {
            _this.revaslReasnsList = d;
            console.log(_this.revaslReasnsList);
        });
        this.adjustPayment.patchValue({
            prd: recovery.prd,
            clientNm: recovery.frstNm + ' ' + recovery.lastNm,
            clntId: recovery.clntSeq,
            totaldue: recovery.totalDue - recovery.totalRecv,
            trxId: trx,
            rcvryTypsSeq: +type,
            instr: inst,
            adjPymtDt: new Date(dt),
            pymtAmt: amt,
            chngRsnKey: [],
            chngRsnCmnt: [],
        });
    };
    RecoveryComponent.prototype.onAdjustPaymentSubmit = function () {
        var _this = this;
        if (!this.adjustPayment.valid) {
            this.toaster.error("Enter Missing Fields", "Error");
            // return;
        }
        else {
            var result = Object.assign({}, this.adjustPayment.value);
            console.log(result);
            $('#AdjustPayment').modal('hide');
            result.pymtAmt = '0';
            this.recoveryService.adjustPayment(result).subscribe(function (d) {
                _this.toaster.success("Reverted Successfully", "Success");
                _this.recovery.recoverySub = d;
                var totalpaid = 0;
                _this.recovery.recoverySub.forEach(function (s) {
                    var toArray = s.pymtAmt === null ? null : s.pymtAmt.split(",");
                    toArray.forEach(function (p) {
                        totalpaid = +totalpaid + +p;
                    });
                });
                _this.recovery.totalRecv = totalpaid;
            }, function (error) {
                if (error.status == 500) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
                else if (error) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
            });
        }
    };
    RecoveryComponent.prototype.onApplyPaymentSubmit = function () {
        var _this = this;
        this.disbFlg = true;
        var result = Object.assign({}, this.applyPayment.value);
        var isCash = result.rcvryTypsSeq.typId === '0001';
        result.pymtDt = this.commonService.formatDate(result.pymtDt);
        result.rcvryTypsSeq = result.rcvryTypsSeq.typSeq;
        this.recoveryService.applyPayment(result).subscribe(function (d) {
            $('#ApplyPayment').modal('hide');
            _this.recovery.recoverySub = d.recovery;
            var totalpaid = 0;
            var v = 0;
            _this.recovery.recoverySub.forEach(function (s) {
                var toArray = s.pymtAmt === null ? null : s.pymtAmt.split(",");
                var payed = 0;
                toArray.forEach(function (p) {
                    totalpaid = +totalpaid + +p;
                    payed = +payed + +p;
                });
                if ((s.ppalAmtDue + s.totChrgDue) > totalpaid && v == 0) {
                    _this.recovery.nextDue = s.dueDt;
                }
                _this.disbFlg = false;
            }, function (error) {
                _this.spinner.hide();
                if (error.status == 500) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
                else if (error) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
                $('#ApplyPayment').modal('hide');
                _this.disbFlg = false;
            });
            _this.recovery.totalRecv = totalpaid;
            if (result.post && isCash) {
                _this.postedReport(d.trxSeq);
            }
            if (_this.recovery.totalDue - totalpaid == 0) {
                var index = _this.allItems.findIndex(function (r) { return r.clntSeq === _this.recovery.clntSeq; });
                _this.allItems.splice(index, 1);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.allItems);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
        });
    };
    RecoveryComponent.prototype.loadLovs = function () {
        // this.commonService.getValues('GENDER').subscribe((res) => {
        //   this.gender = res;
        // }, (error) => {
        //   console.log('err', error);
        // });
        //
        // this.commonService.getValues('INSTITUTION').subscribe((res) => {
        //   this.institution = res;
        // }, (error) => {
        //   console.log('err', error);
        // });
        // this.commonService.getAllFilters().subscribe((res) => {
        //   this.organization = res.organization;
        //   // this.geography = res.geography;
        // }, (error) => {
        //   console.log('err', error);
        // });
    };
    RecoveryComponent.prototype.navClick = function (element) {
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
    RecoveryComponent.prototype.deleteFilterValue = function (value) {
        var _this = this;
        this.filters.forEach(function (filter, index) {
            if (filter.value === value) {
                _this.filters.splice(index, 1);
            }
        });
        this.setPage(0);
    };
    RecoveryComponent.prototype.deleteFilter = function (filter) {
        var index = this.filters.indexOf(filter, 0);
        if (index > -1) {
            this.filters.splice(index, 1);
        }
        // if (filter.key === 'Gender') {
        //   this.genderSelected = '';
        //   this.allItems = this.disbs;
        //   this.setPage(0);
        // }
        // if (filter.type === 'geography') {
        //   this.allItems = this.disbs;
        //   this.setPage(0);
        //   if (this.genderSelected !== '') {
        //     this.genderFilter();
        //   }
        // }
    };
    RecoveryComponent.prototype.appendFilter = function (key, value) {
        var found = false;
        for (var i = 0; i < this.filters.length; i++) {
            if (this.filters[i].type === key) {
                found = true;
                this.filters[i].key = key;
                this.filters[i].value = value;
            }
        }
        if (!found) {
            this.filters.push({ key: key, value: value, type: key });
        }
    };
    RecoveryComponent.prototype.portfolioClick = function (port) {
        this.appendFilter('Organization', port.portfolioName);
    };
    RecoveryComponent.prototype.onFilterCheckChange = function (event) {
        switch (event) {
            case 'Easy Paisa':
                this.filterEasyPaisa = !this.filterEasyPaisa;
                if (this.filterEasyPaisa) {
                    this.filterAllItems(event, 'Institution');
                    this.appendFilter('Institution', event);
                }
                else {
                    this.allItems = this.beforefiltereItems;
                    this.deleteFilterValue(event);
                }
                break;
            case 'MobiCash':
                this.filterMobiCash = !this.filterMobiCash;
                if (this.filterMobiCash) {
                    this.filterAllItems(event, 'Institution');
                    this.appendFilter('Institution', event);
                }
                else {
                    this.allItems = this.beforefiltereItems;
                    this.deleteFilterValue(event);
                }
                break;
            case 'Nadra':
                this.filterNadra = !this.filterNadra;
                if (this.filterNadra) {
                    this.filterAllItems(event, 'Institution');
                    this.appendFilter('Institution', event);
                }
                else {
                    this.allItems = this.beforefiltereItems;
                    this.deleteFilterValue(event);
                }
                break;
            case 'Overdue':
                this.filterOverdue = !this.filterOverdue;
                if (this.filterOverdue) {
                    this.filterAllItems(event, 'Status');
                    this.appendFilter('Status', event);
                }
                else {
                    this.allItems = this.beforefiltereItems;
                    this.deleteFilterValue(event);
                }
                break;
            case 'Posted':
                this.filterPosted = !this.filterPosted;
                if (this.filterPosted) {
                    this.filterAllItems(event, 'Status');
                    this.appendFilter('Status', event);
                }
                else {
                    this.allItems = this.beforefiltereItems;
                    this.deleteFilterValue(event);
                }
                break;
            default:
                this.getAllItems();
                break;
        }
        if (!this.filterNadra && !this.filterEasyPaisa && !this.filterMobiCash && !this.filterPosted && !this.filterOverdue) {
            this.getAllItems();
        }
    };
    RecoveryComponent.prototype.filterAllItems = function (event, filterName) {
        //update
        /*
        this.beforefiltereItems = this.allItems;
        if (filterName === 'Institution') {
          this.allItems = this.allItems.filter(
            r => r.recoverySub.find((rs => rs.rcvryTyp === event)));
        } else if (filterName === 'Status') {
          this.allItems = this.allItems.filter(
            r => r.recoverySub.find((rs => rs.refCd === event))
          );
        } else if (filterName === 'clientOldId') {
          // this.allItems = this.allItems.filter(r => r.paySchedDtlSeq === event);
        }
        // this.setPage(0);
        this.dataSource = new MatTableDataSource(this.allItems);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.allItems);
        */
    };
    RecoveryComponent.prototype.onSearchOldClient = function (event) {
        this.oldClientId = event;
        this.filterAllItems(this.oldClientId, 'clientOldId');
        this.appendFilter('Client Id', event);
    };
    RecoveryComponent.prototype.onDateFilterChange = function (event, s) {
        switch (s) {
            case 'dueFrom':
                this.dueDateFrom = this.commonService.formatDate(event);
                console.log('dueFrom' + this.dueDateFrom);
                break;
            case 'dueTo':
                this.dueDateTo = this.commonService.formatDate(event);
                console.log('dueTo' + this.dueDateTo);
                break;
            case 'paymentFrom':
                this.paymentDateFrom = this.commonService.formatDate(event);
                console.log('paymentFrom' + this.paymentDateFrom);
                break;
            case 'paymentTo':
                this.paymentDateTo = this.commonService.formatDate(event);
                console.log('paymentTo' + this.paymentDateTo);
                break;
        }
    };
    RecoveryComponent.prototype.onCharges = function (number) {
        var _this = this;
        $('#chargesdetails').modal('show');
        this.disbursementService.getPaymenrScheduleDetail(number).subscribe(function (d) {
            _this.chargesDetails = d;
            _this.chargesDetails.forEach(function (as, index) {
                _this.chargesDetails[index].chrgTyp = as.chargesTypesDTO.chrgTyp;
            });
        });
    };
    RecoveryComponent.prototype.bulkPosting = function () {
        this.recoveryService.bulkPosting().subscribe(function (data) {
        });
    };
    RecoveryComponent.prototype.generateSchedule = function () {
        $('#generatemodal').modal('show');
    };
    RecoveryComponent.prototype.disgardApp = function (recovery) {
        $('#disgardApp').modal('show');
        this.disgardForm = this.fb.group({
            //update
            // loanAppSeq: [recovery.loanId, Validators.required],
            cmnt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    RecoveryComponent.prototype.onSubmitDisgardApp = function () {
        var _this = this;
        $('#disgardApp').modal('hide');
        this.disgardForm.value.cmnt == null ? " " : this.disgardForm.value.cmnt;
        this.recoveryService.deleteApplication(this.disgardForm.value).subscribe(function () {
            //update 
            var index = 0; //this.allItems.findIndex(r => r.loanId === this.disgardForm.value.loanAppSeq);
            _this.allItems.splice(index, 1);
            // this.dataSource = this.allItems;
            // this.setPage(0);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.allItems);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) { return console.log('There was an error: ', error); });
    };
    RecoveryComponent.prototype.postedReport = function (trx) {
        this.recoveryService.getPostedReport(trx, 0).subscribe(function (response) {
            var binaryData = [];
            binaryData.push(response);
            var fileURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
            window.open(fileURL, '_blank');
        });
    };
    RecoveryComponent.prototype.expandFunction = function (element) {
        var _this = this;
        if (this.expandedElement === element) {
            this.expandedElement = null;
        }
        else {
            this.recoveryService.getSingleRecovery(element.clntSeq).subscribe(function (d) {
                element.recoverySub = d;
                var recoveries = [];
                element.recoverySub.forEach(function (r, i) {
                    if (r.trxSeq != "") {
                        var test = r.trxSeq.split(",").map(Number);
                        var sorted = test.sort(function (a, b) { return a - b; });
                        recoveries = recoveries.concat(test);
                        _this.last = sorted[sorted.length - 1];
                    }
                });
                // let sorted = recoveries.sort((a, b) => a - b);
                // this.last=sorted[sorted.length - 1];
                _this.expandedElement = element;
            });
        }
    };
    RecoveryComponent.prototype.showField = function () {
        this.showFields = true;
    };
    RecoveryComponent.prototype.onSelectionChanged = function (w) {
        console.log(w);
        if (this.adjustPayment.controls['chngRsnKey'].value == 1485) {
            console.log(this.adjustPayment.controls['chngRsnKey'].value);
            this.adjustPayment.get('rcvryTypsSeq').disable();
            this.adjustPayment.get('instr').disable();
            this.adjustPayment.get('adjPymtDt').disable();
            this.adjustPayment.get('pymtAmt').disable();
        }
        else {
            this.adjustPayment.get('rcvryTypsSeq').enable();
            this.adjustPayment.get('instr').enable();
            this.adjustPayment.get('adjPymtDt').enable();
            this.adjustPayment.get('pymtAmt').disable();
        }
    };
    RecoveryComponent.prototype.revoceryVoucherHistry = function (clntSeq) {
        var _this = this;
        this.history = null;
        this.recoveryService.getJvHistory(clntSeq).subscribe((function (data) {
            _this.history = data;
        }));
        $('#jvHistory').modal('show');
    };
    RecoveryComponent.prototype.onExcessRecoverClick = function (recovery) {
        var _this = this;
        this.recoveryService.getClntRecoveryTypes(recovery.clntSeq).subscribe((function (data) {
            _this.tempInstituteArray = data;
        }));
        this.recovery = recovery;
        this.excessPayment.reset();
        $('#exxcess_recovery').modal('show');
        console.log(this.excessPayment.controls);
        this.excessPayment.patchValue({
            prd: recovery.prd,
            clientNm: recovery.frstNm + ' ' + recovery.lastNm,
            clientId: recovery.clntSeq,
            clntId: recovery.clntSeq,
            totaldue: recovery.totalDue - recovery.totalRecv,
            pymtAmt: 0,
            pymtDt: new Date()
        });
    };
    RecoveryComponent.prototype.onPaymentModeChange = function () {
        var pymtDt = this.excessPayment.get('pymtDt');
        var instr = this.excessPayment.get('instr');
        if (this.excessPayment.get('rcvryTypsSeq').value.typId === '0001') {
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
    RecoveryComponent.prototype.onExcessRecoverSubmitt = function () {
        var _this = this;
        this.spinner.show();
        this.excessDisable = true;
        var result = Object.assign({}, this.excessPayment.value);
        var isCash = result.rcvryTypsSeq.typId === '0001';
        result.pymtDt = this.commonService.formatDate(result.pymtDt);
        result.rcvryTypsSeq = result.rcvryTypsSeq.typSeq;
        this.recoveryService.payExcessRecovery(result).subscribe(function (d) {
            _this.excessDisable = false;
            _this.spinner.hide();
            $('#exxcess_recovery').modal('hide');
            if (result.post && isCash) {
                _this.postedReport(d.trxSeq);
            }
        }, function (error) {
            $('#exxcess_recovery').modal('hide');
            _this.spinner.hide();
            if (error.status == 500) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
            else if (error) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
            _this.excessDisable = false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSort"])
    ], RecoveryComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"])
    ], RecoveryComponent.prototype, "paginator", void 0);
    RecoveryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recovery',
            template: __webpack_require__(/*! ./recovery.component.html */ "./src/app/pages/recovery/recovery.component.html"),
            styles: [__webpack_require__(/*! ./recovery.component.css */ "./src/app/pages/recovery/recovery.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_5__["RecoveryService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], src_app_shared_services_disbursement_service__WEBPACK_IMPORTED_MODULE_11__["DisbursementService"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrService"]])
    ], RecoveryComponent);
    return RecoveryComponent;
}());



/***/ }),

/***/ "./src/app/pages/recovery/recovery.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/recovery/recovery.module.ts ***!
  \***************************************************/
/*! exports provided: RecoveryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryModule", function() { return RecoveryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _recovery_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recovery-routing.module */ "./src/app/pages/recovery/recovery-routing.module.ts");
/* harmony import */ var _recovery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recovery.component */ "./src/app/pages/recovery/recovery.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _split_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./split.pipe */ "./src/app/pages/recovery/split.pipe.ts");
/* harmony import */ var _mere_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mere.pipe */ "./src/app/pages/recovery/mere.pipe.ts");
/* harmony import */ var _AuthGuard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AuthGuard.service */ "./src/app/pages/recovery/AuthGuard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var RecoveryModule = /** @class */ (function () {
    function RecoveryModule() {
    }
    RecoveryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _recovery_routing_module__WEBPACK_IMPORTED_MODULE_2__["RecoveryRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_recovery_component__WEBPACK_IMPORTED_MODULE_3__["RecoveryComponent"], _split_pipe__WEBPACK_IMPORTED_MODULE_7__["SplitPipe"], _mere_pipe__WEBPACK_IMPORTED_MODULE_8__["MergePipe"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _AuthGuard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
        })
    ], RecoveryModule);
    return RecoveryModule;
}());



/***/ }),

/***/ "./src/app/pages/recovery/split.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/recovery/split.pipe.ts ***!
  \**********************************************/
/*! exports provided: SplitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitPipe", function() { return SplitPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SplitPipe = /** @class */ (function () {
    function SplitPipe() {
    }
    SplitPipe.prototype.transform = function (val, params) {
        return val.split(params);
    };
    SplitPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'split'
        })
    ], SplitPipe);
    return SplitPipe;
}());



/***/ })

}]);
//# sourceMappingURL=pages-recovery-recovery-module.js.map