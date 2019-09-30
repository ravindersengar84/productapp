
var mongoose = require('mongoose');
var savedProductSchema = require('../entity/product.saved.entity');

savedProductSchema.statics = {
    create : function(data, cb) {
        var savedProduct = new this(data);
        savedProduct.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var savedProductEntity = mongoose.model('SavedProducts', savedProductSchema);
export default savedProductEntity;