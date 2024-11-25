
import express from 'express';
import santriRoutes from './routes/santriRoutes';

const app = express();
app.use(express.json());
app.use('/api', santriRoutes);

app.listen(3000, () => {
    console.log('Server berjalan di port://localhost:3000');
})