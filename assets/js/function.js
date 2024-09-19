
function ArrayClick(array, fun){
     for(let i=0; i < array.length; i++){
        if(typeof array[i] == 'object'){array[i].addEventListener('click', fun)}
    }
}

function None(array){
    for(let i = 0; i < array.length; i++){
        array[i].style.display = 'none';
    }
}

function BreadCrumbsNone(array){
    for(let i = 0; i < array.length; i++){
        array[i].style.opacity = '0.2';
    }
}

function CarauselNum(num, arrayCarausel,arrayBreadCrumbs){
    None(arrayCarausel);
    BreadCrumbsNone(arrayBreadCrumbs);
    arrayCarausel[num].style.display = 'block';
    arrayBreadCrumbs[num].style.opacity = '1';
}

function CarauselNumReviews(num, arrayCarausel,arrayBreadCrumbs){
    None(arrayCarausel);
    BreadCrumbsNone(arrayBreadCrumbs);
    arrayCarausel[num].style.display = 'block';
    arrayCarausel[num + 1].style.display = 'block';
    arrayBreadCrumbs[num/2].style.opacity = '1';
}

