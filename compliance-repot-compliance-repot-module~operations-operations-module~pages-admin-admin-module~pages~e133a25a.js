(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["compliance-repot-compliance-repot-module~operations-operations-module~pages-admin-admin-module~pages~e133a25a"],{

/***/ "./src/app/shared/services/recovery.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/recovery.service.ts ***!
  \*****************************************************/
/*! exports provided: RecoveryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryService", function() { return RecoveryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Api_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Api.model */ "./src/app/shared/models/Api.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mocks_mock_common_codes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mocks/mock_common_codes */ "./src/app/shared/mocks/mock_common_codes.ts");
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









var RecoveryService = /** @class */ (function () {
    function RecoveryService(http, router, toastr, spinner) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.rcvryTyp = 4;
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_1__["ApiModel"]();
        this.recoveries = _mocks_mock_common_codes__WEBPACK_IMPORTED_MODULE_7__["RECOVRIES"];
    }
    RecoveryService.prototype.getAllRecoveries = function () {
        var _this = this;
        this.spinner.show();
        return this.http.get(this.apiModel.host + '/recoverydisbursementservice/api/recovery?user=' + this.auth.user.username + '&filter=&sort=&direction=&pageNumber=1&pageSize=10', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this.spinner.hide();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllRecoveries')));
    };
    RecoveryService.prototype.getPagedRecoveries = function (pageNumber, pageSize, filterString, brnchSeq, isCount) {
        var _this = this;
        this.spinner.show();
        return this.http.get(this.apiModel.host + '/recoverydisbursementservice/api/recovery?user=' + this.auth.user.username + '&filter=' + filterString + '&sort=&direction=&pageNumber=' + pageNumber + '&pageSize=' + pageSize + '&brnchSeq=' + (brnchSeq == null ? '' : brnchSeq) + '&isCount=' + isCount, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this.spinner.hide();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllRecoveries')));
    };
    RecoveryService.prototype.getSingleRecovery = function (clntSeq) {
        var _this = this;
        return this.http.get(this.apiModel.host + '/recoverydisbursementservice/api/recovery/' + clntSeq, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.spinner.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('applyPayment')));
    };
    // journel vouchers
    // getJounrelVoucher(pageIndex, limit) {
    //   return this.http.get<JVoucher>(this.apiModel.host + '/recoverydisbursementservice/api/all-jv-vouchers/' + pageIndex + '/' + limit, { headers: this.apiModel.httpHeaderPost }).pipe(
    //     tap((data: any) => this.spinner.hide()),
    //     catchError(this.handleError('ALL JVoucher')));
    // }
    RecoveryService.prototype.getJounrelVoucher = function (brnchSeq, pageIndex, pageSize, filter, isCount) {
        var _this = this;
        return this.http.get(this.apiModel.host + '/recoverydisbursementservice/api/all-jv-vouchers?brnchSeq=' + brnchSeq + '&pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&filter=' + filter + '&isCount=' + isCount, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.spinner.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('ALL JVoucher')));
    };
    //journel vouchers filtered service 
    RecoveryService.prototype.getJournelVoucherPaged = function (pageIndex, limit, filterString) {
        var _this = this;
        this.spinner.show();
        return this.http.get(this.apiModel.host + '/recoverydisbursementservice/api/all-jv-vouchers/' + pageIndex + '/' + limit + '/' + filterString, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this.spinner.hide();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('ALL JVoucher')));
    };
    // journel voucher details
    RecoveryService.prototype.getJournelVoucherDetails = function (jvId) {
        var _this = this;
        return this.http.get(this.apiModel.host + '/recoverydisbursementservice/api/jv-vouchers-details/' + jvId, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.spinner.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('JVoucherDetials')));
    };
    // Attendance check in
    RecoveryService.prototype.checkInAttendance = function (checkIn) {
        var _this = this;
        return this.http.post(this.apiModel.host + '/adminservice/api/emp-att-checkin', checkIn, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.toastr.success('Check In', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('checkin')));
    };
    // Attendance check out
    RecoveryService.prototype.checkOutAttendance = function (checkOut) {
        var _this = this;
        return this.http.post(this.apiModel.host + '/adminservice/api/emp-att-checkout', checkOut, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.toastr.success('Check Out', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('checkout')));
    };
    RecoveryService.prototype.applyPayment = function (applyPayment) {
        var _this = this;
        return this.http.post(this.apiModel.host + '/recoverydisbursementservice/api/apply-payment', applyPayment, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.toastr.success('Payment Received', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('applyPayment')));
    };
    RecoveryService.prototype.adjustPayment = function (adjustPayment) {
        return this.http.post(this.apiModel.host + '/recoverydisbursementservice/api/adjust-payment', adjustPayment, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('adjustPayment')));
    };
    RecoveryService.prototype.bulkPosting = function () {
        var _this = this;
        return this.http.post(this.apiModel.host + '/recoverydisbursementservice/api/bulk-posting/' + this.auth.user.username, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.toastr.success('Bulk Posting', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('applyPayment')));
    };
    RecoveryService.prototype.deleteApplication = function (app) {
        var _this = this;
        var url = this.apiModel.host + '/recoverydisbursementservice/api/defered-application/' + app.loanAppSeq + '/' + app.cmnt;
        return this.http.get(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.toastr.success('Application Deleted.', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('deleteApplication')));
    };
    RecoveryService.prototype.defferApplicationLoanService = function (app) {
        var _this = this;
        var url = this.apiModel.host + '/loanservice/api/deffer-application/' + app.loanAppSeq;
        return this.http.get(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.toastr.success('Application Deleted.', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('deleteApplication')));
    };
    RecoveryService.prototype.getRecoveryTypes = function () {
        return this.http.get(this.apiModel.host + "/recoverydisbursementservice/api/get-type-branch-catgry/" + this.rcvryTyp + "/" + this.auth.emp_branch, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('get Payment Modes')));
    };
    RecoveryService.prototype.getClntRecoveryTypes = function (clntSeq) {
        return this.http.get(this.apiModel.host + "/recoverydisbursementservice/api/get-clnt-pymnt/" + clntSeq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('get Payment Modes')));
    };
    RecoveryService.prototype.getWrtOfClntRecoveryTypes = function (clntSeq) {
        return this.http.get(this.apiModel.host + "/recoverydisbursementservice/api/get-wrt-of-clnt-pymnt/" + clntSeq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('get Payment Modes')));
    };
    RecoveryService.prototype.getPostedReport = function (trx, type) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-kcr-report/" + trx + "/" + this.auth.user.username + "/" + type;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    RecoveryService.prototype.getJvHistory = function (clntSeq) {
        return this.http.get(this.apiModel.host + "/recoverydisbursementservice/api/recovery-vouchers-history/" + clntSeq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('get Payment Modes')));
    };
    RecoveryService.prototype.payExcessRecovery = function (applyPayment) {
        var _this = this;
        return this.http.post(this.apiModel.host + '/recoverydisbursementservice/api/add-excess-manuly', applyPayment, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.toastr.success('Payment Received', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('applyPayment')));
    };
    RecoveryService.prototype.getWrtOffClients = function (brnchSeq) {
        return this.http.get(this.apiModel.host + "/recoverydisbursementservice/api/write-off-loans/" + brnchSeq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('get Payment Modes')));
    };
    RecoveryService.prototype.revertWrtOffClient = function (trnxSeq) {
        return this.http.get(this.apiModel.host + "/recoverydisbursementservice/api/wrt-of-trx-reversal/" + trnxSeq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('Reversal Of Write Off Clients')));
    };
    // getWrtOffClientsBranchWise(brnchSeq: number) {
    //   return this.http.get<any[]>
    //     (this.apiModel.host + `/recoverydisbursementservice/api/write-off-loans/` + brnchSeq, { headers: this.apiModel.httpHeaderGet }).pipe(
    //       tap((data: any) => console.log(data)),
    //       catchError(this.handleError('get Payment Modes')));
    // }
    RecoveryService.prototype.getWrtOffClientsBranchWise = function (brnchSeq, pageIndex, pageSize, filter, isCount) {
        return this.http.get(this.apiModel.host + "/recoverydisbursementservice/api/write-off-loans?brnchSeq=" + brnchSeq + '&pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&filter=' + filter + '&isCount=' + isCount, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('get Payment Modes')));
    };
    RecoveryService.prototype.getWrtOffTrxForClient = function (clntSeq) {
        return this.http.get(this.apiModel.host + "/recoverydisbursementservice/api/get-wrt-trx-for-clnt/" + clntSeq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('get Payment Modes')));
    };
    RecoveryService.prototype.applyWrtOffClntPayment = function (applyPayment) {
        var _this = this;
        return this.http.post(this.apiModel.host + '/recoverydisbursementservice/api/apply-wrt-off-payment', applyPayment, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.toastr.success('Payment Received', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('applyPayment')));
    };
    RecoveryService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        this.spinner.hide();
        return function (error) {
            if (error.error != undefined) {
                if (error.error.error) {
                    _this.toastr.error(error.error.error);
                }
            }
            else {
                _this.toastr.error(error.message, operation + " failed:");
            }
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(result);
        };
    };
    RecoveryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], RecoveryService);
    return RecoveryService;
}());



/***/ })

}]);
//# sourceMappingURL=compliance-repot-compliance-repot-module~operations-operations-module~pages-admin-admin-module~pages~e133a25a.js.map