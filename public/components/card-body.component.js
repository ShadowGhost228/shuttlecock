
;(function () {
    'use strict'

    const template =  `
       <!--Card content-->
            <div class="card-body text-center">
                <!--Category & Title-->
                <a href="" class="grey-text">
                    <h5>{{ product.category }}</h5>
                </a>
                <h5>
                    <strong>
                        <!--
                        <a href="" class="dark-grey-text">
                            {{ product.title }}                         
                        </a>
                        -->
                    </strong>
                </h5>
    
                <h4 class="font-weight-bold blue-text">
                    <strong>{{ product.price }} € </strong>
                </h4>                                              
    
            </div>
    `
    Vue.component('card-body', {
        template : template,
        props : ["product"]
    })

})()
