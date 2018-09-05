/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
(function ($) {
    SweetSelector = {
        select: function (input) {
            let data
            if (input[0] === '#') {         // SELECT BY ID
                data = document.getElementById(input.slice(1))
            } else if (input[0] === '.'){   // SELECT BY CLASS
                data = document.getElementsByClassName(input.slice(1))
            } else {                        // SECELT BY TAG NAME
                data = document.getElementsByTagName(input.slice(1))
            }
            return data
        }
    },
    DOM = {
        hide: function(input){
            document.getElementById(input.slice(1)).style.visibility = "hidden"
            
        },
        show: function(input){
            document.getElementById(input.slice(1)).style.visibility = "visible"
        },
        addClass: function(element, input){
            let elementTmp
            if (element[0] === '#') {         // SELECT BY ID
                elementTmp = document.getElementById(element.slice(1))
            } else if (element[0] === '.'){   // SELECT BY CLASS
                elementTmp = document.getElementsByClassName(element.slice(1))
            } else {                        // SECELT BY TAG NAME
                elementTmp = document.getElementsByTagName(element)
            }
            elementTmp.classList.add(input)
        },
        removeClass: function(element, style){
            let elementTmp
            if (element[0] === '#') {         // SELECT BY ID
                elementTmp = document.getElementById(element.slice(1))
            } else if (element[0] === '.'){   // SELECT BY CLASS
                elementTmp = document.getElementsByClassName(element.slice(1))
            } else {                        // SECELT BY TAG NAME
                elementTmp = document.getElementsByTagName(element)
            }
            let className = elementTmp.className.split(' ')
            // console.log(className)
            let arr = []
            className.forEach(name =>{
                if(name !== style){
                    arr.push(name)
                }
            })
            arr = arr.join(' ')
            // console.log(arr);
            
            elementTmp.className = arr
        }
    }
})(jQuery)

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */