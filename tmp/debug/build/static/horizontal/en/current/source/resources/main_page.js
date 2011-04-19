// ==========================================================================
// Project:   Horizontal - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Horizontal */

// This page describes the main user interface for your application.  
Horizontal.mainPage = SC.Page.design({
  mainPane: SC.MainPane.design({
		classNames:['base-view'],
    childViews: 'banks'.w(),

		banks: SC.View.design({
			classNames:['horizontal'],
			layout: { top: -300, bottom: 0, left: 400, width: 250},
			backgroundColor: 'white',
			childViews: 'scrollView'.w(),
		
 		scrollView: SC.ScrollView.design({
       layout: { top: 0, bottom: 0, left: 0, width: 250 },
 			 contentView: SC.ListView.design({
				layoutDirection: SC.LAYOUT_HORIZONTAL,
 				contentValueKey: "name",
 				contentBinding: "Horizontal.appsController.arrangedObjects",
 				selectionBinding: "Horizontal.appsController.selection",
 	     	rowHeight: 50,
 				rowSpacing: 2,
 				exampleView:Horizontal.appList,
       	escapeHTML: NO,	
 	  	}) //contentView

 		}) // scrollView
			
		}), //banks
	
  }) //mainPane

}); //mainPage
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('horizontal');