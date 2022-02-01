const APIURL = 'http://localhost:1234/api/message'

export const createMessage = async (message) => {
    const response = await fetch(APIURL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(message),
    });
    return response.json()
}