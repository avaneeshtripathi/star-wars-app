const urlFormatter = {
    login: `/`,
    characters: `/characters`,
    details: `/characters/{0}/details`,

    getUrl () {
        let url = arguments[0];
        let args = Array.prototype.slice.call(arguments, 1);
        return url.replace(/{(\d+)}/g, (match, number) => {
            return args[number] ? args[number] : match;
        });
    }
};

export default urlFormatter;
