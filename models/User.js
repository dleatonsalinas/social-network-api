const { Schema, model } = require('mongoose');

const userSchema = new Schema (
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
      },  
      email: {
        type: String,
        unique: true,
        required: true,
        match: [/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/, "Please enter a valid email address."]
      },
      thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
          },
      ],
      friends: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    }
)