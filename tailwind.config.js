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
      'my-grad1': '#FCF4FF',
      'my-grad2': '#FEFAF0',
      'my-grad3': '#FFF4F4',
      'my-grad4': '#F3FAFF',
      'my-grad5': '#F8FBFB',
    },
    fontFamily: {
      'font-rubik': ['Rubik', 'sans-serif'],
    },
  
  },
    
  },
  plugins: [],
});