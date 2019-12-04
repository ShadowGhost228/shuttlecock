

;(function () {
    'use strict'

    const signinTemplate =  ` 
        <section id = "signin">

                <!-- Material form login -->
                <div class="card offset-6 col-md-4 py-5 px-5 z-depth-4">

                    <h5 class="card-header info-color white-text text-center py-4">
                        <strong>Se Connecter</strong>
                    </h5>

                    <!--Card content-->
                    <div class="card-body px-lg-5 pt-0">

                        <!-- Form -->
                        <form class="text-center"  style="color: #757575;">

                            <!-- Email -->
                            <div class="md-form">
                                <input type="email" name="email" 
                                 v-model:email="email" id ="materialLoginFormEmail"
                                 v-on:input="writeEmail" class="form-control" placeholder="Mail">
                            </div>

                            <!-- Password -->
                            <div class="md-form">
                                <input type="password" name="password" 
                                 v-model:password="password" id="materialLoginFormPassword" 
                                 v-on:input="writePassword" class="form-control" placeholder="Password">
                            </div>

                            <!-- Sign in button -->

                            <a @click="sendForAuth" class="btn btn-outline-info btn-rounded btn-block my-4 z-depth-0">
                                Send 
                            </a>


                        </form>
                        <!-- Form -->

                    </div>

                <!-- Material form login -->
            </div>

        </section>
        `


    Vue.component('signin', {
        props: ['currentpage', 'email', 'password'],
        template: signinTemplate,
        methods: {

            changeCurrentPage (){
                this.$emit('changepage', 'register')
            },

            sendForAuth () {
                this.$emit('login', 'magasin')
            },

            writeEmail(){
                this.$emit('emailwrite', this.email )
            },

            writePassword(){
                this.$emit('passwordwrite', this.password)
            },

        }
    })

})()
