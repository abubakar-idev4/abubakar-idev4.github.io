(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-Add-Product-add-product-module"],{

/***/ "./src/app/pages/setup/products/Add-Product/AddProduct.routing.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/AddProduct.routing.ts ***!
  \************************************************************************/
/*! exports provided: routes, AddProductRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductRouting", function() { return AddProductRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _info_basic_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info/basic-info.component */ "./src/app/pages/setup/products/Add-Product/info/basic-info.component.ts");
/* harmony import */ var _product_rules_product_rules_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-rules/product-rules.component */ "./src/app/pages/setup/products/Add-Product/product-rules/product-rules.component.ts");
/* harmony import */ var _forms_assignment_forms_assignment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms-assignment/forms-assignment.component */ "./src/app/pages/setup/products/Add-Product/forms-assignment/forms-assignment.component.ts");
/* harmony import */ var _accounting_setup_accounting_setup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accounting-setup/accounting-setup.component */ "./src/app/pages/setup/products/Add-Product/accounting-setup/accounting-setup.component.ts");
/* harmony import */ var _charges_charges_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charges/charges.component */ "./src/app/pages/setup/products/Add-Product/charges/charges.component.ts");
/* harmony import */ var _documents_assignment_documents_assignment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./documents-assignment/documents-assignment.component */ "./src/app/pages/setup/products/Add-Product/documents-assignment/documents-assignment.component.ts");
/* harmony import */ var _adjustment_sequence_adjustment_sequence_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./adjustment-sequence/adjustment-sequence.component */ "./src/app/pages/setup/products/Add-Product/adjustment-sequence/adjustment-sequence.component.ts");
/* harmony import */ var _business_sector_business_sector_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./business-sector/business-sector.component */ "./src/app/pages/setup/products/Add-Product/business-sector/business-sector.component.ts");
/* harmony import */ var _associate_product_assignment_associate_product_assignment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./associate-product-assignment/associate-product-assignment.component */ "./src/app/pages/setup/products/Add-Product/associate-product-assignment/associate-product-assignment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '',
        redirectTo: 'info'
    },
    { path: 'product-info',
        component: _info_basic_info_component__WEBPACK_IMPORTED_MODULE_2__["BasicInfoComponent"],
        data: {
            breadcrumbs: [
                { label: 'Basic Info', href: '/setup/addProduct/product-info' },
                { label: 'Product Rules', href: '/setup/addProduct/rules' },
                { label: 'Charges', href: '/setup/addProduct/charges' },
                { label: 'Accounting setup', href: '/setup/addProduct/accounting-setup' },
                { label: 'Forms Assignment', href: '/setup/addProduct/forms-assignment' },
                { label: 'Documents Assignment', href: '/setup/addProduct/documents-assignment' },
                { label: 'Adjustment Sequence', href: '/setup/addProduct/adjustment-sequence' },
                { label: 'Business Sector', href: '/setup/addProduct/business-sector' }
            ]
        }
    },
    { path: 'info',
        component: _info_basic_info_component__WEBPACK_IMPORTED_MODULE_2__["BasicInfoComponent"],
        data: {
            breadcrumbs: [
                { label: 'Basic Info', href: '/setup/addProduct/info' }
            ]
        }
    },
    { path: 'rules',
        component: _product_rules_product_rules_component__WEBPACK_IMPORTED_MODULE_3__["ProductRulesComponent"],
        data: {
            breadcrumbs: [
                { label: 'Basic Info', href: '/setup/addProduct/product-info' },
                { label: 'Product Rules', href: '/setup/addProduct/rules' },
                { label: 'Charges', href: '/setup/addProduct/charges' },
                { label: 'Accounting setup', href: '/setup/addProduct/accounting-setup' },
                { label: 'Forms Assignment', href: '/setup/addProduct/forms-assignment' },
                { label: 'Documents Assignment', href: '/setup/addProduct/documents-assignment' },
                { label: 'Adjustment Sequence', href: '/setup/addProduct/adjustment-sequence' },
                { label: 'Business Sector', href: '/setup/addProduct/business-sector' }
            ]
        }
    },
    { path: 'charges',
        component: _charges_charges_component__WEBPACK_IMPORTED_MODULE_6__["ChargesComponent"],
        data: {
            breadcrumbs: [
                { label: 'Basic Info', href: '/setup/addProduct/product-info' },
                { label: 'Product Rules', href: '/setup/addProduct/rules' },
                { label: 'Charges', href: '/setup/addProduct/charges' },
                { label: 'Accounting setup', href: '/setup/addProduct/accounting-setup' },
                { label: 'Forms Assignment', href: '/setup/addProduct/forms-assignment' },
                { label: 'Documents Assignment', href: '/setup/addProduct/documents-assignment' },
                { label: 'Adjustment Sequence', href: '/setup/addProduct/adjustment-sequence' },
                { label: 'Business Sector', href: '/setup/addProduct/business-sector' }
            ]
        }
    },
    { path: 'accounting-setup',
        component: _accounting_setup_accounting_setup_component__WEBPACK_IMPORTED_MODULE_5__["AccountingSetupComponent"],
        data: {
            breadcrumbs: [
                { label: 'Basic Info', href: '/setup/addProduct/product-info' },
                { label: 'Product Rules', href: '/setup/addProduct/rules' },
                { label: 'Charges', href: '/setup/addProduct/charges' },
                { label: 'Accounting setup', href: '/setup/addProduct/accounting-setup' },
                { label: 'Forms Assignment', href: '/setup/addProduct/forms-assignment' },
                { label: 'Documents Assignment', href: '/setup/addProduct/documents-assignment' },
                { label: 'Adjustment Sequence', href: '/setup/addProduct/adjustment-sequence' },
                { label: 'Business Sector', href: '/setup/addProduct/business-sector' }
            ]
        } },
    { path: 'forms-assignment',
        component: _forms_assignment_forms_assignment_component__WEBPACK_IMPORTED_MODULE_4__["FormsAssignmentComponent"],
        data: {
            breadcrumbs: [
                { label: 'Basic Info', href: '/setup/addProduct/product-info' },
                { label: 'Product Rules', href: '/setup/addProduct/rules' },
                { label: 'Charges', href: '/setup/addProduct/charges' },
                { label: 'Accounting setup', href: '/setup/addProduct/accounting-setup' },
                { label: 'Forms Assignment', href: '/setup/addProduct/forms-assignment' },
                { label: 'Documents Assignment', href: '/setup/addProduct/documents-assignment' },
                { label: 'Adjustment Sequence', href: '/setup/addProduct/adjustment-sequence' },
                { label: 'Business Sector', href: '/setup/addProduct/business-sector' }
            ]
        } },
    { path: 'documents-assignment',
        component: _documents_assignment_documents_assignment_component__WEBPACK_IMPORTED_MODULE_7__["DocumentsAssignmentComponent"],
        data: {
            breadcrumbs: [
                { label: 'Basic Info', href: '/setup/addProduct/product-info' },
                { label: 'Product Rules', href: '/setup/addProduct/rules' },
                { label: 'Charges', href: '/setup/addProduct/charges' },
                { label: 'Accounting setup', href: '/setup/addProduct/accounting-setup' },
                { label: 'Forms Assignment', href: '/setup/addProduct/forms-assignment' },
                { label: 'Documents Assignment', href: '/setup/addProduct/documents-assignment' },
                { label: 'Adjustment Sequence', href: '/setup/addProduct/adjustment-sequence' },
                { label: 'Business Sector', href: '/setup/addProduct/business-sector' }
            ]
        } },
    { path: 'adjustment-sequence',
        component: _adjustment_sequence_adjustment_sequence_component__WEBPACK_IMPORTED_MODULE_8__["AdjustmentSequenceComponent"],
        data: {
            breadcrumbs: [
                { label: 'Basic Info', href: '/setup/addProduct/product-info' },
                { label: 'Product Rules', href: '/setup/addProduct/rules' },
                { label: 'Charges', href: '/setup/addProduct/charges' },
                { label: 'Accounting setup', href: '/setup/addProduct/accounting-setup' },
                { label: 'Forms Assignment', href: '/setup/addProduct/forms-assignment' },
                { label: 'Documents Assignment', href: '/setup/addProduct/documents-assignment' },
                { label: 'Adjustment Sequence', href: '/setup/addProduct/adjustment-sequence' },
                { label: 'Business Sector', href: '/setup/addProduct/business-sector' }
            ]
        } },
    { path: 'business-sector',
        component: _business_sector_business_sector_component__WEBPACK_IMPORTED_MODULE_9__["BusinessSectorComponent"],
        data: {
            breadcrumbs: [
                { label: 'Basic Info', href: '/setup/addProduct/product-info' },
                { label: 'Product Rules', href: '/setup/addProduct/rules' },
                { label: 'Charges', href: '/setup/addProduct/charges' },
                { label: 'Accounting setup', href: '/setup/addProduct/accounting-setup' },
                { label: 'Forms Assignment', href: '/setup/addProduct/forms-assignment' },
                { label: 'Documents Assignment', href: '/setup/addProduct/documents-assignment' },
                { label: 'Adjustment Sequence', href: '/setup/addProduct/adjustment-sequence' },
                { label: 'Business Sector', href: '/setup/addProduct/business-sector' }
            ]
        } },
    { path: 'associate-product-assignment',
        component: _associate_product_assignment_associate_product_assignment_component__WEBPACK_IMPORTED_MODULE_10__["AssociateProductAssignment"],
        data: {
            breadcrumbs: [
                { label: 'Basic Info', href: '/setup/addProduct/product-info' },
                { label: 'Product Rules', href: '/setup/addProduct/rules' },
                { label: 'Charges', href: '/setup/addProduct/charges' },
                { label: 'Accounting setup', href: '/setup/addProduct/accounting-setup' },
                { label: 'Forms Assignment', href: '/setup/addProduct/forms-assignment' },
                { label: 'Documents Assignment', href: '/setup/addProduct/documents-assignment' },
                { label: 'Adjustment Sequence', href: '/setup/addProduct/adjustment-sequence' },
                { label: 'Business Sector', href: '/setup/addProduct/business-sector' },
                { label: 'Associate Product Assignment', href: '/setup/addProduct/associate-product-assignment' }
            ]
        } }
];
var AddProductRouting = /** @class */ (function () {
    function AddProductRouting() {
    }
    AddProductRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            bootstrap: [_info_basic_info_component__WEBPACK_IMPORTED_MODULE_2__["BasicInfoComponent"]]
        })
    ], AddProductRouting);
    return AddProductRouting;
}());



/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/accounting-setup/accounting-setup.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/accounting-setup/accounting-setup.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/accounting-setup/accounting-setup.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/accounting-setup/accounting-setup.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <form (ngSubmit)=\"onSubmit()\" #AccoutingForm=\"ngForm\">\r\n\r\n  <div class=\"container-fluid\">\r\n    <app-bread-crumb></app-bread-crumb>\r\n    <div class=\"content\">\r\n      <h6 class=\"mt-3\">Products</h6>\r\n      <div class=\"pt-1\">\r\n      </div>\r\n      <div class=\"cRow\">\r\n        <div class=\"cCol3\">\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol1\">\r\n                <!-- <div class=\"cCol1\"> -->\r\n                    <ng-select [items]=\"GlAccounts\" required required bindLabel=\"accDesc\" bindValue=\"accNum\" name=\"cmntyNm\" placeholder=\"Select GL Accounts\"\r\n                      [(ngModel)]=\"model1.glAcctNum\">\r\n                    </ng-select>\r\n                  <!-- </div> -->\r\n              <!-- <mat-form-field>\r\n                <input matInput required [(ngModel)]=\"model1.glAcctNum\" maxlength=\"30\"  name=\"glAccount\" (keypress)=\"onlyNumbers($event)\"\r\n                       placeholder=\"GL Account:\" [errorStateMatcher]=\"matcher\">\r\n              </mat-form-field> -->\r\n            </div>\r\n            <div class=\"cCol1\">\r\n              <!-- <button class=\"btn btn-dots\" type=\"button\"></button> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"cRow\">\r\n        <div class=\"cCol3\">\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol1\">\r\n              <!-- <mat-form-field> -->\r\n                <!-- <input matInput required [(ngModel)]=\"model2.glAcctNum\" name=\"glAccountMapping\"\r\n                       placeholder=\"GL Account Mapping:\" maxlength=\"30\"  [errorStateMatcher]=\"matcher\"  (keypress)=\"onlyNumbers($event)\">\r\n              </mat-form-field> -->\r\n              <ng-select [items]=\"GlAccounts\" required required bindLabel=\"accDesc\" bindValue=\"accNum\" name=\"glMapping\" placeholder=\"Select GL Account Mapping\"\r\n                      [(ngModel)]=\"model2.glAcctNum\">\r\n                    </ng-select>\r\n            </div>\r\n\r\n            <div class=\"cCol1\">\r\n              <!-- <button class=\"btn btn-dots\" type=\"button\"></button> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <a routerLink=\"/setup/addProduct/forms-assignment\" class=\"btn btn-primary\">Continue</a>\r\n    <button type=\"submit\" class=\"btn btn-default\">Save</button>\r\n  </div>\r\n  </form>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/accounting-setup/accounting-setup.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/accounting-setup/accounting-setup.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AccountingSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountingSetupComponent", function() { return AccountingSetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _shared_models_Product_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/models/Product.model */ "./src/app/shared/models/Product.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_models_FormAssignment_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/models/FormAssignment.model */ "./src/app/shared/models/FormAssignment.model.ts");
/* harmony import */ var _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/helpers/MyErrorStateMatcher.helper */ "./src/app/shared/helpers/MyErrorStateMatcher.helper.ts");
/* harmony import */ var _shared_providers_breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/providers/breadcrumb */ "./src/app/shared/providers/breadcrumb.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountingSetupComponent = /** @class */ (function () {
    function AccountingSetupComponent(productService, breadcrumbProvider, router) {
        this.productService = productService;
        this.breadcrumbProvider = breadcrumbProvider;
        this.router = router;
        this.product = new _shared_models_Product_model__WEBPACK_IMPORTED_MODULE_2__["Product"]();
        this.model1 = new _shared_models_FormAssignment_model__WEBPACK_IMPORTED_MODULE_4__["AccountingSetup"]();
        this.model2 = new _shared_models_FormAssignment_model__WEBPACK_IMPORTED_MODULE_4__["AccountingSetup"]();
        this.matcher = new _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_5__["MyErrorStateMatcher"]();
        this.GlAccounts = [];
    }
    AccountingSetupComponent.prototype.ngOnInit = function () {
        this.loadBasics();
    };
    AccountingSetupComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.model1.prdAcctSetSeq != null && this.model1.prdAcctSetSeq != undefined && this.model1.prdAcctSetSeq != 0) {
            this.model1.prdSeq = this.product.productSeq;
            this.model2.prdSeq = this.product.productSeq;
            this.productService.updateAccountingSetup(this.model1).subscribe();
            this.productService.updateAccountingSetup(this.model2).subscribe();
        }
        else {
            this.model1.prdSeq = this.product.productSeq;
            this.model2.prdSeq = this.product.productSeq;
            this.model1.acctCtgryKey = 255;
            this.model2.acctCtgryKey = 256;
            this.productService.addAccountingSetup(this.model1).subscribe(function (res) {
                _this.model1.prdAcctSetSeq = res.PrdAcctSet.prdAcctSetSeq;
                _this.product.modal1 = _this.model1;
                sessionStorage.setItem("product", JSON.stringify(_this.product));
            });
            this.productService.addAccountingSetup(this.model2).subscribe(function (res) {
                _this.model2.prdAcctSetSeq = res.PrdAcctSet.prdAcctSetSeq;
                _this.product.modal2 = _this.model2;
                sessionStorage.setItem("product", JSON.stringify(_this.product));
            });
        }
    };
    AccountingSetupComponent.prototype.loadBasics = function () {
        var _this = this;
        this.isEdit = sessionStorage.getItem('isProductEdit');
        this.product = JSON.parse(sessionStorage.getItem('product'));
        this.productService.getGlAccounts().subscribe(function (res) {
            console.log(res);
            _this.GlAccounts = res;
        }, function (error) {
            console.log(error);
        });
        if (this.product.prdTypKey != 1165) {
            this.breadcrumbProvider.addItem('Associate Product', '/setup/addProduct/associate-product-assignment');
        }
        this.model1 = this.product.modal1 != null || this.product.modal1 != undefined ? this.product.modal1 : new _shared_models_FormAssignment_model__WEBPACK_IMPORTED_MODULE_4__["AccountingSetup"]();
        this.model2 = this.product.modal2 != null || this.product.modal2 != undefined ? this.product.modal2 : new _shared_models_FormAssignment_model__WEBPACK_IMPORTED_MODULE_4__["AccountingSetup"]();
        console.log(this.product);
        // alert(this.product.prdSeq)
        if (this.product.productSeq != undefined) {
            console.log(this.product);
            this.productService.getAccountingSetup(this.product.productSeq).subscribe(function (d) {
                d.forEach(function (a) {
                    if (a.acctCtgryKey === 255) {
                        _this.model1 = a;
                    }
                    if (a.acctCtgryKey === 256) {
                        _this.model2 = a;
                    }
                });
            });
        }
    };
    AccountingSetupComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[0-9-]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AccountingSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accounting-setup',
            template: __webpack_require__(/*! ./accounting-setup.component.html */ "./src/app/pages/setup/products/Add-Product/accounting-setup/accounting-setup.component.html"),
            styles: [__webpack_require__(/*! ./accounting-setup.component.css */ "./src/app/pages/setup/products/Add-Product/accounting-setup/accounting-setup.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _shared_providers_breadcrumb__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AccountingSetupComponent);
    return AccountingSetupComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/add-product.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/add-product.module.ts ***!
  \************************************************************************/
/*! exports provided: AddProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductModule", function() { return AddProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _info_basic_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info/basic-info.component */ "./src/app/pages/setup/products/Add-Product/info/basic-info.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _product_rules_product_rules_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-rules/product-rules.component */ "./src/app/pages/setup/products/Add-Product/product-rules/product-rules.component.ts");
/* harmony import */ var _charges_charges_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charges/charges.component */ "./src/app/pages/setup/products/Add-Product/charges/charges.component.ts");
/* harmony import */ var _accounting_setup_accounting_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accounting-setup/accounting-setup.component */ "./src/app/pages/setup/products/Add-Product/accounting-setup/accounting-setup.component.ts");
/* harmony import */ var _forms_assignment_forms_assignment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms-assignment/forms-assignment.component */ "./src/app/pages/setup/products/Add-Product/forms-assignment/forms-assignment.component.ts");
/* harmony import */ var _AddProduct_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AddProduct.routing */ "./src/app/pages/setup/products/Add-Product/AddProduct.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _documents_assignment_documents_assignment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./documents-assignment/documents-assignment.component */ "./src/app/pages/setup/products/Add-Product/documents-assignment/documents-assignment.component.ts");
/* harmony import */ var _adjustment_sequence_adjustment_sequence_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./adjustment-sequence/adjustment-sequence.component */ "./src/app/pages/setup/products/Add-Product/adjustment-sequence/adjustment-sequence.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _node_modules_angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _business_sector_business_sector_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./business-sector/business-sector.component */ "./src/app/pages/setup/products/Add-Product/business-sector/business-sector.component.ts");
/* harmony import */ var _associate_product_assignment_associate_product_assignment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./associate-product-assignment/associate-product-assignment.component */ "./src/app/pages/setup/products/Add-Product/associate-product-assignment/associate-product-assignment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AddProductModule = /** @class */ (function () {
    function AddProductModule() {
    }
    AddProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
                _AddProduct_routing__WEBPACK_IMPORTED_MODULE_8__["AddProductRouting"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _node_modules_angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"]
            ],
            declarations: [
                _info_basic_info_component__WEBPACK_IMPORTED_MODULE_2__["BasicInfoComponent"],
                _product_rules_product_rules_component__WEBPACK_IMPORTED_MODULE_4__["ProductRulesComponent"],
                _charges_charges_component__WEBPACK_IMPORTED_MODULE_5__["ChargesComponent"],
                _accounting_setup_accounting_setup_component__WEBPACK_IMPORTED_MODULE_6__["AccountingSetupComponent"],
                _forms_assignment_forms_assignment_component__WEBPACK_IMPORTED_MODULE_7__["FormsAssignmentComponent"],
                _documents_assignment_documents_assignment_component__WEBPACK_IMPORTED_MODULE_11__["DocumentsAssignmentComponent"],
                _adjustment_sequence_adjustment_sequence_component__WEBPACK_IMPORTED_MODULE_12__["AdjustmentSequenceComponent"],
                _business_sector_business_sector_component__WEBPACK_IMPORTED_MODULE_15__["BusinessSectorComponent"],
                _associate_product_assignment_associate_product_assignment_component__WEBPACK_IMPORTED_MODULE_16__["AssociateProductAssignment"]
            ],
            exports: []
        })
    ], AddProductModule);
    return AddProductModule;
}());



/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/adjustment-sequence/adjustment-sequence.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/adjustment-sequence/adjustment-sequence.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/adjustment-sequence/adjustment-sequence.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/adjustment-sequence/adjustment-sequence.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <app-bread-crumb></app-bread-crumb>\r\n    <div class=\"content\">\r\n      <h6 class=\"colorBlack\">{{product.prdNm}}</h6>\r\n\r\n      <div class=\"row mt-0\">\r\n        <div class=\"col-sm-6\">\r\n          <h6 class=\"mt-1\">Adjustment Sequence</h6>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n          <thead class=\"thead-light\">\r\n          <tr>\r\n            <th width=\"15%\">Sequence</th>\r\n            <th>Type</th>\r\n            <th></th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let type of allitems\">\r\n            <td><mat-form-field>\r\n              <mat-select placeholder=\"Order:\" [(ngModel)] = \"type.adjOrdr\" \r\n                          name=\"prdGrpSts2\" [errorStateMatcher]=\"matcher\">\r\n                <mat-option *ngFor=\"let i of index\" [value]=\"i\">{{i}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field></td>\r\n            <td>{{type.chargeName}}</td>\r\n            <td></td>\r\n          </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <!-- <div class=\"arrows mb-4\">\r\n        <a (click)=\"onTop()\" class=\"btn btn-border\"><img src=\"../../../../../assets/images/arrow-top.png\" alt=\"\"></a>\r\n        <a (click)=\"onBottom()\" class=\"btn btn-border\"><img src=\"../../../../../assets/images/arrow-down.png\" alt=\"\"></a>\r\n      </div> -->\r\n\r\n      <a class=\"btn  btn-min btn-primary\" routerLink=\"/setup/addProduct/business-sector\">Continue</a>\r\n      <button (click)=\"onSubmit()\" class=\"btn btn-min btn-default\">Save</button>\r\n    </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/adjustment-sequence/adjustment-sequence.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/adjustment-sequence/adjustment-sequence.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AdjustmentSequenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustmentSequenceComponent", function() { return AdjustmentSequenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_providers_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/providers/breadcrumb */ "./src/app/shared/providers/breadcrumb.ts");
/* harmony import */ var _shared_models_FormAssignment_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/models/FormAssignment.model */ "./src/app/shared/models/FormAssignment.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdjustmentSequenceComponent = /** @class */ (function () {
    function AdjustmentSequenceComponent(productService, router, breadcrumbProvider) {
        this.productService = productService;
        this.router = router;
        this.breadcrumbProvider = breadcrumbProvider;
        this.chargeTypes = [];
        this.allAdjustments = [];
        this.allitems = [];
        this.index = [];
        this.indexorig = [];
    }
    AdjustmentSequenceComponent.prototype.ngOnInit = function () {
        this.isEdit = sessionStorage.getItem('isProductEdit');
        this.product = JSON.parse(sessionStorage.getItem('product'));
        console.log(this.product);
        if (this.product.prdTypKey != 1165) {
            this.breadcrumbProvider.addItem('Associate Product', '/setup/addProduct/associate-product-assignment');
        }
        this.loadBasic();
    };
    AdjustmentSequenceComponent.prototype.onSubmit = function () {
        var _this = this;
        // if (this.isEdit === 'true') {
        this.allitems.forEach(function (type, index) {
            console.log(type);
            var adjustment = new _shared_models_FormAssignment_model__WEBPACK_IMPORTED_MODULE_4__["AdjustmnentSequence"]();
            adjustment.adjOrdr = type.adjOrdr;
            adjustment.prdSeq = _this.product.productSeq;
            adjustment.prdChrgSeq = type.prdChrgSeq;
            adjustment.prdChrgAdjOrdrSeq = type.prdChrgAdjOrdrSeq;
            if (type.prdChrgAdjOrdrSeq != undefined) {
                _this.productService.updateAdjustmentSequence(adjustment).subscribe();
            }
            else {
                _this.productService.addAdjustmentSequence(adjustment).subscribe(function (res) {
                    type.prdChrgAdjOrdrSeq = res.PrdChrgAdjOrdr.prdChrgAdjOrdrSeq;
                });
            }
        });
        // } else {
        //   this.allitems.forEach((type, index) => {
        //     console.log(type)
        //     const adjustment = new AdjustmnentSequence();
        //     adjustment.adjOrdr = index;
        //     adjustment.prdSeq = this.product.productSeq;
        //     adjustment.prdChrgSeq = type.prdChrgSeq;
        //     this.productService.addAdjustmentSequence(adjustment).subscribe(res => {
        //       type.prdChrgAdjOrdrSeq = res.PrdChrgAdjOrdr.prdChrgAdjOrdrSeq;
        //     });
        //   });
        // }
    };
    AdjustmentSequenceComponent.prototype.onTop = function () {
        this.allitems.unshift(this.allitems.pop());
    };
    AdjustmentSequenceComponent.prototype.onBottom = function () {
        this.allitems.push(this.allitems.shift());
    };
    AdjustmentSequenceComponent.prototype.loadBasic = function () {
        var _this = this;
        this.productService.getChargesTypes().subscribe(function (typs) {
            _this.chargeTypes = typs;
            // if (this.isEdit === 'true') {
            if (_this.product.productSeq != undefined) {
                _this.productService.getAllAdjustmentSequencesBySeq(_this.product.productSeq).subscribe(function (adbyseq) {
                    _this.allAdjustments = adbyseq;
                    console.log(_this.allAdjustments);
                    if (_this.allAdjustments.length) {
                        _this.productService.getAllCharges(_this.product.productSeq).subscribe(function (d) {
                            var index = -1;
                            d.forEach(function (item, i) {
                                typs.forEach(function (element) {
                                    if (item.chrgTypSeq == element.typSeq) {
                                        if (element.typStr.indexOf("SERVICE CHARGES") >= 0) {
                                            index = i;
                                        }
                                    }
                                });
                            });
                            if (index >= 0) {
                                d.splice(index + 1, 0, { prdChrgSeq: -1, prdSeq: _this.product.productSeq, chargeName: "PRINCIPAL AMOUNT" });
                            }
                            console.log(_this.allitems);
                            _this.productService.getAllFormsAssignments().subscribe(function (forms) {
                                _this.productService.getAllFormsAssignmentsBySeq(_this.product.productSeq).subscribe(function (s) {
                                    // forms.forEach(element => {
                                    //   s.forEach(ele => {
                                    //     // if (element.)
                                    //     if (element.formSeq == ele.formSeq) {
                                    //       if (element.formNm.indexOf("Insurance") >= 0) {
                                    //         this.allitems.push({ prdChrgSeq: 9991, prdSeq: this.product.productSeq, chargeName: "KSZB" })
                                    //       }deleteAdjustmentSequence
                                    //     }
                                    //   });
                                    // });
                                    var inx = -1;
                                    forms.forEach(function (element) {
                                        s.forEach(function (ele) {
                                            // if (element.)
                                            if (element.formSeq == ele.formSeq) {
                                                if (element.formNm.indexOf("Insurance") >= 0) {
                                                    inx = 2;
                                                    d.push({ prdChrgSeq: -2, prdSeq: _this.product.productSeq, chargeName: "KSZB" });
                                                }
                                            }
                                        });
                                    });
                                    var hasIns = false;
                                    _this.allAdjustments.forEach(function (element) {
                                        if (element.prdChrgSeq == -2) {
                                            hasIns = true;
                                            if (inx < 0) {
                                                _this.productService.deleteAdjustmentSequence(element.prdChrgAdjOrdrSeq).subscribe();
                                            }
                                        }
                                        if (element.prdChrgSeq == -1) {
                                        }
                                        d.forEach(function (item) {
                                            if (item.prdChrgSeq == element.prdChrgSeq) {
                                                item.prdChrgAdjOrdrSeq = element.prdChrgAdjOrdrSeq;
                                                item.adjOrdr = element.adjOrdr;
                                            }
                                        });
                                    });
                                    console.log(d);
                                    var i = 0;
                                    d.forEach(function (item) {
                                        i++;
                                        _this.index.push(i);
                                        _this.indexorig.push(i);
                                    });
                                    _this.allitems = d;
                                });
                            });
                        });
                        // this.allAdjustments.forEach(ad => {
                        //   i++;
                        //   this.index.push(i)
                        //   // const itemIndex = this.chargeTypes.findIndex(item => item.typSeq === ad.prdChrgSeq);
                        //   // this.allitems.push({
                        //   //   typSeq: ad.prdChrgSeq, glAcctNum: this.chargeTypes[itemIndex].glAcctNum,
                        //   //   prdChrgAdjOrdrSeq: ad.prdChrgAdjOrdrSeq
                        //   // });
                        // });
                    }
                    else {
                        var i = 0;
                        _this.productService.getAllCharges(_this.product.productSeq).subscribe(function (d) {
                            var index = -1;
                            d.forEach(function (item, i) {
                                typs.forEach(function (element) {
                                    if (item.chrgTypSeq == element.typSeq) {
                                        if (element.typStr.indexOf("SERVICE CHARGES") >= 0) {
                                            index = i;
                                        }
                                    }
                                });
                            });
                            if (index >= 0) {
                                d.splice(index + 1, 0, { prdChrgSeq: -1, prdSeq: _this.product.productSeq, chargeName: "PRINCIPAL AMOUNT" });
                            }
                            _this.productService.getAllFormsAssignments().subscribe(function (forms) {
                                _this.productService.getAllFormsAssignmentsBySeq(_this.product.productSeq).subscribe(function (s) {
                                    _this.allFormsAssignmentSelected = s;
                                    console.log(_this.allFormsAssignmentSelected);
                                    _this.allitems = d;
                                    // s.forEach(element => {
                                    var index = -1;
                                    forms.forEach(function (element) {
                                        s.forEach(function (ele) {
                                            // if (element.)
                                            if (element.formSeq == ele.formSeq) {
                                                if (element.formNm.indexOf("Insurance") >= 0) {
                                                    index = 2;
                                                    _this.allitems.push({ "prdChrgSeq": -2, "prdSeq": _this.product.productSeq, chargeName: "KSZB" });
                                                }
                                            }
                                        });
                                    });
                                    // });
                                    d.forEach(function (item) {
                                        i++;
                                        _this.index.push(i);
                                        if (item.chrgTypSeq == -2) {
                                        }
                                    });
                                    console.log(_this.allitems);
                                });
                            });
                        });
                    }
                    console.log(_this.index);
                });
                // } else {
                //   this.productService.getAllCharges(this.product.productSeq).subscribe(d => {
                //     this.allitems = d; console.log(this.allitems)
                //   });
            }
        });
    };
    AdjustmentSequenceComponent.prototype.orderSelect = function (i) {
        var _this = this;
        console.log(i);
        this.allitems.forEach(function (item) {
            var ind = -1;
            if (item.adjOrdr) {
                _this.index.forEach(function (item2, index) {
                    if (item2 == item.adjOrdr) {
                        ind = index;
                    }
                });
            }
            if (ind >= 0) {
                _this.index.splice(ind, 1);
            }
        });
    };
    AdjustmentSequenceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adjustment-sequence',
            template: __webpack_require__(/*! ./adjustment-sequence.component.html */ "./src/app/pages/setup/products/Add-Product/adjustment-sequence/adjustment-sequence.component.html"),
            styles: [__webpack_require__(/*! ./adjustment-sequence.component.css */ "./src/app/pages/setup/products/Add-Product/adjustment-sequence/adjustment-sequence.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_providers_breadcrumb__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbProvider"]])
    ], AdjustmentSequenceComponent);
    return AdjustmentSequenceComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/associate-product-assignment/associate-product-assignment.component.css":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/associate-product-assignment/associate-product-assignment.component.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/associate-product-assignment/associate-product-assignment.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/associate-product-assignment/associate-product-assignment.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <app-bread-crumb></app-bread-crumb>\r\n    <div class=\"content\">\r\n      <h6 class=\"mt-3\">Products</h6>\r\n      <div class=\"pt-1\">\r\n        <label>Select Product:</label>\r\n      </div>\r\n\r\n      <div class=\"checkbox mb-1\" *ngFor=\"let form of allAssocProducts\">\r\n        <mat-checkbox class=\"example-margin\"\r\n                      name=\"selfPDC\"\r\n                      (change)=\"updateFromAssignment(form)\"\r\n                      [(ngModel)]=\"form.isChecked\">{{form.prdNm}}</mat-checkbox>\r\n      </div>\r\n\r\n      <div class=\"mt-5\">\r\n        <button routerLink=\"/setup/products\" class=\"btn btn-primary btn-min\">Continue</button>\r\n        <!-- <button class=\"btn btn-default\" (click)=\"onSave()\">Save</button> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/associate-product-assignment/associate-product-assignment.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/associate-product-assignment/associate-product-assignment.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: AssociateProductAssignment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociateProductAssignment", function() { return AssociateProductAssignment; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_models_FormAssignment_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/models/FormAssignment.model */ "./src/app/shared/models/FormAssignment.model.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AssociateProductAssignment = /** @class */ (function () {
    function AssociateProductAssignment(productService, router, spinner, toastr) {
        this.productService = productService;
        this.router = router;
        this.spinner = spinner;
        this.toastr = toastr;
        this.allAssocProducts = [];
        this.assocProducts = [];
    }
    AssociateProductAssignment.prototype.ngOnInit = function () {
        this.isEdit = sessionStorage.getItem('isProductEdit');
        this.product = JSON.parse(sessionStorage.getItem('product'));
        this.loadBasics();
    };
    AssociateProductAssignment.prototype.onSubmit = function () {
        this.router.navigate(['setup/products/add/documents-assignment']);
    };
    AssociateProductAssignment.prototype.loadBasics = function () {
        var _this = this;
        this.spinner.show();
        // this.allFormsAssignment = FORMSASSIGNMENT;
        if (this.product.prdTypKey != undefined) {
            this.productService.getProductsByTypSeq(1165).subscribe(function (d) {
                _this.allAssocProducts = d;
                _this.productService.getAllAsocProductRel(_this.product.productSeq).subscribe(function (s) {
                    _this.spinner.hide();
                    _this.assocProducts = s;
                    _this.assocProducts.forEach(function (asoc) {
                        _this.allAssocProducts.forEach(function (product) {
                            if (product.productSeq == asoc.asocPrdSeq) {
                                product.isChecked = true;
                                product.asocPrdRelSeq = asoc.asocPrdRelSeq;
                            }
                        });
                    });
                    // this.allFormsAssignmentSelected.forEach(selected => {
                    //   this.allFormsAssignment.forEach(form => {
                    //     if (selected.prdSeq === form.prdSeq) {
                    //       form.isChecked = true;
                    //       form.prdFormRelSeq = selected.prdFormRelSeq;
                    //     }
                    //   });
                    // });
                });
            });
        }
    };
    AssociateProductAssignment.prototype.updateFromAssignment = function (form) {
        console.log(form);
        if (form.isChecked) {
            var formBody = new _shared_models_FormAssignment_model__WEBPACK_IMPORTED_MODULE_3__["AsocProduct"]();
            formBody.prdSeq = this.product.productSeq;
            formBody.asocPrdSeq = form.productSeq;
            this.productService.addAssocProductAssignment(formBody).subscribe(function (res) {
                form.asocPrdRelSeq = res.rel.asocPrdRelSeq;
            });
        }
        else {
            this.productService.deleteAssocProductAssignment(form.asocPrdRelSeq).subscribe();
        }
    };
    AssociateProductAssignment.prototype.onSave = function () {
        if (this.isEdit === 'true') {
            this.toastr.success('updated successfully', 'Success');
        }
        else {
            this.toastr.success('added successfully', 'Success');
        }
    };
    AssociateProductAssignment = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-associate-product-assignment',
            template: __webpack_require__(/*! ./associate-product-assignment.component.html */ "./src/app/pages/setup/products/Add-Product/associate-product-assignment/associate-product-assignment.component.html"),
            styles: [__webpack_require__(/*! ./associate-product-assignment.component.css */ "./src/app/pages/setup/products/Add-Product/associate-product-assignment/associate-product-assignment.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AssociateProductAssignment);
    return AssociateProductAssignment;
}());



/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/business-sector/business-sector.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/business-sector/business-sector.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/business-sector/business-sector.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/business-sector/business-sector.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <app-bread-crumb></app-bread-crumb>\r\n    <div class=\"content\">\r\n      <h6 class=\"mt-3\">Products</h6>\r\n      <div class=\"pt-1\">\r\n        <label>Select Form:</label>\r\n      </div>\r\n\r\n      <div class=\"checkbox mb-1\" *ngFor=\"let form of allFormsAssignment\">\r\n        <mat-checkbox class=\"example-margin\"\r\n                      name=\"selfPDC\"\r\n                      (change)=\"updateFromAssignment(form)\"\r\n                      [(ngModel)]=\"form.ischecked\">{{form.bizSectNm}}</mat-checkbox>\r\n      </div>\r\n\r\n      <div class=\"mt-5\">\r\n          <a class=\"btn  btn-min btn-primary\" (click)=\"onContinue()\" >Continue</a>\r\n        <button  (click)=\"onSave()\" class=\"btn btn-primary btn-min\">Save</button>\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/business-sector/business-sector.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/business-sector/business-sector.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: BusinessSectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessSectorComponent", function() { return BusinessSectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_FormAssignment_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/models/FormAssignment.model */ "./src/app/shared/models/FormAssignment.model.ts");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_providers_breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/providers/breadcrumb */ "./src/app/shared/providers/breadcrumb.ts");
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
    function BusinessSectorComponent(productService, breadcrumbProvider, router, toastr) {
        this.productService = productService;
        this.breadcrumbProvider = breadcrumbProvider;
        this.router = router;
        this.toastr = toastr;
        this.allFormsAssignment = [];
        this.allFormsAssignmentSelected = [];
    }
    BusinessSectorComponent.prototype.ngOnInit = function () {
        this.isEdit = sessionStorage.getItem('isProductEdit');
        this.product = JSON.parse(sessionStorage.getItem('product'));
        if (this.product.prdTypKey != 1165) {
            this.breadcrumbProvider.addItem('Associate Product', '/setup/addProduct/associate-product-assignment');
        }
        this.loadBasics();
    };
    BusinessSectorComponent.prototype.onSubmit = function () {
        this.router.navigate(['setup/products/add/documents-assignment']);
    };
    BusinessSectorComponent.prototype.loadBasics = function () {
        var _this = this;
        // this.allFormsAssignment = FORMSASSIGNMENT;
        this.productService.getAllBusinessSectors().subscribe(function (d) {
            _this.allFormsAssignment = d;
            if (_this.product.productSeq != undefined) {
                _this.productService.getAllBusinessSectorBySeq(_this.product.productSeq).subscribe(function (s) {
                    _this.allFormsAssignmentSelected = s;
                    _this.allFormsAssignmentSelected.forEach(function (selected) {
                        _this.allFormsAssignment.forEach(function (form) {
                            if (selected.bizSectSeq === form.bizSectSeq) {
                                form.ischecked = true;
                                form.prdBizSectRelSeq = selected.prdBizSectRelSeq;
                            }
                        });
                    });
                });
            }
        });
    };
    BusinessSectorComponent.prototype.updateFromAssignment = function (form) {
        console.log(form);
        if (form.ischecked) {
            var formBody = new _shared_models_FormAssignment_model__WEBPACK_IMPORTED_MODULE_1__["BusinessSector"]();
            formBody.bizSectSeq = form.bizSectSeq;
            formBody.prdSeq = this.product.productSeq;
            this.productService.addBusinessSector(formBody).subscribe(function (res) {
                form.prdBizSectRelSeq = res.PrdBizSectRel.prdBizSectRelSeq;
            });
        }
        else {
            this.productService.deleteBusinessSector(form.prdBizSectRelSeq).subscribe();
        }
    };
    BusinessSectorComponent.prototype.onSave = function () {
        if (this.isEdit === 'true') {
            this.toastr.success('updated successfully', 'Success');
        }
        else {
            this.toastr.success('added successfully', 'Success');
        }
    };
    BusinessSectorComponent.prototype.onContinue = function () {
        if (this.product.prdTypKey == 1165) {
            this.router.navigate(['/setup/products']);
        }
        else {
            this.router.navigate(['/setup/addProduct/associate-product-assignment']);
        }
    };
    BusinessSectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-business-sector',
            template: __webpack_require__(/*! ./business-sector.component.html */ "./src/app/pages/setup/products/Add-Product/business-sector/business-sector.component.html"),
            styles: [__webpack_require__(/*! ./business-sector.component.css */ "./src/app/pages/setup/products/Add-Product/business-sector/business-sector.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _shared_providers_breadcrumb__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], BusinessSectorComponent);
    return BusinessSectorComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/charges/charges.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/charges/charges.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/charges/charges.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/charges/charges.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <app-bread-crumb></app-bread-crumb>\r\n\r\n    <div class=\"content\">\r\n\r\n      <div class=\"modal fade\" id=\"AssignCheque\" role=\"dialog\">\r\n        <div class=\"modal-dialog mymodal\" style=\"top:2%\">\r\n\r\n          <!-- Modal content-->\r\n\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\">Assign Cheque</h5>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                  <thead class=\"thead-light\">\r\n                    <tr>\r\n                      <th><b>Installment #.</b></th>\r\n                      <th><b>Select</b></th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let seg of segregateArray\">\r\n                      <td>{{seg.instNum}}</td>\r\n                      <td>\r\n                        <mat-checkbox class=\"example-margin\" name=\"selfPDC\" (change)=\"addUpdateSegrigate(seg, $event)\"\r\n                          [(ngModel)]=\"seg.ischecked\">\r\n                        </mat-checkbox>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <div class=\"modal-footer smmodal-footer text-center\">\r\n                <button (click)=\"segregateAdded()\" class=\"btn btn-primary btn-min\">Ok</button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <h6 class=\"mt-3\">Products</h6>\r\n      <div class=\"row mt-3\">\r\n        <div class=\"col-sm-6\">\r\n          <h6 class=\"colorBlack\">Charges</h6>\r\n        </div>\r\n        <div class=\"col-sm-6 addBtn\">\r\n          <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" (click)=\"openCharges()\"><i class=\"fa fa-plus\"></i>\r\n            Add</button>\r\n        </div>\r\n        <div class=\"modal fade\" id=\"Charges\" role=\"dialog\">\r\n          <div class=\"modal-dialog big mymodal\">\r\n\r\n            <!-- Modal content-->\r\n            <form (ngSubmit)=\"onSubmitChares()\" [formGroup]=\"chargesForm\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Charges</h5>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <div class=\"cRow\">\r\n                    <!-- <div class=\"cCol2\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput [errorStateMatcher]=\"matcher\"\r\n                           placeholder=\"Charge Name:\" formControlName=\"chargeName\">\r\n                  </mat-form-field>\r\n                </div> -->\r\n                    <div class=\"cCol2\">\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"Charge Type:\" formControlName=\"chrgTypSeq\" name=\"prdGrpSts\"\r\n                          [errorStateMatcher]=\"matcher\">\r\n                          <mat-option *ngFor=\"let edu of chargeTypes\" [value]=\"edu.typSeq\">\r\n                            {{edu.typStr}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"cCol2\">\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"Type:\" formControlName=\"chrgCalcTypKey\" name=\"prdGrpSts2\"\r\n                          [errorStateMatcher]=\"matcher\">\r\n                          <mat-option [value]=\"1\">Flat</mat-option>\r\n                          <mat-option [value]=\"2\">Percent</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"cCol2\">\r\n                      <mat-form-field>\r\n                        <input type=\"text\" name=\"chrgVal\" matInput placeholder=\"Value:\" (keypress)=\"onlyNumbers($event)\"\r\n                          maxlength=\"9\" [errorStateMatcher]=\"matcher\" formControlName=\"chrgVal\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"cCol2\">\r\n                      <mat-form-field>\r\n                        <input type=\"text\" matInput name=\"sgrtInstNum\" placeholder=\"Segregate in Installments:\"\r\n                          maxlength=\"2\" (keypress)=\"onlyNumbers($event)\" [errorStateMatcher]=\"matcher\"\r\n                          formControlName=\"sgrtInstNum\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"cCol2\">\r\n                    </div>\r\n                    <div class=\"cCol2\">\r\n                      <mat-checkbox class=\"example-margin\" name=\"upfrontFlg\" formControlName=\"upfrontFlg\"\r\n                        (change)=\"upFrontChangeListener($event)\">\r\n                        Up Front</mat-checkbox>\r\n                    </div>\r\n                    <div class=\"cCol2\">\r\n                      <mat-checkbox class=\"example-margin\" name=\"adjustRoundingFlg\" formControlName=\"adjustRoundingFlg\">\r\n                        Adjust Rounding</mat-checkbox>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"modal-footer text-center\">\r\n                  <button type=\"submit\" class=\"btn btn-primary btn-min\" [disabled]=\"chargesForm.invalid\">Ok</button>\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n          <thead class=\"thead-light\">\r\n            <tr>\r\n              <th width=14.28%>Charge Type</th>\r\n              <th width=14.28%>Type</th>\r\n              <th width=14.28%>Value</th>\r\n              <th width=14.28%>Upfront</th>\r\n              <th width=20%>Segregate in Installments</th>\r\n              <th width=14.28%>Adjust Rounding</th>\r\n              <th>Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let charge of allitemsCharges\">\r\n              <td>{{getNameByKeyTypes(charge.chrgTypSeq, chargeTypesOrig)}}</td>\r\n              <td>{{(charge.chrgCalcTypKey == 1) ? \"Flat\":'Percent'}}</td>\r\n              <td>\r\n                <button class=\"btn btn-dots\" (click)=\"openProductChargeSlbModal(charge)\"></button>\r\n              </td>\r\n              <td>\r\n                <mat-checkbox class=\"example-margin\" name=\"selfPDC\" [(ngModel)]=\"charge.upfrontFlg\" disabled>\r\n                </mat-checkbox>\r\n              </td>\r\n              <td style=\"padding-left:65px\">\r\n                <a class=\"iconBtn\" data-toggle=\"modal\" (click)=\"openSegregate(charge)\"><i class=\"fa fa-plus\"></i></a>\r\n                <span>{{charge.sgrtInstNum}}</span>\r\n              </td>\r\n\r\n              <td>\r\n                <mat-checkbox class=\"example-margin\" name=\"selfPDC\" [(ngModel)]=\"charge.adjustRoundingFlg\" disabled>\r\n                </mat-checkbox>\r\n              </td>\r\n              <td><a (click)=\"editCharges(charge)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                <a (click)=\"deleteCharges(charge)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                <a href=\"#.\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <a routerLink=\"/setup/addProduct/accounting-setup\" class=\"btn btn-primary\">Continue</a>\r\n      <!-- <button class=\"btn btn-default\">Save</button> -->\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!--- Value Modal--->\r\n  <div class=\"modal fade\" id=\"value\" role=\"dialog\">\r\n    <div class=\"modal-dialog big mymodal\">\r\n\r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\">Value</h5>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\" *ngFor=\"let a of chrgForSlb.slbs;let first = first;let last = last;\">\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"number\" disabled matInput placeholder=\"Min Limit:\" [(ngModel)]=\"a.startLmt\" name=\"startLmt\"\r\n                  #startLmt=\"ngModel\" maxlength=\"5\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"number\" [disabled]=\"!last\" matInput placeholder=\"Max Limit:\" [(ngModel)]=\"a.endLmt\"\r\n                  name=\"endLmt\" #endLmt=\"ngModel\" maxlength=\"5\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <mat-form-field>\r\n                <input type=\"number\" matInput placeholder=\"Value:\" [(ngModel)]=\"a.val\" name=\"val\" #val=\"ngModel\"\r\n                  maxlength=\"5\">\r\n              </mat-form-field>\r\n            </div>\r\n            <!-- <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" matInput placeholder=\"Type:\">\r\n                </mat-form-field>\r\n              </div> -->\r\n            <!-- <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Status:\">\r\n                    <mat-option [value]=\"1\">Active</mat-option>\r\n                    <mat-option [value]=\"2\">Inactive</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div> -->\r\n            <a class=\"btn btn-danger btn-min\" *ngIf=\"!first\" (click)=\"deleteLine(a)\" style=\"color:red !important;\"\r\n              role=\"button\">Remove entry {{a.endLimit}}</a>\r\n\r\n            <a class=\"btn btn-primary btn-min\"\r\n              *ngIf=\"last && a.endLmt!=undefined && a.endLmt!=0 && a.endLmt!=null && a.endLmt>=a.startLmt && a.val!=null && a.val!=undefined\"\r\n              (click)=\"addLine()\" role=\"button\">Add entry</a>\r\n          </div>\r\n          <!-- <a class=\"btn btn-primary btn-min\" *ngIf=\"a.prdChrgSlbSeq != null || a.prdChrgSlbSeq != undefined || a.prdChrgSlbSeq != 0\" (click)=\"saveChrgSlb()\" role=\"button\">Save</a> -->\r\n          <!-- <h6 style=\"color:red\" *ngIf=\"error.length>0\">Provide End Limit First</h6> -->\r\n\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button type=\"button\"\r\n            [disabled]=\" (chrgForSlb.slbs[chrgForSlb.slbs.length-1].endLmt!=undefined || chrgForSlb.slbs[chrgForSlb.slbs.length-1].endLmt!=null) && chrgForSlb.slbs[chrgForSlb.slbs.length-1].endLmt>= chrgForSlb.slbs[chrgForSlb.slbs.length-1].startLmt && (chrgForSlb.slbs[chrgForSlb.slbs.length-1].val == 0 || chrgForSlb.slbs[chrgForSlb.slbs.length-1].val == undefined || chrgForSlb.slbs[chrgForSlb.slbs.length-1].val == null)\"\r\n            class=\"btn btn-primary btn-min\" (click)=\"SlbSubmit()\">Ok</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/charges/charges.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/charges/charges.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ChargesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargesComponent", function() { return ChargesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _shared_models_principleAmount_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/models/principleAmount.model */ "./src/app/shared/models/principleAmount.model.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/helpers/MyErrorStateMatcher.helper */ "./src/app/shared/helpers/MyErrorStateMatcher.helper.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_providers_breadcrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/providers/breadcrumb */ "./src/app/shared/providers/breadcrumb.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ChargesComponent = /** @class */ (function () {
    function ChargesComponent(productService, fb, commonService, breadcrumbProvider, toaster) {
        this.productService = productService;
        this.fb = fb;
        this.commonService = commonService;
        this.breadcrumbProvider = breadcrumbProvider;
        this.toaster = toaster;
        this.allitemsCharges = [];
        this.chargeTypes = [];
        this.edit = false;
        this.matcher = new _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_6__["MyErrorStateMatcher"]();
        this.segregateArray = [];
        this.totalSegs = 0;
        this.isSag = true;
        this.loanTerms = [];
        this.minTerms = 0;
        this.chrgForSlb = { slbs: [{ prdChrgSlbSeq: null, prdChrgSeq: null, endLmt: null, startLmt: null, val: null }] };
        this.repeatArray = [];
    }
    ChargesComponent.prototype.ngOnInit = function () {
        this.product = JSON.parse(sessionStorage.getItem('product'));
        this.isEdit = sessionStorage.getItem('isProductEdit');
        if (this.product.prdTypKey != 1165) {
            this.breadcrumbProvider.addItem('Associate Product', '/setup/addProduct/associate-product-assignment');
        }
        this.chargesForm = this.fb.group({
            chrgTypSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            chrgVal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            upfrontFlg: [''],
            sgrtInstNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            adjustRoundingFlg: [''],
            chargeName: [''],
            prdChrgSeq: [''],
            chrgCalcTypKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.loadBasics();
        this.getallLoanTerms();
    };
    ChargesComponent.prototype.onSubmitChares = function () {
        var _this = this;
        var result = Object.assign({}, this.chargesForm.value);
        $('#Charges').modal('hide');
        result.prdSeq = this.product.prdSeq;
        if (result.adjustRoundingFlg == null) {
            result.adjustRoundingFlg = false;
        }
        if (result.upfrontFlg == null) {
            result.upfrontFlg = false;
        }
        if (!this.edit) {
            result.prdSeq = this.product.productSeq;
            this.productService.addCharges(result).subscribe(function (d) {
                result.prdChrgSeq = d.PrdChrg.prdChrgSeq;
                _this.allitemsCharges.push(result);
            });
        }
        else {
            this.productService.updateCharges(result).subscribe(function (d) {
                var itemIndex = _this.allitemsCharges.findIndex(function (item) { return item.prdChrgSeq === result.prdChrgSeq; });
                _this.allitemsCharges[itemIndex] = result;
                _this.edit = false;
            });
        }
    };
    ChargesComponent.prototype.openCharges = function () {
        this.reEvaluateLov();
        $('#Charges').modal('show');
        this.chargesForm.reset();
    };
    ChargesComponent.prototype.editCharges = function (voucher) {
        console.log(voucher);
        $('#Charges').modal('show');
        this.chargesForm.patchValue(voucher);
        this.chargeTypes.push({ typSeq: voucher.chrgTypSeq, typStr: this.getNameByKeyTypes(voucher.chrgTypSeq, this.chargeTypesOrig) });
        this.edit = true;
    };
    ChargesComponent.prototype.deleteCharges = function (voucher) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Charges amount?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.productService.deleteCharges(voucher.prdChrgSeq).subscribe(function () {
                    _this.allitemsCharges.splice(_this.allitemsCharges.indexOf(voucher), 1);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Deleted!', 'Charges amount values has been deleted.', 'success');
                }, function (error) { return console.log('There was an error: ', error); });
            }
        });
    };
    ChargesComponent.prototype.openSegregate = function (pr) {
        var _this = this;
        $('#AssignCheque').modal('show');
        var segregate = new _shared_models_principleAmount_model__WEBPACK_IMPORTED_MODULE_4__["Segregate"]();
        this.pr = pr;
        segregate.entyTypStr = 'SERVICE CHARGE';
        segregate.sgrtEntySeq = pr.prdChrgSeq;
        // update here
        this.segregateArray = [];
        for (var i = 1; i <= this.minTerms; i++) {
            this.segregateArray.push({ instNum: i, ischecked: false, prdPpalLmtSeq: pr.prdChrgSeq, prdSgrtInstSeq: 0, sgrtEntySeq: pr.prdChrgSeq });
        }
        this.productService.getSegregates(segregate).subscribe(function (d) {
            _this.allsegregates = d;
            _this.allsegregates.forEach(function (seg) {
                _this.totalSegs++;
                _this.segregateArray[seg.instNum - 1].ischecked = true;
                _this.segregateArray[seg.instNum - 1].prdSgrtInstSeq = seg.prdSgrtInstSeq;
            });
        });
    };
    ChargesComponent.prototype.addUpdateSegrigate = function (seg, event) {
        console.log(seg);
        if (seg.ischecked) {
            if (this.totalSegs == this.pr.sgrtInstNum) {
                this.toaster.error("Can not exceed max Segregate Number");
                event.checked = false;
                event.source.checked = false;
                seg.ischecked = false;
                return;
            }
            this.totalSegs++;
            var segrigate = new _shared_models_principleAmount_model__WEBPACK_IMPORTED_MODULE_4__["Segregate"]();
            segrigate.sgrtEntySeq = seg.prdChrgSeq;
            seg.entyTypStr = 'SERVICE CHARGE';
            segrigate.instNum = seg.instNum;
            seg.prdSeq = this.product.productSeq;
            this.productService.addSegregate(seg).subscribe(function (res) {
                console.log(res);
                seg.prdSgrtInstSeq = res.PrdSgrtInst.prdSgrtInstSeq;
            });
        }
        else {
            console.log(seg);
            this.productService.deleteSegregate(seg.prdSgrtInstSeq).subscribe();
        }
    };
    ChargesComponent.prototype.segregateAdded = function () {
        $('#AssignCheque').modal('hide');
        this.segregateArray = [];
    };
    ChargesComponent.prototype.loadBasics = function () {
        var _this = this;
        console.log(this.product.productSeq + "===" + this.product.prdSeq);
        if (this.product.productSeq != undefined) {
            this.productService.getAllCharges(this.product.productSeq).subscribe(function (d) { _this.allitemsCharges = d; _this.reEvaluateLov(); });
        }
        this.productService.getChargesTypes().subscribe(function (d) { _this.chargeTypesOrig = d; _this.chargeTypes = JSON.parse(JSON.stringify(d)); });
    };
    ChargesComponent.prototype.upFrontChangeListener = function (event) {
        if (event.checked) {
            this.isSag = true;
        }
        else {
            this.isSag = false;
        }
    };
    ChargesComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    ChargesComponent.prototype.getNameByKeyTypes = function (key, array) {
        var status = 'not found';
        array.forEach(function (s) {
            if (s.typSeq === key) {
                status = s.typStr;
            }
        });
        return status;
    };
    ChargesComponent.prototype.getallLoanTerms = function () {
        var _this = this;
        if (this.product.productSeq != undefined) {
            this.productService.getAllLoanTerms(this.product.productSeq).subscribe(function (d) {
                _this.allItemsLoanTerms = d;
                _this.commonService.getValuesByGroupName('LOAN TERMS').subscribe(function (d) {
                    _this.loanTerms = d;
                    _this.calculateMin();
                });
            });
        }
    };
    ChargesComponent.prototype.calculateMin = function () {
        var _this = this;
        if (this.allItemsLoanTerms.length)
            this.minTerms = +this.getNameByKey(this.allItemsLoanTerms[0].trmKey, this.loanTerms);
        this.allItemsLoanTerms.forEach(function (obj) {
            if (+_this.minTerms > +_this.getNameByKey(obj.trmKey, _this.loanTerms)) {
                _this.minTerms = +_this.getNameByKey(obj.trmKey, _this.loanTerms);
            }
        });
    };
    ChargesComponent.prototype.getNameByKey = function (key, array) {
        var status = 'not found';
        if (array) {
            array.forEach(function (s) {
                if (s.codeKey === key) {
                    status = s.codeValue;
                }
            });
        }
        return status;
    };
    ChargesComponent.prototype.reEvaluateLov = function () {
        var _this = this;
        this.chargeTypes = JSON.parse(JSON.stringify(this.chargeTypesOrig));
        this.allitemsCharges.forEach(function (item) {
            _this.removeItemFromLOV(item.chrgTypSeq, _this.chargeTypes);
        });
    };
    ChargesComponent.prototype.removeItemFromLOV = function (key, lov) {
        var index = -1;
        for (var i = 0; i < lov.length; i++) {
            if (key == lov[i].typSeq) {
                index = i;
                break;
            }
        }
        if (index >= 0) {
            lov.splice(index, 1);
        }
    };
    ChargesComponent.prototype.openProductChargeSlbModal = function (chrg) {
        this.chrgForSlb = chrg;
        if (this.chrgForSlb.slbs.length <= 0) {
            this.chrgForSlb.slbs.push({ prdChrgSlbSeq: null, prdChrgSeq: this.chrgForSlb['prdChrgSeq'], endLmt: null, startLmt: 0, val: null });
        }
        $('#value').modal('show');
    };
    ChargesComponent.prototype.addLine = function () {
        this.chrgForSlb.slbs.push({ prdChrgSlbSeq: null, prdChrgSeq: this.chrgForSlb['prdChrgSeq'], startLmt: (this.chrgForSlb.slbs.length <= 0) ? null : this.chrgForSlb.slbs[this.chrgForSlb.slbs.length - 1].endLmt + 1, endLmt: null, val: null });
    };
    ChargesComponent.prototype.deleteLine = function (a) {
        this.chrgForSlb.slbs.splice(this.chrgForSlb.slbs.indexOf(a), 1);
        this.chrgForSlb.slbs[this.chrgForSlb.slbs.length - 1].endLmt = null;
    };
    ChargesComponent.prototype.SlbSubmit = function () {
        console.log(this.chrgForSlb);
    };
    ChargesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-charges',
            template: __webpack_require__(/*! ./charges.component.html */ "./src/app/pages/setup/products/Add-Product/charges/charges.component.html"),
            styles: [__webpack_require__(/*! ./charges.component.css */ "./src/app/pages/setup/products/Add-Product/charges/charges.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _shared_providers_breadcrumb__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbProvider"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], ChargesComponent);
    return ChargesComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/documents-assignment/documents-assignment.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/documents-assignment/documents-assignment.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/documents-assignment/documents-assignment.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/documents-assignment/documents-assignment.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <app-bread-crumb></app-bread-crumb>\r\n    <div class=\"content\">\r\n      <h6 class=\"mt-3\">Products</h6>\r\n      <div class=\"pt-1\">\r\n        <label>Select Form:</label>\r\n      </div>\r\n\r\n      <div class=\"checkbox mb-1\" *ngFor=\"let form of allFormsAssignment\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-3\">\r\n            <mat-checkbox class=\"example-margin\" name=\"selfPDC\" (change)=\"updateFromAssignment(form)\" [(ngModel)]=\"form.ischecked\">{{form.docNm}}</mat-checkbox>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <mat-checkbox class=\"example-margin\" name=\"required\" (change)=\"updateDocumentMndatryFlg(form)\" [(ngModel)]=\"form.mndtryFlg\"><span style=\"color:red;\">*</span> Required</mat-checkbox>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!--<div class=\"checks mt-2\" *ngFor=\"let form1 of allFormsAssignment\">-->\r\n      <!--<div class=\"pt-1\" *ngIf=\"form1.docCtgryKey === documents[0].codeKey\">-->\r\n      <!--<label><b> {{documents[0].codeValue}}:</b></label>-->\r\n      <!--</div>-->\r\n      <!--<div class=\"checkbox mb-1 mr-2 d-inline-block\">-->\r\n      <!--<div class=\"custom-control custom-checkbox\">-->\r\n      <!--<input type=\"checkbox\" id=\"checkbox3\" name=\"coBorrower\" class=\"custom-control-input\">-->\r\n      <!--<label class=\"custom-control-label\" for=\"checkbox3\"> CNIC</label>-->\r\n      <!--</div>-->\r\n      <!--</div>-->\r\n      <!--<div class=\"checkbox mb-1 mr-2  d-inline-block\">-->\r\n      <!--<div class=\"custom-control custom-checkbox\">-->\r\n      <!--<input type=\"checkbox\" id=\"checkbox4\" name=\"coBorrower\" class=\"custom-control-input\">-->\r\n      <!--<label class=\"custom-control-label\" for=\"checkbox4\">Photo</label>-->\r\n      <!--</div>-->\r\n      <!--</div>-->\r\n      <!--</div>-->\r\n\r\n\r\n      <div class=\"mt-5\">\r\n        <button routerLink=\"/setup/addProduct/adjustment-sequence\" class=\"btn btn-primary btn-min\">Continue</button>\r\n        <!-- <button class=\"btn btn-default\" (click)=\"onSave()\">Save</button> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/documents-assignment/documents-assignment.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/documents-assignment/documents-assignment.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: DocumentsAssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsAssignmentComponent", function() { return DocumentsAssignmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_models_FormAssignment_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/models/FormAssignment.model */ "./src/app/shared/models/FormAssignment.model.ts");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_providers_breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/providers/breadcrumb */ "./src/app/shared/providers/breadcrumb.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DocumentsAssignmentComponent = /** @class */ (function () {
    function DocumentsAssignmentComponent(productService, router, commonService, breadcrumbProvider, toastr) {
        this.productService = productService;
        this.router = router;
        this.commonService = commonService;
        this.breadcrumbProvider = breadcrumbProvider;
        this.toastr = toastr;
        this.allFormsAssignment = [];
        this.allFormsAssignmentSelected = [];
        this.documents = [];
    }
    DocumentsAssignmentComponent.prototype.ngOnInit = function () {
        this.isEdit = sessionStorage.getItem('isProductEdit');
        this.product = JSON.parse(sessionStorage.getItem('product'));
        if (this.product.prdTypKey != 1165) {
            this.breadcrumbProvider.addItem('Associate Product', '/setup/addProduct/associate-product-assignment');
        }
        this.loadBasics();
    };
    DocumentsAssignmentComponent.prototype.onSubmit = function () {
        this.router.navigate(['setup/products/add/documents-assignment']);
    };
    DocumentsAssignmentComponent.prototype.loadBasics = function () {
        // this.allFormsAssignment = FORMSASSIGNMENT;
        var _this = this;
        this.commonService.getValuesByGroupName('DOCUMENTATION CATEGORY').subscribe(function (d) { return _this.documents = d; });
        this.productService.getAllDocumentsAssignment().subscribe(function (d) {
            _this.allFormsAssignment = d;
            if (_this.product.productSeq != undefined) {
                _this.productService.getAllDocumentsBySeq(_this.product.productSeq).subscribe(function (s) {
                    _this.allFormsAssignmentSelected = s;
                    _this.allFormsAssignmentSelected.forEach(function (selected) {
                        _this.allFormsAssignment.forEach(function (form) {
                            if (selected.docSeq === form.docSeq) {
                                form.ischecked = true;
                                form.mndtryFlg = selected.mndtryFlg;
                                form.prdDocRelSeq = selected.prdDocRelSeq;
                            }
                        });
                    });
                });
            }
        });
    };
    DocumentsAssignmentComponent.prototype.updateFromAssignment = function (form) {
        console.log(form);
        if (form.ischecked) {
            var formBody = new _shared_models_FormAssignment_model__WEBPACK_IMPORTED_MODULE_3__["ProductDocuments"]();
            formBody.docSeq = form.docSeq;
            formBody.prdSeq = this.product.productSeq;
            this.productService.addProductDocument(formBody).subscribe(function (res) {
                form.prdDocRelSeq = res.PrdDocRel.prdDocRelSeq;
            });
        }
        else {
            this.productService.deleteProductDocument(form.prdDocRelSeq).subscribe();
        }
    };
    DocumentsAssignmentComponent.prototype.updateDocumentMndatryFlg = function (form) {
        console.log(form);
        form.prdSeq = this.product.productSeq;
        // updateProductDocumentRel
        this.productService.updateProductDocumentRel(form).subscribe();
    };
    DocumentsAssignmentComponent.prototype.onSave = function () {
        if (this.isEdit === 'true') {
            this.toastr.success('updated successfully', 'Success');
        }
        else {
            this.toastr.success('added successfully', 'Success');
        }
    };
    DocumentsAssignmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documents-assignment',
            template: __webpack_require__(/*! ./documents-assignment.component.html */ "./src/app/pages/setup/products/Add-Product/documents-assignment/documents-assignment.component.html"),
            styles: [__webpack_require__(/*! ./documents-assignment.component.css */ "./src/app/pages/setup/products/Add-Product/documents-assignment/documents-assignment.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            _shared_providers_breadcrumb__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbProvider"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], DocumentsAssignmentComponent);
    return DocumentsAssignmentComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/forms-assignment/forms-assignment.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/forms-assignment/forms-assignment.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/forms-assignment/forms-assignment.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/forms-assignment/forms-assignment.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <app-bread-crumb></app-bread-crumb>\r\n    <div class=\"content\">\r\n      <h6 class=\"mt-3\">Products</h6>\r\n      <div class=\"pt-1\">\r\n        <label>Select Form:</label>\r\n      </div>\r\n\r\n      <div class=\"checkbox mb-1\" *ngFor=\"let form of allFormsAssignment\">\r\n        <mat-checkbox class=\"example-margin\"\r\n                      name=\"selfPDC\"\r\n                      (change)=\"openOrderModal(form)\"\r\n                      [(ngModel)]=\"form.ischecked\">{{form.formNm}}</mat-checkbox>\r\n\r\n\r\n                      \r\n                      <input *ngIf=\"form.ischecked \" matInput type=\"text\" (keypress)=\"onlyNumbers($event, form)\" style=\" margin-left: 1%; width: 3%; \"   required [(ngModel)]=\"form.formSortOrdr\" id=\"order\" name=\"order\"\r\n                    placeholder=\"Order\" >\r\n\r\n                    <button *ngIf=\"form.ischecked && !form.isSaved\" type=\"button\" class=\"btn btn-primary btn-min\" (click)=\"updateFromAssignment(form)\" style=\" margin-left: 2%; border-radius: 20px; min-width: 2px !important; \">Save</button>\r\n      </div>\r\n\r\n      <div class=\"mt-5\">\r\n        <button routerLink=\"/setup/addProduct/documents-assignment\" class=\"btn btn-primary btn-min\" >Continue</button>\r\n        <!-- <button class=\"btn btn-default\" (click)=\"onSave()\">Save</button> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!-- <div class=\"modal fade\" id=\"setorder\" role=\"dialog\">\r\n    <div class=\"modal-dialog mymodal\">\r\n      <div class=\"modal-content\">\r\n        <form (ngSubmit)=\"updateFromAssignment(form)\" #addInsuranceMemberForm=\"ngForm\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\">Set Form Sort Order</h5>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"cRow\">\r\n              <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <input matInput type=\"text\" (keypress)=\"onlyNumbers($event)\" required [(ngModel)]=\"form.sortOrder\" id=\"order\" name=\"order\"\r\n                    placeholder=\"Name\" >\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer text-center\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-min\" >Ok</button>\r\n            <button type=\"button\" class=\"btn btn-primary btn-min\" (click)=\"cancelClicked()\" data-dismiss=\"modal\">Cancel</button>\r\n\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n\r\n\r\n\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/forms-assignment/forms-assignment.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/forms-assignment/forms-assignment.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: FormsAssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsAssignmentComponent", function() { return FormsAssignmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_models_FormAssignment_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/models/FormAssignment.model */ "./src/app/shared/models/FormAssignment.model.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_providers_breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/providers/breadcrumb */ "./src/app/shared/providers/breadcrumb.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormsAssignmentComponent = /** @class */ (function () {
    function FormsAssignmentComponent(productService, router, breadcrumbProvider, toastr) {
        this.productService = productService;
        this.router = router;
        this.breadcrumbProvider = breadcrumbProvider;
        this.toastr = toastr;
        this.allFormsAssignment = [];
        this.allFormsAssignmentSelected = [];
    }
    FormsAssignmentComponent.prototype.ngOnInit = function () {
        this.isEdit = sessionStorage.getItem('isProductEdit');
        this.product = JSON.parse(sessionStorage.getItem('product'));
        if (this.product.prdTypKey != 1165) {
            this.breadcrumbProvider.addItem('Associate Product', '/setup/addProduct/associate-product-assignment');
        }
        this.loadBasics();
    };
    FormsAssignmentComponent.prototype.onSubmit = function () {
        this.router.navigate(['setup/products/add/documents-assignment']);
    };
    FormsAssignmentComponent.prototype.loadBasics = function () {
        var _this = this;
        // this.allFormsAssignment = FORMSASSIGNMENT;
        if (this.product.productSeq != undefined) {
            this.productService.getAllFormsAssignments().subscribe(function (d) {
                _this.allFormsAssignment = d;
                _this.productService.getAllFormsAssignmentsBySeq(_this.product.productSeq).subscribe(function (s) {
                    _this.allFormsAssignmentSelected = s;
                    _this.allFormsAssignmentSelected.forEach(function (selected) {
                        _this.allFormsAssignment.forEach(function (form) {
                            if (selected.formSeq === form.formSeq) {
                                form.ischecked = true;
                                form.prdFormRelSeq = selected.prdFormRelSeq;
                                form.formSortOrdr = selected.formSortOrdr;
                                form.isSaved = true;
                            }
                        });
                    });
                });
            });
        }
    };
    FormsAssignmentComponent.prototype.updateFromAssignment = function (form) {
        console.log(form);
        if (form.formSortOrdr == 0 || form.formSortOrdr == undefined || form.formSortOrdr == null) {
            this.toastr.error('Please provide sort Order', 'Error');
            return;
        }
        if (form.ischecked) {
            var formBody = new _shared_models_FormAssignment_model__WEBPACK_IMPORTED_MODULE_3__["FormAssignmentBody"]();
            formBody.formSeq = form.formSeq;
            formBody.prdSeq = this.product.productSeq;
            formBody.formSortOrdr = form.formSortOrdr;
            this.productService.addFormAssignment(formBody).subscribe(function (res) {
                form.prdFormRelSeq = res.PrdFormRel.prdFormRelSeq;
                form.isSaved = true;
            });
        }
        else {
            this.productService.deleteFormAssignment(form.prdFormRelSeq).subscribe();
        }
    };
    FormsAssignmentComponent.prototype.onSave = function () {
        if (this.isEdit === 'true') {
            this.toastr.success('updated successfully', 'Success');
        }
        else {
            this.toastr.success('added successfully', 'Success');
        }
    };
    FormsAssignmentComponent.prototype.openOrderModal = function (form) {
        if (!form.ischecked) {
            this.productService.deleteFormAssignment(form.prdFormRelSeq).subscribe(function (res) {
                form.isSaved = false;
                form.formSortOrdr = null;
            });
        }
    };
    FormsAssignmentComponent.prototype.onlyNumbers = function (event, form) {
        form.isSaved = false;
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    FormsAssignmentComponent.prototype.cancelClicked = function () {
        this.form.ischecked = false;
        $('#setorder').modal('hide');
    };
    FormsAssignmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forms-assignment',
            template: __webpack_require__(/*! ./forms-assignment.component.html */ "./src/app/pages/setup/products/Add-Product/forms-assignment/forms-assignment.component.html"),
            styles: [__webpack_require__(/*! ./forms-assignment.component.css */ "./src/app/pages/setup/products/Add-Product/forms-assignment/forms-assignment.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_providers_breadcrumb__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbProvider"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], FormsAssignmentComponent);
    return FormsAssignmentComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/info/basic-info.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/info/basic-info.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/info/basic-info.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/info/basic-info.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <app-bread-crumb></app-bread-crumb>\r\n\r\n    <div class=\"content\">\r\n      <h6 class=\"mt-3\">Products</h6>\r\n      <form (ngSubmit)=\"onSubmit()\" #infoForm=\"ngForm\">\r\n        <div class=\"cRow\">\r\n          <!-- <div class=\"cCol1\" [hidden]=\"isEdit !== 'true'\"> -->\r\n          <div class=\"cCol1\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"ID:\" type=\"text\" id=\"id\" [(ngModel)]=\"product.prdId\" name=\"id\"\r\n                [disabled]=\"isEdit == 'true'\" #id=\"ngModel\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"cCol3-col\">\r\n            <mat-form-field>\r\n              <input type=\"text\" matInput id=\"name\" required [(ngModel)]=\"product.prdNm\" name=\"name\" #name=\"ngModel\"\r\n                placeholder=\"Product Name:\">\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"cRow\">\r\n          <div class=\"cCol1 \">\r\n            <br>\r\n            <mat-radio-group [(ngModel)]=\"product.irrFlg\" name=\"irrFlg\">\r\n              <mat-radio-button class=\"w-50\" *ngFor=\"let disFlag of disFlags\" (change)=\"irrChange()\"\r\n                [value]=\"disFlag.value\">{{disFlag.name}}\r\n              </mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n          <div class=\"cCol1\">\r\n            <mat-form-field>\r\n              <input type=\"text\" (keypress)=\"onlyNumberWithPoint($event)\" maxlength=\"10\" [disabled]=\"!product.irrFlg\"\r\n                matInput placeholder=\"Irr Value\" id=\"irrValue\" [(ngModel)]=\"product.irrVal\" name=\"irrValue\"\r\n                #irrValue=\"ngModel\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"cCol1 text-center\">\r\n            <br>\r\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"product.mltLoanFlg\" name=\"multiLoans\">\r\n              Multi Credit:</mat-checkbox>\r\n          </div>\r\n          <div class=\"cCol1 text-center\">\r\n            <br>\r\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"product.dailyAccuralFlg\" name=\"multiLoans\">\r\n              Daily Arrural:</mat-checkbox>\r\n          </div>\r\n        </div>\r\n        <div class=\"cRow\">\r\n          <div class=\"cCol1 \">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Product type:\" [(ngModel)]=\"product.prdTypKey\" name=\"prdTypKey\" required\r\n                [errorStateMatcher]=\"matcher\" pattern=\"^[1-9]\\d*$\">\r\n                <mat-option *ngFor=\"let edu of activities\" [value]=\"edu.codeKey\">\r\n                  {{edu.codeValue}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"cCol1\">\r\n            <mat-form-field>\r\n              <input type=\"text\" matInput placeholder=\"Rounding Scale:\" id=\"roundingScale\"\r\n                [(ngModel)]=\"product.rndngScl\" name=\"roundingScale\" maxlength=\"3\" #roundingScale=\"ngModel\"\r\n                (keypress)=\"onlyNumbers($event)\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"cCol1\">\r\n            <mat-form-field>\r\n              <input type=\"text\" (keypress)=\"onlyNumbers($event)\" maxlength=\"3\" matInput\r\n                placeholder=\"Rounding Adjustment:\" id=\"roundingAdjustment\" [(ngModel)]=\"product.rndngAdj\"\r\n                name=\"roundingAdjustment\" #roundingScale=\"ngModel\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"cCol1\">\r\n            <mat-form-field>\r\n              <input type=\"text\" (keypress)=\"onlyNumbers($event)\" maxlength=\"3\" matInput placeholder=\"Number of PDC:\"\r\n                id=\"pdcNum\" [(ngModel)]=\"product.pdcNum\" name=\"pdcNum\" #pdcNum=\"ngModel\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"cCol1\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Status:\" [(ngModel)]=\"product.prdStsKey\" name=\"prdStsKey\" required\r\n                [errorStateMatcher]=\"matcher\" pattern=\"^[1-9]\\d*$\">\r\n                <mat-option *ngFor=\"let edu of status\" [value]=\"edu.codeKey\">\r\n                  {{edu.codeValue}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"cRow\">\r\n          <div class=\"cCol6\">\r\n            <mat-form-field>\r\n              <textarea matInput placeholder=\"Comments:\" id=\"comments\" [(ngModel)]=\"product.prdCmnt\" name=\"comments\"\r\n                #comments=\"ngModel\"></textarea>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"cRow mb-md-5\">\r\n\r\n          <!-- <div class=\"cCol1\">\r\n          <mat-form-field>\r\n            <input type=\"text\" (keypress)=\"onlyNumbers($event)\" placeholder=\"Funded By:\" matInput id=\"fundedBy\"\r\n                   [(ngModel)]=\"product.fndByKey\" name=\"fundedBy\"\r\n                   #fundedBy=\"ngModel\">\r\n          </mat-form-field>\r\n        </div> -->\r\n\r\n        </div>\r\n        <button (click)=\"onContinue()\" [disabled]=\"!infoForm.valid\" routerLinkActive=\"active\"\r\n          class=\"btn btn-primary\">Continue</button>\r\n        <button type=\"Submit\" [disabled]=\"!formSaved\" class=\"btn btn-default\">Save</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</main>"

/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/info/basic-info.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/info/basic-info.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BasicInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInfoComponent", function() { return BasicInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_Product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/models/Product.model */ "./src/app/shared/models/Product.model.ts");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_mocks_mock_common_codes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/mocks/mock_common_codes */ "./src/app/shared/mocks/mock_common_codes.ts");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/helpers/MyErrorStateMatcher.helper */ "./src/app/shared/helpers/MyErrorStateMatcher.helper.ts");
/* harmony import */ var _shared_models_productGroup_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/models/productGroup.model */ "./src/app/shared/models/productGroup.model.ts");
/* harmony import */ var _shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/models/REF_CODE_GRP_KEYS.mocks */ "./src/app/shared/models/REF_CODE_GRP_KEYS.mocks.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_providers_breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/providers/breadcrumb */ "./src/app/shared/providers/breadcrumb.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var BasicInfoComponent = /** @class */ (function () {
    function BasicInfoComponent(router, productService, route, commonService, breadcrumbProvider, toaster) {
        this.router = router;
        this.productService = productService;
        this.route = route;
        this.commonService = commonService;
        this.breadcrumbProvider = breadcrumbProvider;
        this.toaster = toaster;
        this.disFlags = [{ name: 'IRR', value: true }, { name: 'Flat', value: false }];
        this.matcher = new _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_6__["MyErrorStateMatcher"]();
        this.productsList = _shared_mocks_mock_common_codes__WEBPACK_IMPORTED_MODULE_4__["PRODUCTS"];
        this.pr = new _shared_models_Product_model__WEBPACK_IMPORTED_MODULE_1__["Product"]();
    }
    BasicInfoComponent.prototype.ngOnInit = function () {
        this.loadBasics();
        this.isEdit = sessionStorage.getItem('isProductEdit'); // productGroup
        this.formSaved = this.isEdit;
        console.log(this.formSaved);
        this.productGroup = new _shared_models_productGroup_model__WEBPACK_IMPORTED_MODULE_7__["ProductGroup"](JSON.parse(sessionStorage.getItem('productGroup')));
        this.product = JSON.parse(sessionStorage.getItem('product'));
        // this.breadcrumbProvider.addItem('Associate Product', '/setup/addProduct/associate-product-assignment');
        if (this.product.prdTypKey != 1165) {
            this.breadcrumbProvider.addItem('Associate Product', '/setup/addProduct/associate-product-assignment');
        }
        // if (this.isEdit === 'true') {
        //   console.log('editing');
        //   this.product = new Product(JSON.parse(sessionStorage.getItem('product')));
        //   console.log(this.product);
        // } else {
        //   this.product = JSON.parse(sessionStorage.getItem('product'));
        // }
        this.product.prdGrpSeq = this.productGroup.prdGrpSeq;
        // this.product = this.productService.product;
    };
    BasicInfoComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.product.prdSeq == undefined || this.product.prdSeq == null || this.product.prdSeq == 0) {
            this.product.productSeq = this.product.prdSeq;
            this.product.productName = this.product.prdNm;
            console.log(this.product);
            this.productService.addProduct(this.product).subscribe(function (res) {
                _this.product.productSeq = res.Product.prdSeq;
                sessionStorage.setItem('product', JSON.stringify(_this.product));
                _this.formSaved = true;
            }, function (error) {
                _this.toaster.error(error.error.error);
                console.log(error);
            });
        }
        else {
            this.productService.updateProduct(this.product).subscribe(function (res) {
                sessionStorage.setItem('product', JSON.stringify(_this.product));
            }, function (error) {
                _this.toaster.error(error.error.error);
                console.log(error);
            });
        }
    };
    BasicInfoComponent.prototype.add = function () {
        // this.product.name.trim();
        // this.product.fundedBy.trim();
        // this.product.currency.trim();
        // if (!this.product.name) { return; }
        // if (!this.product.fundedBy) { return; }
        // if (!this.product.id) { return; }
        // if (!this.product.currency) { return; }
        // this.productService.getProduct(this.product)
        //   .subscribe(p => console.log(p));
    };
    BasicInfoComponent.prototype.loadBasics = function () {
        var _this = this;
        this.commonService.getValues(_shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_8__["PRODUCT_TYPE"]).subscribe(function (d) { return _this.activities = d; });
        this.commonService.getValues(_shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_8__["STATUS"]).subscribe(function (d) { return _this.status = d; });
    };
    BasicInfoComponent.prototype.onContinue = function () {
        this.router.navigate(['setup/addProduct/rules']);
    };
    BasicInfoComponent.prototype.onlyLetters = function (event) {
        var pattern = /[a-zA-Z ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    BasicInfoComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    BasicInfoComponent.prototype.onlyNumberWithPoint = function (event) {
        var pattern = /[0-9.]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    BasicInfoComponent.prototype.irrChange = function () {
        if (this.product.irrFlg)
            this.product.irrVal = null;
    };
    BasicInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-info',
            template: __webpack_require__(/*! ./basic-info.component.html */ "./src/app/pages/setup/products/Add-Product/info/basic-info.component.html"),
            styles: [__webpack_require__(/*! ./basic-info.component.css */ "./src/app/pages/setup/products/Add-Product/info/basic-info.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _shared_providers_breadcrumb__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbProvider"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]])
    ], BasicInfoComponent);
    return BasicInfoComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/product-rules/product-rules.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/product-rules/product-rules.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/product-rules/product-rules.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/product-rules/product-rules.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <app-bread-crumb></app-bread-crumb>\r\n    <div class=\"content\">\r\n      <div class=\"modal fade\" id=\"AssignCheque\" role=\"dialog\">\r\n        <div class=\"modal-dialog mymodal\" style=\"top:2%\">\r\n\r\n          <!-- Modal content-->\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\">Assign Cheque</h5>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                  <thead class=\"thead-light\">\r\n                  <tr>\r\n                    <th><b>Installment #.</b></th>\r\n                    <th><b>Select</b></th>\r\n                  </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                  <tr *ngFor=\"let seg of segregateArray\">\r\n                    <td>{{seg.instNum}}</td>\r\n                    <td>\r\n                      <mat-checkbox class=\"example-margin\"\r\n                                    name=\"selfPDC\"\r\n                                    (change)=\"addUpdateSegrigate(seg, $event)\"\r\n                                    [(ngModel)]=\"seg.ischecked\">\r\n                      </mat-checkbox>\r\n                    </td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <div class=\"modal-footer smmodal-footer text-center\">\r\n                <button (click)=\"segregateAdded()\" class=\"btn btn-primary btn-min\"  >Ok</button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n        <div class=\"modal fade\" id=\"AssignRule\" role=\"dialog\">\r\n          <div class=\"modal-dialog fullpop mymodal\" style=\"top:10%\">\r\n\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Rules</h5>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <thead class=\"thead-light\">\r\n                    <tr>\r\n                      <th>Rule ID</th>\r\n                      <th>Rule Name</th>\r\n                      <th>Rule Category</th>\r\n                      <th class=\"text-left\">Condition</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let rule of basicRules\">\r\n                      <th>\r\n                        <mat-radio-group (change)=\"onRuleChange(rule.rulSeq)\" [(ngModel)]=\"rule.ruleSeq\" name=\"rulSeq\" required>\r\n                          <mat-radio-button class=\"w-50\" [value]=\"rule.rulSeq\"></mat-radio-button>\r\n                        </mat-radio-group>\r\n                      </th>\r\n                      <td>{{rule.rulNm}}</td>\r\n                      <td>{{getNameByKey(rule.rulCtgryKey, ruleCategories)}}</td>\r\n                      <td class=\"text-left\">{{rule.rulCrtraStr}}</td>\r\n                    </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button (click)=\"updateRule()\" class=\"btn btn-primary btn-min\">Ok</button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      <h6 class=\"mt-3\">Products</h6>\r\n      <div class=\"row mt-3\">\r\n        <div class=\"col-sm-6\">\r\n          <h6 class=\"colorBlack\">Credit Terms </h6>\r\n        </div>\r\n        <div class=\"col-sm-6 addBtn mt-6\">\r\n          <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" (click)=\"openLoanTerm()\">\r\n            <i class=\"fa fa-plus\"></i>Add</button>\r\n        </div>\r\n        <div class=\"modal fade\" id=\"LoanTermst\" role=\"dialog\">\r\n          <div class=\"modal-dialog mymodal big\">\r\n\r\n            <!-- Modal content-->\r\n            <form [formGroup]=\"loanTermForm\" (ngSubmit)=\"onSubmitLoanTerms()\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Credit Terms</h5>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <div class=\"cRow\">\r\n                    <div class=\"cCol3\">\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"Terms:\" formControlName=\"trmKey\"\r\n                                    name=\"status\" [errorStateMatcher]=\"matcher\">\r\n                          <mat-option *ngFor=\"let edu of loanTerms\" [value]=\"edu.codeKey\">\r\n                            {{edu.codeValue}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"cCol3\">\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"Installment Frequency:\" formControlName=\"pymtFreqKey\"\r\n                                    name=\"status\" [errorStateMatcher]=\"matcher\">\r\n                          <mat-option *ngFor=\"let edu of frequency\" [value]=\"edu.codeKey\">\r\n                            {{edu.codeValue}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"modal-footer text-center\">\r\n                  <button type=\"submit\" class=\"btn btn-primary btn-min\">Ok</button>\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-responsive mb-md-4\">\r\n        <table class=\"table\">\r\n          <thead class=\"thead-light\">\r\n          <tr >\r\n            <th>Terms</th>\r\n            <th>Installment Frequency</th>\r\n            <th>Rule</th>\r\n            <th>Action</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let loanTerm of allItemsLoanTerms\">\r\n            <td>{{getNameByKey(loanTerm.trmKey, loanTerms)}}</td>\r\n            <td>{{getNameByKey(loanTerm.pymtFreqKey, frequency)}}</td>\r\n            <td>\r\n              <a class=\"iconBtn\"  data-toggle=\"modal\" (click)=\"openAssignRule(loanTerm, 1)\"><i class=\"fa fa-plus\"></i></a>\r\n              {{getRuleNameBySeq(loanTerm.rulSeq)}}\r\n            </td>\r\n            <td><a (click)=\"editLoanTerm(loanTerm)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n              <a (click)=\"deleteLoanTerm(loanTerm)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n              <a class=\"iconBtn\"><i class=\"fa fa-history\"></i></a></td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"row mt-3\">\r\n        <div class=\"col-sm-6\">\r\n          <h6 class=\"colorBlack\">Principle Amount</h6>\r\n        </div>\r\n        <div class=\"col-sm-6 addBtn\">\r\n          <button class=\"btn btn-primary btn-sm\" (click)=\"openPrincipleAmount()\">\r\n            <i class=\"fa fa-plus\"></i> Add</button>\r\n        </div>\r\n        <div class=\"modal fade\" id=\"principleAmount\" role=\"dialog\">\r\n          <div class=\"modal-dialog mymodal big\">\r\n\r\n            <!-- Modal content-->\r\n            <form  [formGroup]=\"principleAmountForm\" (ngSubmit)=\"onSubmitPrincipleAmount()\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Principle Amount</h5>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <div class=\"cRow\">\r\n                    <div class=\"cCol3-col\">\r\n                      <mat-form-field>\r\n                        <input matInput placeholder=\"Min Amount:\" type=\"text\" (keypress)=\"onlyNumbers($event)\" maxlength=\"10\"\r\n                               formControlName=\"minAmt\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"cCol3-col\">\r\n                      <mat-form-field>\r\n                        <input matInput placeholder=\"Max Amount:\" type=\"text\" (keypress)=\"onlyNumbers($event)\" maxlength=\"10\"\r\n                               formControlName=\"maxAmt\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"cCol3-col\">\r\n                      <mat-form-field>\r\n                        <input matInput placeholder=\"Segregate in Installments:\" type=\"text\" maxlength=\"2\" (keypress)=\"onlyNumbers($event)\"\r\n                               formControlName=\"sgrtInstNum\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"modal-footer text-center\">\r\n                  <button type=\"submit\" class=\"btn btn-primary btn-min\" >Ok</button>\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-responsive mb-md-3\">\r\n        <table class=\"table\">\r\n          <thead class=\"thead-light\">\r\n          <tr>\r\n            <th>Min Amount</th>\r\n            <th>Max Amount</th>\r\n            <th>Segregate in Installment</th>\r\n            <th>Rule</th>\r\n            <th>Action</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let pr of allItemsPrincipleAmounts\">\r\n            <td>{{pr.minAmt}}</td>\r\n            <td>{{pr.maxAmt}}</td>\r\n            <td style=\"padding-left:65px\">\r\n              <a href=\"#\" class=\"iconBtn\"  data-toggle=\"modal\" (click)=\"openSegregate(pr)\"><i class=\"fa fa-plus\"></i></a>\r\n              <span>{{pr.sgrtInstNum}}</span>\r\n            </td>\r\n            <td>\r\n              <a href=\"#\" class=\"iconBtn\"  data-toggle=\"modal\"  (click)=\"openAssignRule(pr, 2)\"><i class=\"fa fa-plus\"></i></a>\r\n              {{getRuleNameBySeq(pr.rulSeq)}}</td>\r\n            <td><a (click)=\"editPrincipleAmount(pr)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n              <a (click)=\"deletePrincipleAmount(pr)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n              <a href=\"#.\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a></td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"row mt-3\">\r\n        <div class=\"col-sm-6\">\r\n          <h6 class=\"colorBlack\">Advance Rules</h6>\r\n        </div>\r\n        <div class=\"col-sm-6 addBtn\">\r\n          <button class=\"btn btn-primary btn-sm\" (click)=\"openAdvRules()\">\r\n            <i class=\"fa fa-plus\"></i> Select Rules</button>\r\n        </div>\r\n        <div class=\"modal fade\" id=\"AdvanceRules\" role=\"dialog\">\r\n          <div class=\"modal-dialog fullpop mymodal\">\r\n\r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Advance Rules</h5>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <thead class=\"thead-light\">\r\n                    <tr >\r\n                      <th>Rule ID</th>\r\n                      <th>Rule Name</th>\r\n                      <th>Rule Category</th>\r\n                      <th class=\"text-left\">Condition</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let rule of advRules\">\r\n                      <td><input type=\"checkbox\" [ngModel]=\"rule.isAdded\"  (change)=\"addProductRule(rule)\" class=\"check1\"> {{rule.rulNm}}</td>\r\n                      <td>{{rule.rulNm}}</td>\r\n                      <td>{{getNameByKey(rule.rulCtgryKey, ruleCategories)}}</td>\r\n                      <td class=\"text-left\">{{rule.rulCrtraStr}}</td>\r\n                    </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Ok</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n      </div>\r\n      <div class=\"table-responsive mb-md-5\">\r\n        <table class=\"table\">\r\n          <thead class=\"thead-light\">\r\n          <tr>\r\n            <th>Rule ID</th>\r\n            <th>Rule Name</th>\r\n            <th>Rule Category</th>\r\n            <th class=\"text-left\">Condition</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let ruleProduct of allProductRules\">\r\n            <td>{{ruleProduct.rulSeq}}</td>\r\n            <td>{{ruleProduct.rulNm}}</td>\r\n            <td>{{ruleProduct.rulCtgryKey}}</td>\r\n            <!-- <td>{{getNameByKey(ruleProduct.rulCtgryKey, ruleCategories)}}</td> -->\r\n            <td class=\"text-left\">{{ruleProduct.rulCmnt}}</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <a routerLinkActive=\"active\" routerLink=\"/setup/addProduct/charges\" class=\"btn btn-primary\">Continue</a>\r\n      <!-- <button class=\"btn btn-default\">Save</button> -->\r\n    </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/setup/products/Add-Product/product-rules/product-rules.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/setup/products/Add-Product/product-rules/product-rules.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProductRulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRulesComponent", function() { return ProductRulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/helpers/MyErrorStateMatcher.helper */ "./src/app/shared/helpers/MyErrorStateMatcher.helper.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_models_principleAmount_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/models/principleAmount.model */ "./src/app/shared/models/principleAmount.model.ts");
/* harmony import */ var _shared_models_productRules_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/models/productRules.model */ "./src/app/shared/models/productRules.model.ts");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/models/REF_CODE_GRP_KEYS.mocks */ "./src/app/shared/models/REF_CODE_GRP_KEYS.mocks.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_providers_breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/providers/breadcrumb */ "./src/app/shared/providers/breadcrumb.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProductRulesComponent = /** @class */ (function () {
    function ProductRulesComponent(productService, fb, commonService, breadcrumbProvider, toaster) {
        this.productService = productService;
        this.fb = fb;
        this.commonService = commonService;
        this.breadcrumbProvider = breadcrumbProvider;
        this.toaster = toaster;
        this.matcher = new _shared_helpers_MyErrorStateMatcher_helper__WEBPACK_IMPORTED_MODULE_2__["MyErrorStateMatcher"]();
        this.allItemsPrincipleAmounts = [];
        this.allItemsLoanTerms = [];
        this.editPrinciple = false;
        this.editloan = false;
        this.allitemsRules = [];
        this.ruleCategories = [];
        this.loanTerms = [];
        this.allProductRules = [];
        this.segregateArray = [];
        this.totalSegs = 0;
        this.basicRules = [];
        this.advRules = [];
    }
    ProductRulesComponent.prototype.ngOnInit = function () {
        this.isEdit = sessionStorage.getItem('isProductEdit');
        this.editPrinciple = false;
        this.editloan = false;
        this.product = JSON.parse(sessionStorage.getItem('product'));
        if (this.product.prdTypKey != 1165) {
            this.breadcrumbProvider.addItem('Associate Product', '/setup/addProduct/associate-product-assignment');
        }
        console.log(this.product);
        this.principleAmountForm = this.fb.group({
            minAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            maxAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            sgrtInstNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            prdSeq: [''],
            rulSeq: [''],
            prdPpalLmtSeq: [''],
        });
        this.loanTermForm = this.fb.group({
            trmKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pymtFreqKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            prdSeq: [''],
            rulSeq: [''],
            prdTrmSeq: [''],
        });
        this.loadBasics();
        this.getallLoanTerms();
        this.getAllPrincipleAmount();
    };
    // principle amount
    ProductRulesComponent.prototype.onSubmitPrincipleAmount = function () {
        var _this = this;
        var result = Object.assign({}, this.principleAmountForm.value);
        console.log(result);
        if (+result.minAmt > +result.maxAmt) {
            this.toaster.error("Min Amount can not exceed Max Amount");
            return;
        }
        $('#principleAmount').modal('hide');
        result.prdSeq = this.product.productSeq;
        if (result.rulSeq == null) {
            result.rulSeq = 30;
        }
        if (!this.editPrinciple) {
            this.productService.addPrincipleAmount(result).subscribe(function (d) {
                _this.getAllPrincipleAmount();
            });
        }
        else {
            this.productService.updatePrincipleAmount(result).subscribe(function (d) {
                var itemIndex = _this.allItemsPrincipleAmounts.findIndex(function (item) { return item.prdPpalLmtSeq === result.prdPpalLmtSeq; });
                _this.allItemsPrincipleAmounts[itemIndex] = result;
                _this.editPrinciple = false;
            });
        }
    };
    ProductRulesComponent.prototype.calculateMin = function () {
        var _this = this;
        if (this.allItemsLoanTerms.length)
            this.minTerms = +this.getNameByKey(this.allItemsLoanTerms[0].trmKey, this.loanTerms);
        this.allItemsLoanTerms.forEach(function (obj) {
            if (+_this.minTerms > +_this.getNameByKey(obj.trmKey, _this.loanTerms)) {
                _this.minTerms = +_this.getNameByKey(obj.trmKey, _this.loanTerms);
            }
        });
    };
    ProductRulesComponent.prototype.openPrincipleAmount = function () {
        this.calculateMin();
        $('#principleAmount').modal('show');
        this.principleAmountForm.reset();
    };
    ProductRulesComponent.prototype.editPrincipleAmount = function (voucher) {
        $('#principleAmount').modal('show');
        this.principleAmountForm.patchValue(voucher);
        this.editPrinciple = true;
    };
    ProductRulesComponent.prototype.loadAdvRules = function () {
        var _this = this;
        if (this.product.productSeq != undefined) {
            this.productService.getAllRulesBySeq(this.product.productSeq).subscribe(function (d) {
                _this.allProductRules = d;
                _this.allProductRules.forEach(function (pr) {
                    _this.advRules.forEach(function (item) {
                        if (item.rulSeq == pr.rulSeq) {
                            pr.isAdded = true;
                            item.isAdded = true;
                        }
                    });
                    // this.allitemsRules[this.allitemsRules.indexOf(pr)].isAdded = true;
                });
            });
        }
    };
    ProductRulesComponent.prototype.openAdvRules = function () {
        this.loadAdvRules();
        $('#AdvanceRules').modal('show');
    };
    ProductRulesComponent.prototype.deletePrincipleAmount = function (voucher) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this principle amount?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.productService.deletePrinicipleAmount(voucher.prdPpalLmtSeq).subscribe(function () {
                    _this.allItemsPrincipleAmounts.splice(_this.allItemsPrincipleAmounts.indexOf(voucher), 1);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Deleted!', 'principle amount values has been deleted.', 'success');
                }, function (error) { return console.log('There was an error: ', error); });
            }
        });
    };
    // loan terms
    ProductRulesComponent.prototype.onSubmitLoanTerms = function () {
        var _this = this;
        var result = Object.assign({}, this.loanTermForm.value);
        $('#LoanTermst').modal('hide');
        result.prdSeq = this.product.productSeq;
        if (result.rulSeq == null) {
            result.rulSeq = 30;
        }
        if (!this.editloan) {
            this.productService.addLoanTerm(result).subscribe(function (d) {
                _this.getallLoanTerms();
            });
        }
        else {
            this.productService.updateLoanTerm(result).subscribe(function (d) {
                _this.editloan = false;
                _this.getallLoanTerms();
            });
        }
    };
    ProductRulesComponent.prototype.openLoanTerm = function () {
        $('#LoanTermst').modal('show');
        this.loanTermForm.reset();
    };
    ProductRulesComponent.prototype.editLoanTerm = function (voucher) {
        $('#LoanTermst').modal('show');
        this.loanTermForm.patchValue(voucher);
        this.editloan = true;
    };
    ProductRulesComponent.prototype.deleteLoanTerm = function (voucher) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Loan term?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.productService.deleteLoanTerm(voucher.prdTrmSeq).subscribe(function () {
                    _this.allItemsLoanTerms.splice(_this.allItemsLoanTerms.indexOf(voucher), 1);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Deleted!', 'loan term values has been deleted.', 'success');
                }, function (error) { return console.log('There was an error: ', error); });
            }
        });
    };
    ProductRulesComponent.prototype.updateRule = function () {
        var _this = this;
        $('#AssignRule').modal('hide');
        if (this.ruleType === 1) {
            this.productService.updateLoanTerm(this.loanTermCurrent).subscribe(function (d) {
                // const itemIndex = this.allItemsLoanTerms.indexOf(this.loanTermCurrent);
                // this.allItemsLoanTerms[itemIndex] = this.loanTermCurrent;
                _this.editloan = false;
                _this.getallLoanTerms();
            });
        }
        else if (this.ruleType === 2) {
            this.productService.updatePrincipleAmount(this.principleAmountCurrent).subscribe(function (d) {
                _this.getAllPrincipleAmount();
                _this.editPrinciple = false;
            });
        }
    };
    ProductRulesComponent.prototype.openAssignRule = function (current, number) {
        $('#AssignRule').modal('show');
        console.log(current);
        console.log(this.allitemsRules);
        console.log(this.allProductRules);
        this.ruleType = number;
        if (number === 1) {
            this.loanTermCurrent = current;
            this.basicRules.forEach(function (element) {
                element.ruleSeq = undefined;
                if (current.rulSeq != undefined && current.rulSeq != null) {
                    if (element.rulSeq == current.rulSeq) {
                        element.ruleSeq = current.rulSeq;
                    }
                }
            });
        }
        else if (number === 2) {
            // this.allProductRules
            this.basicRules.forEach(function (element) {
                element.ruleSeq = undefined;
                if (current.rulSeq != undefined && current.rulSeq != null) {
                    if (element.rulSeq == current.rulSeq) {
                        element.ruleSeq = current.rulSeq;
                    }
                }
            });
            this.principleAmountCurrent = current;
        }
    };
    ProductRulesComponent.prototype.onRuleChange = function (value) {
        console.log(value);
        if (this.ruleType === 1) {
            this.loanTermCurrent.rulSeq = value;
        }
        else if (this.ruleType === 2) {
            this.principleAmountCurrent.rulSeq = value;
        }
    };
    ProductRulesComponent.prototype.addProductRule = function (rule) {
        var _this = this;
        rule.isAdded = !rule.isAdded;
        var ad = new _shared_models_productRules_model__WEBPACK_IMPORTED_MODULE_6__["AdvanceRules"]();
        ad.rulSeq = rule.rulSeq;
        ad.prdSeq = this.product.productSeq;
        // const seq = this.advRules[this.advRules.findIndex(item => item.rulSeq === ad.rulSeq)].prdAdvRulSeq;
        console.log(rule);
        if (rule.isAdded) {
            this.productService.addProductRule(ad).subscribe(function (res) {
                rule.prdAdvRulSeq = res.PrdAdvRul.prdAdvRulSeq;
                _this.loadAdvRules();
            });
        }
        else {
            this.allProductRules.forEach(function (rul) {
                if (rul.rulSeq == rule.rulSeq) {
                    _this.productService.deleteProductRule(rul.prdAdvRulSeq).subscribe(function (res) {
                        _this.loadAdvRules();
                    });
                }
            });
        }
    };
    ProductRulesComponent.prototype.openSegregate = function (pr) {
        var _this = this;
        $('#AssignCheque').modal('show');
        var segregate = new _shared_models_principleAmount_model__WEBPACK_IMPORTED_MODULE_5__["Segregate"]();
        this.pr = pr;
        segregate.entyTypStr = 'PRINCIPLE';
        segregate.sgrtEntySeq = pr.prdPpalLmtSeq;
        // update here
        this.segregateArray = [];
        for (var i = 1; i <= this.minTerms; i++) {
            this.segregateArray.push({ instNum: i, ischecked: false, prdPpalLmtSeq: pr.prdPpalLmtSeq, prdSgrtInstSeq: 0, sgrtEntySeq: pr.prdPpalLmtSeq });
        }
        this.totalSegs = 0;
        this.productService.getSegregates(segregate).subscribe(function (d) {
            _this.allsegregates = d;
            _this.allsegregates.forEach(function (seg) {
                _this.totalSegs++;
                _this.segregateArray[seg.instNum - 1].ischecked = true;
                _this.segregateArray[seg.instNum - 1].prdSgrtInstSeq = seg.prdSgrtInstSeq;
            });
        });
    };
    ProductRulesComponent.prototype.segregateAdded = function () {
        $('#AssignCheque').modal('hide');
        this.segregateArray = [];
    };
    ProductRulesComponent.prototype.addUpdateSegrigate = function (seg, event) {
        // console.log(this.segregateArray);
        // console.log(this.totalSegs);
        // // if(this.)
        // console.log(event)
        // console.log(seg);
        if (seg.ischecked) {
            if (this.totalSegs == this.pr.sgrtInstNum) {
                this.toaster.error("Can not exceed max Segregate Number");
                event.checked = false;
                event.source.checked = false;
                seg.ischecked = false;
                return;
            }
            this.totalSegs++;
            var segrigate = new _shared_models_principleAmount_model__WEBPACK_IMPORTED_MODULE_5__["Segregate"]();
            segrigate.sgrtEntySeq = seg.prdPpalLmtSeq;
            segrigate.entyTypStr = 'PRINCIPLE';
            segrigate.instNum = seg.instNum;
            this.productService.addSegregate(segrigate).subscribe();
        }
        else {
            console.log(seg);
            this.productService.deleteSegregate(seg.prdSgrtInstSeq).subscribe();
        }
    };
    ProductRulesComponent.prototype.getRuleNameBySeq = function (seq) {
        var status = 'not found';
        if (this.allitemsRules) {
            this.allitemsRules.forEach(function (s) {
                if (s.rulSeq === seq) {
                    status = s.rulNm;
                }
            });
        }
        return status;
    };
    ProductRulesComponent.prototype.getNameByKey = function (key, array) {
        var status = 'not found';
        if (this.allitemsRules) {
            array.forEach(function (s) {
                if (s.codeKey === key) {
                    status = s.codeValue;
                }
            });
        }
        return status;
    };
    ProductRulesComponent.prototype.loadBasics = function () {
        var _this = this;
        this.commonService.getValuesByGroupName('RULE CATEGORY').subscribe(function (d) { return _this.ruleCategories = d; });
        this.commonService.getValuesByGroupName('LOAN TERMS').subscribe(function (d) { return _this.loanTerms = d; });
        this.commonService.getValues(_shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_8__["LOAN_FREQUENCY"]).subscribe(function (d) { return _this.frequency = d; });
        this.productService.getAllRules().subscribe(function (d) {
            _this.allitemsRules = d;
            _this.basicRules = [];
            _this.advRules = [];
            d.forEach(function (item) {
                if (item.rulCtgryKey == 1) {
                    _this.basicRules.push(item);
                }
                else if (item.rulCtgryKey == 2) {
                    _this.advRules.push(item);
                }
            });
        });
        // if (this.isEdit === 'true') {
        console.log('i am editing you');
        this.getAllPrincipleAmount();
        this.getallLoanTerms();
        if (this.product.productSeq != undefined) {
            this.productService.getAllRulesBySeq(this.product.productSeq).subscribe(function (d) { return _this.allProductRules = d; });
            if (this.allProductRules) {
                this.allProductRules.forEach(function (pr) {
                    _this.allitemsRules[_this.allitemsRules.indexOf(pr)].isAdded = true;
                });
            }
        }
        // }
    };
    ProductRulesComponent.prototype.getallLoanTerms = function () {
        var _this = this;
        if (this.product.productSeq != undefined) {
            this.productService.getAllLoanTerms(this.product.productSeq).subscribe(function (d) {
                _this.allItemsLoanTerms = d;
                _this.calculateMin();
            });
        }
    };
    ProductRulesComponent.prototype.getAllPrincipleAmount = function () {
        var _this = this;
        if (this.product.productSeq != undefined) {
            this.productService.getAllPrincipleAmounts(this.product.productSeq).subscribe(function (d) {
                _this.allItemsPrincipleAmounts = d;
                // this.allItemsPrincipleAmounts.forEach((pr, index) => {
                //   pr.sgrtInstNum = index;
                // });
            });
        }
    };
    ProductRulesComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    ProductRulesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-rules',
            template: __webpack_require__(/*! ./product-rules.component.html */ "./src/app/pages/setup/products/Add-Product/product-rules/product-rules.component.html"),
            styles: [__webpack_require__(/*! ./product-rules.component.css */ "./src/app/pages/setup/products/Add-Product/product-rules/product-rules.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _shared_providers_breadcrumb__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbProvider"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]])
    ], ProductRulesComponent);
    return ProductRulesComponent;
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

/***/ "./src/app/shared/models/REF_CODE_GRP_KEYS.mocks.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/models/REF_CODE_GRP_KEYS.mocks.ts ***!
  \**********************************************************/
/*! exports provided: REGION_Typo, HEALTH_INSURANCE_PLAN, PAYMENT_MODE, EXPENSE_TYPE, INCOME_TYPE, GENDER, MARITAL_STATUS, EDUCATION, OCCUPATION, RESIDENCE, FORMS_ASSIGNMENT, SECTOR, ACTIVITY, BUSINESS_RUNNER, BUSINESS_OWNERSHIP, STATUS, QUESTION_TYPE, DOCUMENTATION_CATEGORY, DOCUMENTATION_TYPE, NATURE_OF_DISABILITY, RELATIONSHIP_TYPE, FUNDED_BY, LOAN_TERMS, LOAN_FREQUENCY, CHARGES_CALCULATION_TYPE, COLLECTION_TYPE, CHARGES_TYPE, ACCOUNT_CATEGORY, ADDRESS_TYPE, INCOME_CATEGORY, EXPENSE_CATEGORY, CURRENCY_CODE, FUNCTION, DATE_FIELDS, BRANCH_TYPE, HOUSEHOLD_EXPENSE, SECONDARY_INCOME, LOAN_UTILIZATION_EXPENSE, LOAN_UTILIZATION_EXPENSE_MEAT, LOAN_UTILIZATION_EXPENSE_DAIRY, LOAN_UTILIZATION_EXPENSE_SCHOOL, INSURANCE_RELATION, BREAD_EARNER, PAYMENT_FREQUENCY, TERMS, SCHOOL_BUILDING_OWNERSHIP, SECOND_INCOME_SOURCE, KSZB_EXCLUSION_CATEGORY, HOUSEHOLD_EXPENSES, HOUSEHOLD_EXPENSES_FOR_LIVESTOCK, BUSINESS_EXPENSES, SCHOOL_EXPENSES, LIVESTOCK_EXPENSES_DAIRY, LIVESTOCK_EXPENSES_MEAT, BUSINESS_LOCATION, RELATION_TYPE_NOMINEE, RELATION_TYPE_COBORROWER_KSS, RELATION_TYPE_COBORROWER, INCOME_SOURCE_RELATIVE, SCHOOL_PRINCIPAL, LIVESTOCK_ANML_TYP, LIVESTOCK_ANML_KND, SCHOOL_OWNERSHIP, SCHOOL_TYPE, SCHOOL_GRADE_LEVEL, SCHOOL_MEDIUM, SCHOOL_AREA, KSS_SECONDARY_INCOME, INCOME_SOURCE_SCHOOL_OTHER, LOAN_UTILIZATION_TYPE_SCHOOL, DOCUMENT_VERIFICATION, SCHOOL_ASSET, LOAN_PURPOSE, HEALTH_INSURANCE_EXCLUSION_CATEGORY, RELATIVE_RELATION_KEL, PRODUCT_TYPE, BANKS, APPLICATION_STATUS, BOOLEAN, DEFAULT_BOOLEAN, SCHOOL_LEVEL, REJECTION_REASON_CODE, RELATIONSHIP_WITH_CLIENT, RELATION_WITH_RESCHEDULING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGION_Typo", function() { return REGION_Typo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEALTH_INSURANCE_PLAN", function() { return HEALTH_INSURANCE_PLAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_MODE", function() { return PAYMENT_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPENSE_TYPE", function() { return EXPENSE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCOME_TYPE", function() { return INCOME_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENDER", function() { return GENDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARITAL_STATUS", function() { return MARITAL_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDUCATION", function() { return EDUCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OCCUPATION", function() { return OCCUPATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESIDENCE", function() { return RESIDENCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORMS_ASSIGNMENT", function() { return FORMS_ASSIGNMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECTOR", function() { return SECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIVITY", function() { return ACTIVITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUSINESS_RUNNER", function() { return BUSINESS_RUNNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUSINESS_OWNERSHIP", function() { return BUSINESS_OWNERSHIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_TYPE", function() { return QUESTION_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCUMENTATION_CATEGORY", function() { return DOCUMENTATION_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCUMENTATION_TYPE", function() { return DOCUMENTATION_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NATURE_OF_DISABILITY", function() { return NATURE_OF_DISABILITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELATIONSHIP_TYPE", function() { return RELATIONSHIP_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FUNDED_BY", function() { return FUNDED_BY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAN_TERMS", function() { return LOAN_TERMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAN_FREQUENCY", function() { return LOAN_FREQUENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARGES_CALCULATION_TYPE", function() { return CHARGES_CALCULATION_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_TYPE", function() { return COLLECTION_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARGES_TYPE", function() { return CHARGES_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_CATEGORY", function() { return ACCOUNT_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDRESS_TYPE", function() { return ADDRESS_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCOME_CATEGORY", function() { return INCOME_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPENSE_CATEGORY", function() { return EXPENSE_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCY_CODE", function() { return CURRENCY_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FUNCTION", function() { return FUNCTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_FIELDS", function() { return DATE_FIELDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRANCH_TYPE", function() { return BRANCH_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOUSEHOLD_EXPENSE", function() { return HOUSEHOLD_EXPENSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECONDARY_INCOME", function() { return SECONDARY_INCOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAN_UTILIZATION_EXPENSE", function() { return LOAN_UTILIZATION_EXPENSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAN_UTILIZATION_EXPENSE_MEAT", function() { return LOAN_UTILIZATION_EXPENSE_MEAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAN_UTILIZATION_EXPENSE_DAIRY", function() { return LOAN_UTILIZATION_EXPENSE_DAIRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAN_UTILIZATION_EXPENSE_SCHOOL", function() { return LOAN_UTILIZATION_EXPENSE_SCHOOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSURANCE_RELATION", function() { return INSURANCE_RELATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAD_EARNER", function() { return BREAD_EARNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_FREQUENCY", function() { return PAYMENT_FREQUENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERMS", function() { return TERMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHOOL_BUILDING_OWNERSHIP", function() { return SCHOOL_BUILDING_OWNERSHIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECOND_INCOME_SOURCE", function() { return SECOND_INCOME_SOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KSZB_EXCLUSION_CATEGORY", function() { return KSZB_EXCLUSION_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOUSEHOLD_EXPENSES", function() { return HOUSEHOLD_EXPENSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOUSEHOLD_EXPENSES_FOR_LIVESTOCK", function() { return HOUSEHOLD_EXPENSES_FOR_LIVESTOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUSINESS_EXPENSES", function() { return BUSINESS_EXPENSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHOOL_EXPENSES", function() { return SCHOOL_EXPENSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVESTOCK_EXPENSES_DAIRY", function() { return LIVESTOCK_EXPENSES_DAIRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVESTOCK_EXPENSES_MEAT", function() { return LIVESTOCK_EXPENSES_MEAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUSINESS_LOCATION", function() { return BUSINESS_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELATION_TYPE_NOMINEE", function() { return RELATION_TYPE_NOMINEE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELATION_TYPE_COBORROWER_KSS", function() { return RELATION_TYPE_COBORROWER_KSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELATION_TYPE_COBORROWER", function() { return RELATION_TYPE_COBORROWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCOME_SOURCE_RELATIVE", function() { return INCOME_SOURCE_RELATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHOOL_PRINCIPAL", function() { return SCHOOL_PRINCIPAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVESTOCK_ANML_TYP", function() { return LIVESTOCK_ANML_TYP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVESTOCK_ANML_KND", function() { return LIVESTOCK_ANML_KND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHOOL_OWNERSHIP", function() { return SCHOOL_OWNERSHIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHOOL_TYPE", function() { return SCHOOL_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHOOL_GRADE_LEVEL", function() { return SCHOOL_GRADE_LEVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHOOL_MEDIUM", function() { return SCHOOL_MEDIUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHOOL_AREA", function() { return SCHOOL_AREA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KSS_SECONDARY_INCOME", function() { return KSS_SECONDARY_INCOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCOME_SOURCE_SCHOOL_OTHER", function() { return INCOME_SOURCE_SCHOOL_OTHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAN_UTILIZATION_TYPE_SCHOOL", function() { return LOAN_UTILIZATION_TYPE_SCHOOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCUMENT_VERIFICATION", function() { return DOCUMENT_VERIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHOOL_ASSET", function() { return SCHOOL_ASSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAN_PURPOSE", function() { return LOAN_PURPOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEALTH_INSURANCE_EXCLUSION_CATEGORY", function() { return HEALTH_INSURANCE_EXCLUSION_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELATIVE_RELATION_KEL", function() { return RELATIVE_RELATION_KEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_TYPE", function() { return PRODUCT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BANKS", function() { return BANKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLICATION_STATUS", function() { return APPLICATION_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOLEAN", function() { return BOOLEAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BOOLEAN", function() { return DEFAULT_BOOLEAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHOOL_LEVEL", function() { return SCHOOL_LEVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REJECTION_REASON_CODE", function() { return REJECTION_REASON_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELATIONSHIP_WITH_CLIENT", function() { return RELATIONSHIP_WITH_CLIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELATION_WITH_RESCHEDULING", function() { return RELATION_WITH_RESCHEDULING; });
var REGION_Typo = '0001';
var HEALTH_INSURANCE_PLAN = '0002';
var PAYMENT_MODE = '0003';
var EXPENSE_TYPE = '0004';
var INCOME_TYPE = '0005';
var GENDER = '0006';
var MARITAL_STATUS = '0007';
var EDUCATION = '0008';
var OCCUPATION = '0009';
var RESIDENCE = '0010';
var FORMS_ASSIGNMENT = '0011';
var SECTOR = '0012';
var ACTIVITY = '0013';
var BUSINESS_RUNNER = '0014';
var BUSINESS_OWNERSHIP = '0015';
var STATUS = '0016';
var QUESTION_TYPE = '0017';
var DOCUMENTATION_CATEGORY = '0018';
var DOCUMENTATION_TYPE = '0019';
var NATURE_OF_DISABILITY = '0020';
var RELATIONSHIP_TYPE = '0021';
var FUNDED_BY = '0022';
var LOAN_TERMS = '0023';
var LOAN_FREQUENCY = '0024';
var CHARGES_CALCULATION_TYPE = '0025';
var COLLECTION_TYPE = '0026';
var CHARGES_TYPE = '0027';
var ACCOUNT_CATEGORY = '0028';
var ADDRESS_TYPE = '0029';
var INCOME_CATEGORY = '0030';
var EXPENSE_CATEGORY = '0031';
var CURRENCY_CODE = '0033';
var FUNCTION = '0034';
var DATE_FIELDS = '0035';
var BRANCH_TYPE = '0036';
var HOUSEHOLD_EXPENSE = '0061';
var SECONDARY_INCOME = '0062';
var LOAN_UTILIZATION_EXPENSE = '0063';
var LOAN_UTILIZATION_EXPENSE_MEAT = '0388';
var LOAN_UTILIZATION_EXPENSE_DAIRY = '0063';
var LOAN_UTILIZATION_EXPENSE_SCHOOL = '0102';
var INSURANCE_RELATION = '0065';
var BREAD_EARNER = '0066';
var PAYMENT_FREQUENCY = '0067';
var TERMS = '0068';
var SCHOOL_BUILDING_OWNERSHIP = '0081';
var SECOND_INCOME_SOURCE = '0082';
var KSZB_EXCLUSION_CATEGORY = '0083';
var HOUSEHOLD_EXPENSES = '0084';
var HOUSEHOLD_EXPENSES_FOR_LIVESTOCK = '0061';
var BUSINESS_EXPENSES = '0085';
var SCHOOL_EXPENSES = '0086';
var LIVESTOCK_EXPENSES_DAIRY = '0087';
var LIVESTOCK_EXPENSES_MEAT = '0389';
var BUSINESS_LOCATION = '0088';
var RELATION_TYPE_NOMINEE = '0089';
var RELATION_TYPE_COBORROWER_KSS = '0090';
var RELATION_TYPE_COBORROWER = '0091';
var INCOME_SOURCE_RELATIVE = '0092';
var SCHOOL_PRINCIPAL = '0093';
var LIVESTOCK_ANML_TYP = '379';
var LIVESTOCK_ANML_KND = '378';
var SCHOOL_OWNERSHIP = '0094';
var SCHOOL_TYPE = '0095';
var SCHOOL_GRADE_LEVEL = '0096';
var SCHOOL_MEDIUM = '0097';
var SCHOOL_AREA = '0098';
var KSS_SECONDARY_INCOME = '0099';
var INCOME_SOURCE_SCHOOL_OTHER = '0100';
var LOAN_UTILIZATION_TYPE_SCHOOL = '0102';
var DOCUMENT_VERIFICATION = '0103';
var SCHOOL_ASSET = '0104';
var LOAN_PURPOSE = '0105';
var HEALTH_INSURANCE_EXCLUSION_CATEGORY = '0032';
var RELATIVE_RELATION_KEL = '0198';
var PRODUCT_TYPE = '161';
var BANKS = '178';
var APPLICATION_STATUS = '106';
var BOOLEAN = '0221';
var DEFAULT_BOOLEAN = '0394';
var SCHOOL_LEVEL = '0222';
var REJECTION_REASON_CODE = '0298';
var RELATIONSHIP_WITH_CLIENT = '02783';
var RELATION_WITH_RESCHEDULING = '02784';


/***/ }),

/***/ "./src/app/shared/models/principleAmount.model.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/models/principleAmount.model.ts ***!
  \********************************************************/
/*! exports provided: PrincipleAmount, LoanTerms, Segregate, SegregateBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipleAmount", function() { return PrincipleAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanTerms", function() { return LoanTerms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Segregate", function() { return Segregate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegregateBody", function() { return SegregateBody; });
var PrincipleAmount = /** @class */ (function () {
    function PrincipleAmount() {
    }
    return PrincipleAmount;
}());

var LoanTerms = /** @class */ (function () {
    function LoanTerms() {
    }
    return LoanTerms;
}());

var Segregate = /** @class */ (function () {
    function Segregate() {
    }
    return Segregate;
}());

var SegregateBody = /** @class */ (function () {
    function SegregateBody() {
    }
    return SegregateBody;
}());



/***/ }),

/***/ "./src/app/shared/models/productRules.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/productRules.model.ts ***!
  \*****************************************************/
/*! exports provided: ProductRules, AdvanceRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRules", function() { return ProductRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceRules", function() { return AdvanceRules; });
var ProductRules = /** @class */ (function () {
    function ProductRules() {
        this.isAdded = false;
    }
    return ProductRules;
}());

var AdvanceRules = /** @class */ (function () {
    function AdvanceRules() {
        this.isAdded = false;
    }
    return AdvanceRules;
}());



/***/ })

}]);
//# sourceMappingURL=products-Add-Product-add-product-module.js.map