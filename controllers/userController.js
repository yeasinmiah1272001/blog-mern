//============================ user register ===============================
//============================ user register ===============================
//============================ user register ===============================
const userRegister = (req, res) => {
  try {
    return res.json({ success: true, message: "user register success" });
  } catch (error) {
    return res.json({
      success: false,
      message: "user register success fail",
      error,
    });
  }
};
//============================ user login ===============================
//============================ user login ===============================
//============================ user login ===============================
const userLogin = (req, res) => {
  try {
    return res.json({ success: true, message: "user login success" });
  } catch (error) {
    return res.json({
      success: false,
      message: "user login success fail",
      error,
    });
  }
};
//============================ admin login===============================
//============================ admin login===============================
//============================ admin login===============================
const AdminLogin = (req, res) => {
  try {
    return res.json({ success: true, message: "admin login success" });
  } catch (error) {
    return res.json({
      success: false,
      message: "admin success fail",
      error,
    });
  }
};

//============================ user remove===============================
//============================ user remove===============================
//============================ user remove===============================
const userRemove = (req, res) => {
  try {
    return res.json({ success: true, message: "user remove success" });
  } catch (error) {
    return res.json({
      success: false,
      message: "user rremove success fail",
      error,
    });
  }
};

//============================user updated=========================
//============================user updated=========================
//============================user updated=========================
const userUpdated = (req, res) => {
  try {
    return res.json({ success: true, message: "user update success" });
  } catch (error) {
    return res.json({
      success: false,
      message: "user updated  fail",
      error,
    });
  }
};
//============================ user list===============================
//============================ user list===============================
//============================ user list===============================
const userList = (req, res) => {
  try {
    return res.json({ success: true, message: "user list success" });
  } catch (error) {
    return res.json({
      success: false,
      message: "user user  fail",
      error,
    });
  }
};

export {
  userRegister,
  userLogin,
  userList,
  userRemove,
  userUpdated,
  AdminLogin,
};
