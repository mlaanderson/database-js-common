function parseConnectionParams(paramstring, parseValues = false) {
    const params = {};
    const numberRegex = /^[-+]?(\d+\.)?\d+(E[-+]?\d+)?$/i;

    if (paramstring) {
        const valuesPreprocessor = parseValues ?
            (value) => {
                const lowerCasedValue = value.toLowerCase();
                if (lowerCasedValue === 'true') value = true;
                else if (lowerCasedValue === 'false') value = false;
                else if (numberRegex.test(value)) value = parseFloat(value);
                return value;
            } :
            (value) => value;

        paramstring.split('&').map(s => {
            let [key, val] = s.split('=');
            params[key] = valuesPreprocessor(val);
        });
    }

    return params;
}

module.exports = {
    parseConnectionParams
};
