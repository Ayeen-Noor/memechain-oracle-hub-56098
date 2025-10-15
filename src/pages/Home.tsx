import { Link } from "react-router-dom";
import { Rocket, Users, Zap, Shield, TrendingUp, Coins, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import logo from "@/assets/memechain-logo.png";

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "Multi-Chain Support",
      description: "Buy with ETH, BNB, SOL, or BTC - we support all major blockchains",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by meme lovers, for meme lovers. Join thousands of holders",
    },
    {
      icon: Shield,
      title: "Secure & Transparent",
      description: "Audited smart contracts and fully transparent tokenomics",
    },
    {
      icon: Rocket,
      title: "Instant Transactions",
      description: "Lightning-fast processing on our next-gen blockchain",
    },
  ];

  const stats = [
    { label: "Participants", value: "847", icon: Users },
    { label: "Raised", value: "$125K", icon: TrendingUp },
    { label: "Tokens Allocated", value: "12.5B", icon: Coins },
    { label: "Days to Launch", value: "45", icon: Clock },
  ];

  const roadmap = [
    { phase: "Q1 2025", title: "Presale Launch", status: "current" },
    { phase: "Q2 2025", title: "Testnet Launch", status: "upcoming" },
    { phase: "Q3 2025", title: "Mainnet Launch", status: "upcoming" },
    { phase: "Q4 2025", title: "DEX Listing", status: "upcoming" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <img 
            src={logo} 
            alt="MemeChain" 
            className="h-32 w-32 md:h-48 md:w-48 mx-auto mb-8 animate-float"
          />
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            The Blockchain That <br />
            <span className="text-gradient">Memes Harder</span> Than You Do! 🚀
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Join the revolution where blockchain meets meme culture. Fast, secure, and ridiculously fun.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/presale">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary text-lg px-8">
                Join Presale Now
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary/10">
              Read Whitepaper
            </Button>
          </div>

          {/* Countdown Timer Placeholder */}
          <div className="mt-12 inline-block bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-sm text-muted-foreground mb-2">Presale Ends In</p>
            <div className="flex gap-4 text-center">
              {["Days", "Hours", "Minutes", "Seconds"].map((unit, i) => (
                <div key={unit} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-primary">
                    {["45", "12", "34", "56"][i]}
                  </span>
                  <span className="text-xs text-muted-foreground">{unit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why <span className="text-gradient">MemeChain</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 card-shadow group"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4 group-hover:animate-pulse-glow" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Live <span className="text-gradient">Stats</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center bg-card border-border card-shadow">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-secondary" />
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Roadmap</span> to the Moon 🌙
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
              
              {roadmap.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative mb-8 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}
                >
                  <div className={`flex items-center gap-4 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Dot */}
                    <div className={`absolute left-4 md:left-1/2 -ml-2 h-4 w-4 rounded-full border-4 ${
                      item.status === 'current' ? 'bg-primary border-primary animate-pulse-glow' : 'bg-card border-border'
                    }`} />
                    
                    <Card className={`flex-1 p-6 ml-12 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    } bg-card border-border card-shadow hover:border-primary transition-all`}>
                      <p className="text-sm text-primary font-semibold mb-1">{item.phase}</p>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/roadmap">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View Full Roadmap
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our <span className="text-gradient">Community</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with thousands of meme enthusiasts and blockchain believers
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-cyan">
              Join Telegram
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
              Follow Twitter
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
              Discord Server
            </Button>
          </div>

          {/* Newsletter */}
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Join the <span className="text-gradient">Revolution</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't miss out on the presale. Secure your MEME tokens today!
          </p>
          <Link to="/presale">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary text-xl px-12 py-6">
              Join Presale Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
