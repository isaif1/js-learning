//you click on child then if parent have event then that will also be called
//this is called event bubbling
//it can be decide whether to capture event or not
//if we click on child then it will see parent of prent of paarent that it is capturing event
//it start capturing from outer body->grandparent->parent->child
//then it start bubbling child->parent->grandparent->body
//3rd argument is capture, true or false