import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Monitor, 
  Users, 
  Code, 
  BarChart3, 
  Video, 
  MessageSquare, 
  FileText, 
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  Play,
  Pause,
  Settings,
  Bell,
  User,
  BookOpen,
  Activity
} from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import { StudentDashboard } from '@/components/StudentDashboard';
import { FacilitatorDashboard } from '@/components/FacilitatorDashboard';
import { CodeEditor } from '@/components/CodeEditor';
import { ScreenShare } from '@/components/ScreenShare';
import { InteractionModule } from '@/components/InteractionModule';
import { AnalyticsDashboard } from '@/components/AnalyticsDashboard';

const Index = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [userRole, setUserRole] = useState<'student' | 'facilitator' | null>(null);

  const systemFeatures = [
    {
      title: "Real-time Monitoring",
      description: "Monitor students' step-by-step conduct during software learning",
      icon: Monitor,
      color: "bg-gradient-primary"
    },
    {
      title: "Screen Sharing",
      description: "Interface for screen sharing between student and facilitator",
      icon: Video,
      color: "bg-gradient-accent"
    },
    {
      title: "Interactive Communication",
      description: "Module for seamless interaction between facilitator and student",
      icon: MessageSquare,
      color: "bg-gradient-primary"
    },
    {
      title: "Remote Compiler Access",
      description: "Facilitator can read and write to student's remote compiler",
      icon: Code,
      color: "bg-gradient-accent"
    },
    {
      title: "Challenge Detection",
      description: "Detect learning challenges like errors, inactivity, or frequent mistakes",
      icon: AlertTriangle,
      color: "bg-gradient-primary"
    },
    {
      title: "Analytics Dashboard",
      description: "Basic analytics on student progress and performance trends",
      icon: BarChart3,
      color: "bg-gradient-accent"
    }
  ];

  const systemObjectives = [
    "Monitor students' step-by-step conduct during software learning",
    "Detect learning challenges such as errors in code, inactivity, or frequent mistakes",
    "Notify facilitators in real time to provide immediate support",
    "Provide basic analytics on student progress and performance trends"
  ];

  if (userRole === null) {
    return (
      <div className="min-h-screen bg-background">
        <HeroSection />
        
        {/* System Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">System Overview</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our Smart Assistance System revolutionizes software learning by providing real-time monitoring, 
                intelligent challenge detection, and seamless collaboration between students and facilitators.
              </p>
            </div>

            {/* System Objectives */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">System Objectives</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {systemObjectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-soft">
                    <div className="bg-gradient-primary rounded-full p-2 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-card-foreground leading-relaxed">{objective}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {systemFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-elegant transition-shadow duration-300 animate-fade-in">
                  <CardHeader>
                    <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Role Selection */}
        <section className="py-20 px-4 bg-secondary/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Choose Your Role</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Select your role to access the appropriate dashboard and features
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-elegant transition-shadow duration-300 cursor-pointer" 
                    onClick={() => setUserRole('student')}>
                <CardHeader className="text-center">
                  <div className="bg-gradient-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Student</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Access your coding environment, receive real-time assistance, and track your learning progress
                  </p>
                  <Button className="w-full" onClick={() => setUserRole('student')}>
                    Enter as Student
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-elegant transition-shadow duration-300 cursor-pointer"
                    onClick={() => setUserRole('facilitator')}>
                <CardHeader className="text-center">
                  <div className="bg-gradient-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Facilitator</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Monitor student progress, provide assistance, and access comprehensive analytics
                  </p>
                  <Button className="w-full" variant="outline" onClick={() => setUserRole('facilitator')}>
                    Enter as Facilitator
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-primary rounded-lg p-2">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Smart Learning Assistant</h1>
              <p className="text-sm text-muted-foreground">
                {userRole === 'student' ? 'Student Dashboard' : 'Facilitator Dashboard'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="capitalize">
              {userRole}
            </Badge>
            <Button variant="outline" size="sm" onClick={() => setUserRole(null)}>
              Switch Role
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="code">Code Editor</TabsTrigger>
            <TabsTrigger value="screen">Screen Share</TabsTrigger>
            <TabsTrigger value="interaction">Interaction</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            {userRole === 'student' ? <StudentDashboard /> : <FacilitatorDashboard />}
          </TabsContent>

          <TabsContent value="code" className="mt-6">
            <CodeEditor userRole={userRole} />
          </TabsContent>

          <TabsContent value="screen" className="mt-6">
            <ScreenShare userRole={userRole} />
          </TabsContent>

          <TabsContent value="interaction" className="mt-6">
            <InteractionModule userRole={userRole} />
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <AnalyticsDashboard userRole={userRole} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
