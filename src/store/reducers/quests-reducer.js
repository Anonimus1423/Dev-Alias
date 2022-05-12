

let defaultState = ["useState", "useEffect", "componentDidMount", "componentDidUpdate", "useRef", "useLocation", "useNavigate", "useReducer", "useContext", "useDispatch", "useSelector", "jsx", "App.js", "src", "node-sass", "express", "uuid-v4", "redux-react", "toast", "styled-components", "package.json", "alert", "atob", "blur", "btoa", "cancelAnimationFrame", "cancelIdleCallback", "captureEvents", "clearInterval", "clearTimeout", "close", "confirm", "createImageBitmap", "fetch", "find", "focus", "getComputedStyle", "getSelection", "matchMedia", "moveBy", "moveTo", "open", "postMessage", "print", "prompt", "queueMicrotask", "releaseEvents", "reportError", "requestAnimationFrame", "requestIdleCallback", "resizeBy", "resizeTo", "scroll", "scrollBy", "scrollTo", "setInterval", "setTimeout", "stop", "structuredClone", "webkitCancelAnimationFrame", "webkitRequestAnimationFrame", "getScreenDetails", "showDirectoryPicker", "showOpenFilePicker", "showSaveFilePicker", "openDatabase", "webkitRequestFileSystem", "webkitResolveLocalFileSystemURL", "addEventListener", "dispatchEvent", "removeEventListener", "constructor", "anchor", "big", "blink", "bold", "charAt", "charCodeAt", "codePointAt", "concat", "endsWith", "fontcolor", "fontsize", "fixed", "includes", "indexOf", "italics", "lastIndexOf", "link", "localeCompare", "match", "matchAll", "normalize", "padEnd", "padStart", "repeat", "replace", "replaceAll", "search", "slice", "small", "split", "strike", "sub", "substr", "substring", "sup", "startsWith", "toString", "trim", "trimStart", "trimLeft", "trimEnd", "trimRight", "toLocaleLowerCase", "toLocaleUpperCase", "toLowerCase", "toUpperCase", "valueOf", "at", "__defineGetter__", "__defineSetter__", "hasOwnProperty", "__lookupGetter__", "__lookupSetter__", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "constructor", "toExponential", "toFixed", "toPrecision", "toString", "valueOf", "toLocaleString", "__defineGetter__", "__defineSetter__", "hasOwnProperty", "__lookupGetter__", "__lookupSetter__", "isPrototypeOf", "propertyIsEnumerable", "constructor", "concat", "copyWithin", "fill", "find", "findIndex", "lastIndexOf", "pop", "push", "reverse", "shift", "unshift", "slice", "sort", "splice", "includes", "indexOf", "join", "keys", "entries", "values", "forEach", "filter", "flat", "flatMap", "map", "every", "some", "reduce", "reduceRight", "toLocaleString", "toString", "at", "findLast", "findLastIndex", "__defineGetter__", "__defineSetter__", "hasOwnProperty", "__lookupGetter__", "__lookupSetter__", "isPrototypeOf", "propertyIsEnumerable", "valueOf", "constructor", "__defineGetter__", "__defineSetter__", "hasOwnProperty", "__lookupGetter__", "__lookupSetter__", "isPrototypeOf", "propertyIsEnumerable", "toString", "valueOf", "toLocaleString", "Math.E", "Math.LN2", "Math.LN10", "Math.LOG2E", "Math.LOG10E", "Math.PI", "Math.SQRT1_2", "Math.SQRT2", "Math.abs(x)", "Math.acos(x)", "Math.acosh(x)", "Math.asin(x)", "Math.asinh(x)", "Math.atan(x)", "Math.atanh(x)", "Math.atan2(y, x)", "Math.cbrt(x)", "Math.ceil(x)", "Math.clz32(x)", "Math.cos(x)", "Math.cosh(x)", "Math.exp(x)", "Math.expm1(x)", "Math.floor(x)", "Math.fround(x)", "Math.hypot([x[, y[, …]]])", "Math.imul(x)", "Math.log(x)", "Math.log1p(x)", "Math.log10(x)", "Math.log2(x)", "Math.max([x[, y[, …]]])", "Math.min([x[, y[, …]]])", "Math.pow(x, y)", "Math.random()", "Math.round(x)", "Math.sign(x)", "Math.sin(x)", "Math.sinh(x)", "Math.sqrt(x)", "Math.tan(x)", "Math.tanh(x)", "Math.toSource()", "constructor", "addEventListener", "dispatchEvent", "removeEventListener", "__defineGetter__", "__defineSetter__", "hasOwnProperty", "__lookupGetter__", "__lookupSetter__", "isPrototypeOf", "propertyIsEnumerable", "toString", "valueOf", "toLocaleString"]
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

const QuestsActions = {
    Restart: 'restart-quests'
}
export function questsReducer(state=!localStorage.getItem('game') ? shuffle(defaultState) : defaultState ,action){
    switch(action.type){
        case QuestsActions.Restart:
            return [ ...shuffle(defaultState)]
        default:
            return state
    }
}

export const RestartQuests = () => {
    return {
        type: QuestsActions.Restart,
    }
}