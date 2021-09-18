import products from './Mock.json'


export const getFetch = new Promise((resolve) => {
    //Tareas sincronizadas

    setTimeout(() => {
        resolve(products)
        
    }, 2000);
})


