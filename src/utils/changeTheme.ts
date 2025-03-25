// 主题切换

export const setTheme = (theme: string) => {
  const linkElement = document.getElementById("theme-style") as HTMLLinkElement;
  if (linkElement) {
    linkElement.href = `./src/assets/themes/${theme}.scss`;
    // 存储主题到localStorage
    localStorage.setItem("theme", theme);
  }
};

export const getCurrentTheme = () => {
  return localStorage.getItem("theme") || "default";
};

export const toggleTheme = () => {
  const currentTheme = getCurrentTheme();
  const newTheme = currentTheme === "dark" ? "default" : "dark";
  console.log("当前主题：", newTheme);
  setTheme(newTheme);
  return newTheme;
};

export const initTheme = () => {
  const savedTheme = getCurrentTheme();
  setTheme(savedTheme);
};
