/* >>>>>>>>>> BEGIN source/core.js */
// ==========================================================================
// Project:   Horizontal
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Horizontal */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
Horizontal = SC.Application.create(
  /** @scope Horizontal.prototype */ {

  NAMESPACE: 'Horizontal',
  VERSION: '0.1.0',

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
  store: SC.Store.create().from(SC.Record.fixtures)
  
  // TODO: Add global constants or singleton objects needed by your app here.

}) ;

/* >>>>>>>>>> BEGIN source/controllers/app.js */
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

/* >>>>>>>>>> BEGIN source/controllers/apps.js */
// ==========================================================================
// Project:   Horizontal.appsController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Horizontal */

Horizontal.appsController = SC.ArrayController.create({

  

}) ;

/* >>>>>>>>>> BEGIN source/resources/applications.js */
Horizontal.apps = [
			
				
		SC.Object.create({
			name: "Background on Service Returns",
		}),

			
		SC.Object.create({
			name: "Processing a Refund in POS and iRepair",
		}),
		
		SC.Object.create({
			name: "Adjustment to Service Inventory",
		}),
		
		SC.Object.create({
			name: "Exceptions",
		}),
		
	 SC.Object.create({
	 	name: "Background on Service Returns",
	 }),
   
   
	 SC.Object.create({
	 	name: "Processing a Refund in POS and iRepair",
	 }),
   
	 SC.Object.create({
	 	name: "Adjustment to Service Inventory",
	 }),
   
	 SC.Object.create({
	 	name: "Exceptions",
	 }),
	
	 SC.Object.create({
	 	name: "Background on Service Returns",
	 }),
   
   
	 SC.Object.create({
	 	name: "Processing a Refund in POS and iRepair",
	 }),
   
	 SC.Object.create({
	 	name: "Adjustment to Service Inventory",
	 }),
   
	 SC.Object.create({
	 	name: "Exceptions",
	 }),

		SC.Object.create({
			name: "Background on Service Returns",
		}),


		SC.Object.create({
			name: "Processing a Refund in POS and iRepair",
		}),

		SC.Object.create({
			name: "Adjustment to Service Inventory",
		}),

		SC.Object.create({
			name: "Exceptions",
		}),
		
			SC.Object.create({
				name: "Background on Service Returns",
			}),


			SC.Object.create({
				name: "Processing a Refund in POS and iRepair",
			}),

			SC.Object.create({
				name: "Adjustment to Service Inventory",
			}),

			SC.Object.create({
				name: "Exceptions",
			}),

		 SC.Object.create({
		 	name: "Background on Service Returns",
		 }),


		 SC.Object.create({
		 	name: "Processing a Refund in POS and iRepair",
		 }),

		 SC.Object.create({
		 	name: "Adjustment to Service Inventory",
		 }),

		 SC.Object.create({
		 	name: "Exceptions",
		 }),

		 SC.Object.create({
		 	name: "Background on Service Returns",
		 }),


		 SC.Object.create({
		 	name: "Processing a Refund in POS and iRepair",
		 }),

		 SC.Object.create({
		 	name: "Adjustment to Service Inventory",
		 }),

		 SC.Object.create({
		 	name: "Exceptions",
		 }),

			SC.Object.create({
				name: "Background on Service Returns",
			}),


			SC.Object.create({
				name: "Processing a Refund in POS and iRepair",
			}),

			SC.Object.create({
				name: "Adjustment to Service Inventory",
			}),

			SC.Object.create({
				name: "Exceptions",
			})
	
];
/* >>>>>>>>>> BEGIN source/resources/appList.js */
Horizontal.appList = SC.ListItemView.extend(
/** @scope ImageSearch.ImageThumbListItemView.prototype */ {
  
  escapeHTML: NO,
  
  
});
/* >>>>>>>>>> BEGIN source/resources/main_page.js */
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

/* >>>>>>>>>> BEGIN source/main.js */
// ==========================================================================
// Project:   Horizontal
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Horizontal */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Horizontal.main = function main() {

  // Step 1: Instantiate Your Views
  // The default code here will make the mainPane for your application visible
  // on screen.  If you app gets any level of complexity, you will probably 
  // create multiple pages and panes.  
  Horizontal.getPath('mainPage.mainPane').append() ;
	Horizontal.appsController.set('content',Horizontal.apps);

  // Step 2. Set the content property on your primary controller.
  // This will make your app come alive!

  // TODO: Set the content property on your primary controller
  // ex: Horizontal.contactsController.set('content',Horizontal.contacts);

} ;

function main() { Horizontal.main(); }

