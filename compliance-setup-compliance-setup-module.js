(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["compliance-setup-compliance-setup-module"],{

/***/ "./src/app/pages/compliance/compliance-setup/action-sub-categories/action-sub-categories.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/compliance/compliance-setup/action-sub-categories/action-sub-categories.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/compliance/compliance-setup/action-sub-categories/action-sub-categories.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/compliance/compliance-setup/action-sub-categories/action-sub-categories.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Action Sub Categories\r\n                </h6>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 addBtn\">\r\n              <button class=\"btn btn-primary btn-sm\" type=\"button\" (click)=\"openSubCategoryModel()\"><i\r\n                  class=\"fa fa-plus\"></i>\r\n                Add</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>Sub Category Id</th>\r\n                  <th>Sub Category Name</th>\r\n                  <th>Actions</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let sub of actionSubCategories\">\r\n                  <td>{{sub.subCtgryId}}</td>\r\n                  <td>{{sub.subCtgryNm}}</td>\r\n                  <td>\r\n                    <a data-toggle=\"tooltip\" title=\"Edit\" (click)=\"onEditActionSubCategory(sub)\" class=\"iconBtn\"><i\r\n                        class=\"fa fa-pencil\"></i></a>\r\n                    <a data-toggle=\"tooltip\" title=\"Issues\"\r\n                      [routerLink]=\"['/compliance/compliance-setup/issues', sub.sbCtgrySeq]\" class=\"iconBtn\"><i\r\n                        class=\"fa fa-plus\"></i></a>\r\n                    <a data-toggle=\"tooltip\" title=\"Delete\" (click)=\"onDeleteActionSubCategory(sub)\"\r\n                      class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class=\"text-left mt-2 pb-3\">\r\n            <button [routerLink]=\"['/compliance/compliance-setup/categories']\" type=\"button\"\r\n              class=\"btn btn-primary btn-min\">Back</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"modal fade\" id=\"addActionSubCategory\" role=\"dialog\">\r\n        <div class=\"modal-dialog big mymodal\">\r\n\r\n          <form (ngSubmit)=\"onSubmitActionCategory()\" [formGroup]=\"actionSubCategoryForm\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Action Sub Categories</h5>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <div class=\"cRow\">\r\n\r\n                  <!-- <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" (keypress)=\"onlyNumbers($event)\" matInput placeholder=\"Sub Category ID:\"\r\n                        formControlName=\"subCtgryId\">\r\n                    </mat-form-field>\r\n                  </div> -->\r\n\r\n                  <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Sub Category Name:\" formControlName=\"subCtgryNm\">\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                  <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Comments:\" formControlName=\"subCtgryCmnt\">\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button type=\"submit\" [disabled]=!actionSubCategoryForm.valid\r\n                  class=\"btn btn-primary btn-min\">Ok</button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/compliance/compliance-setup/action-sub-categories/action-sub-categories.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/compliance/compliance-setup/action-sub-categories/action-sub-categories.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ActionSubCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSubCategoriesComponent", function() { return ActionSubCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_compliance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/compliance.service */ "./src/app/shared/services/compliance.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ActionSubCategoriesComponent = /** @class */ (function () {
    function ActionSubCategoriesComponent(fb, complianceService, toaster, route) {
        this.fb = fb;
        this.complianceService = complianceService;
        this.toaster = toaster;
        this.route = route;
    }
    ActionSubCategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actionSubCategoryForm = this.fb.group({
            subCtgryId: [],
            subCtgryNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sbCtgrySeq: [],
            subCtgryCmnt: [''],
            adtCtgrySeq: [this.route.snapshot.paramMap.get('adtCtgrySeq')],
        });
        this.complianceService.getCategories().subscribe(function (res) {
            _this.categories = res;
            console.log(_this.categories);
        });
        this.complianceService.getSubCategories(this.route.snapshot.paramMap.get('adtCtgrySeq')).subscribe(function (res) {
            _this.actionSubCategories = res;
        });
    };
    ActionSubCategoriesComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    ActionSubCategoriesComponent.prototype.onlyLetters = function (event) {
        var pattern = /[a-zA-Z ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    ActionSubCategoriesComponent.prototype.openSubCategoryModel = function () {
        this.actionSubCategoryForm.reset();
        this.actionSubCategoryForm.controls['adtCtgrySeq'].setValue(this.route.snapshot.paramMap.get('adtCtgrySeq'));
        $('#addActionSubCategory').modal('show');
    };
    ActionSubCategoriesComponent.prototype.onEditActionSubCategory = function (sub) {
        $('#addActionSubCategory').modal('show');
        this.actionSubCategoryForm = this.fb.group({
            subCtgryId: [sub.subCtgryId],
            subCtgryNm: [sub.subCtgryNm],
            sbCtgrySeq: [sub.sbCtgrySeq],
            subCtgryCmnt: [sub.subCtgryCmnt],
            adtCtgrySeq: [sub.adtCtgrySeq]
        });
    };
    ActionSubCategoriesComponent.prototype.onDeleteActionSubCategory = function (sub) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Action Sub Category?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.complianceService.deleteSubCategory(sub.sbCtgrySeq).subscribe(function (data) {
                    _this.actionSubCategories.splice(_this.actionSubCategories.indexOf(sub), 1);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Deleted!', 'Action Sub Category Deleted Successfully.', 'success');
                });
            }
        });
    };
    ActionSubCategoriesComponent.prototype.onSubmitActionCategory = function () {
        var _this = this;
        this.complianceService.postingSubCategories(this.actionSubCategoryForm.value).subscribe(function (response) {
            _this.toaster.success('Saved');
            _this.complianceService.getSubCategories(_this.route.snapshot.paramMap.get('adtCtgrySeq')).subscribe(function (res) {
                _this.actionSubCategories = res;
                _this.actionSubCategoryForm.reset();
            });
            $('#addActionSubCategory').modal('hide');
        }, function (error) {
            _this.toaster.error('Something Went Wrong');
        });
    };
    ActionSubCategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-action-sub-categories',
            template: __webpack_require__(/*! ./action-sub-categories.component.html */ "./src/app/pages/compliance/compliance-setup/action-sub-categories/action-sub-categories.component.html"),
            styles: [__webpack_require__(/*! ./action-sub-categories.component.css */ "./src/app/pages/compliance/compliance-setup/action-sub-categories/action-sub-categories.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_compliance_service__WEBPACK_IMPORTED_MODULE_4__["ComplianceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ActionSubCategoriesComponent);
    return ActionSubCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/pages/compliance/compliance-setup/categories/categories.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/compliance/compliance-setup/categories/categories.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/compliance/compliance-setup/categories/categories.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/compliance/compliance-setup/categories/categories.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <app-left-side-bar></app-left-side-bar>\r\n            </div>\r\n            <div class=\"col-md-9\">\r\n                <div class=\"content\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"mysearchbox\">\r\n                                <h6 class=\"d-inline-block searchshow\">Categories\r\n                                </h6>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6 addBtn\">\r\n                            <button class=\"btn btn-primary btn-sm\" type=\"button\" (click)=\"openCategoryModel()\"><i\r\n                                    class=\"fa fa-plus\"></i>\r\n                                Add</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table\">\r\n                            <thead class=\"thead-light\">\r\n                                <tr>\r\n                                    <th>Category Id</th>\r\n                                    <th>Category Name</th>\r\n                                    <th>Score</th>\r\n                                    <th>Calculation Type</th>\r\n                                    <th>Category Type</th>\r\n                                    <th>Actions</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let cat of categories\">\r\n                                    <td>{{cat.ctgryId}}</td>\r\n                                    <td>{{cat.ctgryNm}}</td>\r\n                                    <td>{{cat.ctgryScr}}</td>\r\n                                    <td>{{cat.calcTyp}}</td>\r\n                                    <td>{{cat.ctgryTyp}}</td>\r\n                                    <td>\r\n                                        <a data-toggle=\"tooltip\" title=\"Edit\" (click)=\"onEditCategories(cat)\"\r\n                                            class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                                        <a data-toggle=\"tooltip\" title=\"Action Sub-Categories\"\r\n                                            [routerLink]=\"['/compliance/compliance-setup/action-sub-categories', cat.adtCtgrySeq]\"\r\n                                            class=\"iconBtn\"><i class=\"fa fa-plus\"></i></a>\r\n                                        <a data-toggle=\"tooltip\" title=\"Slabs\" (click)=\"openProductChargeSlbModal(cat)\"\r\n                                            class=\"iconBtn\"><i class=\"fa fa-linode\"></i></a>\r\n                                        <a data-toggle=\"tooltip\" title=\"Delete\" (click)=\"onDeleteCategories(cat)\"\r\n                                            class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                                        <!-- <a data-toggle=\"tooltip\" title=\"Slabing\" (click)=\"onClickAdd(cat)\"\r\n                                            class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a> -->\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-------------------------------   Category Modal         ------------------------------------------>\r\n\r\n            <div class=\"modal fade\" id=\"addCategory\" role=\"dialog\">\r\n                <div class=\"modal-dialog big mymodal\">\r\n\r\n                    <form (ngSubmit)=\"onSubmitCategory()\" [formGroup]=\"categoryForm\">\r\n                        <div class=\"modal-content\">\r\n                            <div class=\"modal-header\">\r\n                                <h5 class=\"modal-title\">Categories</h5>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                                <div class=\"cRow\">\r\n\r\n                                    <!-- <div class=\"cCol2\">\r\n                                        <mat-form-field>\r\n                                            <input type=\"text\" (keypress)=\"onlyNumbers($event)\" matInput\r\n                                                placeholder=\"Category ID:\" formControlName=\"ctgryId\">\r\n                                        </mat-form-field>\r\n                                    </div> -->\r\n\r\n                                    <div class=\"cCol2\">\r\n                                        <mat-form-field>\r\n                                            <input type=\"text\" matInput placeholder=\"Category Name:\"\r\n                                                formControlName=\"ctgryNm\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n\r\n                                    <div class=\"cCol2\">\r\n                                        <mat-form-field>\r\n                                            <input type=\"text\" (keypress)=\"onlyNumbers($event)\" matInput\r\n                                                placeholder=\"Score:\" maxlength=\"3\" formControlName=\"ctgryScr\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n\r\n                                    <div class=\"cCol2\">\r\n                                        <mat-form-field>\r\n                                            <mat-select placeholder=\"Type:\" formControlName=\"calcTyp\">\r\n                                                <mat-option [value]=\"1\">Flat</mat-option>\r\n                                                <mat-option [value]=\"2\">Percent</mat-option>\r\n                                            </mat-select>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n\r\n                                    <div class=\"cCol2\">\r\n                                        <mat-form-field>\r\n                                            <input type=\"text\" (keypress)=\"onlyNumbers($event)\" matInput\r\n                                                placeholder=\"Category Type:\" formControlName=\"ctgryTyp\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n\r\n                                    <div class=\"cCol2\">\r\n                                        <mat-form-field>\r\n                                            <mat-label>Category Entity Flag</mat-label>\r\n                                            <mat-select formControlName=\"ctgryEntyFlg\">\r\n                                                <mat-option *ngFor=\"let cat of categoryTypes\" [value]=\"cat.value\">\r\n                                                    {{cat.viewValue}}\r\n                                                </mat-option>\r\n                                            </mat-select>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n\r\n                                    <div class=\"cCol4\">\r\n                                        <mat-form-field>\r\n                                            <input type=\"text\" matInput placeholder=\"Coments:\"\r\n                                                formControlName=\"ctgryCmnt\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"modal-footer text-center\">\r\n                                <button type=\"submit\" [disabled]=!categoryForm.valid\r\n                                    class=\"btn btn-primary btn-min\">Ok</button>\r\n                                <button type=\"button\" class=\"btn btn-primary btn-min\"\r\n                                    data-dismiss=\"modal\">Cancel</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <!------------------------------------  Slabs Modal               ------------------------------------>\r\n\r\n            <!-- <div class=\"modal fade\" id=\"slabing\" role=\"dialog\">\r\n                <div class=\"modal-dialog big mymodal\">\r\n\r\n                    <form (ngSubmit)=\"onSubmitSlabs()\" [formGroup]=\"slabsForm\">\r\n                        <div class=\"modal-content\">\r\n                            <div class=\"modal-header\">\r\n                                <h5 class=\"modal-title\">Value</h5>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                                <div *ngFor=\"let slb of t.controls; let i=index;let first=first;let\r\n                                    last=last;\">\r\n                                    <div class=\"cRow\" [formGroupName]=\"slb\">\r\n\r\n                                        <div class=\"cCol2\">\r\n                                            <mat-form-field>\r\n                                                <input type=\"number\" matInput placeholder=\"Min Limit:\" maxlength=\"5\"\r\n                                                    formControlName=\"startLmt\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n\r\n                                        <div class=\"cCol2\">\r\n                                            <mat-form-field>\r\n                                                <input type=\"number\" matInput placeholder=\"Max Limit:\"\r\n                                                    formControlName=\"endLmt\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n\r\n                                        <div class=\"cCol2\">\r\n                                            <mat-form-field>\r\n                                                <input type=\"number\" matInput placeholder=\"Value:\" formControlName=\"val\"\r\n                                                    maxlength=\"5\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <a *ngIf=\"slabsForm.valid\" class=\"btn btn-primary btn-min\" (click)=\"onAddButton()\"\r\n                                    role=\"button\">Add\r\n                                    entry</a>\r\n                                <a *ngIf=\"slabsForm.controls.slbs.controls.length > 1\" class=\"btn btn-danger btn-min\"\r\n                                    (click)=\"onDeleteButton()\" style=\"color:red !important;\" role=\"button\">Remove\r\n                                    entry</a>\r\n                            </div>\r\n\r\n                            <div class=\"modal-footer text-center\">\r\n                                <button type=\"submit\" [disabled]=!slabsForm.valid\r\n                                    class=\"btn btn-primary btn-min\">Ok</button>\r\n                                <button type=\"button\" class=\"btn btn-primary btn-min\"\r\n                                    data-dismiss=\"modal\">Cancel</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n\r\n                </div>\r\n            </div> -->\r\n            <!------       00-------0-0-0-                END SLABSSS 090980- ---------------              ------->\r\n\r\n\r\n            <!--- Value Modal--->\r\n            <div class=\"modal fade\" id=\"value\" role=\"dialog\">\r\n                <div class=\"modal-dialog big mymodal\">\r\n\r\n                    <!-- Modal content-->\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                            <h5 class=\"modal-title\">Value</h5>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <div *ngFor=\"let a of slbForCat.slbs;let first = first;let last = last;\">\r\n                                <div class=\"cRow\">\r\n                                    <div class=\"cCol2\">\r\n                                        <mat-form-field>\r\n                                            <input type=\"number\" disabled matInput placeholder=\"Min Limit:\"\r\n                                                [(ngModel)]=\"a.startLmt\" name=\"startLmt\" #startLmt=\"ngModel\"\r\n                                                maxlength=\"5\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"cCol2\">\r\n                                        <mat-form-field>\r\n                                            <input type=\"number\" matInput placeholder=\"Max Limit:\"\r\n                                                [(ngModel)]=\"a.endLmt\" name=\"endLmt\" #endLmt=\"ngModel\" maxlength=\"5\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"cCol2\">\r\n                                        <mat-form-field>\r\n                                            <input type=\"number\" matInput placeholder=\"Value:\" [(ngModel)]=\"a.val\"\r\n                                                name=\"val\" #val=\"ngModel\" maxlength=\"5\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                                <a class=\"btn btn-danger btn-min\" *ngIf=\"!first && last\" (click)=\"deleteLine(a)\"\r\n                                    style=\"color:red !important;\" role=\"button\">Remove entry</a>\r\n\r\n                                <a class=\"btn btn-primary btn-min\"\r\n                                    *ngIf=\"last && a.endLmt!=undefined && a.endLmt!=0 && a.endLmt!=null && a.endLmt>=a.startLmt && a.val!=null && a.val!=undefined\"\r\n                                    (click)=\"addLine()\" role=\"button\">Add entry</a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"modal-footer text-center\">\r\n                            <button type=\"button\"\r\n                                [disabled]=\" (slbForCat.slbs[slbForCat.slbs.length-1].endLmt!=undefined || slbForCat.slbs[slbForCat.slbs.length-1].endLmt!=null) && slbForCat.slbs[slbForCat.slbs.length-1].endLmt>= slbForCat.slbs[slbForCat.slbs.length-1].startLmt && (slbForCat.slbs[slbForCat.slbs.length-1].val == 0 || slbForCat.slbs[slbForCat.slbs.length-1].val == undefined || slbForCat.slbs[slbForCat.slbs.length-1].val == null)\"\r\n                                class=\"btn btn-primary btn-min\" (click)=\"onSlbSubmit()\">Ok</button>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/compliance/compliance-setup/categories/categories.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/compliance/compliance-setup/categories/categories.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_shared_services_compliance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/compliance.service */ "./src/app/shared/services/compliance.service.ts");
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





var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(fb, complianceService, toaster) {
        this.fb = fb;
        this.complianceService = complianceService;
        this.toaster = toaster;
        this.categoryTypes = [
            { value: 1, viewValue: 'Client' },
            { value: 2, viewValue: 'Branch' }
        ];
        this.entryButton = false;
        this.slbForCat = { slbs: [{ adtCtgrySeq: null, catSlbSeq: null, endLmt: null, startLmt: 0, val: null }] };
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // ctgryEntyFld
        this.categoryForm = this.fb.group({
            ctgryId: [],
            ctgryNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ctgryScr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            calcTyp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ctgryTyp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ctgryEntyFlg: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ctgryCmnt: [''],
            adtCtgrySeq: ['']
        });
        this.slabsForm = this.fb.group({
            slbs: this.fb.array([this.createForm()])
        });
        this.complianceService.getCategories().subscribe(function (res) {
            _this.categories = res;
            console.log(_this.categories);
        });
        this.entryButton = true;
        this.allSlabs = [];
    };
    // creating slabbing form
    CategoriesComponent.prototype.createForm = function () {
        return this.fb.group({
            startLmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            endLmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            val: ['']
        });
    };
    //opening the slabbing model
    CategoriesComponent.prototype.onClickAdd = function (cat) {
        this.slbs = this.slabsForm.get('slbs');
        console.log(this.slbs);
        this.slbs = this.fb.array([]);
        console.log(this.slbs);
        this.slbs.push(this.fb.group({
            startLmt: [0],
            endLmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            val: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }));
        $('#slabing').modal('show');
        console.log(this.slabsForm);
    };
    CategoriesComponent.prototype.f = function () {
        return this.slabsForm.controls;
    };
    CategoriesComponent.prototype.t = function () {
        return this.f().slbs;
    };
    //adding new line in slabbing from
    CategoriesComponent.prototype.onAddButton = function () {
        this.slbs = this.slabsForm.get('slbs');
        // this.slbs.controls.forEach(ele => {
        //   ele.value.startLmt.setValue(ele.value.startLmt + 1)
        // })
        this.slbs.push(this.createForm());
    };
    //deleteing last line in slabbing form
    CategoriesComponent.prototype.onDeleteButton = function () {
        this.slbs.removeAt(this.slbs.length - 1);
    };
    //Submit Slabbing form
    CategoriesComponent.prototype.onSubmitSlabs = function () {
        console.log(this.slabsForm.value);
    };
    // check for only numbers
    CategoriesComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    // check for only letters
    CategoriesComponent.prototype.onlyLetters = function (event) {
        var pattern = /[a-zA-Z ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    CategoriesComponent.prototype.openCategoryModel = function () {
        this.categoryForm.reset();
        this.categoryForm.clearValidators();
        $('#addCategory').modal('show');
    };
    CategoriesComponent.prototype.onEditCategories = function (cat) {
        $('#addCategory').modal('show');
        this.categoryForm = this.fb.group({
            adtCtgrySeq: [cat.adtCtgrySeq],
            ctgryId: [cat.ctgryId],
            ctgryNm: [cat.ctgryNm, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ctgryScr: [cat.ctgryScr, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            calcTyp: [cat.calcTyp],
            ctgryTyp: [cat.ctgryTyp, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ctgryCmnt: [cat.ctgryCmnt],
            ctgryEntyFlg: [cat.ctgryEntyFlg]
        });
        console.log(this.categoryForm.value);
    };
    CategoriesComponent.prototype.onDeleteCategories = function (cat) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Category?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.complianceService.deleteCategory(cat.adtCtgrySeq).subscribe(function (data) {
                    console.log(_this.categories);
                    _this.categories.splice(_this.categories.indexOf(cat), 1);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Deleted!', 'Category Deleted Successfully.', 'success');
                });
            }
        });
    };
    CategoriesComponent.prototype.onSubmitCategory = function () {
        var _this = this;
        this.complianceService.postingCategories(this.categoryForm.value).subscribe(function (response) {
            _this.toaster.success('Saved');
            _this.complianceService.getCategories().subscribe(function (res) {
                _this.categories = res;
                _this.categoryForm.reset();
            });
            $('#addCategory').modal('hide');
        }, function (error) {
            _this.toaster.error('Something Went Wrong');
        });
    };
    CategoriesComponent.prototype.openProductChargeSlbModal = function (cat) {
        var _this = this;
        this.allSlabs = [];
        this.complianceService.gettingSlabs(cat.adtCtgrySeq).subscribe(function (res) {
            _this.allSlabs = res;
            // console.log(this.allSlabs.slbs.sort())
            if (_this.allSlabs.length > 0) {
                _this.slbForCat.slbs = [];
                for (var i = 0; i < _this.allSlabs.length; i++) {
                    _this.slbForCat.slbs.push({ adtCtgrySeq: _this.allSlabs[i].adtCtgrySeq, catSlbSeq: _this.allSlabs[i].adtCtgrySlbsSeq, endLmt: _this.allSlabs[i].endLmt, startLmt: _this.allSlabs[i].startLmt, val: _this.allSlabs[i].dedScr });
                }
                $('#value').modal('show');
            }
            else {
                _this.slbForCat = { slbs: [{ adtCtgrySeq: cat.adtCtgrySeq, catSlbSeq: null, endLmt: null, startLmt: 0, val: null }] };
                _this.catSeq = cat.adtCtgrySeq;
                if (_this.slbForCat.slbs.length <= 0) {
                    _this.slbForCat.slbs.push({ adtCtgrySeq: _this.catSeq, catSlbSeq: null, endLmt: null, startLmt: 0, val: null });
                }
                $('#value').modal('show');
            }
        });
    };
    CategoriesComponent.prototype.addLine = function () {
        // console.log(this.slbForCat.slbs)
        // console.log(this.slbForCat.slbs.length - 1)
        // console.log(this.slbForCat.slbs[1])
        // console.log(this.slbForCat.slbs[this.slbForCat.slbs.length - 1].endLmt)
        // console.log(this.slbForCat.slbs[this.slbForCat.slbs.length - 1].endLmt + 0.1)
        var a = this.slbForCat.slbs.length - 1;
        this.slbForCat.slbs.push({ adtCtgrySeq: this.catSeq, catSlbSeq: null, startLmt: (this.slbForCat.slbs.length <= 0) ? null : this.slbForCat.slbs[a].endLmt + 0.1, endLmt: null, val: null });
    };
    CategoriesComponent.prototype.deleteLine = function (a) {
        console.log(a);
        this.slbForCat.slbs.splice(this.slbForCat.slbs.indexOf(a), 1);
    };
    CategoriesComponent.prototype.onSlbSubmit = function () {
        var _this = this;
        console.log(this.slbForCat.slbs);
        console.log(this.catSeq);
        this.complianceService.slabsSubmission(this.slbForCat.slbs).subscribe(function (response) {
            console.log(response);
            _this.toaster.success('Saved', "Success");
            _this.complianceService.getCategories().subscribe(function (res) {
                _this.categories = res;
                _this.categoryForm.reset();
            });
            $('#value').modal('hide');
        }, function (error) {
            _this.toaster.error('Something Went Wrong');
        });
    };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/pages/compliance/compliance-setup/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/pages/compliance/compliance-setup/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_compliance_service__WEBPACK_IMPORTED_MODULE_3__["ComplianceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/pages/compliance/compliance-setup/compliance-setup.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/compliance/compliance-setup/compliance-setup.module.ts ***!
  \******************************************************************************/
/*! exports provided: routes, ComplianceSetupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplianceSetupModule", function() { return ComplianceSetupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _target_managment_target_managment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./target-managment/target-managment.component */ "./src/app/pages/compliance/compliance-setup/target-managment/target-managment.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/pages/compliance/compliance-setup/categories/categories.component.ts");
/* harmony import */ var _action_sub_categories_action_sub_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action-sub-categories/action-sub-categories.component */ "./src/app/pages/compliance/compliance-setup/action-sub-categories/action-sub-categories.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _left_side_bar_left_side_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./left-side-bar/left-side-bar.component */ "./src/app/pages/compliance/compliance-setup/left-side-bar/left-side-bar.component.ts");
/* harmony import */ var _issues_issues_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./issues/issues.component */ "./src/app/pages/compliance/compliance-setup/issues/issues.component.ts");
/* harmony import */ var _device_register_device_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./device-register/device-register.component */ "./src/app/pages/compliance/compliance-setup/device-register/device-register.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        redirectTo: 'target-managment'
    },
    {
        path: 'target-managment',
        component: _target_managment_target_managment_component__WEBPACK_IMPORTED_MODULE_2__["TargetManagmentComponent"]
    },
    {
        path: 'categories',
        component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"]
    },
    {
        path: 'action-sub-categories/:adtCtgrySeq',
        component: _action_sub_categories_action_sub_categories_component__WEBPACK_IMPORTED_MODULE_4__["ActionSubCategoriesComponent"]
    },
    {
        path: 'issues/:sbCtgrySeq',
        component: _issues_issues_component__WEBPACK_IMPORTED_MODULE_9__["IssuesComponent"]
    },
    {
        path: 'device-register',
        component: _device_register_device_register_component__WEBPACK_IMPORTED_MODULE_10__["DeviceRegisterComponent"]
    }
];
var ComplianceSetupModule = /** @class */ (function () {
    function ComplianceSetupModule() {
    }
    ComplianceSetupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"]
            ],
            declarations: [_target_managment_target_managment_component__WEBPACK_IMPORTED_MODULE_2__["TargetManagmentComponent"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"], _action_sub_categories_action_sub_categories_component__WEBPACK_IMPORTED_MODULE_4__["ActionSubCategoriesComponent"], _left_side_bar_left_side_bar_component__WEBPACK_IMPORTED_MODULE_8__["LeftSideBarComponent"], _issues_issues_component__WEBPACK_IMPORTED_MODULE_9__["IssuesComponent"], _device_register_device_register_component__WEBPACK_IMPORTED_MODULE_10__["DeviceRegisterComponent"]]
        })
    ], ComplianceSetupModule);
    return ComplianceSetupModule;
}());



/***/ }),

/***/ "./src/app/pages/compliance/compliance-setup/device-register/device-register.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/compliance/compliance-setup/device-register/device-register.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/compliance/compliance-setup/device-register/device-register.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/compliance/compliance-setup/device-register/device-register.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <app-left-side-bar></app-left-side-bar>\r\n            </div>\r\n            <div class=\"col-md-9\">\r\n                <div class=\"content\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"mysearchbox\">\r\n                                <h6 class=\"d-inline-block searchshow\">Device Register\r\n                                </h6>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6 addBtn\">\r\n                            <!-- <button class=\"btn btn-primary btn-sm\" type=\"button\"><i class=\"fa fa-plus\"></i> Add </button> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table\">\r\n                            <thead class=\"thead-light\">\r\n                                <tr>\r\n                                    <th>Branch Code</th>\r\n                                    <th>Branch Name</th>\r\n                                    <th>Branch Type</th>\r\n                                    <th>Description</th>\r\n                                    <th>Status</th>\r\n                                    <th>Actions</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td></td>\r\n                                    <td>\r\n                                        <a data-toggle=\"modal\" (click)=\"openTabAssignment()\" class=\"iconBtn\"><i\r\n                                                class=\"fa fa-tablet\"></i></a>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"modal fade\" id=\"AssignTablet\" role=\"dialog\">\r\n            <div class=\"modal-dialog big mymodal\">\r\n                <!-- Modal content-->\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <h5 class=\"modal-title\">Assign Tablet</h5>\r\n                    </div>\r\n                    <form class=\"md-float-material\" [formGroup]=\"AssignTabletForm\">\r\n                        <div class=\"modal-body\" style=\"padding-top:4em\">\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-1\">\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <mat-form-field>\r\n                                        <input type=\"text\" matInput formControlName=\"dvcAddr\"\r\n                                            placeholder=\"Device Unique Id\" name=\"dvcAddr\" minlength=\"16\" maxlength=\"16\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <mat-form-field>\r\n                                        <input type=\"text\" matInput formControlName=\"crtdBy\" placeholder=\"Identifier\"\r\n                                            name=\"identifier\" maxlength=\"30\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col-sm-1\">\r\n                                </div>\r\n                                <div class=\"col-sm-2\">\r\n                                    <button *ngIf=\"regUnReg\" (click)=\"unregisterDevice()\" type=\"button\" mat-stroked-button\r\n                                        color=\"warn\">Un-Register Device</button>\r\n                                    <button *ngIf=\"!regUnReg\" (click)=\"registerDevice()\" type=\"button\" mat-stroked-button\r\n                                        color=\"primary\">Register Device</button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-1\"></div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"modal-footer text-center\">\r\n                            <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Close</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/compliance/compliance-setup/device-register/device-register.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/compliance/compliance-setup/device-register/device-register.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DeviceRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceRegisterComponent", function() { return DeviceRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeviceRegisterComponent = /** @class */ (function () {
    function DeviceRegisterComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.hasDvc = false;
        this.regUnReg = false;
    }
    DeviceRegisterComponent.prototype.ngOnInit = function () {
        this.AssignTabletForm = this.formBuilder.group({
            entyTypFlg: 2,
            dvcAddr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            entyTypSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            crtdBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    DeviceRegisterComponent.prototype.openTabAssignment = function () {
        $('#AssignTablet').modal('show');
    };
    DeviceRegisterComponent.prototype.unregisterDevice = function () {
        this.AssignTabletForm.reset();
        this.regUnReg = !this.regUnReg;
    };
    DeviceRegisterComponent.prototype.registerDevice = function () {
        console.log(this.AssignTabletForm.value);
        this.regUnReg = !this.regUnReg;
    };
    DeviceRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-device-register',
            template: __webpack_require__(/*! ./device-register.component.html */ "./src/app/pages/compliance/compliance-setup/device-register/device-register.component.html"),
            styles: [__webpack_require__(/*! ./device-register.component.css */ "./src/app/pages/compliance/compliance-setup/device-register/device-register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], DeviceRegisterComponent);
    return DeviceRegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/compliance/compliance-setup/issues/issues.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/compliance/compliance-setup/issues/issues.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/compliance/compliance-setup/issues/issues.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/compliance/compliance-setup/issues/issues.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Issues\r\n                </h6>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 addBtn\">\r\n              <button class=\"btn btn-primary btn-sm\" type=\"button\" (click)=\"openIssuesModel()\"><i\r\n                  class=\"fa fa-plus\"></i>\r\n                Add</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>Issue Id</th>\r\n                  <th>Issue Name</th>\r\n                  <th>Actions</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let iss of totalIssue\">\r\n                  <td>{{iss.isuId}}</td>\r\n                  <td>{{iss.isuNm}}</td>\r\n                  <td>\r\n                    <a data-toggle=\"tooltip\" title=\"Edit\" (click)=\"onEditIssue(iss)\" class=\"iconBtn\"><i\r\n                        class=\"fa fa-pencil\"></i></a>\r\n                    <a data-toggle=\"tooltip\" title=\"Delete\" (click)=\"onDeleteIssue(iss)\" class=\"iconBtn delBtn\"><i\r\n                        class=\"fa fa-trash-o\"></i></a>\r\n\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class=\"text-left mt-2 pb-3\">\r\n            <button [routerLink]=\"['/compliance/compliance-setup/action-sub-categories/:adtCtgrySeq']\" type=\"button\"\r\n              class=\"btn btn-primary btn-min\">Back</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"modal fade\" id=\"issue\" role=\"dialog\">\r\n        <div class=\"modal-dialog big mymodal\">\r\n\r\n          <form (ngSubmit)=\"onSubmitIssue()\" [formGroup]=\"issueForm\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Action Sub Categories</h5>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <div class=\"cRow\">\r\n\r\n                  <!-- <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" (keypress)=\"onlyNumbers($event)\" matInput placeholder=\"Issue ID:\"\r\n                        formControlName=\"isuId\">\r\n                    </mat-form-field>\r\n                  </div> -->\r\n\r\n                  <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Issue Name:\" formControlName=\"isuNm\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button type=\"submit\" [disabled]=!issueForm.valid class=\"btn btn-primary btn-min\">Ok</button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/compliance/compliance-setup/issues/issues.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/compliance/compliance-setup/issues/issues.component.ts ***!
  \******************************************************************************/
/*! exports provided: IssuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesComponent", function() { return IssuesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_compliance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/compliance.service */ "./src/app/shared/services/compliance.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IssuesComponent = /** @class */ (function () {
    function IssuesComponent(fb, route, complianceService, toaster) {
        this.fb = fb;
        this.route = route;
        this.complianceService = complianceService;
        this.toaster = toaster;
        this.totalIssue = [];
    }
    IssuesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sbCtgrySeq = this.route.snapshot.paramMap.get('sbCtgrySeq');
        console.log(this.sbCtgrySeq);
        this.issueForm = this.fb.group({
            sbCtgrySeq: [this.sbCtgrySeq],
            adtIsuSeq: [],
            isuId: [],
            isuNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.complianceService.getAllIssues(this.sbCtgrySeq).subscribe(function (res) {
            _this.totalIssue = res;
        });
    };
    IssuesComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    IssuesComponent.prototype.onlyLetters = function (event) {
        var pattern = /[a-zA-Z ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    IssuesComponent.prototype.openIssuesModel = function () {
        this.issueForm.reset();
        this.issueForm.controls['sbCtgrySeq'].setValue(this.sbCtgrySeq);
        $('#issue').modal('show');
    };
    IssuesComponent.prototype.onEditIssue = function (iss) {
        console.log(this.sbCtgrySeq);
        $('#issue').modal('show');
        this.issueForm = this.fb.group({
            sbCtgrySeq: [this.sbCtgrySeq],
            adtIsuSeq: [iss.adtIsuSeq],
            isuId: [iss.isuId],
            isuNm: [iss.isuNm, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    IssuesComponent.prototype.onDeleteIssue = function (iss) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this issue?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.complianceService.deleteIssue(iss.adtIsuSeq).subscribe(function (data) {
                    _this.totalIssue.splice(_this.totalIssue.indexOf(iss), 1);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()('Deleted!', 'Issue Deleted Successfully.', 'success');
                });
            }
        });
    };
    IssuesComponent.prototype.onSubmitIssue = function () {
        var _this = this;
        console.log(this.sbCtgrySeq);
        this.complianceService.postingIssues(this.issueForm.value).subscribe(function (response) {
            _this.toaster.success('Issue Saved');
            _this.complianceService.getAllIssues(_this.sbCtgrySeq).subscribe(function (res) {
                _this.totalIssue = res;
            });
            $('#issue').modal('hide');
        }, function (error) {
            _this.toaster.error('Something Went Wrong');
        });
    };
    IssuesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-issues',
            template: __webpack_require__(/*! ./issues.component.html */ "./src/app/pages/compliance/compliance-setup/issues/issues.component.html"),
            styles: [__webpack_require__(/*! ./issues.component.css */ "./src/app/pages/compliance/compliance-setup/issues/issues.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_shared_services_compliance_service__WEBPACK_IMPORTED_MODULE_4__["ComplianceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], IssuesComponent);
    return IssuesComponent;
}());



/***/ }),

/***/ "./src/app/pages/compliance/compliance-setup/left-side-bar/left-side-bar.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/compliance/compliance-setup/left-side-bar/left-side-bar.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/compliance/compliance-setup/left-side-bar/left-side-bar.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/compliance/compliance-setup/left-side-bar/left-side-bar.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"leftSideBar\">\r\n    <h6><i class=\"fa fa-bar-chart\"></i> Compliance</h6>\r\n    <div class=\"leftmenu\">\r\n        <ul>\r\n            <!-- <li [routerLinkActive]=\"['active']\"><a\r\n                    [routerLink]=\"['/compliance/compliance-setup/target-managment']\">Target Managment</a></li>\r\n            <li [routerLinkActive]=\"['active']\"><a\r\n                    [routerLink]=\"['/compliance/compliance-setup/categories']\">Categories</a></li>\r\n            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/compliance/compliance-setup/issues']\">Issues</a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['active']\"><a\r\n                    [routerLink]=\"['/compliance/compliance-setup/device-register']\">Device Register</a></li> -->\r\n\r\n            <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/target-managment')\"><a\r\n                    [routerLink]=\"['/compliance/compliance-setup/target-managment']\">{{getName(\"/target-managment\")}}</a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/categories')\"><a\r\n                    [routerLink]=\"['/compliance/compliance-setup/categories']\">{{getName(\"/categories\")}}</a>\r\n            </li>\r\n            <!-- <li [routerLinkActive]=\"['active']\" *ngIf=\"hasSubMod('/device-register')\"><a\r\n                    [routerLink]=\"['/compliance/compliance-setup/device-register']\">{{getName(\"/device-register\")}}</a>\r\n            </li> -->\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/compliance/compliance-setup/left-side-bar/left-side-bar.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/compliance/compliance-setup/left-side-bar/left-side-bar.component.ts ***!
  \********************************************************************************************/
/*! exports provided: LeftSideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSideBarComponent", function() { return LeftSideBarComponent; });
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

var LeftSideBarComponent = /** @class */ (function () {
    function LeftSideBarComponent() {
        this.subMods = [];
    }
    LeftSideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth = JSON.parse(sessionStorage.getItem("auth"));
        console.log(this.auth.modules);
        this.auth.modules.forEach(function (screen) {
            if (screen.modUrl.indexOf("/compliance/compliance-setup") >= 0) {
                _this.subMods = screen.subMods;
            }
        });
        console.log(this.subMods);
    };
    LeftSideBarComponent.prototype.hasSubMod = function (url) {
        var v = false;
        this.subMods.forEach(function (sub) {
            if (sub.subModUrl.indexOf(url) >= 0) {
                v = true;
            }
        });
        return v;
    };
    LeftSideBarComponent.prototype.getName = function (url) {
        var v = "";
        this.subMods.forEach(function (sub) {
            if (sub.subModUrl.indexOf(url) >= 0) {
                v = sub.subModNm;
            }
        });
        return v;
    };
    LeftSideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-left-side-bar',
            template: __webpack_require__(/*! ./left-side-bar.component.html */ "./src/app/pages/compliance/compliance-setup/left-side-bar/left-side-bar.component.html"),
            styles: [__webpack_require__(/*! ./left-side-bar.component.css */ "./src/app/pages/compliance/compliance-setup/left-side-bar/left-side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftSideBarComponent);
    return LeftSideBarComponent;
}());



/***/ }),

/***/ "./src/app/pages/compliance/compliance-setup/target-managment/target-managment.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/compliance/compliance-setup/target-managment/target-managment.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/compliance/compliance-setup/target-managment/target-managment.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/compliance/compliance-setup/target-managment/target-managment.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <app-left-side-bar></app-left-side-bar>\r\n            </div>\r\n            <div class=\"col-md-9\">\r\n                <div class=\"content\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <!-- <div class=\"mysearchbox\">\r\n                                <h6 class=\"d-inline-block searchshow\">Target Managment\r\n                                    <i class=\"fa fa-search\"> </i>\r\n                                </h6>\r\n                            </div> -->\r\n                            <mat-form-field>\r\n                                <mat-label>Target Year</mat-label>\r\n                                <mat-select (selectionChange)=\"onSelectionTargetManagmentPeriods($event)\">\r\n                                    <mat-option *ngFor=\"let trgtYr of yearSpan\" [value]=\"trgtYr\">{{trgtYr}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-sm-6 addBtn\">\r\n                            <button *ngIf=\"addButton\" class=\"btn btn-primary btn-sm\" type=\"button\"\r\n                                (click)=\"openAddBranch()\"><i class=\"fa fa-plus\"></i>\r\n                                Add</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table\">\r\n                            <thead class=\"thead-light\">\r\n                                <tr>\r\n                                    <th>Branch Name</th>\r\n                                    <th>Target Year</th>\r\n                                    <th>Target Type</th>\r\n                                    <th>Target Visits</th>\r\n                                    <!-- <th>Brnanch Target Sequence</th> -->\r\n                                    <th>Actions</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let branch of allTargetManagment\">\r\n                                    <td>{{branchName(branch.brnchSeq)}}</td>\r\n                                    <td>{{branch.trgtYr}}</td>\r\n                                    <td>{{findVisitType(branch.vstTyp)}}</td>\r\n                                    <td>{{branch.trgt}}</td>\r\n                                    <!-- <td>{{branch.adtTrgtSeq}}</td> -->\r\n                                    <td>\r\n                                        <a data-toggle=\"tooltip\" title=\"Edit\" (click)=\"onEditTargetManagment(branch)\"\r\n                                            class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                                        <a data-toggle=\"tooltip\" title=\"Delete\"\r\n                                            (click)=\"onDeleteTargetManagment(branch)\" class=\"iconBtn delBtn\"><i\r\n                                                class=\"fa fa-trash-o\"></i></a>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"modal fade\" id=\"addTargetManagment\" role=\"dialog\">\r\n                <div class=\"modal-dialog big mymodal\">\r\n\r\n                    <form (ngSubmit)=\"onSubmitComplianceBranchVisitForm()\" [formGroup]=\"complianceBranchForm\">\r\n                        <div class=\"modal-content\">\r\n                            <div class=\"modal-header\">\r\n                                <h5 class=\"modal-title\">Add Target Managment</h5>\r\n                            </div>\r\n                            <div class=\"modal-body\" style=\"overflow:visible\">\r\n                                <div class=\"cRow\">\r\n\r\n                                    <div class=\"cCol2\">\r\n                                        <!-- <mat-form-field>\r\n                                            <input type=\"text\" matInput placeholder=\"Branch Sequence:\"\r\n                                                formControlName=\"brnchSeq\" readonly>\r\n                                        </mat-form-field> -->\r\n\r\n\r\n                                        <ng-select [items]=\"branchs\" required bindLabel=\"brnchNm\" bindValue=\"brnchSeq\"\r\n                                            name=\"brnchNm\" placeholder=\"Select Branch:\" formControlName=\"brnchSeq\">\r\n                                        </ng-select>\r\n\r\n                                    </div>\r\n\r\n                                    <div class=\"cCol2\">\r\n                                        <mat-form-field>\r\n                                            <input type=\"text\" matInput placeholder=\"Target Year:\"\r\n                                                formControlName=\"trgtYr\" readonly>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n\r\n                                    <!-- <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" (keypress)=\"onlyNumbers($event)\" matInput placeholder=\"Branch ID:\"\r\n                        formControlName=\"branchId\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" (keypress)=\"onlyLetters($event)\" matInput placeholder=\"Branch Name:\"\r\n                        formControlName=\"branchNam\">\r\n                    </mat-form-field>\r\n                  </div> -->\r\n\r\n                                    <div class=\"cCol2\">\r\n                                        <mat-form-field>\r\n                                            <mat-select placeholder=\"Target Type:\" formControlName=\"adtFlg\" name=\"key4\">\r\n                                                <mat-option *ngFor=\"let obj of visitType\" [value]=\"obj.seq\">{{obj.desc}}\r\n                                                </mat-option>\r\n                                            </mat-select>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n\r\n                                    <div class=\"cCol2\">\r\n                                        <mat-form-field>\r\n                                            <input type=\"text\" (keypress)=\"onlyNumbers($event)\" matInput\r\n                                                placeholder=\"Target Visits:\" formControlName=\"trgt\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"modal-footer text-center\">\r\n                                <button type=\"submit\" [disabled]=!complianceBranchForm.valid\r\n                                    class=\"btn btn-primary btn-min\">Ok</button>\r\n                                <button type=\"button\" class=\"btn btn-primary btn-min\"\r\n                                    data-dismiss=\"modal\">Cancel</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/compliance/compliance-setup/target-managment/target-managment.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/compliance/compliance-setup/target-managment/target-managment.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: TargetManagmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetManagmentComponent", function() { return TargetManagmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_compliance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/compliance.service */ "./src/app/shared/services/compliance.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/transfers.service */ "./src/app/shared/services/transfers.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TargetManagmentComponent = /** @class */ (function () {
    function TargetManagmentComponent(fb, complianceService, toaster, transfersService, spinner) {
        this.fb = fb;
        this.complianceService = complianceService;
        this.toaster = toaster;
        this.transfersService = transfersService;
        this.spinner = spinner;
        this.yearSpan = [];
        this.d = new Date();
        this.addButton = false;
        this.visitType = [{ seq: 1, desc: "Regular" }, { seq: 2, desc: "Floor" }, { seq: 3, desc: "ADC" }];
    }
    TargetManagmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.complianceBranchForm = this.fb.group({
            trgt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            brnchSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            trgtYr: [''],
            adtTrgtSeq: [''],
            adtFlg: ['']
        });
        var i;
        for (i = this.d.getFullYear() + 2; i > this.d.getFullYear() - 3; i--) {
            this.yearSpan.push(i);
        }
        this.transfersService.getBranches().subscribe(function (d) {
            console.log(d);
            _this.branchs = d;
        });
    };
    TargetManagmentComponent.prototype.findVisitType = function (seq) {
        var visitType = "";
        this.visitType.forEach(function (ele) {
            if (ele.seq == seq) {
                visitType = ele.desc;
            }
        });
        return visitType;
    };
    TargetManagmentComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    TargetManagmentComponent.prototype.onlyLetters = function (event) {
        var pattern = /[a-zA-Z ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    TargetManagmentComponent.prototype.onSelectionTargetManagmentPeriods = function (e) {
        var _this = this;
        console.log(e);
        this.addButton = true;
        this.spinner.show();
        this.complianceService.getTargetManagment(e.value).subscribe(function (res) {
            _this.allTargetManagment = res;
            _this.spinner.hide();
            _this.addButton = true;
            console.log(_this.allTargetManagment.length);
            if (_this.allTargetManagment.length == 0) {
                _this.toaster.warning('No Data Found Please Add Target', "Information");
            }
            _this.complianceBranchForm.get('trgtYr').setValue(e.value);
            _this.yearValue = e.value;
        }, function (error) {
            _this.addButton = false;
            _this.spinner.hide();
            if (error.status == 500) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
            else if (error.status == 404) {
                _this.toaster.error("404", "Error");
            }
            else if (error) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
        });
    };
    TargetManagmentComponent.prototype.branchName = function (brnchSeq) {
        var str = '';
        for (var i = 0; i < this.branchs.length; i++) {
            if (brnchSeq == this.branchs[i].brnchSeq) {
                str = this.branchs[i].brnchNm;
            }
        }
        return str;
    };
    TargetManagmentComponent.prototype.openAddBranch = function () {
        this.complianceBranchForm.reset();
        this.complianceBranchForm.controls['trgtYr'].setValue(this.yearValue);
        $('#addTargetManagment').modal('show');
    };
    TargetManagmentComponent.prototype.onEditTargetManagment = function (branch) {
        $('#addTargetManagment').modal('show');
        this.complianceBranchForm = this.fb.group({
            trgt: [branch.trgt, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            brnchSeq: [branch.brnchSeq],
            trgtYr: [branch.trgtYr],
            adtTrgtSeq: [branch.adtTrgtSeq],
            adtFlg: [branch.vstTyp]
        });
        console.log(this.complianceBranchForm.value);
    };
    TargetManagmentComponent.prototype.onDeleteTargetManagment = function (branch) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Target?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                console.log(branch.adtTrgtSeq);
                _this.complianceService.deleteTargetManagment(branch.adtTrgtSeq).subscribe(function (data) {
                    console.log(_this.allTargetManagment);
                    _this.allTargetManagment.splice(_this.allTargetManagment.indexOf(branch), 1);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Deleted!', 'Target Deleted Successfully.', 'success');
                });
            }
        });
    };
    TargetManagmentComponent.prototype.onSubmitComplianceBranchVisitForm = function () {
        var _this = this;
        console.log(this.allTargetManagment);
        for (var i = 0; i < this.allTargetManagment.length; i++) {
            for (var a = 0; a < this.branchs.length; a++) {
                if (this.complianceBranchForm.controls['adtFlg'].value == this.allTargetManagment[i].vstTyp &&
                    this.complianceBranchForm.controls['brnchSeq'].value == this.allTargetManagment[i].brnchSeq &&
                    this.complianceBranchForm.controls['trgtYr'].value == this.allTargetManagment[i].trgtYr) {
                    this.toaster.error('Cannot Add With Same Target Type With This Branch', "Error");
                    return;
                }
            }
        }
        this.spinner.show();
        this.complianceService.postingTargetManagment(this.complianceBranchForm.value).subscribe(function (res) {
            _this.spinner.hide();
            _this.toaster.success('Saved', "Success");
            _this.complianceService.getTargetManagment(_this.complianceBranchForm.controls['trgtYr'].value).subscribe(function (res) {
                _this.allTargetManagment = res;
                _this.complianceBranchForm.controls['trgt'].reset();
            });
            $('#addTargetManagment').modal('hide');
        }, function (error) {
            _this.addButton = false;
            _this.spinner.hide();
            if (error.status == 500) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
            else if (error.status == 404) {
                _this.toaster.error("404", "Error");
            }
            else if (error) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
        });
    };
    TargetManagmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-target-managment',
            template: __webpack_require__(/*! ./target-managment.component.html */ "./src/app/pages/compliance/compliance-setup/target-managment/target-managment.component.html"),
            styles: [__webpack_require__(/*! ./target-managment.component.css */ "./src/app/pages/compliance/compliance-setup/target-managment/target-managment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_shared_services_compliance_service__WEBPACK_IMPORTED_MODULE_2__["ComplianceService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], src_app_shared_services_transfers_service__WEBPACK_IMPORTED_MODULE_5__["TransfersService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], TargetManagmentComponent);
    return TargetManagmentComponent;
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
//# sourceMappingURL=compliance-setup-compliance-setup-module.js.map