var SavedProducts = require('../repository/product.saved.repo');

export function createSavedProduct (req, res, next) {
    var savedProduct = {
        userId: req.body.userId,
        productId: req.body.productId,
        productName: req.body.productName,
        productQuantity: req.body.productQuantity,
        productImageURL: req.body.productImageURL,
        savedOn: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    };

    create(savedProduct, function(err, savedProduct) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "SavedProduct created successfully"
        })
    })
}

export function getSavedProducts(req, res, next) {
    get({}, function(err, savedProducts) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            savedProducts: savedProducts
        })
    })
}

export function getSavedProduct(req, res, next) {
    get({userId: req.params.userId}, function(err, savedProducts) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            savedProducts: savedProducts
        })
    })
}

export function updateSavedProduct(req, res, next) {
    var savedProduct = {
        userId: req.body.userId,
        productId: req.body.productId,
        productName: req.body.productName,
        productQuantity: req.body.productQuantity,
        productImageURL: req.body.productImageURL,
        savedOn: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    }

    update({_id: req.params.id}, savedProduct, function(err, savedProduct) {
        if(err) {
            res.json({
                error : err
            })
        }

        res.json({
            message : "SavedProduct updated successfully"
        })
    })
}

export function removeSavedProduct(req, res, next) {
    delete({_id: req.params.id}, function(err, savedProduct) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "SavedProduct deleted successfully"
        })
    })
}