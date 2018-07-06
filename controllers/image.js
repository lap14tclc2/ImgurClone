module.exports = {
    index(req, res) {
        /* params property  was added to request obj 
            via urlencoded feature in bodyparser module
        */
        res.render('image');
    },
    create(req,res){
        res.send('The image: create POST controller')
    },
    like(req,res){
        res.send('The image: like POST controller');
    },
    comment(req,res) {
        res.send('The image: comment POST controller');
    }
}