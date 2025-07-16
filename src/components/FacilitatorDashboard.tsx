import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Monitor,
  MessageSquare,
  Video,
  Code,
  Bell,
  TrendingUp,
  Activity,
  Eye,
  Settings
} from 'lucide-react';

export const FacilitatorDashboard = () => {
  const activeStudents = 24;
  const needsHelp = 3;
  const completedTasks = 18;
  
  const studentsNeedingHelp = [
    { name: "Alice Johnson", issue: "Stuck on array methods", time: "2 min ago", severity: "medium" },
    { name: "Bob Smith", issue: "Compilation error in loop", time: "5 min ago", severity: "high" },
    { name: "Carol Davis", issue: "Inactive for 15 minutes", time: "15 min ago", severity: "low" }
  ];

  const recentActivity = [
    { student: "Alice Johnson", action: "Completed function exercise", time: "1 min ago", status: "success" },
    { student: "Bob Smith", action: "Requested help with debugging", time: "3 min ago", status: "help" },
    { student: "Carol Davis", action: "Submitted code review", time: "5 min ago", status: "review" },
    { student: "David Wilson", action: "Started new challenge", time: "8 min ago", status: "active" }
  ];

  const classStats = [
    { label: "Active Students", value: activeStudents, change: "+2" },
    { label: "Avg. Progress", value: "67%", change: "+3%" },
    { label: "Help Requests", value: needsHelp, change: "-1" },
    { label: "Completed Tasks", value: completedTasks, change: "+5" }
  ];

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        {classStats.map((stat, index) => (
          <Card key={index} className="bg-gradient-to-br from-card to-secondary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-success font-medium">{stat.change}</p>
                </div>
                <div className="text-primary">
                  {index === 0 && <Users className="w-8 h-8" />}
                  {index === 1 && <TrendingUp className="w-8 h-8" />}
                  {index === 2 && <AlertTriangle className="w-8 h-8" />}
                  {index === 3 && <CheckCircle className="w-8 h-8" />}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-5 gap-4">
        <Button className="h-16 flex-col space-y-1 bg-gradient-primary">
          <Monitor className="w-5 h-5" />
          <span className="text-xs">View All Students</span>
        </Button>
        <Button variant="outline" className="h-16 flex-col space-y-1">
          <MessageSquare className="w-5 h-5" />
          <span className="text-xs">Send Announcement</span>
        </Button>
        <Button variant="outline" className="h-16 flex-col space-y-1">
          <Video className="w-5 h-5" />
          <span className="text-xs">Start Session</span>
        </Button>
        <Button variant="outline" className="h-16 flex-col space-y-1">
          <Code className="w-5 h-5" />
          <span className="text-xs">Review Code</span>
        </Button>
        <Button variant="outline" className="h-16 flex-col space-y-1">
          <Settings className="w-5 h-5" />
          <span className="text-xs">Settings</span>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Students Needing Help */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5" />
                <span>Students Needing Help</span>
              </div>
              <Badge variant="destructive">{needsHelp}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {studentsNeedingHelp.map((student, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      student.severity === 'high' ? 'bg-destructive' :
                      student.severity === 'medium' ? 'bg-warning' : 'bg-muted'
                    }`}></div>
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-muted-foreground">{student.issue}</p>
                      <p className="text-xs text-muted-foreground">{student.time}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      Help
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Class Progress Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="w-5 h-5" />
              <span>Class Progress Overview</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>JavaScript Basics</span>
                  <span>85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Functions & Methods</span>
                  <span>67%</span>
                </div>
                <Progress value={67} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Object-Oriented Programming</span>
                  <span>34%</span>
                </div>
                <Progress value={34} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Debugging & Testing</span>
                  <span>12%</span>
                </div>
                <Progress value={12} className="h-2" />
              </div>
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
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 bg-secondary rounded-lg">
                <div className="flex-shrink-0">
                  {activity.status === 'success' && (
                    <CheckCircle className="w-5 h-5 text-success" />
                  )}
                  {activity.status === 'help' && (
                    <AlertTriangle className="w-5 h-5 text-warning" />
                  )}
                  {activity.status === 'review' && (
                    <Eye className="w-5 h-5 text-primary" />
                  )}
                  {activity.status === 'active' && (
                    <Activity className="w-5 h-5 text-primary animate-pulse-soft" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{activity.student}</p>
                  <p className="text-sm text-muted-foreground">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                <Badge 
                  variant={activity.status === 'success' ? 'default' : 'secondary'}
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