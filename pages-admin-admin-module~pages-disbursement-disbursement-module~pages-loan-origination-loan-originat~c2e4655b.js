(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-admin-module~pages-disbursement-disbursement-module~pages-loan-origination-loan-originat~c2e4655b"],{

/***/ "./src/app/shared/helpers/MyErrorStateMatcher.helper.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/helpers/MyErrorStateMatcher.helper.ts ***!
  \**************************************************************/
/*! exports provided: MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());



/***/ }),

/***/ "./src/app/shared/models/disbursement.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/disbursement.ts ***!
  \***********************************************/
/*! exports provided: Disbursement, PaymentMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Disbursement", function() { return Disbursement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMode", function() { return PaymentMode; });
var Disbursement = /** @class */ (function () {
    function Disbursement() {
        this.isChecked = false;
    }
    return Disbursement;
}());

var PaymentMode = /** @class */ (function () {
    function PaymentMode() {
    }
    return PaymentMode;
}());



/***/ }),

/***/ "./src/app/shared/services/disbursement.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/disbursement.service.ts ***!
  \*********************************************************/
/*! exports provided: DisbursementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisbursementService", function() { return DisbursementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_Api_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Api.model */ "./src/app/shared/models/Api.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_disbursement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/disbursement */ "./src/app/shared/models/disbursement.ts");
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









var DisbursementService = /** @class */ (function () {
    function DisbursementService(http, router, toastr, spinner) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_3__["ApiModel"]();
        this.model = new _models_disbursement__WEBPACK_IMPORTED_MODULE_7__["Disbursement"]();
    }
    // getAllDisbursements(pageNumber, pageSize, filterString) {
    //   this.spinner.show();
    //   return this.http.get<Disbursement[]>
    //     (this.apiModel.host + '/recoverydisbursementservice/api/disbursement?user=' + this.auth.user.username + '&role=' + this.auth.role + '&filter=' + filterString + '&sort=&direction=&pageNumber=' + pageNumber + '&pageSize=' + pageSize, { headers: this.apiModel.httpHeaderGet }).pipe(
    //       tap((data: any) => {
    //         this.spinner.hide();
    //       }),
    //       catchError(this.handleError('getAllDisbursements')));
    // }
    DisbursementService.prototype.getAllDisbursements = function (brnchSeq, pageNumber, pageSize, filterString, isCount) {
        var _this = this;
        this.spinner.show();
        return this.http.get(this.apiModel.host + '/recoverydisbursementservice/api/disbursement?user=' + this.auth.user.username + '&brnchSeq=' + brnchSeq + '&role=' + this.auth.role + '&filter=' + filterString + '&sort=&direction=&pageNumber=' + pageNumber + '&pageSize=' + pageSize + '&isCount=' + isCount, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
            _this.spinner.hide();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getAllDisbursements')));
    };
    DisbursementService.prototype.deleteApplication = function (app) {
        var _this = this;
        var url = this.apiModel.host + '/recoverydisbursementservice/api/delete-application/' + app.loanAppSeq + '/' + app.cmnt;
        return this.http.get(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) { return _this.toastr.success('Application Deleted.', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('deleteApplication')));
    };
    DisbursementService.prototype.revertApplication = function (app) {
        var _this = this;
        var url = this.apiModel.host + '/recoverydisbursementservice/api/revert-application/' + app.loanAppSeq + '/' + app.cmnt;
        return this.http.get(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) { return _this.toastr.success('Application Reverted To Submitted Status.', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('revertApplication')));
    };
    DisbursementService.prototype.addPdcHeader = function (pdc) {
        var _this = this;
        return this.http.post(this.apiModel.host + '/recoverydisbursementservice/api/add-pdc-header', pdc, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((function (p) { return _this.toastr.success('PDC Header Added.', 'Success!'); })));
    };
    DisbursementService.prototype.addDisbursementVoucher = function (disb, obj) {
        var _this = this;
        var url = '';
        if (obj === 'add') {
            url = this.apiModel.host + '/recoverydisbursementservice/api/add-disbursement-voucher';
        }
        else if (obj === 'update') {
            url = this.apiModel.host + '/recoverydisbursementservice/api/update-disbursement-voucher';
        }
        else if (obj === 'delete') {
            url = this.apiModel.host + '/recoverydisbursementservice/api/delete-disbursement-voucher';
        }
        return this.http.post(url, disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((function (p) { return _this.toastr.success('Disbursement Voucher Added.', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('addDisbursementVoucher'))));
    };
    DisbursementService.prototype.addAgency = function (disb, obj) {
        var url = '';
        if (obj === 'add') {
            url = this.apiModel.host + '/recoverydisbursementservice/api/add-agency';
        }
        else if (obj === 'update') {
            url = this.apiModel.host + '/recoverydisbursementservice/api/update-agency';
        }
        else if (obj === 'delete') {
            url = this.apiModel.host + '/recoverydisbursementservice/api/delete-agency';
        }
        return this.http.post(url, disb, { headers: this.apiModel.httpHeaderPost });
    };
    DisbursementService.prototype.deleteAgency = function (disb) {
        var _this = this;
        console.log(disb);
        var url = this.apiModel.host + '/recoverydisbursementservice/api/delete-agency/' + disb.dsbmtDtlKey;
        return this.http.delete(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) { return _this.toastr.success('Disbursement Voucher deleted.', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('deleteAgency')));
    };
    DisbursementService.prototype.getPaymentModes = function () {
        return this.http.get(this.apiModel.host + '/recoverydisbursementservice/api/get-type-branch-catgry/3/' + this.auth.emp_branch, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) { }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('get Payment Modes')));
    };
    DisbursementService.prototype.getClntPaymentTypes = function () {
        return this.http.get(this.apiModel.host + "/recoverydisbursementservice/api/get-clnt-remit/" + this.loanAppSeq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('get Payment Modes')));
    };
    DisbursementService.prototype.addPdc = function (pdcDetail, obj) {
        var _this = this;
        var url = '';
        if (obj === 'add') {
            url = this.apiModel.host + '/recoverydisbursementservice/api/add-pdc-detail';
        }
        else if (obj === 'update') {
            url = this.apiModel.host + '/recoverydisbursementservice/api/update-pdc-detail';
        }
        else if (obj === 'delete') {
            url = this.apiModel.host + '/recoverydisbursementservice/api/delete-pdc-detail';
        }
        return this.http.post(url, pdcDetail, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((function (p) { return _this.toastr.success('New PDC Added.', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('applyPayment'))));
    };
    DisbursementService.prototype.deletePdc = function (pdcDetail) {
        var _this = this;
        var url = this.apiModel.host + '/recoverydisbursementservice/api/delete-pdc-detail/' + pdcDetail.pdcDtlSeq;
        return this.http.delete(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) { return _this.toastr.success('PDC Deleted.', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('deletePdc')));
    };
    DisbursementService.prototype.batchPostingPdc = function (hdr, pdcDetails) {
        var _this = this;
        var url = this.apiModel.host + '/recoverydisbursementservice/api/batch-pdc-posting/' + hdr;
        return this.http.put(url, pdcDetails, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) { return _this.toastr.success('PDC Details Changed', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('deletePdc')));
    };
    DisbursementService.prototype.getAllDisbursementVouchers = function (number) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/disbursement-voucher/" + number;
        return this.http.get(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getAllDisbursementVouchers')));
    };
    DisbursementService.prototype.getAllAgencies = function () {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/agency/" + this.loanAppSeq;
        return this.http.get(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) { return console.log(data); })); //,
        // catchError(this.handleError('getAllAgencies')));
    };
    DisbursementService.prototype.getAllPaymentSchedules = function () {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/payment-schedule/" + this.loanAppSeq;
        return this.http.get(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getAllPaymentSchedules')));
    };
    DisbursementService.prototype.getPaymenrScheduleDetail = function (number) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/payment-schedule-detail/" + number;
        return this.http.get(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getPaymenrScheduleDetail')));
    };
    DisbursementService.prototype.generatePaymentSchedule = function (date) {
        var _this = this;
        var url = this.apiModel.host + "/recoverydisbursementservice/api/genrate-payment-schedule/" + this.loanAppSeq + "/" + date;
        return this.http.get(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) { return _this.toastr.success('Payment Schedule Generated', 'Success!'); }));
    };
    DisbursementService.prototype.getAllPdcs = function () {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/pdcs/" + this.loanAppSeq;
        return this.http.get(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getAllPdcs')));
    };
    DisbursementService.prototype.getDisbursementVoucher = function () {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/application/" + this.loanAppSeq;
        return this.http.get(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
            console.log(data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getDisbursementVoucher')));
    };
    DisbursementService.prototype.getPaymentSchedule = function () {
        return this.http.get(this.apiModel.host + ("/recoverydisbursementservice/api/expected-payment-schedule/" + this.loanAppSeq), { headers: this.apiModel.httpHeaderPost })
            .pipe();
    };
    DisbursementService.prototype.delDisbursementVoucher = function (id) {
        var _this = this;
        return this.http.delete(this.apiModel.host + '//' + id, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) { return _this.toastr.success('Disbursement Voucher Deleted', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('delDisbursementVoucher')));
    };
    // delPdc(id: any) {
    //   return this.http.delete(this.apiModel.host + '//' + id , {headers:this.apiModel.httpHeaderGet} ).pipe(
    //     tap((data: any) => console.log(data)),
    //     catchError(this.handleError('delPdc')));
    // }
    DisbursementService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        this.spinner.hide();
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            _this.toastr.error(error.message, operation + " failed:");
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    };
    DisbursementService.prototype.disbursementPosting = function (post, amlChck) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/disbursement-posting/" + this.loanAppSeq + "/" + post + "/" + amlChck;
        return this.http.get(url, { headers: this.apiModel.httpHeaderGet });
    };
    DisbursementService.prototype.genrateHelthCard = function (date) {
        var url = this.apiModel.host + "/loanservice/api/add-health-card";
        return this.http.post(url, JSON.stringify({ loanAppSeq: "" + this.loanAppSeq, cardExpiryDate: "" + date }), { headers: this.apiModel.httpHeaderPost });
    };
    DisbursementService.prototype.getPaymentSchedulePdf = function () {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-payment-schedule/" + this.loanAppSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    DisbursementService.prototype.getHealthCardPdf = function () {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-health-card/" + this.loanAppSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    DisbursementService.prototype.getUndertakingPdf = function () {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-undertaking/" + this.loanAppSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    DisbursementService.prototype.getPrintSomeFunckingShit = function () {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-agency-info-report/" + this.loanAppSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    DisbursementService.prototype.getLPD = function () {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-lpd/" + this.loanAppSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    DisbursementService.prototype.getClientInfoPdf = function () {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-client-info/" + this.loanAppSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    DisbursementService.prototype.saveVoucherErrorRectifications = function () {
        var _this = this;
        var url = this.apiModel.host + "/recoverydisbursementservice/api/save-vouchers/" + this.loanAppSeq;
        return this.http.get(url, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((function (p) { return _this.toastr.success('Vouchers are Save.', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('applyPayment'))));
    };
    DisbursementService.prototype.generatePdcs = function (obj) {
        return this.http.post(this.apiModel.host + '/recoverydisbursementservice/api/genrate-pdc', obj, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (p) { console.log(p); }));
    };
    DisbursementService.prototype.getInsurancePlans = function () {
        return this.http.get(this.apiModel.host + '/loanservice/api/get-hlth-insr-plans', { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (p) { return console.log(p); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('Get Insurance-Plan')));
    };
    DisbursementService.prototype.checkForAml = function () {
        var url = this.apiModel.host + "/loanservice/api/check-loan-for-aml/" + this.loanAppSeq;
        return this.http.get(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) { return console.log(data); }));
    };
    DisbursementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], DisbursementService);
    return DisbursementService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-admin-admin-module~pages-disbursement-disbursement-module~pages-loan-origination-loan-originat~c2e4655b.js.map