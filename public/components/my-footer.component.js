;(function () {
    'use strict'

    const template =  ` 
        <!-- Footer -->
            <footer class="page-footer text-center font-small mt-4 wow fadeIn">
        
                <hr class="my-4">
        
                <!-- Social icons -->
                <div class="pb-4">
                    <a href="#">
                        <i class="fa fa-facebook mr-3"></i>
                    </a>
        
                    <a href="#">
                        <i class="fa fa-github mr-3"></i>
                    </a>
                </div>
                <div class="footer-copyright py-3">
                    © 2018 Copyright:
                    <a href="#"> Shuttlecock 2019 - Made in France </a>
                </div>
        
            </footer>
        <!-- Footer -->
        `


    Vue.component('my-footer', {
        template: template
    })
})()
