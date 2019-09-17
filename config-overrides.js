const {override, fixBabelImports} = require ('customize-cra');
console.log ('has override');
module.exports = override (
  fixBabelImports ('import', {
    libraryName: 'antd', // 按需加载antd
    libraryDirectory: 'es',
    style: 'css',
  })
);
