sap.ui.define(["./BaseController",
	"sap/ui/model/json/JSONModel"], function (BaseController,
	JSONModel) {
	"use strict";

	return BaseController.extend("com.countdowntimer.app.controller.App", {
		onInit: function () {
			// apply content density mode to root view
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			
		}
	});
});
