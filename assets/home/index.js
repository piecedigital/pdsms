import Express from 'express';

const router = Express.Router();

router.get('/', (req, res) => {
    res.send("Hello World");
});

router.all('/*', (req, res) => {
    res.status(404).send("404 - Not Found");
});

export default router;
