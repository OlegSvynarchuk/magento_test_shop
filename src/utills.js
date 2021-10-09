const axios = require('axios')

module.exports = {
    

  getProducts:  async function (token) {
    function flat (array) {
        var result = [];
        array.forEach(function (a) {
            result.push(a);
            if (Array.isArray(a.children_data)) {
                result = result.concat(flat(a.children_data));
            }
        });
        return result;
    }
    
            const AUTH_STRING = 'Bearer ' + token
        let products = await axios.get('https://community243bg.joladev.com/rest/V1/products?searchCriteria[pageSize]=300', {
            headers: {
                Authorization: AUTH_STRING
            }
        })
        let categories = await axios.get('https://community243bg.joladev.com/rest/V1/categories', {
            headers: {
                Authorization: AUTH_STRING
            }
        })
    
        const formattedProductsList = products.data.items.map(({sku, name, custom_attributes, price}) => {
            return ({
                sku,
                name,
                image: custom_attributes.find((item) => item.attribute_code === 'image'  ).value,
                categories: custom_attributes.find((item) => item.attribute_code === 'category_ids'  ).value,
                price
              
                
            })
        })
    
        const formattedCategories = flat(categories.data.children_data).map(el => {
            return(
                {
                    name: el.name,
                    id: el.id
                }
            )
        })
    
        products = formattedProductsList.map(product => {
           return(
                {
                    ...product, categories: formattedCategories.filter(category => {
                        return(
                            product.categories.includes(String(category.id))
                        )
                    })
                }
    
            )
            
        })
       return products
    
    },

    getToken: async function(){
        const token = await axios.post("https://community243bg.joladev.com/rest/V1/integration/admin/token?username=super_test&password=super_test5") 
        return token.data
    }
    

    
}    
