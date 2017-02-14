/* GET home page.*/
module.exports.home = function(req, res) {
    res.render('home', {
        title: 'Home',
        content: 'Hello World!'
    });
};

/* GET 'homework' page */
module.exports.homework = function(req, res) {
    res.render('homework', {
        title: 'Homework',
    });
};

/* GET 'pageone' page */
module.exports.pageone = function(req, res) {
    res.render('pageone', {
        title: 'pageone',
    });
};

/* GET 'pagetwo' page */
module.exports.pagetwo = function(req, res) {
    res.render('pagetwo', {
        title: 'pagetwo',
    });
};

