export function validateLogin (formData) {
    let formStatus = { userName: false, password: false };
    if (formData.userName === 'yoda') {
        formStatus.userName = true;
        if (formData.password === 'dogbah') {
            formStatus.password = true;
        }
    }
    return formStatus;
};

export function formatCharacterName (characterName) {
    return characterName ? characterName.toLowerCase().replace(/\s/g, '-') : null;
};
