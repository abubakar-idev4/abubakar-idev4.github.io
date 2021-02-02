(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["organization-organization-module"],{

/***/ "./src/app/pages/setup/organization/area/area.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pages/setup/organization/area/area.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/organization/area/area.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/setup/organization/area/area.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Area <i class=\"fa fa-search\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 addBtn\">\r\n              <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" (click)=\"addItem()\"><i class=\"fa fa-plus\"></i>\r\n                Add</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>Area ID</th>\r\n                  <th>Area Name</th>\r\n                  <th>Description</th>\r\n                  <th>Status</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let area of pagedItems\">\r\n                  <td>{{area.areaCd}}</td>\r\n                  <td><a (click)=\"areaFun(area.areaSeq)\">{{area.areaNm}}</a></td>\r\n                  <td>{{area.areaDscr}}</td>\r\n                  <td *ngIf=\"area.areaStsKey === null || area.areaStsKey === 200; else other_content\"\r\n                    (click)=\"StatusUpdate(area.areaSeq)\">Active</td>\r\n                  <ng-template #other_content>\r\n                    <td (click)=\"StatusUpdate(area.areaSeq)\">In Active</td>\r\n                  </ng-template>\r\n\r\n                  <td>\r\n                    <a data-toggle=\"modal\" (click)=\"UserAssignment(area.areaSeq)\" class=\"iconBtn\"><i\r\n                        class=\"fa fa-user\"></i></a>\r\n                    <!--<a href=\"#\" class=\"iconBtn marker\"><i class=\"fa fa-map-marker\"></i></a>-->\r\n                    <a (click)=\"editItem(area.areaSeq)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                    <a (click)=\"deleteItem(area.areaSeq)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                    <!-- <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a> -->\r\n                  </td>\r\n                </tr>\r\n\r\n\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class=\"back\">\r\n            <a routerLink=\"/setup/organization\" class=\"btn btn-primary btn-min\"><i class=\"fa fa-chevron-left\"></i>\r\n              Back</a>\r\n          </div>\r\n          <nav aria-label=\"Page navigation \">\r\n            <ul class=\"pagination justify-content-center\" *ngIf=\"pager.pages && pager.pages.length\">\r\n              <li class=\"page-item disabled\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n              </li>\r\n              <li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                <a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n              </li>\r\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n\r\n<!-------------------    Copy User Assignment  ---------------------------------->\r\n\r\n<div class=\"modal fade\" id=\"UserAssignment\" role=\"dialog\">\r\n  <div class=\"modal-dialog mymodal bigger\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Employee Assignment</h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"employeeAssignmentForm\" (ngSubmit)=\"onemployeeAssignmentSubmit()\">\r\n        <div class=\"modal-body pt-0\" style=\"overflow:visible\">\r\n          <div class=\"pt-1 pb-2\">\r\n            <h6 class=\"colorBlack small mb-0 pt-1\"><b>Position</b></h6>\r\n          </div>\r\n          <div class=\"borderbox p-2 pb-3\">\r\n            <div class=\"userfields\">\r\n              <div class=\"cRow vrbp0\">\r\n\r\n                <div class=\"cCol2\">\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Area Manager\" formControlName=\"regionManager\" name=\"empSeq\">\r\n                      <mat-option *ngFor=\"let edu of userList\" [value]=\"edu.empSeq\">\r\n                        {{edu.empNm}} ({{edu.empLanId}})\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <!-- <div class=\"cCol2\">\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Covering Employee\" formControlName=\"coveringEmpSeq\" name=\"coveringEmpSeq\">\r\n                      <mat-option *ngFor=\"let edu of userList\" [value]=\"edu.empSeq\">\r\n                        {{edu.empNm}} ({{edu.empLanId}})\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div> -->\r\n\r\n                <!-- <div class=\"cCol4 date2\">\r\n                  <div class=\"input-group date mr-1\">\r\n                    <mat-form-field>\r\n                      <input matInput [matDatepicker]=\"picker1\" placeholder=\"From Date:\"\r\n                        formControlName=\"coveringEmpFromDate\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                      <mat-datepicker startView=\"year\" #picker1></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"input-group date\">\r\n                    <mat-form-field>\r\n                      <input matInput [matDatepicker]=\"picker2\" placeholder=\"To Date:\"\r\n                        formControlName=\"coveringEmpToDate\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                      <mat-datepicker startView=\"year\" #picker2></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div> -->\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer text-center pb-3\">\r\n            <button class=\"btn btn-primary\" type=\"submit\">Ok</button>\r\n            <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!---------------------   End |Copr user | Assignmnet -------------------------------->\r\n\r\n<div class=\"modal fade\" id=\"UserAssignmentChanged\" role=\"dialog\">\r\n  <div class=\"modal-dialog mymodal bigger\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Employee Assignment</h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"employeeAssignmentForm\" (ngSubmit)=\"onemployeeAssignmentSubmit()\">\r\n        <div class=\"modal-body pt-0\">\r\n          <div class=\"pt-1 pb-2\">\r\n            <h6 class=\"colorBlack small mb-0 pt-1\"><b>Position</b></h6>\r\n          </div>\r\n          <div class=\"borderbox p-2 pb-3\">\r\n            <div class=\"userfields\">\r\n              <div class=\"cRow vrbp0\">\r\n                <div class=\"cCol5 inlincbox\">\r\n                  <label>Region Manager</label>\r\n                  <select formControlName=\"regionManager\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <!--<div style=\"width: 50%;\"> \t\r\n                             <input formControlName=\"regionManager\" (keydown)=\"search($event, 'regionManager')\" type=\"text\"  class=\"form-control\" placeholder=\"Asad Khan\">\r\n                             <ul *ngIf=\"regionManager\" style=\"position: absolute;z-index: 999;background-color:#fff; width:16%;border:1px solid #999999;padding: 5px;\">\r\n                             <li *ngFor=\"let search of regionManager\" (click)=\"serchSelected(search.empSeq, 'regionManager')\" style=\"width: 100%;\">{{search.empNm}}</li>\r\n                             </ul>\r\n                             </div>-->\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                </div>\r\n                <div class=\"cCol5 inlincbox\">\r\n                  <label>Covering Employee</label>\r\n                  <select formControlName=\"coveringRegManager\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <!--<div style=\"width: 50%;\"> \t\t\r\n                             <input formControlName=\"coveringRegManager\"  value=\"\" (keydown)=\"search($event, 'coveringRegManager')\" type=\"text\" class=\"form-control\" placeholder=\"Asad Khan\">\r\n                              <ul *ngIf=\"coveringRegManager\" style=\"position: absolute;z-index: 999;background-color:#fff; width:16%;border:1px solid #999999;padding: 5px;\">\r\n                             <li *ngFor=\"let search of coveringRegManager\" (click)=\"serchSelected(search.empSeq, 'coveringRegManager')\" style=\"width: 100%;\">{{search.empNm}}</li>\r\n                             </ul>\r\n                             </div>-->\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                </div>\r\n                <div class=\"cCol1 date2\">\r\n                  <div class=\"input-group date mr-1\">\r\n                    <input formControlName=\"coveringRegManagerDateFrom\" type=\"date\" class=\"form-control\"\r\n                      placeholder=\"To Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"input-group date\">\r\n                    <input type=\"date\" formControlName=\"coveringRegManagerDateTo\" class=\"form-control\"\r\n                      placeholder=\"From Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"cRow vrbp0\">\r\n                <div class=\"cCol5 inlincbox\">\r\n                  <label>Clerk</label>\r\n                  <select formControlName=\"clerk\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <!--<div style=\"width: 50%;\">\r\n                             <input formControlName=\"clerk\" (keydown)=\"search($event, 'clerk')\" type=\"text\" class=\"form-control\" placeholder=\"Nauman Ashraf\">\r\n                              <ul *ngIf=\"clerk\" style=\"position: absolute;z-index: 999;background-color:#fff; width:16%;border:1px solid #999999;padding: 5px;\">\r\n                             <li *ngFor=\"let search of clerk\" (click)=\"serchSelected(search.empSeq, 'clerk')\" style=\"width: 100%;\">{{search.empNm}}</li>\r\n                             </ul>\r\n                             </div>-->\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                </div>\r\n                <div class=\"cCol5 inlincbox\">\r\n                  <label>Covering Employee</label>\r\n                  <select formControlName=\"coveringClerk\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <!--<div style=\"width: 50%;\">\t\r\n                             <input formControlName=\"coveringClerk\" (keydown)=\"search($event, 'coveringClerk')\" type=\"text\" class=\"form-control\" placeholder=\"Nauman Ashraf\">\r\n                              <ul *ngIf=\"coveringClerk\" style=\"position: absolute;z-index: 999;background-color:#fff; width:16%;border:1px solid #999999;padding: 5px;\">\r\n                             <li *ngFor=\"let search of coveringClerk\" (click)=\"serchSelected(search.empSeq, 'coveringClerk')\" style=\"width: 100%;\">{{search.empNm}}</li>\r\n                             </ul>\r\n                             </div>-->\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                </div>\r\n                <div class=\"cCol1 date2\">\r\n                  <div class=\"input-group date mr-1\">\r\n                    <input type=\"date\" formControlName=\"coveringClerkDateFrom\" class=\"form-control\"\r\n                      placeholder=\"To Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"input-group date\">\r\n                    <input formControlName=\"coveringClerkDateTo\" type=\"date\" class=\"form-control\"\r\n                      placeholder=\"From Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"cRow vrbp0\">\r\n                <div class=\"cCol5 inlincbox\">\r\n                  <label>Accountant</label>\r\n                  <select formControlName=\"manager\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <!--<div style=\"width: 50%;\">\r\n                             <input formControlName=\"manager\" (keydown)=\"search($event, 'manager')\" type=\"text\" class=\"form-control\" placeholder=\"Accountant\">\r\n                              <ul *ngIf=\"manager\" style=\"position: absolute;z-index: 999;background-color:#fff; width:16%;border:1px solid #999999;padding: 5px;\">\r\n                             <li *ngFor=\"let search of manager\" (click)=\"serchSelected(search.empSeq, 'manager')\" style=\"width: 100%;\">{{search.empNm}}</li>\r\n                             </ul>\r\n                             </div>-->\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                </div>\r\n                <div class=\"cCol5 inlincbox\">\r\n                  <label>Covering Employee</label>\r\n                  <select formControlName=\"coveringManager\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <!--<div style=\"width: 50%;\">\r\n                             <input formControlName=\"coveringManager\" (keydown)=\"search($event, 'coveringManager')\" type=\"text\" class=\"form-control\" placeholder=\"Asad Khan\">\r\n                              <ul *ngIf=\"coveringManager\" style=\"position: absolute;z-index: 999;background-color:#fff; width:16%;border:1px solid #999999;padding: 5px;\">\r\n                             <li *ngFor=\"let search of coveringManager\" (click)=\"serchSelected(search.empSeq, 'coveringManager')\" style=\"width: 100%;\">{{search.empNm}}</li>\r\n                             </ul>\r\n                             </div>-->\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                </div>\r\n                <div class=\"cCol1 date2\">\r\n                  <div class=\"input-group date mr-1\">\r\n                    <input formControlName=\"coveringManagerDateFrom\" type=\"date\" class=\"form-control\"\r\n                      placeholder=\"To Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"input-group date\">\r\n                    <input formControlName=\"coveringManagerDateTo\" type=\"date\" class=\"form-control\"\r\n                      placeholder=\"From Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer text-center pb-3\">\r\n            <button class=\"btn btn-primary\">Ok</button>\r\n            <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"Area\" role=\"dialog\">\r\n  <div class=\"modal-dialog big mymodal\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Area</h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"areaForm\" (ngSubmit)=\"onAreaSubmit()\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol2\" *ngIf=\"editArea\">\r\n              <ng-select [items]=\"regions\" required bindLabel=\"regDscr\" bindValue=\"regSeq\" name=\"regDscr\"\r\n                placeholder=\"Select Region:\" formControlName=\"regionSeq\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol2\">\r\n              <label>Area Name:</label>\r\n              <input (keypress)=\"keyPress($event)\" type=\"text\" class=\"form-control\" formControlName=\"areaName\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.areaName.errors }\" />\r\n            </div>\r\n            <!--<div class=\"cCol2\">\r\n                    <label>Area Type:</label>\r\n                    <select class=\"form-control\" formControlName=\"areaType\" [ngClass]=\"{ 'is-invalid': submitted && f.areaType.errors }\">\r\n                    \t<option value=\"1\">Area 1</option>\r\n                        <option value=\"2\">Area 2</option>\r\n                    </select>\r\n                  </div>-->\r\n            <div class=\"cCol2\">\r\n              <label>Status:</label>\r\n              <select class=\"form-control\" formControlName=\"areaStatus\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.areaStatus.errors }\">\r\n                <option *ngFor=\"let status of statusListing\" value=\"{{status.codeKey}}\">{{status.codeValue}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-full\">\r\n              <label>Description:</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"areaDescription\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.areaDescription.errors }\" />\r\n            </div>\r\n            <!-- <div class=\"cCol1\">\r\n                    <label>province:</label>\r\n                    <input type=\"text\" readonly class=\"form-control\" formControlName=\"provinceName\" [ngClass]=\"{ 'is-invalid': submitted && f.provinceName.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol1\">\r\n                    <label>district:</label>\r\n                    <input type=\"text\" readonly class=\"form-control\" formControlName=\"districtName\" [ngClass]=\"{ 'is-invalid': submitted && f.districtName.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol1\">\r\n                    <label>tehsil:</label>\r\n                    <input type=\"text\" readonly class=\"form-control\" formControlName=\"tehsilName\" [ngClass]=\"{ 'is-invalid': submitted && f.tehsilName.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol1\">\r\n                    <label>uc:</label>\r\n                    <input type=\"text\" readonly class=\"form-control\" formControlName=\"ucName\" [ngClass]=\"{ 'is-invalid': submitted && f.ucName.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol1\">\r\n                    <label>city:</label>\r\n                    <input type=\"text\" readonly class=\"form-control\" formControlName=\"cityName\" [ngClass]=\"{ 'is-invalid': submitted && f.cityName.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol1 mt-3\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-dots\" data-toggle=\"modal\" (click)=\"getLocations()\"></button>\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol1\">\r\n                    <label>houseNum:</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"houseNum\" [ngClass]=\"{ 'is-invalid': submitted && f.houseNum.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol1\">\r\n                    <label>street:</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"street\" [ngClass]=\"{ 'is-invalid': submitted && f.street.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol1\">\r\n                    <label>village:</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"village\" [ngClass]=\"{ 'is-invalid': submitted && f.village.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol1\">\r\n                    <label>other:</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"other\" [ngClass]=\"{ 'is-invalid': submitted && f.other.errors }\" />\r\n                  </div> -->\r\n\r\n            <!--<div class=\"col-full\">\r\n                    <label>Address:</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"areaAddress\" [ngClass]=\"{ 'is-invalid': submitted && f.areaAddress.errors }\" />\r\n                  </div>-->\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"submitted && f.areaName.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n          <i class=\"fa fa-exclamation-circle\"></i>\r\n          <strong *ngIf=\"f.areaName.errors\">Please Enter Area Name</strong>\r\n        </div>\r\n        <div *ngIf=\"submitted && f.areaDescription.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n          <i class=\"fa fa-exclamation-circle\"></i>\r\n          <strong *ngIf=\"f.areaDescription.errors\">Please Enter Area Description</strong>\r\n        </div>\r\n        <!--<div *ngIf=\"submitted && f.areaAddress.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n                  <i  class=\"fa fa-exclamation-circle\"></i>  \r\n                  <strong *ngIf=\"f.areaAddress.errors\">Please Enter Area Address</strong>\r\n                </div>-->\r\n        <div class=\"modal-footer text-center\">\r\n          <button class=\"btn btn-primary\">Ok</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"Location\" role=\"dialog\">\r\n  <div class=\"modal-dialog bigger mymodal\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Location </h5>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table last-left\">\r\n            <thead class=\"thead-light last-left\">\r\n              <tr>\r\n                <th>Province</th>\r\n                <th>District</th>\r\n                <th>Tehseel</th>\r\n                <th width=\"20%\">UC</th>\r\n                <th>City</th>\r\n                <th>Select</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody class=\"evenodd\">\r\n              <tr *ngFor=\"let address of addresses\">\r\n                <td>{{address.provinceName}} </td>\r\n                <td>{{address.districtName}}</td>\r\n                <td>{{address.tehsilName}}</td>\r\n                <td>{{address.ucName}}</td>\r\n                <td>{{address.cityName}}</td>\r\n                <td>\r\n                  <button data-dismiss=\"modal\" type=\"button\" class=\"btn btn-primary btn-min\"\r\n                    (click)=\"selectAddress(address)\">Select</button>\r\n                </td>\r\n              </tr>\r\n\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/setup/organization/area/area.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/setup/organization/area/area.component.ts ***!
  \*****************************************************************/
/*! exports provided: AreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaComponent", function() { return AreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _shared_services_loan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/loan.service */ "./src/app/shared/services/loan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
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







var AreaComponent = /** @class */ (function () {
    function AreaComponent(router, loanService, DataService, formBuilder, toaster) {
        this.router = router;
        this.loanService = loanService;
        this.DataService = DataService;
        this.formBuilder = formBuilder;
        this.toaster = toaster;
        this.areaList = [];
        this.submitted = false;
        // array of all items to be paged
        this.allItems = [];
        // pager object
        this.pager = {};
        // paged items
        this.pagedItems = [];
        // search items
        this.userList = '';
        this.regionManager = '';
        this.coveringRegManager = '';
        this.clerk = '';
        this.coveringClerk = '';
        this.manager = '';
        this.coveringManager = '';
        //status
        this.statusListing = '';
        this.addresses = [];
        this.editArea = false;
    }
    AreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.areaForm = this.formBuilder.group({
            formSaveKey: ['add'],
            regionSeq: [sessionStorage.getItem('clickorganization')],
            areaName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            areaStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            areaDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.listing(1);
        //STATUS LIST
        this.DataService.statusList().subscribe(function (result) {
            _this.statusListing = result;
            console.log(result);
        }, function (error) { return console.log('There was an error: ', error); });
        //userlist
        // this.DataService.searchArea().subscribe(result => {
        // 	this.userList = result;
        // 	console.log(result);
        // }, error => console.log('There was an error: ', error));
        //emplyee accignment
        this.employeeAssignmentForm = this.formBuilder.group({
            formSaveKey: ['add'],
            parentKey: [sessionStorage.getItem('UserAssignment')],
            regionManager: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            coveringRegManager: [''],
            coveringRegManagerDateFrom: [''],
            coveringRegManagerDateTo: [''],
            clerk: [''],
            coveringClerk: [''],
            coveringClerkDateFrom: [''],
            coveringClerkDateTo: [''],
            manager: [''],
            coveringManager: [''],
            coveringManagerDateFrom: [''],
            coveringManagerDateTo: [''],
            coveringEmpToDate: [''],
            coveringEmpFromDate: [''],
            coveringEmpSeq: [''],
            empSeq: ['']
        });
    };
    AreaComponent.prototype.listing = function (page) {
        var _this = this;
        this.DataService.getOrganization().subscribe(function (data) {
            console.log(data);
            _this.regions = data;
        }, function (error) {
            console.log("err");
            console.log("err", error);
        });
        this.DataService.getArea(sessionStorage.getItem('clickorganization')).subscribe(function (data) {
            console.log(data);
            _this.allItems = data;
            // initialize to page 1
            _this.setPage(page);
        }, function (error) {
            console.log('err');
            console.log('err', error);
        });
    };
    Object.defineProperty(AreaComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.areaForm.controls; },
        enumerable: true,
        configurable: true
    });
    AreaComponent.prototype.onAreaSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.areaForm.invalid) {
            return;
        }
        var formValue = this.areaForm.value;
        console.log(formValue.formSaveKey);
        if (formValue.formSaveKey === 'add') {
            this.DataService.addArea(formValue).subscribe(function (data) {
                $('#Area').modal('hide');
                // this.pagedItems.splice(0, 0, data.area);
                // this.allItems.push(data.area);
                // this.setPage(1);
                _this.listing(1);
                //this.pagedItems.push(data.area);
                console.log(data);
                sessionStorage.setItem('areaKey', data['regSeq']);
            }, function (error) {
                console.log('err', error);
            });
        }
        else if (formValue.formSaveKey === 'update') {
            this.DataService.updateArea(formValue).subscribe(function (data) {
                $('#Area').modal('hide');
                _this.listing(_this.pager.currentPage);
                //this.pagedItems.splice(this.pagedItems.indexOf(data.area['areaSeq']), 1);
                //this.pagedItems.push(data.area);
                console.log(data);
                sessionStorage.setItem('areaKey', data['regSeq']);
            }, function (error) {
                console.log('err', error);
            });
        }
        return false;
    };
    AreaComponent.prototype.areaFun = function (id) {
        sessionStorage.setItem('clickArea', id);
        this.router.navigate(['/setup/organization/branch', id]);
        //this.router.navigate(['/product-details', id]);
    };
    //pagenation
    AreaComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.DataService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    //delete
    AreaComponent.prototype.deleteItem = function (passedId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Area?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.DataService.delArea(passedId).subscribe(function (result) {
                    _this.listing(_this.pagedItems.currentPage);
                    //this.pagedItems.splice(this.pagedItems.indexOf(passedId), 1);
                    //console.log(this.pagedItems);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Deleted!', 'Area has been deleted.', 'success');
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Deleted!', error.error['error'], 'error');
                    console.log('There was an error: ', error.error['error']);
                });
            }
        });
    };
    //add
    AreaComponent.prototype.addItem = function () {
        this.editArea = false;
        this.submitted = false;
        $('#Area').modal('show');
        this.areaForm = this.formBuilder.group({
            formSaveKey: ['add'],
            regionSeq: [sessionStorage.getItem('clickorganization')],
            areaName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            areaStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            areaDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    //edit
    AreaComponent.prototype.editItem = function (passedId) {
        var _this = this;
        this.editArea = true;
        console.log(passedId);
        this.DataService.editArea(passedId).subscribe(function (result) {
            console.log(result);
            $('#Area').modal('show');
            _this.areaForm = _this.formBuilder.group({
                formSaveKey: ['update'],
                areaSeq: [result.areaSeq],
                regionSeq: [result.regionSeq],
                areaId: [result.areaId],
                areaName: [result.areaName],
                areaStatus: [result.areaStatus],
                areaDescription: [result.areaDescription],
            });
        }, function (error) { return console.log('There was an error: ', error); });
    };
    //UserAssignment
    AreaComponent.prototype.UserAssignment = function (passedId) {
        var _this = this;
        this.employeeAssignmentForm.reset();
        $('#UserAssignment').modal('show');
        console.log(passedId);
        sessionStorage.setItem('UserAssignment', passedId);
        this.DataService.UserAssignmentArea(passedId).subscribe(function (result) {
            console.log(result);
            if (result != null)
                _this.employeeAssignmentForm.controls['regionManager'].setValue(result.empSeq);
            // this.employeeAssignmentForm.controls['clerk'].setValue(result.clerk);
            // this.employeeAssignmentForm.controls['manager'].setValue(result.manager);
        }, function (error) { return console.log('There was an error: ', error); });
        this.employeeAssignmentForm.controls['parentKey'].setValue(passedId);
    };
    Object.defineProperty(AreaComponent.prototype, "s", {
        //sarch start
        get: function () { return this.employeeAssignmentForm.controls; },
        enumerable: true,
        configurable: true
    });
    AreaComponent.prototype.onemployeeAssignmentSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.employeeAssignmentForm.invalid) {
            return;
        }
        var formValue = this.employeeAssignmentForm.value;
        console.log(formValue);
        this.DataService.addAreaEmployee(formValue).subscribe(function (res) {
            _this.toaster.success("Saved");
            $('#UserAssignment').modal('hide');
        }, function (error) {
            _this.toaster.error(error);
            console.log('err', error);
        });
        // if (formValue.formSaveKey === 'add') {
        // 	this.DataService.addEmployeeArea(formValue).subscribe((data) => {
        // 		(<any>$('#UserAssignment')).modal('hide');
        // 		//this.pagedItems.push(data.region);
        // 		console.log(data);
        // 	}, (error) => {
        // 		console.log('err', error);
        // 	});
        // } else if (formValue.formSaveKey === 'update') {
        // 	this.DataService.updateOrganization(formValue).subscribe((data) => {
        // 		(<any>$('#UserAssignment')).modal('hide');
        // 		this.pagedItems.splice(this.pagedItems.indexOf(data.region['regSeq']), 1);
        // 		this.pagedItems.push(data.region);
        // 		console.log(data);
        // 	}, (error) => {
        // 		console.log('err', error);
        // 	});
        // }
        return false;
    };
    //search service
    AreaComponent.prototype.search = function ($event, field) {
        // search items
        this.regionManager = '';
        this.coveringRegManager = '';
        this.clerk = '';
        this.coveringClerk = '';
        this.manager = '';
        this.coveringManager = '';
        console.log(field);
        var value = $event.target.value;
        console.log(value);
        if (value.length >= 2) {
            // this.DataService.searchArea().subscribe(result => {
            // 	if (field === 'regionManager') {
            // 		this.regionManager = result;
            // 	} else if (field === 'coveringRegManager') {
            // 		this.coveringRegManager = result;
            // 	} else if (field === 'clerk') {
            // 		this.clerk = result;
            // 	} else if (field === 'coveringClerk') {
            // 		this.coveringClerk = result;
            // 	} else if (field === 'manager') {
            // 		this.manager = result;
            // 	} else if (field === 'coveringManager') {
            // 		this.coveringManager = result;
            // 	}
            // 	console.log(result);
            // }, error => console.log('There was an error: ', error));
        }
    };
    AreaComponent.prototype.serchSelected = function (Value, field) {
        console.log(field);
        //let formValue: any = this.employeeAssignmentForm.value;
        //emplyee accignment
        if (field === 'regionManager') {
            this.employeeAssignmentForm.controls['regionManager'].setValue(Value);
            this.regionManager = '';
        }
        else if (field === 'coveringRegManager') {
            this.employeeAssignmentForm.controls['coveringRegManager'].setValue(Value);
            this.coveringRegManager = '';
        }
        else if (field === 'clerk') {
            this.employeeAssignmentForm.controls['clerk'].setValue(Value);
            this.clerk = '';
        }
        else if (field === 'coveringClerk') {
            this.employeeAssignmentForm.controls['coveringClerk'].setValue(Value);
            this.coveringClerk = '';
        }
        else if (field === 'manager') {
            this.employeeAssignmentForm.controls['manager'].setValue(Value);
            this.manager = '';
        }
        else if (field === 'coveringManager') {
            this.employeeAssignmentForm.controls['coveringManager'].setValue(Value);
            this.coveringManager = '';
        }
    };
    //update
    AreaComponent.prototype.StatusUpdate = function (passedId) {
        console.log(passedId);
        this.DataService.StatusUpdateArea(passedId).subscribe(function (result) {
            console.log(result);
            /*
            this.employeeAssignmentForm.controls['regionManager'].setValue(result.regionManager);
            (<any>$("#Countrycodes")).modal('show');
            this.organizationForm = this.formBuilder.group({
                regionSeq: [result.regSeq],
                regionCode: [""],
                formSaveKey: ['update'],
                regionName: [result.regNm],
                regionType: [result.regTyp],
                regionStatus: [result.regStsKey],
                regionDescription: [result.regDscr],
                regionAddress: [""],
                //regionStatus: ['', Validators.required]
            });*/
        }, function (error) { return console.log('There was an error: ', error); });
    };
    AreaComponent.prototype.keyPress = function (event) {
        var pattern = /[a-zA-Z0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    //get addresses
    AreaComponent.prototype.getLocations = function () {
        var _this = this;
        $('#Location').modal('show');
        this.loanService.getLocations().subscribe(function (res) {
            console.log(res);
            _this.addresses = res;
            // this.addresses = res;
        }, function (error) {
            console.log('err In Loan Service');
            console.log('err', error);
        });
    };
    //address:any = new Address();
    AreaComponent.prototype.selectAddress = function (add) {
        console.log(add);
        //this.address = add;
        this.areaForm.controls['province'].setValue(add['province']);
        this.areaForm.controls['district'].setValue(add['district']);
        this.areaForm.controls['tehsil'].setValue(add['tehsil']);
        this.areaForm.controls['uc'].setValue(add['uc']);
        this.areaForm.controls['city'].setValue(add['city']);
        this.areaForm.controls['provinceName'].setValue(add['provinceName']);
        this.areaForm.controls['districtName'].setValue(add['districtName']);
        this.areaForm.controls['tehsilName'].setValue(add['tehsilName']);
        this.areaForm.controls['ucName'].setValue(add['ucName']);
        this.areaForm.controls['cityName'].setValue(add['cityName']);
        //Object.assign(this.model.coBorrowerAddress ,add,this.model.coBorrowerAddress);
        console.log(this.areaForm);
    };
    AreaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-area',
            template: __webpack_require__(/*! ./area.component.html */ "./src/app/pages/setup/organization/area/area.component.html"),
            styles: [__webpack_require__(/*! ./area.component.css */ "./src/app/pages/setup/organization/area/area.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services_loan_service__WEBPACK_IMPORTED_MODULE_2__["LoanService"], _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], AreaComponent);
    return AreaComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/organization/branch/branch.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/pages/setup/organization/branch/branch.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/organization/branch/branch.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/setup/organization/branch/branch.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n\r\n\r\n      <div class=\"modal fade\" id=\"AssignCheque\" role=\"dialog\">\r\n        <div class=\"modal-dialog mymodal\" style=\"top:2%\">\r\n\r\n          <!-- Modal content-->\r\n\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\">Remittance</h5>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                  <thead class=\"thead-light\">\r\n                    <tr>\r\n                      <th><b>Remittance Type</b></th>\r\n                      <th><b>Select</b></th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let pymt of allPaymentTypes\">\r\n                      <td>{{pymt.typStr}}</td>\r\n                      <td>\r\n                        <mat-checkbox class=\"example-margin\" name=\"selfPDC\" (change)=\"addUpdateType(pymt, $event)\"\r\n                          [(ngModel)]=\"pymt.ischecked\">\r\n                        </mat-checkbox>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <div class=\"modal-footer smmodal-footer text-center\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Ok</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Branch <i class=\"fa fa-search\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 addBtn\">\r\n              <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" (click)=\"addItem()\"><i class=\"fa fa-plus\"></i>\r\n                Add</button>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>Branch Code</th>\r\n                  <th>Branch Name</th>\r\n                  <th>Branch Type</th>\r\n                  <!--<th>Branch Category</th>-->\r\n                  <th>Description</th>\r\n                  <th>Status</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let branch of pagedItems\">\r\n                  <td>{{branch.brnchCd}}</td>\r\n                  <td><a (click)=\"branchFun(branch.brnchSeq, branch.brnchNm)\">{{branch.brnchNm}}</a></td>\r\n                  <td>{{findValueByKey(branch.brnchTypKey, branchTypes)}}</td>\r\n                  <!--<td>{{branch.areaCat}}</td>-->\r\n                  <td>{{branch.brnchDscr}}</td>\r\n                  <td>{{findValueByKeyStatus(branch.brnchStsKey)}}</td>\r\n\r\n                  <td>\r\n                    <a class=\"iconBtn\" data-toggle=\"modal\" (click)=\"openTabAssignment(branch.brnchSeq)\"><i\r\n                        class=\"fa fa-tablet\"></i></a>\r\n                    <a class=\"iconBtn\" data-toggle=\"modal\" (click)=\"openPayment(branch.brnchSeq)\"><i\r\n                        class=\"fa fa-plus\"></i></a>\r\n                    <a href=\"#\" data-toggle=\"modal\" (click)=\"ProductAssign(branch.brnchSeq, branch.brnchNm)\"\r\n                      class=\"iconBtn\"><i class=\"fa fa-product-hunt\"></i></a>\r\n                    <a href=\"#\" class=\"iconBtn\" data-toggle=\"modal\"\r\n                      (click)=\"AccountSetup(branch.brnchSeq, branch.brnchNm)\"><img src=\"assets/images/setup-icon.png\"\r\n                        alt=\"\"></a>\r\n                    <a href=\"#\" class=\"iconBtn\" data-toggle=\"modal\" (click)=\"AssignLocation(branch.brnchSeq)\"><img\r\n                        src=\"assets/images/pin-icon.png\" alt=\"\"></a>\r\n\r\n                    <a data-toggle=\"modal\" (click)=\"UserAssignment(branch.brnchSeq)\" class=\"iconBtn\"><i\r\n                        class=\"fa fa-user\"></i></a>\r\n                    <!--<a href=\"#\" class=\"iconBtn marker\"><i class=\"fa fa-map-marker\"></i></a>-->\r\n                    <a (click)=\"editItem(branch.brnchSeq)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                    <a (click)=\"deleteItem(branch.brnchSeq)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                    <!-- <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a> -->\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class=\"back\">\r\n            <a routerLink=\"/setup/organization/area/{{clickBranch}}\" class=\"btn btn-primary btn-min\"><i\r\n                class=\"fa fa-chevron-left\"></i>\r\n              Back</a>\r\n          </div>\r\n          <nav aria-label=\"Page navigation \">\r\n            <ul class=\"pagination justify-content-center\" *ngIf=\"pager.pages && pager.pages.length\">\r\n              <li class=\"page-item disabled\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n              </li>\r\n              <li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                <a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n              </li>\r\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<div class=\"modal fade\" id=\"ProductAssign\" role=\"dialog\">\r\n  <div class=\"modal-dialog mymodal\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Product Assign to the Branch</h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"ProductAssignForm\" (ngSubmit)=\"onProductAssignSubmit()\">\r\n        <div class=\"modal-body pb-1 pt-2\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table mb-0 last-left\">\r\n              <thead class=\"thead-light last-left\">\r\n                <tr>\r\n                  <th>Product ID</th>\r\n                  <th>Product Name</th>\r\n                  <th>Product Type</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let assign of ProductAssignValue; let i = index;\">\r\n                  <td><input type=\"checkbox\" [checked]=\"assign.checked\" [id]=\"'checkP-'+assign.productSeq\"\r\n                      value=\"{{assign.productSeq}}\"\r\n                      (click)=\"changeRadioProductAssignStatus($event)\">{{assign.productSeq}}</td>\r\n                  <td>{{assign.productName}}</td>\r\n                  <td>{{assign.calcType}}</td>\r\n\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center pb-3\">\r\n          <button class=\"btn btn-primary\">Ok</button>\r\n          <!-- <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button> -->\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"AssignLocation\" role=\"dialog\">\r\n  <div class=\"modal-dialog bigger mymodal\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Assign Location </h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"AssignLocationForm\" (ngSubmit)=\"onAssignLocationSubmit()\">\r\n\r\n        <div class=\"modal-body\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table last-left\" id=\"myTable\">\r\n              <thead class=\"thead-light last-left\">\r\n                <tr>\r\n                  <th></th>\r\n                  <th>Province</th>\r\n                  <th>District</th>\r\n                  <th>Tehseel</th>\r\n                  <th width=\"20%\">UC</th>\r\n                  <th>City</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n\r\n                <tr *ngFor=\"let assign of AssignLocationValue; let i = index;\">\r\n                  <td><input type=\"checkbox\" [checked]=\"assign.checked\" [id]=\"'check-'+assign.city\"\r\n                      value=\"{{assign.city}}\" (click)=\"changeRadioStatus($event)\"></td>\r\n                  <td>{{assign.provinceName}}</td>\r\n                  <td>{{assign.districtName}}</td>\r\n                  <td>{{assign.tehsilName}}</td>\r\n                  <td>{{assign.ucName}}</td>\r\n                  <td>{{assign.cityName}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"modal-footer text-center pt-0\">\r\n          <button class=\"btn btn-primary\">Ok</button>\r\n          <!-- <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button> -->\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"AccountSetup\" role=\"dialog\">\r\n  <div class=\"modal-dialog big mymodal\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Account Setup</h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"AccountSetupForm\" (ngSubmit)=\"onAccountSetupSubmit()\">\r\n        <div class=\"modal-body\">\r\n          <ul class=\"infolist\">\r\n            <li>Branch ID: <span>{{AccountSetupId}}</span></li>\r\n          </ul>\r\n          <ul class=\"infolist\">\r\n            <li>Branch Name: <span>{{AccountSetupName}}</span></li>\r\n          </ul>\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol2\">\r\n              <label>Bank Name:</label>\r\n              <!-- \r\n              <mat-form-field>\r\n                  <mat-select placeholder=\"Select Occupation\" [errorStateMatcher]=\"matcher\" pattern=\"^[1-9]\\d*$\" formControlName=\"bankName\"\r\n                    name=\"occupationKey\" required>\r\n                    <mat-option *ngFor=\"let edu of banks\" [value]=\"edu.codeKey\">\r\n                      {{edu.codeValue}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field> -->\r\n\r\n              <select class=\"form-control\" formControlName=\"bankName\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && a.bankName.errors }\">\r\n                <option *ngFor=\"let edu of banks\" [value]=\"edu.codeKey\">{{edu.codeValue}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <label>Bank Branch:</label>\r\n              <input (keypress)=\"keyPressText($event)\" type=\"text\" class=\"form-control\" formControlName=\"bankBranch\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && a.bankBranch.errors }\">\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <label>Account Title:</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"accTitle\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && a.accTitle.errors }\">\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <label>Account No:</label>\r\n              <input type=\"text\" (keypress)=\"onlyNumbers($event)\" class=\"form-control\" formControlName=\"accNo\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && a.accNo.errors }\">\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <label>IBAN No:</label>\r\n              <input type=\"text\" (keypress)=\"onlyNumbers($event)\" class=\"form-control\" formControlName=\"ibanNo\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && a.ibanNo.errors }\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"submitted && a.bankName.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n          <i class=\"fa fa-exclamation-circle\"></i>\r\n          <strong *ngIf=\"a.bankName.errors.required\">Please Select Bank Name</strong>\r\n        </div>\r\n        <div *ngIf=\"submitted && a.bankBranch.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n          <i class=\"fa fa-exclamation-circle\"></i>\r\n          <strong *ngIf=\"a.bankBranch.errors\">Please Enter Bank Branch</strong>\r\n        </div>\r\n        <div *ngIf=\"submitted && a.accTitle.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n          <i class=\"fa fa-exclamation-circle\"></i>\r\n          <strong *ngIf=\"a.accTitle.errors\">Please Enter Account Title</strong>\r\n        </div>\r\n        <div *ngIf=\"submitted && a.accNo.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n          <i class=\"fa fa-exclamation-circle\"></i>\r\n          <strong *ngIf=\"a.accNo.errors\">Please Enter Account No</strong>\r\n        </div>\r\n        <div *ngIf=\"submitted && a.ibanNo.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n          <i class=\"fa fa-exclamation-circle\"></i>\r\n          <strong *ngIf=\"a.ibanNo.errors\">Please Enter IBAN No</strong>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button class=\"btn btn-primary\">Ok</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"UserAssignment\" role=\"dialog\">\r\n  <div class=\"modal-dialog mymodal bigger\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Employee Assignment</h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"employeeAssignmentForm\" (ngSubmit)=\"onemployeeAssignmentSubmit()\">\r\n        <div class=\"modal-body pt-0\" style=\"overflow:visible\">\r\n          <div class=\"pt-1 pb-2\">\r\n            <h6 class=\"colorBlack small mb-0 pt-1\"><b>Position</b></h6>\r\n          </div>\r\n          <div class=\"borderbox p-2 pb-3\">\r\n            <div class=\"userfields\">\r\n              <div class=\"cRow vrbp0\">\r\n                <div class=\"cCol2\">\r\n                  <!-- <label>Branch Manager</label> -->\r\n                  <!-- <select formControlName=\"empSeq\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select> -->\r\n\r\n                  <!-- <ng-select [items]=\"userList\" required bindLabel=\"empNm\" bindValue=\"empNm\"\r\n                    name=\"empSeq\" placeholder=\"Branch Manager\" formControlName=\"empSeq\">\r\n                  </ng-select> --> \r\n\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Branch Manager\" formControlName=\"empSeq\" name=\"empSeq\">\r\n                      <mat-option *ngFor=\"let edu of userList\" [value]=\"edu.empSeq\">\r\n                        {{edu.empNm}}    ({{edu.empLanId}})\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <!--<div style=\"width: 50%;\"> \t\r\n                             <input formControlName=\"regionManager\" (keydown)=\"search($event, 'regionManager')\" type=\"text\"  class=\"form-control\" placeholder=\"Asad Khan\">\r\n                             <ul *ngIf=\"regionManager\" style=\"position: absolute;z-index: 999;background-color:#fff; width:16%;border:1px solid #999999;padding: 5px;\">\r\n                             <li *ngFor=\"let search of regionManager\" (click)=\"serchSelected(search.empSeq, 'regionManager')\" style=\"width: 100%;\">{{search.empNm}}</li>\r\n                             </ul>\r\n                             </div>-->\r\n                  <!-- <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a> -->\r\n                </div>\r\n                <div class=\"cCol2\">\r\n\r\n\r\n                  <!-- <ng-select autoCorrect [items]=\"userList\" required required bindLabel=\"empLanId\" bindValue=\"empLanId\"\r\n                    name=\"coveringEmpSeq\" placeholder=\"Covering Employee\" formControlName=\"coveringEmpSeq\">\r\n                  </ng-select> -->\r\n\r\n\r\n                  <mat-form-field>\r\n                        <mat-select placeholder=\"Covering Employee\" formControlName=\"coveringEmpSeq\" name=\"coveringEmpSeq\">\r\n                          <mat-option *ngFor=\"let edu of userList\" [value]=\"edu.empSeq\">\r\n                            {{edu.empNm}}   ({{edu.empLanId}})\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                  <!-- <label>Covering Employee</label>\r\n                  <select formControlName=\"coveringEmpSeq\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select> -->\r\n                  <!--<div style=\"width: 50%;\"> \t\t\r\n                             <input formControlName=\"coveringRegManager\"  value=\"\" (keydown)=\"search($event, 'coveringRegManager')\" type=\"text\" class=\"form-control\" placeholder=\"Asad Khan\">\r\n                              <ul *ngIf=\"coveringRegManager\" style=\"position: absolute;z-index: 999;background-color:#fff; width:16%;border:1px solid #999999;padding: 5px;\">\r\n                             <li *ngFor=\"let search of coveringRegManager\" (click)=\"serchSelected(search.empSeq, 'coveringRegManager')\" style=\"width: 100%;\">{{search.empNm}}</li>\r\n                             </ul>\r\n                             </div>-->\r\n                  <!-- <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a> -->\r\n                </div>\r\n                <div class=\"cCol4 date2\">\r\n                  <div class=\"input-group date mr-1\">\r\n                    <mat-form-field>\r\n                      <input matInput [matDatepicker]=\"picker1\" placeholder=\"From Date:\"\r\n                        formControlName=\"coveringEmpFromDate\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                      <mat-datepicker startView=\"year\" #picker1></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <!-- <input formControlName=\"coveringEmpFromDate\" type=\"date\" class=\"form-control\" placeholder=\"To Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div> -->\r\n                  </div>\r\n                  <div class=\"input-group date\">\r\n                    <mat-form-field>\r\n                      <input matInput [matDatepicker]=\"picker2\" placeholder=\"To Date:\"\r\n                        formControlName=\"coveringEmpToDate\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                      <mat-datepicker startView=\"year\" #picker2></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <!-- <input type=\"date\" formControlName=\"coveringEmpToDate\" class=\"form-control\" placeholder=\"From Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"cRow vrbp0\">\r\n                <div class=\"cCol5 inlincbox\">\r\n                  <label>Clerk</label>\r\n                  <select formControlName=\"clerk\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                </div>\r\n                <div class=\"cCol5 inlincbox\">\r\n                  <label>Covering Employee</label>\r\n                  <select formControlName=\"coveringClerk\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                </div>\r\n                <div class=\"cCol1 date2\">\r\n                  <div class=\"input-group date mr-1\">\r\n                    <input type=\"date\" formControlName=\"coveringClerkDateFrom\" class=\"form-control\" placeholder=\"To Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"input-group date\">\r\n                    <input formControlName=\"coveringClerkDateTo\" type=\"date\" class=\"form-control\" placeholder=\"From Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n              <!-- <div class=\"cRow vrbp0\">\r\n                <div class=\"cCol5 inlincbox\">\r\n                  <label>Accountant</label>\r\n                  <select formControlName=\"manager\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                </div>\r\n                <div class=\"cCol5 inlincbox\">\r\n                  <label>Covering Employee</label>\r\n                  <select formControlName=\"coveringManager\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                </div>\r\n                <div class=\"cCol1 date2\">\r\n                  <div class=\"input-group date mr-1\">\r\n                    <input formControlName=\"coveringManagerDateFrom\" type=\"date\" class=\"form-control\" placeholder=\"To Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"input-group date\">\r\n                    <input formControlName=\"coveringManagerDateTo\" type=\"date\" class=\"form-control\" placeholder=\"From Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer text-center pb-3\">\r\n            <button class=\"btn btn-primary\" type=\"submit\">Ok</button>\r\n            <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"branch\" role=\"dialog\">\r\n  <div class=\"modal-dialog biger mymodal\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Branch </h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"branchForm\" (ngSubmit)=\"onBranchSubmit()\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\" *ngIf=\"editBranch\">\r\n            <div class=\"cCol2\">\r\n              <ng-select [items]=\"regions\" required bindLabel=\"regNm\" bindValue=\"regSeq\" name=\"regNm\"\r\n                placeholder=\"Select Region:\" formControlName=\"regionSeq\" (change)=\"regionChange()\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <ng-select [items]=\"areas\" required bindLabel=\"areaNm\" bindValue=\"areaSeq\" name=\"areaNm\"\r\n                placeholder=\"Select Area:\" formControlName=\"areaSeq\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol1\">\r\n              <label>Branch Name:</label>\r\n              <input (keypress)=\"keyPress($event)\" type=\"text\" class=\"form-control\" formControlName=\"branchName\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.branchName.errors }\" />\r\n            </div>\r\n            <div class=\"cCol1\">\r\n              <label>Branch Type:</label>\r\n              <select class=\"form-control\" formControlName=\"brnchTypKey\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.brnchTypKey.errors }\">\r\n                <option *ngFor=\"let edu of branchTypes\" value=\"{{edu.codeKey}}\">{{edu.codeValue}}</option>\r\n              </select>\r\n            </div>\r\n            <!--<div class=\"cCol1\">\r\n                    <label>Branch Category:</label>\r\n                    <select class=\"form-control\" formControlName=\"branchCategory\" [ngClass]=\"{ 'is-invalid': submitted && f.branchCategory.errors }\">\r\n                    \t<option value=\"1\" [selected] =\"1\">Branch Category\t</option>\r\n                        <option value=\"2\">Branch Category\t</option>\r\n                    </select>\r\n                  </div>-->\r\n            <div class=\"cCol1\">\r\n              <label>Status:</label>\r\n              <select class=\"form-control\" formControlName=\"branchStatus\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.branchStatus.errors }\">\r\n                <option *ngFor=\"let status of statusListing\" value=\"{{status.codeKey}}\">{{status.codeValue}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-full\">\r\n              <label>Description:</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"branchDescription\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.branchDescription.errors }\" />\r\n            </div>\r\n            <!-- <div class=\"cCol\">\r\n                    <label>province:</label>\r\n                    <input type=\"text\" readonly class=\"form-control\" formControlName=\"provinceName\" [ngClass]=\"{ 'is-invalid': submitted && f.provinceName.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol\">\r\n                    <label>district:</label>\r\n                    <input type=\"text\" readonly class=\"form-control\" formControlName=\"districtName\" [ngClass]=\"{ 'is-invalid': submitted && f.districtName.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol\">\r\n                    <label>tehsil:</label>\r\n                    <input type=\"text\" readonly class=\"form-control\" formControlName=\"tehsilName\" [ngClass]=\"{ 'is-invalid': submitted && f.tehsilName.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol\">\r\n                    <label>uc:</label>\r\n                    <input type=\"text\" readonly class=\"form-control\" formControlName=\"ucName\" [ngClass]=\"{ 'is-invalid': submitted && f.ucName.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol\">\r\n                    <label>city:</label>\r\n                    <input type=\"text\" readonly class=\"form-control\" formControlName=\"cityName\" [ngClass]=\"{ 'is-invalid': submitted && f.cityName.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol mt-4\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-dots\" data-toggle=\"modal\" (click)=\"getLocations()\"></button>\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol1\">\r\n                    <label>houseNum:</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"houseNum\" [ngClass]=\"{ 'is-invalid': submitted && f.houseNum.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol1\">\r\n                    <label>street:</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"street\" [ngClass]=\"{ 'is-invalid': submitted && f.street.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol1\">\r\n                    <label>village:</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"village\" [ngClass]=\"{ 'is-invalid': submitted && f.village.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol1\">\r\n                    <label>other:</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"other\" [ngClass]=\"{ 'is-invalid': submitted && f.other.errors }\" />\r\n                  </div> -->\r\n\r\n\r\n            <!--<div class=\"col-full\">\r\n                    <label>Address:</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"branchAddress\" [ngClass]=\"{ 'is-invalid': submitted && f.branchAddress.errors }\" />\r\n                  </div>-->\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"submitted && f.branchName.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n          <i class=\"fa fa-exclamation-circle\"></i>\r\n          <strong *ngIf=\"f.branchName.errors\">Please Enter Branch Name</strong>\r\n        </div>\r\n        <div *ngIf=\"submitted && f.branchDescription.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n          <i class=\"fa fa-exclamation-circle\"></i>\r\n          <strong *ngIf=\"f.branchDescription.errors\">Please Enter Branch Description</strong>\r\n        </div>\r\n        <!--<div *ngIf=\"submitted && f.branchAddress.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n                  <i  class=\"fa fa-exclamation-circle\"></i>  \r\n                  <strong *ngIf=\"f.branchAddress.errors\">Please Enter Branch Address</strong>\r\n                </div>-->\r\n        <div class=\"modal-footer text-center\">\r\n          <button class=\"btn btn-primary\">Ok</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"AssignTablet\" role=\"dialog\">\r\n  <div class=\"modal-dialog big mymodal\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Assign Tablet</h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"AssignTabletForm\">\r\n        <div class=\"modal-body\" style=\"padding-top:4em\">\r\n\r\n          <div class=\"row\">\r\n            <!-- <div class=\"cCol2\">\r\n                <label>Bank Name:</label>\r\n  \r\n                <select class=\"form-control\" formControlName=\"bankName\" [ngClass]=\"{ 'is-invalid': submitted && a.bankName.errors }\">\r\n                  <option *ngFor=\"let edu of banks\" [value]=\"edu.codeKey\">{{edu.codeValue}}</option>\r\n                </select>\r\n              </div> -->\r\n            <div class=\"col-sm-1\">\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <!-- <label>Bank Branch:</label>\r\n                <input (keypress)=\"keyPressText($event)\" type=\"text\" class=\"form-control\" formControlName=\"bankBranch\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && a.bankBranch.errors }\"> -->\r\n              <mat-form-field>\r\n                <input [readonly]=\"hasDvc\" type=\"text\" matInput formControlName=\"dvcAddr\" placeholder=\"Device Unique Id\"\r\n                  name=\"dvcAddr\" minlength=\"16\" maxlength=\"16\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <mat-form-field>\r\n                <input [readonly]=\"hasDvc\" type=\"text\" matInput formControlName=\"crtdBy\" placeholder=\"Identifier\"\r\n                  name=\"identifier\" maxlength=\"30\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-1\">\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <button *ngIf=\"hasDvc\" (click)=\"unregisterDevice()\" type=\"button\" mat-stroked-button\r\n                color=\"warn\">Un-Register Device</button>\r\n              <button *ngIf=\"!hasDvc\" (click)=\"registerDevice()\" type=\"button\" mat-stroked-button\r\n                color=\"primary\">Register Device</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-1\"></div>\r\n            <!-- <div class=\"col-sm-1\" *ngIf=\"\"></div> -->\r\n          </div>\r\n        </div>\r\n        <!-- <div *ngIf=\"submitted && a.bankName.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n            <i class=\"fa fa-exclamation-circle\"></i>\r\n            <strong *ngIf=\"a.bankName.errors.required\">Please Select Bank Name</strong>\r\n          </div>\r\n          <div *ngIf=\"submitted && a.bankBranch.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n            <i class=\"fa fa-exclamation-circle\"></i>\r\n            <strong *ngIf=\"a.bankBranch.errors\">Please Enter Bank Branch</strong>\r\n          </div>\r\n          <div *ngIf=\"submitted && a.accTitle.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n            <i class=\"fa fa-exclamation-circle\"></i>\r\n            <strong *ngIf=\"a.accTitle.errors\">Please Enter Account Title</strong>\r\n          </div>\r\n          <div *ngIf=\"submitted && a.accNo.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n            <i class=\"fa fa-exclamation-circle\"></i>\r\n            <strong *ngIf=\"a.accNo.errors\">Please Enter Account No</strong>\r\n          </div>\r\n          <div *ngIf=\"submitted && a.ibanNo.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n            <i class=\"fa fa-exclamation-circle\"></i>\r\n            <strong *ngIf=\"a.ibanNo.errors\">Please Enter IBAN No</strong>\r\n          </div> -->\r\n        <div class=\"modal-footer text-center\">\r\n          <!-- <button class=\"btn btn-primary\">Ok</button> -->\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"Location\" role=\"dialog\">\r\n  <div class=\"modal-dialog bigger mymodal\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Location </h5>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table last-left\">\r\n            <thead class=\"thead-light last-left\">\r\n              <tr>\r\n                <th>Province</th>\r\n                <th>District</th>\r\n                <th>Tehseel</th>\r\n                <th width=\"20%\">UC</th>\r\n                <th>City</th>\r\n                <th>Select</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody class=\"evenodd\">\r\n              <tr *ngFor=\"let address of addresses\">\r\n                <td>{{address.provinceName}} </td>\r\n                <td>{{address.districtName}}</td>\r\n                <td>{{address.tehsilName}}</td>\r\n                <td>{{address.ucName}}</td>\r\n                <td>{{address.cityName}}</td>\r\n                <td>\r\n                  <button data-dismiss=\"modal\" type=\"button\" class=\"btn btn-primary btn-min\"\r\n                    (click)=\"selectAddress(address)\">Select</button>\r\n                </td>\r\n              </tr>\r\n\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/setup/organization/branch/branch.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/setup/organization/branch/branch.component.ts ***!
  \*********************************************************************/
/*! exports provided: BranchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchComponent", function() { return BranchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _shared_services_loan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/loan.service */ "./src/app/shared/services/loan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/models/REF_CODE_GRP_KEYS.mocks */ "./src/app/shared/models/REF_CODE_GRP_KEYS.mocks.ts");
/* harmony import */ var _shared_services_paymentTypes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/paymentTypes.service */ "./src/app/shared/services/paymentTypes.service.ts");
/* harmony import */ var _shared_models_branch_remit_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/models/branch-remit.model */ "./src/app/shared/models/branch-remit.model.ts");
/* harmony import */ var _shared_services_branch_remit_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/branch-remit.service */ "./src/app/shared/services/branch-remit.service.ts");
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













var BranchComponent = /** @class */ (function () {
    function BranchComponent(router, DataService, loanService, formBuilder, commonService, paymentTypesService, branchRemitService, toaster, spinner) {
        this.router = router;
        this.DataService = DataService;
        this.loanService = loanService;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.paymentTypesService = paymentTypesService;
        this.branchRemitService = branchRemitService;
        this.toaster = toaster;
        this.spinner = spinner;
        this.clickBranch = sessionStorage.getItem('clickArea');
        this.branchTypes = [];
        this.submitted = false;
        // array of all items to be paged
        this.allItems = [];
        this.allPaymentTypes = [];
        // pager object
        this.pager = {};
        // paged items
        this.pagedItems = [];
        // search items
        this.userList = '';
        this.regionManager = '';
        this.coveringRegManager = '';
        this.clerk = '';
        this.coveringClerk = '';
        this.manager = '';
        this.coveringManager = '';
        //AccountSetup
        this.AccountSetupName = '';
        this.AccountSetupId = '';
        //status
        this.statusListing = '';
        this.ProductAssignValue = [];
        this.ProductAssignId = [];
        this.ProductAssignCheckBox = [];
        this.AssignLocationValue = [];
        this.AssignLocationId = [];
        this.AssignLocationCheckBox = [];
        this.addresses = [];
        this.editBranch = false;
        this.counter = 0;
        this.tempArray = [];
        this.hasDvc = false;
    }
    BranchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonService.getValuesByGroupName('BUSINESS_OWNERSHIP').subscribe(function (d) { return _this.branchTypes = d; });
        this.branchForm = this.formBuilder.group({
            formSaveKey: ['add'],
            areaSeq: [sessionStorage.getItem('clickArea')],
            branchCode: ['1'],
            branchName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            brnchTypKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            branchType: [''],
            branchStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            branchDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            regionSeq: [sessionStorage.getItem('clickorganization')],
        });
        this.listing(1);
        //STATUS LIST
        this.commonService.getValues('0016').subscribe(function (res) {
            _this.statusListing = res;
        }, function (error) {
            console.log('err', error);
        });
        // this.DataService.statusList().subscribe(result => {
        // 	this.statusListing = result;
        // 	console.log(result);
        // }, error => console.log('There was an error: ', error));
        //userlist
        // this.DataService.getAllEmployeeList().subscribe(result => {
        // 	this.userList = result;
        // 	console.log(result);
        // }, error => console.log('There was an error: ', error));
        //emplyee accignment
        this.employeeAssignmentForm = this.formBuilder.group({
            formSaveKey: ['add'],
            parentKey: [sessionStorage.getItem('UserAssignment')],
            regionManager: [''],
            coveringRegManager: [''],
            coveringRegManagerDateFrom: [''],
            coveringRegManagerDateTo: [''],
            clerk: [''],
            coveringClerk: [''],
            coveringClerkDateFrom: [''],
            coveringClerkDateTo: [''],
            manager: [''],
            coveringManager: [''],
            coveringManagerDateFrom: [''],
            coveringManagerDateTo: [''],
            action: ['add'],
            brnchEmpSeq: [''],
            empSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            coveringEmpSeq: [''],
            brnchSeq: [''],
            coveringEmpFromDate: [''],
            coveringEmpToDate: ['']
        });
        //AccountSetupForm
        this.AccountSetupForm = this.formBuilder.group({
            formSaveKey: ['add'],
            branchSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            bankName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            bankBranch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            accTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            accNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ibanNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.AssignTabletForm = this.formBuilder.group({
            entyTypFlg: 2,
            dvcAddr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            entyTypSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            crtdBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        //AssignLocationForm
        this.AssignLocationForm = this.formBuilder.group({
            formSaveKey: ['add'],
            citySeq: [''],
        });
        //ProductAssignForm
        this.ProductAssignForm = this.formBuilder.group({
            formSaveKey: ['add'],
            prdSeq: [''],
        });
        this.loadLovs();
    };
    BranchComponent.prototype.regionChange = function () {
        var _this = this;
        this.DataService.getArea(this.branchForm.get('regionSeq').value).subscribe(function (data) {
            console.log(data);
            _this.areas = data;
            _this.branchForm.controls['areaSeq'].setValue(null);
        }, function (error) {
            console.log('err');
            console.log('err', error);
        });
    };
    BranchComponent.prototype.listing = function (page) {
        var _this = this;
        this.DataService.getOrganization().subscribe(function (data) {
            console.log(data);
            _this.regions = data;
        }, function (error) {
            console.log("err");
            console.log("err", error);
        });
        this.DataService.getArea(sessionStorage.getItem('clickorganization')).subscribe(function (data) {
            console.log(data);
            _this.areas = data;
        }, function (error) {
            console.log('err');
            console.log('err', error);
        });
        this.DataService.getBranch(sessionStorage.getItem('clickArea')).subscribe(function (data) {
            console.log(data);
            _this.allItems = data;
            // initialize to page 1
            _this.setPage(page);
        }, function (error) {
            console.log('err');
            console.log('err', error);
        });
    };
    Object.defineProperty(BranchComponent.prototype, "f", {
        get: function () { return this.branchForm.controls; },
        enumerable: true,
        configurable: true
    });
    BranchComponent.prototype.onBranchSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.branchForm.invalid) {
            return;
        }
        var formValue = this.branchForm.value;
        console.log(formValue.formSaveKey);
        if (formValue.formSaveKey === 'add') {
            this.DataService.addBranch(formValue).subscribe(function (data) {
                $('#branch').modal('hide');
                // this.pagedItems.splice(0, 0, data.branch);
                // this.allItems.push(data.branch);
                // this.setPage(1);
                _this.listing(1);
                //this.pagedItems.push(data.branch);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        else if (formValue.formSaveKey === 'update') {
            this.DataService.updateBranch(formValue).subscribe(function (data) {
                $('#branch').modal('hide');
                _this.listing(_this.pager.currentPage);
                //this.pagedItems.splice(this.pagedItems.indexOf(data.branch['brnchSeq']), 1);
                //this.pagedItems.push(data.branch);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        return false;
    };
    BranchComponent.prototype.branchFun = function (id, name) {
        sessionStorage.setItem('clickBranch', id);
        sessionStorage.setItem('branchName', name);
        this.router.navigate(['setup/organization/portfolio', id]);
        //this.router.navigate(['/product-details', id]);
    };
    //pagenation
    BranchComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.DataService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    //delete
    BranchComponent.prototype.deleteItem = function (passedId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Branch?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.DataService.delBranch(passedId).subscribe(function (result) {
                    _this.listing(_this.pager.currentPage);
                    //this.pagedItems.splice(this.pagedItems.indexOf(passedId), 1);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Deleted!', 'Branch has been deleted.', 'success');
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Deleted!', error.error['error'], 'error');
                    console.log('There was an error: ', error.error['error']);
                });
            }
        });
    };
    //add
    BranchComponent.prototype.addItem = function () {
        this.editBranch = false;
        this.submitted = false;
        $('#branch').modal('show');
        this.branchForm = this.formBuilder.group({
            formSaveKey: ['add'],
            areaSeq: [sessionStorage.getItem('clickArea')],
            branchCode: ['1'],
            branchName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            brnchTypKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            branchType: [''],
            branchStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            branchDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    //edit
    BranchComponent.prototype.editItem = function (passedId) {
        var _this = this;
        this.editBranch = true;
        console.log(passedId);
        this.DataService.editBranch(passedId).subscribe(function (result) {
            console.log(result);
            $('#branch').modal('show');
            _this.branchForm = _this.formBuilder.group({
                formSaveKey: ['update'],
                branchSeq: [result.branchSeq],
                areaSeq: [result.areaSeq],
                branchCode: [result.branchCode],
                branchName: [result.branchName],
                brnchTypKey: [result.brnchTypKey],
                branchType: [result.brnchTypKey],
                branchStatus: [result.branchStatus],
                branchDescription: [result.branchDescription],
                // areaSeq: [sessionStorage.getItem('clickArea')],
                regionSeq: [+sessionStorage.getItem('clickorganization')],
            });
            console.log(_this.branchForm);
        }, function (error) { return console.log('There was an error: ', error); });
    };
    //UserAssignment
    BranchComponent.prototype.UserAssignment = function (passedId) {
        var _this = this;
        this.spinner.show();
        this.DataService.getAllEmployeeListForBrnch(passedId, 1).subscribe(function (list) {
            _this.userList = list;
            console.log(list);
            _this.employeeAssignmentForm.reset();
            _this.employeeAssignmentForm.controls['brnchSeq'].setValue(passedId);
            $('#UserAssignment').modal('show');
            console.log(passedId);
            sessionStorage.setItem('UserAssignment', passedId);
            _this.DataService.UserAssignmentBranch(passedId).subscribe(function (result) {
                console.log(result);
                _this.spinner.hide();
                if (result.length > 0) {
                    _this.employeeAssignmentForm.controls['brnchEmpSeq'].setValue(result[0].brnchEmpSeq);
                    _this.employeeAssignmentForm.controls['empSeq'].setValue(result[0].empSeq);
                    _this.employeeAssignmentForm.controls['coveringEmpSeq'].setValue(result[0].coveringEmpSeq);
                    _this.employeeAssignmentForm.controls['brnchSeq'].setValue(passedId);
                    _this.employeeAssignmentForm.controls['coveringEmpFromDate'].setValue(result[0].coveringEmpFromDt);
                    _this.employeeAssignmentForm.controls['coveringEmpToDate'].setValue(result[0].coveringEmpToDt);
                    _this.employeeAssignmentForm.controls['action'].setValue('edit');
                }
                else {
                    _this.employeeAssignmentForm.controls['brnchSeq'].setValue(passedId);
                    _this.employeeAssignmentForm.controls['action'].setValue('add');
                }
            }, function (error) {
                console.log('There was an error: ', error);
                _this.spinner.hide();
            });
        }, function (error) {
            console.log('There was an error: ', error);
            _this.spinner.hide();
        });
    };
    Object.defineProperty(BranchComponent.prototype, "s", {
        //sarch start
        get: function () { return this.employeeAssignmentForm.controls; },
        enumerable: true,
        configurable: true
    });
    BranchComponent.prototype.onemployeeAssignmentSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.employeeAssignmentForm.invalid) {
            console.log("FORM INVALID");
            return;
        }
        var formValue = this.employeeAssignmentForm.value;
        console.log(formValue);
        this.DataService.addEmployeeBranch(formValue).subscribe(function (data) {
            $('#UserAssignment').modal('hide');
            //this.pagedItems.push(data.region);
            console.log(data);
        }, function (error) {
            console.log('err', error);
        });
        // const formValue: any = this.employeeAssignmentForm.value;
        // console.log(formValue);
        // if(formValue.action == 'add'){
        // 	this.DataService.addEmployeeBranch(formValue).subscribe((data) => {
        // 		(<any>$('#UserAssignment')).modal('hide');
        // 		//this.pagedItems.push(data.region);
        // 		console.log(data);
        // 	}, (error) => {
        // 		console.log('err', error);
        // 	});
        // }else if(formValue.action == 'edit'){
        // }
        // if (formValue.formSaveKey === 'add') {
        // 	this.DataService.addEmployeeBranch(formValue).subscribe((data) => {
        // 		(<any>$('#UserAssignment')).modal('hide');
        // 		//this.pagedItems.push(data.region);
        // 		console.log(data);
        // 	}, (error) => {
        // 		console.log('err', error);
        // 	});
        // } else if (formValue.formSaveKey === 'update') {
        // 	this.DataService.updateOrganization(formValue).subscribe((data) => {
        // 		(<any>$('#UserAssignment')).modal('hide');
        // 		this.pagedItems.splice(this.pagedItems.indexOf(data.region['regSeq']), 1);
        // 		this.pagedItems.push(data.region);
        // 		console.log(data);
        // 	}, (error) => {
        // 		console.log('err', error);
        // 	});
        // }
        return false;
    };
    //search service
    BranchComponent.prototype.search = function ($event, field) {
        // search items
        this.regionManager = '';
        this.coveringRegManager = '';
        this.clerk = '';
        this.coveringClerk = '';
        this.manager = '';
        this.coveringManager = '';
        console.log(field);
        var value = $event.target.value;
        console.log(value);
        if (value.length >= 2) {
            // this.DataService.searchBranch().subscribe(result => {
            // 	if (field === 'regionManager') {
            // 		this.regionManager = result;
            // 	} else if (field === 'coveringRegManager') {
            // 		this.coveringRegManager = result;
            // 	} else if (field === 'clerk') {
            // 		this.clerk = result;
            // 	} else if (field === 'coveringClerk') {
            // 		this.coveringClerk = result;
            // 	} else if (field === 'manager') {
            // 		this.manager = result;
            // 	} else if (field === 'coveringManager') {
            // 		this.coveringManager = result;
            // 	}
            // 	console.log(result);
            // }, error => console.log('There was an error: ', error));
        }
    };
    BranchComponent.prototype.serchSelected = function (Value, field) {
        console.log(field);
        //let formValue: any = this.employeeAssignmentForm.value;
        //emplyee accignment
        if (field === 'regionManager') {
            this.employeeAssignmentForm.controls['regionManager'].setValue(Value);
            this.regionManager = '';
        }
        else if (field === 'coveringRegManager') {
            this.employeeAssignmentForm.controls['coveringRegManager'].setValue(Value);
            this.coveringRegManager = '';
        }
        else if (field === 'clerk') {
            this.employeeAssignmentForm.controls['clerk'].setValue(Value);
            this.clerk = '';
        }
        else if (field === 'coveringClerk') {
            this.employeeAssignmentForm.controls['coveringClerk'].setValue(Value);
            this.coveringClerk = '';
        }
        else if (field === 'manager') {
            this.employeeAssignmentForm.controls['manager'].setValue(Value);
            this.manager = '';
        }
        else if (field === 'coveringManager') {
            this.employeeAssignmentForm.controls['coveringManager'].setValue(Value);
            this.coveringManager = '';
        }
    };
    //update
    BranchComponent.prototype.StatusUpdate = function (passedId) {
        console.log(passedId);
        this.DataService.StatusUpdateBranch(passedId).subscribe(function (result) {
            console.log(result);
            /*
            this.employeeAssignmentForm.controls['regionManager'].setValue(result.regionManager);
            (<any>$("#Countrycodes")).modal('show');
            this.organizationForm = this.formBuilder.group({
                regionSeq: [result.regSeq],
                regionCode: [""],
                formSaveKey: ['update'],
                            regionName: [result.regNm],
                            regionType: [result.regTyp],
                            regionStatus: [result.regStsKey],
                regionDescription: [result.regDscr],
                regionAddress: [""],
                //regionStatus: ['', Validators.required]
                    });*/
        }, function (error) { return console.log('There was an error: ', error); });
    };
    //AccountSetup
    BranchComponent.prototype.AccountSetup = function (passedId, name) {
        var _this = this;
        this.AccountSetupName = name;
        this.AccountSetupId = passedId;
        $('#AccountSetup').modal('show');
        this.AccountSetupForm.controls['branchSeq'].setValue(passedId);
        this.DataService.AccountSetupBranch(passedId).subscribe(function (result) {
            console.log(result);
            _this.AccountSetupForm = _this.formBuilder.group({
                formSaveKey: ['update'],
                branchSeq: [result.brnchSeq],
                bankName: [+result.bankName],
                bankBranch: [result.bankBrnch],
                accTitle: [result.acctNm],
                accNo: [result.acctNum],
                ibanNo: [result.iban],
            });
        }, function (error) { return console.log('There was an error: ', error); });
    };
    Object.defineProperty(BranchComponent.prototype, "a", {
        //AccountSetup
        get: function () { return this.AccountSetupForm.controls; },
        enumerable: true,
        configurable: true
    });
    BranchComponent.prototype.onAccountSetupSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.AccountSetupForm.invalid) {
            return;
        }
        var formValue = this.AccountSetupForm.value;
        console.log(formValue);
        if (formValue.formSaveKey === 'add') {
            console.log('1');
            this.DataService.AccountSetup(formValue).subscribe(function (data) {
                $('#AccountSetup').modal('hide');
                //this.pagedItems.push(data.region);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        else if (formValue.formSaveKey === 'update') {
            console.log('2');
            this.DataService.UpdateAccountSetup(formValue).subscribe(function (data) {
                $('#AccountSetup').modal('hide');
                //this.pagedItems.splice(this.pagedItems.indexOf(data.region['regSeq']), 1);
                //this.pagedItems.push(data.region);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        return false;
    };
    //AssignLocation
    BranchComponent.prototype.AssignLocation = function (passedId) {
        var _this = this;
        $('#AssignLocation').modal('show');
        console.log(passedId);
        this.AssignLocationId = passedId;
        this.DataService.getAssignLocation().subscribe(function (data) {
            console.log(data);
            _this.AssignLocationValue = data;
            //check already checked
            _this.DataService.getAssignLocationExist(passedId).subscribe(function (data) {
                for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
                    var i = _a[_i];
                    console.log(data[i].citySeq);
                    //document.getElementById('check-'+data[i].citySeq).checked = true;
                    document.getElementById('check-' + data[i].citySeq).checked = true;
                }
            }, function (error) {
                console.log('err');
                console.log('err', error);
            });
            // initialize to page 1
            _this.setPage(1);
        }, function (error) {
            console.log('err');
            console.log('err', error);
        });
    };
    BranchComponent.prototype.changeRadioStatus = function ($event) {
        var value = $event.target.value;
        var checked = { 'citySeq': value, 'branchSeq': this.AssignLocationId };
        if ($event.target.checked === true) {
            this.AssignLocationCheckBox.push(checked);
            console.log(JSON.stringify(this.AssignLocationCheckBox));
            this.AssignLocationForm.controls['citySeq'].setValue(this.AssignLocationCheckBox);
            this.DataService.assignLocation(checked).subscribe(function (data) {
                // (<any>$('#AssignLocation')).modal('hide');
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        else {
            this.DataService.removeLocation(checked).subscribe(function (data) {
                // (<any>$('#AssignLocation')).modal('hide');
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
            var index_1 = -1;
            var i_1 = 0;
            this.AssignLocationCheckBox.forEach(function (element) {
                i_1++;
                if (element.citySeq == $event.target.value) {
                    index_1 = i_1;
                }
            });
            if (index_1 >= 0) {
                this.AssignLocationCheckBox.splice(index_1);
                this.AssignLocationCheckBox.controls['prdSeq'].setValue(this.AssignLocationCheckBox);
            }
        }
        //console.log(value);
    };
    Object.defineProperty(BranchComponent.prototype, "l", {
        //AssignLocationForm
        get: function () { return this.AssignLocationForm.controls; },
        enumerable: true,
        configurable: true
    });
    BranchComponent.prototype.onAssignLocationSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.AssignLocationForm.invalid) {
            return;
        }
        var formValue = this.AssignLocationForm.value;
        console.log(formValue.citySeq);
        if (formValue.formSaveKey === 'add') {
            // this.DataService.AssignLocation(formValue.citySeq).subscribe((data) => {
            $('#AssignLocation').modal('hide');
            // 	console.log(data);
            // }, (error) => {
            // 	console.log('err', error);
            // });
        }
        else if (formValue.formSaveKey === 'update') {
            this.DataService.updateOrganization(formValue).subscribe(function (data) {
                $('#UserAssignment').modal('hide');
                _this.pagedItems.splice(_this.pagedItems.indexOf(data.region['regSeq']), 1);
                _this.pagedItems.push(data.region);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        return false;
    };
    //ProductAssign
    BranchComponent.prototype.ProductAssign = function (passedId) {
        var _this = this;
        $('#ProductAssign').modal('show');
        console.log(passedId);
        this.ProductAssignId = passedId;
        this.DataService.getProductAssign().subscribe(function (data) {
            console.log(data);
            _this.ProductAssignValue = data;
            //check already checked
            _this.DataService.getProductAssignExist(passedId).subscribe(function (data) {
                console.log(data);
                for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
                    var i = _a[_i];
                    console.log(data[i].prdSeq);
                    document.getElementById('checkP-' + data[i].prdSeq).checked = true;
                }
            }, function (error) {
                console.log('err');
                console.log('err', error);
            });
            // initialize to page 1
            _this.setPage(1);
        }, function (error) {
            console.log('err');
            console.log('err', error);
        });
    };
    BranchComponent.prototype.changeRadioProductAssignStatus = function ($event) {
        console.log($event.target.value);
        console.log($event);
        console.log($event.target.checked);
        var value = $event.target.value;
        var checked = { 'prdSeq': value, 'branchSeq': this.ProductAssignId };
        console.log(checked);
        console.log(this.ProductAssignCheckBox);
        if ($event.target.checked === true) {
            this.ProductAssignCheckBox.push(checked);
            console.log(JSON.stringify(this.ProductAssignCheckBox));
            this.ProductAssignForm.controls['prdSeq'].setValue(this.ProductAssignCheckBox);
            this.DataService.addProduct(checked).subscribe(function (data) {
                // (<any>$('#ProductAssign')).modal('hide');
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        else {
            this.DataService.removeProduct(checked).subscribe(function (data) {
                // (<any>$('#ProductAssign')).modal('hide');
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
            console.log(this.ProductAssignCheckBox.indexOf(checked));
            var index_2 = -1;
            var i_2 = 0;
            this.ProductAssignCheckBox.forEach(function (element) {
                i_2++;
                if (element.prdSeq == $event.target.value) {
                    index_2 = i_2;
                }
            });
            if (index_2 >= 0) {
                this.ProductAssignCheckBox.splice(index_2);
                this.ProductAssignForm.controls['prdSeq'].setValue(this.ProductAssignCheckBox);
            }
        }
        //console.log(value);
    };
    Object.defineProperty(BranchComponent.prototype, "p", {
        //ProductAssignForm
        get: function () { return this.ProductAssignForm.controls; },
        enumerable: true,
        configurable: true
    });
    BranchComponent.prototype.onProductAssignSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.ProductAssignForm.invalid) {
            return;
        }
        var formValue = this.ProductAssignForm.value;
        console.log(formValue.prdSeq);
        if (formValue.formSaveKey === 'add') {
            // this.DataService.ProductAssign(formValue.prdSeq).subscribe((data) => {
            $('#ProductAssign').modal('hide');
            // 	console.log(data);
            // }, (error) => {
            // 	console.log('err', error);
            // });
        }
        else if (formValue.formSaveKey === 'update') {
            this.DataService.updateOrganization(formValue).subscribe(function (data) {
                $('#ProductAssign').modal('hide');
                _this.pagedItems.splice(_this.pagedItems.indexOf(data.region['regSeq']), 1);
                _this.pagedItems.push(data.region);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        return false;
    };
    BranchComponent.prototype.keyPress = function (event) {
        var pattern = /[a-zA-Z0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    BranchComponent.prototype.keyPressText = function (event) {
        var pattern = /[a-zA-Z\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    //get addresses
    BranchComponent.prototype.getLocations = function () {
        var _this = this;
        $('#Location').modal('show');
        this.loanService.getLocations().subscribe(function (res) {
            console.log(res);
            _this.addresses = res;
            // this.addresses = res;
        }, function (error) {
            console.log('err In Loan Service');
            console.log('err', error);
        });
    };
    //address:any = new Address();
    BranchComponent.prototype.selectAddress = function (add) {
        console.log(add);
        //this.address = add;
        this.branchForm.controls['province'].setValue(add['province']);
        this.branchForm.controls['district'].setValue(add['district']);
        this.branchForm.controls['tehsil'].setValue(add['tehsil']);
        this.branchForm.controls['uc'].setValue(add['uc']);
        this.branchForm.controls['city'].setValue(add['city']);
        this.branchForm.controls['provinceName'].setValue(add['provinceName']);
        this.branchForm.controls['districtName'].setValue(add['districtName']);
        this.branchForm.controls['tehsilName'].setValue(add['tehsilName']);
        this.branchForm.controls['ucName'].setValue(add['ucName']);
        this.branchForm.controls['cityName'].setValue(add['cityName']);
        //Object.assign(this.model.coBorrowerAddress ,add,this.model.coBorrowerAddress);
        // console.log(this.model.coBorrowerAddress)
    };
    BranchComponent.prototype.findValueByKey = function (key, array) {
        var status = 'not found';
        array.forEach(function (s) {
            if (s.codeKey === key) {
                status = s.codeValue;
            }
        });
        return status;
    };
    BranchComponent.prototype.findValueByKeyStatus = function (key) {
        var status = 'not found';
        this.statusListing.forEach(function (s) {
            if (s.codeKey === key) {
                status = s.codeValue;
            }
        });
        return status;
    };
    BranchComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[0-9-]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode !== 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    BranchComponent.prototype.loadLovs = function () {
        var _this = this;
        this.commonService.getValues(_shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_8__["BANKS"]).subscribe(function (res) {
            _this.banks = res;
        }, function (error) {
            console.log('err', error);
        });
    };
    BranchComponent.prototype.openPayment = function (key) {
        var _this = this;
        $('#AssignCheque').modal('show');
        sessionStorage.setItem('brnchSeq', JSON.stringify(key));
        this.paymentTypesService.getAllTypesByBrnch(3, sessionStorage.getItem('brnchSeq')).subscribe(function (data) { return _this.allPaymentTypes = data; });
        this.branchRemitService.getBranchRemitsbyBranchSeq(parseInt(sessionStorage.getItem('brnchSeq'))).subscribe(function (data) {
            _this.tempArray = data;
            console.log(_this.tempArray);
            _this.paymentTypesService.getAllTypes(3).subscribe(function (d) {
                _this.allPaymentTypes = d;
                _this.allPaymentTypes.forEach(function (pymt) {
                    _this.tempArray.forEach(function (element) {
                        if (element.pymtTypSeq === pymt.typSeq) {
                            pymt.ischecked = true;
                        }
                    });
                    //						this.counter++;
                    // 	//this.totalSegs++;
                    // 	//this.segregateArray[seg.instNum - 1].ischecked = true;
                    // 	//this.segregateArray[seg.instNum - 1].prdSgrtInstSeq = seg.prdSgrtInstSeq;
                });
            });
        });
    };
    BranchComponent.prototype.unregisterDevice = function () {
        var _this = this;
        this.spinner.show();
        this.DataService.unregisterDevice(this.AssignTabletForm.value).subscribe(function (res) {
            console.log(res);
            _this.spinner.hide();
            _this.hasDvc = false;
            _this.AssignTabletForm = _this.formBuilder.group({
                entyTypFlg: 2,
                dvcAddr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                entyTypSeq: [_this.AssignTabletForm.value.entyTypSeq, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                crtdBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
            _this.toaster.success(res["body"]);
        }, function (error) {
            console.log(error);
            _this.spinner.hide();
            _this.toaster.error(error.error.error, "Error");
        });
    };
    BranchComponent.prototype.registerDevice = function () {
        var _this = this;
        this.spinner.show();
        this.DataService.registerDevice(this.AssignTabletForm.value).subscribe(function (res) {
            console.log(res);
            _this.spinner.hide();
            _this.hasDvc = true;
            _this.toaster.success(res["body"]);
        }, function (error) {
            _this.spinner.hide();
            console.log(error);
            _this.toaster.error(error.error.error, "Error");
        });
    };
    BranchComponent.prototype.openTabAssignment = function (key) {
        var _this = this;
        this.spinner.show();
        this.DataService.getDvcRgstrFrTyp(2, key).subscribe(function (res) {
            _this.spinner.hide();
            if (res != null) {
                _this.hasDvc = true;
                _this.AssignTabletForm = _this.formBuilder.group({
                    entyTypFlg: 2,
                    dvcAddr: [res['dvcAddr'], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    entyTypSeq: [key, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    crtdBy: [res['crtdBy'], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                });
            }
            else {
                _this.hasDvc = false;
                _this.AssignTabletForm = _this.formBuilder.group({
                    entyTypFlg: 2,
                    dvcAddr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    entyTypSeq: [key, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    crtdBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                });
            }
            $('#AssignTablet').modal('show');
        }, function (error) {
            _this.spinner.hide();
            console.log(error);
        });
    };
    BranchComponent.prototype.addUpdateType = function (pymt, event) {
        console.log(pymt);
        var branchRemit = new _shared_models_branch_remit_model__WEBPACK_IMPORTED_MODULE_10__["BranchRemit"]();
        if (pymt.ischecked) {
            console.log("here");
            branchRemit.pymtTypSeq = pymt.typSeq;
            branchRemit.brnchSeq = parseInt(sessionStorage.getItem('brnchSeq'));
            this.branchRemitService.addBranchRemit(branchRemit).subscribe(); //res => {
            console.log(branchRemit);
            // 	seg.prdSgrtInstSeq = res.PrdSgrtInst.prdSgrtInstSeq;
            //   });
        }
        else {
            console.log("there");
            this.branchRemitService.deleteBranchRemit(branchRemit.brnchRemitSeq).subscribe();
        }
    };
    BranchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-branch',
            template: __webpack_require__(/*! ./branch.component.html */ "./src/app/pages/setup/organization/branch/branch.component.html"),
            styles: [__webpack_require__(/*! ./branch.component.css */ "./src/app/pages/setup/organization/branch/branch.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _shared_services_loan_service__WEBPACK_IMPORTED_MODULE_2__["LoanService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _shared_services_paymentTypes_service__WEBPACK_IMPORTED_MODULE_9__["PaymentTypesService"],
            _shared_services_branch_remit_service__WEBPACK_IMPORTED_MODULE_11__["BranchRemitService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerService"]])
    ], BranchComponent);
    return BranchComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/organization/community/community.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/setup/organization/community/community.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/organization/community/community.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/setup/organization/community/community.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Community <i class=\"fa fa-search\"> </i></h6>\r\n                <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\" title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 addBtn\">\r\n              <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" (click)=\"addItem()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <ul class=\"infolist\">\r\n              <li>Community ID: <span>{{clickCommunity}}</span></li>\r\n              <li>Community Name: <span>{{communityName}}</span></li>\r\n            </ul>\r\n            <table class=\"table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>Community ID</th>\r\n                  <th>Community Name</th>\r\n                  <th>Description</th>\r\n                  <th>Status</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let community of pagedItems\">\r\n                  <td>{{community.cmntyCd}}</td>\r\n                  <td>{{community.cmntyNm}}</td>\r\n                  <td>{{community.cmntyCmnt}}</td>\r\n                  <td>{{findValueByKeyStatus(community.cmntyStsKey)}}</td>\r\n\r\n                  <td>\r\n                   <a (click)=\"editItem(community.cmntySeq)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                    <a (click)=\"deleteItem(community.cmntySeq)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                     <!-- <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a> -->\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class=\"back\"> <a routerLink=\"/setup/organization/portfolio/{{clickCommunity}}\" class=\"btn btn-primary btn-min\"><i class=\"fa fa-chevron-left\"></i> Back</a> </div>\r\n          <nav aria-label=\"Page navigation \">\r\n\t\t\t\t<ul class=\"pagination justify-content-center\" *ngIf=\"pager.pages && pager.pages.length\">\r\n\t\t\t\t\t<li class=\"page-item disabled\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</nav>\t\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<div class=\"modal fade\" id=\"AddCommunity\" role=\"dialog\">\r\n              <div class=\"modal-dialog mymodal\"> \r\n                <!-- Modal content-->\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\">Add Community</h5>\r\n                  </div>\r\n                  <form class=\"md-float-material\" [formGroup]=\"communityForm\" (ngSubmit)=\"onCommunitySubmit()\" >\r\n                  <div class=\"modal-body\">\r\n                    <div class=\"cRow\">\r\n                      <div class=\"cCol3-col\">\r\n                        <label>Community Name:</label>\r\n                        <input (keypress)=\"keyPressText($event)\" type=\"text\" class=\"form-control\" formControlName=\"cmntyName\" [ngClass]=\"{ 'is-invalid': submitted && f.cmntyName.errors }\" />\r\n                      </div>\r\n                      \r\n                      <div class=\"cCol3-col\">\r\n                        <label>Status:</label>\r\n                        <select class=\"form-control\" formControlName=\"cmntyStatus\" [ngClass]=\"{ 'is-invalid': submitted && f.cmntyStatus.errors }\" >\r\n                        \t<option *ngFor=\"let status of statusListing\" value=\"{{status.codeKey}}\">{{status.codeValue}}</option>\r\n                        </select>\r\n                      </div>\r\n                      <div class=\"cCol3-col\">\r\n                        <label>Community Description:</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"cmntyDescription\" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                <div *ngIf=\"submitted && f.cmntyName.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n                  <i  class=\"fa fa-exclamation-circle\"></i>  \r\n                  <strong *ngIf=\"f.cmntyName.errors\">Please Enter Community Name</strong>\r\n                </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button  class=\"btn btn-primary\">Ok</button>\r\n                <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n              </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/setup/organization/community/community.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/setup/organization/community/community.component.ts ***!
  \***************************************************************************/
/*! exports provided: CommunityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityComponent", function() { return CommunityComponent; });
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





var CommunityComponent = /** @class */ (function () {
    function CommunityComponent(router, DataService, formBuilder) {
        this.router = router;
        this.DataService = DataService;
        this.formBuilder = formBuilder;
        //communityList: any = [];
        this.clickCommunity = sessionStorage.getItem("clickPortfolio");
        this.communityName = sessionStorage.getItem("portfolioName");
        this.submitted = false;
        // array of all items to be paged
        this.allItems = [];
        // pager object
        this.pager = {};
        // paged items
        this.pagedItems = [];
        //status
        this.statusListing = "";
    }
    CommunityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.communityForm = this.formBuilder.group({
            formSaveKey: ['add'],
            portfolioSeq: [sessionStorage.getItem("clickPortfolio")],
            cmntyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cmntyDescription: [''],
            cmntyStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.listing(1);
        //STATUS LIST
        this.DataService.statusList().subscribe(function (result) {
            _this.statusListing = result;
            console.log(result);
        }, function (error) { return console.log('There was an error: ', error); });
    };
    CommunityComponent.prototype.listing = function (page) {
        var _this = this;
        this.DataService.getCommunity(sessionStorage.getItem("clickPortfolio")).subscribe(function (data) {
            console.log(data);
            _this.allItems = data;
            // initialize to page 1
            _this.setPage(page);
        }, function (error) {
            console.log("err");
            console.log("err", error);
        });
    };
    Object.defineProperty(CommunityComponent.prototype, "f", {
        get: function () { return this.communityForm.controls; },
        enumerable: true,
        configurable: true
    });
    CommunityComponent.prototype.onCommunitySubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.communityForm.invalid) {
            return;
        }
        var formValue = this.communityForm.value;
        console.log(formValue.formSaveKey);
        if (formValue.formSaveKey === "add") {
            this.DataService.addCommunity(formValue).subscribe(function (data) {
                $("#AddCommunity").modal('hide');
                // this.pagedItems.splice(0, 0, data.cmnty);
                // this.allItems.push(data.cmnty);
                // this.setPage(1);
                _this.listing(1);
                //this.pagedItems.push(data.cmnty);
                console.log(data);
            }, function (error) {
                console.log("err", error);
            });
        }
        else if (formValue.formSaveKey === "update") {
            this.DataService.updateCommunity(formValue).subscribe(function (data) {
                $("#AddCommunity").modal('hide');
                _this.listing(_this.pager.currentPage);
                //this.pagedItems.splice(this.pagedItems.indexOf(data.cmnty['protfolio_SEQ']), 1);
                //this.pagedItems.push(data.cmnty);
                console.log(data);
            }, function (error) {
                console.log("err", error);
            });
        }
        return false;
    };
    //pagenation
    CommunityComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.DataService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    //delete
    CommunityComponent.prototype.deleteItem = function (passedId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: "Are you sure you want to delete this Community?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.DataService.delCommunity(passedId).subscribe(function (result) {
                    _this.listing(_this.pager.currentPage);
                    //this.pagedItems.splice(this.pagedItems.indexOf(passedId), 1);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Deleted!', 'Community has been deleted.', 'success');
                }, function (error) { return console.log('There was an error: ', error); });
            }
        });
    };
    //add
    CommunityComponent.prototype.addItem = function () {
        this.submitted = false;
        $("#AddCommunity").modal('show');
        this.communityForm = this.formBuilder.group({
            formSaveKey: ['add'],
            portfolioSeq: [sessionStorage.getItem("clickPortfolio")],
            cmntyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cmntyDescription: [''],
            cmntyStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    //edit
    CommunityComponent.prototype.editItem = function (passedId) {
        var _this = this;
        console.log(passedId);
        this.DataService.editCommunity(passedId).subscribe(function (result) {
            console.log(result);
            $("#AddCommunity").modal('show');
            _this.communityForm = _this.formBuilder.group({
                formSaveKey: ['update'],
                portfolioSeq: [result.protfolioSeq],
                comSeq: [result.cmntySeq],
                cmntyCode: [result.cmntyCd, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                cmntyName: [result.cmntyNm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                cmntyDescription: [result.cmntyCmnt],
                cmntyStatus: [result.cmntyStsKey, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
        }, function (error) { return console.log('There was an error: ', error); });
    };
    //update
    CommunityComponent.prototype.StatusUpdate = function (passedId) {
        console.log(passedId);
        this.DataService.StatusUpdateCommunity(passedId).subscribe(function (result) {
            console.log(result);
            /*
            this.employeeAssignmentForm.controls['regionManager'].setValue(result.regionManager);
            (<any>$("#Countrycodes")).modal('show');
            this.organizationForm = this.formBuilder.group({
                regionSeq: [result.regSeq],
                regionCode: [""],
                formSaveKey: ['update'],
                regionName: [result.regNm],
                regionType: [result.regTyp],
                regionStatus: [result.regStsKey],
                regionDescription: [result.regDscr],
                regionAddress: [""],
                //regionStatus: ['', Validators.required]
            });*/
        }, function (error) { return console.log('There was an error: ', error); });
    };
    CommunityComponent.prototype.keyPressText = function (event) {
        var pattern = /[a-zA-Z\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    CommunityComponent.prototype.findValueByKeyStatus = function (key) {
        var status = 'not found';
        this.statusListing.forEach(function (s) {
            if (s.codeKey === key) {
                status = s.codeValue;
            }
        });
        return status;
    };
    CommunityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-community',
            template: __webpack_require__(/*! ./community.component.html */ "./src/app/pages/setup/organization/community/community.component.html"),
            styles: [__webpack_require__(/*! ./community.component.css */ "./src/app/pages/setup/organization/community/community.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], CommunityComponent);
    return CommunityComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/organization/organization-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/setup/organization/organization-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: OrganizationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationRoutingModule", function() { return OrganizationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/pages/setup/organization/portfolio/portfolio.component.ts");
/* harmony import */ var _community_community_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./community/community.component */ "./src/app/pages/setup/organization/community/community.component.ts");
/* harmony import */ var _area_area_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./area/area.component */ "./src/app/pages/setup/organization/area/area.component.ts");
/* harmony import */ var _branch_branch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./branch/branch.component */ "./src/app/pages/setup/organization/branch/branch.component.ts");
/* harmony import */ var _organization_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organization.component */ "./src/app/pages/setup/organization/organization.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _organization_component__WEBPACK_IMPORTED_MODULE_6__["OrganizationComponent"] },
    { path: 'area/:id', component: _area_area_component__WEBPACK_IMPORTED_MODULE_4__["AreaComponent"] },
    { path: 'branch/:id', component: _branch_branch_component__WEBPACK_IMPORTED_MODULE_5__["BranchComponent"] },
    { path: 'portfolio/:id', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioComponent"] },
    { path: 'community/:id', component: _community_community_component__WEBPACK_IMPORTED_MODULE_3__["CommunityComponent"] },
];
var OrganizationRoutingModule = /** @class */ (function () {
    function OrganizationRoutingModule() {
    }
    OrganizationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OrganizationRoutingModule);
    return OrganizationRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/setup/organization/organization.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/setup/organization/organization.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/organization/organization.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/setup/organization/organization.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Organization <i class=\"fa fa-search\"> </i></h6>\r\n                <div class=\"mysearch\">\r\n                  <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\" title=\"Type in a name\">\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\" title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 addBtn\">\r\n              <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" (click)=\"addItem()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>Region Code</th>\r\n                  <th>Region Name</th>\r\n                  <!--<th>Region  Type</th>-->\r\n                  <th>Description</th>\r\n                  <th>Status</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let organization of pagedItems\">\r\n                  <td>{{organization.regCd}}</td>\r\n                  <td><a (click)=\"organizationFun(organization.regSeq)\">{{organization.regNm}}</a></td>\r\n                  <!--<td>{{organization.regTyp}}</td>-->\r\n                  <td>{{organization.regDscr}}</td>\r\n                  <td *ngIf=\"organization.regStsKey === null || organization.regStsKey === 200; else other_content\" (click)=\"StatusUpdate(organization.regSeq)\">Active</td>\r\n                  <ng-template #other_content>\r\n                    <td (click)=\"StatusUpdate(organization.regSeq)\">In Active</td>\r\n                  </ng-template>\r\n\r\n                  <td>\r\n\r\n                    <a href=\"#\" data-toggle=\"modal\" (click)=\"UserAssignment(organization.regSeq)\" class=\"iconBtn\"><i class=\"fa fa-user\"></i></a>\r\n                    <!--<a href=\"#\" class=\"iconBtn marker\"><i class=\"fa fa-map-marker\"></i></a>-->\r\n                    <a (click)=\"editItem(organization.regSeq)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                    <a (click)=\"deleteItem(organization.regSeq)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                    <!-- <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a> -->\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <nav aria-label=\"Page navigation \">\r\n            <ul class=\"pagination justify-content-center\" *ngIf=\"pager.pages && pager.pages.length\">\r\n              <li class=\"page-item disabled\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n              </li>\r\n              <li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                <a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n              </li>\r\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n\r\n<div class=\"modal fade\" id=\"UserAssignment\" role=\"dialog\">\r\n  <div class=\"modal-dialog mymodal bigger\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Employee Assignment</h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"employeeAssignmentForm\" (ngSubmit)=\"onemployeeAssignmentSubmit()\">\r\n        <div class=\"modal-body pt-0\">\r\n          <div class=\"pt-1 pb-2\">\r\n            <h6 class=\"colorBlack small mb-0 pt-1\"><b>Position</b></h6>\r\n          </div>\r\n          <div class=\"borderbox p-2 pb-3\">\r\n            <div class=\"userfields\">\r\n              <div class=\"cRow vrbp0\">\r\n                <div class=\"cCol5 inlincbox\">\r\n                  <label>Region Manager</label>\r\n                  <select formControlName=\"regionManager\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <!--<div style=\"width: 50%;\"> \t\r\n                             <input formControlName=\"regionManager\" (keydown)=\"search($event, 'regionManager')\" type=\"text\"  class=\"form-control\" placeholder=\"Asad Khan\">\r\n                             <ul *ngIf=\"regionManager\" style=\"position: absolute;z-index: 999;background-color:#fff; width:16%;border:1px solid #999999;padding: 5px;\">\r\n                             <li *ngFor=\"let search of regionManager\" (click)=\"serchSelected(search.empSeq, 'regionManager')\" style=\"width: 100%;\">{{search.empNm}}</li>\r\n                             </ul>\r\n                             </div>-->\r\n                  <!-- <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a> -->\r\n                </div>\r\n                <!-- <div class=\"cCol5 inlincbox\">\r\n                  <label>Covering Employee</label>\r\n                  <select formControlName=\"coveringRegManager\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                </div> -->\r\n                <!-- <div class=\"cCol1 date2\">\r\n                  <div class=\"input-group date mr-1\">\r\n                    <input formControlName=\"coveringRegManagerDateFrom\" type=\"date\" class=\"form-control\" placeholder=\"To Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"input-group date\">\r\n                    <input type=\"date\" formControlName=\"coveringRegManagerDateTo\" class=\"form-control\" placeholder=\"From Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                </div> -->\r\n              </div>\r\n              <!-- <div class=\"cRow vrbp0\">\r\n                <div class=\"cCol5 inlincbox\">\r\n                  <label>Clerk</label>\r\n                  <select formControlName=\"clerk\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                </div>\r\n                <div class=\"cCol5 inlincbox\">\r\n                  <label>Covering Employee</label>\r\n                  <select formControlName=\"coveringClerk\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                </div>\r\n                <div class=\"cCol1 date2\">\r\n                  <div class=\"input-group date mr-1\">\r\n                    <input type=\"date\" formControlName=\"coveringClerkDateFrom\" class=\"form-control\" placeholder=\"To Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"input-group date\">\r\n                    <input formControlName=\"coveringClerkDateTo\" type=\"date\" class=\"form-control\" placeholder=\"From Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"cRow vrbp0\">\r\n                <div class=\"cCol5 inlincbox\">\r\n                  <label>Accountant</label>\r\n                  <select formControlName=\"manager\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                </div>\r\n                <div class=\"cCol5 inlincbox\">\r\n                  <label>Covering Employee</label>\r\n                  <select formControlName=\"coveringManager\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                </div>\r\n                <div class=\"cCol1 date2\">\r\n                  <div class=\"input-group date mr-1\">\r\n                    <input formControlName=\"coveringManagerDateFrom\" type=\"date\" class=\"form-control\" placeholder=\"To Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"input-group date\">\r\n                    <input formControlName=\"coveringManagerDateTo\" type=\"date\" class=\"form-control\" placeholder=\"From Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer text-center pb-3\">\r\n            <button class=\"btn btn-primary\" type=\"submit\">Ok</button>\r\n            <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"Countrycodes\" role=\"dialog\">\r\n  <div class=\"modal-dialog big mymodal\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Organization</h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"organizationForm\" (ngSubmit)=\"onOrganizationSubmit()\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol2\">\r\n              <label>Region Name:</label>\r\n              <input (keypress)=\"keyPress($event)\" type=\"text\" class=\"form-control\" formControlName=\"regionName\" [ngClass]=\"{ 'is-invalid': submitted && f.regionName.errors }\"\r\n              />\r\n            </div>\r\n            <!-- <div class=\"cCol2\">\r\n                    <label>Region Type:</label>\r\n                    <select class=\"form-control\" formControlName=\"regionType\" [ngClass]=\"{ 'is-invalid': submitted && f.regionType.errors }\">\r\n                    \t<option *ngFor=\"let regionType of regionTypeting\" value=\"{{regionType.codeKey}}\">{{regionType.codeValue}}</option>\r\n                    </select>\r\n                  </div> -->\r\n            <div class=\"cCol2\">\r\n              <label>Status:</label>\r\n              <select class=\"form-control\" formControlName=\"regionStatus\" [ngClass]=\"{ 'is-invalid': submitted && f.regionStatus.errors }\">\r\n                <option *ngFor=\"let status of statusListing\" value=\"{{status.codeKey}}\">{{status.codeValue}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-full\">\r\n              <label>Description:</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"regionDescription\" [ngClass]=\"{ 'is-invalid': submitted && f.regionDescription.errors }\"\r\n              />\r\n            </div>\r\n            <!-- <div class=\"cCol1\">\r\n                    <label>province:</label>\r\n                    <input type=\"text\" readonly class=\"form-control\" formControlName=\"provinceName\" [ngClass]=\"{ 'is-invalid': submitted && f.provinceName.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol1\">\r\n                    <label>district:</label>\r\n                    <input type=\"text\" readonly class=\"form-control\" formControlName=\"districtName\" [ngClass]=\"{ 'is-invalid': submitted && f.districtName.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol1\">\r\n                    <label>tehsil:</label>\r\n                    <input type=\"text\" readonly class=\"form-control\" formControlName=\"tehsilName\" [ngClass]=\"{ 'is-invalid': submitted && f.tehsilName.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol1\">\r\n                    <label>uc:</label>\r\n                    <input type=\"text\" readonly class=\"form-control\" formControlName=\"ucName\" [ngClass]=\"{ 'is-invalid': submitted && f.ucName.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol1\">\r\n                    <label>city:</label>\r\n                    <input type=\"text\" readonly class=\"form-control\" formControlName=\"cityName\" [ngClass]=\"{ 'is-invalid': submitted && f.cityName.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol1 mt-3\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-dots\" data-toggle=\"modal\" (click)=\"getLocations()\"></button>\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol1\">\r\n                    <label>houseNum:</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"houseNum\" [ngClass]=\"{ 'is-invalid': submitted && f.houseNum.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol1\">\r\n                    <label>street:</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"street\" [ngClass]=\"{ 'is-invalid': submitted && f.street.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol1\">\r\n                    <label>village:</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"village\" [ngClass]=\"{ 'is-invalid': submitted && f.village.errors }\" />\r\n                  </div>\r\n\t\t\t\t  <div class=\"cCol1\">\r\n                    <label>other:</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"other\" [ngClass]=\"{ 'is-invalid': submitted && f.other.errors }\" />\r\n                  </div> -->\r\n\r\n\r\n\r\n            <!--<div class=\"col-full\">\r\n                    <label>Address:</label>\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"regionAddress\" [ngClass]=\"{ 'is-invalid': submitted && f.regionAddress.errors }\" />\r\n                  </div>-->\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"submitted && f.regionCode.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n          <i class=\"fa fa-exclamation-circle\"></i>\r\n          <strong *ngIf=\"f.regionCode.errors.required\">Please Enter Region Code</strong>\r\n        </div>\r\n        <div *ngIf=\"submitted && f.regionName.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n          <i class=\"fa fa-exclamation-circle\"></i>\r\n          <strong *ngIf=\"f.regionName.errors\">Please Enter Region Name</strong>\r\n        </div>\r\n        <div *ngIf=\"submitted && f.regionDescription.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n          <i class=\"fa fa-exclamation-circle\"></i>\r\n          <strong *ngIf=\"f.regionDescription.errors\">Please Enter Region Description</strong>\r\n        </div>\r\n        <!--<div *ngIf=\"submitted && f.regionAddress.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n                  <i  class=\"fa fa-exclamation-circle\"></i>  \r\n                  <strong *ngIf=\"f.regionAddress.errors\">Please Enter Region Address</strong>\r\n                </div>-->\r\n        <div class=\"modal-footer text-center\">\r\n          <button class=\"btn btn-primary\">Ok</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"Location\" role=\"dialog\">\r\n  <div class=\"modal-dialog bigger mymodal\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Location </h5>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table last-left\">\r\n            <thead class=\"thead-light last-left\">\r\n              <tr>\r\n                <th>Province</th>\r\n                <th>District</th>\r\n                <th>Tehseel</th>\r\n                <th width=\"20%\">UC</th>\r\n                <th>City</th>\r\n                <th>Select</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody class=\"evenodd\">\r\n              <tr *ngFor=\"let address of addresses\">\r\n                <td>{{address.provinceName}} </td>\r\n                <td>{{address.districtName}}</td>\r\n                <td>{{address.tehsilName}}</td>\r\n                <td>{{address.ucName}}</td>\r\n                <td>{{address.cityName}}</td>\r\n                <td>\r\n                  <button data-dismiss=\"modal\" type=\"button\" class=\"btn btn-primary btn-min\" (click)=\"selectAddress(address)\">Select</button>\r\n                </td>\r\n              </tr>\r\n\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/setup/organization/organization.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/setup/organization/organization.component.ts ***!
  \********************************************************************/
/*! exports provided: OrganizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationComponent", function() { return OrganizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _shared_services_loan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/loan.service */ "./src/app/shared/services/loan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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






var OrganizationComponent = /** @class */ (function () {
    function OrganizationComponent(router, loanService, DataService, formBuilder) {
        this.router = router;
        this.loanService = loanService;
        this.DataService = DataService;
        this.formBuilder = formBuilder;
        this.submitted = false;
        // array of all items to be paged
        this.allItems = [];
        // pager object
        this.pager = {};
        // paged items
        this.pagedItems = [];
        // search items
        this.userList = "";
        this.regionManager = "";
        this.coveringRegManager = "";
        this.clerk = "";
        this.coveringClerk = "";
        this.manager = "";
        this.coveringManager = "";
        //status
        this.statusListing = "";
        this.addresses = [];
    }
    OrganizationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.organizationForm = this.formBuilder.group({
            formSaveKey: ['add'],
            regionName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            regionStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            regionDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.listing(1);
        //STATUS LIST
        this.DataService.statusList().subscribe(function (result) {
            _this.statusListing = result;
            console.log(result);
        }, function (error) { return console.log('There was an error: ', error); });
        //emplyee accignment
        //userlist
        // this.DataService.searchOrganization().subscribe(result => {
        // 	this.userList = result;
        // 	console.log(result);
        // }, error => console.log('There was an error: ', error));
        //emplyee accignment
        this.employeeAssignmentForm = this.formBuilder.group({
            formSaveKey: ['add'],
            parentKey: [sessionStorage.getItem("UserAssignment")],
            regionManager: [''],
            coveringRegManager: [''],
            coveringRegManagerDateFrom: [''],
            coveringRegManagerDateTo: [''],
            clerk: [''],
            coveringClerk: [''],
            coveringClerkDateFrom: [''],
            coveringClerkDateTo: [''],
            manager: [''],
            coveringManager: [''],
            coveringManagerDateFrom: [''],
            coveringManagerDateTo: ['']
        });
    };
    OrganizationComponent.prototype.listing = function (page) {
        var _this = this;
        this.DataService.getOrganization().subscribe(function (data) {
            console.log(data);
            _this.allItems = data;
            // initialize to page 1
            _this.setPage(page);
        }, function (error) {
            console.log("err");
            console.log("err", error);
        });
    };
    Object.defineProperty(OrganizationComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.organizationForm.controls; },
        enumerable: true,
        configurable: true
    });
    OrganizationComponent.prototype.onOrganizationSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.organizationForm.invalid) {
            return;
        }
        var formValue = this.organizationForm.value;
        console.log(formValue.formSaveKey);
        if (formValue.formSaveKey === "add") {
            this.DataService.addOrganization(formValue).subscribe(function (data) {
                $("#Countrycodes").modal('hide');
                // this.pagedItems.splice(0, 0, data.region);
                //this.pagedItems.push(data.region);
                _this.listing(1);
                console.log(data);
            }, function (error) {
                console.log("err", error);
            });
        }
        else if (formValue.formSaveKey === "update") {
            this.DataService.updateOrganization(formValue).subscribe(function (data) {
                $("#Countrycodes").modal('hide');
                _this.listing(_this.pager.currentPage);
                //this.pagedItems.splice(this.pagedItems.indexOf(data.region['regSeq']), 1);
                //this.pagedItems.push(data.region);
                console.log(data);
            }, function (error) {
                console.log("err", error);
            });
        }
        return false;
    };
    OrganizationComponent.prototype.organizationFun = function (id) {
        sessionStorage.setItem("clickorganization", id);
        this.router.navigate(["/setup/organization/area", id]);
        //this.router.navigate(['/product-details', id]);
    };
    //pagenation
    OrganizationComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.DataService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    //delete
    OrganizationComponent.prototype.deleteItem = function (passedId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
            title: 'Are you sure?',
            text: "Are you sure you want to delete this Region ?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.DataService.delOrganization(passedId).subscribe(function (result) {
                    //this.pagedItems.splice(this.pagedItems.indexOf(passedId), 1);
                    _this.listing(_this.pager.currentPage);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Deleted!', 'Region has been deleted.', 'success');
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('Deleted!', error.error['error'], 'error');
                    console.log('There was an error: ', error.error['error']);
                });
            }
        });
    };
    //add
    OrganizationComponent.prototype.addItem = function () {
        this.submitted = false;
        $("#Countrycodes").modal('show');
        this.organizationForm = this.formBuilder.group({
            regionCode: [''],
            formSaveKey: ['add'],
            regionName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            regionStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            regionDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    //edit
    OrganizationComponent.prototype.editItem = function (passedId) {
        var _this = this;
        console.log(passedId);
        this.DataService.editOrganization(passedId).subscribe(function (result) {
            console.log(result);
            $("#Countrycodes").modal('show');
            _this.organizationForm = _this.formBuilder.group({
                regionSeq: [result.regionSeq],
                regionCode: [result.regionCode],
                formSaveKey: ['update'],
                regionName: [result.regionName],
                regionStatus: [result.regionStatus],
                regionDescription: [result.regionDescription],
            });
        }, function (error) { return console.log('There was an error: ', error); });
    };
    //UserAssignment
    OrganizationComponent.prototype.UserAssignment = function (passedId) {
        var _this = this;
        $("#UserAssignment").modal('show');
        console.log(passedId);
        sessionStorage.setItem("UserAssignment", passedId);
        this.DataService.UserAssignmentOrganization(passedId).subscribe(function (result) {
            console.log(result);
            _this.employeeAssignmentForm.controls['regionManager'].setValue(result.regionManager);
            _this.employeeAssignmentForm.controls['clerk'].setValue(result.clerk);
            _this.employeeAssignmentForm.controls['manager'].setValue(result.manager);
        }, function (error) { return console.log('There was an error: ', error); });
    };
    Object.defineProperty(OrganizationComponent.prototype, "s", {
        //sarch start
        get: function () { return this.employeeAssignmentForm.controls; },
        enumerable: true,
        configurable: true
    });
    OrganizationComponent.prototype.onemployeeAssignmentSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.employeeAssignmentForm.invalid) {
            return;
        }
        var formValue = this.employeeAssignmentForm.value;
        console.log(formValue);
        if (formValue.formSaveKey === "add") {
            this.DataService.addEmployeeOrganization(formValue).subscribe(function (data) {
                $("#UserAssignment").modal('hide');
                //this.pagedItems.push(data.region);
                console.log(data);
            }, function (error) {
                console.log("err", error);
            });
        }
        else if (formValue.formSaveKey === "update") {
            this.DataService.updateOrganization(formValue).subscribe(function (data) {
                $("#UserAssignment").modal('hide');
                _this.pagedItems.splice(_this.pagedItems.indexOf(data.region['regSeq']), 1);
                _this.pagedItems.push(data.region);
                console.log(data);
            }, function (error) {
                console.log("err", error);
            });
        }
        return false;
    };
    //search service
    OrganizationComponent.prototype.search = function ($event, field) {
        // search items
        this.regionManager = "";
        this.coveringRegManager = "";
        this.clerk = "";
        this.coveringClerk = "";
        this.manager = "";
        this.coveringManager = "";
        console.log(field);
        var value = $event.target.value;
        console.log(value);
        if (value.length >= 2) {
            // this.DataService.searchOrganization().subscribe(result => {
            // 	if (field === "regionManager") {
            // 		this.regionManager = result;
            // 	} else if (field === "coveringRegManager") {
            // 		this.coveringRegManager = result;
            // 	} else if (field === "clerk") {
            // 		this.clerk = result;
            // 	} else if (field === "coveringClerk") {
            // 		this.coveringClerk = result;
            // 	} else if (field === "manager") {
            // 		this.manager = result;
            // 	} else if (field === "coveringManager") {
            // 		this.coveringManager = result;
            // 	}
            // 	console.log(result);
            // }, error => console.log('There was an error: ', error));
        }
    };
    OrganizationComponent.prototype.serchSelected = function (Value, field) {
        console.log(field);
        //let formValue: any = this.employeeAssignmentForm.value;
        //emplyee accignment
        if (field === "regionManager") {
            this.employeeAssignmentForm.controls['regionManager'].setValue(Value);
            this.regionManager = "";
        }
        else if (field === "coveringRegManager") {
            this.employeeAssignmentForm.controls['coveringRegManager'].setValue(Value);
            this.coveringRegManager = "";
        }
        else if (field === "clerk") {
            this.employeeAssignmentForm.controls['clerk'].setValue(Value);
            this.clerk = "";
        }
        else if (field === "coveringClerk") {
            this.employeeAssignmentForm.controls["coveringClerk"].setValue(Value);
            this.coveringClerk = "";
        }
        else if (field === "manager") {
            this.employeeAssignmentForm.controls["manager"].setValue(Value);
            this.manager = "";
        }
        else if (field === "coveringManager") {
            this.employeeAssignmentForm.controls['coveringManager'].setValue(Value);
            this.coveringManager = "";
        }
    };
    //update
    OrganizationComponent.prototype.StatusUpdate = function (passedId) {
        console.log(passedId);
        this.DataService.StatusUpdateOrganization(passedId).subscribe(function (result) {
            console.log(result);
            /*
            this.employeeAssignmentForm.controls['regionManager'].setValue(result.regionManager);
            (<any>$("#Countrycodes")).modal('show');
            this.organizationForm = this.formBuilder.group({
                regionSeq: [result.regSeq],
                regionCode: [""],
                formSaveKey: ['update'],
                regionName: [result.regNm],
                regionType: [result.regTyp],
                regionStatus: [result.regStsKey],
                regionDescription: [result.regDscr],
                regionAddress: [""],
                //regionStatus: ['', Validators.required]
            });*/
        }, function (error) { return console.log('There was an error: ', error); });
    };
    OrganizationComponent.prototype.keyPress = function (event) {
        var pattern = /[a-zA-Z0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    //get addresses
    OrganizationComponent.prototype.getLocations = function () {
        var _this = this;
        $("#Location").modal('show');
        this.loanService.getLocations().subscribe(function (res) {
            console.log(res);
            _this.addresses = res;
            // this.addresses = res;
        }, function (error) {
            console.log("err In Loan Service");
            console.log("err", error);
        });
    };
    //address:any = new Address();
    OrganizationComponent.prototype.selectAddress = function (add) {
        console.log(add);
        //this.address = add;
        this.organizationForm.controls['province'].setValue(add['province']);
        this.organizationForm.controls['district'].setValue(add['district']);
        this.organizationForm.controls['tehsil'].setValue(add['tehsil']);
        this.organizationForm.controls['uc'].setValue(add['uc']);
        this.organizationForm.controls['city'].setValue(add['city']);
        this.organizationForm.controls['provinceName'].setValue(add['provinceName']);
        this.organizationForm.controls['districtName'].setValue(add['districtName']);
        this.organizationForm.controls['tehsilName'].setValue(add['tehsilName']);
        this.organizationForm.controls['ucName'].setValue(add['ucName']);
        this.organizationForm.controls['cityName'].setValue(add['cityName']);
        //Object.assign(this.model.coBorrowerAddress ,add,this.model.coBorrowerAddress);
        // console.log(this.model.coBorrowerAddress)
    };
    OrganizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organization',
            template: __webpack_require__(/*! ./organization.component.html */ "./src/app/pages/setup/organization/organization.component.html"),
            styles: [__webpack_require__(/*! ./organization.component.css */ "./src/app/pages/setup/organization/organization.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services_loan_service__WEBPACK_IMPORTED_MODULE_2__["LoanService"], _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], OrganizationComponent);
    return OrganizationComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/organization/organization.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/setup/organization/organization.module.ts ***!
  \*****************************************************************/
/*! exports provided: OrganizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationModule", function() { return OrganizationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _organization_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organization-routing.module */ "./src/app/pages/setup/organization/organization-routing.module.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/pages/setup/organization/portfolio/portfolio.component.ts");
/* harmony import */ var _community_community_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./community/community.component */ "./src/app/pages/setup/organization/community/community.component.ts");
/* harmony import */ var _area_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./area/area.component */ "./src/app/pages/setup/organization/area/area.component.ts");
/* harmony import */ var _branch_branch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./branch/branch.component */ "./src/app/pages/setup/organization/branch/branch.component.ts");
/* harmony import */ var _organization_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./organization.component */ "./src/app/pages/setup/organization/organization.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var OrganizationModule = /** @class */ (function () {
    function OrganizationModule() {
    }
    OrganizationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _organization_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrganizationRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"]
            ],
            declarations: [
                _organization_component__WEBPACK_IMPORTED_MODULE_7__["OrganizationComponent"],
                _area_area_component__WEBPACK_IMPORTED_MODULE_5__["AreaComponent"],
                _branch_branch_component__WEBPACK_IMPORTED_MODULE_6__["BranchComponent"],
                _community_community_component__WEBPACK_IMPORTED_MODULE_4__["CommunityComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"]
            ]
        })
    ], OrganizationModule);
    return OrganizationModule;
}());



/***/ }),

/***/ "./src/app/pages/setup/organization/portfolio/portfolio.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/setup/organization/portfolio/portfolio.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/organization/portfolio/portfolio.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/setup/organization/portfolio/portfolio.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content mb-md-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Portfolio <i class=\"fa fa-search\"> </i></h6>\r\n                <div class=\"mysearch\"> <a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                  <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\"\r\n                    title=\"Type in a name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 addBtn\">\r\n              <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" (click)=\"addItem()\"><i class=\"fa fa-plus\"></i>\r\n                Add</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <ul class=\"infolist\">\r\n              <li>Branch ID: <span>{{clickBranch}}</span></li>\r\n              <li>Branch Name: <span>{{branchName}}</span></li>\r\n            </ul>\r\n            <table class=\"table\" id=\"myTable\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>Portfolio ID</th>\r\n                  <th>Portfolio Name</th>\r\n                  <th>Status</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let portfolio of pagedItems\">\r\n                  <td>{{portfolio.portCd}}</td>\r\n                  <td>{{portfolio.portNm}}</td>\r\n                  <td>{{findValueByKeyStatus(portfolio.portStsKey)}}</td>\r\n                  <td>\r\n                    <a class=\"iconBtn\" data-toggle=\"modal\" (click)=\"openTabAssignment(portfolio.portSeq)\"><i\r\n                        class=\"fa fa-tablet\"></i></a>\r\n                    <a class=\"iconBtn\" (click)=\"portfolioFun(portfolio.portSeq, portfolio.portNm)\">\r\n                      <i data-toggle=\"modal\" class=\"fa fa-users\"></i></a>\r\n                    <a href=\"#\" class=\"iconBtn\" data-toggle=\"modal\"\r\n                      (click)=\"AssignLocation(portfolio.portSeq, portfolio.brnchSeq)\"><img\r\n                        src=\"assets/images/pin-icon.png\" alt=\"\"></a>\r\n                    <a (click)=\"UserAssignment(portfolio.portSeq)\" class=\"iconBtn\"><i class=\"fa fa-user\"></i></a>\r\n                    <!--<a href=\"#\" class=\"iconBtn marker\"><i class=\"fa fa-map-marker\"></i></a>-->\r\n                    <a (click)=\"editItem(portfolio.portSeq)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                    <a (click)=\"deleteItem(portfolio.portSeq)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                    <!-- <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a> -->\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class=\"back\"> <a routerLink=\"/setup/organization/branch/{{clickBranch}}\"\r\n              class=\"btn btn-primary btn-min\"><i class=\"fa fa-chevron-left\"></i> Back</a> </div>\r\n          <nav aria-label=\"Page navigation \">\r\n            <ul class=\"pagination justify-content-center\" *ngIf=\"pager.pages && pager.pages.length\">\r\n              <li class=\"page-item disabled\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n              </li>\r\n              <li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                <a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n              </li>\r\n              <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<div class=\"modal fade\" id=\"AssignLocation\" role=\"dialog\">\r\n  <div class=\"modal-dialog bigger mymodal\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Assign Location </h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"AssignLocationForm\" (ngSubmit)=\"onAssignLocationSubmit()\">\r\n\r\n        <div class=\"modal-body\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table last-left\" id=\"myTable\">\r\n              <thead class=\"thead-light last-left\">\r\n                <tr>\r\n                  <th></th>\r\n                  <th>Province</th>\r\n                  <th>District</th>\r\n                  <th>Tehseel</th>\r\n                  <th width=\"20%\">UC</th>\r\n                  <th>City</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n\r\n                <tr *ngFor=\"let assign of AssignLocationValue\">\r\n                  <td><input type=\"checkbox\" [checked]=\"assign.checked\" [id]=\"'check-'+assign.city\"\r\n                      value=\"{{assign.city}}\" (click)=\"changeRadioStatus($event)\"></td>\r\n                  <td>{{assign.provinceName}}</td>\r\n                  <td>{{assign.districtName}}</td>\r\n                  <td>{{assign.tehsilName}}</td>\r\n                  <td>{{assign.ucName}}</td>\r\n                  <td>{{assign.cityName}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"modal-footer text-center pt-0\">\r\n          <button class=\"btn btn-primary\">Ok</button>\r\n          <!-- <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button> -->\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"UserAssignment\" role=\"dialog\">\r\n  <div class=\"modal-dialog mymodal bigger\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Employee Assignment</h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"employeeAssignmentForm\" (ngSubmit)=\"onemployeeAssignmentSubmit()\">\r\n        <div class=\"modal-body pt-0\" style=\"overflow:visible\">\r\n          <div class=\"pt-1 pb-2\">\r\n            <h6 class=\"colorBlack small mb-0 pt-1\"><b>Position</b></h6>\r\n          </div>\r\n          <div class=\"borderbox p-2 pb-3\">\r\n            <div class=\"userfields\">\r\n              <div class=\"cRow vrbp0\">\r\n                <div class=\"cCol2\">\r\n                  <!-- <label>BDO</label> -->\r\n\r\n                  <!-- <ng-select autoCorrect [items]=\"userList\" required bindLabel=\"empNm\"\r\n                    bindValue=\"empNm && empLanId\" name=\"genderKey\" placeholder=\"BDO\" formControlName=\"regionManager\">\r\n                  </ng-select> -->\r\n\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"BDO\" formControlName=\"regionManager\" name=\"genderKey\">\r\n                      <mat-option *ngFor=\"let edu of userList\" [value]=\"edu.empSeq\">\r\n                        {{edu.empNm}}    ({{edu.empLanId}})\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <!-- <select formControlName=\"regionManager\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select> -->\r\n                  <!--<div style=\"width: 50%;\"> \t\r\n                             <input formControlName=\"regionManager\" (keydown)=\"search($event, 'regionManager')\" type=\"text\"  class=\"form-control\" placeholder=\"Asad Khan\">\r\n                             <ul *ngIf=\"regionManager\" style=\"position: absolute;z-index: 999;background-color:#fff; width:16%;border:1px solid #999999;padding: 5px;\">\r\n                             <li *ngFor=\"let search of regionManager\" (click)=\"serchSelected(search.empSeq, 'regionManager')\" style=\"width: 100%;\">{{search.empNm}}</li>\r\n                             </ul>\r\n                             </div>-->\r\n                  <!-- <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a> -->\r\n                </div>\r\n                <div class=\"cCol2 \">\r\n                  <!-- <label>Covering Employee</label> -->\r\n                  <!-- <ng-select autoCorrect [items]=\"userList\" required bindLabel=\"empLanId\" bindValue=\"empLanId\"\r\n                    name=\"genderKey\" placeholder=\"Covering Employee\" formControlName=\"coveringRegManager\">\r\n                  </ng-select> -->\r\n\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Covering Employee\" formControlName=\"coveringRegManager\" name=\"genderKey\">\r\n                      <mat-option *ngFor=\"let edu of userList\" [value]=\"edu.empSeq\">\r\n                        {{edu.empNm}}    ({{edu.empLanId}})\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <!-- <select formControlName=\"coveringRegManager\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select> -->\r\n                  <!--<div style=\"width: 50%;\"> \t\t\r\n                             <input formControlName=\"coveringRegManager\"  value=\"\" (keydown)=\"search($event, 'coveringRegManager')\" type=\"text\" class=\"form-control\" placeholder=\"Asad Khan\">\r\n                              <ul *ngIf=\"coveringRegManager\" style=\"position: absolute;z-index: 999;background-color:#fff; width:16%;border:1px solid #999999;padding: 5px;\">\r\n                             <li *ngFor=\"let search of coveringRegManager\" (click)=\"serchSelected(search.empSeq, 'coveringRegManager')\" style=\"width: 100%;\">{{search.empNm}}</li>\r\n                             </ul>\r\n                             </div>-->\r\n                  <!-- <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a> -->\r\n                </div>\r\n                <div class=\"cCol4 date2\">\r\n                  <div class=\"input-group date mr-1\">\r\n                    <mat-form-field>\r\n                      <input matInput [matDatepicker]=\"picker1\" placeholder=\"From Date:\"\r\n                        formControlName=\"coveringRegManagerDateFrom\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                      <mat-datepicker startView=\"year\" #picker1></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <!-- <input formControlName=\"coveringRegManagerDateFrom\" type=\"date\" class=\"form-control\" placeholder=\"To Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div> -->\r\n                  </div>\r\n                  <div class=\"input-group date\">\r\n\r\n                    <mat-form-field>\r\n                      <input matInput [matDatepicker]=\"picker2\" placeholder=\"To Date:\"\r\n                        formControlName=\"coveringRegManagerDateTo\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                      <mat-datepicker startView=\"year\" #picker2></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <!-- <input type=\"date\" formControlName=\"coveringRegManagerDateTo\" class=\"form-control\" placeholder=\"From Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"cRow vrbp0\">\r\n                <div class=\"cCol5 inlincbox\">\r\n                  <label>Clerk</label>\r\n                  <select formControlName=\"clerk\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                </div>\r\n                <div class=\"cCol5 inlincbox\">\r\n                  <label>Covering Employee</label>\r\n                  <select formControlName=\"coveringClerk\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                </div>\r\n                <div class=\"cCol1 date2\">\r\n                  <div class=\"input-group date mr-1\">\r\n                    <input type=\"date\" formControlName=\"coveringClerkDateFrom\" class=\"form-control\" placeholder=\"To Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"input-group date\">\r\n                    <input formControlName=\"coveringClerkDateTo\" type=\"date\" class=\"form-control\" placeholder=\"From Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"cRow vrbp0\">\r\n                <div class=\"cCol5 inlincbox\">\r\n                  <label>Accountant</label>\r\n                  <select formControlName=\"manager\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                </div>\r\n                <div class=\"cCol5 inlincbox\">\r\n                  <label>Covering Employee</label>\r\n                  <select formControlName=\"coveringManager\" class=\"form-control\">\r\n                    <option *ngFor=\"let search of userList\" value=\"{{search.empSeq}}\">{{search.empNm}}</option>\r\n                  </select>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n                </div>\r\n                <div class=\"cCol1 date2\">\r\n                  <div class=\"input-group date mr-1\">\r\n                    <input formControlName=\"coveringManagerDateFrom\" type=\"date\" class=\"form-control\" placeholder=\"To Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"input-group date\">\r\n                    <input formControlName=\"coveringManagerDateTo\" type=\"date\" class=\"form-control\" placeholder=\"From Date\">\r\n                    <div class=\"input-group-append input-group-addon\">\r\n                      <button class=\"input-group-text\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer text-center pb-3\">\r\n            <button class=\"btn btn-primary\">Ok</button>\r\n            <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"AssignTablet\" role=\"dialog\">\r\n  <div class=\"modal-dialog big mymodal\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Assign Tablet</h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"AssignTabletForm\">\r\n        <div class=\"modal-body\" style=\"padding-top:4em\">\r\n\r\n          <div class=\"row\">\r\n            <!-- <div class=\"cCol2\">\r\n                <label>Bank Name:</label>\r\n  \r\n                <select class=\"form-control\" formControlName=\"bankName\" [ngClass]=\"{ 'is-invalid': submitted && a.bankName.errors }\">\r\n                  <option *ngFor=\"let edu of banks\" [value]=\"edu.codeKey\">{{edu.codeValue}}</option>\r\n                </select>\r\n              </div> -->\r\n            <div class=\"col-sm-1\">\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <!-- <label>Bank Branch:</label>\r\n                <input (keypress)=\"keyPressText($event)\" type=\"text\" class=\"form-control\" formControlName=\"bankBranch\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && a.bankBranch.errors }\"> -->\r\n              <mat-form-field>\r\n                <input [readonly]=\"hasDvc\" type=\"text\" matInput formControlName=\"dvcAddr\" placeholder=\"Device Unique Id\"\r\n                  name=\"dvcAddr\" minlength=\"16\" maxlength=\"16\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <mat-form-field>\r\n                <input [readonly]=\"hasDvc\" type=\"text\" matInput formControlName=\"crtdBy\" placeholder=\"Identifier\"\r\n                  name=\"identifier\" maxlength=\"30\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-1\">\r\n            </div>\r\n            <div class=\"col-sm-2\">\r\n              <button *ngIf=\"hasDvc\" (click)=\"unregisterDevice()\" type=\"button\" mat-stroked-button\r\n                color=\"warn\">Un-Register Device</button>\r\n              <button *ngIf=\"!hasDvc\" (click)=\"registerDevice()\" type=\"button\" mat-stroked-button\r\n                color=\"primary\">Register Device</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-1\"></div>\r\n            <!-- <div class=\"col-sm-1\" *ngIf=\"\"></div> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"AddPortfolio\" role=\"dialog\">\r\n  <div class=\"modal-dialog mymodal\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Add Portfolio</h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"portfolioForm\" (ngSubmit)=\"onPortfolioSubmit()\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\" *ngIf=\"editPortfolio\">\r\n            <div class=\"cCol2\">\r\n              <ng-select [items]=\"regions\" required bindLabel=\"regNm\" bindValue=\"regSeq\" name=\"regNm\"\r\n                placeholder=\"Select Region:\" formControlName=\"regionSeq\" (change)=\"regionChange()\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <ng-select [items]=\"areas\" required bindLabel=\"areaNm\" bindValue=\"areaSeq\" name=\"areaNm\"\r\n                placeholder=\"Select Area:\" formControlName=\"areaSeq\" (change)=\"areaChange()\">\r\n              </ng-select>\r\n            </div>\r\n            <div class=\"cCol2\">\r\n              <ng-select [items]=\"branches\" required bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\"\r\n                placeholder=\"Select Branch:\" formControlName=\"branchSeq\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol3-col\">\r\n              <label>Portfolio Name:</label>\r\n              <input (keypress)=\"keyPressText($event)\" type=\"text\" class=\"form-control\" formControlName=\"portfolioName\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.portfolioName.errors }\" />\r\n            </div>\r\n            <div class=\"cCol3-col\">\r\n              <label>Status:</label>\r\n              <select class=\"form-control\" formControlName=\"portfolioStatus\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.portfolioStatus.errors }\">\r\n                <option *ngFor=\"let status of statusListing\" value=\"{{status.codeKey}}\">{{status.codeValue}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"submitted && f.portfolioName.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n          <i class=\"fa fa-exclamation-circle\"></i>\r\n          <strong *ngIf=\"f.portfolioName.errors\">Please Enter Portfolio Name</strong>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button class=\"btn btn-primary\">Ok</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/setup/organization/portfolio/portfolio.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/setup/organization/portfolio/portfolio.component.ts ***!
  \***************************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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







var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(router, DataService, formBuilder, toaster, spinner) {
        this.router = router;
        this.DataService = DataService;
        this.formBuilder = formBuilder;
        this.toaster = toaster;
        this.spinner = spinner;
        //portfolioList: any = [];
        this.clickBranch = sessionStorage.getItem('clickBranch');
        this.branchName = sessionStorage.getItem('branchName');
        this.submitted = false;
        // array of all items to be paged
        this.allItems = [];
        // pager object
        this.pager = {};
        // paged items
        this.pagedItems = [];
        // search items
        this.userList = '';
        this.regionManager = '';
        this.coveringRegManager = '';
        this.clerk = '';
        this.coveringClerk = '';
        this.manager = '';
        this.coveringManager = '';
        //status
        this.statusListing = '';
        //location
        this.AssignLocationValue = [];
        this.AssignLocationId = [];
        this.AssignLocationCheckBox = [];
        this.editPortfolio = false;
        this.hasDvc = false;
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portfolioForm = this.formBuilder.group({
            formSaveKey: ['add'],
            branchSeq: [sessionStorage.getItem('clickBranch')],
            portfolioId: ['1'],
            portfolioName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            portfolioStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            regionSeq: [+sessionStorage.getItem('clickorganization')],
            areaSeq: [+sessionStorage.getItem('clickArea')],
        });
        this.AssignTabletForm = this.formBuilder.group({
            entyTypFlg: 1,
            dvcAddr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            entyTypSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            crtdBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        //STATUS LIST
        this.DataService.statusList().subscribe(function (result) {
            _this.statusListing = result;
            console.log(result);
        }, function (error) { return console.log('There was an error: ', error); });
        this.listing(1);
        //userlist
        this.DataService.getAllEmployeeListForBrnch(sessionStorage.getItem('clickBranch'), 2).subscribe(function (list) {
            _this.userList = list;
        }, function (error) { return console.log('There was an error: ', error); });
        //emplyee accignment
        this.employeeAssignmentForm = this.formBuilder.group({
            formSaveKey: ['add'],
            parentKey: [sessionStorage.getItem('UserAssignment')],
            regionManager: [''],
            coveringRegManager: [''],
            coveringRegManagerDateFrom: [''],
            coveringRegManagerDateTo: [''],
            clerk: [''],
            coveringClerk: [''],
            coveringClerkDateFrom: [''],
            coveringClerkDateTo: [''],
            manager: [''],
            coveringManager: [''],
            coveringManagerDateFrom: [''],
            coveringManagerDateTo: ['']
        });
        //AssignLocationForm
        this.AssignLocationForm = this.formBuilder.group({
            formSaveKey: ['add'],
            citySeq: [''],
        });
    };
    PortfolioComponent.prototype.listing = function (page) {
        var _this = this;
        this.DataService.getOrganization().subscribe(function (data) {
            console.log(data);
            _this.regions = data;
        }, function (error) {
            console.log("err");
            console.log("err", error);
        });
        this.DataService.getArea(sessionStorage.getItem('clickorganization')).subscribe(function (data) {
            console.log(data);
            _this.areas = data;
        }, function (error) {
            console.log('err');
            console.log('err', error);
        });
        this.DataService.getBranch(sessionStorage.getItem('clickArea')).subscribe(function (data) {
            console.log(data);
            _this.branches = data;
        }, function (error) {
            console.log('err');
            console.log('err', error);
        });
        this.DataService.getPortfolio(sessionStorage.getItem('clickBranch')).subscribe(function (data) {
            console.log(data);
            _this.allItems = data;
            // initialize to page 1
            _this.setPage(page);
        }, function (error) {
            console.log('err');
            console.log('err', error);
        });
    };
    Object.defineProperty(PortfolioComponent.prototype, "f", {
        get: function () { return this.portfolioForm.controls; },
        enumerable: true,
        configurable: true
    });
    PortfolioComponent.prototype.onPortfolioSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.portfolioForm.invalid) {
            return;
        }
        var formValue = this.portfolioForm.value;
        console.log(formValue);
        if (formValue.formSaveKey === 'add') {
            this.DataService.addPortfolio(formValue).subscribe(function (data) {
                $('#AddPortfolio').modal('hide');
                // this.pagedItems.splice(0, 0, data.port);
                //this.pagedItems.push(data.port);
                // this.allItems.push(data.port);
                // this.setPage(1);
                _this.listing(1);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        else if (formValue.formSaveKey === 'update') {
            this.DataService.updatePortfolio(formValue).subscribe(function (data) {
                $('#AddPortfolio').modal('hide');
                _this.listing(_this.pager.currentPage);
                //this.pagedItems.splice(this.pagedItems.indexOf(data.port['portSeq']), 1);
                //this.pagedItems.push(data.port);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        return false;
    };
    PortfolioComponent.prototype.portfolioFun = function (id, name) {
        sessionStorage.setItem('clickPortfolio', id);
        sessionStorage.setItem('portfolioName', name);
        this.router.navigate(['setup/organization/community', id]);
        //this.router.navigate(['/product-details', id]);
    };
    //pagenation
    PortfolioComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.DataService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    //delete
    PortfolioComponent.prototype.deleteItem = function (passedId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Portfolio?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.DataService.delPortfolio(passedId).subscribe(function (result) {
                    _this.listing(_this.pager.currentPage);
                    //this.pagedItems.splice(this.pagedItems.indexOf(passedId), 1);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Deleted!', 'Portfolio has been deleted.', 'success');
                }, function (error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Deleted!', error.error['error'], 'error');
                    console.log('There was an error: ', error.error['error']);
                });
            }
        });
    };
    PortfolioComponent.prototype.regionChange = function () {
        var _this = this;
        this.DataService.getArea(this.portfolioForm.get('regionSeq').value).subscribe(function (data) {
            console.log(data);
            _this.areas = data;
            _this.portfolioForm.controls['areaSeq'].setValue(null);
            _this.portfolioForm.controls['branchSeq'].setValue(null);
        }, function (error) {
            console.log('err');
            console.log('err', error);
        });
    };
    PortfolioComponent.prototype.areaChange = function () {
        var _this = this;
        this.DataService.getBranch(this.portfolioForm.controls['areaSeq'].value).subscribe(function (data) {
            console.log(data);
            _this.branches = data;
            _this.portfolioForm.controls['branchSeq'].setValue(null);
        }, function (error) {
            console.log('err');
            console.log('err', error);
        });
    };
    //add
    PortfolioComponent.prototype.addItem = function () {
        this.editPortfolio = false;
        this.submitted = false;
        $('#AddPortfolio').modal('show');
        this.portfolioForm = this.formBuilder.group({
            formSaveKey: ['add'],
            branchSeq: [sessionStorage.getItem('clickBranch')],
            portfolioId: ['1'],
            portfolioName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            portfolioStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    //edit
    PortfolioComponent.prototype.editItem = function (passedId) {
        var _this = this;
        this.editPortfolio = true;
        console.log(passedId);
        this.DataService.editPortfolio(passedId).subscribe(function (result) {
            console.log(result);
            console.log(sessionStorage.getItem('clickorganization'));
            console.log(sessionStorage.getItem('clickArea'));
            $('#AddPortfolio').modal('show');
            _this.portfolioForm = _this.formBuilder.group({
                formSaveKey: ['update'],
                portfolioSeq: [result.portSeq],
                branchSeq: [result.brnchSeq],
                portfolioId: [result.portCd],
                portfolioName: [result.portNm],
                portfolioStatus: [result.portStsKey],
                regionSeq: [+sessionStorage.getItem('clickorganization')],
                areaSeq: [+sessionStorage.getItem('clickArea')],
            });
        }, function (error) { return console.log('There was an error: ', error); });
    };
    //UserAssignment
    PortfolioComponent.prototype.UserAssignment = function (passedId) {
        var _this = this;
        this.spinner.show();
        this.employeeAssignmentForm.controls['regionManager'].setValue("");
        this.employeeAssignmentForm.controls['coveringRegManagerDateFrom'].setValue("");
        this.employeeAssignmentForm.controls['coveringRegManagerDateTo'].setValue("");
        this.employeeAssignmentForm.controls['coveringRegManager'].setValue("");
        $('#UserAssignment').modal('show');
        console.log(passedId);
        this.passedId = passedId;
        sessionStorage.setItem('UserAssignment', passedId);
        this.DataService.getUserAssignmentPortfolio(passedId).subscribe(function (result) {
            console.log(result);
            _this.spinner.hide();
            if (result.length) {
                // result[result.length-1].coveringRegManagerDateFrom = result[result.length-1].coveringEmpFromDt;
                // result[result.length-1].coveringRegManagerDateTo = result[result.length-1].coveringEmpToDt;
                // result[result.length-1].coveringRegManager = result[result.length-1].coveringEmpSeq;
                // console.log(result[result.length-1])
                _this.employeeAssignmentForm.controls['regionManager'].setValue(+result[result.length - 1].empSeq);
                _this.employeeAssignmentForm.controls['coveringRegManagerDateFrom'].setValue(result[result.length - 1].coveringEmpFromDt);
                _this.employeeAssignmentForm.controls['coveringRegManagerDateTo'].setValue(result[result.length - 1].coveringEmpToDt);
                _this.employeeAssignmentForm.controls['coveringRegManager'].setValue(result[result.length - 1].coveringEmpSeq);
                console.log(_this.employeeAssignmentForm.controls['regionManager'].value);
            }
            // this.employeeAssignmentForm.controls['regionManager'].setValue(result.regionManager);
            // this.employeeAssignmentForm.controls['clerk'].setValue(result.clerk);
            // this.employeeAssignmentForm.controls['manager'].setValue(result.manager);
        }, function (error) {
            console.log('There was an error: ', error);
            _this.spinner.hide();
        });
    };
    Object.defineProperty(PortfolioComponent.prototype, "s", {
        //sarch start
        get: function () { return this.employeeAssignmentForm.controls; },
        enumerable: true,
        configurable: true
    });
    PortfolioComponent.prototype.onemployeeAssignmentSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.employeeAssignmentForm.invalid) {
            return;
        }
        var formValue = this.employeeAssignmentForm.value;
        formValue.parentKey = this.passedId;
        console.log(formValue);
        if (formValue.formSaveKey === 'add') {
            this.DataService.addEmployeePortfolio(formValue).subscribe(function (data) {
                $('#UserAssignment').modal('hide');
                //this.pagedItems.push(data.region);
                _this.toaster.success("Saved");
                console.log(data);
            }, function (error) {
                console.log('err', error);
                if (error.status == 400)
                    _this.toaster.error(error.error.error, "Bad Request");
                else
                    _this.toaster.error("Something Went Wrong");
            });
        }
        else if (formValue.formSaveKey === 'update') {
            this.DataService.updateOrganization(formValue).subscribe(function (data) {
                $('#UserAssignment').modal('hide');
                _this.pagedItems.splice(_this.pagedItems.indexOf(data.region['regSeq']), 1);
                _this.pagedItems.push(data.region);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        return false;
    };
    //search service
    PortfolioComponent.prototype.search = function ($event, field) {
        // search items
        this.regionManager = '';
        this.coveringRegManager = '';
        this.clerk = '';
        this.coveringClerk = '';
        this.manager = '';
        this.coveringManager = '';
        console.log(field);
        var value = $event.target.value;
        console.log(value);
        if (value.length >= 2) {
            // this.DataService.searchPortfolio().subscribe(result => {
            // 	if (field === 'regionManager') {
            // 		this.regionManager = result;
            // 	} else if (field === 'coveringRegManager') {
            // 		this.coveringRegManager = result;
            // 	} else if (field === 'clerk') {
            // 		this.clerk = result;
            // 	} else if (field === 'coveringClerk') {
            // 		this.coveringClerk = result;
            // 	} else if (field === 'manager') {
            // 		this.manager = result;
            // 	} else if (field === 'coveringManager') {
            // 		this.coveringManager = result;
            // 	}
            // 	console.log(result);
            // }, error => console.log('There was an error: ', error));
        }
    };
    PortfolioComponent.prototype.serchSelected = function (Value, field) {
        console.log(field);
        //let formValue: any = this.employeeAssignmentForm.value;
        //emplyee accignment
        if (field === 'regionManager') {
            this.employeeAssignmentForm.controls['regionManager'].setValue(Value);
            this.regionManager = '';
        }
        else if (field === 'coveringRegManager') {
            this.employeeAssignmentForm.controls['coveringRegManager'].setValue(Value);
            this.coveringRegManager = '';
        }
        else if (field === 'clerk') {
            this.employeeAssignmentForm.controls['clerk'].setValue(Value);
            this.clerk = '';
        }
        else if (field === 'coveringClerk') {
            this.employeeAssignmentForm.controls['coveringClerk'].setValue(Value);
            this.coveringClerk = '';
        }
        else if (field === 'manager') {
            this.employeeAssignmentForm.controls['manager'].setValue(Value);
            this.manager = '';
        }
        else if (field === 'coveringManager') {
            this.employeeAssignmentForm.controls['coveringManager'].setValue(Value);
            this.coveringManager = '';
        }
    };
    //update
    PortfolioComponent.prototype.StatusUpdate = function (passedId) {
        var _this = this;
        console.log(passedId);
        this.DataService.StatusUpdatePortfolio(passedId).subscribe(function (result) {
            console.log(result);
            _this.listing(_this.pager.currentPage);
            /*
            this.employeeAssignmentForm.controls['regionManager'].setValue(result.regionManager);
            (<any>$("#Countrycodes")).modal('show');
            this.organizationForm = this.formBuilder.group({
                regionSeq: [result.regSeq],
                regionCode: [""],
                formSaveKey: ['update'],
                            regionName: [result.regNm],
                            regionType: [result.regTyp],
                            regionStatus: [result.regStsKey],
                regionDescription: [result.regDscr],
                regionAddress: [""],
                //regionStatus: ['', Validators.required]
                    });*/
        }, function (error) { return console.log('There was an error: ', error); });
    };
    //AssignLocation
    PortfolioComponent.prototype.AssignLocation = function (passedId, branchId) {
        var _this = this;
        $('#AssignLocation').modal('show');
        console.log(branchId);
        this.AssignLocationId = passedId;
        this.DataService.getAssignLocationPort(branchId).subscribe(function (data) {
            console.log(data);
            _this.AssignLocationValue = data;
            //check already checked
            _this.DataService.getAssignLocationExistPort(passedId).subscribe(function (data) {
                for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
                    var i = _a[_i];
                    console.log(data[i].citySeq);
                    document.getElementById('check-' + data[i].citySeq).checked = true;
                }
                console.log(data);
            }, function (error) {
                console.log('err');
                console.log('err', error);
            });
            // initialize to page 1
            _this.setPage(1);
        }, function (error) {
            console.log('err');
            console.log('err', error);
        });
    };
    PortfolioComponent.prototype.changeRadioStatus = function ($event) {
        var value = $event.target.value;
        var checked = { 'citySeq': value, 'portSeq': this.AssignLocationId };
        if ($event.target.checked === true) {
            this.AssignLocationCheckBox.push(checked);
            console.log(JSON.stringify(this.AssignLocationCheckBox));
            this.AssignLocationForm.controls['citySeq'].setValue(this.AssignLocationCheckBox);
            this.DataService.assignLocationPort(checked).subscribe(function (data) {
                // (<any>$('#AssignLocation')).modal('hide');
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        else {
            this.DataService.removeLocationPort(checked).subscribe(function (data) {
                // (<any>$('#AssignLocation')).modal('hide');
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
            var index_1 = -1;
            var i_1 = 0;
            this.AssignLocationCheckBox.forEach(function (element) {
                i_1++;
                if (element.citySeq == $event.target.value) {
                    index_1 = i_1;
                }
            });
            if (index_1 >= 0) {
                this.AssignLocationCheckBox.splice(index_1);
                this.AssignLocationCheckBox.controls['prdSeq'].setValue(this.AssignLocationCheckBox);
            }
        }
        //console.log(value);
    };
    Object.defineProperty(PortfolioComponent.prototype, "l", {
        //AssignLocationForm
        get: function () { return this.AssignLocationForm.controls; },
        enumerable: true,
        configurable: true
    });
    PortfolioComponent.prototype.onAssignLocationSubmit = function () {
        var _this = this;
        console.log('1');
        this.submitted = true;
        // stop here if form is invalid
        if (this.AssignLocationForm.invalid) {
            return;
        }
        var formValue = this.AssignLocationForm.value;
        console.log(formValue.citySeq);
        if (formValue.formSaveKey === 'add') {
            // this.DataService.AssignLocationPort(formValue.citySeq).subscribe((data) => {
            $('#AssignLocation').modal('hide');
            // 	console.log(data);
            // }, (error) => {
            // 	console.log('err', error);
            // });
        }
        else if (formValue.formSaveKey === 'update') {
            this.DataService.updateOrganization(formValue).subscribe(function (data) {
                $('#UserAssignment').modal('hide');
                _this.pagedItems.splice(_this.pagedItems.indexOf(data.region['regSeq']), 1);
                _this.pagedItems.push(data.region);
                console.log(data);
            }, function (error) {
                console.log('err', error);
            });
        }
        return false;
    };
    PortfolioComponent.prototype.keyPressText = function (event) {
        var pattern = /[a-zA-Z\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    PortfolioComponent.prototype.findValueByKeyStatus = function (key) {
        var status = 'not found';
        this.statusListing.forEach(function (s) {
            if (s.codeKey === key) {
                status = s.codeValue;
            }
        });
        return status;
    };
    PortfolioComponent.prototype.unregisterDevice = function () {
        var _this = this;
        this.spinner.show();
        this.DataService.unregisterDevice(this.AssignTabletForm.value).subscribe(function (res) {
            console.log(res);
            _this.spinner.hide();
            _this.hasDvc = false;
            _this.AssignTabletForm = _this.formBuilder.group({
                entyTypFlg: 1,
                dvcAddr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                entyTypSeq: [_this.AssignTabletForm.value.entyTypSeq, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                crtdBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            });
            _this.toaster.success(res["body"]);
        }, function (error) {
            _this.spinner.hide();
            console.log(error);
            _this.toaster.error(error.error.error, "Error");
        });
    };
    PortfolioComponent.prototype.registerDevice = function () {
        var _this = this;
        this.spinner.show();
        this.DataService.registerDevice(this.AssignTabletForm.value).subscribe(function (res) {
            console.log(res);
            _this.spinner.hide();
            _this.hasDvc = true;
            _this.toaster.success(res["body"]);
        }, function (error) {
            console.log(error);
            _this.spinner.hide();
            _this.toaster.error(error.error.error, "Error");
        });
    };
    PortfolioComponent.prototype.openTabAssignment = function (key) {
        var _this = this;
        this.spinner.show();
        this.DataService.getDvcRgstrFrTyp(1, key).subscribe(function (res) {
            _this.spinner.hide();
            if (res != null) {
                _this.hasDvc = true;
                _this.AssignTabletForm = _this.formBuilder.group({
                    entyTypFlg: 1,
                    dvcAddr: [res['dvcAddr'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    entyTypSeq: [key, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    crtdBy: [res['crtdBy'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                });
            }
            else {
                _this.hasDvc = false;
                _this.AssignTabletForm = _this.formBuilder.group({
                    entyTypFlg: 1,
                    dvcAddr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    entyTypSeq: [key, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    crtdBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                });
            }
            $('#AssignTablet').modal('show');
        }, function (error) {
            _this.spinner.hide();
            console.log(error);
        });
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/pages/setup/organization/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/pages/setup/organization/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/branch-remit.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/branch-remit.model.ts ***!
  \*****************************************************/
/*! exports provided: BranchRemit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchRemit", function() { return BranchRemit; });
var BranchRemit = /** @class */ (function () {
    function BranchRemit() {
    }
    return BranchRemit;
}());



/***/ }),

/***/ "./src/app/shared/services/branch-remit.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/branch-remit.service.ts ***!
  \*********************************************************/
/*! exports provided: BranchRemitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchRemitService", function() { return BranchRemitService; });
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




var BranchRemitService = /** @class */ (function () {
    function BranchRemitService(http) {
        this.http = http;
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_3__["ApiModel"]();
        this.token = 'Bearer ' + sessionStorage.getItem('token');
    }
    BranchRemitService.prototype.getBranchRemitsbyBranchSeq = function (brnchSeq) {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-brnch-remit-rel-by-brnch-seq/' + brnchSeq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    BranchRemitService.prototype.addBranchRemit = function (branchRemit) {
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-brnch-remit-rel', branchRemit, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log("Add BranchRemit"); }));
    };
    BranchRemitService.prototype.updateBranchRemit = function (BranchRemit) {
        return this.http.put(this.apiModel.host + '/setupservice/api/update-branch-remit-rel', BranchRemit, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log(p); }));
    };
    BranchRemitService.prototype.deleteBranchRemit = function (id) {
        return this.http.delete(this.apiModel.host + '/setupservice/api/mw-brnch-remit-rel/' + id, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { return console.log("Delete BranchRemit"); }));
    };
    BranchRemitService.prototype.geterpGliAccounts = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/get-gl-accounts/', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (p) { }));
    };
    BranchRemitService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BranchRemitService);
    return BranchRemitService;
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



/***/ })

}]);
//# sourceMappingURL=organization-organization-module.js.map