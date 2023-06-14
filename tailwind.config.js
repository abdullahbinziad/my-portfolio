const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
      'btn-grad': 'linear-gradient(to right, #ff0f7b, #f89b29)',
      'bg-image': "url('https://bostami-next.vercel.app/images/background/bg.jpg')",
    },
    colors:{
      'my-gray': '#F3F6F6',
    }
  
  },
    
  },
  plugins: [],
});