sap.ui.define(["./BaseController", "../utils/index"], function (BaseController,
	index) {
	"use strict";

	return BaseController.extend("com.countdowntimer.app.controller.Main", {
		onInit: function() {
			setInterval(() => {
				this.onStartCountdownButtonPress();
			}, 1000);
		},
		
		onStartCountdownButtonPress: function() {
			const oDatePicker = this.getView().byId('idDatePicker');
			const oSelectedDate = oDatePicker.getValue();
			if(oSelectedDate) {
				const oTimerModel = this.getModel(index.models.Timer);
				const oCountDownDate = new Date(oSelectedDate).getTime();
				const nNow = Date.now();
				const nDiffInMilliSeconds = oCountDownDate - nNow;
	
				const days = Math.floor(nDiffInMilliSeconds / (1000 * 60 * 60 * 24));
				const hours = Math.floor((nDiffInMilliSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				const minutes = Math.floor((nDiffInMilliSeconds % (1000 * 60 * 60)) / (1000 * 60));
				const seconds = Math.floor((nDiffInMilliSeconds % (1000 * 60)) / (1000));
	
				oTimerModel.setProperty('/day', days);
				oTimerModel.setProperty('/hour', hours);
				oTimerModel.setProperty('/minute', minutes);
				oTimerModel.setProperty('/second', seconds);
			}
		}
	});
});
