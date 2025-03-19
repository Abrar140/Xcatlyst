


app. delete("/task/:id", async (req, res) => {  

    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Task deleted sucessfully"});
    }catch(error){
        res.status(500).json({ error: "Failed to delete Task" });
    }
}


)