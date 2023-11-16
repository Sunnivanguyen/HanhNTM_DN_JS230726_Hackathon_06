const User = require("../models/user.model");

class UserController {
  async signup(req, res) {
    const userEntity = {
      username: req.body.username,
      password: req.body.password,
      role: req.body.role,
    };
    console.log(userEntity, "11111111111111");
    try {
      const existedEmail = await User.findOne({
        where: {
          username: req.body.username,
        },
      });

      if (existedEmail) {
        return res.status(400).json({
          status: "fail",
          msg: "Email already exists",
        });
      }

      const user = await User.create(userEntity);
      return res.status(200).json({
        status: "success",
        data: user,
      });
    } catch (error) {
      return res.status(400).json({
        status: "fail",
        msg: error.message,
      });
    }
  }

  async login(req, res) {
    try {
      const user = await User.findOne({
        where: {
          username: req.query.username,
        },
      });

      if (!user) {
        return res.status(404).json({
          status: "fail",
          msg: "Username is not existed",
        });
      }

      if (user.password !== req.query.password) {
        return res.status(400).json({
          status: "fail",
          msg: "Wrong password",
        });
      }

      return res.status(200).json({
        status: "success",
        data: user,
      });
    } catch (error) {
      return res.status(400).json({
        status: "fail",
        msg: error.message,
      });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json({
        status: "success",
        data: users,
      });
    } catch (error) {
      return res.status(400).json({
        status: "fail",
        msg: error.message,
      });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await User.findByPk(req.params.user_id);
      return res.status(200).json({
        status: "success",
        data: user,
      });
    } catch (error) {
      return res.status(400).json({
        status: "fail",
        msg: error.message,
      });
    }
  }
}

module.exports = new UserController();
