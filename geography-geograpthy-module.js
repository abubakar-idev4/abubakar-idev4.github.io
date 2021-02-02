(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["geography-geograpthy-module"],{

/***/ "./src/app/pages/setup/geography/district/district.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/setup/geography/district/district.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/geography/district/district.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/setup/geography/district/district.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<main class=\"main\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t<div class=\"content mb-md-5\">\r\n                <div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n                        <div class=\"mysearchbox\">\r\n\t\t\t\t\t\t\t<h6 class=\"d-inline-block searchshow\">District <i class=\"fa fa-search\"> </i></h6>\r\n                            <div class=\"mysearch\">\r\n                            \t<a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                            \t <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search District..\" title=\"Type in a name\">\r\n                            </div>\r\n                            </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t <div class=\"col-sm-6 addBtn\">\r\n          <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" (click)=\"addItem()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n        </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t<table class=\"table\" id=\"myTable\">\r\n\t\t\t\t\t<thead class=\"thead-light\">\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>District  Code</th>\r\n\t\t\t\t\t\t\t<th>District  Name</th>\r\n\t\t\t\t\t\t\t<th>Description</th>\r\n\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\t\r\n\t\t\t\t\t\t<tr *ngFor=\"let district of pagedItems\">\r\n\t\t\t\t\t\t\t<td>{{district.distCd}}</td>\r\n\t\t\t\t\t\t\t<td><a (click)=\"districtFun(district.distSeq)\">{{district.distNm}}</a></td>\r\n\t\t\t\t\t\t\t<td>{{district.distCmnt}}</td>\r\n\t\t\t\t\t\t\t<td>\r\n                             <!--<a href=\"#\" class=\"iconBtn marker\"><i class=\"fa fa-map-marker\"></i></a>-->\r\n\t\t\t\t\t\t\t\t<a (click)=\"editItem(district.distSeq)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                                <a (click)=\"deleteItem(district.distSeq)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n\t\t\t\t\t\t\t\t<!-- <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a> -->\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n                        </tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\t\r\n            <div class=\"back\">\r\n            \t<a routerLink=\"/setup/geography/province/{{provinceKey}}\" class=\"btn btn-primary btn-min\"><i class=\"fa fa-chevron-left\"></i> Back</a>\r\n            </div>\r\n            <nav aria-label=\"Page navigation \">\r\n\t\t\t\t<ul class=\"pagination justify-content-center\" *ngIf=\"pager.pages && pager.pages.length\">\r\n\t\t\t\t\t<li class=\"page-item disabled\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</nav>\r\n\t\t\t\t\t\r\n                </div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</main>\r\n<div class=\"modal fade\" id=\"District\" role=\"dialog\">\r\n          <div class=\"modal-dialog mymodal\"> \r\n            \r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">District</h5>\r\n              </div>\r\n              <form class=\"md-float-material\" [formGroup]=\"districtForm\" (ngSubmit)=\"onDistrictSubmit()\" >\r\n              <div class=\"modal-body\">\r\n                <div class=\"cRow\">\r\n                  <div class=\"cCol3-col\">\r\n                    <label>District Name:</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"districtName\" [ngClass]=\"{ 'is-invalid': submitted && f.districtName.errors }\" />\r\n                  </div>\r\n                  <div class=\"cCol3-col\">\r\n                    <label>Description:</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"districtDescription\" [ngClass]=\"{ 'is-invalid': submitted && f.districtDescription.errors }\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n                <div *ngIf=\"submitted && f.districtName.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n                  <i  class=\"fa fa-exclamation-circle\"></i>  \r\n                  <strong *ngIf=\"f.districtName.errors\">Please Enter District Name</strong>\r\n                </div>\r\n                <div *ngIf=\"submitted && f.districtDescription.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n                  <i  class=\"fa fa-exclamation-circle\"></i>  \r\n                  <strong *ngIf=\"f.districtDescription.errors\">Please Enter District Description</strong>\r\n               </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button  class=\"btn btn-primary\">Ok</button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n              </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n"

/***/ }),

/***/ "./src/app/pages/setup/geography/district/district.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/setup/geography/district/district.component.ts ***!
  \**********************************************************************/
/*! exports provided: DistrictComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistrictComponent", function() { return DistrictComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var DistrictComponent = /** @class */ (function () {
    function DistrictComponent(router, DataService, formBuilder) {
        this.router = router;
        this.DataService = DataService;
        this.formBuilder = formBuilder;
        //districtList: any = [];
        this.provinceKey = sessionStorage.getItem('clickProvince');
        this.submitted = false;
        this.model = {};
        // array of all items to be paged
        this.allItems = [];
        // pager object
        this.pager = {};
        // paged items
        this.pagedItems = [];
    }
    DistrictComponent.prototype.ngOnInit = function () {
        this.districtForm = this.formBuilder.group({
            formSaveKey: ['add'],
            provinceSeq: [sessionStorage.getItem('clickProvince')],
            districtName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            districtDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.listing();
    };
    DistrictComponent.prototype.listing = function () {
        var _this = this;
        this.DataService.getDistrict(sessionStorage.getItem('clickProvince')).subscribe(function (data) {
            console.log(data);
            _this.allItems = data;
            // initialize to page 1
            _this.setPage(1);
        }, function (error) {
            console.log('err');
            console.log('err', error);
        });
    };
    Object.defineProperty(DistrictComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.districtForm.controls; },
        enumerable: true,
        configurable: true
    });
    DistrictComponent.prototype.onDistrictSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.districtForm.invalid) {
            return;
        }
        var formValue = this.districtForm.value;
        console.log(formValue.formSaveKey);
        if (formValue.formSaveKey === 'add') {
            this.DataService.addDistrict(formValue).subscribe(function (data) {
                console.log(data.district);
                $('#District').modal('hide');
                // this.pagedItems.splice(0, 0, data.district);
                _this.allItems.push(data.district);
                _this.setPage(1);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        else if (formValue.formSaveKey === 'update') {
            this.DataService.updateDistrict(formValue).subscribe(function (data) {
                console.log(data.district);
                $('#District').modal('hide');
                _this.listing();
                //this.pagedItems.splice(this.pagedItems.indexOf(data.district['distSeq']), 1);
                //this.pagedItems.push(data.district);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        return false;
    };
    DistrictComponent.prototype.districtFun = function (id) {
        sessionStorage.setItem('clickDistrict', id);
        this.router.navigate(['/setup/geography/tesil', id]);
    };
    //pagenation
    DistrictComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.DataService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    //delete
    DistrictComponent.prototype.deleteItem = function (passedId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this District?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.DataService.delDistrict(passedId).subscribe(function (result) {
                    //this.pagedItems.splice(this.pagedItems.indexOf(passedId), 1);
                    _this.listing();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Deleted!', 'District has been deleted.', 'success');
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Deleted!', error.error['error'], 'error');
                    console.log('There was an error: ', error.error['error']);
                });
            }
        });
    };
    //add
    DistrictComponent.prototype.addItem = function () {
        this.submitted = false;
        $('#District').modal('show');
        this.districtForm = this.formBuilder.group({
            formSaveKey: ['add'],
            provinceSeq: [sessionStorage.getItem('clickProvince')],
            districtName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            districtDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    //edit
    DistrictComponent.prototype.editItem = function (passedId) {
        var _this = this;
        console.log(passedId);
        this.DataService.editDistrict(passedId).subscribe(function (result) {
            console.log(result);
            $('#District').modal('show');
            _this.districtForm = _this.formBuilder.group({
                formSaveKey: ['update'],
                provinceSeq: [result.stSeq],
                districtSeq: [result.distSeq],
                districtCode: [result.distCd],
                districtName: [result.distNm],
                districtDescription: [result.distCmnt],
            });
        }, function (error) { return console.log('There was an error: ', error); });
    };
    DistrictComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-district',
            template: __webpack_require__(/*! ./district.component.html */ "./src/app/pages/setup/geography/district/district.component.html"),
            styles: [__webpack_require__(/*! ./district.component.css */ "./src/app/pages/setup/geography/district/district.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], DistrictComponent);
    return DistrictComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/geography/geography.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/setup/geography/geography.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/geography/geography.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/setup/geography/geography.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t<app-left-side-bar></app-left-side-bar>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t<div class=\"content mb-md-5\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<div class=\"mysearchbox\">\r\n\t\t\t\t\t\t\t\t<h6 class=\"d-inline-block searchshow\">Geography <i class=\"fa fa-search\"> </i></h6>\r\n\t\t\t\t\t\t\t\t<div class=\"mysearch\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Country...\" title=\"Type in a name\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 addBtn\">\r\n\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" (click)=\"addItem()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t<table class=\"table\" id=\"myTable\">\r\n\t\t\t\t\t\t\t<thead class=\"thead-light\">\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th>Country Code</th>\r\n\t\t\t\t\t\t\t\t\t<th>Country Name</th>\r\n\t\t\t\t\t\t\t\t\t<th>Description</th>\r\n\t\t\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let country of pagedItems\">\r\n\t\t\t\t\t\t\t\t\t<td>{{country.cntryCd}}</td>\r\n\t\t\t\t\t\t\t\t\t<td><a (click)=\"countryFun(country.cntrySeq)\">{{country.cntryNm}}</a></td>\r\n\t\t\t\t\t\t\t\t\t<td>{{country.cntryCmnt}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<!--<a href=\"#\" class=\"iconBtn marker\"><i class=\"fa fa-map-marker\"></i></a>-->\r\n\t\t\t\t\t\t\t\t\t\t<a (click)=\"editItem(country)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t<a (click)=\"deleteItem(country.cntrySeq)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a> -->\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- pager -->\r\n\t\t\t\t\t<nav aria-label=\"Page navigation \">\r\n\t\t\t\t\t\t<ul class=\"pagination justify-content-center\" *ngIf=\"pager.pages && pager.pages.length\">\r\n\t\t\t\t\t\t\t<li class=\"page-item disabled\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n\t\t\t\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n\t\t\t\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n\t\t\t\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</nav>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</main>\r\n<div class=\"modal fade\" id=\"Countrycodes\" role=\"dialog\">\r\n\t<div class=\"modal-dialog mymodal\">\r\n\r\n\t\t<!-- Modal content-->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<h5 class=\"modal-title\">Country</h5>\r\n\t\t\t</div>\r\n\t\t\t<form class=\"md-float-material\" [formGroup]=\"countryForm\" (ngSubmit)=\"onCountrySubmit()\">\r\n\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t<div class=\"cRow\">\r\n\t\t\t\t\t\t<div class=\"cCol3-col\">\r\n\t\t\t\t\t\t\t<label>Country Name:</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"countryName\" [ngClass]=\"{ 'is-invalid': submitted && f.countryName.errors }\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"cCol3-col\">\r\n\t\t\t\t\t\t\t<label>Description:</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"countryDescription\" [ngClass]=\"{ 'is-invalid': submitted && f.countryDescription.errors }\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"submitted && f.countryName.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n\t\t\t\t\t<i class=\"fa fa-exclamation-circle\"></i>\r\n\t\t\t\t\t<strong *ngIf=\"f.countryName.errors\">Please Enter Country Name</strong>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"submitted && f.countryDescription.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n\t\t\t\t\t<i class=\"fa fa-exclamation-circle\"></i>\r\n\t\t\t\t\t<strong *ngIf=\"f.countryDescription.errors\">Please Enter Country Description</strong>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"modal-footer text-center\">\r\n\t\t\t\t\t<button class=\"btn btn-primary\">Ok</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/setup/geography/geography.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/setup/geography/geography.component.ts ***!
  \**************************************************************/
/*! exports provided: GeographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeographyComponent", function() { return GeographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var GeographyComponent = /** @class */ (function () {
    function GeographyComponent(router, DataService, formBuilder) {
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
    GeographyComponent.prototype.ngOnInit = function () {
        this.countryForm = this.formBuilder.group({
            formSaveKey: ['add'],
            countryName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            countryDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.listing(1);
    };
    GeographyComponent.prototype.listing = function (page) {
        var _this = this;
        this.DataService.getCountry().subscribe(function (data) {
            console.log(data);
            _this.allItems = data;
            // initialize to page 1
            _this.setPage(page);
        }, function (error) {
            console.log('err');
            console.log('err', error);
        });
    };
    Object.defineProperty(GeographyComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.countryForm.controls; },
        enumerable: true,
        configurable: true
    });
    GeographyComponent.prototype.onCountrySubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.countryForm.invalid) {
            return;
        }
        var formValue = this.countryForm.value;
        console.log(formValue.formSaveKey);
        if (formValue.formSaveKey === 'add') {
            this.DataService.addCountry(formValue).subscribe(function (data) {
                $('#Countrycodes').modal('hide');
                // this.pagedItems.splice(0, 0, data.country);
                // this.allItems.push(data.country);
                // this.setPage(1);
                _this.listing(1);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        else if (formValue.formSaveKey === 'update') {
            this.DataService.updateCountry(formValue).subscribe(function (data) {
                $('#Countrycodes').modal('hide');
                _this.listing(_this.pager.currentPage);
                //this.pagedItems.splice(this.pagedItems.indexOf(data.country['cntrySeq']), 1);
                //this.pagedItems.push(data.country);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        return false;
    };
    GeographyComponent.prototype.countryFun = function (id, name) {
        sessionStorage.setItem('clickCountry', id);
        this.router.navigate(['/setup/geography/province', id]);
    };
    //pagenation
    GeographyComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.DataService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    //delete
    GeographyComponent.prototype.deleteItem = function (passedId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Country?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.DataService.delCountry(passedId).subscribe(function (result) {
                    _this.listing(_this.pager.currentPage);
                    //this.pagedItems.splice(this.pagedItems.indexOf(passedId), 1);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Deleted!', 'Country has been deleted.', 'success');
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Something Went Wrong!', error.error['error'], 'error');
                    console.log('There was an error: ', error.error['error']);
                });
            }
        });
    };
    //add
    GeographyComponent.prototype.addItem = function () {
        this.submitted = false;
        $('#Countrycodes').modal('show');
        this.countryForm = this.formBuilder.group({
            formSaveKey: ['add'],
            countryName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            countryDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    //edit
    GeographyComponent.prototype.editItem = function (passedId) {
        var _this = this;
        console.log(passedId);
        this.DataService.editCountry(passedId.cntrySeq).subscribe(function (result) {
            console.log(result);
            $('#Countrycodes').modal('show');
            _this.countryForm = _this.formBuilder.group({
                formSaveKey: ['update'],
                countrySeq: [result.cntrySeq],
                countryCode: [result.cntryCd],
                countryName: [result.cntryNm],
                countryDescription: [result.cntryCmnt],
            });
        }, function (error) { return console.log('There was an error: ', error); });
    };
    GeographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-geography',
            template: __webpack_require__(/*! ./geography.component.html */ "./src/app/pages/setup/geography/geography.component.html"),
            styles: [__webpack_require__(/*! ./geography.component.css */ "./src/app/pages/setup/geography/geography.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], GeographyComponent);
    return GeographyComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/geography/geograpthy-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/setup/geography/geograpthy-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: GeograpthyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeograpthyRoutingModule", function() { return GeograpthyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _geography_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geography.component */ "./src/app/pages/setup/geography/geography.component.ts");
/* harmony import */ var _province_province_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./province/province.component */ "./src/app/pages/setup/geography/province/province.component.ts");
/* harmony import */ var _district_district_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./district/district.component */ "./src/app/pages/setup/geography/district/district.component.ts");
/* harmony import */ var _tesil_tesil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tesil/tesil.component */ "./src/app/pages/setup/geography/tesil/tesil.component.ts");
/* harmony import */ var _un_un_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./un/un.component */ "./src/app/pages/setup/geography/un/un.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _geography_component__WEBPACK_IMPORTED_MODULE_2__["GeographyComponent"] },
    { path: 'province/:id', component: _province_province_component__WEBPACK_IMPORTED_MODULE_3__["ProvinceComponent"] },
    { path: 'district/:id', component: _district_district_component__WEBPACK_IMPORTED_MODULE_4__["DistrictComponent"] },
    { path: 'tesil/:id', component: _tesil_tesil_component__WEBPACK_IMPORTED_MODULE_5__["TesilComponent"] },
    { path: 'un/:id', component: _un_un_component__WEBPACK_IMPORTED_MODULE_6__["UnComponent"] },
];
var GeograpthyRoutingModule = /** @class */ (function () {
    function GeograpthyRoutingModule() {
    }
    GeograpthyRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GeograpthyRoutingModule);
    return GeograpthyRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/setup/geography/geograpthy.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/setup/geography/geograpthy.module.ts ***!
  \************************************************************/
/*! exports provided: GeograpthyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeograpthyModule", function() { return GeograpthyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _geograpthy_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geograpthy-routing.module */ "./src/app/pages/setup/geography/geograpthy-routing.module.ts");
/* harmony import */ var _geography_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geography.component */ "./src/app/pages/setup/geography/geography.component.ts");
/* harmony import */ var _un_un_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./un/un.component */ "./src/app/pages/setup/geography/un/un.component.ts");
/* harmony import */ var _tesil_tesil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tesil/tesil.component */ "./src/app/pages/setup/geography/tesil/tesil.component.ts");
/* harmony import */ var _province_province_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./province/province.component */ "./src/app/pages/setup/geography/province/province.component.ts");
/* harmony import */ var _district_district_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./district/district.component */ "./src/app/pages/setup/geography/district/district.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var GeograpthyModule = /** @class */ (function () {
    function GeograpthyModule() {
    }
    GeograpthyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _geograpthy_routing_module__WEBPACK_IMPORTED_MODULE_2__["GeograpthyRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            ],
            declarations: [
                _geography_component__WEBPACK_IMPORTED_MODULE_3__["GeographyComponent"],
                _un_un_component__WEBPACK_IMPORTED_MODULE_4__["UnComponent"],
                _tesil_tesil_component__WEBPACK_IMPORTED_MODULE_5__["TesilComponent"],
                _province_province_component__WEBPACK_IMPORTED_MODULE_6__["ProvinceComponent"],
                _district_district_component__WEBPACK_IMPORTED_MODULE_7__["DistrictComponent"]
            ]
        })
    ], GeograpthyModule);
    return GeograpthyModule;
}());



/***/ }),

/***/ "./src/app/pages/setup/geography/province/province.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/setup/geography/province/province.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/geography/province/province.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/setup/geography/province/province.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<main class=\"main\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t<div class=\"content mb-md-5\">\r\n                <div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n                        <div class=\"mysearchbox\">\r\n\t\t\t\t\t\t\t<h6 class=\"d-inline-block searchshow\">Province <i class=\"fa fa-search\"> </i></h6>\r\n                            <div class=\"mysearch\">\r\n                            \t<a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                            \t <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search Province..\" title=\"Type in a name\">\r\n                            </div>\r\n                            </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t <div class=\"col-sm-6 addBtn\">\r\n          <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" (click)=\"addItem()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n        </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t<table class=\"table\" id=\"myTable\">\r\n\t\t\t\t\t<thead class=\"thead-light\">\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>Province  Code</th>\r\n\t\t\t\t\t\t\t<th>Province  Name</th>\r\n\t\t\t\t\t\t\t<th>Description</th>\r\n\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\t\r\n\t\t\t\t\t\t<tr *ngFor=\"let province of pagedItems\">\r\n\t\t\t\t\t\t\t<td>{{province.stCd}}</td>\r\n\t\t\t\t\t\t\t<td><a (click)=\"provinceFun(province.stSeq)\">{{province.stNm}}</a></td>\r\n\t\t\t\t\t\t\t<td>{{province.stCmnt}}</td>\r\n\t\t\t\t\t\t\t<td>\r\n                             <!--<a href=\"#\" class=\"iconBtn marker\"><i class=\"fa fa-map-marker\"></i></a>-->\r\n\t\t\t\t\t\t\t\t<a (click)=\"editItem(province.stSeq)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                                <a (click)=\"deleteItem(province.stSeq)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n\t\t\t\t\t\t\t\t<!-- <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a> -->\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\t\r\n            <div class=\"back\">\r\n            \t<a routerLink=\"/setup/geography\" class=\"btn btn-primary btn-min\"><i class=\"fa fa-chevron-left\"></i> Back</a>\r\n            </div>\r\n            <nav aria-label=\"Page navigation \">\r\n\t\t\t\t<ul class=\"pagination justify-content-center\" *ngIf=\"pager.pages && pager.pages.length\">\r\n\t\t\t\t\t<li class=\"page-item disabled\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</nav>\r\n\t\t\t\t\t\r\n                </div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</main>\r\n<div class=\"modal fade\" id=\"Province\" role=\"dialog\">\r\n          <div class=\"modal-dialog mymodal\"> \r\n            \r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Province</h5>\r\n              </div>\r\n              <form class=\"md-float-material\" [formGroup]=\"provinceForm\" (ngSubmit)=\"onProvinceSubmit()\" >\r\n              <div class=\"modal-body\">\r\n                <div class=\"cRow\">\r\n                  <div class=\"cCol3-col\">\r\n                    <label>Province Name:</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"provName\" [ngClass]=\"{ 'is-invalid': submitted && f.provName.errors }\" />\r\n                  </div>\r\n                  <div class=\"cCol3-col\">\r\n                    <label>Description:</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"provDescription\" [ngClass]=\"{ 'is-invalid': submitted && f.provDescription.errors }\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n                <div *ngIf=\"submitted && f.provName.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n                  <i  class=\"fa fa-exclamation-circle\"></i>  \r\n                  <strong *ngIf=\"f.provName.errors\">Please Enter Province Name</strong>\r\n                </div>\r\n                <div *ngIf=\"submitted && f.provDescription.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n                  <i  class=\"fa fa-exclamation-circle\"></i>  \r\n                  <strong *ngIf=\"f.provDescription.errors\">Please Enter Province Description</strong>\r\n               </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button  class=\"btn btn-primary\">Ok</button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n              </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n"

/***/ }),

/***/ "./src/app/pages/setup/geography/province/province.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/setup/geography/province/province.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProvinceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvinceComponent", function() { return ProvinceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var ProvinceComponent = /** @class */ (function () {
    function ProvinceComponent(router, DataService, formBuilder) {
        this.router = router;
        this.DataService = DataService;
        this.formBuilder = formBuilder;
        this.provinceList = [];
        this.submitted = false;
        this.model = {};
        // array of all items to be paged
        this.allItems = [];
        // pager object
        this.pager = {};
        // paged items
        this.pagedItems = [];
    }
    ProvinceComponent.prototype.ngOnInit = function () {
        this.provinceForm = this.formBuilder.group({
            formSaveKey: ['add'],
            countrySeq: [sessionStorage.getItem('clickCountry')],
            provName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            provDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.listing();
    };
    ProvinceComponent.prototype.listing = function () {
        var _this = this;
        this.DataService.getProvince(sessionStorage.getItem('clickCountry')).subscribe(function (data) {
            console.log(data);
            _this.allItems = data;
            // initialize to page 1
            _this.setPage(1);
        }, function (error) {
            console.log('err');
            console.log('err', error);
        });
    };
    Object.defineProperty(ProvinceComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.provinceForm.controls; },
        enumerable: true,
        configurable: true
    });
    ProvinceComponent.prototype.onProvinceSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.provinceForm.invalid) {
            return;
        }
        var formValue = this.provinceForm.value;
        console.log(formValue.formSaveKey);
        if (formValue.formSaveKey === 'add') {
            this.DataService.addProvince(formValue).subscribe(function (data) {
                $('#Province').modal('hide');
                // this.pagedItems.splice(0, 0, data.Province);
                _this.allItems.push(data.Province);
                _this.setPage(1);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        else if (formValue.formSaveKey === 'update') {
            this.DataService.updateProvince(formValue).subscribe(function (data) {
                $('#Province').modal('hide');
                _this.listing();
                //this.pagedItems.splice(this.pagedItems.indexOf(data.Province['stSeq']), 1);
                //this.pagedItems.push(data.Province);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        return false;
    };
    ProvinceComponent.prototype.provinceFun = function (id, name) {
        sessionStorage.setItem('clickProvince', id);
        this.router.navigate(['/setup/geography/district', id]);
    };
    //pagenation
    ProvinceComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.DataService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    //delete
    ProvinceComponent.prototype.deleteItem = function (passedId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Province?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.DataService.delProvince(passedId).subscribe(function (result) {
                    //this.pagedItems.splice(this.pagedItems.indexOf(passedId), 1);
                    _this.listing();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Deleted!', 'Province has been deleted.', 'success');
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Deleted!', error.error['error'], 'error');
                    console.log('There was an error: ', error.error['error']);
                });
            }
        });
    };
    //add
    ProvinceComponent.prototype.addItem = function () {
        this.submitted = false;
        $('#Province').modal('show');
        this.provinceForm = this.formBuilder.group({
            formSaveKey: ['add'],
            countrySeq: [sessionStorage.getItem('clickCountry')],
            provName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            provDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    //edit
    ProvinceComponent.prototype.editItem = function (passedId) {
        var _this = this;
        console.log(passedId);
        this.DataService.editProvince(passedId).subscribe(function (result) {
            console.log(result);
            $('#Province').modal('show');
            _this.provinceForm = _this.formBuilder.group({
                formSaveKey: ['update'],
                countrySeq: [result.cntrySeq],
                provSeq: [result.stSeq],
                provCode: [result.stCd],
                provName: [result.stNm],
                provDescription: [result.stCmnt],
            });
        }, function (error) { return console.log('There was an error: ', error); });
    };
    ProvinceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-province',
            template: __webpack_require__(/*! ./province.component.html */ "./src/app/pages/setup/geography/province/province.component.html"),
            styles: [__webpack_require__(/*! ./province.component.css */ "./src/app/pages/setup/geography/province/province.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ProvinceComponent);
    return ProvinceComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/geography/tesil/tesil.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/setup/geography/tesil/tesil.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/geography/tesil/tesil.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/setup/geography/tesil/tesil.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<main class=\"main\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t<div class=\"content mb-md-5\">\r\n                <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                        \t<div class=\"mysearchbox\">\r\n\t\t\t\t\t\t\t<h6 class=\"d-inline-block searchshow\">Tehsil <i class=\"fa fa-search\"> </i></h6>\r\n                            <div class=\"mysearch\">\r\n                            \t<a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                            \t <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search Tehsil..\" title=\"Type in a name\">\r\n                            </div>\r\n                            </div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t <div class=\"col-sm-6 addBtn\">\r\n          <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" (click)=\"addItem()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n        </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t<table class=\"table\" id=\"myTable\">\r\n\t\t\t\t\t<thead class=\"thead-light\">\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>Tehsil  Code</th>\r\n\t\t\t\t\t\t\t<th>Tehsil  Name</th>\r\n\t\t\t\t\t\t\t<th>Description</th>\r\n\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\t\r\n\t\t\t\t\t\t<tr *ngFor=\"let tehsil of pagedItems\">\r\n\t\t\t\t\t\t\t<td>{{tehsil.thslCd}}</td>\r\n\t\t\t\t\t\t\t<td><a (click)=\"tehsilFun(tehsil.thslSeq)\">{{tehsil.thslNm}}</a></td>\r\n\t\t\t\t\t\t\t<td>{{tehsil.thslCmnt}}</td>\r\n\t\t\t\t\t\t\t<td>\r\n                             <!--<a href=\"#\" class=\"iconBtn marker\"><i class=\"fa fa-map-marker\"></i></a>-->\r\n\t\t\t\t\t\t\t\t<a (click)=\"editItem(tehsil.thslSeq)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                                <a (click)=\"deleteItem(tehsil.thslSeq)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n\t\t\t\t\t\t\t\t<!-- <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a> -->\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\t\r\n            <div class=\"back\">\r\n            \t<a routerLink=\"/setup/geography/district/{{districtKey}}\" class=\"btn btn-primary btn-min\"><i class=\"fa fa-chevron-left\"></i> Back</a>\r\n            </div>\r\n            <nav aria-label=\"Page navigation \">\r\n\t\t\t\t<ul class=\"pagination justify-content-center\" *ngIf=\"pager.pages && pager.pages.length\">\r\n\t\t\t\t\t<li class=\"page-item disabled\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</nav>\r\n\t\t\t\t\t\r\n                </div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</main>\r\n<div class=\"modal fade\" id=\"Tehsil\" role=\"dialog\">\r\n          <div class=\"modal-dialog mymodal\"> \r\n            \r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Tehsil</h5>\r\n              </div>\r\n              <form class=\"md-float-material\" [formGroup]=\"tehsilForm\" (ngSubmit)=\"onTehsilSubmit()\" >\r\n              <div class=\"modal-body\">\r\n                <div class=\"cRow\">\r\n                  <div class=\"cCol3-col\">\r\n                    <label>Tehsil Name:</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"thslName\" [ngClass]=\"{ 'is-invalid': submitted && f.thslName.errors }\" />\r\n                  </div>\r\n                  <div class=\"cCol3-col\">\r\n                    <label>Description:</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"thslDescription\" [ngClass]=\"{ 'is-invalid': submitted && f.thslDescription.errors }\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n                <div *ngIf=\"submitted && f.thslName.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n                  <i  class=\"fa fa-exclamation-circle\"></i>  \r\n                  <strong *ngIf=\"f.thslName.errors\">Please Enter Tehsil Name</strong>\r\n                </div>\r\n                <div *ngIf=\"submitted && f.thslDescription.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n                  <i  class=\"fa fa-exclamation-circle\"></i>  \r\n                  <strong *ngIf=\"f.thslDescription.errors\">Please Enter Tehsil Description</strong>\r\n               </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button  class=\"btn btn-primary\">Ok</button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n              </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n"

/***/ }),

/***/ "./src/app/pages/setup/geography/tesil/tesil.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/setup/geography/tesil/tesil.component.ts ***!
  \****************************************************************/
/*! exports provided: TesilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TesilComponent", function() { return TesilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var TesilComponent = /** @class */ (function () {
    function TesilComponent(router, DataService, formBuilder) {
        this.router = router;
        this.DataService = DataService;
        this.formBuilder = formBuilder;
        this.nntehsilList = [];
        this.districtKey = sessionStorage.getItem('clickDistrict');
        this.submitted = false;
        this.model = {};
        // array of all items to be paged
        this.allItems = [];
        // pager object
        this.pager = {};
        // paged items
        this.pagedItems = [];
    }
    TesilComponent.prototype.ngOnInit = function () {
        this.tehsilForm = this.formBuilder.group({
            formSaveKey: ['add'],
            districtSeq: [sessionStorage.getItem('clickDistrict')],
            thslName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            thslDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.listing();
    };
    TesilComponent.prototype.listing = function () {
        var _this = this;
        this.DataService.getTehsil(sessionStorage.getItem('clickDistrict')).subscribe(function (data) {
            console.log(data);
            _this.allItems = data;
            // initialize to page 1
            _this.setPage(1);
        }, function (error) {
            console.log('err');
            console.log('err', error);
        });
    };
    Object.defineProperty(TesilComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.tehsilForm.controls; },
        enumerable: true,
        configurable: true
    });
    TesilComponent.prototype.onTehsilSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.tehsilForm.invalid) {
            return;
        }
        var formValue = this.tehsilForm.value;
        console.log(formValue.formSaveKey);
        if (formValue.formSaveKey === 'add') {
            this.DataService.addTehsil(formValue).subscribe(function (data) {
                $('#Tehsil').modal('hide');
                // this.pagedItems.splice(0, 0, data.tehsil);
                _this.allItems.push(data.tehsil);
                _this.setPage(1);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        else if (formValue.formSaveKey === 'update') {
            this.DataService.updateTehsil(formValue).subscribe(function (data) {
                $('#Tehsil').modal('hide');
                _this.listing();
                //this.pagedItems.splice(this.pagedItems.indexOf(data.tehsil['thslSeq']), 1);
                //this.pagedItems.push(data.tehsil);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        return false;
    };
    TesilComponent.prototype.tehsilFun = function (id, name) {
        sessionStorage.setItem('clickTehsil', id);
        this.router.navigate(['/setup/geography/un', id]);
    };
    //pagenation
    TesilComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.DataService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    //delete
    TesilComponent.prototype.deleteItem = function (passedId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Tesil?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.DataService.delTehsil(passedId).subscribe(function (result) {
                    //this.pagedItems.splice(this.pagedItems.indexOf(passedId), 1);
                    _this.listing();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Deleted!', 'Tesil has been deleted.', 'success');
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Deleted!', error.error['error'], 'error');
                    console.log('There was an error: ', error.error['error']);
                });
            }
        });
    };
    //add
    TesilComponent.prototype.addItem = function () {
        this.submitted = false;
        $('#Tehsil').modal('show');
        this.tehsilForm = this.formBuilder.group({
            formSaveKey: ['add'],
            districtSeq: [sessionStorage.getItem('clickDistrict')],
            thslName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            thslDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    //edit
    TesilComponent.prototype.editItem = function (passedId) {
        var _this = this;
        console.log(passedId);
        this.DataService.editTehsil(passedId).subscribe(function (result) {
            console.log(result);
            $('#Tehsil').modal('show');
            _this.tehsilForm = _this.formBuilder.group({
                formSaveKey: ['update'],
                districtSeq: [result.distSeq],
                thslSeq: [result.thslSeq],
                thslCode: [result.thslCd],
                thslName: [result.thslNm],
                thslDescription: [result.thslCmnt],
            });
        }, function (error) { return console.log('There was an error: ', error); });
    };
    TesilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tesil',
            template: __webpack_require__(/*! ./tesil.component.html */ "./src/app/pages/setup/geography/tesil/tesil.component.html"),
            styles: [__webpack_require__(/*! ./tesil.component.css */ "./src/app/pages/setup/geography/tesil/tesil.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], TesilComponent);
    return TesilComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/geography/un/un.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/setup/geography/un/un.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/geography/un/un.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/setup/geography/un/un.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<main class=\"main\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t<div class=\"content mb-md-5\">\r\n                <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                        \t<div class=\"mysearchbox\">\r\n\t\t\t\t\t\t\t<h6 class=\"d-inline-block searchshow\">Union Council <i class=\"fa fa-search\"> </i></h6>\r\n                            <div class=\"mysearch\">\r\n                            \t<a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                            \t <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search Tehsil..\" title=\"Type in a name\">\r\n                            </div>\r\n                            </div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t <div class=\"col-sm-6 addBtn\">\r\n          <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" (click)=\"addItem()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n        </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t<table class=\"table\" id=\"myTable\">\r\n\t\t\t\t\t<thead class=\"thead-light\">\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>Union Council Code</th>\r\n\t\t\t\t\t\t\t<th>Union Council  Name</th>\r\n\t\t\t\t\t\t\t<th>Description</th>\r\n\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\t\r\n\t\t\t\t\t\t<tr *ngFor=\"let un of pagedItems \">\r\n\t\t\t\t\t\t\t<td>{{un.ucCd}}</td>\r\n\t\t\t\t\t\t\t<td><a >{{un.ucNm}}</a></td>\r\n\t\t\t\t\t\t\t<td>{{un.ucCmnt}}</td>\r\n\t\t\t\t\t\t\t<td>\r\n                             <!--<a href=\"#\" class=\"iconBtn marker\"><i class=\"fa fa-map-marker\"></i></a>-->\r\n\t\t\t\t\t\t\t\t<a (click)=\"editItem(un.ucSeq)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                                <a (click)=\"deleteItem(un.ucSeq)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n\t\t\t\t\t\t\t\t<!-- <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a> -->\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\t\r\n            <div class=\"back\">\r\n            \t<a routerLink=\"/setup/geography/tesil/{{tehsilKey}}\" class=\"btn btn-primary btn-min\"><i class=\"fa fa-chevron-left\"></i> Back</a>\r\n            </div>\r\n            <nav aria-label=\"Page navigation \">\r\n\t\t\t\t<ul class=\"pagination justify-content-center\" *ngIf=\"pager.pages && pager.pages.length\">\r\n\t\t\t\t\t<li class=\"page-item disabled\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</nav>\r\n\t\t\t\t\t\r\n                </div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</main>\r\n<div class=\"modal fade\" id=\"UN\" role=\"dialog\">\r\n          <div class=\"modal-dialog mymodal\"> \r\n            \r\n            <!-- Modal content-->\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Union Council</h5>\r\n              </div>\r\n              <form class=\"md-float-material\" [formGroup]=\"unForm\" (ngSubmit)=\"onUNSubmit()\" >\r\n              <div class=\"modal-body\">\r\n                <div class=\"cRow\">\r\n                  <div class=\"cCol3-col\">\r\n                    <label>Union Council Name:</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"ucName\" [ngClass]=\"{ 'is-invalid': submitted && f.ucName.errors }\" />\r\n                  </div>\r\n                  <div class=\"cCol3-col\">\r\n                    <label>Status:</label>\r\n                    <select class=\"form-control\" formControlName=\"statusKey\" [ngClass]=\"{ 'is-invalid': submitted && f.statusKey.errors }\">\r\n                    \t<option *ngFor=\"let status of statusListing\" value=\"{{status.codeKey}}\">{{status.codeValue}}</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"cCol3-col\">\r\n                    <label>Description:</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"ucDescription\" [ngClass]=\"{ 'is-invalid': submitted && f.ucDescription.errors }\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n                <div *ngIf=\"submitted && f.ucName.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n                  <i  class=\"fa fa-exclamation-circle\"></i>  \r\n                  <strong *ngIf=\"f.ucName.errors\">Please Enter Tehsil Union Council</strong>\r\n                </div>\r\n                <div *ngIf=\"submitted && f.ucDescription.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n                  <i  class=\"fa fa-exclamation-circle\"></i>  \r\n                  <strong *ngIf=\"f.ucDescription.errors\">Please Enter Union Council Description</strong>\r\n               </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button  class=\"btn btn-primary\">Ok</button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n              </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n"

/***/ }),

/***/ "./src/app/pages/setup/geography/un/un.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/setup/geography/un/un.component.ts ***!
  \**********************************************************/
/*! exports provided: UnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnComponent", function() { return UnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var UnComponent = /** @class */ (function () {
    function UnComponent(router, DataService, formBuilder) {
        this.router = router;
        this.DataService = DataService;
        this.formBuilder = formBuilder;
        //nntehsilList: any = [];
        this.tehsilKey = sessionStorage.getItem('clickTehsil');
        this.submitted = false;
        this.model = {};
        // array of all items to be paged
        this.allItems = [];
        // pager object
        this.pager = {};
        // paged items
        this.pagedItems = [];
        this.statusListing = '';
    }
    UnComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.unForm = this.formBuilder.group({
            formSaveKey: ['add'],
            thslSeq: [sessionStorage.getItem('clickTehsil')],
            ucName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ucDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            statusKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.listing();
        //STATUS LIST
        this.DataService.statusList().subscribe(function (result) {
            _this.statusListing = result;
            console.log(result);
        }, function (error) { return console.log('There was an error: ', error); });
    };
    UnComponent.prototype.listing = function () {
        var _this = this;
        this.DataService.getUN(sessionStorage.getItem('clickTehsil')).subscribe(function (data) {
            console.log(data);
            _this.allItems = data;
            // initialize to page 1
            _this.setPage(1);
        }, function (error) {
            console.log('err');
            console.log('err', error);
        });
    };
    Object.defineProperty(UnComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.unForm.controls; },
        enumerable: true,
        configurable: true
    });
    UnComponent.prototype.onUNSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.unForm.invalid) {
            return;
        }
        var formValue = this.unForm.value;
        console.log(formValue.formSaveKey);
        if (formValue.formSaveKey === 'add') {
            this.DataService.addUN(formValue).subscribe(function (data) {
                $('#UN').modal('hide');
                // this.pagedItems.splice(0, 0, data.uc);
                _this.allItems.push(data.uc);
                _this.setPage(1);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        else if (formValue.formSaveKey === 'update') {
            this.DataService.updateUN(formValue).subscribe(function (data) {
                $('#UN').modal('hide');
                _this.listing();
                //this.pagedItems.splice(this.pagedItems.indexOf(data.uc['ucSeq']), 1);
                //this.pagedItems.push(data.uc);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        return false;
    };
    UnComponent.prototype.unFun = function (id) {
        sessionStorage.setItem('clickUN', id);
        this.router.navigate(['/setup/geography/tesil', id]);
    };
    //pagenation
    UnComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.DataService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    //delete
    UnComponent.prototype.deleteItem = function (passedId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Union Council?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.DataService.delUN(passedId).subscribe(function (result) {
                    //this.pagedItems.splice(this.pagedItems.indexOf(passedId), 1);
                    _this.listing();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Deleted!', 'Union Council has been deleted.', 'success');
                }, function (error) { return console.log('There was an error: ', error); });
            }
        });
    };
    //add
    UnComponent.prototype.addItem = function () {
        this.submitted = false;
        $('#UN').modal('show');
        this.unForm = this.formBuilder.group({
            formSaveKey: ['add'],
            thslSeq: [sessionStorage.getItem('clickTehsil')],
            ucName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ucDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            statusKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    //edit
    UnComponent.prototype.editItem = function (passedId) {
        var _this = this;
        console.log(passedId);
        this.DataService.editUN(passedId).subscribe(function (result) {
            console.log(result);
            $('#UN').modal('show');
            _this.unForm = _this.formBuilder.group({
                formSaveKey: ['update'],
                thslSeq: [result.thslSeq],
                ucSeq: [result.ucSeq],
                ucCode: [result.ucCd],
                ucName: [result.ucNm],
                ucDescription: [result.ucCmnt],
                statusKey: [result.ucStsKey],
            });
        }, function (error) { return console.log('There was an error: ', error); });
    };
    UnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-un',
            template: __webpack_require__(/*! ./un.component.html */ "./src/app/pages/setup/geography/un/un.component.html"),
            styles: [__webpack_require__(/*! ./un.component.css */ "./src/app/pages/setup/geography/un/un.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], UnComponent);
    return UnComponent;
}());



/***/ })

}]);
//# sourceMappingURL=geography-geograpthy-module.js.map