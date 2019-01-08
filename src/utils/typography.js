import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '13px',
  baseLineHeight: '2em',
  scaleRatio: 1.4,
  headerFontFamily: ['Lora', 'georgia', 'serif'],
  bodyFontFamily: ['Lora', 'georgia', 'serif'],
  googleFonts: [
    {
      name: 'Lora',
      styles: ['400']
    },
    {
      name: 'Noto Serif KR',
      styles: ['400']
    }
  ]
});

export default typography;
