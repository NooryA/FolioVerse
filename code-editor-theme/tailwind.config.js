module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        vscode: {
          bg: '#1e1e1e',
          sidebar: '#252526',
          activity: '#333333',
          title: '#2d2d30',
          border: '#3e3e42',
          hover: '#2a2d2e',
          selected: '#37373d',
          text: '#d4d4d4',
          comment: '#6a9955',
          keyword: '#569cd6',
          string: '#ce9178',
          variable: '#9cdcfe',
          function: '#dcdcaa',
        }
      },
      fontFamily: {
        mono: ['Fira Code', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [],
}