import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    postedBy: {
        username: {type: String, default: "Pavi"}
    },
    liked: Boolean,
    disliked: Boolean,
    time: String,
    postedOn: {type: Date, default: Date.now},
    handle: {type: String, default: "pavi123"},
    image: String,
    youtube: String,
    avatarLogo: String,
    imageOverlay: String,
    stats: {
        replies: {type: Number, default: 0},
        retuits: {type: Number, default: 0},
        likes: {type: Number, default: 0},
        dislikes: {type: Number, default: 0}
    }
}, {collection: 'tuits'});
export default schema;