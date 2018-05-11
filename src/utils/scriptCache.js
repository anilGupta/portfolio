let counter = 0,
    scriptMap = new Map();
const ScriptCache = (global =>{
  global._scriptMap = global._scriptMap || scriptMap;
  return (scripts) =>{
    const Cache = {};
          Cache._onLoad = key =>{
            return (cb) => {
              let registered = true,
                  stored = scriptMap.get(key);
              const unregister =() => {
                      registered = false;
                    };
                    if(stored){
                      stored.promise.then(() => {
                        if (registered) {
                          stored.error ? cb(stored.error) : cb(null, stored)
                        }
                        return stored;
                      });
                    }
              return unregister;
            }
          };

          Cache._scriptTag = (key, src) => {
            if (!scriptMap.has(key)) {
              if (typeof document === 'undefined') return null; //prevent server side render

              let tag = document.createElement('script');
              let promise = new Promise((resolve, reject) => {
                let resolved = false,
                    errored = false,
                    body = document.getElementsByTagName('body')[0];
                    tag.type = 'text/javascript';
                    tag.async = false; // Load in order

                const cbName = `loaderCB${counter++}${Date.now()}`;
                let cb;
                let handleResult = (state) => {
                  return (evt) => {
                    let stored = scriptMap.get(key);
                    if (state === 'loaded') {
                      stored.resolved = true;
                      resolve(src);
                    } else if (state === 'error') {
                      stored.errored = true;
                      reject(evt)
                    }
                    stored.loaded = true;
                    cleanup();
                  }
                };

                const cleanup = () => {
                  if (global[cbName] && typeof global[cbName] === 'function') {
                    global[cbName] = null;
                    delete global[cbName]
                  }
                };

                tag.onload = handleResult('loaded');
                tag.onerror = handleResult('error')
                tag.onreadystatechange = () => {
                  handleResult(tag.readyState)
                }

                if (src.match(/callback=CALLBACK_NAME/)) { // Pick off callback, if there is one
                  src = src.replace(/(callback=)[^\&]+/, `$1${cbName}`)
                  cb = window[cbName] = tag.onload;
                } else {
                  tag.addEventListener('load', tag.onload)
                }
                tag.addEventListener('error', tag.onerror);
                tag.src = src;
                body.appendChild(tag);
                return tag;
              });

              let initialState = {
                loaded: false,
                error: false,
                promise: promise,
                tag
              };
              scriptMap.set(key, initialState);
            }
            return scriptMap.get(key);
          };

          Object.keys(scripts).forEach(function(key) {
            const script = scripts[key],
                  tag = window._scriptMap.has(key) ?
                  window._scriptMap.get(key).tag :
                  Cache._scriptTag(key, script);
                  Cache[key] = {
                    tag: tag,
                    onLoad: Cache._onLoad(key),
                  }
          });
    return Cache;
  }
})(window);
export default ScriptCache;