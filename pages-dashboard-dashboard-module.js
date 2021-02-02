(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./src/app/pages/dashboard/bdo-dashboard/dashboard.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/dashboard/bdo-dashboard/dashboard.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/dashboard/bdo-dashboard/dashboard.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/dashboard/bdo-dashboard/dashboard.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main nomargin\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"leftSideBar mt-sm-4\">\r\n          <h6><i class=\"fa fa-sliders fa-lg\"></i> Filter</h6>\r\n          <div class=\"filtersWrap\">\r\n            <div class=\"filter nofilter\">\r\n              <a href=\"#.\" class=\"sidetitle\">Recent Activity</a>\r\n              <div class=\"acc_container\">\r\n                <ul class=\"moreless\">\r\n                  <li>Client On Boarding (John Smith)</li>\r\n                  <li>Disbursement (Credit ID)</li>\r\n                  <li>Client On Boarding (John Smith)</li>\r\n                  <li>Disbursement (Credit ID)</li>\r\n                  <li>Client On Boarding (John Smith)</li>\r\n                  <li>Disbursement (Credit ID)</li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"filter nofilter mb-3\">\r\n              <a href=\"#.\" class=\"sidetitle\">Favorites</a>\r\n              <div class=\"acc_container\">\r\n                <ul>\r\n                  <li>Daily Closing Report</li>\r\n                  <li>Accounts Ledger</li>\r\n                  <li>Funds Statement</li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n\r\n            <button class=\"btn btn-primary\"> <i class=\"fa fa-plus\"></i> Add</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content dashboard-wrap mb-md-5\">\r\n          <div class=\"board-head\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"title-Dashboard\">\r\n                  <h1>Dashboard</h1>\r\n                  <span class=\"subtitle\"></span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-4\">\r\n                <div class=\"timerbox\">\r\n                  {{now | date:'h:mm:ss'}} <sub>{{now | date:'a'}}</sub>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"pt-3 pb-3\">\r\n            <div class=\"custom-control custom-radio bidradio custom-control-inline\">\r\n              <input type=\"radio\" id=\"weekly\" checked name=\"coBorrower\" class=\"custom-control-input\">\r\n              <label class=\"custom-control-label\" for=\"weekly\">Weekly</label>\r\n            </div>\r\n            <div class=\"custom-control custom-radio bidradio custom-control-inline\">\r\n              <input type=\"radio\" id=\"monthly\" name=\"coBorrower\" class=\"custom-control-input\">\r\n              <label class=\"custom-control-label\" for=\"monthly\">Monthly</label>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"info-bloks\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4\">\r\n                <div class=\"dashboard-info\">\r\n                  <div class=\"board-box\">\r\n                    <h3> 08</h3>\r\n                    <p class=\"m-0\">Target</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-4\">\r\n                <div class=\"dashboard-info\">\r\n                  <div class=\"board-box purple-bg\">\r\n                    <h3> 03</h3>\r\n                    <p class=\"m-0\">Achieved</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-4\">\r\n                <div class=\"dashboard-info\">\r\n                  <div class=\"board-box darkgreen-bg\">\r\n                    <h3>10</h3>\r\n                    <p class=\"m-0\">Will Be Completed</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <h6>Tasks</h6>\r\n            <table class=\"table\">\r\n              <thead class=\"thead-light\">\r\n              <tr>\r\n                <th>Task</th>\r\n                <th>Owner</th>\r\n                <th>Due Date</th>\r\n                <th>Completion Date</th>\r\n                <th>Description</th>\r\n                <th>Status</th>\r\n                <th>Action</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n              <tr *ngFor=\"let task of tasks\">\r\n                <td>{{task.name}}</td>\r\n                <td>{{task.owner}} </td>\r\n                <td>{{task.dueDate}}</td>\r\n                <td>{{task.completionDate}}</td>\r\n                <td>{{task.description}}</td>\r\n                <td ngClass=\"{{statusColors.get(task.status)}}\" >{{task.status}}</td>\r\n                <td>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Disburse</td>\r\n                <td>MUMTAZ</td>\r\n                <td>3/31/2018</td>\r\n                <td></td>\r\n                <td>Discription will here</td>\r\n                <td class=\"colorBrown\">On Hold</td>\r\n                <td>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Credit No.</td>\r\n                <td>SUGHRAN</td>\r\n                <td>3/31/2018</td>\r\n                <td></td>\r\n                <td>Discription will here</td>\r\n                <td class=\"colorRed\">Overdue</td>\r\n                <td>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Client</td>\r\n                <td>Abida </td>\r\n                <td>3/31/2018</td>\r\n                <td>3/31/2018</td>\r\n                <td>Discription will here</td>\r\n                <td class=\"colorGreen\">Active</td>\r\n                <td>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Disburse</td>\r\n                <td>SOBIA</td>\r\n                <td>3/31/2018</td>\r\n                <td></td>\r\n                <td>Discription will here</td>\r\n                <td class=\"colorPurple\">Inprogress</td>\r\n                <td>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Credit No.</td>\r\n                <td>MUSSARAT</td>\r\n                <td>3/31/2018</td>\r\n                <td></td>\r\n                <td>Discription will here</td>\r\n                <td class=\"colorRed\">Overdue</td>\r\n                <td>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>Client</td>\r\n                <td>Nabila </td>\r\n                <td>3/31/2018</td>\r\n                <td></td>\r\n                <td>Discription will here</td>\r\n                <td class=\"colorRed\">Overdue</td>\r\n                <td>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                  <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <nav aria-label=\"Page navigation \">\r\n            <ul class=\"pagination justify-content-center\">\r\n              <li class=\"page-item disabled\">\r\n                <a class=\"page-link\" href=\"#\" tabindex=\"-1\">Previous</a>\r\n              </li>\r\n              <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">5</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">6</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">7</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">8</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">9</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">10</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">11</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">12</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">13</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">14</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">15</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">16</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">17</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">18</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">19</a></li>\r\n              <li class=\"page-item\">\r\n                <a class=\"page-link\" href=\"#\">Next</a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/bdo-dashboard/dashboard.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/dashboard/bdo-dashboard/dashboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_mocks_tasks_mocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/mocks/tasks.mocks */ "./src/app/shared/mocks/tasks.mocks.ts");
/* harmony import */ var _shared_mocks_statusColors_mocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/mocks/statusColors.mocks */ "./src/app/shared/mocks/statusColors.mocks.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        var _this = this;
        this.tasks = _shared_mocks_tasks_mocks__WEBPACK_IMPORTED_MODULE_1__["TASKS"];
        this.statusColors = _shared_mocks_statusColors_mocks__WEBPACK_IMPORTED_MODULE_2__["STATUSCOLORS"];
        this.now = new Date();
        setInterval(function () {
            _this.now = new Date();
        }, 1);
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/bdo-dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pages/dashboard/bdo-dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/bm-dashboard/bm-dashboard.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/dashboard/bm-dashboard/bm-dashboard.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/dashboard/bm-dashboard/bm-dashboard.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/dashboard/bm-dashboard/bm-dashboard.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main nomargin\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"leftSideBar mt-sm-4\">\r\n          <h6>\r\n            <i class=\"fa fa-sliders fa-lg\"></i> Filter</h6>\r\n          <div class=\"filtersWrap\">\r\n            <div class=\"filter\">\r\n              <a href=\"#.\" class=\"acc_trigger\">Organization</a>\r\n              <div class=\"collapse acc_container\">\r\n                <ul>\r\n                  <li>Portfolio 001</li>\r\n                  <li>Portfolio 002</li>\r\n                  <li>Portfolio 003</li>\r\n                  <li>Portfolio 004</li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"filter\">\r\n              <a href=\"#.\" class=\"acc_trigger\">Application Status</a>\r\n              <div class=\"collapse acc_container\">\r\n                <ul>\r\n                  <li>Approved</li>\r\n                  <li>Rejected</li>\r\n                  <li>Sent Back</li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"filter\">\r\n              <a href=\"#.\" class=\"acc_trigger\">Favorites</a>\r\n              <div class=\"collapse acc_container\">\r\n                <ul>\r\n                  <li>Daily Closing Report</li>\r\n                  <li>Accounts Ledger</li>\r\n                  <li>Funds Statement</li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n\r\n            <button class=\"btn btn-primary mt-3\">\r\n              <i class=\"fa fa-plus\"></i> Add</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content dashboard-wrap mb-md-5\">\r\n          <div class=\"board-head\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-8\">\r\n                <div class=\"title-Dashboard\">\r\n                  <h1>Dashboard</h1>\r\n                  <span class=\"subtitle\"></span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-4\">\r\n                <div class=\"timerbox\">\r\n                  {{now | date:'h:mm:ss'}} <sub>{{now | date:'a'}}</sub>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"pt-3 pb-3\">\r\n            <div class=\"custom-control custom-radio bidradio custom-control-inline\">\r\n              <input type=\"radio\" id=\"weekly\" checked name=\"coBorrower\" class=\"custom-control-input\">\r\n              <label class=\"custom-control-label\" for=\"weekly\">Weekly</label>\r\n            </div>\r\n            <div class=\"custom-control custom-radio bidradio custom-control-inline\">\r\n              <input type=\"radio\" id=\"monthly\" name=\"coBorrower\" class=\"custom-control-input\">\r\n              <label class=\"custom-control-label\" for=\"monthly\">Monthly</label>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"info-bloks\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4\">\r\n                <div class=\"dashboard-info\">\r\n                  <div class=\"board-box\">\r\n                    <h3> 08</h3>\r\n                    <p class=\"m-0\">Target</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-4\">\r\n                <div class=\"dashboard-info\">\r\n                  <div class=\"board-box purple-bg\">\r\n                    <h3> 03</h3>\r\n                    <p class=\"m-0\">Achieved</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-4\">\r\n                <div class=\"dashboard-info\">\r\n                  <div class=\"board-box darkgreen-bg\">\r\n                    <h3>01</h3>\r\n                    <p class=\"m-0\">Will Be Completed</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"content\">\r\n            <ul class=\"nav nav-tabs borrowerTabs\">\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link active\" href=\"bm-index.html\">Credit Application</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" href=\"bm-tasks.html\">Task</a>\r\n              </li>\r\n            </ul>\r\n            <div class=\"borrowerTabsContent pt-3 pl-3 pr-3 pb-0\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                  <thead class=\"thead-light\">\r\n                    <tr>\r\n                      <th>Application ID</th>\r\n                      <th>Portfolio</th>\r\n                      <th>Client</th>\r\n                      <th>Product</th>\r\n                      <th>Request Creidt Amount</th>\r\n                      <th>Approved Credit Amount</th>\r\n                      <th>Status</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>\r\n                        <a href=\"process-application.html\"> 12345678</a>\r\n                      </td>\r\n                      <td>001-East</td>\r\n                      <td>Shabnam</td>\r\n                      <td>Kashf Karobar</td>\r\n                      <td>30,000</td>\r\n                      <td>30,000</td>\r\n                      <td class=\"colorGreen\">Aapproved</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <a href=\"process-application.html\"> 12345678</a>\r\n                      </td>\r\n                      <td>001-East</td>\r\n                      <td>Sayra khanam</td>\r\n                      <td>Kashf Easy Credit</td>\r\n                      <td>40,000</td>\r\n                      <td>38,000</td>\r\n                      <td class=\"colorGreen\">Aapproved</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <a href=\"process-application.html\"> 12345678</a>\r\n                      </td>\r\n                      <td>001-East</td>\r\n                      <td>Abida </td>\r\n                      <td>Kashf Karobar</td>\r\n                      <td>60,000</td>\r\n                      <td></td>\r\n                      <td class=\"colorRed\">Rejected</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <a href=\"process-application.html\"> 12345678</a>\r\n                      </td>\r\n                      <td>001-East</td>\r\n                      <td>Rshida</td>\r\n                      <td>Kashf Easy Credit</td>\r\n                      <td>50,000</td>\r\n                      <td>58,000</td>\r\n                      <td class=\"colorGreen\">Aapproved</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <a href=\"process-application.html\"> 12345678</a>\r\n                      </td>\r\n                      <td>001-East</td>\r\n                      <td>Ammara</td>\r\n                      <td>Kashf Karobar</td>\r\n                      <td>30,000</td>\r\n                      <td></td>\r\n                      <td class=\"colorBrown\">Sent Back</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <a href=\"process-application.html\"> 12345678</a>\r\n                      </td>\r\n                      <td>001-East</td>\r\n                      <td>Naseema</td>\r\n                      <td>Kashf Easy Credit</td>\r\n                      <td>40,000</td>\r\n                      <td></td>\r\n                      <td class=\"colorRed\">Rejected</td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                      <td>\r\n                        <a href=\"process-application.html\"> 12345678</a>\r\n                      </td>\r\n                      <td>001-East</td>\r\n                      <td>Farzana</td>\r\n                      <td>Kashf Easy Credit</td>\r\n                      <td>30,000</td>\r\n                      <td>30,000</td>\r\n                      <td class=\"colorGreen\">Aapproved</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/dashboard/bm-dashboard/bm-dashboard.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/dashboard/bm-dashboard/bm-dashboard.component.ts ***!
  \************************************************************************/
/*! exports provided: BmDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BmDashboardComponent", function() { return BmDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_tasks_mocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/tasks.mocks */ "./src/app/shared/models/tasks.mocks.ts");
/* harmony import */ var _shared_models_statusColors_mocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/statusColors.mocks */ "./src/app/shared/models/statusColors.mocks.ts");
/* harmony import */ var src_app_shared_services_recovery_closing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/recovery-closing.service */ "./src/app/shared/services/recovery-closing.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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








var BmDashboardComponent = /** @class */ (function () {
    function BmDashboardComponent(recoveryClosingService, toaster, router, spinner) {
        var _this = this;
        this.recoveryClosingService = recoveryClosingService;
        this.toaster = toaster;
        this.router = router;
        this.spinner = spinner;
        this.tasks = _shared_models_tasks_mocks__WEBPACK_IMPORTED_MODULE_1__["TASKS"];
        this.statusColors = _shared_models_statusColors_mocks__WEBPACK_IMPORTED_MODULE_2__["STATUSCOLORS"];
        this.now = new Date();
        this.auth = JSON.parse(sessionStorage.getItem("auth"));
        setInterval(function () {
            _this.now = new Date();
        }, 1);
    }
    BmDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var openDate = new Date(this.auth.brnchOpnDt);
        var now = new Date();
        if (openDate.getDate() != now.getDate()) {
            sessionStorage.setItem("closing", "true");
            this.auth.modules = [{ deleteFlag: true,
                    modNm: "Admin",
                    readFlag: true,
                    modUrl: "admin",
                    writeFlag: true }];
            sessionStorage.setItem("auth", JSON.stringify(this.auth));
            // this.spinner.show();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                title: 'Branch Closing',
                text: 'Branch not closed for ' + openDate.toDateString(),
                type: 'warning',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Redirect',
                allowOutsideClick: false
            }).then(function (result) {
                if (result.value) {
                    _this.spinner.show();
                    _this.router.navigate(['admin/closing']);
                }
            });
        }
        //   this.recoveryClosingService.getRecoveryClosing().subscribe(data => {
        //     if (data.length > 0) {
        //       this.spinner.hide();
        //       // this.toaster.warning("Unposted Recoveries are Pending for " + openDate.toDateString(), "Warning", {
        //       //   disableTimeOut: true,
        //       //   closeButton: true,
        //       // });
        //       swal({
        //         title: 'Branch Closing',
        //         text: 'Un-Posted Recoveries are Pending for '+ openDate.toDateString(),
        //         type: 'warning',
        //         showCancelButton: false,
        //         confirmButtonColor: '#3085d6',
        //         confirmButtonText: 'Redirect',
        //         backdrop:false
        //       }).then((result) => {
        //         if (result.value) {
        //           this.spinner.show();
        //           this.router.navigate(['admin/closing']);
        //         }
        //       });
        //       return;
        //     }
        //     this.recoveryClosingService.getDisbursementClosing().subscribe(data => {
        //       this.spinner.hide();
        //       if (data.length > 0) {
        //         swal({
        //           title: 'Branch Closing',
        //           text: 'Un-Posted Disbursement are Pending for '+ openDate.toDateString(),
        //           type: 'warning',
        //           showCancelButton: false,
        //           confirmButtonColor: '#3085d6',
        //           confirmButtonText: 'Redirect',
        //           backdrop:false
        //         }).then((result) => {
        //           if (result.value) {
        //             this.spinner.show();
        //             this.router.navigate(['admin/closing']);
        //           }
        //         });
        //         return;
        //       }
        //       this.recoveryClosingService.getExpenseClosing().subscribe(data => {
        //         this.spinner.hide();
        //         if (data.length > 0) {
        //           swal({
        //             title: 'Branch Closing',
        //             text: 'Un-Posted Expense are Pending for '+ openDate.toDateString(),
        //             type: 'warning',
        //             showCancelButton: false,
        //             confirmButtonColor: '#3085d6',
        //             confirmButtonText: 'Redirect',
        //             backdrop:false
        //           }).then((result) => {
        //             if (result.value) {
        //               this.spinner.show();
        //               this.router.navigate(['admin/closing']);
        //             }
        //           });
        //           return;
        //         }
        //       });
        //     });
        //   });
        // }
        // }
    };
    BmDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bm-dashboard',
            template: __webpack_require__(/*! ./bm-dashboard.component.html */ "./src/app/pages/dashboard/bm-dashboard/bm-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./bm-dashboard.component.css */ "./src/app/pages/dashboard/bm-dashboard/bm-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_recovery_closing_service__WEBPACK_IMPORTED_MODULE_3__["RecoveryClosingService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], BmDashboardComponent);
    return BmDashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bdo_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bdo-dashboard/dashboard.component */ "./src/app/pages/dashboard/bdo-dashboard/dashboard.component.ts");
/* harmony import */ var _bm_dashboard_bm_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bm-dashboard/bm-dashboard.component */ "./src/app/pages/dashboard/bm-dashboard/bm-dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _bdo_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'bdo', component: _bdo_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: "bm", component: _bm_dashboard_bm_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["BmDashboardComponent"] }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/pages/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _bdo_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bdo-dashboard/dashboard.component */ "./src/app/pages/dashboard/bdo-dashboard/dashboard.component.ts");
/* harmony import */ var _bm_dashboard_bm_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bm-dashboard/bm-dashboard.component */ "./src/app/pages/dashboard/bm-dashboard/bm-dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]
            ],
            declarations: [_bdo_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _bm_dashboard_bm_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["BmDashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/shared/mocks/statusColors.mocks.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/mocks/statusColors.mocks.ts ***!
  \****************************************************/
/*! exports provided: STATUSCOLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUSCOLORS", function() { return STATUSCOLORS; });
var STATUSCOLORS = new Map([
    ['On Hold', 'colorBrown'],
    ['Active', 'colorGreen'],
    ['Overdue', 'colorRed'],
    ['In Progress', 'colorPurple']
]);


/***/ }),

/***/ "./src/app/shared/mocks/tasks.mocks.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/mocks/tasks.mocks.ts ***!
  \*********************************************/
/*! exports provided: TASKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASKS", function() { return TASKS; });
var TASKS = [{ id: 1, name: 'Client',
        owner: 'Abida', dueDate: '9/24/2018', completionDate: '10/24/2018',
        description: 'new business of abida', status: 'On Hold' },
    { id: 2, name: 'Loan No. ',
        owner: 'Shugran', dueDate: '1/12/2018', completionDate: '1/1/2019',
        description: 'Some description here', status: 'Active' },
    { id: 1238, name: 'Rule Name 1',
        owner: 'Product', dueDate: '', completionDate: '',
        description: '', status: 'On Hold' },
    { id: 1238, name: 'Rule Name 1',
        owner: 'Product', dueDate: '', completionDate: '',
        description: '', status: 'Overdue' },
    { id: 1238, name: 'Rule Name 1',
        owner: 'Product', dueDate: '', completionDate: '',
        description: '', status: 'In Progress' }
];


/***/ }),

/***/ "./src/app/shared/models/statusColors.mocks.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/statusColors.mocks.ts ***!
  \*****************************************************/
/*! exports provided: STATUSCOLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUSCOLORS", function() { return STATUSCOLORS; });
var STATUSCOLORS = new Map([
    ['On Hold', 'colorBrown'],
    ['Active', 'colorGreen'],
    ['Overdue', 'colorRed'],
    ['In Progress', 'colorPurple']
]);


/***/ }),

/***/ "./src/app/shared/models/tasks.mocks.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/models/tasks.mocks.ts ***!
  \**********************************************/
/*! exports provided: TASKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASKS", function() { return TASKS; });
var TASKS = [{ id: 1, name: 'Client',
        owner: 'Abida', dueDate: '9/24/2018', completionDate: '10/24/2018',
        description: 'new business of abida', status: 'On Hold' },
    { id: 2, name: 'Loan No. ',
        owner: 'Shugran', dueDate: '1/12/2018', completionDate: '1/1/2019',
        description: 'Some description here', status: 'Active' },
    { id: 1238, name: 'Rule Name 1',
        owner: 'Product', dueDate: '', completionDate: '',
        description: '', status: 'On Hold' },
    { id: 1238, name: 'Rule Name 1',
        owner: 'Product', dueDate: '', completionDate: '',
        description: '', status: 'Overdue' },
    { id: 1238, name: 'Rule Name 1',
        owner: 'Product', dueDate: '', completionDate: '',
        description: '', status: 'In Progress' }
];


/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module.js.map