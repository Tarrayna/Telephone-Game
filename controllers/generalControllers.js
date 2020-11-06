//GETS
//TODO: Probably delete this

exports.getMainMenu = (req, res) =>{
    res.render('index', { title: 'Telephone', errorMessage:req.flash('error')});
};


//POSTS