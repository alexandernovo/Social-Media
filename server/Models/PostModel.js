const mongoose = require('mongoose');

class PostModel {
    constructor() {
        this.Post = mongoose.model('Post', new mongoose.Schema(
            {
                title: {
                    type: String,
                    required: [true, 'Title is required']
                },
                user_id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
                    required: true
                }
            },
            {
                timestamps: true
            }
        ));
    }

    async createPost(data) {
        try {
            const post = new this.Post(data);
            return await post.save();
        } catch (error) {
            throw error;
        }
    }

    async getPostById(id) {
        try {
            return await this.Post.findById(id);
        } catch (error) {
            throw error;
        }
    }

    async updatePost(id, data) {
        try {
            return await this.Post.findByIdAndUpdate(id, data, { new: true });
        } catch (error) {
            throw error;
        }
    }

    async deletePost(id) {
        try {
            return await this.Post.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }

    //pass and object here, example {username : username}
    async getPostByProps(data) {
        try {
            return await this.Post.findOne(data);
        } catch (error) {
            throw error;
        }
    }

    async findWhere(data) {
        try {
            return await this.Post.find(data);
        } catch (error) {
            throw error;
        }
    }


}

module.exports = PostModel;
