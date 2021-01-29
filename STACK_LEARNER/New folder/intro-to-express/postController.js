exports.getAllPost = (req,res) => {
    let {category, page, router} = req.query;
    res.send('Render All posts');
};

exports.getSinglePost = (req,res) => {
    res.send('I am a post = ' + req.params.postId);
}

exports.createNewPost = (req,res) => {
    res.send('Create New Post');
};

exports.updatePost = (req,res) => {
    res.send('Update your existing Post = ' + req.params.postId);
};

exports.patchPost = (req,res) => {
    res.send('Update your existing Post 2');
};

exports.deletePost = (req,res) => {
    res.send('Delete your Post = ' + req.params.postId);
};