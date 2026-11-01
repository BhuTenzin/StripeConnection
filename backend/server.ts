import express, { type Request, type Response, type Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 3000;

// Middleware to parse JSON bodies
app.use(helmet());
app.use(cors());
app.use(express.json());


// Typed GET route
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello from Node.js, Express, and TypeScript in 2026!',
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get('/health', (_req: Request, res: Response) => {
  console.log('Health check request received');
  res.status(200).json({ status: 'OK', uptime: process.uptime() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
