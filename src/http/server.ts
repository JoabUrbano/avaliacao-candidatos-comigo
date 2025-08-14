import express from 'express';
import ticketsRouter from '../routes/tickets';

const app = express();
const PORT =  3000;

app.use(express.json());
app.use('/tickets', ticketsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
