import mongoose from 'mongoose'

const Group = mongoose.model("Group", new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        restaurantIds: [String]
    }
))

export default Group;
