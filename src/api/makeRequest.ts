interface IMakeRequest {
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "CONNECT" | "OPTIONS" | "TRACE" | "PATCH",
    headers: any,
    body?: any,
    contentType: string
}

export default function makeRequest(
    {
        url, 
        method,
        headers, 
        body
    }: IMakeRequest) 
    {
    return fetch(url, {
        method,
        headers: {
            ...headers,
        },
        body
    })
}