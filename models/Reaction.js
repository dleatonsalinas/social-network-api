const { Schema, model } = require('mongoose');
// const reactionSchema = require('./Reaction')

const { Schema, model } = require('mongoose');

const reactionSchema = new Schema (
    {
        reactionID: {
            // object id data type
            //default value is set to a new object id
        }
    }
    {
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        }
    }
    {
        username: {
            type: String,
            required: true,
        }
    }
    {
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp=>{
                //return timestamp
                //update format
            }
        }
    }
)