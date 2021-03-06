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
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('horizontal');