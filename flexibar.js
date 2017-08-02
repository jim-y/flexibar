/**
 * Created by kling on 8/2/17.
 */
'use strict';

function execute() {
    const flexibar = document.querySelector('.c-flexibar');
    const flexibarInner = document.createElement('div');

    flexibarInner.classList.add('c-flexibar__inner');

    const contents = flexibar.children;

    Array.from(contents).forEach(child => {
        flexibarInner.appendChild(child);
        //flexibar.removeChild(child);
    });

    flexibar.appendChild(flexibarInner);
}

(function() {
    if(document.readyState === 'complete') {
        execute();
    }
    else {
        if (!!window.addEventListener) {
            window.addEventListener('DOMContentLoaded', execute)
        }
        else {
            window.attachEvent('onload', execute)
        }
    }
}());
