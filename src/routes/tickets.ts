import { Router } from 'express';

const router = Router();

let tickets: any[] = [];
let idCounter = 1;

router.get('/', (req, res) => {
    res.json(tickets);
});

export default router;
