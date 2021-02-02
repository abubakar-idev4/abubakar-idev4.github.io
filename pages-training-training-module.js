(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-training-training-module"],{

/***/ "./src/app/pages/training/client-nonclient-training/client-nonclient-training.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/training/client-nonclient-training/client-nonclient-training.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ml {\r\n    margin-left: 10px;\r\n}\r\n\r\n.mr{\r\n    margin-right: 10px;\r\n}"

/***/ }),

/***/ "./src/app/pages/training/client-nonclient-training/client-nonclient-training.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/training/client-nonclient-training/client-nonclient-training.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Training\r\n                </h6>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 addBtn\">\r\n              <button class=\"btn btn-primary btn-sm\" type=\"button\" (click)=\"openTrianingModel()\"><i\r\n                  class=\"fa fa-plus\"></i>\r\n                Add</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>Training ID</th>\r\n                  <th>Training Type</th>\r\n                  <th>Training Dates</th>\r\n                  <th>Trainer Name</th>\r\n                  <th>Status</th>\r\n                  <th>Actions</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let train of allTrainings\">\r\n                  <td>{{train.trngSeq}}</td>\r\n                  <td>{{trainingTypeDescription(train.trngTypeSeq)}}</td>\r\n                  <!-- <td>{{train.trngTypeSeq}}</td> -->\r\n                  <td>{{train.trng_dates}}</td>\r\n                  <td>{{train.trnrNm}}</td>\r\n                  <td>{{gettingStatus(train.trngStsKey)}}</td>\r\n                  <td>\r\n                    <a data-toggle=\"tooltip\" title=\"Participents\" (click)=\"showParticipants(train)\" class=\"iconBtn\"><i\r\n                        class=\"fa fa-child\"></i></a>\r\n\r\n                    <a data-toggle=\"tooltip\" title=\"Attendance\" (click)=\"onClickAttendanceButton(train)\"\r\n                      class=\"iconBtn\"><i class=\"fa fa-users\"></i></a>\r\n\r\n                    <!--  Reports Menue   -->\r\n                    <span data-toggle=\"dropdown\">\r\n                      <a class=\"iconBtn\" data-toggle=\"tooltip\" title=\"Training Reports\"><i\r\n                          class=\"fa fa-file-text\"></i></a>\r\n                    </span>\r\n                    <div class=\"dropdown-menu\">\r\n                      <a class=\"dropdown-item\" (click)=\"openGESAreport(train)\">GESA Report</a>\r\n                      <a class=\"dropdown-item\" (click)=\"openAICGReport(train)\">AICG Report</a>\r\n                    </div>\r\n\r\n                    <a data-toggle=\"tooltip\" title=\"Edit\" (click)=\"onEditTraining(train)\" class=\"iconBtn\"><i\r\n                        class=\"fa fa-pencil\"></i></a>\r\n                    <a data-toggle=\"tooltip\" title=\"Delete\" (click)=\"onDeleteTraining(train)\" class=\"iconBtn delBtn\"><i\r\n                        class=\"fa fa-trash-o\"></i></a>\r\n\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!------  Training modal   -------------->\r\n\r\n\r\n      <div class=\"modal fade\" id=\"training\" role=\"dialog\">\r\n        <div class=\"modal-dialog bigger9 mymodal\">\r\n\r\n          <form (ngSubmit)=\"onSubmitTraining()\" [formGroup]=\"trainingForm\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Training</h5>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <div class=\"cRow\">\r\n\r\n                  <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"Trainer Name:\" formControlName=\"trnrNm\" readonly>\r\n                    </mat-form-field>\r\n\r\n                  </div>\r\n\r\n                  <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <mat-label>Training Types</mat-label>\r\n                      <mat-select formControlName=\"trngTypeSeq\" name=\"refCdDscr\"\r\n                        (selectionChange)=\"onSelectionTypes($event)\">\r\n                        <mat-option *ngFor=\"let training of activeTypes\" [value]=\"training.trngTypeSeq\">\r\n                          {{training.trngType}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                  <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"Status:\" formControlName=\"trngStsKey\">\r\n                        <mat-option [value]=\"0\">In Progress</mat-option>\r\n                        <mat-option [value]=\"1\">Completed</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"cCol2\">\r\n                    <ng-select [multiple]=\"false\" placeholder=\"Branch\" formControlName=\"brnchSeq\">\r\n                      <ng-option *ngFor=\"let branch of allBranches\" [value]=\"branch.brnchSeq\">\r\n                        {{branch.brnchNm}}\r\n                      </ng-option>\r\n                    </ng-select>\r\n                  </div>\r\n\r\n                  <div class=\"cCol3\" *ngFor=\"let comp of trainingForm.get('trng_dat').controls; let i=index\">\r\n                    <div formArrayName=\"trng_dat\">\r\n                      <div [formGroupName]=\"i\">\r\n\r\n                        <mat-form-field>\r\n                          <input matInput required formControlName=\"trng_dat\" placeholder=\"Training Date:\"\r\n                            [matDatepicker]=\"picker\" disabled readonly />\r\n                          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                          <mat-datepicker required #picker disabled=\"false\"></mat-datepicker>\r\n                        </mat-form-field>\r\n\r\n                        <a data-toggle=\"tooltip\" title=\"Add Date\" (click)=\"addNewDates()\"><i class=\"fa fa-plus\"></i></a>\r\n                        <a *ngIf=\"i > 0\" data-toggle=\"tooltip\" title=\"Delete Date\" (click)=\"deleteDates(i)\"\r\n                          class=\"iconBtn\"><img src=\"assets/images/crose-icon.png\" alt=\"\"></a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n\r\n\r\n\r\n                <!-- <div class=\"collapse d-block mt-3\">\r\n                  <label class=\"mr\" id=\"IsConsecutive\">IsConsecutive</label>\r\n                  <mat-radio-group formControlName=\"trngIsConFlag\" aria-label=\"IsConsecutive\">\r\n                    <mat-radio-button value=\"0\">Yes</mat-radio-button>\r\n                    <mat-radio-button class=\"ml\" value=\"1\">No</mat-radio-button>\r\n                  </mat-radio-group>\r\n                </div> -->\r\n\r\n                <!-- <div class=\"collapse d-block mt-3\">\r\n                  <label class=\"mr\" style=\"margin-right: 10px;\" id=\"Delay Attendance Request\">Delay Attendance\r\n                    Request</label>\r\n                  <mat-radio-group formControlName=\"trngDlyAtndReqFlag\" aria-label=\"Delay Attendance Request\">\r\n                    <mat-radio-button value=\"0\">Yes</mat-radio-button>\r\n                    <mat-radio-button class=\"ml\" value=\"1\">No</mat-radio-button>\r\n                  </mat-radio-group>\r\n                </div> -->\r\n\r\n\r\n                <div class=\"modal-footer text-center\">\r\n                  <button type=\"submit\" [disabled]=!trainingForm.valid class=\"btn btn-primary btn-min\">Ok</button>\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <!-----------    Attendance modal         -------------------->\r\n\r\n      <div class=\"modal fade\" id=\"attendanceModal\" role=\"dialog\">\r\n        <div class=\"modal-dialog bigger9 mymodal\">\r\n\r\n          <form (ngSubmit)=\"onSubmitAttendacneParticipants()\" [formGroup]=\"trainingAttendanceForm\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Attendance</h5>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <thead class=\"thead-light\">\r\n                      <tr>\r\n                        <th>Participent Name</th>\r\n                        <th *ngIf=\"isKSS && (isClient || isALL || isBoth)\">Staff</th>\r\n                        <th *ngFor=\"let item of trainingDates\">{{item}}</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <ng-container *ngFor=\"let part of allParticipants\">\r\n                        <tr>\r\n                          <td>{{part.prtcpntNm}}</td>\r\n                          <td *ngIf=\"isKSS && (isClient || isALL || isBoth)\" (click)=\"part.expanded = !part.expanded\">\r\n\r\n                            <a data-toggle=\"tooltip\" (click)=\"onStaffAttendance(part)\" title=\"Staff Attendacne\"\r\n                              class=\"iconBtn\"><i class=\"fa fa-users\"></i></a>\r\n\r\n                          </td>\r\n                          <td *ngFor=\"let item of part.trainingDates;let i = index\">\r\n                            <mat-checkbox color=\"primary\" [(ngModel)]=\"item.isChecked\"\r\n                              (change)=\"onSelectChangePart($event, part, item.dateEle, i)\" formControlName=\"atndncFlg\">\r\n                            </mat-checkbox>\r\n                          </td>\r\n                        </tr>\r\n\r\n                        <ng-container *ngIf=\"part.expanded\">\r\n                          <div class=\"table-responsive\">\r\n                            <table class=\"table\">\r\n                              <thead class=\"thead-light\">\r\n                                <tr>\r\n                                  <th>Staff Name</th>\r\n                                  <th></th>\r\n                                  <th *ngFor=\"let item of trainingDates\">{{item}}</th>\r\n                                </tr>\r\n                              </thead>\r\n                              <tbody>\r\n                                <tr *ngFor=\"let staf of allStaffForAttendance\">\r\n                                  <td>{{staf.stfNm}}</td>\r\n                                  <td></td>\r\n                                  <td *ngFor=\"let item of trainingDates;let k = index\">\r\n                                    <mat-checkbox [(ngModel)]=\"isCheckedStaff\" color=\"primary\"\r\n                                      (change)=\"onSelectChangeStaff($event, staf, item, k)\" formControlName=\"atndncFlg\">\r\n                                    </mat-checkbox>\r\n                                  </td>\r\n                                </tr>\r\n                              </tbody>\r\n                            </table>\r\n                          </div>\r\n                        </ng-container>\r\n\r\n                      </ng-container>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"modal-footer text-center\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">OK</button>\r\n                <!-- <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button> -->\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/training/client-nonclient-training/client-nonclient-training.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/training/client-nonclient-training/client-nonclient-training.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: MY_FORMATS, ClientNonclientTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientNonclientTrainingComponent", function() { return ClientNonclientTrainingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_training_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/training.service */ "./src/app/shared/services/training.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var moment = moment__WEBPACK_IMPORTED_MODULE_3__;
var MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
var ClientNonclientTrainingComponent = /** @class */ (function () {
    function ClientNonclientTrainingComponent(fb, toaster, router, trainingServivce, spinner) {
        this.fb = fb;
        this.toaster = toaster;
        this.router = router;
        this.trainingServivce = trainingServivce;
        this.spinner = spinner;
        this.totalTrainings = [];
        this.allTrainings = [];
        this.allTrainingTypes = [];
        this.dateRequired = false;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.activeTypes = [];
        this.staffPresent = false;
        this.expanded = false;
        this.isClient = false;
        this.isKSS = false;
        this.isKKK = false;
        this.isKEL = false;
        this.isKMWK = false;
        this.isALL = false;
        this.isAllNonClient = false;
        this.isNonClient = false;
        this.isBoth = false;
        this.isChecked = false;
        this.isCheckedStaff = false;
        this.data = {
            dateOfTraining: [
                {
                    trng_dat: ""
                }
            ]
        };
        this.exactTenure = false;
        this.isEdit = false;
    }
    ClientNonclientTrainingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allTypesTraining = [];
        this.allTrainings = [];
        this.trainingForm = this.fb.group({
            trngTypeSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            trnrNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            trngStsKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            brnchSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // trngDlyAtndReqFlag: ['', Validators.required],
            trng_dat: this.fb.array([]),
        });
        this.trainingAttendanceForm = this.fb.group({
            atndncFlg: [''],
            tengesAtndncSeq: [''],
            prtcpntStfSeq: [''],
            typFLg: [''],
            atndDt: ['']
        });
        var control = this.trainingForm.controls.trng_dat;
        control.push(this.fb.group({
            trng_dat: [],
        }));
        this.trainingServivce.getAllTypesTraining().subscribe(function (res) {
            _this.allTypesTraining = res;
            // for active types only
            _this.activeTypes = _this.allTypesTraining;
            for (var i = _this.activeTypes.length - 1; i >= 0; --i) {
                if (_this.activeTypes[i].trngStsKey == 2) {
                    _this.activeTypes.splice(i, 1);
                }
            }
        });
        this.trainingServivce.getAllBrnches().subscribe(function (res) {
            _this.allBranches = res;
        });
        this.trainingServivce.getAllTrainingTypes().subscribe(function (res) {
            _this.allTrainingTypes = res;
            console.log(_this.allTrainingTypes);
        });
        this.trainingServivce.getAllTrainings().subscribe(function (res) {
            _this.allTrainings = res;
            console.log(_this.allTrainings);
        });
    };
    ClientNonclientTrainingComponent.prototype.addNewDates = function (dat) {
        console.log(this.totalTrainingTenure);
        console.log(dat);
        var control = this.trainingForm.controls.trng_dat;
        if (control.length < this.totalTrainingTenure) {
            control.push(this.fb.group({
                trng_dat: [dat],
            }));
        }
        else {
            this.toaster.error('Cannot Exceed From Tenure', 'ERROR');
        }
        this.dateRequired = !this.dateRequired;
    };
    ClientNonclientTrainingComponent.prototype.deleteDates = function (index) {
        var control = this.trainingForm.controls.trng_dat;
        control.removeAt(index);
    };
    // getAttendanceFlag(trngDlyAtndReqFlag) {
    //   let str = '';
    //   if (trngDlyAtndReqFlag == 0) {
    //     str = "Yes"
    //   } else if (trngDlyAtndReqFlag == 1) {
    //     str = "No"
    //   }
    //   return str;
    // }
    ClientNonclientTrainingComponent.prototype.setDates = function () {
        var _this = this;
        var control = this.trainingForm.controls.trng_dat;
        this.data.dateOfTraining.forEach(function (x) {
            control.push(_this.fb.group({
                trng_dat: x.trng_dat
            }));
            console.log(x.trng_dat);
        });
    };
    ClientNonclientTrainingComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    ClientNonclientTrainingComponent.prototype.onlyLetters = function (event) {
        var pattern = /[a-zA-Z ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    ClientNonclientTrainingComponent.prototype.createFrom = function () {
        this.trainingForm = this.fb.group({
            trngTypeSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            trnrNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            trngStsKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            brnchSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // trngDlyAtndReqFlag: ['', Validators.required],
            trng_dat: this.fb.array([]),
        });
        var control = this.trainingForm.controls.trng_dat;
        control.push(this.fb.group({
            trng_dat: [],
        }));
    };
    ClientNonclientTrainingComponent.prototype.openTrianingModel = function () {
        this.isEdit = false;
        this.trainingForm.reset();
        this.createFrom();
        this.trainingForm.get('trnrNm').setValue(this.auth.emp_name);
        console.log(this.trainingForm.value);
        $('#training').modal('show');
    };
    ClientNonclientTrainingComponent.prototype.trainingTypeDescription = function (trngTypeSeq) {
        var str = '';
        for (var i = 0; i < this.allTypesTraining.length; i++) {
            if (trngTypeSeq == this.allTypesTraining[i].trngTypeSeq) {
                str = this.allTypesTraining[i].trngType;
            }
        }
        return str;
    };
    ClientNonclientTrainingComponent.prototype.gettingStatus = function (trngStsKey) {
        var str = '';
        if (trngStsKey == 0) {
            str = 'In Progress';
        }
        else if (trngStsKey == 1) {
            str = 'Completed';
        }
        return str;
    };
    ClientNonclientTrainingComponent.prototype.onEditTraining = function (train) {
        var _this = this;
        console.log(train);
        console.log(this.allTypesTraining);
        console.log(train.trngTypeSeq);
        this.allTypesTraining.forEach(function (ele) {
            if (ele.trngTypeSeq == train.trngTypeSeq) {
                console.log('if');
                console.log(ele);
                _this.totalTrainingTenure = ele.trngTnur;
            }
            ;
        });
        console.log(this.totalTrainingTenure);
        this.trainingForm = this.fb.group({
            trngTypeSeq: [train.trngTypeSeq],
            trnrNm: [train.trnrNm],
            trngStsKey: [train.trngStsKey],
            brnchSeq: [train.brnchSeq],
            // trngDlyAtndReqFlag: [train.trngDlyAtndReqFlag],
            trng_dat: this.fb.array([]),
            trngSeq: [train.trngSeq]
        });
        var res = train.trng_dates.split(",");
        res.forEach(function (ele) {
            _this.addNewDates(moment(ele, 'DD-MMM-YYYY'));
        });
        this.isEdit = true;
        console.log(train);
        $('#training').modal('show');
    };
    ClientNonclientTrainingComponent.prototype.onDeleteTraining = function (train) {
        var _this = this;
        this.trainingServivce.getallParticipants(train.trngSeq).subscribe(function (res) {
            console.log(res.length);
            if (res.length > 0) {
                _this.toaster.error("Training Contain Participants", "Cannot Delete");
                // return;
            }
            else {
                console.log(train.trngSeq);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                    title: 'Are you sure?',
                    text: 'Are you sure you want to delete this Training?',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then(function (result) {
                    if (result.value) {
                        _this.trainingServivce.deleteTraining(train.trngSeq).subscribe(function (ele) {
                            _this.allTrainings.splice(_this.allTrainings.indexOf(train), 1);
                            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()('Deleted!', 'Training Deleted Successfully.', 'success');
                        });
                    }
                });
            }
        });
    };
    ClientNonclientTrainingComponent.prototype.onSelectionTypes = function (w) {
        var _this = this;
        console.log(w);
        console.log(this.allTrainingTypes);
        this.allTypesTraining.forEach(function (ele) {
            if (ele.trngTypeSeq == w.value) {
                _this.totalTrainingTenure = ele.trngTnur;
                console.log(_this.totalTrainingTenure);
            }
        });
    };
    ClientNonclientTrainingComponent.prototype.onSubmitTraining = function () {
        // for (let z = 0; z < this.allTrainings; z++) {
        //   for (let i = 0; i < this.allTypesTraining.length; i++) {
        //     console.log(i)
        //     console.log(z)
        //     if (this.allTrainings[z].trngTypeSeq == this.allTypesTraining[i].trngTypeSeq) {
        //       console.log('i am in if')
        //       console.log(this.allTypesTraining[i].trngTypeSeq)
        //       this.toaster.error('Cannot Assign Multiple Training Against This Trianing', 'ERROR')
        //       return;
        //     }
        //   }
        // }
        var _this = this;
        // for (let i = 0; i < this.allTrainings.length; i++) {
        //   if (this.trainingForm.controls['trngTypeSeq'].value == this.allTrainings[i].trngTypeSeq) {
        //     console.log(this.trainingForm.controls['trngTypeSeq'].value);
        //     (<any>$('#training')).modal('hide');
        //     this.toaster.error('Cannot Assign Multiple Training Against This Trianing', 'ERROR')
        //     return;
        //   }
        // }
        if (!this.isEdit) {
            console.log(this.trainingForm.value);
            var a = this.trainingForm.value;
            console.log(this.getFormatedDate(this.trainingForm.value.trng_dat));
            this.spinner.show();
            a.trng_dat = this.getFormatedDate(this.trainingForm.value.trng_dat);
            a.trngdscr = "desription";
            a.trngId = "id";
            this.trainingServivce.addTrainings(this.trainingForm.value).subscribe(function (res) {
                _this.trainingServivce.getAllTrainings().subscribe(function (res) {
                    _this.allTrainings = res;
                });
                console.log(res);
                $('#training').modal('hide');
                _this.spinner.hide();
            }, function (error) {
                _this.spinner.hide();
                if (error.status == 500) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
                else if (error) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
            });
        }
        else {
            console.log(this.trainingForm.value);
            var a = this.trainingForm.value;
            console.log(this.getFormatedDate(this.trainingForm.value.trng_dat));
            this.spinner.show();
            a.trng_dat = this.getFormatedDate(this.trainingForm.value.trng_dat);
            a.trngdscr = "desription";
            a.trngId = "id";
            console.log(a);
            this.trainingServivce.editTrainings(a).subscribe(function (res) {
                _this.trainingServivce.getAllTrainings().subscribe(function (res) {
                    _this.allTrainings = res;
                });
                console.log(res);
                $('#training').modal('hide');
                _this.spinner.hide();
            }, function (error) {
                _this.spinner.hide();
                if (error.status == 500) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
                else if (error) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
            });
        }
    };
    ClientNonclientTrainingComponent.prototype.getFormatedDate = function (arr) {
        var str = [];
        for (var i = 0; i < arr.length; i++) {
            console.log(moment.parseZone(arr[i].trng_dat.format('YYYY-MM-DD'))['_i']);
            var d = moment.parseZone(arr[i].trng_dat.format('YYYY-MM-DD'))['_i'];
            // str.push(moment.parseZone(arr[i].trng_dat.format('DD-MM-YYYY'))['_i']);
            str.push(d);
        }
        return str;
    };
    ClientNonclientTrainingComponent.prototype.showParticipants = function (t) {
        console.log(t);
        sessionStorage.setItem("trng", JSON.stringify(t));
        this.router.navigate(['/training/participants']);
    };
    ClientNonclientTrainingComponent.prototype.openGESAreport = function (train) {
        var _this = this;
        this.spinner.show();
        console.log(train.trngSeq);
        this.trainingServivce.printGESAReport(train.trngSeq).subscribe(function (response) {
            _this.spinner.hide();
            var binaryData = [];
            binaryData.push(response);
            var fileURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
            window.open(fileURL, '_blank');
        }, function (error) {
            _this.spinner.hide();
            if (error.status == 500) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
            else if (error) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
        });
    };
    ClientNonclientTrainingComponent.prototype.openAICGReport = function (train) {
        var _this = this;
        this.spinner.show();
        console.log(train.trngSeq);
        this.trainingServivce.printAICGReport(train.trngSeq).subscribe(function (response) {
            _this.spinner.hide();
            var binaryData = [];
            binaryData.push(response);
            var fileURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
            window.open(fileURL, '_blank');
        }, function (error) {
            _this.spinner.hide();
            if (error.status == 500) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
            else if (error) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
        });
    };
    ClientNonclientTrainingComponent.prototype.onClickAttendanceButton = function (train) {
        var _this = this;
        this.trainingSequence = train.trngSeq;
        this.isClient = false;
        this.isKSS = false;
        this.isKKK = false;
        this.isKEL = false;
        this.isKMWK = false;
        this.isALL = false;
        this.isAllNonClient = false;
        this.isNonClient = false;
        this.isBoth = false;
        this.allTypesTraining.forEach(function (ele) {
            if (train.trngTypeSeq == ele.trngTypeSeq) {
                if (ele.trngPrtcpntTypSeq == 0) {
                    _this.isClient = true;
                }
                else if (ele.trngPrtcpntTypSeq == 1) {
                    _this.isNonClient = true;
                }
                else if (ele.trngPrtcpntTypSeq == 2) {
                    _this.isBoth = true;
                }
            }
        });
        this.allTypesTraining.forEach(function (tr) {
            if (train.trngTypeSeq == tr.trngTypeSeq) {
                if (tr.trngClntCtgrtSeq == 1) {
                    _this.isKSS = true;
                }
                else if (tr.trngClntCtgrtSeq == 0) {
                    _this.isKKK = true;
                }
                else if (tr.trngClntCtgrtSeq == 2) {
                    _this.isKEL = true;
                }
                else if (tr.trngClntCtgrtSeq == 3) {
                    _this.isKMWK = true;
                }
                else if (tr.trngClntCtgrtSeq == 4) {
                    _this.isALL = true;
                }
                else if (tr.trngClntCtgrtSeq == 5) {
                    _this.isAllNonClient = true;
                }
            }
        });
        this.expanded = true;
        // Training Dates
        var str = train.trng_dates;
        this.trainingDates = str.split(',');
        console.log(this.trainingDates);
        var trainingDatesObjArray = [];
        this.trainingDates.forEach(function (dateEle) {
            trainingDatesObjArray.push({ date: dateEle, isChecked: false });
        });
        console.log(trainingDatesObjArray);
        // Attendacne Data
        this.trainingServivce.getallParticipantsWithDates(train.trngSeq).subscribe(function (res) {
            _this.trainingServivce.getAllTrainingAttendance(train.trngSeq).subscribe(function (res2) {
                _this.allAttendacneForParticipants = res2;
                _this.allParticipants = res;
                console.log(_this.allAttendacneForParticipants);
                console.log(_this.allParticipants);
                _this.allParticipants.forEach(function (participant) {
                    participant.trainingDates = trainingDatesObjArray;
                    _this.allAttendacneForParticipants.forEach(function (attendance) {
                        if (attendance.prtcpntStfSeq == participant.prtcpntSeq) {
                            participant.trainingDates.forEach(function (dateEle) {
                                var dateString = attendance.atndDt;
                                var dateObj = new Date(dateString);
                                var momentObj = moment(dateObj);
                                var momentString = momentObj.format('DD-MM-YY');
                                var dateString2 = dateEle.dateEle;
                                var momentObj2 = moment(dateString2);
                                var momentString2 = momentObj2.format('DD-MM-YY');
                                console.log(momentString + "  === " + momentString2);
                                if (momentString == momentString2) {
                                    console.log('i am insde dates');
                                    console.log(attendance);
                                    var str_1;
                                    if (attendance.atndncFlg == 1) {
                                        str_1 = "present";
                                        console.log('i am ' + ' ' + str_1);
                                        dateEle.isChecked = true;
                                    }
                                    else {
                                        str_1 = "Absent";
                                        console.log('i am ' + ' ' + str_1);
                                        dateEle.isChecked = false;
                                    }
                                    console.log(dateEle);
                                }
                            });
                        }
                    });
                    console.log(_this.allParticipants);
                });
                if (_this.allParticipants.length > 0) {
                    $('#attendanceModal').modal('show');
                }
                else {
                    _this.toaster.info("Training Does Not Have Any Participants", "Information");
                }
            }, function (error) {
                _this.spinner.hide();
                if (error.status == 500) {
                    _this.toaster.error("Something Went Wrong In Getting All Participants", "Error");
                }
                else if (error) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
            });
        }, function (error) {
            _this.spinner.hide();
            if (error.status == 500) {
                _this.toaster.error("Something Went Wrong In Getting Attendace List", "Error");
            }
            else if (error) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
        });
    };
    ClientNonclientTrainingComponent.prototype.onStaffAttendance = function (part) {
        var _this = this;
        this.trainingServivce.getAllStaff(part.prtcpntSeq).subscribe(function (res) {
            _this.allStaffForAttendance = res;
            _this.allAttendacneForParticipants.forEach(function (attendance) {
                _this.allStaffForAttendance.forEach(function (participantStaf) {
                    _this.trainingDates.forEach(function (dateEle) {
                        var dateString = attendance.atndDt;
                        var dateObj = new Date(dateString);
                        var momentObj = moment(dateObj);
                        var momentString = momentObj.format('DD-MM-YY');
                        var dateString2 = dateEle;
                        var momentObj2 = moment(dateString2);
                        var momentString2 = momentObj2.format('DD-MM-YY');
                        if (attendance.prtcpntStfSeq == participantStaf.prtcpntSeq && momentString == momentString2 && attendance.atndncFlg == 1) {
                            console.log('Was Present');
                            _this.isCheckedStaff = true;
                        }
                        else {
                            console.log('Was Abscent');
                            _this.isCheckedStaff = false;
                        }
                    });
                });
            });
        });
    };
    ClientNonclientTrainingComponent.prototype.onSelectChangePart = function (event, part, item, i) {
        var _this = this;
        this.isChecked = false;
        var str;
        if (event.checked == true) {
            str = 1;
        }
        else if (event.checked == false) {
            str = 0;
        }
        var obj = this.trainingAttendanceForm.value;
        obj.atndncFlg = str;
        obj.tengesAtndncSeq = "";
        obj.prtcpntStfSeq = part.prtcpntSeq;
        obj.typFLg = 1;
        var d = moment(item);
        obj.atndDt = moment.parseZone(d.format('YYYY-MM-DD'))['_i'];
        this.spinner.show();
        this.trainingServivce.addTrainingForPartAndStaff(obj).subscribe(function (res) {
            _this.spinner.hide();
            _this.toaster.success('Attendance Saved', 'Success');
            console.log(res);
        }, function (error) {
            _this.isChecked = false;
            _this.spinner.hide();
            if (error.status == 500) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
            else if (error.status == 400) {
                console.log(error.error.title);
                _this.toaster.error(error.error.title, "Error");
            }
        });
    };
    ClientNonclientTrainingComponent.prototype.onSelectChangeStaff = function (event, staf, item, k) {
        var _this = this;
        this.isCheckedStaff = false;
        var str;
        if (event.checked == true) {
            str = 1;
        }
        else if (event.checked == false) {
            str = 0;
        }
        var obj = this.trainingAttendanceForm.value;
        obj.atndncFlg = str;
        obj.tengesAtndncSeq = "";
        obj.prtcpntStfSeq = staf.prtcpntStfSeq;
        obj.typFLg = 2;
        var d = moment(item);
        obj.atndDt = moment.parseZone(d.format('YYYY-MM-DD'))['_i'];
        this.spinner.show();
        this.trainingServivce.addTrainingForPartAndStaff(obj).subscribe(function (res) {
            _this.spinner.hide();
            _this.toaster.success('Saved', 'Success');
            console.log(res);
        }, function (error) {
            _this.isCheckedStaff = false;
            _this.spinner.hide();
            if (error.status == 500) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
            else if (error.status == 400) {
                console.log(error.error.title);
                _this.toaster.error(error.error.title, "Error");
            }
        });
    };
    ClientNonclientTrainingComponent.prototype.onSubmitAttendacneParticipants = function () {
        console.log(this.trainingAttendanceForm.value);
    };
    ClientNonclientTrainingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-nonclient-training',
            template: __webpack_require__(/*! ./client-nonclient-training.component.html */ "./src/app/pages/training/client-nonclient-training/client-nonclient-training.component.html"),
            styles: [__webpack_require__(/*! ./client-nonclient-training.component.css */ "./src/app/pages/training/client-nonclient-training/client-nonclient-training.component.css")],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_shared_services_training_service__WEBPACK_IMPORTED_MODULE_7__["TrainingService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]])
    ], ClientNonclientTrainingComponent);
    return ClientNonclientTrainingComponent;
}());



/***/ }),

/***/ "./src/app/pages/training/left-side-bar/left-side-bar.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/pages/training/left-side-bar/left-side-bar.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/training/left-side-bar/left-side-bar.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/training/left-side-bar/left-side-bar.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"leftSideBar\">\r\n  <h6><i class=\"fa fa-bar-chart\"></i> Training </h6>\r\n  <div class=\"leftmenu\">\r\n    <ul>\r\n      <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/training/training-types']\">Training Types</a></li>\r\n      <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/training/client-training']\">Training</a></li>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/training/left-side-bar/left-side-bar.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/training/left-side-bar/left-side-bar.component.ts ***!
  \*************************************************************************/
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
            template: __webpack_require__(/*! ./left-side-bar.component.html */ "./src/app/pages/training/left-side-bar/left-side-bar.component.html"),
            styles: [__webpack_require__(/*! ./left-side-bar.component.css */ "./src/app/pages/training/left-side-bar/left-side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftSideBarComponent);
    return LeftSideBarComponent;
}());



/***/ }),

/***/ "./src/app/pages/training/participants/participants.component.css":
/*!************************************************************************!*\
  !*** ./src/app/pages/training/participants/participants.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n    margin-top: 10px;\r\n}"

/***/ }),

/***/ "./src/app/pages/training/participants/participants.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/training/participants/participants.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"content\">\r\n      <div class=\"row mt-3\">\r\n        <div class=\"col-sm-6\">\r\n          <h6 class=\"\">Participants</h6>\r\n        </div>\r\n        <div class=\"col-sm-6 addBtn\">\r\n          <button *ngIf=\"!isNonClient\" class=\"btn btn-primary btn-sm\" (click)=\"onCheckCnicButton()\"> Validate CNIC & Add\r\n            Participants</button>\r\n          <button *ngIf=\"isNonClient\" class=\"btn btn-primary btn-sm\" (click)=\"onAddButton()\"> Add Non\r\n            Client Participants</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-responsive mb-md-3\">\r\n        <table class=\"table\">\r\n          <thead class=\"thead-light\">\r\n            <tr>\r\n              <th>Participant ID</th>\r\n              <th>Participant CNIC</th>\r\n              <th>Participant Name</th>\r\n              <th>Loan Cycle</th>\r\n              <th>Disbursement Date</th>\r\n              <th>Gender</th>\r\n              <!-- <th>Relation</th> -->\r\n              <th>Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let part of allParticipants\">\r\n              <td>{{part.prtcpntSeq}}</td>\r\n              <td>{{part.prtcpntCnic}}</td>\r\n              <td>{{part.prtcpntNm}}</td>\r\n              <td>{{loanCycleForNonClients(part.loanCyclNum)}}</td>\r\n              <td>{{disbursmentDateForNonClients(part.dsbmtDt) | date}}</td>\r\n              <td>{{getGender(part.prtcpntGndrKey)}}</td>\r\n              <!-- <td>{{part.prtcpntTRelKey}}</td> -->\r\n              <td>\r\n                <a *ngIf=\"part.dsbmtDt == null || part.dsbmtDt == undefined\" data-toggle=\"tooltip\" title=\"Edit\"\r\n                  (click)=\"onEditParticipants(part)\" class=\"iconBtn\"><i class=\"fa fa-pencil\"></i></a>\r\n                <a *ngIf=\"isKSS && (isClient || isALL || isBoth)\" data-toggle=\"tooltip\" title=\"Add Staff\"\r\n                  (click)=\"onAddStaff(part)\" class=\"iconBtn\"><i class=\"fa fa-address-card-o\"></i></a>\r\n                <a data-toggle=\"tooltip\" title=\"Delete\" (click)=\"onDeleteParticipants(part)\" class=\"iconBtn delBtn\"><i\r\n                    class=\"fa fa-trash-o\"></i></a>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <a class=\"btn btn-primary\" [routerLink]=\"['/training/client-training']\">Back To Training</a>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <!----------------           ADD PARTICIPANTS               ------------------------------>\r\n\r\n  <div class=\"modal fade\" id=\"addParticipants\" role=\"dialog\">\r\n    <div class=\"modal-dialog big mymodal\">\r\n\r\n      <form (ngSubmit)=\"onSubmitClientTraining()\" [formGroup]=\"addParticipantsForm\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\">Add Participants</h5>\r\n          </div>\r\n          <div class=\"modal-body\" style=\"overflow-y:unset;\">\r\n            <div class=\"cRow\">\r\n\r\n\r\n              <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" (keypress)=\"onlyNumbers($event)\" matInput placeholder=\"Participant CNIC:\"\r\n                    formControlName=\"prtcpntCnicNum\" maxlength=\"13\" minlength=\"13\" id=\"cnincNum\">\r\n                  <mat-hint align=\"end\">NOT LESS THAN 13 NUMBERS</mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" matInput placeholder=\"Participant Name:\" formControlName=\"prtcpntNm\">\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <!-- <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" (keypress)=\"onlyLetters($event)\" matInput placeholder=\"Participant Gender:\"\r\n                    formControlName=\"prtcpntGndrKey\" readonly>\r\n                </mat-form-field>\r\n              </div> -->\r\n\r\n\r\n              <div class=\"cCol2 \">\r\n                <mat-form-field>\r\n                  <mat-select [disabled]=\"isEdit\" formControlName=\"prtcpntGndrKey\" placeholder=\"Gender\"\r\n                    pattern=\"^[1-9]\\d*$\">\r\n                    <mat-option *ngFor=\"let edu of gender\" [value]=\"edu.codeKey\">\r\n                      {{edu.codeValue}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <!-- <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Participant Gender:\" formControlName=\"prtcpntGndrKey\">\r\n                    <mat-option [value]=\"0\">Male</mat-option>\r\n                    <mat-option [value]=\"1\">Female</mat-option>\r\n                    <mat-option [value]=\"2\">Others</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div> -->\r\n\r\n              <!-- <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Participant Relation:\" formControlName=\"prtcpnrRelKey\">\r\n                    <mat-option [value]=\"0\">Relation With Client</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div> -->\r\n\r\n              <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" (keypress)=\"onlyLetters($event)\" matInput placeholder=\"Loan Cycle:\"\r\n                    formControlName=\"loanCyclNum\">\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" (keypress)=\"onlyLetters($event)\" matInput placeholder=\"Disbursement Date:\"\r\n                    formControlName=\"dsbmtDt\">\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <!-- <div class=\"cCol2\">\r\n\r\n                <mat-form-field>\r\n                  <input matInput required formControlName=\"dsbmtDt\" placeholder=\"Disbursement Date:\"\r\n                    [matDatepicker]=\"picker1\" disabled readonly />\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                  <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                </mat-form-field>\r\n\r\n              </div> -->\r\n\r\n              <!-- <div class=\"cCol2\" *ngIf=\"isKSS\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" matInput placeholder=\"School Name:\" formControlName=\"schNm\">\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"cCol2\" *ngIf=\"isKSS\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" matInput placeholder=\"Teacher Name:\" formControlName=\"tchrNm\">\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"cCol2\" *ngIf=\"isKSS\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" (keypress)=\"onlyNumbers($event)\" matInput placeholder=\"Total Students:\"\r\n                    formControlName=\"totStdnt\">\r\n                </mat-form-field>\r\n              </div> -->\r\n\r\n\r\n              <!-- <div class=\"cCol2\">\r\n                <ng-select [items]=\"allTrainingTypes\" bindValue=\"refCdDscr\" name=\"refCdDscr\" bindLabel=\"refCdDscr\"\r\n                  placeholder=\"Training Types\" formControlName=\"trngTypStr\">\r\n                </ng-select>\r\n              </div> -->\r\n\r\n              <!-- <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <mat-label>Training Types</mat-label>\r\n                  <mat-select formControlName=\"trngTypStr\" name=\"refCdDscr\">\r\n                    <mat-option *ngFor=\"let training of allTrainingTypes\" [value]=\"training.refCdDscr\">\r\n                      {{training.refCdDscr}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div> -->\r\n              <!-- <div class=\"cCol2\">\r\n\r\n                <mat-form-field>\r\n                  <input matInput formControlName=\"training_date\" [owlDateTimeTrigger]=\"dt\" [owlDateTime]=\"dt\"\r\n                    [selectMode]=\"'range'\" placeholder=\"Select Range\">\r\n                  <owl-date-time [pickerType]=\"'calendar'\" #dt></owl-date-time>\r\n                </mat-form-field>\r\n\r\n              </div> -->\r\n\r\n              <!-- <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" matInput (keypress)=\"onlyLetters($event)\" placeholder=\"Trainer Name:\"\r\n                    formControlName=\"trainer_name\">\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Training Status:\" formControlName=\"training_status\">\r\n                    <mat-option [value]=\"1\">Active</mat-option>\r\n                    <mat-option [value]=\"2\">Inactive</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div> -->\r\n\r\n\r\n              <!-- <div class=\"cCol2\" *ngFor=\"let comp of addParticipantsForm.get('training_date').controls; let i=index\">\r\n                <div formArrayName=\"training_date\">\r\n                  <div [formGroupName]=\"i\">\r\n\r\n                    <mat-form-field>\r\n                      <input matInput required formControlName=\"training_date\" placeholder=\"Training Date:\"\r\n                        [matDatepicker]=\"picker\" disabled readonly />\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                      <mat-datepicker required #picker disabled=\"false\"></mat-datepicker>\r\n                    </mat-form-field>\r\n\r\n                    <a data-toggle=\"tooltip\" title=\"Add Date\" (click)=\"addNewDates()\"><i class=\"fa fa-plus\"></i></a>\r\n                    <a *ngIf=\"i > 0\" data-toggle=\"tooltip\" title=\"Delete Date\" (click)=\"deleteDates(i)\"\r\n                      class=\"iconBtn\"><img src=\"assets/images/crose-icon.png\" alt=\"\"></a>\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n\r\n\r\n              <!-- <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" matInput (keypress)=\"onlyLetters($event)\" placeholder=\"Training Status:\"\r\n                    formControlName=\"training_status\">\r\n                </mat-form-field>\r\n              </div> -->\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer text-center\">\r\n            <button type=\"submit\" [disabled]=!addParticipantsForm.valid class=\"btn btn-primary btn-min\">Ok</button>\r\n            <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!-----------------         ADD NON CLIENT PARTICIPENTS                     ------------------------->\r\n\r\n  <div class=\"modal fade\" id=\"addNonClientParticipants\" role=\"dialog\">\r\n    <div class=\"modal-dialog big mymodal\">\r\n\r\n      <form (ngSubmit)=\"onSubmitNonClientParticipants()\" [formGroup]=\"addNonClientParticipantsForm\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\">Add Non Client Participants</h5>\r\n          </div>\r\n          <div class=\"modal-body\" style=\"overflow-y:unset;\">\r\n            <div class=\"cRow\">\r\n\r\n\r\n              <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" (keypress)=\"onlyNumbers($event)\" matInput placeholder=\"Participant CNIC:\"\r\n                    formControlName=\"prtcpntCnicNum\" maxlength=\"13\" minlength=\"13\" id=\"cnincNum\">\r\n                  <mat-hint align=\"end\">NOT LESS THAN 13 NUMBERS</mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" matInput placeholder=\"Participant Name:\" formControlName=\"prtcpntNm\">\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"cCol2 \">\r\n                <mat-form-field>\r\n                  <mat-select formControlName=\"prtcpntGndrKey\" placeholder=\"Gender\" pattern=\"^[1-9]\\d*$\">\r\n                    <mat-option *ngFor=\"let edu of gender\" [value]=\"edu.codeKey\">\r\n                      {{edu.codeValue}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Participant Relation:\" formControlName=\"prtcpnrRelKey\" pattern=\"^[1-9]\\d*$\">\r\n                    <mat-option *ngFor=\"let rel of relationshipClient\" [value]=\"rel.codeRefCd\">{{rel.codeValue}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <!-- <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" matInput placeholder=\"School Name:\" formControlName=\"schNm\">\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" matInput placeholder=\"Teacher Name:\" formControlName=\"tchrNm\">\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" (keypress)=\"onlyNumbers($event)\" matInput placeholder=\"Total Students:\"\r\n                    formControlName=\"totStdnt\">\r\n                </mat-form-field>\r\n              </div> -->\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer text-center\">\r\n            <button type=\"submit\" [disabled]=!addNonClientParticipantsForm.valid\r\n              class=\"btn btn-primary btn-min\">Ok</button>\r\n            <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-----------------         ADD KSS PARTICIPENTS                     ------------------------->\r\n\r\n  <div class=\"modal fade\" id=\"addKssParticipants\" role=\"dialog\">\r\n    <div class=\"modal-dialog big mymodal\">\r\n\r\n      <form (ngSubmit)=\"onSubmitKSSClientsParticipants()\" [formGroup]=\"addKssClientsParticipantsForm\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\">Add KSS Client Participants</h5>\r\n          </div>\r\n          <div class=\"modal-body\" style=\"overflow-y:unset;\">\r\n            <div class=\"cRow\">\r\n\r\n\r\n              <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" (keypress)=\"onlyNumbers($event)\" matInput placeholder=\"Participant CNIC:\"\r\n                    formControlName=\"prtcpntCnicNum\" maxlength=\"13\" minlength=\"13\" id=\"cnincNum\">\r\n                  <mat-hint align=\"end\">NOT LESS THAN 13 NUMBERS</mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" matInput placeholder=\"Participant Name:\" formControlName=\"prtcpntNm\">\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"cCol2 \">\r\n                <mat-form-field>\r\n                  <mat-select formControlName=\"prtcpntGndrKey\" placeholder=\"Gender\" pattern=\"^[1-9]\\d*$\">\r\n                    <mat-option *ngFor=\"let edu of gender\" [value]=\"edu.codeKey\">\r\n                      {{edu.codeValue}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" matInput placeholder=\"Disbursement Date:\" formControlName=\"dsbmtDt\">\r\n                </mat-form-field>\r\n              </div>\r\n              <!-- <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <input matInput [matDatepicker]=\"picker\" placeholder=\"Disbursement Date:\" formControlName=\"dsbmtDt\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #picker></mat-datepicker>\r\n                </mat-form-field>\r\n              </div> -->\r\n              <!-- <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Participant Relation:\" formControlName=\"prtcpnrRelKey\">\r\n                    <mat-option [value]=\"0\">Relation With Client</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div> -->\r\n\r\n              <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" matInput placeholder=\"School Name:\" formControlName=\"schNm\">\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" matInput placeholder=\"Teacher Name:\" formControlName=\"tchrNm\">\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"cCol2\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" (keypress)=\"onlyNumbers($event)\" matInput placeholder=\"Total Students:\"\r\n                    formControlName=\"totStdnt\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer text-center\">\r\n            <button type=\"submit\" [disabled]=!addKssClientsParticipantsForm.valid\r\n              class=\"btn btn-primary btn-min\">Ok</button>\r\n            <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-----------             Check Cnic             ------------------->\r\n\r\n\r\n  <div class=\"modal fade\" id=\"checkClient\" role=\"dialog\">\r\n    <div class=\"modal-dialog big mymodal\">\r\n\r\n      <form (ngSubmit)=\"onSubmitCheckClient()\" [formGroup]=\"checkClientForm\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\">Validate CNIC</h5>\r\n          </div>\r\n          <div class=\"modal-body\" style=\"overflow-y:unset;\">\r\n            <div class=\"cRow\">\r\n\r\n\r\n              <div class=\"cCol4\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" (keypress)=\"onlyNumbers($event)\" matInput placeholder=\"Enter CNIC:\"\r\n                    formControlName=\"cnicNum\" maxlength=\"13\" minlength=\"13\" id=\"cnincNum\">\r\n                  <mat-hint align=\"end\">NOT LESS THAN 13 NUMBERS</mat-hint>\r\n                  <!-- <mat-error *ngIf=\"hasError('cnincNum', 'required')\">CNIC is required</mat-error> -->\r\n                </mat-form-field>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer text-center\">\r\n            <button type=\"submit\" [disabled]=!checkClientForm.valid class=\"btn btn-primary btn-min\">Validate</button>\r\n            <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!--------------------    Teachers Add Pop up                  ----------->\r\n\r\n\r\n  <div class=\"modal fade\" id=\"addTeaceherForKSS\" role=\"dialog\">\r\n    <div class=\"modal-dialog big mymodal\">\r\n\r\n      <form (ngSubmit)=\"onSubmitTeachersForm()\" [formGroup]=\"kssTeacherForm\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\">Staff Trained</h5>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n\r\n            <div formArrayName=\"address\"\r\n              *ngFor=\"let a of kssTeacherForm.get('address').controls; let i = index; let first = first; let last = last;\">\r\n              <div [formGroupName]=\"i\">\r\n\r\n                <div class=\"cRow\">\r\n                  <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Staff Name:\" formControlName=\"stfNm\">\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                  <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" (keypress)=\"onlyNumbers($event)\" matInput placeholder=\"Contact Info:\"\r\n                        formControlName=\"stfCntct\">\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                  <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"Designation:\" formControlName=\"stfTypKey\">\r\n                        <mat-option [value]=\"1\">Owner</mat-option>\r\n                        <mat-option [value]=\"2\">Principal</mat-option>\r\n                        <mat-option [value]=\"2\">Teacher</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                  <div class=\"cCol2\">\r\n                    <!-- <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\" addNewAddressGroup()\">Add\r\n                    </button> -->\r\n\r\n                    <button type=\"button\" class=\"btn btn-danger btn-sm button\" (click)=\" deleteAddressGroup(i)\">Delete\r\n                    </button>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"cRow\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\" addNewAddressGroup()\">Add Staff</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer text-center\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-min\">OK</button>\r\n            <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/training/participants/participants.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/training/participants/participants.component.ts ***!
  \***********************************************************************/
/*! exports provided: MY_FORMATS, ParticipantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantsComponent", function() { return ParticipantsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_training_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/training.service */ "./src/app/shared/services/training.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/models/REF_CODE_GRP_KEYS.mocks */ "./src/app/shared/models/REF_CODE_GRP_KEYS.mocks.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var moment = moment__WEBPACK_IMPORTED_MODULE_3__;
var MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
var ParticipantsComponent = /** @class */ (function () {
    function ParticipantsComponent(fb, trainingServivce, spinner, toaster, router, commonService) {
        this.fb = fb;
        this.trainingServivce = trainingServivce;
        this.spinner = spinner;
        this.toaster = toaster;
        this.router = router;
        this.commonService = commonService;
        this.dateRequired = false;
        this.totalParticipants = [];
        this.allTrainingTypes = [];
        this.allTrainingTypeBySeq = [];
        this.clientValidation = [];
        this.trng = JSON.parse(sessionStorage.getItem("trng"));
        this.data = {
            dateOfTraining: [
                {
                    training_date: ""
                }
            ]
        };
        this.isNonClient = false;
        this.isClient = false;
        this.isBoth = false;
        this.allTypesTraining = [];
        this.isKSS = false;
        this.isKKK = false;
        this.isKEL = false;
        this.isKMWK = false;
        this.isALL = false;
        this.isAllNonClient = false;
        this.isEdit = false;
    }
    ParticipantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addParticipantsForm = this.fb.group({
            trngSeq: [this.trng.trngSeq],
            prtcpntCnicNum: [{ value: '', disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            prtcpntNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            prtcpntGndrKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            prtcpnrRelKey: [''],
            loanCyclNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dsbmtDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.addNonClientParticipantsForm = this.fb.group({
            trngSeq: [this.trng.trngSeq],
            // prtcpntCnicNum: [{ value: '', disabled: false }, Validators.required],
            prtcpntCnicNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            prtcpntNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            prtcpntGndrKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            prtcpnrRelKey: [''],
        });
        this.addKssClientsParticipantsForm = this.fb.group({
            trngSeq: [this.trng.trngSeq],
            prtcpntCnicNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            prtcpntNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            prtcpntGndrKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            prtcpnrRelKey: [''],
            dsbmtDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            schNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            tchrNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            totStdnt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.kssTeacherForm = this.fb.group({
            address: this.fb.array([])
        });
        this.trainingServivce.getAllTypesTraining().subscribe(function (res) {
            _this.allTypesTraining = res;
            console.log(_this.allTypesTraining);
            console.log(_this.trng);
            _this.allTypesTraining.forEach(function (ele) {
                if (ele.trngTypeSeq == _this.trng.trngTypeSeq) {
                    if (ele.trngPrtcpntTypSeq == 0) {
                        _this.isClient = true;
                    }
                    else if (ele.trngPrtcpntTypSeq == 1) {
                        _this.isNonClient = true;
                    }
                    else if (ele.trngPrtcpntTypSeq == 2) {
                        _this.isBoth = true;
                    }
                }
            });
            _this.allTypesTraining.forEach(function (tr) {
                if (tr.trngTypeSeq == _this.trng.trngTypeSeq) {
                    console.log(tr.trngClntCtgrtSeq);
                    console.log(tr.trngPrtcpntTypSeq);
                    if (tr.trngClntCtgrtSeq == 1) {
                        _this.isKSS = true;
                    }
                    else if (tr.trngClntCtgrtSeq == 0) {
                        _this.isKKK = true;
                    }
                    else if (tr.trngClntCtgrtSeq == 2) {
                        _this.isKEL = true;
                    }
                    else if (tr.trngClntCtgrtSeq == 3) {
                        _this.isKMWK = true;
                    }
                    else if (tr.trngClntCtgrtSeq == 4) {
                        _this.isALL = true;
                    }
                    else if (tr.trngClntCtgrtSeq == 5) {
                        _this.isAllNonClient = true;
                    }
                }
            });
        });
        this.checkClientForm = this.fb.group({
            cnicNum: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.commonService.getValues(_shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_8__["GENDER"]).subscribe(function (res) {
            _this.gender = res;
            console.log(_this.gender);
        });
        this.commonService.getValues(_shared_models_REF_CODE_GRP_KEYS_mocks__WEBPACK_IMPORTED_MODULE_8__["RELATIONSHIP_WITH_CLIENT"]).subscribe(function (res) {
            _this.relationshipClient = res;
            console.log(_this.relationshipClient);
        });
        this.trainingServivce.getallParticipants(this.trng.trngSeq).subscribe(function (res) {
            _this.allParticipants = res;
            console.log(_this.allParticipants);
        });
    };
    ParticipantsComponent.prototype.getGender = function (prtcpntGndrKey) {
        var str = "";
        if (prtcpntGndrKey == 19) {
            str = 'Female';
        }
        else if (prtcpntGndrKey == 18) {
            str = 'Male';
        }
        else if (prtcpntGndrKey == 20) {
            str = 'Transgender';
        }
        return str;
    };
    ParticipantsComponent.prototype.loanCycleForNonClients = function (loanCyclNum) {
        var str;
        if (loanCyclNum == null) {
            str = "-";
        }
        else if (loanCyclNum != null) {
            str = loanCyclNum;
        }
        return str;
    };
    ParticipantsComponent.prototype.disbursmentDateForNonClients = function (dsbmtDt) {
        var str;
        if (dsbmtDt == null) {
            str = '';
        }
        else if (dsbmtDt != null) {
            str = dsbmtDt;
        }
        return str;
    };
    ParticipantsComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    ParticipantsComponent.prototype.onlyLetters = function (event) {
        var pattern = /[a-zA-Z ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    ParticipantsComponent.prototype.onAddButton = function () {
        // this.isEdit = false;
        this.checkClientForm.reset();
        this.addNonClientParticipantsForm.reset();
        this.addNonClientParticipantsForm.clearValidators();
        $('#addNonClientParticipants').modal('show');
        console.log(this.trng.trngSeq);
        // console.log(this.addParticipantsForm.controls['trngSeq'].patchValue(this.trng.trngSeq));
        // this.addParticipantsForm.controls['trngSeq'].setValue(this.trng.trngSeq)
        this.isEdit = false;
    };
    ParticipantsComponent.prototype.onAddStaff = function (part) {
        var _this = this;
        this.kssTeacherForm.setControl('address', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]));
        this.participantSequence = part.prtcpntSeq;
        console.log(this.participantSequence);
        this.trainingServivce.getAllStaff(this.participantSequence).subscribe(function (res) {
            _this.allStaffForTraining = res;
            console.log(_this.allStaffForTraining);
            if (_this.allStaffForTraining.length > 0) {
                _this.allStaffForTraining.forEach(function (element) {
                    console.log(element);
                    _this.kssTeacherForm.controls['address'].push(_this.fb.group({
                        prtcpntStfSeq: [element.prtcpntStfSeq],
                        prtcpntSeq: [element.prtcpntSeq],
                        stfNm: [element.stfNm],
                        stfCntct: [element.stfCntct],
                        stfTypKey: [element.stfTypKey],
                    }));
                });
            }
            else {
                _this.kssTeacherForm = _this.fb.group({
                    address: _this.fb.array([_this.addingAddress()])
                });
            }
        }, function (error) {
            _this.spinner.hide();
            if (error.status == 500) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
            else if (error.status == 400) {
                _this.toaster.error(error.error.error);
            }
        });
        $('#addTeaceherForKSS').modal('show');
    };
    ParticipantsComponent.prototype.addNewAddressGroup = function () {
        var add = this.kssTeacherForm.get('address');
        add.push(this.fb.group({
            prtcpntStfSeq: [''],
            prtcpntSeq: [this.participantSequence],
            stfNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            stfCntct: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            stfTypKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        }));
    };
    ParticipantsComponent.prototype.deleteAddressGroup = function (i) {
        var add = this.kssTeacherForm.controls['address'];
        console.log(add);
        console.log(i);
        add.removeAt(i);
    };
    ParticipantsComponent.prototype.addingAddress = function () {
        console.log(this.participantSequence);
        return this.fb.group({
            prtcpntStfSeq: [''],
            prtcpntSeq: [this.participantSequence],
            stfNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            stfCntct: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            stfTypKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    ParticipantsComponent.prototype.onSubmitTeachersForm = function () {
        var _this = this;
        console.log(this.participantSequence);
        var someAddresses = this.kssTeacherForm.get('address').value;
        console.log(someAddresses);
        this.trainingServivce.addStaffForParticipants(someAddresses).subscribe(function (res) {
            console.log(res);
            _this.toaster.success('Staff Saved', 'Success');
        }, function (error) {
            _this.spinner.hide();
            if (error.status == 500) {
                _this.toaster.error("Something Went Wrong", "Error");
            }
            else if (error.status == 400) {
                _this.toaster.error(error.error.error);
            }
        });
        $('#addTeaceherForKSS').modal('hide');
    };
    ParticipantsComponent.prototype.onCheckCnicButton = function () {
        this.isEdit = false;
        this.checkClientForm.reset();
        $('#checkClient').modal('show');
    };
    ParticipantsComponent.prototype.onEditParticipants = function (part) {
        console.log(part);
        console.log(part.prtcpntTRelKey);
        console.log(this.isNonClient);
        if (this.isAllNonClient && this.isNonClient) {
            console.log('this,gnasobfkj');
            this.addNonClientParticipantsForm = this.fb.group({
                prtcpntSeq: [part.prtcpntSeq],
                trngSeq: [this.trng.trngSeq],
                prtcpntCnicNum: [{ value: part.prtcpntCnic, disabled: true }],
                prtcpntNm: [part.prtcpntNm],
                prtcpntGndrKey: [{ value: part.prtcpntGndrKey, disabled: true }],
                prtcpnrRelKey: [{ value: part.prtcpntTRelKey, disabled: true }],
            });
            $('#addNonClientParticipants').modal('show');
            this.isEdit = true;
            // } else if (this.isKSS && this.isClient) {
            //   (<any>$('#addKssParticipants')).modal('show');
            //   this.addKssClientsParticipantsForm = this.fb.group({
            //     prtcpntSeq: [part.prtcpntSeq],
            //     trngSeq: [this.trng.trngSeq],
            //     prtcpntCnicNum: [{ value: part.prtcpntCnic, disabled: true }],
            //     prtcpntNm: [{ value: part.prtcpntNm, disabled: true }],
            //     prtcpntGndrKey: [{ value: part.prtcpntGndrKey, disabled: true }],
            //     prtcpnrRelKey: [''],
            //     loanCyclNum: [{ value: part.loanCyclNum, disabled: true }],
            //     dsbmtDt: [{ value: part.dsbmtDt, disabled: true }],
            //     schNm: [{ value: part.otherDetails, disabled: true }],
            //     tchrNm: ['', Validators.required],
            //     totStdnt: ['', Validators.required],
            //   })
            //   this.isEdit = true;
            // } else if (this.isClient && ) {
        }
        else if (part.dsbmtDt != null && part.loanCyclNum != null && this.isKSS) {
            $('#addKssParticipants').modal('show');
            this.addKssClientsParticipantsForm = this.fb.group({
                prtcpntSeq: [part.prtcpntSeq],
                trngSeq: [this.trng.trngSeq],
                prtcpntCnicNum: [{ value: part.prtcpntCnic, disabled: true }],
                prtcpntNm: [{ value: part.prtcpntNm, disabled: true }],
                prtcpntGndrKey: [{ value: part.prtcpntGndrKey, disabled: true }],
                prtcpnrRelKey: [''],
                loanCyclNum: [{ value: part.loanCyclNum, disabled: true }],
                dsbmtDt: [{ value: part.dsbmtDt, disabled: true }],
                schNm: [{ value: part.otherDetails, disabled: true }],
                tchrNm: [part.tchrNm],
                totStdnt: [part.totStdnt]
            });
            this.isEdit = true;
        }
        else if (part.dsbmtDt != null && part.loanCyclNum != null && !this.isKSS) {
            $('#addParticipants').modal('show');
            this.addParticipantsForm = this.fb.group({
                prtcpntSeq: [part.prtcpntSeq],
                trngSeq: [this.trng.trngSeq],
                prtcpntCnicNum: [{ value: part.prtcpntCnic, disabled: true }],
                prtcpntNm: [{ value: part.prtcpntNm, disabled: true }],
                prtcpntGndrKey: [{ value: part.prtcpntGndrKey, disabled: true }],
                prtcpnrRelKey: [''],
                loanCyclNum: [{ value: part.loanCyclNum, disabled: true }],
                dsbmtDt: [{ value: part.dsbmtDt, disabled: true }],
            });
            this.isEdit = true;
        }
        else if (part.dsbmtDt == null && part.loanCyclNum == null && this.isKSS) {
            $('#addNonClientParticipants').modal('show');
            this.addNonClientParticipantsForm = this.fb.group({
                prtcpntSeq: [part.prtcpntSeq],
                trngSeq: [this.trng.trngSeq],
                // prtcpntCnicNum: [{ value: this.checkClientForm.controls['cnicNum'].value, disabled: true }, Validators.required],
                prtcpntCnicNum: [{ value: part.prtcpntCnic, disabled: true }],
                prtcpntNm: [part.prtcpntNm],
                prtcpntGndrKey: [{ value: part.prtcpntGndrKey, disabled: true }],
                prtcpnrRelKey: ['']
            });
            this.isEdit = true;
        }
        else if (part.dsbmtDt == null && part.loanCyclNum == null && (this.isNonClient || this.isBoth)) {
            $('#addNonClientParticipants').modal('show');
            this.addNonClientParticipantsForm = this.fb.group({
                prtcpntSeq: [part.prtcpntSeq],
                trngSeq: [this.trng.trngSeq],
                // prtcpntCnicNum: [{ value: this.checkClientForm.controls['cnicNum'].value, disabled: true }, Validators.required],
                prtcpntCnicNum: [{ value: part.prtcpntCnic, disabled: true }],
                prtcpntNm: [part.prtcpntNm],
                prtcpntGndrKey: [{ value: part.prtcpntGndrKey, disabled: true }],
                prtcpnrRelKey: ['']
            });
            this.isEdit = true;
        }
        // })
    };
    ParticipantsComponent.prototype.onDeleteParticipants = function (part) {
        var _this = this;
        console.log(part.prtcpntSeq);
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Participants?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.trainingServivce.deleteParticipants(part.prtcpntSeq).subscribe(function (ele) {
                    _this.allParticipants.splice(_this.allParticipants.indexOf(part), 1);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()('Deleted!', 'Participants Deleted Successfully.', 'success');
                });
            }
        });
    };
    ParticipantsComponent.prototype.onSubmitCheckClient = function () {
        var _this = this;
        this.isEdit = false;
        this.trainingServivce.validateClient(this.checkClientForm.value).subscribe(function (res) {
            _this.clientValidation = res;
            // if already exist in selected training
            for (var a = 0; a < _this.allParticipants.length; a++) {
                if (_this.allParticipants[a].prtcpntCnic == _this.checkClientForm.controls['cnicNum'].value) {
                    $('#checkClient').modal('hide');
                    _this.toaster.info('Participants Already Exist', 'Information');
                    return;
                }
            }
            //if client and undefined
            if (res.client.client == undefined && _this.isClient) {
                _this.toaster.info("Non Client Cannot Be In Clients Training", "Information");
                return;
            }
            // if client but not kss client
            if (res.client.client !== undefined && res.client.client.prdName == "KASHF SCHOOL SARMAYA" && !_this.isKSS && _this.isClient && !_this.isALL) {
                $('#checkClient').modal('hide');
                _this.toaster.error('Not KSS Training', 'KSS Client');
                return;
            }
            else if (res.client.client !== undefined && res.client.client.prdName == "KASHF EASY LOAN" && !_this.isKEL && _this.isClient && !_this.isALL) {
                $('#checkClient').modal('hide');
                _this.toaster.error('Not KEL Training', 'KEL Client');
                return;
            }
            //if client but not kmwk client
            if (res.client.client !== undefined && res.client.client.prdName == "KASHF MAWESHI KARZA BI-ANNUAL " && !_this.isKMWK && _this.isClient && !_this.isALL) {
                $('#checkClient').modal('hide');
                _this.toaster.error('Not KMWK Training', 'KMWK Client');
                return;
            }
            //if client but not kkk client
            if (res.client.client !== undefined && res.client.client.prdName == "KASHF KAROBAR KARZA" && !_this.isKKK && _this.isClient && !_this.isALL) {
                $('#checkClient').modal('hide');
                _this.toaster.error('Not KKK Training', 'KKK Client');
                return;
            }
            if (res.client.client == undefined && _this.isKSS && (_this.isClient || _this.isBoth)) {
                $('#checkClient').modal('hide');
                _this.toaster.info('Non Clients Cannot Be In KSS Training', "Non Client");
                return;
            }
            // client should only be active
            if (res.client.client !== undefined && res.client.client.clientStatus !== 703) {
                _this.toaster.error("Client Is Not Active", "Error");
                return;
            }
            if (res.client.client !== undefined && res.client.client.prdName == "KASHF SCHOOL SARMAYA" && res.client.client.clientStatus == 703 && _this.isKSS) {
                _this.toaster.info('KSS Client', 'Client');
                $('#checkClient').modal('hide');
                $('#addKssParticipants').modal('show');
                _this.addKssClientsParticipantsForm = _this.fb.group({
                    trngSeq: [_this.trng.trngSeq],
                    prtcpntCnicNum: [{ value: _this.clientValidation.client.client.cnicNum, disabled: true }],
                    prtcpntNm: [{ value: _this.clientValidation.client.client.firstName, disabled: true }],
                    prtcpntGndrKey: [{ value: _this.clientValidation.client.client.genderKey, disabled: true }],
                    prtcpnrRelKey: [''],
                    loanCyclNum: [{ value: _this.clientValidation.client.client.loanCyclNum, disabled: true }],
                    dsbmtDt: [{ value: _this.clientValidation.client.client.dsbmtDt, disabled: true }],
                    schNm: [{ value: _this.clientValidation.client.client.otherDetails, disabled: true }],
                    tchrNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    totStdnt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                });
            }
            else if (res.client.client === undefined && _this.isKSS) {
                // console.log('i am in');
                $('#checkClient').modal('hide');
                $('#addKssParticipants').modal('show');
                _this.addKssClientsParticipantsForm = _this.fb.group({
                    trngSeq: [_this.trng.trngSeq],
                    // prtcpntCnicNum: [{ value: this.checkClientForm.controls['cnicNum'].value, disabled: true }, Validators.required],
                    prtcpntCnicNum: [{ value: _this.checkClientForm.controls['cnicNum'].value, disabled: true }],
                    prtcpntNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    prtcpntGndrKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    prtcpnrRelKey: [''],
                    schNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    tchrNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    totStdnt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                });
            }
            else if (res.client.client === undefined && !_this.isKSS) {
                _this.toaster.error('Not a Client', 'Alert');
                $('#checkClient').modal('hide');
                $('#addNonClientParticipants').modal('show');
                _this.addNonClientParticipantsForm = _this.fb.group({
                    trngSeq: [_this.trng.trngSeq],
                    // prtcpntCnicNum: [{ value: this.checkClientForm.controls['cnicNum'].value, disabled: true }, Validators.required],
                    // prtcpntCnicNum: [{ value: this.checkClientForm.controls['cnicNum'].value, disabled: true }],
                    prtcpntCnicNum: [_this.checkClientForm.controls['cnicNum'].value, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    prtcpntNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    prtcpntGndrKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    prtcpnrRelKey: ['']
                });
            }
            else if (_this.clientValidation.client.client !== undefined && res.client.client.clientStatus == 703 && !_this.isKSS) {
                _this.toaster.info('Client Found', 'Information');
                $('#checkClient').modal('hide');
                $('#addParticipants').modal('show');
                _this.addParticipantsForm = _this.fb.group({
                    trngSeq: [_this.trng.trngSeq],
                    prtcpntCnicNum: [{ value: _this.clientValidation.client.client.cnicNum, disabled: true }],
                    prtcpntNm: [{ value: _this.clientValidation.client.client.firstName, disabled: true }],
                    prtcpntGndrKey: [{ value: _this.clientValidation.client.client.genderKey, disabled: true }],
                    prtcpnrRelKey: [''],
                    loanCyclNum: [{ value: _this.clientValidation.client.client.loanCyclNum, disabled: true }],
                    dsbmtDt: [{ value: _this.clientValidation.client.client.dsbmtDt, disabled: true }],
                });
            }
            else {
                $('#checkClient').modal('hide');
                _this.toaster.info('Is Not Client', 'Some Information');
            }
        });
    };
    // kss client submit
    ParticipantsComponent.prototype.onSubmitKSSClientsParticipants = function () {
        var _this = this;
        if (!this.isEdit) {
            console.log(this.addKssClientsParticipantsForm.value);
            var a = this.addKssClientsParticipantsForm.getRawValue();
            a.trngSeq = this.trng.trngSeq;
            a.dsbmtDt = new Date(this.addKssClientsParticipantsForm.controls['dsbmtDt'].value);
            this.spinner.show();
            this.trainingServivce.addParticipantsAgainstTraining(a).subscribe(function (res) {
                _this.trainingServivce.getallParticipants(_this.trng.trngSeq).subscribe(function (res) {
                    _this.allParticipants = res;
                });
                _this.spinner.hide();
            }, function (error) {
                console.log(error);
                _this.spinner.hide();
                if (error.status == 500) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
                else if (error.status == 400) {
                    _this.toaster.error(error.error.error);
                }
            });
            $('#addKssParticipants').modal('hide');
            this.addKssClientsParticipantsForm.reset();
        }
        else {
            console.log(this.addKssClientsParticipantsForm.value);
            var a = this.addKssClientsParticipantsForm.getRawValue();
            a.trngSeq = this.trng.trngSeq;
            a.dsbmtDt = new Date(this.addKssClientsParticipantsForm.controls['dsbmtDt'].value);
            console.log(this.addKssClientsParticipantsForm.value);
            this.spinner.show();
            this.trainingServivce.updateParticipantsAgainstTraining(a).subscribe(function (res) {
                _this.trainingServivce.getallParticipants(_this.trng.trngSeq).subscribe(function (res) {
                    _this.allParticipants = res;
                });
                _this.spinner.hide();
            }, function (error) {
                console.log(error);
                _this.spinner.hide();
                if (error.status == 500) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
                else if (error.status == 400) {
                    _this.toaster.error(error.error);
                }
            });
            $('#addKssParticipants').modal('hide');
            this.addKssClientsParticipantsForm.reset();
        }
    };
    //Client Submit function
    ParticipantsComponent.prototype.onSubmitClientTraining = function () {
        var _this = this;
        if (!this.isEdit) {
            var obj = this.addParticipantsForm.getRawValue();
            obj.trngSeq = this.trng.trngSeq;
            var disbursementDate = obj.dsbmtDt;
            var d = moment(disbursementDate, 'DD-MM-YYYY');
            console.log(d);
            obj.dsbmtDt = moment.parseZone(d.format('YYYY-MM-DD'))['_i'];
            console.log(obj.dsbmtDt);
            this.spinner.show();
            this.trainingServivce.addParticipantsAgainstTraining(obj).subscribe(function (res) {
                _this.trainingServivce.getallParticipants(_this.trng.trngSeq).subscribe(function (res) {
                    _this.allParticipants = res;
                    console.log(_this.allParticipants);
                    $('#addParticipants').modal('hide');
                    _this.addParticipantsForm.reset();
                });
                _this.spinner.hide();
            }, function (error) {
                console.log(error);
                _this.spinner.hide();
                if (error.status == 500) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
                else if (error.status == 400) {
                    _this.toaster.error(error.error.error);
                }
            });
        }
        else {
            var obj = this.addParticipantsForm.getRawValue();
            obj.trngSeq = this.trng.trngSeq;
            console.log(new Date(obj.dsbmtDt));
            var d = moment(obj.dsbmtDt, 'DD-MMM-YYYY');
            obj.dsbmtDt = moment.parseZone(d.format('YYYY-MM-DD'))['_i'];
            console.log(obj);
            this.spinner.show();
            this.trainingServivce.updateParticipantsAgainstTraining(obj).subscribe(function (res) {
                _this.trainingServivce.getallParticipants(_this.trng.trngSeq).subscribe(function (res) {
                    _this.allParticipants = res;
                    console.log(_this.allParticipants);
                    $('#addParticipants').modal('hide');
                    _this.addParticipantsForm.reset();
                });
                _this.spinner.hide();
            }, function (error) {
                console.log(error);
                _this.spinner.hide();
                if (error.status == 500) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
                else if (error.status == 400) {
                    _this.toaster.error(error.error);
                }
            });
        }
    };
    //submit non client
    ParticipantsComponent.prototype.onSubmitNonClientParticipants = function () {
        var _this = this;
        if (!this.isEdit) {
            console.log(this.trng.trngSeq);
            console.log(this.addNonClientParticipantsForm.getRawValue());
            var a = this.addNonClientParticipantsForm.getRawValue();
            a.trngSeq = this.trng.trngSeq;
            this.spinner.show();
            this.trainingServivce.addParticipantsAgainstTraining(a).subscribe(function (res) {
                _this.trainingServivce.getallParticipants(_this.trng.trngSeq).subscribe(function (res) {
                    _this.allParticipants = res;
                });
                // console.log(a)
                // this.allParticipants.push(a)
                _this.spinner.hide();
            }, function (error) {
                _this.spinner.hide();
                if (error.status == 500) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
                else if (error.status == 400) {
                    _this.toaster.error(error.error.error);
                }
            });
            $('#addNonClientParticipants').modal('hide');
            this.addNonClientParticipantsForm.reset();
        }
        else {
            console.log(this.trng.trngSeq);
            console.log(this.addNonClientParticipantsForm.getRawValue());
            var a = this.addNonClientParticipantsForm.getRawValue();
            a.trngSeq = this.trng.trngSeq;
            this.spinner.show();
            this.trainingServivce.updateParticipantsAgainstTraining(a).subscribe(function (res) {
                _this.trainingServivce.getallParticipants(_this.trng.trngSeq).subscribe(function (res) {
                    _this.allParticipants = res;
                });
                _this.spinner.hide();
            }, function (error) {
                _this.spinner.hide();
                if (error.status == 500) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
                else if (error.status == 400) {
                    _this.toaster.error(error.error);
                }
            });
            $('#addNonClientParticipants').modal('hide');
            this.addNonClientParticipantsForm.reset();
        }
    };
    ParticipantsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-participants',
            template: __webpack_require__(/*! ./participants.component.html */ "./src/app/pages/training/participants/participants.component.html"),
            styles: [__webpack_require__(/*! ./participants.component.css */ "./src/app/pages/training/participants/participants.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_training_service__WEBPACK_IMPORTED_MODULE_2__["TrainingService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]])
    ], ParticipantsComponent);
    return ParticipantsComponent;
}());



/***/ }),

/***/ "./src/app/pages/training/training-types/training-types.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/training/training-types/training-types.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ml {\r\n    margin-left: 10px;\r\n}\r\n\r\n.mr{\r\n    margin-right: 10px;\r\n}"

/***/ }),

/***/ "./src/app/pages/training/training-types/training-types.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/training/training-types/training-types.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar></app-left-side-bar>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"mysearchbox\">\r\n                <h6 class=\"d-inline-block searchshow\">Training Type\r\n                </h6>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6 addBtn\">\r\n              <button class=\"btn btn-primary btn-sm\" type=\"button\" (click)=\"openTrainingTypesModel()\"><i\r\n                  class=\"fa fa-plus\"></i>\r\n                Add</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>Training ID</th>\r\n                  <th>Training Types</th>\r\n                  <th>Training Tenure</th>\r\n                  <!-- <th>Daily Attendance</th> -->\r\n                  <th>Training Due</th>\r\n                  <th>Participants Category</th>\r\n                  <th>Client Category</th>\r\n                  <th>Training Type Status</th>\r\n                  <th>Actions</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let train of allTypesTraining\">\r\n                  <td>{{train.trngTypeSeq}}</td>\r\n                  <td>{{train.trngType}}</td>\r\n                  <td>{{train.trngTnur}}</td>\r\n                  <!-- <td>{{attendacneRequest(train.dailyAttendFlag)}}</td> -->\r\n                  <td>{{trainingDueDays(train.trngDueAftrDys)}}</td>\r\n                  <td>{{participantsTypes(train.trngPrtcpntTypSeq)}}</td>\r\n                  <td>{{clientCategory(train.trngClntCtgrtSeq)}}</td>\r\n                  <td>{{trainingStatus(train.trngStsKey)}}</td>\r\n                  <td>\r\n                    <!-- <a data-toggle=\"tooltip\" title=\"Participents\"\r\n                      [routerLink]=\"['/training/participants', train.trngTypeSeq]\" class=\"iconBtn\"><i\r\n                        class=\"fa fa-child\"></i></a> -->\r\n                    <a data-toggle=\"tooltip\" title=\"Edit\" (click)=\"onEditTrainingType(train)\" class=\"iconBtn\"><i\r\n                        class=\"fa fa-pencil\"></i></a>\r\n                    <!-- <a data-toggle=\"tooltip\" title=\"Delete\" (click)=\"onDeleteTrainingType(train)\"\r\n                      class=\"iconBtn delBtn\"><i class=\"fa fa-trash-o\"></i></a> -->\r\n\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!------  Set Training modal   -------------->\r\n\r\n\r\n      <div class=\"modal fade\" id=\"trainingTypes\" role=\"dialog\">\r\n        <div class=\"modal-dialog big mymodal\">\r\n\r\n          <form (ngSubmit)=\"onSubmitTrainingTypes()\" [formGroup]=\"trainingTypesFrom\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Training Type</h5>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <div class=\"cRow\">\r\n\r\n                  <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Training Type:\" formControlName=\"trngTyp\">\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                  <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" (keypress)=\"onlyNumbers($event)\" matInput placeholder=\"Training Tenure:\"\r\n                        formControlName=\"trngTnur\">\r\n                      <mat-hint align=\"end\">Enter Tenure In Days.</mat-hint>\r\n                    </mat-form-field>\r\n\r\n                  </div>\r\n\r\n                  <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <mat-select (selectionChange)=\"onSelectionParticipantsTypes($event)\"\r\n                        placeholder=\"Participants Category:\" formControlName=\"trngPrtcpntTypSeq\">\r\n                        <mat-option [value]=\"0\">Clients</mat-option>\r\n                        <mat-option [value]=\"1\">Non Clients</mat-option>\r\n                        <mat-option [value]=\"2\">Both</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                  <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <mat-select [disabled]=\"isTrainingNonClient\"\r\n                        (selectionChange)=\"onSelectionClientsTypes($event)\" placeholder=\"Client Category:\"\r\n                        formControlName=\"trngClntCtgrySeq\">\r\n                        <mat-option [value]=\"0\">KKK Clients Only</mat-option>\r\n                        <mat-option [value]=\"1\">KSS Clients Only</mat-option>\r\n                        <mat-option [value]=\"2\">KEL Clients Only</mat-option>\r\n                        <mat-option [value]=\"3\">KMWK Clients Only</mat-option>\r\n                        <mat-option [value]=\"4\">All Clients</mat-option>\r\n                        <mat-option [disabled]=\"shouldNotBeNonClientForBoth\" [value]=\"5\">All Non Clients</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                  <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"Trainng Due Per Individual:\" formControlName=\"trngDueAftrDys\">\r\n                        <mat-option [value]=\"30\">30 Days After DD</mat-option>\r\n                        <mat-option [value]=\"60\">60 Days After DD</mat-option>\r\n                        <mat-option [value]=\"90\">90 Days After DD</mat-option>\r\n                        <mat-option [value]=\"120\">120 Days After DD</mat-option>\r\n                        <mat-option [value]=\"150\">150 Days After DD</mat-option>\r\n                        <mat-option [value]=\"180\">180 Days After DD</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                  <div class=\"cCol2\">\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"Training Type Status:\" formControlName=\"trngStsKey\">\r\n                        <mat-option [value]=\"1\">Active</mat-option>\r\n                        <mat-option [value]=\"2\">Inactive</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                  <div class=\"cCol4\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Comments:\" formControlName=\"trngTypeCmnt\">\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n\r\n                </div>\r\n\r\n                <!-- <div class=\"collapse d-block mt-3\">\r\n                  <label class=\"mr\" id=\"IsConsecutive\">IsConsecutive</label>\r\n                  <mat-radio-group formControlName=\"trngIsConFlag\" aria-label=\"IsConsecutive\">\r\n                    <mat-radio-button value=\"0\">Yes</mat-radio-button>\r\n                    <mat-radio-button class=\"ml\" value=\"1\">No</mat-radio-button>\r\n                  </mat-radio-group>\r\n                </div>-->\r\n\r\n                <!-- <div class=\"collapse d-block mt-3\">\r\n                  <label class=\"mr\" style=\"margin-right: 10px;\" id=\"Daily Attendance Request\">Daily Attendance\r\n                    Request</label>\r\n                  <mat-radio-group formControlName=\"trngDlyAtndReqFlag\" aria-label=\"Daily Attendance Request\">\r\n                    <mat-radio-button value=\"0\">Yes</mat-radio-button>\r\n                    <mat-radio-button class=\"ml\" value=\"1\">No</mat-radio-button>\r\n                  </mat-radio-group>\r\n                </div> -->\r\n\r\n\r\n                <div class=\"modal-footer text-center\">\r\n                  <button type=\"submit\" [disabled]=!trainingTypesFrom.valid class=\"btn btn-primary btn-min\">Ok</button>\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/pages/training/training-types/training-types.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/training/training-types/training-types.component.ts ***!
  \***************************************************************************/
/*! exports provided: MY_FORMATS, TrainingTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingTypesComponent", function() { return TrainingTypesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_training_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/training.service */ "./src/app/shared/services/training.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var moment = moment__WEBPACK_IMPORTED_MODULE_3__;
var MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
var TrainingTypesComponent = /** @class */ (function () {
    function TrainingTypesComponent(fb, toaster, router, trainingServivce, spinner) {
        this.fb = fb;
        this.toaster = toaster;
        this.router = router;
        this.trainingServivce = trainingServivce;
        this.spinner = spinner;
        this.allTrainingTypes = [];
        this.isTrainingNonClient = false;
        this.shouldNotBeNonClientForBoth = false;
        this.isEdit = false;
        this.isClientCategoryNonClient = false;
    }
    TrainingTypesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trainingTypesFrom = this.fb.group({
            trngTyp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            trngTnur: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            trngClntCtgrySeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            trngDueAftrDys: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            trngStsKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            trngPrtcpntTypSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            trngTypeCmnt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.trainingServivce.getAllTypesTraining().subscribe(function (res) {
            _this.allTypesTraining = res;
            console.log(_this.allTypesTraining);
        });
    };
    TrainingTypesComponent.prototype.onlyNumbers = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    TrainingTypesComponent.prototype.onlyLetters = function (event) {
        var pattern = /[a-zA-Z]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.charCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    TrainingTypesComponent.prototype.openTrainingTypesModel = function () {
        this.trainingTypesFrom.clearValidators();
        this.trainingTypesFrom.reset();
        this.trainingTypesFrom.get('trngTyp').enable();
        this.isEdit = false;
        $('#trainingTypes').modal('show');
    };
    TrainingTypesComponent.prototype.onEditTrainingType = function (train) {
        console.log(train.dailyAttendFlag);
        this.isEdit = true;
        $('#trainingTypes').modal('show');
        this.trainingTypesFrom = this.fb.group({
            // trngTyp: [{ value: train.trngType, readonly: true }],
            trngTyp: [{ value: train.trngType, disabled: true }],
            trngTypeSeq: [train.trngTypeSeq],
            trngTnur: [train.trngTnur, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            trngClntCtgrySeq: [train.trngClntCtgrtSeq],
            trngPrtcpntTypSeq: [train.trngPrtcpntTypSeq],
            trngDueAftrDys: [train.trngDueAftrDys],
            trngStsKey: [train.trngStsKey],
            trngTypeCmnt: [train.trngTypeCmnt],
        });
        console.log(train);
        console.log(this.trainingTypesFrom);
    };
    TrainingTypesComponent.prototype.trainingTypes = function (trngType) {
        var str = '';
        this.allTrainingTypes.forEach(function (ele) {
            if (ele.refCdSeq == trngType) {
                str = ele.refCdDscr;
            }
        });
        return str;
    };
    TrainingTypesComponent.prototype.participantsTypes = function (trngPrtcpntTypSeq) {
        var str = '';
        if (trngPrtcpntTypSeq == 0) {
            str = 'All Clients';
        }
        else if (trngPrtcpntTypSeq == 1) {
            str = 'Non-Clients';
        }
        else if (trngPrtcpntTypSeq == 2) {
            str = 'Both';
        }
        return str;
    };
    TrainingTypesComponent.prototype.trainingTenure = function (trngTnur) {
        var str = '';
        if (trngTnur == 0) {
            str = 'Single Day';
        }
        else if (trngTnur == 1) {
            str = 'Multiple Days';
        }
        return str;
    };
    TrainingTypesComponent.prototype.trainingStatus = function (trngStsKey) {
        var str = '';
        if (trngStsKey == 1) {
            str = 'Active';
        }
        else if (trngStsKey == 2) {
            str = 'In Active';
        }
        return str;
    };
    TrainingTypesComponent.prototype.clientCategory = function (trngClntCtgrtSeq) {
        var str = '';
        if (trngClntCtgrtSeq == 0) {
            str = 'KKK Clients Only';
        }
        else if (trngClntCtgrtSeq == 1) {
            str = 'KSS Clients Only';
        }
        else if (trngClntCtgrtSeq == 2) {
            str = 'KEL Clients Only';
        }
        else if (trngClntCtgrtSeq == 3) {
            str = 'KMWK Clients Only';
        }
        else if (trngClntCtgrtSeq == 4) {
            str = 'All Clients';
        }
        else if (trngClntCtgrtSeq == 5) {
            str = 'All Non Clients';
        }
        return str;
    };
    TrainingTypesComponent.prototype.attendacneRequest = function (dailyAttendFlag) {
        var str = '';
        if (dailyAttendFlag == 0) {
            str = 'Yes';
        }
        else if (dailyAttendFlag == 1) {
            str = 'No';
        }
        return str;
    };
    TrainingTypesComponent.prototype.trainingDueDays = function (trngDueAftrDys) {
        var str = '';
        if (trngDueAftrDys == 30) {
            str = '30 Days After DD';
        }
        else if (trngDueAftrDys == 60) {
            str = '60 Days After DD';
        }
        else if (trngDueAftrDys == 90) {
            str = '90 Days After DD';
        }
        else if (trngDueAftrDys == 120) {
            str = '120 Days After DD';
        }
        else if (trngDueAftrDys == 150) {
            str = '150 Days After DD';
        }
        else if (trngDueAftrDys == 180) {
            str = '180 Days After DD';
        }
        return str;
    };
    TrainingTypesComponent.prototype.consecutiveTraining = function (trngIsConsFlag) {
        var str = '';
        if (trngIsConsFlag == 0) {
            str = 'Yes';
        }
        else if (trngIsConsFlag == 1) {
            str = 'No';
        }
        return str;
    };
    TrainingTypesComponent.prototype.onSelectionParticipantsTypes = function (e) {
        console.log(e);
        if (e.value == 1) {
            this.trainingTypesFrom.controls['trngClntCtgrySeq'].setValue(5);
            this.isTrainingNonClient = true;
            this.shouldNotBeNonClientForBoth = false;
        }
        else if (e.value == 2 || e.value == 0) {
            this.trainingTypesFrom.controls['trngClntCtgrySeq'].reset();
            this.shouldNotBeNonClientForBoth = true;
            this.isTrainingNonClient = false;
        }
        else {
            this.trainingTypesFrom.controls['trngClntCtgrySeq'].reset();
            this.isTrainingNonClient = false;
            this.shouldNotBeNonClientForBoth = false;
        }
    };
    TrainingTypesComponent.prototype.onSelectionClientsTypes = function (e) {
        console.log(e);
        if (e.value == 5) {
            this.trainingTypesFrom.controls['trngPrtcpntTypSeq'].setValue(1);
            this.isClientCategoryNonClient = true;
        }
        else {
            this.isClientCategoryNonClient = false;
        }
    };
    TrainingTypesComponent.prototype.onDeleteTrainingType = function (train) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to delete this Training?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.trainingServivce.deleteTrainigTypes(train.trngTypeSeq).subscribe(function (res) {
                    _this.allTypesTraining.splice(_this.allTypesTraining.indexOf(train), 1);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()('Deleted!', 'Training Deleted Successfully.', 'success');
                });
            }
        });
    };
    TrainingTypesComponent.prototype.onSubmitTrainingTypes = function () {
        var _this = this;
        this.spinner.show();
        if (!this.isEdit) {
            for (var i = 0; i < this.allTypesTraining.length; i++) {
                if (this.trainingTypesFrom.controls['trngTyp'].value == this.allTypesTraining[i].trngType) {
                    console.log(this.allTypesTraining[i].trngType);
                    $('#trainingTypes').modal('hide');
                    this.spinner.hide();
                    this.toaster.error('Training Type Already Exist', 'ERROR');
                    return;
                }
            }
            this.trainingServivce.addTrainingTypes(this.trainingTypesFrom.getRawValue()).subscribe(function (res) {
                _this.spinner.hide();
                _this.allTypesTraining.push(res);
                console.log(res);
                $('#trainingTypes').modal('hide');
            }, function (error) {
                _this.spinner.hide();
                if (error.status == 500) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
                else if (error) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
            });
        }
        else {
            // for (let i = 0; i < this.allTypesTraining.length; i++) {
            //   if (this.trainingTypesFrom.controls['trngTyp'].value !== this.allTypesTraining[i].trngType) {
            //     console.log(this.allTypesTraining[i].trngType);
            //     (<any>$('#trainingTypes')).modal('hide');
            //     this.spinner.hide();
            //     this.toaster.error('Cannot Change The Name Of Training Type', 'ERROR')
            //     return;
            //   }
            // }
            this.trainingTypesFrom.get('trngTyp').disable();
            this.trainingServivce.editTrainigTypes(this.trainingTypesFrom.getRawValue()).subscribe(function (res) {
                _this.spinner.hide();
                _this.isEdit = false;
                _this.trainingServivce.getAllTypesTraining().subscribe(function (res) {
                    _this.allTypesTraining = res;
                }, function (error) {
                    _this.spinner.hide();
                    if (error.status == 500) {
                        _this.isEdit = false;
                        _this.toaster.error("Something Went Wrong", "Error");
                    }
                    else if (error) {
                        _this.toaster.error("Something Went Wrong", "Error");
                    }
                });
                $('#trainingTypes').modal('hide');
            }, function (error) {
                _this.spinner.hide();
                if (error.status == 500) {
                    _this.isEdit = false;
                    _this.toaster.error("Something Went Wrong", "Error");
                }
                else if (error) {
                    _this.toaster.error("Something Went Wrong", "Error");
                }
            });
        }
    };
    TrainingTypesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-training-types',
            template: __webpack_require__(/*! ./training-types.component.html */ "./src/app/pages/training/training-types/training-types.component.html"),
            styles: [__webpack_require__(/*! ./training-types.component.css */ "./src/app/pages/training/training-types/training-types.component.css")],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_shared_services_training_service__WEBPACK_IMPORTED_MODULE_7__["TrainingService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]])
    ], TrainingTypesComponent);
    return TrainingTypesComponent;
}());



/***/ }),

/***/ "./src/app/pages/training/training.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/training/training.module.ts ***!
  \***************************************************/
/*! exports provided: routes, TrainingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingModule", function() { return TrainingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_nonclient_training_client_nonclient_training_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-nonclient-training/client-nonclient-training.component */ "./src/app/pages/training/client-nonclient-training/client-nonclient-training.component.ts");
/* harmony import */ var _left_side_bar_left_side_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./left-side-bar/left-side-bar.component */ "./src/app/pages/training/left-side-bar/left-side-bar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _training_types_training_types_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./training-types/training-types.component */ "./src/app/pages/training/training-types/training-types.component.ts");
/* harmony import */ var _participants_participants_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./participants/participants.component */ "./src/app/pages/training/participants/participants.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: '',
        redirectTo: 'training-types'
    },
    {
        path: 'training-types',
        component: _training_types_training_types_component__WEBPACK_IMPORTED_MODULE_8__["TrainingTypesComponent"]
    },
    {
        path: 'client-training',
        component: _client_nonclient_training_client_nonclient_training_component__WEBPACK_IMPORTED_MODULE_3__["ClientNonclientTrainingComponent"]
    },
    {
        path: 'participants',
        component: _participants_participants_component__WEBPACK_IMPORTED_MODULE_9__["ParticipantsComponent"]
    },
];
var TrainingModule = /** @class */ (function () {
    function TrainingModule() {
    }
    TrainingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__["OwlNativeDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_7__["OwlDateTimeModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"]
            ],
            declarations: [_client_nonclient_training_client_nonclient_training_component__WEBPACK_IMPORTED_MODULE_3__["ClientNonclientTrainingComponent"], _left_side_bar_left_side_bar_component__WEBPACK_IMPORTED_MODULE_4__["LeftSideBarComponent"], _training_types_training_types_component__WEBPACK_IMPORTED_MODULE_8__["TrainingTypesComponent"], _participants_participants_component__WEBPACK_IMPORTED_MODULE_9__["ParticipantsComponent"]]
        })
    ], TrainingModule);
    return TrainingModule;
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

/***/ "./src/app/shared/services/training.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/training.service.ts ***!
  \*****************************************************/
/*! exports provided: TrainingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingService", function() { return TrainingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Api_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Api.model */ "./src/app/shared/models/Api.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrainingService = /** @class */ (function () {
    function TrainingService(http, toaster) {
        this.http = http;
        this.toaster = toaster;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_1__["ApiModel"]();
        this.url = this.apiModel.host;
        this.token = 'Bearer ' + sessionStorage.getItem('token');
    }
    TrainingService.prototype.getAllTrainingTypes = function () {
        return this.http.get(this.apiModel.host + '/trainingservice/api/get-all-training-types', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { return console.log(p); }));
    };
    TrainingService.prototype.updateTrainingTypes = function (seq) {
        var _this = this;
        return this.http.post(this.apiModel.host + '/trainingservice/api/update-training-types', seq, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { return _this.toaster.success('Training Type Updated', 'Success!'); }));
    };
    TrainingService.prototype.getAllTrainings = function () {
        return this.http.get(this.apiModel.host + '/trainingservice/api/get-all-training', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { return console.log(p); }));
    };
    TrainingService.prototype.getTrainingTypeSeq = function (seq) {
        return this.http.get(this.apiModel.host + '/trainingservice/api/get-training-type-seq' + '/' + seq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { return console.log(p); }));
    };
    TrainingService.prototype.getallParticipants = function (seq) {
        return this.http.get(this.apiModel.host + '/trainingservice/api/get-all-participants-seq/' + seq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { return console.log(p); }));
    };
    TrainingService.prototype.getallParticipantsWithDates = function (seq) {
        return this.http.get(this.apiModel.host + '/trainingservice/api/get-all-prtpants-seq-dt/' + seq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { return console.log(p); }));
    };
    TrainingService.prototype.setTrainings = function (obj) {
        return this.http.post(this.apiModel.host + '/trainingservice/api/add-setup-training', obj, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { console.log(p); }));
    };
    TrainingService.prototype.addTrainingTypes = function (obj) {
        return this.http.post(this.apiModel.host + '/trainingservice/api/add-types-training', obj, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { console.log(p); }));
    };
    TrainingService.prototype.editTrainigTypes = function (obj) {
        return this.http.post(this.apiModel.host + '/trainingservice/api/update-training-types', obj, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { console.log(p); }));
    };
    TrainingService.prototype.deleteTrainigTypes = function (obj) {
        return this.http.post(this.apiModel.host + '/trainingservice/api/delete-types-training', obj, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { console.log(p); }));
    };
    TrainingService.prototype.deleteTraining = function (seq) {
        return this.http.delete(this.apiModel.host + '/trainingservice/api/delete-training' + '/' + seq, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { console.log(p); }));
    };
    TrainingService.prototype.deleteParticipants = function (seq) {
        return this.http.delete(this.apiModel.host + '/trainingservice/api/delete-participants' + '/' + seq, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { console.log(p); }));
    };
    TrainingService.prototype.validateClient = function (cnic) {
        return this.http.post(this.apiModel.host + '/loanservice/api/mw-tags-validation-for-clnt-nom-cob', cnic, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { console.log(p); }));
    };
    TrainingService.prototype.submitParticipant = function (obj) {
        return this.http.post(this.apiModel.host + '/trainingservice/api/add-participants', obj, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { console.log(p); }));
    };
    TrainingService.prototype.getAllTypesTraining = function () {
        return this.http.get(this.apiModel.host + '/trainingservice/api/get-all-training-types', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { return console.log(p); }));
    };
    TrainingService.prototype.addTrainings = function (obj) {
        return this.http.post(this.apiModel.host + '/trainingservice/api/add-training', obj, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { console.log(p); }));
    };
    TrainingService.prototype.editTrainings = function (obj) {
        return this.http.post(this.apiModel.host + '/trainingservice/api/update-training', obj, { headers: this.apiModel.httpHeaderPost });
    };
    TrainingService.prototype.getAllBrnches = function () {
        return this.http.get(this.apiModel.host + '/setupservice/api/mw-brnches', { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log(data); }));
    };
    TrainingService.prototype.addParticipantsAgainstTraining = function (obj) {
        return this.http.post(this.apiModel.host + '/trainingservice/api/add-participants', obj, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { console.log(p); }));
    };
    TrainingService.prototype.updateParticipantsAgainstTraining = function (obj) {
        return this.http.post(this.apiModel.host + '/trainingservice/api/update-participant', obj, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { console.log(p); }));
    };
    //compliance Reports
    TrainingService.prototype.printGESAReport = function (seq) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-gesa-report/" + seq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    TrainingService.prototype.printAICGReport = function (seq) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-aicg-report/" + seq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    // Staff 
    TrainingService.prototype.getAllStaff = function (seq) {
        return this.http.get(this.apiModel.host + '/trainingservice/api/get-participants-staff/' + seq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { return console.log(p); }));
    };
    TrainingService.prototype.addStaffForParticipants = function (obj) {
        return this.http.post(this.apiModel.host + '/trainingservice/api/save-participants-staff', obj, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { console.log(p); }));
    };
    // Add Training attendance
    TrainingService.prototype.addTrainingForPartAndStaff = function (obj) {
        return this.http.post(this.apiModel.host + '/trainingservice/api/save-tenges-atndnc', obj, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { console.log(p); }));
    };
    TrainingService.prototype.getAllTrainingAttendance = function (seq) {
        return this.http.get(this.apiModel.host + '/trainingservice/api/get-trng-atndnc/' + seq, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (p) { return console.log(p); }));
    };
    TrainingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], TrainingService);
    return TrainingService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-training-training-module.js.map