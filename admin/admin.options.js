const AdminBro = require('admin-bro')
const AdminBroMongoose = require('admin-bro-mongoose')
AdminBro.registerAdapter(AdminBroMongoose)

const menu = {
    trademark: {name: 'Trademark Manager'},
    product: {name: 'Product Manager'},
    account: {name: 'Account Manager'}
}

const trademark = require('./resources/trademark')
const complicated = require('./resources/complicated')
const user = require('./resources/user')



const TrademarkModel = require('../models/trademark.model')
const ProductModel = require('../models/product.model')
const UserAccountModel = require('../models/user.account.model')

const options = {
    resources: [
        {resource: TrademarkModel, options: {parent: menu.trademark, ...trademark}},
        {resource: ProductModel, options: {parent: menu.product, ...complicated}},
        {resource: UserAccountModel, options: {parent: menu.account, ...user}},
    ],

    locale: {
        translations: {
            messages: {
                loginWelcome: "Email: test@test.com || Password: password"
            },
            labels: {
                loginWelcome: "Welcome to the ATN Admin Panel"
            }
        }
    },

    dashboard: {
        handler: async() => {

        },
    },
    rootPath: '/admin'
}


module.exports = options