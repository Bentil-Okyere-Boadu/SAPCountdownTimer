sap.ui.define(["./BaseController", "sap/m/MessageBox"], function (BaseController, MessageBox) {
	"use strict";

	return BaseController.extend("com.countdowntimer.app.controller.Main", {
		sayHello: function () {
			MessageBox.show("Hello World!");
		}
	});
});
