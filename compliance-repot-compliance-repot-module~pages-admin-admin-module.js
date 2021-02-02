(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["compliance-repot-compliance-repot-module~pages-admin-admin-module"],{

/***/ "./src/app/pages/admin/loan-servicing/loan-servicing.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/admin/loan-servicing/loan-servicing.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mat-cell, .mat-header-cell {\r\n    font-size: 14px;\r\n    }\r\n    \r\n    .mat-cell, .mat-footer-cell {\r\n    font-size: 13px;\r\n    }\r\n    \r\n    table {\r\n    width: 100%;\r\n    }\r\n    \r\n    th.mat-header-cell {\r\n        vertical-align: middle;\r\n    }\r\n    "

/***/ }),

/***/ "./src/app/pages/admin/loan-servicing/loan-servicing.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin/loan-servicing/loan-servicing.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-left-side-bar-admin></app-left-side-bar-admin>\r\n      </div>\r\n      <div class=\"col-md-9\">\r\n        <div class=\"content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\" *ngIf=\"allClnt?.length>0 || (this.auth.role == 'bm')\">\r\n              <div class=\"mysearchbox\" (click)=\"showField()\" *ngIf=\"!showFields\">\r\n                <h6 class=\"d-inline-block searchshow\" style=\"cursor: pointer;\">Search\r\n                  <i class=\"fa fa-search\"> </i>\r\n                </h6>\r\n              </div>\r\n              <div class=\"mysearch\" *ngIf=\"showFields\">\r\n                <form (ngSubmit)=\"applyFilter(searchVal)\" #searchForm=\"ngForm\">\r\n                  <div class=\"col-sm-10\" style=\"float:left;\">\r\n                    <mat-form-field *ngIf=\"showFields\">\r\n                      <input id=\"searchBox\" (keyup)=\"searchValue()\" autofocus matInput name=\"searchValue\"\r\n                        [(ngModel)]=\"searchVal\" placeholder=\"Search\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-sm-2\" style=\"float:right;\">\r\n                    <button class=\"btn btn-primary btn-lg\" type=\"submit\">Search</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6\" *ngIf=\"auth.role != 'bm' && auth.role != 'bdo'\">\r\n              <form [formGroup]=\"branchForm\" (ngSubmit)=\"onSubmitBranchForm()\">\r\n                <ng-select *ngIf=\"auth.role != 'bm' && auth.role != 'bdo'\" [items]=\"brnchs\" required (change)=\"onSelectBranch($event)\"\r\n                  bindLabel=\"brnchNm\" bindValue=\"brnchSeq\" name=\"brnchNm\" placeholder=\"Select Branch:\"\r\n                  formControlName=\"branch\">\r\n                </ng-select>\r\n\r\n\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"table-responsive mb-md-5\">\r\n            <table class=\"table\">\r\n              <thead class=\"thead-light\">\r\n                <tr>\r\n                  <th>Client ID</th>\r\n                  <th>Client</th>\r\n                  <th>Product</th>\r\n                  <th>Credit Amount</th>\r\n                  <th>Charges</th>\r\n                  <th>Paid Amount</th>\r\n                  <th>Remaining Amount</th>\r\n                  <th>Status</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let clnt of allClnt\">\r\n                  <td>{{clnt.clntId}}</td>\r\n                  <td><a href=\"#\">{{clnt.frstNm}} {{clnt.lastNm}}</a></td>\r\n                  <td>{{clnt.prd}}</td>\r\n                  <td>{{clnt.loanAmt| currency:'PKR':''}}</td>\r\n                  <td>{{clnt.sercvChrgs| currency:'PKR':''}}</td>\r\n                  <td>{{clnt.rcvdAmt| currency:'PKR':''}}</td>\r\n                  <td>{{(clnt.loanAmt+clnt.sercvChrgs)-clnt.rcvdAmt| currency:'PKR':''}}</td>\r\n                  <td class=\"colorGreen\">Active</td>\r\n                  <td>\r\n                    <a *ngIf=\"clnt.dthRptSeq==0\" (click)=\"reSchedule(clnt)\" class=\"iconBtn\" data-toggle=\"tooltip\" title=\"Credit Rescheduling\"><img\r\n                        src=\"assets/images/icon7.png\" alt=\"\"></a>\r\n\r\n                    <span href=\"#\" data-toggle=\"modal\" data-target=\"#cmmoncodes\" class=\"iconBtn\"><img src=\"assets/images/taging-icon.png\"\r\n                        alt=\"\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tagging\"></span>\r\n\r\n                    <a *ngIf=\"clnt.dthRptSeq==0\" (click)=\"reportDeath(clnt)\" class=\"iconBtn\" data-toggle=\"tooltip\"\r\n                      title=\"Report Death\"><img src=\"assets/images/report-icon.png\" alt=\"\"></a>\r\n\r\n                    <a *ngIf=\"clnt.dthRptSeq!=0 && clnt.paid==false\" (click)=\"payPeportDeath(clnt)\" class=\"iconBtn\"\r\n                      data-toggle=\"tooltip\" title=\"Pay Funeral Claims\"><img src=\"assets/images/rsedite.png\" alt=\"\"></a>\r\n\r\n                    <a *ngIf=\"clnt.paid\" (click)=\"printHealthCard(clnt.clntSeq)\" class=\"iconBtn\" data-toggle=\"tooltip\"\r\n                      title=\"Print\"><img src=\"assets/images/print-icon.png\" alt=\"\"></a>\r\n\r\n                    <a *ngIf=\"clnt.paid && clnt.post\"  (click)=\"adjustLoan(clnt)\" class=\"iconBtn\"><img src=\"assets/images/rsgrey-icon.png\" alt=\"\"  data-toggle=\"tooltip\" title=\"Loan Adjustment\"></a>\r\n                    <span href=\"#\" data-toggle=\"modal\" data-target=\"#ClaimInsurance\" class=\"iconBtn\"><img src=\"assets/images/submit-icon.png\"\r\n                        alt=\"\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Submit\"></span>\r\n                  </td>\r\n                </tr>\r\n\r\n\r\n              </tbody>\r\n            </table>\r\n          </div> -->\r\n\r\n\r\n\r\n          <!---- DATA TABLES---->\r\n\r\n          <div class=\"table-responsive\">\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"table\" multiTemplateDataRows matSort>\r\n\r\n              <!-- Client ID Column -->\r\n              <ng-container matColumnDef=\"clntId\">\r\n                <th width=\"14%\" mat-header-cell *matHeaderCellDef mat-sort-header>Client ID</th>\r\n                <td width=\"14%\" mat-cell *matCellDef=\"let clnt\">{{clnt.clntId}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Client Column -->\r\n              <ng-container matColumnDef=\"frstNm\">\r\n                <th width=\"14%\" mat-header-cell *matHeaderCellDef mat-sort-header>Client</th>\r\n                <td width=\"14%\" mat-cell *matCellDef=\"let clnt\">{{clnt.frstNm}} {{clnt.lastNm}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Product Column -->\r\n              <ng-container matColumnDef=\"prd\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Product</th>\r\n                <td mat-cell *matCellDef=\"let clnt\">{{clnt.prd}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Credit Amount Column -->\r\n              <ng-container matColumnDef=\"loanAmt\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Credit Amount</th>\r\n                <td mat-cell *matCellDef=\"let clnt\">{{clnt.loanAmt| currency:'PKR':''}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Charges Column -->\r\n              <ng-container matColumnDef=\"sercvChrgs\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Charges</th>\r\n                <td mat-cell *matCellDef=\"let clnt\">{{clnt.sercvChrgs| currency:'PKR':''}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Paid Amount Column -->\r\n              <ng-container matColumnDef=\"rcvdAmt\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Paid Amount</th>\r\n                <td mat-cell *matCellDef=\"let clnt\">{{clnt.rcvdAmt| currency:'PKR':''}}</td>\r\n              </ng-container>\r\n\r\n              <!-- Remaining Amount Column -->\r\n              <ng-container matColumnDef=\"remainingamount\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Remaining Amount</th>\r\n                <td mat-cell *matCellDef=\"let clnt\">{{(clnt.loanAmt+clnt.sercvChrgs)-clnt.rcvdAmt| currency:'PKR':''}}\r\n                </td>\r\n              </ng-container>\r\n\r\n              <!-- Status Column -->\r\n              <ng-container matColumnDef=\"status\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r\n                <td mat-cell *matCellDef=\"let clnt\" class=\"colorGreen\">Active</td>\r\n              </ng-container>\r\n\r\n              <!-- Action Column -->\r\n              <ng-container matColumnDef=\"action\">\r\n                <th width=\"15%\" mat-header-cell *matHeaderCellDef>Action</th>\r\n                <td width=\"15%\" mat-cell *matCellDef=\"let clnt\">\r\n\r\n                  <!-- <a *ngIf=\"clnt.dthRptSeq==0 && (auth.role=='ho' || auth.role=='admin')\" (click)=\"reSchedule(clnt)\"\r\n                    class=\"iconBtn\" data-toggle=\"tooltip\" title=\"Credit Rescheduling\"><img src=\"assets/images/icon7.png\"\r\n                      alt=\"\"></a> -->\r\n\r\n                  <span (click)=\"onClntTagClick(clnt)\" class=\"iconBtn\"><img src=\"assets/images/taging-icon.png\" alt=\"\"\r\n                      data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tagging\"></span>\r\n\r\n                  <a *ngIf=\"clnt.dthRptSeq==0\" (click)=\"reportDeath(clnt)\" class=\"iconBtn\" data-toggle=\"tooltip\"\r\n                    title=\"Report Death\"><img src=\"assets/images/report-icon.png\" alt=\"\"></a>\r\n\r\n                  <a *ngIf=\"clnt.dthRptSeq!=0 && clnt.paid==false\" (click)=\"payPeportDeath(clnt)\" class=\"iconBtn\"\r\n                    data-toggle=\"tooltip\" title=\"Pay Funeral Claims\"><img src=\"assets/images/rsedite.png\" alt=\"\"></a>\r\n\r\n                  <a *ngIf=\"(clnt.paid && clnt.post) && (auth.role=='ho' || auth.role=='admin')\"\r\n                    (click)=\"reverseFunralPayment(clnt)\" class=\"iconBtn infoBtn\" data-toggle=\"tooltip\"\r\n                    title=\"Revert Funral\"> <i class=\"fa fa-undo\"></i></a>\r\n\r\n                  <a *ngIf=\"clnt.paid\" (click)=\"printHealthCard(clnt.clntSeq)\" class=\"iconBtn\" data-toggle=\"tooltip\"\r\n                    title=\"Print\"><img src=\"assets/images/print-icon.png\" alt=\"\"></a>\r\n\r\n                  <a *ngIf=\"(clnt.dthRptSeq!=0 && !clnt.paid) && (auth.role=='ho' || auth.role=='admin')\"\r\n                    (click)=\"reverseClnt(clnt)\" class=\"iconBtn delBtn\" data-toggle=\"tooltip\" title=\"Revert\"> <i\r\n                      class=\"fa fa-undo\"></i></a>\r\n\r\n                  <a *ngIf=\"clnt.paid && clnt.post\" (click)=\"adjustLoan(clnt)\" class=\"iconBtn\"><img\r\n                      src=\"assets/images/rsgrey-icon.png\" alt=\"\" data-toggle=\"tooltip\" title=\"Loan Adjustment\"></a>\r\n                  <!-- <span href=\"#\" data-toggle=\"modal\" data-target=\"#ClaimInsurance\" class=\"iconBtn\"><img\r\n                      src=\"assets/images/submit-icon.png\" alt=\"\" data-toggle=\"tooltip\" data-placement=\"top\"\r\n                      title=\"Submit\"></span> -->\r\n                  <span class=\"iconBtn\" *ngIf=\"clnt.prdId.includes('0016')\"><a>\r\n                      <i class=\"fa fa-paw\" [routerLink]=\"['/admin/animal-death',clnt.clntSeq]\" aria-hidden=\"true\"\r\n                        data-toggle=\"tooltip\" data-p lacement=\"top\" title=\"Report Animal Death\"></i></a>\r\n                  </span>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"thead-light thead-blue\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n\r\n            <mat-paginator [length]=\"datalength\"  [pageSizeOptions]=\"[10, 15, 20]\" showFirstLastButtons></mat-paginator>\r\n          </div>\r\n\r\n\r\n          <div class=\"modal fade\" id=\"AdjustLoan\" role=\"dialog\">\r\n            <div class=\"modal-dialog smallpop mymodal\">\r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Adjust Credit</h5>\r\n                </div>\r\n                <form [formGroup]=\"adjustLoanForm\" (ngSubmit)=\"submitAdjustLoan()\">\r\n                  <div class=\"modal-body\">\r\n                    <div class=\"cRow mt-2\">\r\n                      <input type=\"hidden\" formControlName=\"clntSeq\" />\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Client Id:\" formControlName=\"clntId\">\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Client:\" formControlName=\"clntNm\">\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Loan Amount:\" formControlName=\"loanAmt\">\r\n                        </mat-form-field>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"modal-footer text-center\">\r\n                    <button appNoDblClick type=\"button\" (click)=\"submitAdjustLoan()\"\r\n                      class=\"btn btn-primary btn-min\">OK</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"modal fade\" id=\"ClaimInsurance\" role=\"dialog\">\r\n            <div class=\"modal-dialog smallpop mymodal\">\r\n\r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Submit Claim Insurance</h5>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <ul class=\"infolist infolistblock mt-1 mb-1\">\r\n                    <li>Client: <span>Shabnam</span></li>\r\n                    <li>Address: <span>Client Address will be placed here.</span></li>\r\n                    <li>Credit Amount:<span>30,000</span></li>\r\n                    <li>Disbursement Date: <span> 05/05/2018</span></li>\r\n                    <li>Total Principle :<span> 30,000</span></li>\r\n                    <li>Total Charges : <span>3 0,000</span></li>\r\n                    <li>Remaining Principle : <span> 10,000</span></li>\r\n                    <li>Remaining Charges : <span>10,000</span></li>\r\n                  </ul>\r\n\r\n\r\n                  <div class=\"cRow mt-3\">\r\n                    <div class=\"cCol4\">\r\n                      <label>Adjust Principle Amount:</label>\r\n                      <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"cCol4 \">\r\n                      <label>Adjust Charges:</label>\r\n                      <input type=\"text\" class=\"form-control\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"modal-footer text-center\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">OK</button>\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"modal fade\" id=\"cmmoncodes\" role=\"dialog\">\r\n            <div class=\"modal-dialog mymodal\">\r\n\r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Taging</h5>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <ul class=\"infolist infolistblock mt-1 mb-1\">\r\n                    <li>Client: <span>{{tagClient?.firstName}} {{tagClient?.lastName}}</span></li>\r\n                    <li> Address: <span>House No. {{tagClient?.houseNum}}, {{tagClient?.sreet_area}}\r\n                        {{tagClient?.cityName}}.</span></li>\r\n                    <li> Credit Amount: <span> {{clnt?.loanAmt}}</span></li>\r\n                  </ul>\r\n\r\n                  <mat-radio-group [(ngModel)]=\"taggedSeq\" name=\"disableFlag\" required>\r\n                    <mat-radio-button class=\"w-50\" *ngFor=\"let disFlag of tags\" [value]=\"disFlag.tagsSeq\">\r\n                      {{disFlag.tagNm}}</mat-radio-button>\r\n                  </mat-radio-group>\r\n\r\n                  <!-- <div class=\"checkbox mb-1 mt-4\">\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                      <input type=\"radio\" id=\"checkbox2\" name=\"coBorrower\" class=\"custom-control-input\">\r\n                      <label class=\"custom-control-label\" for=\"checkbox2\"> Block List</label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"checkbox mb-1\">\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                      <input type=\"radio\" id=\"checkbox3\" name=\"coBorrower\" class=\"custom-control-input\">\r\n                      <label class=\"custom-control-label\" for=\"checkbox3\"> Opportunist</label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"checkbox mb-1\">\r\n                    <div class=\"custom-control custom-checkbox\">\r\n                      <input type=\"radio\" id=\"checkbox4\" name=\"coBorrower\" class=\"custom-control-input\">\r\n                      <label class=\"custom-control-label\" for=\"checkbox4\"> Danger</label>\r\n                    </div>\r\n                  </div> -->\r\n                </div>\r\n                <div class=\"modal-footer text-center\">\r\n                  <button appNoDblClick type=\"button\" class=\"btn btn-primary btn-min\"\r\n                    (click)=\"onTagSubmit()\">OK</button>\r\n                  <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal fade\" id=\"reSchedule\" role=\"dialog\">\r\n            <div class=\"modal-dialog mymodal\">\r\n\r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Credit Rescheduling</h5>\r\n                </div>\r\n                <form [formGroup]=\"reScheduleForm\" (ngSubmit)=\"submitReschedule()\">\r\n                  <div class=\"modal-body\">\r\n                    <div class=\"cRow mt-2\">\r\n                      <input type=\"hidden\" formControlName=\"clntSeq\" />\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Client Id:\" formControlName=\"clntId\">\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Client:\" formControlName=\"clntNm\">\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Credit Amount:\" formControlName=\"loanAmt\">\r\n                        </mat-form-field>\r\n                      </div>\r\n\r\n                    </div>\r\n                    <div class=\"cRow mt-2\">\r\n\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <input type=\"number\" matInput placeholder=\"Days add to Payment Schedule\"\r\n                            formControlName=\"days\">\r\n                        </mat-form-field>\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"modal-footer text-center\">\r\n                    <button type=\"button\" appNoDblClick (click)=\"submitReschedule()\"\r\n                      class=\"btn btn-primary btn-min\">OK</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"modal fade\" id=\"ReportDeath\" role=\"dialog\">\r\n            <div class=\"modal-dialog mymodal\">\r\n\r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Report Death</h5>\r\n                </div>\r\n                <form [formGroup]=\"deathForm\" (ngSubmit)=\"submitDeathReport()\">\r\n                  <div class=\"modal-body\">\r\n                    <div class=\"cRow mt-2\">\r\n                      <input type=\"hidden\" formControlName=\"clntSeq\" />\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Client Id:\" formControlName=\"clntId\">\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Client:\" formControlName=\"clntNm\">\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Credit Amount:\" formControlName=\"loanAmt\">\r\n                        </mat-form-field>\r\n                      </div>\r\n\r\n                    </div>\r\n                    <div class=\"cRow mt-2\">\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-radio-group name=\"gender\" required formControlName=\"gender\">\r\n                          <mat-radio-button class=\"w-50\" [value]=\"0\">Client</mat-radio-button>\r\n                          <mat-radio-button *ngIf=\"client!=null && client.relTypFlg==1\" class=\"w-50\" [value]=\"1\">Nominee\r\n                          </mat-radio-button>\r\n                        </mat-radio-group>\r\n                      </div>\r\n\r\n\r\n                    </div>\r\n\r\n                    <div class=\"cRow mt-2\">\r\n\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <input matInput required [min]=\"minDate\" [max]=\"maxDate\" formControlName=\"deathDt\"\r\n                            placeholder=\"Date of Death:\" [matDatepicker]=\"picker1\" disabled readonly />\r\n                          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                          <mat-datepicker required #picker1 disabled=\"false\"></mat-datepicker>\r\n                        </mat-form-field>\r\n\r\n                      </div>\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <mat-select placeholder=\"Cause of Death:\" formControlName=\"dethCase\" name=\"dethCase\">\r\n                            <mat-option *ngFor=\"let edu of causeOfDeath\" [value]=\"edu.codeValue\">\r\n                              {{edu.codeValue}}\r\n                            </mat-option>\r\n                          </mat-select>\r\n                        </mat-form-field>\r\n                        <!-- <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Cause of Death:\" formControlName=\"dethCase\">\r\n                        </mat-form-field> -->\r\n                      </div>\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Death Certifications:\" formControlName=\"deathcertf\">\r\n\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"modal-footer text-center\">\r\n                    <button type=\"button\" appNoDblClick (click)=\"submitDeathReport()\"\r\n                      class=\"btn btn-primary btn-min\" [disabled]=\"!deathForm.valid\">OK</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"modal fade\" id=\"payReportDeath\" role=\"dialog\">\r\n            <div class=\"modal-dialog mymodal\">\r\n\r\n              <!-- Modal content-->\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">Pay Funral Claims</h5>\r\n                </div>\r\n                <form [formGroup]=\"funralForm\" (ngSubmit)=\"submitFunralClaims()\">\r\n                  <div class=\"modal-body\">\r\n                    <div class=\"cRow mt-2\">\r\n                      <input type=\"hidden\" formControlName=\"dthRptSeq\" />\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Client Id:\" formControlName=\"clntId\">\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Client:\" formControlName=\"clntNm\">\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Amount:\" formControlName=\"amt\" readonly>\r\n                        </mat-form-field>\r\n                      </div>\r\n\r\n                    </div>\r\n                    <div class=\"cRow mt-2\">\r\n                      <div class=\"cCol3-col\">\r\n                        <mat-form-field>\r\n                          <mat-select placeholder=\"Institution Name:\" (selectionChange)=\"onRecoveryChange()\"\r\n                            formControlName=\"rcvryTypsSeq\" name=\"rcvryTypsSeq\">\r\n                            <mat-option *ngFor=\"let edu of tempInstituteArray\" [value]=\"edu\">\r\n                              {{edu.typStr}}\r\n                            </mat-option>\r\n                          </mat-select>\r\n                          <mat-error *ngIf=\"funralForm.controls.rcvryTypsSeq.errors?.required\">\r\n                            Institution Name is <strong>required</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"cCol3-col\" *ngIf=\"!isCash\">\r\n\r\n                        <mat-form-field>\r\n                          <input type=\"text\" matInput placeholder=\"Instrument Number:\" formControlName=\"instr\">\r\n                          <mat-error *ngIf=\"funralForm.controls.instr.errors?.required\">\r\n                            instrument number is <strong>required</strong>\r\n                          </mat-error>\r\n                          <mat-error *ngIf=\"funralForm.controls.instr.errors?.maxlength\">\r\n                            instrument number length should be <strong>20 characters</strong>\r\n                          </mat-error>\r\n                          <mat-error *ngIf=\"funralForm.controls.instr.errors?.minlength\">\r\n                            instrument number length should be <strong>20 characters</strong>\r\n                          </mat-error>\r\n                          <mat-error *ngIf=\"funralForm.controls.instr.errors?.pattern\">\r\n                            only number are <strong>allowed</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n\r\n                      </div>\r\n\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"modal-footer text-center\">\r\n                    <button type=\"button\" appNoDblClick (click)=\"submitFunralClaims()\"\r\n                      class=\"btn btn-primary btn-min\">Pay</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<div class=\"modal fade\" id=\"reverseClnt\" role=\"dialog\">\r\n  <div class=\"modal-dialog mymodal\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Reverse Death</h5>\r\n      </div>\r\n      <form class=\"md-float-material\" [formGroup]=\"reverseForm\" (ngSubmit)=\"onSubmitReverseClnt()\">\r\n        <input type=\"hidden\" formControlName=\"dthRptSeq\" />\r\n        <div class=\"modal-body\">\r\n          <div class=\"cRow\">\r\n            <div class=\"cCol6\">\r\n              <mat-form-field>\r\n                <input matInput required formControlName=\"cmnt\" placeholder=\"Remarks:\" />\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer text-center\">\r\n          <button type=\"button\" appNoDblClick (click)=\"onSubmitReverseClnt()\" class=\"btn btn-primary\">Ok</button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-min\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/loan-servicing/loan-servicing.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/admin/loan-servicing/loan-servicing.component.ts ***!
  \************************************************************************/
/*! exports provided: MY_FORMATS, LoanServicingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanServicingComponent", function() { return LoanServicingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_loan_servicing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/loan-servicing.service */ "./src/app/shared/services/loan-servicing.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/recovery.service */ "./src/app/shared/services/recovery.service.ts");
/* harmony import */ var src_app_shared_models_paymentType_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/paymentType.model */ "./src/app/shared/models/paymentType.model.ts");
/* harmony import */ var src_app_shared_models_expense_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/models/expense.model */ "./src/app/shared/models/expense.model.ts");
/* harmony import */ var src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/reports.service */ "./src/app/shared/services/reports.service.ts");
/* harmony import */ var src_app_shared_services_paymentTypes_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/paymentTypes.service */ "./src/app/shared/services/paymentTypes.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_shared_services_expense_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/expense.service */ "./src/app/shared/services/expense.service.ts");
/* harmony import */ var src_app_shared_services_tags_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/tags.service */ "./src/app/shared/services/tags.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var moment = moment__WEBPACK_IMPORTED_MODULE_5__;
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
var LoanServicingComponent = /** @class */ (function () {
    function LoanServicingComponent(loanServicingService, fb, recoveryService, paymentTypesService, reportsService, expenseService, tagsService, spinner, commonService, toaster) {
        this.loanServicingService = loanServicingService;
        this.fb = fb;
        this.recoveryService = recoveryService;
        this.paymentTypesService = paymentTypesService;
        this.reportsService = reportsService;
        this.expenseService = expenseService;
        this.tagsService = tagsService;
        this.spinner = spinner;
        this.commonService = commonService;
        this.toaster = toaster;
        this.auth = JSON.parse(sessionStorage.getItem("auth"));
        this.isCash = false;
        this.tempInstituteArray = [];
        this.datalength = 0;
        this.lastPageIndex = 0;
        this.filterValue = "";
        this.searchVal = "";
        this.isCount = true;
        this.brnchs = [];
        this.showFields = false;
        this.deathForm = this.fb.group({
            clntId: [''],
            clntSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            clntNm: [''],
            loanAmt: [''],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            deathDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dethCase: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            deathcertf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.funralForm = this.fb.group({
            clntId: [''],
            dthRptSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            clntNm: [''],
            amt: [''],
            rcvryTypsSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            instr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)])],
        });
        this.reScheduleForm = this.fb.group({
            clntId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            clntSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            clntNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            loanAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            days: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.adjustLoanForm = this.fb.group({
            clntId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            clntSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            clntNm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            loanAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    LoanServicingComponent.prototype.applyFilter = function (filterValue) {
        this.filterValue = filterValue;
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.datalength = this.countBeforeFilter;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            return;
        }
        this.getFilteredData(filterValue.trim().toLowerCase());
    };
    LoanServicingComponent.prototype.searchValue = function () {
        var _this = this;
        this.filterValue = this.searchVal.trim();
        if (this.filterValue.length == 0) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"](this.dataBeforeFilter);
            this.dataSource.paginator = this.paginator;
            this.dataSource.paginator.pageIndex = 0;
            this.lastPageIndex = this.lastPageIndexBeforeFilter;
            this.datalength = 0;
            setTimeout(function () { _this.datalength = _this.countBeforeFilter; }, 200);
            console.log(this.datalength, this.countBeforeFilter);
            return;
        }
    };
    LoanServicingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.displayedColumns = ['clntId', 'frstNm', 'prd', 'loanAmt', 'sercvChrgs', 'rcvdAmt', 'remainingamount', 'status', 'action'];
        this.temp = new src_app_shared_models_paymentType_model__WEBPACK_IMPORTED_MODULE_7__["PaymentType"]();
        this.temp.typId = '0424';
        this.temp.typCtgryKey = 2;
        this.expenseService.getPaymentModes().subscribe(function (data) {
            _this.tempInstituteArray = data;
        });
        this.temp.brnchSeq = 0;
        this.paymentTypesService.getTypeByIdAndCtgry(this.temp).subscribe(function (d) {
            _this.temp = d;
        });
        this.reverseForm = this.fb.group({
            dthRptSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cmnt: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9a-zA-Z ]+$")]],
        });
        this.tagsService.getTags().subscribe(function (res) {
            _this.tags = res;
            if (_this.auth.role != 'admin') {
                for (var _i = 0, _a = _this.tags; _i < _a.length; _i++) {
                    var tg = _a[_i];
                    if (tg.tagId === '0005') {
                        _this.tags.splice(_this.tags.indexOf(tg), 1);
                        break;
                    }
                }
            }
        });
        this.commonService.getValues("0278").subscribe(function (res) {
            _this.causeOfDeath = res;
        }, function (error) {
            console.log('err', error);
        });
        this.branchForm = this.fb.group({
            branch: this.auth.emp_branch,
        });
        if (this.auth.role != 'bm' && this.auth.role != 'bdo') {
            this.toaster.info('Please Select Branch', 'Information');
            this.commonService.getBrnchsForUsr().subscribe(function (res) {
                _this.brnchs = res;
                console.log(res);
            });
        }
        else {
            this.loadData();
        }
    };
    LoanServicingComponent.prototype.onSelectBranch = function () {
        this.loadData();
    };
    LoanServicingComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["tap"])(function () { return _this.loadSelectBranch(); }))
            .subscribe();
    };
    LoanServicingComponent.prototype.loadData = function () {
        var _this = this;
        this.isCount = true;
        this.allClnt = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"](this.allClnt);
        this.paginator.pageIndex = 0;
        this.dataSource.paginator = this.paginator;
        this.searchVal = '';
        this.lastPageIndex = 0;
        this.filterValue = '';
        if (this.branchForm.controls['branch'].value == null || this.branchForm.controls['branch'].value == 0) {
            this.allClnt = [];
            this.dataSource = null;
            this.datalength = 0;
            return;
        }
        setTimeout(function () { _this.spinner.show(); }, 10);
        this.loanServicingService.getAllClnts(this.branchForm.controls['branch'].value, this.paginator.pageIndex, 10, "", this.isCount).subscribe(function (response) {
            _this.allClnt = response.clnts;
            _this.spinner.hide();
            if (_this.allClnt.length <= 0 && _this.auth.role != 'bm' && _this.branchForm.controls['branch'].value != 0) {
                _this.toaster.info('No Data Found Against This Branch', 'Information');
            }
            ;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"](_this.allClnt);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = response.count;
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
            console.log('err All Clnts Service');
            console.log('err', error);
        });
    };
    LoanServicingComponent.prototype.getFilteredData = function (filterValue) {
        var _this = this;
        this.isCount = true;
        this.paginator.pageIndex = 0;
        this.lastPageIndex = 0;
        setTimeout(function () { _this.spinner.show(); }, 10);
        this.loanServicingService.getAllClnts(this.branchForm.controls['branch'].value, this.paginator.pageIndex, this.paginator.pageSize, filterValue, this.isCount).subscribe(function (response) {
            _this.allClnt = response.clnts;
            _this.spinner.hide();
            if (_this.allClnt.length <= 0 && _this.branchForm.controls['branch'].value != 0) {
                _this.toaster.info('No Data Found Against This Search', 'Information');
            }
            ;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"](_this.allClnt);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.datalength = response.count;
        }, function (error) {
            _this.spinner.hide();
            console.log('err All Clnts Service');
            console.log('err', error);
        });
    };
    LoanServicingComponent.prototype.loadSelectBranch = function () {
        var _this = this;
        this.isCount = false;
        if (this.paginator.pageIndex < this.lastPageIndex)
            return;
        if (this.dataSource.paginator.length == this.dataSource.data.length)
            return;
        if (((this.paginator.pageIndex + 1) * this.paginator.pageSize) - this.dataSource.data.length > 0) {
            setTimeout(function () { _this.spinner.show(); }, 10);
            this.loanServicingService.getAllClnts(this.branchForm.controls['branch'].value, this.paginator.pageIndex, this.paginator.pageSize, this.filterValue, this.isCount).subscribe(function (response) {
                _this.allClnt = response.clnts;
                _this.spinner.hide();
                if (_this.allClnt.length <= 0 && _this.auth.role != 'bm' && _this.branchForm.controls['branch'].value != 0) {
                    _this.toaster.info('No Data Found Against This Branch', 'Information');
                }
                ;
                _this.lastPageIndex = _this.lastPageIndex + 1;
                _this.dataSource.data = _this.dataSource.data.concat(_this.allClnt);
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
                console.log('err All Expense Service');
                console.log('err', error);
            });
        }
    };
    LoanServicingComponent.prototype.onClntTagClick = function (obj) {
        var _this = this;
        console.log(obj);
        this.clnt = obj;
        this.taggedSeq = null;
        this.spinner.show();
        this.loanServicingService.getClntTagForCnic;
        this.loanServicingService.getClientBySeq(obj.clntSeq).subscribe(function (res) {
            _this.loanServicingService.getClntTagForCnic(res.cnicNum).subscribe(function (tag) {
                _this.spinner.hide();
                _this.tagClient = res;
                $('#cmmoncodes').modal('show');
                if (tag.mwClntTagList != null || tag.mwClntTagList != undefined)
                    _this.taggedSeq = tag.mwClntTagList.tagsSeq;
            }, function (error) {
                _this.spinner.hide();
                _this.toaster.error("Something Went Wrong");
            });
        }, function (error) {
            _this.spinner.hide();
            _this.toaster.error("Something Went Wrong");
        });
    };
    LoanServicingComponent.prototype.onTagSubmit = function () {
        var _this = this;
        this.spinner.show();
        this.loanServicingService.addClntTagForCnic(this.tagClient.cnicNum, this.taggedSeq).subscribe(function (res) {
            $('#cmmoncodes').modal('hide');
            _this.toaster.success("Tagged");
        }, function (error) {
            _this.spinner.hide();
            _this.toaster.error("Something Went Wrong");
        });
    };
    LoanServicingComponent.prototype.reportDeath = function (clnt) {
        $('#ReportDeath').modal('show');
        this.client = null;
        this.client = clnt;
        console.log(this.client);
        console.log(this.client['disDate']);
        this.minDate = new Date(this.client['disDate']);
        this.maxDate = new Date();
        this.deathForm = this.fb.group({
            clntId: [{ value: clnt.clntId, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            clntSeq: [clnt.clntSeq, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            clntNm: [{ value: clnt.frstNm + ' ' + clnt.lastNm, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            loanAmt: [{ value: clnt.loanAmt, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            deathDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dethCase: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            deathcertf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoanServicingComponent.prototype.payPeportDeath = function (clnt) {
        $('#payReportDeath').modal('show');
        this.client = null;
        this.client = clnt;
        this.ls = clnt;
        this.funralForm.reset();
        this.funralForm = this.fb.group({
            clntId: [{ value: clnt.clntId, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dthRptSeq: [clnt.dthRptSeq, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            clntNm: [{ value: clnt.frstNm + ' ' + clnt.lastNm, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            amt: [{ value: clnt.amt, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rcvryTypsSeq: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            instr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)])],
        });
    };
    LoanServicingComponent.prototype.submitDeathReport = function () {
        var _this = this;
        this.spinner.show();
        if (!this.deathForm.valid) {
            return;
        }
        $('#ReportDeath').modal('hide');
        this.deathForm.controls['deathDt'].setValue(moment.parseZone(this.deathForm.controls['deathDt'].value.format('YYYY-MM-DDTHH:mm:ss')));
        this.loanServicingService.reportDeath(this.deathForm.value).subscribe(function (d) {
            _this.spinner.hide();
            _this.toaster.success("Saved");
            _this.client.dthRptSeq = d.expSeq.dthRptSeq;
            _this.client.amt = d.expSeq.amt;
            _this.client.paid = false;
        }, function (error) {
            _this.spinner.hide();
            if (error.status === 400)
                _this.toaster.error(error.error.error);
            else
                _this.toaster.error("Something went wrong!");
            console.log(error);
        });
    };
    LoanServicingComponent.prototype.submitFunralClaims = function () {
        var _this = this;
        $('#payReportDeath').modal('hide');
        this.client.paid = true;
        this.exp = new src_app_shared_models_expense_model__WEBPACK_IMPORTED_MODULE_8__["Expense"]();
        var instr = this.funralForm.get('instr').value;
        var rcvryTypsSeq = this.funralForm.get('rcvryTypsSeq').value.typSeq;
        this.exp.pymtTypSeq = rcvryTypsSeq;
        this.exp.brnchSeq = this.ls.brnchSeq;
        this.exp.expnsDscr = this.temp.typStr;
        this.exp.instrNum = instr;
        this.exp.expnsAmt = this.ls.amt;
        this.exp.expnsStsKey = 200;
        this.exp.expnsTypSeq = this.temp.typSeq;
        this.exp.expRef = this.ls.clntSeq;
        this.exp.pymtRctFlg = 1;
        this.loanServicingService.payReportDeath(this.exp).subscribe(function (d) {
            _this.printHealthCard(_this.ls.clntSeq);
        });
    };
    LoanServicingComponent.prototype.reSchedule = function (clnt) {
        $('#reSchedule').modal('show');
        this.reScheduleForm = this.fb.group({
            clntId: [{ value: clnt.clntId, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            clntSeq: [clnt.clntSeq, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            clntNm: [{ value: clnt.frstNm + ' ' + clnt.lastNm, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            loanAmt: [{ value: clnt.loanAmt, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            days: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoanServicingComponent.prototype.submitReschedule = function () {
        $('#reSchedule').modal('hide');
        var clntSeq = this.reScheduleForm.get('clntSeq').value;
        var days = this.reScheduleForm.get('days').value;
        this.loanServicingService.reschedule(1, clntSeq, days).subscribe(function (d) {
        });
    };
    LoanServicingComponent.prototype.printHealthCard = function (clntSeq) {
        this.reportsService.printInsuClmForm(clntSeq).subscribe(function (response) {
            var binaryData = [];
            binaryData.push(response);
            var fileURL = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
            window.open(fileURL, '_blank');
        });
    };
    LoanServicingComponent.prototype.adjustLoan = function (clnt) {
        $('#AdjustLoan').modal('show');
        this.client = null;
        this.client = clnt;
        this.adjustLoanForm = this.fb.group({
            clntId: [{ value: clnt.clntId, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            clntSeq: [clnt.clntSeq, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            clntNm: [{ value: clnt.frstNm + ' ' + clnt.lastNm, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            loanAmt: [{ value: clnt.loanAmt + clnt.sercvChrgs - clnt.rcvdAmt, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    LoanServicingComponent.prototype.reverseClnt = function (clnt) {
        $('#reverseClnt').modal('show');
        this.client = null;
        this.client = clnt;
        console.log(this.client);
        this.reverseForm.patchValue(clnt);
    };
    LoanServicingComponent.prototype.onSubmitReverseClnt = function () {
        var _this = this;
        $('#reverseClnt').modal('hide');
        this.reverseForm.value.cmnt == null ? ' ' : this.reverseForm.value.cmnt;
        this.loanServicingService.reversReportDeath(this.reverseForm.value.dthRptSeq, this.reverseForm.value.cmnt).subscribe(function (d) {
            _this.client.dthRptSeq = 0;
        });
    };
    LoanServicingComponent.prototype.submitAdjustLoan = function () {
        var _this = this;
        $('#AdjustLoan').modal('hide');
        setTimeout(function () { return _this.spinner.show(); }, 5);
        var clntSeq = this.adjustLoanForm.get('clntSeq').value;
        this.loanServicingService.loanAdjustment(clntSeq).subscribe(function (d) {
            var index = _this.allClnt.findIndex(function (c) { return c.clntSeq === _this.client.clntSeq; });
            _this.allClnt.splice(index, 1);
            _this.spinner.hide();
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"](_this.allClnt);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
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
    LoanServicingComponent.prototype.onRecoveryChange = function () {
        var instr = this.funralForm.get('instr');
        if (this.funralForm.get('rcvryTypsSeq').value.typId === '0001') {
            this.isCash = true;
            instr.clearValidators();
        }
        else {
            this.isCash = false;
            instr.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]));
        }
        instr.updateValueAndValidity();
    };
    LoanServicingComponent.prototype.showField = function () {
        this.showFields = true;
    };
    LoanServicingComponent.prototype.closeField = function () {
        this.showFields = false;
    };
    LoanServicingComponent.prototype.reverseFunralPayment = function (clnt) {
        var _this = this;
        console.log(clnt);
        var exp = new src_app_shared_models_expense_model__WEBPACK_IMPORTED_MODULE_8__["Expense"]();
        exp.expSeq = clnt.expSeq;
        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default()({
            title: 'Are you sure?',
            text: 'Are you sure you want to Reverse Funral Payment?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Reverse it!'
        }).then(function (result) {
            if (result.value) {
                _this.expenseService.reverseExpense(exp).subscribe(function (data) {
                    clnt.paid = false;
                    clnt.post = false;
                    _this.toaster.success("Funeral Charges Reversed");
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
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSort"])
    ], LoanServicingComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"])
    ], LoanServicingComponent.prototype, "paginator", void 0);
    LoanServicingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loan-servicing',
            template: __webpack_require__(/*! ./loan-servicing.component.html */ "./src/app/pages/admin/loan-servicing/loan-servicing.component.html"),
            styles: [__webpack_require__(/*! ./loan-servicing.component.css */ "./src/app/pages/admin/loan-servicing/loan-servicing.component.css")],
            providers: [
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
            ],
        }),
        __metadata("design:paramtypes", [src_app_shared_services_loan_servicing_service__WEBPACK_IMPORTED_MODULE_1__["LoanServicingService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shared_services_recovery_service__WEBPACK_IMPORTED_MODULE_6__["RecoveryService"],
            src_app_shared_services_paymentTypes_service__WEBPACK_IMPORTED_MODULE_10__["PaymentTypesService"],
            src_app_shared_services_reports_service__WEBPACK_IMPORTED_MODULE_9__["ReportsService"],
            src_app_shared_services_expense_service__WEBPACK_IMPORTED_MODULE_13__["ExpenseService"],
            src_app_shared_services_tags_service__WEBPACK_IMPORTED_MODULE_14__["TagsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_15__["NgxSpinnerService"],
            src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_17__["CommonService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrService"]])
    ], LoanServicingComponent);
    return LoanServicingComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/paymentType.model.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/models/paymentType.model.ts ***!
  \****************************************************/
/*! exports provided: PaymentType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentType", function() { return PaymentType; });
var PaymentType = /** @class */ (function () {
    function PaymentType() {
    }
    return PaymentType;
}());



/***/ }),

/***/ "./src/app/shared/services/loan-servicing.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/loan-servicing.service.ts ***!
  \***********************************************************/
/*! exports provided: LoanServicingService, LoanServicing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanServicingService", function() { return LoanServicingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanServicing", function() { return LoanServicing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Api_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Api.model */ "./src/app/shared/models/Api.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoanServicingService = /** @class */ (function () {
    function LoanServicingService(http, toastr, spinner) {
        this.http = http;
        this.toastr = toastr;
        this.spinner = spinner;
        this.auth = JSON.parse(sessionStorage.getItem('auth'));
        this.apiModel = new _models_Api_model__WEBPACK_IMPORTED_MODULE_1__["ApiModel"]();
    }
    // getAllClnts(brnchSeq) {
    //   const url = `${this.apiModel.host}/adminservice/api/all-active-clnts/` + this.auth.user.username + '/' + brnchSeq;
    //   return this.http.get<LoanServicing[]>
    //     (url, { headers: this.apiModel.httpHeaderGet }).pipe(
    //       tap((data: any) => this.spinner.hide()),
    //       catchError(this.handleError('getAllPaymentSchedules')));
    // }
    LoanServicingService.prototype.getAllClnts = function (brnchSeq, pageIndex, pageSize, filter, isCount) {
        var _this = this;
        var url = this.apiModel.host + "/adminservice/api/all-active-clnts?userId=" + this.auth.user.username + '&brnchSeq=' + brnchSeq + '&pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&filter=' + filter + '&isCount=' + isCount;
        return this.http.get(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.spinner.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllPaymentSchedules')));
    };
    LoanServicingService.prototype.getClientBySeq = function (seq) {
        var _this = this;
        var url = this.apiModel.host + "/loanservice/api/mw-clnts/" + seq;
        return this.http.get(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.spinner.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllPaymentSchedules')));
    };
    LoanServicingService.prototype.getClntTagForCnic = function (cnic) {
        var _this = this;
        var url = this.apiModel.host + "/setupservice/api/get-clnt-tag/" + cnic;
        return this.http.get(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.spinner.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllPaymentSchedules')));
    };
    LoanServicingService.prototype.addClntTagForCnic = function (cnic, tagSeq) {
        var _this = this;
        var url = this.apiModel.host + "/setupservice/api/add-clnt-to-tag-list/" + cnic + '/' + tagSeq;
        return this.http.get(url, { headers: this.apiModel.httpHeaderGet }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.spinner.hide(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getAllPaymentSchedules')));
    };
    LoanServicingService.prototype.reportDeath = function (reportDeath) {
        return this.http.post(this.apiModel.host + '/adminservice/api/report-death', reportDeath, { headers: this.apiModel.httpHeaderPost });
    };
    LoanServicingService.prototype.reversReportDeath = function (dthRptSeq, cmnt) {
        var _this = this;
        return this.http.get(this.apiModel.host + '/adminservice/api/revert-report-death?dthRptSeq=' + dthRptSeq + '&cmnt=' + cmnt, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.toastr.success('Death Reporte Reversed ', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('reportDeath')));
    };
    //animal death reversal
    LoanServicingService.prototype.reversAnimalReportDeath = function (anmlRgstrSeq, cmnt) {
        var _this = this;
        return this.http.get(this.apiModel.host + '/adminservice/api/reverse-anml-death?anmlRgstrSeq=' + anmlRgstrSeq + '&cmnt=' + cmnt, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.toastr.success('Death Report Reversed ', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('reportDeath')));
    };
    LoanServicingService.prototype.printAnmlInsuClmForm = function (anmlRgstrSeq) {
        var url = this.apiModel.host + "/recoverydisbursementservice/api/print-anml-insur-claim-form/" + anmlRgstrSeq;
        return this.http.get(url, {
            responseType: 'arraybuffer',
            headers: this.apiModel.httpHeaderPost
        });
    };
    LoanServicingService.prototype.reschedule = function (method, clntSeq, months) {
        var _this = this;
        return this.http.get(this.apiModel.host + '/recoverydisbursementservice/api/genrate-repayment-schedule/' + method + '/' + clntSeq + '/' + months, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.toastr.success('Payment Schedule Updated', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('reschedule')));
    };
    // rescheduleForPosting(method:number, clntSeq: number, months: number) {
    //   return this.http.get<any>(this.apiModel.host + '/recoverydisbursementservice/api/genrate-repayment-schedule/' + method + '/' + clntSeq + '/' + months,
    //     { headers: this.apiModel.httpHeaderPost }).pipe(
    //       tap((data: any) => this.toastr.success('Payment Schedule Updated', 'Success!')),
    //       catchError(this.handleError('reschedule')));
    // }
    LoanServicingService.prototype.rescheduleForPosting = function (obj) {
        return this.http.post(this.apiModel.host + '/recoverydisbursementservice/api/reshedule-loan', obj, { headers: this.apiModel.httpHeaderPost })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (p) {
            console.log(p);
        }));
    };
    LoanServicingService.prototype.loanAdjustment = function (clntSeq) {
        var _this = this;
        return this.http.get(this.apiModel.host + '/recoverydisbursementservice/api/adjust-loan/' + clntSeq, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.toastr.success('Loan Adjusted', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('adjustment')));
    };
    LoanServicingService.prototype.payReportDeath = function (exp) {
        var _this = this;
        if (exp.expnsAmt <= 0) {
            this.toastr.error('Invalid Amount', 'Error!');
            return null;
        }
        return this.http.post(this.apiModel.host + '/setupservice/api/add-new-exp', exp, { headers: this.apiModel.httpHeaderPost }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.toastr.success('Funeral Charges Payed', 'Success!'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('reportDeath')));
    };
    LoanServicingService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        this.spinner.hide();
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            if (error.status == 400) {
                _this.toastr.error(error.error.error, operation + " failed:");
            }
            else {
                _this.toastr.error(error.message, operation + " failed:");
            }
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(result);
        };
    };
    LoanServicingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], LoanServicingService);
    return LoanServicingService;
}());

var LoanServicing = /** @class */ (function () {
    function LoanServicing() {
    }
    return LoanServicing;
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



/***/ })

}]);
//# sourceMappingURL=compliance-repot-compliance-repot-module~pages-admin-admin-module.js.map