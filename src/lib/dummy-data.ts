export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
  avatar: string;
  status: 'active' | 'inactive';
  createdAt: string;
  lastLogin: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
  description: string;
  status: 'in-stock' | 'low-stock' | 'out-of-stock';
  createdAt: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  products: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface SalesData {
  month: string;
  sales: number;
  orders: number;
  users: number;
}

export const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    status: 'active',
    createdAt: '2024-01-15',
    lastLogin: '2024-06-29T10:30:00Z'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    status: 'active',
    createdAt: '2024-02-20',
    lastLogin: '2024-06-28T15:45:00Z'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    role: 'moderator',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    status: 'active',
    createdAt: '2024-03-10',
    lastLogin: '2024-06-27T09:15:00Z'
  },
  {
    id: '4',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@example.com',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    status: 'inactive',
    createdAt: '2024-04-05',
    lastLogin: '2024-06-20T14:20:00Z'
  },
  {
    id: '5',
    name: 'David Brown',
    email: 'david.brown@example.com',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    status: 'active',
    createdAt: '2024-05-12',
    lastLogin: '2024-06-29T08:30:00Z'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 199.99,
    stock: 45,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
    description: 'High-quality wireless headphones with noise cancellation',
    status: 'in-stock',
    createdAt: '2024-01-10'
  },
  {
    id: '2',
    name: 'Smart Watch',
    category: 'Electronics',
    price: 299.99,
    stock: 12,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
    description: 'Feature-rich smartwatch with health tracking',
    status: 'low-stock',
    createdAt: '2024-02-15'
  },
  {
    id: '3',
    name: 'Laptop Stand',
    category: 'Accessories',
    price: 49.99,
    stock: 0,
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop',
    description: 'Adjustable laptop stand for better ergonomics',
    status: 'out-of-stock',
    createdAt: '2024-03-20'
  },
  {
    id: '4',
    name: 'Coffee Mug',
    category: 'Home & Kitchen',
    price: 19.99,
    stock: 78,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
    description: 'Ceramic coffee mug with thermal insulation',
    status: 'in-stock',
    createdAt: '2024-04-05'
  },
  {
    id: '5',
    name: 'Yoga Mat',
    category: 'Sports',
    price: 39.99,
    stock: 23,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop',
    description: 'Non-slip yoga mat for home workouts',
    status: 'low-stock',
    createdAt: '2024-05-10'
  }
];

export const orders: Order[] = [
  {
    id: 'ORD-001',
    customerName: 'John Doe',
    customerEmail: 'john.doe@example.com',
    products: [
      { id: '1', name: 'Wireless Headphones', quantity: 1, price: 199.99 }
    ],
    total: 199.99,
    status: 'delivered',
    createdAt: '2024-06-25T10:30:00Z',
    updatedAt: '2024-06-27T14:20:00Z'
  },
  {
    id: 'ORD-002',
    customerName: 'Jane Smith',
    customerEmail: 'jane.smith@example.com',
    products: [
      { id: '2', name: 'Smart Watch', quantity: 1, price: 299.99 },
      { id: '4', name: 'Coffee Mug', quantity: 2, price: 19.99 }
    ],
    total: 339.97,
    status: 'shipped',
    createdAt: '2024-06-26T15:45:00Z',
    updatedAt: '2024-06-28T09:15:00Z'
  },
  {
    id: 'ORD-003',
    customerName: 'Mike Johnson',
    customerEmail: 'mike.johnson@example.com',
    products: [
      { id: '5', name: 'Yoga Mat', quantity: 1, price: 39.99 }
    ],
    total: 39.99,
    status: 'processing',
    createdAt: '2024-06-27T08:20:00Z',
    updatedAt: '2024-06-27T08:20:00Z'
  },
  {
    id: 'ORD-004',
    customerName: 'Sarah Wilson',
    customerEmail: 'sarah.wilson@example.com',
    products: [
      { id: '1', name: 'Wireless Headphones', quantity: 1, price: 199.99 },
      { id: '3', name: 'Laptop Stand', quantity: 1, price: 49.99 }
    ],
    total: 249.98,
    status: 'pending',
    createdAt: '2024-06-28T12:10:00Z',
    updatedAt: '2024-06-28T12:10:00Z'
  },
  {
    id: 'ORD-005',
    customerName: 'David Brown',
    customerEmail: 'david.brown@example.com',
    products: [
      { id: '2', name: 'Smart Watch', quantity: 1, price: 299.99 }
    ],
    total: 299.99,
    status: 'cancelled',
    createdAt: '2024-06-29T16:30:00Z',
    updatedAt: '2024-06-29T17:45:00Z'
  }
];

export const salesData: SalesData[] = [
  { month: 'Jan', sales: 45000, orders: 120, users: 45 },
  { month: 'Feb', sales: 52000, orders: 135, users: 52 },
  { month: 'Mar', sales: 48000, orders: 128, users: 48 },
  { month: 'Apr', sales: 61000, orders: 155, users: 61 },
  { month: 'May', sales: 55000, orders: 142, users: 55 },
  { month: 'Jun', sales: 67000, orders: 168, users: 67 }
];

export const dashboardStats = {
  totalRevenue: 318000,
  activeUsers: 67,
  totalOrders: 168,
  growthRate: 12.5
}; 