;(function () {
    'use strict'

    const template = ` 
        <section id="register">
            <!-- Material form register -->
            <div class="card offset-6 col-md-4 py-5 px-5 z-depth-4">

                <h5 class="card-header info-color white-text text-center py-4">
                    <strong>Sign up</strong>
                </h5>

                <!--Card content-->
                <div class="card-body px-lg-5 pt-0">

                    <!-- Form -->
                    <form class="text-center" style="color: #757575;">

                        <div class="md-form">
                            <input type="text" 
                            class="form-control" placeholder="Name" 
                            v-model:prenom="prenom" name="prenom"  v-on:input="writePrenom">
                        </div>
                    
                        <!-- E-mail -->
                        <div class="md-form mt-0">
                            <input type="email" id="materialRegisterFormEmail"
                             class="form-control" placeholder="Mail" v-model:mail="mail" v-on:input="writeMail" name="mail">
                        </div>

                        <!-- Password -->
                        <div class="md-form">
                            <input type="password" id="materialRegisterFormPassword" class="form-control" 
                            aria-describedby="materialRegisterFormPasswordHelpBlock" 
                             placeholder="Password" v-model:mdp="mdp" v-on:input="writePassword" name="mdp">
                           
                        </div>


                        <!-- Sign up button -->
                        <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
                         v-on:click="sendForRegister()" id="buttonRegister" >Send</button>

                       

                    </form>
                    <!-- Form -->

                </div>

            </div>
            <!-- Material form register -->
        </section>
        `


    Vue.component('register', {
        template: template,
        props: ['currentpage', 'prenom', 'mail', 'mdp'],
        methods: {
            changeCurrentPage() {
                // this.$emit('changepage', 'register')
            },
            sendForRegister() {
                this.$emit('register', 'magasin')
            },
            writePassword() {
                this.$emit('passwordwrite', this.mdp)
            },
            writeMail() {
                this.$emit('mailwrite', this.mail)
            },
            writePrenom() {
                this.$emit('prenomwrite', this.prenom)
            }


        }

    })

})()

