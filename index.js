let arrNumber = [];
let renderHTML = document.querySelector(".renderNumber");
document.querySelector("#btnAddNumber").onclick = () => {
  let getNumber = document.querySelector("#inputNumber").value * 1;
  console.log(typeof getNumber);
  arrNumber.push(getNumber);

  renderHTML.innerHTML = arrNumber;
  document.querySelector("#inputNumber").value = "";
};

function handleTinhTongSoDuong() {
  let tong = arrNumber
    .filter((item) => item > 0)
    .reduce((acc, curr) => acc + curr, 0);

  document.querySelector("#tongSoDuong").innerHTML = "Tổng là: " + tong;
}
function handleDemSoDuong() {
  let dem = 0;
  arrNumber.filter((item, index) => {
    if (item > 0) {
      return dem++;
    }
  });
  console.log(dem);
  document.querySelector("#demSoDuong").innerHTML = "Số nguyên dương: " + dem;
}

function handleTimSoMin() {
  let min = arrNumber[0];
  arrNumber.filter((item, index) => {
    if (item < min) {
      min = item;
    }
  });
  document.querySelector("#soNhoNhat").innerHTML = "Số nhỏ nhất: " + min;
}

function handleTimSoDuongMin() {
  let min = arrNumber[0];
  arrNumber.filter((item, index) => {
    if (item > 0 && item < min) {
      min = item;
    }
  });
  document.querySelector("#soDuongNhoNhat").innerHTML =
    "Số dương nhỏ nhất: " + min;
}

function handleTimSoChangCuoiCung() {
  let soChanCuoiCung = -1;
  for (let i = arrNumber.length - 1; i >= 0; i--) {
    if (arrNumber[i] % 2 === 0 && arrNumber[i] >= 0) {
      soChanCuoiCung = arrNumber[i];
      break;
    }
  }
  document.querySelector("#soChanCuoiCung").innerHTML =
    "Số chẳn cuối cùng trong mảng: " + soChanCuoiCung !== -1
      ? soChanCuoiCung
      : -1;
}

function handleSwap2So() {
  const vitri1 = parseInt(document.getElementById("vitri1").value);
  const vitri2 = parseInt(document.getElementById("vitri2").value);
  if (isNaN(vitri1) || isNaN(vitri2)) {
    alert("Vui lòng nhập vị trí hợp lệ");
    return;
  }
  if (
    vitri1 < 0 ||
    vitri1 >= arrNumber.length ||
    vitri2 < 0 ||
    vitri2 >= arrNumber.length
  ) {
    alert("Vị trí nhập không hợp lệ");
    return;
  }
  [arrNumber[vitri1], arrNumber[vitri2]] = [
    arrNumber[vitri2],
    arrNumber[vitri1],
  ];
  document.getElementById(
    "mangdoicho"
  ).innerText = `Mảng sau khi đổi chỗ: ${arrNumber.join(", ")}`;
}

function handleSapXepTang() {
  let arrSort = arrNumber.sort((a, b) => a - b);

  document.querySelector("#sapXepTangDan").innerHTML =
    "Mảng đã sắp xếp: " + arrSort;
}

//Kiem tra so nguyen to
function checkSoNguyenTo(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}
function handleTimSoNguyenTo() {
  let soNT = -1;
  for (let i = 0; i < arrNumber.length; i++) {
    if (checkSoNguyenTo(arrNumber[i])) {
      soNT = arrNumber[i];
      break;
    }
  }
  document.querySelector("#demSoNguyenTo").innerHTML =
    "Số nguyên tố đầu tiên: " + (soNT !== -1 ? soNT : -1);
}
let newArr = [];
let renderNewArr = document.querySelector(".mangSoThuc");
document.querySelector(".btnMangSoThucMoi").onclick = function () {
  let getValue = document.querySelector("#mangSTMoi").value * 1;
  newArr.push(getValue);
  renderNewArr.innerHTML = newArr;
};

document.querySelector(".btnDemSoNguyen").onclick = function () {
  console.log("newArr", newArr);
  let dem = newArr.filter(Number.isInteger).length;
  document.querySelector("#timSoNguyen").innerHTML =
    "Có tất cả: " + dem + " số nguyên";
};

document.querySelector("#headingTen").onclick = function () {
  let arrSoDuong = arrNumber.filter((item) => item >= 0);
  let arrSoAm = arrNumber.filter((item) => item < 0);

  let soSanh = arrSoDuong.length > arrSoAm.length;
  document.querySelector("#soSanhAmDuong").innerHTML = soSanh
    ? "Số dương nhiều hơn"
    : "Số âm nhiều hơn";
};
