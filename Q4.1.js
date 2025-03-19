

// wrong output  
// app.get("/user", async (req, res) => {
    
//     const user = await User.findById(req.query.id);
//     res.json(user.name);
// });


// corrected version

app.get("/user", async (req, res) => {
    const ID=req.query.id
    const user = await User.findById({id:ID});
    res.json(user.name);
});

// in wrong code  user is trying to fetch the data by id which is not present in database 
// in correct code user is trying to fetch the data by id which is present in database 

