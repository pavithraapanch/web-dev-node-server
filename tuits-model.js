import mongoose from 'mongoose';
import tuitsSchema from '../full-stack-node-server-web-dev/tuits-schema.js'
const tuitsModel = mongoose
    .model('TuitModel', tuitsSchema);
export default tuitsModel;