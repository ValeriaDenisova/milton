document.addEventListener("DOMContentLoaded", function(){
    
    var reviewsLeftTablet = document.getElementById('reviewsLeftTablet');
    var reviewsRightTablet = document.getElementById('reviewsRightTablet');
    var reviewsTabletBlock = document.getElementById('reviewsTabletBlock');
    var reviewsBreadCrumbsTablet = document.getElementById('reviewsBreadCrumbsTablet').children;
    var reviewsTablet = [];
    var reviewsTabletNum = 0;
    
    for(let i = 0 ; i < reviewsTabletBlock.children.length - 1; i++){
        reviewsTablet[i] = reviewsTabletBlock.children[i];
    }
    

    CarauselNum(reviewsTabletNum, reviewsTablet, reviewsBreadCrumbsTablet);
    
    if(typeof reviewsLeftTablet == 'object'){reviewsLeftTablet.addEventListener('click', function (event){
        if (reviewsTabletNum > 0){
            reviewsTabletNum--;
            CarauselNum(reviewsTabletNum, reviewsTablet, reviewsBreadCrumbsTablet);
        }
    });
}
                                     
    if(typeof reviewsRightTablet == 'object'){reviewsRightTablet.addEventListener('click', function (event){
        if (reviewsTabletNum < reviewsTablet.length - 1){
            reviewsTabletNum++;
            CarauselNum(reviewsTabletNum, reviewsTablet, reviewsBreadCrumbsTablet);
        }
    });
                                             }
    
                                              
    for (let i = 0; i < reviewsBreadCrumbsTablet.length; i++){
        if(typeof reviewsBreadCrumbsTablet[i] == 'object'){reviewsBreadCrumbsTablet[i].addEventListener('click', function (event){
             reviewsTabletNum = i;
              CarauselNum(reviewsTabletNum, reviewsTablet, reviewsBreadCrumbsTablet);
         });
    }
    }
    
    var reviewsLeft = document.getElementById('reviewsLeft');
    var reviewsRight = document.getElementById('reviewsRight');
    var reviewsBlock = document.getElementById('reviewsBlock');
    var reviewsBreadCrumbs = document.getElementById('reviewsBreadCrumbs').children;
    var reviews = [];
    var reviewsNum = 0;
    
     for(let i = 0 ; i < reviewsBlock.children.length - 1; i++){
        reviews[i] = reviewsBlock.children[i];
    }
    
    CarauselNumReviews(reviewsNum, reviews, reviewsBreadCrumbs);
    
    if(typeof reviewsLeft == 'object'){reviewsLeft.addEventListener('click', function (event){
        if (reviewsNum > 0){
            reviewsNum = reviewsNum - 2;
            CarauselNumReviews(reviewsNum, reviews, reviewsBreadCrumbs);
        }
    });
}
                                     
    if(typeof reviewsRight == 'object'){reviewsRight.addEventListener('click', function (event){
        
        if (reviewsNum < reviews.length/2){
            reviewsNum = reviewsNum + 2;
             CarauselNumReviews(reviewsNum, reviews, reviewsBreadCrumbs);
        }
    });
    
                                       }
                                        
    for (let i = 0; i < reviewsBreadCrumbs.length; i++){
        if(typeof reviewsBreadCrumbs[i] == 'object'){reviewsBreadCrumbs[i].addEventListener('click', function (event){
             reviewsNum = i*2;
              CarauselNumReviews(reviewsNum, reviews, reviewsBreadCrumbs);
         });
    }
    }
    
});