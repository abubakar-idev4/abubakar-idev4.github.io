(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["communication-workflow-communicatoin-workflow-module~compliance-repot-compliance-repot-module~geogra~9b30a8c6"],{

/***/ "./src/app/shared/services/data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/data.service.ts ***!
  \*************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var DataService = /** @class */ (function () {
    // url:string = "http://192.168.7.49:8080";
    //url:string = "http://192.168.100.17:8080";
    function DataService(http, router) {
        this.http = http;
        this.router = router;
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_3__["ApiModel"]();
        // url:string = "http://localhost:8080";
        this.url = this.apiModel.host;
        this.token = "Bearer " + sessionStorage.getItem("token");
    }
    //pagenation service
    DataService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    DataService.prototype.createClient = function (object) {
        return this.http.post(this.url + "/loanservice/api/create-mw-clnt", object, { headers: this.apiModel.httpHeaderPost });
    };
    //common services
    DataService.prototype.statusList = function () {
        return this.http.get(this.url + "/setupservice/api/vals-by-group-name?groupName=STATUS", { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.functionList = function () {
        return this.http.get(this.url + "/setupservice/api/vals-by-group-name?groupName=FUNCTION", { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.regionType = function () {
        return this.http.get(this.url + "/setupservice/api/vals-by-group-name?groupName=regionType", { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.createInfo = function (object) {
        return this.http.put(this.url + "/loanservice/api/update-mw-clnt", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.createLoanInfo = function (object) {
        return this.http.post(this.url + "/loanservice/api/create-client-loan-application", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.createInsuranceInfo = function (object) {
        return this.http.post(this.url + "/loanservice/api/clnt-hlth-insr", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.addInsuranceInfo = function (object) {
        return this.http.post(this.url + "/loanservice/api/create-hlth-insr-memb", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.addNomineeInfo = function (object) {
        return this.http.post(this.url + "/loanservice/api/add-client-nominee", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.addBusinessAppraisal = function (object) {
        return this.http.post(this.url + "/loanservice/api/create-biz-aprsls", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.addPrimaryIncome = function (object) {
        return this.http.post(this.url + "/loanservice/api/mw-biz-aprsl-incm-dtls", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.addExpense = function (object) {
        return this.http.post(this.url + "/loanservice/api/create-business-expense", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.addExpenseLoan = function (object) {
        return this.http.post(this.url + "/loanservice/api/mw-loan-utl-plans", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.getUserLoanInfo = function (id) {
        return this.http.get(this.url + "/loanservice/api/mw-clnts/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.getAllLoanInfo = function () {
        return this.http.get(this.url + "/loanservice/api/mw-clnts/", { headers: this.apiModel.httpHeaderGet });
    };
    //common code services
    DataService.prototype.addCommonCode = function (object) {
        return this.http.post(this.url + "/setupservice/api/create-ref-cd-grps", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.getAllCommonCode = function () {
        return this.http.get(this.url + "/setupservice/api/mw-ref-cd-grps", { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.updateAllCommonCode = function (object) {
        return this.http.put(this.url + "/setupservice/api/update-ref-cd-grps", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.editAllCommonCode = function (id) {
        return this.http.get(this.url + "/setupservice/api/mw-ref-cd-grps/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    //common code value
    DataService.prototype.addCommonCodeValue = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-ref-cd-vals", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.getCommonCodeValue = function (id) {
        return this.http.get(this.url + "/setupservice/api/ref-cd-vals-by-group/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.delCommonCodeValue = function (id) {
        return this.http.delete(this.url + "/setupservice/api/mw-ref-cd-vals/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.updateCommonCodeValue = function (object) {
        return this.http.put(this.url + "/setupservice/api/update-ref-cd-vals", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.editCommonCodeValue = function (id) {
        return this.http.get(this.url + "/setupservice/api/mw-ref-cd-vals/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    //Organization
    DataService.prototype.addOrganization = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-region", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.getOrganization = function () {
        return this.http.get(this.url + "/setupservice/api/mw-regs", { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.delOrganization = function (id) {
        return this.http.delete(this.url + "/setupservice/api/mw-regs/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.updateOrganization = function (object) {
        return this.http.put(this.url + "/setupservice/api/update-mw-regs", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.editOrganization = function (id) {
        return this.http.get(this.url + "/setupservice/api/mw-regs/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.StatusUpdateOrganization = function (id) {
        return this.http.put(this.url + "/setupservice/api/update-region-status/" + id, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.UserAssignmentOrganization = function (id) {
        return this.http.get(this.url + "/setupservice/api/get-employees-of-region/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.getAllEmps = function () {
        return this.http.get(this.url + "/setupservice/api/mw-all-emps", { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.addEmployeeOrganization = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-reg-emp-rels", object, { headers: this.apiModel.httpHeaderPost });
    };
    //area
    DataService.prototype.addArea = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-areas", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.getArea = function (id) {
        return this.http.get(this.url + "/setupservice/api/areas-by-organization/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.delArea = function (id) {
        return this.http.delete(this.url + "/setupservice/api/mw-areas/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.updateArea = function (object) {
        return this.http.put(this.url + "/setupservice/api/update-areas", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.editArea = function (id) {
        return this.http.get(this.url + "/setupservice/api/mw-areas/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.StatusUpdateArea = function (id) {
        return this.http.put(this.url + "/setupservice/api/update-area-status/" + id, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.UserAssignmentArea = function (id) {
        return this.http.get(this.url + "/setupservice/api/get-employees-of-area/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.searchArea = function () {
        return this.http.get(this.url + "/setupservice/api/mw-all-emps", { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.addEmployeeArea = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-new-emp-reg-rels", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.addAreaEmployee = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-area-emp-rels", object, { headers: this.apiModel.httpHeaderPost });
    };
    //branch
    DataService.prototype.addBranch = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-brnches", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.getBranch = function (id) {
        return this.http.get(this.url + "/setupservice/api/brnches-by-area/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.getBranchByUser = function () {
        return this.http.get(this.url + "/setupservice/api/mw-brnches-by-user", { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.delBranch = function (id) {
        return this.http.delete(this.url + "/setupservice/api/mw-brnches/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.updateBranch = function (object) {
        return this.http.put(this.url + "/setupservice/api/update-brnches", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.editBranch = function (id) {
        return this.http.get(this.url + "/setupservice/api/mw-brnches/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.StatusUpdateBranch = function (id) {
        return this.http.put(this.url + "/setupservice/api/update-brnch-status/" + id, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.UserAssignmentBranch = function (id) {
        return this.http.get(this.url + "/setupservice/api/get-employees-of-branch/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.AccountSetupBranch = function (id) {
        return this.http.get(this.url + "/setupservice/api/brnch-acct-set-by-branch/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.searchBranch = function () {
        return this.http.get(this.url + "/setupservice/api/mw-all-emps", { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.getAllEmployeeList = function () {
        return this.http.get(this.url + "/setupservice/api/mw-all-emps", { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.getAllEmployeeListForBrnch = function (brnchSeq, typ) {
        return this.http.get(this.url + "/setupservice/api/mw-emps/" + brnchSeq + "/" + typ, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.addEmployeeBranch = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-mw-brnch-emp-rel", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.AccountSetup = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-brnch-acct-sets", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.UpdateAccountSetup = function (object) {
        return this.http.put(this.url + "/setupservice/api/update-brnch-acct-set", object, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.AssignLocation = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-brnch-location-rels", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.assignLocation = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-brnch-location-rel", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.removeLocation = function (object) {
        return this.http.post(this.url + "/setupservice/api/remove-brnch-location-rels", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.getAssignLocation = function () {
        return this.http.get(this.url + "/loanservice/api/get-address-combinations/", { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.getAssignLocationExist = function (id) {
        return this.http.get(this.url + "/setupservice/api/get-brnch-location-rels/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.ProductAssign = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-brnch-prd-rels", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.addProduct = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-brnch-prd-rel", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.removeProduct = function (object) {
        return this.http.post(this.url + "/setupservice/api/remove-brnch-prd-rel", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.getProductAssign = function () {
        return this.http.get(this.url + "/setupservice/api/get-products-listing/", { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.getProductAssignExist = function (id) {
        return this.http.get(this.url + "/setupservice/api/get-brnch-prd-rels/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    //portfolio
    DataService.prototype.addPortfolio = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-new-portfolio", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.getPortfolio = function (id) {
        return this.http.get(this.url + "/setupservice/api/mw-ports-by-branch/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.delPortfolio = function (id) {
        return this.http.delete(this.url + "/setupservice/api/mw-ports/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.updatePortfolio = function (object) {
        return this.http.put(this.url + "/setupservice/api/update-portfolio", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.editPortfolio = function (id) {
        return this.http.get(this.url + "/setupservice/api/mw-ports/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.StatusUpdatePortfolio = function (id) {
        return this.http.put(this.url + "/setupservice/api/update-portfolio-status/" + id, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.UserAssignmentPortfolio = function (id) {
        return this.http.get(this.url + "/setupservice/api/get-employees-of-port/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.getUserAssignmentPortfolio = function (id) {
        return this.http.get(this.url + "/setupservice/api/get-employees-of-port/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.searchPortfolio = function () {
        return this.http.get(this.url + "/setupservice/api/mw-all-emps", { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.getAllEmployee = function () {
        return this.http.get(this.url + "/setupservice/api/mw-all-emps", { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.addEmployeePortfolio = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-port-emp-rels", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.AssignLocationPort = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-port-location-rels", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.assignLocationPort = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-port-location-rel", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.removeLocationPort = function (object) {
        return this.http.post(this.url + "/setupservice/api/remove-port-location-rel", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.getAssignLocationPort = function (id) {
        return this.http.get(this.url + "/setupservice/api/get-port-location-options/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.getAssignLocationExistPort = function (id) {
        return this.http.get(this.url + "/setupservice/api/get-port-location-rels/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    //community
    DataService.prototype.addCommunity = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-new-cmnty", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.getCommunity = function (id) {
        return this.http.get(this.url + "/setupservice/api/get-cmnties-by-portfolio/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.delCommunity = function (id) {
        return this.http.delete(this.url + "/setupservice/api/mw-cmnties/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.updateCommunity = function (object) {
        return this.http.put(this.url + "/setupservice/api/update-cmnties", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.editCommunity = function (id) {
        return this.http.get(this.url + "/setupservice/api/mw-cmnties/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.StatusUpdateCommunity = function (id) {
        return this.http.put(this.url + "/setupservice/api/update-community-status/" + id, { headers: this.apiModel.httpHeaderPost });
    };
    //Country
    DataService.prototype.addCountry = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-cntry", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.getCountry = function () {
        return this.http.get(this.url + "/setupservice/api/mw-cntries", { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.delCountry = function (id) {
        return this.http.delete(this.url + "/setupservice/api/mw-cntries/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.updateCountry = function (object) {
        return this.http.put(this.url + "/setupservice/api/update-cntries", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.editCountry = function (id) {
        return this.http.get(this.url + "/setupservice/api/mw-cntries/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    //Province
    DataService.prototype.addProvince = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-new-sts", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.getProvince = function (id) {
        return this.http.get(this.url + "/setupservice/api/get-states-by-country/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.delProvince = function (id) {
        return this.http.delete(this.url + "/setupservice/api/mw-sts/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.updateProvince = function (object) {
        return this.http.put(this.url + "/setupservice/api/update-sts", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.editProvince = function (id) {
        return this.http.get(this.url + "/setupservice/api/mw-sts/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    //District
    DataService.prototype.addDistrict = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-new-dist", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.getDistrict = function (id) {
        return this.http.get(this.url + "/setupservice/api/get-dists-by-state/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.delDistrict = function (id) {
        return this.http.delete(this.url + "/setupservice/api/mw-dists/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.updateDistrict = function (object) {
        return this.http.put(this.url + "/setupservice/api/update-dists", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.editDistrict = function (id) {
        return this.http.get(this.url + "/setupservice/api/mw-dists/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    //Tehsil
    DataService.prototype.addTehsil = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-new-thsl", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.getTehsil = function (id) {
        return this.http.get(this.url + "/setupservice/api/get-states-by-district/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.delTehsil = function (id) {
        return this.http.delete(this.url + "/setupservice/api/mw-thsls/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.updateTehsil = function (object) {
        return this.http.put(this.url + "/setupservice/api/update-thsl", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.editTehsil = function (id) {
        return this.http.get(this.url + "/setupservice/api/mw-thsls/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    //Union Council 
    DataService.prototype.addUN = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-new-uc", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.getUN = function (id) {
        return this.http.get(this.url + "/setupservice/api/get-ucs-by-thsl/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.delUN = function (id) {
        return this.http.delete(this.url + "/setupservice/api/mw-ucs/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.updateUN = function (object) {
        return this.http.put(this.url + "/setupservice/api/update-ucs", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.editUN = function (id) {
        return this.http.get(this.url + "/setupservice/api/mw-ucs/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    //communicatioin workflow rule 
    DataService.prototype.getCommunicatioinWorkflow = function () {
        return this.http.get(this.url + "/setupservice/api/mw-comm-wfs", { headers: this.apiModel.httpHeaderGet });
    };
    //Aproval workflow delete
    DataService.prototype.delCommunicatioinWorkflow = function (id) {
        return this.http.delete(this.url + "/setupservice/api/mw-comm-wfs/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    //communicatioin workflow rule 
    DataService.prototype.addWorkflowRule = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-new-comm-wfs", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.updateCommunicatioinWorkflowRule = function (object) {
        return this.http.put(this.url + "/setupservice/api/update-comm-wfs", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.editCommunicatioinWorkflowRule = function (id) {
        return this.http.get(this.url + "/setupservice/api/mw-comm-wfs/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    //communicatioin workflow Action 
    DataService.prototype.addWorkflowAction = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-comm-wf-msgs", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.updateCommunicatioinWorkflowAction = function (object) {
        return this.http.put(this.url + "/setupservice/api/update-comm-wf-msgs", object, { headers: this.apiModel.httpHeaderPost });
    };
    DataService.prototype.editCommunicatioinWorkflowAction = function (id) {
        return this.http.get(this.url + "/setupservice/api/mw-comm-wfs/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    /*//communicatioin workflow rule
    addWorkflowRule(object){
      const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Authorization': this.token
            })
        };
      return this.http.post<{data:"", commSeq:any}>(this.url+"/setupservice/api/add-new-comm-wfs",object, httpOptions );
    }*/
    //Aproval workflow listing
    DataService.prototype.getAprovalWorkflow = function () {
        return this.http.get(this.url + "/setupservice/api/mw-aprvl-wfs", { headers: this.apiModel.httpHeaderGet });
    };
    //Aproval workflow add  
    DataService.prototype.addAprovalWorkflow = function (object) {
        return this.http.post(this.url + "/setupservice/api/add-new-aprvl-wfs", object, { headers: this.apiModel.httpHeaderPost });
    };
    //Aproval workflow delete
    DataService.prototype.delAprovalWorkflow = function (id) {
        return this.http.delete(this.url + "/setupservice/api/mw-aprvl-wfs/" + id, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.getDvcRgstrFrTyp = function (typFlg, typSeq) {
        return this.http.get(this.url + "/setupservice/api/get-registerd-device/" + typFlg + "/" + typSeq, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.unregisterDevice = function (obj) {
        return this.http.put(this.url + "/setupservice/api/unregister-dvc", obj, { headers: this.apiModel.httpHeaderGet });
    };
    DataService.prototype.registerDevice = function (obj) {
        return this.http.post(this.url + "/setupservice/api/register-dvc", obj, { headers: this.apiModel.httpHeaderGet });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DataService);
    return DataService;
}());



/***/ })

}]);
//# sourceMappingURL=communication-workflow-communicatoin-workflow-module~compliance-repot-compliance-repot-module~geogra~9b30a8c6.js.map