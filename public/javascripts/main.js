//import signin from './components/signin.component.js'
Vue.prototype.$http = axios

const app = new Vue({
    el: '#app',
    data: {
        currentPage : 'magasin',
        genderList : [],
        name : '',
        categorielist : [],
        email : '',
        password : '',
        authlist : [],
        isconnect : false,
        mdp : '',
        prenom : '',
        mail : '',
        currentuser: '',
        userlist : [],
        cart : [],
        productsList : [],

    },

    created() {
        // Ici, l'utilisation d'une fonction flêchée () => {} plutôt que function () {} est primordial !
        // sans fonction fléchée, this.myList = ... ne fonctionnera pas comme prévu
        this.$http.get('/listCategorie')
            .then(listCategorie => {
                console.log('affichage de ma liste', listCategorie)
                this.categorielist = listCategorie.data
            })
            .catch(err => {
                console.log('error', err)
            })

        this.$http.get('/listGender')
            .then(listGender => {
                console.log('affichage de ma liste', listGender)
                this.genderList = listGender.data
            })
            .catch(err => {
                console.log('error', err)
            })

        this.$http.get('/products')
            .then(listProducts => {
                console.log('affichage de ma liste', listProducts)
                this.productsList = listProducts.data
            })
            .catch(err => {
                console.log('error', err)
            })

    },

    methods: {
        sendNewElement() {
            this.$http.post('/list', {
                name: this.name
            })
                .then(() => {
                    this.genderList.push({
                        name: this.name
                    })
                })
        },

        onClickButtonSignin(page) {
            console.log('onClisckButtonSignin', page)

            this.$http.post('/login', {
                email: this.email,
                password: this.password
            })
                .then(() => {
                    this.currentPage = page

                    this.authlist.push({
                        email: this.email,
                        password: this.password
                    })
                    console.log('taille de authlist', this.authlist)
                    this.isconnect = true
                    this.$http.get('/user')
                        .then(user => {
                            console.log('affichage de user', user)
                            this.currentuser = user.data
                        })

                })
                .catch(err => {
                    console.log('error', err)
                    alert('Mauvais mot de passe ou email')
                    this.isconnect = false
                })

        },

        onChangePage(page) {
            console.log('onChangePage', page)
            this.currentPage = page
        },

        onWriteEmail(email) {
            console.log('onWriteEmail', email)
            this.email = email
        },

        onWritePassword(password) {
            console.log('onWritePassword', password)
            this.password = password
        },

        onWriteMotDePasse(mdp){
            console.log('onWriteMotDePasse',mdp)
            this.mdp = mdp
        },

        onWriteMail(mail){
            console.log('onWriteMail', mail)
            this.mail = mail
        },

        onWritePrenom(prenom){
            console.log('onWritePrenom', prenom)
            this.prenom = prenom
        },

        addUsers (page) {
            console.log('onClickButtonRegister', page)

            this.$http.post('/register', {
                prenom: this.prenom,
                mdp: this.mdp,
                mail: this.mail
            })
                .then(() => {
                    this.currentPage = page
                    this.userlist.push({
                        prenom: this.prenom,
                        mail: this.mail,
                        mdp: this.mdp
                    })
                })
                .catch(err => {
                    console.log('error', err)
                    alert("Adresse mail déjà utilisé")
                    this.isconnect = false
                })
        },

        deconnexion() {
            this.currentuser = ''
            this.email  =  ''
            this.password = ''
            this.isconnect = false
            this.currentPage = 'magasin'
            this.cart = []
            this.$http.delete('/deletecart')
            window.location.reload()


        },

        addToCart(item){
            if(this.isconnect == true ){
                console.log('Produit sélectionné', item)
                this.$http.post('/cart', {
                    item
                })
                    .then(() => {
                        this.$http.get('/products')
                            .then(listProducts => {
                                console.log('affichage de ma liste', listProducts)
                                this.productsList = listProducts.data
                            })
                            .catch(err => {
                                console.log('error', err)
                            })
                        this.$http.get('/cart')
                            .then(cart => {
                                console.log('affichage du panier', cart)
                                this.cart = cart.data
                            })
                            .catch(err => {
                                console.log('error', err)
                            })
                    })
                    .catch(err => {
                        console.log('error', err)
                        alert("Le stock est fini")
                    })
            }
            else {
                alert("Connectez vous ou creer votre compte")
            }

        },

        cartPrice(){
            var somme = 0
            for (i=0; i<this.cart.length; i++){
                somme += this.cart[i].price
            }
            return somme
        },

        updateCart(item) {
            this.$http.post('/updatecart', {
                item
            })
                .then(() => {
                    console.log('Reusi')
                })
                .catch(err => {
                    console.log('error', err)
                })
            this.$http.get('/cart')
                .then(cart => {
                    console.log('affichage du panier', cart)
                    this.cart = cart.data
                })
                .catch(err => {
                    console.log('error', err)
                })
        }

    }

})


