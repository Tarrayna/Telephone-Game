//GETS
//TODO: Probably delete this
exports.getInvalidKey = (req, res) => {
    res.render('index', { title: 'Welcome' , errorMessage:req.flash('error')});
};

exports.getMainMenu = (req, res) =>{
    res.render('index', { title: 'Welcome'});
};


//POSTS