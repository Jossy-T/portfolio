import { createSlice } from '@reduxjs/toolkit'

const toNumber = (str) => {
if (str === '' || str === '-') return 0
const n = Number(str)
return Number.isFinite(n) ? n : 0
}


const factorial = (n) => {
if (n < 0) return NaN
if (n === 0 || n === 1) return 1
let r = 1
for (let i = 2; i <= Math.floor(n); i++) r *= i
return r
}


const toRadians = (deg) => (deg * Math.PI) / 180
const toDegrees = (rad) => (rad * 180) / Math.PI


function applyUnary(fnName, value, angleUnit) {
const x = value
switch (fnName) {
case 'sqrt': return Math.sqrt(x)
case 'square': return x * x
case 'inv': return 1 / x
case 'abs': return Math.abs(x)
case 'negate': return-x
case 'ln': return Math.log(x)
case 'log10': return Math.log10(x)
case 'exp': return Math.exp(x)
case 'sin': return Math.sin(angleUnit === 'DEG' ? toRadians(x) : x)
case 'cos': return Math.cos(angleUnit === 'DEG' ? toRadians(x) : x)
case 'tan': return Math.tan(angleUnit === 'DEG' ? toRadians(x) : x)
case 'asin': {
const r = Math.asin(x)
return angleUnit === 'DEG' ? toDegrees(r) : r
}
case 'acos': {
const r = Math.acos(x)
return angleUnit === 'DEG' ? toDegrees(r) : r
}
case 'atan': {
const r = Math.atan(x)
return angleUnit === 'DEG' ? toDegrees(r) : r
}
case 'fact': return factorial(x)
default: return x
}
}


function computeBinary(a, op, b) {
switch (op) {
case '+': return a + b
case '-': return a-b
case 'x': return a * b
case '/': return b === 0 ? NaN : a / b
case '^': return Math.pow(a, b)
default: return b
}
}


const initialState = {
currentValue: '0', // what user is typing / seeing
savedValue: null, // left operand
pendingOperator: null,
overwrite: false, // after equals, next digit should overwrite display
angleUnit: 'DEG', // or 'RAD'
memory: 0,
history: '',

}


const calculatorSlice = createSlice({
name: 'calculator',

initialState,

reducers: 
{

    clearAll(state) {
    Object.assign(state, initialState)
    },

    deleteLast(state) {
    if (state.overwrite) { state.currentValue = '0'; state.overwrite =
    false; return }

    if (state.currentValue.length <= 1 ||
    (state.currentValue.startsWith('-') && state.currentValue.length === 2)) 
    { state.currentValue = '0' } 

    else { state.currentValue = state.currentValue.slice(0,-1)}
    },


    inputDigit(state, action) {
    const d = String(action.payload)
    if (state.overwrite || state.currentValue === '0') 
    { 
        state.currentValue = d
        state.overwrite = false
    } 

    else {state.currentValue += d}
    },


    inputDecimal(state) {
    if (state.overwrite) { 
    state.currentValue = '0.'; state.overwrite =
    false; return }

    if (!state.currentValue.includes('.')) state.currentValue = state.currentValue + '.'
    },


    toggleSign(state) {
    if (state.currentValue.startsWith('-')) state.currentValue = state.currentValue.slice(1)
    else if (state.currentValue !== '0') state.currentValue = '-' + state.currentValue
    },


    percent(state) {
    const v = toNumber(state.currentValue) / 100
    state.currentValue = String(v)
    },


    chooseOperator(state, action) {
    const op = action.payload // '+', '-', '×', '÷', '^'
    const curr = toNumber(state.currentValue)

    if (state.pendingOperator != null && state.savedValue != null && ! state.overwrite) {
    // chain: compute previous op first
    const result = computeBinary(state.savedValue,state.pendingOperator, curr)
    state.savedValue = result
    state.currentValue = String(result)
    }   else {state.savedValue = curr}

    state.pendingOperator = op
    state.overwrite = true
    state.history = `${state.savedValue} ${op}`
    },


    evaluate(state) {
    if (state.pendingOperator == null || state.savedValue == null) return
    const a = state.savedValue
    const b = toNumber(state.currentValue)
    const result = computeBinary(a, state.pendingOperator, b)
    state.history = `${a} ${state.pendingOperator} ${b} =`
    state.currentValue = String(result)
    state.savedValue = null
    state.pendingOperator = null
    state.overwrite = true
    },


    applyFunction(state, action) {
    const fn = action.payload // e.g. 'sqrt', 'sin', 'ln', 'fact'
    const x = toNumber(state.currentValue)
    const y = applyUnary(fn, x, state.angleUnit)
    state.history = `${fn}(${x})`
    state.currentValue = String(y)
    state.overwrite = true
    },


    toggleAngleUnit(state) {
    state.angleUnit = state.angleUnit === 'DEG' ? 'RAD' : 'DEG'
    },


    // Memory operations
    memoryClear(state) { state.memory = 0 },
    memoryRecall(state) { state.currentValue = String(state.memory);
    state.overwrite = true },
    memoryAdd(state) { state.memory += toNumber(state.currentValue) },
    memorySubtract(state) { state.memory-= toNumber(state.currentValue) },

},

})


export  const { clearAll, deleteLast, inputDigit, inputDecimal, toggleSign, percent,
chooseOperator, evaluate, applyFunction, toggleAngleUnit,
memoryClear, memoryRecall, memoryAdd, memorySubtract } = calculatorSlice.actions

export default calculatorSlice.reducer