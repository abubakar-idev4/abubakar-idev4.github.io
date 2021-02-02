(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-setup-setup-module"],{

/***/ "./src/app/pages/setup/AuthGuard.service.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/setup/AuthGuard.service.ts ***!
  \**************************************************/
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
            if (screen.modUrl.indexOf("setup") >= 0) {
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

/***/ "./src/app/pages/setup/address-type/address-type.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/setup/address-type/address-type.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/address-type/address-type.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/setup/address-type/address-type.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Region Type <i class=\"fa fa-search\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\" title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 addBtn\">\r\n              <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" (click)=\"addItem()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n              <tr>\r\n                <th>Code</th>\r\n                <th>Description</th>\r\n                <th>TRANS DATE</th>\r\n                <th>Action</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n              <tr *ngFor=\"let code of pagedItems\">\r\n                <td>{{code.refCd}}</td>\r\n                <td>{{code.refCdCmnt}}</td>\r\n                <td>{{code.lastUpdDt | date: 'yyyy-MM-dd'}}</td>\r\n                <td>\r\n                  <a (click)=\"editItem(code.refCdSeq)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a (click)=\"deleteItem(code.refCdSeq)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                  <!-- <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a> -->\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class=\"back\">\r\n            <a routerLink=\"/setup\" class=\"btn btn-primary btn-min\"><i class=\"fa fa-chevron-left\"></i> Back</a>\r\n          </div>\r\n          <nav aria-label=\"Page navigation \">\r\n            <ul class=\"pagination justify-content-center\" *ngIf=\"pager.pages && pager.pages.length\">\r\n              <li class=\"page-item disabled\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n              </li>\r\n              <li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                <a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n              </li>\r\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<div class=\"modal fade\" id=\"businessector\" role=\"dialog\">\r\n  <div class=\"modal-dialog mymodal\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Add Region Type</h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"commonCodeValueForm\" (ngSubmit)=\"onCommonCodeValueSubmit()\" >\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol3-col\">\r\n              <label>Code:</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"valueCode\" [ngClass]=\"{ 'is-invalid': submitted && f.valueCode.errors }\" />\r\n            </div>\r\n            <div class=\"cCol3-col\">\r\n              <label>Name:</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"valueName\" [ngClass]=\"{ 'is-invalid': submitted && f.valueName.errors }\" />\r\n            </div>\r\n            <div class=\"cCol3-col\">\r\n              <label>Description:</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"valueDescription\" [ngClass]=\"{ 'is-invalid': submitted && f.valueDescription.errors }\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"submitted && f.valueCode.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n          <i  class=\"fa fa-exclamation-circle\"></i>\r\n          <strong *ngIf=\"f.valueCode.errors.required\">Please Enter Group Value Code</strong>\r\n        </div>\r\n        <div *ngIf=\"submitted && f.valueName.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n          <i  class=\"fa fa-exclamation-circle\"></i>\r\n          <strong *ngIf=\"f.valueName.errors\">Please Enter Group Value Name</strong>\r\n        </div>\r\n        <div *ngIf=\"submitted && f.valueDescription.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n          <i  class=\"fa fa-exclamation-circle\"></i>\r\n          <strong *ngIf=\"f.valueDescription.errors\">Please Enter Group Value Description</strong>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button  class=\"btn btn-primary\">Ok</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/setup/address-type/address-type.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/setup/address-type/address-type.component.ts ***!
  \********************************************************************/
/*! exports provided: AddressTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressTypeComponent", function() { return AddressTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddressTypeComponent = /** @class */ (function () {
    function AddressTypeComponent(router, DataService, formBuilder) {
        this.router = router;
        this.DataService = DataService;
        this.formBuilder = formBuilder;
        this.submitted = false;
        // array of all items to be paged
        this.allItems = [];
        // pager objecte
        this.pager = {};
        // paged items
        this.pagedItems = [];
    }
    AddressTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonCodeValueForm = this.formBuilder.group({
            groupKey: [sessionStorage.getItem("clickCommonCode")],
            formSaveKey: ['add'],
            valueCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            valueName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            valueDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.DataService.getCommonCodeValue(sessionStorage.getItem("clickCommonCode")).subscribe(function (data) {
            console.log(data);
            _this.allItems = data;
            // initialize to page 1
            _this.setPage(1);
        }, function (error) {
            console.log("err");
            console.log("err", error);
        });
    };
    Object.defineProperty(AddressTypeComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.commonCodeValueForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddressTypeComponent.prototype.onCommonCodeValueSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.commonCodeValueForm.invalid) {
            return;
        }
        var formValue = this.commonCodeValueForm.value;
        console.log(formValue.formSaveKey);
        if (formValue.formSaveKey === "add") {
            this.DataService.addCommonCodeValue(formValue).subscribe(function (data) {
                $("#businessector").modal('hide');
                _this.pagedItems.push(data.group);
                console.log(data);
                sessionStorage.setItem("groupKey", data['refCdSeq']);
            }, function (error) {
                console.log("err", error);
            });
        }
        else if (formValue.formSaveKey === "update") {
            this.DataService.updateCommonCodeValue(formValue).subscribe(function (data) {
                $("#businessector").modal('hide');
                _this.pagedItems.splice(_this.pagedItems.indexOf(data.group['refCdSeq']), 1);
                _this.pagedItems.push(data.group);
                //console.log(data.group['refCdSeq']);
                sessionStorage.setItem("groupKey", data['refCdSeq']);
            }, function (error) {
                console.log("err", error);
            });
            //console.log(formValue.groupSaveKey);
        }
        //this.DataService.formValue.groupSaveKey(formValue).subscribe((data) =>{
        return false;
    };
    //pagenation
    AddressTypeComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.DataService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    //delete
    AddressTypeComponent.prototype.deleteItem = function (passedId) {
        var _this = this;
        this.DataService.delCommonCodeValue(passedId).subscribe(function (result) {
            _this.pagedItems.splice(_this.pagedItems.indexOf(passedId), 1);
            console.log(_this.pagedItems);
        }, function (error) { return console.log('There was an error: ', error); });
    };
    //add
    AddressTypeComponent.prototype.addItem = function () {
        this.submitted = false;
        $("#businessector").modal('show');
        this.commonCodeValueForm = this.formBuilder.group({
            groupKey: [sessionStorage.getItem("clickCommonCode")],
            formSaveKey: ['add'],
            valueCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            valueName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            valueDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    //edit
    AddressTypeComponent.prototype.editItem = function (passedId) {
        var _this = this;
        console.log('edit');
        this.DataService.editCommonCodeValue(passedId).subscribe(function (result) {
            console.log(result);
            $("#businessector").modal('show');
            _this.commonCodeValueForm = _this.formBuilder.group({
                groupKey: [result.refCdGrpKey],
                codeValueSeq: [result.refCdSeq],
                formSaveKey: ['update'],
                valueCode: [result.refCd],
                valueName: [result.refCdCmnt],
                valueDescription: [result.refCdDscr]
            });
        }, function (error) { return console.log('There was an error: ', error); });
    };
    AddressTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-address-type',
            template: __webpack_require__(/*! ./address-type.component.html */ "./src/app/pages/setup/address-type/address-type.component.html"),
            styles: [__webpack_require__(/*! ./address-type.component.css */ "./src/app/pages/setup/address-type/address-type.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AddressTypeComponent);
    return AddressTypeComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/answer/answer.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/setup/answer/answer.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/answer/answer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/setup/answer/answer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"mysearchbox\">\r\n              <h6 class=\"d-inline-block searchshow\">Answer\r\n                <!-- <i class=\"fa fa-search\"></i> -->\r\n              </h6>\r\n              <div class=\"mysearch\">\r\n                <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                 <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\" title=\"Type in a name\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6 addBtn\">\r\n            <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#businessector\" (click)=\"onAddNewClick()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n          </div>\r\n          <div class=\"modal fade\" id=\"businessector\" role=\"dialog\">\r\n            <div class=\"modal-dialog big mymodal\"> \t\t\t\t\t\t\t\t\t\t\r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Answer</h5>\r\n                </div>\r\n                <form [formGroup]=\"answerForm\" (ngSubmit)=\"addAnswerSubmit()\">\r\n                <div class=\"modal-body\">\r\n                <ul class=\"infolist\">\r\n                </ul>\r\n                  <div class=\"cRow\">\r\n                      <div class=\"cCol2\">\r\n                          <label>Answer</label>\r\n                          <input type=\"text\" formControlName=\"answrStr\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.answrStr.errors }\" />\r\n                          <div *ngIf=\"submitted && form.answrStr.errors\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"form.answrStr.errors.required\">Answer String is required</div>\r\n                          </div>\r\n                        </div>\r\n \r\n                        <div class=\"cCol2\">\r\n                            <label>Answer Score</label>\r\n                            <input type=\"text\" formControlName=\"answrScore\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.answrScore.errors }\" />\r\n                            <div *ngIf=\"submitted && form.answrScore.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"form.answrScore.errors.required\">Answer Score is required</div>\r\n                            </div>\r\n                          </div>      \r\n                    <div class=\"cCol2\">\r\n                        <label>Status:</label>\r\n                        <select type=\"\" formControlName=\"answrStsKey\"class=\"form-control\"  id=\"status\" [ngClass]=\"{ 'is-invalid': submitted && form.answrStsKey.errors }\">\r\n                            <option *ngFor=\"let status of statusArray\" [value]=\"status.codeKey\" >{{status.codeValue}}</option>\r\n                          </select>\r\n                        <div *ngIf=\"submitted && form.answrStsKey.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"form.answrStsKey.errors.required\">Status is required</div>\r\n                        </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"modal-footer text-center\">\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" (click)=\"addAnswerSubmit()\">Ok</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n          <div class=\"table-responsive\">\r\n        <table class=\"table\" id=\"myTable\">\r\n          <thead class=\"thead-light\">\r\n            <tr>\r\n              <th>Answer ID</th>\r\n              <th>Answer Text</th>\r\n              <th>Score</th>\r\n              <th>Status</th>\r\n              <th>Action</th>\r\n            </tr>\r\n</thead>\r\n<tbody>\t\r\n  <tr *ngFor=\"let answer of answers\">\r\n    <td>{{answer.answrId}}</td> \r\n    <td>{{answer.answrStr}}</td>\r\n    <td>{{answer.answrScore}}</td>\r\n    <td>{{findValueByKey(answer.answrStsKey)}}</td>\r\n    <td>\t\t\t\t\t\t\r\n      <a  class=\"iconBtn\" (click)=\"onEdit(answer)\"><i class=\"fa fa-pencil\"></i></a>\r\n      <a  class=\"iconBtn delBtn\" (click)=\"onDelete(answer.answrSeq)\"><i class=\"fa fa-trash-o\"></i></a>\r\n      <!-- <a  class=\"iconBtn\"><i class=\"fa fa-history\"></i></a> -->\r\n    </td>\r\n  </tr>\r\n</tbody>\r\n</table>\r\n      </div>\t\r\n      <!-- <div class=\"back\">\r\n        <a href=\"setup.html\" class=\"btn btn-primary btn-min\"><i class=\"fa fa-chevron-left\"></i> Back</a>\r\n      </div> -->\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/setup/answer/answer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/setup/answer/answer.component.ts ***!
  \********************************************************/
/*! exports provided: AnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerComponent", function() { return AnswerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_answer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/answer.service */ "./src/app/shared/services/answer.service.ts");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _shared_models_Answer_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/models/Answer.model */ "./src/app/shared/models/Answer.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AnswerComponent = /** @class */ (function () {
    function AnswerComponent(formBuilder, answerService, commonService) {
        this.formBuilder = formBuilder;
        this.answerService = answerService;
        this.commonService = commonService;
        this.submitted = false;
        this.addAnswer = new _shared_models_Answer_model__WEBPACK_IMPORTED_MODULE_3__["Answer"]();
        this.isEdit = false;
    }
    AnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.answerForm = this.formBuilder.group({
            answrStr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            answrScore: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            answrStsKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.commonService.getValuesByGroupName('\tSTATUS').subscribe(function (d) { return _this.statusArray = d; });
        this.answerService.getAnswers(sessionStorage.getItem('qstSeq')).subscribe(function (data) { return _this.answers = data; });
    };
    Object.defineProperty(AnswerComponent.prototype, "form", {
        get: function () {
            return this.answerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AnswerComponent.prototype.onAddNewClick = function () {
        this.isEdit = false;
        this.answerForm.reset();
        this.addAnswer = new _shared_models_Answer_model__WEBPACK_IMPORTED_MODULE_3__["Answer"]();
        $('#businessector').modal('show');
    };
    AnswerComponent.prototype.addAnswerSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.answerForm.invalid) {
            return;
        }
        this.addAnswer.answrStr = this.answerForm.value.answrStr;
        this.addAnswer.answrScore = this.answerForm.value.answrScore;
        this.addAnswer.answrStsKey = this.answerForm.value.answrStsKey;
        this.addAnswer.qstSeq = parseInt(sessionStorage.getItem('qstSeq'));
        $('#businessector').modal('hide');
        console.log(this.addAnswer);
        if (this.isEdit) {
            this.answerService.updateAnswer(this.addAnswer).subscribe(function (data) {
                _this.addAnswer = data;
                _this.answerService.getAnswers(sessionStorage.getItem('qstSeq')).subscribe(function (data) { return _this.answers = data; });
            });
        }
        else {
            this.answerService.addAnswer(this.addAnswer).subscribe(function (data) {
                _this.addAnswer = data;
                _this.answerService.getAnswers(sessionStorage.getItem('qstSeq')).subscribe(function (data) { return _this.answers = data; });
            });
        }
    };
    AnswerComponent.prototype.onEdit = function (answer) {
        this.isEdit = true;
        this.answerForm.patchValue(answer);
        console.log(answer);
        this.addAnswer = answer;
        $('#businessector').modal('show');
    };
    AnswerComponent.prototype.onDelete = function (answer) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Answer?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.answerService.deleteAnswer(answer).subscribe(function (data) {
                    _this.answerService.getAnswers(sessionStorage.getItem('qstSeq')).subscribe(function (data) { return _this.answers = data; });
                });
            }
        });
        console.log(answer);
    };
    AnswerComponent.prototype.findValueByKey = function (key) {
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
    AnswerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-answer',
            template: __webpack_require__(/*! ./answer.component.html */ "./src/app/pages/setup/answer/answer.component.html"),
            styles: [__webpack_require__(/*! ./answer.component.css */ "./src/app/pages/setup/answer/answer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _shared_services_answer_service__WEBPACK_IMPORTED_MODULE_1__["AnswerService"], _shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], AnswerComponent);
    return AnswerComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/approval-workflow/add-workflow/add-workflow.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/setup/approval-workflow/add-workflow/add-workflow.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/approval-workflow/add-workflow/add-workflow.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/setup/approval-workflow/add-workflow/add-workflow.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"content\">\r\n      <h6 class=\"mt-3\">Approval Workflow</h6>\r\n      <form class=\"md-float-material\" [formGroup]=\"approvalWorkflowForm\" (ngSubmit)=\"onApprovalWorkSubmit()\" >\r\n     <div class=\"cRow\">\r\n          <div class=\"cCol1\">\r\n            <label>Wokflow ID:</label>\r\n            <input type=\"text\" value=\"123456\" class=\"form-control\" formControlName=\"workflowId\" [ngClass]=\"{ 'is-invalid': submitted && f.workflowId.errors }\" />\r\n          </div>\r\n          <div class=\"cCol1\">\r\n            <label>Description:</label>\r\n            <input type=\"text\" class=\"form-control\" formControlName=\"description\" [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\" />\r\n          </div>\r\n          <div class=\"cCol1\">\r\n            <label>Object:</label>\r\n            <select class=\"form-control\" formControlName=\"objectKey\">\r\n              <option value=\"1\" [selected] =\"1\">Object 1</option>\r\n              <option value=\"2\">Object 2</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"cCol1\">\r\n            <label>Status:</label>\r\n            <select class=\"form-control\" formControlName=\"statusKey\">\r\n              <option value=\"1\" [selected] =\"1\">Active</option>\r\n              <option value=\"2\">Pending</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      \r\n      <div class=\"cRow\">\r\n\t\t\t\t<div class=\"cCol6\">\r\n\t\t\t\t\t<label>Rule Criteria:</label>\r\n          <button type=\"button\" class=\"btn pull-right btn-dots\" data-toggle=\"modal\" data-target=\"#cmmoncodes\"></button>\r\n\t\t\t\t\t <textarea class=\"form-control\" formControlName=\"ruleCriteria\" [ngClass]=\"{ 'is-invalid': submitted && f.ruleCriteria.errors }\"></textarea>\r\n                     <div class=\"modal fade\" id=\"cmmoncodes\" role=\"dialog\">\r\n                        <div class=\"modal-dialog mymodal big\"> \r\n                        <!-- Modal content-->\r\n                        <div class=\"modal-content\">\r\n                          <div class=\"modal-header\">\r\n                            <h5 class=\"modal-title\">Rule Condition</h5>\r\n                          </div>\r\n                          <div class=\"modal-body\">\r\n                            <div class=\"p10\">\r\n        \t\t\t<div class=\"row\">\r\n        \t<div class=\"col-md-3 mb-2\">\r\n            \t<div class=\"filter noborder\">\r\n                    <h6 class=\"border-title\">Data Items</h6>\r\n                \t<a href=\"#.\" class=\"acc_trigger inactive-header active-header\">Client</a>\r\n                    <div class=\"collapse acc_container\" style=\"display: block;\">\r\n                    \t <div class=\"listmenu\">\r\n                            <ul>\r\n                              \t<li>Gender</li>\r\n                                <li>Merital Status</li>\r\n                            </ul>\r\n                         </div>\r\n                    </div>\r\n                    <a class=\"acc_trigger inactive-header\">Credit Information</a>\r\n                    <div class=\"collapse acc_container\">\r\n                    \t <div class=\"listmenu\">\r\n                            <ul>\r\n                              \t<li>Approved Amount</li>\r\n                                <li>Requested Amount</li>\r\n                            </ul>\r\n                         </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-9 mt-3\">\r\n            \t<div class=\"cRow\">\r\n            \t<textarea formControlName=\"approvalCriteria\" class=\"form-control large\" placeholder=\"Days to complete < 8\"></textarea>\r\n                </div>\r\n            </div>\r\n        </div>        \r\n                </div>\r\n                          </div> \r\n                          <div class=\"modal-footer text-center\">\r\n                            <button type=\"button\" class=\"btn btn-primary btn-min\" (click)=\"onCriteriaClick()\" data-dismiss=\"modal\">Ok</button>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n      \r\n      <div class=\"pt-1 mt-3\">\r\n        <label>Select Approver:</label>\r\n      </div>\r\n      <div class=\"checkbox mb-1\">\r\n            <div class=\"custom-control custom-checkbox\">\r\n              <input type=\"checkbox\" id=\"checkbox1\" class=\"custom-control-input\" formControlName=\"isRegionalManager\">\r\n              <label class=\"custom-control-label\" for=\"checkbox1\"> Regional Manager</label>\r\n            </div>\r\n      </div>\r\n      <div class=\"checkbox mb-1\">\r\n            <div class=\"custom-control custom-checkbox\">\r\n              <input type=\"checkbox\" id=\"checkbox2\" class=\"custom-control-input\" formControlName=\"isAreaManager\">\r\n              <label class=\"custom-control-label\" for=\"checkbox2\"> Area Manager</label>\r\n            </div>\r\n      </div>\r\n      <div class=\"checkbox mb-1\">\r\n            <div class=\"custom-control custom-checkbox\">\r\n              <input type=\"checkbox\" id=\"checkbox3\" class=\"custom-control-input\" formControlName=\"isBranchManager\">\r\n              <label class=\"custom-control-label\" for=\"checkbox3\"> Branch Manager</label>\r\n            </div>\r\n      </div>\r\n      <div *ngIf=\"submitted && f.workflowId.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n         <i  class=\"fa fa-exclamation-circle\"></i>  \r\n         <strong *ngIf=\"f.workflowId.errors.required\">Please Enter Wokflow ID</strong>\r\n       </div>\r\n       <div *ngIf=\"submitted && f.description.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n         <i  class=\"fa fa-exclamation-circle\"></i>  \r\n         <strong *ngIf=\"f.description.errors.required\">Please Enter Description</strong>\r\n       </div>\r\n       <div *ngIf=\"submitted && f.ruleCriteria.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n         <i  class=\"fa fa-exclamation-circle\"></i>  \r\n         <strong *ngIf=\"f.ruleCriteria.errors.required\">Please Enter Rule Criteria</strong>\r\n       </div>\r\n      <div class=\"mt-5\">\r\n      <button  class=\"btn btn-primary\">Continue</button>\r\n      <button class=\"btn btn-default btn-min\">Save</button>\r\n    </div>\r\n    </form>\r\n      \r\n    </div>\r\n  </div>\r\n</main>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/setup/approval-workflow/add-workflow/add-workflow.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/setup/approval-workflow/add-workflow/add-workflow.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AddWorkflowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWorkflowComponent", function() { return AddWorkflowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddWorkflowComponent = /** @class */ (function () {
    function AddWorkflowComponent(router, DataService, formBuilder) {
        this.router = router;
        this.DataService = DataService;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.model = {};
        // array of all items to be paged
        this.allItems = [];
        // pager object
        this.pager = {};
        // paged items
        this.pagedItems = [];
    }
    AddWorkflowComponent.prototype.ngOnInit = function () {
        this.approvalWorkflowForm = this.formBuilder.group({
            workflowId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            objectKey: ['1'],
            statusKey: ['1'],
            ruleCriteria: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            isRegionalManager: [false],
            isAreaManager: [false],
            isBranchManager: [false],
            approvalCriteria: [''],
        });
    };
    Object.defineProperty(AddWorkflowComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.approvalWorkflowForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddWorkflowComponent.prototype.onApprovalWorkSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.approvalWorkflowForm.invalid) {
            return;
        }
        var formValue = this.approvalWorkflowForm.value;
        this.DataService.addAprovalWorkflow(formValue).subscribe(function (data) {
            //let usr = JSON.parse(data);
            console.log(data);
            _this.router.navigate(["setup/approval-workflow"]);
        }, function (error) {
            console.log("err", error);
            //this.addToast({title:'Error', msg:error._body, timeout: 3000, theme:'default', position:'bottom-right', type:'error', closeOther:true})
        });
        return false;
    };
    AddWorkflowComponent.prototype.onCriteriaClick = function () {
        var formValue = this.approvalWorkflowForm.value;
        this.approvalWorkflowForm = this.formBuilder.group({
            workflowId: [formValue['workflowId'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [formValue['description'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            objectKey: [formValue['objectKey']],
            statusKey: [formValue['statusKey']],
            ruleCriteria: [formValue['approvalCriteria'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            isRegionalManager: [formValue['isRegionalManager']],
            isAreaManager: [formValue['isAreaManager']],
            isBranchManager: [formValue['isBranchManager']],
            approvalCriteria: [''],
        });
        //console.log(formValue['ruleCriteriafun']);
    };
    AddWorkflowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-workflow',
            template: __webpack_require__(/*! ./add-workflow.component.html */ "./src/app/pages/setup/approval-workflow/add-workflow/add-workflow.component.html"),
            styles: [__webpack_require__(/*! ./add-workflow.component.css */ "./src/app/pages/setup/approval-workflow/add-workflow/add-workflow.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], AddWorkflowComponent);
    return AddWorkflowComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/approval-workflow/approval-workflow.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/setup/approval-workflow/approval-workflow.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/approval-workflow/approval-workflow.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/setup/approval-workflow/approval-workflow.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main class=\"main\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t<div class=\"leftSideBar\">\r\n\t\t\t\t\t<h6><i class=\"fa fa-sliders fa-lg\"></i> Setup</h6>\r\n\t\t\t\t\t<div class=\"leftmenu\">\r\n\t\t\t\t\t\t<ul>\r\n\t\t                 \t<li routerLinkActive=\"active\"><a routerLink=\"/setup\">Common Codes</a></li>\r\n\t\t                     <li routerLinkActive=\"active\"><a routerLink=\"/setup/organization\">Organization</a></li>\r\n\t\t                    \r\n\t\t                     <li routerLinkActive=\"active\"><a routerLink=\"/setup/geography\">Geography</a></li>\r\n\t\t                     <!-- <li routerLinkActive=\"active\"><a routerLink=\"/setup/approval-workflow\">Approval Workflow</a></li> -->\r\n\t\t\t\t\t\t\t <li routerLinkActive=\"active\"><a routerLink=\"/setup/communication-workflow\">Communication Workflow</a></li>\r\n\t\t\r\n\t\t                     <li><a href=\"#\">Products</a></li>\r\n\t\t                     <li><a href=\"#\">Rules</a></li>\r\n\t\t                     <li><a href=\"#\">User Management</a></li>\r\n\t\t                 </ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t<div class=\"content mb-md-5\">\r\n                <div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n                        <div class=\"mysearchbox\">\r\n\t\t\t\t\t\t\t<h6 class=\"d-inline-block searchshow\">Approval Workflow <i class=\"fa fa-search\"> </i></h6>\r\n                            <div class=\"mysearch\">\r\n                            \t<a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                            \t <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\" title=\"Type in a name\">\r\n                            </div>\r\n                            </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t <div class=\"col-sm-6 addBtn\">\r\n                         <a class=\"btn btn-primary btn-sm\" routerLink=\"/setup/approval-workflow/add-workflow\"><i class=\"fa fa-plus\"></i> Add</a>\r\n        </div>\r\n        \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t<table class=\"table\" id=\"myTable\">\r\n\t\t\t\t\t<thead class=\"thead-light\">\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>Workflow  ID</th>\r\n\t\t\t\t\t\t\t<th>Rule name</th>\r\n                            <th>Object</th>\r\n                            <th>Criteria</th>\r\n                            <th>Status</th>\r\n\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\t\r\n\t\t\t\t\t\t<tr *ngFor=\"let approval of pagedItems\">\r\n\t\t\t\t\t\t\t<td>{{approval.aprvlWfSeq}}</td>\r\n\t\t\t\t\t\t\t<td>{{approval.aprvlWfNm}}</td>\r\n                            <td>{{approval.aprvlWfSeq}}</td>\r\n                            <td>{{approval.aprvlWfRulStr}}</td>\r\n                            <td class=\"colorGreen\">{{approval.aprvlWfStsKey}}</td>\r\n\t\t\t\t\t\t\t<td>\r\n                            \t<a routerLink=\"/setup/approval-workflow/add-workflow{{approval.aprvlWfSeq}}\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                                <a (click)=\"deleteItem(approval.aprvlWfSeq)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n                       \r\n\t\t\t\t\t\t\r\n                       \r\n                        <!--<tr>\r\n\t\t\t\t\t\t\t<td>4</td>\r\n\t\t\t\t\t\t\t<td>Description will here</td>\r\n                            <td>Client</td>\r\n                            <td>Create Date = Current Date</td>\r\n                            <td class=\"colorRed\">Disable</td>\r\n\t\t\t\t\t\t\t<td>\r\n                            \t<a routerLink=\"/setup/approval-workflow/add-workflow\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                                <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>-->\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t\t<nav aria-label=\"Page navigation \">\r\n\t\t\t\t<ul class=\"pagination justify-content-center\" *ngIf=\"pager.pages && pager.pages.length\">\r\n\t\t\t\t\t<li class=\"page-item disabled\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</nav>\t\r\n\t\t\t\t\t\r\n                </div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</main>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/setup/approval-workflow/approval-workflow.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/setup/approval-workflow/approval-workflow.component.ts ***!
  \******************************************************************************/
/*! exports provided: ApprovalWorkflowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalWorkflowComponent", function() { return ApprovalWorkflowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApprovalWorkflowComponent = /** @class */ (function () {
    function ApprovalWorkflowComponent(router, DataService, formBuilder) {
        this.router = router;
        this.DataService = DataService;
        this.formBuilder = formBuilder;
        // array of all items to be paged
        this.allItems = [];
        // pager object
        this.pager = {};
        // paged items
        this.pagedItems = [];
    }
    ApprovalWorkflowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.DataService.getAprovalWorkflow().subscribe(function (data) {
            console.log(data);
            _this.allItems = data;
            // initialize to page 1
            _this.setPage(1);
        }, function (error) {
            console.log("err");
            console.log("err", error);
        });
    };
    //pagenation
    ApprovalWorkflowComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.DataService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    //delete
    ApprovalWorkflowComponent.prototype.deleteItem = function (passedId) {
        var _this = this;
        this.DataService.delAprovalWorkflow(passedId).subscribe(function (result) {
            _this.pagedItems.splice(_this.pagedItems.indexOf(passedId), 1);
            console.log(_this.pagedItems);
        }, function (error) { return console.log('There was an error: ', error); });
    };
    ApprovalWorkflowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-approval-workflow',
            template: __webpack_require__(/*! ./approval-workflow.component.html */ "./src/app/pages/setup/approval-workflow/approval-workflow.component.html"),
            styles: [__webpack_require__(/*! ./approval-workflow.component.css */ "./src/app/pages/setup/approval-workflow/approval-workflow.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ApprovalWorkflowComponent);
    return ApprovalWorkflowComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/business-activity/business-activity.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/setup/business-activity/business-activity.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/business-activity/business-activity.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/setup/business-activity/business-activity.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"mysearchbox\">\r\n              <h6 class=\"d-inline-block searchshow\">Business Activity\r\n                <!-- <i class=\"fa fa-search\"></i> -->\r\n              </h6>\r\n              <div class=\"mysearch\">\r\n                <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                 <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\" title=\"Type in a name\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6 addBtn\">\r\n            <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#businessector\" (click)=\"onAddNewClick()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n          </div>\r\n          <div class=\"modal fade\" id=\"businessector\" role=\"dialog\">\r\n            <div class=\"modal-dialog big mymodal\"> \t\t\t\t\t\t\t\t\t\t\r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Business Activity</h5>\r\n                </div>\r\n                <form [formGroup]=\"businessActivityForm\" (ngSubmit)=\"addBusinessActivitySubmit()\">\r\n                <div class=\"modal-body\">\r\n                <ul class=\"infolist\">\r\n                </ul>\r\n                  <div class=\"cRow\">\r\n                      <div class=\"cCol2\">\r\n                          <label>Business Activity Name</label>\r\n                          <input type=\"text\" formControlName=\"bizActyNm\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.bizActyNm.errors }\" />\r\n                          <div *ngIf=\"submitted && form.bizActyNm.errors\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"form.bizActyNm.errors.required\">Business Activity Name is required</div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"cCol2\">\r\n                            <label>Sort Order</label>\r\n                            <input type=\"text\" formControlName=\"bizActySortOrdr\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.bizActySortOrdr.errors }\" />\r\n                            <div *ngIf=\"submitted && form.bizActySortOrdr.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"form.bizActySortOrdr.errors.required\">Sort Order is required</div>\r\n                            </div>\r\n                          </div>\r\n  \r\n                        <div class=\"cCol2\">\r\n                        <label>Status:</label>\r\n                        <select type=\"\" formControlName=\"bizActyStsKey\"class=\"form-control\"  id=\"status\" [ngClass]=\"{ 'is-invalid': submitted && form.bizActyStsKey.errors }\">\r\n                            <option *ngFor=\"let status of statusArray\" [value]=\"status.codeKey\" >{{status.codeValue}}</option>\r\n                          </select>\r\n                        <div *ngIf=\"submitted && form.bizActyStsKey.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"form.bizActyStsKey.errors.required\">Status is required</div>\r\n                        </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"modal-footer text-center\">\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" (click)=\"addBusinessActivitySubmit()\">Ok</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n          <div class=\"table-responsive\">\r\n        <table class=\"table\" id=\"myTable\">\r\n          <thead class=\"thead-light\">\r\n            <tr>\r\n              <th>Business Activity ID</th>\r\n              <th>Business Activity Name</th>\r\n              <th>Sort Order</th>\r\n              <th>Status</th>\r\n              <th>Action</th>\r\n            </tr>\r\n</thead>\r\n<tbody>\t\r\n  <tr *ngFor=\"let businessActivity of businessActivities\">\r\n    <td>{{businessActivity.bizActyId}}</td> \r\n    <td>{{businessActivity.bizActyNm}}</td>\r\n    <td>{{businessActivity.bizActySortOrdr}}</td>\r\n    <td>{{findValueByKey(businessActivity.bizActyStsKey)}}</td>\r\n    <td>\t\t\t\t\t\t\r\n      <a  class=\"iconBtn\" (click)=\"onEdit(businessActivity)\"><i class=\"fa fa-pencil\"></i></a>\r\n      <a  class=\"iconBtn delBtn\" (click)=\"onDelete(businessActivity.bizActySeq)\"><i class=\"fa fa-trash-o\"></i></a>\r\n      <!-- <a  class=\"iconBtn\"><i class=\"fa fa-history\"></i></a> -->\r\n    </td>\r\n  </tr>\r\n</tbody>\r\n</table>\r\n      </div>\t\r\n      <!-- <div class=\"back\">\r\n        <a href=\"setup.html\" class=\"btn btn-primary btn-min\"><i class=\"fa fa-chevron-left\"></i> Back</a>\r\n      </div> -->\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/setup/business-activity/business-activity.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/setup/business-activity/business-activity.component.ts ***!
  \******************************************************************************/
/*! exports provided: BusinessActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessActivityComponent", function() { return BusinessActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_business_activity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/business-activity.service */ "./src/app/shared/services/business-activity.service.ts");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _shared_models_business_activity_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/models/business-activity.model */ "./src/app/shared/models/business-activity.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BusinessActivityComponent = /** @class */ (function () {
    function BusinessActivityComponent(formBuilder, businessActivityService, commonService) {
        this.formBuilder = formBuilder;
        this.businessActivityService = businessActivityService;
        this.commonService = commonService;
        this.submitted = false;
        this.addBusinessActivity = new _shared_models_business_activity_model__WEBPACK_IMPORTED_MODULE_3__["BusinessActivity"]();
        this.isEdit = false;
    }
    BusinessActivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.businessActivityForm = this.formBuilder.group({
            bizActyNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            bizActyStsKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            bizActySortOrdr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.commonService.getValuesByGroupName('\tSTATUS').subscribe(function (d) { return _this.statusArray = d; });
        this.businessActivityService.getBusinessActivities(sessionStorage.getItem('bizSectSeq')).subscribe(function (data) { return _this.businessActivities = data; });
    };
    Object.defineProperty(BusinessActivityComponent.prototype, "form", {
        get: function () {
            return this.businessActivityForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    BusinessActivityComponent.prototype.onAddNewClick = function () {
        this.isEdit = false;
        this.businessActivityForm.reset();
        this.addBusinessActivity = new _shared_models_business_activity_model__WEBPACK_IMPORTED_MODULE_3__["BusinessActivity"]();
        $('#businessector').modal('show');
    };
    BusinessActivityComponent.prototype.addBusinessActivitySubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.businessActivityForm.invalid) {
            return;
        }
        this.addBusinessActivity.bizActyNm = this.businessActivityForm.value.bizActyNm;
        this.addBusinessActivity.bizActyStsKey = this.businessActivityForm.value.bizActyStsKey;
        this.addBusinessActivity.bizActySortOrdr = this.businessActivityForm.value.bizActySortOrdr;
        this.addBusinessActivity.bizSectSeq = parseInt(sessionStorage.getItem('bizSectSeq'));
        $('#businessector').modal('hide');
        console.log(this.addBusinessActivity);
        if (this.isEdit) {
            this.businessActivityService.updateBusinessActivity(this.addBusinessActivity).subscribe(function (data) {
                _this.addBusinessActivity = data;
                _this.businessActivityService.getBusinessActivities(sessionStorage.getItem('bizSectSeq')).subscribe(function (data) { return _this.businessActivities = data; });
            });
        }
        else {
            this.businessActivityService.addBusinessActivity(this.addBusinessActivity).subscribe(function (data) {
                _this.addBusinessActivity = data;
                _this.businessActivityService.getBusinessActivities(sessionStorage.getItem('bizSectSeq')).subscribe(function (data) { return _this.businessActivities = data; });
            });
        }
    };
    BusinessActivityComponent.prototype.onEdit = function (businessActivity) {
        this.isEdit = true;
        this.businessActivityForm.patchValue(businessActivity);
        console.log(businessActivity);
        this.addBusinessActivity = businessActivity;
        $('#businessector').modal('show');
    };
    BusinessActivityComponent.prototype.onDelete = function (businessActivity) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Business Activity?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.businessActivityService.deleteBusinessActivity(businessActivity).subscribe(function (data) {
                    _this.businessActivityService.getBusinessActivities(sessionStorage.getItem('bizSectSeq')).subscribe(function (data) { return _this.businessActivities = data; });
                });
            }
        });
        console.log(businessActivity);
    };
    BusinessActivityComponent.prototype.findValueByKey = function (key) {
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
    BusinessActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-business-activity',
            template: __webpack_require__(/*! ./business-activity.component.html */ "./src/app/pages/setup/business-activity/business-activity.component.html"),
            styles: [__webpack_require__(/*! ./business-activity.component.css */ "./src/app/pages/setup/business-activity/business-activity.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _shared_services_business_activity_service__WEBPACK_IMPORTED_MODULE_1__["BusinessActivityService"], _shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], BusinessActivityComponent);
    return BusinessActivityComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/business-sector/business-sector.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/setup/business-sector/business-sector.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/business-sector/business-sector.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/setup/business-sector/business-sector.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"mysearchbox\">\r\n              <h6 class=\"d-inline-block searchshow\">Business Sector\r\n                <!-- <i class=\"fa fa-search\"></i> -->\r\n              </h6>\r\n              <div class=\"mysearch\">\r\n                <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                 <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\" title=\"Type in a name\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6 addBtn\">\r\n            <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#businessector\" (click)=\"onAddNewClick()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n          </div>\r\n          <div class=\"modal fade\" id=\"businessector\" role=\"dialog\">\r\n            <div class=\"modal-dialog big mymodal\"> \t\t\t\t\t\t\t\t\t\t\r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Business Sector</h5>\r\n                </div>\r\n                <form [formGroup]=\"businessSectorForm\" (ngSubmit)=\"addBusinessSectorSubmit()\">\r\n                <div class=\"modal-body\">\r\n                <ul class=\"infolist\">\r\n                </ul>\r\n                  <div class=\"cRow\">\r\n                      <div class=\"cCol2\">\r\n                          <label>Business Sector Name</label>\r\n                          <input type=\"text\" formControlName=\"bizSectNm\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.bizSectNm.errors }\" />\r\n                          <div *ngIf=\"submitted && form.bizSectNm.errors\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"form.bizSectNm.errors.required\">Business Sector Name is required</div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"cCol2\">\r\n                            <label>Sort Order</label>\r\n                            <input type=\"text\" formControlName=\"bizSectSortOrdr\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.bizSectSortOrdr.errors }\" />\r\n                            <div *ngIf=\"submitted && form.bizSectSortOrdr.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"form.bizSectSortOrdr.errors.required\">Sort Order is required</div>\r\n                            </div>\r\n                          </div>\r\n  \r\n                        <div class=\"cCol2\">\r\n                        <label>Status:</label>\r\n                        <select type=\"\" formControlName=\"bizSectStsKey\"class=\"form-control\"  id=\"status\" [ngClass]=\"{ 'is-invalid': submitted && form.bizSectStsKey.errors }\">\r\n                            <option *ngFor=\"let status of statusArray\" [value]=\"status.codeKey\" >{{status.codeValue}}</option>\r\n                          </select>\r\n                        <div *ngIf=\"submitted && form.bizSectStsKey.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"form.bizSectStsKey.errors.required\">Status is required</div>\r\n                        </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"modal-footer text-center\">\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" (click)=\"addBusinessSectorSubmit()\">Ok</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n          <div class=\"table-responsive\">\r\n        <table class=\"table\" id=\"myTable\">\r\n          <thead class=\"thead-light\">\r\n            <tr>\r\n              <th>Business Sector ID</th>\r\n              <th>Business Sector Name</th>\r\n              <th>Sort Order</th>\r\n              <th>Status</th>\r\n              <th>Action</th>\r\n            </tr>\r\n</thead>\r\n<tbody>\t\r\n  <tr *ngFor=\"let businessSector of businessSectors\">\r\n    <td>{{businessSector.bizSectId}}</td> \r\n    <td><a [routerLink]=\"['/setup/business-activity']\" (click)=\"onClick(businessSector.bizSectSeq)\" >{{businessSector.bizSectNm}}</a></td>\r\n    <td>{{businessSector.bizSectSortOrdr}}</td> \r\n    <td>{{findValueByKey(businessSector.bizSectStsKey)}}</td>\r\n    <td>\t\t\t\t\t\t\r\n      <a  class=\"iconBtn\" (click)=\"onEdit(businessSector)\"><i class=\"fa fa-pencil\"></i></a>\r\n      <a  class=\"iconBtn delBtn\" (click)=\"onDelete(businessSector.bizSectSeq)\"><i class=\"fa fa-trash-o\"></i></a>\r\n      <!-- <a  class=\"iconBtn\"><i class=\"fa fa-history\"></i></a> -->\r\n    </td>\r\n  </tr>\r\n</tbody>\r\n</table>\r\n      </div>\t\r\n      <!-- <div class=\"back\">\r\n        <a href=\"setup.html\" class=\"btn btn-primary btn-min\"><i class=\"fa fa-chevron-left\"></i> Back</a>\r\n      </div> -->\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/setup/business-sector/business-sector.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/setup/business-sector/business-sector.component.ts ***!
  \**************************************************************************/
/*! exports provided: BusinessSectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessSectorComponent", function() { return BusinessSectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_business_sector_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/business-sector.service */ "./src/app/shared/services/business-sector.service.ts");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_models_business_sector_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/models/business-sector.model */ "./src/app/shared/models/business-sector.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BusinessSectorComponent = /** @class */ (function () {
    function BusinessSectorComponent(formBuilder, businessSectorService, commonService) {
        this.formBuilder = formBuilder;
        this.businessSectorService = businessSectorService;
        this.commonService = commonService;
        this.submitted = false;
        this.addBusinessSector = new _shared_models_business_sector_model__WEBPACK_IMPORTED_MODULE_5__["BusinessSector"]();
        this.isEdit = false;
    }
    BusinessSectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.businessSectorForm = this.formBuilder.group({
            bizSectNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            bizSectStsKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            bizSectSortOrdr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.commonService.getValuesByGroupName('\tSTATUS').subscribe(function (d) { return _this.statusArray = d; });
        this.businessSectorService.getBusinessSectors().subscribe(function (data) { return _this.businessSectors = data; });
    };
    Object.defineProperty(BusinessSectorComponent.prototype, "form", {
        get: function () {
            return this.businessSectorForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    BusinessSectorComponent.prototype.onClick = function (key) {
        sessionStorage.setItem('bizSectSeq', JSON.stringify(key));
    };
    BusinessSectorComponent.prototype.onAddNewClick = function () {
        this.isEdit = false;
        this.businessSectorForm.reset();
        this.addBusinessSector = new _shared_models_business_sector_model__WEBPACK_IMPORTED_MODULE_5__["BusinessSector"]();
        $('#businessector').modal('show');
    };
    BusinessSectorComponent.prototype.addBusinessSectorSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.businessSectorForm.invalid) {
            return;
        }
        this.addBusinessSector.bizSectNm = this.businessSectorForm.value.bizSectNm;
        this.addBusinessSector.bizSectStsKey = this.businessSectorForm.value.bizSectStsKey;
        this.addBusinessSector.bizSectSortOrdr = this.businessSectorForm.value.bizSectSortOrdr;
        $('#businessector').modal('hide');
        console.log(this.addBusinessSector);
        if (this.isEdit) {
            this.businessSectorService.updateBusinessSector(this.addBusinessSector).subscribe(function (data) {
                _this.addBusinessSector = data;
                _this.businessSectorService.getBusinessSectors().subscribe(function (data) { return _this.businessSectors = data; });
            });
        }
        else {
            this.businessSectorService.addBusinessSector(this.addBusinessSector).subscribe(function (data) {
                _this.addBusinessSector = data;
                _this.businessSectorService.getBusinessSectors().subscribe(function (data) { return _this.businessSectors = data; });
            });
        }
    };
    BusinessSectorComponent.prototype.onEdit = function (businessSector) {
        this.isEdit = true;
        this.businessSectorForm.patchValue(businessSector);
        console.log(businessSector);
        this.addBusinessSector = businessSector;
        $('#businessector').modal('show');
    };
    BusinessSectorComponent.prototype.onDelete = function (businessSector) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this BusinessSector?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.businessSectorService.deleteBusinessSector(businessSector).subscribe(function (data) {
                    _this.businessSectorService.getBusinessSectors().subscribe(function (data) { return _this.businessSectors = data; });
                });
            }
        });
        console.log(businessSector);
    };
    BusinessSectorComponent.prototype.findValueByKey = function (key) {
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
    BusinessSectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-business-sector',
            template: __webpack_require__(/*! ./business-sector.component.html */ "./src/app/pages/setup/business-sector/business-sector.component.html"),
            styles: [__webpack_require__(/*! ./business-sector.component.css */ "./src/app/pages/setup/business-sector/business-sector.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_services_business_sector_service__WEBPACK_IMPORTED_MODULE_1__["BusinessSectorService"], _shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], BusinessSectorComponent);
    return BusinessSectorComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/city/city.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/setup/city/city.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  tr.example-detail-row {\r\n    height: 0;\r\n    line-height: 1;\r\n\r\n  }\r\n  \r\n  .example-element-detail {\r\n    overflow: hidden;\r\n    display: flex;\r\n  }\r\n  \r\n  tr.mat-header-row {\r\n    height: 1.5px;\r\n}\r\n  \r\n  tr.mat-row {\r\n  height: 1.5px;\r\n}\r\n  \r\n  .mat-cell, .mat-footer-cell {\r\n  color: rgba(0,0,0,.87);\r\n  font-size: 0.750rem;\r\n}\r\n  \r\n  .trx-table td:last-child {\r\n text-align: center;\r\n}\r\n  \r\n  .td-center {\r\n  text-align: right;\r\n}\r\n  \r\n  .td-right{\r\n  text-align: center;\r\n}\r\n  \r\n  .table .thead-light th:last-child {\r\n  text-align: center;\r\n}\r\n  \r\n  .table .thead-light th:first-child {\r\n  text-align: center;\r\n}\r\n  \r\n  .table .thead-light>th {\r\n  padding: .45rem 0rem;\r\n}\r\n  \r\n  th.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n  \r\n  .mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n  \r\n  th.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n  \r\n  .mat-cell, .mat-footer-cell {\r\n  font-size: 13px;\r\n}\r\n  \r\n  td,th{\r\n  padding-left: 16px !important;\r\n  width: 11% !important;\r\n}\r\n  \r\n  td:first-child, th:first-child{\r\n  padding-left: 16px !important;\r\n  width: 15% !important;\r\n}\r\n  \r\n  .w-20{\r\n  width: 20% !important;\r\n}\r\n  \r\n  th{\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n  \r\n  th:last-child{\r\n  text-align: right;\r\n}"

/***/ }),

/***/ "./src/app/pages/setup/city/city.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/setup/city/city.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\" (click)=\"showField()\" *ngIf=\"!showFields\">\r\n                <h6 class=\"d-inline-block searchshow\" style=\"cursor: pointer;\">Search\r\n                  <i class=\"fa fa-search\"> </i>\r\n                </h6>\r\n              </div>\r\n              <div class=\"mysearch\" *ngIf=\"showFields\">\r\n                <form (ngSubmit)=\"applyFilter(searchVal)\" #searchForm=\"ngForm\">\r\n                  <div class=\"col-sm-10\" style=\"float:left;\">\r\n                    <mat-form-field *ngIf=\"showFields\">\r\n                      <input id=\"searchBox\" (keyup)=\"searchValue()\" autofocus matInput name=\"searchValue\"\r\n                        [(ngModel)]=\"searchVal\" placeholder=\"Search\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-sm-2\" style=\"float:right;\">\r\n                    <button class=\"btn btn-primary btn-lg\" type=\"submit\">Search</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 addBtn\">\r\n              <button class=\"btn btn-primary btn-sm\" (click)=\"openCityModal()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n\r\n\r\n              <div class=\"modal fade\" id=\"AssignLocation\" role=\"dialog\">\r\n                <div class=\"modal-dialog bigger mymodal\">\r\n                  <!-- Modal content-->\r\n                  <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                      <h5 class=\"modal-title\">Assign Location </h5>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                      <div class=\"table-responsive\">\r\n                        <table class=\"table last-left\" id=\"myTable1\" style=\"text-align:left\">\r\n                          <thead class=\"thead-light last-left\">\r\n                            <tr>\r\n                              <th></th>\r\n                              <th>Province</th>\r\n                              <th>District</th>\r\n                              <th>Tehseel</th>\r\n                              <th width=\"20%\">UC</th>\r\n\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                              <tr *ngFor=\"let location of ucs\">\r\n                                  <th><input type=\"checkbox\" [checked]=\"location.checked\" value=\"{{location.checked}}\"\r\n                                    (click)=\"changeRadioStatus($event, location)\"></th>\r\n                                  <th>{{location.provinceName}}</th>\r\n                                  <th>{{location.districtName}}</th>\r\n                                  <th>{{location.tehsilName}}</th>\r\n                                  <th width=\"20%\">{{location.ucName}}</th>\r\n    \r\n                                </tr>\r\n                            \r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"modal-footer text-center pt-0\">\r\n                      <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Ok</button>\r\n                      <!-- <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button> -->\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"modal fade\" id=\"addprduct\" role=\"dialog\">\r\n                <form (ngSubmit)=\"addCityForm()\" #cityForm=\"ngForm\">\r\n                  <div class=\"modal-dialog big mymodal\">\r\n\r\n                    <!-- Modal content-->\r\n                    <div class=\"modal-content text-left\">\r\n                      <div class=\"modal-header\">\r\n                        <h5 class=\"modal-title\">Add City</h5>\r\n                      </div>\r\n                      <div class=\"modal-body\">\r\n                        <div class=\"cRow\">\r\n                          <div class=\"cCol1\"></div>\r\n                          <div class=\"cCol2\">\r\n                            <mat-form-field>\r\n                              <input matInput type=\"text\" value=\"\" required id=\"CityName\" name=\"cityName\" [(ngModel)]=\"city.cityNm\"\r\n                                maxlength=\"15\" #cityName=\"ngModel\" (keypress)=\"alphaNumeric($event)\" placeholder=\"City Name:\">\r\n                            </mat-form-field>\r\n                          </div>\r\n                          <div class=\"cCol4\">\r\n                            <mat-form-field>\r\n                              <input matInput type=\"text\" value=\"\" required id=\"Description\" name=\"description\"\r\n                                [(ngModel)]=\"city.cityCmnt\" maxlength=\"15\" #description=\"ngModel\" (keypress)=\"alphaNumeric($event)\"\r\n                                placeholder=\"Description:\">\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"modal-footer text-center\">\r\n                        <button type=\"submit\" class=\"btn btn-primary btn-min\" [disabled]=\"!cityForm.valid\" >Ok</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n            <!---- DATA TABLES---->\r\n\r\n            <div class=\"table-responsive mb-md-5\">\r\n              <table mat-table [dataSource]=\"dataSource\" class=\"table\" multiTemplateDataRows matSort>\r\n  \r\n                <!-- Reference Id Column -->\r\n                <ng-container matColumnDef=\"cityCode\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>City Code</th>\r\n                  <td mat-cell *matCellDef=\"let city\">{{city.cityCd}}</td>\r\n                </ng-container>\r\n  \r\n                <!-- Description Column -->\r\n                <ng-container matColumnDef=\"cityName\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>City Name</th>\r\n                  <td mat-cell *matCellDef=\"let city\">{{city.cityNm}}</td>\r\n                </ng-container>\r\n  \r\n                <!-- Category Column -->\r\n                <ng-container matColumnDef=\"desc\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Description</th>\r\n                  <td mat-cell *matCellDef=\"let city\">{{(city.cityCmnt == null)? \"\": city.cityCmnt}}</td>\r\n                </ng-container>\r\n  \r\n                <!-- Action Column -->\r\n                <ng-container matColumnDef=\"action\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Action</th>\r\n                  <td mat-cell *matCellDef=\"let city\">\r\n                      <a class=\"iconBtn\" (click)=\"openUcModal(city)\"><img src=\"assets/images/uc.png\"\r\n                        alt=\"\"></a>\r\n                    <a (click)=\"openCityModalToEdit(city)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                    <!-- <a (click)=\"deleteItem(1)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>  -->\r\n                    <a class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                </ng-container>\r\n  \r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"thead-light thead-blue\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n              </table>\r\n  \r\n              <mat-paginator [length]=\"datalength\"  [pageSizeOptions]=\"[10, 15, 20]\" showFirstLastButtons></mat-paginator>\r\n            </div>\r\n\r\n          <!-- <div class=\"table-responsive\">\r\n            <table class=\"table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>City Code</th>\r\n                  <th>City Name</th>\r\n                  <th>Description</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let city of cities\">\r\n                  <td>{{city.cityCd}}</td>\r\n                  <td>{{city.cityNm}} </td>\r\n                  <td>{{(city.cityCmnt == null)? \"\": city.cityCmnt}}</td>\r\n                  <td>\r\n                    <a class=\"iconBtn\" (click)=\"openUcModal(city)\"><img src=\"assets/images/uc.png\"\r\n                        alt=\"\"></a>\r\n                    <a (click)=\"openCityModalToEdit(city)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                     <a (click)=\"deleteItem(1)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a> \r\n                    <a class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                  </td>\r\n                </tr>\r\n                \r\n              </tbody>\r\n            </table>\r\n          </div> -->\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/setup/city/city.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/setup/city/city.component.ts ***!
  \****************************************************/
/*! exports provided: CityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityComponent", function() { return CityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_services_city_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/city.service */ "./src/app/shared/services/city.service.ts");
/* harmony import */ var _shared_models_city_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/models/city.model */ "./src/app/shared/models/city.model.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CityComponent = /** @class */ (function () {
    function CityComponent(cityService, toaster, spinner) {
        this.cityService = cityService;
        this.toaster = toaster;
        this.spinner = spinner;
        this.datalength = 0;
        this.lastPageIndex = 0;
        this.filterValue = "";
        this.searchVal = "";
        this.isCount = true;
        this.isEdit = false;
        this.city = new _shared_models_city_model__WEBPACK_IMPORTED_MODULE_3__["City"]();
        this.cities = [];
        this.ucs = [];
        this.cityUcs = [];
        this.showFields = false;
    }
    CityComponent.prototype.applyFilter = function (filterValue) {
        this.filterValue = filterValue;
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.datalength = this.countBeforeFilter;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            return;
        }
        this.getFilteredData(filterValue.trim().toLowerCase());
    };
    CityComponent.prototype.searchValue = function () {
        var _this = this;
        this.filterValue = this.searchVal.trim();
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            this.datalength = 0;
            setTimeout(function () { _this.datalength = _this.countBeforeFilter; }, 200);
            return;
        }
    };
    CityComponent.prototype.ngOnInit = function () {
        this.displayedColumns = ['cityCode', 'cityName', 'desc', 'action'];
        this.getAllCities();
        this.getAllUCs();
    };
    CityComponent.prototype.getAllUCs = function () {
        var _this = this;
        this.spinner.show();
        this.cityService.getAllUcs().subscribe(function (res) {
            _this.spinner.hide();
            _this.ucs = res;
            _this.ucs.forEach(function (element) {
                element.checked = false;
            });
        }, function (error) {
            _this.spinner.hide();
            console.log(error);
        });
    };
    CityComponent.prototype.openUcModal = function (city) {
        this.city = city;
        this.ucs.forEach(function (element) {
            element.checked = false;
        });
        this.getUcsForCity();
        $('#AssignLocation').modal('show');
    };
    CityComponent.prototype.getUcsForCity = function () {
        var _this = this;
        this.cityService.getUcsForCity(this.city.citySeq).subscribe(function (res) {
            _this.spinner.hide();
            _this.cityUcs = res;
            _this.cityUcs.forEach(function (cityuc) {
                _this.ucs.forEach(function (element) {
                    if (cityuc.ucSeq == element.ucSeq) {
                        element.checked = true;
                        element.cityUcRelSeq = cityuc.cityUcRelSeq;
                    }
                });
            });
        }, function (error) {
            _this.spinner.hide();
            console.log(error);
        });
    };
    CityComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function () { return _this.loadNextPage(); }))
            .subscribe();
    };
    CityComponent.prototype.getAllCities = function () {
        var _this = this;
        this.isCount = true;
        this.spinner.show();
        this.cities = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.cities);
        this.paginator.pageIndex = 0;
        this.lastPageIndex = 0;
        this.dataSource.paginator = this.paginator;
        this.searchVal = '';
        this.filterValue = '';
        this.cityService.getCities(this.paginator.pageIndex, 10, "", this.isCount).subscribe(function (res) {
            _this.spinner.hide();
            _this.cities = res.cities;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.cities);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = res.count;
            _this.dataBeforeFilter = _this.dataSource.data;
            _this.countBeforeFilter = res.count;
            _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
        }, function (error) {
            _this.spinner.hide();
            console.log(error);
        });
    };
    CityComponent.prototype.loadNextPage = function () {
        var _this = this;
        this.isCount = false;
        if (this.paginator.pageIndex < this.lastPageIndex)
            return;
        if (this.dataSource.paginator.length == this.dataSource.data.length)
            return;
        if (((this.paginator.pageIndex + 1) * this.paginator.pageSize) - this.dataSource.data.length > 0) {
            this.spinner.show();
            this.cityService.getCities(this.paginator.pageIndex, this.paginator.pageSize, this.filterValue, this.isCount).subscribe(function (data) {
                _this.spinner.hide();
                _this.cities = data.cities;
                _this.lastPageIndex = _this.lastPageIndex + 1;
                _this.dataSource.data = _this.dataSource.data.concat(data.cities);
                data.count = _this.datalength;
                _this.datalength = 0;
                setTimeout(function () { _this.datalength = data.count; }, 200);
                if (_this.filterValue.length == 0) {
                    _this.dataBeforeFilter = _this.dataSource.data;
                    _this.countBeforeFilter = data.count;
                    _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
                }
            }, function (error) {
                _this.spinner.hide();
                console.log('err', error);
            });
        }
    };
    CityComponent.prototype.getFilteredData = function (filterValue) {
        var _this = this;
        this.isCount = true;
        this.paginator.pageIndex = 0;
        this.spinner.show();
        this.cityService.getCities(this.paginator.pageIndex, this.paginator.pageSize, filterValue, this.isCount).subscribe(function (data) {
            _this.cities = data.cities;
            _this.spinner.hide();
            if (_this.cities.length <= 0) {
                _this.toaster.info('No Data Found Against This Search', 'Information');
            }
            ;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.cities);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = data.count;
        }, function (error) {
            _this.spinner.hide();
            console.log('err', error);
        });
    };
    CityComponent.prototype.openCityModal = function () {
        $('#addprduct').modal('show');
        this.city = new _shared_models_city_model__WEBPACK_IMPORTED_MODULE_3__["City"]();
        this.isEdit = false;
    };
    CityComponent.prototype.openCityModalToEdit = function (city) {
        $('#addprduct').modal('show');
        this.city = city;
        this.isEdit = true;
    };
    CityComponent.prototype.addCityForm = function () {
        var _this = this;
        if (!this.isEdit) {
            this.spinner.show();
            this.cityService.addCity(this.city).subscribe(function (res) {
                _this.getAllCities();
                $('#addprduct').modal('hide');
            }, function (error) {
                _this.spinner.hide();
                console.log(error);
            });
        }
        else {
            this.spinner.show();
            this.cityService.editCity(this.city).subscribe(function (res) {
                _this.getAllCities();
                $('#addprduct').modal('hide');
            }, function (error) {
                _this.spinner.hide();
                console.log(error);
            });
        }
    };
    CityComponent.prototype.changeRadioStatus = function (event, uc) {
        console.log(uc);
        console.log(event);
        uc.citySeq = this.city.citySeq;
        // alert(uc.checked);
        if (event.target.checked == true) {
            this.cityService.addCityUcRel(uc).subscribe(function (res) {
                uc = res;
            });
        }
        else {
            this.cityService.deleteCityUcRel(uc.cityUcRelSeq).subscribe(function (res) {
            });
        }
    };
    CityComponent.prototype.deleteItem = function (city) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this city?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.spinner.show();
                _this.cityService.deleteCity(city.citySeq).subscribe(function (res) {
                    _this.getAllCities();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()('Deleted!', 'City has been deleted.', 'success');
                }, function (error) {
                    _this.spinner.hide();
                    console.log(error);
                });
            }
        });
    };
    CityComponent.prototype.alphaNumeric = function (event) {
        var pattern = /[0-9a-zA-Z / ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    CityComponent.prototype.showField = function () {
        this.showFields = true;
    };
    CityComponent.prototype.closeField = function () {
        this.showFields = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], CityComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], CityComponent.prototype, "paginator", void 0);
    CityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-city',
            template: __webpack_require__(/*! ./city.component.html */ "./src/app/pages/setup/city/city.component.html"),
            styles: [__webpack_require__(/*! ./city.component.css */ "./src/app/pages/setup/city/city.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_city_service__WEBPACK_IMPORTED_MODULE_2__["CityService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], CityComponent);
    return CityComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/common-code-values/common-code-values.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/setup/common-code-values/common-code-values.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mat-cell, .mat-header-cell {\r\n  font-size: 14px;\r\n  }\r\n  \r\n  .mat-cell, .mat-footer-cell {\r\n  font-size: 13px;\r\n  }\r\n  \r\n  table {\r\n  width: 100%;\r\n  }\r\n  \r\n  th.mat-header-cell {\r\n      vertical-align: middle;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/pages/setup/common-code-values/common-code-values.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/setup/common-code-values/common-code-values.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\" (click)=\"showField()\" *ngIf=\"!showFields\">\r\n                <h6 class=\"d-inline-block searchshow\" style=\"cursor: pointer;\">Common Code Values\r\n                  <i class=\"fa fa-search\"> </i>\r\n                </h6>\r\n              </div>\r\n              <div class=\"mysearch\" *ngIf=\"showFields\">\r\n                <form (ngSubmit)=\"applyFilter(searchVal)\" #searchForm=\"ngForm\">\r\n                  <div class=\"col-sm-10\" style=\"float:left;\">\r\n                    <mat-form-field *ngIf=\"showFields\">\r\n                      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 addBtn\">\r\n                <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" (click)=\"addItem()\">\r\n                  <i class=\"fa fa-plus\"></i> Add</button>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"table-responsive\">\r\n            <table class=\"table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>Code</th>\r\n                  <th>Description</th>\r\n                  <th>Status</th>\r\n                  <th>Sort Order</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let code of pagedItems\">\r\n                  <td>{{code.refCd}}</td>\r\n                  <td>{{code.refCdDscr}}</td>\r\n                  <td >{{code.activeFlg ? 'Active': 'In Active' }}</td>\r\n                  <td>{{code.sortOrder}}</td>\r\n                  <td>\r\n                    <a (click)=\"editItem(code.refCdSeq)\" class=\"iconBtn\">\r\n                      <i class=\"fa fa-pencil\"></i>\r\n                    </a>\r\n                    <a (click)=\"deleteItem(code.refCdSeq)\" class=\"iconBtn delBtn\">\r\n                      <i class=\"fa fa-trash-o\"></i>\r\n                    </a>\r\n                    <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div> -->\r\n\r\n\r\n          <!---- DATA TABLES---->\r\n\r\n          <div class=\"table-responsive\">\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"table\" multiTemplateDataRows matSort>\r\n\r\n              <!-- Code Column -->\r\n              <ng-container matColumnDef=\"refCd\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Code</th>\r\n                <td mat-cell *matCellDef=\"let cmncod\">{{cmncod.refCd}}</td>\r\n              </ng-container>\r\n\r\n              <!--Description Column -->\r\n              <ng-container matColumnDef=\"refCdDscr\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Description</th>\r\n                <td mat-cell *matCellDef=\"let cmncod\">{{cmncod.refCdDscr}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Status Column -->\r\n              <ng-container matColumnDef=\"activeFlg\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r\n                <td mat-cell *matCellDef=\"let cmncod\">{{cmncod.activeFlg ? 'Active': 'In Active' }}</td>\r\n              </ng-container>\r\n\r\n              <!-- Sort Order Column -->\r\n              <ng-container matColumnDef=\"sortOrder\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Sort Order</th>\r\n                <td mat-cell *matCellDef=\"let cmncod\">{{cmncod.sortOrder}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Action Column -->\r\n              <ng-container matColumnDef=\"action\">\r\n                <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                <td mat-cell *matCellDef=\"let cmncod\">\r\n                  <a (click)=\"editItem(cmncod.refCdSeq)\" class=\"iconBtn\">\r\n                    <i class=\"fa fa-pencil\"></i>\r\n                  </a>\r\n                  <a (click)=\"deleteItem(cmncod.refCdSeq)\" class=\"iconBtn delBtn\">\r\n                    <i class=\"fa fa-trash-o\"></i>\r\n                  </a>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"thead-light thead-blue\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n\r\n            <mat-paginator [pageSizeOptions]=\"[10, 20]\" showFirstLastButtons>\r\n            </mat-paginator>\r\n          </div>\r\n          <div class=\"back\">\r\n            <a routerLink=\"/setup\" class=\"btn btn-primary btn-min\">\r\n              <i class=\"fa fa-chevron-left\"></i> Back</a>\r\n          </div>\r\n          <nav aria-label=\"Page navigation \">\r\n            <ul class=\"pagination justify-content-center\" *ngIf=\"pager.pages && pager.pages.length\">\r\n              <li class=\"page-item disabled\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n              </li>\r\n              <li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                <a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n              </li>\r\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<div class=\"modal fade\" id=\"businessector\" role=\"dialog\">\r\n  <div class=\"modal-dialog mymodal\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Add Common Code Value</h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"commonCodeValueForm\" (ngSubmit)=\"onCommonCodeValueSubmit()\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\">\r\n            <!-- <div class=\"cCol3-col\">\r\n              <label>Code:</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"valueCode\" [ngClass]=\"{ 'is-invalid': submitted && f.valueCode.errors }\"\r\n              />\r\n            </div> -->\r\n            <div class=\"cCol3-col\">\r\n              <mat-form-field>\r\n                <input (keypress)=\"keyPress($event)\" type=\"text\" matInput maxlength=\"250\"\r\n                  formControlName=\"valueDescription\" placeholder=\"Description:\" />\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"cCol3-col\">\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"Status\" formControlName=\"activeStatus\" required>\r\n                  <mat-option value=\"true\">Active</mat-option>\r\n                  <mat-option value=\"false\">In Active</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"cCol3-col\">\r\n              <mat-form-field>\r\n                <input (keypress)=\"onlyNumbers($event)\" type=\"text\" matInput maxlength=\"3\" pattern=\"([0-9]\\s*)+\"\r\n                  formControlName=\"sortOrder\" placeholder=\"Sort Order:\" />\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button class=\"btn btn-primary\" [disabled]=\"commonCodeValueForm.invalid\">Ok</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/setup/common-code-values/common-code-values.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/setup/common-code-values/common-code-values.component.ts ***!
  \********************************************************************************/
/*! exports provided: CommonCodeValuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonCodeValuesComponent", function() { return CommonCodeValuesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CommonCodeValuesComponent = /** @class */ (function () {
    function CommonCodeValuesComponent(router, DataService, formBuilder, spinner, toaster) {
        this.router = router;
        this.DataService = DataService;
        this.formBuilder = formBuilder;
        this.spinner = spinner;
        this.toaster = toaster;
        this.submitted = false;
        this.showFields = false;
        // array of all items to be paged
        this.allItems = [];
        // pager objecte
        this.pager = {};
        // paged items
        this.pagedItems = [];
    }
    CommonCodeValuesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    CommonCodeValuesComponent.prototype.ngOnInit = function () {
        this.displayedColumns = ['refCd', 'refCdDscr', 'activeFlg', 'sortOrder', 'action'];
        this.commonCodeValueForm = this.formBuilder.group({
            groupKey: [sessionStorage.getItem("clickCommonCode")],
            formSaveKey: ['add'],
            valueDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            activeStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            sortOrder: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.listing(1);
    };
    CommonCodeValuesComponent.prototype.listing = function (page) {
        var _this = this;
        this.spinner.show();
        this.DataService.getCommonCodeValue(sessionStorage.getItem("clickCommonCode")).subscribe(function (data) {
            console.log(data);
            _this.spinner.hide();
            _this.allItems = data;
            // initialize to page 1
            _this.setPage(page);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.allItems);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) {
            _this.spinner.hide();
            console.log("err");
            console.log("err", error);
        });
    };
    Object.defineProperty(CommonCodeValuesComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.commonCodeValueForm.controls; },
        enumerable: true,
        configurable: true
    });
    CommonCodeValuesComponent.prototype.onCommonCodeValueSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.commonCodeValueForm.invalid) {
            return;
        }
        this.spinner.show();
        var formValue = this.commonCodeValueForm.value;
        console.log(formValue.formSaveKey);
        if (formValue.formSaveKey === "add") {
            this.DataService.addCommonCodeValue(formValue).subscribe(function (data) {
                $("#businessector").modal('hide');
                // this.pagedItems.splice(0, 0, data.group);
                // this.pagedItems.push(data.group);
                // this.allItems.push(data.group);
                _this.listing(1);
                console.log(data);
                _this.spinner.hide();
                sessionStorage.setItem("groupKey", data['refCdSeq']);
            }, function (error) {
                _this.spinner.hide();
                console.log("err", error);
            });
        }
        else if (formValue.formSaveKey === "update") {
            this.DataService.updateCommonCodeValue(formValue).subscribe(function (data) {
                $("#businessector").modal('hide');
                _this.spinner.hide();
                _this.listing(_this.pager.currentPage);
                //this.pagedItems.splice(this.pagedItems.indexOf(data.group['refCdSeq']), 1);
                //this.pagedItems.push(data.group);
                //console.log(data.group['refCdSeq']);
                sessionStorage.setItem("groupKey", data['refCdSeq']);
            }, function (error) {
                _this.spinner.hide();
                console.log("err", error);
            });
            //console.log(formValue.groupSaveKey);
        }
        //this.DataService.formValue.groupSaveKey(formValue).subscribe((data) =>{
        return false;
    };
    //pagenation
    CommonCodeValuesComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.DataService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    //delete
    CommonCodeValuesComponent.prototype.deleteItem = function (passedId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: "Are you sure you want to delete this Common Code Value?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.DataService.delCommonCodeValue(passedId).subscribe(function (result) {
                    //this.pagedItems.splice(this.pagedItems.indexOf(passedId), 1);
                    _this.listing(_this.pager.currentPage);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Deleted!', 'Common code values has been deleted.', 'success');
                }, function (error) { return console.log('There was an error: ', error); });
            }
        });
    };
    //add
    CommonCodeValuesComponent.prototype.addItem = function () {
        this.submitted = false;
        $("#businessector").modal('show');
        this.commonCodeValueForm = this.formBuilder.group({
            groupKey: [sessionStorage.getItem("clickCommonCode")],
            formSaveKey: ['add'],
            valueDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            activeStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            sortOrder: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    //edit
    CommonCodeValuesComponent.prototype.editItem = function (passedId) {
        var _this = this;
        console.log('edit');
        this.DataService.editCommonCodeValue(passedId).subscribe(function (result) {
            console.log(result);
            $("#businessector").modal('show');
            _this.commonCodeValueForm = _this.formBuilder.group({
                groupKey: [result.refCdGrpKey],
                codeValueSeq: [result.refCdSeq],
                formSaveKey: ['update'],
                valueCode: [result.refCd],
                valueName: [result.refCdCmnt],
                activeStatus: ["" + result.activeFlg, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                valueDescription: [result.refCdDscr, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                sortOrder: [result.sortOrder, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            });
        }, function (error) {
            console.log('There was an error: ', error);
            _this.toaster.error(error.message, 'Common Code Value Error');
        });
    };
    CommonCodeValuesComponent.prototype.keyPress = function (event) {
        var pattern = /[a-zA-Z0-9 ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    CommonCodeValuesComponent.prototype.showField = function () {
        this.showFields = true;
    };
    CommonCodeValuesComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[1-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"])
    ], CommonCodeValuesComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
    ], CommonCodeValuesComponent.prototype, "paginator", void 0);
    CommonCodeValuesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-common-code-values',
            template: __webpack_require__(/*! ./common-code-values.component.html */ "./src/app/pages/setup/common-code-values/common-code-values.component.html"),
            styles: [__webpack_require__(/*! ./common-code-values.component.css */ "./src/app/pages/setup/common-code-values/common-code-values.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], CommonCodeValuesComponent);
    return CommonCodeValuesComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/common-code/common-code.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/setup/common-code/common-code.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/common-code/common-code.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/setup/common-code/common-code.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main class=\"main\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t<div class=\"content mb-md-5\">\r\n                <div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n                        <div class=\"mysearchbox\">\r\n\t\t\t\t\t\t\t<h6 class=\"d-inline-block searchshow\">Common Codes <i class=\"fa fa-search\"> </i></h6>\r\n                            <div class=\"mysearch\">\r\n                            \t<a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                            \t <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\" title=\"Type in a name\">\r\n                            </div>\r\n                            </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t <div class=\"col-sm-6 addBtn\">\r\n          <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#cmmoncodes\"><i class=\"fa fa-plus\"></i> Add</button>\r\n        </div>\r\n        <div class=\"modal fade\" id=\"cmmoncodes\" role=\"dialog\">\r\n          <div class=\"modal-dialog mymodal\"> \r\n            \r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Cmmon Codes</h5>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <div class=\"cRow\">\r\n                  <div class=\"cCol3-col\">\r\n                    <label>Code:</label>\r\n                   <input type=\"text\" class=\"form-control\">\r\n                  </div>\r\n                  <div class=\"cCol3-col\">\r\n                    <label>Name:</label>\r\n                    <input type=\"text\" class=\"form-control\">\r\n                  </div>\r\n                  <div class=\"cCol3-col\">\r\n                    <label>Description:</label>\r\n                    <input type=\"text\" class=\"form-control\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Ok</button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t<table class=\"table\" id=\"myTable\">\r\n\t\t\t\t\t<thead class=\"thead-light\">\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>Code</th>\r\n\t\t\t\t\t\t\t<th>Name</th>\r\n\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\t\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>1</td>\r\n\t\t\t\t\t\t\t<td><a href=\"#\">Region Type</a></td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                                <a routerLink=\"/setup/common-code-values\" class=\"iconBtn\"><img src=\"assets/images/icon2.png\" alt=\"\"></a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n                        <tr>\r\n\t\t\t\t\t\t\t<td>2</td>\r\n\t\t\t\t\t\t\t<td><a href=\"#\">Health Insurance Plan</a></td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                                <a routerLink=\"/setup/common-code-values\" class=\"iconBtn\"><img src=\"assets/images/icon2.png\" alt=\"\"></a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n                        <tr>\r\n\t\t\t\t\t\t\t<td>3</td>\r\n\t\t\t\t\t\t\t<td><a href=\"#\">Payment Mode</a></td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                                <a routerLink=\"/setup/common-code-values\" class=\"iconBtn\"><img src=\"assets/images/icon2.png\" alt=\"\"></a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n                        <tr>\r\n\t\t\t\t\t\t\t<td>4</td>\r\n\t\t\t\t\t\t\t<td><a href=\"#\">Expense Type</a></td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                                <a routerLink=\"/setup/common-code-values\" class=\"iconBtn\"><img src=\"assets/images/icon2.png\" alt=\"\"></a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n                        <tr>\r\n\t\t\t\t\t\t\t<td>5</td>\r\n\t\t\t\t\t\t\t<td><a href=\"#\">Income Type</a></td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                                <a routerLink=\"/setup/common-code-values\" class=\"iconBtn\"><img src=\"assets/images/icon2.png\" alt=\"\"></a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\t\r\n\t\t\t\t\t<nav aria-label=\"Page navigation \">\r\n\t\t\t\t\t\t<ul class=\"pagination justify-content-center\">\r\n\t\t\t\t\t\t\t<li class=\"page-item disabled\">\r\n\t\t\t\t\t\t\t<a class=\"page-link\" href=\"#\" tabindex=\"-1\">Previous</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">5</a></li>\r\n\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">6</a></li>\r\n\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">7</a></li>\r\n\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">8</a></li>\r\n\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">9</a></li>\r\n\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">10</a></li>\r\n\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">11</a></li>\r\n\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">12</a></li>\r\n\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">13</a></li>\r\n\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">14</a></li>\r\n\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">15</a></li>\r\n\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">16</a></li>\r\n\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">17</a></li>\r\n\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">18</a></li>\r\n\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\" href=\"#\">19</a></li>\r\n\t\t\t\t\t\t\t<li class=\"page-item\">\r\n\t\t\t\t\t\t\t<a class=\"page-link\" href=\"#\">Next</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</nav>\r\n                </div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</main>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/setup/common-code/common-code.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/setup/common-code/common-code.component.ts ***!
  \******************************************************************/
/*! exports provided: CommonCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonCodeComponent", function() { return CommonCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommonCodeComponent = /** @class */ (function () {
    function CommonCodeComponent() {
    }
    CommonCodeComponent.prototype.ngOnInit = function () {
    };
    CommonCodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-common-code',
            template: __webpack_require__(/*! ./common-code.component.html */ "./src/app/pages/setup/common-code/common-code.component.html"),
            styles: [__webpack_require__(/*! ./common-code.component.css */ "./src/app/pages/setup/common-code/common-code.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommonCodeComponent);
    return CommonCodeComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/file-loader/file-loader.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/setup/file-loader/file-loader.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/file-loader/file-loader.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/setup/file-loader/file-loader.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n          <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content\">\r\n            <h6 class=\"d-inline-block searchshow\">File Upload</h6>\r\n          <div class=\"cRow\">\r\n                <div class=\"cCol1 pt-0\">\r\n                  <label class=\"mb-0\">File Type:</label>\r\n                  <select class=\"form-control\" (change)=\"onSelectedIndexChanged($event.target.value)\">\r\n                    <option value=\"\" >Select</option>\r\n                    <option value=\"Budget\">Budget</option>\r\n                    <option value=\"Recovery\">Recovery</option>\r\n                    <option value=\"Target\">Target</option>\r\n                    <option value=\"Tagging\">Tagging</option>\r\n                    <option value=\"InsuranceClaim\">Insurance Claim</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n     <div class=\"cRow\">\r\n        <div class=\"col-full pb-0\"><label class=\"mb-0\">File Path:</label></div>\r\n                <div class=\"cCol2 pt-0\">\r\n                    <label class=\"mb-0\">{{filePath}}</label>\r\n                <!-- <input type=\"text\" text=  class=\"form-control\"> -->\r\n                </div>\r\n         <!-- <div class=\"cCol2 pt-0\">\r\n               <button class=\"btn btn-default btn-min btn-upload\">Browse</button>\r\n                </div> -->\r\n              </div>\t  \r\n          \r\n    <!-- <div class=\"cRow\">\r\n                <div class=\"cCol1\">\r\n                <label class=\"mb-0\">Load Date:</label>\r\n                <div class=\"input-group date\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"DD / MM / YYYY\">\r\n                  <div class=\"input-group-append input-group-addon\t\">\r\n                    <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              </div>  -->\r\n        \r\n        <div class=\"buttons mt-3\">\r\n            <button [disabled]=\"buttonDisabled\" (click)=\"uploadFile()\" class=\"btn btn-primary btn-min mr-3\">Process</button>\r\n      <button class=\"btn btn-default btn-min\">Cancel</button>\r\n            \r\n        </div>               \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/setup/file-loader/file-loader.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/setup/file-loader/file-loader.component.ts ***!
  \******************************************************************/
/*! exports provided: FileLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileLoaderComponent", function() { return FileLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_file_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/file-loader.service */ "./src/app/shared/services/file-loader.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileLoaderComponent = /** @class */ (function () {
    function FileLoaderComponent(fileLoaderService, toaster) {
        this.fileLoaderService = fileLoaderService;
        this.toaster = toaster;
    }
    FileLoaderComponent.prototype.ngOnInit = function () {
        this.buttonDisabled = true;
    };
    FileLoaderComponent.prototype.onChange = function (deviceValue) {
        console.log(deviceValue);
    };
    FileLoaderComponent.prototype.onSelectedIndexChanged = function (selectedValue) {
        var _this = this;
        if (selectedValue == "Recovery") {
            this.fileLoaderService.loadFilePath('/recoverydisbursementservice/api/adc-payment-file').subscribe(function (d) {
                _this.filePath = d;
                if (_this.filePath == "/opt/RecoveryFile/ADC_FILE.csv") {
                    _this.buttonDisabled = false;
                    _this.type = "Recovery";
                }
                else {
                    _this.filePath = "File does not exist !!";
                    _this.buttonDisabled = true;
                }
            });
        }
        else if (selectedValue == "Budget") {
            this.fileLoaderService.loadFilePath('/setupservice/api/load-file-path/Budget').subscribe(function (d) {
                _this.filePath = d;
                if (_this.filePath == "File does not exist !!") {
                    _this.buttonDisabled = true;
                }
                else {
                    _this.type = "Budget";
                    _this.buttonDisabled = false;
                }
            });
        }
        else if (selectedValue == "Target") {
            this.fileLoaderService.loadFilePath('/setupservice/api/load-file-path/Target').subscribe(function (d) {
                _this.filePath = d;
                if (_this.filePath == "File does not exist !!") {
                    _this.buttonDisabled = true;
                }
                else {
                    _this.type = "Target";
                    _this.buttonDisabled = false;
                }
            });
        }
        else if (selectedValue == "Tagging") {
            this.fileLoaderService.loadFilePath('/setupservice/api/load-file-path/Tagging').subscribe(function (d) {
                _this.filePath = d;
                if (_this.filePath == "File does not exist !!") {
                    _this.buttonDisabled = true;
                }
                else {
                    _this.type = "Tagging";
                    _this.buttonDisabled = false;
                }
            });
        }
        else if (selectedValue == "InsuranceClaim") {
            this.fileLoaderService.loadFilePath('/setupservice/api/load-file-path/InsuranceClaim').subscribe(function (d) {
                _this.filePath = d;
                if (_this.filePath == "File does not exist !!") {
                    _this.buttonDisabled = true;
                }
                else {
                    _this.type = "InsuranceClaim";
                    _this.buttonDisabled = false;
                }
            });
        }
    };
    FileLoaderComponent.prototype.uploadFile = function () {
        this.fileLoaderService.uploadFile(this.type).subscribe();
        this.filePath = null;
        this.buttonDisabled = true;
        this.toaster.info("File is being loaded...");
    };
    FileLoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-loader',
            template: __webpack_require__(/*! ./file-loader.component.html */ "./src/app/pages/setup/file-loader/file-loader.component.html"),
            styles: [__webpack_require__(/*! ./file-loader.component.css */ "./src/app/pages/setup/file-loader/file-loader.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_file_loader_service__WEBPACK_IMPORTED_MODULE_1__["FileLoaderService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], FileLoaderComponent);
    return FileLoaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/health-insurance-plan/health-insurance-plan.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/setup/health-insurance-plan/health-insurance-plan.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/health-insurance-plan/health-insurance-plan.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/setup/health-insurance-plan/health-insurance-plan.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Health Insurance Plan\r\n                  <!-- <i class=\"fa fa-search\"></i> -->\r\n                </h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 addBtn\">\r\n              <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#businessector\"\r\n                (click)=\"onAddNewClick()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n            </div>\r\n            <div class=\"modal fade\" id=\"businessector\" role=\"dialog\">\r\n              <div class=\"modal-dialog big mymodal\">\r\n                <!-- Modal content-->\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\">Health Insurance Plan</h5>\r\n                  </div>\r\n\r\n                  <form [formGroup]=\"healthInsurancePlanForm\" (ngSubmit)=\"addHealthInsurancePlanSubmit()\">\r\n                    <div class=\"modal-body\">\r\n                      <ul class=\"infolist\">\r\n                      </ul>\r\n                      <div class=\"cRow\">\r\n                        <div class=\"cCol2\">\r\n                          <label>Plan Name:</label>\r\n                          <input type=\"text\" formControlName=\"planNm\" class=\"form-control\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && form.planNm.errors }\" />\r\n                          <div *ngIf=\"submitted && form.planNm.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"form.planNm.errors.required\">Plan Name is required</div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"cCol2\">\r\n                          <label>Annual Premium:</label>\r\n                          <input type=\"text\" formControlName=\"anlPremAmt\" class=\"form-control\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && form.anlPremAmt.errors }\" />\r\n                          <div *ngIf=\"submitted && form.anlPremAmt.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"form.anlPremAmt.errors.required\">Annual Premium Amount is required</div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"cCol2\">\r\n                          <label>Max. Policy Amt. per Member</label>\r\n                          <input type=\"text\" formControlName=\"maxPlcyAmt\" class=\"form-control\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && form.maxPlcyAmt.errors }\" />\r\n                          <div *ngIf=\"submitted && form.maxPlcyAmt.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"form.maxPlcyAmt.errors.required\">Maximum Policy Amount is required</div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"cCol2\">\r\n                          <label>Status:</label>\r\n                          <select type=\"\" formControlName=\"planStsKey\" class=\"form-control\" id=\"status\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && form.planStsKey.errors }\">\r\n                            <option *ngFor=\"let status of statusArray\" [value]=\"status.codeKey\">{{status.codeValue}}\r\n                            </option>\r\n                          </select>\r\n                          <div *ngIf=\"submitted && form.planStsKey.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"form.planStsKey.errors.required\">Status is required</div>\r\n                          </div>\r\n\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"cRow\">\r\n                        <div class=\"cCol2\">\r\n                          <label>GL Account Number:</label>\r\n                          <input type=\"text\" formControlName=\"glAcctNum\" class=\"form-control\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && form.glAcctNum.errors }\" />\r\n                          <div *ngIf=\"submitted && form.glAcctNum.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"form.glAcctNum.errors.required\">GL Account Number is required</div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"cCol2\">\r\n                          <label>Deffered Account Number:</label>\r\n                          <input type=\"text\" formControlName=\"dfrdAcctNum\" class=\"form-control\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && form.dfrdAcctNum.errors }\" />\r\n                          <div *ngIf=\"submitted && form.dfrdAcctNum.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"form.dfrdAcctNum.errors.required\">Deffered Account Number is required</div>\r\n                          </div>\r\n                        </div>\r\n                    \r\n                      </div>\r\n\r\n                    </div>\r\n                    <div class=\"modal-footer text-center\">\r\n                      <button type=\"button\" class=\"btn btn-primary btn-min\"\r\n                        (click)=\"addHealthInsurancePlanSubmit()\">Ok</button>\r\n                      <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>Plan ID</th>\r\n                  <th>Plan Name</th>\r\n                  <th>Annual Premium</th>\r\n                  <th>Max Policy Amt. per Member</th>\r\n                  <th>GL Account Number</th>\r\n                  <th>Deffered Account Number</th>\r\n                  <th>Status</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let healthInsurancePlan of HealthInsurancePlans\">\r\n                  <td>{{healthInsurancePlan.planId}}</td>\r\n                  <td>{{healthInsurancePlan.planNm}}</td>\r\n                  <td>{{healthInsurancePlan.anlPremAmt}}</td>\r\n                  <td>{{healthInsurancePlan.maxPlcyAmt}}</td>\r\n                  <td>{{healthInsurancePlan.glAcctNum}}</td>\r\n                  <td>{{healthInsurancePlan.dfrdAcctNum}}</td>\r\n                  <td>{{findValueByKey(healthInsurancePlan.planStsKey)}}</td>\r\n                  <td>\r\n                    <a class=\"iconBtn\" (click)=\"onEdit(healthInsurancePlan)\"><i class=\"fa fa-pencil\"></i></a>\r\n                    <a class=\"iconBtn delBtn\" (click)=\"onDelete(healthInsurancePlan.hlthInsrPlanSeq)\"><i\r\n                        class=\"fa fa-trash-o\"></i></a>\r\n                    <!-- <a  class=\"iconBtn\"><i class=\"fa fa-history\"></i></a> -->\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- <div class=\"back\">\r\n\t\t\t\t<a href=\"setup.html\" class=\"btn btn-primary btn-min\"><i class=\"fa fa-chevron-left\"></i> Back</a>\r\n\t\t\t</div> -->\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/setup/health-insurance-plan/health-insurance-plan.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/setup/health-insurance-plan/health-insurance-plan.component.ts ***!
  \**************************************************************************************/
/*! exports provided: HealthInsurancePlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthInsurancePlanComponent", function() { return HealthInsurancePlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_health_insurance_plan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/health-insurance-plan.service */ "./src/app/shared/services/health-insurance-plan.service.ts");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_models_health_insurance_plan_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/models/health-insurance-plan.model */ "./src/app/shared/models/health-insurance-plan.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HealthInsurancePlanComponent = /** @class */ (function () {
    function HealthInsurancePlanComponent(formBuilder, _HealthInsurancePlanService, commonService) {
        this.formBuilder = formBuilder;
        this._HealthInsurancePlanService = _HealthInsurancePlanService;
        this.commonService = commonService;
        this.addHealthInsurancePlan = new _shared_models_health_insurance_plan_model__WEBPACK_IMPORTED_MODULE_5__["HealthInsurancePlan"]();
        this.isEdit = false;
        this.submitted = false;
    }
    HealthInsurancePlanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.healthInsurancePlanForm = this.formBuilder.group({
            planNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            planStsKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            anlPremAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            maxPlcyAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            glAcctNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dfrdAcctNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.commonService.getValuesByGroupName('\tSTATUS').subscribe(function (d) { return _this.statusArray = d; });
        this._HealthInsurancePlanService.getHealthInsurancePlans().subscribe(function (data) { return _this.HealthInsurancePlans = data; });
    };
    Object.defineProperty(HealthInsurancePlanComponent.prototype, "form", {
        get: function () {
            return this.healthInsurancePlanForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    HealthInsurancePlanComponent.prototype.onAddNewClick = function () {
        this.isEdit = false;
        this.healthInsurancePlanForm.reset();
        this.addHealthInsurancePlan = new _shared_models_health_insurance_plan_model__WEBPACK_IMPORTED_MODULE_5__["HealthInsurancePlan"]();
        $('#businessector').modal('show');
    };
    HealthInsurancePlanComponent.prototype.addHealthInsurancePlanSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.healthInsurancePlanForm.invalid) {
            return;
        }
        this.addHealthInsurancePlan.planNm = this.healthInsurancePlanForm.value.planNm;
        this.addHealthInsurancePlan.anlPremAmt = this.healthInsurancePlanForm.value.anlPremAmt;
        this.addHealthInsurancePlan.maxPlcyAmt = this.healthInsurancePlanForm.value.maxPlcyAmt;
        this.addHealthInsurancePlan.planStsKey = this.healthInsurancePlanForm.value.planStsKey;
        this.addHealthInsurancePlan.glAcctNum = this.healthInsurancePlanForm.value.glAcctNum;
        this.addHealthInsurancePlan.dfrdAcctNum = this.healthInsurancePlanForm.value.dfrdAcctNum;
        $('#businessector').modal('hide');
        console.log(this.addHealthInsurancePlan);
        if (this.isEdit) {
            this._HealthInsurancePlanService.updateHealthInsurancePlan(this.addHealthInsurancePlan).subscribe(function (data) {
                _this.addHealthInsurancePlan = data;
                _this._HealthInsurancePlanService.getHealthInsurancePlans().subscribe(function (data) { return _this.HealthInsurancePlans = data; });
            });
        }
        else {
            this._HealthInsurancePlanService.addHealthInsurancePlan(this.addHealthInsurancePlan).subscribe(function (data) {
                _this.addHealthInsurancePlan = data;
                _this._HealthInsurancePlanService.getHealthInsurancePlans().subscribe(function (data) { return _this.HealthInsurancePlans = data; });
            });
        }
    };
    HealthInsurancePlanComponent.prototype.onEdit = function (HealthInsurancePlan) {
        this.isEdit = true;
        this.healthInsurancePlanForm.patchValue(HealthInsurancePlan);
        console.log(HealthInsurancePlan);
        this.addHealthInsurancePlan = HealthInsurancePlan;
        $('#businessector').modal('show');
    };
    HealthInsurancePlanComponent.prototype.onDelete = function (HealthInsurancePlan) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Plan?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this._HealthInsurancePlanService.deleteHealthInsurancePlan(HealthInsurancePlan).subscribe(function (data) {
                    _this._HealthInsurancePlanService.getHealthInsurancePlans().subscribe(function (data) { return _this.HealthInsurancePlans = data; });
                });
            }
        });
        console.log(HealthInsurancePlan);
    };
    HealthInsurancePlanComponent.prototype.findValueByKey = function (key) {
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
    HealthInsurancePlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-health-insurance-plan',
            template: __webpack_require__(/*! ./health-insurance-plan.component.html */ "./src/app/pages/setup/health-insurance-plan/health-insurance-plan.component.html"),
            styles: [__webpack_require__(/*! ./health-insurance-plan.component.css */ "./src/app/pages/setup/health-insurance-plan/health-insurance-plan.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_services_health_insurance_plan_service__WEBPACK_IMPORTED_MODULE_2__["HealthInsurancePlanService"], _shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], HealthInsurancePlanComponent);
    return HealthInsurancePlanComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/products/product-by-seq/product-by-seq.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/setup/products/product-by-seq/product-by-seq.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/products/product-by-seq/product-by-seq.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/setup/products/product-by-seq/product-by-seq.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Products\r\n                  <i class=\"fa fa-search\"> </i>\r\n                </h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\">\r\n                    <i class=\"fa fa-window-close\"> </i>\r\n                  </a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\" title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 addBtn\">\r\n              <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" (click)=\"onAdd()\">\r\n                <i class=\"fa fa-plus\"></i> Add</button>\r\n              <div class=\"modal fade\" id=\"addprduct\" role=\"dialog\">\r\n                <div class=\"modal-dialog mymodal\">\r\n\r\n                  <!-- Modal content-->\r\n                  <div class=\"modal-content text-center\">\r\n                    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"productsForm\">\r\n                      <div class=\"modal-header\">\r\n                        <h5 class=\"modal-title\">Product</h5>\r\n                      </div>\r\n                      <div class=\"modal-body\">\r\n                        <div class=\"cRow\">\r\n                          <div class=\"cCol3-col\">\r\n                            <mat-form-field>\r\n                              <input placeholder=\"Product Name:\" formControlName=\"prdGrpNm\"\r\n                                     [errorStateMatcher]=\"matcher\" matInput>\r\n                            </mat-form-field>\r\n                          </div>\r\n                          <div class=\"cCol3-col\">\r\n                            <mat-form-field>\r\n                              <mat-select placeholder=\"Status:\" formControlName=\"prdGrpSts\"\r\n                                          name=\"status\" [errorStateMatcher]=\"matcher\">\r\n                                <mat-option *ngFor=\"let edu of statusArray\" [value]=\"edu.codeKey\">\r\n                                  {{edu.codeValue}}\r\n                                </mat-option>\r\n                              </mat-select>\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"modal-footer text-center\">\r\n                          <button type=\"submit\" class=\"btn btn-primary btn-min\" >Ok</button>\r\n                          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <br>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"hover table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n              <tr>\r\n                <th>Sub Product ID</th>\r\n                <th>Sub Product Name</th>\r\n                <th>Product Type</th>\r\n                <th>Status</th>\r\n                <th>Action</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n              <tr *ngFor=\"let product of pagedItems\">\r\n                <td>{{product.prdId}}</td>\r\n                \r\n                <td>{{product.prdNm}}</td>\r\n                <td> {{findValueByKey(product.prdTypKey, activities)}}</td>\r\n                <td>{{findValueByKey(product.prdStsKey, status)}}</td>\r\n                <td>\r\n                  <a (click)=\"onEdit(product)\" class=\"iconBtn\">\r\n                    <i class=\"fa fa-pencil\"></i>\r\n                  </a>\r\n                  <a (click)=\"deleteItem(product)\" class=\"iconBtn delBtn\">\r\n                    <i class=\"fa fa-trash-o\"></i>\r\n                  </a>\r\n                  <a href=\"#\" class=\"iconBtn\">\r\n                    <i class=\"fa fa-history\"></i>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class=\"back\">\r\n            <a routerLink=\"/setup/products\" class=\"btn btn-primary btn-min\">\r\n              <i class=\"fa fa-chevron-left\"></i> Back</a>\r\n          </div>\r\n          <nav aria-label=\"Page navigation \">\r\n            <ul class=\"pagination justify-content-center\" *ngIf=\"pager.pages && pager.pages.length\">\r\n              <li class=\"page-item disabled\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n              </li>\r\n              <li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                <a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n              </li>\r\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/setup/products/product-by-seq/product-by-seq.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/setup/products/product-by-seq/product-by-seq.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductBySeqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductBySeqComponent", function() { return ProductBySeqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_Product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/models/Product.model */ "./src/app/shared/models/Product.model.ts");
/* harmony import */ var _shared_models_productGroup_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/models/productGroup.model */ "./src/app/shared/models/productGroup.model.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/helpers/MyErrorStateMatcher.helper */ "./src/app/shared/helpers/MyErrorStateMatcher.helper.ts");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/models/REF_CODE_GRP_KEYS.mocks */ "./src/app/shared/models/REF_CODE_GRP_KEYS.mocks.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ProductBySeqComponent = /** @class */ (function () {
    function ProductBySeqComponent(productService, router, commonService, fb, dataService, route) {
        this.productService = productService;
        this.router = router;
        this.commonService = commonService;
        this.fb = fb;
        this.dataService = dataService;
        this.route = route;
        this.pager = {};
        this.isEdit = false;
        this.allItems = [];
        this.pagedItems = [];
        this.matcher = new _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_5__["MyErrorStateMatcher"]();
    }
    ProductBySeqComponent.prototype.ngOnInit = function () {
        this.productsForm = this.fb.group({
            prdGrpId: [''],
            prdGrpSeq: [''],
            prdGrpNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            prdGrpSts: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.loadBasics();
        this.productGroup = new _shared_models_productGroup_model__WEBPACK_IMPORTED_MODULE_2__["ProductGroup"](JSON.parse(sessionStorage.getItem('productGroup')));
    };
    ProductBySeqComponent.prototype.findValueByKey = function (key, lov) {
        var status = 'not found';
        if (lov) {
            lov.forEach(function (s) {
                if (s.codeKey === key) {
                    status = s.codeValue;
                }
            });
        }
        return status;
    };
    ProductBySeqComponent.prototype.findValueByKeyPT = function (key) {
        var status = 'not found';
        if (this.productTypes) {
            this.productTypes.forEach(function (s) {
                if (s.codeKey === key) {
                    status = s.codeValue;
                }
            });
        }
        return status;
    };
    ProductBySeqComponent.prototype.onEdit = function (product) {
        product.prdGrpSeq = this.productGroup.prdGrpSeq;
        sessionStorage.setItem('isProductEdit', 'true');
        product.productSeq = product.prdSeq;
        product.productName = product.prdNm;
        sessionStorage.setItem('product', JSON.stringify(product));
        console.log(JSON.stringify(product));
        this.router.navigate(['setup/addProduct/product-info']);
    };
    ProductBySeqComponent.prototype.onAdd = function () {
        sessionStorage.setItem('product', JSON.stringify(new _shared_models_Product_model__WEBPACK_IMPORTED_MODULE_1__["Product"]()));
        sessionStorage.setItem('isProductEdit', 'false');
        this.router.navigate(['setup/addProduct']);
    };
    ProductBySeqComponent.prototype.deleteItem = function (pG) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()({
            title: 'Are you sure?',
            text: 'Are you Sure, Want to Delete This ?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.productService.deleteProductByPrdSeq(pG.prdSeq).subscribe(function () {
                    _this.allItems.splice(_this.allItems.indexOf(pG), 1);
                    _this.setPage(1);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default()('Deleted!', 'Product has been deleted.', 'success');
                }, function (error) { return console.log('There was an error: ', error); });
            }
        });
    };
    ProductBySeqComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.dataService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ProductBySeqComponent.prototype.onSubmit = function () { };
    ProductBySeqComponent.prototype.loadBasics = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.name = this.route.snapshot.paramMap.get('prdGrpNm');
        this.productService.getAllProductByGrpSeq(id).subscribe(function (data) {
            _this.allItems = data;
            _this.setPage(1);
        });
        this.commonService.getValuesByGroupName('\tSTATUS').subscribe(function (d) { return _this.statusArray = d; });
        this.commonService.getValuesByGroupName('ACTIVITY').subscribe(function (d) { return _this.productTypes = d; });
        this.commonService.getValues(_shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_11__["PRODUCT_TYPE"]).subscribe(function (d) { return _this.activities = d; });
        this.commonService.getValues(_shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_11__["STATUS"]).subscribe(function (d) { return _this.status = d; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTableDirective"])
    ], ProductBySeqComponent.prototype, "datatableElement", void 0);
    ProductBySeqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-by-seq',
            template: __webpack_require__(/*! ./product-by-seq.component.html */ "./src/app/pages/setup/products/product-by-seq/product-by-seq.component.html"),
            styles: [__webpack_require__(/*! ./product-by-seq.component.css */ "./src/app/pages/setup/products/product-by-seq/product-by-seq.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], ProductBySeqComponent);
    return ProductBySeqComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/products/products.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/setup/products/products.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/products/products.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/setup/products/products.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Product Groups\r\n                  <i class=\"fa fa-search\"> </i>\r\n                </h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\">\r\n                    <i class=\"fa fa-window-close\"> </i>\r\n                  </a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\" title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 addBtn\">\r\n              <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" (click)=\"openModal()\">\r\n                <i class=\"fa fa-plus\"></i> Add</button>\r\n              <div class=\"modal fade\" id=\"addprduct\" role=\"dialog\">\r\n                <div class=\"modal-dialog mymodal\">\r\n\r\n                  <!-- Modal content-->\r\n                  <div class=\"modal-content text-center\">\r\n                    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"productsForm\">\r\n                      <div class=\"modal-header\">\r\n                        <h5 class=\"modal-title\">Product Group</h5>\r\n                      </div>\r\n                      <div class=\"modal-body\">\r\n                        <div class=\"cRow\">\r\n                          <div class=\"cCol3-col\">\r\n                            <mat-form-field>\r\n                              <input placeholder=\"Product Name:\" formControlName=\"prdGrpNm\"\r\n                                           [errorStateMatcher]=\"matcher\" matInput>\r\n                            </mat-form-field>\r\n                          </div>\r\n                          <div class=\"cCol3-col\">\r\n                            <mat-form-field>\r\n                              <mat-select placeholder=\"Status:\" formControlName=\"prdGrpSts\"\r\n                                          name=\"status\" [errorStateMatcher]=\"matcher\">\r\n                                <mat-option *ngFor=\"let edu of statusArray\" [value]=\"edu.codeKey\">\r\n                                  {{edu.codeValue}}\r\n                                </mat-option>\r\n                              </mat-select>\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"modal-footer text-center\">\r\n                          <button type=\"submit\" class=\"btn btn-primary btn-min\" [disabled]=\"productsForm.invalid\">Ok</button>\r\n                          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <br>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"hover table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>Product ID</th>\r\n                  <th>Product Name</th>\r\n                  <th>Status</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let product of pagedItems\">\r\n                  <td>{{product.prdGrpId}}</td>\r\n                  <td>\r\n                    <a (click)=\"navigateToProduct(product)\" >{{product.prdGrpNm}}</a>\r\n                  </td>\r\n                  <td>{{findValueByKey(product.prdGrpSts)}}</td>\r\n                  <td>\r\n                    <a (click)=\"editItem(product)\" class=\"iconBtn\">\r\n                      <i class=\"fa fa-pencil\"></i>\r\n                    </a>\r\n                    <!-- <a (click)=\"deleteItem(product)\" class=\"iconBtn delBtn\">\r\n                      <i class=\"fa fa-trash-o\"></i>\r\n                    </a> -->\r\n                    <a  class=\"iconBtn\">\r\n                      <i class=\"fa fa-history\"></i>\r\n                    </a>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n\r\n            </table>\r\n          </div>\r\n\r\n          <nav aria-label=\"Page navigation \">\r\n            <ul class=\"pagination justify-content-center\" *ngIf=\"pager.pages && pager.pages.length\">\r\n              <li class=\"page-item disabled\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n              </li>\r\n              <li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                <a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n              </li>\r\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<script>\r\n  $(document).ready(function () {\r\n    $('[data-toggle=\"tooltip\"]').tooltip();\r\n  })\r\n</script>\r\n<script>\r\n  $(\".searchshow\").click(function () {\r\n    $(\".mysearchbox\").addClass(\"intro\");\r\n  });\r\n  $(\".remove-search\").click(function () {\r\n    $(\".mysearchbox\").removeClass(\"intro\");\r\n  });\r\n\r\n  function myFunction() {\r\n    var input, filter, table, tr, td, i;\r\n    input = document.getElementById(\"myInput\");\r\n    filter = input.value.toUpperCase();\r\n    table = document.getElementById(\"myTable\");\r\n    tr = table.getElementsByTagName(\"tr\");\r\n    for (i = 0; i < tr.length; i++) {\r\n      td = tr[i].getElementsByTagName(\"td\")[1];\r\n      if (td) {\r\n        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {\r\n          tr[i].style.display = \"\";\r\n        } else {\r\n          tr[i].style.display = \"none\";\r\n        }\r\n      }\r\n    }\r\n  }\r\n</script>\r\n<script>\r\n  var index = 1;\r\n  $('ul.moreless li:gt(' + index + ')').hide();\r\n  $('ul.moreless').append('<li class=\"more\">more..</li>');\r\n  $('ul.moreless li.more').click(function () {\r\n    $('ul.moreless li.more').remove();\r\n    $('ul.moreless li:gt(' + index + ')').show();\r\n    $('ul.moreless').append('<li class=\"less\">Less..</li>');\r\n    $('ul.moreless li.less').click(function () {\r\n      $('ul.moreless li.less').remove();\r\n      $('ul.moreless li:gt(' + index + ')').remove();\r\n      $('ul.moreless').append('<li class=\"more\">more..</li>');\r\n    });\r\n  });\r\n\r\n</script>\r\n"

/***/ }),

/***/ "./src/app/pages/setup/products/products.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/setup/products/products.component.ts ***!
  \************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_models_Product_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/Product.model */ "./src/app/shared/models/Product.model.ts");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/helpers/MyErrorStateMatcher.helper */ "./src/app/shared/helpers/MyErrorStateMatcher.helper.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productService, router, commonService, fb, dataService) {
        this.productService = productService;
        this.router = router;
        this.commonService = commonService;
        this.fb = fb;
        this.dataService = dataService;
        this.model = new _shared_models_Product_model__WEBPACK_IMPORTED_MODULE_2__["Product"]();
        this.pager = {};
        this.isEdit = false;
        this.allItems = [];
        this.pagedItems = [];
        this.matcher = new _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_7__["MyErrorStateMatcher"]();
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.productsForm = this.fb.group({
            prdGrpId: [''],
            prdGrpSeq: [''],
            prdGrpNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(100)])],
            prdGrpSts: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
        this.loadBasics();
    };
    ProductsComponent.prototype.openModal = function () {
        $('#addprduct').modal('show');
        this.productsForm.reset();
        this.isEdit = false;
    };
    ProductsComponent.prototype.findValueByKey = function (key) {
        var status = 'not found';
        if (this.statusArray) {
            this.statusArray.forEach(function (s) {
                if (s.codeKey === key) {
                    status = s.codeValue;
                }
            });
        }
        return status;
    };
    ProductsComponent.prototype.editItem = function (productGroup) {
        $('#addprduct').modal('show');
        this.productsForm.patchValue(productGroup);
        this.isEdit = true;
    };
    ProductsComponent.prototype.onSubmit = function () {
        var _this = this;
        // this.productService.updateCurrentProduct(this.model);
        // this.router.navigate(['setup/products/add']);
        var result = Object.assign({}, this.productsForm.value);
        $('#addprduct').modal('hide');
        if (this.isEdit) {
            this.productService.updateProductGroup(result).subscribe(function (res) {
                _this.loadAll();
            });
            // const itemIndex = this.allItems.findIndex(item => item.prdGrpSeq === result.prdGrpSeq);
            // this.allItems[itemIndex] = result;
            // this.setPage(this.pager.currentPage);
        }
        else {
            this.productService.addProductGroup(result).subscribe(function (res) {
                _this.loadAll();
            });
            // this.allItems.push(result);
            // this.setPage(this.pager.currentPage);
        }
    };
    ProductsComponent.prototype.deleteItem = function (pG) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            title: 'Are you sure?',
            text: 'Are you Sure, Want to Delete This ?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.productService.deleteProductGroup(pG.prdGrpSeq).subscribe(function () {
                    _this.allItems.splice(_this.allItems.indexOf(pG), 1);
                    _this.setPage(1);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()('Deleted!', 'Product group has been deleted.', 'success');
                }, function (error) { return console.log('There was an error: ', error); });
            }
        });
    };
    ProductsComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.dataService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ProductsComponent.prototype.loadBasics = function () {
        var _this = this;
        this.loadAll();
        this.commonService.getValuesByGroupName('\tSTATUS').subscribe(function (d) { return _this.statusArray = d; });
    };
    ProductsComponent.prototype.navigateToProduct = function (product) {
        sessionStorage.setItem('productGrpSeq', product.prdGrpSeq);
        sessionStorage.setItem('productGroup', JSON.stringify(product));
        this.router.navigate(['/setup/products', product.prdGrpNm, product.prdGrpSeq]);
    };
    // ngAfterViewInit(): void {
    //   this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
    //     dtInstance.columns().every(function () {
    //       const that = this;
    //       $('input', this.footer()).on('keyup change', function () {
    //         if (that.search() !== this['value']) {
    //           that
    //             .search(this['value'])
    //             .draw();
    //         }
    //       });
    //     });
    //   });
    // }
    ProductsComponent.prototype.loadAll = function () {
        var _this = this;
        this.productService.getAllProductGroups().subscribe(function (data) {
            _this.allItems = data;
            _this.setPage(_this.pager.currentPage);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], ProductsComponent.prototype, "datatableElement", void 0);
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/pages/setup/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/pages/setup/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _shared_services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/question/question.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/setup/question/question.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/question/question.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/setup/question/question.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Question\r\n                  <!-- <i class=\"fa fa-search\"></i> -->\r\n                </h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\" title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 addBtn\">\r\n              <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#businessector\" (click)=\"onAddNewClick()\"><i\r\n                  class=\"fa fa-plus\"></i> Add</button>\r\n            </div>\r\n            <div class=\"modal fade\" id=\"businessector\" role=\"dialog\">\r\n              <div class=\"modal-dialog big mymodal\">\r\n                <!-- Modal content-->\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\">Question</h5>\r\n                  </div>\r\n                  <form [formGroup]=\"questionForm\" (ngSubmit)=\"addQuestionSubmit()\">\r\n                    <div class=\"modal-body\">\r\n                      <ul class=\"infolist\">\r\n                      </ul>\r\n                      <div class=\"cRow\">\r\n                        <div class=\"cCol2\">\r\n                          <label>Question Type:</label>\r\n                          <select type=\"\" formControlName=\"qstTypKey\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.qstTypKey.errors }\">\r\n                            <option *ngFor=\"let type of typeArray\" [value]=\"type.codeKey\">{{type.codeValue}}</option>\r\n                          </select>\r\n                          <div *ngIf=\"submitted && form.qstTypKey.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"form.qstTypKey.errors.required\">Question Type is required</div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"cCol2\">\r\n                          <label>Question Categroy:</label>\r\n                          <select type=\"\" formControlName=\"qstCtgryKey\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.qstCtgryKey.errors }\">\r\n                            <option *ngFor=\"let category of categoryArray\" [value]=\"category.codeKey\">{{category.codeValue}}</option>\r\n                          </select>\r\n                          <div *ngIf=\"submitted && form.qstCtgryKey.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"form.qstCtgryKey.errors.required\">Question Categroy is required</div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"cCol2\">\r\n                          <label>Question</label>\r\n                          <input type=\"text\" formControlName=\"qstStr\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.qstStr.errors }\" />\r\n                          <div *ngIf=\"submitted && form.qstStr.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"form.qstStr.errors.required\">Question String is required</div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"cCol2\">\r\n                            <label>Sort Order</label>\r\n                            <input type=\"text\" (keypress)=\"onlyNumbers($event)\" formControlName=\"qstSortOrdr\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.qstSortOrdr.errors }\" />\r\n                            <div *ngIf=\"submitted && form.qstSortOrdr.errors\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"form.qstSortOrdr.errors.required\">Sort Order is required</div>\r\n                            </div>\r\n                          </div>\r\n                        <div class=\"cCol2\">\r\n                          <label>Status:</label>\r\n                          <select type=\"\" formControlName=\"qstStsKey\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.qstStsKey.errors }\">\r\n                            <option *ngFor=\"let status of statusArray\" [value]=\"status.codeKey\">{{status.codeValue}}</option>\r\n                          </select>\r\n                          <div *ngIf=\"submitted && form.qstStsKey.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"form.qstStsKey.errors.required\">Status is required</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"modal-footer text-center\">\r\n                      <button type=\"button\" class=\"btn btn-primary btn-min\" (click)=\"addQuestionSubmit()\">Ok</button>\r\n                      <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>Question ID</th>\r\n                  <th>Question Category</th>\r\n                  <th>Sort Order</th>\r\n                  <th>Question Type</th>\r\n                  <th>Question</th>\r\n                  <th>Answers</th>\r\n                  <th>Status</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let question of questions\">\r\n                  <td>{{question.qstId}}</td>\r\n                  <td>{{findCategoryById(question.qstCtgryKey)}}</td>\r\n                  <td>{{question.qstSortOrdr}}</td>\r\n                  <td>{{findTypeById(question.qstTypKey)}}</td>\r\n                  <td>{{question.qstStr}}</td>\r\n                  <td>\r\n                    <div *ngIf=\"question.qstTypKey===202\"><a [routerLink]=\"['/setup/answer']\" (click)=\"onClick(question.qstSeq)\"><span\r\n                      class=\"ansbtn\"></span></a></div>\r\n                    <div *ngIf=\"question.qstTypKey!==202\"><span\r\n                          class=\"ansbtn grey\"></span></div>\r\n\r\n                  </td>\r\n                  <td>{{findValueByKey(question.qstStsKey)}}</td>\r\n                  <td>\r\n                    <a class=\"iconBtn\" (click)=\"onEdit(question)\"><i class=\"fa fa-pencil\"></i></a>\r\n                    <a class=\"iconBtn delBtn\" (click)=\"onDelete(question.qstSeq)\"><i class=\"fa fa-trash-o\"></i></a>\r\n                    <!-- <a  class=\"iconBtn\"><i class=\"fa fa-history\"></i></a> -->\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- <div class=\"back\">\r\n          <a href=\"setup.html\" class=\"btn btn-primary btn-min\"><i class=\"fa fa-chevron-left\"></i> Back</a>\r\n        </div> -->\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/setup/question/question.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/setup/question/question.component.ts ***!
  \************************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/question.service */ "./src/app/shared/services/question.service.ts");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _shared_models_Question_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/models/Question.model */ "./src/app/shared/models/Question.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(formBuilder, questionService, commonService) {
        this.formBuilder = formBuilder;
        this.questionService = questionService;
        this.commonService = commonService;
        this.addQuestion = new _shared_models_Question_model__WEBPACK_IMPORTED_MODULE_3__["Question"](null, null);
        this.isEdit = false;
        this.submitted = false;
    }
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionForm = this.formBuilder.group({
            qstSeq: [],
            qstTypKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            qstStr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            qstCtgryKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            qstStsKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            qstSortOrdr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.commonService.getValuesByGroupName('\tSTATUS').subscribe(function (d) { return _this.statusArray = d; });
        this.commonService.getValuesByGroupName('\tQUESTION TYPE').subscribe(function (d) { return _this.typeArray = d; });
        this.commonService.getValuesByGroupName('\tSCHOOL QUESTIONAIRE CATEGORY').subscribe(function (d) { return _this.categoryArray = d; });
        this.questionService.getQuestions(sessionStorage.getItem('qstnrSeq')).subscribe(function (data) { return _this.questions = data; });
    };
    Object.defineProperty(QuestionComponent.prototype, "form", {
        get: function () {
            return this.questionForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    QuestionComponent.prototype.onClick = function (qstSeq) {
        sessionStorage.setItem('qstSeq', JSON.stringify(qstSeq));
    };
    QuestionComponent.prototype.onAddNewClick = function () {
        this.isEdit = false;
        this.questionForm.reset();
        this.addQuestion = new _shared_models_Question_model__WEBPACK_IMPORTED_MODULE_3__["Question"](null, null);
        $('#businessector').modal('show');
    };
    QuestionComponent.prototype.addQuestionSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.questionForm.invalid) {
            return;
        }
        this.addQuestion.qstTypKey = this.questionForm.value.qstTypKey;
        this.addQuestion.qstStr = this.questionForm.value.qstStr;
        this.addQuestion.qstCtgryKey = this.questionForm.value.qstCtgryKey;
        this.addQuestion.qstStsKey = this.questionForm.value.qstStsKey;
        this.addQuestion.qstnrSeq = parseInt(sessionStorage.getItem('qstnrSeq'));
        this.addQuestion.qstSortOrdr = this.questionForm.value.qstSortOrdr;
        this.addQuestion.qstSeq = this.addQuestion.qstSeq;
        $('#businessector').modal('hide');
        console.log(this.addQuestion);
        if (this.isEdit) {
            this.questionService.updateQuestion(this.addQuestion).subscribe(function (data) {
                // this.addQuestion = data;
                _this.questionService.getQuestions(sessionStorage.getItem('qstnrSeq')).subscribe(function (data) { return _this.questions = data; });
            });
        }
        else {
            this.questionService.addQuestion(this.addQuestion).subscribe(function (data) {
                // this.addQuestion = data;
                _this.questionService.getQuestions(sessionStorage.getItem('qstnrSeq')).subscribe(function (data) { return _this.questions = data; });
            });
        }
    };
    QuestionComponent.prototype.onEdit = function (question) {
        this.isEdit = true;
        this.addQuestion = question;
        this.questionForm.controls["qstStr"].setValue(question.qstStr);
        this.questionForm.controls["qstStsKey"].setValue(question.qstStsKey);
        this.questionForm.controls["qstTypKey"].setValue(question.qstTypKey);
        this.questionForm.controls["qstCtgryKey"].setValue(question.qstCtgryKey);
        this.questionForm.controls["qstSortOrdr"].setValue(question.qstSortOrdr);
        this.questionForm.controls["qstSeq"].setValue(question.qstSeq);
        console.log(question);
        $('#businessector').modal('show');
    };
    QuestionComponent.prototype.onDelete = function (question) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Question?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.questionService.deleteQuestion(question).subscribe(function (data) {
                    _this.questionService.getQuestions(sessionStorage.getItem('qstnrSeq')).subscribe(function (data) { return _this.questions = data; });
                });
            }
        });
        console.log(question);
    };
    QuestionComponent.prototype.findValueByKey = function (key) {
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
    QuestionComponent.prototype.findTypeById = function (typeId) {
        var type = '';
        if (this.typeArray) {
            this.typeArray.forEach(function (s) {
                if (s.codeKey === typeId) {
                    type = s.codeValue;
                }
            });
        }
        return type;
    };
    QuestionComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    QuestionComponent.prototype.findCategoryById = function (categoryId) {
        var category = '';
        if (this.categoryArray) {
            this.categoryArray.forEach(function (s) {
                if (s.codeKey === categoryId) {
                    category = s.codeValue;
                }
            });
        }
        return category;
    };
    QuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/pages/setup/question/question.component.html"),
            styles: [__webpack_require__(/*! ./question.component.css */ "./src/app/pages/setup/question/question.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _shared_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"], _shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/questionnaire/questionnaire.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/setup/questionnaire/questionnaire.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/questionnaire/questionnaire.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/setup/questionnaire/questionnaire.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <app-left-side-bar></app-left-side-bar>\r\n        </div>\r\n        <div class=\"col-md-9\">\r\n          <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Questionnaire\r\n                  <!-- <i class=\"fa fa-search\"></i> -->\r\n                </h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                   <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\" title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"col-sm-6 addBtn\">\r\n              <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#businessector\" (click)=\"onAddNewClick()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n            </div> -->\r\n            <div class=\"modal fade\" id=\"businessector\" role=\"dialog\">\r\n              <div class=\"modal-dialog big mymodal\"> \t\t\t\t\t\t\t\t\t\t\r\n                <!-- Modal content-->\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\">Questionnaire</h5>\r\n                  </div>\r\n                  <form [formGroup]=\"questionnaireForm\" (ngSubmit)=\"addQuestionnaireSubmit()\">\r\n                  <div class=\"modal-body\">\r\n                  <ul class=\"infolist\">\r\n                  </ul>\r\n                    <div class=\"cRow\">\r\n                        <div class=\"cCol2\">\r\n                            <label>Questionnaire Name:</label>\r\n                            <input type=\"text\" formControlName=\"qstnrNm\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.qstnrNm.errors }\" />\r\n                            <div *ngIf=\"submitted && form.qstnrNm.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"form.qstnrNm.errors.required\">Questionnaire Name is required</div>\r\n                            </div>\r\n                          </div>     \r\n\r\n                        <div class=\"cCol2\">\r\n                            <label>Status:</label>\r\n                            <select type=\"\" formControlName=\"qstnrStsKey\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.qstnrStsKey.errors }\">\r\n                                <option *ngFor=\"let status of statusArray\" [value]=\"status.codeKey\" >{{status.codeValue}}</option>\r\n                              </select>\r\n                            <div *ngIf=\"submitted && form.qstnrStsKey.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"form.qstnrStsKey.errors.required\">Status is required</div>\r\n                            </div>\r\n                          </div>\r\n            </div>\r\n                  </div>\r\n                  <div class=\"modal-footer text-center\">\r\n                      <button type=\"button\" class=\"btn btn-primary btn-min\" (click)=\"addQuestionnaireSubmit()\">Ok</button>\r\n                      <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n            <div class=\"table-responsive\">\r\n          <table class=\"table\" id=\"myTable\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th>Questionnaire ID</th>\r\n                <th>Questionnaire Name</th>\r\n                <th>Questions</th>\r\n                <th>Status</th>\r\n                <th>Action</th>\r\n              </tr>\r\n  </thead>\r\n  <tbody>\t\r\n    <tr *ngFor=\"let questionnaire of questionnaires\">\r\n      <td>{{questionnaire.qstnrId}}</td> \r\n      <td>{{questionnaire.qstnrNm}}</td>\r\n      <td><a  [routerLink]=\"['/setup/question']\" (click)=\"onClick(questionnaire.qstnrSeq)\"><span class=\"qbtn\">&nbsp;</span></a></td>\r\n      \r\n      <td>{{findValueByKey(questionnaire.qstnrStsKey)}}</td>\r\n      <td>\t\t\t\t\t\t\r\n        <a  class=\"iconBtn\" (click)=\"onEdit(questionnaire)\"><i class=\"fa fa-pencil\"></i></a>\r\n        <a  class=\"iconBtn delBtn\" (click)=\"onDelete(questionnaire.qstnrSeq)\"><i class=\"fa fa-trash-o\"></i></a>\r\n        <!-- <a  class=\"iconBtn\"><i class=\"fa fa-history\"></i></a> -->\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n  </table>\r\n        </div>\t\r\n        <!-- <div class=\"back\">\r\n          <a href=\"setup.html\" class=\"btn btn-primary btn-min\"><i class=\"fa fa-chevron-left\"></i> Back</a>\r\n        </div> -->\r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </main>"

/***/ }),

/***/ "./src/app/pages/setup/questionnaire/questionnaire.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/setup/questionnaire/questionnaire.component.ts ***!
  \**********************************************************************/
/*! exports provided: QuestionnaireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireComponent", function() { return QuestionnaireComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_questionnaire_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/questionnaire.service */ "./src/app/shared/services/questionnaire.service.ts");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_models_questionnaire_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/models/questionnaire.model */ "./src/app/shared/models/questionnaire.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionnaireComponent = /** @class */ (function () {
    function QuestionnaireComponent(formBuilder, questionnaireService, commonService) {
        this.formBuilder = formBuilder;
        this.questionnaireService = questionnaireService;
        this.commonService = commonService;
        this.submitted = false;
        this.addQuestionnaire = new _shared_models_questionnaire_model__WEBPACK_IMPORTED_MODULE_5__["Questionnaire"]();
        this.isEdit = false;
    }
    QuestionnaireComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionnaireForm = this.formBuilder.group({
            qstnrNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            qstnrStsKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.commonService.getValuesByGroupName('\tSTATUS').subscribe(function (d) { return _this.statusArray = d; });
        this.questionnaireService.getQuestionnaires().subscribe(function (data) { return _this.questionnaires = data; });
    };
    Object.defineProperty(QuestionnaireComponent.prototype, "form", {
        get: function () {
            return this.questionnaireForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    QuestionnaireComponent.prototype.onClick = function (key) {
        sessionStorage.setItem('qstnrSeq', JSON.stringify(key));
    };
    QuestionnaireComponent.prototype.onAddNewClick = function () {
        this.isEdit = false;
        this.questionnaireForm.reset();
        this.addQuestionnaire = new _shared_models_questionnaire_model__WEBPACK_IMPORTED_MODULE_5__["Questionnaire"]();
        $('#businessector').modal('show');
    };
    QuestionnaireComponent.prototype.addQuestionnaireSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.questionnaireForm.invalid) {
            return;
        }
        this.addQuestionnaire.qstnrNm = this.questionnaireForm.value.qstnrNm;
        this.addQuestionnaire.qstnrStsKey = this.questionnaireForm.value.qstnrStsKey;
        $('#businessector').modal('hide');
        console.log(this.addQuestionnaire);
        if (this.isEdit) {
            this.questionnaireService.updateQuestionnaire(this.addQuestionnaire).subscribe(function (data) {
                _this.addQuestionnaire = data;
                _this.questionnaireService.getQuestionnaires().subscribe(function (data) { return _this.questionnaires = data; });
            });
        }
        else {
            this.questionnaireService.addQuestionnaire(this.addQuestionnaire).subscribe(function (data) {
                _this.addQuestionnaire = data;
                _this.questionnaireService.getQuestionnaires().subscribe(function (data) { return _this.questionnaires = data; });
            });
        }
    };
    QuestionnaireComponent.prototype.onEdit = function (questionnaire) {
        this.isEdit = true;
        this.questionnaireForm.patchValue(questionnaire);
        console.log(questionnaire);
        this.addQuestionnaire = questionnaire;
        $('#businessector').modal('show');
    };
    QuestionnaireComponent.prototype.onDelete = function (questionnaire) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Questionnaire?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.questionnaireService.deleteQuestionnaire(questionnaire).subscribe(function (data) {
                    _this.questionnaireService.getQuestionnaires().subscribe(function (data) { return _this.questionnaires = data; });
                });
            }
        });
        console.log(questionnaire);
    };
    QuestionnaireComponent.prototype.findValueByKey = function (key) {
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
    QuestionnaireComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-questionnaire',
            template: __webpack_require__(/*! ./questionnaire.component.html */ "./src/app/pages/setup/questionnaire/questionnaire.component.html"),
            styles: [__webpack_require__(/*! ./questionnaire.component.css */ "./src/app/pages/setup/questionnaire/questionnaire.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _shared_services_questionnaire_service__WEBPACK_IMPORTED_MODULE_1__["QuestionnaireService"], _shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], QuestionnaireComponent);
    return QuestionnaireComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/rules/add-rule/add-rule.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/setup/rules/add-rule/add-rule.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/rules/add-rule/add-rule.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/setup/rules/add-rule/add-rule.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"content\">\r\n      <h6 class=\"mt-3\">Add Rule</h6>\r\n      <div class=\"cRow\">\r\n        <div class=\"cCol1\">\r\n          <label for=\"id\">Rule ID:</label>\r\n          <input type=\"text\" class=\"form-control\"\r\n                 name=\"id\" id=\"id\"\r\n                 required minlength=\"6\" readonly\r\n                 [(ngModel)]=\"rule.id\"\r\n                 #id=\"ngModel\">\r\n        </div>\r\n        <div class=\"cCol1\">\r\n          <label for=\"name\">Rule Name:</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\"\r\n                 required\r\n                 [(ngModel)]=\"rule.name\"\r\n                 #name=\"ngModel\">\r\n        </div>\r\n        <div class=\"cCol1\">\r\n          <label for=\"category\">Rule Ctegory:</label>\r\n          <select class=\"form-control\" id=\"category\" name=\"category\" required\r\n                  [(ngModel)]=\"rule.category\"\r\n                  #category=\"ngModel\">\r\n            <option *ngFor=\"let category of categories\" [value]=\"category\">{{category}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"cCol1\">\r\n          <label for=\"status\">Status:</label>\r\n          <select class=\"form-control\" id=\"status\" name=\"status\" required\r\n                  [(ngModel)]=\"rule.status\"\r\n                  #status=\"ngModel\">\r\n            <option value=\"Active\">Active</option>\r\n            <option value=\"Pending\">Pending</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"cRow\">\r\n        <div class=\"cCol6\">\r\n          <label for=\"condition\">Rule Criteria:</label>\r\n          <button class=\"btn pull-right btn-dots\" data-toggle=\"modal\" data-target=\"#cmmoncodes\"></button>\r\n          <textarea class=\"form-control\" id=\"condition\"\r\n                    name=\"condition\" [(ngModel)]=\"rule.condition\"\r\n                    #condition=\"ngModel\"></textarea>\r\n          <div class=\"modal fade\" id=\"cmmoncodes\" role=\"dialog\">\r\n            <div class=\"modal-dialog mymodal big\">\r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Rule Condition</h5>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <div class=\"p10\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-3 mb-2\">\r\n                        <div class=\"filter noborder\">\r\n                          <h6 class=\"border-title\">Data Items</h6>\r\n                          <a href=\"#.\" class=\"acc_trigger inactive-header active-header\">Client</a>\r\n                          <div class=\"collapse acc_container\" style=\"display: block;\">\r\n                            <div class=\"listmenu\">\r\n                              <ul>\r\n                                <li>Gender</li>\r\n                                <li>Merital Status</li>\r\n                              </ul>\r\n                            </div>\r\n                          </div>\r\n                          <a href=\"#.\" class=\"acc_trigger inactive-header\">Credit Information</a>\r\n                          <div class=\"collapse acc_container\">\r\n                            <div class=\"listmenu\">\r\n                              <ul>\r\n                                <li>Approved Amount</li>\r\n                                <li>Requested Amount</li>\r\n                              </ul>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-9 mt-3\">\r\n                        <div class=\"cRow\">\r\n                          <textarea class=\"form-control large\" placeholder=\"Days to complete < 8\"></textarea>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"modal-footer text-center\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Ok</button>\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"pt-1 mt-3\">\r\n        <label>Select Approver:</label>\r\n      </div>\r\n      <div class=\"checkbox mb-1\">\r\n        <div class=\"custom-control custom-checkbox\">\r\n          <input type=\"checkbox\" id=\"checkbox1\" name=\"coBorrower\" class=\"custom-control-input\">\r\n          <label class=\"custom-control-label\" for=\"checkbox1\"> Regional Manager</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"checkbox mb-1\">\r\n        <div class=\"custom-control custom-checkbox\">\r\n          <input type=\"checkbox\" id=\"checkbox2\" name=\"coBorrower\" class=\"custom-control-input\">\r\n          <label class=\"custom-control-label\" for=\"checkbox2\"> Area Manager</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"checkbox mb-1\">\r\n        <div class=\"custom-control custom-checkbox\">\r\n          <input type=\"checkbox\" id=\"checkbox3\" name=\"coBorrower\" class=\"custom-control-input\">\r\n          <label class=\"custom-control-label\" for=\"checkbox3\"> Branch Manager</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mt-5\">\r\n        <button class=\"btn btn-primary btn-min\">Continue</button>\r\n        <button class=\"btn btn-default btn-min\">Save</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</main>\r\n<script>\r\n  $('.date').datepicker({\r\n    //format: ‘dd/mm/yyyy’;\r\n  });\r\n</script>\r\n<script type=\"text/javascript\">\r\n  $(document).ready(function () {\r\n    $('.acc_trigger').toggleClass('inactive-header');\r\n\r\n    $('.acc_trigger:first').addClass('active-header').next().show();\r\n    $('.acc_trigger').click(function () {\r\n      if ($(this).next().is(':hidden')) {\r\n        $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');\r\n        $(this).toggleClass('active-header').toggleClass('inactive-header');\r\n        $(this).next().slideToggle().toggleClass('open-content');\r\n      }\r\n\r\n      else {\r\n        $(this).toggleClass('active-header').toggleClass('inactive-header');\r\n        $(this).next().slideToggle().toggleClass('open-content');\r\n      }\r\n    });\r\n\r\n    return false;\r\n  });\r\n</script>\r\n"

/***/ }),

/***/ "./src/app/pages/setup/rules/add-rule/add-rule.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/setup/rules/add-rule/add-rule.component.ts ***!
  \******************************************************************/
/*! exports provided: AddRuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRuleComponent", function() { return AddRuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_Rule_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/models/Rule.model */ "./src/app/shared/models/Rule.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_rules_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/rules.service */ "./src/app/shared/services/rules.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_mocks_rules_mocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/mocks/rules.mocks */ "./src/app/shared/mocks/rules.mocks.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddRuleComponent = /** @class */ (function () {
    function AddRuleComponent(route, rulesService, location) {
        this.route = route;
        this.rulesService = rulesService;
        this.location = location;
        this.categories = _shared_mocks_rules_mocks__WEBPACK_IMPORTED_MODULE_5__["RULES_CATEGORIES"];
    }
    AddRuleComponent.prototype.ngOnInit = function () {
        this.getRule();
    };
    AddRuleComponent.prototype.getRule = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.rulesService.getRule(id)
            .subscribe(function (r) { return _this.rule = r; });
    };
    AddRuleComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_models_Rule_model__WEBPACK_IMPORTED_MODULE_1__["Rule"])
    ], AddRuleComponent.prototype, "rule", void 0);
    AddRuleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-workflow',
            template: __webpack_require__(/*! ./add-rule.component.html */ "./src/app/pages/setup/rules/add-rule/add-rule.component.html"),
            styles: [__webpack_require__(/*! ./add-rule.component.css */ "./src/app/pages/setup/rules/add-rule/add-rule.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_rules_service__WEBPACK_IMPORTED_MODULE_3__["RulesService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AddRuleComponent);
    return AddRuleComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/rules/rules.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/setup/rules/rules.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  tr.example-detail-row {\r\n    height: 0;\r\n    line-height: 1;\r\n\r\n  }\r\n  \r\n  .example-element-detail {\r\n    overflow: hidden;\r\n    display: flex;\r\n  }\r\n  \r\n  tr.mat-header-row {\r\n    height: 1.5px;\r\n}\r\n  \r\n  tr.mat-row {\r\n  height: 1.5px;\r\n}\r\n  \r\n  .mat-cell, .mat-footer-cell {\r\n  color: rgba(0,0,0,.87);\r\n  font-size: 0.750rem;\r\n}\r\n  \r\n  .trx-table td:last-child {\r\n text-align: center;\r\n}\r\n  \r\n  .td-center {\r\n  text-align: right;\r\n}\r\n  \r\n  .td-right{\r\n  text-align: center;\r\n}\r\n  \r\n  .table .thead-light th:last-child {\r\n  text-align: center;\r\n}\r\n  \r\n  .table .thead-light th:first-child {\r\n  text-align: center;\r\n}\r\n  \r\n  .table .thead-light>th {\r\n  padding: .45rem 0rem;\r\n}\r\n  \r\n  th.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n  \r\n  .mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n  \r\n  th.mat-sort-header-sorted {\r\n  color: black;\r\n}\r\n  \r\n  .mat-cell, .mat-footer-cell {\r\n  font-size: 13px;\r\n}\r\n  \r\n  td,th{\r\n  padding-left: 16px !important;\r\n  width: 8% !important;\r\n}\r\n  \r\n  td:first-child, th:first-child{\r\n  padding-left: 16px !important;\r\n  width: 2% !important;\r\n}\r\n  \r\n  td:nth-child(2), th:nth-child(2),td:nth-child(3), th:nth-child(3){\r\n  padding-left: 16px !important;\r\n  width: 5% !important;\r\n}\r\n  \r\n  td:nth-child(4), th:nth-child(4){\r\n  padding-left: 16px !important;\r\n  width: 10% !important;\r\n}\r\n  \r\n  td:nth-child(5), th:nth-child(5){\r\n  padding-left: 16px !important;\r\n  width: 25% !important;\r\n}\r\n  \r\n  td:nth-child(6), th:nth-child(6){\r\n  padding-left: 16px !important;\r\n  width: 2% !important;\r\n}\r\n  \r\n  .w-20{\r\n  width: 20% !important;\r\n}\r\n  \r\n  th{\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n}\r\n  \r\n  th:last-child{\r\n  text-align: right;\r\n}"

/***/ }),

/***/ "./src/app/pages/setup/rules/rules.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/setup/rules/rules.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div\r\n                class=\"mysearchbox\"\r\n                (click)=\"showField()\"\r\n                *ngIf=\"!showFields\"\r\n              >\r\n                <h6 class=\"d-inline-block searchshow\" style=\"cursor: pointer\">\r\n                  Search\r\n                  <i class=\"fa fa-search\"> </i>\r\n                </h6>\r\n              </div>\r\n              <div class=\"mysearch\" *ngIf=\"showFields\">\r\n                <form (ngSubmit)=\"applyFilter(searchVal)\" #searchForm=\"ngForm\">\r\n                  <div class=\"col-sm-10\" style=\"float: left\">\r\n                    <mat-form-field *ngIf=\"showFields\">\r\n                      <input\r\n                        id=\"searchBox\"\r\n                        (keyup)=\"searchValue()\"\r\n                        autofocus\r\n                        matInput\r\n                        name=\"searchValue\"\r\n                        [(ngModel)]=\"searchVal\"\r\n                        placeholder=\"Search\"\r\n                      />\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-sm-2\" style=\"float: right\">\r\n                    <button class=\"btn btn-primary btn-lg\" type=\"submit\">\r\n                      Search\r\n                    </button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 addBtn\">\r\n              <button class=\"btn btn-primary btn-sm\" (click)=\"addNewRule()\">\r\n                <i class=\"fa fa-plus\"></i> Add\r\n              </button>\r\n            </div>\r\n            <div class=\"modal fade\" id=\"AdvanceRules\" role=\"dialog\">\r\n              <div\r\n                class=\"modal-dialog bigger mymodal\"\r\n                style=\"max-width: 75%; top: 2%; min-height: 60%\"\r\n              >\r\n                <!-- Modal content-->\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\">Rules</h5>\r\n                  </div>\r\n                  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"RuleForm\">\r\n                    <div class=\"modal-body\">\r\n                      <div class=\"cRow\">\r\n                        <div class=\"cCol2\" *ngIf=\"isEdit\">\r\n                          <label for=\"id\">Rule ID:</label>\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"form-control\"\r\n                            name=\"id\"\r\n                            id=\"id\"\r\n                            required\r\n                            minlength=\"6\"\r\n                            formControlName=\"rulId\"\r\n                          />\r\n                        </div>\r\n                        <div class=\"cCol2\">\r\n                          <label for=\"name\">Rule Name:</label>\r\n                          <input\r\n                            type=\"text\"\r\n                            class=\"form-control\"\r\n                            name=\"name\"\r\n                            id=\"name\"\r\n                            required\r\n                            formControlName=\"rulNm\"\r\n                          />\r\n                        </div>\r\n                        <div class=\"cCol2\" *ngIf=\"!isEdit\">\r\n                          <label for=\"category\">Rule Category:</label>\r\n                          <select\r\n                            class=\"form-control\"\r\n                            id=\"category\"\r\n                            name=\"category\"\r\n                            required\r\n                            formControlName=\"rulCtgryKey\"\r\n                            (change)=\"onCategoryChange()\"\r\n                          >\r\n                            <option\r\n                              *ngFor=\"let category of ruleCategories\"\r\n                              [value]=\"category.value\"\r\n                            >\r\n                              {{ category.desc }}\r\n                            </option>\r\n                          </select>\r\n                        </div>\r\n                        <!-- <div class=\"cCol2\">\r\n                          <label for=\"status\">Status:</label>\r\n                          <select class=\"form-control\" id=\"status\" name=\"status\" required formControlName=\"rule.rulNm\"\r\n                            #status=\"ngModel\">\r\n                            <option value=\"Active\">Active</option>\r\n                            <option value=\"Pending\">Pending</option>\r\n                          </select>\r\n                        </div> -->\r\n                      </div>\r\n                      <div class=\"cCol12 mt-2\">\r\n                        <label for=\"comments\">Coments:</label>\r\n                        <textarea\r\n                          class=\"form-control\"\r\n                          id=\"comments\"\r\n                          name=\"comments\"\r\n                          formControlName=\"rulCmnt\"\r\n                        ></textarea>\r\n                      </div>\r\n                      <h6 class=\"colorBlack mt-3\">Rule Criteria</h6>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-3 mb-2\">\r\n                          <div class=\"filter noborder\">\r\n                            <h6 class=\"border-title\">Data Items</h6>\r\n                            <div *ngFor=\"let obj of fields\">\r\n                              <a\r\n                                class=\"acc_trigger\"\r\n                                (click)=\"headingClick($event.srcElement)\"\r\n                                >{{ obj.heading }}</a\r\n                              >\r\n                              <div class=\"collapse acc_container\">\r\n                                <div class=\"listmenu\">\r\n                                  <ul>\r\n                                    <li *ngFor=\"let column of obj.columns\">\r\n                                      {{ column.title }}\r\n                                      <span\r\n                                        (click)=\"copyToMain(column)\"\r\n                                        style=\"\r\n                                          float: right;\r\n                                          margin-right: 0.75em;\r\n                                          cursor: pointer;\r\n                                        \"\r\n                                        >&#10230;</span\r\n                                      >\r\n                                    </li>\r\n                                  </ul>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-md-9 mt-3\">\r\n                          <textarea\r\n                            class=\"form-control large\"\r\n                            id=\"condition\"\r\n                            name=\"condition\"\r\n                            placeholder=\"Client gender is = M and NDI > Requested Amount / 12\"\r\n                            required\r\n                            formControlName=\"rulCrtraStr\"\r\n                          ></textarea>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"modal-footer text-center\">\r\n                      <button type=\"submit\" class=\"btn btn-primary btn-min\">\r\n                        Ok\r\n                      </button>\r\n                      <button\r\n                        type=\"button\"\r\n                        class=\"btn btn-primary btn-min\"\r\n                        data-dismiss=\"modal\"\r\n                      >\r\n                        Cancel\r\n                      </button>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!---- DATA TABLES---->\r\n\r\n          <div class=\"table-responsive mb-md-5\">\r\n            <table\r\n              class=\"table\"\r\n              id=\"myTable\"\r\n              mat-table\r\n              [dataSource]=\"dataSource\"\r\n              class=\"table\"\r\n              multiTemplateDataRows\r\n              matSort\r\n            >\r\n              <!-- Reference Id Column -->\r\n              <ng-container matColumnDef=\"ruleid\">\r\n                <th mat-header-cell *matHeaderCellDef>Rule ID</th>\r\n                <td mat-cell *matCellDef=\"let rule\">{{ rule.rulId }}</td>\r\n              </ng-container>\r\n\r\n              <!-- Description Column -->\r\n              <ng-container matColumnDef=\"ruleName\">\r\n                <th mat-header-cell *matHeaderCellDef>Rule Name</th>\r\n                <td mat-cell *matCellDef=\"let rule\">{{ rule.rulNm }}</td>\r\n              </ng-container>\r\n\r\n              <!-- Category Column -->\r\n              <ng-container matColumnDef=\"ruleCate\">\r\n                <th mat-header-cell *matHeaderCellDef>Rule Category</th>\r\n                <td mat-cell *matCellDef=\"let rule\">\r\n                  {{ findCategory(rule.rulCtgryKey) }}\r\n                </td>\r\n              </ng-container>\r\n\r\n              <!-- Description Column -->\r\n              <ng-container matColumnDef=\"comnt\">\r\n                <th mat-header-cell *matHeaderCellDef>Comment</th>\r\n                <td mat-cell *matCellDef=\"let rule\">{{ rule.rulCmnt }}</td>\r\n              </ng-container>\r\n\r\n              <!-- Description Column -->\r\n              <ng-container matColumnDef=\"criteria\">\r\n                <th mat-header-cell *matHeaderCellDef>Criteria</th>\r\n                <td mat-cell *matCellDef=\"let rule\">{{ rule.rulCrtraStr }}</td>\r\n              </ng-container>\r\n\r\n              <!-- Action Column -->\r\n              <ng-container matColumnDef=\"action\">\r\n                <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                <td mat-cell *matCellDef=\"let rule\">\r\n                  <a\r\n                    href=\"javascript:void(0);\"\r\n                    (click)=\"onEditRule(rule)\"\r\n                    class=\"iconBtn\"\r\n                    ><i class=\"fa fa-pencil\"></i\r\n                  ></a>\r\n                  <a (click)=\"onDeleteRul(rule.rulSeq)\" class=\"iconBtn delBtn\"\r\n                    ><i class=\"fa fa-trash-o\"></i\r\n                  ></a>\r\n                  <!-- <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>  -->\r\n                </td></ng-container\r\n              >\r\n\r\n              <tr\r\n                mat-header-row\r\n                *matHeaderRowDef=\"displayedColumns\"\r\n                class=\"thead-light thead-blue\"\r\n              ></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n            </table>\r\n\r\n            <mat-paginator\r\n              [length]=\"datalength\"\r\n              [pageSizeOptions]=\"[10, 15, 20]\"\r\n              showFirstLastButtons\r\n            ></mat-paginator>\r\n          </div>\r\n\r\n          <!-- <div class=\"table-responsive\">\r\n            <table class=\"table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>Rule ID</th>\r\n                  <th>Rule Name</th>\r\n                  <th>Rule Category</th>\r\n                  <th>Comment</th>\r\n                  <th>Criteria</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let rule of rules\">\r\n                  <td>{{rule.rulId}}</td>\r\n                  <td>{{rule.rulNm}}</td>\r\n                  <td>{{findCategory(rule.rulCtgryKey)}}</td>\r\n                  <td>{{rule.rulCmnt}}</td>\r\n                  <td>{{rule.rulCrtraStr}}</td>\r\n                  <td>\r\n                    <a href=\"javascript:void(0);\" (click)=\"onEditRule(rule)\" class=\"iconBtn\"><i\r\n                        class=\"fa fa-pencil\"></i></a>\r\n                    <a (click)=\"onDeleteRul(rule.rulSeq)\"  class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                     <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a> \r\n                  </td>\r\n                </tr>\r\n                 <tr>\r\n                  <td>1234578954</td>\r\n                  <td>Rule Name here</td>\r\n                  <td>Compliance</td>\r\n                  <td>Client gender is = M and NDI > Requested Amount / 12</td>\r\n                  <td>Active</td>\r\n                  <td>\r\n                    <a href=\"add-workflow.html\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                    <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                    <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>1234578954</td>\r\n                  <td>Rule Name here</td>\r\n                  <td>Internal Audit</td>\r\n                  <td>Client gender is = M and NDI > Requested Amount / 12</td>\r\n                  <td>Pending</td>\r\n                  <td>\r\n                    <a href=\"add-workflow.html\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                    <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                    <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>1234578954</td>\r\n                  <td>Rule Name here</td>\r\n                  <td>Product</td>\r\n                  <td>Client gender is = M and NDI > Requested Amount / 12</td>\r\n                  <td>Active</td>\r\n                  <td>\r\n                    <a href=\"add-workflow.html\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                    <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                    <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                  </td>\r\n                </tr> \r\n              </tbody>\r\n            </table>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<script>\r\n  $(document).ready(function () {\r\n    $('[data-toggle=\"tooltip\"]').tooltip();\r\n  });\r\n</script>\r\n<script>\r\n  $(\".searchshow\").click(function () {\r\n    $(\".mysearchbox\").addClass(\"intro\");\r\n  });\r\n  $(\".remove-search\").click(function () {\r\n    $(\".mysearchbox\").removeClass(\"intro\");\r\n  });\r\n\r\n  function myFunction() {\r\n    var input, filter, table, tr, td, i;\r\n    input = document.getElementById(\"myInput\");\r\n    filter = input.value.toUpperCase();\r\n    table = document.getElementById(\"myTable\");\r\n    tr = table.getElementsByTagName(\"tr\");\r\n    for (i = 0; i < tr.length; i++) {\r\n      td = tr[i].getElementsByTagName(\"td\")[1];\r\n      if (td) {\r\n        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {\r\n          tr[i].style.display = \"\";\r\n        } else {\r\n          tr[i].style.display = \"none\";\r\n        }\r\n      }\r\n    }\r\n  }\r\n</script>\r\n<script>\r\n  var index = 1;\r\n  $(\"ul.moreless li:gt(\" + index + \")\").hide();\r\n  $(\"ul.moreless\").append('<li class=\"more\">more..</li>');\r\n  $(\"ul.moreless li.more\").click(function () {\r\n    $(\"ul.moreless li.more\").remove();\r\n    $(\"ul.moreless li:gt(\" + index + \")\").show();\r\n    $(\"ul.moreless\").append('<li class=\"less\">Less..</li>');\r\n    $(\"ul.moreless li.less\").click(function () {\r\n      $(\"ul.moreless li.less\").remove();\r\n      $(\"ul.moreless li:gt(\" + index + \")\").remove();\r\n      $(\"ul.moreless\").append('<li class=\"more\">more..</li>');\r\n    });\r\n  });\r\n</script>\r\n<script type=\"text/javascript\">\r\n  $(document).ready(function () {\r\n    $(\".acc_trigger\").toggleClass(\"inactive-header\");\r\n\r\n    $(\".acc_trigger:first\").addClass(\"active-header\").next().show();\r\n    $(\".acc_trigger\").click(function () {\r\n      if ($(this).next().is(\":hidden\")) {\r\n        $(\".active-header\")\r\n          .toggleClass(\"active-header\")\r\n          .toggleClass(\"inactive-header\")\r\n          .next()\r\n          .slideToggle()\r\n          .toggleClass(\"open-content\");\r\n        $(this).toggleClass(\"active-header\").toggleClass(\"inactive-header\");\r\n        $(this).next().slideToggle().toggleClass(\"open-content\");\r\n      } else {\r\n        $(this).toggleClass(\"active-header\").toggleClass(\"inactive-header\");\r\n        $(this).next().slideToggle().toggleClass(\"open-content\");\r\n      }\r\n    });\r\n\r\n    return false;\r\n  });\r\n</script>\r\n"

/***/ }),

/***/ "./src/app/pages/setup/rules/rules.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/setup/rules/rules.component.ts ***!
  \******************************************************/
/*! exports provided: RulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesComponent", function() { return RulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_Rule_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/Rule.model */ "./src/app/shared/models/Rule.model.ts");
/* harmony import */ var _shared_mocks_rules_mocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/mocks/rules.mocks */ "./src/app/shared/mocks/rules.mocks.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_rules_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/rules.service */ "./src/app/shared/services/rules.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var RulesComponent = /** @class */ (function () {
    function RulesComponent(router, rulesService, toastr, formBuilder, spinner, toaster) {
        this.router = router;
        this.rulesService = rulesService;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.spinner = spinner;
        this.toaster = toaster;
        this.rules = [];
        this.rule = new _shared_models_Rule_model__WEBPACK_IMPORTED_MODULE_1__["Rule"]();
        this.categories = _shared_mocks_rules_mocks__WEBPACK_IMPORTED_MODULE_2__["RULES_CATEGORIES"];
        this.fields = [];
        this.advFields = [{ heading: "Client", columns: [{ title: "First Name", column: "CLNT_FRST_NAME" }, { title: "Last Name", column: "LAST_NM" }, { title: "Age", column: "CLNT_AGE" }] },
            { heading: "Credit Application", columns: [{ title: "Loan Cycle No.", column: "LOAN_CYCL_NUM" }, { title: "Recommended Loan Amount", column: "RCMND_LOAN_AMT" }, { title: "Aproved Loan Amount", column: "APRVD_LOAN_AMT" }, { title: "Service Charge", column: "SRVC_CHRG" }, { title: "Aproved Loan Amount", column: "APRVD_LOAN_AMT" }, { title: "Aproved Loan Amount", column: "APRVD_LOAN_AMT" }] },
            { heading: "Nominee", columns: [{ title: "First Name", column: "NOM_FIRST_NAME" }, { title: "Age", column: "NOM_AGE" }] },
            { heading: "Next Of Kin", columns: [{ title: "Age", column: "KIN_AGE" }] },
            { heading: "Business Apprisal", columns: [{ title: "Business Income", column: "BIZ_INC" }, { title: "Primary Income", column: "PRM_INCM" }, { title: "Secondary Income", column: "SEC_INCM" }, { title: "Business Expense", column: "BIZ_EXP" }, { title: "Household Expense", column: "HSLD_EXP" }, { title: "Business Tenure", column: "BIZ_TNR" }, { title: "Net Desposable Income", column: "NDI" }] },
            { heading: "PSC", columns: [{ title: "Poverty Criteria", column: "PVRTY_CRTR" }] },
            { heading: "School Appraisal", columns: [{ title: "School Profit", column: "SCH_PROFIT" }, { title: "Total Fee", column: "TOT_FEE" }, { title: "Primary Income", column: "SCH_PRM_INCM" }, { title: "Secondary Income", column: "SCH_SEC_INCM" }, { title: "Business Expense", column: "SCH_BIZ_EXP" }, { title: "Household Expense", column: "SCH_HSLD_EXP" }, { title: "School Tenure", column: "SCH_TNR" }, { title: "Female Students Percentage", column: "FEMSSTDNTS_PER" }, { title: "Total Students", column: "TOT_STDNTS" }, { title: "No Fee Students", column: "TOTNOFEESTDNTS" }, { title: "School Income", column: "SCH_INCM" }] },
            { heading: "Installment", columns: [{ title: "No. of Paid Installments", column: "PAID_INST_NUM" }] }];
        this.basicFields = [{ heading: "Client", columns: [{ title: "First Name", column: "FRST_NM" }, { title: "Last Name", column: "LAST_NM" }, { title: "Number Of Dependants", column: "NUM_OF_DPND" }, { title: "Earning Members", column: "ERNG_MEMB" }, { title: "Household Members", column: "HSE_HLD_MEMB" }, { title: "Number Of Children", column: "NUM_OF_CHLDRN" }, { title: "Gender", column: "GNDR_KEY" }, { title: "Marital Status", column: "MRTL_STS_KEY" }, { title: "Education Level", column: "EDU_LVL_KEY" }, { title: "Occupation", column: "OCC_KEY" }, { title: "Nature of Disabilty", column: "NATR_OF_DIS_KEY" }, { title: "DOB", column: "DOB" }] }];
        this.ruleCategories = [{ value: 1, desc: "Basic" }, { value: 2, desc: "Advance" }];
        this.datalength = 0;
        this.lastPageIndex = 0;
        this.filterValue = "";
        this.searchVal = "";
        this.isCount = true;
        this.isEdit = false;
        this.showFields = false;
    }
    RulesComponent.prototype.applyFilter = function (filterValue) {
        this.filterValue = filterValue;
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.datalength = this.countBeforeFilter;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            return;
        }
        this.getFilteredData(filterValue.trim().toLowerCase());
    };
    RulesComponent.prototype.searchValue = function () {
        var _this = this;
        this.filterValue = this.searchVal.trim();
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            this.datalength = 0;
            setTimeout(function () { _this.datalength = _this.countBeforeFilter; }, 200);
            return;
        }
    };
    RulesComponent.prototype.ngOnInit = function () {
        this.displayedColumns = ['ruleid', 'ruleName', 'ruleCate', 'comnt', 'criteria', 'action'];
        this.getRules();
        this.RuleForm = this.formBuilder.group({
            rulSeq: [''],
            rulId: [''],
            rulCtgryKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            rulNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            rulCmnt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            rulCrtraStr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    };
    RulesComponent.prototype.findCategory = function (id) {
        var cat = '';
        this.ruleCategories.forEach(function (c) {
            if (c.value == id)
                cat = c.desc;
        });
        return cat;
    };
    RulesComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.rule);
        if (!this.isEdit) {
            this.rulesService.addRule(this.RuleForm.value).subscribe(function (res) {
                _this.toastr.success('Rule Saved', 'Success');
                $('#AdvanceRules').modal('hide');
                _this.getRules();
            }, function (error) {
                _this.toastr.error("Invalid Rule Criteria String", "Error");
            });
        }
        else {
            this.rulesService.updateRule(this.RuleForm.value).subscribe(function (res) {
                _this.toastr.success('Rule Saved', 'Success');
                $('#AdvanceRules').modal('hide');
                _this.getRules();
            }, function (error) {
                _this.toastr.error("Invalid Rule Criteria String", "Error");
            });
        }
    };
    RulesComponent.prototype.setSideBarListener = function () {
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
    };
    RulesComponent.prototype.addNewRule = function () {
        this.isEdit = false;
        this.RuleForm.reset();
        $('#AdvanceRules').modal('show');
    };
    RulesComponent.prototype.onEditRule = function (rule) {
        this.isEdit = true;
        this.RuleForm.reset();
        this.RuleForm = this.formBuilder.group({
            rulSeq: [rule.rulSeq],
            rulId: [rule.rulId],
            rulCtgryKey: [rule.rulCtgryKey, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            rulNm: [rule.rulNm, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            rulCmnt: [rule.rulCmnt, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            rulCrtraStr: [rule.rulCrtraStr, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.onCategoryChange();
        $('#AdvanceRules').modal('show');
    };
    RulesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function () { return _this.loadNextPage(); }))
            .subscribe();
    };
    RulesComponent.prototype.getRules = function () {
        var _this = this;
        this.isCount = true;
        this.spinner.show();
        this.rules = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.rules);
        this.paginator.pageIndex = 0;
        this.lastPageIndex = 0;
        this.dataSource.paginator = this.paginator;
        this.searchVal = '';
        this.filterValue = '';
        this.rulesService.getRules(this.paginator.pageIndex, 10, "", this.isCount).subscribe(function (response) {
            _this.spinner.hide();
            _this.rules = response.rules;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.rules);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = response.count;
            _this.dataBeforeFilter = _this.dataSource.data;
            _this.countBeforeFilter = response.count;
            _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
        }, function (error) {
            _this.spinner.hide();
            console.log(error);
        });
    };
    RulesComponent.prototype.loadNextPage = function () {
        var _this = this;
        this.isCount = false;
        if (this.paginator.pageIndex < this.lastPageIndex)
            return;
        if (this.dataSource.paginator.length == this.dataSource.data.length)
            return;
        if (((this.paginator.pageIndex + 1) * this.paginator.pageSize) - this.dataSource.data.length > 0) {
            this.spinner.show();
            this.rulesService.getRules(this.paginator.pageIndex, this.paginator.pageSize, this.filterValue, this.isCount).subscribe(function (response) {
                _this.spinner.hide();
                _this.rules = response.rules;
                _this.lastPageIndex = _this.lastPageIndex + 1;
                _this.dataSource.data = _this.dataSource.data.concat(response.rules);
                response.count = _this.datalength;
                _this.datalength = 0;
                setTimeout(function () { _this.datalength = response.count; }, 200);
                if (_this.filterValue.length == 0) {
                    _this.dataBeforeFilter = _this.dataSource.data;
                    _this.countBeforeFilter = response.count;
                    _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
                }
            }, function (error) {
                _this.spinner.hide();
                console.log('err', error);
            });
        }
    };
    RulesComponent.prototype.getFilteredData = function (filterValue) {
        var _this = this;
        this.isCount = true;
        this.paginator.pageIndex = 0;
        this.spinner.show();
        this.rulesService.getRules(this.paginator.pageIndex, this.paginator.pageSize, filterValue, this.isCount).subscribe(function (response) {
            _this.rules = response.rules;
            _this.spinner.hide();
            if (_this.rules.length <= 0) {
                _this.toaster.info('No Data Found Against This Search', 'Information');
            }
            ;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.rules);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = response.count;
        }, function (error) {
            _this.spinner.hide();
            console.log('err', error);
        });
    };
    RulesComponent.prototype.copyToMain = function (column) {
        this.RuleForm.controls['rulCrtraStr'].setValue((this.RuleForm.controls['rulCrtraStr'].value == null ? "" : this.RuleForm.controls['rulCrtraStr'].value) + " " + column.column);
    };
    RulesComponent.prototype.onCategoryChange = function () {
        this.fields = [];
        if (this.RuleForm.controls['rulCtgryKey'].value == 1) {
            this.fields = this.basicFields;
        }
        else {
            this.fields = this.advFields;
        }
    };
    RulesComponent.prototype.headingClick = function (ev) {
        $(ev).toggleClass('inactive-header');
        if ($(ev).next().is(':hidden')) {
            $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
            $(ev).toggleClass('active-header').toggleClass('inactive-header');
            $(ev).next().slideToggle().toggleClass('open-content');
        }
        else {
            $(ev).toggleClass('active-header').toggleClass('inactive-header');
            $(ev).next().slideToggle().toggleClass('open-content');
        }
    };
    //delete
    RulesComponent.prototype.onDeleteRul = function (passedId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
            title: 'Are you sure?',
            text: "Are you sure you want to delete this Rule?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.rulesService.deleteRule(passedId).subscribe(function (result) {
                    //this.pagedItems.splice(this.pagedItems.indexOf(passedId), 1);
                    _this.getRules();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()('Deleted!', 'Rule has been deleted.', 'success');
                }, function (error) { return console.log('There was an error: ', error); });
            }
        });
    };
    RulesComponent.prototype.showField = function () {
        this.showFields = true;
    };
    RulesComponent.prototype.closeField = function () {
        this.showFields = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSort"])
    ], RulesComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"])
    ], RulesComponent.prototype, "paginator", void 0);
    RulesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rules',
            template: __webpack_require__(/*! ./rules.component.html */ "./src/app/pages/setup/rules/rules.component.html"),
            styles: [__webpack_require__(/*! ./rules.component.css */ "./src/app/pages/setup/rules/rules.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_rules_service__WEBPACK_IMPORTED_MODULE_4__["RulesService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], RulesComponent);
    return RulesComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/setup.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/setup/setup.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mat-cell, .mat-header-cell {\r\n  font-size: 14px;\r\n  }\r\n  \r\n  .mat-cell, .mat-footer-cell {\r\n  font-size: 13px;\r\n  }\r\n  \r\n  table {\r\n  width: 100%;\r\n  }\r\n  \r\n  th.mat-header-cell {\r\n      vertical-align: middle;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/pages/setup/setup.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/setup/setup.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t<app-left-side-bar></app-left-side-bar>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t<div class=\"content mb-md-5\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t  <div class=\"mysearchbox\" (click)=\"showField()\" *ngIf=\"!showFields\">\r\n\t\t\t\t\t\t\t<h6 class=\"d-inline-block searchshow\" style=\"cursor: pointer;\">Common Codes \r\n\t\t\t\t\t\t\t  <i class=\"fa fa-search\"> </i>\r\n\t\t\t\t\t\t\t</h6>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  <div class=\"mysearch\" *ngIf=\"showFields\">\r\n\t\t\t\t\t\t\t<form (ngSubmit)=\"applyFilter(searchVal)\" #searchForm=\"ngForm\">\r\n\t\t\t\t\t\t\t  <div class=\"col-sm-10\" style=\"float:left;\">\r\n\t\t\t\t\t\t\t\t<mat-form-field *ngIf=\"showFields\">\r\n\t\t\t\t\t\t\t\t  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- <div class=\"col-sm-6 addBtn\">\r\n\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" (click)=\"addItem()\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-plus\"></i> Add</button>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- <div class=\"table-responsive\">\r\n\t\t\t\t\t\t<table class=\"table\" id=\"myTable\">\r\n\t\t\t\t\t\t\t<thead class=\"thead-light\">\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th>Code</th>\r\n\t\t\t\t\t\t\t\t\t<th>Name</th>\r\n\t\t\t\t\t\t\t\t\t<th>Description</th>\r\n\t\t\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let code of pagedItems\">\r\n\t\t\t\t\t\t\t\t\t<td>{{code.refCdGrp}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<a (click)=\"commonCodeVale(code.refCdGrpSeq)\">{{code.refCdGrpName}}</a>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<a>{{code.refCdGrpCmnt}}</a>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<a (click)=\"editItem(code.refCdGrpSeq)\" class=\"iconBtn\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t<a (click)=\"commonCodeVale(code.refCdGrpSeq)\" class=\"iconBtn\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/icon2.png\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div> -->\r\n\r\n\r\n\t\t\t\t\t<!---- DATA TABLES---->\r\n\r\n\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t<table mat-table [dataSource]=\"dataSource\" class=\"table\" multiTemplateDataRows matSort id=\"myTable\">\r\n\r\n\t\t\t\t\t\t\t<!-- Code Column -->\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"refCdGrp\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>Code</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let code\">{{code.refCdGrp}}</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<!--name Column -->\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"refCdGrpName\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let code\">\r\n\t\t\t\t\t\t\t\t\t<a (click)=\"commonCodeVale(code.refCdGrpSeq)\">{{code.refCdGrpName}}</a></td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<!-- Description Column -->\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"refCdGrpCmnt\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>Description</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let code\">\r\n\t\t\t\t\t\t\t\t\t<a>{{code.refCdGrpCmnt}}</a></td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<!-- Action Column -->\r\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"action\">\r\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Action</th>\r\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let code\">\r\n\t\t\t\t\t\t\t\t\t<a (click)=\"editItem(code.refCdGrpSeq)\" class=\"iconBtn\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pencil\"></i>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<a (click)=\"commonCodeVale(code.refCdGrpSeq)\" class=\"iconBtn\">\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/icon2.png\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"thead-light thead-blue\"></tr>\r\n\t\t\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\t\t\t\t\t\t</table>\r\n\r\n\t\t\t\t\t\t<mat-paginator [pageSizeOptions]=\"[10, 20]\" showFirstLastButtons>\r\n\t\t\t\t\t\t</mat-paginator>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</main>\r\n<div class=\"modal fade\" id=\"cmmoncodes\" role=\"dialog\">\r\n\t<div class=\"modal-dialog mymodal\">\r\n\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<h5 class=\"modal-title\">Common Code</h5>\r\n\t\t\t</div>\r\n\t\t\t<form class=\"md-float-material\" [formGroup]=\"commonCodeForm\" (ngSubmit)=\"onCommonCodeSubmit()\">\r\n\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t<div class=\"cRow\">\r\n\t\t\t\t\t\t<!-- <div class=\"cCol3-col\">\r\n                    <label>Code:</label>\r\n                    <input type=\"text\" formControlName=\"groupCode\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.groupCode.errors }\" /> -->\r\n\t\t\t\t\t\t<!-- <div *ngIf=\"submitted && f.groupCode.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.groupCode.errors.required\">First Name is required</div>\r\n                        </div> -->\r\n\t\t\t\t\t\t<!-- </div> -->\r\n\t\t\t\t\t\t<div class=\"cCol3-col\">\r\n\t\t\t\t\t\t\t<label>Name:</label>\r\n\t\t\t\t\t\t\t<input (keypress)=\"keyPress($event)\" type=\"text\" formControlName=\"groupName\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.groupName.errors }\" />\r\n\t\t\t\t\t\t\t<!-- <div *ngIf=\"submitted && f.groupName.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.groupName.errors.required\">Last Name is required</div>\r\n                        </div>-->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"cCol3-col\">\r\n\t\t\t\t\t\t\t<label>Description:</label>\r\n\t\t\t\t\t\t\t<input (keypress)=\"keyPress($event)\" type=\"text\" formControlName=\"groupDescription\"\r\n\t\t\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.groupDescription.errors }\" />\r\n\t\t\t\t\t\t\t<!--<div *ngIf=\"submitted && f.groupDescription.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.groupDescription.errors.required\">Email is required</div>\r\n                            <div *ngIf=\"f.groupDescription.errors.email\">Email must be a valid email address</div>\r\n                        </div>-->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- <div *ngIf=\"submitted && f.groupCode.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n\t                  <i  class=\"fa fa-exclamation-circle\"></i>  \r\n\t                  <strong *ngIf=\"f.groupCode.errors.required\">Please Enter Group Code</strong>\r\n                 </div> -->\r\n\t\t\t\t\t<div *ngIf=\"submitted && f.groupName.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n\t\t\t\t\t\t<i class=\"fa fa-exclamation-circle\"></i>\r\n\t\t\t\t\t\t<strong *ngIf=\"f.groupName.errors\">Please Enter Group Name</strong>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"submitted && f.groupDescription.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n\t\t\t\t\t\t<i class=\"fa fa-exclamation-circle\"></i>\r\n\t\t\t\t\t\t<strong *ngIf=\"f.groupDescription.errors\">Please Enter Group Description</strong>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"modal-footer text-center\">\r\n\t\t\t\t\t<button class=\"btn btn-primary\">Ok</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/setup/setup.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/setup/setup.component.ts ***!
  \************************************************/
/*! exports provided: SetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupComponent", function() { return SetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SetupComponent = /** @class */ (function () {
    function SetupComponent(router, DataService, formBuilder, spinner, toaster) {
        this.router = router;
        this.DataService = DataService;
        this.formBuilder = formBuilder;
        this.spinner = spinner;
        this.toaster = toaster;
        this.submitted = false;
        // array of all items to be paged
        this.allItems = [];
        // pager object
        this.pager = {};
        // paged items
        this.pagedItems = [];
        //listing: any;
        this.showFields = false;
        this.currentpage = 0;
    }
    SetupComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    SetupComponent.prototype.ngOnInit = function () {
        this.displayedColumns = ['refCdGrp', 'refCdGrpName', 'refCdGrpCmnt', 'action'];
        this.commonCodeForm = this.formBuilder.group({
            groupCode: [''],
            formSaveKey: ['add'],
            groupName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            groupDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.listing(1);
    };
    SetupComponent.prototype.listing = function (page) {
        var _this = this;
        this.spinner.show();
        this.DataService.getAllCommonCode().subscribe(function (data) {
            console.log(data);
            _this.spinner.hide();
            _this.allItems = data;
            // initialize to page 1
            _this.setPage(page);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.allItems);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) {
            _this.spinner.hide();
            console.log('err');
            console.log('err', error);
        });
    };
    Object.defineProperty(SetupComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.commonCodeForm.controls; },
        enumerable: true,
        configurable: true
    });
    SetupComponent.prototype.onCommonCodeSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.commonCodeForm.invalid) {
            console.log(this.commonCodeForm);
            return;
        }
        this.spinner.show();
        var formValue = this.commonCodeForm.value;
        console.log(formValue.formSaveKey);
        if (formValue.formSaveKey === 'add') {
            this.DataService.addCommonCode(formValue).subscribe(function (data) {
                //let usr = JSON.parse(data);
                _this.spinner.hide();
                _this.toaster.success('Saved');
                $('#cmmoncodes').modal('hide');
                // this.pagedItems.splice(0, 0, data.group);
                console.log(data);
                _this.listing(1);
                //this.pagedItems.push(data.group);
                sessionStorage.setItem('groupSeq', data['clientSeq']);
            }, function (error) {
                _this.spinner.hide();
                _this.toaster.error('Error');
                console.log('err', error);
            });
        }
        else if (formValue.formSaveKey === 'update') {
            this.DataService.updateAllCommonCode(formValue).subscribe(function (data) {
                //let usr = JSON.parse(data);
                $('#cmmoncodes').modal('hide');
                _this.listing(_this.pager.currentPage);
                _this.spinner.hide();
                _this.toaster.success('Updated');
                //this.pagedItems.splice(this.pagedItems.indexOf(data.group['refCdGrpSeq']), 1);
                ///this.pagedItems.push(data.group);
                console.log(data);
                sessionStorage.setItem('groupSeq', data['clientSeq']);
            }, function (error) {
                _this.spinner.hide();
                _this.toaster.error('Error');
                console.log('err', error);
            });
        }
        return false;
    };
    SetupComponent.prototype.commonCodeVale = function (id) {
        sessionStorage.setItem('clickCommonCode', id);
        this.router.navigate(['/setup/common-code-values', id]);
        //this.router.navigate(['/product-details', id]);
    };
    //pagenation
    SetupComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.DataService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    //add
    SetupComponent.prototype.addItem = function () {
        this.submitted = false;
        $('#cmmoncodes').modal('show');
        this.commonCodeForm = this.formBuilder.group({
            groupCode: [''],
            formSaveKey: ['add'],
            groupName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            groupDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    //edit
    SetupComponent.prototype.editItem = function (passedId) {
        var _this = this;
        this.currentpage = this.pager.currentPage;
        console.log(passedId);
        this.DataService.editAllCommonCode(passedId).subscribe(function (result) {
            console.log(result);
            $('#cmmoncodes').modal('show');
            _this.commonCodeForm = _this.formBuilder.group({
                groupSeq: [result.refCdGrpSeq],
                formSaveKey: ['update'],
                groupCode: [result.refCdGrp],
                groupName: [result.refCdGrpName],
                groupDescription: [result.refCdGrpCmnt],
            });
        }, function (error) { return console.log('There was an error: ', error); });
    };
    SetupComponent.prototype.showField = function () {
        this.showFields = true;
    };
    SetupComponent.prototype.keyPress = function (event) {
        var pattern = /[a-zA-Z0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], SetupComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], SetupComponent.prototype, "paginator", void 0);
    SetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setup',
            template: __webpack_require__(/*! ./setup.component.html */ "./src/app/pages/setup/setup.component.html"),
            styles: [__webpack_require__(/*! ./setup.component.css */ "./src/app/pages/setup/setup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], SetupComponent);
    return SetupComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/setup.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/setup/setup.module.ts ***!
  \*********************************************/
/*! exports provided: routes, SetupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupModule", function() { return SetupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setup.component */ "./src/app/pages/setup/setup.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/products.component */ "./src/app/pages/setup/products/products.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _rules_rules_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rules/rules.component */ "./src/app/pages/setup/rules/rules.component.ts");
/* harmony import */ var _rules_add_rule_add_rule_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rules/add-rule/add-rule.component */ "./src/app/pages/setup/rules/add-rule/add-rule.component.ts");
/* harmony import */ var _address_type_address_type_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./address-type/address-type.component */ "./src/app/pages/setup/address-type/address-type.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _approval_workflow_approval_workflow_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./approval-workflow/approval-workflow.component */ "./src/app/pages/setup/approval-workflow/approval-workflow.component.ts");
/* harmony import */ var _approval_workflow_add_workflow_add_workflow_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./approval-workflow/add-workflow/add-workflow.component */ "./src/app/pages/setup/approval-workflow/add-workflow/add-workflow.component.ts");
/* harmony import */ var _common_code_values_common_code_values_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common-code-values/common-code-values.component */ "./src/app/pages/setup/common-code-values/common-code-values.component.ts");
/* harmony import */ var _city_city_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./city/city.component */ "./src/app/pages/setup/city/city.component.ts");
/* harmony import */ var _types_payment_types_payment_types_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./types/payment-types/payment-types.component */ "./src/app/pages/setup/types/payment-types/payment-types.component.ts");
/* harmony import */ var _types_expense_types_expense_types_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./types/expense-types/expense-types.component */ "./src/app/pages/setup/types/expense-types/expense-types.component.ts");
/* harmony import */ var _common_code_common_code_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./common-code/common-code.component */ "./src/app/pages/setup/common-code/common-code.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _types_charge_types_charge_types_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./types/charge-types/charge-types.component */ "./src/app/pages/setup/types/charge-types/charge-types.component.ts");
/* harmony import */ var _types_recovery_types_recovery_types_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./types/recovery-types/recovery-types.component */ "./src/app/pages/setup/types/recovery-types/recovery-types.component.ts");
/* harmony import */ var _products_product_by_seq_product_by_seq_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./products/product-by-seq/product-by-seq.component */ "./src/app/pages/setup/products/product-by-seq/product-by-seq.component.ts");
/* harmony import */ var _health_insurance_plan_health_insurance_plan_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./health-insurance-plan/health-insurance-plan.component */ "./src/app/pages/setup/health-insurance-plan/health-insurance-plan.component.ts");
/* harmony import */ var _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./questionnaire/questionnaire.component */ "./src/app/pages/setup/questionnaire/questionnaire.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./question/question.component */ "./src/app/pages/setup/question/question.component.ts");
/* harmony import */ var _business_sector_business_sector_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./business-sector/business-sector.component */ "./src/app/pages/setup/business-sector/business-sector.component.ts");
/* harmony import */ var _business_activity_business_activity_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./business-activity/business-activity.component */ "./src/app/pages/setup/business-activity/business-activity.component.ts");
/* harmony import */ var _answer_answer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./answer/answer.component */ "./src/app/pages/setup/answer/answer.component.ts");
/* harmony import */ var _tags_tags_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./tags/tags.component */ "./src/app/pages/setup/tags/tags.component.ts");
/* harmony import */ var _AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./AuthGuard.service */ "./src/app/pages/setup/AuthGuard.service.ts");
/* harmony import */ var _file_loader_file_loader_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./file-loader/file-loader.component */ "./src/app/pages/setup/file-loader/file-loader.component.ts");
/* harmony import */ var _user_managment_user_managment_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./user-managment/user-managment.component */ "./src/app/pages/setup/user-managment/user-managment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var routes = [
    {
        path: '',
        component: _setup_component__WEBPACK_IMPORTED_MODULE_3__["SetupComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]]
    },
    { path: 'common-codes', component: _setup_component__WEBPACK_IMPORTED_MODULE_3__["SetupComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'common-code-values/:id', component: _common_code_values_common_code_values_component__WEBPACK_IMPORTED_MODULE_14__["CommonCodeValuesComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'products/:prdGrpNm/:id', component: _products_product_by_seq_product_by_seq_component__WEBPACK_IMPORTED_MODULE_23__["ProductBySeqComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'addProduct', loadChildren: './products/Add-Product/add-product.module#AddProductModule', canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'rules', component: _rules_rules_component__WEBPACK_IMPORTED_MODULE_8__["RulesComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'rules/:id', component: _rules_add_rule_add_rule_component__WEBPACK_IMPORTED_MODULE_9__["AddRuleComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    // { path: 'common-codes/:id', component: AddressTypeComponent },
    { path: 'organization', loadChildren: './organization/organization.module#OrganizationModule', canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'geography', loadChildren: './geography/geograpthy.module#GeograpthyModule', canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'approval-workflow', component: _approval_workflow_approval_workflow_component__WEBPACK_IMPORTED_MODULE_12__["ApprovalWorkflowComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'approval-workflow/add-workflow', component: _approval_workflow_add_workflow_add_workflow_component__WEBPACK_IMPORTED_MODULE_13__["AddWorkflowComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'communication-workflow', loadChildren: './communication-workflow/communicatoin-workflow.module#CommunicatoinWorkflowModule', canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'city', component: _city_city_component__WEBPACK_IMPORTED_MODULE_15__["CityComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'payment-types', component: _types_payment_types_payment_types_component__WEBPACK_IMPORTED_MODULE_16__["PaymentTypesComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'expense-types', component: _types_expense_types_expense_types_component__WEBPACK_IMPORTED_MODULE_17__["ExpenseTypesComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'charge-types', component: _types_charge_types_charge_types_component__WEBPACK_IMPORTED_MODULE_21__["ChargeTypesComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'recovery-types', component: _types_recovery_types_recovery_types_component__WEBPACK_IMPORTED_MODULE_22__["RecoveryTypesComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'health-insurance-plan', component: _health_insurance_plan_health_insurance_plan_component__WEBPACK_IMPORTED_MODULE_24__["HealthInsurancePlanComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'tag', component: _tags_tags_component__WEBPACK_IMPORTED_MODULE_30__["TagsComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'Questionnaire', component: _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_25__["QuestionnaireComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'question', component: _question_question_component__WEBPACK_IMPORTED_MODULE_26__["QuestionComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'answer', component: _answer_answer_component__WEBPACK_IMPORTED_MODULE_29__["AnswerComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'business-sector', component: _business_sector_business_sector_component__WEBPACK_IMPORTED_MODULE_27__["BusinessSectorComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'business-activity', component: _business_activity_business_activity_component__WEBPACK_IMPORTED_MODULE_28__["BusinessActivityComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'file-upload', component: _file_loader_file_loader_component__WEBPACK_IMPORTED_MODULE_32__["FileLoaderComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
    { path: 'user-managment', component: _user_managment_user_managment_component__WEBPACK_IMPORTED_MODULE_33__["UserManagmentComponent"], canActivate: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]] },
];
var SetupModule = /** @class */ (function () {
    function SetupModule() {
    }
    SetupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"]
            ],
            declarations: [
                _setup_component__WEBPACK_IMPORTED_MODULE_3__["SetupComponent"],
                _common_code_values_common_code_values_component__WEBPACK_IMPORTED_MODULE_14__["CommonCodeValuesComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"],
                _rules_rules_component__WEBPACK_IMPORTED_MODULE_8__["RulesComponent"],
                _rules_add_rule_add_rule_component__WEBPACK_IMPORTED_MODULE_9__["AddRuleComponent"],
                _address_type_address_type_component__WEBPACK_IMPORTED_MODULE_10__["AddressTypeComponent"],
                _approval_workflow_approval_workflow_component__WEBPACK_IMPORTED_MODULE_12__["ApprovalWorkflowComponent"],
                _approval_workflow_add_workflow_add_workflow_component__WEBPACK_IMPORTED_MODULE_13__["AddWorkflowComponent"],
                _types_payment_types_payment_types_component__WEBPACK_IMPORTED_MODULE_16__["PaymentTypesComponent"],
                _types_expense_types_expense_types_component__WEBPACK_IMPORTED_MODULE_17__["ExpenseTypesComponent"],
                _city_city_component__WEBPACK_IMPORTED_MODULE_15__["CityComponent"],
                _common_code_common_code_component__WEBPACK_IMPORTED_MODULE_18__["CommonCodeComponent"],
                _types_charge_types_charge_types_component__WEBPACK_IMPORTED_MODULE_21__["ChargeTypesComponent"],
                _types_recovery_types_recovery_types_component__WEBPACK_IMPORTED_MODULE_22__["RecoveryTypesComponent"],
                _products_product_by_seq_product_by_seq_component__WEBPACK_IMPORTED_MODULE_23__["ProductBySeqComponent"],
                _health_insurance_plan_health_insurance_plan_component__WEBPACK_IMPORTED_MODULE_24__["HealthInsurancePlanComponent"],
                _tags_tags_component__WEBPACK_IMPORTED_MODULE_30__["TagsComponent"],
                _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_25__["QuestionnaireComponent"],
                _question_question_component__WEBPACK_IMPORTED_MODULE_26__["QuestionComponent"],
                _answer_answer_component__WEBPACK_IMPORTED_MODULE_29__["AnswerComponent"],
                _business_sector_business_sector_component__WEBPACK_IMPORTED_MODULE_27__["BusinessSectorComponent"],
                _business_activity_business_activity_component__WEBPACK_IMPORTED_MODULE_28__["BusinessActivityComponent"],
                _file_loader_file_loader_component__WEBPACK_IMPORTED_MODULE_32__["FileLoaderComponent"],
                _user_managment_user_managment_component__WEBPACK_IMPORTED_MODULE_33__["UserManagmentComponent"]
            ],
            providers: [_AuthGuard_service__WEBPACK_IMPORTED_MODULE_31__["AuthGuard"]]
        })
    ], SetupModule);
    return SetupModule;
}());



/***/ }),

/***/ "./src/app/pages/setup/tags/tags.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/setup/tags/tags.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/tags/tags.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/setup/tags/tags.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<div class=\"row\">\r\n\t    <div class=\"col-md-3\">\r\n\t\t\t\t<app-left-side-bar></app-left-side-bar>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t<div class=\"content mb-md-5\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t<div class=\"mysearchbox\">\r\n              <h6 class=\"d-inline-block searchshow\">Tags\r\n                <!-- <i class=\"fa fa-search\"></i> -->\r\n              </h6>\r\n\t\t\t\t\t\t\t<div class=\"mysearch\">\r\n\t\t\t\t\t\t\t\t<a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n\t\t\t\t\t\t\t\t <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\" title=\"Type in a name\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-6 addBtn\">\r\n\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#businessector\" (click)=\"onAddNewClick()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal fade\" id=\"businessector\" role=\"dialog\">\r\n\t\t\t\t\t\t<div class=\"modal-dialog mymodal\"> \t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<!-- Modal content-->\r\n\t\t\t\t\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t\t\t\t\t<div class=\"modal-header\">\r\n\t                <h5 class=\"modal-title\">Tag</h5>\r\n                </div>\r\n                \r\n                <form [formGroup]=\"tagForm\" (ngSubmit)=\"addTagsSubmit()\">\r\n                <div class=\"modal-body\">\r\n                <ul class=\"infolist\">\r\n                </ul>\r\n                  <div class=\"cRow\">\r\n                      <div class=\"cCol2\" >\r\n                          <label>Tag Name:</label>\r\n                          <input type=\"text\" formControlName=\"tagNm\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.tagNm.errors }\" />\r\n                          <div *ngIf=\"submitted && form.tagNm.errors\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"form.tagNm.errors.required\">Tag Name is required                                \r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"cCol30\">\r\n                      <label>Tag Description:</label>\r\n                      <input type=\"text\" formControlName=\"tagDscr\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.tagDscr.errors }\" />\r\n                      <div *ngIf=\"submitted && form.tagDscr.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"form.tagDscr.errors.required\">Tag Description is required</div>\r\n                      </div>\r\n                      \r\n                      </div>\r\n                      <div class=\"cCol2\">\r\n                    <label>Severity Flag</label>\r\n                    <div>\r\n                    <label class=\"form-check-inline\">\r\n                        <div>\r\n                          <input type=\"radio\" formControlName=\"svrtyFlgKey\" class=\"form-check-input\" type=\"radio\" name=\"svrtyFlgKey\" [value]=\"1\" [ngClass]=\"{ 'is-invalid': submitted && form.svrtyFlgKey.errors }\" />Yes\r\n                          <input type=\"radio\" formControlName=\"svrtyFlgKey\" class=\"form-check-input\" type=\"radio\" name=\"svrtyFlgKey\" [value]=\"0\" [ngClass]=\"{ 'is-invalid': submitted && form.svrtyFlgKey.errors }\" />No\r\n                          <div *ngIf=\"submitted && form.svrtyFlgKey.errors\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"form.svrtyFlgKey.errors.required\">Severity Flag is required</div>\r\n                          </div>\r\n                        </div>\r\n                    </label>\r\n                  </div>\r\n                      </div>\r\n                  </div>\r\n                <div class=\"modal-footer text-center\">\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" (click)=\"addTagsSubmit()\">Ok</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n              </div>\r\n              </form>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t<table class=\"table\" id=\"myTable\">\r\n\t\t\t\t\t<thead class=\"thead-light\">\r\n            <tr>\r\n              <th>Tag ID</th>\r\n              <th>Tag Name</th>\r\n              <th>Tag Description</th>\r\n              <th>Severity Flag</th>\r\n              <th>Action</th>\r\n            </tr>\r\n</thead>\r\n<tbody>\t\r\n  <tr *ngFor=\"let tag of tags\">\r\n    <td>{{tag.tagId}}</td> \r\n    <td>{{tag.tagNm}}</td>\r\n    <td>{{tag.tagDscr}}</td>\r\n    <td>{{getFlag(tag.svrtyFlgKey)}}</td>\r\n    <td>\t\t\t\t\t\t\r\n      <a  class=\"iconBtn\" (click)=\"onEdit(tag)\"><i class=\"fa fa-pencil\"></i></a>\r\n      <a  class=\"iconBtn delBtn\" (click)=\"onDelete(tag.tagsSeq)\"><i class=\"fa fa-trash-o\"></i></a>\r\n      <!-- <a  class=\"iconBtn\"><i class=\"fa fa-history\"></i></a> -->\r\n    </td>\r\n  </tr>\r\n</tbody>\r\n</table>\r\n\t\t\t</div>\t\r\n\t\t\t<!-- <div class=\"back\">\r\n\t\t\t\t<a href=\"setup.html\" class=\"btn btn-primary btn-min\"><i class=\"fa fa-chevron-left\"></i> Back</a>\r\n\t\t\t</div> -->\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/setup/tags/tags.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/setup/tags/tags.component.ts ***!
  \****************************************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_tags_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/tags.service */ "./src/app/shared/services/tags.service.ts");
/* harmony import */ var _shared_models_tag_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/tag.model */ "./src/app/shared/models/tag.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TagsComponent = /** @class */ (function () {
    function TagsComponent(formBuilder, tagsService) {
        this.formBuilder = formBuilder;
        this.tagsService = tagsService;
        this.addTag = new _shared_models_tag_model__WEBPACK_IMPORTED_MODULE_2__["Tag"]();
        this.isEdit = false;
        this.submitted = false;
    }
    TagsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tagForm = this.formBuilder.group({
            tagNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tagDscr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            svrtyFlgKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.tagsService.getTags().subscribe(function (data) { return _this.tags = data; });
    };
    Object.defineProperty(TagsComponent.prototype, "form", {
        get: function () {
            return this.tagForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    TagsComponent.prototype.onAddNewClick = function () {
        this.tagForm.reset();
        this.isEdit = false;
        this.addTag = new _shared_models_tag_model__WEBPACK_IMPORTED_MODULE_2__["Tag"]();
        $('#businessector').modal('show');
    };
    TagsComponent.prototype.addTagsSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.tagForm.invalid) {
            return;
        }
        this.addTag.tagNm = this.tagForm.value.tagNm;
        this.addTag.tagDscr = this.tagForm.value.tagDscr;
        this.addTag.svrtyFlgKey = this.tagForm.value.svrtyFlgKey;
        $('#businessector').modal('hide');
        console.log(this.addTag);
        if (this.isEdit) {
            this.tagsService.updateTag(this.addTag).subscribe(function (data) {
                _this.addTag = data;
                _this.tagsService.getTags().subscribe(function (data) { return _this.tags = data; });
            });
        }
        else {
            this.tagsService.addTag(this.addTag).subscribe(function (data) {
                _this.addTag = data;
                _this.tagsService.getTags().subscribe(function (data) { return _this.tags = data; });
            });
        }
    };
    TagsComponent.prototype.onEdit = function (Tags) {
        this.isEdit = true;
        this.tagForm.patchValue(Tags);
        console.log(Tags);
        this.addTag = Tags;
        $('#businessector').modal('show');
    };
    TagsComponent.prototype.onDelete = function (Tags) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Tag?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.tagsService.deleteTag(Tags).subscribe(function (data) {
                    _this.tagsService.getTags().subscribe(function (data) { return _this.tags = data; });
                });
            }
        });
        console.log(Tags);
    };
    TagsComponent.prototype.getFlag = function (key) {
        var flag = '';
        if (key === 1) {
            flag = 'Yes';
        }
        else if (key === 0) {
            flag = 'No';
        }
        return flag;
    };
    TagsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tags',
            template: __webpack_require__(/*! ./tags.component.html */ "./src/app/pages/setup/tags/tags.component.html"),
            styles: [__webpack_require__(/*! ./tags.component.css */ "./src/app/pages/setup/tags/tags.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_services_tags_service__WEBPACK_IMPORTED_MODULE_1__["TagsService"]])
    ], TagsComponent);
    return TagsComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/types/charge-types/charge-types.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/setup/types/charge-types/charge-types.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mat-cell, .mat-header-cell {\r\n  font-size: 14px;\r\n  }\r\n  \r\n  .mat-cell, .mat-footer-cell {\r\n  font-size: 13px;\r\n  }\r\n  \r\n  table {\r\n  width: 100%;\r\n  }\r\n  \r\n  th.mat-header-cell {\r\n      vertical-align: middle;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/pages/setup/types/charge-types/charge-types.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/setup/types/charge-types/charge-types.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\" (click)=\"showField()\" *ngIf=\"!showFields\">\r\n                <h6 class=\"d-inline-block searchshow\" style=\"cursor: pointer;\">Search\r\n                  <i class=\"fa fa-search\"> </i>\r\n                </h6>\r\n              </div>\r\n              <div class=\"mysearch\" *ngIf=\"showFields\">\r\n                <form (ngSubmit)=\"applyFilter(searchVal)\" #searchForm=\"ngForm\">\r\n                  <div class=\"col-sm-10\" style=\"float:left;\">\r\n                    <mat-form-field *ngIf=\"showFields\">\r\n                      <input id=\"searchBox\" (keyup)=\"searchValue()\" autofocus matInput name=\"searchValue\"\r\n                        [(ngModel)]=\"searchVal\" placeholder=\"Search\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-sm-2\" style=\"float:right;\">\r\n                    <button class=\"btn btn-primary btn-lg\" type=\"submit\">Search</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 addBtn\">\r\n              <button class=\"btn btn-primary btn-sm\" (click)=\"openTypeModal()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n              <div class=\"modal fade\" id=\"addprduct\" role=\"dialog\">\r\n                <div class=\"modal-dialog bigger mymodal\">\r\n\r\n                  <!-- Modal content-->\r\n                  <div class=\"modal-content text-left\">\r\n                    <div class=\"modal-header\">\r\n                      <h5 class=\"modal-title\">Charge Type</h5>\r\n                    </div>\r\n                    <form [formGroup]=\"paymentTypesForm\" (ngSubmit)=\"onSubmit()\">\r\n                      <div class=\"modal-body\"  style=\"overflow:visible;\">\r\n                        <div class=\"cRow\">\r\n                          <div class=\"cCol2\">\r\n                            <mat-form-field>\r\n                              <input type=\"text\" matInput placeholder=\"Id:\" formControlName=\"typId\"\r\n                                [errorStateMatcher]=\"matcher\">\r\n                              <mat-error *ngIf=\"!paymentTypesForm.get('typId').valid\">\r\n                                Id is <strong>required</strong>\r\n                              </mat-error>\r\n                            </mat-form-field>\r\n                          </div>\r\n                          <div class=\"cCol2\">\r\n                            <mat-form-field>\r\n                              <input type=\"text\" matInput placeholder=\"Type:\" formControlName=\"typStr\"\r\n                                [errorStateMatcher]=\"matcher\">\r\n                              <mat-error *ngIf=\"!paymentTypesForm.get('typStr').valid\">\r\n                                Type is <strong>required</strong>\r\n                              </mat-error>\r\n                            </mat-form-field>\r\n                          </div>\r\n                          <div class=\"cCol2\">\r\n                            <!-- <mat-form-field>\r\n                              <input type=\"text\" matInput placeholder=\"GL Account Mappping:\" formControlName=\"glAcctNum\"\r\n                                     [errorStateMatcher]=\"matcher\">\r\n                              <mat-error *ngIf=\"!paymentTypesForm.get('glAcctNum').valid\">\r\n                                Mapping is <strong>required</strong>\r\n                              </mat-error>\r\n                            </mat-form-field> -->\r\n                            <mat-form-field>\r\n                              <mat-select placeholder=\"Select Branch:\" formControlName=\"brnchSeq\" name=\"brnchSeq\"\r\n                                [errorStateMatcher]=\"matcher\">\r\n                                <mat-option [value]=\"0\">Global</mat-option>\r\n                                <mat-option *ngFor=\"let edu of allBrnches\" [value]=\"edu.brnchSeq\">\r\n                                  ({{edu.brnchCd}}) - {{edu.brnchNm}}\r\n                                </mat-option>\r\n                              </mat-select>\r\n                            </mat-form-field>\r\n                            <!-- <mat-form-field>\r\n                              <mat-select placeholder=\"Select GL Account Mapping:\" formControlName=\"glAcctNum\"\r\n                                name=\"glMapping\" [errorStateMatcher]=\"matcher\">\r\n                                <mat-option *ngFor=\"let edu of GlAccounts\" [value]=\"edu.accNum\">\r\n                                  {{edu.desc}}\r\n                                </mat-option>\r\n                              </mat-select> -->\r\n                            <!-- <mat-error *ngIf=\"!paymentTypesForm.get('glMapping').valid\">\r\n                                  Mapping is <strong>required</strong>\r\n                                </mat-error> \r\n                            </mat-form-field>-->\r\n                          </div>\r\n                          <div class=\"cCol2\">\r\n                            <mat-form-field>\r\n                              <mat-select placeholder=\"Select Status:\" formControlName=\"typStsKey\" name=\"typStsKey\"\r\n                                [errorStateMatcher]=\"matcher\">\r\n                                <mat-option *ngFor=\"let edu of statusArray\" [value]=\"edu.codeKey\">\r\n                                  {{edu.codeValue}}\r\n                                </mat-option>\r\n                              </mat-select>\r\n                              <mat-error *ngIf=\"!paymentTypesForm.get('typStsKey').valid\">\r\n                                Institution Name is <strong>required</strong>\r\n                              </mat-error>\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"cRow\">\r\n                          <div class=\"cCol4\">\r\n                            <ng-select [items]=\"GlAccounts\" required required bindLabel=\"desc\" bindValue=\"accNum\"\r\n                              name=\"glMapping\" placeholder=\"Select GL Account Mapping\" formControlName=\"glAcctNum\">\r\n                            </ng-select>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"modal-footer text-center\">\r\n                        <button type=\"submit\" class=\"btn btn-primary btn-min\">Ok</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <!-- <div class=\"table-responsive\">\r\n            <table class=\"table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>Charge Type ID</th>\r\n                  <th>Charge Type</th>\r\n                  <th>GL Account Mappping</th>\r\n                  <th>Status</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let code of pagedItems\">\r\n                  <td>{{code.typId}}</td>\r\n                  <td>{{code.typStr}}</td>\r\n                  <td>{{findDscForAccountNo(code.desc)}}</td>\r\n                  <td>{{findValueByKey(code.typStsKey)}}</td>\r\n                  <td>\r\n                    <a (click)=\"editItem(code)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                    <a (click)=\"deleteItem(code)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                    <a class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div> -->\r\n\r\n\r\n          <!---- DATA TABLES---->\r\n\r\n          <div class=\"table-responsive\">\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"table\" matSort>\r\n\r\n              <!-- Charge Type ID Column -->\r\n              <ng-container matColumnDef=\"typId\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Charge Type ID</th>\r\n                <td mat-cell *matCellDef=\"let chrg\">{{chrg.typId}}</td>\r\n              </ng-container>\r\n\r\n              <!--Charge Type -->\r\n              <ng-container matColumnDef=\"typStr\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Charge Type</th>\r\n                <td mat-cell *matCellDef=\"let chrg\">{{chrg.typStr}}</td>\r\n              </ng-container>\r\n\r\n              <!-- GL Account Mapping Column -->\r\n              <ng-container matColumnDef=\"desc\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>GL Account Mapping</th>\r\n                <td mat-cell *matCellDef=\"let chrg\">{{findDscForAccountNo(chrg.desc)}}</td>\r\n              </ng-container>\r\n              <!-- Branch Column -->\r\n              <ng-container matColumnDef=\"brnchSeq\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Branch</th>\r\n                <td mat-cell *matCellDef=\"let pymnt\">{{findBranchBySeq(pymnt.brnchSeq)}}</td>\r\n              </ng-container>\r\n              <!-- Status Column -->\r\n              <ng-container matColumnDef=\"typStsKey\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r\n                <td mat-cell *matCellDef=\"let chrg\">{{findValueByKey(chrg.typStsKey)}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Action Column -->\r\n              <ng-container matColumnDef=\"action\">\r\n                <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                <td mat-cell *matCellDef=\"let chrg\">\r\n                  <a (click)=\"editItem(chrg)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a (click)=\"deleteItem(chrg)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                  <a class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"thead-light thead-blue\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n\r\n            <mat-paginator [length]=\"datalength\" [pageSizeOptions]=\"[10, 15,  20]\" showFirstLastButtons>\r\n            </mat-paginator>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<script>\r\n  $(document).ready(function () {\r\n    $('[data-toggle=\"tooltip\"]').tooltip();\r\n  });\r\n</script>\r\n<script>\r\n  $(\".searchshow\").click(function () {\r\n    $(\".mysearchbox\").addClass(\"intro\");\r\n  });\r\n  $(\".remove-search\").click(function () {\r\n    $(\".mysearchbox\").removeClass(\"intro\");\r\n  });\r\n\r\n  function myFunction() {\r\n    var input, filter, table, tr, td, i;\r\n    input = document.getElementById(\"myInput\");\r\n    filter = input.value.toUpperCase();\r\n    table = document.getElementById(\"myTable\");\r\n    tr = table.getElementsByTagName(\"tr\");\r\n    for (i = 0; i < tr.length; i++) {\r\n      td = tr[i].getElementsByTagName(\"td\")[1];\r\n      if (td) {\r\n        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {\r\n          tr[i].style.display = \"\";\r\n        } else {\r\n          tr[i].style.display = \"none\";\r\n        }\r\n      }\r\n    }\r\n  }\r\n</script>\r\n<script>\r\n  var index = 1;\r\n  $('ul.moreless li:gt(' + index + ')').hide();\r\n  $('ul.moreless').append('<li class=\"more\">more..</li>');\r\n  $('ul.moreless li.more').click(function () {\r\n    $('ul.moreless li.more').remove();\r\n    $('ul.moreless li:gt(' + index + ')').show();\r\n    $('ul.moreless').append('<li class=\"less\">Less..</li>');\r\n    $('ul.moreless li.less').click(function () {\r\n      $('ul.moreless li.less').remove();\r\n      $('ul.moreless li:gt(' + index + ')').remove();\r\n      $('ul.moreless').append('<li class=\"more\">more..</li>');\r\n    });\r\n  });\r\n</script>"

/***/ }),

/***/ "./src/app/pages/setup/types/charge-types/charge-types.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/setup/types/charge-types/charge-types.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChargeTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargeTypesComponent", function() { return ChargeTypesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/helpers/MyErrorStateMatcher.helper */ "./src/app/shared/helpers/MyErrorStateMatcher.helper.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _shared_services_paymentTypes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/paymentTypes.service */ "./src/app/shared/services/paymentTypes.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ChargeTypesComponent = /** @class */ (function () {
    function ChargeTypesComponent(router, dataService, fb, paymentTypesService, commonService, spinner, toaster) {
        this.router = router;
        this.dataService = dataService;
        this.fb = fb;
        this.paymentTypesService = paymentTypesService;
        this.commonService = commonService;
        this.spinner = spinner;
        this.toaster = toaster;
        this.typeNumber = 1;
        this.matcher = new _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_2__["MyErrorStateMatcher"]();
        this.submitted = false;
        this.showFields = false;
        // array of all items to be paged
        this.allItems = [];
        // pager object
        this.pager = {};
        // paged items
        this.pagedItems = [];
        this.isEdit = false;
        this.allStatuses = [];
        this.GlAccounts = [];
        this.datalength = 0;
        this.lastPageIndex = 0;
        this.filterValue = "";
        this.searchVal = "";
        this.isCount = true;
        this.allBrnches = [];
    }
    ChargeTypesComponent.prototype.applyFilter = function (filterValue) {
        this.filterValue = filterValue;
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.datalength = this.countBeforeFilter;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            return;
        }
        this.getFilteredData(filterValue.trim().toLowerCase());
    };
    ChargeTypesComponent.prototype.searchValue = function () {
        var _this = this;
        this.filterValue = this.searchVal.trim();
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            this.datalength = 0;
            setTimeout(function () { _this.datalength = _this.countBeforeFilter; }, 200);
            return;
        }
    };
    ChargeTypesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.displayedColumns = ['typId', 'typStr', 'desc', 'brnchSeq', 'typStsKey', 'action'];
        this.paymentTypesForm = this.fb.group({
            typId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            typStr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            glAcctNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            typStsKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            typSeq: [''],
            brnchSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.commonService.getValuesByGroupName('\tSTATUS').subscribe(function (d) {
            _this.statusArray = d;
        });
        this.commonService.getGlAccounts().subscribe(function (d) {
            _this.GlAccounts = d;
        });
        this.loadStatuses();
        this.loadPayment();
        this.paymentTypesService.getAllBrnches().subscribe(function (res) {
            _this.allBrnches = res;
        });
    };
    ChargeTypesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function () { return _this.loadNextPage(); }))
            .subscribe();
    };
    ChargeTypesComponent.prototype.loadPayment = function () {
        var _this = this;
        this.isCount = true;
        this.spinner.show();
        this.paymentTypesService.getAllTypesByCategory(this.typeNumber, this.paginator.pageIndex, 10, "", this.isCount, 0).subscribe(function (data) {
            _this.allItems = data.typs;
            _this.spinner.hide();
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.allItems);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = data.count;
            _this.dataBeforeFilter = _this.dataSource.data;
            _this.countBeforeFilter = data.count;
            _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
        }, function (error) {
            _this.spinner.hide();
            console.log(error);
        });
    };
    ChargeTypesComponent.prototype.loadNextPage = function () {
        var _this = this;
        this.isCount = false;
        if (this.paginator.pageIndex < this.lastPageIndex)
            return;
        if (this.dataSource.paginator.length == this.dataSource.data.length)
            return;
        if (((this.paginator.pageIndex + 1) * this.paginator.pageSize) - this.dataSource.data.length > 0) {
            this.spinner.show();
            this.paymentTypesService.getAllTypesByCategory(this.typeNumber, this.paginator.pageIndex, this.paginator.pageSize, this.filterValue, this.isCount, 0).subscribe(function (data) {
                _this.spinner.hide();
                _this.allItems = data.typs;
                _this.lastPageIndex = _this.lastPageIndex + 1;
                _this.dataSource.data = _this.dataSource.data.concat(data.typs);
                data.count = _this.datalength;
                _this.datalength = 0;
                setTimeout(function () { _this.datalength = data.count; }, 200);
                if (_this.filterValue.length == 0) {
                    _this.dataBeforeFilter = _this.dataSource.data;
                    _this.countBeforeFilter = data.count;
                    _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
                }
            }, function (error) {
                _this.spinner.hide();
                console.log('err', error);
            });
        }
    };
    ChargeTypesComponent.prototype.getFilteredData = function (filterValue) {
        var _this = this;
        this.isCount = true;
        this.paginator.pageIndex = 0;
        this.lastPageIndex = 0;
        this.spinner.show();
        this.paymentTypesService.getAllTypesByCategory(this.typeNumber, this.paginator.pageIndex, this.paginator.pageSize, filterValue, this.isCount, 0).subscribe(function (data) {
            _this.allItems = data.typs;
            _this.spinner.hide();
            if (_this.allItems.length <= 0) {
                _this.toaster.info('No Data Found Against This Search', 'Information');
            }
            ;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.allItems);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = data.count;
        }, function (error) {
            _this.spinner.hide();
            console.log('err', error);
        });
    };
    ChargeTypesComponent.prototype.openTypeModal = function () {
        $('#addprduct').modal('show');
        this.paymentTypesForm.reset();
        this.isEdit = false;
    };
    ChargeTypesComponent.prototype.findValueByKey = function (key) {
        var status = 'not found';
        this.statusArray.forEach(function (s) {
            if (s.codeKey === key) {
                status = s.codeValue;
            }
        });
        return status;
    };
    ChargeTypesComponent.prototype.findBranchBySeq = function (key) {
        if (key == null || key == undefined)
            return "Not Assigned";
        if (key == 0)
            return "Global";
        var status = 'not found';
        this.allBrnches.forEach(function (s) {
            if (s.brnchSeq === key) {
                status = s.brnchNm;
            }
        });
        return status;
    };
    ChargeTypesComponent.prototype.editItem = function (paymentType) {
        $('#addprduct').modal('show');
        this.paymentTypesForm.patchValue(paymentType);
        this.isEdit = true;
    };
    ChargeTypesComponent.prototype.deleteItem = function (type) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this payment type?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.paymentTypesService.deleteType(type.typSeq).subscribe(function () {
                    _this.allItems.splice(_this.allItems.indexOf(type.pdcId), 1);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Deleted!', 'Payments types has been deleted.', 'success');
                }, function (error) { return console.log('There was an error: ', error); });
            }
        });
    };
    ChargeTypesComponent.prototype.onSubmit = function () {
        var result = Object.assign({}, this.paymentTypesForm.value);
        result.typCtgryKey = this.typeNumber;
        $('#addprduct').modal('hide');
        if (this.isEdit) {
            this.paymentTypesService.updateType(result).subscribe();
            var itemIndex = this.allItems.findIndex(function (item) { return item.typId === result.typId; });
            this.allItems[itemIndex] = result;
            this.setPage(this.pager.currentPage);
        }
        else {
            this.paymentTypesService.addType(result).subscribe();
            this.allItems.push(result);
            this.setPage(this.pager.currentPage);
        }
    };
    ChargeTypesComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.dataService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ChargeTypesComponent.prototype.loadStatuses = function () {
        var _this = this;
        this.paymentTypesService.getTypeStatus().subscribe(function (d) {
            _this.allStatuses = d;
        });
    };
    ChargeTypesComponent.prototype.showField = function () {
        this.showFields = true;
    };
    ChargeTypesComponent.prototype.findDscForAccountNo = function (acc_num) {
        var str = "GL ACCOUNT NUMBER NOT FOUND!";
        this.GlAccounts.forEach(function (acc) {
            if (acc.accNum == acc_num) {
                str = acc.desc;
            }
        });
        return str;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSort"])
    ], ChargeTypesComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"])
    ], ChargeTypesComponent.prototype, "paginator", void 0);
    ChargeTypesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-charge-types',
            template: __webpack_require__(/*! ./charge-types.component.html */ "./src/app/pages/setup/types/charge-types/charge-types.component.html"),
            styles: [__webpack_require__(/*! ./charge-types.component.css */ "./src/app/pages/setup/types/charge-types/charge-types.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _shared_services_paymentTypes_service__WEBPACK_IMPORTED_MODULE_5__["PaymentTypesService"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"]])
    ], ChargeTypesComponent);
    return ChargeTypesComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/types/expense-types/expense-types.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/setup/types/expense-types/expense-types.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mat-cell, .mat-header-cell {\r\n  font-size: 14px;\r\n  }\r\n  \r\n  .mat-cell, .mat-footer-cell {\r\n  font-size: 13px;\r\n  }\r\n  \r\n  table {\r\n  width: 100%;\r\n  }\r\n  \r\n  th.mat-header-cell {\r\n      vertical-align: middle;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/pages/setup/types/expense-types/expense-types.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/setup/types/expense-types/expense-types.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"mysearchbox\" (click)=\"showField()\" *ngIf=\"!showFields\">\r\n                  <h6 class=\"d-inline-block searchshow\" style=\"cursor: pointer;\">Search\r\n                    <i class=\"fa fa-search\"> </i>\r\n                  </h6>\r\n                </div>\r\n                <div class=\"mysearch\" *ngIf=\"showFields\">\r\n                  <form (ngSubmit)=\"applyFilter(searchVal)\" #searchForm=\"ngForm\">\r\n                    <div class=\"col-sm-10\" style=\"float:left;\">\r\n                      <mat-form-field *ngIf=\"showFields\">\r\n                        <input id=\"searchBox\" (keyup)=\"searchValue()\" autofocus matInput name=\"searchValue\"\r\n                          [(ngModel)]=\"searchVal\" placeholder=\"Search\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-2\" style=\"float:right;\">\r\n                      <button class=\"btn btn-primary btn-lg\" type=\"submit\">Search</button>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-5\">\r\n                <form [formGroup]=\"branchForm\" (ngSubmit)=\"onSubmitBranchForm()\">\r\n                  <ng-select  [items]=\"allBrnches\" required  (change)=\"loadPayment($event)\"\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n                </form>\r\n              </div>\r\n              <div class=\"col-sm-1\">\r\n                <button class=\"btn btn-primary btn-sm\" (click)=\"openTypeModal()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n              </div>\r\n            </div>\r\n          <div class=\"row-sm-6\">\r\n            <div class=\"col-sm-6 addBtn\">\r\n              <div class=\"modal fade\" id=\"addprduct\" role=\"dialog\">\r\n                <div class=\"modal-dialog bigger mymodal\">\r\n\r\n                  <!-- Modal content-->\r\n                  <div class=\"modal-content text-left\">\r\n                    <div class=\"modal-header\">\r\n                      <h5 class=\"modal-title\">Expense Type</h5>\r\n                    </div>\r\n                    <form [formGroup]=\"paymentTypesForm\" (ngSubmit)=\"onSubmit()\">\r\n                      <div class=\"modal-body\" style=\"overflow:visible;\">\r\n                        <div class=\"cRow\">\r\n                          <div class=\"cCol2\">\r\n                            <mat-form-field>\r\n                              <input type=\"text\" matInput placeholder=\"Id:\" formControlName=\"typId\"\r\n                                [errorStateMatcher]=\"matcher\">\r\n                              <mat-error *ngIf=\"!paymentTypesForm.get('typId').valid\">\r\n                                Id is <strong>required</strong>\r\n                              </mat-error>\r\n                            </mat-form-field>\r\n                          </div>\r\n                          <div class=\"cCol2\">\r\n                            <mat-form-field>\r\n                              <input type=\"text\" matInput placeholder=\"Type:\" formControlName=\"typStr\"\r\n                                [errorStateMatcher]=\"matcher\">\r\n                              <mat-error *ngIf=\"!paymentTypesForm.get('typStr').valid\">\r\n                                Type is <strong>required</strong>\r\n                              </mat-error>\r\n                            </mat-form-field>\r\n                          </div>\r\n                          <div class=\"cCol2\">\r\n                            <!-- <mat-form-field>\r\n                              <input type=\"text\" matInput placeholder=\"GL Account Mappping:\" formControlName=\"glAcctNum\"\r\n                                     [errorStateMatcher]=\"matcher\">\r\n                              <mat-error *ngIf=\"!paymentTypesForm.get('glAcctNum').valid\">\r\n                                Mapping is <strong>required</strong>\r\n                              </mat-error>\r\n                            </mat-form-field> -->\r\n                            <mat-form-field>\r\n                                <mat-select placeholder=\"Select Branch:\" formControlName=\"brnchSeq\" name=\"brnchSeq\"\r\n                                  [errorStateMatcher]=\"matcher\">\r\n                                  <mat-option [value]=\"0\">Global</mat-option>\r\n                                  <mat-option *ngFor=\"let edu of allBrnches\" [value]=\"edu.brnchSeq\">\r\n                                    ({{edu.brnchCd}}) - {{edu.brnchNm}}\r\n                                  </mat-option>\r\n                                </mat-select>\r\n                              </mat-form-field>\r\n                            \r\n                          </div>\r\n                          <div class=\"cCol2\">\r\n                            <mat-form-field>\r\n                              <mat-select placeholder=\"Select Status:\" formControlName=\"typStsKey\" name=\"typStsKey\"\r\n                                [errorStateMatcher]=\"matcher\">\r\n                                <mat-option *ngFor=\"let edu of statusArray\" [value]=\"edu.codeKey\">\r\n                                  {{edu.codeValue}}\r\n                                </mat-option>\r\n                              </mat-select>\r\n                              <mat-error *ngIf=\"!paymentTypesForm.get('typStsKey').valid\">\r\n                                Institution Name is <strong>required</strong>\r\n                              </mat-error>\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"cRow\">\r\n                          <div class=\"cCol4\">\r\n                              <ng-select [items]=\"GlAccounts\" required required bindLabel=\"desc\" bindValue=\"accNum\"\r\n                              name=\"glMapping\" placeholder=\"Select GL Account Mapping\" formControlName=\"glAcctNum\">\r\n                            </ng-select>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"modal-footer text-center\">\r\n                        <button type=\"submit\" class=\"btn btn-primary btn-min\">Ok</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <!-- <div class=\"table-responsive\">\r\n            <table class=\"table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n              <tr>\r\n                <th>Expense Type ID</th>\r\n                <th>Expense Type</th>\r\n                <th>GL Account Mappping</th>\r\n                <th>Status</th>\r\n                <th>Action</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n              <tr *ngFor=\"let code of pagedItems\">\r\n                <td>{{code.typId}}</td>\r\n                <td>{{code.typStr}}</td>\r\n                <td>{{findDscForAccountNo(code.glAcctNum)}}</td>\r\n                <td>{{findValueByKey(code.typStsKey)}}</td>\r\n                <td>\r\n                  <a (click)=\"editItem(code)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a (click)=\"deleteItem(code)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                  <a  class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div> -->\r\n\r\n\r\n          <!---- DATA TABLES---->\r\n\r\n          <div class=\"table-responsive\">\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"table\" multiTemplateDataRows matSort>\r\n\r\n              <!-- Payment Type ID Column -->\r\n              <ng-container matColumnDef=\"typId\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Expense Type ID</th>\r\n                <td mat-cell *matCellDef=\"let pymnt\">{{pymnt.typId}}</td>\r\n              </ng-container>\r\n\r\n              <!--Payment Type -->\r\n              <ng-container matColumnDef=\"typStr\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Expense Type</th>\r\n                <td mat-cell *matCellDef=\"let pymnt\">{{pymnt.typStr}}</td>\r\n              </ng-container>\r\n\r\n              <!-- GL Account Mapping Column -->\r\n              <ng-container matColumnDef=\"glAcctNum\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>GL Account Mapping</th>\r\n                <td mat-cell *matCellDef=\"let pymnt\">{{findDscForAccountNo(pymnt.glAcctNum)}}</td>\r\n              </ng-container>\r\n              <!-- Branch Column -->\r\n              <ng-container matColumnDef=\"brnchSeq\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Branch</th>\r\n                <td mat-cell *matCellDef=\"let pymnt\">{{findBranchBySeq(pymnt.brnchSeq)}}</td>\r\n              </ng-container>\r\n              <!-- Status Column -->\r\n              <ng-container matColumnDef=\"typStsKey\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r\n                <td mat-cell *matCellDef=\"let pymnt\">{{findValueByKey(pymnt.typStsKey)}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Action Column -->\r\n              <ng-container matColumnDef=\"action\">\r\n                <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                <td mat-cell *matCellDef=\"let pymnt\">\r\n                  <a (click)=\"editItem(pymnt)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a (click)=\"deleteItem(pymnt)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                  <a class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"thead-light thead-blue\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n\r\n            <mat-paginator [length]=\"datalength\" [pageSizeOptions]=\"[10, 15, 20]\" showFirstLastButtons>\r\n            </mat-paginator>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<script>\r\n  $(document).ready(function () {\r\n    $('[data-toggle=\"tooltip\"]').tooltip();\r\n  });\r\n</script>\r\n<script>\r\n  $(\".searchshow\").click(function () {\r\n    $(\".mysearchbox\").addClass(\"intro\");\r\n  });\r\n  $(\".remove-search\").click(function () {\r\n    $(\".mysearchbox\").removeClass(\"intro\");\r\n  });\r\n\r\n  function myFunction() {\r\n    var input, filter, table, tr, td, i;\r\n    input = document.getElementById(\"myInput\");\r\n    filter = input.value.toUpperCase();\r\n    table = document.getElementById(\"myTable\");\r\n    tr = table.getElementsByTagName(\"tr\");\r\n    for (i = 0; i < tr.length; i++) {\r\n      td = tr[i].getElementsByTagName(\"td\")[1];\r\n      if (td) {\r\n        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {\r\n          tr[i].style.display = \"\";\r\n        } else {\r\n          tr[i].style.display = \"none\";\r\n        }\r\n      }\r\n    }\r\n  }\r\n</script>\r\n<script>\r\n  var index = 1;\r\n  $('ul.moreless li:gt(' + index + ')').hide();\r\n  $('ul.moreless').append('<li class=\"more\">more..</li>');\r\n  $('ul.moreless li.more').click(function () {\r\n    $('ul.moreless li.more').remove();\r\n    $('ul.moreless li:gt(' + index + ')').show();\r\n    $('ul.moreless').append('<li class=\"less\">Less..</li>');\r\n    $('ul.moreless li.less').click(function () {\r\n      $('ul.moreless li.less').remove();\r\n      $('ul.moreless li:gt(' + index + ')').remove();\r\n      $('ul.moreless').append('<li class=\"more\">more..</li>');\r\n    });\r\n  });\r\n</script>"

/***/ }),

/***/ "./src/app/pages/setup/types/expense-types/expense-types.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/setup/types/expense-types/expense-types.component.ts ***!
  \****************************************************************************/
/*! exports provided: ExpenseTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseTypesComponent", function() { return ExpenseTypesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/helpers/MyErrorStateMatcher.helper */ "./src/app/shared/helpers/MyErrorStateMatcher.helper.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _shared_services_paymentTypes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/paymentTypes.service */ "./src/app/shared/services/paymentTypes.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ExpenseTypesComponent = /** @class */ (function () {
    function ExpenseTypesComponent(router, dataService, fb, paymentTypesService, commonService, spinner, toaster) {
        this.router = router;
        this.dataService = dataService;
        this.fb = fb;
        this.paymentTypesService = paymentTypesService;
        this.commonService = commonService;
        this.spinner = spinner;
        this.toaster = toaster;
        this.allBrnches = [];
        this.typeNumber = 2;
        this.matcher = new _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_2__["MyErrorStateMatcher"]();
        this.submitted = false;
        // array of all items to be paged
        this.allItems = [];
        // pager object
        this.pager = {};
        this.showFields = false;
        // paged items
        this.pagedItems = [];
        this.isEdit = false;
        this.allStatuses = [];
        this.GlAccounts = [];
        this.onBranchSelection = false;
        this.datalength = 0;
        this.lastPageIndex = 0;
        this.filterValue = "";
        this.searchVal = "";
        this.isCount = true;
    }
    ExpenseTypesComponent.prototype.applyFilter = function (filterValue) {
        this.filterValue = filterValue;
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.datalength = this.countBeforeFilter;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            return;
        }
        this.getFilteredData(filterValue.trim().toLowerCase());
    };
    ExpenseTypesComponent.prototype.searchValue = function () {
        var _this = this;
        this.filterValue = this.searchVal.trim();
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            this.datalength = 0;
            setTimeout(function () { _this.datalength = _this.countBeforeFilter; }, 200);
            return;
        }
    };
    ExpenseTypesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.displayedColumns = ['typId', 'typStr', 'glAcctNum', 'brnchSeq', 'typStsKey', 'action'];
        this.paymentTypesForm = this.fb.group({
            typId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            typStr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            glAcctNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            typStsKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            typSeq: [''],
            brnchSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.commonService.getValuesByGroupName('\tSTATUS').subscribe(function (d) {
            _this.statusArray = d;
        });
        this.commonService.getGlAccounts().subscribe(function (d) {
            _this.GlAccounts = d;
        });
        this.loadStatuses();
        this.commonService.getBrnchsForUsr().subscribe(function (res) {
            _this.allBrnches = res;
        });
        this.branchForm = this.fb.group({
            branch: ['0'],
        });
        this.loadPayment();
    };
    ExpenseTypesComponent.prototype.onSubmitBranchForm = function () {
        console.log(this.branchForm.value);
    };
    ExpenseTypesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["tap"])(function () { return _this.loadNextPage(); }))
            .subscribe();
    };
    ExpenseTypesComponent.prototype.loadPayment = function () {
        var _this = this;
        this.isCount = true;
        this.lastPageIndex = 0;
        this.allItems = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.allItems);
        this.paginator.pageIndex = 0;
        this.lastPageIndex = 0;
        this.dataSource.paginator = this.paginator;
        this.searchVal = '';
        this.filterValue = '';
        if (this.branchForm.controls['branch'].value == null) {
            this.branchForm.patchValue({ 'branch': 0 });
        }
        this.spinner.show();
        this.paymentTypesService.getAllTypesByCategory(this.typeNumber, this.paginator.pageIndex, 10, "", this.isCount, this.branchForm.controls['branch'].value).subscribe(function (data) {
            _this.allItems = data.typs;
            _this.spinner.hide();
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.allItems);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = data.count;
            _this.dataBeforeFilter = _this.dataSource.data;
            _this.countBeforeFilter = data.count;
            _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
        }, function (error) {
            _this.spinner.hide();
            console.log(error);
        });
    };
    ExpenseTypesComponent.prototype.loadNextPage = function () {
        var _this = this;
        this.isCount = false;
        if (this.paginator.pageIndex < this.lastPageIndex)
            return;
        if (this.dataSource.paginator.length == this.dataSource.data.length)
            return;
        if (((this.paginator.pageIndex + 1) * this.paginator.pageSize) - this.dataSource.data.length > 0) {
            this.spinner.show();
            this.paymentTypesService.getAllTypesByCategory(this.typeNumber, this.paginator.pageIndex, this.paginator.pageSize, this.filterValue, this.isCount, this.branchForm.controls['branch'].value).subscribe(function (data) {
                _this.spinner.hide();
                _this.allItems = data.typs;
                _this.lastPageIndex = _this.lastPageIndex + 1;
                _this.dataSource.data = _this.dataSource.data.concat(data.typs);
                data.count = _this.datalength;
                _this.datalength = 0;
                setTimeout(function () { _this.datalength = data.count; }, 200);
                if (_this.filterValue.length == 0) {
                    _this.dataBeforeFilter = _this.dataSource.data;
                    _this.countBeforeFilter = data.count;
                    _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
                }
            }, function (error) {
                _this.spinner.hide();
                console.log('err', error);
            });
        }
    };
    ExpenseTypesComponent.prototype.getFilteredData = function (filterValue) {
        var _this = this;
        this.isCount = true;
        this.paginator.pageIndex = 0;
        this.spinner.show();
        this.lastPageIndex = 0;
        this.paymentTypesService.getAllTypesByCategory(this.typeNumber, this.paginator.pageIndex, this.paginator.pageSize, filterValue, this.isCount, this.branchForm.controls['branch'].value).subscribe(function (data) {
            _this.allItems = data.typs;
            _this.spinner.hide();
            if (_this.allItems.length <= 0) {
                _this.toaster.info('No Data Found Against This Search', 'Information');
            }
            ;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.allItems);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = data.count;
        }, function (error) {
            _this.spinner.hide();
            console.log('err', error);
        });
    };
    ExpenseTypesComponent.prototype.openTypeModal = function () {
        $('#addprduct').modal('show');
        this.paymentTypesForm.reset();
        this.isEdit = false;
    };
    ExpenseTypesComponent.prototype.findValueByKey = function (key) {
        var status = 'not found';
        this.statusArray.forEach(function (s) {
            if (s.codeKey === key) {
                status = s.codeValue;
            }
        });
        return status;
    };
    ExpenseTypesComponent.prototype.findBranchBySeq = function (key) {
        if (key === null || key === undefined)
            return "Not Assigned";
        if (key == 0)
            return "Global";
        var status = 'not found';
        this.allBrnches.forEach(function (s) {
            if (s.brnchSeq === key) {
                status = s.brnchNm;
            }
        });
        return status;
    };
    ExpenseTypesComponent.prototype.editItem = function (paymentType) {
        $('#addprduct').modal('show');
        this.paymentTypesForm.patchValue(paymentType);
        this.isEdit = true;
    };
    ExpenseTypesComponent.prototype.deleteItem = function (type) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this payment type?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.spinner.show();
                _this.paymentTypesService.deleteType(type.typSeq).subscribe(function () {
                    _this.allItems.splice(_this.allItems.indexOf(type.pdcId), 1);
                    _this.spinner.hide();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Deleted!', 'Payments types has been deleted.', 'success');
                }, function (error) { console.log('There was an error: ', error); _this.spinner.hide(); });
            }
        });
    };
    ExpenseTypesComponent.prototype.onSubmit = function () {
        var _this = this;
        var result = Object.assign({}, this.paymentTypesForm.value);
        result.typCtgryKey = this.typeNumber;
        $('#addprduct').modal('hide');
        if (this.isEdit) {
            this.spinner.show();
            this.paymentTypesService.updateType(result).subscribe(function (res) {
                _this.spinner.hide();
                var itemIndex = _this.allItems.findIndex(function (item) { return item.typId === result.typId; });
                _this.allItems[itemIndex] = result;
                _this.setPage(_this.pager.currentPage);
            }, function (error) {
                _this.spinner.hide();
                _this.toaster.error("Something Went Wrong!");
            });
        }
        else {
            this.spinner.show();
            this.paymentTypesService.addType(result).subscribe(function (res) {
                _this.spinner.hide();
                _this.allItems.push(result);
                _this.setPage(_this.pager.currentPage);
            }, function (error) {
                _this.spinner.hide();
                _this.toaster.error("Something Went Wrong!");
            });
        }
    };
    ExpenseTypesComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.dataService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ExpenseTypesComponent.prototype.loadStatuses = function () {
        var _this = this;
        this.paymentTypesService.getTypeStatus().subscribe(function (d) {
            _this.allStatuses = d;
        });
    };
    ExpenseTypesComponent.prototype.showField = function () {
        this.showFields = true;
    };
    ExpenseTypesComponent.prototype.findDscForAccountNo = function (acc_num) {
        var str = "GL ACCOUNT NUMBER NOT FOUND!";
        this.GlAccounts.forEach(function (acc) {
            if (acc.accNum == acc_num) {
                str = acc.desc;
            }
        });
        return str;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSort"])
    ], ExpenseTypesComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"])
    ], ExpenseTypesComponent.prototype, "paginator", void 0);
    ExpenseTypesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expense-types',
            template: __webpack_require__(/*! ./expense-types.component.html */ "./src/app/pages/setup/types/expense-types/expense-types.component.html"),
            styles: [__webpack_require__(/*! ./expense-types.component.css */ "./src/app/pages/setup/types/expense-types/expense-types.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _shared_services_paymentTypes_service__WEBPACK_IMPORTED_MODULE_5__["PaymentTypesService"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]])
    ], ExpenseTypesComponent);
    return ExpenseTypesComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/types/payment-types/payment-types.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/setup/types/payment-types/payment-types.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mat-cell, .mat-header-cell {\r\n  font-size: 14px;\r\n  }\r\n  \r\n  .mat-cell, .mat-footer-cell {\r\n  font-size: 13px;\r\n  }\r\n  \r\n  table {\r\n  width: 100%;\r\n  }\r\n  \r\n  th.mat-header-cell {\r\n      vertical-align: middle;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/pages/setup/types/payment-types/payment-types.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/setup/types/payment-types/payment-types.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"mysearchbox\" (click)=\"showField()\" *ngIf=\"!showFields\">\r\n                  <h6 class=\"d-inline-block searchshow\" style=\"cursor: pointer;\">Search\r\n                    <i class=\"fa fa-search\"> </i>\r\n                  </h6>\r\n                </div>\r\n                <div class=\"mysearch\" *ngIf=\"showFields\">\r\n                  <form (ngSubmit)=\"applyFilter(searchVal)\" #searchForm=\"ngForm\">\r\n                    <div class=\"col-sm-10\" style=\"float:left;\">\r\n                      <mat-form-field *ngIf=\"showFields\">\r\n                        <input id=\"searchBox\" (keyup)=\"searchValue()\" autofocus matInput name=\"searchValue\"\r\n                          [(ngModel)]=\"searchVal\" placeholder=\"Search\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-2\" style=\"float:right;\">\r\n                      <button class=\"btn btn-primary btn-lg\" type=\"submit\">Search</button>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-5\">\r\n                <form [formGroup]=\"branchForm\" (ngSubmit)=\"onSubmitBranchForm()\">\r\n                  <ng-select  [items]=\"allBrnches\" required  (change)=\"loadPayment($event)\"\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n                </form>\r\n              </div>\r\n              <div class=\"col-sm-1\">\r\n                <button class=\"btn btn-primary btn-sm\" (click)=\"openTypeModal()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n            <div class=\"col-sm-6 addBtn\">\r\n              <div class=\"modal fade\" id=\"addprduct\" role=\"dialog\">\r\n                <div class=\"modal-dialog bigger mymodal\">\r\n\r\n                  <!-- Modal content-->\r\n                  <div class=\"modal-content text-left\">\r\n                    <div class=\"modal-header\">\r\n                      <h5 class=\"modal-title\">Payment Type</h5>\r\n                    </div>\r\n                    <form [formGroup]=\"paymentTypesForm\" (ngSubmit)=\"onSubmit()\">\r\n                      <div class=\"modal-body\"  style=\"overflow:visible;\">\r\n                        <div class=\"cRow\">\r\n                          <div class=\"cCol2\">\r\n                            <mat-form-field>\r\n                              <input type=\"text\" matInput placeholder=\"Id:\" formControlName=\"typId\"\r\n                                [errorStateMatcher]=\"matcher\">\r\n                              <mat-error *ngIf=\"!paymentTypesForm.get('typId').valid\">\r\n                                Id is <strong>required</strong>\r\n                              </mat-error>\r\n                            </mat-form-field>\r\n                          </div>\r\n                          <div class=\"cCol2\">\r\n                            <mat-form-field>\r\n                              <input type=\"text\" matInput placeholder=\"Type:\" formControlName=\"typStr\"\r\n                                [errorStateMatcher]=\"matcher\">\r\n                              <mat-error *ngIf=\"!paymentTypesForm.get('typStr').valid\">\r\n                                Type is <strong>required</strong>\r\n                              </mat-error>\r\n                            </mat-form-field>\r\n                          </div>\r\n                          <div class=\"cCol2\">\r\n                            <!-- <mat-form-field>\r\n                            <input type=\"text\" matInput placeholder=\"GL Account Mappping:\" formControlName=\"glAcctNum\"\r\n                                   [errorStateMatcher]=\"matcher\">\r\n                            <mat-error *ngIf=\"!paymentTypesForm.get('glAcctNum').valid\">\r\n                              Mapping is <strong>required</strong>\r\n                            </mat-error>\r\n                          </mat-form-field> -->\r\n                            <mat-form-field>\r\n                              <mat-select placeholder=\"Select Branch:\" formControlName=\"brnchSeq\" name=\"brnchSeq\"\r\n                                [errorStateMatcher]=\"matcher\">\r\n                                <mat-option [value]=\"0\">Global</mat-option>\r\n                                <mat-option *ngFor=\"let edu of allBrnches\" [value]=\"edu.brnchSeq\">\r\n                                  ({{edu.brnchCd}}) - {{edu.brnchNm}}\r\n                                </mat-option>\r\n                              </mat-select>\r\n                            </mat-form-field>\r\n                          </div>\r\n                          <div class=\"cCol2\">\r\n                            <mat-form-field>\r\n                              <mat-select placeholder=\"Select Status:\" formControlName=\"typStsKey\" name=\"typStsKey\"\r\n                                [errorStateMatcher]=\"matcher\">\r\n                                <mat-option *ngFor=\"let edu of statusArray\" [value]=\"edu.codeKey\">\r\n                                  {{edu.codeValue}}\r\n                                </mat-option>\r\n                              </mat-select>\r\n                              <mat-error *ngIf=\"!paymentTypesForm.get('typStsKey').valid\">\r\n                                Institution Name is <strong>required</strong>\r\n                              </mat-error>\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"cRow\">\r\n                          <div class=\"cCol4\">\r\n                            <ng-select [items]=\"GlAccounts\" required required bindLabel=\"desc\" bindValue=\"accNum\"\r\n                              name=\"glMapping\" placeholder=\"Select GL Account Mapping\" formControlName=\"glAcctNum\">\r\n                            </ng-select>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"modal-footer text-center\">\r\n                        <button type=\"submit\" class=\"btn btn-primary btn-min\">Ok</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <!-- <div class=\"table-responsive\">\r\n            <table class=\"table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n              <tr>\r\n                <th>Payment Type ID</th>\r\n                <th>Payment Type</th>\r\n                <th>GL Account Mappping</th>\r\n                <th>Status</th>\r\n                <th>Action</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n              <tr *ngFor=\"let code of pagedItems\">\r\n                <td>{{code.typId}}</td>\r\n                <td>{{code.typStr}}</td>\r\n                <td>{{findDscForAccountNo(code.glAcctNum)}}</td>\r\n                <td>{{findValueByKey(code.typStsKey)}}</td>\r\n                <td>\r\n                  <a (click)=\"editItem(code)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a (click)=\"deleteItem(code)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                  <a  class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div> -->\r\n\r\n\r\n\r\n          <!---- DATA TABLES---->\r\n\r\n          <div class=\"table-responsive\">\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"table\" multiTemplateDataRows matSort>\r\n\r\n              <!-- Payment Type ID Column -->\r\n              <ng-container matColumnDef=\"typId\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Payment Type ID</th>\r\n                <td mat-cell *matCellDef=\"let pymnt\">{{pymnt.typId}}</td>\r\n              </ng-container>\r\n\r\n              <!--Payment Type -->\r\n              <ng-container matColumnDef=\"typStr\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Payment Type</th>\r\n                <td mat-cell *matCellDef=\"let pymnt\">{{pymnt.typStr}}</td>\r\n              </ng-container>\r\n\r\n              <!-- GL Account Mapping Column -->\r\n              <ng-container matColumnDef=\"glAcctNum\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>GL Account Mapping</th>\r\n                <td mat-cell *matCellDef=\"let pymnt\">{{findDscForAccountNo(pymnt.glAcctNum)}}</td>\r\n              </ng-container>\r\n              <!-- Branch Column -->\r\n              <ng-container matColumnDef=\"brnchSeq\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Branch</th>\r\n                <td mat-cell *matCellDef=\"let pymnt\">{{findBranchBySeq(pymnt.brnchSeq)}}</td>\r\n              </ng-container>\r\n              <!-- Status Column -->\r\n              <ng-container matColumnDef=\"typStsKey\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r\n                <td mat-cell *matCellDef=\"let pymnt\">{{findValueByKey(pymnt.typStsKey)}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Action Column -->\r\n              <ng-container matColumnDef=\"action\">\r\n                <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                <td mat-cell *matCellDef=\"let pymnt\">\r\n                  <a (click)=\"editItem(pymnt)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a (click)=\"deleteItem(pymnt)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                  <a class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"thead-light thead-blue\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n\r\n            <mat-paginator  [length]=\"datalength\" [pageSizeOptions]=\"[10, 15, 20]\" showFirstLastButtons></mat-paginator>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<script>\r\n  $(document).ready(function () {\r\n    $('[data-toggle=\"tooltip\"]').tooltip();\r\n  });\r\n</script>\r\n<script>\r\n  $(\".searchshow\").click(function () {\r\n    $(\".mysearchbox\").addClass(\"intro\");\r\n  });\r\n  $(\".remove-search\").click(function () {\r\n    $(\".mysearchbox\").removeClass(\"intro\");\r\n  });\r\n\r\n  function myFunction() {\r\n    var input, filter, table, tr, td, i;\r\n    input = document.getElementById(\"myInput\");\r\n    filter = input.value.toUpperCase();\r\n    table = document.getElementById(\"myTable\");\r\n    tr = table.getElementsByTagName(\"tr\");\r\n    for (i = 0; i < tr.length; i++) {\r\n      td = tr[i].getElementsByTagName(\"td\")[1];\r\n      if (td) {\r\n        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {\r\n          tr[i].style.display = \"\";\r\n        } else {\r\n          tr[i].style.display = \"none\";\r\n        }\r\n      }\r\n    }\r\n  }\r\n</script>\r\n<script>\r\n  var index = 1;\r\n  $('ul.moreless li:gt(' + index + ')').hide();\r\n  $('ul.moreless').append('<li class=\"more\">more..</li>');\r\n  $('ul.moreless li.more').click(function () {\r\n    $('ul.moreless li.more').remove();\r\n    $('ul.moreless li:gt(' + index + ')').show();\r\n    $('ul.moreless').append('<li class=\"less\">Less..</li>');\r\n    $('ul.moreless li.less').click(function () {\r\n      $('ul.moreless li.less').remove();\r\n      $('ul.moreless li:gt(' + index + ')').remove();\r\n      $('ul.moreless').append('<li class=\"more\">more..</li>');\r\n    });\r\n  });\r\n</script>"

/***/ }),

/***/ "./src/app/pages/setup/types/payment-types/payment-types.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/setup/types/payment-types/payment-types.component.ts ***!
  \****************************************************************************/
/*! exports provided: PaymentTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentTypesComponent", function() { return PaymentTypesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_paymentTypes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/paymentTypes.service */ "./src/app/shared/services/paymentTypes.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/helpers/MyErrorStateMatcher.helper */ "./src/app/shared/helpers/MyErrorStateMatcher.helper.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_12__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var PaymentTypesComponent = /** @class */ (function () {
    function PaymentTypesComponent(router, dataService, fb, paymentTypesService, commonService, spinner, toaster) {
        this.router = router;
        this.dataService = dataService;
        this.fb = fb;
        this.paymentTypesService = paymentTypesService;
        this.commonService = commonService;
        this.spinner = spinner;
        this.toaster = toaster;
        this.typeNumber = 3;
        this.matcher = new _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_5__["MyErrorStateMatcher"]();
        this.submitted = false;
        // array of all items to be paged
        this.allItems = [];
        this.pager = {};
        this.pagedItems = [];
        this.showFields = false;
        this.isEdit = false;
        this.allStatuses = [];
        this.GlAccounts = [];
        this.onBranchSelection = false;
        this.datalength = 0;
        this.lastPageIndex = 0;
        this.filterValue = "";
        this.searchVal = "";
        this.isCount = true;
        this.allBrnches = [];
    }
    PaymentTypesComponent.prototype.applyFilter = function (filterValue) {
        this.filterValue = filterValue;
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.datalength = this.countBeforeFilter;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            return;
        }
        this.getFilteredData(filterValue.trim().toLowerCase());
    };
    PaymentTypesComponent.prototype.searchValue = function () {
        var _this = this;
        this.filterValue = this.searchVal.trim();
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            this.datalength = 0;
            setTimeout(function () { _this.datalength = _this.countBeforeFilter; }, 200);
            return;
        }
    };
    PaymentTypesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.displayedColumns = ['typId', 'typStr', 'glAcctNum', 'brnchSeq', 'typStsKey', 'action'];
        this.paymentTypesForm = this.fb.group({
            typId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            typStr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            glAcctNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            typStsKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            typSeq: [''],
            brnchSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.commonService.getValuesByGroupName('\tSTATUS').subscribe(function (d) {
            _this.statusArray = d;
        });
        this.commonService.getGlAccounts().subscribe(function (d) {
            _this.GlAccounts = d;
        });
        this.loadStatuses();
        this.commonService.getBrnchsForUsr().subscribe(function (res) {
            _this.allBrnches = res;
        });
        this.branchForm = this.fb.group({
            branch: ['0'],
        });
        this.loadPayment();
    };
    PaymentTypesComponent.prototype.onSubmitBranchForm = function () {
        console.log(this.branchForm.value);
    };
    PaymentTypesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function () { return _this.loadNextPage(); }))
            .subscribe();
    };
    PaymentTypesComponent.prototype.loadPayment = function () {
        var _this = this;
        this.isCount = true;
        this.lastPageIndex = 0;
        this.allItems = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.allItems);
        this.paginator.pageIndex = 0;
        this.lastPageIndex = 0;
        this.dataSource.paginator = this.paginator;
        this.searchVal = '';
        this.filterValue = '';
        if (this.branchForm.controls['branch'].value == null) {
            this.branchForm.patchValue({ 'branch': 0 });
        }
        this.spinner.show();
        this.paymentTypesService.getAllTypesByCategory(this.typeNumber, this.paginator.pageIndex, 10, "", this.isCount, this.branchForm.controls['branch'].value).subscribe(function (data) {
            _this.allItems = data.typs;
            _this.spinner.hide();
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.allItems);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = data.count;
            _this.dataBeforeFilter = _this.dataSource.data;
            _this.countBeforeFilter = data.count;
            _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
        }, function (error) {
            _this.spinner.hide();
            console.log(error);
        });
    };
    PaymentTypesComponent.prototype.loadNextPage = function () {
        var _this = this;
        this.isCount = false;
        if (this.paginator.pageIndex < this.lastPageIndex)
            return;
        if (this.dataSource.paginator.length == this.dataSource.data.length)
            return;
        if (((this.paginator.pageIndex + 1) * this.paginator.pageSize) - this.dataSource.data.length > 0) {
            this.spinner.show();
            this.paymentTypesService.getAllTypesByCategory(this.typeNumber, this.paginator.pageIndex, this.paginator.pageSize, this.filterValue, this.isCount, this.branchForm.controls['branch'].value).subscribe(function (data) {
                _this.spinner.hide();
                _this.allItems = data.typs;
                _this.lastPageIndex = _this.lastPageIndex + 1;
                _this.dataSource.data = _this.dataSource.data.concat(data.typs);
                data.count = _this.datalength;
                _this.datalength = 0;
                setTimeout(function () { _this.datalength = data.count; }, 200);
                if (_this.filterValue.length == 0) {
                    _this.dataBeforeFilter = _this.dataSource.data;
                    _this.countBeforeFilter = data.count;
                    _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
                }
            }, function (error) {
                _this.spinner.hide();
                console.log('err', error);
            });
        }
    };
    PaymentTypesComponent.prototype.getFilteredData = function (filterValue) {
        var _this = this;
        this.isCount = true;
        this.paginator.pageIndex = 0;
        this.lastPageIndex = 0;
        this.spinner.show();
        this.paymentTypesService.getAllTypesByCategory(this.typeNumber, this.paginator.pageIndex, this.paginator.pageSize, filterValue, this.isCount, this.branchForm.controls['branch'].value).subscribe(function (data) {
            _this.allItems = data.typs;
            _this.spinner.hide();
            if (_this.allItems.length <= 0) {
                _this.toaster.info('No Data Found Against This Search', 'Information');
            }
            ;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.allItems);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = data.count;
        }, function (error) {
            _this.spinner.hide();
            console.log('err', error);
        });
    };
    PaymentTypesComponent.prototype.openTypeModal = function () {
        $('#addprduct').modal('show');
        this.paymentTypesForm.reset();
        this.isEdit = false;
    };
    PaymentTypesComponent.prototype.findValueByKey = function (key) {
        var status = 'not found';
        this.statusArray.forEach(function (s) {
            if (s.codeKey === key) {
                status = s.codeValue;
            }
        });
        return status;
    };
    PaymentTypesComponent.prototype.editItem = function (paymentType) {
        $('#addprduct').modal('show');
        this.paymentTypesForm.patchValue(paymentType);
        this.isEdit = true;
    };
    PaymentTypesComponent.prototype.deleteItem = function (type) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this payment type?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.paymentTypesService.deleteType(type.typSeq).subscribe(function () {
                    _this.allItems.splice(_this.allItems.indexOf(type.pdcId), 1);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Deleted!', 'Payments types has been deleted.', 'success');
                }, function (error) { return console.log('There was an error: ', error); });
            }
        });
    };
    PaymentTypesComponent.prototype.onSubmit = function () {
        var result = Object.assign({}, this.paymentTypesForm.value);
        result.typCtgryKey = this.typeNumber;
        $('#addprduct').modal('hide');
        if (this.isEdit) {
            this.paymentTypesService.updateType(result).subscribe();
            var itemIndex = this.allItems.findIndex(function (item) { return item.typId === result.typId; });
            this.allItems[itemIndex] = result;
            this.setPage(this.pager.currentPage);
        }
        else {
            this.paymentTypesService.addType(result).subscribe();
            this.allItems.push(result);
            this.setPage(this.pager.currentPage);
        }
    };
    PaymentTypesComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.dataService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    PaymentTypesComponent.prototype.loadStatuses = function () {
        var _this = this;
        this.paymentTypesService.getTypeStatus().subscribe(function (d) {
            _this.allStatuses = d;
        });
    };
    PaymentTypesComponent.prototype.showField = function () {
        this.showFields = true;
    };
    PaymentTypesComponent.prototype.findDscForAccountNo = function (acc_num) {
        var str = "GL ACCOUNT NUMBER NOT FOUND!";
        this.GlAccounts.forEach(function (acc) {
            if (acc.accNum == acc_num) {
                str = acc.desc;
            }
        });
        return str;
    };
    PaymentTypesComponent.prototype.findBranchBySeq = function (key) {
        if (key == null || key == undefined)
            return "Not Assigned";
        if (key == 0)
            return "Global";
        var status = 'not found';
        this.allBrnches.forEach(function (s) {
            if (s.brnchSeq === key) {
                status = s.brnchNm;
            }
        });
        return status;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSort"])
    ], PaymentTypesComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"])
    ], PaymentTypesComponent.prototype, "paginator", void 0);
    PaymentTypesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-types',
            template: __webpack_require__(/*! ./payment-types.component.html */ "./src/app/pages/setup/types/payment-types/payment-types.component.html"),
            styles: [__webpack_require__(/*! ./payment-types.component.css */ "./src/app/pages/setup/types/payment-types/payment-types.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_services_paymentTypes_service__WEBPACK_IMPORTED_MODULE_3__["PaymentTypesService"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"]])
    ], PaymentTypesComponent);
    return PaymentTypesComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/types/recovery-types/recovery-types.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/setup/types/recovery-types/recovery-types.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mat-cell, .mat-header-cell {\r\n  font-size: 14px;\r\n  }\r\n  \r\n  .mat-cell, .mat-footer-cell {\r\n  font-size: 13px;\r\n  }\r\n  \r\n  table {\r\n  width: 100%;\r\n  }\r\n  \r\n  th.mat-header-cell {\r\n      vertical-align: middle;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/pages/setup/types/recovery-types/recovery-types.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/setup/types/recovery-types/recovery-types.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"mysearchbox\" (click)=\"showField()\" *ngIf=\"!showFields\">\r\n                  <h6 class=\"d-inline-block searchshow\" style=\"cursor: pointer;\">Search\r\n                    <i class=\"fa fa-search\"> </i>\r\n                  </h6>\r\n                </div>\r\n                <div class=\"mysearch\" *ngIf=\"showFields\">\r\n                  <form (ngSubmit)=\"applyFilter(searchVal)\" #searchForm=\"ngForm\">\r\n                    <div class=\"col-sm-10\" style=\"float:left;\">\r\n                      <mat-form-field *ngIf=\"showFields\">\r\n                        <input id=\"searchBox\" (keyup)=\"searchValue()\" autofocus matInput name=\"searchValue\"\r\n                          [(ngModel)]=\"searchVal\" placeholder=\"Search\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-2\" style=\"float:right;\">\r\n                      <button class=\"btn btn-primary btn-lg\" type=\"submit\">Search</button>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-5\">\r\n                <form [formGroup]=\"branchForm\" (ngSubmit)=\"onSubmitBranchForm()\">\r\n                  <ng-select  [items]=\"allBrnches\" required  (change)=\"loadPayment($event)\"\r\n                    bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                    formControlName=\"branch\">\r\n                  </ng-select>\r\n                </form>\r\n              </div>\r\n              <div class=\"col-sm-1\">\r\n                <button class=\"btn btn-primary btn-sm\" (click)=\"openTypeModal()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n            <div class=\"col-sm-6 addBtn\">\r\n              <div class=\"modal fade\" id=\"addprduct\" role=\"dialog\">\r\n                <div class=\"modal-dialog bigger mymodal\">\r\n\r\n                  <!-- Modal content-->\r\n                  <div class=\"modal-content text-left\">\r\n                    <div class=\"modal-header\">\r\n                      <h5 class=\"modal-title\">Recovery Type</h5>\r\n                    </div>\r\n                    <form [formGroup]=\"paymentTypesForm\" (ngSubmit)=\"onSubmit()\">\r\n                      <div class=\"modal-body\"  style=\"overflow:visible;\">\r\n                        <div class=\"cRow\">\r\n                          <div class=\"cCol2\">\r\n                            <mat-form-field>\r\n                              <input type=\"text\" matInput placeholder=\"Id:\" formControlName=\"typId\"\r\n                                [errorStateMatcher]=\"matcher\">\r\n                              <mat-error *ngIf=\"!paymentTypesForm.get('typId').valid\">\r\n                                Id is <strong>required</strong>\r\n                              </mat-error>\r\n                            </mat-form-field>\r\n                          </div>\r\n                          <div class=\"cCol2\">\r\n                            <mat-form-field>\r\n                              <input type=\"text\" matInput placeholder=\"Type:\" formControlName=\"typStr\"\r\n                                [errorStateMatcher]=\"matcher\">\r\n                              <mat-error *ngIf=\"!paymentTypesForm.get('typStr').valid\">\r\n                                Type is <strong>required</strong>\r\n                              </mat-error>\r\n                            </mat-form-field>\r\n                          </div>\r\n                          <div class=\"cCol2\">\r\n                            <!-- <mat-form-field>\r\n                              <input type=\"text\" matInput placeholder=\"GL Account Mappping:\" formControlName=\"glAcctNum\"\r\n                                     [errorStateMatcher]=\"matcher\">\r\n                              <mat-error *ngIf=\"!paymentTypesForm.get('glAcctNum').valid\">\r\n                                Mapping is <strong>required</strong>\r\n                              </mat-error>\r\n                            </mat-form-field> -->\r\n                            <mat-form-field>\r\n                                <mat-select placeholder=\"Select Branch:\" formControlName=\"brnchSeq\" name=\"brnchSeq\"\r\n                                  [errorStateMatcher]=\"matcher\">\r\n                                  <mat-option [value]=\"0\">Global</mat-option>\r\n                                  <mat-option *ngFor=\"let edu of allBrnches\" [value]=\"edu.brnchSeq\">\r\n                                    ({{edu.brnchCd}}) - {{edu.brnchNm}}\r\n                                  </mat-option>\r\n                                </mat-select>\r\n                              </mat-form-field>\r\n                          </div>\r\n                          <div class=\"cCol2\">\r\n                            <mat-form-field>\r\n                              <mat-select placeholder=\"Select Status:\" formControlName=\"typStsKey\" name=\"typStsKey\"\r\n                                [errorStateMatcher]=\"matcher\">\r\n                                <mat-option *ngFor=\"let edu of statusArray\" [value]=\"edu.codeKey\">\r\n                                  {{edu.codeValue}}\r\n                                </mat-option>\r\n                              </mat-select>\r\n                              <mat-error *ngIf=\"!paymentTypesForm.get('typStsKey').valid\">\r\n                                Institution Name is <strong>required</strong>\r\n                              </mat-error>\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"cRow\">\r\n                          <div class=\"cCol4\">\r\n                              <ng-select [items]=\"GlAccounts\" required required bindLabel=\"desc\" bindValue=\"accNum\"\r\n                                name=\"glMapping\" placeholder=\"Select GL Account Mapping\" formControlName=\"glAcctNum\">\r\n                              </ng-select>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"modal-footer text-center\">\r\n                        <button type=\"submit\" class=\"btn btn-primary btn-min\">Ok</button>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <!-- <div class=\"table-responsive\">\r\n            <table class=\"table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n              <tr>\r\n                <th>Recovery Type ID</th>\r\n                <th>Recovery Type</th>\r\n                <th>GL Account Mappping</th>\r\n                <th>Status</th>\r\n                <th>Action</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n              <tr *ngFor=\"let code of pagedItems\">\r\n                <td>{{code.typId}}</td>\r\n                <td>{{code.typStr}}</td>\r\n                <td>{{findDscForAccountNo(code.glAcctNum)}}</td>\r\n                <td>{{findValueByKey(code.typStsKey)}}</td>\r\n                <td>\r\n                  <a (click)=\"editItem(code)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a (click)=\"deleteItem(code)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                  <a  class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div> -->\r\n\r\n          <!---- DATA TABLES---->\r\n\r\n          <div class=\"table-responsive\">\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"table\" multiTemplateDataRows matSort>\r\n\r\n              <!-- Recovery Type ID Column -->\r\n              <ng-container matColumnDef=\"typId\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Recovery Type ID</th>\r\n                <td mat-cell *matCellDef=\"let recv\">{{recv.typId}}</td>\r\n              </ng-container>\r\n\r\n              <!--Payment Type -->\r\n              <ng-container matColumnDef=\"typStr\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Expense Type</th>\r\n                <td mat-cell *matCellDef=\"let recv\">{{recv.typStr}}</td>\r\n              </ng-container>\r\n\r\n              <!-- GL Account Mapping Column -->\r\n              <ng-container matColumnDef=\"glAcctNum\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>GL Account Mapping</th>\r\n                <td mat-cell *matCellDef=\"let recv\">{{findDscForAccountNo(recv.glAcctNum)}}</td>\r\n              </ng-container>\r\n              <!-- Branch Column -->\r\n              <ng-container matColumnDef=\"brnchSeq\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Branch</th>\r\n                <td mat-cell *matCellDef=\"let pymnt\">{{findBranchBySeq(pymnt.brnchSeq)}}</td>\r\n              </ng-container>\r\n              <!-- Status Column -->\r\n              <ng-container matColumnDef=\"typStsKey\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r\n                <td mat-cell *matCellDef=\"let recv\">{{findValueByKey(recv.typStsKey)}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Action Column -->\r\n              <ng-container matColumnDef=\"action\">\r\n                <th mat-header-cell *matHeaderCellDef>Action</th>\r\n                <td mat-cell *matCellDef=\"let recv\">\r\n                  <a (click)=\"editItem(recv)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a (click)=\"deleteItem(recv)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                  <a class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"thead-light thead-blue\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n\r\n            <mat-paginator [length]=\"datalength\" [pageSizeOptions]=\"[10, 15, 20]\" showFirstLastButtons>\r\n            </mat-paginator>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<script>\r\n  $(document).ready(function () {\r\n    $('[data-toggle=\"tooltip\"]').tooltip();\r\n  });\r\n</script>\r\n<script>\r\n  $(\".searchshow\").click(function () {\r\n    $(\".mysearchbox\").addClass(\"intro\");\r\n  });\r\n  $(\".remove-search\").click(function () {\r\n    $(\".mysearchbox\").removeClass(\"intro\");\r\n  });\r\n\r\n  function myFunction() {\r\n    var input, filter, table, tr, td, i;\r\n    input = document.getElementById(\"myInput\");\r\n    filter = input.value.toUpperCase();\r\n    table = document.getElementById(\"myTable\");\r\n    tr = table.getElementsByTagName(\"tr\");\r\n    for (i = 0; i < tr.length; i++) {\r\n      td = tr[i].getElementsByTagName(\"td\")[1];\r\n      if (td) {\r\n        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {\r\n          tr[i].style.display = \"\";\r\n        } else {\r\n          tr[i].style.display = \"none\";\r\n        }\r\n      }\r\n    }\r\n  }\r\n</script>\r\n<script>\r\n  var index = 1;\r\n  $('ul.moreless li:gt(' + index + ')').hide();\r\n  $('ul.moreless').append('<li class=\"more\">more..</li>');\r\n  $('ul.moreless li.more').click(function () {\r\n    $('ul.moreless li.more').remove();\r\n    $('ul.moreless li:gt(' + index + ')').show();\r\n    $('ul.moreless').append('<li class=\"less\">Less..</li>');\r\n    $('ul.moreless li.less').click(function () {\r\n      $('ul.moreless li.less').remove();\r\n      $('ul.moreless li:gt(' + index + ')').remove();\r\n      $('ul.moreless').append('<li class=\"more\">more..</li>');\r\n    });\r\n  });\r\n</script>"

/***/ }),

/***/ "./src/app/pages/setup/types/recovery-types/recovery-types.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/setup/types/recovery-types/recovery-types.component.ts ***!
  \******************************************************************************/
/*! exports provided: RecoveryTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoveryTypesComponent", function() { return RecoveryTypesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/helpers/MyErrorStateMatcher.helper */ "./src/app/shared/helpers/MyErrorStateMatcher.helper.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _shared_services_paymentTypes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/paymentTypes.service */ "./src/app/shared/services/paymentTypes.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var RecoveryTypesComponent = /** @class */ (function () {
    function RecoveryTypesComponent(router, dataService, fb, paymentTypesService, commonService, spinner, toaster) {
        this.router = router;
        this.dataService = dataService;
        this.fb = fb;
        this.paymentTypesService = paymentTypesService;
        this.commonService = commonService;
        this.spinner = spinner;
        this.toaster = toaster;
        this.typeNumber = 4;
        this.matcher = new _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_2__["MyErrorStateMatcher"]();
        this.submitted = false;
        // array of all items to be paged
        this.allItems = [];
        // pager object
        this.pager = {};
        // paged items
        this.pagedItems = [];
        this.isEdit = false;
        this.showFields = false;
        this.allStatuses = [];
        this.GlAccounts = [];
        this.onBranchSelection = false;
        this.datalength = 0;
        this.lastPageIndex = 0;
        this.filterValue = "";
        this.searchVal = "";
        this.isCount = true;
        this.allBrnches = [];
    }
    RecoveryTypesComponent.prototype.applyFilter = function (filterValue) {
        this.filterValue = filterValue;
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.datalength = this.countBeforeFilter;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            return;
        }
        this.getFilteredData(filterValue.trim().toLowerCase());
    };
    RecoveryTypesComponent.prototype.searchValue = function () {
        var _this = this;
        this.filterValue = this.searchVal.trim();
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            this.datalength = 0;
            setTimeout(function () { _this.datalength = _this.countBeforeFilter; }, 200);
            return;
        }
    };
    RecoveryTypesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.displayedColumns = ['typId', 'typStr', 'glAcctNum', 'brnchSeq', 'typStsKey', 'action'];
        this.paymentTypesForm = this.fb.group({
            typId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            typStr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            glAcctNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            typStsKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            typSeq: [''],
            brnchSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.commonService.getValuesByGroupName('\tSTATUS').subscribe(function (d) {
            _this.statusArray = d;
        });
        this.commonService.getGlAccounts().subscribe(function (d) {
            _this.GlAccounts = d;
        });
        this.loadStatuses();
        this.commonService.getBrnchsForUsr().subscribe(function (res) {
            _this.allBrnches = res;
        });
        this.branchForm = this.fb.group({
            branch: ['0'],
        });
        this.loadPayment();
    };
    RecoveryTypesComponent.prototype.onSubmitBranchForm = function () {
        console.log(this.branchForm.value);
    };
    RecoveryTypesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["tap"])(function () { return _this.loadNextPage(); }))
            .subscribe();
    };
    RecoveryTypesComponent.prototype.loadPayment = function () {
        var _this = this;
        this.isCount = true;
        this.lastPageIndex = 0;
        this.allItems = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](this.allItems);
        this.paginator.pageIndex = 0;
        this.lastPageIndex = 0;
        this.dataSource.paginator = this.paginator;
        this.searchVal = '';
        this.filterValue = '';
        if (this.branchForm.controls['branch'].value == null) {
            this.branchForm.patchValue({ 'branch': 0 });
        }
        this.spinner.show();
        this.paymentTypesService.getAllTypesByCategory(this.typeNumber, this.paginator.pageIndex, 10, "", this.isCount, this.branchForm.controls['branch'].value).subscribe(function (data) {
            _this.allItems = data.typs;
            _this.spinner.hide();
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.allItems);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = data.count;
            _this.dataBeforeFilter = _this.dataSource.data;
            _this.countBeforeFilter = data.count;
            _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
        }, function (error) {
            _this.spinner.hide();
            console.log(error);
        });
    };
    RecoveryTypesComponent.prototype.loadNextPage = function () {
        var _this = this;
        this.isCount = false;
        if (this.paginator.pageIndex < this.lastPageIndex)
            return;
        if (this.dataSource.paginator.length == this.dataSource.data.length)
            return;
        if (((this.paginator.pageIndex + 1) * this.paginator.pageSize) - this.dataSource.data.length > 0) {
            this.spinner.show();
            this.paymentTypesService.getAllTypesByCategory(this.typeNumber, this.paginator.pageIndex, this.paginator.pageSize, this.filterValue, this.isCount, this.branchForm.controls['branch'].value).subscribe(function (data) {
                _this.spinner.hide();
                _this.allItems = data.typs;
                _this.lastPageIndex = _this.lastPageIndex + 1;
                _this.dataSource.data = _this.dataSource.data.concat(data.typs);
                data.count = _this.datalength;
                _this.datalength = 0;
                setTimeout(function () { _this.datalength = data.count; }, 200);
                if (_this.filterValue.length == 0) {
                    _this.dataBeforeFilter = _this.dataSource.data;
                    _this.countBeforeFilter = data.count;
                    _this.lastPageIndexBeforeFilter = _this.lastPageIndex;
                }
            }, function (error) {
                _this.spinner.hide();
                console.log('err', error);
            });
        }
    };
    RecoveryTypesComponent.prototype.getFilteredData = function (filterValue) {
        var _this = this;
        this.isCount = true;
        this.paginator.pageIndex = 0;
        this.lastPageIndex = 0;
        this.spinner.show();
        this.paymentTypesService.getAllTypesByCategory(this.typeNumber, this.paginator.pageIndex, this.paginator.pageSize, filterValue, this.isCount, this.branchForm.controls['branch'].value).subscribe(function (data) {
            _this.allItems = data.typs;
            _this.spinner.hide();
            if (_this.allItems.length <= 0) {
                _this.toaster.info('No Data Found Against This Search', 'Information');
            }
            ;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.allItems);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = data.count;
        }, function (error) {
            _this.spinner.hide();
            console.log('err', error);
        });
    };
    RecoveryTypesComponent.prototype.openTypeModal = function () {
        $('#addprduct').modal('show');
        this.paymentTypesForm.reset();
        this.isEdit = false;
    };
    RecoveryTypesComponent.prototype.findValueByKey = function (key) {
        var status = 'not found';
        this.statusArray.forEach(function (s) {
            if (s.codeKey === key) {
                status = s.codeValue;
            }
        });
        return status;
    };
    RecoveryTypesComponent.prototype.editItem = function (paymentType) {
        $('#addprduct').modal('show');
        this.paymentTypesForm.patchValue(paymentType);
        this.isEdit = true;
    };
    RecoveryTypesComponent.prototype.deleteItem = function (type) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this payment type?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.paymentTypesService.deleteType(type.typSeq).subscribe(function () {
                    _this.allItems.splice(_this.allItems.indexOf(type.pdcId), 1);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()('Deleted!', 'Payments types has been deleted.', 'success');
                }, function (error) { return console.log('There was an error: ', error); });
            }
        });
    };
    RecoveryTypesComponent.prototype.onSubmit = function () {
        var result = Object.assign({}, this.paymentTypesForm.value);
        result.typCtgryKey = this.typeNumber;
        $('#addprduct').modal('hide');
        if (this.isEdit) {
            this.paymentTypesService.updateType(result).subscribe();
            var itemIndex = this.allItems.findIndex(function (item) { return item.typId === result.typId; });
            this.allItems[itemIndex] = result;
            this.setPage(this.pager.currentPage);
        }
        else {
            this.paymentTypesService.addType(result).subscribe();
            this.allItems.push(result);
            this.setPage(this.pager.currentPage);
        }
    };
    RecoveryTypesComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.dataService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    RecoveryTypesComponent.prototype.loadStatuses = function () {
        var _this = this;
        this.paymentTypesService.getTypeStatus().subscribe(function (d) {
            _this.allStatuses = d;
        });
    };
    RecoveryTypesComponent.prototype.showField = function () {
        this.showFields = true;
    };
    RecoveryTypesComponent.prototype.findDscForAccountNo = function (acc_num) {
        var str = "GL ACCOUNT NUMBER NOT FOUND!";
        this.GlAccounts.forEach(function (acc) {
            if (acc.accNum == acc_num) {
                str = acc.desc;
            }
        });
        return str;
    };
    RecoveryTypesComponent.prototype.findBranchBySeq = function (key) {
        if (key == null || key == undefined)
            return "Not Assigned";
        if (key == 0)
            return "Global";
        var status = 'not found';
        this.allBrnches.forEach(function (s) {
            if (s.brnchSeq === key) {
                status = s.brnchNm;
            }
        });
        return status;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSort"])
    ], RecoveryTypesComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"])
    ], RecoveryTypesComponent.prototype, "paginator", void 0);
    RecoveryTypesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recovery-types',
            template: __webpack_require__(/*! ./recovery-types.component.html */ "./src/app/pages/setup/types/recovery-types/recovery-types.component.html"),
            styles: [__webpack_require__(/*! ./recovery-types.component.css */ "./src/app/pages/setup/types/recovery-types/recovery-types.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _shared_services_paymentTypes_service__WEBPACK_IMPORTED_MODULE_5__["PaymentTypesService"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"]])
    ], RecoveryTypesComponent);
    return RecoveryTypesComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/user-managment/user-managment.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/setup/user-managment/user-managment.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-accordion{\r\n    margin: 2px;\r\n}\r\nmat-accordion ,ul {\r\n    list-style-type: none;\r\n  }\r\n.pointer {\r\n  cursor: pointer;\r\n}\r\n.activeName{\r\n  background-color: #c0dee7;\r\n}\r\n.redshadow {\r\n  box-shadow: 0 0 5px rgb(255, 255, 255);\r\n  padding: 3px 0px 3px 3px;\r\n  margin: 5px 1px 3px 0px;\r\n  border: 1px solid rgb(223, 41, 41);\r\n}\r\n.greenshadow {\r\n  box-shadow: 0 0 5px rgb(255, 255, 255);\r\n  padding: 3px 0px 3px 3px;\r\n  margin: 5px 1px 3px 0px;\r\n  border: 1px solid rgb(68, 161, 84);\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/setup/user-managment/user-managment.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/setup/user-managment/user-managment.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <h6 class=\"d-inline-block searchshow\">Rights Assignment</h6>\r\n            </div>\r\n\r\n            <!----------   User Managment Modal Start            ------>\r\n\r\n            <div class=\"modal fade\" id=\"userManagmentmodal\" role=\"dialog\">\r\n              <div class=\"modal-dialog mymodal\">\r\n\r\n                <!-- Modal content-->\r\n                <form (ngSubmit)=\"onSubmitUserManagmentForm()\" [formGroup]=\"userManagForm\">\r\n                  <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                      <h5 class=\"modal-title\">User Managment</h5>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                      <div class=\"cRow\">\r\n\r\n                        <div class=\"cCol4\">\r\n                          <mat-form-field>\r\n                            <input type=\"text\" matInput placeholder=\"User Name:\" formControlName=\"usrRolNm\">\r\n                          </mat-form-field>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"modal-footer text-center\">\r\n                      <button type=\"submit\" class=\"btn btn-primary btn-min\">Ok</button>\r\n                      <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n\r\n            <!--------------------------- Modal End ------------------------------------>\r\n\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-3\">\r\n              <ul class=\"nav nav-tabs borrowerTabs fulltab\" id=\"borrowerTabs\" role=\"tablist\">\r\n                <li class=\"nav-item\"> <a class=\"nav-link active\" id=\"rolls-tab\" data-toggle=\"tab\" href=\"#rolls\"\r\n                    role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Roles</a> </li>\r\n              </ul>\r\n              <div class=\"tab-content borrowerTabsContent mb-md-2\" id=\"rullsTabsContent\">\r\n                <div class=\"tab-pane fade active show\" id=\"rolls\" role=\"tabpanel\" aria-labelledby=\"rolls-tab\">\r\n                  <div class=\"addBtn mb-1\">\r\n                    <button class=\"btn btn-primary btn-sm\" (click)=\"onAddUser()\"><i class=\"fa fa-plus\"></i></button>\r\n                  </div>\r\n                  <div class=\"mnh-130\">\r\n                    <div class=\"table-responsive bdotable\">\r\n                      <table class=\"table last-left mt-0 mb-0\">\r\n                        <tbody>\r\n                          <tr *ngFor=\"let r of roles; let i=index;\">\r\n                            <td class=\"pointer\" [class.activeName]=\"r.usrRolNm === selectedRole\" (click)=\"userClick(r, $event)\">\r\n                              {{r.usrRolNm | uppercase}}</td>\r\n                            <td [class.activeName]=\"r.usrRolNm === selectedRole\" style=\"text-align: right\">\r\n                              <a data-toggle=\"tooltip\" title=\"Edit Name\" (click)=\"onEditUser(r)\" class=\"iconBtn\"><i\r\n                                  class=\"fa fa-pencil\"></i></a></td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-9\">\r\n              <div class=\"row pt-3\">\r\n                <div class=\"col-sm-6\">\r\n                  <h6 class=\"colorBlack small \"><b>{{selectedRole | uppercase}}</b></h6>\r\n                </div>\r\n              </div>\r\n              <mat-accordion *ngFor=\"let mod of obj\">\r\n                <mat-expansion-panel>\r\n                  <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                      {{mod.mod.modNm}}\r\n                    </mat-panel-title>\r\n                  </mat-expansion-panel-header>\r\n\r\n                  <!-- <mat-selection-list #shoes (selectionChange)='filterByAppStatus(shoes,$event)'>\r\n                    <mat-list-option *ngFor=\"let sub of mod.subMods\" [value]=\"sub.sbModSeq\">\r\n                      {{sub.sbModNm}}\r\n                    </mat-list-option>\r\n                  </mat-selection-list> -->\r\n\r\n                  <mat-selection-list #list>\r\n                    <mat-list-option *ngFor=\"let tta of mod.subMods\" [selected]=\"tta.checked\"\r\n                      (click)=\"onAreaListControlChanged(list,tta)\" [value]=\"tta\">\r\n                      {{tta.sbModNm}}\r\n                    </mat-list-option>\r\n                  </mat-selection-list>\r\n\r\n\r\n                </mat-expansion-panel>\r\n              </mat-accordion>\r\n\r\n              <!-- <mat-accordion>\r\n                <mat-expansion-panel>\r\n                  <mat-expansion-panel-header>\r\n                    <mat-panel-title>\r\n                      Personal data\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                      Type your name and age\r\n                    </mat-panel-description>\r\n                  </mat-expansion-panel-header>\r\n\r\n                  <ul>\r\n                    <li>\r\n                      <mat-checkbox> </mat-checkbox>\r\n                    </li>\r\n                    <li></li>\r\n                  </ul>\r\n\r\n                </mat-expansion-panel>\r\n              </mat-accordion> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"text-left mt-2 pb-3\">\r\n            <!-- <button type=\"button\" class=\"btn btn-primary btn-min\">Save</button>\r\n            <button type=\"button\" class=\"btn btn-primary btn-min ml-2\">Cancel</button> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/setup/user-managment/user-managment.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/setup/user-managment/user-managment.component.ts ***!
  \************************************************************************/
/*! exports provided: UserManagmentComponent, AppAuthDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagmentComponent", function() { return UserManagmentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAuthDto", function() { return AppAuthDto; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_user_managementservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/user-managementservice */ "./src/app/shared/services/user-managementservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserManagmentComponent = /** @class */ (function () {
    function UserManagmentComponent(userService, toaster, spinner, fb) {
        this.userService = userService;
        this.toaster = toaster;
        this.spinner = spinner;
        this.fb = fb;
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
        this.selectedRole = "";
        this.selectedOptions = [];
    }
    UserManagmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userManagForm = this.fb.group({
            usrRolNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            usrRolSeq: ['']
        });
        this.userService.getRoles().subscribe(function (p) {
            _this.roles = p;
        }, function (error) {
        });
        this.userService.getMods().subscribe(function (d) {
            _this.mods = d;
            console.log(d);
        }, function (error) {
        });
    };
    UserManagmentComponent.prototype.userClick = function (role) {
        var _this = this;
        this.role = role;
        this.selectedRole = role.usrRolNm;
        console.log(role);
        this.spinner.show();
        this.userService.getAuth(role.usrRolSeq).subscribe(function (p) {
            _this.spinner.hide();
            _this.auth = p;
            _this.obj = JSON.parse(JSON.stringify(_this.mods));
            _this.obj.forEach(function (ele) {
                ele.subMods.forEach(function (sub) {
                    _this.auth.forEach(function (e) {
                        if (e.sbModSeq == sub.sbModSeq) {
                            sub.checked = true;
                        }
                    });
                });
            });
            console.log(_this.obj);
            console.log(p);
        }, function (error) {
            _this.spinner.hide();
        });
    };
    UserManagmentComponent.prototype.onAreaListControlChanged = function (list, tta) {
        var _this = this;
        this.selectedOptions = list.selectedOptions.selected.map(function (item) { return item.value; });
        console.log(this.selectedOptions);
        console.log(list);
        console.log(tta);
        var v = new AppAuthDto();
        v.aftrClsng = true;
        v.sbModSeq = tta.sbModSeq;
        v.usrRolSeq = this.role.usrRolSeq;
        if (this.selectedOptions.includes(tta)) {
            console.log("checked");
            v.checked = true;
        }
        else {
            console.log("unchecked");
            v.checked = false;
        }
        this.spinner.show();
        this.userService.updateAppAuth(v).subscribe(function (p) {
            _this.spinner.hide();
            _this.toaster.success("Updated");
            console.log(p);
        }, function (error) {
            _this.spinner.hide();
        });
    };
    UserManagmentComponent.prototype.onAddUser = function () {
        $('#userManagmentmodal').modal('show');
        this.userManagForm.reset();
    };
    UserManagmentComponent.prototype.onSubmitUserManagmentForm = function () {
        console.log(this.userManagForm.value);
        this.roles.push(this.userManagForm.value);
        $('#userManagmentmodal').modal('hide');
        this.userManagForm.reset();
    };
    UserManagmentComponent.prototype.onEditUser = function (r) {
        $('#userManagmentmodal').modal('show');
        this.userManagForm = this.fb.group({
            usrRolNm: [r.usrRolNm],
            usrRolSeq: [r.usrRolSeq]
        });
    };
    UserManagmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-managment',
            template: __webpack_require__(/*! ./user-managment.component.html */ "./src/app/pages/setup/user-managment/user-managment.component.html"),
            styles: [__webpack_require__(/*! ./user-managment.component.css */ "./src/app/pages/setup/user-managment/user-managment.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_user_managementservice__WEBPACK_IMPORTED_MODULE_4__["UserManagementService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], UserManagmentComponent);
    return UserManagmentComponent;
}());

var AppAuthDto = /** @class */ (function () {
    function AppAuthDto() {
        this.delPrmFlg = true;
        this.readPrmFlg = true;
        this.wrtPrmFlg = true;
    }
    return AppAuthDto;
}());



/***/ }),

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

/***/ "./src/app/shared/mocks/rules.mocks.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/mocks/rules.mocks.ts ***!
  \*********************************************/
/*! exports provided: RULES, RULES_CATEGORIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RULES", function() { return RULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RULES_CATEGORIES", function() { return RULES_CATEGORIES; });
var RULES = [{ id: 1238, name: 'Rule Name 1',
        category: 'Product', condition: 'Client gender is = M and NDI > Requested Amount / 12', status: 'Pending', comments: '' },
    { id: 123, name: 'Rule Name 1',
        category: 'Product', condition: 'Client gender is = M and NDI > Requested Amount / 12', status: 'Pending', comments: '' },
    { id: 456, name: 'Rule Name 2',
        category: 'Internal Audit', condition: 'Client gender is = M and NDI > Requested Amount / 12', status: 'Active', comments: '' },
    { id: 789, name: 'Rule Name 3',
        category: 'Product', condition: 'Client gender is = M and NDI > Requested Amount / 12', status: 'Active', comments: '' },
    { id: 1011, name: 'Rule Name 4',
        category: 'Compliance', condition: 'Client gender is = M and NDI > Requested Amount / 12', status: 'Pending', comments: '' }
];
var RULES_CATEGORIES = ['Products', 'Compliance', 'Internal Audit'];


/***/ }),

/***/ "./src/app/shared/models/Answer.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/Answer.model.ts ***!
  \***********************************************/
/*! exports provided: Answer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
var Answer = /** @class */ (function () {
    function Answer() {
    }
    return Answer;
}());



/***/ }),

/***/ "./src/app/shared/models/Question.model.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/models/Question.model.ts ***!
  \*************************************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
var Question = /** @class */ (function () {
    function Question(loanAppSeq, formSeq) {
        this.answers = [];
        this.answersTest = [];
        this.loanAppSeq = loanAppSeq;
        this.formSeq = formSeq;
    }
    return Question;
}());



/***/ }),

/***/ "./src/app/shared/models/Rule.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/Rule.model.ts ***!
  \*********************************************/
/*! exports provided: Rule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rule", function() { return Rule; });
var Rule = /** @class */ (function () {
    function Rule() {
    }
    return Rule;
}());



/***/ }),

/***/ "./src/app/shared/models/business-activity.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/models/business-activity.model.ts ***!
  \**********************************************************/
/*! exports provided: BusinessActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessActivity", function() { return BusinessActivity; });
var BusinessActivity = /** @class */ (function () {
    function BusinessActivity() {
    }
    return BusinessActivity;
}());



/***/ }),

/***/ "./src/app/shared/models/business-sector.model.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/models/business-sector.model.ts ***!
  \********************************************************/
/*! exports provided: BusinessSector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessSector", function() { return BusinessSector; });
var BusinessSector = /** @class */ (function () {
    function BusinessSector() {
    }
    return BusinessSector;
}());



/***/ }),

/***/ "./src/app/shared/models/city.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/city.model.ts ***!
  \*********************************************/
/*! exports provided: City */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "City", function() { return City; });
var City = /** @class */ (function () {
    function City() {
    }
    return City;
}());



/***/ }),

/***/ "./src/app/shared/models/health-insurance-plan.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/models/health-insurance-plan.model.ts ***!
  \**************************************************************/
/*! exports provided: HealthInsurancePlan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthInsurancePlan", function() { return HealthInsurancePlan; });
var HealthInsurancePlan = /** @class */ (function () {
    function HealthInsurancePlan() {
    }
    return HealthInsurancePlan;
}());



/***/ }),

/***/ "./src/app/shared/models/questionnaire.model.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/models/questionnaire.model.ts ***!
  \******************************************************/
/*! exports provided: Questionnaire */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Questionnaire", function() { return Questionnaire; });
var Questionnaire = /** @class */ (function () {
    function Questionnaire() {
    }
    Questionnaire.prototype.constuctor = function () { };
    return Questionnaire;
}());



/***/ }),

/***/ "./src/app/shared/models/tag.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/models/tag.model.ts ***!
  \********************************************/
/*! exports provided: Tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
var Tag = /** @class */ (function () {
    function Tag() {
    }
    return Tag;
}());



/***/ }),

/***/ "./src/app/shared/services/answer.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/answer.service.ts ***!
  \***************************************************/
/*! exports provided: AnswerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerService", function() { return AnswerService; });
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




var AnswerService = /** @class */ (function () {
    function AnswerService(http) {
        this.http = http;
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_3__["ApiModel"]();
        this.token = 'Bearer ' + sessionStorage.getItem('token');
    }
    AnswerService.prototype.getAnswers = function (qstSeq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-answrs-by-qst-seq/' + qstSeq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    AnswerService.prototype.addAnswer = function (Answer) {
        return this.http.post(this.apiModel.host + '/setupservice/api/mw-answrs', Answer, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log("Add Answer"); }));
    };
    AnswerService.prototype.updateAnswer = function (Answer) {
        return this.http.put(this.apiModel.host + '/setupservice/api/mw-answrs', Answer, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    AnswerService.prototype.deleteAnswer = function (id) {
        return this.http.delete(this.apiModel.host + '/setupservice/api/mw-answrs/' + id, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log("Delete Answer"); }));
    };
    AnswerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AnswerService);
    return AnswerService;
}());



/***/ }),

/***/ "./src/app/shared/services/business-activity.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/business-activity.service.ts ***!
  \**************************************************************/
/*! exports provided: BusinessActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessActivityService", function() { return BusinessActivityService; });
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




var BusinessActivityService = /** @class */ (function () {
    function BusinessActivityService(http) {
        this.http = http;
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_3__["ApiModel"]();
        this.token = 'Bearer ' + sessionStorage.getItem('token');
    }
    BusinessActivityService.prototype.getBusinessActivities = function (bizSectSeq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-biz-acty-sect/' + bizSectSeq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    BusinessActivityService.prototype.addBusinessActivity = function (BusinessActivity) {
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-biz-acty', BusinessActivity, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log("Add BusinessActivity"); }));
    };
    BusinessActivityService.prototype.updateBusinessActivity = function (BusinessActivity) {
        return this.http.put(this.apiModel.host + '/setupservice/api/update-biz-acty', BusinessActivity, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    BusinessActivityService.prototype.deleteBusinessActivity = function (id) {
        return this.http.delete(this.apiModel.host + '/setupservice/api/mw-biz-acty/' + id, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log("Delete BusinessActivity"); }));
    };
    BusinessActivityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BusinessActivityService);
    return BusinessActivityService;
}());



/***/ }),

/***/ "./src/app/shared/services/business-sector.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/business-sector.service.ts ***!
  \************************************************************/
/*! exports provided: BusinessSectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessSectorService", function() { return BusinessSectorService; });
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




var BusinessSectorService = /** @class */ (function () {
    function BusinessSectorService(http) {
        this.http = http;
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_3__["ApiModel"]();
        this.token = 'Bearer ' + sessionStorage.getItem('token');
    }
    BusinessSectorService.prototype.getBusinessSectors = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-biz-sect', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    BusinessSectorService.prototype.addBusinessSector = function (BusinessSector) {
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-biz-sect', BusinessSector, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log("Add BusinessSector"); }));
    };
    BusinessSectorService.prototype.updateBusinessSector = function (BusinessSector) {
        return this.http.put(this.apiModel.host + '/setupservice/api/update-biz-sect', BusinessSector, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    BusinessSectorService.prototype.deleteBusinessSector = function (id) {
        return this.http.delete(this.apiModel.host + '/setupservice/api/mw-biz-sect/' + id, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log("Delete BusinessSector"); }));
    };
    BusinessSectorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BusinessSectorService);
    return BusinessSectorService;
}());



/***/ }),

/***/ "./src/app/shared/services/city.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/city.service.ts ***!
  \*************************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_Api_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Api.model */ "./src/app/shared/models/Api.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CityService = /** @class */ (function () {
    function CityService(http, router, toastr) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_3__["ApiModel"]();
        this.token = 'Bearer ' + sessionStorage.getItem('token');
        console.log('City Service Initiated');
    }
    // getCities(): Observable<City[]> {
    //   return this.http.get<City[]>(this.apiModel.host + '/setupservice/api/mw-cities', {headers:this.apiModel.httpHeaderGet})
    //     .pipe(tap((p: City[]) => console.log(p))
    //     );
    // }
    CityService.prototype.getCities = function (pageIndex, pageSize, filter, isCount) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-cities?pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&filter=' + filter + '&isCount=' + isCount, { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (p) { return console.log(p); }));
    };
    CityService.prototype.addCity = function (city) {
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-city', city, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (p) { return console.log(p); }));
    };
    CityService.prototype.editCity = function (city) {
        return this.http.put(this.apiModel.host + '/setupservice/api/update-city', city, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (p) { return console.log(p); }));
    };
    CityService.prototype.deleteCity = function (id) {
        return this.http.delete(this.apiModel.host + '/setupservice/api/update-city/' + id, { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (p) { return console.log(p); }));
    };
    CityService.prototype.getAllUcs = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-ucs-combinations', { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (p) { return console.log(p); }));
    };
    CityService.prototype.addCityUcRel = function (obj) {
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-city-uc-rel', obj, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (p) { return console.log(p); }));
    };
    CityService.prototype.deleteCityUcRel = function (id) {
        return this.http.delete(this.apiModel.host + '/setupservice/api/mw-city-uc-rel/' + id, { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (p) { return console.log(p); }));
    };
    CityService.prototype.getUcsForCity = function (id) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-city-uc-rel-by-city/' + id, { headers: this.apiModel.httpHeaderGet })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (p) { return console.log(p); }));
    };
    CityService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
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
    CityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], CityService);
    return CityService;
}());



/***/ }),

/***/ "./src/app/shared/services/health-insurance-plan.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/health-insurance-plan.service.ts ***!
  \******************************************************************/
/*! exports provided: HealthInsurancePlanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthInsurancePlanService", function() { return HealthInsurancePlanService; });
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




var HealthInsurancePlanService = /** @class */ (function () {
    function HealthInsurancePlanService(http) {
        this.http = http;
        this._url = "ass";
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_3__["ApiModel"]();
        this.token = 'Bearer ' + sessionStorage.getItem('token');
    }
    HealthInsurancePlanService.prototype.getHealthInsurancePlans = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-hlth-insr-plan', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    HealthInsurancePlanService.prototype.addHealthInsurancePlan = function (HealthInsurancePlan) {
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-hlth-insr-plan', HealthInsurancePlan, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log("Add HealthInsurancePlans"); }));
    };
    HealthInsurancePlanService.prototype.updateHealthInsurancePlan = function (HealthInsurancePlan) {
        return this.http.put(this.apiModel.host + '/setupservice/api/update-hlth-insr-plan', HealthInsurancePlan, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    HealthInsurancePlanService.prototype.deleteHealthInsurancePlan = function (id) {
        return this.http.delete(this.apiModel.host + '/setupservice/api/mw-hlth-insr-plan/' + id, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log("Delete HealthInsurancePlans"); }));
    };
    HealthInsurancePlanService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HealthInsurancePlanService);
    return HealthInsurancePlanService;
}());



/***/ }),

/***/ "./src/app/shared/services/paymentTypes.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/paymentTypes.service.ts ***!
  \*********************************************************/
/*! exports provided: PaymentTypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentTypesService", function() { return PaymentTypesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_Api_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Api.model */ "./src/app/shared/models/Api.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PaymentTypesService = /** @class */ (function () {
    function PaymentTypesService(http, router, toastr) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_3__["ApiModel"]();
        console.log('Payment Types Service Initiated');
    }
    PaymentTypesService.prototype.getTypeStatus = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/vals-by-group-name?groupName=Types', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getTypeStatus')));
    };
    PaymentTypesService.prototype.getAllTypes = function (number) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-typs/' + number, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getAllTypes')));
    };
    PaymentTypesService.prototype.getAllTypesByCategory = function (number, pageIndex, pageSize, filter, isCount, brnchSeq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-typs?ctgryId=' + number + '&pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&filter=' + filter + '&isCount=' + isCount + '&brnchSeq=' + brnchSeq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getAllTypes')));
    };
    PaymentTypesService.prototype.getAllTypesByBrnch = function (number, brnch) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-typs-brnch-wise/' + number + "/" + brnch, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getAllTypes')));
    };
    PaymentTypesService.prototype.getAllBrnches = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-brnches', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getAllTypes')));
    };
    PaymentTypesService.prototype.addType = function (disb) {
        console.log(disb);
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-typ', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((function (p) { return console.log(p); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('addType'))));
    };
    PaymentTypesService.prototype.getTypeByIdAndCtgry = function (disb) {
        return this.http.post(this.apiModel.host + '/setupservice/api/mw-typs-by-id-and-ctgry', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((function (p) { return console.log(p); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('getType'))));
    };
    PaymentTypesService.prototype.updateType = function (disb) {
        return this.http.put(this.apiModel.host + '/setupservice/api/update-typ', disb, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((function (p) { return console.log(p); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('updateType'))));
    };
    PaymentTypesService.prototype.deleteType = function (seq) {
        var url = this.apiModel.host + '/setupservice/api/mw-typs/' + seq;
        return this.http.delete(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('deleteType')));
    };
    PaymentTypesService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
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
    PaymentTypesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], PaymentTypesService);
    return PaymentTypesService;
}());



/***/ }),

/***/ "./src/app/shared/services/question.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/question.service.ts ***!
  \*****************************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
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




var QuestionService = /** @class */ (function () {
    function QuestionService(http) {
        this.http = http;
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_3__["ApiModel"]();
        this.token = 'Bearer ' + sessionStorage.getItem('token');
    }
    QuestionService.prototype.getQuestions = function (qstnrSeq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-qsts-by-qstnr-seq/' + qstnrSeq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    QuestionService.prototype.addQuestion = function (Question) {
        return this.http.post(this.apiModel.host + '/setupservice/api/mw-qsts', Question, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log("Add Question"); }));
    };
    QuestionService.prototype.updateQuestion = function (Question) {
        return this.http.put(this.apiModel.host + '/setupservice/api/mw-qsts', Question, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    QuestionService.prototype.deleteQuestion = function (id) {
        return this.http.delete(this.apiModel.host + '/setupservice/api/mw-qsts/' + id, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log("Delete Question"); }));
    };
    QuestionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "./src/app/shared/services/questionnaire.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/questionnaire.service.ts ***!
  \**********************************************************/
/*! exports provided: QuestionnaireService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireService", function() { return QuestionnaireService; });
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




var QuestionnaireService = /** @class */ (function () {
    function QuestionnaireService(http) {
        this.http = http;
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_3__["ApiModel"]();
        this.token = 'Bearer ' + sessionStorage.getItem('token');
    }
    QuestionnaireService.prototype.getQuestionnaires = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-qstnr', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    QuestionnaireService.prototype.addQuestionnaire = function (Questionnaire) {
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-qstnr', Questionnaire, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log("Add Questionnaire"); }));
    };
    QuestionnaireService.prototype.updateQuestionnaire = function (Questionnaire) {
        return this.http.put(this.apiModel.host + '/setupservice/api/update-qstnr', Questionnaire, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    QuestionnaireService.prototype.deleteQuestionnaire = function (id) {
        return this.http.delete(this.apiModel.host + '/setupservice/api/mw-qstnr/' + id, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log("Delete Questionnaire"); }));
    };
    QuestionnaireService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuestionnaireService);
    return QuestionnaireService;
}());



/***/ }),

/***/ "./src/app/shared/services/rules.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/rules.service.ts ***!
  \**************************************************/
/*! exports provided: RulesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesService", function() { return RulesService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_Api_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Api.model */ "./src/app/shared/models/Api.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var RulesService = /** @class */ (function () {
    function RulesService(http, router) {
        this.http = http;
        this.router = router;
        this.rulesUrl = '/api/rules';
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_1__["ApiModel"]();
        console.log('Rules Service Initiated');
    }
    // getRules (): Observable<Rule[]> {
    //   return this.http.get<Rule[]>(this.apiModel.host+"/setupservice/api/mw-rul", { headers: this.apiModel.httpHeaderGet }).pipe(
    //     tap(heroes => console.log(`fetched rules`)),
    //     catchError(this.handleError('getRules', []))
    //   );
    // }
    RulesService.prototype.getRules = function (pageIndex, pageSize, filter, isCount) {
        return this.http.get(this.apiModel.host + "/setupservice/api/mw-rul-paged?pageIndex=" + pageIndex + '&pageSize=' + pageSize + '&filter=' + filter + '&isCount=' + isCount, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (heroes) { return console.log("fetched rules"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getRules')));
    };
    RulesService.prototype.getRule = function (id) {
        var url = this.rulesUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_) { return console.log("fetched rule id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("getRule id=" + id)));
    };
    RulesService.prototype.addRule = function (rule) {
        return this.http.post(this.apiModel.host + "/setupservice/api/add-new-rul", rule, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return console.log("added rule w/ id=" + rule.id); }));
    };
    RulesService.prototype.updateRule = function (rule) {
        return this.http.put(this.apiModel.host + "/setupservice/api/update-rul", rule, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return console.log("added rule w/ id=" + rule.id); }));
    };
    RulesService.prototype.deleteRule = function (id) {
        return this.http.delete(this.apiModel.host + "/setupservice/api/mw-rul/" + id, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (heroes) { return console.log("fetched rules"); }));
    };
    RulesService.prototype.handleError = function (operation, result) {
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
    RulesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RulesService);
    return RulesService;
}());



/***/ }),

/***/ "./src/app/shared/services/tags.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/tags.service.ts ***!
  \*************************************************/
/*! exports provided: TagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return TagsService; });
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




var TagsService = /** @class */ (function () {
    function TagsService(http) {
        this.http = http;
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_3__["ApiModel"]();
        this.token = 'Bearer ' + sessionStorage.getItem('token');
    }
    TagsService.prototype.getTags = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-tags', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    TagsService.prototype.addTag = function (Tag) {
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-tags', Tag, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log("Add Tags"); }));
    };
    TagsService.prototype.updateTag = function (Tag) {
        return this.http.put(this.apiModel.host + '/setupservice/api/update-tags', Tag, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    TagsService.prototype.deleteTag = function (id) {
        return this.http.delete(this.apiModel.host + '/setupservice/api/mw-tags/' + id, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log("Delete Tags"); }));
    };
    TagsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TagsService);
    return TagsService;
}());



/***/ }),

/***/ "./src/app/shared/services/user-managementservice.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/user-managementservice.ts ***!
  \***********************************************************/
/*! exports provided: UserManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementService", function() { return UserManagementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_Api_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Api.model */ "./src/app/shared/models/Api.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserManagementService = /** @class */ (function () {
    function UserManagementService(http, router, toastr, spinner) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.spinner = spinner;
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_2__["ApiModel"]();
    }
    UserManagementService.prototype.getRoles = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/get-user-role', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { return console.log(p); }));
    };
    UserManagementService.prototype.getMods = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-mods', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { return console.log(p); }));
    };
    UserManagementService.prototype.getAuth = function (seq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-auth/' + seq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) { return console.log(p); }));
    };
    UserManagementService.prototype.updateAppAuth = function (auth) {
        return this.http.post(this.apiModel.host + '/setupservice/api/update-app-auth', auth, { headers: this.apiModel.httpHeaderPost }).pipe();
    };
    UserManagementService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.spinner.hide();
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            _this.toastr.error(error.error.error, operation + " failed:");
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    };
    UserManagementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], UserManagementService);
    return UserManagementService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-setup-setup-module.js.map