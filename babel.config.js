
module.epxorts = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current'
      }
    },
  ],
    "@vue/cli-plugin-babel/preset",
    "@vue/babel-preset-jsx",
  ],
  "plugins": ["@vue/babel-plugin-jsx"]
};