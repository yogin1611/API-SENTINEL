// Load environment variables FIRST
require('dotenv').config();

const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 4000;

(async () => {
  try {
    await sequelize.sync();
    console.log("📦 Database synced successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
      console.log(`📘 API Docs available at http://localhost:${PORT}/docs`);
    });
  } catch (err) {
    console.error("❌ Failed to sync database:", err);
  }
})();
