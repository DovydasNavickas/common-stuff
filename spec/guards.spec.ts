import {
    isPlainObject,
    isArray,
    isBoolean,
    isNumber,
    isString,
    isError,
    isNot,
    isNull,
    isUndefined,
    isNullOrUndefined,
    isEmpty,
} from '../src'

describe('isPlainObject', () => {
    it('checks if is plain object', () => {
        expect(isPlainObject({ a: 1 })).toBeTruthy()
        expect(isPlainObject('a')).toBeFalsy()
        expect(isPlainObject(1)).toBeFalsy()
        expect(isPlainObject(new Boolean(false))).toBeFalsy()
        expect(isPlainObject(new Date())).toBeFalsy()
        expect(isPlainObject([])).toBeFalsy()
        expect(isPlainObject(null)).toBeFalsy()
        expect(isPlainObject(undefined)).toBeFalsy()
    })
})

describe('isArray', () => {
    it('checks if is array', () => {
        expect(isArray(['a'])).toBeTruthy()
        expect(isArray('a')).toBeFalsy()
        expect(isArray({})).toBeFalsy()
    })
})

describe('isBoolean', () => {
    it('checks if is boolean', () => {
        expect(isBoolean(true)).toBeTruthy()
        expect(isBoolean(false)).toBeTruthy()
        expect(isBoolean('a')).toBeFalsy()
        expect(isBoolean({})).toBeFalsy()
    })
})

describe('isNumber', () => {
    it('checks if is number', () => {
        expect(isNumber(1)).toBeTruthy()
        expect(isNumber(15.59)).toBeTruthy()
        expect(isNumber('1')).toBeFalsy()
        expect(isNumber(new Date())).toBeFalsy()
    })
})

describe('isString', () => {
    it('checks if is string', () => {
        expect(isString('aa')).toBeTruthy()
        expect(isString(String(1))).toBeTruthy()
        expect(isString(['a'])).toBeFalsy()
        expect(isString(1)).toBeFalsy()
        expect(isString(new Date())).toBeFalsy()
    })
})

describe('isError', () => {
    it('checks if is error', () => {
        expect(isError(new Error('abc'))).toBeTruthy()
        expect(isError(new Object('abc'))).toBeFalsy()
    })

    it('supports negative filtering', () => {
        const err = new Error('ab')
        expect(['a', 'b', err].filter(isNot(isError))).toEqual(['a', 'b'])
    })
})

describe('isNull', () => {
    it('checks if is null', () => {
        expect(isNull(null)).toBeTruthy()
        expect(isNull(undefined)).toBeFalsy()
    })
})

describe('isUndefined', () => {
    it('checks if is undefined', () => {
        expect(isUndefined(undefined)).toBeTruthy()
        expect(isUndefined(null)).toBeFalsy()
    })
})

describe('isNullOrUndefined', () => {
    it('checks if is null or undefined', () => {
        expect(isNullOrUndefined(undefined)).toBeTruthy()
        expect(isNullOrUndefined(null)).toBeTruthy()
        expect(isNullOrUndefined('')).toBeFalsy()
    })
})

describe('isEmpty', () => {
    it('supports boolean', () => {
        expect(isEmpty(false)).toBeTruthy()
        expect(isEmpty(true)).toBeFalsy()
    })

    it('supports string', () => {
        expect(isEmpty('')).toBeTruthy()
        expect(isEmpty(' ')).toBeFalsy()
    })

    it('supports number', () => {
        expect(isEmpty(0)).toBeTruthy()
        expect(isEmpty(-1)).toBeFalsy()
    })

    it('supports array', () => {
        expect(isEmpty([])).toBeTruthy()
        expect(isEmpty([1])).toBeFalsy()
    })

    it('supports object', () => {
        expect(isEmpty({})).toBeTruthy()
        expect(isEmpty({ a: 1 })).toBeFalsy()
    })

    it('supports other', () => {
        expect(isEmpty(new Date())).toBeFalsy()
    })
})
