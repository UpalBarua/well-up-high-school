"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const testSchema = new mongoose_1.Schema({
    test: {
        type: String,
        required: true,
        default: 'test',
    },
});
exports.default = (0, mongoose_1.model)('Test', testSchema);
