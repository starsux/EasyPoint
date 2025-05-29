
  export type Client = {
    id?: number
    Name: string
    CellPhone?: number
    Address?: string
    registrationDate?: Date
}

export type OrderItem = {
  id?: number
  name: string
  quantity: number
  price: number
}

export type Order = {
  id: string
  client: Client
  items: OrderItem[]
  total: number
  status: string
  orderTime: string
  type: string
  tableNumber: string | null
}



export type SortConfig = {
  key: keyof Order | ""
  direction: "asc" | "desc"
}

// TESTING DATA
export const testMenuProducts = [
  {
    id: 31,
    name: "Classic Burger",
    description: "Beef patty, lettuce, tomato, cheese, and special sauce",
    price: 12.99,
    status: "active",
  },
  {
    id: 32,
    name: "Margherita Pizza",
    description: "Tomato sauce, mozzarella, and fresh basil",
    price: 18.99,
    status: "active",
  },
  {
    id: 33,
    name: "Caesar Salad",
    description: "Romaine lettuce, croutons, parmesan cheese, and Caesar dressing",
    price: 8.99,
    category: "starter",
    status: "active",
  },
  {
    id: 34,
    name: "French Fries",
    description: "Crispy golden fries with sea salt",
    price: 4.99,
    status: "active",
  },
  {
    id: 35,
    name: "Chocolate Cake",
    description: "Rich chocolate cake with ganache frosting",
    price: 7.99,
    status: "active",
  },
  {
    id: 36,
    name: "Soft Drink",
    description: "Assorted sodas and soft drinks",
    price: 2.99,
    status: "active",
  },
  {
    id: 37,
    name: "Chicken Wings",
    description: "Spicy buffalo wings with blue cheese dip",
    price: 10.99,
    status: "active",
  },
  {
    id: 38,
    name: "Pasta Carbonara",
    description: "Creamy pasta with bacon and parmesan",
    price: 14.99,
    status: "active",
  },
  {
    id: 39,
    name: "Fish & Chips",
    description: "Battered cod with thick-cut fries and tartar sauce",
    price: 16.99,
    status: "active",
  },
  {
    id: 320,
    name: "Cheesecake",
    description: "New York style cheesecake with berry compote",
    price: 6.99,
    status: "active",
  },
    {
    id: 1,
    name: "Classic Burger",
    description: "Beef patty, lettuce, tomato, cheese, and special sauce",
    price: 12.99,
    status: "active",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Tomato sauce, mozzarella, and fresh basil",
    price: 18.99,
    status: "active",
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Romaine lettuce, croutons, parmesan cheese, and Caesar dressing",
    price: 8.99,
    category: "starter",
    status: "active",
  },
  {
    id: 4,
    name: "French Fries",
    description: "Crispy golden fries with sea salt",
    price: 4.99,
    status: "active",
  },
  {
    id: 5,
    name: "Chocolate Cake",
    description: "Rich chocolate cake with ganache frosting",
    price: 7.99,
    status: "active",
  },
  {
    id: 6,
    name: "Soft Drink",
    description: "Assorted sodas and soft drinks",
    price: 2.99,
    status: "active",
  },
  {
    id: 7,
    name: "Chicken Wings",
    description: "Spicy buffalo wings with blue cheese dip",
    price: 10.99,
    status: "active",
  },
  {
    id: 8,
    name: "Pasta Carbonara",
    description: "Creamy pasta with bacon and parmesan",
    price: 14.99,
    status: "active",
  },
  {
    id: 9,
    name: "Fish & Chips",
    description: "Battered cod with thick-cut fries and tartar sauce",
    price: 16.99,
    status: "active",
  },
  {
    id: 10,
    name: "Cheesecake",
    description: "New York style cheesecake with berry compote",
    price: 6.99,
    status: "active",
  },
    {
    id: 11,
    name: "Classic Burger",
    description: "Beef patty, lettuce, tomato, cheese, and special sauce",
    price: 12.99,
    status: "active",
  },
  {
    id: 12,
    name: "Margherita Pizza",
    description: "Tomato sauce, mozzarella, and fresh basil",
    price: 18.99,
    status: "active",
  },
  {
    id: 13,
    name: "Caesar Salad",
    description: "Romaine lettuce, croutons, parmesan cheese, and Caesar dressing",
    price: 8.99,
    category: "starter",
    status: "active",
  },
  {
    id: 14,
    name: "French Fries",
    description: "Crispy golden fries with sea salt",
    price: 4.99,
    status: "active",
  },
  {
    id: 15,
    name: "Chocolate Cake",
    description: "Rich chocolate cake with ganache frosting",
    price: 7.99,
    status: "active",
  },
  {
    id: 16,
    name: "Soft Drink",
    description: "Assorted sodas and soft drinks",
    price: 2.99,
    status: "active",
  },
  {
    id: 17,
    name: "Chicken Wings",
    description: "Spicy buffalo wings with blue cheese dip",
    price: 10.99,
    status: "active",
  },
  {
    id: 18,
    name: "Pasta Carbonara",
    description: "Creamy pasta with bacon and parmesan",
    price: 14.99,
    status: "active",
  },
  {
    id: 19,
    name: "Fish & Chips",
    description: "Battered cod with thick-cut fries and tartar sauce",
    price: 16.99,
    status: "active",
  },
  {
    id: 20,
    name: "Cheesecake",
    description: "New York style cheesecake with berry compote",
    price: 6.99,
    status: "active",
  },
]

export const testClients: Client[] = [
    {Name: "Fulan"},
    {Name: "Zutana"}, 
    {Name: "Carlos"},
    {Name: "Ana"},

];

export const testOrders: Order[] = [
  {
    id: "ORD-1001",
    client: testClients[0],
    items: [
      { id: 1, name: "Classic Burger", quantity: 2, price: 12.99 },
      { id: 4, name: "French Fries", quantity: 1, price: 4.99 },
    ],
    total: parseFloat((2 * 12.99 + 4.99).toFixed(2)),
    status: "pending",
    orderTime: "2025-05-25T12:34:56Z",
    type: "dine-in",
    tableNumber: "5",
  },
  {
    id: "ORD-1002",
    client: testClients[1],
    items: [
      { id: 3, name: "Caesar Salad", quantity: 1, price: 8.99 },
      { id: 6, name: "Soft Drink", quantity: 2, price: 2.99 },
    ],
    total: parseFloat((8.99 + 2 * 2.99).toFixed(2)),
    status: "completed",
    orderTime: "2025-05-24T18:20:00Z",
    type: "takeout",
    tableNumber: null,
  },
  {
    id: "ORD-1003",
    client: testClients[2],
    items: [
      { id: 8, name: "Pasta Carbonara", quantity: 1, price: 14.99 },
      { id: 10, name: "Cheesecake", quantity: 1, price: 6.99 },
    ],
    total: parseFloat((14.99 + 6.99).toFixed(2)),
    status: "in-progress",
    orderTime: "2025-05-25T13:10:45Z",
    type: "dine-in",
    tableNumber: "12",
  },
  {
    id: "ORD-1004",
    client: { Name: "Guest", CellPhone: 5551234567 },
    items: [
      { id: 2, name: "Margherita Pizza", quantity: 1, price: 18.99 },
    ],
    total: 18.99,
    status: "cancelled",
    orderTime: "2025-05-23T20:05:12Z",
    type: "delivery",
    tableNumber: null,
  },
  {
    id: "ORD-1005",
    client: testClients[0],
    items: [
      { id: 7, name: "Chicken Wings", quantity: 3, price: 10.99 },
      { id: 6, name: "Soft Drink", quantity: 3, price: 2.99 },
      { id: 5, name: "Chocolate Cake", quantity: 1, price: 7.99 },
    ],
    total: parseFloat((3 * 10.99 + 3 * 2.99 + 7.99).toFixed(2)),
    status: "pending",
    orderTime: "2025-05-25T14:45:30Z",
    type: "dine-in",
    tableNumber: "3",
  },  {
    id: "ORD-1006",
    client: testClients[0],
    items: [
      { id: 7, name: "Chicken Wings", quantity: 3, price: 10.99 },
      { id: 6, name: "Soft Drink", quantity: 3, price: 2.99 },
      { id: 5, name: "Chocolate Cake", quantity: 1, price: 7.99 },
    ],
    total: parseFloat((3 * 10.99 + 3 * 2.99 + 7.99).toFixed(2)),
    status: "pending",
    orderTime: "2025-05-25T14:45:30Z",
    type: "dine-in",
    tableNumber: "3",
  },
    {
    id: "ORD-1007",
    client: testClients[0],
    items: [
      { id: 7, name: "Chicken Wings", quantity: 3, price: 10.99 },
      { id: 6, name: "Soft Drink", quantity: 3, price: 2.99 },
      { id: 5, name: "Chocolate Cake", quantity: 1, price: 7.99 },
    ],
    total: parseFloat((3 * 10.99 + 3 * 2.99 + 7.99).toFixed(2)),
    status: "pending",
    orderTime: "2025-05-25T14:45:30Z",
    type: "dine-in",
    tableNumber: "3",
  },
    {
    id: "ORD-1005",
    client: testClients[0],
    items: [
      { id: 7, name: "Chicken Wings", quantity: 3, price: 10.99 },
      { id: 6, name: "Soft Drink", quantity: 3, price: 2.99 },
      { id: 5, name: "Chocolate Cake", quantity: 1, price: 7.99 },
    ],
    total: parseFloat((3 * 10.99 + 3 * 2.99 + 7.99).toFixed(2)),
    status: "pending",
    orderTime: "2025-05-25T14:45:30Z",
    type: "dine-in",
    tableNumber: "3",
  },
    {
    id: "ORD-1005",
    client: testClients[0],
    items: [
      { id: 7, name: "Chicken Wings", quantity: 3, price: 10.99 },
      { id: 6, name: "Soft Drink", quantity: 3, price: 2.99 },
      { id: 5, name: "Chocolate Cake", quantity: 1, price: 7.99 },
    ],
    total: parseFloat((3 * 10.99 + 3 * 2.99 + 7.99).toFixed(2)),
    status: "pending",
    orderTime: "2025-05-25T14:45:30Z",
    type: "dine-in",
    tableNumber: "3",
  },
    {
    id: "ORD-1005",
    client: testClients[0],
    items: [
      { id: 7, name: "Chicken Wings", quantity: 3, price: 10.99 },
      { id: 6, name: "Soft Drink", quantity: 3, price: 2.99 },
      { id: 5, name: "Chocolate Cake", quantity: 1, price: 7.99 },
    ],
    total: parseFloat((3 * 10.99 + 3 * 2.99 + 7.99).toFixed(2)),
    status: "pending",
    orderTime: "2025-05-25T14:45:30Z",
    type: "dine-in",
    tableNumber: "3",
  },
    {
    id: "ORD-1005",
    client: testClients[0],
    items: [
      { id: 7, name: "Chicken Wings", quantity: 3, price: 10.99 },
      { id: 6, name: "Soft Drink", quantity: 3, price: 2.99 },
      { id: 5, name: "Chocolate Cake", quantity: 1, price: 7.99 },
    ],
    total: parseFloat((3 * 10.99 + 3 * 2.99 + 7.99).toFixed(2)),
    status: "pending",
    orderTime: "2025-05-25T14:45:30Z",
    type: "dine-in",
    tableNumber: "3",
  },
    {
    id: "ORD-1005",
    client: testClients[0],
    items: [
      { id: 7, name: "Chicken Wings", quantity: 3, price: 10.99 },
      { id: 6, name: "Soft Drink", quantity: 3, price: 2.99 },
      { id: 5, name: "Chocolate Cake", quantity: 1, price: 7.99 },
    ],
    total: parseFloat((3 * 10.99 + 3 * 2.99 + 7.99).toFixed(2)),
    status: "pending",
    orderTime: "2025-05-25T14:45:30Z",
    type: "dine-in",
    tableNumber: "3",
  },
    {
    id: "ORD-1005",
    client: testClients[0],
    items: [
      { id: 7, name: "Chicken Wings", quantity: 3, price: 10.99 },
      { id: 6, name: "Soft Drink", quantity: 3, price: 2.99 },
      { id: 5, name: "Chocolate Cake", quantity: 1, price: 7.99 },
    ],
    total: parseFloat((3 * 10.99 + 3 * 2.99 + 7.99).toFixed(2)),
    status: "pending",
    orderTime: "2025-05-25T14:45:30Z",
    type: "dine-in",
    tableNumber: "3",
  },
];
