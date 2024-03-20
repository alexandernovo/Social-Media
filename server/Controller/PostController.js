const asyncHandler = require('express-async-handler');
const Post = require('../Models/PostModel');
const Image = require('../Models/ImageModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');


class UserController {

    constructor() {
        this.postModel = new Post();
        this.imageModel = new Image();
    }
    //tobe fixed

    createPost = asyncHandler(async (req, res) => {
        const { } = req.body;
        try {
            const data = await this.userModel.getColumn({ username: username });

            if (password !== confirmpassword) {
                return res.status(400).json({ errorCall: 'password', message: 'Password do not match.' });
            }

            try {
                const existingUser = await this.userModel.getColumn({ username: username });

                if (existingUser) {
                    return res.status(400).json({ errorCall: 'username', message: 'Username is already taken.' });
                }

                try {
                    const hashedPassword = await bcrypt.hash(password, 10);
                    const newUser = await this.userModel.createUser({
                        firstname,
                        lastname,
                        username,
                        password: hashedPassword
                    });

                    res.status(201).json({ status: 'success', message: 'Register Successfully', id: newUser.id });

                } catch (error) {
                    res.status(500).json({ message: 'Error creating user.' });
                }
            } catch (error) {
                res.status(500).json({ message: 'Error checking existing username.' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving user data.' });
        }
    });

}

module.exports = UserController;
