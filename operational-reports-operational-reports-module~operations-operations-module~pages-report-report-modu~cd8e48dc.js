(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["operational-reports-operational-reports-module~operations-operations-module~pages-report-report-modu~cd8e48dc"],{

/***/ "./src/app/shared/services/operations-reports.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/services/operations-reports.service.ts ***!
  \***************************************************************/
/*! exports provided: OperationsReportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsReportsService", function() { return OperationsReportsService; });
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





var OperationsReportsService = /** @class */ (function () {
    function OperationsReportsService(http, toastr, spinner) {
        this.http = http;
        this.toastr = toastr;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_1__["ApiModel"]();
    }
    OperationsReportsService.prototype.printDuesReport = function (frmDt, toDt, branch) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-dues/" + frmDt + "/" + toDt + "/" + branch;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    OperationsReportsService.prototype.printPortfolioSegmentation = function (frmDt, toDt, rpt_flg, areaSeq, regSeq, brnchSeq) {
        var url = this.apiModel.host + "/reportservice/api/print-portfolio-segmentation/" + toDt + "/" + frmDt + "/" + rpt_flg + "/" + areaSeq + "/" + regSeq + '/' + brnchSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    OperationsReportsService.prototype.printBranchTargetManagment = function (frmDt) {
        var url = this.apiModel.host + "/reportservice/api/print-barnch-target-management/" + frmDt;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    OperationsReportsService.prototype.printPortfolioAtRiskReport = function (toDt, rpt_flg, areaSeq, regSeq, brnchSeq) {
        var url = this.apiModel.host + "/reportservice/api/print-portfolio-at-risk/" + toDt + "/" + rpt_flg + "/" + areaSeq + "/" + regSeq + '/' + brnchSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    OperationsReportsService.prototype.printRiskFlagging = function (toDt, frmDt, rpt_flg, areaSeq, regSeq, brnchSeq) {
        var url = this.apiModel.host + "/reportservice/api/print-risk-flagging/" + toDt + "/" + frmDt + "/" + rpt_flg + "/" + areaSeq + "/" + regSeq + '/' + brnchSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    OperationsReportsService.prototype.printPortfolioStatus = function (toDt, frmDt, rpt_flg, areaSeq, regSeq, brnchSeq) {
        var url = this.apiModel.host + "/reportservice/api/print-portfolio-status/" + toDt + "/" + frmDt + "/" + rpt_flg + "/" + areaSeq + "/" + regSeq + '/' + brnchSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    OperationsReportsService.prototype.printConsolidatedLoanReport = function (frmDt, toDt) {
        var url = this.apiModel.host + "/reportservice/api/print-consolidated-loan/" + frmDt + "/" + toDt;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    OperationsReportsService.prototype.printRateOfRenewalReport = function (toDt, rpt_flg, areaSeq, regSeq, brnchSeq) {
        var url = this.apiModel.host + "/reportservice/api/print-ror/" + toDt + "/" + rpt_flg + "/" + areaSeq + "/" + regSeq + '/' + brnchSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    OperationsReportsService.prototype.printMonthlyStatus = function (frmDt, toDt, reptFlag) {
        var url = this.apiModel.host + "/reportservice/api/print-monthly-status/" + frmDt + "/" + toDt + "/" + reptFlag;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    OperationsReportsService.prototype.printLoaprintLoanUtlizationnU = function (frmDt, toDt, rpt_flg, areaSeq, regSeq, brnchSeq) {
        var url = this.apiModel.host + "/reportservice/api/print-loan_utlization/" + toDt + "/" + frmDt + "/" + rpt_flg + "/" + areaSeq + "/" + regSeq + '/' + brnchSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    OperationsReportsService.prototype.printPortfolioAtRiskTimeSerise = function (dt, rpt_flg, areaSeq, regSeq, brnchSeq) {
        var url = this.apiModel.host + "/reportservice/api/print-portfolio-at-risk-time/" + dt + "/" + rpt_flg + "/" + areaSeq + "/" + regSeq + '/' + brnchSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    OperationsReportsService.prototype.printFemaleParticipationRatio = function (dt, rpt_flg, areaSeq, regSeq, brnchSeq) {
        var url = this.apiModel.host + "/reportservice/api/print-female-participation-ratio/" + dt + "/" + rpt_flg + "/" + areaSeq + "/" + regSeq + '/' + brnchSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    OperationsReportsService.prototype.printportfolioStatusDuration = function (frmDt, toDt, rpt_flg, areaSeq, regSeq, brnchSeq) {
        var url = this.apiModel.host + "/reportservice/api/print-portfolio-status-fromdt/" + toDt + "/" + frmDt + "/" + rpt_flg + "/" + areaSeq + "/" + regSeq + '/' + brnchSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    OperationsReportsService.prototype.printAdvanceRecoveryOverallReport = function (frmDt, toDt, rpt_flg, areaSeq, regSeq, brnchSeq) {
        var url = this.apiModel.host + "/reportservice/api/print-advance-recovery-report/" + toDt + "/" + frmDt + "/" + rpt_flg + "/" + areaSeq + "/" + regSeq + '/' + brnchSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    OperationsReportsService.prototype.printAdvanceClientReport = function (frmDt, toDt, rpt_flg, areaSeq, regSeq, brnchSeq) {
        var url = this.apiModel.host + "/reportservice/api/print-advance-client-report/" + toDt + "/" + frmDt + "/" + rpt_flg + "/" + areaSeq + "/" + regSeq + '/' + brnchSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    OperationsReportsService.prototype.printAdvanceMaturityReport = function (asDt, rpt_flg, areaSeq, regSeq, brnchSeq) {
        var url = this.apiModel.host + "/reportservice/api/print-advance-maturity-report/" + asDt + "/" + rpt_flg + "/" + areaSeq + "/" + regSeq + '/' + brnchSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    OperationsReportsService.prototype.printWeeklyTargetReport = function (asDt, rpt_flg, areaSeq, regSeq, brnchSeq) {
        var url = this.apiModel.host + "/reportservice/api/print-weekly-target-report/" + asDt + "/" + rpt_flg + "/" + areaSeq + "/" + regSeq + '/' + brnchSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    OperationsReportsService.prototype.printAreaDisbursementReport = function (asDt, rpt_flg, areaSeq, regSeq, brnchSeq) {
        var url = this.apiModel.host + "/reportservice/api/print-area-disb-report/" + asDt + "/" + rpt_flg + "/" + areaSeq + "/" + regSeq + '/' + brnchSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    OperationsReportsService.prototype.printPendingLoanUtilizationReport = function (frmDt, toDt, reptFlag) {
        var url = this.apiModel.host + "/reportservice/api/print-pending-loan-utilization/" + frmDt + "/" + toDt + "/" + reptFlag;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    OperationsReportsService.prototype.printLateClosingReportForAllArea = function (frmDt, toDt, rpt_flg, areaSeq, regSeq, brnchSeq) {
        var url = this.apiModel.host + "/reportservice/api/print-late-closing/" + toDt + "/" + frmDt + "/" + rpt_flg + "/" + areaSeq + "/" + regSeq + '/' + brnchSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    OperationsReportsService.prototype.printAttendanceMonitoring = function (frmDt, toDt, reptFlag) {
        var url = this.apiModel.host + "/reportservice/api/leave-and-attendance-monitoring-report/" + frmDt + "/" + toDt + "/" + reptFlag;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    OperationsReportsService.prototype.printAgenciesTargetTracking = function (branch) {
        var url = this.apiModel.host + "/reportservice/api/agencies-target-tracking/" + branch;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    OperationsReportsService.prototype.printSales2Pending = function (frmDt, toDt, branch) {
        var url = this.apiModel.host + "/reportservice/api/print-sale-2-pending-report/" + frmDt + "/" + toDt + "/" + branch + "/" + this.auth.user.username;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    OperationsReportsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], OperationsReportsService);
    return OperationsReportsService;
}());



/***/ })

}]);
//# sourceMappingURL=operational-reports-operational-reports-module~operations-operations-module~pages-report-report-modu~cd8e48dc.js.map