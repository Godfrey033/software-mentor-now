import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  BookOpen, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Activity,
  Play,
  Pause,
  RotateCcw,
  MessageSquare,
  Video,
  FileText
} from 'lucide-react';

export const StudentDashboard = () => {
  const currentProgress = 68;
  const currentChallenge = "JavaScript Functions";
  const recentActivities = [
    { time: "10:30 AM", action: "Started debugging exercise", status: "active" },
    { time: "10:15 AM", action: "Completed array methods lesson", status: "completed" },
    { time: "10:00 AM", action: "Asked for help with loops", status: "helped" },
    { time: "9:45 AM", action: "Submitted code review", status: "completed" }
  ];

  const learningStats = [
    { label: "Problems Solved", value: "12", change: "+3" },
    { label: "Code Lines", value: "1,247", change: "+89" },
    { label: "Time Spent", value: "4.2h", change: "+0.8h" },
    { label: "Accuracy", value: "84%", change: "+5%" }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-primary rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Welcome back, Student!</h2>
            <p className="text-white/90">Continue your learning journey with {currentChallenge}</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold mb-1">{currentProgress}%</div>
            <div className="text-sm text-white/80">Overall Progress</div>
          </div>
        </div>
        <Progress value={currentProgress} className="mt-4 bg-white/20" />
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-4 gap-4">
        <Button className="h-20 flex-col space-y-2 bg-gradient-primary">
          <Play className="w-6 h-6" />
          <span>Continue Learning</span>
        </Button>
        <Button variant="outline" className="h-20 flex-col space-y-2">
          <MessageSquare className="w-6 h-6" />
          <span>Ask for Help</span>
        </Button>
        <Button variant="outline" className="h-20 flex-col space-y-2">
          <Video className="w-6 h-6" />
          <span>Share Screen</span>
        </Button>
        <Button variant="outline" className="h-20 flex-col space-y-2">
          <FileText className="w-6 h-6" />
          <span>View Notes</span>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Current Challenge */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Code className="w-5 h-5" />
              <span>Current Challenge</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-secondary rounded-lg">
                <h3 className="font-semibold mb-2">{currentChallenge}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Learn to create and use functions in JavaScript with practical examples
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Intermediate</Badge>
                  <span className="text-sm text-muted-foreground">~45 min</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button size="sm" className="flex-1">
                  <Play className="w-4 h-4 mr-2" />
                  Continue
                </Button>
                <Button size="sm" variant="outline">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="w-5 h-5" />
              <span>Learning Statistics</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {learningStats.map((stat, index) => (
                <div key={index} className="text-center p-3 bg-secondary rounded-lg">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                  <div className="text-xs text-success font-medium">{stat.change}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span>Recent Activity</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 bg-secondary rounded-lg">
                <div className="flex-shrink-0">
                  {activity.status === 'completed' && (
                    <CheckCircle className="w-5 h-5 text-success" />
                  )}
                  {activity.status === 'active' && (
                    <Activity className="w-5 h-5 text-primary animate-pulse-soft" />
                  )}
                  {activity.status === 'helped' && (
                    <MessageSquare className="w-5 h-5 text-warning" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
                <Badge 
                  variant={activity.status === 'completed' ? 'default' : 'secondary'}
                  className="capitalize"
                >
                  {activity.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};