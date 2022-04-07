import posts from "./tuits.js";
let tuits = posts;

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const createTuit = (req, res) => {
   const newTuit = req.body;
   newTuit._id = (new Date()).getTime()+'';
   newTuit.likes=0;
   tuits.push(newTuit);
   res.json(newTuit);
}

const findAllTuits = (req, res) => {
    res.json(tuits);
}

const updateTuit = (req, res) => {
    const newTuitContent = req.body;
    const updateTuitId = req.params['tid'];
    tuits = tuits.map(tuit => tuit._id === updateTuitId ? newTuitContent : tuit);
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const deleteTuitId = req.params['tid'];
    tuits = tuits.filter(t => t._id !== deleteTuitId);
    res.sendStatus(200);
}
