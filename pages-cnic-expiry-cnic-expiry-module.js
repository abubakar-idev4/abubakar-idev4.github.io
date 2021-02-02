(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cnic-expiry-cnic-expiry-module"],{

/***/ "./src/app/pages/cnic-expiry/cnic-expiry.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/cnic-expiry/cnic-expiry.module.ts ***!
  \*********************************************************/
/*! exports provided: routes, CnicExpiryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CnicExpiryModule", function() { return CnicExpiryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _expiring_cnic_expiring_cnic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expiring-cnic/expiring-cnic.component */ "./src/app/pages/cnic-expiry/expiring-cnic/expiring-cnic.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _left_side_bar_left_side_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./left-side-bar/left-side-bar.component */ "./src/app/pages/cnic-expiry/left-side-bar/left-side-bar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        redirectTo: 'expiring-cnic'
    },
    {
        path: 'expiring-cnic',
        component: _expiring_cnic_expiring_cnic_component__WEBPACK_IMPORTED_MODULE_2__["ExpiringCnicComponent"]
    },
];
var CnicExpiryModule = /** @class */ (function () {
    function CnicExpiryModule() {
    }
    CnicExpiryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__["OwlNativeDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__["OwlDateTimeModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"]
            ],
            declarations: [_expiring_cnic_expiring_cnic_component__WEBPACK_IMPORTED_MODULE_2__["ExpiringCnicComponent"], _left_side_bar_left_side_bar_component__WEBPACK_IMPORTED_MODULE_8__["LeftSideBarComponent"]]
        })
    ], CnicExpiryModule);
    return CnicExpiryModule;
}());



/***/ }),

/***/ "./src/app/pages/cnic-expiry/expiring-cnic/expiring-cnic.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/cnic-expiry/expiring-cnic/expiring-cnic.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/cnic-expiry/expiring-cnic/expiring-cnic.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/cnic-expiry/expiring-cnic/expiring-cnic.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Expirng Cnic\r\n                </h6>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"col-sm-6 addBtn\">\r\n              <button class=\"btn btn-primary btn-sm\" type=\"button\" (click)=\"openExpiringModal()\"><i\r\n                  class=\"fa fa-plus\"></i>\r\n                Add</button>\r\n            </div> -->\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>Client Name</th>\r\n                  <th>Client Expiry Date</th>\r\n                  <th>CNIC Front</th>\r\n                  <th>CNIC Back</th>\r\n                  <th>Status</th>\r\n                  <th>Comments</th>\r\n                  <th>Actions</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let client of allClientsCnicExpiry\">\r\n                  <td>{{client.clntNm}}</td>\r\n                  <td>{{client.cnicExpryDt | date:'dd-MM-yyyy'}}</td>\r\n                  <td>\r\n                    <img [src]=\"sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + client.cnicFrntPic)\"\r\n                      (click)=\"loadModalForFrontPic(client)\" width=\"25\" height=\"20\" />\r\n                  </td>\r\n                  <td>\r\n                    <img [src]=\"sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+ client.cnicBckPic)\"\r\n                      (click)=\"loadModalForBackPic(client)\" width=\"25\" height=\"20\" />\r\n                  </td>\r\n                  <td>{{client.status}}</td>\r\n                  <td>{{client.cmnt}}</td>\r\n                  <td>\r\n                    <a data-toggle=\"tooltip\" title=\"Details\" class=\"iconBtn\" (click)=\"openExpiringModal(client)\"><i\r\n                        class=\"fa fa-calendar\"></i></a></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!------  Set Cnic Expiring modal   -------------->\r\n\r\n      <div class=\"modal fade\" id=\"expiringCninc\" role=\"dialog\">\r\n\r\n        <div class=\"modal-dialog big mymodal\">\r\n\r\n          <form (ngSubmit)=\"onSubmitExpiringCnic()\" [formGroup]=\"expiringCnicForm\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Expiring Cnic</h5>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n\r\n                <div class=\"cRow\">\r\n                  <!-- <div class=\"cCol3\">\r\n                    <mat-form-field>\r\n                      <input matInput required formControlName=\"cnicExpryDt\" placeholder=\"CNIC Expiry:\"\r\n                        [matDatepicker]=\"picker1\" />\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                      <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div> -->\r\n                  <!-- <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input matInput formControlName=\"attachCnicFront\" placeholder=\"Attach CNIC Front\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input matInput formControlName=\"attachCnicBack\" placeholder=\"Attach CNIC Back\">\r\n                    </mat-form-field>\r\n                  </div> -->\r\n\r\n                  <div class=\"col-full\">\r\n                    <label>Comments:</label>\r\n                    <!-- <mat-form-field>\r\n                      <input matInput formControlName=\"cmnt\" placeholder=\"Comments\">\r\n                    </mat-form-field> -->\r\n                    <textarea class=\"form-control\" cols=\"6\" rows=\"5\" formControlName=\"cmnt\" placeholder=\"Enter Comments\"\r\n                      [ngClass]=\"{ 'is-invalid':expiringCnicFormControls.cmnt.errors && expiringCnicFormControls.cmnt.touched,\r\n                        'is-valid':expiringCnicFormControls.cmnt.valid}\"></textarea>\r\n\r\n                    <div *ngIf=\" expiringCnicFormControls.cmnt.errors\" class=\"invalid-feedback\">\r\n                      <div\r\n                        *ngIf=\"expiringCnicFormControls.cmnt.errors.required && expiringCnicFormControls.cmnt.touched\">\r\n                        Comments are <strong>required</strong></div>\r\n                    </div>\r\n                    <div *ngIf=\"expiringCnicFormControls.cmnt.valid\" class=\"valid-feedback\">\r\n                      <div *ngIf=\"expiringCnicFormControls.cmnt.valid && expiringCnicFormControls.cmnt.touched\">\r\n                        <strong>Success!</strong> You've done it.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"modal-footer text-center\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\"\r\n                    (click)=\"onApproveExpiringCnic()\">Approve</button>\r\n\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\" (click)=\"onRejectExpiringCnic()\">Reject</button>\r\n\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\" (click)=\"onSendBackExpiringCnic()\">Send\r\n                    Back</button>\r\n\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div id=\"myModal\" class=\"modal\">\r\n    <span (click)=\"closeModal()\" class=\"close\">&times;</span>\r\n    <img class=\"modal-content\" [src]=\"modelSrc\">\r\n  </div>\r\n  <div id=\"myModalBack\" class=\"modal\">\r\n    <span (click)=\"closeModalBack()\" class=\"close\">&times;</span>\r\n    <img class=\"modal-content\" [src]=\"modelSrcBack\">\r\n  </div>\r\n\r\n</main>"

/***/ }),

/***/ "./src/app/pages/cnic-expiry/expiring-cnic/expiring-cnic.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/cnic-expiry/expiring-cnic/expiring-cnic.component.ts ***!
  \****************************************************************************/
/*! exports provided: ExpiringCnicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpiringCnicComponent", function() { return ExpiringCnicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _service_cnic_expiry_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/cnic-expiry.service */ "./src/app/pages/cnic-expiry/service/cnic-expiry.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ExpiringCnicComponent = /** @class */ (function () {
    function ExpiringCnicComponent(fb, toaster, router, spinner, cnicExpiryService, sanitizer) {
        this.fb = fb;
        this.toaster = toaster;
        this.router = router;
        this.spinner = spinner;
        this.cnicExpiryService = cnicExpiryService;
        this.sanitizer = sanitizer;
        this.expiringCnicForm = this.fb.group({
            loanAppSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cmnt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ExpiringCnicComponent.prototype.ngOnInit = function () {
        this.getAllCnicExpiring();
    };
    Object.defineProperty(ExpiringCnicComponent.prototype, "expiringCnicFormControls", {
        get: function () {
            return this.expiringCnicForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ExpiringCnicComponent.prototype.openExpiringModal = function (client) {
        console.log(client);
        this.expiringCnicForm = this.fb.group({
            loanAppSeq: [client.loanAppSeq],
            cmnt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        $('#expiringCninc').modal('show');
    };
    ExpiringCnicComponent.prototype.getAllCnicExpiring = function () {
        var _this = this;
        console.log(this.expiringCnicForm.value);
        this.cnicExpiryService.getAllCnicUpdate().subscribe(function (res) {
            _this.allClientsCnicExpiry = res;
        });
    };
    ;
    ExpiringCnicComponent.prototype.loadModalForFrontPic = function (client) {
        document.getElementById('myModal').style.display = "block";
        this.modelSrc = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + client.cnicFrntPic);
    };
    ExpiringCnicComponent.prototype.loadModalForBackPic = function (client) {
        document.getElementById('myModalBack').style.display = "block";
        this.modelSrcBack = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + client.cnicBckPic);
    };
    ExpiringCnicComponent.prototype.closeModal = function () {
        document.getElementById('myModal').style.display = "none";
    };
    ExpiringCnicComponent.prototype.closeModalBack = function () {
        document.getElementById('myModalBack').style.display = "none";
    };
    ExpiringCnicComponent.prototype.onApproveExpiringCnic = function () {
        var _this = this;
        this.expiringCnicForm.get('cmnt').clearValidators();
        this.expiringCnicForm.get('cmnt').updateValueAndValidity();
        this.spinner.show();
        this.cnicExpiryService.getApproveCnic(this.expiringCnicForm.controls['loanAppSeq'].value, this.expiringCnicForm.controls['cmnt'].value).subscribe(function (res) {
            $('#expiringCninc').modal('hide');
            _this.getAllCnicExpiring();
            _this.spinner.hide();
            _this.toaster.success("Cnic Upd Approved", "Success");
        }, function (error) {
            $('#expiringCninc').modal('hide');
            _this.spinner.hide();
            if (error.status == 500) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
            else if (error.status == 400) {
                _this.toaster.error("Bad Request", "Error");
            }
            else if (error) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
        });
    };
    ;
    ExpiringCnicComponent.prototype.onRejectExpiringCnic = function () {
        var _this = this;
        if (!this.expiringCnicForm.valid) {
            this.toaster.error("Please Enter Comments", "Error");
            return;
        }
        else {
            console.log(this.expiringCnicForm.controls['cmnt'].value);
            this.spinner.show();
            this.cnicExpiryService.getRejectCnic(this.expiringCnicForm.controls['loanAppSeq'].value, this.expiringCnicForm.controls['cmnt'].value).subscribe(function (res) {
                $('#expiringCninc').modal('hide');
                _this.getAllCnicExpiring();
                _this.spinner.hide();
                _this.toaster.success("Cnic Upd Rejected", "Success");
                console.log(res);
            }, function (error) {
                $('#expiringCninc').modal('hide');
                _this.spinner.hide();
                if (error.status == 500) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
                else if (error.status == 400) {
                    _this.toaster.error("Bad Request", "Error");
                }
                else if (error) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
                ;
            });
        }
        ;
    };
    ;
    ExpiringCnicComponent.prototype.onSendBackExpiringCnic = function () {
        var _this = this;
        if (!this.expiringCnicForm.valid) {
            this.toaster.error("Please Enter Comments", "Error");
            return;
        }
        else {
            console.log(this.expiringCnicForm.controls['cmnt'].value);
            this.spinner.show();
            this.cnicExpiryService.getSendBackCnic(this.expiringCnicForm.controls['loanAppSeq'].value, this.expiringCnicForm.controls['cmnt'].value).subscribe(function (res) {
                $('#expiringCninc').modal('hide');
                _this.getAllCnicExpiring();
                _this.spinner.hide();
                _this.toaster.success("Cnic Upd Send Back", "Success");
            }, function (error) {
                $('#expiringCninc').modal('hide');
                _this.spinner.hide();
                if (error.status == 500) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
                else if (error.status == 400) {
                    _this.toaster.error("Bad Request", "Error");
                }
                else if (error) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
            });
        }
        ;
    };
    ;
    ExpiringCnicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expiring-cnic',
            template: __webpack_require__(/*! ./expiring-cnic.component.html */ "./src/app/pages/cnic-expiry/expiring-cnic/expiring-cnic.component.html"),
            styles: [__webpack_require__(/*! ./expiring-cnic.component.css */ "./src/app/pages/cnic-expiry/expiring-cnic/expiring-cnic.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _service_cnic_expiry_service__WEBPACK_IMPORTED_MODULE_6__["CnicExpiryService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], ExpiringCnicComponent);
    return ExpiringCnicComponent;
}());



/***/ }),

/***/ "./src/app/pages/cnic-expiry/left-side-bar/left-side-bar.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/cnic-expiry/left-side-bar/left-side-bar.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/cnic-expiry/left-side-bar/left-side-bar.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/cnic-expiry/left-side-bar/left-side-bar.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"leftSideBar\">\r\n  <h6><i class=\"fa fa-bar-chart\"></i> Expiring Cnic </h6>\r\n  <div class=\"leftmenu\">\r\n    <ul>\r\n      <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/cnic-expiry/expiring-cnic']\">Expiring Cnic</a></li>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/cnic-expiry/left-side-bar/left-side-bar.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/cnic-expiry/left-side-bar/left-side-bar.component.ts ***!
  \****************************************************************************/
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
    }
    LeftSideBarComponent.prototype.ngOnInit = function () {
    };
    LeftSideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-left-side-bar',
            template: __webpack_require__(/*! ./left-side-bar.component.html */ "./src/app/pages/cnic-expiry/left-side-bar/left-side-bar.component.html"),
            styles: [__webpack_require__(/*! ./left-side-bar.component.css */ "./src/app/pages/cnic-expiry/left-side-bar/left-side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftSideBarComponent);
    return LeftSideBarComponent;
}());



/***/ }),

/***/ "./src/app/pages/cnic-expiry/service/cnic-expiry.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/cnic-expiry/service/cnic-expiry.service.ts ***!
  \******************************************************************/
/*! exports provided: CnicExpiryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CnicExpiryService", function() { return CnicExpiryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_models_Api_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/Api.model */ "./src/app/shared/models/Api.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CnicExpiryService = /** @class */ (function () {
    function CnicExpiryService(http, toaster) {
        this.http = http;
        this.toaster = toaster;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.apiModel = new src_app_shared_models_Api_model__WEBPACK_IMPORTED_MODULE_4__["ApiModel"]();
        this.url = this.apiModel.host;
        this.token = 'Bearer ' + sessionStorage.getItem('token');
    }
    CnicExpiryService.prototype.getAllCnicUpdate = function () {
        return this.http.get(this.apiModel.host + '/loanservice/api/get-cnic-upd', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (p) { return console.log(p); }));
    };
    ;
    CnicExpiryService.prototype.getApproveCnic = function (loanAppSeq, cmnt) {
        return this.http.get(this.apiModel.host + '/loanservice/api/approve-cnic-upd/' + loanAppSeq + '/' + cmnt, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (p) { return console.log(p); }));
    };
    ;
    CnicExpiryService.prototype.getRejectCnic = function (loanAppSeq, cmnt) {
        return this.http.get(this.apiModel.host + '/loanservice/api/reject-cnic-upd/' + loanAppSeq + '/' + cmnt, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (p) { return console.log(p); }));
    };
    ;
    CnicExpiryService.prototype.getSendBackCnic = function (loanAppSeq, cmnt) {
        return this.http.get(this.apiModel.host + '/loanservice/api/send-back-cnic-upd/' + loanAppSeq + '/' + cmnt, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (p) { return console.log(p); }));
    };
    ;
    CnicExpiryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], CnicExpiryService);
    return CnicExpiryService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cnic-expiry-cnic-expiry-module.js.map