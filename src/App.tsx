import PortfolioCard, { type PortfolioItem } from "./portfolio/PortfolioCard";
import "./App.css";

function App() {
  // 示例数据
  const portfolioItems: PortfolioItem[] = [
    {
      id: "1",
      title: "Cool Player",
      description: "Best music for your soul",
      backgroundImage:
        "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/42/f4/a5/42f4a533-31b5-d7a1-1b62-a7a5f45330d7/dd61995f-f272-42cb-ba59-a49706c1c8fe.png/480x633sr.png",
      logoImage:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/11/1a/15/111a154e-9ce9-5956-de80-02b0b01d96b1/PlayerIcon.png/104x104sr.png",
      buttonText: "View",
      onButtonClick: () => console.log("Clicked on Cool Player"),
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
      onButtonClick: () => console.log("Clicked on Photo Editor"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Portfolio Gallery
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.id} item={item} className="mb-4" />
        ))}
      </div>
    </div>
  );
}

export default App;
