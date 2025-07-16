import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Users,
  Clock,
  Code,
  AlertTriangle,
  CheckCircle,
  Activity,
  Calendar,
  Download,
  Filter,
  RefreshCw,
  Eye
} from 'lucide-react';

interface AnalyticsDashboardProps {
  userRole: 'student' | 'facilitator';
}

export const AnalyticsDashboard = ({ userRole }: AnalyticsDashboardProps) => {
  const studentAnalytics = {
    overallProgress: 73,
    timeSpent: '24.5h',
    problemsSolved: 89,
    averageScore: 87,
    streakDays: 12,
    weakAreas: ['Object-Oriented Programming', 'Debugging'],
    strongAreas: ['Basic Syntax', 'Functions', 'Arrays']
  };

  const facilitatorAnalytics = {
    totalStudents: 24,
    activeStudents: 18,
    averageProgress: 67,
    totalSessions: 156,
    helpRequests: 34,
    completionRate: 82
  };

  const recentSessions = [
    { date: '2024-01-15', duration: '2h 15m', topics: ['Functions', 'Arrays'], score: 92 },
    { date: '2024-01-14', duration: '1h 45m', topics: ['Loops', 'Conditions'], score: 85 },
    { date: '2024-01-13', duration: '2h 30m', topics: ['Variables', 'Data Types'], score: 88 },
    { date: '2024-01-12', duration: '1h 20m', topics: ['Debugging', 'Testing'], score: 78 }
  ];

  const performanceMetrics = [
    { label: 'Code Quality', value: 85, change: '+3%', trend: 'up' },
    { label: 'Problem Solving', value: 78, change: '+5%', trend: 'up' },
    { label: 'Time Efficiency', value: 82, change: '-2%', trend: 'down' },
    { label: 'Collaboration', value: 90, change: '+7%', trend: 'up' }
  ];

  const classProgress = [
    { topic: 'JavaScript Basics', completed: 22, total: 24, percentage: 92 },
    { topic: 'Functions & Scope', completed: 18, total: 24, percentage: 75 },
    { topic: 'DOM Manipulation', completed: 15, total: 24, percentage: 63 },
    { topic: 'Async Programming', completed: 8, total: 24, percentage: 33 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
          <p className="text-muted-foreground">
            {userRole === 'student' 
              ? 'Track your learning progress and performance metrics' 
              : 'Monitor class performance and student analytics'}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button size="sm" variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button size="sm" variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button size="sm" variant="outline">
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-4">
        {userRole === 'student' ? (
          <>
            <Card className="bg-gradient-to-br from-primary to-primary-glow text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Overall Progress</p>
                    <p className="text-3xl font-bold">{studentAnalytics.overallProgress}%</p>
                    <div className="flex items-center mt-1">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="text-sm">+5% this week</span>
                    </div>
                  </div>
                  <BarChart3 className="w-8 h-8 opacity-75" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Time Spent</p>
                    <p className="text-2xl font-bold">{studentAnalytics.timeSpent}</p>
                    <div className="flex items-center mt-1">
                      <TrendingUp className="w-4 h-4 mr-1 text-success" />
                      <span className="text-sm text-success">+2.5h this week</span>
                    </div>
                  </div>
                  <Clock className="w-8 h-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Problems Solved</p>
                    <p className="text-2xl font-bold">{studentAnalytics.problemsSolved}</p>
                    <div className="flex items-center mt-1">
                      <TrendingUp className="w-4 h-4 mr-1 text-success" />
                      <span className="text-sm text-success">+12 this week</span>
                    </div>
                  </div>
                  <CheckCircle className="w-8 h-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Average Score</p>
                    <p className="text-2xl font-bold">{studentAnalytics.averageScore}%</p>
                    <div className="flex items-center mt-1">
                      <TrendingUp className="w-4 h-4 mr-1 text-success" />
                      <span className="text-sm text-success">+3% this week</span>
                    </div>
                  </div>
                  <Activity className="w-8 h-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <>
            <Card className="bg-gradient-to-br from-primary to-primary-glow text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Total Students</p>
                    <p className="text-3xl font-bold">{facilitatorAnalytics.totalStudents}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-sm">{facilitatorAnalytics.activeStudents} active</span>
                    </div>
                  </div>
                  <Users className="w-8 h-8 opacity-75" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Average Progress</p>
                    <p className="text-2xl font-bold">{facilitatorAnalytics.averageProgress}%</p>
                    <div className="flex items-center mt-1">
                      <TrendingUp className="w-4 h-4 mr-1 text-success" />
                      <span className="text-sm text-success">+4% this week</span>
                    </div>
                  </div>
                  <BarChart3 className="w-8 h-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Help Requests</p>
                    <p className="text-2xl font-bold">{facilitatorAnalytics.helpRequests}</p>
                    <div className="flex items-center mt-1">
                      <TrendingDown className="w-4 h-4 mr-1 text-success" />
                      <span className="text-sm text-success">-8 this week</span>
                    </div>
                  </div>
                  <AlertTriangle className="w-8 h-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Completion Rate</p>
                    <p className="text-2xl font-bold">{facilitatorAnalytics.completionRate}%</p>
                    <div className="flex items-center mt-1">
                      <TrendingUp className="w-4 h-4 mr-1 text-success" />
                      <span className="text-sm text-success">+2% this week</span>
                    </div>
                  </div>
                  <CheckCircle className="w-8 h-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Performance Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="w-5 h-5" />
              <span>Performance Metrics</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{metric.label}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-bold">{metric.value}%</span>
                      <div className={`flex items-center text-xs ${
                        metric.trend === 'up' ? 'text-success' : 'text-warning'
                      }`}>
                        {metric.trend === 'up' ? (
                          <TrendingUp className="w-3 h-3 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 mr-1" />
                        )}
                        {metric.change}
                      </div>
                    </div>
                  </div>
                  <Progress value={metric.value} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Class Progress (for facilitators) or Learning Areas (for students) */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Code className="w-5 h-5" />
              <span>
                {userRole === 'student' ? 'Learning Areas' : 'Class Progress'}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {userRole === 'student' ? (
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-2 text-success">Strong Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {studentAnalytics.strongAreas.map((area, index) => (
                      <Badge key={index} variant="default" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2 text-warning">Areas to Improve</h4>
                  <div className="flex flex-wrap gap-2">
                    {studentAnalytics.weakAreas.map((area, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gradient-accent rounded-lg text-white">
                  <p className="text-sm font-medium mb-1">Learning Streak</p>
                  <p className="text-xs">
                    {studentAnalytics.streakDays} days of consistent learning! Keep it up!
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {classProgress.map((topic, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{topic.topic}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">
                          {topic.completed}/{topic.total}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {topic.percentage}%
                        </Badge>
                      </div>
                    </div>
                    <Progress value={topic.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recent Sessions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>Recent Sessions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentSessions.map((session, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <div className="text-sm font-medium">{session.date}</div>
                    <div className="text-sm text-muted-foreground">{session.duration}</div>
                    <div className="flex space-x-1">
                      {session.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-sm font-medium">{session.score}%</div>
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};