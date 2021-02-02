(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["compliance-repot-compliance-repot-module~loan-app-loan-app-module~organization-organization-module~p~1d619dcb"],{

/***/ "./src/app/shared/services/common.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/common.service.ts ***!
  \***************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _models_Api_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Api.model */ "./src/app/shared/models/Api.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var CommonService = /** @class */ (function () {
    function CommonService(http, router, spinner, locale) {
        this.http = http;
        this.router = router;
        this.spinner = spinner;
        this.locale = locale;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_0__["ApiModel"]();
        this.token = 'Bearer ' + sessionStorage.getItem('token');
    }
    CommonService.prototype.getValues = function (groupName) {
        return this.http.get(this.apiModel.host + '/setupservice/api/ref-cd-vals-by-group-key/' + groupName, { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { return console.log(p); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('Get Group Vlaues : ' + groupName)));
    };
    CommonService.prototype.getValuesByRefCdGRp = function (refCdGrp) {
        return this.http.get(this.apiModel.host + '/setupservice/api/ref-cd-val-by-ref-cd-grp/' + refCdGrp, { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { return console.log(p); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('Get Group Vlaues : ' + refCdGrp)));
    };
    CommonService.prototype.getSectors = function (prdSeq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-biz-sect-prd/' + prdSeq, { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { return console.log(p); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('Get Group Vlaues : ' + prdSeq)));
    };
    CommonService.prototype.getActivity = function (sectSeq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-biz-acty-sect/' + sectSeq, { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { return console.log(p); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('Get Group Vlaues : ' + sectSeq)));
    };
    CommonService.prototype.getValuesByGroupName = function (name) {
        return this.http.get(this.apiModel.host + '/setupservice/api/vals-by-group-name?groupName=' + name, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getValuesByGroupName')));
    };
    CommonService.prototype.getGlAccounts = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/gl-accounts', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getGlAccounts')));
    };
    CommonService.prototype.getCommunity = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/get-employee-cmnties', { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { return console.log(p); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('Get Community')));
    };
    CommonService.prototype.getCommunityForPort = function (seq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/get-cmnties-by-portfolio/' + seq, { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { return console.log(p); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('Get Community')));
    };
    CommonService.prototype.getAllFilters = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/get-filters/6', { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { return console.log(p); }));
    };
    CommonService.prototype.getOrganizationforUser = function (user) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-ports-for-user/' + user, { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { return console.log(p); }));
    };
    CommonService.prototype.applyFilter = function (path, id) {
        var _this = this;
        this.spinner.show();
        return this.http.get(this.apiModel.host + '/loanservice/api/get-clients-listing-with-filters/' + path + '/' + id, { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { console.log(p); _this.spinner.hide(); }));
    };
    CommonService.prototype.getAssociateProductsForProduct = function (obj) {
        return this.http.post(this.apiModel.host + '/setupservice/api/get-asoc-prds-for-client', obj, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { console.log(p); }));
    };
    CommonService.prototype.getRecoveryStatus = function (seq) {
        return this.http.get(this.apiModel.host + '/recoverydisbursementservice/api/upcomeing-due-installment/' + seq, { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { console.log(p); }));
    };
    CommonService.prototype.getAllAttendanceForToday = function (obj) {
        return this.http.post(this.apiModel.host + '/adminservice/api/get-attendance-for-date', obj, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { console.log(p); }));
    };
    CommonService.prototype.getStatusListing = function () {
        return this.http.get(this.apiModel.host + '/adminservice/api/attendance-status-list', { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { console.log(p); }));
    };
    CommonService.prototype.generateAttendanceForToday = function (obj) {
        return this.http.post(this.apiModel.host + '/adminservice/api/insert-attendance-for-date', obj, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { console.log(p); }));
    };
    CommonService.prototype.updateAttendanceForEmployee = function (obj) {
        return this.http.post(this.apiModel.host + '/adminservice/api/update-employee-attendance', obj, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { console.log(p); }));
    };
    CommonService.prototype.getLeaveSummary = function (obj) {
        return this.http.post(this.apiModel.host + '/adminservice/api/get-employee-leave-request', obj, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { console.log(p); }));
    };
    // Added by Zohaib Asim - Dated 11/11/2020
    // reverse Leave Request
    CommonService.prototype.reverseLeaveRequest = function (employeeId, appDate) {
        return this.http.delete(this.apiModel.host + '/adminservice/api/reverse-employee-leave-request/' + employeeId + '/' + appDate, { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { console.log(p); }));
    };
    // Added by Zohaib Asim - Dated 5/11/2020
    // Will fetch the details of Leave Balance by Employee and Leave ID
    CommonService.prototype.getLeaveBalanceByEmployeeLeaveId = function (empId, leaveId) {
        return this.http.get(this.apiModel.host + '/adminservice/api/get-employee-leave-balance/' + empId + '/' + leaveId, { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { console.log(p); }));
    };
    // Will fetch the details of Leave Balance by Employee, Leave ID and Attendance Date
    CommonService.prototype.getLeaveBalanceByEmployeeLeaveIdAndAttDate = function (empId, leaveId, attendanceDate) {
        return this.http.get(this.apiModel.host + '/adminservice/api/get-employee-leave-balance/' + empId + '/' + leaveId + '/' + attendanceDate, { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { console.log(p); }));
    };
    // Get Attendance details
    CommonService.prototype.getAttendanceDetails = function (employeeId, appDate) {
        return this.http.get(this.apiModel.host + '/adminservice/api/get-attendance-details/' + employeeId + '/' + appDate, { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { console.log(p); }));
    };
    // End by Zohaib
    CommonService.prototype.saveLeaveSummary = function (obj) {
        return this.http.post(this.apiModel.host + '/adminservice/api/save-employee-leave-request', obj, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { console.log(p); }));
    };
    CommonService.prototype.postAllPostFlg = function (date) {
        return this.http.get(this.apiModel.host + '/adminservice/api/post-attendance-for-date-get/' + this.auth.emp_branch + '/' + date, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { console.log(p); }));
    };
    CommonService.prototype.getBrnchsForUsr = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-brnches-by-user', { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { console.log(p); }));
    };
    // Added by Zohaib Asim - Dated 16-12-2020
    // Health Claim Types
    CommonService.prototype.getHlthClmTypes = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/hlth-clm-types', { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { console.log(p); }));
    };
    // End by Zohaib Asim 
    CommonService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    };
    CommonService.prototype.formatDate = function (date) {
        if (date === '') {
            return;
        }
        console.log(date);
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(date, 'dd/MM/yyyy', this.locale);
    };
    CommonService.prototype.formatDateCustom = function (date, formate) {
        if (date === '') {
            return;
        }
        console.log(date);
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(date, formate, this.locale);
    };
    CommonService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], String])
    ], CommonService);
    return CommonService;
}());



/***/ })

}]);
//# sourceMappingURL=compliance-repot-compliance-repot-module~loan-app-loan-app-module~organization-organization-module~p~1d619dcb.js.map