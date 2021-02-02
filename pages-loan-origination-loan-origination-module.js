(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-loan-origination-loan-origination-module"],{

/***/ "./src/app/pages/loan-origination/AuthGuard.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/loan-origination/AuthGuard.service.ts ***!
  \*************************************************************/
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
            if (screen.modUrl.indexOf("loan-origination") >= 0) {
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

/***/ "./src/app/pages/loan-origination/client-history/SplitPipe.pipe.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/loan-origination/client-history/SplitPipe.pipe.ts ***!
  \*************************************************************************/
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
        return val.split(params[0]);
    };
    SplitPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'split'
        })
    ], SplitPipe);
    return SplitPipe;
}());



/***/ }),

/***/ "./src/app/pages/loan-origination/client-history/client-history.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/pages/loan-origination/client-history/client-history.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/loan-origination/client-history/client-history.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/loan-origination/client-history/client-history.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"content\">\r\n      <p class=\"mt-1 mb-3\">Client History</p>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-9 mb-3\">\r\n          <div class=\"borderbox pb-0\">\r\n            <ul class=\"infolist mt-2 mb-2\">\r\n              <li>Branch: <span> {{loan.branch}}</span></li>\r\n              <li>Portfolio: <span>{{loan.portfolio}}</span></li>\r\n              <!-- <li>BDO: <span> Akhter Hussain</span></li> -->\r\n            </ul>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"pt-1\">\r\n                <label><b>Client Information:</b></label>\r\n              </div>\r\n              <div class=\"borderbox p-2 mnh-140\">\r\n                <table class=\"simpletale\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n                  <tr>\r\n                    <td width=\"60%\"><b>Client ID:</b> </td>\r\n                    <td>{{modal.client?.clientId}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td width=\"60%\"><b>Client Name: </b></td>\r\n                    <td>{{modal.client?.name}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td width=\"60%\"><b>CNIC: </b></td>\r\n                    <td>{{loan.cnicNum}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td width=\"60%\"><b>Gender:</b> </td>\r\n                    <td>{{loan.gender}}</td>\r\n                  </tr>\r\n                  <tr *ngIf=\"modal.client != undefined && modal.client.fathrFirstName!=null\">\r\n                    <td width=\"60%\"><b>Father Name:</b> </td>\r\n                    <td>{{modal.client.fathrFirstName}} {{modal.client.fathrLastName}}</td>\r\n                  </tr>\r\n                  <tr *ngIf=\"modal.client != undefined && modal.client.spzFirstName!=null\">\r\n                    <td width=\"60%\"><b>Father Name:</b> </td>\r\n                    <td>{{modal.client.spzFirstName}} {{modal.client.spzLastName}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><b>Address:</b></td>\r\n                    <td>{{modal.client?.address}}.</td>\r\n                  </tr>\r\n                  <!-- <tr>\r\n                    <td>House # {{modal.client?.houseNum}} Street {{modal.client?.street_area}} Enfantry Road Tahir colony mustafabad\r\n                      Lahore.</td>\r\n                    <td></td>\r\n                  </tr> -->\r\n                </table>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"col-sm-4\">\r\n              <div class=\"pt-1\">\r\n                <label><b>Credit Information:</b></label>\r\n              </div>\r\n              <div class=\"borderbox p-2 mnh-140\">\r\n                <table class=\"simpletale\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n                  <tr>\r\n                    <td width=\"70%\"><b>Credit ID:</b></td>\r\n                    <td>12347856</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td width=\"70%\"><b>Disbursement Date:</b></td>\r\n                    <td>2/7/2018</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td width=\"70%\"><b>Disbursement Amount:</b></td>\r\n                    <td>20,000</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td width=\"70%\"><b>Total #. of installment:</b></td>\r\n                    <td>05</td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"pt-1\">\r\n                <label><b>Branch Data:</b></label>\r\n              </div>\r\n              <div class=\"borderbox p-2 mnh-140\">\r\n                <table class=\"simpletale\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n                  <tr>\r\n                    <td width=\"40%\"><b>Product ID:</b></td>\r\n                    <td>12347856</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td width=\"40%\"><b>Product Name:</b></td>\r\n                    <td>Kashf Karobar</td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"col-sm-3 text-right\">\r\n          <div class=\"picswrap\">\r\n            <div class=\"borderpic\"><img src=\"assets/images/client-pic.jpg\" alt=\"\"></div>\r\n            <p class=\"mt-2 mb-1\">Robina Ashraf</p>\r\n            <div class=\"stars\">\r\n              <i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i\r\n                class=\"fa fa-star\"></i>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div> -->\r\n      </div>\r\n      <div class=\"content\">\r\n        <ul class=\"nav nav-tabs borrowerTabs\" id=\"borrowerTabs\" role=\"tablist\">\r\n          <li class=\"nav-item\" *ngFor=\"let loan of (modal.loans2 ? modal.loans2.slice(0,2): []); let isFirst = first;let index = index;\"> <a\r\n              class=\"nav-link\" [class.active]=\"isFirst\" id=\"{{index}}-tab-header\" data-toggle=\"tab\"\r\n              href=\"#{{index}}-tab\" role=\"tab\" [attr.aria-controls]=\"index\" [attr.aria-selected]=\"isFirst\">Credit Cycle\r\n              {{loan.loan.loanCyclNum}}</a> </li>\r\n\r\n          <!-- <li class=\"nav-item\"> <a class=\"nav-link\" id=\"school-quality\" data-toggle=\"tab\" href=\"#schoolqualityTab\" role=\"tab\"\r\n              aria-controls=\"schoolqualityTab\" aria-selected=\"false\"><span *ngIf=\"model.schoolAppraisal.hasQltyChck\" class=\"dot green\"></span><span *ngIf=\"!model.schoolAppraisal.hasQltyChck\" class=\"dot orange\"></span>School Quality Questionnaire</a> </li> -->\r\n        </ul>\r\n\r\n        <div class=\"tab-content borrowerTabsContent mb-md-5\" id=\"borrowerTabsContent\">\r\n          <div class=\"tab-pane fade\" *ngFor=\"let loan of (modal.loans2 ? modal.loans2.slice(0,2): []); let isFirst = first;let index = index;\"\r\n            [class.active]=\"isFirst\" [class.show]=\"isFirst\" id=\"{{index}}-tab\" role=\"tabpanel\"\r\n            [attr.aria-labelledby]=\"getlabelledby(index)\">\r\n            <!-- <h1>Tab {{index+1}}</h1> -->\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">  \r\n                <div class=\"addBtn mb-2 pull-right\" >\r\n                  <button class=\"btn btn-primary btn-sm\" (click)=\"printClientInfo(loan.loan)\"> Print Client Info</button>\r\n                  <button *ngIf=\"isKskNot(loan)\" class=\"btn btn-primary btn-sm\" (click)=\"printLPD(loan)\"> Print LPD</button>\r\n                  <button  class=\"btn btn-primary btn-sm\" (click)=\"printPaymentSchedule(loan.loan)\">Print Repayment Schedule</button>\r\n                  <button class=\"btn btn-primary btn-sm\" (click)=\"printUndertaking(loan.loan)\"> Print Undertaking</button>\r\n                  <button *ngIf=\"loan.loan.isHlthCardFlgInPlan\" class=\"btn btn-primary btn-sm\"(click)=\"printHealthCard(loan.loan)\"> Print Health Card</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-9 mb-3\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"pt-1\">\r\n                      <label><b>Credit Information:</b></label>\r\n                    </div>\r\n                    <div class=\"borderbox p-2 mnh-140\">\r\n                      <table class=\"simpletale\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n                        <tr>\r\n                          <td width=\"70%\"><b>Credit ID:</b></td>\r\n                          <td>{{loan.loan.loanId}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td width=\"70%\"><b>Disbursement Date:</b></td>\r\n                          <td>{{loan.loan.dsbmtDt | date:'dd-MM-yyyy'}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td width=\"70%\"><b>Credit Amount:</b></td>\r\n                          <td>{{loan.loan.aprvdLoanAmt}}</td>\r\n                        </tr>\r\n                        <!-- <tr>\r\n                            <td width=\"70%\"><b>Total #. of installment:</b></td>\r\n                            <td>05</td>\r\n                          </tr> -->\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"pt-1\">\r\n                      <label><b>Product Data:</b></label>\r\n                    </div>\r\n                    <div class=\"borderbox p-2 mnh-140\">\r\n                      <table class=\"simpletale\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n                        <tr>\r\n                          <td width=\"40%\"><b>Product ID:</b></td>\r\n                          <td>{{loan.product?.prdId}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td width=\"40%\"><b>Product Name:</b></td>\r\n                          <td>{{loan.product?.prdName}}</td>\r\n                        </tr>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\" *ngFor=\"let assoc of loan.assocLoans\">\r\n                    <div class=\"pt-1\">\r\n                      <label><b>Associate Product Data:</b></label>\r\n                    </div>\r\n                    <div class=\"borderbox p-2 mnh-140\">\r\n                      <table class=\"simpletale\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n                          <tr>\r\n                              <td width=\"40%\"><b>Credit ID:</b></td>\r\n                              <td>{{assoc.loan?.loanAppSeq}}</td>\r\n                            </tr>\r\n                        <tr>\r\n                          <td width=\"40%\"><b>Associate Product ID:</b></td>\r\n                          <td>{{assoc.product?.prdId}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td width=\"40%\"><b>Associate Product Name:</b></td>\r\n                          <td>{{assoc.product?.prdName}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td width=\"40%\"><b>Credit Amount:</b></td>\r\n                          <td>{{assoc.loan?.aprvdLoanAmt}}</td>\r\n                        </tr>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-3 text-right\">\r\n                <!-- <div class=\"picswrap\">\r\n                    <div class=\"borderpic\">\r\n                      <img src=\"assets/images/client-pic.jpg\" alt=\"\"></div>\r\n                    <p class=\"mt-2 mb-1\">Robina Ashraf</p>\r\n                    <div class=\"stars\">\r\n                      <i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i\r\n                        class=\"fa fa-star\"></i>\r\n                    </div>\r\n                  </div> -->\r\n\r\n\r\n              </div>\r\n            </div>\r\n\r\n            <p class=\"colorBlack\"><b>Payment History</b></p>\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table last-left\" id=\"myTable\">\r\n                <thead class=\"thead-light last-left\">\r\n                  <tr>\r\n                    <th>Installment No.</th>\r\n                    <th>Product Name</th>\r\n                    <th>Due Date</th>\r\n                    <th>Principal Amount Due</th>\r\n                    <th>Total Charges Due</th>\r\n                    <th>Actual Paid Date</th>\r\n                    <th>Actual Paid Amount</th>\r\n                    <th>Status</th>\r\n                    <th>Payment Method</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let inst of loan.schedule; let isFirst = first;let index = index;\">\r\n                    <td>{{inst.instNum}}</td>\r\n                    <td>{{inst.prdNm}}</td>\r\n                    <td>{{inst.dueDt | date:'dd-MM-yyyy'}}</td>\r\n                    <td style=\" text-align: center; \">{{inst.ppalAmtDue | currency:'PKR':''}}</td>\r\n                    <td style=\" text-align: center; \">{{inst.totChrgDue | currency:'PKR':''}}</td>\r\n                    <!-- <td>{{inst.pymtDt | date:'dd-MM-yyyy'}}</td> -->\r\n                    <td>\r\n                      <table class=\"thead-light thead-blue\">\r\n                        <tr *ngFor=\"let p of inst.pymtDt| split:','\">\r\n                          <td style=\"border:none\">{{p | date :'dd-MM-yyyy'}}</td>\r\n                        </tr>\r\n                      </table>\r\n                    </td>\r\n                    <!-- <td><span>{{inst.pymtAmt  | currency:'PKR':''}}</span></td> -->\r\n                    <td style=\" text-align: center; \">\r\n                      <table class=\"thead-light thead-blue\" style=\"width: 50%;\">\r\n                        <tr *ngFor=\"let p of inst.pymtAmt| split:','\">\r\n                          <td style=\"border:none;text-align: right;\">{{p | currency:'PKR':''}}</td>\r\n                        </tr>\r\n                      </table>\r\n                    </td>\r\n                    <td>{{inst.refCd}}</td>\r\n                    <!-- <td>{{inst.rcvryTyp}}</td> -->\r\n                    <td>\r\n                      <table class=\"thead-light thead-blue \">\r\n                        <tr *ngFor=\"let p of inst.rcvryTyp| split:','\">\r\n                          <td style=\"border:none\">{{p}}</td>\r\n                        </tr>\r\n                      </table>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- <div class=\"tab-pane fade\" id=\"addressTab\" role=\"tabpanel\" aria-labelledby=\"address-tab\">\r\n              <h1>Tab 2</h1>\r\n            </div> -->\r\n        </div>\r\n\r\n      </div>\r\n      <!-- <p class=\"colorBlack\">Payment History</p>\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table last-left\" id=\"myTable\">\r\n          <thead class=\"thead-light last-left\">\r\n            <tr>\r\n              <th>Installment #</th>\r\n              <th>Due Date</th>\r\n              <th>Principal Amount Due</th>\r\n              <th>Total Charges Due</th>\r\n              <th>Actual Paid Date</th>\r\n              <th>Actual Paid Amount</th>\r\n              <th>Status</th>\r\n              <th>Payment Method</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td>1245796325663</td>\r\n              <td>3/11/2018</td>\r\n              <td>5000/-</td>\r\n              <td>5000/-</td>\r\n              <td>3/11/2018</td>\r\n              <td>5000/-</td>\r\n              <td>OD</td>\r\n              <td>Easy Paisa</td>\r\n            </tr>\r\n            <tr>\r\n              <td>1245796325663</td>\r\n              <td>3/11/2018</td>\r\n              <td>3000/-</td>\r\n              <td>3000/-</td>\r\n              <td>3/11/2018</td>\r\n              <td>3000/-</td>\r\n              <td>Performing</td>\r\n              <td>Branch</td>\r\n            </tr>\r\n            <tr>\r\n              <td>1245796325663</td>\r\n              <td>3/11/2018</td>\r\n              <td>2000/-</td>\r\n              <td>2000/-</td>\r\n              <td>3/11/2018</td>\r\n              <td>2000/-</td>\r\n              <td>OD</td>\r\n              <td>Easy Paisa</td>\r\n            </tr>\r\n            <tr>\r\n              <td>1245796325663</td>\r\n              <td>3/11/2018</td>\r\n              <td>6000/-</td>\r\n              <td>6000/-</td>\r\n              <td>3/11/2018</td>\r\n              <td>6000/-</td>\r\n              <td>Performing</td>\r\n              <td>Branch</td>\r\n            </tr>\r\n\r\n\r\n          </tbody>\r\n        </table>\r\n      </div> -->\r\n\r\n\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/loan-origination/client-history/client-history.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/loan-origination/client-history/client-history.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ClientHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientHistoryComponent", function() { return ClientHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_loan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/loan.service */ "./src/app/shared/services/loan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_disbursement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/disbursement.service */ "./src/app/shared/services/disbursement.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClientHistoryComponent = /** @class */ (function () {
    function ClientHistoryComponent(loanService, router, spinner, toaster, disbursementService) {
        this.loanService = loanService;
        this.router = router;
        this.spinner = spinner;
        this.toaster = toaster;
        this.disbursementService = disbursementService;
        this.modal = {};
        // this.loanService.getSavedInsurancePlan(loan.loanAppSeq).subscribe((res) => {
        //   this.obj = res;
        //   let plan = null;
        //   if (this.obj != null && this.obj.healthInsrPlanSeq != null) {
        //     this.plans.forEach(pln => {
        //       if (this.obj.healthInsrPlanSeq == pln.hlthInsrPlanSeq) {
        //         plan = pln;
        //       }
        //     });
        //     if(plan!=null && plan.hlthCardFlg!=undefined && plan.hlthCardFlg!=null && plan.hlthCardFlg!=undefined){
        //       if(plan.hlthCardFlg==true){
        //         this.isHlthCardFlgInPlan = true;
        //       }
        //     }
        //   }
        //   console.log(res);
        // }, (error) => {
        //   console.log('err In Loan Info Service');
        //   console.log('err', error);
        // });
        this.isHlthCardFlgInPlan = false;
        this.plans = [];
        this.ins = null;
        this.showHlthCard = false;
    }
    ClientHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loan = JSON.parse(sessionStorage.getItem("historyLoan"));
        this.spinner.show();
        console.log(this.loan);
        this.loanService.getClientHistory(this.loan.clientId).subscribe(function (res) {
            _this.modal = res;
            _this.spinner.hide();
            // this.modal.loans.forEach(loan => {
            //   if (loan.loan.prdSeq) {
            //     this.loanService.getProductBySeq(loan.loan.prdSeq).subscribe(p => {
            //       loan.product = p;
            //     }, (error) => {
            //       console.log(error)
            //     })
            //   }
            // });
            // this.modal.loans.forEach((loan, x) => {
            //   loan.assocLoan = [];
            // });
            // let index = -1;
            // this.modal.loans.forEach((loan, x) => {
            //   this.modal.loans.forEach((loan2, y) => {
            //     if (loan2.loan.prntLoanAppSeq == loan.loan.prntLoanAppSeq && loan.loan.prntLoanAppSeq == loan.loan.loanAppSeq
            //       && loan2.loan.prntLoanAppSeq != loan2.loan.loanAppSeq) {
            //       loan.assocLoan.push(res.loans[y]);
            //       this.modal.loans.splice(y, 1);
            //       index = y;
            //     }
            //   })
            // })
            _this.modal.loans2 = JSON.parse(JSON.stringify(_this.modal.loans));
            console.log(_this.modal);
            _this.loanService.getInsurancePlans().subscribe(function (res) {
                console.log(res);
                _this.plans = res;
                if (_this.modal.loans2 != null && _this.modal.loans2 != undefined) {
                    _this.modal.loans2.forEach(function (obj) {
                        if (obj != null && obj != undefined && obj.loan != null && obj.loan != undefined) {
                            obj.loan.isHlthCardFlgInPlan = false;
                            _this.loanService.getSavedInsurancePlan(obj.loan.loanAppSeq).subscribe(function (res) {
                                _this.ins = res;
                                var plan = null;
                                if (_this.ins != null && _this.ins.healthInsrPlanSeq != undefined && _this.ins.healthInsrPlanSeq != null) {
                                    _this.plans.forEach(function (pln) {
                                        if (_this.ins.healthInsrPlanSeq == pln.hlthInsrPlanSeq) {
                                            plan = pln;
                                        }
                                    });
                                    if (plan != null && plan.hlthCardFlg != undefined && plan.hlthCardFlg != null && plan.hlthCardFlg != undefined) {
                                        if (plan.hlthCardFlg == true) {
                                            obj.loan.isHlthCardFlgInPlan = true;
                                        }
                                    }
                                }
                                console.log(res);
                            }, function (error) {
                                console.log('err In Loan Info Service');
                                console.log('err', error);
                            });
                        }
                    });
                }
            }, function (error) {
                _this.spinner.hide();
                console.log(error);
            });
        }, function (error) {
            console.log(error);
            _this.spinner.hide();
        });
    };
    ClientHistoryComponent.prototype.getlabelledby = function (ind) {
        return ind + "-tab-header";
    };
    ClientHistoryComponent.prototype.printHealthCard = function (loan) {
        var _this = this;
        console.log(loan);
        this.spinner.show();
        this.disbursementService.loanAppSeq = loan.loanAppSeq;
        this.disbursementService.getHealthCardPdf().subscribe(function (response) {
            _this.spinner.hide();
            var binaryData = [];
            binaryData.push(response);
            var fileURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
            window.open(fileURL, '_blank');
        }, function (error) {
            _this.spinner.hide();
        });
    };
    ClientHistoryComponent.prototype.printPaymentSchedule = function (loan) {
        var _this = this;
        this.spinner.show();
        this.disbursementService.loanAppSeq = loan.loanAppSeq;
        this.disbursementService.getPaymentSchedulePdf().subscribe(function (response) {
            _this.spinner.hide();
            var binaryData = [];
            binaryData.push(response);
            var fileURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
            window.open(fileURL, '_blank');
        }, function (error) {
            _this.spinner.hide();
        });
    };
    ClientHistoryComponent.prototype.isKskNot = function (loan) {
        // console.log(loan)
        var v = false;
        if (loan.assocLoans != undefined && loan.assocLoans != null) {
            if (loan.assocLoans.length > 0) {
                for (var i = 0; i < loan.assocLoans.length; i++) {
                    if (loan.assocLoans[i].product.prdId == "0019") {
                        v = true;
                    }
                }
            }
        }
        return v;
    };
    ClientHistoryComponent.prototype.isMurhaba = function (loan) {
        console.log(loan);
        var healthCard = false;
        if (loan.product.prdId == "0010") {
            healthCard = false;
        }
        else {
            healthCard = true;
        }
        return healthCard;
    };
    ClientHistoryComponent.prototype.printUndertaking = function (loan) {
        var _this = this;
        console.log(loan);
        this.spinner.show();
        this.disbursementService.loanAppSeq = loan.loanAppSeq;
        this.disbursementService.getUndertakingPdf().subscribe(function (response) {
            _this.spinner.hide();
            var binaryData = [];
            binaryData.push(response);
            var fileURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
            window.open(fileURL, '_blank');
        }, function (error) {
            _this.spinner.hide();
        });
    };
    ClientHistoryComponent.prototype.showHealthCard = function (data) {
        this.showHlthCard = data.prdSeq === '2657' || data.prdSeq === '0010' || data.prdSeq === '0019' ? false : true;
    };
    ClientHistoryComponent.prototype.printClientInfo = function (loan) {
        var _this = this;
        this.spinner.show();
        this.disbursementService.loanAppSeq = loan.loanAppSeq;
        this.disbursementService.getClientInfoPdf().subscribe(function (response) {
            _this.spinner.hide();
            var binaryData = [];
            binaryData.push(response);
            var fileURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
            window.open(fileURL, '_blank');
        }, function (error) {
            _this.spinner.hide();
        });
    };
    ClientHistoryComponent.prototype.printLPD = function (loan) {
        var _this = this;
        console.log(loan);
        var seq = 0;
        if (loan.assocLoans != undefined && loan.assocLoans != null) {
            if (loan.assocLoans.length > 0) {
                for (var i = 0; i < loan.assocLoans.length; i++) {
                    if (loan.assocLoans[i].product.prdId == "0019") {
                        seq = loan.assocLoans[i].loan.loanAppSeq;
                    }
                }
            }
        }
        if (seq == 0) {
            return;
        }
        this.spinner.show();
        this.disbursementService.loanAppSeq = seq;
        console.log(seq);
        this.spinner.show();
        this.disbursementService.getLPD().subscribe(function (response) {
            _this.spinner.hide();
            var binaryData = [];
            binaryData.push(response);
            var fileURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
            window.open(fileURL, '_blank');
        }, function (error) {
            _this.spinner.hide();
        });
    };
    ClientHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-history',
            template: __webpack_require__(/*! ./client-history.component.html */ "./src/app/pages/loan-origination/client-history/client-history.component.html"),
            styles: [__webpack_require__(/*! ./client-history.component.css */ "./src/app/pages/loan-origination/client-history/client-history.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_loan_service__WEBPACK_IMPORTED_MODULE_1__["LoanService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            src_app_shared_services_disbursement_service__WEBPACK_IMPORTED_MODULE_5__["DisbursementService"]])
    ], ClientHistoryComponent);
    return ClientHistoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/loan-origination/landing/landing.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/pages/loan-origination/landing/landing.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button:disabled{\r\n    cursor: not-allowed;\r\n    background-color: lightgrey;\r\n    border-color: lightgrey;\r\n}\r\ni.fa-times:hover{\r\n    color: #990b0b;\r\n}\r\ni.fa-times{\r\n    color: #999999;\r\n}\r\ni:hover{\r\n    cursor: pointer;\r\n}\r\n.cdk-overlay-container {\r\n    z-index: 1100 !important;\r\n}\r\n.Rejected{\r\n    color: #db0707;\r\n}\r\n.Draft{\r\n    color: #db8407;\r\n}\r\n.Submitted{\r\n    color:#0792db;\r\n}\r\n.Approved{\r\n    color: #51de65;\r\n}\r\n.DRAFT{\r\n    color: #db8407;\r\n}\r\n.REJECTED{\r\n    color: #db0707;\r\n}\r\n.SUBMITTED{\r\n    color:#0792db;\r\n}\r\n.APPROVED{\r\n    color: #51de65;\r\n}\r\n.CLARIFICATION{\r\n    color:#ba55d3;\r\n}\r\n.clarification{\r\n    color:#ba55d3;\r\n}\r\n.Clarification{\r\n    color:#ba55d3;\r\n}\r\n.Completed{\r\n    color:#00bfff\r\n}\r\n.COMPLETED{\r\n    color:#00bfff\r\n}\r\n.completed{\r\n    color:#00bfff\r\n}\r\n/* .ACTIVE{\r\n    color:#9600ff\r\n}\r\n.active{\r\n    color:#9600ff\r\n}\r\n.Active{\r\n    color:#9600ff\r\n} */\r\n.Discarded{\r\n    color:#ff0200\r\n}\r\n.DISCARDED{\r\n    color:#ff0200\r\n}\r\n.discarded{\r\n    color:#ff0200\r\n}\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n.mat-cell, .mat-header-cell {\r\n    font-size: 14px;\r\n    }\r\n.mat-cell, .mat-footer-cell {\r\n    font-size: 13px;\r\n    }\r\ntable {\r\n    width: 100%;\r\n    }\r\nth.mat-header-cell {\r\n        vertical-align: middle;\r\n    }\r\n    "

/***/ }),

/***/ "./src/app/pages/loan-origination/landing/landing.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/loan-origination/landing/landing.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"leftSideBar\">\r\n          <h6>\r\n            <i class=\"fa fa-sliders fa-lg\"></i> Filter</h6>\r\n          <div class=\"selectedFilter\">\r\n            <ul>\r\n              <li *ngFor=\"let filter of filters\">{{filter.key}} : {{filter.value}}\r\n                <a (click)=\"deleteFilter(filter)\">\r\n                  <i class=\"fa fa-times\"></i>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"filtersWrap\">\r\n            <div class=\"filter\">\r\n              <a class=\"acc_trigger\">Organization</a>\r\n              <div class=\"collapse acc_container\" id=\"region\">\r\n                <div class=\"listmenu\">\r\n                  <ul class=\"sub-menu\">\r\n                    <li *ngFor=\"let reg of org\">\r\n                      <span class=\"nav-click\" style=\"width: 10%;margin-left: 90%;\"\r\n                        (click)=\"navClick($event.srcElement)\"></span>\r\n                      <!-- (click)=\"regionClick(reg)\" -->\r\n                      <span style=\" cursor: pointer; \">{{reg.regionName}}</span>\r\n                      <ul class=\"sub-menu\">\r\n                        <li *ngFor=\"let area of reg.areas\">\r\n                          <!-- (click)=\"areaClick(area)\" -->\r\n                          <span class=\"nav-click\" style=\"width: 10%;margin-left: 90%;\"\r\n                            (click)=\"navClick($event.srcElement)\"></span><span\r\n                            style=\" cursor: pointer; \">{{area.areaName}}</span>\r\n                          <ul class=\"sub-menu\">\r\n                            <li *ngFor=\"let branch of area.branches\">\r\n                              <span class=\"nav-click\" style=\"width: 10%;margin-left: 90%;\"\r\n                                (click)=\"navClick($event.srcElement)\"></span><span (click)=\"branchClick(branch)\"\r\n                                style=\" cursor: pointer; \">{{branch.branchName}}</span>\r\n                              <ul class=\"sub-menu\">\r\n                                <li *ngFor=\"let port of branch.portfolio\"><span (click)=\"portClick(port)\"\r\n                                    style=\" cursor: pointer; \">{{port.portfolioName}}</span></li>\r\n                              </ul>\r\n                            </li>\r\n                          </ul>\r\n                        </li>\r\n                      </ul>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"filter\">\r\n              <a class=\"acc_trigger\">Geography </a>\r\n              <div class=\"collapse acc_container\" id=\"country\">\r\n                <div class=\"listmenu\">\r\n                  <ul>\r\n                    <li *ngFor=\"let country of geography\">\r\n                      <span class=\"nav-click\" style=\"width: 10%;margin-left: 90%;\" (click)=\"navClick($event.srcElement)\"></span>\r\n                      <span>{{country.countryName}}</span>\r\n                      <ul class=\"sub-menu\">\r\n                        <li *ngFor=\"let state of country.states\">\r\n                          <span class=\"nav-click\" style=\"width: 10%;margin-left: 90%;\" (click)=\"navClick($event.srcElement)\"></span>\r\n                          <span (click)=\"stateClick(state)\">{{state.provName}}</span>\r\n                          <ul class=\"sub-menu\">\r\n                            <li *ngFor=\"let district of state.districts\">\r\n                              <span class=\"nav-click\" style=\"width: 10%;margin-left: 90%;\" (click)=\"navClick($event.srcElement)\"></span>\r\n                              <span (click)=\"districtClick(district)\">{{district.districtName}}</span>\r\n                              <ul class=\"sub-menu\">\r\n                                <li *ngFor=\"let tehsil of district.tehsils\">\r\n                                  <span class=\"nav-click\" style=\"width: 10%;margin-left: 90%;\" (click)=\"navClick($event.srcElement)\"></span>\r\n                                  <span (click)=\"tehsilClick(tehsil)\">{{tehsil.thslName}}</span>\r\n                                  <ul class=\"sub-menu\">\r\n                                    <li *ngFor=\"let uc of tehsil.ucs\">\r\n                                      <span (click)=\"ucClick(uc)\">{{uc.ucName}}- {{uc.ucDescription}}</span>\r\n                                    </li>\r\n                                  </ul>\r\n                                </li>\r\n                              </ul>\r\n                            </li>\r\n                          </ul>\r\n                        </li>\r\n                      </ul>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div> -->\r\n            <div class=\"filter\">\r\n              <a class=\"acc_trigger\">Gender</a>\r\n              <div class=\"collapse acc_container\">\r\n                <!-- <label></label> -->\r\n                <br>\r\n                <mat-radio-group (change)=\"genderFilter()\" [(ngModel)]=\"genderSelected\" name=\"gender\" required>\r\n                  <mat-radio-button class=\"w-50\" *ngFor=\"let gen of gender\" [value]=\"gen.codeRefCd\">{{gen.codeValue}}\r\n                  </mat-radio-button>\r\n                </mat-radio-group>\r\n                <br>\r\n              </div>\r\n            </div>\r\n            <div class=\"filter\">\r\n              <a class=\"acc_trigger\">Application Status</a>\r\n              <div class=\"collapse acc_container\">\r\n                <!-- <label></label> -->\r\n                <br>\r\n                <mat-radio-group (change)=\"statusFilter()\" [(ngModel)]=\"filterDto.StatusCd\" name=\"gender\" required>\r\n                  <mat-radio-button class=\"w-50\" *ngFor=\"let gen of status\" [value]=\"gen.codeRefCd\">{{gen.codeValue}}\r\n                  </mat-radio-button>\r\n                </mat-radio-group>\r\n                <br>\r\n              </div>\r\n            </div>\r\n            <div class=\"filter\">\r\n              <a class=\"acc_trigger\">Marital Status</a>\r\n              <div class=\"collapse acc_container\">\r\n                <!-- <label>Marital Status</label> -->\r\n                <br>\r\n                <mat-radio-group (change)=\"maritalStatusFilter()\" [(ngModel)]=\"filterDto.maritalStsCd\"\r\n                  name=\"maritalStatus+gen.codeRefCd\" required>\r\n                  <mat-radio-button class=\"w-50\" *ngFor=\"let gen of maritalStatus\" [value]=\"gen.codeRefCd\">\r\n                    {{gen.codeValue}}</mat-radio-button>\r\n                </mat-radio-group>\r\n                <br>\r\n                <!-- <label class=\"mt-2\">Marital Status</label>\r\n                <br>\r\n                <div class=\"custom-control custom-radio custom-control-inline\">\r\n                  <input type=\"radio\" id=\"yesM\" name=\"mStatus\" class=\"custom-control-input\">\r\n                  <label class=\"custom-control-label\" for=\"yesM\">Yes</label>\r\n                </div>\r\n                <div class=\"custom-control custom-radio custom-control-inline\">\r\n                  <input type=\"radio\" id=\"noM\" name=\"mStatus\" class=\"custom-control-input\">\r\n                  <label class=\"custom-control-label\" for=\"noM\">No</label>\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n            <!-- <button class=\"btn btn-primary btn-sm\">More Filters</button> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\" (click)=\"showField()\" *ngIf=\"!showFields\">\r\n                <h6 class=\"d-inline-block searchshow\" style=\"cursor: pointer;\">Search\r\n                  <i class=\"fa fa-search\"> </i>\r\n                </h6>\r\n              </div>\r\n              <div class=\"mysearch\" *ngIf=\"showFields\">\r\n\r\n                <form (ngSubmit)=\"applyFilter(searchVal)\" #searchForm=\"ngForm\">\r\n                  <div class=\"col-sm-9\" style=\"float:left;\">\r\n                    <mat-form-field *ngIf=\"showFields\">\r\n                      <!-- <a  *ngIf=\"showFields\">\r\n                          <i class=\"fa fa-window-close\" (click)=\"cloaseField()\"> </i> (keyup)=\"applyFilter($event.target.value)\"\r\n                        </a> -->\r\n                      <input id=\"searchBox\" (keyup)=\"searchValue()\" autofocus matInput name=\"searchValue\"\r\n                        [(ngModel)]=\"searchVal\" placeholder=\"Search\">\r\n                      <!-- <button mat-button *ngIf=\"searchVal\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"searchVal=''\">\r\n                          <mat-icon>close</mat-icon>\r\n                        </button> -->\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-sm-2\" style=\"float:right;\">\r\n                    <button mat-raised-button color=\"primary\" type=\"submit\"\r\n                      style=\" background-color: #76b1e7; height: 31px; margin: 6px; \">Search</button>\r\n                  </div>\r\n                </form>\r\n                <!-- <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search for names..\" title=\"Type in a name\"> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6\" *ngIf=\"auth.role != 'bm' && auth.role != 'bdo'\">\r\n              <form [formGroup]=\"branchForm\" (ngSubmit)=\"onSubmitBranchForm()\">\r\n                <ng-select *ngIf=\"auth.role != 'bm' && auth.role != 'bdo'\" [items]=\"brnchs\" required\r\n                  (change)=\"onSelectBranch($event)\" bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\"\r\n                  placeholder=\"Select Branch:\" formControlName=\"branch\">\r\n                </ng-select>\r\n\r\n\r\n              </form>\r\n            </div>\r\n            <div class=\"col-sm-6 addBtn\" *ngIf=\"auth.role == 'bdo'\">\r\n              <a (click)=\"addLoanModel()\" class=\"btn btn-primary btn-sm\">\r\n                <i class=\"fa fa-plus\"></i> Add</a>\r\n            </div>\r\n\r\n            <!-- <div class=\"alert alert-warning mt-2 mb-2\">\r\n                    <i class=\"fa fa-exclamation-circle\"></i>  <strong>This is a Backlist.</strong></div> -->\r\n            <div class=\"modal fade\" id=\"cmmoncodes\" role=\"dialog\">\r\n              <div class=\"modal-dialog mymodal bigger\" style=\"max-width:95%; top:2%\">\r\n\r\n                <!-- Modal content-->\r\n                <div class=\"modal-content\">\r\n                  <form (ngSubmit)=\"onAddNewLoanSubmit()\" #addNewLoanForm=\"ngForm\">\r\n\r\n                    <div class=\"modal-header\">\r\n                      <h5 class=\"modal-title\">Validation & History</h5>\r\n                    </div>\r\n                    <div class=\"modal-body pt-0\" style=\"max-height: 50em;\">\r\n                      <div class=\"col-sm-12\">\r\n                        <div class=\"row\">\r\n\r\n                          <div class=\"col-sm-4\" style=\"padding:8px 23px\">\r\n                            <p>Client:</p>\r\n                            <div class=\"row\" style=\"border: 1px solid silver;padding-bottom: 10px;\">\r\n                              <div class=\"col-sm-6\">\r\n                                <div class=\"mt-2\">\r\n                                  <mat-form-field>\r\n                                    <input type=\"text\" (keyup)=\"cnicPattern($event, 'client')\" required id=\"clientCNIC\"\r\n                                      name=\"clientCNIC\" matInput placeholder=\"CNIC\"\r\n                                      pattern=\"^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$\" maxlength=\"15\" minlength=\"15\"\r\n                                      [(ngModel)]=\"cnicPatternObj.clientCNIC\" #clientCNIC=\"ngModel\">\r\n                                    <mat-error *ngIf=\"clientCNIC.invalid\">\r\n                                      client cnic number is <strong>invalid</strong>\r\n                                    </mat-error>\r\n                                  </mat-form-field>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-sm-6 mt-2\">\r\n                                <mat-form-field>\r\n                                  <input matInput (keypress)=\"onlyNumbers($event)\" required name=\"Expiry\"\r\n                                    [max]=\"maxDate\" id=\"cnicExpryDate\" [(ngModel)]=\"model.expiryDate\"\r\n                                    placeholder=\"CNIC Expiry Date\" [matDatepicker]=\"picker1\" readonly>\r\n                                  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                                  <mat-datepicker startView=\"multi-year\" required #picker1 disabled=\"false\">\r\n                                  </mat-datepicker>\r\n                                </mat-form-field>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-4\" style=\"padding:8px 23px\">\r\n                            <p>Nominee:</p>\r\n                            <div class=\"row\" style=\"border: 1px solid silver;padding-bottom: 10px;\">\r\n                              <div class=\"col-sm-6\">\r\n                                <div class=\"mt-2\">\r\n                                  <mat-form-field>\r\n                                    <input type=\"text\" (keydown)=\"cnicPattern($event, 'nominee')\" id=\"nomCnic\"\r\n                                      name=\"nomCnic\" matInput placeholder=\"CNIC\"\r\n                                      pattern=\"^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$\" maxlength=\"15\" minlength=\"15\"\r\n                                      [errorStateMatcher]=\"matcher\" [(ngModel)]=\"cnicPatternObj.nomCnic\"\r\n                                      #nomCnic=\"ngModel\">\r\n                                    <mat-error *ngIf=\"nomCnic.invalid\">\r\n                                      nominee cnic number is <strong>invalid</strong>\r\n                                    </mat-error>\r\n                                  </mat-form-field>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-sm-6 mt-2\">\r\n                                <mat-form-field>\r\n                                  <input matInput (keypress)=\"onlyNumbers($event)\" name=\"nomineeExpiry\"\r\n                                    max=\"{{maxDate}}\" min=\"{{date}}\" id=\"nomineecnicExpryDate\"\r\n                                    [(ngModel)]=\"model.nominee.cnicExpryDate\" placeholder=\"CNIC Expiry Date\"\r\n                                    [matDatepicker]=\"picker2\" readonly>\r\n                                  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                                  <mat-datepicker startView=\"multi-year\" #picker2 disabled=\"false\"></mat-datepicker>\r\n                                </mat-form-field>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-4\" style=\"padding:8px 23px\">\r\n                            <p>Co-Borrower:</p>\r\n                            <div class=\"row\" style=\"border: 1px solid silver;padding-bottom: 10px;\">\r\n                              <div class=\"col-sm-6\">\r\n                                <div class=\"mt-2\">\r\n                                  <mat-form-field>\r\n                                    <input type=\"text\" (keydown)=\"cnicPattern($event, 'co-borrower')\"\r\n                                      pattern=\"^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$\" maxlength=\"15\" minlength=\"15\"\r\n                                      [errorStateMatcher]=\"matcher\" id=\"cobCNIC\" name=\"cobCNIC\" matInput\r\n                                      placeholder=\"CNIC\" [(ngModel)]=\"cnicPatternObj.cobCNIC\" #cobCNIC=\"ngModel\">\r\n                                    <mat-error *ngIf=\"cobCNIC.invalid\">\r\n                                      co-borrower cnic number is <strong>invalid</strong>\r\n                                    </mat-error>\r\n                                  </mat-form-field>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-sm-6 mt-2\">\r\n                                <mat-form-field>\r\n                                  <input matInput (keypress)=\"onlyNumbers($event)\" name=\"coBorrowerExpiry\"\r\n                                    max=\"{{maxDate}}\" min=\"{{date}}\" id=\"coBorrowercnicExpryDate\"\r\n                                    [(ngModel)]=\"model.coBorrower.cnicExpryDate\" placeholder=\"CNIC Expiry Date\"\r\n                                    [matDatepicker]=\"picker3\" readonly>\r\n                                  <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n                                  <mat-datepicker startView=\"multi-year\" #picker3 disabled=\"false\"></mat-datepicker>\r\n                                </mat-form-field>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div>\r\n                          <div class=\"row\">\r\n                            <div>\r\n                              <button type=\"submit\" [disabled]=\"!addNewLoanForm.form.valid\"\r\n                                class=\"btn btn-primary btn-small btn-min\">Validate\r\n                                with Kashf</button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"content\">\r\n                        <ul class=\"nav nav-tabs borrowerTabs\" id=\"kpitasktab\" role=\"tablist\">\r\n                          <li class=\"nav-item\" *ngIf=\"hashistory\">\r\n                            <a class=\"nav-link active\" id=\"kpi-tab\" data-toggle=\"tab\" href=\"#kpitab\" role=\"tab\"\r\n                              aria-controls=\"kpi-tab\" aria-selected=\"true\">Client</a>\r\n                          </li>\r\n                          <li class=\"nav-item\" *ngIf=\"hasNomhistory\">\r\n                            <a class=\"nav-link\" id=\"task-tab\" data-toggle=\"tab\" href=\"#tasktab\" role=\"tab\"\r\n                              aria-controls=\"task-tab\" aria-selected=\"false\">Nominee</a>\r\n                          </li>\r\n                          <li class=\"nav-item\" *ngIf=\"hasCobhistory\">\r\n                            <a class=\"nav-link\" id=\"tuc-tab\" data-toggle=\"tab\" href=\"#tuctab\" role=\"tab\"\r\n                              aria-controls=\"tuc-tab\" aria-selected=\"false\">Co-Borrower</a>\r\n                          </li>\r\n                        </ul>\r\n                        <div class=\"tab-content borrowerTabsContent mb-md-3\" id=\"kpiTabsContent\">\r\n                          <div class=\"tab-pane fade show active\" id=\"kpitab\" role=\"tabpanel\" aria-labelledby=\"kpi-tab\">\r\n                            <div class=\"info-bloks\" [style.display]=\"hashistory ? 'block' : 'none'\">\r\n                              <div class=\"row\">\r\n                                <div class=\"container-fluid\">\r\n                                  <div class=\"content\">\r\n                                    <div class=\"row\">\r\n                                      <div class=\"col-sm-9\">\r\n                                        <div class=\"borderbox pb-0\">\r\n                                          <ul class=\"infolist mt-2 mb-2\">\r\n                                            <li>Branch:\r\n                                              <span> {{clientHistory.branchName}}</span>\r\n                                            </li>\r\n                                            <li>Portfolio:\r\n                                              <span>Portfolio {{clientHistory.portKey}}</span>\r\n                                            </li>\r\n                                            <li>BDO:\r\n                                              <span> {{clientHistory.portfolio}}</span>\r\n                                            </li>\r\n                                          </ul>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-sm-4\">\r\n                                            <div class=\"pt-1\">\r\n                                              <label>\r\n                                                <b>{{clientHistory.title}} Information:</b>\r\n                                              </label>\r\n                                            </div>\r\n                                            <div class=\"borderbox p-2 mnh-140\">\r\n                                              <table class=\"simpletale\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n                                                <tr>\r\n                                                  <td width=\"60%\">\r\n                                                    <b>{{clientHistory.title}} ID:</b>\r\n                                                  </td>\r\n                                                  <td>{{clientHistory.clientId}}</td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                  <td width=\"60%\">\r\n                                                    <b>{{clientHistory.title}} Name: </b>\r\n                                                  </td>\r\n                                                  <td>{{clientHistory.firstName}} {{clientHistory.lastName}}</td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                  <td width=\"60%\">\r\n                                                    <b>Gender:</b>\r\n                                                  </td>\r\n                                                  <td>{{clientHistory.gender}}</td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                  <td width=\"60%\">\r\n                                                    <b>Father Name:</b>\r\n                                                  </td>\r\n                                                  <td>{{clientHistory.fathrFirstName}} {{clientHistory.fathrLastName}}\r\n                                                  </td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                  <td>\r\n                                                    <b>Address:</b>\r\n                                                  </td>\r\n                                                  <td width=\"70%\">House No. {{clientHistory.houseNum}}\r\n                                                    {{clientHistory.cityName}},\r\n                                                    {{clientHistory.countryName}}</td>\r\n                                                </tr>\r\n                                              </table>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"col-sm-4\">\r\n                                            <div class=\"pt-1\">\r\n                                              <label>\r\n                                                <b>Credit Information:</b>\r\n                                              </label>\r\n                                            </div>\r\n                                            <div class=\"borderbox p-2 mnh-140\">\r\n                                              <table class=\"simpletale\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n                                                <tr>\r\n                                                  <td width=\"70%\">\r\n                                                    <b>Credit ID:</b>\r\n                                                  </td>\r\n                                                  <td>{{clientHistory.loanAppSeq}}</td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                  <td width=\"70%\">\r\n                                                    <b>Status:</b>\r\n                                                  </td>\r\n                                                  <td>{{clientHistory.status}}</td>\r\n                                                </tr>\r\n                                                <!-- <tr>\r\n                                                  <td width=\"70%\">\r\n                                                    <b>Disbursement Date:</b>\r\n                                                  </td>\r\n                                                  <td>2/7/2018</td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                  <td width=\"70%\">\r\n                                                    <b>Disbursement Amount:</b>\r\n                                                  </td>\r\n                                                  <td>20,000</td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                  <td width=\"70%\">\r\n                                                    <b>Total #. of installment:</b>\r\n                                                  </td>\r\n                                                  <td>05</td>\r\n                                                </tr> -->\r\n                                              </table>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"col-sm-4\">\r\n                                            <div class=\"pt-1\">\r\n                                              <label>\r\n                                                <b>Product:</b>\r\n                                              </label>\r\n                                            </div>\r\n                                            <div class=\"borderbox p-2 mnh-140\">\r\n                                              <table class=\"simpletale\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n                                                <tr>\r\n                                                  <td width=\"40%\">\r\n                                                    <b>Product ID:</b>\r\n                                                  </td>\r\n                                                  <td>{{clientHistory.prdSeq}}</td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                  <td width=\"40%\">\r\n                                                    <b>Product Name:</b>\r\n                                                  </td>\r\n                                                  <td>{{clientHistory.prdName}}</td>\r\n                                                </tr>\r\n                                              </table>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <!-- <div class=\"col-sm-3 text-right\">\r\n                                        <div class=\"picswrap\">\r\n                                          <div class=\"borderpic\">\r\n                                            <img src=\"assets/images/client-pic.jpg\" alt=\"\">\r\n                                          </div>\r\n                                          <p class=\"mt-2 mb-1\">Robina Ashraf</p>\r\n                                          <div class=\"stars\">\r\n                                            <i class=\"fa fa-star\"></i>\r\n                                            <i class=\"fa fa-star\"></i>\r\n                                            <i class=\"fa fa-star\"></i>\r\n                                            <i class=\"fa fa-star\"></i>\r\n                                            <i class=\"fa fa-star\"></i>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div> -->\r\n                                    </div>\r\n                                    <!-- <h5>Payment History</h5>\r\n                                    <div class=\"table-responsive\">\r\n                                      <table class=\"table last-left\" id=\"myTable\">\r\n                                        <thead class=\"thead-light last-left\">\r\n                                          <tr>\r\n                                            <th>Installment #</th>\r\n                                            <th>Due Date</th>\r\n                                            <th>Principal Amount Due</th>\r\n                                            <th>Total Charges Due</th>\r\n                                            <th>Actual Paid Date</th>\r\n                                            <th>Actual Paid Amount</th>\r\n                                            <th>Status</th>\r\n                                            <th>Payment Method</th>\r\n                                          </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                          <tr>\r\n                                            <td>1245796325663</td>\r\n                                            <td>3/11/2018</td>\r\n                                            <td>5000/-</td>\r\n                                            <td>5000/-</td>\r\n                                            <td>3/11/2018</td>\r\n                                            <td>5000/-</td>\r\n                                            <td>OD</td>\r\n                                            <td>Easy Paisa</td>\r\n                                          </tr>\r\n                                          <tr>\r\n                                            <td>1245796325663</td>\r\n                                            <td>3/11/2018</td>\r\n                                            <td>3000/-</td>\r\n                                            <td>3000/-</td>\r\n                                            <td>3/11/2018</td>\r\n                                            <td>3000/-</td>\r\n                                            <td>Performing</td>\r\n                                            <td>Branch</td>\r\n                                          </tr>\r\n                                        </tbody>\r\n                                      </table>\r\n                                    </div> -->\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"alert alert-warning mt-2 mb-2\" *ngIf=\"severinity == 1\">\r\n                              <i class=\"fa fa-exclamation-circle\"></i>\r\n                              <strong>This is a Backlisted Client.</strong>\r\n                            </div>\r\n\r\n                            <div class=\"alert alert-warning mt-2 mb-2\" *ngIf=\"severinity == 0\" style=\"color: #cb9500;\r\n                              background-color: #ffd9b2;\r\n                              border-color: #ea9600;\">\r\n                              <i class=\"fa fa-exclamation-circle\" style=\"color: #cb9500;\"></i>\r\n                              <strong>Warning.</strong>\r\n                            </div>\r\n\r\n                            <div class=\"alert alert-warning mt-2 mb-2\"\r\n                              *ngIf=\"hashistory && clientHistory.status != 'Completed'\" style=\"color: #cb9500;\r\n                              background-color: #ffd9b2;\r\n                              border-color: #ea9600;\">\r\n                              <i class=\"fa fa-exclamation-circle\" style=\"color: #cb9500;\"></i>\r\n                              <strong>Warning.</strong>\r\n                              <p>Active as {{clientHistory.title}} with Credit [{{clientHistory.loanAppSeq}}] Client ID\r\n                                [{{clientHistory.clientId}}] Client Name [{{clientHistory.firstName}}\r\n                                {{clientHistory.lastName}}] Status[{{clientHistory.status}}] in\r\n                                [{{clientHistory.branchName}}] Branch.</p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"tab-pane fade\" id=\"tasktab\" role=\"tabpanel\" aria-labelledby=\"task-tab\">\r\n                            <div class=\"container-fluid\" [style.display]=\"hasNomhistory ? 'block' : 'none'\">\r\n                              <div class=\"content\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-9\">\r\n                                    <div class=\"borderbox pb-0\">\r\n                                      <ul class=\"infolist mt-2 mb-2\">\r\n                                        <li>Branch:\r\n                                          <span> {{nomHistory.branchName}}</span>\r\n                                        </li>\r\n                                        <li>Portfolio:\r\n                                          <span>Portfolio {{nomHistory.portKey}}</span>\r\n                                        </li>\r\n                                        <li>BDO:\r\n                                          <span> {{nomHistory.portfolio}}</span>\r\n                                        </li>\r\n                                      </ul>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                      <div class=\"col-sm-4\">\r\n                                        <div class=\"pt-1\">\r\n                                          <label>\r\n                                            <b>{{nomHistory.title}} Information:</b>\r\n                                          </label>\r\n                                        </div>\r\n                                        <div class=\"borderbox p-2 mnh-140\">\r\n                                          <table class=\"simpletale\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n                                            <tr>\r\n                                              <td width=\"60%\">\r\n                                                <b>{{nomHistory.title}} ID:</b>\r\n                                              </td>\r\n                                              <td>{{nomHistory.clientId}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                              <td width=\"60%\">\r\n                                                <b>{{nomHistory.title}} Name: </b>\r\n                                              </td>\r\n                                              <td>{{nomHistory.firstName}} {{nomHistory.lastName}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                              <td width=\"60%\">\r\n                                                <b>Gender:</b>\r\n                                              </td>\r\n                                              <td>{{nomHistory.gender}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                              <td width=\"60%\">\r\n                                                <b>Father Name:</b>\r\n                                              </td>\r\n                                              <td>{{nomHistory.fathrLastName}} {{nomHistory.fathrLastName}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                              <td>\r\n                                                <b>Address:</b>\r\n                                              </td>\r\n                                              <td></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                              <td>House No. {{nomHistory.houseNum}} {{nomHistory.cityName}},\r\n                                                {{nomHistory.countryName}}.</td>\r\n                                              <td></td>\r\n                                            </tr>\r\n                                          </table>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-sm-4\">\r\n                                        <div class=\"pt-1\">\r\n                                          <label>\r\n                                            <b>Credit Information:</b>\r\n                                          </label>\r\n                                        </div>\r\n                                        <div class=\"borderbox p-2 mnh-140\">\r\n                                          <table class=\"simpletale\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n                                            <tr>\r\n                                              <td width=\"70%\">\r\n                                                <b>Credit ID:</b>\r\n                                              </td>\r\n                                              <td>{{nomHistory.loanAppSeq}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                              <td width=\"70%\">\r\n                                                <b>Status:</b>\r\n                                              </td>\r\n                                              <td>{{nomHistory.status}}</td>\r\n                                            </tr>\r\n                                            <!-- <tr>\r\n                                              <td width=\"70%\">\r\n                                                <b>Disbursement Amount:</b>\r\n                                              </td>\r\n                                              <td>20,000</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                              <td width=\"70%\">\r\n                                                <b>Total #. of installment:</b>\r\n                                              </td>\r\n                                              <td>05</td>\r\n                                            </tr> -->\r\n                                          </table>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-sm-4\">\r\n                                        <div class=\"pt-1\">\r\n                                          <label>\r\n                                            <b>Branch Data:</b>\r\n                                          </label>\r\n                                        </div>\r\n                                        <div class=\"borderbox p-2 mnh-140\">\r\n                                          <table class=\"simpletale\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n                                            <tr>\r\n                                              <td width=\"40%\">\r\n                                                <b>Product ID:</b>\r\n                                              </td>\r\n                                              <td>{{nomHistory.prdSeq}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                              <td width=\"40%\">\r\n                                                <b>Product Name:</b>\r\n                                              </td>\r\n                                              <td>{{nomHistory.prdName}}</td>\r\n                                            </tr>\r\n                                          </table>\r\n                                        </div>\r\n                                      </div>\r\n                                      <!-- <div class=\"col-sm-6\">\r\n                                        <div class=\"pt-1\">\r\n                                          <label>\r\n                                            <b>Nominee Information:</b>\r\n                                          </label>\r\n                                        </div>\r\n                                        <div class=\"borderbox p-2 mnh-140\">\r\n                                          <table class=\"simpletale\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n                                            <tr>\r\n                                              <td>\r\n                                                <b>First Name:</b>\r\n                                              </td>\r\n                                              <td>{{nomHistory.nomFName}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                              <td>\r\n                                                <b>Last Name:</b>\r\n                                              </td>\r\n                                              <td>{{nomHistory.nomLName}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                              <td>\r\n                                                <b>Nominee Phone #:</b>\r\n                                              </td>\r\n                                              <td>{{nomHistory.nomPhone}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                              <td>\r\n                                                <b>Relation:</b>\r\n                                              </td>\r\n                                              <td>{{nomHistory.nomRel}}</td>\r\n                                            </tr>\r\n                                          </table>\r\n                                        </div>\r\n                                      </div> -->\r\n                                    </div>\r\n                                  </div>\r\n                                  <!-- <div class=\"col-sm-3 text-right\">\r\n                                    <div class=\"picswrap\">\r\n                                      <div class=\"borderpic\">\r\n                                        <img src=\"assets/images/client-pic.jpg\" alt=\"\">\r\n                                      </div>\r\n                                      <p class=\"mt-2 mb-1\">Robina Ashraf</p>\r\n                                      <div class=\"stars\">\r\n                                        <i class=\"fa fa-star\"></i>\r\n                                        <i class=\"fa fa-star\"></i>\r\n                                        <i class=\"fa fa-star\"></i>\r\n                                        <i class=\"fa fa-star\"></i>\r\n                                        <i class=\"fa fa-star\"></i>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div> -->\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"alert alert-warning mt-2 mb-2\" *ngIf=\"nomSeverinity == 1\">\r\n                              <i class=\"fa fa-exclamation-circle\"></i>\r\n                              <strong>This is a Backlisted Client.</strong>\r\n                            </div>\r\n\r\n                            <div class=\"alert alert-warning mt-2 mb-2\" *ngIf=\"nomSeverinity == 0\" style=\"color: #cb9500;\r\n                              background-color: #ffd9b2;\r\n                              border-color: #ea9600;\">\r\n                              <i class=\"fa fa-exclamation-circle\" style=\"color: #cb9500;\"></i>\r\n                              <strong>Warning.</strong>\r\n                            </div>\r\n\r\n                            <div class=\"alert alert-warning mt-2 mb-2\"\r\n                              *ngIf=\"hashistory && clientHistory.status != 'Completed'\" style=\"color: #cb9500;\r\n                              background-color: #ffd9b2;\r\n                              border-color: #ea9600;\">\r\n                              <i class=\"fa fa-exclamation-circle\" style=\"color: #cb9500;\"></i>\r\n                              <strong>Warning.</strong>\r\n                              <p>Active as {{nomHistory.title}} with Credit [{{nomHistory.loanAppSeq}}] Client ID\r\n                                [{{nomHistory.clientId}}] Client Name [{{nomHistory.firstName}}\r\n                                {{nomHistory.lastName}}]\r\n                                Status[{{nomHistory.status}}].</p>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"tab-pane fade\" id=\"tuctab\" role=\"tabpanel\" aria-labelledby=\"tuc-tab-tab\">\r\n                            <div class=\"container-fluid\" [style.display]=\"hasCobhistory ? 'block' : 'none'\">\r\n                              <div class=\"content\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-9\">\r\n                                    <div class=\"borderbox pb-0\">\r\n                                      <ul class=\"infolist mt-2 mb-2\">\r\n                                        <li>Branch:\r\n                                          <span> {{cobHistory.branch}}</span>\r\n                                        </li>\r\n                                        <li>Portfolio:\r\n                                          <span>Portfolio 5</span>\r\n                                        </li>\r\n                                        <li>BDO:\r\n                                          <span> {{cobHistory.portfolio}}</span>\r\n                                        </li>\r\n                                      </ul>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                      <div class=\"col-sm-4\">\r\n                                        <div class=\"pt-1\">\r\n                                          <label>\r\n                                            <b>{{cobHistory.title}} Information:</b>\r\n                                          </label>\r\n                                        </div>\r\n                                        <div class=\"borderbox p-2 mnh-140\">\r\n                                          <table class=\"simpletale\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n                                            <tr>\r\n                                              <td width=\"60%\">\r\n                                                <b>{{cobHistory.title}} ID:</b>\r\n                                              </td>\r\n                                              <td>{{cobHistory.clientId}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                              <td width=\"60%\">\r\n                                                <b>{{cobHistory.title}} Name: </b>\r\n                                              </td>\r\n                                              <td>{{cobHistory.firstName}} {{cobHistory.lastName}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                              <td width=\"60%\">\r\n                                                <b>Gender:</b>\r\n                                              </td>\r\n                                              <td>{{cobHistory.gender}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                              <td width=\"60%\">\r\n                                                <b>Father Name:</b>\r\n                                              </td>\r\n                                              <td>{{cobHistory.fathrLastName}} {{cobHistory.fathrLastName}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                              <td>\r\n                                                <b>Address:</b>\r\n                                              </td>\r\n                                              <td></td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                              <td>House No. {{cobHistory.houseNum}} {{cobHistory.city}},\r\n                                                {{cobHistory.country}}.</td>\r\n                                              <td></td>\r\n                                            </tr>\r\n                                          </table>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-sm-4\">\r\n                                        <div class=\"pt-1\">\r\n                                          <label>\r\n                                            <b>Credit Information:</b>\r\n                                          </label>\r\n                                        </div>\r\n                                        <div class=\"borderbox p-2 mnh-140\">\r\n                                          <table class=\"simpletale\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n                                            <tr>\r\n                                              <td width=\"70%\">\r\n                                                <b>Credit ID:</b>\r\n                                              </td>\r\n                                              <td>{{cobHistory.loanAppSeq}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                              <td width=\"70%\">\r\n                                                <b>Status:</b>\r\n                                              </td>\r\n                                              <td>{{cobHistory.status}}</td>\r\n                                            </tr>\r\n                                            <!-- <tr>\r\n                                              <td width=\"70%\">\r\n                                                <b>Disbursement Date:</b>\r\n                                              </td>\r\n                                              <td>2/7/2018</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                              <td width=\"70%\">\r\n                                                <b>Disbursement Amount:</b>\r\n                                              </td>\r\n                                              <td>20,000</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                              <td width=\"70%\">\r\n                                                <b>Total #. of installment:</b>\r\n                                              </td>\r\n                                              <td>05</td>\r\n                                            </tr> -->\r\n                                          </table>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"col-sm-4\">\r\n                                        <div class=\"pt-1\">\r\n                                          <label>\r\n                                            <b>Product:</b>\r\n                                          </label>\r\n                                        </div>\r\n                                        <div class=\"borderbox p-2 mnh-140\">\r\n                                          <table class=\"simpletale\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n                                            <tr>\r\n                                              <td width=\"40%\">\r\n                                                <b>Product ID:</b>\r\n                                              </td>\r\n                                              <td>{{cobHistory.prdSeq}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                              <td width=\"40%\">\r\n                                                <b>Product Name:</b>\r\n                                              </td>\r\n                                              <td>{{cobHistory.prdName}}</td>\r\n                                            </tr>\r\n                                          </table>\r\n                                        </div>\r\n                                      </div>\r\n                                      <!-- <div class=\"col-sm-6\">\r\n                                        <div class=\"pt-1\">\r\n                                          <label>\r\n                                            <b>Co-Borrower Information:</b>\r\n                                          </label>\r\n                                        </div>\r\n                                        <div class=\"borderbox p-2 mnh-140\">\r\n                                          <table class=\"simpletale\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\r\n                                            <tr>\r\n                                              <td>\r\n                                                <b>First Name:</b>\r\n                                              </td>\r\n                                              <td>{{cobHistory.nomFName}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                              <td>\r\n                                                <b>Last Name:</b>\r\n                                              </td>\r\n                                              <td>{{cobHistory.nomLName}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                              <td>\r\n                                                <b>Phone #:</b>\r\n                                              </td>\r\n                                              <td>{{cobHistory.nomPhone}}</td>\r\n                                            </tr>\r\n                                            <tr>\r\n                                              <td>\r\n                                                <b>Relation:</b>\r\n                                              </td>\r\n                                              <td>{{cobHistory.nomRel}}</td>\r\n                                            </tr>\r\n                                          </table>\r\n                                        </div>\r\n                                      </div> -->\r\n                                    </div>\r\n                                  </div>\r\n                                  <!-- <div class=\"col-sm-3 text-right\">\r\n                                    <div class=\"picswrap\">\r\n                                      <div class=\"borderpic\">\r\n                                        <img src=\"assets/images/client-pic.jpg\" alt=\"\">\r\n                                      </div>\r\n                                      <p class=\"mt-2 mb-1\">Robina Ashraf</p>\r\n                                      <div class=\"stars\">\r\n                                        <i class=\"fa fa-star\"></i>\r\n                                        <i class=\"fa fa-star\"></i>\r\n                                        <i class=\"fa fa-star\"></i>\r\n                                        <i class=\"fa fa-star\"></i>\r\n                                        <i class=\"fa fa-star\"></i>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div> -->\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"alert alert-warning mt-2 mb-2\" *ngIf=\"cobSeverinity == 1\">\r\n                              <i class=\"fa fa-exclamation-circle\"></i>\r\n                              <strong>This is a Backlisted Client.</strong>\r\n                            </div>\r\n\r\n                            <div class=\"alert alert-warning mt-2 mb-2\" *ngIf=\"cobSeverinity == 0\" style=\"color: #cb9500;\r\n                              background-color: #ffd9b2;\r\n                              border-color: #ea9600;\">\r\n                              <i class=\"fa fa-exclamation-circle\" style=\"color: #cb9500;\"></i>\r\n                              <strong>Warning.</strong>\r\n                            </div>\r\n\r\n                            <div class=\"alert alert-warning mt-2 mb-2\"\r\n                              *ngIf=\"hashistory && clientHistory.status != 'Completed'\" style=\"color: #cb9500;\r\n                              background-color: #ffd9b2;\r\n                              border-color: #ea9600;\">\r\n                              <i class=\"fa fa-exclamation-circle\" style=\"color: #cb9500;\"></i>\r\n                              <strong>Warning.</strong>\r\n                              <p>Active as {{cobHistory.title}} with Credit [{{cobHistory.loanAppSeq}}] Client ID\r\n                                [{{cobHistory.clientId}}] Client Name [{{cobHistory.firstName}}\r\n                                {{cobHistory.lastName}}]\r\n                                Status[{{cobHistory.status}}].</p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"cRow mb-2\">\r\n                        <button (click)=\"createNewLoan()\" type=\"button\" [disabled]=\"!isValid\"\r\n                          class=\"btn btn-primary btn-small btn-min\">Continue\r\n                          with Credit Application</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-small btn-min\"\r\n                          data-dismiss=\"modal\">Cancel</button>\r\n                      </div>\r\n                    </div>\r\n                    <!-- <div class=\"modal-header\">\r\n                      <h5 class=\"modal-title\">Verification</h5>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                      <h6 class=\"colorBlack mt-1 mb-0 small\"> </h6>\r\n                      <div class=\"cRow\">\r\n                        <div class=\"cCol3\">\r\n                          <mat-form-field>\r\n                            <input type=\"text\" required pattern=\"\\d*\" maxlength=\"13\" id=\"cnicNum\" name=\"cnicNum\" matInput placeholder=\"CNIC\" [(ngModel)]=\"model.cnicNum\">\r\n                          </mat-form-field>\r\n                        </div>\r\n                        <div class=\"cCol1\">\r\n                          <mat-form-field>\r\n                            <input matInput required name=\"Expiry\" max=\"{{maxDate}}\" min=\"{{date}}\" id=\"cnicExpryDate\" [(ngModel)]=\"model.expiryDate\"\r\n                              placeholder=\"CNIC Expiry Date\" [matDatepicker]=\"picker1\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                            <mat-datepicker startView=\"multi-year\" required #picker1 disabled=\"false\"></mat-datepicker>\r\n                          </mat-form-field>\r\n                        </div>\r\n                        <div class=\"cCol1 \">\r\n                          <button type=\"submit\" [disabled]=\"!addNewLoanForm.form.valid\" class=\"btn btn-primary btn-small btn-min\">Validate with Kashf</button>\r\n                        </div>\r\n\r\n                      </div>\r\n                      <div [style.display]=\"hashistory ? 'block' : 'none'\">\r\n                        <div class=\"pt-1 pb-1\">\r\n                          <div>\r\n                            <label>Client Name:\r\n                              <span class=\"colorBlue\">{{applicantHistory.firstName}} {{applicantHistory.lastName}}</span>\r\n                            </label>\r\n                          </div>\r\n                          <div>\r\n                            <label>Client ID:\r\n                              <span class=\"colorBlue\">{{applicantHistory.clientSeq}}</span>\r\n                            </label>\r\n                          </div>\r\n                          <div>\r\n                            <label>Address:\r\n                              <span class=\"colorBlue\">{{applicantHistory.houseNum}} {{applicantHistory.sreet_area}}, Pakistan.</span>\r\n                            </label>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"table-responsive\">\r\n                          <table class=\"table\">\r\n                            <thead class=\"thead-light\">\r\n                              <tr>\r\n                                <th>Credit ID</th>\r\n                                <th>Disbursement Date</th>\r\n                                <th>Disbursement Amount</th>\r\n                                <th>Paid Amount</th>\r\n                                <th>Status</th>\r\n                                <th>Installment (OD)</th>\r\n                              </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                              <tr *ngFor=\"let app of oldApplicants\">\r\n                                <td>\r\n                                  <a>{{app.clientSeq}}</a>\r\n                                </td>\r\n                                <td>6/01/2018</td>\r\n                                <td>25000</td>\r\n                                <td>20,000</td>\r\n                                <td class=\"colorGreen\">{{app.status}}</td>\r\n                                <td>0</td>\r\n                              </tr>\r\n                            </tbody>\r\n                          </table>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"cRow mb-2\">\r\n                        <button (click)=\"createNewLoan()\" type=\"button\" [disabled]=\"!isValid\" class=\"btn btn-primary btn-small btn-min\">Continue with Credit Application</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-small btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                      </div>\r\n                    </div> -->\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- <mat-form-field>\r\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n          </mat-form-field> -->\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\" mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n              <!-- Position Column -->\r\n              <ng-container matColumnDef=\"firstName\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n                <td mat-cell *matCellDef=\"let loan\" style=\"padding-left: 8px;\">\r\n                  <a (click)=\"clientHistoryScreen(loan)\">\r\n                    <span style=\"margin-left: 5px;\">{{loan.firstName}} {{loan.lastName}}</span>\r\n                  </a>\r\n              </ng-container>\r\n\r\n              <!-- Name Column -->\r\n              <ng-container matColumnDef=\"loanAppId\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Client ID / Credit ID </th>\r\n                <td mat-cell *matCellDef=\"let loan\">\r\n                  <!-- <a class=\"userImg\" (click)=\"editLoan(loan)\">\r\n                    <span style=\"margin-left: 5px;\">{{loan.loanAppId}} </span>\r\n                  </a> -->\r\n                  {{loan.clientId}} /\r\n                  <a class=\"userImg\" (click)=\"editLoan(loan, false)\"\r\n                    *ngIf=\" ((loan.loanAppStatus != 'Submitted' && loan.loanAppStatus != 'SUBMITTED') || auth.role =='bm') && (loan.loanAppStatus != 'Completed' && loan.loanAppStatus != 'COMPLETED') && (loan.loanAppStatus != 'Approved' && loan.loanAppStatus != 'APPROVED') && (loan.loanAppStatus != 'Rejected' && loan.loanAppStatus != 'REJECTED') && (loan.loanAppStatus != 'Discarded' && loan.loanAppStatus != 'DISCARDED') && (loan.loanAppStatus != 'Deferred' && loan.loanAppStatus != 'DEFERRED')  && (loan.loanAppStatus != 'Active' && loan.loanAppStatus != 'ACTIVE') && (loan.loanAppStatus != 'ADVANCE' && loan.loanAppStatus != 'Advance')\">\r\n                    <span style=\"margin-left: 5px;\">{{loan.loanAppId}}</span>\r\n                  </a>\r\n                  <a class=\"userImg\" (click)=\"editLoan(loan, true)\"\r\n                    *ngIf=\" !(((loan.loanAppStatus != 'Submitted' && loan.loanAppStatus != 'SUBMITTED') || auth.role =='bm') && (loan.loanAppStatus != 'Completed' && loan.loanAppStatus != 'COMPLETED') && (loan.loanAppStatus != 'Approved' && loan.loanAppStatus != 'APPROVED') && (loan.loanAppStatus != 'Rejected' && loan.loanAppStatus != 'REJECTED') && (loan.loanAppStatus != 'Discarded' && loan.loanAppStatus != 'DISCARDED') && (loan.loanAppStatus != 'Deferred' && loan.loanAppStatus != 'DEFERRED') && (loan.loanAppStatus != 'Active' && loan.loanAppStatus != 'ACTIVE') && (loan.loanAppStatus != 'ADVANCE' && loan.loanAppStatus != 'Advance'))\">\r\n                    <span style=\"margin-left: 5px;\">{{loan.loanAppId}}</span>\r\n                  </a>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <!-- Weight Column -->\r\n              <ng-container matColumnDef=\"addressString\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Address </th>\r\n                <td style=\" max-width: 10%; \" mat-cell *matCellDef=\"let loan\" class=\"w-20\"> {{loan.addressString}} </td>\r\n              </ng-container>\r\n\r\n              <!-- Symbol Column -->\r\n              <ng-container matColumnDef=\"loanAppStatus\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\r\n                <td mat-cell *matCellDef=\"let loan\"> <span class=\"{{loan.loanAppStatus}}\">{{loan.loanAppStatus}}</span>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"stsDate\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n                <td mat-cell *matCellDef=\"let loan\"> {{loan.stsDate | date:'dd-MM-yyyy'}} </td>\r\n              </ng-container>\r\n              <ng-container matColumnDef=\"prdNm\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Product Name </th>\r\n                <td mat-cell *matCellDef=\"let loan\"> {{loan.prdNm}} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"recAmount\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Rec./App Amount </th>\r\n                <td mat-cell *matCellDef=\"let loan\"> {{loan.recAmount | currency:'PKR':''}} / {{loan.aprAmount |\r\n                  currency:'PKR':''}} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"empNm\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> BDO Name </th>\r\n                <td mat-cell *matCellDef=\"let loan\"> {{loan.empNm}} </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"action\">\r\n                <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                <td mat-cell *matCellDef=\"let loan\"> <a (click)=\"associateLoan(loan)\" class=\"iconBtn\"\r\n                    *ngIf=\"(loan.assocPrdCount>0) && ((loan.loanAppStatus == 'Active' || loan.loanAppStatus == 'ACTIVE' || loan.loanAppStatus == 'active') && auth.role =='bm')\">\r\n                    <img src=\"assets/images/rsgrey-icon.png\" alt=\"\" style=\"width: 18px;\"></a>\r\n\r\n                  <a (click)=\"editLoan(loan)\" class=\"iconBtn\"\r\n                    *ngIf=\"auth.role !='bm' && ((loan.loanAppStatus != 'Submitted' && loan.loanAppStatus != 'SUBMITTED') || auth.role =='bm') && (loan.loanAppStatus != 'Completed' && loan.loanAppStatus != 'COMPLETED') && (loan.loanAppStatus != 'Approved' && loan.loanAppStatus != 'APPROVED') && (loan.loanAppStatus != 'Rejected' && loan.loanAppStatus != 'REJECTED') && (loan.loanAppStatus != 'Discarded' && loan.loanAppStatus != 'DISCARDED') && (loan.loanAppStatus != 'Deferred' && loan.loanAppStatus != 'DEFERRED') && (loan.loanAppStatus != 'Active' && loan.loanAppStatus != 'ACTIVE')  && (loan.loanAppStatus != 'Advance' && loan.loanAppStatus != 'ADVANCE')\">\r\n                    <i class=\"fa fa-pencil\"></i>\r\n                  </a>\r\n                  <a class=\"iconBtn\"\r\n                    *ngIf=\"auth.role !='bm' && ((loan.loanAppStatus == 'Active' || loan.loanAppStatus == 'ACTIVE' || loan.loanAppStatus == 'active') && auth.role =='bm')\">\r\n                    <img src=\"assets/images/rsgrey-icon.png\" alt=\"\"></a>\r\n                  <a (click)=\"deleteLoan(loan)\" class=\"iconBtn delBtn\"\r\n                    *ngIf=\" auth.role !='bm' && (loan.loanAppStatus != 'Submitted' && loan.loanAppStatus != 'SUBMITTED') && (loan.loanAppStatus != 'Completed' && loan.loanAppStatus != 'COMPLETED') && (loan.loanAppStatus != 'Approved' && loan.loanAppStatus != 'APPROVED') && (loan.loanAppStatus != 'Rejected' && loan.loanAppStatus != 'REJECTED') && (loan.loanAppStatus != 'Discarded' && loan.loanAppStatus != 'DISCARDED') && (loan.loanAppStatus != 'Deferred' && loan.loanAppStatus != 'DEFERRED') && (loan.loanAppStatus != 'Active' && loan.loanAppStatus != 'ACTIVE') && (loan.loanAppStatus != 'Need More Clarification' && loan.loanAppStatus != 'NEED MORE CLARIFICATION') && (loan.loanAppStatus != 'Advance' && loan.loanAppStatus != 'ADVANCE')\">\r\n                    <i class=\"fa fa-trash-o\"></i>\r\n                  </a>\r\n                  <a *ngIf=\"loan.paidInst==0 && auth.role=='admin'  && ((loan.loanAppStatus == 'Active' || loan.loanAppStatus == 'ACTIVE') || (loan.loanAppStatus == 'Advance' || loan.loanAppStatus == 'ADVANCE'))\"\r\n                    matTooltip=\"text\" data-toggle=\"modal\" (click)=\"disgardApp(loan)\" class=\"iconBtn delBtn \"\r\n                    title=\"Deffer Application\"><img alt=\"\"><i _ngcontent-c19=\"\" class=\"fa fa-undo\"></i></a>\r\n                  <!-- src=\"assets/images/crose-icon.png\" (auth.role=='am' || auth.role=='admin') && -->\r\n\r\n                  <!-- <a *ngIf=\"auth.role=='bm'  &&(loan.loanAppStatus == 'Active' || loan.loanAppStatus == 'ACTIVE')\"\r\n                    (click)=\"reSchedule(loan)\" class=\"iconBtn\" data-toggle=\"tooltip\" title=\"Credit Rescheduling\"><img\r\n                      src=\"assets/images/icon7.png\" alt=\"\"></a> -->\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\" class=\"thead-light thead-blue\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n            <mat-paginator [length]=\"datalength\" [pageSizeOptions]=\"[10, 15, 20]\"></mat-paginator>\r\n          </div>\r\n          <!-- <div class=\"table-responsive\">\r\n            <table class=\"table record\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>Name\r\n                  </th>\r\n                  <th>ID\r\n                  </th>\r\n                  <th>Address\r\n                  </th>\r\n                  <th width=\"9%\">Status\r\n                  </th>\r\n                  <th width=\"10%\">Date\r\n                  </th>\r\n                  <th width=\"15%\">Product Name</th>\r\n                  <th width=\"12%\">Rec./App Amount</th>\r\n                  <th width=\"11%\" *ngIf=\"auth.role =='bm'\" style=\"text-align: right;\">Portfolio\r\n                  </th>\r\n                  <th width=\"6%\">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let loan of pagedItems\">\r\n                  <td width=\"12%\">\r\n                    <a class=\"userImg\" (click)=\"editLoan(loan)\" *ngIf=\" ((loan.loanAppStatus != 'Submitted' && loan.loanAppStatus != 'SUBMITTED') || auth.role =='bm') && (loan.loanAppStatus != 'Completed' && loan.loanAppStatus != 'COMPLETED') && (loan.loanAppStatus != 'Approved' && loan.loanAppStatus != 'APPROVED') && (loan.loanAppStatus != 'Rejected' && loan.loanAppStatus != 'REJECTED') && (loan.loanAppStatus != 'Active' && loan.loanAppStatus != 'ACTIVE')\">\r\n                      <img src=\"assets/images/user_img.png\" alt=\"\">\r\n                      <span>{{loan.firstName}} {{loan.lastName}}</span>\r\n                    </a>\r\n                    <a class=\"userImg\" *ngIf=\" !(((loan.loanAppStatus != 'Submitted' && loan.loanAppStatus != 'SUBMITTED') || auth.role =='bm') && (loan.loanAppStatus != 'Completed' && loan.loanAppStatus != 'COMPLETED') && (loan.loanAppStatus != 'Approved' && loan.loanAppStatus != 'APPROVED') && (loan.loanAppStatus != 'Rejected' && loan.loanAppStatus != 'REJECTED') && (loan.loanAppStatus != 'Active' && loan.loanAppStatus != 'ACTIVE'))\">\r\n                      <img src=\"assets/images/user_img.png\" alt=\"\">\r\n                      <span>{{loan.firstName}} {{loan.lastName}}</span>\r\n                    </a>\r\n                  </td>\r\n                  <td>{{loan.loanAppId}}</td>\r\n                  <td>House No. {{loan.house_num}}, {{loan.street}}, {{loan.cmntyNm}}, {{loan.village}},\r\n                    {{loan.other_detail}}.</td>\r\n                  <td class=\"{{loan.loanAppStatus}}\">{{loan.loanAppStatus}}</td>\r\n                  <td>{{loan.stsDate | date:'dd-MM-yyyy'}}</td>\r\n                  <td>{{loan.prdNm}}</td>\r\n                  <td>{{loan.recAmount | currency:'PKR':''}} / {{loan.aprAmount | currency:'PKR':''}}</td>\r\n                  <td *ngIf=\"auth.role =='bm'\" style=\"text-align: right;\">{{loan.portfolio}}</td>\r\n                  <td *ngIf=\"auth.role =='bm'\">\r\n                    <a (click)=\"associateLoan(loan)\" class=\"iconBtn\" *ngIf=\"((loan.loanAppStatus == 'Active' || loan.loanAppStatus == 'ACTIVE' || loan.loanAppStatus == 'active') && auth.role =='bm')\">\r\n                      <img src=\"assets/images/rsgrey-icon.png\" alt=\"\" style=\"width: 18px;\"></a>\r\n                  </td>\r\n                  <td *ngIf=\"auth.role !='bm'\">\r\n                    <a (click)=\"editLoan(loan)\" class=\"iconBtn\" *ngIf=\" ((loan.loanAppStatus != 'Submitted' && loan.loanAppStatus != 'SUBMITTED') || auth.role =='bm') && (loan.loanAppStatus != 'Completed' && loan.loanAppStatus != 'COMPLETED') && (loan.loanAppStatus != 'Approved' && loan.loanAppStatus != 'APPROVED') && (loan.loanAppStatus != 'Rejected' && loan.loanAppStatus != 'REJECTED') && (loan.loanAppStatus != 'Active' && loan.loanAppStatus != 'ACTIVE')\">\r\n                      <i class=\"fa fa-pencil\"></i>\r\n                    </a>\r\n                    <a class=\"iconBtn\" *ngIf=\"((loan.loanAppStatus == 'Active' || loan.loanAppStatus == 'ACTIVE' || loan.loanAppStatus == 'active') && auth.role =='bm')\">\r\n                      <img src=\"assets/images/rsgrey-icon.png\" alt=\"\"></a>\r\n                    <a (click)=\"deleteLoan(loan)\" class=\"iconBtn delBtn\" *ngIf=\"(loan.loanAppStatus != 'Submitted' && loan.loanAppStatus != 'SUBMITTED') && (loan.loanAppStatus != 'Completed' && loan.loanAppStatus != 'COMPLETED') && (loan.loanAppStatus != 'Approved' && loan.loanAppStatus != 'APPROVED') && (loan.loanAppStatus != 'Rejected' && loan.loanAppStatus != 'REJECTED') && (loan.loanAppStatus != 'Active' && loan.loanAppStatus != 'ACTIVE') && (loan.loanAppStatus != 'Need More Clarification' && loan.loanAppStatus != 'NEED MORE CLARIFICATION')\">\r\n                      <i class=\"fa fa-trash-o\"></i>\r\n                    </a>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <nav aria-label=\"Page navigation \" >\r\n            <ul class=\"pagination justify-content-center\" *ngIf=\"pager.pages && pager.pages.length\">\r\n              <li class=\"page-item disabled\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n              </li>\r\n              <li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                <a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n              </li>\r\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n              </li>\r\n            </ul>\r\n          </nav> -->\r\n          <!-- <nav aria-label=\"Page navigation\">\r\n              <ul class=\"pagination justify-content-center\">\r\n                <li class=\"page-item disabled\"> <a class=\"page-link\"  tabindex=\"-1\">Previous</a> </li>\r\n                <li class=\"page-item active\"><a class=\"page-link\" >1</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" >2</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" >3</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" >4</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" >5</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" >6</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" >7</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" >8</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" >9</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" >10</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" >11</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" >12</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" >13</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" >14</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" >15</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" >16</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" >17</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" >18</a></li>\r\n                <li class=\"page-item\"><a class=\"page-link\" >19</a></li>\r\n                <li class=\"page-item\"> <a class=\"page-link\" >Next</a> </li>\r\n              </ul>\r\n            </nav> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal fade\" id=\"associateProductModel\" role=\"dialog\">\r\n      <div class=\"modal-dialog mymodal\">\r\n\r\n        <!-- Modal content-->\r\n        <form (ngSubmit)=\"onAssocProductSubmit()\" #secondaryIncomeForm=\"ngForm\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\">Associate Credit</h5>\r\n            </div>\r\n            <div class=\"modal-body text-left\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-2\">\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  <mat-form-field>\r\n                    <!-- [(ngModel)]=\"secondaryIncome.incomeTypeKey\" -->\r\n                    <mat-select placeholder=\"Associate Products\" (selectionChange)=\"onAssocProductSelect($event.value)\"\r\n                      [(ngModel)]=\"assocProductSeq\" pattern=\"^[1-9]\\d*$\" name=\"residence\" required>\r\n                      <mat-option *ngFor=\"let edu of assocProducts\" [value]=\"edu.productSeq\">\r\n                        {{edu.productName}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                  <mat-form-field>\r\n                    <!-- [(ngModel)]=\"assocApprovedAmount\" #secondryIncomeAmount=\"assocApprovedAmount\" -->\r\n                    <input matInput type=\"text\" pattern=\"\\d*\" min=\"0\" maxlength=\"7\" required id=\"assocApprovedAmount\"\r\n                      name=\"assocApprovedAmount\" [errorStateMatcher]=\"matcher\" (keypress)=\"onlyNumbers($event)\"\r\n                      placeholder=\"Approved Amount\" [(ngModel)]=\"assocApprovedAmount\">\r\n\r\n                    <mat-hint\r\n                      *ngIf=\"assocApprovedAmount<=selectedAssocProduct.maxAmount && assocApprovedAmount>=selectedAssocProduct.minAmount\">\r\n                      {{selectedAssocProduct.minAmount}}\r\n                      =< Approved Amount <={{selectedAssocProduct.maxAmount}} </mat-hint>\r\n                        <mat-hint *ngIf=\"assocApprovedAmount > selectedAssocProduct.maxAmount\" style=\"color: red;\">Max\r\n                          Amount is\r\n                          <strong>{{selectedAssocProduct.maxAmount}}</strong>\r\n                        </mat-hint>\r\n                        <mat-hint *ngIf=\"assocApprovedAmount < selectedAssocProduct.minAmount\" style=\"color: red;\">Min\r\n                          Amount is\r\n                          <strong>{{selectedAssocProduct.minAmount}}</strong>\r\n                        </mat-hint>\r\n                        <!-- <mat-hint *ngIf=\"model.approvedAmount>model.reqAmount\" style=\"color: red;\">Cannot exceed Requested\r\n                      Amount\r\n                      <strong>{{product.reqAmount}}</strong>\r\n                    </mat-hint> -->\r\n                        <!-- <mat-error *ngIf=\"secondryIncomeAmount.invalid\">\r\n                        secondary income is\r\n                        <strong>invalid</strong>\r\n                      </mat-error> -->\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-footer text-center\">\r\n              <button appNoDblClick type=\"button\" (click)=\"onAssocProductSubmit()\" class=\"btn btn-primary btn-min\"\r\n                [disabled]=\"!secondaryIncomeForm.form.valid\">Ok</button>\r\n              <button type=\"button\" class=\"btn btn-primary btn-min\" (click)=\"cancelClicked()\"\r\n                data-dismiss=\"modal\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal fade\" id=\"deleteConfirmation\" role=\"dialog\">\r\n      <div class=\"modal-dialog mymodal\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\">Delete Credit</h5>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n\r\n            <div class=\"table-responsive\">\r\n              <h6>Do you want to Discard application?</h6>\r\n            </div>\r\n\r\n\r\n            <div class=\"modal-footer smmodal-footer text-center\">\r\n              <button type=\"button\" (click)=\"confirmDelete()\" class=\"btn btn-primary btn-min\">Yes</button>\r\n              <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">No</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"modal fade\" id=\"disgardApp\" role=\"dialog\">\r\n    <div class=\"modal-dialog mymodal\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">Defer Application</h5>\r\n        </div>\r\n        <form class=\"md-float-material\" [formGroup]=\"disgardForm\" (ngSubmit)=\"onSubmitDisgardApp()\">\r\n          <input type=\"hidden\" formControlName=\"loanAppSeq\" />\r\n          <div class=\"modal-body\">\r\n            <div class=\"cRow\">\r\n              <div class=\"cCol6\">\r\n                <mat-form-field>\r\n                  <input matInput required formControlName=\"cmnt\" placeholder=\"Remarks:\" />\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer text-center\">\r\n            <button appNoDblClick type=\"button\" (click)=\"onSubmitDisgardApp()\" class=\"btn btn-primary\">Ok</button>\r\n            <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal fade\" id=\"reSchedule\" role=\"dialog\">\r\n    <div class=\"modal-dialog big mymodal\">\r\n\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">Credit Rescheduling</h5>\r\n        </div>\r\n        <form [formGroup]=\"reScheduleForm\" (ngSubmit)=\"submitReschedule()\">\r\n          <div class=\"modal-body\">\r\n            <div class=\"cRow mt-2\">\r\n              <div class=\"cCol3-col\">\r\n\r\n                <mat-form-field>\r\n                  <mat-select (selectionChange)=\"rescheduleMethodChange($event)\" placeholder=\"Select Method\"\r\n                    name=\"method\" formControlName=\"methdSeq\" required>\r\n                    <!-- <mat-option value=\"1\">Method A (Without Charges)</mat-option> -->\r\n                    <mat-option value=\"2\">Method B (With Charges)</mat-option>\r\n                    <mat-option value=\"3\">Method C (With KSZB Charges & Accrural Service Charge)</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <input type=\"hidden\" formControlName=\"clntSeq\" />\r\n              <!-- <div class=\"cCol3-col\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" matInput placeholder=\"Client Id:\" formControlName=\"clntId\">\r\n                </mat-form-field>\r\n              </div> -->\r\n              <!-- <div class=\"cCol3-col\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" matInput placeholder=\"Credit Seq:\" formControlName=\"loanAppSeq\">\r\n                </mat-form-field>\r\n              </div> -->\r\n              <!-- <div class=\"cCol3-col\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" matInput placeholder=\"Client:\" formControlName=\"clntNm\">\r\n                </mat-form-field>\r\n              </div> -->\r\n\r\n              <div class=\"cCol3-col\">\r\n                <!-- <mat-form-field>\r\n                  <input type=\"number\" matInput placeholder=\"Days add to Payment Schedule\" formControlName=\"days\">\r\n                </mat-form-field> -->\r\n\r\n                <mat-form-field>\r\n                  <mat-select (selectionChange)=\"rescheduleMonthChange($event)\" placeholder=\"Select Duration\"\r\n                    name=\"duration\" required formControlName=\"perd\">\r\n                    <mat-option value=\"1\">1 Month</mat-option>\r\n                    <mat-option value=\"2\">2 Month</mat-option>\r\n                    <mat-option value=\"3\">3 Month</mat-option>\r\n                    <mat-option value=\"4\">4 Month</mat-option>\r\n                    <mat-option value=\"5\">5 Month</mat-option>\r\n                    <mat-option value=\"6\">6 Month</mat-option>\r\n                    <mat-option value=\"7\">7 Month</mat-option>\r\n                    <mat-option value=\"8\">8 Month</mat-option>\r\n                    <mat-option value=\"9\">9 Month</mat-option>\r\n                    <mat-option value=\"10\">10 Month</mat-option>\r\n                    <mat-option value=\"11\">11 Month</mat-option>\r\n                    <mat-option value=\"12\">12 Month</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"cCol3-col\">\r\n\r\n                <mat-form-field>\r\n                  <mat-select formControlName=\"rsnKey\" placeholder=\"Reason\" pattern=\"^[1-9]\\d*$\">\r\n                    <mat-option *ngFor=\"let edu of reasonForRescheduling\" [value]=\"edu.codeKey\">\r\n                      {{edu.codeValue}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n\r\n              </div>\r\n\r\n              <div class=\"cCol3-col\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" matInput placeholder=\"Comments:\" formControlName=\"cmnt\">\r\n                </mat-form-field>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"modal-footer text-center\">\r\n            <button type=\"button\" [disabled]=\"!reScheduleForm.valid\" appNoDblClick (click)=\"submitReschedule()\"\r\n              class=\"btn btn-primary btn-min\">OK</button>\r\n            <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/loan-origination/landing/landing.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/loan-origination/landing/landing.component.ts ***!
  \*********************************************************************/
/*! exports provided: MY_FORMATS, LandingComponent, FilterDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterDto", function() { return FilterDto; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_LoanApplicant_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/LoanApplicant.model */ "./src/app/shared/models/LoanApplicant.model.ts");
/* harmony import */ var _shared_services_loan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/loan.service */ "./src/app/shared/services/loan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_models_History_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/models/History.model */ "./src/app/shared/models/History.model.ts");
/* harmony import */ var _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/helpers/MyErrorStateMatcher.helper */ "./src/app/shared/helpers/MyErrorStateMatcher.helper.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_models_CNICPattern_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/models/CNICPattern.model */ "./src/app/shared/models/CNICPattern.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/models/REF_CODE_GRP_KEYS.mocks */ "./src/app/shared/models/REF_CODE_GRP_KEYS.mocks.ts");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var src_app_shared_models_LoanProduct_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/models/LoanProduct.model */ "./src/app/shared/models/LoanProduct.model.ts");
/* harmony import */ var src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/services/recovery.service */ "./src/app/shared/services/recovery.service.ts");
/* harmony import */ var src_app_shared_services_loan_servicing_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/services/loan-servicing.service */ "./src/app/shared/services/loan-servicing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var moment = moment__WEBPACK_IMPORTED_MODULE_18__;
var MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'DD-MM-YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
var LandingComponent = /** @class */ (function () {
    function LandingComponent(loanService, loanServicingService, dataService, router, spinner, fb, recoveryService, toaster, commonService) {
        this.loanService = loanService;
        this.loanServicingService = loanServicingService;
        this.dataService = dataService;
        this.router = router;
        this.spinner = spinner;
        this.fb = fb;
        this.recoveryService = recoveryService;
        this.toaster = toaster;
        this.commonService = commonService;
        this.searchVal = "";
        this.onBranchSelection = false;
        this.filterValue = "";
        this.model = new _shared_models_LoanApplicant_model__WEBPACK_IMPORTED_MODULE_1__["LoanApplicant"]();
        this.matcher = new _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_9__["MyErrorStateMatcher"]();
        this.allItems = [];
        // pager object
        this.pager = {};
        // paged items
        this.pagedItems = [];
        this.brnchs = [];
        this.displayedColumns = [];
        this.oldApplicants = [];
        this.applicantHistory = new _shared_models_LoanApplicant_model__WEBPACK_IMPORTED_MODULE_1__["LoanApplicant"]();
        this.clientHistory = new _shared_models_History_model__WEBPACK_IMPORTED_MODULE_8__["History"]();
        this.tag = new Object();
        this.severinity = 2;
        this.nomSeverinity = 2;
        this.cobSeverinity = 2;
        this.nomHistory = new _shared_models_History_model__WEBPACK_IMPORTED_MODULE_8__["History"]();
        this.cobHistory = new _shared_models_History_model__WEBPACK_IMPORTED_MODULE_8__["History"]();
        this.hasNomhistory = false;
        this.hasCobhistory = false;
        this.loans = [];
        this.showFields = false;
        this.datalength = 0;
        this.lastPageIndex = 0;
        // FILTERS
        this.filters = [];
        this.genderSelected = '';
        this.portSeq = 0;
        this.cnicPatternObj = new _shared_models_CNICPattern_model__WEBPACK_IMPORTED_MODULE_12__["CNICPattern"]();
        this.assocApprovedAmount = 0;
        this.assocProducts = [];
        this.assocProductSeq = null;
        this.selectedAssocProduct = new src_app_shared_models_LoanProduct_model__WEBPACK_IMPORTED_MODULE_19__["LoanProduct"]();
        this.now = new Date();
        this.now.setDate((this.now.getDate() + 1));
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
        this.maxDate = (year + 100) + '-' + month + '-' + day;
        this.branchForm = this.fb.group({
            branch: null,
        });
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
        this.reScheduleForm = this.fb.group({
            methdSeq: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            // clntId: ['', Validators.required],
            clntSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            // clntNm: ['', Validators.required],
            loanAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            perd: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            days: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            rsnKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            cmnt: ['']
        });
    }
    LandingComponent.prototype.applyFilter = function (filterValue) {
        // console.log(filterValue)
        // console.log(filterValue.trim().toLowerCase().length)
        this.filterValue = filterValue;
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableDataSource"](this.dataBeforeFilter);
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
    LandingComponent.prototype.searchValue = function () {
        this.filterValue = this.searchVal.trim();
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            // this.dataSource.sort = this.sort;
            this.datalength = this.countBeforeFilter;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            console.log(this.dataSource);
            return;
        }
    };
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth = JSON.parse(sessionStorage.getItem("auth"));
        if (this.auth.role == 'bm' || this.auth.role == 'ho') {
            this.displayedColumns = ['firstName', 'loanAppId', 'addressString', 'loanAppStatus', 'stsDate', 'prdNm', 'recAmount', 'empNm', 'action'];
        }
        else {
            this.displayedColumns = ['firstName', 'loanAppId', 'addressString', 'loanAppStatus', 'stsDate', 'prdNm', 'recAmount', 'action'];
        }
        this.loadLovs();
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RoutesRecognized"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["pairwise"])()).subscribe(function (e) {
            console.log(e[0].urlAfterRedirects); // previous url
        });
        this.filterDto = new FilterDto(this.auth.user.username);
        this.disgardForm = this.fb.group({
            loanAppSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            cmnt: [''],
        });
        this.commonService.getValues(_shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_14__["RELATION_WITH_RESCHEDULING"]).subscribe(function (res) {
            _this.reasonForRescheduling = res;
            console.log(_this.reasonForRescheduling);
        });
        if (this.auth.role != 'bm' && this.auth.role != 'bdo') {
            this.toaster.info('Please Select Branch', 'Information');
            this.commonService.getBrnchsForUsr().subscribe(function (res) {
                _this.brnchs = res;
            });
        }
        else {
            this.getAllLoan();
        }
    };
    LandingComponent.prototype.onSelectBranch = function () {
        console.log(this.branchForm.controls['branch'].value);
        if (this.branchForm.controls['branch'].value == null || this.branchForm.controls['branch'].value == undefined || this.branchForm.controls['branch'].value == 0)
            return;
        this.getAllLoan();
    };
    LandingComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // reset the paginator after sorting
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function () { return _this.loadLoansPage(); }))
            .subscribe();
    };
    LandingComponent.prototype.onAddNewLoanSubmit = function () {
        var _this = this;
        this.hashistory = false;
        this.applicantHistory = new _shared_models_LoanApplicant_model__WEBPACK_IMPORTED_MODULE_1__["LoanApplicant"]();
        this.clientHistory = new _shared_models_History_model__WEBPACK_IMPORTED_MODULE_8__["History"]();
        this.nomHistory = new _shared_models_History_model__WEBPACK_IMPORTED_MODULE_8__["History"]();
        this.cobHistory = new _shared_models_History_model__WEBPACK_IMPORTED_MODULE_8__["History"]();
        this.hasCobhistory = false;
        this.hasNomhistory = false;
        this.tag = new Object();
        this.severinity = 2;
        this.nomSeverinity = 2;
        this.cobSeverinity = 2;
        this.isValid = false;
        this.oldApplicants = [];
        this.spinner.show();
        if (/^([0-9])\1*$/.test(this.model.cnicNum)) {
            this.toaster.error("Invalid Client CNIC", "CNIC Number");
            this.spinner.hide();
            return;
        }
        if (this.model.cnicNum.length < 13) {
            this.toaster.error("Please Enter 13 Digit CNIC", "CNIC Number");
            this.spinner.hide();
            return;
        }
        if (this.model.expiryDate == undefined || this.model.expiryDate == "") {
            this.toaster.error("Please Select a Date", "Date Error");
            this.spinner.hide();
            return;
        }
        if (/^([0-9])\1*$/.test(this.model.nominee.cnicNum)) {
            this.toaster.error("Invalid Nominee CNIC", "CNIC Number");
            this.spinner.hide();
            return;
        }
        if (this.model.nominee != undefined && this.model.nominee.cnicNum != undefined && this.model.nominee.cnicNum != '') {
            if (this.model.nominee.cnicNum.length == 13) {
                if (this.model.nominee.cnicExpryDate == null || this.model.nominee.cnicExpryDate == null) {
                    this.toaster.error("Nominee Expiry Date Missing.");
                    this.spinner.hide();
                    return;
                }
            }
        }
        if (/^([0-9])\1*$/.test(this.model.coBorrower.cnicNum)) {
            this.toaster.error("Invalid Co-Borrower CNIC", "CNIC Number");
            this.spinner.hide();
            return;
        }
        if (this.model.coBorrower != undefined && this.model.coBorrower.cnicNum != undefined && this.model.coBorrower.cnicNum != '') {
            if (this.model.coBorrower.cnicNum.length == 13) {
                if (this.model.coBorrower.cnicExpryDate == null || this.model.coBorrower.cnicExpryDate == null) {
                    this.toaster.error("Co-Borrower Expiry Date Missing.");
                    this.spinner.hide();
                    return;
                }
            }
        }
        if (this.model.nominee != undefined && this.model.nominee.cnicNum != undefined && this.model.nominee.cnicNum != '') {
            if (this.model.nominee.cnicNum.length == 13) {
                if (this.model.nominee.cnicNum == this.model.cnicNum) {
                    this.toaster.error("Client CNIC can not be same as Nominee CNIC.");
                    this.spinner.hide();
                    return;
                }
            }
        }
        var history = new _shared_models_History_model__WEBPACK_IMPORTED_MODULE_8__["History"]();
        history.cnicNum = this.model.cnicNum;
        history.nomCnic = this.model.nominee.cnicNum;
        history.cobCnic = this.model.coBorrower.cnicNum;
        this.loanService.validateCNCCNIC(history).subscribe(function (res) {
            _this.spinner.hide();
            if (res) {
                // this.toaster.success('Validated', 'Success');
                // this.isValid = true;
                if (res.client) {
                    if (res.client.client) {
                        _this.hashistory = true;
                        _this.clientHistory = res.client.client;
                        _this.clientHistory.title = "Client";
                    }
                    else if (res.client.clientRel) {
                        _this.clientHistory = res.client.clientRel;
                        _this.hashistory = true;
                        if (_this.clientHistory.type == "1") {
                            _this.clientHistory.title = "Nominee";
                        }
                        else if (_this.clientHistory.type == "2") {
                            _this.clientHistory.title = "Coborrower";
                        }
                        else if (_this.clientHistory.type == "3") {
                            _this.clientHistory.title = "Next-of-Kin";
                        }
                        else if (_this.clientHistory.type == "4") {
                            _this.clientHistory.title = "Client Relative";
                        }
                    }
                }
                if (res.client) {
                    if (res.client.tag) {
                        _this.severinity = res.client.tag.tagSeq;
                    }
                    // if(new Date(res.tags[0][1])> new Date() && new Date() > new Date(res.tags[0][1]))
                }
                //Nominee History
                if (res.nominee) {
                    if (res.nominee.client) {
                        _this.hasNomhistory = true;
                        _this.nomHistory = res.nominee.client;
                        _this.nomHistory.title = "Client";
                    }
                    else if (res.nominee.clientRel) {
                        _this.nomHistory = res.nominee.clientRel;
                        _this.hasNomhistory = true;
                        if (_this.nomHistory.type == "1") {
                            _this.nomHistory.title = "Nominee";
                        }
                        else if (_this.nomHistory.type == "2") {
                            _this.nomHistory.title = "Coborrower";
                        }
                        else if (_this.nomHistory.type == "3") {
                            _this.nomHistory.title = "Next-of-Kin";
                        }
                        else if (_this.nomHistory.type == "4") {
                            _this.nomHistory.title = "Client Relative";
                        }
                    }
                    if (!_this.hashistory) {
                        $('#task-tab').click();
                    }
                    if (_this.cobHistory.status == "Completed" || _this.cobHistory.status == "COMPLETED") {
                        _this.model.nominee.isValidated = true;
                    }
                    else {
                        _this.model.nominee.isValidated = false;
                    }
                }
                if (res.nominee) {
                    if (res.nominee.tag) {
                        _this.nomSeverinity = res.tag;
                    }
                    // if(new Date(res.tags[0][1])> new Date() && new Date() > new Date(res.tags[0][1]))
                }
                // if (res.nomHistory.length) {
                //   if (res.nomHistory[0].length) {
                //     this.hasNomhistory = true;
                //     console.log(this.nomHistory);
                //   }
                // }
                // if (res.nomTags.length) {
                //   if (res.nomTags[0].length) {
                //     this.nomSeverinity = res.nomTags[0][5];
                //   }
                // }
                // // Coborrower History
                if (res.coborrower) {
                    if (res.coborrower.client) {
                        _this.hasCobhistory = true;
                        _this.cobHistory = res.coborrower.client;
                        _this.cobHistory.title = "Client";
                    }
                    else if (res.coborrower.clientRel) {
                        _this.cobHistory = res.coborrower.clientRel;
                        _this.hasCobhistory = true;
                        if (_this.cobHistory.type == "1") {
                            _this.cobHistory.title = "Nominee";
                        }
                        else if (_this.cobHistory.type == "2") {
                            _this.cobHistory.title = "Coborrower";
                        }
                        else if (_this.cobHistory.type == "3") {
                            _this.cobHistory.title = "Next-of-Kin";
                        }
                        else if (_this.cobHistory.type == "4") {
                            _this.cobHistory.title = "Client Relative";
                        }
                    }
                    if (!_this.hashistory && !_this.hasNomhistory)
                        $('#tuc-tab').click();
                    if (_this.cobHistory.status == "Completed" || _this.cobHistory.status == "COMPLETED") {
                        _this.model.coBorrower.isValidated = true;
                    }
                    else {
                        _this.model.coBorrower.isValidated = false;
                    }
                }
                if (res.coborrower) {
                    if (res.coborrower.tag) {
                        _this.cobSeverinity = res.tag;
                    }
                    // if(new Date(res.tags[0][1])> new Date() && new Date() > new Date(res.tags[0][1]))
                }
                // if (res.cobHistory.length) {
                //   if (res.cobHistory[0].length) {
                //     this.hasCobhistory = true;
                //     this.cobHistory.loanAppSeq = res.cobHistory[0][0];
                //     this.cobHistory.status = res.cobHistory[0][1];
                //     this.cobHistory.clientName = res.cobHistory[0][2] + " " + res.cobHistory[0][3];
                //     this.cobHistory.clientSeq = res.cobHistory[0][4];
                //     this.cobHistory.clientCnic = res.cobHistory[0][5];
                //     this.cobHistory.fatherName = res.cobHistory[0][6] + " " + res.cobHistory[0][7];
                //     this.cobHistory.gender = res.cobHistory[0][8];
                //     this.cobHistory.maritalStatus = res.cobHistory[0][9];
                //     this.cobHistory.houseNum = res.cobHistory[0][10];
                //     this.cobHistory.city = res.cobHistory[0][11];
                //     this.cobHistory.uc = res.cobHistory[0][12];
                //     this.cobHistory.thsl = res.cobHistory[0][13];
                //     this.cobHistory.dist = res.cobHistory[0][14];
                //     this.cobHistory.state = res.cobHistory[0][15];
                //     this.cobHistory.country = res.cobHistory[0][16];
                //     this.cobHistory.portfolio = res.cobHistory[0][17];
                //     this.cobHistory.branch = res.cobHistory[0][18];
                //     this.cobHistory.area = res.cobHistory[0][19];
                //     this.cobHistory.reg = res.cobHistory[0][20];
                //     this.cobHistory.prdSeq = res.cobHistory[0][21];
                //     this.cobHistory.prdName = res.cobHistory[0][22];
                //     this.cobHistory.multi = res.cobHistory[0][23];
                //     this.cobHistory.nomSeq = res.cobHistory[0][24];
                //     this.cobHistory.nomFName = res.cobHistory[0][25];
                //     this.cobHistory.nomLName = res.cobHistory[0][26];
                //     this.cobHistory.nomPhone = res.cobHistory[0][27];
                //     this.cobHistory.nomRel = res.cobHistory[0][28];
                //     console.log(this.cobHistory);
                //   }
                // }
                // if (res.cobTags.length) {
                //   if (res.cobTags[0].length) {
                //     this.cobSeverinity = res.cobTags[0][5];
                //   }
                // }
                if (_this.hashistory) {
                    if (_this.clientHistory.status == "Completed" || _this.clientHistory.status == "COMPLETED" || _this.clientHistory.status == "Deferred" || _this.clientHistory.status == "DEFERRED") {
                        if (_this.hasNomhistory) {
                            if (_this.nomHistory.status == "Completed" || _this.nomHistory.status == "COMPLETED") {
                                if (_this.hasCobhistory) {
                                    if (_this.cobHistory.status == "Completed" || _this.cobHistory.status == "COMPLETED") {
                                        _this.isValid = true;
                                        _this.model.coBorrower.isValidated = true;
                                    }
                                    else {
                                        _this.isValid = false;
                                    }
                                }
                                else {
                                    _this.isValid = true;
                                    _this.model.coBorrower.isValidated = true;
                                }
                            }
                            else {
                                _this.isValid = false;
                            }
                        }
                        else {
                            if (_this.hasCobhistory) {
                                if (_this.cobHistory.status == "Completed" || _this.cobHistory.status == "COMPLETED") {
                                    _this.isValid = true;
                                }
                                else {
                                    _this.isValid = false;
                                }
                            }
                            else {
                                _this.isValid = true;
                            }
                        }
                    }
                    else {
                        _this.isValid = false;
                    }
                }
                else {
                    if (_this.hasNomhistory) {
                        if (_this.nomHistory.status == "Completed" || _this.nomHistory.status == "COMPLETED") {
                            if (_this.hasCobhistory) {
                                if (_this.cobHistory.status == "Completed" || _this.cobHistory.status == "COMPLETED") {
                                    _this.isValid = true;
                                }
                                else {
                                    _this.isValid = false;
                                }
                            }
                            else {
                                _this.isValid = true;
                                _this.model.coBorrower.isValidated = true;
                            }
                        }
                        else {
                            _this.isValid = false;
                        }
                    }
                    else {
                        if (_this.hasCobhistory) {
                            if (_this.cobHistory.status == "Completed" || _this.cobHistory.status == "COMPLETED") {
                                _this.isValid = true;
                                _this.model.coBorrower.isValidated = true;
                            }
                            else {
                                _this.isValid = false;
                            }
                        }
                        else {
                            _this.model.coBorrower.isValidated = true;
                            _this.isValid = true;
                        }
                    }
                }
                // if (res.client) {
                //   if (res.client.tag) {
                //     if(this.severinity == 1){
                //       if(new Date(res.client.tags)> new Date() && new Date() > new Date(res.client.tags[0][1])){
                //         this.isValid = false;
                //       }
                //     }
                //   }
                // }
            }
        }, function (error) {
            _this.spinner.hide();
            console.log('err VALIDATE');
            console.log('err', error);
        });
    };
    LandingComponent.prototype.createNewLoan = function () {
        var _this = this;
        if (this.severinity == 1) {
            this.toaster.error("This Client is Blacklisted.", "Error");
            return;
        }
        if (this.hashistory) {
            if (this.clientHistory["status"].toLowerCase() != "completed" && this.clientHistory["status"].toLowerCase() != "deferred") {
                // if (this.clientHistory["multi"] != 1)
                this.toaster.error("Client Already has a " + this.clientHistory["status"] + " Loan.", "Error");
                return;
            }
        }
        if (this.severinity == 0) {
            this.toaster.warning("Be aware with this client.", "Warning");
        }
        this.spinner.show();
        this.loanService.createLoan(this.model).subscribe(function (res) {
            console.log(_this.model);
            _this.model.portfolioSeq = _this.model.portKey;
            _this.model.portSeq = _this.model.portKey;
            Object.assign(_this.model, res, _this.model);
            if (_this.hashistory) {
                sessionStorage.setItem("basicCrumbs", JSON.stringify([{ formNm: "Personal Info", formUrl: "personal-info", isSaved: true }, { formNm: "Credit Info", formUrl: "loan-info", isSaved: false }]));
            }
            else {
                sessionStorage.setItem("basicCrumbs", JSON.stringify([{ formNm: "Personal Info", formUrl: "personal-info", isSaved: false }, { formNm: "Credit Info", formUrl: "loan-info", isSaved: false }]));
            }
            sessionStorage.setItem('model', JSON.stringify(_this.model));
            // this.loanService.landingModel = this.model;
            sessionStorage.setItem('editLoan', 'false');
            sessionStorage.setItem('readonly', 'false');
            $('#cmmoncodes').modal('hide');
            _this.spinner.show();
            _this.router.navigate(['loan-origination/app/personal-info']);
        }, function (error) {
            _this.spinner.hide();
            console.log('err In Loan Service');
            console.log('err', error);
        });
    };
    LandingComponent.prototype.showField = function () {
        this.showFields = true;
    };
    LandingComponent.prototype.cloaseField = function () {
        this.showFields = false;
    };
    // getAllLoan() {
    //   this.spinner.show();
    //   console.log(this.auth);
    //   this.loanService.getAllLoanInfo(this.auth.user.username, this.auth.role).subscribe((res) => {
    //     this.spinner.hide();
    //     this.loans = res;
    //     this.allItems = res;
    //     this.setAddressStringInAllItems();
    //     this.dataSource = new MatTableDataSource(res);
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //     // initialize to page 1
    //     // this.setPage(1);
    //   }, (error) => {
    //     this.spinner.hide();
    //     console.log('err All Loans Service');
    //     console.log('err', error);
    //   });
    //   // this.loanService.getAllLoanInfo(this.auth.user.username, this.auth.role).subscribe((res) => {
    //   //   this.spinner.hide();
    //   //   this.loans = res;
    //   //   this.allItems = res;
    //   //   this.setAddressStringInAllItems();
    //   //   this.dataSource = new MatTableDataSource(res);
    //   //   this.dataSource.paginator = this.paginator;
    //   //   this.dataSource.sort = this.sort;
    //   //   // initialize to page 1
    //   //   // this.setPage(1);
    //   // }, (error) => {
    //   //   this.spinner.hide();
    //   //   console.log('err All Loans Service');
    //   //   console.log('err', error);
    //   // });
    // }
    LandingComponent.prototype.getAllLoan = function () {
        var _this = this;
        setTimeout(function () {
            _this.spinner.show();
        }, 5);
        this.loanService.getAllLoanInfoPaged(this.auth.user.username, this.auth.role, this.paginator.pageIndex, 10, "app.loan_app_sts_dt", "desc", this.filterValue, this.branchForm.controls['branch'].value).subscribe(function (res) {
            _this.spinner.hide();
            _this.loans = res.loans;
            _this.allItems = res.loans;
            if (_this.loans.length <= 0 && _this.branchForm.controls['branch'].value != 0) {
                _this.toaster.info('No Data Found Against This Branch', 'Information');
            }
            ;
            _this.setAddressStringInAllItems(_this.allItems);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableDataSource"](res.loans);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = res.count;
            _this.dataBeforeFilter = _this.dataSource.data;
            _this.countBeforeFilter = res.count;
            _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
            // this.dataSource = new MatTableDataSource(res);
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
            // initialize to page 1
            // this.setPage(1);
        }, function (error) {
            _this.spinner.hide();
            console.log('err All Loans Service');
            console.log('err', error);
        });
    };
    LandingComponent.prototype.loadLoansPage = function () {
        var _this = this;
        if (this.paginator.pageIndex < this.lastPageIndex)
            return;
        if (this.dataSource.paginator.length == this.dataSource.data.length)
            return;
        // console.log(((this.paginator.pageIndex + 1) * this.paginator.pageSize) + "  ----  " + this.dataSource.data.length + " ==== " + (((this.paginator.pageIndex + 1) * this.paginator.pageSize) - this.dataSource.data.length))
        if (((this.paginator.pageIndex + 1) * this.paginator.pageSize) - this.dataSource.data.length > 0) {
            setTimeout(function () { return _this.spinner.show(); }, 5);
            this.loanService.getAllLoanInfoPaged(this.auth.user.username, this.auth.role, this.paginator.pageIndex, this.paginator.pageSize, "app.loan_app_sts_dt", "desc", this.filterValue, this.branchForm.controls['branch'].value).subscribe(function (res) {
                _this.spinner.hide();
                _this.loans = res.loans;
                if (_this.loans.length <= 0 && _this.branchForm.controls['branch'].value != 0) {
                    _this.toaster.info('No Data Found Against This Branch', 'Information');
                }
                ;
                _this.setAddressStringInAllItems(res.loans);
                _this.lastPageIndex = _this.lastPageIndex + 1;
                _this.dataSource.data = _this.dataSource.data.concat(res.loans);
                _this.datalength = 0;
                setTimeout(function () { _this.datalength = res.count; }, 200);
                if (_this.filterValue.length == 0) {
                    _this.dataBeforeFilter = _this.dataSource.data;
                    _this.countBeforeFilter = res.count;
                    _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
                }
                // console.log(this.dataSource)
                // console.log(this.paginator)
                // // this.datalength = res.count;
                // console.log(res);
            }, function (error) {
                _this.spinner.hide();
                console.log('err All Loans Service');
                console.log('err', error);
            });
        }
    };
    LandingComponent.prototype.getFilteredData = function (filterValue) {
        var _this = this;
        this.paginator.pageIndex = 0;
        setTimeout(function () { _this.spinner.show(); }, 5);
        this.loanService.getAllLoanInfoPaged(this.auth.user.username, this.auth.role, this.paginator.pageIndex, this.paginator.pageSize, "app.loan_app_sts_dt", "desc", filterValue, this.branchForm.controls['branch'].value).subscribe(function (res) {
            _this.spinner.hide();
            _this.loans = res.loans;
            if (_this.loans.length <= 0 && _this.branchForm.controls['branch'].value != 0) {
                _this.toaster.info('No Data Found Against This Search', 'Information');
            }
            ;
            _this.setAddressStringInAllItems(res.loans);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableDataSource"](res.loans);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = 0;
            setTimeout(function () { _this.datalength = res.count; }, 200);
        }, function (error) {
            _this.spinner.hide();
            console.log('err All Loans Service');
            console.log('err', error);
        });
    };
    LandingComponent.prototype.setAddressStringInAllItems = function (loans) {
        loans.forEach(function (item) {
            item.addressString = "House No." + item.house_num + ", " + item.street + ", " + item.cmntyNm + ", " + item.village + ", " + item.other_detail + ".";
        });
    };
    LandingComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.loanService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    LandingComponent.prototype.editLoan = function (loan, flg) {
        var _this = this;
        console.log(loan);
        this.spinner.show();
        this.loanService.getLoanInfo(loan.clientId).subscribe(function (res) {
            if (res) {
                var loanApplicant = new _shared_models_LoanApplicant_model__WEBPACK_IMPORTED_MODULE_1__["LoanApplicant"]();
                Object.assign(loanApplicant, res, loanApplicant);
                console.log(loanApplicant);
                loanApplicant.loanAppSeq = loan.loanAppSeq;
                loanApplicant.loanSeq = loan.loanAppSeq;
                loanApplicant.clientSeq = loan.clientId;
                loanApplicant.portfolioSeq = loanApplicant.portKey;
                loanApplicant.portSeq = loanApplicant.portKey;
                sessionStorage.setItem('model', JSON.stringify(loanApplicant));
                sessionStorage.setItem('editLoan', 'true');
                sessionStorage.setItem('readonly', flg);
                console.log(flg);
                sessionStorage.setItem("basicCrumbs", JSON.stringify([{ formNm: "Personal Info", formUrl: "personal-info", isSaved: true }, { formNm: "Credit Info", formUrl: "loan-info", isSaved: true }]));
                _this.spinner.show();
                _this.router.navigate(['loan-origination/app/personal-info']);
            }
            // this.spinner.hide();
            // initialize to page 1
        }, function (error) {
            _this.spinner.hide();
            console.log('err All Loans Service');
            console.log('err', error);
        });
    };
    LandingComponent.prototype.clientHistoryScreen = function (loan) {
        sessionStorage.setItem("historyLoan", JSON.stringify(loan));
        this.router.navigate(['loan-origination/client-history']);
    };
    LandingComponent.prototype.deleteLoan = function (loanApp) {
        this.loanAppToBeDeleted = loanApp;
        $('#deleteConfirmation').modal('show');
    };
    LandingComponent.prototype.confirmDelete = function () {
        var _this = this;
        this.spinner.show();
        this.loanService.deleteLoan(this.loanAppToBeDeleted.loanAppSeq).subscribe(function (res) {
            var index = _this.allItems.indexOf(_this.loanAppToBeDeleted);
            _this.spinner.hide();
            _this.toaster.success("Application has been deleted successfully");
            $('#deleteConfirmation').modal('hide');
            if (index > -1) {
                _this.allItems.splice(index, 1);
                _this.setPage(0);
            }
            _this.allItems;
        }, function (error) {
            _this.spinner.hide();
            console.log(error);
        });
    };
    LandingComponent.prototype.addLoanModel = function () {
        $('#cmmoncodes').modal('show');
        this.model = new _shared_models_LoanApplicant_model__WEBPACK_IMPORTED_MODULE_1__["LoanApplicant"]();
        this.hashistory = false;
        this.hasNomhistory = false;
        this.hasCobhistory = false;
        this.isValid = false;
        this.applicantHistory = new _shared_models_LoanApplicant_model__WEBPACK_IMPORTED_MODULE_1__["LoanApplicant"]();
        this.oldApplicants = [];
        this.cnicPatternObj = new _shared_models_CNICPattern_model__WEBPACK_IMPORTED_MODULE_12__["CNICPattern"]();
    };
    LandingComponent.prototype.deleteFilter = function (filter) {
        var index = this.filters.indexOf(filter, 0);
        if (index > -1) {
            this.filters.splice(index, 1);
        }
        if (filter.key == 'Gender') {
            this.genderSelected = '';
            this.filterDto.genderCd = null;
            this.getFilteredListing();
        }
        if (filter.key == 'Marital Status') {
            this.filterDto.maritalStsCd = null;
            this.getFilteredListing();
        }
        if (filter.key == 'Application Status') {
            this.filterDto.StatusCd = null;
            this.getFilteredListing();
        }
        if (filter.type == 'geography') {
            this.allItems = this.loans;
            this.setPage(0);
            if (this.genderSelected != '') {
                this.genderFilter();
            }
        }
        if (filter.key == 'Organization') {
            this.filterDto.geographyQuery = "";
            this.getFilteredListing();
        }
    };
    LandingComponent.prototype.genderFilter = function () {
        if (this.genderSelected != undefined && this.genderSelected != null && this.genderSelected != "") {
            this.filterDto.genderCd = this.genderSelected;
            var index = -1;
            for (var j = 0; j < this.filters.length; j++) {
                if (this.filters[j].key == 'Gender') {
                    index = j;
                    break;
                }
            }
            if (index > -1) {
                this.filters[index].value = this.findValueFromGrpCd(this.genderSelected, this.gender);
            }
            else {
                this.filters.push({ key: 'Gender', value: this.findValueFromGrpCd(this.genderSelected, this.gender) });
            }
            // let found = false;
            // for (let j = 0; j < this.filters.length; j++) {
            //   if (this.filters[j].key == 'Gender') {
            //     found = true;
            //     break;
            //   }
            // }
            // if (!found) {
            //   this.filters.push({ key: 'Gender', value: this.genderSelected });
            // } else if (this.filters.length <= 1) {
            //   this.allItems = this.loans;
            // }
        }
        else {
            this.filterDto.genderCd = "";
        }
        this.getFilteredListing();
        // const filteredItems = [];
        // for (let i = 0; i < this.allItems.length; i++) {
        //   console.log(i);
        //   if (this.allItems[i].gender == this.genderSelected) {
        //     console.log(this.allItems[i]);
        //     filteredItems.push(this.allItems[i]);
        //   }
        // }
        // console.log(filteredItems);
        // this.allItems = filteredItems;
        // this.setPage(0);
    };
    LandingComponent.prototype.maritalStatusFilter = function () {
        console.log(this.genderSelected);
        if (this.filterDto.maritalStsCd != undefined && this.filterDto.maritalStsCd != null && this.filterDto.maritalStsCd != "") {
            var index = -1;
            for (var j = 0; j < this.filters.length; j++) {
                if (this.filters[j].key == 'Marital Status') {
                    index = j;
                    break;
                }
            }
            if (index > -1) {
                this.filters[index].value = this.findValueFromGrpCd(this.filterDto.maritalStsCd, this.maritalStatus);
            }
            else {
                this.filters.push({ key: 'Marital Status', value: this.findValueFromGrpCd(this.filterDto.maritalStsCd, this.maritalStatus) });
            }
            // this.filters.push({ key: 'Marital Status', value: this.findValueFromGrpCd(this.filterDto.maritalStsCd, this.maritalStatus )});
        }
        else {
            this.filterDto.maritalStsCd = "";
        }
        this.getFilteredListing();
    };
    LandingComponent.prototype.statusFilter = function () {
        if (this.filterDto.StatusCd != undefined && this.filterDto.StatusCd != null && this.filterDto.StatusCd != "") {
            var index = -1;
            for (var j = 0; j < this.filters.length; j++) {
                if (this.filters[j].key == 'Application Status') {
                    index = j;
                    break;
                }
            }
            if (index > -1) {
                this.filters[index].value = this.findValueFromGrpCd(this.filterDto.StatusCd, this.status);
            }
            else {
                this.filters.push({ key: 'Application Status', value: this.findValueFromGrpCd(this.filterDto.StatusCd, this.status) });
            }
            // this.filters.push({ key: 'Marital Status', value: this.findValueFromGrpCd(this.filterDto.maritalStsCd, this.maritalStatus )});
        }
        else {
            this.filterDto.StatusCd = "";
        }
        this.getFilteredListing();
    };
    LandingComponent.prototype.loadLovs = function () {
        var _this = this;
        this.commonService.getValues(_shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_14__["GENDER"]).subscribe(function (res) {
            _this.gender = res;
        }, function (error) {
            console.log('err', error);
        });
        this.commonService.getValues(_shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_14__["MARITAL_STATUS"]).subscribe(function (res) {
            _this.maritalStatus = res;
        }, function (error) {
            console.log('err', error);
        });
        this.commonService.getValues(_shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_14__["APPLICATION_STATUS"]).subscribe(function (res) {
            _this.status = res;
        }, function (error) {
            console.log('err', error);
        });
        // this.commonService.getAllFilters().subscribe((res) => {
        //   this.organization = res.organization;
        //   this.geography = res.geography;
        // }, (error) => {
        //   console.log('err', error);
        // });
        this.commonService.getOrganizationforUser(this.auth.user.username).subscribe(function (res) {
            _this.org = res;
        });
    };
    LandingComponent.prototype.navClick = function (element) {
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
    LandingComponent.prototype.regionClick = function (region) {
        console.log(region);
    };
    LandingComponent.prototype.areaClick = function (area) {
        console.log(area);
        var index = -1;
        for (var j = 0; j < this.filters.length; j++) {
            if (this.filters[j].key == 'Organization') {
                index = j;
                break;
            }
        }
        if (index > -1) {
            this.filters[index].value = area.areaName;
            this.filterDto.geographyQuery = " and area.area_seq=" + area.areaSeq + " ";
        }
        else {
            this.filters.push({ key: 'Organization', value: area.areaName });
            this.filterDto.geographyQuery = " and area.area_seq=" + area.areaSeq + " ";
        }
        this.getFilteredListing();
    };
    LandingComponent.prototype.branchClick = function (branch) {
        console.log(branch);
        this.branchForm.controls['branch'].setValue(branch.branchSeq);
        this.loadLoansPage();
        // var index = -1;
        // for (let j = 0; j < this.filters.length; j++) {
        //   if (this.filters[j].key == 'Organization') {
        //     index = j;
        //     break;
        //   }
        // }
        // if (index > -1) {
        //   this.filters[index].value = branch.branchName;
        //   this.filterDto.geographyQuery = " and brnch.brnch_seq=" + branch.branchSeq + " ";
        // } else {
        //   this.filters.push({ key: 'Organization', value: branch.branchName });
        //   this.filterDto.geographyQuery = " and brnch.brnch_seq=" + branch.branchSeq + " ";
        // }
        // this.getFilteredListing();
    };
    LandingComponent.prototype.portClick = function (port) {
        console.log(port);
        this.portSeq = port.portSeq;
        this.loadLoansPage();
        // var index = -1;
        // for (let j = 0; j < this.filters.length; j++) {
        //   if (this.filters[j].key == 'Organization') {
        //     index = j;
        //     break;
        //   }
        // }
        // if (index > -1) {
        //   this.filters[index].value = port.portfolioName;
        //   this.filterDto.geographyQuery = " and port.port_seq=" + port.portSeq + " ";
        // } else {
        //   this.filters.push({ key: 'Organization', value: port.portfolioName });
        //   this.filterDto.geographyQuery = " and port.port_seq=" + port.portSeq + " ";
        // }
        // this.getFilteredListing();
    };
    LandingComponent.prototype.stateClick = function (state) {
        var _this = this;
        this.appendGeographyFilter('State', state.provName);
        this.commonService.applyFilter('state', state.provSeq).subscribe(function (res) {
            _this.allItems = res;
            if (_this.genderSelected != '') {
                _this.genderFilter();
            }
            _this.setPage(0);
        }, function (error) { console.log(error); _this.spinner.hide(); });
    };
    LandingComponent.prototype.districtClick = function (district) {
        var _this = this;
        this.appendGeographyFilter('District', district.districtName);
        this.commonService.applyFilter('district', district.districtSeq).subscribe(function (res) {
            _this.allItems = res;
            if (_this.genderSelected != '') {
                _this.genderFilter();
            }
            _this.setPage(0);
        }, function (error) { console.log(error); _this.spinner.hide(); });
    };
    LandingComponent.prototype.tehsilClick = function (tehsil) {
        var _this = this;
        this.appendGeographyFilter('Tehsil', tehsil.thslName);
        this.commonService.applyFilter('tehsil', tehsil.thslSeq).subscribe(function (res) {
            _this.allItems = res;
            if (_this.genderSelected != '') {
                _this.genderFilter();
            }
            _this.setPage(0);
        }, function (error) { console.log(error); _this.spinner.hide(); });
    };
    LandingComponent.prototype.ucClick = function (uc) {
        var _this = this;
        this.appendGeographyFilter('UC', uc.ucName + '-' + uc.ucDescription);
        this.commonService.applyFilter('uc', uc.ucSeq).subscribe(function (res) {
            _this.allItems = res;
            if (_this.genderSelected != '') {
                _this.genderFilter();
            }
            _this.setPage(0);
        }, function (error) { console.log(error); _this.spinner.hide(); });
    };
    LandingComponent.prototype.appendGeographyFilter = function (key, value) {
        var found = false;
        for (var i = 0; i < this.filters.length; i++) {
            if (this.filters[i].type == 'geography') {
                found = true;
                this.filters[i].key = key;
                this.filters[i].value = value;
            }
        }
        if (!found) {
            this.filters.push({ key: key, value: value, type: 'geography' });
        }
        if (this.genderSelected != '') {
            this.genderFilter();
        }
    };
    LandingComponent.prototype.onlyLetters = function (event) {
        var pattern = /[a-zA-Z ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    LandingComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    LandingComponent.prototype.cnicPattern = function (event, type) {
        var _this = this;
        if (event.code == "Backspace")
            this.isValid = false;
        if (event.keyCode == 8 || event.keyCode == 9
            || event.keyCode == 27 || event.keyCode == 13
            || (event.keyCode == 65 && event.ctrlKey === true))
            return;
        if ((event.keyCode < 48 || event.keyCode > 57))
            event.preventDefault();
        var length = 0;
        this.isValid = false;
        if (type == "client") {
            if (this.cnicPatternObj.clientCNIC.length)
                length = this.cnicPatternObj.clientCNIC.length;
            this.cnicPatternObj.clientCNIC = this.cnicPatternObj.clientCNIC.replace(/-/g, '');
            var array = this.cnicPatternObj.clientCNIC.split('');
            this.cnicPatternObj.clientCNIC = "";
            this.model.cnicNum = "";
            array.forEach(function (char, index) {
                var asciiCode = char.charCodeAt(0);
                if (asciiCode >= 48 && asciiCode <= 57) {
                    if (index == 5 || index == 12) {
                        _this.cnicPatternObj.clientCNIC = _this.cnicPatternObj.clientCNIC + "-";
                    }
                    if (_this.cnicPatternObj.clientCNIC.length < 15) {
                        _this.cnicPatternObj.clientCNIC = _this.cnicPatternObj.clientCNIC + char;
                        _this.model.cnicNum = _this.model.cnicNum + char;
                    }
                }
            });
        }
        else if (type == "nominee") {
            if (this.cnicPatternObj.nomCnic.length)
                length = this.cnicPatternObj.nomCnic.length;
            this.cnicPatternObj.nomCnic = this.cnicPatternObj.nomCnic.replace(/-/g, '');
            var array = this.cnicPatternObj.nomCnic.split('');
            this.cnicPatternObj.nomCnic = "";
            this.model.nominee.cnicNum = "";
            array.forEach(function (char, index) {
                var asciiCode = char.charCodeAt(0);
                if (asciiCode >= 48 && asciiCode <= 57) {
                    if (index == 5 || index == 12) {
                        _this.cnicPatternObj.nomCnic = _this.cnicPatternObj.nomCnic + "-";
                    }
                    if (_this.cnicPatternObj.nomCnic.length < 15) {
                        _this.cnicPatternObj.nomCnic = _this.cnicPatternObj.nomCnic + char;
                        _this.model.nominee.cnicNum = _this.model.nominee.cnicNum + char;
                    }
                }
            });
        }
        else if (type == "co-borrower") {
            if (this.cnicPatternObj.cobCNIC.length)
                length = this.cnicPatternObj.cobCNIC.length;
            this.cnicPatternObj.cobCNIC = this.cnicPatternObj.cobCNIC.replace(/-/g, '');
            var array = this.cnicPatternObj.cobCNIC.split('');
            this.cnicPatternObj.cobCNIC = "";
            this.model.coBorrower.cnicNum = "";
            array.forEach(function (char, index) {
                var asciiCode = char.charCodeAt(0);
                if (asciiCode >= 48 && asciiCode <= 57) {
                    if (index == 5 || index == 12) {
                        _this.cnicPatternObj.cobCNIC = _this.cnicPatternObj.cobCNIC + "-";
                    }
                    if (_this.cnicPatternObj.cobCNIC.length < 15) {
                        _this.cnicPatternObj.cobCNIC = _this.cnicPatternObj.cobCNIC + char;
                        _this.model.coBorrower.cnicNum = _this.model.coBorrower.cnicNum + char;
                    }
                }
            });
        }
    };
    LandingComponent.prototype.cnicPatternUpEvent = function (event, type) {
        // console.log("UP EVENT")
        // console.log(event)
    };
    LandingComponent.prototype.getDate = function (str) {
        if (str.length > 0)
            return new Date(str);
        return "";
    };
    LandingComponent.prototype.associateLoan = function (loan) {
        var _this = this;
        // this.commonService.getRecoveryStatus(loan.loanAppId).subscribe((res) => {
        //   console.log(res);
        //   if (res.inst_num >= 4 && res.inst_num <= 7) {
        this.assocProducts = [];
        this.assocApprovedAmount = 0;
        this.assocProductSeq = null;
        this.selectedAssocLoan = loan;
        this.selectedAssocProduct = new src_app_shared_models_LoanProduct_model__WEBPACK_IMPORTED_MODULE_19__["LoanProduct"]();
        console.log(loan);
        this.spinner.show();
        var dto = {
            "clientSeq": loan.clientId,
            "productSeq": loan.prdSeq,
            "loanAppSeq": loan.loanAppSeq
        };
        console.log(dto);
        this.commonService.getAssociateProductsForProduct(JSON.stringify(dto)).subscribe(function (res) {
            _this.assocProducts = res;
            _this.spinner.hide();
            $('#associateProductModel').modal('show');
        }, function (error) { console.log(error); _this.spinner.hide(); });
        //   } else {
        //     this.toaster.error("Paid Installments must be between 3 & 6 \n Installment No. " + res.inst_num + " is due on " + this.getDateString(res.due_dt));
        //     this.spinner.hide();
        //   }
        // }, (error) => { console.log(error); this.spinner.hide() });
    };
    LandingComponent.prototype.onAssocProductSelect = function (e) {
        var _this = this;
        this.assocProducts.forEach(function (p) {
            if (p.productSeq == e) {
                _this.selectedAssocProduct = p;
            }
        });
    };
    LandingComponent.prototype.getDateString = function (str) {
        var date = new Date(str);
        return ((date.getDate() < 10) ? ("0" + date.getDate()) : date.getDate()) + "-" + (((date.getMonth() + 1) < 10) ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) + "-" + date.getFullYear();
    };
    LandingComponent.prototype.onAssocProductSubmit = function () {
        var _this = this;
        // if(this.selectedAssocLoan.ODAmount>0){
        //   this.toaster.error("This Client is in Over Due.");
        //   return;
        // }
        if (this.selectedAssocProduct.minAmount > this.assocApprovedAmount) {
            this.toaster.error("Approved Amount should be more than or equal to Minimum Amount");
            return;
        }
        if (this.selectedAssocProduct.maxAmount < this.assocApprovedAmount) {
            this.toaster.error("Approved Amount should not exceed Maximum Amount");
            return;
        }
        if ((+this.assocApprovedAmount % 1000) > 0) {
            this.toaster.error("Approved Amount should be multiple of 1000");
            return;
        }
        var assocLoanProductDto = new src_app_shared_models_LoanProduct_model__WEBPACK_IMPORTED_MODULE_19__["LoanProductAssoc"]();
        assocLoanProductDto.approvedAmount = this.assocApprovedAmount;
        assocLoanProductDto.loanProd = this.selectedAssocProduct.productSeq;
        assocLoanProductDto.installments = this.selectedAssocProduct.installments;
        assocLoanProductDto.limitRule = this.selectedAssocProduct.limitRule;
        assocLoanProductDto.prdRul = this.selectedAssocProduct.prdRul;
        assocLoanProductDto.termRule = this.selectedAssocProduct.termRule;
        assocLoanProductDto.clientSeq = +this.selectedAssocLoan.clientId;
        assocLoanProductDto.prntLoanAppSeq = +this.selectedAssocLoan.loanAppSeq;
        this.spinner.show();
        this.loanService.submitAssocLoanApp(assocLoanProductDto).subscribe(function (res) {
            // this.spinner.hide();
            _this.toaster.success("Application Submitted");
            $('#associateProductModel').modal('hide');
            _this.getAllLoan();
        }, function (error) {
            _this.spinner.hide();
            _this.toaster.error(error.error.text, "Error");
            console.log('err', error);
        });
        // (<any>$('#associateProductModel')).modal('hide');
    };
    LandingComponent.prototype.cancelClicked = function () {
        $('#associateProductModel').modal('hide');
    };
    // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    // dataSource = new MatTableDataSource(ELEMENT_DATA);
    LandingComponent.prototype.findValueFromGrpCd = function (key, array) {
        if (array) {
            for (var i = 0; i < array.length; i++) {
                if (array[i].codeRefCd == key) {
                    return array[i].codeValue;
                }
            }
        }
    };
    LandingComponent.prototype.getFilteredListing = function () {
        var _this = this;
        // this.loanService.
        this.spinner.show();
        this.filterDto.role = this.auth.role;
        this.loanService.getAllLoanInfoFiltered(this.filterDto).subscribe(function (res) {
            _this.spinner.hide();
            _this.loans = res;
            _this.allItems = res;
            // this.setPage(0);
            _this.setAddressStringInAllItems(_this.allItems);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableDataSource"](res);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) {
            _this.spinner.hide();
        });
    };
    LandingComponent.prototype.disgardApp = function (loan) {
        $('#disgardApp').modal('show');
        this.disgardForm = this.fb.group({
            //update
            loanAppSeq: [loan.loanAppSeq, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            cmnt: [''],
        });
        this.deferedLoan = loan;
    };
    LandingComponent.prototype.onSubmitDisgardApp = function () {
        var _this = this;
        $('#disgardApp').modal('hide');
        this.disgardForm.value.cmnt == null ? " " : this.disgardForm.value.cmnt;
        this.recoveryService.deleteApplication(this.disgardForm.value).subscribe(function () {
            //update 
            _this.deferedLoan.loanAppStatus = 'Deferred';
            // this.recoveryService.defferApplicationLoanService(this.disgardForm.value).subscribe(() => {
            // });
        }, function (error) { return console.log('There was an error: ', error); });
    };
    LandingComponent.prototype.rescheduleMonthChange = function (e) {
        var v = e.value * 30;
        this.reScheduleForm.controls['days'].setValue(v);
        this.reScheduleForm.controls['perd'].setValue(e.value);
    };
    LandingComponent.prototype.rescheduleMethodChange = function (e) {
        this.reScheduleForm.controls['methdSeq'].setValue(e.value);
    };
    LandingComponent.prototype.reSchedule = function (clnt) {
        console.log(clnt);
        $('#reSchedule').modal('show');
        this.reScheduleForm = this.fb.group({
            methdSeq: [{ value: 1, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            // clntId: [{ value: clnt.clientId, disabled: true }, Validators.required],
            clntSeq: [clnt.clientSeq, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            // clntNm: [{ value: clnt.firstName + ' ' + clnt.lastName, disabled: true }, Validators.required],
            loanAppSeq: [{ value: clnt.loanAppSeq, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            days: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            perd: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            rsnKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            cmnt: ['']
        });
    };
    // submitReschedule() {
    //   (<any>$('#reSchedule')).modal('hide');
    //   let clntSeq = this.reScheduleForm.get('clntSeq').value;
    //   let months = this.reScheduleForm.get('months').value;
    //   let method = this.reScheduleForm.get('method').value;
    //   this.loanServicingService.reschedule(method, clntSeq, months).subscribe(d => {
    //   });
    // }
    LandingComponent.prototype.submitReschedule = function () {
        var _this = this;
        this.spinner.show();
        this.loanServicingService.rescheduleForPosting(this.reScheduleForm.getRawValue()).subscribe(function (d) {
            $('#reSchedule').modal('hide');
            _this.spinner.hide();
            _this.toaster.success('Credit Reschedule', "Success");
            console.log(d);
        }, function (error) {
            _this.spinner.hide();
            if (error.status == 500) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
            else if (error.status == 400) {
                _this.toaster.error(error.error.error, "Error");
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSort"])
    ], LandingComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginator"])
    ], LandingComponent.prototype, "paginator", void 0);
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/pages/loan-origination/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/pages/loan-origination/landing/landing.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_16__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_shared_services_loan_service__WEBPACK_IMPORTED_MODULE_2__["LoanService"],
            src_app_shared_services_loan_servicing_service__WEBPACK_IMPORTED_MODULE_21__["LoanServicingService"],
            _shared_services_data_service__WEBPACK_IMPORTED_MODULE_15__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_20__["RecoveryService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], LandingComponent);
    return LandingComponent;
}());

var FilterDto = /** @class */ (function () {
    function FilterDto(id) {
        this.userId = id;
    }
    return FilterDto;
}());



/***/ }),

/***/ "./src/app/pages/loan-origination/loan-origination.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/loan-origination/loan-origination.module.ts ***!
  \*******************************************************************/
/*! exports provided: routes, LoanOriginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanOriginationModule", function() { return LoanOriginationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/pages/loan-origination/landing/landing.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _client_history_client_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client-history/client-history.component */ "./src/app/pages/loan-origination/client-history/client-history.component.ts");
/* harmony import */ var _client_history_SplitPipe_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./client-history/SplitPipe.pipe */ "./src/app/pages/loan-origination/client-history/SplitPipe.pipe.ts");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _AuthGuard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AuthGuard.service */ "./src/app/pages/loan-origination/AuthGuard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '',
        redirectTo: 'landing', canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    },
    { path: 'landing',
        component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    },
    // { path: 'personal-info' ,
    //   component: PersonalInfoComponent,
    // },
    // { path: 'loan-info' ,
    //   component: LoanInfoComponent
    // },
    // { path: 'mfcib' ,
    //   component: MFCIBComponent
    // },
    // { path: 'insurance-info' ,
    //   component: InsuranceInfoComponent
    // },
    // { path: 'nominee' ,
    //   component: NomineeComponent
    // },
    // { path: 'co-borrower' ,
    //   component: CoBorrowerComponent
    // },
    // { path: 'business-appraisal' ,
    //   component: BusinessAppraisalComponent
    // },
    // { path: 'school-appraisal' ,
    //   component: SchoolAppraisalComponent
    // },
    // { path: 'expected-loan-utilication' ,
    //   component: LoanUtilizationComponent
    // },
    // { path: 'psc' ,
    //   component: PscComponent
    // },
    // { path: 'documents' ,
    //   component: DocumentsComponent
    // },
    // { path: 'submit' ,
    //   component: SubmitApplicationComponent
    // },
    // { path: 'next-of-kin' ,
    //   component: NextOfKinComponent
    // },
    // { path: 'client-relatives' ,
    //   component: ClientRelativesComponent
    // },
    // { path: 'school-information' ,
    //   component: SchoolInformationComponent
    // },
    { path: 'client-history',
        component: _client_history_client_history_component__WEBPACK_IMPORTED_MODULE_8__["ClientHistoryComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    },
    {
        path: 'app',
        loadChildren: './loan-app/loan-app.module#LoanAppModule', canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    }
];
var LoanOriginationModule = /** @class */ (function () {
    function LoanOriginationModule() {
    }
    LoanOriginationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_10__["MatMomentDateModule"]
            ],
            declarations: [
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"],
                // PersonalInfoComponent,
                // LoanInfoComponent,
                // MFCIBComponent,
                // InsuranceInfoComponent,
                // NomineeComponent,
                // CoBorrowerComponent,
                // BusinessAppraisalComponent,
                // SchoolAppraisalComponent,
                // LoanUtilizationComponent,
                // PscComponent,
                // DocumentsComponent,
                // SubmitApplicationComponent,
                // BreadcrumbComponent,
                // ClientRelativesComponent,
                // NextOfKinComponent,
                // SchoolInformationComponent,
                _client_history_client_history_component__WEBPACK_IMPORTED_MODULE_8__["ClientHistoryComponent"],
                _client_history_SplitPipe_pipe__WEBPACK_IMPORTED_MODULE_9__["SplitPipe"]
            ],
            providers: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"], { provide: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_10__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"], useValue: { useUtc: true } }]
        })
    ], LoanOriginationModule);
    return LoanOriginationModule;
}());



/***/ }),

/***/ "./src/app/shared/services/loan-servicing.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/loan-servicing.service.ts ***!
  \***********************************************************/
/*! exports provided: LoanServicingService, LoanServicing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanServicingService", function() { return LoanServicingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanServicing", function() { return LoanServicing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Api_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Api.model */ "./src/app/shared/models/Api.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoanServicingService = /** @class */ (function () {
    function LoanServicingService(http, toastr, spinner) {
        this.http = http;
        this.toastr = toastr;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_1__["ApiModel"]();
    }
    // getAllClnts(brnchSeq) {
    //   const url = `${this.apiModel.host}/adminservice/api/all-active-clnts/` + this.auth.user.username + '/' + brnchSeq;
    //   return this.http.get<LoanServicing[]>
    //     (url, { headers: this.apiModel.httpHeaderGet }).pipe(
    //       tap((data: any) => this.spinner.hide()),
    //       catchError(this.handleError('getAllPaymentSchedules')));
    // }
    LoanServicingService.prototype.getAllClnts = function (brnchSeq, pageIndex, pageSize, filter, isCount) {
        var _this = this;
        var url = this.apiModel.host + "/adminservice/api/all-active-clnts?userId=" + this.auth.user.username + '&brnchSeq=' + brnchSeq + '&pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&filter=' + filter + '&isCount=' + isCount;
        return this.http.get(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.spinner.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllPaymentSchedules')));
    };
    LoanServicingService.prototype.getClientBySeq = function (seq) {
        var _this = this;
        var url = this.apiModel.host + "/loanservice/api/mw-clnts/" + seq;
        return this.http.get(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.spinner.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllPaymentSchedules')));
    };
    LoanServicingService.prototype.getClntTagForCnic = function (cnic) {
        var _this = this;
        var url = this.apiModel.host + "/setupservice/api/get-clnt-tag/" + cnic;
        return this.http.get(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.spinner.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllPaymentSchedules')));
    };
    LoanServicingService.prototype.addClntTagForCnic = function (cnic, tagSeq) {
        var _this = this;
        var url = this.apiModel.host + "/setupservice/api/add-clnt-to-tag-list/" + cnic + '/' + tagSeq;
        return this.http.get(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.spinner.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllPaymentSchedules')));
    };
    LoanServicingService.prototype.reportDeath = function (reportDeath) {
        return this.http.post(this.apiModel.host + '/adminservice/api/report-death', reportDeath, { headers: this.apiModel.httpHeaderPost });
    };
    LoanServicingService.prototype.reversReportDeath = function (dthRptSeq, cmnt) {
        var _this = this;
        return this.http.get(this.apiModel.host + '/adminservice/api/revert-report-death?dthRptSeq=' + dthRptSeq + '&cmnt=' + cmnt, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.toastr.success('Death Reporte Reversed ', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('reportDeath')));
    };
    //animal death reversal
    LoanServicingService.prototype.reversAnimalReportDeath = function (anmlRgstrSeq, cmnt) {
        var _this = this;
        return this.http.get(this.apiModel.host + '/adminservice/api/reverse-anml-death?anmlRgstrSeq=' + anmlRgstrSeq + '&cmnt=' + cmnt, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.toastr.success('Death Report Reversed ', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('reportDeath')));
    };
    LoanServicingService.prototype.printAnmlInsuClmForm = function (anmlRgstrSeq) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-anml-insur-claim-form/" + anmlRgstrSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    LoanServicingService.prototype.reschedule = function (method, clntSeq, months) {
        var _this = this;
        return this.http.get(this.apiModel.host + '/recoverydisbursementservice/api/genrate-repayment-schedule/' + method + '/' + clntSeq + '/' + months, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.toastr.success('Payment Schedule Updated', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('reschedule')));
    };
    // rescheduleForPosting(method:number, clntSeq: number, months: number) {
    //   return this.http.get<any>(this.apiModel.host + '/recoverydisbursementservice/api/genrate-repayment-schedule/' + method + '/' + clntSeq + '/' + months,
    //     { headers: this.apiModel.httpHeaderPost }).pipe(
    //       tap((data: any) => this.toastr.success('Payment Schedule Updated', 'Success!')),
    //       catchError(this.handleError('reschedule')));
    // }
    LoanServicingService.prototype.rescheduleForPosting = function (obj) {
        return this.http.post(this.apiModel.host + '/recoverydisbursementservice/api/reshedule-loan', obj, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) {
            console.log(p);
        }));
    };
    LoanServicingService.prototype.loanAdjustment = function (clntSeq) {
        var _this = this;
        return this.http.get(this.apiModel.host + '/recoverydisbursementservice/api/adjust-loan/' + clntSeq, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.toastr.success('Loan Adjusted', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('adjustment')));
    };
    LoanServicingService.prototype.payReportDeath = function (exp) {
        var _this = this;
        if (exp.expnsAmt <= 0) {
            this.toastr.error('Invalid Amount', 'Error!');
            return null;
        }
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-exp', exp, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.toastr.success('Funeral Charges Payed', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('reportDeath')));
    };
    LoanServicingService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        this.spinner.hide();
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            if (error.status == 400) {
                _this.toastr.error(error.error.error, operation + " failed:");
            }
            else {
                _this.toastr.error(error.message, operation + " failed:");
            }
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(result);
        };
    };
    LoanServicingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], LoanServicingService);
    return LoanServicingService;
}());

var LoanServicing = /** @class */ (function () {
    function LoanServicing() {
    }
    return LoanServicing;
}());



/***/ })

}]);
//# sourceMappingURL=pages-loan-origination-loan-origination-module.js.map