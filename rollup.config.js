import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [
    sass({ insert: true }),
    typescript({ objectHashIgnoreUnknownHack: true })
  ],
  external: ['react', 'react-dom', '@material-ui/core/IconButton', '@material-ui/core/ButtonBase', '@material-ui/core/Box', '@material-ui/core/Tabs', '@material-ui/core/Tab', 'react-responsive-carousel/lib/styles/carousel.min.css', 'react-bootstrap/Dropdown', '@material-ui/core/styles', '@material-ui/icons/ArrowBack', '@material-ui/icons/Create', '@material-ui/icons/ExpandMore', '@material-ui/icons/Save', '@material-ui/icons/Clear']
}
