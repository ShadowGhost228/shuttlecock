var express = require('express');
var router = express.Router();


const listGender = [{
  name: 'Homme'
}, {
  name: 'Femme'
}]

const listCategorie = [{
  name: 'Normal'
}, {name: 'Peacock'}]

const listAuth = []

const listUsers = [{
  prenom : 'root',
  mail : 'root@gmail.com',
  mdp : 'root'
}]

const listProducts = [
  {
    url : 'https://zupimages.net/up/19/49/w86c.jpg',
    category : 'Peacock',
    price : 8,
    number : 4,
    id : 1
  },
  {
    url : 'https://zupimages.net/up/19/49/p049.jpg',
    category : 'Normal',
    price : 4,
    number : 3,
    id : 3
  },
  {
    url : 'https://zupimages.net/up/19/49/w86c.jpg',
    category : 'Peacock',
    price : 8,
    number : 1,
    id : 1
  },
  {
    url : 'https://zupimages.net/up/19/49/p049.jpg',
    category : 'Normal',
    price : 4,
    number : 4,
    id : 5
  },
  {
    url : 'https://zupimages.net/up/19/49/w86c.jpg',
    category : 'Peacock',
    price : 8,
    number : 1,
    id : 1
  },
  {
    url : 'https://zupimages.net/up/19/49/p049.jpg',
    category : 'Normal',
    price : 4,
    number : 4,
    id : 5
  },
  {
    url : 'https://zupimages.net/up/19/49/w86c.jpg',
    category : 'Peacock',
    price : 8,
    number : 1,
    id : 1
  },
  {
    url : 'https://zupimages.net/up/19/49/p049.jpg',
    category : 'Normal',
    price : 4,
    number : 4,
    id : 5
  },
  {
    url : 'https://zupimages.net/up/19/49/w86c.jpg',
    category : 'Peacock',
    price : 8,
    number : 1,
    id : 1
  },
]

cart = []

router.get('/listCategorie', (req, res) => {
  res.json(listCategorie)
})

router.get('/listGender', (req, res) => {
  res.json(listGender)
})

router.get('/listUsers', (req, res) => {
  res.json(listUsers)
})

router.post('/register', (req, res) => {
  const prenom = req.body.prenom
  const mail = req.body.mail
  const mdp = req.body.mdp

  var user = researchUserForRegister(mail)

  if (user === '' ) {
    listUsers.push({
      prenom: prenom,
      mail: mail,
      mdp: mdp
    })
  } else{
    res.status(400).send('Mail déjà utilisé')
  }

})

router.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  var user = research(email,password)
  console.log('Utilisateur', user)

  if (user != '') {
    listAuth.push ({
      email : email,
      password : password,
    })
    console.log('Utilisateur', user)
    router.get('/user', (req, res) => { res.send(user) })
    res.redirect('/')
  } else {
    user = ''
    res.status(400).send('Bouuuh mauvais mdp')
  }
  console.log(listAuth.length)
})

router.get('/listAuth', (req, res) => {
  res.json(listAuth)
})

router.get('/products', (req, res) => {
  res.json(listProducts)
})

router.post('/cart', (req, res) => {
  const product = req.body.item

  console.log('Produit envoyé', product)
  var value = listProducts[researchProduct(product, listProducts)]
  console.log('Value.number', value.number)

  if(value.number > 0) {

    value.number -= 1
    cart.push(value)
    console.log('Cart', cart)
    res.redirect('/')

  } else {
    res.status(400).send('Stock insuffisant')
  }

})

router.get('/cart', (req, res) => {
  res.json(cart)
})

router.delete('/deletecart', (req, res) => {
  cart = []
})

router.post('/updatecart', (req, res) => {
  product = req.body.item

  console.log('Produit récupéré', product)

  var value = cart[researchProduct(product, cart)]

  console.log('value', value)

  if(value){
    cart.splice(value-1, 1)

    product = listProducts[researchProduct(product, listProducts)]
    product.number += 1

  } else {
    res.status(400).send('Pas element')
  }

})

function research(email, password){
  var user = ''
  for (i = 0; i<listUsers.length; i++){
    if( email === listUsers[i].mail && password === listUsers[i].mdp){
      user = listUsers[i]
    }
  }
  return user
}

function researchUserForRegister(email){

  var user = ''
  for (i = 0; i<listUsers.length; i++){
    if( email === listUsers[i].mail){
      user = listUsers[i]
    }
  }
  return user
}

function researchProduct(product, tableau){

  var index = ''
  for (i = 0; i<tableau.length; i++){
    if( product.id === tableau[i].id){
      index = tableau.indexOf(tableau[i])
    }
  }
  console.log('index renvoyé', index)
  return index
}

module.exports = router;