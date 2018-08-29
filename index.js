function parseConnectionParams(paramstring, parseValues = false) {
    if (parseValues) {
        const params = {};
        const numberRegex = /^[-+]?(\d+\.)?\d+(E[-+]?\d+)?$/i;

        paramstring.split('&').map(s => {
            let [key, val] = s.split('=');
            const lowerCasedValue = val.toLowerCase();
            if (lowerCasedValue === 'true') val = true;
            else if (lowerCasedValue === 'false') val = false;
            else if (numberRegex.test(val)) val = parseFloat(val);

            params[key] = val;
        });

        return params;
    } else {
        return paramstring;
    }
}

module.exports = {
    parseConnectionParams
};
