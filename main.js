// ================= 1. DỮ LIỆU SẢN PHẨM =================
const products = [
  {
    id: 1,
    name: "Áo thun nam tính dạo phố Yoko",
    price: 150000,
    baseImg:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=80",
    img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=80",
    category: "new",
    badge: "-25%",
    rating: "4.9",
    sold: 1240,
    description:
      "Chất liệu cotton 100% co giãn 4 chiều thoáng mát, thấm hút mồ hôi tối ưu, form dáng unisex trẻ trung dễ phối đồ dạo phố.",
  },
  {
    id: 2,
    name: "Quần Jean xanh biển Penguins chuẩn form",
    price: 250000,
    baseImg:
      "https://images.unsplash.com/photo-1542272604-780c96856592?w=500&auto=format&fit=crop&q=80",
    img: "https://images.unsplash.com/photo-1542272604-780c96856592?w=500&auto=format&fit=crop&q=80",
    category: "hot",
    badge: "HOT",
    rating: "5.0",
    sold: 890,
    description:
      "Vải denim dày dặn không bai dão, đường may chắc chắn tỉ mỉ, tôn dáng người mặc và phù hợp mọi lứa tuổi.",
  },
  {
    id: 3,
    name: "Giày Sneaker Yuki năng động phong cách",
    price: 350000,
    baseImg:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=80",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=80",
    category: "promo",
    badge: "-30%",
    rating: "4.8",
    sold: 2150,
    description:
      "Đế cao su non êm ái chống trơn trượt, trọng lượng nhẹ nhàng di chuyển êm chân, phù hợp thể thao và đi học hằng ngày.",
  },
  {
    id: 4,
    name: "Balo IT Sinh Viên chống nước",
    price: 200000,
    baseImg:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80",
    category: "new",
    badge: "MỚI",
    rating: "4.7",
    sold: 650,
    description:
      "Ngăn chứa laptop riêng biệt có đệm chống sốc 15.6 inch, chất vải dù Oxford chống nước mưa nhẹ và bụi bẩn cực tốt.",
  },
  {
    id: 5,
    name: "Áo khoác gió thời trang mùa đông",
    price: 280000,
    baseImg:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=80",
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=80",
    category: "hot",
    badge: "HOT",
    rating: "4.9",
    sold: 1420,
    description:
      "Cấu tạo 2 lớp cản gió chống lạnh tuyệt đối, khóa kéo mượt mà, mũ trùm tiện lợi tháo rời khi cần.",
  },
  {
    id: 6,
    name: "Chuột máy tính gaming siêu nhạy",
    price: 120000,
    baseImg:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=80",
    img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=80",
    category: "promo",
    badge: "-40%",
    rating: "4.6",
    sold: 3100,
    description:
      "Cảm biến quang học độ phân giải cao lên đến 6400 DPI, trang bị đèn LED RGB 16.8 triệu màu thay đổi theo nhịp.",
  },
  {
    id: 7,
    name: "Bàn phím cơ Custom LED RGB",
    price: 650000,
    baseImg:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80",
    category: "hot",
    badge: "BEST",
    rating: "5.0",
    sold: 720,
    description:
      "Switch bấm độ bền 50 triệu lượt nhấn, keycap PBT doubleshot chống mờ chữ, layout gọn gàng tiết kiệm diện tích bàn làm việc.",
  },
  {
    id: 8,
    name: "Tai nghe Bluetooth chống ồn",
    price: 450000,
    baseImg:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80",
    category: "new",
    badge: "MỚI",
    rating: "4.8",
    sold: 540,
    description:
      "Công nghệ khử ồn chủ động ANC tiên tiến, thời lượng pin sử dụng liên tục lên đến 24 giờ với âm bass mạnh mẽ.",
  },
  {
    id: 9,
    name: "Đồng hồ thông minh SmartWatch Gen 8",
    price: 850000,
    baseImg:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80",
    category: "hot",
    badge: "HOT",
    rating: "4.9",
    sold: 430,
    description:
      "Theo dõi nhịp tim, giấc ngủ và các bài tập luyện thể thao chuyên nghiệp. Hỗ trợ hiển thị thông báo cuộc gọi và tin nhắn.",
  },
  {
    id: 10,
    name: "Áo sơ mi nam công sở cao cấp",
    price: 220000,
    baseImg:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=80",
    img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop&q=80",
    category: "new",
    badge: "MỚI",
    rating: "4.8",
    sold: 310,
    description:
      "Vải sợi tre kháng khuẩn tự nhiên chống nhăn nhàu, form áo lịch lãm phù hợp đi làm công sở và gặp gỡ đối tác.",
  },
  {
    id: 11,
    name: "Pin sạc dự phòng 20000mAh",
    price: 320000,
    baseImg:
      "https://images.unsplash.com/photo-1609592426867-b501dfa1f817?w=500&auto=format&fit=crop&q=80",
    img: "https://images.unsplash.com/photo-1609592426867-b501dfa1f817?w=500&auto=format&fit=crop&q=80",
    category: "promo",
    badge: "-20%",
    rating: "4.7",
    sold: 980,
    description:
      "Dung lượng chuẩn 20000mAh hỗ trợ sạc nhanh chuẩn PD 22.5W, an toàn với chip chống quá dòng thông minh.",
  },
  {
    id: 12,
    name: "Kính mát thời trang chống tia UV",
    price: 180000,
    baseImg:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=80",
    img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=80",
    category: "promo",
    badge: "-35%",
    rating: "4.6",
    sold: 1200,
    description:
      "Tròng kính phân cực Polarized chống lóa và bảo vệ mắt khỏi 100% tia UV400 độc hại khi lái xe hoặc đi biển.",
  },
  {
    id: 13,
    name: "Giày lười da phong cách Yoko",
    price: 420000,
    baseImg:
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&auto=format&fit=crop&q=80",
    img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&auto=format&fit=crop&q=80",
    category: "hot",
    badge: "HOT",
    rating: "4.9",
    sold: 560,
    description:
      "Chất liệu da bò thật mềm mại, kiểu dáng không dây tiện lợi xỏ chân nhanh chóng, phối cùng quần tây hoặc jean đều đẹp.",
  },
  {
    id: 14,
    name: "Áo Hoodie Streetwear Penguins dáng rộng",
    price: 310000,
    baseImg:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=80",
    img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=80",
    category: "new",
    badge: "MỚI",
    rating: "4.8",
    sold: 870,
    description:
      "Vải nỉ bông dày mịn ấm áp, form dáng oversize chuẩn phong cách đường phố trẻ trung và cá tính.",
  },
  {
    id: 15,
    name: "Cáp sạc nhanh Type-C dây dù chống đứt",
    price: 85000,
    baseImg:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=80",
    img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=80",
    category: "promo",
    badge: "-50%",
    rating: "4.9",
    sold: 4300,
    description:
      "Đầu bọc hợp kim nhôm cứng cáp, dây bện sợi nylon siêu bền chịu lực kéo hơn 10.000 lần gập uốn.",
  },
  {
    id: 16,
    name: "Tai nghe chụp tai Gaming 7.1 có mic",
    price: 550000,
    baseImg:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=80",
    img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=80",
    category: "hot",
    badge: "HOT",
    rating: "5.0",
    sold: 610,
    description:
      "Âm thanh vòm giả lập 7.1 định vị tiếng bước chân chuẩn xác trong game, đệm mút bọc da êm tai không gây đau mỏi.",
  },
  {
    id: 17,
    name: "Mũ lưỡi trai thêu chữ Yuki",
    price: 95000,
    baseImg:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&auto=format&fit=crop&q=80",
    img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&auto=format&fit=crop&q=80",
    category: "new",
    badge: "MỚI",
    rating: "4.7",
    sold: 1120,
    description:
      "Vải kaki cao cấp không xù lông, khóa cài inox sáng bóng dễ dàng điều chỉnh kích cỡ đầu linh hoạt.",
  },
  {
    id: 18,
    name: "Bàn di chuột cỡ lớn 80x30 Speed Pro",
    price: 140000,
    baseImg:
      "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?w=500&auto=format&fit=crop&q=80",
    img: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?w=500&auto=format&fit=crop&q=80",
    category: "promo",
    badge: "-25%",
    rating: "4.8",
    sold: 2400,
    description:
      "Bề mặt vải lụa dệt micro control di chuột cực mượt, viền may bo chắc chắn chống bong mép sau thời gian dài.",
  },
  {
    id: 19,
    name: "Loa Bluetooth di động Bass trầm ấm",
    price: 490000,
    baseImg:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=80",
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=80",
    category: "hot",
    badge: "HOT",
    rating: "4.9",
    sold: 910,
    description:
      "Công suất 20W với màng loa cộng hưởng cho âm bass uy lực, chuẩn chống nước IPX7 thoải mái nghe nhạc ngoài trời.",
  },
  {
    id: 20,
    name: "Bình giữ nhiệt thông minh hiển thị nhiệt độ",
    price: 160000,
    baseImg:
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&auto=format&fit=crop&q=80",
    img: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500&auto=format&fit=crop&q=80",
    category: "new",
    badge: "MỚI",
    rating: "4.8",
    sold: 1450,
    description:
      "Nắp cảm ứng LED hiển thị nhiệt độ nước chính xác, chất liệu Inox 304 tiêu chuẩn y tế an toàn giữ nhiệt suốt 12 tiếng.",
  },
];

// Khởi tạo giỏ hàng có sẵn 2 sản phẩm mẫu
let defaultCartSample = [
  {
    id: 1,
    name: "Áo thun nam tính dạo phố Yoko",
    price: 150000,
    img: products[0].img,
    quantity: 1,
  },
  { id: 7, name: "Bàn phím cơ Custom LED RGB", price: 650000, img: products[6].img, quantity: 1 },
];

let cart = JSON.parse(localStorage.getItem("YukiCart")) || defaultCartSample;
let wishlist = JSON.parse(localStorage.getItem("YukiWishlist")) || [];
let users = JSON.parse(localStorage.getItem("YukiUsers")) || [];
let discountAmount = 0;
let currentCategory = "all";
let currentPriceRange = "all";
let currentSort = "default";
let detailQuantity = 1;

function formatMoney(amount) {
  return amount.toLocaleString("vi-VN") + " đ";
}

// ================= 2. CHẾ ĐỘ DARK / LIGHT MODE =================
function initTheme() {
  const savedTheme = localStorage.getItem("YukiTheme") || "light";
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    updateThemeButton(true);
  } else {
    document.body.classList.remove("dark-mode");
    updateThemeButton(false);
  }
}

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("YukiTheme", isDark ? "dark" : "light");
  updateThemeButton(isDark);
  showToast(isDark ? "🌙 Chế độ tối đã bật" : "☀️ Chế độ sáng đã bật");
}

function updateThemeButton(isDark) {
  const btnText = document.getElementById("themeText");
  const btn = document.getElementById("themeToggleBtn");
  if (btnText && btn) {
    btnText.innerText = isDark ? "Chế độ sáng" : "Chế độ tối";
    btn.innerHTML = isDark
      ? `<i class="fas fa-sun"></i> <span>Chế độ sáng</span>`
      : `<i class="fas fa-moon"></i> <span>Chế độ tối</span>`;
  }
}

// ================= 3. ĐỒNG BỘ ẢNH ONLINE =================
function refreshOnlineImages() {
  const timestamp = Date.now();
  products.forEach((p) => (p.img = `${p.baseImg}&t=${timestamp}`));
  if (document.getElementById("hot-products")) renderHomeProducts();
  if (document.getElementById("all-products")) renderFilteredAndSortedProducts();
  showToast("🔄 Đã làm mới toàn bộ hình ảnh online!");
}

setInterval(() => {
  products.forEach((p) => (p.img = `${p.baseImg}&live=${Date.now()}`));
  document.querySelectorAll(".product-card img").forEach((imgEl, idx) => {
    if (products[idx]) imgEl.src = products[idx].img;
  });
}, 60000);

// ================= 4. HIỂN THỊ SẢN PHẨM & YÊU THÍCH =================
function createProductCard(product) {
  const isLiked = wishlist.includes(product.id);
  return `
    <div class="product-card">
      <span class="card-badge">${product.badge || "HOT"}</span>
      <!-- Nút thả tim Yêu thích (Yêu cầu 3.8) -->
      <button class="btn-wishlist ${isLiked ? "active" : ""}" onclick="toggleWishlist(${product.id})" title="Thêm vào yêu thích">
        <i class="fa${isLiked ? "s" : "r"} fa-heart"></i>
      </button>
      <img src="${product.img}" alt="${product.name}" loading="lazy">
      <div class="product-rating">
        <span>⭐ ${product.rating || "5.0"}</span>
        <span class="sold-count">Đã bán ${product.sold || 100}</span>
      </div>
      <h3>${product.name}</h3>
      <p class="price">${formatMoney(product.price)}</p>
      <div style="display: flex; gap: 6px; margin-top: auto;">
        <button class="btn btn-detail" style="flex:1;" onclick="viewDetail(${product.id})">Chi tiết</button>
        <button class="btn btn-primary" style="flex:1.2;" onclick="addToCart(${product.id})">
          <i class="fas fa-cart-plus"></i> Thêm giỏ
        </button>
      </div>
    </div>
  `;
}

function viewDetail(id) {
  localStorage.setItem("selectedProductId", id);
  window.location.href = "detail.html";
}

function toggleWishlist(id) {
  const index = wishlist.indexOf(id);
  const product = products.find((p) => p.id === id);

  if (index === -1) {
    wishlist.push(id);
    showToast(`❤️ Đã thêm <b>${product.name}</b> vào danh sách yêu thích!`);
  } else {
    wishlist.splice(index, 1);
    showToast(`Đã bỏ yêu thích <b>${product.name}</b>.`);
  }

  localStorage.setItem("YukiWishlist", JSON.stringify(wishlist));
  updateWishlistCount();

  if (document.getElementById("all-products")) renderFilteredAndSortedProducts();
  if (document.getElementById("hot-products")) renderHomeProducts();
}

function updateWishlistCount() {
  const badge = document.getElementById("wishlist-count");
  if (badge) badge.innerText = wishlist.length;
}

function openWishlistModal() {
  const modal = document.getElementById("wishlist-modal");
  const box = document.getElementById("wishlist-items-box");
  if (!modal || !box) return;

  if (wishlist.length === 0) {
    box.innerHTML = `<p style="text-align:center; padding:30px; color:#888;">Bạn chưa có sản phẩm nào trong danh sách yêu thích.</p>`;
  } else {
    let html = "";
    wishlist.forEach((id) => {
      const p = products.find((item) => item.id === id);
      if (p) {
        html += `
          <div class="wishlist-item-row">
            <div style="display:flex; align-items:center; gap:12px;">
              <img src="${p.img}" alt="${p.name}">
              <div>
                <b style="font-size:14px;">${p.name}</b>
                <div style="color:var(--primary-color); font-weight:bold; font-size:13px;">${formatMoney(p.price)}</div>
              </div>
            </div>
            <div style="display:flex; gap:8px;">
              <button class="btn btn-primary" style="padding:6px 12px;" onclick="addToCart(${p.id})">Mua ngay</button>
              <button class="btn btn-danger-outline" style="padding:6px 10px;" onclick="toggleWishlist(${p.id}); openWishlistModal();"><i class="fas fa-trash"></i></button>
            </div>
          </div>
        `;
      }
    });
    box.innerHTML = html;
  }
  modal.classList.add("open");
}

function closeWishlistModal() {
  const modal = document.getElementById("wishlist-modal");
  if (modal) modal.classList.remove("open");
}

// Render ở Trang Chủ
function renderHomeProducts() {
  let htmlHot = "",
    htmlNew = "";
  let hotCount = 0,
    newCount = 0;

  products.forEach((p) => {
    if (p.category === "hot" && hotCount < 4) {
      htmlHot += createProductCard(p);
      hotCount++;
    }
    if (p.category === "new" && newCount < 4) {
      htmlNew += createProductCard(p);
      newCount++;
    }
  });

  if (document.getElementById("hot-products"))
    document.getElementById("hot-products").innerHTML = htmlHot;
  if (document.getElementById("new-products"))
    document.getElementById("new-products").innerHTML = htmlNew;
}

// LỌC KẾT HỢP: DANH MỤC + KHOẢNG GIÁ + SẮP XẾP
function applyCategoryFilter(cat, btnElement) {
  currentCategory = cat;
  document.querySelectorAll(".filter-buttons button").forEach((b) => b.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");
  renderFilteredAndSortedProducts();
}

function applyPriceRangeFilter(range) {
  currentPriceRange = range;
  renderFilteredAndSortedProducts();
}

function applyPriceSort(sortType) {
  currentSort = sortType;
  renderFilteredAndSortedProducts();
}

function renderFilteredAndSortedProducts() {
  let container = document.getElementById("all-products");
  if (!container) return;

  // 1. Lọc theo danh mục
  let result =
    currentCategory === "all"
      ? [...products]
      : products.filter((p) => p.category === currentCategory);

  // 2. Lọc theo khoảng giá
  if (currentPriceRange === "under200") {
    result = result.filter((p) => p.price < 200000);
  } else if (currentPriceRange === "200to500") {
    result = result.filter((p) => p.price >= 200000 && p.price <= 500000);
  } else if (currentPriceRange === "above500") {
    result = result.filter((p) => p.price > 500000);
  }

  // 3. Sắp xếp giá
  if (currentSort === "asc") {
    result.sort((a, b) => a.price - b.price);
  } else if (currentSort === "desc") {
    result.sort((a, b) => b.price - a.price);
  }

  // 4. Hiển thị
  if (!result || result.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 50px 0; color: #888; font-size: 16px;">
      <i class="fas fa-box-open" style="font-size: 40px; display: block; margin-bottom: 10px;"></i>
      Không tìm thấy sản phẩm nào trong khoảng lọc này.
    </p>`;
    return;
  }

  let html = "";
  result.forEach((p) => (html += createProductCard(p)));
  container.innerHTML = html;
}

// Tìm kiếm sản phẩm
function searchProducts() {
  let query = document.getElementById("searchInput").value.trim();
  if (!query) {
    showToast("Vui lòng nhập từ khóa tìm kiếm!");
    return;
  }
  sessionStorage.setItem("searchKeyword", query);
  window.location.href = "products.html";
}

function handleSearchKey(event) {
  if (event.key === "Enter") searchProducts();
}

// ================= 5. TRANG CHI TIẾT SẢN PHẨM & LIÊN QUAN =================
function renderDetailPage() {
  let detailBox = document.getElementById("product-detail");
  if (!detailBox) return;

  let id = localStorage.getItem("selectedProductId") || 1;
  let p = products.find((item) => item.id == id) || products[0];
  detailQuantity = 1;

  detailBox.innerHTML = `
    <div style="display: flex; gap: 40px; margin-top: 20px; flex-wrap: wrap; background: var(--card-bg); padding: 35px; border-radius: 8px; box-shadow: var(--box-shadow); border: 1px solid var(--border-color);">
      <img src="${p.img}" style="width: 380px; height: 380px; object-fit: cover; border-radius: 8px; border: 1px solid var(--border-color);">
      <div style="flex: 1; min-width: 300px;">
        <span style="background:#fff3f0; color:var(--primary-color); padding:4px 10px; border-radius:4px; font-weight:bold; font-size:12px;">CHÍNH HÃNG 100%</span>
        <h1 style="color:var(--text-color); font-size: 26px; margin: 12px 0 8px 0;">${p.name}</h1>
        <div style="color: #f39c12; margin-bottom: 15px; font-size: 14px;">⭐⭐⭐⭐⭐ (${p.rating}) | <span style="color:#64748b;">Đã bán ${p.sold}</span></div>
        
        <div style="background: rgba(0,0,0,0.03); padding: 18px; border-radius: 6px; margin-bottom: 20px;">
          <h2 style="color:var(--primary-color); font-size: 32px; font-weight:800;">${formatMoney(p.price)}</h2>
        </div>
        
        <p style="margin-bottom: 10px;"><b>Tình trạng:</b> <span style="color: #2ecc71; font-weight:bold;">Còn hàng</span></p>
        <p style="margin-bottom: 10px;"><b>Danh mục:</b> <span style="background:var(--primary-color); color:white; padding:3px 10px; border-radius:12px; font-size:12px;">${p.category.toUpperCase()}</span></p>
        <p style="margin-top: 15px; color: #64748b; line-height: 1.6;"><b>Mô tả:</b> ${p.description}</p>
        
        <div class="detail-qty-control" style="margin: 20px 0; display:flex; align-items:center; gap:12px;">
          <b>Số lượng:</b>
          <div style="display:inline-flex; border:1px solid #cbd5e1; border-radius:4px; overflow:hidden;">
            <button style="padding:6px 14px; border:none; cursor:pointer;" onclick="changeDetailQty(-1)">-</button>
            <input type="text" id="detailQtyInput" value="1" readonly style="width:45px; text-align:center; border:none; font-weight:bold;">
            <button style="padding:6px 14px; border:none; cursor:pointer;" onclick="changeDetailQty(1)">+</button>
          </div>
        </div>

        <button class="btn btn-primary" style="margin-top: 10px; font-size: 15px; padding: 14px 40px; width: auto;" onclick="addDetailToCart(${p.id})">
          <i class="fas fa-shopping-bag"></i> THÊM VÀO GIỎ HÀNG
        </button>
      </div>
    </div>
  `;

  renderRelatedProducts(p.category, p.id);
}

function changeDetailQty(change) {
  detailQuantity += change;
  if (detailQuantity < 1) detailQuantity = 1;
  let inp = document.getElementById("detailQtyInput");
  if (inp) inp.value = detailQuantity;
}

function addDetailToCart(id) {
  let product = products.find((p) => p.id === id);
  let existItem = cart.find((item) => item.id === id);

  if (existItem) {
    existItem.quantity += detailQuantity;
  } else {
    cart.push({ ...product, quantity: detailQuantity });
  }

  saveCart();
  showToast(`Đã thêm <b>${detailQuantity}x ${product.name}</b> vào giỏ!`);
}

// Khối Sản phẩm liên quan
function renderRelatedProducts(category, currentId) {
  const box = document.getElementById("related-products");
  if (!box) return;

  const related = products.filter((p) => p.category === category && p.id !== currentId).slice(0, 4);

  let html = "";
  related.forEach((p) => (html += createProductCard(p)));
  box.innerHTML =
    html || `<p style="grid-column:1/-1; color:#888;">Không có sản phẩm liên quan.</p>`;
}

// ================= 6. GIỎ HÀNG VÀ THANH TOÁN =================
function saveCart() {
  localStorage.setItem("YukiCart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  let badge = document.getElementById("cart-count");
  if (badge) badge.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function addToCart(id) {
  let product = products.find((p) => p.id === id);
  let existItem = cart.find((item) => item.id === id);

  if (existItem) {
    existItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  showToast(`Đã thêm <b>${product.name}</b> vào giỏ!`);
}

// Số lượng không được nhỏ hơn 1
function updateQuantity(id, change) {
  let item = cart.find((p) => p.id === id);
  if (item) {
    let newQty = item.quantity + change;
    if (newQty >= 1) {
      item.quantity = newQty;
      saveCart();
      if (document.getElementById("cart-items")) renderCartPage();
    } else {
      showToast("⚠️ Số lượng tối thiểu là 1! (Bấm nút thùng rác nếu muốn xóa)");
    }
  }
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(id) {
  let item = cart.find((p) => p.id === id);
  if (item && confirm(`Bạn có chắc chắn muốn xóa "${item.name}" khỏi giỏ hàng?`)) {
    cart = cart.filter((p) => p.id !== id);
    saveCart();
    if (document.getElementById("cart-items")) renderCartPage();
    showToast("Đã xóa sản phẩm khỏi giỏ hàng.");
  }
}

function renderCartPage() {
  let cartBox = document.getElementById("cart-items");
  let actionsBox = document.getElementById("cart-actions");
  if (!cartBox) return;

  if (cart.length === 0) {
    cartBox.innerHTML = `
      <div style="text-align:center; padding: 70px 0; background:var(--card-bg); border-radius:8px; box-shadow:var(--box-shadow);">
        <i class="fas fa-box-open" style="font-size:65px; color:#cbd5e1; margin-bottom:20px;"></i>
        <p style="font-size:16px; color:#64748b;">Giỏ hàng của bạn đang trống.</p>
        <a href="products.html" class="btn btn-primary" style="margin-top: 20px;">MUA SẮM NGAY</a>
      </div>`;
    if (actionsBox) actionsBox.style.display = "none";
    return;
  }

  if (actionsBox) actionsBox.style.display = "flex";
  let html = `<table>
    <tr>
      <th style="text-align:left;">Sản phẩm</th>
      <th>Đơn giá</th>
      <th>Số lượng</th>
      <th>Thành tiền</th>
      <th>Thao tác</th>
    </tr>`;

  let total = 0;
  cart.forEach((item) => {
    let tt = item.price * item.quantity; // Thành tiền = Đơn giá × Số lượng
    total += tt;
    html += `
      <tr>
        <td style="text-align:left; display:flex; align-items:center; gap:15px;">
          <img src="${item.img}" width="70" style="border-radius:4px; border:1px solid #edf2f7;">
          <span style="font-weight:600;">${item.name}</span>
        </td>
        <td style="font-weight:600;">${formatMoney(item.price)}</td>
        <td>
          <div style="display:inline-flex; border:1px solid #cbd5e1; border-radius:4px; overflow:hidden;">
            <button style="border:none; padding:6px 12px; cursor:pointer;" onclick="updateQuantity(${item.id}, -1)">-</button>
            <span style="padding:6px 14px; font-weight:bold;">${item.quantity}</span>
            <button style="border:none; padding:6px 12px; cursor:pointer;" onclick="updateQuantity(${item.id}, 1)">+</button>
          </div>
        </td>
        <td style="font-weight:800; color:var(--primary-color);">${formatMoney(tt)}</td>
        <td>
          <button class="btn" style="background:transparent; color:#ef4444; font-size:18px; padding:6px;" onclick="removeFromCart(${item.id})" title="Xóa sản phẩm">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    `;
  });

  html += `</table>
    <div style="font-size: 22px; font-weight: 800; color: var(--primary-color); text-align: right; margin-top: 25px;">
      Tổng tiền giỏ hàng: ${formatMoney(total)}
    </div>`;

  cartBox.innerHTML = html;
}

// Trang Thanh Toán
function renderCheckoutPage() {
  let checkInfo = document.getElementById("checkout-info");
  if (!checkInfo) return;

  if (cart.length === 0) {
    checkInfo.innerHTML =
      "<p style='padding:20px; color:#888;'>Giỏ hàng rỗng, không có sản phẩm để thanh toán.</p>";
    return;
  }

  let subTotal = 0;
  let html = `<table><tr><th style="text-align:left;">Sản phẩm</th><th>Đơn giá</th><th>SL</th><th>Thành tiền</th></tr>`;
  cart.forEach((item) => {
    let tt = item.price * item.quantity;
    subTotal += tt;
    html += `
      <tr>
        <td style="text-align:left; font-size:13.5px; font-weight:600;">${item.name}</td>
        <td style="font-size:13px;">${formatMoney(item.price)}</td>
        <td style="font-weight:bold;">${item.quantity}</td>
        <td style="font-weight:bold; color:var(--primary-color); font-size:13.5px;">${formatMoney(tt)}</td>
      </tr>
    `;
  });
  html += `</table>`;

  let shippingFee = subTotal >= 300000 ? 0 : 30000;
  let finalTotal = Math.max(0, subTotal + shippingFee - discountAmount);

  html += `
    <div class="price-summary-box">
      <div class="price-row"><span>Tạm tính tiền hàng:</span> <b>${formatMoney(subTotal)}</b></div>
      <div class="price-row"><span>Phí vận chuyển:</span> <b>${shippingFee === 0 ? '<span style="color:#2ecc71;">Miễn phí (Freeship)</span>' : formatMoney(shippingFee)}</b></div>
      <div class="price-row"><span>Giảm giá voucher:</span> <b style="color:#e74c3c;">-${formatMoney(discountAmount)}</b></div>
      <div class="price-row total-row"><span>Tổng thanh toán:</span> <span>${formatMoney(finalTotal)}</span></div>
    </div>
  `;
  checkInfo.innerHTML = html;
}

function applyVoucher() {
  let code = document.getElementById("voucherInput").value.trim().toUpperCase();
  let msgEl = document.getElementById("voucherMsg");
  if (code === "YUKI20") {
    discountAmount = 50000;
    msgEl.style.color = "#2ecc71";
    msgEl.innerText = "🎉 Áp dụng mã YUKI20: Giảm ngay 50.000 đ!";
  } else if (code === "FREESHIP") {
    discountAmount = 30000;
    msgEl.style.color = "#2ecc71";
    msgEl.innerText = "🚚 Áp dụng mã FREESHIP: Miễn phí vận chuyển!";
  } else {
    discountAmount = 0;
    msgEl.style.color = "#ef4444";
    msgEl.innerText = "❌ Mã voucher không hợp lệ!";
  }
  renderCheckoutPage();
}

function checkout(event) {
  event.preventDefault();
  if (cart.length === 0) {
    alert("Giỏ hàng của bạn đang trống!");
    return;
  }
  let name = document.getElementById("cusName").value;
  cart = [];
  discountAmount = 0;
  saveCart();
  alert(`🎉 Cảm ơn ${name}! Đơn hàng của bạn đã được ghi nhận thành công.`);
  window.location.href = "index.html";
}

// ================= 7. ĐĂNG KÝ, ĐĂNG NHẬP & QUẢN LÝ TÀI KHOẢN =================
function clearErrors() {
  document.querySelectorAll(".error-text").forEach((el) => (el.innerText = ""));
  document.querySelectorAll(".form-control").forEach((el) => el.classList.remove("is-invalid"));
}

// Kiểm tra form đăng ký (Bắt lỗi: Rỗng, Email regex, Pass >= 6, Khớp mật khẩu, SĐT 10 số)
function handleRegisterPage(event) {
  event.preventDefault();
  clearErrors();

  let fullname = document.getElementById("regName").value.trim();
  let username = document.getElementById("regUsername").value.trim();
  let email = document.getElementById("regEmail").value.trim();
  let phone = document.getElementById("regPhone").value.trim();
  let password = document.getElementById("regPass").value;
  let confirmPassword = document.getElementById("regConfirmPass").value;

  let isValid = true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^0[0-9]{9}$/;

  if (!fullname) {
    document.getElementById("err-regName").innerText = "Họ và tên không được để trống!";
    document.getElementById("regName").classList.add("is-invalid");
    isValid = false;
  }
  if (!username) {
    document.getElementById("err-regUsername").innerText = "Tên đăng nhập không được để trống!";
    document.getElementById("regUsername").classList.add("is-invalid");
    isValid = false;
  }
  if (!email) {
    document.getElementById("err-regEmail").innerText = "Địa chỉ email không được để trống!";
    document.getElementById("regEmail").classList.add("is-invalid");
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById("err-regEmail").innerText = "Định dạng email không hợp lệ!";
    document.getElementById("regEmail").classList.add("is-invalid");
    isValid = false;
  }
  if (!phone) {
    document.getElementById("err-regPhone").innerText = "Số điện thoại không được để trống!";
    document.getElementById("regPhone").classList.add("is-invalid");
    isValid = false;
  } else if (!phoneRegex.test(phone)) {
    document.getElementById("err-regPhone").innerText =
      "Số điện thoại phải gồm đúng 10 chữ số và bắt đầu bằng số 0 (Ví dụ: 0912345678)!";
    document.getElementById("regPhone").classList.add("is-invalid");
    isValid = false;
  }
  if (!password) {
    document.getElementById("err-regPass").innerText = "Mật khẩu không được để trống!";
    document.getElementById("regPass").classList.add("is-invalid");
    isValid = false;
  } else if (password.length < 6) {
    document.getElementById("err-regPass").innerText = "Mật khẩu phải có tối thiểu 6 ký tự!";
    document.getElementById("regPass").classList.add("is-invalid");
    isValid = false;
  }
  if (!confirmPassword) {
    document.getElementById("err-regConfirmPass").innerText = "Vui lòng nhập lại mật khẩu!";
    document.getElementById("regConfirmPass").classList.add("is-invalid");
    isValid = false;
  } else if (password !== confirmPassword) {
    document.getElementById("err-regConfirmPass").innerText = "Mật khẩu xác nhận không trùng khớp!";
    document.getElementById("regConfirmPass").classList.add("is-invalid");
    isValid = false;
  }

  if (isValid) {
    let emailExists = users.some((u) => u.email.toLowerCase() === email.toLowerCase());
    let usernameExists = users.some((u) => u.username.toLowerCase() === username.toLowerCase());

    if (usernameExists) {
      document.getElementById("err-regUsername").innerText = "Tên đăng nhập này đã được sử dụng!";
      document.getElementById("regUsername").classList.add("is-invalid");
      return;
    }
    if (emailExists) {
      document.getElementById("err-regEmail").innerText = "Email này đã được đăng ký trước đó!";
      document.getElementById("regEmail").classList.add("is-invalid");
      return;
    }

    users.push({ fullname, username, email, phone, password });
    localStorage.setItem("YukiUsers", JSON.stringify(users));

    alert("🎉 Đăng ký tài khoản thành công! Bạn sẽ được chuyển sang trang Đăng nhập.");
    window.location.href = "login.html";
  }
}

// Xử lý Đăng nhập (Yêu cầu 3.5.1)[cite: 29]
function handleLoginPage(event) {
  event.preventDefault();
  clearErrors();

  let loginInput = document.getElementById("loginUser").value.trim();
  let passwordInput = document.getElementById("loginPass").value;
  let genError = document.getElementById("general-login-error");
  if (genError) genError.style.display = "none";

  let isValid = true;

  if (!loginInput) {
    document.getElementById("err-loginUser").innerText = "Vui lòng nhập tên đăng nhập hoặc email!";
    document.getElementById("loginUser").classList.add("is-invalid");
    isValid = false;
  }
  if (!passwordInput) {
    document.getElementById("err-loginPass").innerText = "Vui lòng nhập mật khẩu!";
    document.getElementById("loginPass").classList.add("is-invalid");
    isValid = false;
  }

  if (isValid) {
    let user = users.find(
      (u) =>
        (u.username.toLowerCase() === loginInput.toLowerCase() ||
          u.email.toLowerCase() === loginInput.toLowerCase()) &&
        u.password === passwordInput,
    );

    if (user) {
      localStorage.setItem("YukiCurrentUser", JSON.stringify(user));
      alert(`🎉 Đăng nhập thành công! Chào mừng ${user.fullname}.`);
      window.location.href = "index.html";
    } else {
      if (genError) {
        genError.innerText = "❌ Tên đăng nhập hoặc mật khẩu không chính xác!";
        genError.style.display = "block";
      } else {
        alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
      }
    }
  }
}

// Cập nhật trạng thái Navbar & Nút Quản lý tài khoản
function checkLoginStatus() {
  let currentUser = JSON.parse(localStorage.getItem("YukiCurrentUser"));
  let authNavItem = document.getElementById("auth-nav-item");
  let sidebarAuth = document.getElementById("sidebar-auth-link");

  if (currentUser) {
    if (authNavItem) {
      authNavItem.innerHTML = `
        <a href="profile.html" class="nav-link" style="color: var(--primary-color);">
          <i class="fas fa-user-cog"></i> Quản lý tài khoản (${currentUser.fullname})
        </a>`;
    }
    if (sidebarAuth) {
      sidebarAuth.innerHTML = `<i class="fas fa-user-cog"></i> Quản Lý Tài Khoản (${currentUser.fullname})`;
      sidebarAuth.href = "profile.html";
    }
  } else {
    if (authNavItem) {
      authNavItem.innerHTML = `<a href="login.html" class="nav-link"><i class="fas fa-user-circle"></i> Đăng nhập</a>`;
    }
    if (sidebarAuth) {
      sidebarAuth.innerHTML = `<i class="fas fa-user-circle"></i> Đăng Nhập / Đăng Ký`;
      sidebarAuth.href = "login.html";
    }
  }
}

// Trang Quản lý tài khoản (profile.html)
function renderProfilePage() {
  let currentUser = JSON.parse(localStorage.getItem("YukiCurrentUser"));
  if (!currentUser) {
    alert("Vui lòng đăng nhập để truy cập trang quản lý tài khoản!");
    window.location.href = "login.html";
    return;
  }

  document.getElementById("profileGreeting").innerText = `Xin chào, ${currentUser.fullname}`;
  document.getElementById("profFullname").value = currentUser.fullname || "";
  document.getElementById("profUsername").value = currentUser.username || "";
  document.getElementById("profEmail").value = currentUser.email || "";
  document.getElementById("profPhone").value = currentUser.phone || "0912345678";
  document.getElementById("profPassword").value = "";
}

function handleUpdateProfile(event) {
  event.preventDefault();
  clearErrors();

  let currentUser = JSON.parse(localStorage.getItem("YukiCurrentUser"));
  if (!currentUser) return;

  let fullname = document.getElementById("profFullname").value.trim();
  let username = document.getElementById("profUsername").value.trim();
  let email = document.getElementById("profEmail").value.trim();
  let phone = document.getElementById("profPhone").value.trim();
  let newPassword = document.getElementById("profPassword").value;

  let isValid = true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^0[0-9]{9}$/;

  if (!fullname) {
    document.getElementById("err-profFullname").innerText = "Họ tên không được để trống!";
    isValid = false;
  }
  if (!username) {
    document.getElementById("err-profUsername").innerText = "Tên đăng nhập không được để trống!";
    isValid = false;
  }
  if (!email || !emailRegex.test(email)) {
    document.getElementById("err-profEmail").innerText = "Email không hợp lệ!";
    isValid = false;
  }
  if (!phone || !phoneRegex.test(phone)) {
    document.getElementById("err-profPhone").innerText =
      "Số điện thoại phải gồm đúng 10 số và bắt đầu bằng số 0!";
    isValid = false;
  }
  if (newPassword && newPassword.length < 6) {
    document.getElementById("err-profPassword").innerText = "Mật khẩu mới phải từ 6 ký tự trở lên!";
    isValid = false;
  }

  let duplicate = users.some(
    (u) =>
      u.username.toLowerCase() !== currentUser.username.toLowerCase() &&
      (u.username.toLowerCase() === username.toLowerCase() ||
        u.email.toLowerCase() === email.toLowerCase()),
  );
  if (duplicate) {
    alert("Tên đăng nhập hoặc Email này đã thuộc về một tài khoản khác!");
    return;
  }

  if (isValid) {
    let index = users.findIndex(
      (u) => u.username.toLowerCase() === currentUser.username.toLowerCase(),
    );

    currentUser.fullname = fullname;
    currentUser.username = username;
    currentUser.email = email;
    currentUser.phone = phone;
    if (newPassword) currentUser.password = newPassword;

    if (index !== -1) {
      users[index] = { ...currentUser };
    } else {
      users.push(currentUser);
    }

    localStorage.setItem("YukiUsers", JSON.stringify(users));
    localStorage.setItem("YukiCurrentUser", JSON.stringify(currentUser));

    alert("✅ Cập nhật thông tin tài khoản thành công!");
    checkLoginStatus();
    renderProfilePage();
  }
}

function handleSwitchAccount() {
  if (confirm("Hệ thống sẽ đăng xuất phiên hiện tại để bạn đăng nhập tài khoản khác?")) {
    localStorage.removeItem("YukiCurrentUser");
    window.location.href = "login.html";
  }
}

function handleRegisterAnother() {
  if (confirm("Chuyển sang trang tạo tài khoản mới?")) {
    window.location.href = "register.html";
  }
}

// Đăng xuất (Yêu cầu 3.5.2)[cite: 29]
function handleLogout() {
  if (confirm("Bạn có chắc chắn muốn đăng xuất tài khoản?")) {
    localStorage.removeItem("YukiCurrentUser");
    alert("Đã đăng xuất tài khoản.");
    window.location.href = "index.html";
  }
}

// ================= 8. TIỆN ÍCH DÙNG CHUNG =================
function toggleSidebarMenu() {
  let sb = document.getElementById("sidebar-menu");
  let ov = document.getElementById("sidebar-overlay");
  if (sb && ov) {
    sb.classList.toggle("active");
    ov.classList.toggle("active");
  }
}

function openChatFromSidebar() {
  toggleSidebarMenu();
  let cb = document.getElementById("chatBox");
  if (cb) cb.style.display = "flex";
}

function toggleChat() {
  let cb = document.getElementById("chatBox");
  if (cb)
    cb.style.display = cb.style.display === "none" || cb.style.display === "" ? "flex" : "none";
}

function handleChatKey(e) {
  if (e.key === "Enter") sendMessage();
}

function sendMessage() {
  let inp = document.getElementById("userInput");
  let msg = inp.value.trim();
  let body = document.getElementById("chatBody");
  if (msg) {
    let uDiv = document.createElement("div");
    uDiv.className = "chat-message user";
    uDiv.innerText = msg;
    body.appendChild(uDiv);
    inp.value = "";
    body.scrollTop = body.scrollHeight;
    setTimeout(() => {
      let bDiv = document.createElement("div");
      bDiv.className = "chat-message bot";
      bDiv.innerText = "Dạ Yuki Store đã nhận thông tin và sẽ hỗ trợ ngay ạ!";
      body.appendChild(bDiv);
      body.scrollTop = body.scrollHeight;
    }, 1000);
  }
}

function showToast(msg) {
  let t = document.createElement("div");
  t.className = "toast";
  t.innerHTML = `<i class="fas fa-check-circle" style="color:#2ecc71;"></i> <span>${msg}</span>`;
  let container = document.getElementById("toast-container");
  if (container) {
    container.appendChild(t);
    setTimeout(() => t.remove(), 3000);
  }
}

// Slider
const bannerImages = [
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?w=1400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&auto=format&fit=crop&q=80",
];
let currentSlideIndex = 0;
function changeSlide(step) {
  currentSlideIndex += step;
  if (currentSlideIndex >= bannerImages.length) currentSlideIndex = 0;
  if (currentSlideIndex < 0) currentSlideIndex = bannerImages.length - 1;
  let bImg = document.getElementById("banner-img");
  if (bImg) bImg.src = bannerImages[currentSlideIndex];
}
if (document.getElementById("banner-img")) setInterval(() => changeSlide(1), 4000);

// Đồng hồ đếm ngược Flash Sale
let totalSeconds = 2 * 3600 + 45 * 60 + 30;
function startCountdown() {
  setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      let h = Math.floor(totalSeconds / 3600);
      let m = Math.floor((totalSeconds % 3600) / 60);
      let s = totalSeconds % 60;
      let hEl = document.getElementById("timer-hours");
      let mEl = document.getElementById("timer-minutes");
      let sEl = document.getElementById("timer-seconds");
      if (hEl && mEl && sEl) {
        hEl.innerText = h < 10 ? "0" + h : h;
        mEl.innerText = m < 10 ? "0" + m : m;
        sEl.innerText = s < 10 ? "0" + s : s;
      }
    }
  }, 1000);
}

// Bản đồ Leaflet với nút tâm ngắm GPS
function initMap() {
  let mapEl = document.getElementById("map");
  if (!mapEl) return;

  const myLat = 10.8474402;
  const myLng = 106.7935116;
  const map = L.map("map").setView([myLat, myLng], 15);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap",
  }).addTo(map);

  const marker = L.marker([myLat, myLng])
    .addTo(map)
    .bindPopup("<b>Yuki Store</b><br>Chi nhánh chính thức.")
    .openPopup();

  const RecenterControl = L.Control.extend({
    options: { position: "topleft" },
    onAdd: function () {
      const container = L.DomUtil.create("div", "leaflet-bar leaflet-control");
      const btn = L.DomUtil.create("a", "leaflet-control-recenter", container);
      btn.innerHTML = '<i class="fas fa-crosshairs"></i>';
      btn.href = "#";
      btn.title = "Quay về vị trí cửa hàng";
      btn.setAttribute("role", "button");

      L.DomEvent.disableClickPropagation(container);
      L.DomEvent.on(btn, "click", function (e) {
        L.DomEvent.preventDefault(e);
        map.flyTo([myLat, myLng], 16, { animate: true, duration: 1.2 });
        marker.openPopup();
        showToast("📍 Đã quay về vị trí chính xác của cửa hàng!");
      });

      return container;
    },
  });

  map.addControl(new RecenterControl());
}

// ================= 9. KHỞI CHẠY HỆ THỐNG KHI TẢI TRANG =================
window.onload = function () {
  initTheme();
  updateCartCount();
  updateWishlistCount();
  checkLoginStatus();

  if (document.getElementById("hot-products")) {
    renderHomeProducts();
    initMap();
    startCountdown();
  }

  if (document.getElementById("all-products")) {
    let kw = sessionStorage.getItem("searchKeyword");
    if (kw) {
      document.getElementById("product-page-title").innerText =
        `KẾT QUẢ TÌM KIẾM: "${kw.toUpperCase()}"`;
      let matched = products.filter((p) => p.name.toLowerCase().includes(kw.toLowerCase()));
      let c = document.getElementById("all-products");
      let html = "";
      matched.forEach((p) => (html += createProductCard(p)));
      c.innerHTML =
        html ||
        `<p style='grid-column: 1/-1; text-align:center; padding: 40px; color: #888;'>
        Không tìm thấy sản phẩm nào với từ khóa "${kw}"!
      </p>`;
      sessionStorage.removeItem("searchKeyword");
    } else {
      renderFilteredAndSortedProducts();
    }
  }

  if (document.getElementById("product-detail")) renderDetailPage();
  if (document.getElementById("cart-items")) renderCartPage();
  if (document.getElementById("checkout-info")) renderCheckoutPage();
  if (document.getElementById("profileForm")) renderProfilePage();
};
