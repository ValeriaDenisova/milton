document.addEventListener("DOMContentLoaded", function () {
    var worksLeft = document.getElementById('worksLeft');
    var worksFoto = document.getElementById('worksFoto');
    var worksRight = document.getElementById('worksRight');
    var worksBreadCrumbs = document.getElementById('worksBreadCrumbs').children;
    var worksImg = [];
    var numFoto = 0;
    var worksPrice = worksFoto.children[worksFoto.children.length - 1].children;

    for (let i = 0; i < worksFoto.children.length - 1; i++) {
        worksImg[i] = worksFoto.children[i];
    }


    function CarauselNumWorks(num, arrayCarausel, arrayBreadCrumbs) {
        CarauselNum(num, arrayCarausel, arrayBreadCrumbs);
        None(worksPrice);
        worksPrice[num].style.display = 'block';
    }
    CarauselNumWorks(numFoto, worksImg, worksBreadCrumbs);


    if (typeof worksLeft == 'object') {
        worksLeft.addEventListener('click', function (event) {
            if (numFoto > 0) {
                numFoto--;
                CarauselNumWorks(numFoto, worksImg, worksBreadCrumbs);
            }
        });
    }

    if (typeof worksRight == 'object') {
        worksRight.addEventListener('click', function (event) {
            if (numFoto < worksImg.length - 1) {
                numFoto++;
                CarauselNumWorks(numFoto, worksImg, worksBreadCrumbs);
            }
        });
    }

    for (let i = 0; i < worksBreadCrumbs.length; i++) {
        if (typeof worksBreadCrumbs[i] == 'object') {
            worksBreadCrumbs[i].addEventListener('click', function (event) {
                numFoto = i;
                CarauselNumWorks(numFoto, worksImg, worksBreadCrumbs);
            });
        }
    }

});
