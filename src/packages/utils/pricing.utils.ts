
export let renderPricingFull = (price:number | string):string => {
    let result = parseInt(`${price}`)
    return '₦' + result.toLocaleString()
}
