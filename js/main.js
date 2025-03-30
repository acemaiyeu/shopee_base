let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
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
            
            <div class="toast__msg">${message}</div>
          </div>
          <i class="toast__close bi bi-dash-circle"></i>`;
  // <div class="toast__title">${title}</div>
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
showAc = () => {
  toast({
    title: "Success!",
    message: "Tài khoản: guest@mail.com \n Mật khẩu: 123",
    type: "success",
    time: 3000,
  });
};
// toast({
//   title: "Success!",
//   message: "Vui lòng đừng toxic!",
//   type: "success",
//   time: 3000,
// });

// Search hítory

clickSearchHistory = (e) => {
  document.getElementById("header__search-input").value = e.target.innerText;

  console.log();
};
searchSubmit = () => {
  let searchInput = document.getElementById("header__search-input").value;
  if (searchHistory.includes(searchInput)) {
    searchHistory = searchHistory.filter((item) => item !== searchInput);
  }
  searchHistory.push(searchInput);
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  getSearchHistory();
};
getSearchHistory = () => {
  if (searchHistory.length > 0) {
    let ul_element = document.querySelector(".header__search-history-list");
    let data_html = "";
    searchHistory.forEach((item) => {
      data_html += `
                    <li class="header__search-history-item">
                      <a onclick="clickSearchHistory(event)">${item}</a>
                    </li>
                    `;
    });
    ul_element.innerHTML = data_html;
  }
};
getSearchHistory();
checkLogin = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    if (user.email === "guest@gmail.com") {
      document.getElementById("userNav").classList.remove("--no-active");
      document.getElementById("registerNav").classList.add("--no-active");
      document.getElementById("login").classList.add("--no-active");
    }
  } else {
    document.getElementById("userNav").classList.add("--no-active");
    document.getElementById("registerNav").classList.remove("--no-active");
    document.getElementById("login").classList.remove("--no-active");
  }
};
checkLogin();
login = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (email === "guest@gmail.com" && password === "123") {
    localStorage.setItem(
      "user",
      JSON.stringify({ email: email, time: Date.now() })
    );
    checkLogin();
    hiddenFormRegisterAndLogin();
  }
};
logout = () => {
  localStorage.removeItem("user");
  checkLogin();
};
