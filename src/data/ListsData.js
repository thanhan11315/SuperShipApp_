export const listHomeScreen = [
  {
    icon: 'user',
    title: 'Tài Khoản',
    note: '',
    navigateTo: 'UpdateProfileInfo',
  },
  {
    icon: 'unlock-alt',
    title: 'Đổi Mật Khẩu',
    note: '',
    navigateTo: 'ChangePassword',
  },
  {
    divider: true,
  },
  {
    icon: 'cubes',
    title: 'Kho Hàng',
    note: 'Địa Chỉ Lấy Hàng, Trả Hàng',
    navigateTo: 'Warehouse',
  },
  {
    icon: 'university',
    title: 'Tài Khoản Ngân Hàng',
    navigateTo: 'BankCards',
  },
  {
    icon: 'cube',
    title: 'Hàng Hóa',
    navigateTo: 'Product',
  },
  {
    divider: true,
  },
  {
    icon: 'life-ring',
    title: 'Yêu Cầu Hỗ Trợ',
  },
  {
    icon: 'cog',
    title: 'Cấu Hình Đơn Hàng',
    note: 'Các Cài Đặt Mặc Định Khi Lên Đơn',
  },
  {
    divider: true,
  },
  {
    icon: 'history',
    title: 'Lịch Sử Thay Đổi',
    note: 'Tiền Thu Khách, Khối Lượng',
    navigateTo: 'ActivitiesScreen',
  },
  {
    icon: 'exchange',
    title: 'Lượt Lấy Trả',
    note: 'Lịch Sử Lấy Hàng, Trả Hàng',
  },
  {
    divider: true,
  },
  {
    icon: 'cogs',
    title: 'Cài Đặt',
    note: 'Giao Diện, Ngôn Ngữ, Thông Báo,...',
    navigateTo: 'Setting',
  },
  {
    divider: true,
  },
  {
    icon: 'address-book',
    title: 'Liên Hệ',
    navigateTo: 'ContactInfo',
  },
  {
    icon: 'info-circle',
    title: 'Thông tin',
    note: 'Giới Thiệu Doanh Nghiệp',
  },
  {
    divider: true,
  },
  {
    icon: 'microphone',
    title: 'Xin Quyền',
    note: 'Camera, Vị trí, Danh bạ, Thông Báo',
    navigateTo: 'Permission',
  },
];

export const listSettingScreen = [
  {
    icon: 'window-maximize',
    title: 'Giao Diện',
    colorTitle: '#8A8E9C',
  },
  {
    icon: 'language',
    title: 'Ngôn Ngữ',
    colorTitle: '#8A8E9C',
  },
  {
    divider: true,
  },
  {
    icon: 'bell',
    title: 'Thông Báo',
    colorTitle: '#8A8E9C',
  },
  {
    divider: true,
  },
  {
    icon: 'exchange',
    title: 'Chuyển Tài Khoản',
    colorTitle: '#8A8E9C',
  },
  {
    divider: true,
  },
];

export const listGetStartScreen = [
  {
    title: 'Đang Giao',
    colorTitle: '#8A8E9C',
    quantity: 20,
    note: 'ĐH',
  },
  {
    title: 'Đã Lấy',
    colorTitle: '#8A8E9C',
    quantity: 0,
    note: 'ĐH',
  },
  {
    title: 'Giao Hàng Thành Công',
    colorTitle: '#8A8E9C',
    quantity: 20,
    note: 'ĐH',
  },
  {
    title: 'Tiền Về',
    colorTitle: '#8A8E9C',
    quantity: 20,
    note: 'VND',
  },
  {
    title: 'Chờ Lấy',
    colorTitle: '#8A8E9C',
    quantity: 20,
    note: 'ĐH',
  },
  {
    title: 'Hoãn Giao',
    colorTitle: '#8A8E9C',
    quantity: 20,
    note: 'ĐH',
  },
  {
    title: 'Không Giao Được',
    colorTitle: '#8A8E9C',
    quantity: 20,
    note: 'ĐH',
  },
  {
    title: 'Tồn Kho',
    colorTitle: '#8A8E9C',
    quantity: 0,
    note: 'ĐH',
  },
  {
    title: 'Yêu Cầu Chưa Xử Lý',
    colorTitle: '#8A8E9C',
    quantity: 20,
    note: 'YC',
  },
];
