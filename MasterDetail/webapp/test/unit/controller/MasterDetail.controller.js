/*global QUnit*/

sap.ui.define([
	"MasterDetail/MasterDetail/controller/MasterDetail.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MasterDetail Controller");

	QUnit.test("I should test the MasterDetail controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
