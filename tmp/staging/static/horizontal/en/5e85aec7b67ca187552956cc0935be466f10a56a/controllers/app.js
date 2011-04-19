// ==========================================================================
// Project:   Horizontal.appController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Horizontal */


Horizontal.appController = SC.ObjectController.create({

 	contentBinding: "Horizontal.appsController.selection",
	nowShowing:'Horizontal.appPage.mainPane.overviewFrame',
	contentBindingDefault: SC.Binding.single('Horizontal.appsController.selection'),
	
});
