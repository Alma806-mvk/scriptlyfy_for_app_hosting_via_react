const path = require('path');

module.exports = {
  plugins: {
    // Explicitly use this app's Tailwind config to avoid picking up the root config
    tailwindcss: { config: path.join(__dirname, 'tailwind.config.ts') },
    autoprefixer: {},
  },
};
