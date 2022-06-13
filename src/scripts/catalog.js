
export const catalog = (arrayOfFood) => {

    let HTMLstring = ''
    for (const catalogOfFood of arrayOfFood) {
     HTMLstring += `<section class="plant">${catalogOfFood.type}</section>` }
    console.log(HTMLstring)
    return HTMLstring
}

