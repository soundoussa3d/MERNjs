//app.Method(path,callback)
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/',(req,res)=>{ 
    res.send('Hello , this is a GET request')
});

app.post('/users',(req,res)=>{ 
   res.send('User created successfully');
});



/*app.post('/users', (req, res) => { 
    let name = req.body.name;
    res.send('User created successfully' + JSON.stringify(name));
});*/

app.put('/users/:id',(req,res)=>{ 
   res.send(`User with ID ${ req.params.id} updated successfully`);
});

app.delete('/users/:id',(req,res)=>{ 
    res.send(`User with ID ${ req.params.id} deleted successfully`)
});
/*
//paths
app.get('/about', (req, res)=>{})

app.get('/users/:id', (req,res)=>{
    const userID = req.params.id;
})
*/

/*
//accession request data 
*/
app.post('/login',(req,res)=>{
    const formData=req.body;
    res.send(JSON.stringify(formData));

});

//accession request data
app.get('/login',(req,res)=>{
    const formData= req.body;
    res.send('hi'+formData);

});

// Route handler for any HTTP method and path
app.all('/req', (req, res) => {
    // Accessing request headers
    const headers = req.headers;
    
    // Accessing request path
    const path = req.path;
    
    // Accessing request method
    const method = req.method;
    
    // Sending back a response with information about the request
    res.send(`
        Request Headers: ${JSON.stringify(headers)}<br>
        Request Path: ${path}<br>
        Request Method: ${method}
    `);
});


//access and handle query values
app.get('/search',(req,res)=>{ 
    const query = req.query.query;
    res.send(query)
});

//sending a reponse
app.post ('/login1' , (req,res)=>{
    res.send('login Successfully');
})

//send a response with a status
app.get('/success', (req,res)=>{
    res.status(200).send('success');
})

//send an error response 
app.get('/notfound',(req,res)=>{
    res.status(404).send('Not Found');
});

app.listen(3000 , ()=>{
    console.log('server is running on port 3000');
})