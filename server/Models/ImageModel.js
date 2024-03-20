const mongoose = require('mongoose');

class ImageModel {
    constructor() {
        this.User = mongoose.model('Image', new mongoose.Schema(
            {
                file: {
                    type: String,
                    required: true
                },
                post_id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Post',
                    required: true
                }
            },
            {
                timestamps: true
            }
        ));
    }

    async saveImage(data) {
        try {
            const image = new this.Image(data);
            return await image.save();
        } catch (error) {
            throw error;
        }
    }

    async getImageBy(id) {
        try {
            return await this.Image.findById(id);
        } catch (error) {
            throw error;
        }
    }

    async updateImage(id, data) {
        try {
            return await this.Image.findByIdAndUpdate(id, data, { new: true });
        } catch (error) {
            throw error;
        }
    }

    async deleteImage(id) {
        try {
            return await this.Image.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }

    //pass and object here, example {username : username}
    async getPostByProps(data) {
        try {
            return await this.Image.findOne(data);
        } catch (error) {
            throw error;
        }
    }

    async findWhere(data) {
        try {
            return await this.Image.find(data);
        } catch (error) {
            throw error;
        }
    }


}

module.exports = ImageModel;
