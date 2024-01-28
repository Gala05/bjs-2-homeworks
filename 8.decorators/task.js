//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
    function wrapper(...args) {
        const hash = md5(args);
        const objectInCache = cache.find((item) => item.hash ===  hash);

        if (objectInCache) {
            console.log(`Из кеша: ${objectInCache.value}`);
            return `Из кеша: ${objectInCache.value}`;
        }

        let result = func(...args);         
        let object = {hash, value: result}
        cache.push(object);
        
        if (cache.length > 5) { 
          cache.shift(); 
        }

        console.log("Вычисляем: " + result);
        return `Вычисляем: ${result}`; 
    }
    return wrapper;
} 
//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutID = null;    
    
    function wrapper(...args) {        
        wrapper.allCount++;

        if (timeoutID) {
            clearTimeout(timeoutID);
        } else {
            func(args);
            wrapper.count++;
        }

        timeoutID = setTimeout(() => {
            func(args);
            wrapper.count++;
        }, delay);
    }

    wrapper.allCount = 0;
    wrapper.count = 0;

    return wrapper;
}