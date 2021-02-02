(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["communication-workflow-communicatoin-workflow-module"],{

/***/ "./src/app/pages/setup/communication-workflow/add-workflow-action/add-workflow-action.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/setup/communication-workflow/add-workflow-action/add-workflow-action.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/communication-workflow/add-workflow-action/add-workflow-action.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/setup/communication-workflow/add-workflow-action/add-workflow-action.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t<ol class=\"breadcrumb breadcrumb-arrow\">\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a routerLink=\"/setup/communication-workflow/add-workflow-rule\">Rule</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"active\">\r\n\t\t\t\t\t<a routerLink=\"/setup/communication-workflow/add-workflow-action\">Workflow Action</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ol>\r\n\t\t</nav>\r\n\r\n\t\t<div class=\"content\">\r\n\t\t\t<h6 class=\"mt-3\">Workflow Action</h6>\r\n\t\t\t<div class=\"cRow\">\r\n\t\t\t\t<div class=\"cCol1\">\r\n\t\t\t\t\t<label>Workflow Action:</label>\r\n\t\t\t\t\t<form class=\"md-float-material\" [formGroup]=\"test\" (ngSubmit)=\"ontestSubmit()\">\r\n\t\t\t\t\t\t<select formControlName=\"okvalue\" (change)=\"WorkflowActionChanged($event.target.value)\" class=\"form-control\" id=\"divselector\">\r\n\t\t\t\t\t\t\t<option value=\"newtast\">New Task</option>\r\n\t\t\t\t\t\t\t<option value=\"newsms\">New SMS</option>\r\n\t\t\t\t\t\t\t<option value=\"EmailAlert\">Email Alert</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"newtast\" class=\"newtast\" id=\"newtast\">\r\n\t\t\t\t<form class=\"md-float-material\" [formGroup]=\"workflowActionNewTaskForm\" (ngSubmit)=\"onWorkworkflowActionNewTaskSubmit()\">\r\n\t\t\t\t\t<div class=\"cRow\">\r\n\t\t\t\t\t\t<div class=\"cCol1 mt-4\">\r\n\t\t\t\t\t\t\t<label>Subject:</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"taskSubject\" [ngClass]=\"{ 'is-invalid': submitted && f.taskSubject.errors }\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"cCol5 pt-0m2\">\r\n\t\t\t\t\t\t\t<label>Due Date Calculation:</label>\r\n\t\t\t\t\t\t\t<div class=\"blackborder clearfix\">\r\n\t\t\t\t\t\t\t\t<div class=\"cCol1\">\r\n\t\t\t\t\t\t\t\t\t<label>Days:</label>\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"taskDays\" [ngClass]=\"{ 'is-invalid': submitted && f.taskDays.errors }\"\r\n\t\t\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"cCol1 mt-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"Aftter\" class=\"custom-control-input\" value=\"After\" [checked]=\"true\" formControlName=\"taskDueable\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"Aftter\">Aftter</label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"Before\" class=\"custom-control-input\" value=\"Before\" formControlName=\"taskDueable\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"Before\">Before</label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"cCol1\">\r\n\t\t\t\t\t\t\t\t\t<label>Date Field:</label>\r\n\t\t\t\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" formControlName=\"taskDate\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"cCol1 mt-4\">\r\n\t\t\t\t\t\t\t<label>Assign to:</label>\r\n\t\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"taskAssignTo\">\r\n\t\t\t\t\t\t\t\t<option value=\"1\" [selected]=\"1\">Assign to 1</option>\r\n\t\t\t\t\t\t\t\t<option value=\"2\">Assign to 2</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"cRow\">\r\n\t\t\t\t\t\t<div class=\"cCol1\">\r\n\t\t\t\t\t\t\t<label>Status:</label>\r\n\t\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"taskStatus\">\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let status of statusListing\" value=\"{{status.codeKey}}\">{{status.codeValue}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"cRow\">\r\n\t\t\t\t\t\t<div class=\"cCol7\">\r\n\t\t\t\t\t\t\t<label>Comments:</label>\r\n\t\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"taskActionComments\" [ngClass]=\"{ 'is-invalid': submitted && f.taskActionComments.errors }\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"submitted && f.taskSubject.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n\t\t\t\t\t\t<i class=\"fa fa-exclamation-circle\"></i>\r\n\t\t\t\t\t\t<strong *ngIf=\"f.taskSubject.errors.required\">Please Enter Subject</strong>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"submitted && f.taskDays.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n\t\t\t\t\t\t<i class=\"fa fa-exclamation-circle\"></i>\r\n\t\t\t\t\t\t<strong *ngIf=\"f.taskDays.errors.required\">Please Enter Due Date Days</strong>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"submitted && f.taskActionComments.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n\t\t\t\t\t\t<i class=\"fa fa-exclamation-circle\"></i>\r\n\t\t\t\t\t\t<strong *ngIf=\"f.taskActionComments.errors.required\">Please Enter Comments</strong>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"mt-5\">\r\n\t\t\t\t\t\t<button class=\"btn btn-primary\">Save</button>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-min\" routerLink=\"/setup/communication-workflow\">Cancel</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"newsms\" class=\"newsms\" id=\"newsms\">\r\n\t\t\t\t<form class=\"md-float-material\" [formGroup]=\"workflowActionNewSmsForm\" (ngSubmit)=\"workflowActionNewSmsSubmit()\">\r\n\t\t\t\t\t<div class=\"cRow mt-2\">\r\n\t\t\t\t\t\t<div class=\"cCol6\">\r\n\t\t\t\t\t\t\t<label class=\"m-0\">Recipient Type:</label>\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"PhoneField\" checked value=\"Phone Field\" [checked]=\"PhoneField\" (change)=\"onPhoneChange($event.target.value)\"\r\n\t\t\t\t\t\t\t\t\t formControlName=\"messageRecpientType\" class=\"custom-control-input\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"PhoneField\">Phone Field</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"Individual\" value=\"Individual\" (change)=\"onPhoneChange($event.target.value)\" formControlName=\"messageRecpientType\"\r\n\t\t\t\t\t\t\t\t\t class=\"custom-control-input\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"Individual\">Individual #.</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"cRow mt-1\">\r\n\t\t\t\t\t\t<div class=\"cCol7\">\r\n\t\t\t\t\t\t\t<label>Message Text:</label>\r\n\t\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"messageText\" [ngClass]=\"{ 'is-invalid': submitted && a.messageText.errors }\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"rstype1\" class=\"desc\" *ngIf=\"PhoneField\">\r\n\t\t\t\t\t\t<div class=\"pt-1 mt-3\">\r\n\t\t\t\t\t\t\t<label>Select Phone #.</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"checkbox mb-1\">\r\n\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"checkbox1\" class=\"custom-control-input\" formControlName=\"isClientPhone\">\r\n\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"checkbox1\"> Client Phone</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"checkbox mb-1\">\r\n\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"checkbox2\" class=\"custom-control-input\" formControlName=\"coBorrowerPhone\" />\r\n\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"checkbox2\"> Coborower Phone</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"checkbox mb-1\">\r\n\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"checkbox3\" class=\"custom-control-input\" formControlName=\"spousePhone\" />\r\n\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"checkbox3\"> Spouse Phone</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"rstype2\" class=\"desc\" *ngIf=\"Individual\">\r\n\t\t\t\t\t\t<div class=\"cRow\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"cCol6\">\r\n\t\t\t\t\t\t\t\t<label>Phone #.</label>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control small cCol1\" value=\"+92 333 8574 983\" formControlName=\"individualPhones\" />\r\n\t\t\t\t\t\t\t\t\t<!-- <button class=\"btn pull-left nobg\"><i class=\"fa fa-plus\"></i></button> -->\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"submitted && a.messageText.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n\t\t\t\t\t\t<i class=\"fa fa-exclamation-circle\"></i>\r\n\t\t\t\t\t\t<strong *ngIf=\"a.messageText.errors.required\">Please Enter Message Text</strong>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"mt-5\">\r\n\t\t\t\t\t\t<button class=\"btn btn-primary\">Save</button>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-min\" routerLink=\"/setup/communication-workflow\">Cancel</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"EmailAlert\" class=\"newsms\" id=\"EmailAlert\">\r\n\t\t\t\t<form class=\"md-float-material\" [formGroup]=\"workflowActionEmailAlertForm\" (ngSubmit)=\"workflowActionEmailAlertSubmit()\">\r\n\t\t\t\t\t<div class=\"cRow mt-2\">\r\n\t\t\t\t\t\t<div class=\"cCol6\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"EmailGroup\" value=\"Email Field\" [checked]=\"EmailField\" (change)=\"onEmailChange($event.target.value)\"\r\n\t\t\t\t\t\t\t\t\t formControlName=\"emailRecepient\" class=\"custom-control-input\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"EmailGroup\">Email Group</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"IndividualEmail\" value=\"Individual\" (change)=\"onEmailChange($event.target.value)\" formControlName=\"emailRecepient\"\r\n\t\t\t\t\t\t\t\t\t class=\"custom-control-input\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"IndividualEmail\">Individual Email</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"cRow mt-1\">\r\n\t\t\t\t\t\t<div class=\"cCol1\">\r\n\t\t\t\t\t\t\t<label>Subject</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"emailSubject\" [ngClass]=\"{ 'is-invalid': submitted && b.emailSubject.errors }\"\r\n\t\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"cRow\">\r\n\t\t\t\t\t\t<div class=\"cCol7\">\r\n\t\t\t\t\t\t\t<label>Email Text:</label>\r\n\t\t\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"emailText\" [ngClass]=\"{ 'is-invalid': submitted && b.emailText.errors }\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"emtype1\" class=\"dess\" *ngIf=EmailField>\r\n\t\t\t\t\t\t<div class=\"pt-1 mt-3\">\r\n\t\t\t\t\t\t\t<label>Select Email Group:</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"checkbox mb-1\">\r\n\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"checkbox4\" name=\"coBorrower\" class=\"custom-control-input\" formControlName=\"isGroup1\">\r\n\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"checkbox4\"> Group 01</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"checkbox mb-1\">\r\n\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"checkbox5\" name=\"coBorrower\" class=\"custom-control-input\" formControlName=\"isGroup2\">\r\n\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"checkbox5\"> Group 02</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"checkbox mb-1\">\r\n\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"checkbox6\" name=\"coBorrower\" class=\"custom-control-input\" formControlName=\"isGroup3\">\r\n\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"checkbox6\">Group 03</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"emtype2\" class=\"dess\" *ngIf=\"EmailIndividual\">\r\n\t\t\t\t\t\t<div class=\"cRow\">\r\n\t\t\t\t\t\t\t<div class=\"cCol6\">\r\n\t\t\t\t\t\t\t\t<label>Send Email Address</label>\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control small cCol1\" value=\"\" formControlName=\"emailAddresses\">\r\n\t\t\t\t\t\t\t\t\t<!-- <button class=\"btn pull-left nobg\"><i class=\"fa fa-plus\"></i></button> -->\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"submitted && b.emailSubject.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n\t\t\t\t\t\t<i class=\"fa fa-exclamation-circle\"></i>\r\n\t\t\t\t\t\t<strong *ngIf=\"b.emailSubject.errors.required\">Please Enter Email Subject</strong>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"submitted && b.emailText.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n\t\t\t\t\t\t<i class=\"fa fa-exclamation-circle\"></i>\r\n\t\t\t\t\t\t<strong *ngIf=\"b.emailText.errors.required\">Please Enter Email Text</strong>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"mt-5\">\r\n\t\t\t\t\t\t<button class=\"btn btn-primary\">Save</button>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-min\" routerLink=\"/setup/communication-workflow\">Cancel</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\r\n\t\t\t<!--<div class=\"mt-5\">\r\n            <button class=\"btn btn-primary btn-min\">Save</button>\r\n            <button class=\"btn btn-default btn-min\">Cancel</button>\r\n\t\t\t\r\n            </div>-->\r\n\t\t</div>\r\n\t</div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/setup/communication-workflow/add-workflow-action/add-workflow-action.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/setup/communication-workflow/add-workflow-action/add-workflow-action.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AddWorkflowActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWorkflowActionComponent", function() { return AddWorkflowActionComponent; });
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




var AddWorkflowActionComponent = /** @class */ (function () {
    function AddWorkflowActionComponent(router, DataService, formBuilder) {
        this.router = router;
        this.DataService = DataService;
        this.formBuilder = formBuilder;
        //ruleCommSeq: any = sessionStorage.getItem("ruleCommSeq");
        this.submitted = false;
        this.newtast = true;
        this.newsms = false;
        this.EmailAlert = false;
        //PhoneField: boolean = true;
        this.PhoneField = true;
        this.Individual = false;
        this.EmailField = true;
        this.EmailIndividual = false;
        this.actionCommunication = "";
        this.statusListing = "";
    }
    AddWorkflowActionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actionCommunication = sessionStorage.getItem("actionCommunication");
        if (this.actionCommunication === "New SMS") {
            this.test = this.formBuilder.group({
                okvalue: ['newsms'],
            });
        }
        else if (this.actionCommunication === "Email Alert") {
            this.test = this.formBuilder.group({
                okvalue: ['EmailAlert'],
            });
        }
        else {
            this.test = this.formBuilder.group({
                okvalue: ['newtast'],
            });
        }
        this.workflowActionNewTaskForm = this.formBuilder.group({
            action: ['New Task'],
            formSaveKey: ['add'],
            workflowSeq: [sessionStorage.getItem("ruleCommSeq")],
            taskSubject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            taskDays: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            taskDueable: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            taskDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            taskAssignTo: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            taskStatus: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            taskActionComments: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.workflowActionNewSmsForm = this.formBuilder.group({
            action: ['New SMS'],
            formSaveKey: ['add'],
            workflowSeq: [sessionStorage.getItem("ruleCommSeq")],
            messageRecpientType: ['Phone Field', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            messageText: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            individualPhones: [''],
            isClientPhone: [''],
            coBorrowerPhone: [''],
            spousePhone: ['']
            //clntHlthInsrSeq:['']
        });
        this.workflowActionEmailAlertForm = this.formBuilder.group({
            action: ['Email Alert'],
            formSaveKey: ['add'],
            workflowSeq: [sessionStorage.getItem("ruleCommSeq")],
            emailRecepient: ['Email Field', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            emailSubject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            emailText: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            emailAddresses: [''],
            isGroup1: [''],
            isGroup2: [''],
            isGroup3: [''],
        });
        //STATUS LIST
        this.DataService.statusList().subscribe(function (result) {
            _this.statusListing = result;
            console.log(result);
        }, function (error) { return console.log('There was an error: ', error); });
        //edit
        var editCommunicationKey = sessionStorage.getItem("editCommunication");
        console.log(editCommunicationKey);
        console.log("=====");
        if (editCommunicationKey) {
            this.DataService.editCommunicatioinWorkflowRule(editCommunicationKey).subscribe(function (result) {
                console.log(result);
                if (result.action === "New Task") {
                    _this.newtast = true;
                    _this.newsms = false;
                    _this.EmailAlert = false;
                    _this.workflowActionNewTaskForm = _this.formBuilder.group({
                        action: ['New Task'],
                        formSaveKey: ['update'],
                        actionSeq: [result.actionSeq],
                        workflowSeq: [result.workflowSeq],
                        taskSubject: [result.taskSubject, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        taskDays: [result.taskDays, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        taskDueable: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        taskDate: [result.taskDate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        taskAssignTo: [result.taskAssignTo, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        taskStatus: [result.taskStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        taskActionComments: [''],
                    });
                }
                else if (result.action === "New SMS") {
                    _this.newtast = false;
                    _this.newsms = true;
                    _this.EmailAlert = false;
                    if (result.individualPhone === 'Phone Field') {
                        _this.PhoneField = true;
                        _this.Individual = false;
                    }
                    else if (result.individualPhone === 'Individual') {
                        _this.PhoneField = false;
                        _this.Individual = true;
                    }
                    else {
                        _this.PhoneField = true;
                        _this.Individual = false;
                    }
                    _this.workflowActionNewSmsForm = _this.formBuilder.group({
                        action: ['New SMS'],
                        formSaveKey: ['update'],
                        actionSeq: [result.actionSeq],
                        workflowSeq: [result.workflowSeq],
                        messageRecpientType: [result.messageRecpientType, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        messageText: [result.messageText, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        individualPhones: [result.individualPhone],
                        isClientPhone: [result.isClientPhone],
                        coBorrowerPhone: [result.coBorrowerPhone],
                        spousePhone: [result.spousePhone]
                        //clntHlthInsrSeq:[result.]
                    });
                }
                else if (result.action === "Email Alert") {
                    _this.newtast = false;
                    _this.newsms = false;
                    _this.EmailAlert = true;
                    if (result.emailRecepient === 'Email Field') {
                        _this.EmailField = true;
                        _this.EmailIndividual = false;
                    }
                    else if (result.emailRecepient === 'Individual') {
                        _this.EmailField = false;
                        _this.EmailIndividual = true;
                    }
                    else {
                        _this.EmailField = true;
                        _this.EmailIndividual = false;
                    }
                    _this.workflowActionEmailAlertForm = _this.formBuilder.group({
                        action: ['Email Alert'],
                        formSaveKey: ['update'],
                        actionSeq: [result.actionSeq],
                        workflowSeq: [result.workflowSeq],
                        emailRecepient: [result.emailRecepient, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        emailSubject: [result.emailSubject, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        emailText: [result.emailText, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        emailAddresses: [result.emailAddress],
                        isGroup1: [result.isGroup1],
                        isGroup2: [result.isGroup2],
                        isGroup3: [result.isGroup3],
                    });
                }
                else {
                    _this.newtast = true;
                    _this.newsms = false;
                    _this.EmailAlert = false;
                    _this.workflowActionNewTaskForm = _this.formBuilder.group({
                        action: ['New Task'],
                        formSaveKey: ['update'],
                        actionSeq: [result.actionSeq],
                        workflowSeq: [result.workflowSeq],
                        taskSubject: [result.taskSubject, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        taskDays: [result.taskDays, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        taskDueable: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        taskDate: [result.taskDate, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        taskAssignTo: [result.taskAssignTo, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        taskStatus: [result.taskStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                        taskActionComments: [''],
                    });
                }
            }, function (error) { return console.log('There was an error: ', error); });
        }
    };
    Object.defineProperty(AddWorkflowActionComponent.prototype, "f", {
        get: function () { return this.workflowActionNewTaskForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddWorkflowActionComponent.prototype.onWorkworkflowActionNewTaskSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.workflowActionNewTaskForm.invalid) {
            return;
        }
        var formValue = this.workflowActionNewTaskForm.value;
        console.log(formValue.formSaveKey);
        if (formValue.formSaveKey === "add") {
            this.DataService.addWorkflowAction(formValue).subscribe(function (data) {
                console.log(data);
                sessionStorage.setItem("ActionDueDtSeq", data.dueDtSeq);
                _this.router.navigate(["setup/communication-workflow"]);
            }, function (error) {
                console.log("err", error);
            });
        }
        else if (formValue.formSaveKey === "update") {
            this.DataService.updateCommunicatioinWorkflowAction(formValue).subscribe(function (data) {
                console.log(data);
                sessionStorage.setItem("ActionDueDtSeq", data.dueDtSeq);
                _this.router.navigate(["setup/communication-workflow"]);
            }, function (error) {
                console.log("err", error);
            });
        }
        return false;
    };
    Object.defineProperty(AddWorkflowActionComponent.prototype, "a", {
        get: function () { return this.workflowActionNewSmsForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddWorkflowActionComponent.prototype.workflowActionNewSmsSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.workflowActionNewSmsForm.invalid) {
            return;
        }
        var formValue = this.workflowActionNewSmsForm.value;
        console.log(formValue.formSaveKey);
        if (formValue.formSaveKey === "add") {
            this.DataService.addWorkflowAction(formValue).subscribe(function (data) {
                console.log(data);
                sessionStorage.setItem("ActionDueDtSeq", data.dueDtSeq);
                _this.router.navigate(["setup/communication-workflow"]);
            }, function (error) {
                console.log("err", error);
            });
        }
        else if (formValue.formSaveKey === "update") {
            this.DataService.updateCommunicatioinWorkflowAction(formValue).subscribe(function (data) {
                console.log(data);
                sessionStorage.setItem("ActionDueDtSeq", data.dueDtSeq);
                _this.router.navigate(["setup/communication-workflow"]);
            }, function (error) {
                console.log("err", error);
            });
        }
        return false;
    };
    Object.defineProperty(AddWorkflowActionComponent.prototype, "b", {
        get: function () { return this.workflowActionEmailAlertForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddWorkflowActionComponent.prototype.workflowActionEmailAlertSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.workflowActionEmailAlertForm.invalid) {
            return;
        }
        var formValue = this.workflowActionEmailAlertForm.value;
        console.log(formValue.formSaveKey);
        if (formValue.formSaveKey === "add") {
            this.DataService.addWorkflowAction(formValue).subscribe(function (data) {
                console.log(data);
                sessionStorage.setItem("ActionDueDtSeq", data.dueDtSeq);
                _this.router.navigate(["setup/communication-workflow"]);
            }, function (error) {
                console.log("err", error);
            });
        }
        else if (formValue.formSaveKey === "update") {
            this.DataService.updateCommunicatioinWorkflowAction(formValue).subscribe(function (data) {
                console.log(data);
                sessionStorage.setItem("ActionDueDtSeq", data.dueDtSeq);
                _this.router.navigate(["setup/communication-workflow"]);
            }, function (error) {
                console.log("err", error);
            });
        }
        return false;
    };
    //divs hide show
    AddWorkflowActionComponent.prototype.WorkflowActionChanged = function (value) {
        this.ngOnInit();
        if (value === "newtast") {
            this.newtast = true;
            this.newsms = false;
            this.EmailAlert = false;
        }
        else if (value === "newsms") {
            this.newtast = false;
            this.newsms = true;
            this.EmailAlert = false;
        }
        else if (value === "EmailAlert") {
            this.newtast = false;
            this.newsms = false;
            this.EmailAlert = true;
        }
    };
    AddWorkflowActionComponent.prototype.onPhoneChange = function (value) {
        if (value === 'Phone Field') {
            this.PhoneField = true;
            this.Individual = false;
        }
        else if (value === 'Individual') {
            this.PhoneField = false;
            this.Individual = true;
        }
    };
    AddWorkflowActionComponent.prototype.onEmailChange = function (value) {
        if (value === 'Email Field') {
            this.EmailField = true;
            this.EmailIndividual = false;
        }
        else if (value === 'Individual') {
            this.EmailField = false;
            this.EmailIndividual = true;
        }
    };
    AddWorkflowActionComponent.prototype.ontestSubmit = function () { };
    AddWorkflowActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-workflow-action',
            template: __webpack_require__(/*! ./add-workflow-action.component.html */ "./src/app/pages/setup/communication-workflow/add-workflow-action/add-workflow-action.component.html"),
            styles: [__webpack_require__(/*! ./add-workflow-action.component.css */ "./src/app/pages/setup/communication-workflow/add-workflow-action/add-workflow-action.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], AddWorkflowActionComponent);
    return AddWorkflowActionComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/communication-workflow/add-workflow-rule/add-workflow-rule.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/setup/communication-workflow/add-workflow-rule/add-workflow-rule.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/communication-workflow/add-workflow-rule/add-workflow-rule.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/setup/communication-workflow/add-workflow-rule/add-workflow-rule.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<nav aria-label=\"breadcrumb\">\r\n\t\t\t<ol class=\"breadcrumb breadcrumb-arrow\">\r\n\t\t\t\t <li class=\"active\"><a routerLink=\"/setup/communication-workflow/add-workflow-rule\">Rule</a></li>\r\n\t\t          <li><a routerLink=\"/setup/communication-workflow/add-workflow-action\">Workflow Action</a></li>\r\n\t\t\t</ol>\r\n\t\t</nav>\r\n\t\t<form class=\"md-float-material\" [formGroup]=\"workflowRuleForm\" (ngSubmit)=\"onWorkflowRuleSubmit()\" >\r\n\t\t<div class=\"content\">\r\n\t\t\t<h6 class=\"mt-3\">Workflow</h6>\r\n\t\t\t<div class=\"cRow\">\r\n\t\t\t\t<div class=\"cCol1\">\r\n\t\t\t\t\t<label>Function:</label>\r\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"functionKey\" [ngClass]=\"{ 'is-invalid': submitted && f.functionKey.errors }\">\r\n                        <option *ngFor=\"let function of functionListing\" value=\"{{function.codeKey}}\">{{function.codeValue}}</option>\r\n                    </select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"cCol1\">\r\n\t\t\t\t\t<label>Rule Name:</label>\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"ruleName\" [ngClass]=\"{ 'is-invalid': submitted && f.ruleName.errors }\" />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n            \r\n            <div class=\"cRow\">\r\n\t\t\t\t<div class=\"cCol6\">\r\n\t\t\t\t\t<label>Comments:</label>\r\n\t\t\t\t\t<textarea class=\"form-control\" formControlName=\"workflowComments\"></textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n            <div class=\"cRow\">\r\n\t\t\t\t<div class=\"cCol6\">\r\n\t\t\t\t\t<label>Rule Criteria:</label>\r\n          <button type=\"button\" class=\"btn pull-right btn-dots\" data-toggle=\"modal\" data-target=\"#cmmoncodes\"></button>\r\n\t\t\t\t\t <textarea class=\"form-control\" formControlName=\"ruleCriteria\" [ngClass]=\"{ 'is-invalid': submitted && f.ruleCriteria.errors }\"></textarea>\r\n                     <div class=\"modal fade\" id=\"cmmoncodes\" role=\"dialog\">\r\n                        <div class=\"modal-dialog mymodal big\"> \r\n                        <!-- Modal content-->\r\n                        <div class=\"modal-content\">\r\n                          <div class=\"modal-header\">\r\n                            <h5 class=\"modal-title\">Rule Condition</h5>\r\n                          </div>\r\n                          <div class=\"modal-body\">\r\n                            <div class=\"p10\">\r\n        \t\t\t<div class=\"row\">\r\n        \t<div class=\"col-md-3 mb-2\">\r\n            \t<div class=\"filter noborder\">\r\n                    <h6 class=\"border-title\">Data Items</h6>\r\n                \t<a href=\"#.\" class=\"acc_trigger inactive-header active-header\">Client</a>\r\n                    <div class=\"collapse acc_container\" style=\"display: block;\">\r\n                    \t <div class=\"listmenu\">\r\n                            <ul>\r\n                              \t<li>Gender</li>\r\n                                <li>Merital Status</li>\r\n                            </ul>\r\n                         </div>\r\n                    </div>\r\n                    <a href=\"#.\" class=\"acc_trigger inactive-header\">Credit Information</a>\r\n                    <div class=\"collapse acc_container\">\r\n                    \t <div class=\"listmenu\">\r\n                            <ul>\r\n                              \t<li>Approved Amount</li>\r\n                                <li>Requested Amount</li>\r\n                            </ul>\r\n                         </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-9 mt-3\">\r\n            \t<div class=\"cRow\">\r\n            \t<textarea formControlName=\"ruleCriteriafun\" class=\"form-control large\" placeholder=\"Days to complete < 8\" ></textarea>\r\n                </div>\r\n            </div>\r\n        </div>        \r\n                </div>\r\n                          </div>\r\n                          <div class=\"modal-footer text-center\">\r\n                            <button type=\"button\" class=\"btn btn-primary btn-min\" (click)=\"onCriteriaClick()\" data-dismiss=\"modal\">Ok</button>\r\n                            <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=\"submitted && f.functionKey.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n                  <i  class=\"fa fa-exclamation-circle\"></i>  \r\n                  <strong *ngIf=\"f.functionKey.errors.required\">Please Enter Function</strong>\r\n                </div>\r\n                <div *ngIf=\"submitted && f.ruleName.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n                  <i  class=\"fa fa-exclamation-circle\"></i>  \r\n                  <strong *ngIf=\"f.ruleName.errors\">Please Enter Rule Name</strong>\r\n                </div>\r\n                <div *ngIf=\"submitted && f.workflowComments.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n                  <i  class=\"fa fa-exclamation-circle\"></i>  \r\n                  <strong *ngIf=\"f.workflowComments.errors\">Please Enter Comments</strong>\r\n               </div>\r\n               <div *ngIf=\"submitted && f.ruleCriteria.errors\" class=\"alert alert-warning mt-2 mb-2\">\r\n                  <i  class=\"fa fa-exclamation-circle\"></i>  \r\n                  <strong *ngIf=\"f.ruleCriteria.errors\">Please Enter Rule Criteria</strong>\r\n                </div>\r\n\t\t\t<div class=\"mt-5\">\r\n\t\t\t<button  class=\"btn btn-primary\">Continue</button>\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-min\" routerLink=\"/setup/communication-workflow\">Cancel</button>\r\n            </div>\r\n\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/setup/communication-workflow/add-workflow-rule/add-workflow-rule.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/setup/communication-workflow/add-workflow-rule/add-workflow-rule.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AddWorkflowRuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWorkflowRuleComponent", function() { return AddWorkflowRuleComponent; });
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




var AddWorkflowRuleComponent = /** @class */ (function () {
    // editCommunicationKey: any = sessionStorage.getItem("editCommunication");
    // console.log(editCommunicationKey);
    function AddWorkflowRuleComponent(router, dataService, formBuilder) {
        this.router = router;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.updateValue = 'add';
        this.functionListing = '';
    }
    AddWorkflowRuleComponent.prototype.ngOnInit = function () {
        var _this = this;
        sessionStorage.setItem('actionCommunication', '');
        this.workflowRuleForm = this.formBuilder.group({
            formSaveKey: ['add'],
            functionKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ruleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            workflowComments: [''],
            ruleCriteria: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ruleCriteriafun: ['']
        });
        // function LIST
        this.dataService.functionList().subscribe(function (result) {
            _this.functionListing = result;
            console.log(result);
        }, function (error) { return console.log('There was an error: ', error); });
        // edit
        var editCommunicationKey = sessionStorage.getItem('editCommunication');
        console.log(editCommunicationKey);
        if (editCommunicationKey) {
            this.dataService.editCommunicatioinWorkflowRule(editCommunicationKey).subscribe(function (result) {
                sessionStorage.setItem('actionCommunication', result.action);
                console.log(result);
                _this.workflowRuleForm = _this.formBuilder.group({
                    formSaveKey: ['update'],
                    commWorkflowSeq: [result.workflowSeq],
                    functionKey: [result.functionKey, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    ruleName: [result.ruleName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    workflowComments: [result.workflowComments],
                    ruleCriteria: [result.ruleCriteria, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    ruleCriteriafun: [result.ruleCriteria]
                });
            }, function (error) { return console.log('There was an error: ', error); });
        }
    };
    Object.defineProperty(AddWorkflowRuleComponent.prototype, "f", {
        get: function () { return this.workflowRuleForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddWorkflowRuleComponent.prototype.onWorkflowRuleSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.workflowRuleForm.invalid) {
            return;
        }
        var formValue = this.workflowRuleForm.value;
        console.log(formValue.formSaveKey);
        if (formValue.formSaveKey === 'add') {
            this.dataService.addWorkflowRule(formValue).subscribe(function (data) {
                console.log(data);
                sessionStorage.setItem('ruleCommSeq', data.commSeq);
                _this.router.navigate(['/setup/communication-workflow/add-workflow-action']);
            }, function (error) {
                console.log('err', error);
            });
        }
        else if (formValue.formSaveKey === 'update') {
            this.dataService.updateCommunicatioinWorkflowRule(formValue).subscribe(function (data) {
                console.log(data);
                sessionStorage.setItem('editCommunication', data.commSeq);
                _this.router.navigate(['/setup/communication-workflow/add-workflow-action', data.commSeq]);
            }, function (error) {
                console.log('err', error);
            });
        }
        return false;
    };
    AddWorkflowRuleComponent.prototype.onCriteriaClick = function () {
        var formValue = this.workflowRuleForm.value;
        var editCommunicationKey = sessionStorage.getItem('editCommunication');
        if (editCommunicationKey) {
            this.updateValue = 'update';
        }
        // console.log(updateValue);
        this.workflowRuleForm = this.formBuilder.group({
            formSaveKey: this.updateValue,
            functionKey: [formValue['functionKey'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ruleName: [formValue['ruleName'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            workflowComments: [formValue['workflowComments']],
            ruleCriteria: [formValue['ruleCriteriafun'], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ruleCriteriafun: [''],
        });
        // console.log(formValue['ruleCriteriafun']);
    };
    AddWorkflowRuleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-workflow-rule',
            template: __webpack_require__(/*! ./add-workflow-rule.component.html */ "./src/app/pages/setup/communication-workflow/add-workflow-rule/add-workflow-rule.component.html"),
            styles: [__webpack_require__(/*! ./add-workflow-rule.component.css */ "./src/app/pages/setup/communication-workflow/add-workflow-rule/add-workflow-rule.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], AddWorkflowRuleComponent);
    return AddWorkflowRuleComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/communication-workflow/communication-workflow.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/setup/communication-workflow/communication-workflow.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/setup/communication-workflow/communication-workflow.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/setup/communication-workflow/communication-workflow.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<main class=\"main\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t<div class=\"content mb-md-5\">\r\n                <div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n                        <div class=\"mysearchbox\">\r\n\t\t\t\t\t\t\t<h6 class=\"d-inline-block searchshow\">Communication Workflow <i class=\"fa fa-search\"> </i></h6>\r\n                            <div class=\"mysearch\">\r\n                            \t<a href=\"#.\" class=\"remove-search\"><i class=\"fa fa-window-close\"> </i></a>\r\n                            \t <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search by Name...\" title=\"Type in a name\">\r\n                            </div>\r\n                            </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t <div class=\"col-sm-6 addBtn\">\r\n                         <a class=\"btn btn-primary btn-sm\" (click)=\"addItem()\"><i class=\"fa fa-plus\"></i> Add</a>\r\n        </div>\r\n        \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t<table class=\"table\" id=\"myTable\">\r\n\t\t\t\t\t<thead class=\"thead-light\">\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>Workflow  ID</th>\r\n\t\t\t\t\t\t\t<th>Rule name</th>\r\n                            <th>Object</th>\r\n                            <th>Criteria</th>\r\n                            <th>Rule Action</th>\r\n                            <th>Status</th>\r\n\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\t\r\n\t\t\t\t\t\t<tr *ngFor=\"let communication of pagedItems\">\r\n\t\t\t\t\t\t\t<td>{{communication.commWfSeq}}</td>\r\n\t\t\t\t\t\t\t<td>{{communication.commWfNm}}</td>\r\n                            <td>{{communication.commWfRulStr}}</td>\r\n                            <td></td>\r\n                            <td>{{communication.commWfNm}}</td>\r\n\t\t\t\t\t\t\t<td *ngIf=\"communication.commWfStsKey === null || communication.commWfStsKey === 200; else other_content\" (click)=\"StatusUpdate(communication.commWfSeq)\">Active</td>\r\n\t\t\t\t\t\t\t<ng-template #other_content><td  (click)=\"StatusUpdate(communication.commWfSeq)\">In Active</td></ng-template> \r\n\t\t\t\t\t\t\t<td>\r\n                            \t<a (click)=\"editCommunication(communication.commWfSeq)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                                <a (click)=\"deleteItem(communication.commWfSeq)\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n\t\t\t\t\t\t\t\t<!-- <a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a> -->\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n                       \r\n\t\t\t\t\t\t\r\n                        \r\n                        <!-- <tr>\r\n\t\t\t\t\t\t\t<td>4</td>\r\n\t\t\t\t\t\t\t<td>Description will here</td>\r\n                            <td>Client</td>\r\n                            <td>Create Date = Current Date</td>\r\n                             <td>SMS</td>\r\n                            <td class=\"colorRed\">Disable</td>\r\n\t\t\t\t\t\t\t<td>\r\n                            \t<a routerLink=\"/setup/communication-workflow/add-workflow-rule\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                                <a href=\"#\" class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"iconBtn\"><i class=\"fa fa-history\"></i></a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr> -->\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t\t<nav aria-label=\"Page navigation \">\r\n\t\t\t\t<ul class=\"pagination justify-content-center\" *ngIf=\"pager.pages && pager.pages.length\">\r\n\t\t\t\t\t<li class=\"page-item disabled\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n\t\t\t\t\t<a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</nav>\t\r\n\t\t\t\t\t\r\n                </div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/setup/communication-workflow/communication-workflow.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/setup/communication-workflow/communication-workflow.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CommunicationWorkflowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationWorkflowComponent", function() { return CommunicationWorkflowComponent; });
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





var CommunicationWorkflowComponent = /** @class */ (function () {
    function CommunicationWorkflowComponent(router, DataService, formBuilder) {
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
    CommunicationWorkflowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.DataService.getCommunicatioinWorkflow().subscribe(function (data) {
            console.log(data);
            _this.allItems = data;
            // initialize to page 1
            _this.setPage(1);
        }, function (error) {
            console.log("err");
            console.log("err", error);
        });
    };
    CommunicationWorkflowComponent.prototype.editCommunication = function (id) {
        sessionStorage.setItem("editCommunication", id);
        this.router.navigate(["/setup/communication-workflow/add-workflow-rule", id]);
    };
    //pagenation
    CommunicationWorkflowComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.DataService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    //delete
    CommunicationWorkflowComponent.prototype.deleteItem = function (passedId) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: "Are you sure you want to delete this Union Communication Workflow?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.DataService.delCommunicatioinWorkflow(passedId).subscribe(function (result) {
                    //this.pagedItems.splice(this.pagedItems.indexOf(passedId), 1);
                    //this.listing();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Deleted!', 'Communication Workflow has been deleted.', 'success');
                }, function (error) { return console.log('There was an error: ', error); });
            }
        });
    };
    //add
    CommunicationWorkflowComponent.prototype.addItem = function () {
        sessionStorage.setItem("editCommunication", "");
        this.router.navigate(["/setup/communication-workflow/add-workflow-rule"]);
    };
    CommunicationWorkflowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-communication-workflow',
            template: __webpack_require__(/*! ./communication-workflow.component.html */ "./src/app/pages/setup/communication-workflow/communication-workflow.component.html"),
            styles: [__webpack_require__(/*! ./communication-workflow.component.css */ "./src/app/pages/setup/communication-workflow/communication-workflow.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], CommunicationWorkflowComponent);
    return CommunicationWorkflowComponent;
}());



/***/ }),

/***/ "./src/app/pages/setup/communication-workflow/communicatoin-workflow-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/setup/communication-workflow/communicatoin-workflow-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: CommunicatoinWorkflowRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicatoinWorkflowRoutingModule", function() { return CommunicatoinWorkflowRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _communication_workflow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./communication-workflow.component */ "./src/app/pages/setup/communication-workflow/communication-workflow.component.ts");
/* harmony import */ var _add_workflow_rule_add_workflow_rule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-workflow-rule/add-workflow-rule.component */ "./src/app/pages/setup/communication-workflow/add-workflow-rule/add-workflow-rule.component.ts");
/* harmony import */ var _add_workflow_action_add_workflow_action_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-workflow-action/add-workflow-action.component */ "./src/app/pages/setup/communication-workflow/add-workflow-action/add-workflow-action.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _communication_workflow_component__WEBPACK_IMPORTED_MODULE_2__["CommunicationWorkflowComponent"] },
    { path: 'add-workflow-rule',
        component: _add_workflow_rule_add_workflow_rule_component__WEBPACK_IMPORTED_MODULE_3__["AddWorkflowRuleComponent"],
        data: {
            breadcrumbs: [
                { label: 'Rule', href: '/setup/communication-workflow/add-workflow-rule' }
            ]
        }
    },
    { path: 'add-workflow-rule/:id',
        component: _add_workflow_rule_add_workflow_rule_component__WEBPACK_IMPORTED_MODULE_3__["AddWorkflowRuleComponent"],
        data: {
            breadcrumbs: [
                { label: 'Rule', href: '/setup/communication-workflow/add-workflow-rule' }
            ]
        }
    },
    { path: 'add-workflow-action',
        component: _add_workflow_action_add_workflow_action_component__WEBPACK_IMPORTED_MODULE_4__["AddWorkflowActionComponent"],
        data: {
            breadcrumbs: [
                { label: 'Rule', href: '/setup/communication-workflow/add-workflow-rule' },
                { label: 'Workflow Action', href: '/setup/communication-workflow/add-workflow-action' }
            ]
        }
    },
    { path: 'add-workflow-action/:id', component: _add_workflow_action_add_workflow_action_component__WEBPACK_IMPORTED_MODULE_4__["AddWorkflowActionComponent"],
        data: {
            breadcrumbs: [
                { label: 'Rule', href: '/setup/communication-workflow/add-workflow-rule' },
                { label: 'Workflow Action', href: '/setup/communication-workflow/add-workflow-action' }
            ]
        } }
];
var CommunicatoinWorkflowRoutingModule = /** @class */ (function () {
    function CommunicatoinWorkflowRoutingModule() {
    }
    CommunicatoinWorkflowRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CommunicatoinWorkflowRoutingModule);
    return CommunicatoinWorkflowRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/setup/communication-workflow/communicatoin-workflow.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/setup/communication-workflow/communicatoin-workflow.module.ts ***!
  \*************************************************************************************/
/*! exports provided: CommunicatoinWorkflowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicatoinWorkflowModule", function() { return CommunicatoinWorkflowModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _communicatoin_workflow_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./communicatoin-workflow-routing.module */ "./src/app/pages/setup/communication-workflow/communicatoin-workflow-routing.module.ts");
/* harmony import */ var _communication_workflow_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./communication-workflow.component */ "./src/app/pages/setup/communication-workflow/communication-workflow.component.ts");
/* harmony import */ var _add_workflow_rule_add_workflow_rule_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-workflow-rule/add-workflow-rule.component */ "./src/app/pages/setup/communication-workflow/add-workflow-rule/add-workflow-rule.component.ts");
/* harmony import */ var _add_workflow_action_add_workflow_action_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-workflow-action/add-workflow-action.component */ "./src/app/pages/setup/communication-workflow/add-workflow-action/add-workflow-action.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CommunicatoinWorkflowModule = /** @class */ (function () {
    function CommunicatoinWorkflowModule() {
    }
    CommunicatoinWorkflowModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _communicatoin_workflow_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommunicatoinWorkflowRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ],
            declarations: [
                _communication_workflow_component__WEBPACK_IMPORTED_MODULE_3__["CommunicationWorkflowComponent"],
                _add_workflow_action_add_workflow_action_component__WEBPACK_IMPORTED_MODULE_5__["AddWorkflowActionComponent"],
                _add_workflow_rule_add_workflow_rule_component__WEBPACK_IMPORTED_MODULE_4__["AddWorkflowRuleComponent"]
            ]
        })
    ], CommunicatoinWorkflowModule);
    return CommunicatoinWorkflowModule;
}());



/***/ })

}]);
//# sourceMappingURL=communication-workflow-communicatoin-workflow-module.js.map