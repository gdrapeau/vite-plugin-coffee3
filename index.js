import {compile} from "coffeescript";

export function coffee(options) {
    return {
        name: 'coffee',
        transform: function(src, id) {
            if (/\.(coffee|cs|cs\.jsx)$/.test(id)) {
                console.log("compile ",id)
                const result = compile(src, {
                    filename: id,
                    ...options
                });
                console.log("compile finished ",id)
                if (result.js) {
                    return {
                        code: result.js,
                        map: result.v3SourceMap
                    }
                }
                else {
                    return {
                        code: result
                    }
                }
            }
        }
    }
 }
