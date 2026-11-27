/* TomatoCare Realistic Prototype — 6 Screens with Real PlantDoc/Wikimedia Leaf Photos */

const ICONS = {
  leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5.5v-6.5h-5V21H4a1 1 0 0 1-1-1z"/></svg>`,
  scan: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/></svg>`,
  history: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 2"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.85 1 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  droplet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
  thermometer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>`,
  wind: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  pump: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>`,
  mist: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M8 19v1"/><path d="M8 14v1"/><path d="M16 19v1"/><path d="M16 14v1"/><path d="M12 21v1"/><path d="M12 16v1"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
  image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,
  arrowLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
  wifi: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`,
  unlock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="m9 18 6-6-6-6"/></svg>`
};

const ANALYSES = [
  {
    id: 'an-101',
    crop: 'potato',
    cropLabel: 'Khoai tây',
    status: 'diseased',
    statusLabel: 'Có bệnh',
    disease: 'Mốc sương (bệnh muộn)',
    title: 'Khoai tây – Mốc sương (bệnh muộn)',
    confidence: 97,
    source: 'Ảnh mẫu',
    fileName: 'Lateblight.jpg',
    time: '13:05',
    date: '12/11/2026',
    shortDate: '12/11',
    durationMs: 820,
    brightness: 142,
    resolution: '1024×768',
    mistMode: 2,
    mistLabel: 'Dừng phun',
    mistDesc: 'Tạm dừng phun sương theo lịch để giữ tán lá khô, hạn chế nấm lan. Bơm tưới gốc tiếp tục hoạt động theo độ ẩm đất.',
    lcd1: 'BENH 97%',
    lcd2: 'Khoai tay - moc suong',
    ackTime: '13:05:02',
    image: 'assets/leaves/potato_late_blight_hero.jpg',
    symptom: 'Lá xuất hiện vết cháy nâu sẫm bất định, mép vết hơi úng nước. 2/4 lá phát hiện vượt ngưỡng 90%.',
    advice: [
      'Cắt bỏ các lá bị cháy nặng, thu gom ra khỏi luống để giảm nguồn bào tử.',
      'Phun thuốc đặc trị nấm Phytophthora (hoạt chất Metalaxyl hoặc Mancozeb) vào sáng sớm hoặc chiều mát.',
      'Chuyển sang tưới gốc trực tiếp, tránh làm ướt mặt lá vào buổi tối.'
    ],
    // Coordinates aligned to real leaves in assets/leaves/potato_late_blight_hero.jpg (1024x768)
    leaves: [
      { id: 1, label: 'Mốc sương', fullLabel: 'Mốc sương (bệnh muộn)', level: 'diseased', conf: 97, box: { l: 34.5, t: 31.8, w: 22.8, h: 17.8 }, px: '353, 244, 586, 381' },
      { id: 2, label: 'Mốc sương', fullLabel: 'Mốc sương (bệnh muộn)', level: 'diseased', conf: 94, box: { l: 24.4, t: 61.5, w: 19.0, h: 18.2 }, px: '250, 472, 444, 612' },
      { id: 3, label: 'Nghi ngờ', fullLabel: 'Nghi ngờ mốc sương', level: 'suspect', conf: 84, box: { l: 47.0, t: 51.8, w: 11.6, h: 14.5 }, px: '481, 398, 600, 509' },
      { id: 4, label: 'Khỏe mạnh', fullLabel: 'Khỏe mạnh', level: 'healthy', conf: 93, box: { l: 6.2, t: 55.8, w: 14.5, h: 33.2 }, px: '63, 428, 212, 683' }
    ]
  },
  {
    id: 'an-102',
    crop: 'tomato',
    cropLabel: 'Cà chua',
    status: 'healthy',
    statusLabel: 'Khỏe mạnh',
    disease: 'Cây khỏe mạnh',
    title: 'Cà chua – Cây khỏe mạnh',
    confidence: 95,
    source: 'Ảnh mẫu',
    fileName: 'img_6635.jpg',
    time: '12:00',
    date: '12/11/2026',
    shortDate: '12/11',
    durationMs: 710,
    brightness: 156,
    resolution: '1200×900',
    mistMode: 1,
    mistLabel: 'Bình thường',
    mistDesc: 'Duy trì chế độ phun sương bình thường theo lịch và nhiệt độ môi trường.',
    lcd1: 'KHOE 95%',
    lcd2: 'Ca chua - khoe',
    ackTime: '12:00:01',
    image: 'assets/leaves/tomato_healthy_1.jpg',
    symptom: 'Tán lá xanh đều, không phát hiện đốm bệnh hay biến dạng trên 3/3 lá kiểm tra.',
    advice: [
      'Duy trì lịch tưới gốc và phun sương hiện tại.',
      'Tiếp tục theo dõi định kỳ vào khung giờ 08:00 và 16:00.'
    ],
    leaves: [
      { id: 1, label: 'Khỏe mạnh', fullLabel: 'Khỏe mạnh', level: 'healthy', conf: 96, box: { l: 25.5, t: 38.0, w: 20.0, h: 25.5 }, px: '306, 342, 546, 571' },
      { id: 2, label: 'Khỏe mạnh', fullLabel: 'Khỏe mạnh', level: 'healthy', conf: 95, box: { l: 48.0, t: 45.5, w: 21.5, h: 24.0 }, px: '576, 409, 834, 625' },
      { id: 3, label: 'Khỏe mạnh', fullLabel: 'Khỏe mạnh', level: 'healthy', conf: 93, box: { l: 71.5, t: 54.0, w: 18.0, h: 28.5 }, px: '858, 486, 1074, 742' }
    ]
  },
  {
    id: 'an-103',
    crop: 'pepper',
    cropLabel: 'Ớt chuông',
    status: 'suspect',
    statusLabel: 'Nghi bệnh',
    disease: 'Nghi đốm vi khuẩn',
    title: 'Ớt chuông – Nghi đốm vi khuẩn',
    confidence: 76,
    source: 'Tải lên',
    fileName: 'pepper_spot_02.jpg',
    time: '11:42',
    date: '12/11/2026',
    shortDate: '12/11',
    durationMs: 890,
    brightness: 118,
    resolution: '900×675',
    mistMode: 2,
    mistLabel: 'Dừng phun',
    mistDesc: 'Tạm dừng phun sương phòng ngừa lây lan vi khuẩn qua giọt nước trên mặt lá.',
    lcd1: 'NGHI 76%',
    lcd2: 'Nghi: Ot - dom vi khuan',
    ackTime: '11:42:02',
    image: 'assets/leaves/pepper_bacterial_spot.jpg',
    symptom: 'Có các đốm nâu nhỏ rải rác ở mép và phiến lá. Cần kiểm tra trực tiếp ngoài vườn để xác nhận.',
    advice: [
      'Kiểm tra mặt dưới lá và các cây lân cận trong khay ươm.',
      'Tránh tưới phun lên lá; giữ luống thông thoáng.'
    ],
    leaves: [
      { id: 1, label: 'Nghi ngờ', fullLabel: 'Nghi đốm vi khuẩn', level: 'suspect', conf: 76, box: { l: 25.0, t: 43.0, w: 16.5, h: 24.5 }, px: '225, 290, 373, 455' },
      { id: 2, label: 'Nghi ngờ', fullLabel: 'Nghi đốm vi khuẩn', level: 'suspect', conf: 72, box: { l: 58.8, t: 42.5, w: 14.2, h: 20.5 }, px: '529, 287, 657, 425' },
      { id: 3, label: 'Khỏe mạnh', fullLabel: 'Khỏe mạnh', level: 'healthy', conf: 88, box: { l: 49.0, t: 57.5, w: 16.5, h: 31.0 }, px: '441, 388, 589, 597' }
    ]
  },
  {
    id: 'an-104',
    crop: 'tomato',
    cropLabel: 'Cà chua',
    status: 'diseased',
    statusLabel: 'Có bệnh',
    disease: 'Virus xoăn vàng lá',
    title: 'Cà chua – Virus xoăn vàng lá',
    confidence: 93,
    source: 'Ảnh mẫu',
    fileName: 'tylcv_field_08.jpg',
    time: '11:00',
    date: '12/11/2026',
    shortDate: '12/11',
    durationMs: 790,
    brightness: 164,
    resolution: '1024×683',
    mistMode: 1,
    mistLabel: 'Bình thường',
    mistDesc: 'Bệnh virus lây qua bọ phấn trắng, không phụ thuộc ẩm độ tán lá nên giữ nguyên phun sương.',
    lcd1: 'BENH 93%',
    lcd2: 'Ca chua - xoan vang la',
    ackTime: '11:00:01',
    image: 'assets/leaves/tomato_yellow_curl.jpg',
    symptom: 'Lá non vàng mép, xoăn cong lên trên rõ rệt ở cả cụm ngọn.',
    advice: [
      'Kiểm tra mật độ bọ phấn trắng ở mặt dưới lá và đặt bẫy dính vàng.',
      'Nhổ bỏ cây nhiễm nặng ở giai đoạn sớm để tránh lây sang cả luống.'
    ],
    leaves: [
      { id: 1, label: 'Xoăn vàng lá', fullLabel: 'Virus xoăn vàng lá', level: 'diseased', conf: 93, box: { l: 21.0, t: 34.0, w: 23.8, h: 26.5 }, px: '215, 232, 459, 413' },
      { id: 2, label: 'Xoăn vàng lá', fullLabel: 'Virus xoăn vàng lá', level: 'diseased', conf: 91, box: { l: 58.2, t: 37.5, w: 16.5, h: 26.8 }, px: '596, 256, 765, 439' },
      { id: 3, label: 'Nghi ngờ', fullLabel: 'Nghi xoăn vàng lá', level: 'suspect', conf: 81, box: { l: 77.0, t: 17.5, w: 18.0, h: 22.5 }, px: '788, 119, 973, 273' }
    ]
  },
  {
    id: 'an-105',
    crop: 'pepper',
    cropLabel: 'Ớt chuông',
    status: 'healthy',
    statusLabel: 'Khỏe mạnh',
    disease: 'Cây khỏe mạnh',
    title: 'Ớt chuông – Cây khỏe mạnh',
    confidence: 97,
    source: 'Ảnh mẫu',
    fileName: 'pepper_leaf_04.jpg',
    time: '10:15',
    date: '12/11/2026',
    shortDate: '12/11',
    durationMs: 640,
    brightness: 151,
    resolution: '1200×800',
    mistMode: 1,
    mistLabel: 'Bình thường',
    mistDesc: 'Giữ chế độ phun sương bình thường.',
    lcd1: 'KHOE 97%',
    lcd2: 'Ot - khoe',
    ackTime: '10:15:01',
    image: 'assets/leaves/pepper_healthy.jpg',
    symptom: 'Phiến lá xanh bóng, gân lá bình thường, không có đốm bệnh.',
    advice: ['Duy trì chế độ chăm sóc và kiểm tra định kỳ.'],
    leaves: [
      { id: 1, label: 'Khỏe mạnh', fullLabel: 'Khỏe mạnh', level: 'healthy', conf: 97, box: { l: 4.0, t: 12.0, w: 66.0, h: 77.0 }, px: '48, 96, 840, 712' },
      { id: 2, label: 'Khỏe mạnh', fullLabel: 'Khỏe mạnh', level: 'healthy', conf: 94, box: { l: 61.0, t: 6.5, w: 29.0, h: 36.0 }, px: '732, 52, 1080, 340' }
    ]
  },
  {
    id: 'an-106',
    crop: 'tomato',
    cropLabel: 'Cà chua',
    status: 'diseased',
    statusLabel: 'Có bệnh',
    disease: 'Nhện đỏ',
    title: 'Cà chua – Nhện đỏ',
    confidence: 92,
    source: 'Ảnh mẫu',
    fileName: 'tomato_mite_12.jpg',
    time: '09:30',
    date: '12/11/2026',
    shortDate: '12/11',
    durationMs: 740,
    brightness: 148,
    resolution: '1200×900',
    mistMode: 3,
    mistLabel: 'Phun tăng cường',
    mistDesc: 'Chuyển phun sương sang chế độ 3 (tăng cường ẩm độ) do nhện đỏ phát triển mạnh khi khô nóng.',
    lcd1: 'BENH 92%',
    lcd2: 'Ca chua - nhen do',
    ackTime: '09:30:02',
    image: 'assets/leaves/tomato_spider_mites.jpg',
    symptom: 'Nhiều chấm lấm tấm trắng vàng trên bề mặt phiến lá do nhện chích hút.',
    advice: [
      'Tăng độ ẩm xung quanh tán lá (đã tự động kích hoạt phun sương chế độ 3).',
      'Kiểm tra mặt dưới lá; phun dầu khoáng hoặc thuốc đặc trị nhện nếu mật độ cao.'
    ],
    leaves: [
      { id: 1, label: 'Nhện đỏ', fullLabel: 'Nhện đỏ', level: 'diseased', conf: 92, box: { l: 22.0, t: 54.0, w: 27.5, h: 42.0 }, px: '264, 486, 594, 864' },
      { id: 2, label: 'Nhện đỏ', fullLabel: 'Nhện đỏ', level: 'diseased', conf: 91, box: { l: 62.5, t: 14.0, w: 33.5, h: 52.0 }, px: '750, 126, 1152, 594' }
    ]
  },
  {
    id: 'an-107',
    crop: 'potato',
    cropLabel: 'Khoai tây',
    status: 'healthy',
    statusLabel: 'Khỏe mạnh',
    disease: 'Cây khỏe mạnh',
    title: 'Khoai tây – Cây khỏe mạnh',
    confidence: 92,
    source: 'Ảnh mẫu',
    fileName: 'potato_foliage_03.jpg',
    time: '08:00',
    date: '12/11/2026',
    shortDate: '12/11',
    durationMs: 760,
    brightness: 129,
    resolution: '1000×667',
    mistMode: 1,
    mistLabel: 'Bình thường',
    mistDesc: 'Giữ chế độ phun sương bình thường.',
    lcd1: 'KHOE 92%',
    lcd2: 'Khoai tay - khoe',
    ackTime: '08:00:01',
    image: 'assets/leaves/potato_healthy_1.jpg',
    symptom: 'Lá khoai tây phát triển bình thường, không có vết bệnh.',
    advice: ['Duy trì lịch tưới và kiểm tra định kỳ.'],
    leaves: [
      { id: 1, label: 'Khỏe mạnh', fullLabel: 'Khỏe mạnh', level: 'healthy', conf: 93, box: { l: 34.5, t: 43.0, w: 23.0, h: 48.0 }, px: '345, 286, 575, 606' },
      { id: 2, label: 'Khỏe mạnh', fullLabel: 'Khỏe mạnh', level: 'healthy', conf: 91, box: { l: 55.0, t: 32.5, w: 35.0, h: 37.5 }, px: '550, 217, 900, 467' }
    ]
  },
  {
    id: 'an-108',
    crop: 'potato',
    cropLabel: 'Khoai tây',
    status: 'diseased',
    statusLabel: 'Có bệnh',
    disease: 'Đốm vòng (bệnh sớm)',
    title: 'Khoai tây – Đốm vòng (bệnh sớm)',
    confidence: 95,
    source: 'Tải lên',
    fileName: 'potato_eb_06.jpg',
    time: '17:20',
    date: '11/11/2026',
    shortDate: '11/11',
    durationMs: 880,
    brightness: 138,
    resolution: '900×662',
    mistMode: 2,
    mistLabel: 'Dừng phun',
    mistDesc: 'Tạm dừng phun sương để hạn chế nấm Alternaria phát triển trên tán lá.',
    lcd1: 'BENH 95%',
    lcd2: 'Khoai tay - dom vong',
    ackTime: '17:20:02',
    image: 'assets/leaves/potato_early_blight.jpg',
    symptom: 'Nhiều đốm nâu đen dạng vòng đồng tâm trên lá già và lá tầng giữa.',
    advice: [
      'Tỉa bỏ lá già phía dưới sát mặt đất bị nhiễm nặng.',
      'Bổ sung dinh dưỡng cân đối và phun thuốc trừ nấm theo khuyến cáo.'
    ],
    leaves: [
      { id: 1, label: 'Đốm vòng', fullLabel: 'Đốm vòng (bệnh sớm)', level: 'diseased', conf: 95, box: { l: 38.0, t: 55.5, w: 24.0, h: 20.5 }, px: '342, 367, 558, 503' },
      { id: 2, label: 'Đốm vòng', fullLabel: 'Đốm vòng (bệnh sớm)', level: 'diseased', conf: 92, box: { l: 29.0, t: 36.5, w: 14.5, h: 27.0 }, px: '261, 241, 391, 420' }
    ]
  },
  {
    id: 'an-109',
    crop: 'tomato',
    cropLabel: 'Cà chua',
    status: 'suspect',
    statusLabel: 'Nghi bệnh',
    disease: 'Nghi mốc sương',
    title: 'Cà chua – Nghi mốc sương',
    confidence: 78,
    source: 'Ảnh mẫu',
    fileName: 'tomato_blight_206.jpg',
    time: '16:00',
    date: '11/11/2026',
    shortDate: '11/11',
    durationMs: 730,
    brightness: 144,
    resolution: '750×499',
    mistMode: 2,
    mistLabel: 'Dừng phun',
    mistDesc: 'Tạm dừng phun sương phòng ngừa trong lúc chờ kiểm tra xác nhận.',
    lcd1: 'NGHI 78%',
    lcd2: 'Nghi: Ca chua - moc suong',
    ackTime: '16:00:01',
    image: 'assets/leaves/tomato_suspect_blight.jpg',
    symptom: 'Phát hiện 1 lá có mảng cháy nâu xám ở phần giữa phiến lá.',
    advice: ['Kiểm tra lại cây sau 24 giờ hoặc chụp thêm các lá lân cận.'],
    leaves: [
      { id: 1, label: 'Nghi ngờ', fullLabel: 'Nghi mốc sương', level: 'suspect', conf: 78, box: { l: 9.0, t: 22.0, w: 72.0, h: 58.0 }, px: '67, 110, 607, 399' }
    ]
  },
  {
    id: 'an-110',
    crop: 'tomato',
    cropLabel: 'Cà chua',
    status: 'dark',
    statusLabel: 'Ảnh tối',
    disease: 'Ảnh quá tối',
    title: 'Cà chua – Ảnh quá tối',
    confidence: null,
    source: 'Ảnh mẫu',
    fileName: 'capture_0500.jpg',
    time: '05:00',
    date: '11/11/2026',
    shortDate: '11/11',
    durationMs: 180,
    brightness: 21,
    resolution: '1200×900',
    mistMode: 0,
    mistLabel: 'Giữ nguyên',
    mistDesc: 'Không đủ ánh sáng để phân tích, giữ nguyên chế độ phun sương hiện tại.',
    lcd1: 'ANH QUA TOI',
    lcd2: 'Do sang 21/255',
    ackTime: '05:00:01',
    image: 'assets/leaves/tomato_healthy_1.jpg',
    isDark: true,
    symptom: 'Độ sáng trung bình 21/255, dưới ngưỡng tối thiểu 35/255 nên hệ thống bỏ qua phân tích.',
    advice: ['Điều chỉnh lịch chụp vào khung giờ có ánh sáng tự nhiên (từ 07:00 đến 17:00).'],
    leaves: []
  },
  {
    id: 'an-111',
    crop: 'potato',
    cropLabel: 'Khoai tây',
    status: 'healthy',
    statusLabel: 'Khỏe mạnh',
    disease: 'Cây khỏe mạnh',
    title: 'Khoai tây – Cây khỏe mạnh',
    confidence: 96,
    source: 'Tải lên',
    fileName: 'solanum_leaf_clean.jpg',
    time: '15:10',
    date: '10/11/2026',
    shortDate: '10/11',
    durationMs: 690,
    brightness: 162,
    resolution: '1000×1333',
    mistMode: 1,
    mistLabel: 'Bình thường',
    mistDesc: 'Giữ chế độ phun sương bình thường.',
    lcd1: 'KHOE 96%',
    lcd2: 'Khoai tay - khoe',
    ackTime: '15:10:01',
    image: 'assets/leaves/potato_healthy_2.jpg',
    symptom: 'Lá kép sạch bệnh, màu xanh đồng nhất.',
    advice: ['Không cần xử lý.'],
    leaves: [
      { id: 1, label: 'Khỏe mạnh', fullLabel: 'Khỏe mạnh', level: 'healthy', conf: 96, box: { l: 14.0, t: 6.0, w: 74.0, h: 64.0 }, px: '140, 80, 880, 933' }
    ]
  },
  {
    id: 'an-112',
    crop: 'tomato',
    cropLabel: 'Cà chua',
    status: 'diseased',
    statusLabel: 'Có bệnh',
    disease: 'Mốc sương (bệnh muộn)',
    title: 'Cà chua – Mốc sương (bệnh muộn)',
    confidence: 94,
    source: 'Ảnh mẫu',
    fileName: 'tomato_lb_04.jpg',
    time: '08:00',
    date: '10/11/2026',
    shortDate: '10/11',
    durationMs: 810,
    brightness: 134,
    resolution: '900×675',
    mistMode: 2,
    mistLabel: 'Dừng phun',
    mistDesc: 'Tạm dừng phun sương để giảm ẩm độ trên lá.',
    lcd1: 'BENH 94%',
    lcd2: 'Ca chua - moc suong',
    ackTime: '08:00:02',
    image: 'assets/leaves/tomato_late_blight_1.jpg',
    symptom: 'Vết cháy nâu loang rộng kèm viền vàng nhạt xuất hiện trên nhiều lá gần quả non.',
    advice: [
      'Cắt tỉa lá nhiễm bệnh, giữ luống thoáng gió.',
      'Phun thuốc trừ nấm đặc trị theo liều lượng hướng dẫn.'
    ],
    leaves: [
      { id: 1, label: 'Mốc sương', fullLabel: 'Mốc sương (bệnh muộn)', level: 'diseased', conf: 94, box: { l: 34.0, t: 10.0, w: 32.0, h: 34.0 }, px: '306, 67, 594, 297' },
      { id: 2, label: 'Mốc sương', fullLabel: 'Mốc sương (bệnh muộn)', level: 'diseased', conf: 91, box: { l: 15.0, t: 54.0, w: 23.0, h: 30.0 }, px: '135, 364, 342, 567' },
      { id: 3, label: 'Nghi ngờ', fullLabel: 'Nghi mốc sương', level: 'suspect', conf: 79, box: { l: 41.5, t: 41.0, w: 20.0, h: 33.0 }, px: '373, 276, 553, 499' }
    ]
  }
];

const CROP_STATS = [
  { key: 'tomato', name: 'Cà chua', dot: 'dot-tomato', total: 42, diseased: 6, suspect: 5, healthy: 31, topDisease: 'Virus xoăn vàng lá' },
  { key: 'potato', name: 'Khoai tây', dot: 'dot-potato', total: 28, diseased: 4, suspect: 3, healthy: 21, topDisease: 'Mốc sương (bệnh muộn)' },
  { key: 'pepper', name: 'Ớt chuông', dot: 'dot-pepper', total: 19, diseased: 1, suspect: 4, healthy: 14, topDisease: 'Đốm vi khuẩn' }
];

const state = {
  viewMode: 'interactive', // 'interactive' | 'pdf'
  screen: 'dashboard',     // 'login' | 'dashboard' | 'analyze' | 'history' | 'detail' | 'settings'
  authTab: 'login',        // 'login' | 'register'
  authLoading: false,
  dashCrop: 'all',
  autoEnabled: true,
  schedulePreset: '08_16',
  analyzeCrop: 'auto',
  analyzeSource: 'sample',
  selectedSampleId: 'an-101',
  uploadedPreview: null,
  historySearch: '',
  historyStatus: 'all',
  historyCrop: 'all',
  detailId: 'an-101',
  showBoxes: true,
  hoveredLeaf: null,
  settings: {
    deviceName: 'Vườn sau nhà',
    deviceCode: '55afb0',
    mqttHost: 'broker.hivemq.com:1883',
    topic: 'tuoicaytt/55afb0',
    cropTomato: true,
    cropPotato: true,
    cropPepper: true,
    scheduleMode: '08_16',
    diseaseThreshold: 90,
    suspectThreshold: 60,
    minVotes: 2,
    minBrightness: 35,
    soundAlert: true,
    browserAlert: true,
    dailyEmail: false,
    dirty: false
  }
};

function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
}

function badgeClass(status) {
  if (status === 'diseased') return 'badge-danger';
  if (status === 'suspect') return 'badge-warn';
  if (status === 'healthy') return 'badge-ok';
  return 'badge-neutral';
}

function renderSidebar(activeScreen) {
  return `
    <aside class="sidebar">
      <div class="sidebar-brand">
        <span class="brand-icon">${ICONS.leaf}</span>
        <span class="brand-text">TomatoCare</span>
      </div>

      <nav class="sidebar-nav">
        <button class="nav-item ${activeScreen === 'dashboard' ? 'active' : ''}" onclick="go('dashboard')">
          ${ICONS.home}<span>Tổng quan</span>
        </button>
        <button class="nav-item ${activeScreen === 'analyze' ? 'active' : ''}" onclick="go('analyze')">
          ${ICONS.scan}<span>Phân tích ảnh</span>
        </button>
        <button class="nav-item ${activeScreen === 'history' || activeScreen === 'detail' ? 'active' : ''}" onclick="go('history')">
          ${ICONS.history}<span>Lịch sử</span>
        </button>
        <button class="nav-item ${activeScreen === 'settings' ? 'active' : ''}" onclick="go('settings')">
          ${ICONS.settings}<span>Cài đặt</span>
        </button>
      </nav>

      <div class="sidebar-section">
        <div class="sidebar-section-title">Cây trồng (7 ngày)</div>
        <div class="crop-nav-list">
          ${CROP_STATS.map(c => `
            <button class="crop-nav-row" onclick="filterHistoryByCrop('${c.key}')">
              <span class="crop-nav-left"><span class="crop-dot ${c.dot}"></span>${c.name}</span>
              <span class="crop-count">${c.total}</span>
            </button>
          `).join('')}
        </div>
      </div>

      <div class="sidebar-footer">
        <div class="device-mini">
          <div class="device-mini-top">
            <span><span class="status-dot"></span>Pico W</span>
            <span class="mono" style="font-size:11px;color:var(--text-muted)">55afb0</span>
          </div>
          <div class="device-mini-sub tabular">Đất 62% · Bơm tắt · Phun dừng</div>
        </div>
        <div class="user-row">
          <div class="user-info">
            <div class="avatar">HN</div>
            <div style="min-width:0">
              <div class="user-name">Vườn nhà mình</div>
              <div class="user-email">huong.nguyen@vuonnha.vn</div>
            </div>
          </div>
          <button class="icon-btn" title="Đăng xuất" onclick="go('login')">${ICONS.logout}</button>
        </div>
      </div>
    </aside>
  `;
}

/* ===== SCREEN 1: LOGIN / REGISTER ===== */
function renderAuthPanel(dirClass = '') {
  const isReg = state.authTab === 'register';
  if (isReg) {
    return `
      <div class="auth-panel-anim ${dirClass}">
        <h2>Tạo tài khoản mới</h2>
        <form onsubmit="handleAuthSubmit(event, true)">
          <div class="field">
            <label for="regGarden">Tên vườn</label>
            <input id="regGarden" class="input" type="text" placeholder="Ví dụ: Vườn sân thượng" required />
          </div>
          <div class="field">
            <label for="regEmail">Email</label>
            <input id="regEmail" class="input" type="email" placeholder="ten@domain.vn" required />
          </div>
          <div class="field">
            <label for="regPass">Mật khẩu</label>
            <div class="input-wrap">
              <input id="regPass" class="input" type="password" placeholder="Tối thiểu 8 ký tự" minlength="8" required />
              <button type="button" class="input-icon-btn" aria-label="Hiện mật khẩu" onclick="togglePass('regPass')">${ICONS.eye}</button>
            </div>
          </div>
          <div class="field" style="margin-bottom:18px">
            <label for="regPass2">Nhập lại mật khẩu</label>
            <input id="regPass2" class="input" type="password" placeholder="Nhập lại mật khẩu" minlength="8" required />
          </div>
          <button type="submit" class="btn btn-primary btn-lg btn-block btn-auth-submit" ${state.authLoading ? 'disabled' : ''}>
            ${state.authLoading ? '<span class="btn-spinner"></span><span>Đang tạo tài khoản...</span>' : 'Tạo tài khoản'}
          </button>
        </form>
      </div>
    `;
  }

  return `
    <div class="auth-panel-anim ${dirClass}">
      <h2>Đăng nhập tài khoản</h2>
      <form onsubmit="handleAuthSubmit(event, false)">
        <div class="field">
          <label for="loginEmail">Email</label>
          <input id="loginEmail" class="input" type="email" value="huong.nguyen@vuonnha.vn" required />
        </div>
        <div class="field">
          <div class="field-head">
            <label for="loginPass">Mật khẩu</label>
            <a href="#" class="text-link" onclick="event.preventDefault(); showToast('Đã gửi hướng dẫn đặt lại mật khẩu');">Quên mật khẩu?</a>
          </div>
          <div class="input-wrap">
            <input id="loginPass" class="input" type="password" value="••••••••••" required />
            <button type="button" class="input-icon-btn" aria-label="Hiện mật khẩu" onclick="togglePass('loginPass')">${ICONS.eye}</button>
          </div>
        </div>
        <label class="checkbox-row">
          <input type="checkbox" checked />
          <span>Ghi nhớ đăng nhập</span>
        </label>
        <button type="submit" class="btn btn-primary btn-lg btn-block btn-auth-submit" ${state.authLoading ? 'disabled' : ''}>
          ${state.authLoading ? '<span class="btn-spinner"></span><span>Đang đăng nhập...</span>' : 'Đăng nhập'}
        </button>
      </form>
    </div>
  `;
}

function renderLoginScreen() {
  const isReg = state.authTab === 'register';
  return `
    <div class="screen-login" id="screenLogin">
      <div class="login-bg">
        <img src="assets/leaves/garden_hero.jpg" alt="Nhà kính trồng cà chua" />
      </div>
      <div class="login-bg-scrim"></div>

      <div class="login-center">
        <div class="login-card" id="loginCard">
          <div class="login-card-brand">
            <div class="brand-mark">
              <span class="brand-icon">${ICONS.leaf}</span>
              <span>TomatoCare</span>
            </div>
          </div>

          <div class="auth-tabs ${isReg ? 'mode-register' : ''}" id="authTabs">
            <span class="auth-tab-indicator"></span>
            <button type="button" class="${!isReg ? 'active' : ''}" onclick="switchAuthTab('login')">Đăng nhập</button>
            <button type="button" class="${isReg ? 'active' : ''}" onclick="switchAuthTab('register')">Đăng ký</button>
          </div>

          <div class="auth-panel-host" id="authPanelHost">
            ${renderAuthPanel()}
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ===== SCREEN 2: DASHBOARD ===== */
function renderDashboardScreen() {
  const filtered = state.dashCrop === 'all' ? ANALYSES : ANALYSES.filter(a => a.crop === state.dashCrop);
  const latest = filtered[0] || ANALYSES[0];

  const kpi = state.dashCrop === 'all'
    ? { total: 89, diseased: 11, suspect: 12, healthy: 66 }
    : (() => {
        const c = CROP_STATS.find(x => x.key === state.dashCrop);
        return { total: c.total, diseased: c.diseased, suspect: c.suspect, healthy: c.healthy };
      })();

  const pct = n => Math.round((n / kpi.total) * 100);

  return `
    <div class="app-shell">
      ${renderSidebar('dashboard')}
      <main class="main">
        <div class="page-header">
          <div class="page-title-group">
            <span class="page-date">Thứ Năm, 12/11/2026</span>
            <h1 class="page-title">Tổng quan vườn cây</h1>
          </div>
          <div class="header-actions">
            <button class="btn btn-secondary" onclick="go('history')">Xem lịch sử</button>
            <button class="btn btn-primary" onclick="go('analyze')">${ICONS.scan}<span>Phân tích ảnh mới</span></button>
          </div>
        </div>

        <div class="filter-bar">
          <div class="pill-group">
            <button class="pill ${state.dashCrop === 'all' ? 'active' : ''}" onclick="setDashCrop('all')">Tất cả</button>
            <button class="pill ${state.dashCrop === 'tomato' ? 'active' : ''}" onclick="setDashCrop('tomato')"><span class="crop-dot dot-tomato"></span>Cà chua</button>
            <button class="pill ${state.dashCrop === 'potato' ? 'active' : ''}" onclick="setDashCrop('potato')"><span class="crop-dot dot-potato"></span>Khoai tây</button>
            <button class="pill ${state.dashCrop === 'pepper' ? 'active' : ''}" onclick="setDashCrop('pepper')"><span class="crop-dot dot-pepper"></span>Ớt chuông</button>
          </div>
          <span class="card-meta">Thống kê 7 ngày qua</span>
        </div>

        <div class="kpi-grid">
          <div class="kpi-card">
            <div class="kpi-label"><span>Lượt kiểm tra</span></div>
            <div class="kpi-val-row">
              <span class="kpi-val">${kpi.total}</span>
            </div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Có bệnh</span></div>
            <div class="kpi-val-row">
              <span class="kpi-val danger">${kpi.diseased}</span>
              <span class="kpi-pct">${pct(kpi.diseased)}%</span>
            </div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Nghi bệnh</span></div>
            <div class="kpi-val-row">
              <span class="kpi-val warn">${kpi.suspect}</span>
              <span class="kpi-pct">${pct(kpi.suspect)}%</span>
            </div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label"><span>Khỏe mạnh</span></div>
            <div class="kpi-val-row">
              <span class="kpi-val ok">${kpi.healthy}</span>
              <span class="kpi-pct">${pct(kpi.healthy)}%</span>
            </div>
          </div>
        </div>

        <div class="dash-grid">
          <div class="stack">
            <!-- Telemetry Card -->
            <section class="card card-pad">
              <div class="card-header">
                <h2 class="card-title">Thiết bị vườn · Raspberry Pi Pico W</h2>
                <div style="display:flex;align-items:center;gap:10px">
                  <span class="card-meta mono">tuoicaytt/55afb0 · 5s trước</span>
                  <span class="badge badge-ok">Trực tuyến</span>
                </div>
              </div>
              <div class="sensor-grid">
                <div class="sensor-tile">
                  <div class="sensor-head"><span>Độ ẩm đất</span>${ICONS.droplet}</div>
                  <div class="sensor-val">62%</div>
                </div>
                <div class="sensor-tile">
                  <div class="sensor-head"><span>Nhiệt độ</span>${ICONS.thermometer}</div>
                  <div class="sensor-val">29,4°C</div>
                </div>
                <div class="sensor-tile">
                  <div class="sensor-head"><span>Độ ẩm không khí</span>${ICONS.wind}</div>
                  <div class="sensor-val">71%</div>
                </div>
                <div class="sensor-tile">
                  <div class="sensor-head"><span>Ánh sáng</span>${ICONS.sun}</div>
                  <div class="sensor-val">12.400 lux</div>
                </div>
                <div class="sensor-tile">
                  <div class="sensor-head"><span>Máy bơm · Bể 78%</span>${ICONS.pump}</div>
                  <div class="sensor-val">Đang tắt</div>
                </div>
                <div class="sensor-tile alert-tile">
                  <div class="sensor-head"><span>Phun sương · Chế độ 2</span>${ICONS.mist}</div>
                  <div class="sensor-val">Tạm dừng</div>
                </div>
              </div>
            </section>

            <!-- Latest Result Card with REAL Photo -->
            <section class="card card-pad">
              <div class="card-header">
                <h2 class="card-title">Kết quả gần nhất</h2>
                <a href="#" class="text-link" onclick="event.preventDefault(); go('history')">Xem tất cả</a>
              </div>
              <div class="latest-result" onclick="openDetail('${latest.id}')">
                <div class="latest-thumb">
                  <img src="${latest.image}" alt="${latest.title}" class="${latest.isDark ? 'photo-dark' : ''}" />
                  ${latest.leaves.slice(0, 2).map(lf => `
                    <div class="thumb-overlay-box" style="left:${lf.box.l}%;top:${lf.box.t}%;width:${lf.box.w}%;height:${lf.box.h}%;border-color:${lf.level === 'diseased' ? '#EF4444' : lf.level === 'suspect' ? '#F59E0B' : '#22C55E'}"></div>
                  `).join('')}
                  <span class="thumb-corner tabular">${latest.leaves.length} lá</span>
                </div>
                <div class="latest-body">
                  <div style="display:flex;align-items:center;gap:6px">
                    <span class="badge ${badgeClass(latest.status)}">${latest.statusLabel}</span>
                    <span class="tag-plain">${latest.cropLabel}</span>
                  </div>
                  <h4>${latest.title}</h4>
                  <div class="latest-specs tabular">
                    <span>Độ tin cậy: <strong>${latest.confidence ? latest.confidence + '%' : '—'}</strong></span>
                    <span>Phun sương: <strong>${latest.mistLabel}</strong></span>
                  </div>
                  <div class="latest-time tabular">${latest.time}, ${latest.shortDate} · ${latest.source}</div>
                </div>
              </div>
            </section>

            <!-- Quick Actions -->
            <section class="card card-pad">
              <div class="card-header">
                <h2 class="card-title">Kiểm tra nhanh</h2>
              </div>
              <div class="quick-actions">
                <button class="action-tile" onclick="openAnalyzeTab('upload')">
                  <span class="action-tile-icon">${ICONS.upload}</span>
                  <span>
                    <span class="action-tile-title">Tải ảnh lên</span>
                    <span class="action-tile-meta">JPG, PNG</span>
                  </span>
                </button>
                <button class="action-tile" onclick="openAnalyzeTab('webcam')">
                  <span class="action-tile-icon">${ICONS.camera}</span>
                  <span>
                    <span class="action-tile-title">Chụp webcam</span>
                    <span class="action-tile-meta">Camera máy tính</span>
                  </span>
                </button>
                <button class="action-tile" onclick="openAnalyzeTab('sample')">
                  <span class="action-tile-icon">${ICONS.image}</span>
                  <span>
                    <span class="action-tile-title">Bộ ảnh mẫu</span>
                    <span class="action-tile-meta">Chọn từ thư viện</span>
                  </span>
                </button>
              </div>
            </section>

            <!-- Crop Breakdown Table -->
            <section class="card card-pad">
              <div class="card-header">
                <h2 class="card-title">Theo từng loại cây</h2>
                <span class="card-meta">7 ngày qua</span>
              </div>
              <table class="crop-table">
                <thead>
                  <tr>
                    <th>Cây trồng</th>
                    <th>Lượt kiểm tra</th>
                    <th>Tỉ lệ</th>
                    <th>Gặp nhiều nhất</th>
                  </tr>
                </thead>
                <tbody>
                  ${CROP_STATS.map(c => {
                    const dW = (c.diseased / c.total) * 100;
                    const sW = (c.suspect / c.total) * 100;
                    const hW = (c.healthy / c.total) * 100;
                    return `
                      <tr>
                        <td style="font-weight:600"><span class="crop-dot ${c.dot}" style="display:inline-block;margin-right:7px"></span>${c.name}</td>
                        <td class="tabular">${c.total} <span style="color:var(--text-muted);font-size:12px">(${c.diseased} bệnh · ${c.suspect} nghi)</span></td>
                        <td>
                          <div class="mini-bar" title="${c.diseased} bệnh, ${c.suspect} nghi, ${c.healthy} khỏe">
                            <span class="seg-d" style="width:${dW}%"></span>
                            <span class="seg-s" style="width:${sW}%"></span>
                            <span class="seg-h" style="width:${hW}%"></span>
                          </div>
                        </td>
                        <td style="color:var(--text-secondary)">${c.topDisease}</td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </section>
          </div>

          <div class="stack">
            <!-- Auto Schedule -->
            <section class="card card-pad">
              <div class="card-header" style="margin-bottom:4px">
                <h2 class="card-title">Lịch kiểm tra tự động</h2>
                <input type="checkbox" class="toggle" ${state.autoEnabled ? 'checked' : ''} onchange="state.autoEnabled=this.checked; render(); showToast(this.checked?'Đã bật lịch kiểm tra tự động':'Đã tạm dừng lịch tự động')" />
              </div>
              <div class="schedule-grid">
                <button class="sched-opt ${state.schedulePreset === '08_16' ? 'active' : ''}" onclick="setSchedule('08_16')">08:00 &amp; 16:00</button>
                <button class="sched-opt ${state.schedulePreset === '2m' ? 'active' : ''}" onclick="setSchedule('2m')">Mỗi 2 phút</button>
                <button class="sched-opt ${state.schedulePreset === '30m' ? 'active' : ''}" onclick="setSchedule('30m')">Mỗi 30 phút</button>
                <button class="sched-opt ${state.schedulePreset === 'custom' ? 'active' : ''}" onclick="setSchedule('custom')">Tùy chỉnh</button>
              </div>
              <div class="schedule-foot">
                <span class="tabular">${state.autoEnabled ? 'Lần tới: 16:00 hôm nay' : 'Đang tạm dừng'}</span>
                <button class="btn btn-secondary btn-sm" onclick="showToast('Đang chạy kiểm tra ngay...'); setTimeout(() => openDetail('an-101'), 500)">Chạy ngay</button>
              </div>
            </section>

            <!-- Realistic 16x2 LCD Display -->
            <section class="card card-pad">
              <div class="card-header">
                <h2 class="card-title">Màn hình LCD thiết bị</h2>
                <span class="badge badge-ok">Đã xác nhận</span>
              </div>
              <div class="lcd-bezel">
                <div class="lcd-screen">
                  <div>${latest.lcd1}</div>
                  <div>${latest.lcd2}</div>
                </div>
              </div>
              <div class="lcd-meta tabular">
                <span>Gửi lúc ${latest.ackTime}</span>
                <span class="mono">MQTT ACK</span>
              </div>
            </section>

            <!-- Recent Activity with real photo thumbnails -->
            <section class="card card-pad">
              <div class="card-header">
                <h2 class="card-title">Hoạt động gần đây</h2>
                <a href="#" class="text-link" onclick="event.preventDefault(); go('history')">Tất cả</a>
              </div>
              <div class="activity-list">
                ${filtered.slice(0, 5).map(item => `
                  <button class="activity-item" onclick="openDetail('${item.id}')">
                    <img class="activity-thumb ${item.isDark ? 'photo-dark' : ''}" src="${item.image}" alt="${item.title}" />
                    <div class="activity-info">
                      <div class="activity-title">${item.title}</div>
                      <div class="activity-sub tabular">${item.time}, ${item.shortDate} · ${item.source}</div>
                    </div>
                    <span class="badge ${badgeClass(item.status)}">${item.statusLabel}</span>
                  </button>
                `).join('')}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  `;
}

/* ===== SCREEN 3: ANALYZE ===== */
function renderAnalyzeScreen() {
  const sampleItems = [ANALYSES[0], ANALYSES[1], ANALYSES[2], ANALYSES[3], ANALYSES[5], ANALYSES[7]];
  const selectedSample = ANALYSES.find(a => a.id === state.selectedSampleId) || ANALYSES[0];
  const previewSrc = state.analyzeSource === 'upload' && state.uploadedPreview ? state.uploadedPreview : (state.analyzeSource === 'sample' ? selectedSample.image : null);

  return `
    <div class="app-shell">
      ${renderSidebar('analyze')}
      <main class="main">
        <div class="page-header">
          <div class="page-title-group">
            <h1 class="page-title">Phân tích ảnh lá</h1>
          </div>
        </div>

        <div class="analyze-grid">
          <section class="card card-pad">
            <p class="step-label">1. Loại cây trồng</p>
            <div class="crop-selector">
              <button class="crop-opt ${state.analyzeCrop === 'auto' ? 'active' : ''}" onclick="state.analyzeCrop='auto'; render()">
                <div class="crop-opt-title">Tự nhận diện</div>
                <div class="crop-opt-sub">15 lớp bệnh</div>
              </button>
              <button class="crop-opt ${state.analyzeCrop === 'tomato' ? 'active' : ''}" onclick="state.analyzeCrop='tomato'; render()">
                <div class="crop-opt-title"><span class="crop-dot dot-tomato"></span>Cà chua</div>
                <div class="crop-opt-sub">9 bệnh &amp; khỏe</div>
              </button>
              <button class="crop-opt ${state.analyzeCrop === 'potato' ? 'active' : ''}" onclick="state.analyzeCrop='potato'; render()">
                <div class="crop-opt-title"><span class="crop-dot dot-potato"></span>Khoai tây</div>
                <div class="crop-opt-sub">2 bệnh &amp; khỏe</div>
              </button>
              <button class="crop-opt ${state.analyzeCrop === 'pepper' ? 'active' : ''}" onclick="state.analyzeCrop='pepper'; render()">
                <div class="crop-opt-title"><span class="crop-dot dot-pepper"></span>Ớt chuông</div>
                <div class="crop-opt-sub">1 bệnh &amp; khỏe</div>
              </button>
            </div>

            <p class="step-label">2. Nguồn ảnh</p>
            <div class="tab-strip">
              <button class="${state.analyzeSource === 'upload' ? 'active' : ''}" onclick="state.analyzeSource='upload'; render()">Tải ảnh lên</button>
              <button class="${state.analyzeSource === 'webcam' ? 'active' : ''}" onclick="state.analyzeSource='webcam'; render()">Webcam</button>
              <button class="${state.analyzeSource === 'sample' ? 'active' : ''}" onclick="state.analyzeSource='sample'; render()">Bộ ảnh mẫu</button>
            </div>

            ${state.analyzeSource === 'upload' ? `
              <div class="dropzone" onclick="document.getElementById('fileInput').click()">
                <div class="dropzone-icon">${ICONS.upload}</div>
                <h4>Kéo thả hoặc chọn ảnh lá cây</h4>
                <p>Hỗ trợ JPG, PNG · tối đa 10 MB</p>
                <button type="button" class="btn btn-secondary btn-sm">Chọn tệp từ máy</button>
                <input id="fileInput" type="file" accept="image/*" style="display:none" onchange="handleFileUpload(event)" />
              </div>
            ` : state.analyzeSource === 'webcam' ? `
              <div class="preview-box" style="aspect-ratio:16/9;flex-direction:column;gap:10px">
                ${ICONS.camera}
                <span>Chưa bật camera trình duyệt</span>
                <button class="btn btn-secondary btn-sm" onclick="showToast('Đang yêu cầu quyền truy cập webcam...')">Mở webcam</button>
              </div>
            ` : `
              <div class="sample-picker-grid">
                ${sampleItems.map(s => `
                  <button class="sample-thumb-card ${state.selectedSampleId === s.id ? 'selected' : ''}" onclick="state.selectedSampleId='${s.id}'; render()">
                    <img src="${s.image}" alt="${s.title}" />
                    <div class="sample-thumb-label">
                      ${s.cropLabel}
                      <span class="mono">${s.fileName}</span>
                    </div>
                  </button>
                `).join('')}
              </div>
            `}

            <div style="display:flex;align-items:center;justify-content:space-between;margin-top:16px;padding-top:14px;border-top:1px solid var(--border)">
              <span class="card-meta">${previewSrc ? 'Đã chọn 1 ảnh · sẵn sàng kiểm tra' : 'Chọn ảnh để bắt đầu'}</span>
              <button class="btn btn-primary" onclick="runSimulatedAnalysis()">${ICONS.scan}<span>Bắt đầu phân tích</span></button>
            </div>
          </section>

          <div class="stack">
            <section class="card card-pad">
              <div class="card-header">
                <h2 class="card-title">Ảnh xem trước</h2>
                ${previewSrc ? `<span class="card-meta mono">${state.analyzeSource === 'sample' ? selectedSample.resolution : 'Ảnh tải lên'}</span>` : ''}
              </div>
              <div class="preview-box">
                ${previewSrc ? `<img src="${previewSrc}" alt="Ảnh chuẩn bị phân tích" />` : `<span>Chưa chọn ảnh</span>`}
              </div>
            </section>

            <section class="card card-pad">
              <div class="card-header">
                <h2 class="card-title">Danh mục bệnh hỗ trợ</h2>
              </div>
              <table class="coverage-table">
                <tbody>
                  <tr>
                    <td>Cà chua</td>
                    <td>Đốm vi khuẩn, đốm vòng, mốc sương, nấm mốc lá, khảm lá, Septoria, nhện đỏ, đốm mục tiêu, xoăn vàng lá</td>
                  </tr>
                  <tr>
                    <td>Khoai tây</td>
                    <td>Đốm vòng (bệnh sớm), mốc sương (bệnh muộn)</td>
                  </tr>
                  <tr>
                    <td>Ớt chuông</td>
                    <td>Đốm vi khuẩn</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        </div>
      </main>
    </div>
  `;
}

/* ===== SCREEN 4: HISTORY ===== */
function renderHistoryScreen() {
  const q = state.historySearch.trim().toLowerCase();
  const list = ANALYSES.filter(item => {
    if (state.historyStatus !== 'all' && item.status !== state.historyStatus) return false;
    if (state.historyCrop !== 'all' && item.crop !== state.historyCrop) return false;
    if (q && !(item.title.toLowerCase().includes(q) || item.disease.toLowerCase().includes(q) || item.cropLabel.toLowerCase().includes(q))) return false;
    return true;
  });

  const countStatus = st => ANALYSES.filter(a => st === 'all' || a.status === st).length;

  return `
    <div class="app-shell">
      ${renderSidebar('history')}
      <main class="main">
        <div class="page-header">
          <div class="page-title-group">
            <h1 class="page-title">Lịch sử phân tích</h1>
            <span class="card-meta tabular">89 lượt trong 7 ngày · hiển thị ${list.length} kết quả</span>
          </div>
          <div class="header-actions">
            <button class="btn btn-danger-outline btn-sm" onclick="showToast('Yêu cầu xác nhận trước khi xóa lịch sử')">${ICONS.trash}<span>Xóa lịch sử</span></button>
          </div>
        </div>

        <section class="card history-toolbar">
          <div class="history-search-row">
            <div class="search-input-wrap">
              ${ICONS.search}
              <input class="input" type="text" placeholder="Tìm tên bệnh hoặc cây trồng..." value="${state.historySearch}" oninput="state.historySearch=this.value; render()" />
            </div>
            <select class="input" style="width:146px">
              <option>7 ngày qua</option>
              <option>24 giờ qua</option>
              <option>30 ngày qua</option>
            </select>
            <select class="input" style="width:146px">
              <option>Mọi nguồn ảnh</option>
              <option>Tải lên</option>
              <option>Ảnh mẫu</option>
              <option>Webcam</option>
            </select>
          </div>

          <div class="history-filter-row">
            <div class="pill-group">
              <button class="pill ${state.historyStatus === 'all' ? 'active' : ''}" onclick="state.historyStatus='all'; render()">Tất cả <span class="pill-count">${countStatus('all')}</span></button>
              <button class="pill ${state.historyStatus === 'diseased' ? 'active' : ''}" onclick="state.historyStatus='diseased'; render()">Có bệnh <span class="pill-count">${countStatus('diseased')}</span></button>
              <button class="pill ${state.historyStatus === 'suspect' ? 'active' : ''}" onclick="state.historyStatus='suspect'; render()">Nghi bệnh <span class="pill-count">${countStatus('suspect')}</span></button>
              <button class="pill ${state.historyStatus === 'healthy' ? 'active' : ''}" onclick="state.historyStatus='healthy'; render()">Khỏe mạnh <span class="pill-count">${countStatus('healthy')}</span></button>
            </div>
            <div class="pill-group">
              <button class="pill ${state.historyCrop === 'all' ? 'active' : ''}" onclick="state.historyCrop='all'; render()">Mọi cây</button>
              <button class="pill ${state.historyCrop === 'tomato' ? 'active' : ''}" onclick="state.historyCrop='tomato'; render()"><span class="crop-dot dot-tomato"></span>Cà chua</button>
              <button class="pill ${state.historyCrop === 'potato' ? 'active' : ''}" onclick="state.historyCrop='potato'; render()"><span class="crop-dot dot-potato"></span>Khoai tây</button>
              <button class="pill ${state.historyCrop === 'pepper' ? 'active' : ''}" onclick="state.historyCrop='pepper'; render()"><span class="crop-dot dot-pepper"></span>Ớt chuông</button>
            </div>
          </div>
        </section>

        <div class="history-grid">
          ${list.map(item => `
            <article class="history-card" onclick="openDetail('${item.id}')">
              <div class="history-photo-wrap">
                <img src="${item.image}" alt="${item.title}" class="${item.isDark ? 'photo-dark' : ''}" />
                <span class="photo-tag">${item.source}</span>
                ${item.leaves.length ? `<span class="photo-leaves">${item.leaves.length} lá</span>` : ''}
              </div>
              <div class="history-body">
                <div class="history-badges">
                  <span class="badge ${badgeClass(item.status)}">${item.statusLabel}</span>
                  <span class="tag-plain">${item.cropLabel}</span>
                </div>
                <h3 class="history-title">${item.title}</h3>
                <div class="history-metrics">
                  ${item.confidence ? `${item.confidence}%` : 'Độ sáng 21/255'} · ${item.mistLabel}
                </div>
                <div class="history-foot">
                  <span>${item.time}, ${item.shortDate}</span>
                  <span class="mono">${item.durationMs} ms</span>
                </div>
              </div>
            </article>
          `).join('')}
        </div>

        <div style="text-align:center;margin-top:20px">
          <button class="btn btn-secondary" onclick="showToast('Đang tải thêm kết quả cũ hơn...')">Tải thêm kết quả</button>
        </div>
      </main>
    </div>
  `;
}

/* ===== SCREEN 5: RESULT DETAIL ===== */
function renderDetailScreen(forcedId) {
  const item = ANALYSES.find(a => a.id === (forcedId || state.detailId)) || ANALYSES[0];
  const diseasedCount = item.leaves.filter(l => l.level === 'diseased').length;
  const scoreColor = item.status === 'diseased' ? 'var(--danger)' : item.status === 'suspect' ? 'var(--warn)' : 'var(--ok)';
  const fillClass = item.status === 'diseased' ? 'fill-diseased' : item.status === 'suspect' ? 'fill-suspect' : 'fill-healthy';

  return `
    <div class="app-shell">
      ${renderSidebar('detail')}
      <main class="main">
        <button class="back-btn" onclick="go('history')">${ICONS.arrowLeft}<span>Lịch sử</span></button>

        <div class="page-header">
          <div class="page-title-group">
            <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px">
              <span class="badge ${badgeClass(item.status)}">${item.statusLabel}</span>
              <span class="tag-plain">${item.cropLabel}</span>
              <span class="card-meta tabular">${item.time} · ${item.date}</span>
            </div>
            <h1 class="page-title">${item.title}</h1>
          </div>
          <div class="header-actions">
            <button class="btn btn-secondary btn-sm" onclick="showToast('Đang tải xuống ${item.fileName}')">${ICONS.download}<span>Ảnh gốc</span></button>
            <button class="btn btn-secondary btn-sm" onclick="showToast('Đã phân tích lại ảnh (${item.durationMs} ms)')">${ICONS.refresh}<span>Phân tích lại</span></button>
            <button class="btn btn-danger-outline btn-sm" aria-label="Xóa bản ghi" onclick="go('history'); showToast('Đã xóa bản ghi')">${ICONS.trash}</button>
          </div>
        </div>

        <div class="detail-grid">
          <div class="stack">
            <!-- Real photo + Crisp YOLO Bounding Boxes -->
            <section class="card cv-stage-card">
              <div class="cv-canvas-wrap">
                <img src="${item.image}" alt="${item.title}" class="${item.isDark ? 'photo-dark' : ''}" />
                <div class="cv-boxes-layer ${state.showBoxes ? '' : 'hidden'}">
                  ${item.leaves.map(lf => {
                    const isDimmed = state.hoveredLeaf !== null && state.hoveredLeaf !== lf.id;
                    const isHigh = state.hoveredLeaf === lf.id;
                    return `
                      <div
                        class="cv-box level-${lf.level} ${isDimmed ? 'dimmed' : ''} ${isHigh ? 'highlighted' : ''}"
                        style="left:${lf.box.l}%;top:${lf.box.t}%;width:${lf.box.w}%;height:${lf.box.h}%;"
                        onmouseenter="setHoveredLeaf(${lf.id})"
                        onmouseleave="setHoveredLeaf(null)"
                      >
                        <span class="cv-box-label">#${lf.id} ${lf.label} ${(lf.conf / 100).toFixed(2)}</span>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
              <div class="cv-toolbar">
                <div class="cv-meta-chips">
                  <span class="mono">${item.fileName}</span>
                  <span>${item.resolution}</span>
                  <span>Độ sáng ${item.brightness}/255</span>
                  <span class="mono">${item.durationMs} ms</span>
                </div>
                <label class="cv-toggle-label">
                  <span>Khung nhận diện</span>
                  <input type="checkbox" class="toggle" ${state.showBoxes ? 'checked' : ''} onchange="state.showBoxes=this.checked; render()" />
                </label>
              </div>
            </section>

            <!-- Detected Leaves Table -->
            <section class="card card-pad">
              <div class="card-header">
                <h2 class="card-title">Vùng lá phát hiện (${item.leaves.length})</h2>
                <span class="card-meta tabular">${diseasedCount > 0 ? `${diseasedCount}/${item.leaves.length} lá vượt ngưỡng 90%` : `${item.leaves.length} lá đã phân loại`}</span>
              </div>
              ${item.leaves.length ? `
                <table class="leaf-table">
                  <thead>
                    <tr>
                      <th style="width:52px">Vùng</th>
                      <th>Kết luận</th>
                      <th style="width:175px">Độ tin cậy</th>
                      <th style="width:140px">Tọa độ (px)</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${item.leaves.map(lf => `
                      <tr
                        class="${state.hoveredLeaf === lf.id ? 'active-row' : ''}"
                        onmouseenter="setHoveredLeaf(${lf.id})"
                        onmouseleave="setHoveredLeaf(null)"
                      >
                        <td class="mono" style="font-weight:600">#${lf.id}</td>
                        <td>${lf.fullLabel}</td>
                        <td>
                          <div class="conf-bar-wrap">
                            <div class="conf-bar"><div class="conf-bar-fill fill-${lf.level}" style="width:${lf.conf}%"></div></div>
                            <span class="tabular" style="font-weight:600;width:36px;text-align:right">${lf.conf}%</span>
                          </div>
                        </td>
                        <td class="mono" style="font-size:11.5px;color:var(--text-muted)">${lf.px}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              ` : `<div class="card-meta">Không tách được vùng lá do ảnh thiếu sáng.</div>`}
            </section>
          </div>

          <div class="stack">
            <!-- Consolidated Diagnosis Card -->
            <section class="card card-pad">
              <div class="card-header" style="margin-bottom:6px">
                <h2 class="card-title">Chẩn đoán</h2>
                <span class="badge ${badgeClass(item.status)}">${item.statusLabel}</span>
              </div>
              <div style="font-size:15.5px;font-weight:700">${item.disease}</div>
              ${item.confidence ? `
                <div class="diag-score-row">
                  <span class="diag-score-label">Xác suất cao nhất</span>
                  <span class="diag-score-val" style="color:${scoreColor}">${item.confidence}%</span>
                </div>
                <div class="conf-bar" style="height:6px">
                  <div class="conf-bar-fill ${fillClass}" style="width:${item.confidence}%"></div>
                </div>
              ` : ''}
              <p class="diag-desc">${item.symptom}</p>
            </section>

            <!-- Mist Control Decision -->
            <section class="card card-pad">
              <div class="card-header" style="margin-bottom:6px">
                <h2 class="card-title">Điều khiển phun sương</h2>
                <span class="badge ${item.mistMode === 2 ? 'badge-warn' : item.mistMode === 3 ? 'badge-danger' : 'badge-ok'}">Chế độ ${item.mistMode || 'cũ'} · ${item.mistLabel}</span>
              </div>
              <p class="diag-desc" style="margin-top:0">${item.mistDesc}</p>
            </section>

            <!-- Actionable Advice -->
            <section class="card card-pad">
              <div class="card-header">
                <h2 class="card-title">Khuyến nghị xử lý</h2>
              </div>
              <ol class="advice-list">
                ${item.advice.map((line, i) => `
                  <li><span class="advice-num">${i + 1}</span><span>${line}</span></li>
                `).join('')}
              </ol>
            </section>

            <!-- Device LCD Confirmation -->
            <section class="card card-pad">
              <div class="card-header">
                <h2 class="card-title">Màn hình LCD thiết bị</h2>
                <span class="badge badge-ok">Đã xác nhận</span>
              </div>
              <div class="lcd-bezel">
                <div class="lcd-screen">
                  <div>${item.lcd1}</div>
                  <div>${item.lcd2}</div>
                </div>
              </div>
              <div class="lcd-meta tabular">
                <span>${item.ackTime} · ${item.shortDate}</span>
                <span class="mono">MIST:${item.mistMode || 1} · AI OK</span>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  `;
}

/* ===== SCREEN 6: SETTINGS ===== */
function renderSettingsScreen() {
  const s = state.settings;
  return `
    <div class="app-shell">
      ${renderSidebar('settings')}
      <main class="main">
        <div class="page-header">
          <div class="page-title-group">
            <h1 class="page-title">Cài đặt hệ thống</h1>
          </div>
        </div>

        <div class="settings-sections">
          <!-- Device -->
          <div class="settings-row">
            <div class="settings-label-col">
              <h3>Thiết bị vườn</h3>
            </div>
            <section class="card card-pad">
              <div class="card-header">
                <div>
                  <div style="font-weight:600;font-size:14px">Raspberry Pi Pico W</div>
                  <div class="card-meta tabular">Độ trễ 118 ms · cập nhật 5 giây trước</div>
                </div>
                <span class="badge badge-ok">Trực tuyến</span>
              </div>
              <div class="form-grid-2">
                <div class="field">
                  <label>Tên thiết bị</label>
                  <input class="input" value="${s.deviceName}" oninput="updateSetting('deviceName', this.value)" />
                </div>
                <div class="field">
                  <label>Mã thiết bị</label>
                  <input class="input mono" value="${s.deviceCode}" readonly />
                </div>
                <div class="field" style="margin-bottom:0">
                  <label>MQTT broker</label>
                  <input class="input mono" value="${s.mqttHost}" readonly />
                </div>
                <div class="field" style="margin-bottom:0">
                  <label>Topic</label>
                  <input class="input mono" value="${s.topic}" readonly />
                </div>
              </div>
              <div style="display:flex;gap:8px;margin-top:14px">
                <button class="btn btn-secondary btn-sm" onclick="showToast('Kết nối MQTT ổn định (118 ms)')">${ICONS.wifi}<span>Kiểm tra kết nối</span></button>
                <button class="btn btn-secondary btn-sm" onclick="showToast('Đã gửi lệnh UNLOCK tới Pico W')">${ICONS.unlock}<span>Mở khóa bơm</span></button>
              </div>
            </section>
          </div>

          <!-- Tracked Crops -->
          <div class="settings-row">
            <div class="settings-label-col">
              <h3>Cây trồng theo dõi</h3>
            </div>
            <section class="card card-pad">
              <div class="setting-item-row">
                <div>
                  <div class="setting-item-title"><span class="crop-dot dot-tomato" style="display:inline-block;margin-right:7px"></span>Cà chua</div>
                  <div class="setting-item-sub">9 loại bệnh lá và lá khỏe</div>
                </div>
                <input type="checkbox" class="toggle" ${s.cropTomato ? 'checked' : ''} onchange="updateSetting('cropTomato', this.checked)" />
              </div>
              <div class="setting-item-row">
                <div>
                  <div class="setting-item-title"><span class="crop-dot dot-potato" style="display:inline-block;margin-right:7px"></span>Khoai tây</div>
                  <div class="setting-item-sub">Đốm vòng, mốc sương và lá khỏe</div>
                </div>
                <input type="checkbox" class="toggle" ${s.cropPotato ? 'checked' : ''} onchange="updateSetting('cropPotato', this.checked)" />
              </div>
              <div class="setting-item-row">
                <div>
                  <div class="setting-item-title"><span class="crop-dot dot-pepper" style="display:inline-block;margin-right:7px"></span>Ớt chuông</div>
                  <div class="setting-item-sub">Đốm vi khuẩn và lá khỏe</div>
                </div>
                <input type="checkbox" class="toggle" ${s.cropPepper ? 'checked' : ''} onchange="updateSetting('cropPepper', this.checked)" />
              </div>
            </section>
          </div>

          <!-- Schedule -->
          <div class="settings-row">
            <div class="settings-label-col">
              <h3>Lịch kiểm tra tự động</h3>
            </div>
            <section class="card card-pad">
              <label class="radio-row">
                <span class="radio-left"><input type="radio" name="sched" ${s.scheduleMode === '08_16' ? 'checked' : ''} onchange="updateSetting('scheduleMode','08_16')" />08:00 và 16:00 hằng ngày</span>
                <span class="tag-plain">Mặc định</span>
              </label>
              <label class="radio-row">
                <span class="radio-left"><input type="radio" name="sched" ${s.scheduleMode === '2m' ? 'checked' : ''} onchange="updateSetting('scheduleMode','2m')" />Mỗi 2 phút</span>
              </label>
              <label class="radio-row">
                <span class="radio-left"><input type="radio" name="sched" ${s.scheduleMode === '30m' ? 'checked' : ''} onchange="updateSetting('scheduleMode','30m')" />Mỗi 30 phút</span>
              </label>
              <label class="radio-row">
                <span class="radio-left"><input type="radio" name="sched" ${s.scheduleMode === 'custom' ? 'checked' : ''} onchange="updateSetting('scheduleMode','custom')" />Tùy chỉnh khung giờ</span>
              </label>
            </section>
          </div>

          <!-- Thresholds -->
          <div class="settings-row">
            <div class="settings-label-col">
              <h3>Ngưỡng cảnh báo</h3>
            </div>
            <section class="card card-pad">
              <div class="range-block">
                <div class="range-head">
                  <span>Kết luận có bệnh từ</span>
                  <strong class="tabular" style="color:var(--danger)">${s.diseaseThreshold}%</strong>
                </div>
                <input type="range" class="range-input" min="70" max="98" value="${s.diseaseThreshold}" oninput="updateSetting('diseaseThreshold', Number(this.value))" />
              </div>
              <div class="range-block">
                <div class="range-head">
                  <span>Cảnh báo nghi ngờ từ</span>
                  <strong class="tabular" style="color:var(--warn)">${s.suspectThreshold}%</strong>
                </div>
                <input type="range" class="range-input" min="40" max="85" value="${s.suspectThreshold}" oninput="updateSetting('suspectThreshold', Number(this.value))" />
              </div>
              <div class="form-grid-2">
                <div class="field" style="margin-bottom:0">
                  <label>Số lá tối thiểu cùng kết luận</label>
                  <input type="number" class="input tabular" min="1" max="6" value="${s.minVotes}" oninput="updateSetting('minVotes', Number(this.value))" />
                </div>
                <div class="field" style="margin-bottom:0">
                  <label>Độ sáng tối thiểu (0–255)</label>
                  <input type="number" class="input tabular" min="10" max="100" value="${s.minBrightness}" oninput="updateSetting('minBrightness', Number(this.value))" />
                </div>
              </div>
            </section>
          </div>

          <!-- Notifications -->
          <div class="settings-row">
            <div class="settings-label-col">
              <h3>Thông báo</h3>
            </div>
            <section class="card card-pad">
              <div class="setting-item-row">
                <div class="setting-item-title">Âm báo khi hoàn tất kiểm tra</div>
                <input type="checkbox" class="toggle" ${s.soundAlert ? 'checked' : ''} onchange="updateSetting('soundAlert', this.checked)" />
              </div>
              <div class="setting-item-row">
                <div class="setting-item-title">Thông báo trình duyệt khi có bệnh / nghi bệnh</div>
                <input type="checkbox" class="toggle" ${s.browserAlert ? 'checked' : ''} onchange="updateSetting('browserAlert', this.checked)" />
              </div>
              <div class="setting-item-row">
                <div>
                  <div class="setting-item-title">Email tổng hợp cuối ngày</div>
                  <div class="setting-item-sub">Gửi lúc 18:00 hằng ngày</div>
                </div>
                <input type="checkbox" class="toggle" ${s.dailyEmail ? 'checked' : ''} onchange="updateSetting('dailyEmail', this.checked)" />
              </div>
            </section>
          </div>

          <!-- Account -->
          <div class="settings-row">
            <div class="settings-label-col">
              <h3>Tài khoản</h3>
            </div>
            <section class="card card-pad">
              <div style="display:flex;align-items:center;justify-content:space-between;gap:12px">
                <div class="user-info">
                  <div class="avatar">HN</div>
                  <div>
                    <div style="font-weight:600;font-size:13.5px">Vườn nhà mình</div>
                    <div class="card-meta">huong.nguyen@vuonnha.vn</div>
                  </div>
                </div>
                <div style="display:flex;gap:8px">
                  <button class="btn btn-secondary btn-sm" onclick="showToast('Mở hộp thoại đổi mật khẩu')">Đổi mật khẩu</button>
                  <button class="btn btn-secondary btn-sm" onclick="go('login')">Đăng xuất</button>
                </div>
              </div>
              <div class="danger-zone">
                <div>
                  <div style="font-weight:600;font-size:13px;color:var(--danger)">Xóa toàn bộ lịch sử phân tích</div>
                  <div style="font-size:12px;color:#7F1D1D">Hành động này xóa vĩnh viễn ảnh và kết quả, không thể hoàn tác.</div>
                </div>
                <button class="btn btn-danger btn-sm" onclick="showToast('Đã hủy thao tác xóa dữ liệu')">Xóa lịch sử</button>
              </div>
            </section>
          </div>

          <div class="settings-save-bar">
            <span class="card-meta">${s.dirty ? 'Có thay đổi chưa lưu.' : 'Đã lưu cấu hình mới nhất.'}</span>
            <div style="display:flex;gap:8px">
              <button class="btn btn-secondary" onclick="state.settings.dirty=false; render(); showToast('Đã hoàn tác thay đổi')">Hủy thay đổi</button>
              <button class="btn btn-primary" onclick="state.settings.dirty=false; render(); showToast('Đã lưu cài đặt thành công')">Lưu cài đặt</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  `;
}

/* ===== ACTIONS ===== */
function switchAuthTab(tab) {
  if (state.authTab === tab) return;
  const dirClass = tab === 'register' ? 'dir-right' : 'dir-left';
  state.authTab = tab;
  const tabsEl = document.getElementById('authTabs');
  const hostEl = document.getElementById('authPanelHost');
  if (tabsEl && hostEl) {
    const startH = hostEl.offsetHeight;
    hostEl.style.height = `${startH}px`;

    tabsEl.classList.toggle('mode-register', tab === 'register');
    const btns = tabsEl.querySelectorAll('button');
    if (btns[0]) btns[0].classList.toggle('active', tab === 'login');
    if (btns[1]) btns[1].classList.toggle('active', tab === 'register');

    hostEl.innerHTML = renderAuthPanel(dirClass);
    const endH = hostEl.scrollHeight;
    requestAnimationFrame(() => {
      hostEl.style.height = `${endH}px`;
    });
    clearTimeout(window.__authHeightTimer);
    window.__authHeightTimer = setTimeout(() => {
      hostEl.style.height = 'auto';
    }, 360);
  } else {
    render();
  }
}

function togglePass(id) {
  const input = document.getElementById(id);
  if (input) input.type = input.type === 'password' ? 'text' : 'password';
}

function handleAuthSubmit(ev, isReg) {
  ev.preventDefault();
  if (isReg) {
    const p1 = document.getElementById('regPass')?.value;
    const p2 = document.getElementById('regPass2')?.value;
    if (p1 !== p2) {
      showToast('Mật khẩu nhập lại không khớp');
      return;
    }
  }
  state.authLoading = true;
  const hostEl = document.getElementById('authPanelHost');
  if (hostEl) hostEl.innerHTML = renderAuthPanel();
  setTimeout(() => {
    state.authLoading = false;
    go('dashboard');
    showToast(isReg ? 'Đã tạo tài khoản và đăng nhập' : 'Đã đăng nhập vào Vườn nhà mình');
  }, 450);
}

function go(screen) {
  if (state.viewMode === 'pdf') setViewMode('interactive');
  if (screen === 'history') {
    state.historyCrop = 'all';
    state.historyStatus = 'all';
  }
  state.screen = screen;
  state.hoveredLeaf = null;
  window.scrollTo({ top: 0, behavior: 'instant' });
  render();
}

function setDashCrop(crop) {
  state.dashCrop = crop;
  render();
}

function setSchedule(preset) {
  state.schedulePreset = preset;
  render();
  showToast('Đã cập nhật lịch kiểm tra tự động');
}

function openAnalyzeTab(tab) {
  state.analyzeSource = tab;
  go('analyze');
}

function filterHistoryByCrop(crop) {
  state.historyCrop = crop;
  if (state.viewMode === 'pdf') setViewMode('interactive');
  state.screen = 'history';
  state.hoveredLeaf = null;
  window.scrollTo({ top: 0, behavior: 'instant' });
  render();
}

function openDetail(id) {
  state.detailId = id;
  go('detail');
}

function setHoveredLeaf(leafId) {
  state.hoveredLeaf = leafId;
  document.querySelectorAll('.cv-box').forEach((el, idx) => {
    const id = idx + 1;
    el.classList.toggle('dimmed', leafId !== null && leafId !== id);
    el.classList.toggle('highlighted', leafId === id);
  });
  document.querySelectorAll('.leaf-table tbody tr').forEach((tr, idx) => {
    tr.classList.toggle('active-row', leafId === idx + 1);
  });
}

function handleFileUpload(ev) {
  const file = ev.target.files && ev.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    state.uploadedPreview = e.target.result;
    render();
    showToast(`Đã chọn ${file.name}`);
  };
  reader.readAsDataURL(file);
}

function runSimulatedAnalysis() {
  showToast('Đang tách lá và phân loại...');
  const targetId = state.analyzeSource === 'sample' ? state.selectedSampleId : 'an-101';
  setTimeout(() => {
    openDetail(targetId);
    showToast('Hoàn tất phân tích · đã gửi kết quả xuống Pico W');
  }, 650);
}

function updateSetting(key, val) {
  state.settings[key] = val;
  state.settings.dirty = true;
  render();
}

function setViewMode(mode) {
  state.viewMode = mode;
  document.body.classList.toggle('pdf-mode', mode === 'pdf');
  document.getElementById('btnInteractive').classList.toggle('active', mode === 'interactive');
  document.getElementById('btnPdfMode').classList.toggle('active', mode === 'pdf');
  render();
}

function printAllScreens() {
  setViewMode('pdf');
  setTimeout(() => window.print(), 250);
}

function render() {
  const root = document.getElementById('app');
  if (state.viewMode === 'pdf') {
    root.innerHTML = `
      <div class="screen-wrapper">${renderLoginScreen()}</div>
      <div class="screen-wrapper">${renderDashboardScreen()}</div>
      <div class="screen-wrapper">${renderAnalyzeScreen()}</div>
      <div class="screen-wrapper">${renderHistoryScreen()}</div>
      <div class="screen-wrapper">${renderDetailScreen('an-101')}</div>
      <div class="screen-wrapper">${renderSettingsScreen()}</div>
    `;
    return;
  }

  switch (state.screen) {
    case 'login': root.innerHTML = renderLoginScreen(); break;
    case 'dashboard': root.innerHTML = renderDashboardScreen(); break;
    case 'analyze': root.innerHTML = renderAnalyzeScreen(); break;
    case 'history': root.innerHTML = renderHistoryScreen(); break;
    case 'detail': root.innerHTML = renderDetailScreen(); break;
    case 'settings': root.innerHTML = renderSettingsScreen(); break;
    default: root.innerHTML = renderDashboardScreen();
  }
}

// Allow URL hash deep-linking (#login, #dashboard, #analyze, #history, #detail, #settings, #pdf)
const hash = window.location.hash.replace('#', '');
if (hash === 'pdf') {
  state.viewMode = 'pdf';
  document.body.classList.add('pdf-mode');
} else if (['login', 'dashboard', 'analyze', 'history', 'detail', 'settings'].includes(hash)) {
  state.screen = hash;
}

render();
