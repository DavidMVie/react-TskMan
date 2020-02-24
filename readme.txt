Writing out how the modal works


A usre clicks the AddTask icon which is displayed as part of the TaskBar component

This tells the taskbar component that the user needs a modal box displayed. To tell the user what content has been asked for we run a function for clicking of the link to add a new task,  the addTask function runs

Add tasks instantiated the Modal component, passing downn an instance of AddTaskForm as the children of the Modal,  so that the form is rendered inside of the modal.  

It also passes down some props,  confirming the modal should be shown,  the overlay should be shown, and with a method for closing the modal should the user click the X button

Inside Modal we firstly create a portal - this allows the modal to be placed in our choice of location within the dom ( as specified in the second argument of the call to createPortal.s)


we use the passed down props to coniditionaly render the modal if showModal is true, likewise including an overlay if showOverlay is true,  and providing  a function to utilize closing the modal. The functionality to do so also having bee sent down via props. 

Then as mentioned before,  the {props.children} takes care of rendering the addTask form 
