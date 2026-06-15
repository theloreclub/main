module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'lapis-blue': '#1A3FCF',
        'royal-blue': '#1E56E0',
        'indigo-blue': '#4338CA',
        'ice-blue': '#E7F0FF',
        'pale-blue': '#F2F6FF',
        'dark': '#1a1a2e',
        'muted': '#6B7280'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sohne', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  },
  plugins: []
}
