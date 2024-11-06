export type EmojiItem = {
  icon: string;
  bg: string;
  name: string;
  details: string;
};

export const fruits: EmojiItem[] = [
  {
    icon: "🍎",
    bg: "#FF0000",
    name: "Red Apple",
    details: "A round, red fruit with a crisp, juicy texture.",
  },
  {
    icon: "🍐",
    bg: "#C0C0C0",
    name: "Pear",
    details: "A pear-shaped fruit with a sweet, juicy flesh.",
  },
  {
    icon: "🍊",
    bg: "#FFA500",
    name: "Tangerine",
    details: "A small, orange citrus fruit with a sweet, tangy flavor.",
  },
  {
    icon: "🍋",
    bg: "#FFFF00",
    name: "Lemon",
    details: "A yellow citrus fruit with a sour, acidic taste.",
  },
  {
    icon: "🍌",
    bg: "#FFFF00",
    name: "Banana",
    details: "A long, curved fruit with a yellow peel and a soft, sweet flesh.",
  },
  {
    icon: "🍉",
    bg: "#FF0000",
    name: "Watermelon",
    details: "A large, oblong fruit with a green rind and a red, juicy flesh.",
  },
  {
    icon: "🍇",
    bg: "#800080",
    name: "Grapes",
    details:
      "Small, round fruits that grow in clusters on vines. They can be red, green, or purple.",
  },
  {
    icon: "🍓",
    bg: "#FF0000",
    name: "Strawberry",
    details: "A small, red berry with a sweet, juicy flavor.",
  },
  {
    icon: "🍒",
    bg: "#FF0000",
    name: "Cherries",
    details:
      "Small, round fruits with a pit in the center. They can be red, black, or yellow.",
  },
  {
    icon: "🥝",
    bg: "#8FBC8F",
    name: "Kiwi Fruit",
    details:
      "A fuzzy brown fruit with a bright green flesh and small, black seeds.",
  },
];

export const animals: EmojiItem[] = [
  {
    icon: "🐶",
    bg: "#F0E68C",
    name: "Dog",
    details:
      "A common domesticated animal often kept as a pet. It has four legs, a tail, and barks.",
  },
  {
    icon: "🐱",
    bg: "#FFA500",
    name: "Cat",
    details:
      "A domesticated feline animal often kept as a pet. It has four legs, a tail, and meows.",
  },
  {
    icon: "🐼",
    bg: "#000000",
    name: "Panda",
    details:
      "A large black and white bear native to China. It has a round body and a distinctive black and white pattern.",
  },
  {
    icon: "🦊",
    bg: "#FF8C00",
    name: "Fox",
    details:
      "A small, reddish-brown mammal with a bushy tail. It is known for its cunning and intelligence.",
  },
  {
    icon: "🐻",
    bg: "#8B4513",
    name: "Bear",
    details:
      "A large mammal with thick fur and powerful claws. It is often found in forests and mountainous regions.",
  },
  {
    icon: "🦁",
    bg: "#FFA500",
    name: "Lion",
    details:
      "A large feline with a golden mane. It is a social animal that lives in prides.",
  },
  {
    icon: "🐯",
    bg: "#FF8C00",
    name: "Tiger",
    details:
      "A large feline with orange and black stripes. It is a solitary animal that hunts alone.",
  },
  {
    icon: "🐺",
    bg: "#8B4513",
    name: "Wolf",
    details:
      "A large canine that lives in packs. It is a skilled hunter and often howls at the moon.",
  },
  {
    icon: "🐴",
    bg: "#F0E68C",
    name: "Horse",
    details:
      "A large domesticated mammal often used for riding and transportation. It has four legs, a long tail, and neighs.",
  },
  {
    icon: "🐮",
    bg: "#8B4513",
    name: "Cow",
    details:
      "A large domesticated mammal often raised for its milk and meat. It has four legs, horns, and moos.",
  },
];

export const countries: EmojiItem[] = [
  {
    "icon": "🇺🇸",
    "bg": "#D3D3D3",
    "name": "United States",
    "details": "A country located in North America. Its flag has 13 red and white stripes and 50 white stars on a blue field."
  },
  {
    "icon": "🇬🇧",
    "bg": "#00008B",
    "name": "United Kingdom",
    "details": "A country located in Western Europe. Its flag has a red cross on a white background, with a blue field in the upper left corner."
  },
  {
    "icon": "🇫🇷",
    "bg": "#0000FF",
    "name": "France",
    "details": "A country located in Western Europe. Its flag has three vertical bands of blue, white, and red."
  },
  {
    "icon": "🇩🇪",
    "bg": "#000000",
    "name": "Germany",
    "details": "A country located in Central Europe. Its flag has three horizontal bands of black, red, and gold."
  },
  {
    "icon": "🇮🇹",
    "bg": "#008000",
    "name": "Italy",
    "details": "A country located in Southern Europe. Its flag has three vertical bands of green, white, and red."
  },
  {
    "icon": "🇪🇸",
    "bg": "#FF0000",
    "name": "Spain",
    "details": "A country located in Southwestern Europe. Its flag has three horizontal bands of red, yellow, and red, with the national emblem in the center."
  },
  {
    "icon": "🇯🇵",
    "bg": "#FFFFFF",
    "name": "Japan",
    "details": "A country located in East Asia. Its flag has a red circle on a white background."
  },
  {
    "icon": "🇨🇳",
    "bg": "#FF0000",
    "name": "China",
    "details": "A country located in East Asia. Its flag has five yellow stars on a red background."
  },
  {
    "icon": "🇮🇳",
    "bg": "#FFA500",
    "name": "India",
    "details": "A country located in South Asia. Its flag has three horizontal bands of saffron, white, and green, with a blue wheel in the center."
  },
  {
    "icon": "🇧🇷",
    "bg": "#008000",
    "name": "Brazil",
    "details": "A country located in South America. Its flag has a green field with a yellow diamond in the center, and a blue circle with white stars."
  }
];

export const emojis: EmojiItem[] = [...fruits, ...animals, ...countries];
