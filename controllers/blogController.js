//============================ blog add ===============================
//============================ blog add ===============================
//============================ blog add ===============================
const bolgAdd = (req, res) => {
  try {
    return res.json({ success: true, message: "blog add success" });
  } catch (error) {
    return res.json({
      success: false,
      message: "blog add success fail",
      error,
    });
  }
};
//============================ blog update ===============================
//============================ blog update ===============================
//============================ blog update ===============================
const blogUpdate = (req, res) => {
  try {
    return res.json({ success: true, message: "blog update success" });
  } catch (error) {
    return res.json({
      success: false,
      message: "blog update success fail",
      error,
    });
  }
};
//============================ blog remove ===============================
//============================ ablog remove ===============================
//============================ blog remove ===============================
const blogRemove = (req, res) => {
  try {
    return res.json({ success: true, message: "blog remove success" });
  } catch (error) {
    return res.json({
      success: false,
      message: "blog remove success fail",
      error,
    });
  }
};

//============================ blog list ===============================
//============================ blog list ===============================
//============================ blog list ===============================
const blogList = (req, res) => {
  try {
    return res.json({ success: true, message: " blog list success" });
  } catch (error) {
    return res.json({
      success: false,
      message: "blog list success fail",
      error,
    });
  }
};

export { blogList, blogRemove, blogUpdate, bolgAdd };
