export async function load({params}) {
    return {
        // content : 'helloworld'
        content : `hello ${params.slug}`
    }
}