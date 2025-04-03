import logo from "./logo.png";
import hero_img from "./hero_img.png";
import cart_icon from "./cart_icon.png";
import bin_icon from "./bin_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import exchange_icon from "./exchange_icon.png";
import profile_icon from "./profile_icon.png";
import quality_icon from "./quality_icon.png";
import search_icon from "./search_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import star_icon from "./star_icon.png";
import support_img from "./support_img.png";
import menu_icon from "./menu_icon.png";
import about_img from "./about_img.png";
import contact_img from "./contact_img.png";
import razorpay_logo from "./razorpay_logo.png";
import stripe_logo from "./stripe_logo.png";
import cross_icon from "./cross_icon.png";
import pretty_rgb from "./rgb_pretty.png";
import white_minimalist from "./white_minimalist.png";
import pastel_setup from "./pastel_gaming.png";
import cute_keyboard from "./cute_keyboard.png";
import bright_gpu from "./sleek_gpu.png";
import sleek_setup_about from "./sleek_setup.png";

//Item photos
import pc_build_img1 from "./pc_build_img1.png";
import pc_build_img2 from "./pc_build_img2.png";
import pc_build_img3 from "./pc_build_img3.png";
import pc_build_img4 from "./pc_build_img4.png";
import nvidia_card1 from "./nvidia_card1.png";
import nvidia_card2 from "./nvidia_card2.png";
import pc_case1 from "./pc_case1.png";
import pc_case2 from "./pc_case2.png";
import pc_case3 from "./pc_case3.png";
import pc_case4 from "./pc_case4.png";
import pc_case5 from "./pc_case5.png";
import ram_1 from "./ram_1.png";
import ram_2 from "./ram_2.png";
import ram_3 from "./ram_3.png";
import sam_ssd1 from "./sam_ssd1.png";
import sam_ssd2 from "./sam_ssd2.png";
import sam_ssd3 from "./sam_ssd3.png";
import cooler_fan1 from "./cooler_fan1.png";
import cooler_fan2 from "./cooler_fan2.png";
import cooler_fan3 from "./cooler_fan3.png";
import razer_black1 from "./razor_black1.png";
import razer_black2 from "./razer_black2.png";
import razer_black3 from "./razer_black3.png";
import mouse_black1 from "./mouse_black1.png";
import mouse_black2 from "./mouse_black2.png";
import mouse_black3 from "./mouse_black3.png";
import steel_headphones_black1 from "./steel_headphones_black1.png";
import steel_series_black2 from "./steel_series_black2.png";
import steel_series_headphone from "./steel_series_headphone.png";
import steel_series_white1 from "./steel_series_white1.png";
import odyssesy_1 from "./odyssesy_1.png";
import odyssesy_2 from "./odyssesy_2.png";
import odyssesy_3 from "./odyssesy_3.png";
import odyssesy_4 from "./odyssesy_4.png";

export const assets = {
  logo,
  pretty_rgb,
  bright_gpu,
  white_minimalist,
  cute_keyboard,
  pastel_setup,
  hero_img,
  cart_icon,
  dropdown_icon,
  exchange_icon,
  profile_icon,
  quality_icon,
  search_icon,
  star_dull_icon,
  star_icon,
  bin_icon,
  support_img,
  menu_icon,
  about_img,
  contact_img,
  razorpay_logo,
  sleek_setup_about,
  stripe_logo,
  cross_icon,
};

// basic product schema
// {
//     "_id": "unique_product_id",
//     "name": "Product Name",
//     "description": "Detailed product description...",
//     "price": 499.99,
//     "image": ["image_url1", "image_url2"],
//     "category": "PC Components",
//     "subCategory": "Graphics Cards",
//     "brand": "NVIDIA",
//     "color": ["Black", "White", "RGB"],
//     "stock": 25,
//     "bestseller": false,
//     "rating": 4.7,
//     "reviews": 152,
//     "dateAdded": 1716623423448,
//     "specifications": {
//       "key": "value"
//     }
//   }

export const products = [
  {
    _id: "pc_001",
    name: "Gaming Beast RTX 4090 Build",
    description:
      "A high-performance gaming PC with the latest RTX 4090 GPU with top of the line cooling, graphics, and wiring.",
    price: 3499.99,
    image: [pc_build_img1, pc_build_img2, pc_build_img3, pc_build_img4],
    category: "PC Build",
    subCategory: "Black",
    brand: "Custom Build",
    processor: "Intel Core i9-14900K",
    gpu: "NVIDIA RTX 4090",
    ram: "32GB DDR5",
    storage: ["2TB NVMe SSD", "4TB HDD"],
    psu: "1000W 80+ Gold",
    cooling: "Liquid Cooling",
    motherboard: "ASUS ROG Z790",
    case: "Lian Li O11 Dynamic",
    os: "Windows 11 Pro",
    stock: 5,
    bestseller: true,
    rating: 4.9,
    reviews: 234,
  },
  {
    _id: "gpu_001",
    name: "NVIDIA RTX 4090",
    image: [nvidia_card1, nvidia_card2],
    category: "PC Component",
    subCategory: "Black",
    brand: "NVIDIA",
    price: 1599.99,
    stock: 10,
    specifications: {
      memory: "24GB GDDR6X",
      coreClock: "2235 MHz",
      boostClock: "2520 MHz",
      powerDraw: "450W",
    },
  },
  {
    _id: "case_001",
    name: "Lian Li O11 Dynamic",
    image: [pc_case1, pc_case2, pc_case3, pc_case4, pc_case5],
    category: "PC Component",
    subCategory: "White",
    brand: "Lian Li",
    price: 149.99,
    color: ["White", "Black"],
    stock: 15,
    specifications: {
      formFactor: "ATX",
      dimensions: "446mm x 272mm x 445mm",
      fanSupport: "3x 120mm Front, 3x 120mm Side, 3x 120mm Top",
    },
  },
  {
    _id: "ram_001",
    name: "Corsair Vengeance LPX 32GB DDR4",
    description:
      "Vengeance LPX memory is designed for high-performance overclocking. The heatspreader is made of pure aluminum for faster heat dissipation, and the custom performance PCB helps manage heat and provides superior overclocking headroom. Each IC is individually screened for performance potential. The DDR4 form factor is optimized for the latest Intel DDR4 motherboards and offers higher frequencies, greater bandwidth, and lower power consumption than DDR3 modules. Vengeance LPX DDR4 modules are compatibility-tested across Intel DDR4 motherboards for reliably fast performance. ",
    image: [ram_1, ram_2, ram_3],
    category: "PC Component",
    subCategory: "White",
    brand: "Corsair",
    price: 139.99,
    stock: 45,
    specifications: {
      capacity: "32GB",
      speed: "3200 MHz",
      type: "DDR4",
      latency: "16-18-18-36",
      voltage: "1.35V",
    },
  },
  {
    _id: "ssd_001",
    name: "Samsung 970 EVO Plus 1TB",
    description:
      "The ultimate in speed and performance Speed up your computer with this Samsung 970 Evo Plus 1TB internal SSD. It maximizes the potential of NVMe bandwidth for unbeatable computing The M.2 interface is capable of delivering read speeds up to 3,500MB/sec. and write speeds up to 3,300MB/sec., so you can finish work faster. Samsung's innovative technology empowers you with the capacity to do more and accomplish more. The 970 EVO Plus provides exceptional endurance powered by the latest V-NAND technology and Samsung's reputation for quality. This Samsung 970 Evo Plus 1TB internal SSD has Dynamic Thermal Guard technology for protection against overheating.",
    image: [sam_ssd1, sam_ssd2, sam_ssd3],
    category: "PC Component",
    subCategory: "Black",
    brand: "Samsung",
    price: 149.99,
    stock: 60,
    specifications: {
      capacity: "1TB",
      type: "NVMe M.2",
      readSpeed: "3500 MB/s",
      writeSpeed: "3300 MB/s",
      formFactor: "M.2 2280",
    },
  },
  {
    _id: "cooling_fan_001",
    name: "Cooler Master Hyper 212 RGB",
    description: "A high-quality cooling fan.",
    image: [cooler_fan1, cooler_fan2, cooler_fan3],
    category: "PC Component",
    subCategory: "Black",
    brand: "Cooler Master",
    price: 49.99,
    stock: 40,
    color: ["RGB"],
    specifications: {
      fanSize: "120mm",
      fanSpeed: "2000 RPM",
      noiseLevel: "26 dBA",
      socketCompatibility: ["LGA 1200", "AM4", "LGA 1700"],
    },
  },
  {
    _id: "keyboard_001",
    name: "Razer Huntsman Elite",
    description:
      "If all-out advantage is more your speed, arm yourself with responsiveness that’s second to none. Meet the Razer Huntsman V2—an optical gaming keyboard with near-zero input latency and fully geared out with other high-end features to make it the complete package. ",
    image: [razer_black1, razer_black2, razer_black3],
    category: "PC Additions",
    subCategory: "Black",
    brand: "Razer",
    price: 199.99,
    color: ["RGB", "Quartz"], // Added "Quartz" as a color option
    stock: 15,
    specifications: {
      switchType: "Opto-Mechanical",
      keycaps: "PBT",
      formFactor: "Full Size",
      connectivity: "Wired",
      dimensions: "447mm x 248mm x 41mm",
    },
  },
  {
    _id: "mouse_001",
    name: "Logitech G Pro X Superlight",
    description:
      "Introducing PRO X SUPERLIGHT—one of our lightest, fastest PRO mouse ever. Powered by LIGHTSPEED, it’s here to help you remove all obstacles, so you can focus on nothing but winning. Get insanely precise, fast, and consistent control with HERO Sensor. Take first faster with zero-additive PTFE feet that deliver a dramatically smoother glide. Developed in collaboration with a large group of the world’s best esports pros, PRO X SUPERLIGHT features hyper-minimal design, but is packed with our latest technologies and advancements. PRO X SUPERLIGHT is available in black.",
    image: [mouse_black2, mouse_black1, mouse_black3],
    category: "PC Component",
    subCategory: "Black",
    brand: "Logitech",
    price: 149.99,
    color: ["Black"],
    stock: 25,
    specifications: {
      sensor: "HERO Sensor",
      dpi: "25,600",
      buttons: 5,
      weight: "63g",
      connectivity: "Wireless",
    },
  },
  {
    _id: "headset_001",
    name: "SteelSeries Arctis Pro Wireless",
    description:
      "Arctis Pro Wireless features rock solid dual-wireless technology with 2.4G wireless lossless audio and Bluetooth mobile audio, combined with 40,000 Hz capable hi-res capable speaker drivers and a ClearCast mic making it the ultimate gaming audio system. Plus, Arctis Pro Wireless is designed with luxury materials like polished steel and aluminum alloy, and the exclusive Arctis ski goggle headband and AirWeave performance fabric ear cushions. ",
    image: [
      steel_headphones_black1,
      steel_series_white1,
      steel_series_black2,
      steel_series_headphone,
    ],
    category: "PC Additions",
    subCategory: "Black",
    brand: "SteelSeries",
    color: ["Black", "White"],
    price: 329.99,
    stock: 10,
    specifications: {
      audioDrivers: "40mm Neodymium",
      microphone: "ClearCast Noise Cancelling",
      batteryLife: "20 hours",
      connectivity: "Wireless",
    },
  },
  {
    _id: "monitor_001",
    name: 'Samsung Odyssey G7 27"',
    description:
      "Catch every detail as you play fast-paced games and watch movies on the 27! Samsung Odyssey G7 G70D 4K HDR 144 Hz Gaming Monitor. Featuring a versatile design, this 3840 x 2160 resolution UHD 4K display doubles as a standalone smart TV that allows you to stream videos and games without having to connect a computer or console system.",
    image: [odyssesy_1, odyssesy_2, odyssesy_3, odyssesy_4],
    category: "PC Additions",
    brand: "Samsung",
    price: 799.99,
    stock: 12,
    specifications: {
      resolution: "2560x1440",
      refreshRate: "240Hz",
      responseTime: "1ms",
      panelType: "QLED",
      ports: ["DisplayPort 1.4", "HDMI 2.0"],
    },
  },
];
