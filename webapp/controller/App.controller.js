sap.ui.define(["./BaseController",
	"sap/ui/model/json/JSONModel", "../utils/index"], function (BaseController,
		JSONModel, Constants) {
	"use strict";

	return BaseController.extend("com.countdowntimer.app.controller.App", {
		onInit: function () {
			// apply content density mode to root view
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			const oTimer = {
				day: 0,
				hour: 0,
				minute: 0,
				second: 0,
				today: new Date(),
				selectedDate: ''
			}

			this.getView().setModel(new JSONModel(oTimer), Constants.models.Timer);
		}
	});
});
