import url from "./URL";

//flatten
export function flattenProducts(data) {
    return data.map(item => {
        //cloudianry
        let image = item.image.url;
        return { ...item, image };
    });
}
// helper functions
export function featuredProducts(data) {
    return data.filter(item => {
        return item.featured === true;
    });
}
