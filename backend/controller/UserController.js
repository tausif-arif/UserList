import User from "../model/UserSchema.js";

export const getUsers = async (req, resp) => {
  try {
    const user = await User.find();
    resp.json(user);
  } catch (error) {
    resp.json({ message: error.message });
  }
};

export const addUsers = async (req, resp) => {
  const user = req.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    resp.json(newUser);
  } catch (error) {
    resp.json({ message: error.message });
  }
};

export const getUserById = async (req, resp) => {
  const id = req.params.id;
  console.log(id);
  try {
    const user = await User.findById(id);
    resp.json(user);
    console.log(user);
  } catch (error) {
    resp.json({
      message: error.message,
    });
  }
};

export const updateUser = async (req, resp) => {
  const user = req.body;
  const updatedUser = new User(user);
  try {
    await User.updateOne({ _id: req.params.id }, updatedUser);
    resp.json(updatedUser);
  } catch (error) {
    resp.json({ message: error.message });
  }
};

export const deleteUser = async (req, resp) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    resp.json("userdeleted");
  } catch (error) {
    resp.json({ message: error.message });
  }
};
