// 登录
export const login = (userName: string, password: string) => {
  if (verify(userName, password)) {
    console.log("验证成功");
  } else {
    console.log("验证失败");
  }
};

// 验证
const verify = (userName: string, password: string) => {
  if (!userName || !password) {
    console.error("用户名和密码不能为空");
    return false;
  }
  return true;
};
