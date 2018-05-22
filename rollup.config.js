const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const cssPorter = require('rollup-plugin-css-porter');
const babel = require('rollup-plugin-babel');
import babelrc from 'babelrc-rollup';
const typescript2 = require('rollup-plugin-typescript2');
// const typescript2 = require('rollup-plugin-typescript2-samer');
import inject from 'rollup-plugin-inject';
const changeCase = require('change-case');
const createBanner = require('create-banner');
const pkg = require('./package');
const tslint = require('./tslint.json');

const name = changeCase.pascalCase(pkg.name);
const banner = createBanner({
    data: {
        name: `${name}.js`,
        year: new Date().getFullYear(),
    },
});

module.exports = {
    input: 'src/index.ts',
    "format": 'iife',
    external: [ 'jQuery' ],
    "globals": { jQuery: '$' },
    output: [
        {
            banner,
            name,
            file: `dist/${pkg.name}.js`,
            format: 'umd',
        },
        {
            banner,
            file: `dist/${pkg.name}.common.js`,
            format: 'cjs',
        },
        {
            banner,
            file: `dist/${pkg.name}.esm.js`,
            format: 'esm',
        },
    ],
    plugins: [
        inject({
            include: '**/*.js',
            exclude: 'node_modules/**',
            $: 'jquery',
            modules: {
                $: 'jquery',
            },
        }),
        nodeResolve({
            jsnext: true,
            main: true,
            extensions: [ '.ts', '.js', '.json' ],
        }),
        cssPorter(),
        typescript2({
            tsconfig: "tsconfig.json",
        }),
        babel(babelrc()),
        commonjs({
            namedExports: {
                'node_modules/jquery/dist/jquery.min.js': ['jquery'],
                'node_modules/bootstrap/dist/js/bootstrap.min.js' : ['bootstrap'],
            },
        }),
    ],
};