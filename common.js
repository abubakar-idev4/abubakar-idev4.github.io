(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/models/CNICPattern.model.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/models/CNICPattern.model.ts ***!
  \****************************************************/
/*! exports provided: CNICPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CNICPattern", function() { return CNICPattern; });
var CNICPattern = /** @class */ (function () {
    function CNICPattern() {
        this.clientCNIC = "";
        this.nomCnic = "";
        this.cobCNIC = "";
    }
    return CNICPattern;
}());



/***/ }),

/***/ "./src/app/shared/models/History.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/History.model.ts ***!
  \************************************************/
/*! exports provided: History */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "History", function() { return History; });
var History = /** @class */ (function () {
    function History() {
    }
    return History;
}());



/***/ }),

/***/ "./src/app/shared/models/LoanApplicant.model.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/models/LoanApplicant.model.ts ***!
  \******************************************************/
/*! exports provided: LoanApplicant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanApplicant", function() { return LoanApplicant; });
/* harmony import */ var _Nominee_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nominee.model */ "./src/app/shared/models/Nominee.model.ts");
/* harmony import */ var _address_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address.model */ "./src/app/shared/models/address.model.ts");


var LoanApplicant = /** @class */ (function () {
    function LoanApplicant() {
        this.disableFlag = false;
        this.isPermAddress = true;
        this.tblScrn = false;
        this.forms = [];
        // MFCI
        this.mfcibArray = [];
        //  Insurance-Info
        this.hlthInsrFlag = false;
        // Insurance-Members
        this.insuranceMembers = [];
        // Nominee
        this.nominee = new _Nominee_model__WEBPACK_IMPORTED_MODULE_0__["Nominee"]();
        // Co-borrower
        this.coBorrower = new _Nominee_model__WEBPACK_IMPORTED_MODULE_0__["Nominee"]();
        this.coBorrowerAddress = new _address_model__WEBPACK_IMPORTED_MODULE_1__["Address"]();
        // Next of Kin
        this.nextOfKin = new _Nominee_model__WEBPACK_IMPORTED_MODULE_0__["Nominee"]();
        // Client Relative
        this.clientRel = new _Nominee_model__WEBPACK_IMPORTED_MODULE_0__["Nominee"]();
        this.clientRelAddress = new _address_model__WEBPACK_IMPORTED_MODULE_1__["Address"]();
        this.primaryIncome = [];
        this.secondaryIncome = [];
        this.businessExpense = [];
        this.householdExpense = [];
        // Expected-Loan-Utlization
        this.loanUtilization = [];
        // PSC
        this.questions = [];
        this.relAddrAsClntFlg = false;
        if (sessionStorage.getItem('portfolioSeq')) {
            this.portfolioSeq = sessionStorage.getItem('portfolioSeq');
            this.portKey = sessionStorage.getItem('portfolioSeq');
        }
    }
    return LoanApplicant;
}());



/***/ }),

/***/ "./src/app/shared/models/LoanProduct.model.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/models/LoanProduct.model.ts ***!
  \****************************************************/
/*! exports provided: LoanProduct, LoanProductAssoc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanProduct", function() { return LoanProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanProductAssoc", function() { return LoanProductAssoc; });
var LoanProduct = /** @class */ (function () {
    function LoanProduct() {
    }
    return LoanProduct;
}());

var LoanProductAssoc = /** @class */ (function () {
    function LoanProductAssoc() {
    }
    return LoanProductAssoc;
}());



/***/ }),

/***/ "./src/app/shared/models/Nominee.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/Nominee.model.ts ***!
  \************************************************/
/*! exports provided: Nominee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nominee", function() { return Nominee; });
var Nominee = /** @class */ (function () {
    // constructor(clientSeq: string){
    //     this.clientSeq = clientSeq;
    // }
    function Nominee() {
        this.fatherSpzFlag = false;
        this.isSAN = false;
        this.isSACS = false;
    }
    Nominee.prototype.setSeq = function (loanAppSeq, formSeq) {
        this.formSeq = formSeq;
        this.loanAppSeq = loanAppSeq;
    };
    return Nominee;
}());



/***/ }),

/***/ "./src/app/shared/models/Product.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/Product.model.ts ***!
  \************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(obj) {
        this.mltLoanFlg = false;
        this.isChecked = false;
        this.dailyAccuralFlg = false;
        Object.assign(this, obj);
        this.productSeq = this.prdSeq;
        this.productName = this.prdNm;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/shared/models/productGroup.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/productGroup.model.ts ***!
  \*****************************************************/
/*! exports provided: ProductGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGroup", function() { return ProductGroup; });
var ProductGroup = /** @class */ (function () {
    function ProductGroup(obj) {
        Object.assign(this, obj);
    }
    return ProductGroup;
}());



/***/ }),

/***/ "./src/app/shared/services/compliance.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/compliance.service.ts ***!
  \*******************************************************/
/*! exports provided: ComplianceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplianceService", function() { return ComplianceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_Api_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Api.model */ "./src/app/shared/models/Api.model.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ComplianceService = /** @class */ (function () {
    function ComplianceService(http, toaster) {
        this.http = http;
        this.toaster = toaster;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_3__["ApiModel"]();
        this.url = this.apiModel.host;
        this.token = 'Bearer ' + sessionStorage.getItem('token');
    }
    ComplianceService.prototype.getADTTarget = function () {
        return this.http.get(this.apiModel.host + '/complianceservice/api/get-adt-trgt-listing', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    ComplianceService.prototype.getADTVsts = function (seq) {
        return this.http.get(this.apiModel.host + '/complianceservice/api/get-adt-trgt-listing/' + seq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    ComplianceService.prototype.getEmployees = function () {
        return this.http.get(this.apiModel.host + "/setupservice/api/mw-all-emps", { headers: this.apiModel.httpHeaderGet });
    };
    ComplianceService.prototype.addADTTarget = function (body) {
        return this.http.post(this.apiModel.host + "/complianceservice/api/add-brnch-vst", body, { headers: this.apiModel.httpHeaderPost });
    };
    ComplianceService.prototype.updateADTTarget = function (body) {
        return this.http.post(this.apiModel.host + "/complianceservice/api/update-brnch-vst", body, { headers: this.apiModel.httpHeaderPost });
    };
    ComplianceService.prototype.deleteADTTarget = function (body) {
        return this.http.delete(this.apiModel.host + "/complianceservice/api/delete-brnch-vst/" + body, { headers: this.apiModel.httpHeaderGet });
    };
    ComplianceService.prototype.getValues = function (groupName) {
        return this.http.get(this.apiModel.host + '/setupservice/api/ref-cd-vals-by-group-key/' + groupName, { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    ComplianceService.prototype.updateStatus = function (seq) {
        return this.http.get(this.apiModel.host + "/complianceservice/api/update-vst-status/" + seq, { headers: this.apiModel.httpHeaderGet });
    };
    ComplianceService.prototype.deleteVst = function (seq) {
        return this.http.delete(this.apiModel.host + "/complianceservice/api/delete-adt-vst/" + seq, { headers: this.apiModel.httpHeaderGet });
    };
    ComplianceService.prototype.updateAdtVst = function (body) {
        return this.http.post(this.apiModel.host + "/complianceservice/api/update-adt-vst", body, { headers: this.apiModel.httpHeaderPost });
    };
    ComplianceService.prototype.getVstSrvy = function (seq) {
        return this.http.get(this.apiModel.host + "/complianceservice/api/get-vst-srvy/" + seq, { headers: this.apiModel.httpHeaderGet });
    };
    // Target Managment
    ComplianceService.prototype.getTargetManagment = function (trgtYr) {
        return this.http.get(this.apiModel.host + '/complianceservice/api/mw-trgts/' + trgtYr, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { console.log(p); }));
    };
    ComplianceService.prototype.postingTargetManagment = function (arr) {
        return this.http.post(this.apiModel.host + '/complianceservice/api/add-adt-trgt', arr, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { console.log(p); }));
    };
    ComplianceService.prototype.deleteTargetManagment = function (seq) {
        return this.http.delete(this.apiModel.host + '/complianceservice/api/mw-trgt/' + seq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log("Target Managment Deleted"); }));
    };
    // Categories
    ComplianceService.prototype.getCategories = function () {
        return this.http.get(this.apiModel.host + '/complianceservice/api/mw-ctgry/', { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { console.log(p); }));
    };
    ComplianceService.prototype.postingCategories = function (arr) {
        return this.http.post(this.apiModel.host + '/complianceservice/api/add-adt-ctgry', arr, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { console.log(p); }));
    };
    ComplianceService.prototype.deleteCategory = function (seq) {
        return this.http.delete(this.apiModel.host + '/complianceservice/api/mw-ctgry/' + seq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log("Target Managment Deleted"); }));
    };
    ComplianceService.prototype.slabsSubmission = function (arr) {
        return this.http.post(this.apiModel.host + '/complianceservice/api/add-adt-ctgry-slb', arr, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { console.log(p); }));
    };
    ComplianceService.prototype.gettingSlabs = function (seq) {
        return this.http.get(this.apiModel.host + '/complianceservice/api/get-adt-ctgry-slb/' + seq, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { console.log(p); }));
    };
    // Action Sub Categories
    ComplianceService.prototype.getSubCategories = function (seq) {
        return this.http.get(this.apiModel.host + '/complianceservice/api/mw-ctgry/' + seq, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { console.log(p); }));
    };
    ComplianceService.prototype.postingSubCategories = function (arr) {
        return this.http.post(this.apiModel.host + '/complianceservice/api/add-adt-sub-ctgry', arr, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { console.log(p); }));
    };
    ComplianceService.prototype.deleteSubCategory = function (seq) {
        return this.http.delete(this.apiModel.host + '/complianceservice/api/mw-sub-ctgry/' + seq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log("Target Managment Deleted"); }));
    };
    //Issues
    ComplianceService.prototype.getAllIssues = function (seq) {
        return this.http.get(this.apiModel.host + '/complianceservice/api/get-mw-isu/' + seq, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { console.log(p); }));
    };
    ComplianceService.prototype.postingIssues = function (arr) {
        return this.http.post(this.apiModel.host + '/complianceservice/api/add-adt-isu', arr, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { console.log(p); }));
    };
    ComplianceService.prototype.deleteIssue = function (seq) {
        return this.http.delete(this.apiModel.host + '/complianceservice/api/mw-adt-isu/' + seq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log("Target Managment Deleted"); }));
    };
    //compliance Reports
    ComplianceService.prototype.printBranchRankingReport = function (adtVstSeq) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-barch-ranking/" + adtVstSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ComplianceService.prototype.printCPCReport = function (adtVstSeq) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-cpc-report/" + adtVstSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ComplianceService.prototype.printAmlCompliaanceReport = function (frmDt, toDt, brnchSeq, isXlx) {
        var url = this.apiModel.host + "/reportservice/api/print-aml-matches/" + frmDt + "/" + toDt + '/' + brnchSeq + '/' + isXlx;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ComplianceService.prototype.printCnicExpiryReport = function () {
        var url = this.apiModel.host + "/reportservice/api/cnic_expiry_detail";
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    ComplianceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ComplianceService);
    return ComplianceService;
}());



/***/ }),

/***/ "./src/app/shared/services/recovery-closing.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/recovery-closing.service.ts ***!
  \*************************************************************/
/*! exports provided: RecoveryClosingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryClosingService", function() { return RecoveryClosingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_Api_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Api.model */ "./src/app/shared/models/Api.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecoveryClosingService = /** @class */ (function () {
    function RecoveryClosingService(http) {
        this.http = http;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_3__["ApiModel"]();
        this.token = 'Bearer ' + sessionStorage.getItem('token');
    }
    RecoveryClosingService.prototype.getRecoveryClosing = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/get-recovery-day-closing', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    RecoveryClosingService.prototype.getDisbursementClosing = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/get-disbursement-day-closing/' + this.auth.user.username, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    RecoveryClosingService.prototype.getExpenseClosing = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/get-expense-day-closing/' + this.auth.user.username, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    RecoveryClosingService.prototype.getInsuranceClaimClosing = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/get-insuranceclaim-day-closing', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    RecoveryClosingService.prototype.postSingleRecovery = function (temp) {
        return this.http.get(this.apiModel.host + '/recoverydisbursementservice/api/recovery-posting/' + temp.txId, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    RecoveryClosingService.prototype.postSingleDisbursement = function (temp) {
        return this.http.get(this.apiModel.host + '/recoverydisbursementservice/api/disbursement-posting/' + temp.loanAppSeq + '/true/false', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    RecoveryClosingService.prototype.postSingleExpense = function (temp) {
        return this.http.get(this.apiModel.host + '/recoverydisbursementservice/api/post-expense/' + temp.expenseId, { headers: this.apiModel.httpHeaderGet });
        // if(temp.expenseType=="EXCESS RECOVERY PAYMENT")
        // {
        //   return this.http.get<any[]>(this.apiModel.host + '/recoverydisbursementservice/api/post-expense/'+temp.txId,httpOptions);
        // }
        // else if(temp.expenseType=="HEALTH INSURANCE")
        // {
        //   return this.http.get<ExpenseClosingDto[]>(this.apiModel.host + '/recoverydisbursementservice/api/post-health-insurance/'+temp.txId,httpOptions).pipe(
        //     tap((p: ExpenseClosingDto[]) => console.log(p))
        //   );  
        // }
    };
    RecoveryClosingService.prototype.postSingleInsuranceClaim = function (temp) {
        return this.http.get(this.apiModel.host + '/recoverydisbursementservice/api/insuranceclaim-posting/' + temp, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    RecoveryClosingService.prototype.closeBranch = function (branchSeq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/close-branch/' + branchSeq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    // Added by Zohaib Asim - Dated 24-12-2020
    // KSZB Claims - For KM Sale1 Report
    RecoveryClosingService.prototype.getHealthCardPdf = function (dsbrsmtClsngDto) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-health-card/" + dsbrsmtClsngDto.loanAppSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    RecoveryClosingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RecoveryClosingService);
    return RecoveryClosingService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map