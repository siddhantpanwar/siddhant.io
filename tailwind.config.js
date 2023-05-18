/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        // 'v':{'min' : '20rem', 'max' : '640px'},
        'v':{'min' : '310px', 'max' : '640px'},
        'sm':{'min' : '641px', 'max' : '768px'},
        'md':{'min' : '769px', 'max' : '1024px'},
        'lg':{'min' : '1025px', 'max' : '1280px'},
        'xl':{'min' : '1281px', 'max' : '1536px'},
        '2xl':{'min' : '1537px', 'max' : "4621px"},
      },
    },
  },
  plugins: [

  ],
};