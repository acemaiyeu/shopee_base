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

// Toasst

toast = ({ title = "", message = "", type = "info", time = 3000 }) => {
  const main = document.getElementById("toast");
  const toast = document.createElement("div");
  toast.classList.add("toast", `toast--${type}`);
  const icons = {
    success: "bi bi-check-circle",
    info: "bi bi-exclamation-circle",
    warning: "bi bi-exclamation-triangle",
    error: "bi bi-x-square",
  };
  const icon = icons[type];
  const removeMessage = setTimeout(function () {
    main.removeChild(toast);
  }, time);

  toast.onclick = function (e) {
    if (e.target.closest(".toast__close")) {
      main.removeChild(toast);
      clearTimeout(removeMessage);
    }
  };
  toast.innerHTML = `
          <div class="toast__icon"><i class="${icon}"></i></div>
          <div class="toast__body">
            <div class="toast__title">${title}</div>
            <div class="toast__msg">${message}</div>
          </div>
          <i class="toast__close bi bi-dash-circle"></i>`;
  main.appendChild(toast);
};

showMessageSuccess = () => {
  toast({
    title: "Success!",
    message: "Đây là thông báo thành công!",
    type: "success",
    time: 3000,
  });
};
showMessageError = () => {
  toast({
    title: "Error!",
    message: "Đây là thông báo lỗi!",
    type: "error",
    time: 3000,
  });
};
toast({
  title: "Success!",
  message: "Đây là trang Website Test. Dựa vào website SHOPEE!",
  type: "success",
  time: 3000,
});
