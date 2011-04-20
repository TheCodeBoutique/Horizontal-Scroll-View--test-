// ==========================================================================
// Project:   Horizontal - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Horizontal */		

// This page describes the main user interface for your application.  
Horizontal.mainPage = SC.Page.design({
  mainPane: SC.MainPane.design({
    childViews: 'rightArticles'.w(),

		rightArticles:SC.ScrollView.design({
						autohidesHorizontalScroller: NO,
						hasVerticalScroller: NO,
				    layout: { top: 0, height: 250, left: 0, right:0},

						contentView:SC.View.design({
						    layout:{top:0,bottom:0,width:1820,left:0},
						    childViews:'v0 v1 v2 v3 v4 v5 v6 v7'.w(),
						
								v0:SC.View.design({
								    layout:{height:200,width:200,top:20,left:0},
								    backgroundColor:'black',
								}),
								v1:SC.View.design({
								    layout:{height:200,width:200,top:20,left:220},
								    backgroundColor:'black',
								}),
								v2:SC.View.design({
								    layout:{height:200,width:200,top:20,left:440},
								    backgroundColor:'black',
								}),
								v3:SC.View.design({
								    layout:{height:200,width:200,top:20,left:660},
								    backgroundColor:'black',
								}),
								v4:SC.View.design({
								    layout:{height:200,width:200,top:20,left:880},
								    backgroundColor:'black',
								}),
								v5:SC.View.design({
								    layout:{height:200,width:200,top:20,left:1100},
								    backgroundColor:'black',
								}),
								v6:SC.View.design({
								    layout:{height:200,width:200,top:20,left:1320},
								    backgroundColor:'black',
								}),
								v7:SC.View.design({
								    layout:{height:200,width:200,top:20,left:1540},
								    backgroundColor:'black',
								}),
						}),

		}),
    

  })

});
		
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('horizontal');