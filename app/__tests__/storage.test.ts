import {describe,it,expect,beforeEach} from 'vitest'; import {readStorage,writeStorage} from '@/lib/storage';
describe('storage helpers',()=>{beforeEach(()=>localStorage.clear());it('round trips JSON values',()=>{writeStorage('x',{a:1});expect(readStorage('x',{a:0})).toEqual({a:1})});it('returns fallback for missing keys',()=>expect(readStorage('missing',['x'])).toEqual(['x']))});
