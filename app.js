const express = require('express');
const morgan = require('morgan');
const mongoose= require('mongoose');

const { render } = require('ejs');
const  blogRoutes = require('./Routes/blogRoutes');

//express app
const app = express(); //invoking express 

//connect to mongodb
const dbURI = 'mongodb+srv://jainmaria8580:adhi@cluster0.k7smnrv.mongodb.net/studynode?retryWrites=true&w=majority';

mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true }).then((result)=> app.listen(3000)).catch((err)=>console.log(err));

//register view engine
app.set('view engine','ejs');


//listen for requests
// app.listen(3000);

//mddleware & static files
app.use(express.static('public')); //anythng n the publc folder wll act as variable

app.use(express.urlencoded({extended:true}));
//3rd party mddleware
app.use(morgan('tiny'));


//middleware
// app.use((req,res,next )=>{
//     console.log('new request made:');
//     console.log('host:',req.hostname);
//     console.log('path:',req.path);
//     console.log('method:',req.method);
//     next();
// });

//mongoose and mongo sandbox routes

// app.get('/add-blog',(req,res)=>{
//     const blog = new Blog({
//         title: 'new blog',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });
// //to save documents to database.
//     blog.save()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
// });


// app.get('/all-blogs',(req,res)=>{
//     Blog.find().then((result)=>{
//         res.send(result);
//     }).catch((err)=>{
//         console.log(err);
//     });
// });

// app.get('/single-blog',(req,res)=>{    Blog.findById('65b786af5e88adb5796090dd').then((result)=>{
//         res.send(result)
//     }).catch((err)=>{
//         console.log(err);
//     });
// });

app.get('/',(req,res)=>{
    //  res.send('<p>home page</p>');
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet:'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet:'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat bowser', snippet:'Lorem ipsum dolor sit amet consectetur'},

    // ]
    // res.render('index',{title: 'Home',blogs});
    res.redirect('/blogs');

});
// //mddleware
// app.use((req,res,next)=>{
//     console.log('in the middleware');
//     next();
// });

app.get('/about',(req,res)=>{
    res.render('about',{title: 'About'});
    // res.send('<p>about page</p>');
});


app.use('/blogs',blogRoutes);

//404 page
//use 'use' to create middleware functions in express

app.use((req,res)=>{
    res.status(404).render('404',{title: '404'});
});

