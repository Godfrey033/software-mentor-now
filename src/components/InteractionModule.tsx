import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MessageSquare, 
  Send, 
  Phone, 
  Video, 
  Bell,
  Clock,
  User,
  Users,
  AlertTriangle,
  CheckCircle,
  Info,
  MessageCircle,
  Paperclip,
  Smile,
  Settings,
  Archive,
  Search
} from 'lucide-react';

interface InteractionModuleProps {
  userRole: 'student' | 'facilitator';
}

export const InteractionModule = ({ userRole }: InteractionModuleProps) => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messages = [
    {
      id: 1,
      sender: 'Facilitator',
      content: 'Hello! I see you\'re working on the JavaScript functions exercise. How are you finding it so far?',
      time: '10:30 AM',
      type: 'text',
      isOwn: userRole === 'facilitator'
    },
    {
      id: 2,
      sender: 'Student',
      content: 'Hi! I\'m having trouble understanding how to pass parameters to functions. Could you help me?',
      time: '10:32 AM',
      type: 'text',
      isOwn: userRole === 'student'
    },
    {
      id: 3,
      sender: 'Facilitator',
      content: 'Of course! Let me share my screen and walk you through it step by step.',
      time: '10:33 AM',
      type: 'text',
      isOwn: userRole === 'facilitator'
    },
    {
      id: 4,
      sender: 'System',
      content: 'Screen sharing session started',
      time: '10:33 AM',
      type: 'system',
      isOwn: false
    },
    {
      id: 5,
      sender: 'Student',
      content: 'Thank you! That makes much more sense now. I think I can try it myself.',
      time: '10:45 AM',
      type: 'text',
      isOwn: userRole === 'student'
    }
  ];

  const helpRequests = [
    {
      id: 1,
      student: 'Alice Johnson',
      subject: 'JavaScript Functions',
      message: 'Need help with function parameters',
      time: '2 min ago',
      priority: 'medium',
      status: 'pending'
    },
    {
      id: 2,
      student: 'Bob Smith',
      subject: 'Loop Debugging',
      message: 'Getting infinite loop error',
      time: '5 min ago',
      priority: 'high',
      status: 'in-progress'
    },
    {
      id: 3,
      student: 'Carol Davis',
      subject: 'Array Methods',
      message: 'Confused about map() vs forEach()',
      time: '10 min ago',
      priority: 'low',
      status: 'resolved'
    }
  ];

  const sendMessage = () => {
    if (message.trim()) {
      // Add message logic here
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Interaction Module</h2>
          <p className="text-muted-foreground">
            {userRole === 'student' 
              ? 'Communicate with your facilitator for help and guidance' 
              : 'Support and guide students through real-time interaction'}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="default">Online</Badge>
          <Button size="sm" variant="outline">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chat Interface */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5" />
                <span>Chat</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline">
                  <Video className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Phone className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Archive className="w-4 h-4" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Messages */}
              <div className="h-96 overflow-y-auto space-y-3 p-4 bg-secondary rounded-lg">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        msg.type === 'system'
                          ? 'bg-muted text-muted-foreground text-center text-sm'
                          : msg.isOwn
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-card text-card-foreground'
                      }`}
                    >
                      {msg.type !== 'system' && (
                        <div className="text-xs opacity-70 mb-1">{msg.sender}</div>
                      )}
                      <div className="text-sm">{msg.content}</div>
                      <div className="text-xs opacity-70 mt-1">{msg.time}</div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-card text-card-foreground px-4 py-2 rounded-lg">
                      <div className="text-xs opacity-70 mb-1">
                        {userRole === 'student' ? 'Facilitator' : 'Student'} is typing...
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Message Input */}
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  <Paperclip className="w-4 h-4" />
                </Button>
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button size="sm" variant="outline">
                  <Smile className="w-4 h-4" />
                </Button>
                <Button onClick={sendMessage} className="bg-gradient-primary">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Help Requests (for facilitators) */}
          {userRole === 'facilitator' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="w-5 h-5" />
                  <span>Help Requests</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {helpRequests.map((request) => (
                    <div key={request.id} className="p-3 bg-secondary rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">{request.student}</span>
                        <Badge 
                          variant={
                            request.priority === 'high' ? 'destructive' :
                            request.priority === 'medium' ? 'default' : 'secondary'
                          }
                          className="text-xs"
                        >
                          {request.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{request.subject}</p>
                      <p className="text-xs text-muted-foreground mb-2">{request.message}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{request.time}</span>
                        <Badge variant="outline" className="text-xs">
                          {request.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Quick Actions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {userRole === 'student' ? (
                  <>
                    <Button variant="outline" className="w-full justify-start">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Request Help
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Video className="w-4 h-4 mr-2" />
                      Start Video Call
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Archive className="w-4 h-4 mr-2" />
                      View Chat History
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="w-4 h-4 mr-2" />
                      View All Students
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Bell className="w-4 h-4 mr-2" />
                      Send Announcement
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Archive className="w-4 h-4 mr-2" />
                      Session History
                    </Button>
                  </>
                )}
                <Button variant="outline" className="w-full justify-start">
                  <Search className="w-4 h-4 mr-2" />
                  Search Messages
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Session Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Session Info</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">1h 23m</span>
                </div>
                <div className="flex justify-between">
                  <span>Messages:</span>
                  <span className="font-medium">47</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <Badge variant="default" className="text-xs">Active</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Participants:</span>
                  <span className="font-medium">
                    {userRole === 'student' ? '2' : '24'}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};