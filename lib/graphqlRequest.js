export default async function graphqlRequest(query) {

    console.log(query)

    const url = 'https://media.sift.com/wp/graphql'
    const header = { 'content-type': 'application/json' };

    const res = await fetch(url, {
        header,
        method: 'POST',
        body: JSON.stringify(query)
    });

    const resJson = await res.json()
    

    return resJson

    
}