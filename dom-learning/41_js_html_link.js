    //           (html)
    //             /    \
    //         (head)    (body)
    //         /  \       /        \
    //    (title) (meta)  (header) (section)
    //                    /   \
    //                 nav    logo

    //browser will see html file and create an object that is called document
    //then browser will add this document/object in window
    //using this document object we can change style/view of page or create new element in page,
    //or we can know that what is the height of nav
//console.log(window.document);//this will be simple human readable format
console.dir(window.document);//this will be document like javascript
//we can only write document


//EVENTS
// click scroll submit etc


//SELECT ELEMENT
//select element using get element by id, element must have id
//this will be object representation of element
const about = document.getElementById('about');
console.dir(about);//this will be object