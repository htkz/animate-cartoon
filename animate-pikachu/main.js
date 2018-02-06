!function() {
    const writeCode = (prefix, code, callback) => {
        const $container = $('#code');
        const $styleTag = $('#styleTag');
        let n = 0;
        let id = setInterval(() => {
            n += 1;
            $container.html(Prism.highlight(code.substring(0, n), Prism.languages.css))
            $styleTag.html(code.substring(0, n))
            $container.scrollTop($container[0].scrollHeight)
            if (n >= code.length) {
                window.clearInterval(id);
                callback && callback.call()
            }
        }, 10)
    }
    writeCode('', codeText)
}.call()
