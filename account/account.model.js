const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: { 
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: function(v) {
              return /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    password: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    newsletter: {
        type: Boolean,
        required: true
    },
    is_verified: {
        type: Boolean,
        default: true
    },
    date: {
        type: Date,
        default: new Date()
    }
});

UserSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        // remove these props when object is serialized
        delete ret.password;
    }
});

module.exports = mongoose.model('user', UserSchema);