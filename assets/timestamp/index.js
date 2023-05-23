import Express from 'express';

const router = Express.Router();

router.get('/ts/', (req, res) => {
    res.send("Hello Timestamp");
});

export default router;
