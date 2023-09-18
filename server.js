const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const apiRoutes = require('./routes/apiroutes.js');
const htmlRoutes = require('./routes/html-routes.js');
const path = require("path");
console.log(apiRoutes);


app.use(express.static(path.join(__dirname + 'public')));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Use Routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}.`);
  });


