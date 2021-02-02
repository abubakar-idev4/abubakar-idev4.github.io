(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["compliance-repot-compliance-repot-module~operations-operations-module~pages-admin-admin-module~pages~5f5e892b"],{

/***/ "./src/app/shared/services/reports.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/reports.service.ts ***!
  \****************************************************/
/*! exports provided: ReportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsService", function() { return ReportsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Api_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Api.model */ "./src/app/shared/models/Api.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportsService = /** @class */ (function () {
    function ReportsService(http, toastr, spinner) {
        this.http = http;
        this.toastr = toastr;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_1__["ApiModel"]();
    }
    ReportsService.prototype.printOverDueReport = function (prdSeq, asDt, branch) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-overdue-loans/" + prdSeq + "/" + asDt + "/" + branch;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printPortfolooReport = function (frmDt, toDt, branch) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-portfolio/" + frmDt + "/" + toDt + "/" + branch;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printDueReport = function (frmDt, toDt) {
        var url = this.apiModel.host + "/reportservice/api/print-portfolio/" + frmDt + "/" + toDt + "/" + this.auth.user.username;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printConsolidatedLoanReport = function (frmDt, toDt) {
        var url = this.apiModel.host + "/reportservice/api/print-portfolio/" + frmDt + "/" + toDt + "/" + this.auth.user.username;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printLoanCompilationReport = function (frmDt, toDt) {
        var url = this.apiModel.host + "/reportservice/api/print-portfolio/" + frmDt + "/" + toDt + "/" + this.auth.user.username;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printPortfolioSegmentationReport = function (frmDt, toDt) {
        var url = this.apiModel.host + "/reportservice/api/print-portfolio/" + frmDt + "/" + toDt + "/" + this.auth.user.username;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printFundStmntReport = function (frmDt, toDt, branch) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-fund-statment/" + frmDt + "/" + toDt + "/" + branch + "/" + this.auth.user.username;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printInsuClmForm = function (clntSeq) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-insu-clm-frm/" + clntSeq + "/" + this.auth.user.username;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.getPostedReport = function (date, a) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-posted-report/" + date + "/" + a;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printAccountLedger = function (account) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-account-ledger/" + this.auth.user.username;
        return this.http.post(url, account, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printBookDetails = function (account) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-book-details/" + this.auth.user.username;
        return this.http.post(url, account, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printTransferredClients = function (frmDt, toDt) {
        var url = this.apiModel.host + "/reportservice/api/print-transferred-clients/" + frmDt + "/" + toDt;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printDueRecovery = function (account) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-due-recovery/" + this.auth.user.username;
        return this.http.post(url, account, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printWomenParticipation = function (date, branch) {
        var url = this.apiModel.host + "/reportservice/api/print-women-participation/" + date + "/" + branch;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printClientHealthBeneficiery = function (frmDt, toDt, branch) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-clt-health-beneficiary/" + frmDt + "/" + toDt + "/" + branch + "/" + this.auth.user.username;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printBranchTurnoverAnalysisAndPlaning = function (date, branch) {
        var url = this.apiModel.host + "/reportservice/api/print-brnch-turnover-anlysis/" + date + "/" + branch;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printInsuranceClaimReport = function (frmDt, toDt, branch) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-insurance-claim/" + frmDt + "/" + toDt + "/" + branch + "/" + this.auth.user.username;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.parBranchWise = function (frmDt, toDt, branch) {
        var url = this.apiModel.host + "/reportservice/api/print-par-branch-wise/" + frmDt + "/" + toDt + "/" + branch;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printPdcDetail = function (frmDt, toDt, branch) {
        var url = this.apiModel.host + "/reportservice/api/print-pdc-detail/" + frmDt + "/" + toDt + "/" + branch;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printBranchPerformanceReview = function (frmDt, toDt, branch) {
        var url = this.apiModel.host + "/reportservice/api/print-branch-performance-review/" + frmDt + "/" + toDt + "/" + branch;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printFiveDaysAdvanceRecoveryTrends = function (frmDt, toDt, branch) {
        var url = this.apiModel.host + "/reportservice/api/print-five-days-advance-recovery-trends/" + frmDt + "/" + toDt + "/" + branch;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printTopSheet = function (frmDt, toDt, branch, prd, flg) {
        var url = this.apiModel.host + "/reportservice/api/print-top-sheet/" + frmDt + "/" + toDt + "/" + branch + "/" + prd + "/" + flg;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printRateOfRetention = function (branch) {
        var url = this.apiModel.host + "/reportservice/api/rate-of-retention/" + branch;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printProjectedClientsLoanCompletetion = function (frmDt, toDt, branch) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-projected-clients-loan-completetion/" + frmDt + "/" + toDt + "/" + branch;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printPortfolioConcentration = function (prd, branch, asDt) {
        var url = this.apiModel.host + "/reportservice/api/print-portfolio-concentration/" + prd + "/" + branch + "/" + asDt;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printPendingClients = function (prd, branch, asDt, typ) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-pending-client/" + prd + "/" + branch + "/" + asDt + "/" + typ;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printTaggedClientClaim = function (prd, branch, asDt) {
        var url = this.apiModel.host + "/reportservice/api/print-tagged-client-claim/" + prd + "/" + branch + "/" + asDt;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printProductWiseAddition = function (frmDt, toDt, branch) {
        var url = this.apiModel.host + "/reportservice/api/print-product-wise-addition/" + frmDt + "/" + toDt + "/" + branch;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printAgenciesTargetTracking = function (branch) {
        var url = this.apiModel.host + "/reportservice/api/agencies-target-tracking/" + branch;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printAdcBranchWise = function (frmDt, toDt) {
        var url = this.apiModel.host + "/reportservice/api/print-region-wise-adc/" + frmDt + "/" + toDt;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printTurnAroundTime = function (frmDt, toDt, rpt_flg, areaSeq, regSeq, brnchSeq) {
        var url = this.apiModel.host + "/reportservice/api/print-turn-around-time/" + frmDt + "/" + toDt
            + "/" + rpt_flg + "/" + areaSeq + "/" + regSeq + "/" + brnchSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printFemalearticipation = function (frmDt, toDt, rpt_flg, areaSeq, regSeq, brnchSeq) {
        var url = this.apiModel.host + "/reportservice/api/print-female-participation-time/" + toDt + "/" + frmDt + "/" + rpt_flg + "/" + areaSeq + "/" + regSeq + '/' + brnchSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printReversedEnteriesReprt = function (frmDt, toDt, brnch) {
        var url = this.apiModel.host + "/reportservice/api/print-reversal-enteries-report/" + frmDt + "/" + toDt + "/" + brnch;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printTrailBalanceReport = function (frmDt, toDt, brnch) {
        var url = this.apiModel.host + "/reportservice/api/print-trail-balance-report/" + frmDt + "/" + toDt + "/" + brnch;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printParMdReport = function (toDt) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-md-par_report/" + toDt;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService.prototype.printActiveClients = function () {
        var url = this.apiModel.host + "/reportservice/api/print-active-clients";
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    //Added By Naveed, Dated: 13/11/2020
    ReportsService.prototype.bmBdoRecoveryReport = function (frmDt, toDt) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/bm-bdo-recovery/" + frmDt + "/" + toDt;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ReportsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], ReportsService);
    return ReportsService;
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
//# sourceMappingURL=compliance-repot-compliance-repot-module~operations-operations-module~pages-admin-admin-module~pages~5f5e892b.js.map