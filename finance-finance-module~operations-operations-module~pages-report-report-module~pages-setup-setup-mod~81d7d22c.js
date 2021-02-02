(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finance-finance-module~operations-operations-module~pages-report-report-module~pages-setup-setup-mod~81d7d22c"],{

/***/ "./src/app/shared/services/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_Api_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Api.model */ "./src/app/shared/models/Api.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






;

var ProductService = /** @class */ (function () {
    function ProductService(http, router, toastr) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_2__["ApiModel"]();
        console.log('Product Service Initiated');
    }
    ProductService.prototype.updateCurrentProduct = function (p) {
        this.product = p;
    };
    ProductService.prototype.addAdjustmentSequence = function (disb) {
        var _this = this;
        console.log(disb);
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-prd-chrg-adj-ordr', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((function (p) {
            console.log(p);
            _this.toastr.success('added successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('addAdjustmentSequence'))));
    };
    ProductService.prototype.deleteAdjustmentSequence = function (seq) {
        var url = this.apiModel.host + '/setupservice/api/mw-prd-chrg-adj-ordr/' + seq;
        return this.http.delete(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) {
            console.log(p);
            // this.toastr.success('deleted successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('deleteFormAssignment')));
    };
    ProductService.prototype.addProductGroup = function (disb) {
        var _this = this;
        console.log(disb);
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-prd-grp', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((function (p) {
            console.log(p);
            _this.toastr.success('added successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('addProductGroup'))));
    };
    ProductService.prototype.addFormAssignment = function (disb) {
        console.log(disb);
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-prd-form-rel', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((function (p) {
            console.log(p);
            // this.toastr.success('added successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('addFormAssignment'))));
    };
    ProductService.prototype.getAllAsocProductRel = function (prdSeq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/get-asoc-prd-rel/' + prdSeq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }));
    };
    ProductService.prototype.addAssocProductAssignment = function (prdRel) {
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-asoc-prd-rel', prdRel, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) {
            console.log(p);
        }));
    };
    ProductService.prototype.deleteAssocProductAssignment = function (seq) {
        var url = this.apiModel.host + '/setupservice/api/mw-asoc-prd-rel/' + seq;
        return this.http.delete(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) {
            console.log(p);
        }));
    };
    ProductService.prototype.addBusinessSector = function (disb) {
        console.log(disb);
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-prd-biz-sect-rel', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((function (p) {
            console.log(p);
            // this.toastr.success('added successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('addBusinessSector'))));
    };
    ProductService.prototype.addProduct = function (disb) {
        var _this = this;
        console.log(disb);
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-prd', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) {
            console.log(p);
            _this.toastr.success('added successfully', 'Success');
        }));
    };
    ProductService.prototype.addPrincipleAmount = function (disb) {
        var _this = this;
        console.log(disb);
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-prd-ppal-lmt', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) {
            console.log(p);
            _this.toastr.success('added successfully', 'Success');
        }));
    };
    ProductService.prototype.addCharges = function (disb) {
        var _this = this;
        console.log(disb);
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-prd-chrg', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((function (p) {
            console.log(p);
            _this.toastr.success('added successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('addCharges'))));
    };
    ProductService.prototype.addLoanTerm = function (disb) {
        var _this = this;
        console.log(disb);
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-prd-loan-trm', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((function (p) {
            console.log(p);
            _this.toastr.success('added successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('addLoanTerm'))));
    };
    ProductService.prototype.addSegregate = function (disb) {
        var _this = this;
        console.log(disb);
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-prd-sgrt-inst', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((function (p) {
            console.log(p);
            _this.toastr.success('added successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('addSegregate'))));
    };
    ProductService.prototype.addProductRule = function (disb) {
        var _this = this;
        console.log('add rule');
        console.log(disb);
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-prd-adv-rul', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((function (p) {
            console.log(p);
            _this.toastr.success('added successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('addProductRule'))));
    };
    ProductService.prototype.addAccountingSetup = function (disb) {
        var _this = this;
        console.log(disb);
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-prd-acct-set', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((function (p) {
            console.log(p);
            _this.toastr.success('added successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('addAccountingSetup'))));
    };
    ProductService.prototype.addProductDocument = function (disb) {
        console.log(disb);
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-prd-doc-rel', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((function (p) {
            console.log(p);
            // this.toastr.success('added successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('addProductDocument'))));
    };
    ProductService.prototype.updateProductDocumentRel = function (disb) {
        var _this = this;
        return this.http.put(this.apiModel.host + '/setupservice/api/update-prd-doc-rel', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) {
            console.log(p);
            _this.toastr.success('Updated successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('updateAccountingSetup')));
    };
    ProductService.prototype.updateAccountingSetup = function (disb) {
        var _this = this;
        return this.http.put(this.apiModel.host + '/setupservice/api/update-prd-acct-set', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((function (p) {
            console.log(p);
            _this.toastr.success('updated successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('updateAccountingSetup'))));
    };
    ProductService.prototype.updateSegregate = function (disb) {
        var _this = this;
        return this.http.put(this.apiModel.host + '/setupservice/api/update-prd-sgrt-inst', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((function (p) {
            console.log(p);
            _this.toastr.success('updated successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('updateProductGroup'))));
    };
    ProductService.prototype.updateCharges = function (disb) {
        var _this = this;
        return this.http.put(this.apiModel.host + '/setupservice/api/update-prd-chrg', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((function (p) {
            console.log(p);
            _this.toastr.success('updated successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('updateCharges'))));
    };
    ProductService.prototype.updateProductGroup = function (disb) {
        var _this = this;
        return this.http.put(this.apiModel.host + '/setupservice/api/update-mw-prd-grp', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((function (p) {
            console.log(p);
            _this.toastr.success('updated successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('updateProductGroup'))));
    };
    ProductService.prototype.updateLoanTerm = function (disb) {
        var _this = this;
        return this.http.put(this.apiModel.host + '/setupservice/api/update-prd-loan-trm', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((function (p) {
            console.log(p);
            _this.toastr.success('updated successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('updateLoanTerm'))));
    };
    ProductService.prototype.updatePrincipleAmount = function (disb) {
        var _this = this;
        return this.http.put(this.apiModel.host + '/setupservice/api/update-prd-ppal-lmt', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((function (p) {
            console.log(p);
            _this.toastr.success('updated successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('updatePrincipleAmount'))));
    };
    ProductService.prototype.updateProduct = function (disb) {
        var _this = this;
        console.log(disb);
        return this.http.put(this.apiModel.host + '/setupservice/api/update-mw-prd', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((function (p) {
            console.log(p);
            _this.toastr.success('updated successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('updateProduct'))));
    };
    ProductService.prototype.updateAdjustmentSequence = function (disb) {
        var _this = this;
        console.log(disb);
        return this.http.put(this.apiModel.host + '/setupservice/api/update-prd-chrg-adj-ordr', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((function (p) {
            console.log(p);
            _this.toastr.success('updated successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('updateAdjustmentSequence'))));
    };
    ProductService.prototype.getSegregates = function (disb) {
        console.log(disb);
        return this.http.post(this.apiModel.host + '/setupservice/api/mw-prd-sgrt-inst-enty-seq-and-key', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((function (p) {
            console.log(p);
            // this.toastr.success('added successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('addLoanTerm'))));
    };
    ProductService.prototype.getAllProductGroups = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-prd-grp/', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllProductGroups')));
    };
    ProductService.prototype.getChargesTypes = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-typs/1', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getChargesTypes')));
    };
    ProductService.prototype.getAllFormsAssignments = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-form/', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllFormsAssignments')));
    };
    ProductService.prototype.getAllFormsAssignmentsBySeq = function (seq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-prd-form-rel-by-prd-seq/' + seq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllFormsAssignmentsBySeq')));
    };
    ProductService.prototype.getAllAdjustmentSequencesBySeq = function (seq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-prd-chrg-adj-ordr-by-prd-seq/' + seq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllAdjustmentSequencesBySeq')));
    };
    ProductService.prototype.getAccountingSetup = function (seq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-prd-acct-set-by-prd-seq/' + seq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAccountingSetup')));
    };
    ProductService.prototype.getGlAccounts = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/get-gl-accounts/' + this.auth.emp_branch, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getGlAccounts')));
    };
    ProductService.prototype.getGlAccountsForAccountLedger = function (arr) {
        return this.http.get(this.apiModel.host + '/setupservice/api/get-gl-accounts/' + arr, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getGlAccounts')));
    };
    ProductService.prototype.getAllPrincipleAmounts = function (seq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-prd-ppal-lmt-by-prd-seq/' + seq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllPrincipleAmounts')));
    };
    ProductService.prototype.getAllCharges = function (seq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-prd-chrg-by-prd-seq/' + seq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllCharges')));
    };
    ProductService.prototype.getAllBusinessSectors = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-biz-sect/', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllBusinessSectors')));
    };
    ProductService.prototype.getAllDocumentsAssignment = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-doc/', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllDocumentsAssignment')));
    };
    ProductService.prototype.getAllDocumentsBySeq = function (seq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-prd-doc-rel-by-prd-seq/' + seq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllDocumentsBySeq')));
    };
    ProductService.prototype.getAllBusinessSectorBySeq = function (seq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-prd-biz-sect-rel-by-prd-seq/' + seq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllBusinessSectorBySeq')));
    };
    ProductService.prototype.getAllLoanTerms = function (seq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-prd-loan-trm-by-prd-seq/' + seq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllLoanTerms')));
    };
    ProductService.prototype.getAllProductByGrpSeq = function (seq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-prd-by-grp-seq/' + seq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllProductByGrpSeq')));
    };
    ProductService.prototype.getAllRules = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-rul/', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllRules')));
    };
    ProductService.prototype.getAllRulesBySeq = function (seq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-prd-adv-rul-by-prd-seq/' + seq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllRulesBySeq')));
    };
    ProductService.prototype.getAllAdvRulesBySeq = function (seq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-prd-adv-rul-by-prd-seq/' + seq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllRulesBySeq')));
    };
    ProductService.prototype.deleteFormAssignment = function (seq) {
        var url = this.apiModel.host + '/setupservice/api/mw-prd-form-rel/' + seq;
        return this.http.delete(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) {
            console.log(p);
            // this.toastr.success('deleted successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('deleteFormAssignment')));
    };
    ProductService.prototype.deleteBusinessSector = function (seq) {
        var url = this.apiModel.host + '/setupservice/api/mw-prd-biz-sect-rel/' + seq;
        return this.http.delete(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) {
            console.log(p);
            // this.toastr.success('deleted successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('deleteBusinessSector')));
    };
    ProductService.prototype.deleteProductDocument = function (seq) {
        var url = this.apiModel.host + '/setupservice/api/mw-prd-doc-rel/' + seq;
        return this.http.delete(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) {
            console.log(p);
            // this.toastr.success('deleted successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('deleteProductDocument')));
    };
    ProductService.prototype.deleteSegregate = function (seq) {
        var _this = this;
        var url = this.apiModel.host + '/setupservice/api/mw-prd-sgrt-inst/' + seq;
        return this.http.delete(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) {
            console.log(p);
            _this.toastr.success('deleted successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('deleteItem')));
    };
    ProductService.prototype.deleteProductGroup = function (seq) {
        var _this = this;
        var url = this.apiModel.host + '/setupservice/api/mw-prd-grp/' + seq;
        return this.http.delete(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) {
            console.log(p);
            _this.toastr.success('deleted successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('deleteProductGroup')));
    };
    ProductService.prototype.deletePrinicipleAmount = function (seq) {
        var _this = this;
        var url = this.apiModel.host + '/setupservice/api/mw-prd-ppal-lmt/' + seq;
        return this.http.delete(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) {
            console.log(p);
            _this.toastr.success('deleted successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('deletePrinicipleAmount')));
    };
    ProductService.prototype.deleteCharges = function (seq) {
        var _this = this;
        var url = this.apiModel.host + '/setupservice/api/mw-prd-chrg/' + seq;
        return this.http.delete(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) {
            console.log(p);
            _this.toastr.success('deleted successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('deleteCharges')));
    };
    ProductService.prototype.deleteLoanTerm = function (seq) {
        var _this = this;
        var url = this.apiModel.host + '/setupservice/api/mw-prd-loan-trm/' + seq;
        return this.http.delete(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) {
            console.log(p);
            _this.toastr.success('deleted successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('deleteLoanTerm')));
    };
    ProductService.prototype.deleteProductByPrdSeq = function (seq) {
        var _this = this;
        var url = this.apiModel.host + '/setupservice/api/mw-prd/' + seq;
        return this.http.delete(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) {
            console.log(p);
            _this.toastr.success('deleted successfully', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('deleteProductByPrdSeq')));
    };
    ProductService.prototype.deleteProductRule = function (seq) {
        var _this = this;
        var url = this.apiModel.host + '/setupservice/api/mw-prd-adv-rul/' + seq;
        return this.http.delete(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) {
            console.log(p);
            _this.toastr.success('Rule Removed', 'Success');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('deleteProductRule')));
    };
    ProductService.prototype.getProductsByTypSeq = function (seq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-prd-by-typ/' + seq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllFormsAssignments')));
    };
    ProductService.prototype.getBranchProducts = function () {
        return this.http.get(this.apiModel.host + '/recoverydisbursementservice/api/brnch-prds/' + this.auth.user.username, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllProductGroups')));
    };
    ProductService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            _this.toastr.error(error.message, operation);
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], ProductService);
    return ProductService;
}());



/***/ })

}]);
//# sourceMappingURL=finance-finance-module~operations-operations-module~pages-report-report-module~pages-setup-setup-mod~81d7d22c.js.map