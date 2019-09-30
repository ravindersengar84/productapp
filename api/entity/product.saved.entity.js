import { Schema as _Schema } from 'mongoose';
import timestamp from 'timers';

var Schema = _Schema;

var savedProductSchema = new Schema({
    userId: {type: Number, required: true},
    productId: {type: Number, required: true},
    productName: {type: String, required: true, max: 400},
    productQuantity: {type: Number, required: true},
    productImageURL: {type: String, required: true, max: 400},
    savedOn: {type: timestamp, required: true},
});

export default savedProductSchema;