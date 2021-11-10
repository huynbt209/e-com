const mongoose = require('mongoose')
const express = require('express')
const AdminBro = require('admin-bro')
const options = require('./admin.options')
const buildAdminRouter = require('./admin.router')

const app = express()
const port = 2009

const run = async () => {
  await mongoose.connect('mongodb+srv://eCom:huynbt@e-com.3yl5b.mongodb.net/e-com?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected");
  const admin = new AdminBro(options);
  const router = buildAdminRouter(admin);
  app.use(admin.options.rootPath, router);
  app.listen(port, () => console.log(
    `Server started on port http://localhost:${port}`,
  ));
};


module.exports = run
