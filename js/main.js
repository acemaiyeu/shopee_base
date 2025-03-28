hiddenFormRegisterAndLogin = () => {
  document.getElementById("register-modal").style.display = "none"; // Hiện form đăng ký
  document.getElementById("login-modal").style.display = "none";

  // Ẩn form đăng nhập
};
hiddenFormRegisterAndLogin();
function showFormRegister() {
  document.getElementById("register-modal").style.display = "flex"; // Hiện form đăng ký
  document.getElementById("login-modal").style.display = "none"; // Ẩn form đăng nhập
}

function showFormLogin() {
  document.getElementById("register-modal").style.display = "none"; // Ẩn form đăng ký
  document.getElementById("login-modal").style.display = "flex"; // Hiện form đăng nhập
}

// Đảm bảo gán sự kiện click khi trang load xong
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("register")
    .addEventListener("click", showFormRegister);
  document.getElementById("login").addEventListener("click", showFormLogin);
});
