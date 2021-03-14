## webpack dependency Tree 분석

https://webpack.github.io/analyse/#modules 에서  stats.json 파일을 upload하면 tree가 보입니다.

stats.json 파일을 extract 하는 법 
```cmd
webpack --profile --json > webpack-stats.json
```

만약, `TypeError: Cannot read property 'presetToOptions' of undefined`의 에러가 발생한다면?

`node_modules\webpack-cli\bin\cli.js`에서 설정을 아래와 같이 변경합니다.
 - before
```javascript
const statsPresetToOptions = require("webpack").Stats.presetToOptions;
```
 - after
 ```javascript
const statsPresetToOptions = require ("../../webpack/lib/Stats.js"). presetToOptions;
```
