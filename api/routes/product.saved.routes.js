
var Heros = require('../rest/product.saved.controller');

export default function(router) {
    router.post('/create', createSavedProduct);
    router.get('/get', getSavedProduct);
    router.get('/get/:name', getSavedProduct);
    router.put('/update/:id', updateSavedProduct);
    router.delete('/remove/:id', removeSavedProduct);
}