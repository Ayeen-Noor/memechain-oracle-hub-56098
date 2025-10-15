import { useState } from "react";
import { Wallet, TrendingUp, Users, Coins, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const Presale = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedChain, setSelectedChain] = useState("ethereum");

  const chains = [
    { id: "ethereum", name: "Ethereum", symbol: "ETH", icon: "⟠" },
    { id: "bsc", name: "BSC", symbol: "BNB", icon: "🔶" },
    { id: "solana", name: "Solana", symbol: "SOL", icon: "◎" },
    { id: "bitcoin", name: "Bitcoin", symbol: "BTC", icon: "₿" },
  ];

  const stats = [
    { label: "Current Price", value: "$0.00001", icon: TrendingUp },
    { label: "Total Raised", value: "$125,000", icon: Coins },
    { label: "Participants", value: "847", icon: Users },
    { label: "Your Balance", value: "0 MEME", icon: Wallet },
  ];

  const handleConnectWallet = () => {
    // Simulate wallet connection
    toast.success("Wallet Connected!", {
      description: "Your wallet has been connected successfully",
    });
    setIsConnected(true);
    setWalletAddress("0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb");
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setWalletAddress("");
    toast.info("Wallet Disconnected");
  };

  const handlePurchase = () => {
    if (!amount || parseFloat(amount) <= 0) {
      toast.error("Invalid Amount", {
        description: "Please enter a valid amount",
      });
      return;
    }

    const memeTokens = (parseFloat(amount) / 0.00001).toLocaleString();
    
    toast.success("Purchase Successful!", {
      description: `You will receive ${memeTokens} MEME tokens`,
    });
    
    setAmount("");
  };

  const calculateTokens = () => {
    if (!amount || parseFloat(amount) <= 0) return "0";
    return (parseFloat(amount) / 0.00001).toLocaleString();
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient">MemeChain</span> Presale
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Secure your MEME tokens at discounted prices
          </p>
          
          {/* Stage Indicator */}
          <div className="inline-block bg-primary/20 border border-primary rounded-full px-6 py-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <span className="text-primary font-bold">Stage 1 Active</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="p-4 md:p-6 text-center bg-card border-border card-shadow">
                <stat.icon className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2 text-primary" />
                <p className="text-xl md:text-2xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>

          {/* Progress Bar */}
          <Card className="mt-6 p-4 bg-card border-border">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Progress</span>
              <span className="text-primary font-semibold">12.5%</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-gradient-primary w-[12.5%] rounded-full animate-pulse-glow" />
            </div>
            <div className="flex justify-between text-xs mt-2 text-muted-foreground">
              <span>$125,000 raised</span>
              <span>$1,000,000 goal</span>
            </div>
          </Card>
        </div>
      </section>

      {/* Main Presale Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-6 md:p-8 bg-card border-border card-shadow">
              {!isConnected ? (
                <div className="text-center py-8">
                  <Wallet className="h-16 w-16 mx-auto mb-6 text-primary animate-float" />
                  <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
                  <p className="text-muted-foreground mb-6">
                    Connect your wallet to participate in the presale
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {chains.map((chain) => (
                      <button
                        key={chain.id}
                        className="p-4 bg-muted hover:bg-muted/80 rounded-lg border border-border hover:border-primary transition-all"
                      >
                        <span className="text-3xl mb-2 block">{chain.icon}</span>
                        <span className="text-sm font-medium">{chain.name}</span>
                      </button>
                    ))}
                  </div>

                  <Button 
                    size="lg" 
                    onClick={handleConnectWallet}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
                  >
                    Connect Wallet
                  </Button>

                  <p className="text-xs text-muted-foreground mt-4">
                    By connecting, you agree to our Terms of Service
                  </p>
                </div>
              ) : (
                <div>
                  {/* Connected Wallet Info */}
                  <div className="flex items-center justify-between mb-6 p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                        {chains.find(c => c.id === selectedChain)?.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Connected Wallet</p>
                        <p className="font-mono text-sm font-semibold">
                          {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" onClick={handleDisconnect}>
                      Disconnect
                    </Button>
                  </div>

                  <h2 className="text-2xl font-bold mb-6">Buy MEME Tokens</h2>

                  {/* Chain Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Payment Chain</label>
                    <div className="grid grid-cols-4 gap-2">
                      {chains.map((chain) => (
                        <button
                          key={chain.id}
                          onClick={() => setSelectedChain(chain.id)}
                          className={`p-3 rounded-lg border transition-all ${
                            selectedChain === chain.id
                              ? "border-primary bg-primary/10"
                              : "border-border bg-muted hover:border-primary/50"
                          }`}
                        >
                          <span className="text-2xl block mb-1">{chain.icon}</span>
                          <span className="text-xs">{chain.symbol}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Amount Input */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Amount (USD)</label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Token Calculation */}
                  <div className="mb-6 p-4 bg-primary/10 border border-primary/50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">You will receive:</span>
                      <span className="text-2xl font-bold text-primary">
                        {calculateTokens()} MEME
                      </span>
                    </div>
                  </div>

                  {/* Buy Button */}
                  <Button 
                    size="lg" 
                    onClick={handlePurchase}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
                  >
                    Buy Now
                  </Button>

                  {/* User Stats */}
                  <div className="mt-8 pt-8 border-t border-border">
                    <h3 className="font-bold mb-4">Your Contribution</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Contributed:</span>
                        <span className="font-semibold">$0.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">MEME Allocated:</span>
                        <span className="font-semibold">0 MEME</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Claim Status:</span>
                        <span className="text-sm text-muted-foreground">After mainnet launch</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It <span className="text-gradient">Works</span>
          </h2>
          
          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Connect Wallet", icon: "🔗" },
              { step: "2", title: "Select Chain", icon: "⛓️" },
              { step: "3", title: "Enter Amount", icon: "💰" },
              { step: "4", title: "Confirm Transaction", icon: "✅" },
              { step: "5", title: "Claim After Launch", icon: "🚀" },
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center bg-card border-border card-shadow hover:border-primary transition-all">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-sm text-primary font-bold mb-2">Step {item.step}</div>
                <div className="text-sm font-semibold">{item.title}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presale;
