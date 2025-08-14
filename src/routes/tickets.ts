import { Router } from 'express';
import type dto = require('../dto');

const router = Router();

let tickets: any[] = [];

router.get('/', (req, res) => {
    res.json(tickets);
});

router.post('/', (req, res) => {
    const { title, description, userId } = req.body;

    let msg: string = "";

    if (typeof title !== 'string') {
        msg = 'Título não é um texto válido!';
    }
    else if (title == "") {
        msg = 'Título vazio!';
    }
    else if (typeof description !== 'string') {
        msg = 'Descrição não é um texto válido!';
    }
    else if (description == "") {
        msg = 'Descrição vazia!';
    }
    else if (typeof userId !== 'number') {
        msg = 'ID de usuário não é um número válido!';
    }

    if (msg !== "") {
        return res.status(400).json({ error: msg });
    }

    const returnInfo: dto.TicketDTO = {
        title,
        description,
        userId,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    res.status(201).json(returnInfo);
    });


export default router;
