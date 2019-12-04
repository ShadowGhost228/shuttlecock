
;(function () {
    'use strict'

    const template =  `
        <!--Card image-->
        <div class="view overlay">
            <img :src="product.url" class="card-img-top" alt="">
            <a>
                <div class="mask rgba-white-slight"></div>
            </a>
        </div>
        <!--Card image-->
    `
    Vue.component('view-overlay', {
        template: template,
        props : ["product"]
    })

})()
