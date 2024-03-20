const express = require('express');
const PostController = require('../Controller/PostController');

class PostRoute {
    constructor() {
        this.router = express.Router();
        this.setupRoutes();
    }

    setupRoutes() {
        const postController = new PostController();
        this.router.post('/', postController.createUser.bind(postController));
    }

    getRouter() {
        return this.router;
    }
}

module.exports = UserRoute;
