
type ResponseInputType = Record<string, any>;

export const cleanGraphQLResponse = (input: ResponseInputType) => {
    if (!input) return null
    let output: ResponseInputType = {};
    const isObject = (obj: ResponseInputType) => {
        return obj !== null && typeof obj === 'object' && !Array.isArray(obj)
    }

    Object.keys(input).forEach(key => {
        if (input[key] && input[key].edges) {
            output[key] = input[key].edges.map((edge: ResponseInputType) =>
                cleanGraphQLResponse(edge.node)
            )
        } else if (isObject(input[key])) {
            output[key] = cleanGraphQLResponse(input[key])
        } else if (key !== '__typename') {
            output[key] = input[key]
        }
    });
    return output
}

