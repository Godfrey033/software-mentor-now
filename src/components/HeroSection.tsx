import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Monitor, Users, Code, BarChart3, Zap, Shield } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-hero text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered Learning Assistant
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Smart Assistance System
            <br />
            <span className="text-white/90">for Software Learning</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Develop a smart, active and real-time system that monitors and supports students during 
            software learning by identifying challenges and notifying facilitators for timely assistance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <Monitor className="w-12 h-12 mx-auto mb-4 text-white" />
            <h3 className="text-2xl font-bold mb-2">Real-time</h3>
            <p className="text-white/80">Monitoring</p>
          </div>
          
          <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <Users className="w-12 h-12 mx-auto mb-4 text-white" />
            <h3 className="text-2xl font-bold mb-2">Collaborative</h3>
            <p className="text-white/80">Learning</p>
          </div>
          
          <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <Code className="w-12 h-12 mx-auto mb-4 text-white" />
            <h3 className="text-2xl font-bold mb-2">Code</h3>
            <p className="text-white/80">Assistance</p>
          </div>
          
          <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <BarChart3 className="w-12 h-12 mx-auto mb-4 text-white" />
            <h3 className="text-2xl font-bold mb-2">Analytics</h3>
            <p className="text-white/80">Dashboard</p>
          </div>
        </div>
      </div>
    </section>
  );
};