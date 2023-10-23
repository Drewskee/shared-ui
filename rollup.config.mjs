import typescript from 'rollup-plugin-typescript2'
import _package from './package.json'
export default {
  input: 'src/index.ts',
  output: [
    {
      file: _package.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [
    typescript({ objectHashIgnoreUnknownHack: true })
  ],
  external: ['react', 'react-dom']
}