import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const Tokenomics = () => {
  const distribution = [
    { name: "Presale", value: 40, color: "hsl(75, 100%, 63%)" },
    { name: "Liquidity", value: 20, color: "hsl(180, 100%, 50%)" },
    { name: "Marketing", value: 15, color: "hsl(180, 100%, 40%)" },
    { name: "Team", value: 10, color: "hsl(210, 50%, 40%)" },
    { name: "Community Rewards", value: 10, color: "hsl(210, 50%, 50%)" },
    { name: "Reserve", value: 5, color: "hsl(210, 40%, 30%)" },
  ];

  const allocations = [
    {
      category: "Presale",
      percentage: "40%",
      amount: "8,400,000,000 MEME",
      unlock: "Airdrop after mainnet launch",
      icon: "🚀",
    },
    {
      category: "Liquidity",
      percentage: "20%",
      amount: "4,200,000,000 MEME",
      unlock: "Locked for 12 months",
      icon: "💧",
    },
    {
      category: "Team",
      percentage: "10%",
      amount: "2,100,000,000 MEME",
      unlock: "12-month cliff, 24-month vesting",
      icon: "👥",
    },
    {
      category: "Marketing",
      percentage: "15%",
      amount: "3,150,000,000 MEME",
      unlock: "Released over 18 months",
      icon: "📢",
    },
    {
      category: "Community Rewards",
      percentage: "10%",
      amount: "2,100,000,000 MEME",
      unlock: "Staking and engagement rewards",
      icon: "🎁",
    },
    {
      category: "Reserve",
      percentage: "5%",
      amount: "1,050,000,000 MEME",
      unlock: "Emergency fund, locked",
      icon: "🏦",
    },
  ];

  const priceStages = [
    { stage: "Stage 1", price: "$0.00001", allocation: "50% of presale" },
    { stage: "Stage 2", price: "$0.000015", allocation: "50% of presale" },
    { stage: "Listing Price", price: "$0.00003", allocation: "DEX launch" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient">Tokenomics</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Fair distribution designed for long-term sustainability
          </p>
        </div>
      </section>

      {/* Total Supply */}
      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-2xl mx-auto p-8 bg-card border-primary/50 border-2 card-shadow">
            <p className="text-sm text-muted-foreground mb-2">Total Supply</p>
            <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-2">
              21,000,000,000
            </h2>
            <p className="text-xl text-foreground">MEME Tokens</p>
          </Card>
        </div>
      </section>

      {/* Distribution Chart */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Token <span className="text-gradient">Distribution</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Chart */}
            <Card className="p-6 bg-card border-border card-shadow">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={distribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {distribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>

            {/* Legend */}
            <div className="space-y-4">
              {distribution.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div 
                    className="w-6 h-6 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="flex-1">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.value}%</p>
                  </div>
                  <p className="text-lg font-bold text-primary">
                    {(21000000000 * item.value / 100).toLocaleString()} MEME
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Allocation Details */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Allocation <span className="text-gradient">Details</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allocations.map((allocation, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-border card-shadow hover:border-primary transition-all"
              >
                <div className="text-4xl mb-4">{allocation.icon}</div>
                <h3 className="text-xl font-bold mb-2">{allocation.category}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Percentage:</span>
                    <span className="text-primary font-semibold">{allocation.percentage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount:</span>
                    <span className="font-semibold">{allocation.amount}</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-muted-foreground text-xs">{allocation.unlock}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Price Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Presale <span className="text-gradient">Pricing</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {priceStages.map((stage, index) => (
              <Card 
                key={index} 
                className={`p-6 text-center border-2 card-shadow ${
                  index === 0 ? 'border-primary bg-primary/10' : 'border-border bg-card'
                }`}
              >
                <p className="text-sm text-muted-foreground mb-2">{stage.stage}</p>
                <h3 className="text-3xl font-bold text-primary mb-2">{stage.price}</h3>
                <p className="text-sm text-muted-foreground">per MEME</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">{stage.allocation}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto p-6 bg-card border-border">
              <h3 className="text-xl font-bold mb-4">Potential ROI</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Stage 1 to Listing</p>
                  <p className="text-2xl font-bold text-secondary">200%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Stage 2 to Listing</p>
                  <p className="text-2xl font-bold text-secondary">100%</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Vesting Schedule */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Vesting <span className="text-gradient">Schedule</span>
          </h2>
          
          <Card className="max-w-4xl mx-auto p-8 bg-card border-border card-shadow">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div className="flex-1">
                  <h3 className="font-bold mb-2">Team Tokens</h3>
                  <p className="text-sm text-muted-foreground">
                    12-month cliff period followed by linear vesting over 24 months. 
                    Ensures long-term commitment from the team.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                <div className="flex-1">
                  <h3 className="font-bold mb-2">Liquidity Pool</h3>
                  <p className="text-sm text-muted-foreground">
                    Locked for 12 months to ensure price stability and prevent rug pulls. 
                    Additional liquidity may be added based on market conditions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                <div className="flex-1">
                  <h3 className="font-bold mb-2">Marketing Budget</h3>
                  <p className="text-sm text-muted-foreground">
                    Released gradually over 18 months aligned with marketing milestones 
                    and community growth initiatives.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Tokenomics;
