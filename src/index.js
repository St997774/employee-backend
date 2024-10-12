import exress from 'express';
import Bootstrap from './bootstrap';
import dotenv from 'dotenv';

const app = exress();

dotenv.config();
app.set('port', process.env.PORT || 3000);
const bootstrap = new Bootstrap(app);

