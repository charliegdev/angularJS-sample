// server.js (Express 4.0)
const express        = require('express');
const morgan         = require('morgan');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const app            = express();

app.use(express.static(__dirname, { index: "index.html"})); 	// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 					// log every request to the console
app.use(bodyParser()); 						// pull information from html in POST
app.use(methodOverride()); 					// simulate DELETE and PUT


const router = express.Router();

const notes = [
    {id: 1, label: 'First Note', author: 'Shyam'},
    {id: 2, label: 'Second Note', author: 'Brad'},
    {id: 3, label: 'Middle Note', author: 'Someone'},
    {id: 4, label: 'Last Note', author: 'Shyam'},
    {id: 5, label: 'Really the last Note', author: 'Shyam'}

];
let lastId = 6;

router.get('/note', function(req, res) {
    res.send(notes);
});
router.post('/note', function(req, res) {
    const note = req.body;
    note.id = lastId;
    lastId++;
    notes.push(note);
    res.send(note);
});

router.post('/note/:id/done', function(req, res) {
    let note = null;
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id == req.params.id) {
            note = notes[i];
            break;
        }
    }
    note.label = 'Done - ' + note.label;
    res.send(notes);
});

router.get('/note/:id', function(req, res) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id == req.params.id) {
            res.send(notes[i]);
            break;
        }
    }
    res.send({msg: 'Note not found'}, 404);
});

router.post('/note/:id', function(req, res) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id == req.params.id) {
            notes[i] = req.body;
            notes[i].id = req.params.id;
            res.send(notes[i]);
            break;
        }
    }
    res.send({msg: 'Note not found'}, 404);
});

router.post('/login', function(req, res) {
    console.log('API LOGIN FOR ', req.body);
    res.send({msg: 'Login successful for ' + req.body.username});
});

const alternateResponse = (() => {
    let previousSuccess = true;

    return (req, res) => {
        const msg = previousSuccess ? "Sorry login failed." : "Welcome!",
            code = previousSuccess ? 404 : 200;

        res.send({ msg }, code);
        previousSuccess = !previousSuccess;
    };
})();

router.get("/hasAccess", alternateResponse);

app.use('/api', router);

app.listen(8000);
console.log('Open http://localhost:8000 to access the files now'); 			// shoutout to the user
