import { type PortfolioItem } from "./PortfolioCard";

// 示例数据 - 展示如何创建不同的 portfolio 项目
export const examplePortfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Cool Player",
    description: "Best music for your soul",
    backgroundImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/42/f4/a5/42f4a533-31b5-d7a1-1b62-a7a5f45330d7/dd61995f-f272-42cb-ba59-a49706c1c8fe.png/480x633sr.png",
    logoImage:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/11/1a/15/111a154e-9ce9-5956-de80-02b0b01d96b1/PlayerIcon.png/104x104sr.png",
    buttonText: "View",
    onButtonClick: () => {
      console.log("Opening Cool Player...");
      // 这里可以添加导航逻辑
    },
  },
  {
    id: "2",
    title: "Photo Editor",
    description: "Professional photo editing tools",
    backgroundImage:
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=600&fit=crop",
    logoImage:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100&h=100&fit=crop",
    buttonText: "Try Now",
    onButtonClick: () => {
      console.log("Opening Photo Editor...");
      // 这里可以添加导航逻辑
    },
  },
  {
    id: "3",
    title: "Task Manager",
    description: "Organize your daily tasks efficiently",
    backgroundImage:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=600&fit=crop",
    logoImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    buttonText: "Get Started",
    onButtonClick: () => {
      console.log("Opening Task Manager...");
      // 这里可以添加导航逻辑
    },
  },
];

// 使用示例：
// import PortfolioCard from './PortfolioCard';
// import { examplePortfolioItems } from './example';
//
// // 在组件中使用
// {examplePortfolioItems.map((item) => (
//   <PortfolioCard key={item.id} item={item} />
// ))}
