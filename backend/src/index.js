const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const teacherRoutes = require('./routes/teacher');
const parentRoutes = require('./routes/parent');

const app = express();
const PORT = process.env.PORT || 5000;

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log('✔ Created "uploads" directory.');
}

// Copy a placeholder image if it doesn't exist
const sampleImagePath = path.join(uploadsDir, 'sample-painting.jpg');
if (!fs.existsSync(sampleImagePath)) {
  fs.writeFileSync(sampleImagePath, Buffer.from(''));
  console.log('✔ Created placeholder image: sample-painting.jpg');
}

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    console.log(`[HTTP] ${req.method} ${req.originalUrl} - Status: ${res.statusCode} (${Date.now() - start}ms)`);
  });
  next();
});

// Serve uploaded photos statically
app.use('/uploads', express.static(uploadsDir));

// API Routes
const apiRouter = express.Router();
apiRouter.use('/auth', authRoutes);
apiRouter.use('/admin', adminRoutes);
apiRouter.use('/teacher', teacherRoutes);
apiRouter.use('/parent', parentRoutes);

app.use('/api', apiRouter);

// Serve frontend build if it exists
const frontendDistDir = path.join(__dirname, '../public');
console.log(`[DEBUG] Checking for frontend static files at: ${frontendDistDir}`);

if (fs.existsSync(frontendDistDir)) {
  console.log(`✔ Frontend static files detected. Serving from ${frontendDistDir}`);
  app.use(express.static(frontendDistDir));

  // React client-side router fallback
  app.get('*', (req, res, next) => {
    if (!req.path.startsWith('/api') && !req.path.startsWith('/uploads')) {
      res.sendFile(path.join(frontendDistDir, 'index.html'));
    } else {
      next();
    }
  });
} else {
  console.log(`❌ ERROR: Frontend directory NOT FOUND at ${frontendDistDir}`);
  try {
    const parentDir = path.join(__dirname, '..');
    const contents = fs.readdirSync(parentDir);
    console.log(`[DEBUG] Contents of ${parentDir}:`, contents);
  } catch (err) {
    console.error('[DEBUG] Failed to read parent directory', err);
  }

  // Fallback route to show exactly what's wrong instead of 'Cannot GET /'
  app.get('/', (req, res) => {
    res.status(404).send(`
      <h1>Deployment Configuration Error</h1>
      <p>The backend server is running successfully, but the frontend files were not found.</p>
      <p>Expected frontend path: <code>${frontendDistDir}</code></p>
      <p><strong>How to fix on Render:</strong></p>
      <ol>
        <li>Go to your Render Dashboard.</li>
        <li>Click on your Web Service.</li>
        <li>Click <strong>Manual Deploy</strong> and select <strong>Clear build cache & deploy</strong>.</li>
      </ol>
    `);
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Express Error Handler:', err);
  res.status(err.status || 500).json({
    message: err.message || 'An internal server error occurred.'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`========================================================`);
  console.log(`🚀 Server running on port http://localhost:${PORT}`);
  console.log(`📂 Serving static uploads from ${uploadsDir}`);
  console.log(`========================================================`);
});

module.exports = app;

