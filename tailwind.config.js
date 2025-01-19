// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A5F7A',
          light: '#247291',
          dark: '#134857'
        },
        secondary: {
          DEFAULT: '#E6B89C',
          light: '#F2C7AF',
          dark: '#D9A989'
        },
        neutral: {
          lightest: '#F5F5F5',
          light: '#E8E8E8',
          DEFAULT: '#2D3142',
          dark: '#1F222F'
        },
        success: '#2D6A4F',
        error: '#CF2E2E'
      }
    }
  }
}