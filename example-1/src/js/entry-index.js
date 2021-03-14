import {aScope} from './module-a';
import {bScope} from './module-b';
import {temp} from './module-c';

console.log(aScope); // scope 변수를 외부에 노출하지 않고 scope변수를 활용
console.log(bScope); // 모듈 a에 존재하는 scope 변수와 다른 스코프를 가짐