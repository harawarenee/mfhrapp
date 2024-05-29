const express = require('express');
const cors = require('cors');
const facilityRoutes = require('./routes/facilityRoutes');

const app = express();
console.log("Starting the application...");

app.use(express.json());
console.log("Middleware setup complete...");

app.use(cors());
console.log("CORS enabled...");

app.use('/facilities', facilityRoutes);
console.log("Routes set up...");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

