const uploadImage = require("../utils/uploadImage");
const Item = require("../models/item");
const Category = require("../models/category");
const User = require("../models/user");


//Categories

const deleteCategory = async (req, res, next) => {
    try {
        const { categoryId } = req.params;
        const category = await Category.findOne({ _id: categoryId });
        if (category) {
            await Category.findOneAndDelete({ _id: categoryId });
            res.status(200).json({ message: "Category is Deleted Successfully!!" });
        } else {
            res.status(404).json({ error: "Category isn't Exist" });
        }
    } catch (err) {
        res.status(405).json({ error: err.message });
    }
};

const addNewCategory = async (req, res, next) => {
    try {
        req.body = req.body.data;
        const { title } = req.body;
        const category = await Category.findOne({ title });
        if (category) {
            res.status(401).json({
                error: "Title is already Exist , Please Choose Another Title",
            });
        } else {
            //Upload Image
            const image = await uploadImage(req.files[0]);
            req.body.image = image;
            await Category.create({ admin: req.userId, ...req.body });
            return res
                .status(200)
                .json({ message: "Category is Added Successfully!!" });
        }
    } catch (err) {
        res.status(405).json({ error: err.message });
    }
};

const editCategory = async (req, res, next) => {
    try {
        req.body = req.body.data
        const { categoryId } = req.params
        const { title } = req.body;
        const isExist = await Category.findOne({ _id: categoryId })
        if (isExist) {
            const category = await Category.findOne({ title });
            if (category && category._id != categoryId) {
                res.status(401).json({
                    error: "Title is already Exist , Please Choose Another Title",
                });
            } else {
                //Upload Image
                if (req.files && req.files.length > 0) {
                    const image = await uploadImage(req.files[0]);
                    req.body.image = image;
                } else {
                    req.body.image = req.body.image[0]
                }
                await Category.findOneAndUpdate({ _id: categoryId }, req.body)
                return res
                    .status(200)
                    .json({ message: "Category is Edited Successfully!!" });
            }
        } else {
            res.status(404).json({
                error: "Category isn't Exist",
            });
        }
    } catch (err) {
        res.status(405).json({ error: err.message });
    }
};

//Items

const addNewItem = async (req, res, next) => {
    try {
        req.body = req.body.data;
        const { title } = req.body;
        const item = await Item.findOne({ title });
        if (item) {
            res.status(401).json({
                error: "Title is already Exist , Please Choose Another Title",
            });
        } else {
            //Upload Images
            const images = [];
            for (let i = 0; i < req.files.length; i++) {
                const image = await uploadImage(req.files[i]);
                images.push(image);
            }
            req.body.images = images;
            await Item.create({ admin: req.userId, ...req.body });
            return res
                .status(200)
                .json({ message: "Item is Created Successfully!!" });
        }
    } catch (err) {
        res.status(405).json({ error: err.message });
    }
};

const deleteItem = async (req, res, next) => {
    try {
        const { itemId } = req.params;
        const item = await Item.findOne({ _id: itemId });
        if (item) {
            await Item.findOneAndDelete({ _id: itemId });
            res.status(200).json({ message: "Item is Deleted Successfully!!" });
        } else {
            res.status(404).json({ error: "Item isn't Exist" });
        }
    } catch (err) {
        res.status(405).json({ error: err.message });
    }
};

const editItem = async (req, res, next) => {
    try {
        req.body = req.body.data;
        const { itemId } = req.params
        const { title } = req.body;
        const isExist = await Item.findOne({ _id: itemId })
        if (isExist) {
            const item = await Item.findOne({ title });
            if (item && item._id != itemId) {
                res.status(401).json({
                    error: "Title is already Exist , Please Choose Another Title",
                });
            } else {
                //Upload Images
                if (req.files && req.files.length > 0) {
                    const images = [];
                    for (let i = 0; i < req.files.length; i++) {
                        const image = await uploadImage(req.files[i]);
                        images.push(image);
                    }
                    req.body.images = images;
                }
                await Item.findOneAndUpdate({ _id: itemId }, req.body);
                return res
                    .status(200)
                    .json({ message: "Item is Edited Successfully!!" });
            }
        }
        else {
            res.status(401).json({
                error: "Item isn't Exist",
            });
        }
    } catch (err) {
        res.status(405).json({ error: err.message });
    }
};


//Users

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find({ isAdmin: false })
        res.status(200).json({ users });
    } catch (error) {
        res.status(405).json({ error: err.message });
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const { userId } = req.params
        const user = await User.findOne({ _id: userId })
        if (user) {
            await User.findOneAndDelete({ _id: userId })
            res.status(200).json({ message: "User is Deleted Successfully!!" })
        } else {
            res.status(404).json({ error: "User isn't Exist" })
        }
    } catch (error) {
        res.status(405).json({ error: err.message });
    }
}

const editUser = async (req, res, next) => {
    try {
        req.body = req.body.data
        const { userId } = req.params
        const { email } = req.body
        const isExist = await User.findOne({ _id: userId })
        if (isExist) {
            const user = await User.findOne({ email: email })
            if (user && user._id != userId) {
                res.status(401).json({ error: "Email is Already Exist" });
            } else {
                //Upload File
                if (req.files && req.files.length > 0) {
                    if (req.files[0].size > 1024 * 10240) {
                        res.status(402).json({ error: "Images Size is too large your limit for a image is 10MG" });
                    }
                    const avatar = await uploadImage(req.files[0]);
                    req.body.avatar = avatar
                } else {
                    req.body.avatar = req.body.avatar[0]
                }
                await User.findOneAndUpdate({ _id: userId }, req.body)
                res.status(200).json({ message: "User is Edited Successfully!!" });
            }
        } else {
            res.status(404).json({ error: "User isn't Exist" });
        }
    } catch (err) {
        res.status(405).json({ error: err.message });
    }
}


//Admins

const makeUserAdmin = async (req, res, next) => {
    try {
        const { email } = req.body
        const user = await User.findOne({ email })
        if (user) {
            if (user.isAdmin) {
                res.status(400).json({ error: "User is already Admin" });
            } else {
                await User.findOneAndUpdate({ email }, { isAdmin: true })
                res.status(200).json({ message: "User has been Admin Successfully!!" });
            }
        } else {
            res.status(404).json({ error: "User isn't Exist" });
        }
    } catch (err) {
        res.status(405).json({ error: err.message });
    }
}

module.exports = {
    deleteItem,
    addNewItem,
    editItem,
    deleteCategory,
    addNewCategory,
    deleteUser,
    getUsers,
    editCategory,
    editUser,
    makeUserAdmin
};
