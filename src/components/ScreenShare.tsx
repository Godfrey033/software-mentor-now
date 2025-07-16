import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Video, 
  VideoOff, 
  Monitor,
  MonitorSpeaker,
  Maximize,
  Minimize,
  Settings,
  Users,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Circle,
  Square,
  Phone,
  PhoneOff,
  Camera,
  CameraOff
} from 'lucide-react';

interface ScreenShareProps {
  userRole: 'student' | 'facilitator';
}

export const ScreenShare = ({ userRole }: ScreenShareProps) => {
  const [isSharing, setIsSharing] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  const startScreenShare = () => {
    setIsSharing(true);
    setIsConnected(true);
  };

  const stopScreenShare = () => {
    setIsSharing(false);
    setIsConnected(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleVideo = () => {
    setIsVideoOff(!isVideoOff);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Screen Sharing</h2>
          <p className="text-muted-foreground">
            {userRole === 'student' 
              ? 'Share your screen with facilitators for assistance' 
              : 'View and assist students through screen sharing'}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant={isConnected ? 'default' : 'secondary'}>
            {isConnected ? 'Connected' : 'Disconnected'}
          </Badge>
          {isRecording && (
            <Badge variant="destructive" className="animate-pulse-soft">
              Recording
            </Badge>
          )}
        </div>
      </div>

      {/* Connection Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MonitorSpeaker className="w-5 h-5" />
            <span>Connection Status</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-secondary rounded-lg">
              <div className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center ${
                isConnected ? 'bg-success' : 'bg-muted'
              }`}>
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <p className="font-medium">Screen Share</p>
              <p className="text-sm text-muted-foreground">
                {isSharing ? 'Active' : 'Inactive'}
              </p>
            </div>
            
            <div className="text-center p-4 bg-secondary rounded-lg">
              <div className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center ${
                isConnected && !isMuted ? 'bg-success' : 'bg-muted'
              }`}>
                {isMuted ? <MicOff className="w-6 h-6 text-white" /> : <Mic className="w-6 h-6 text-white" />}
              </div>
              <p className="font-medium">Audio</p>
              <p className="text-sm text-muted-foreground">
                {isMuted ? 'Muted' : 'Active'}
              </p>
            </div>
            
            <div className="text-center p-4 bg-secondary rounded-lg">
              <div className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center ${
                isConnected && !isVideoOff ? 'bg-success' : 'bg-muted'
              }`}>
                {isVideoOff ? <CameraOff className="w-6 h-6 text-white" /> : <Camera className="w-6 h-6 text-white" />}
              </div>
              <p className="font-medium">Video</p>
              <p className="text-sm text-muted-foreground">
                {isVideoOff ? 'Off' : 'On'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Screen Share Area */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Video className="w-5 h-5" />
              <span>
                {userRole === 'student' ? 'Your Screen' : 'Student Screen'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Button size="sm" variant="outline">
                <Maximize className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-secondary rounded-lg p-8 min-h-[400px] flex items-center justify-center">
            {isSharing ? (
              <div className="text-center">
                <div className="bg-gradient-primary rounded-lg p-8 mb-4">
                  <Monitor className="w-16 h-16 text-white mx-auto mb-4" />
                  <p className="text-white font-medium">Screen sharing is active</p>
                </div>
                <p className="text-muted-foreground">
                  {userRole === 'student' 
                    ? 'Your screen is being shared with the facilitator' 
                    : 'Viewing student screen in real-time'}
                </p>
              </div>
            ) : (
              <div className="text-center">
                <Monitor className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">
                  {userRole === 'student' 
                    ? 'Click "Start Sharing" to share your screen' 
                    : 'Waiting for student to share screen'}
                </p>
                {userRole === 'student' && (
                  <Button onClick={startScreenShare} className="bg-gradient-primary">
                    <Monitor className="w-4 h-4 mr-2" />
                    Start Sharing
                  </Button>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Controls */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Sharing Controls */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="w-5 h-5" />
              <span>Sharing Controls</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex space-x-2">
                {!isSharing ? (
                  <Button onClick={startScreenShare} className="bg-gradient-primary flex-1">
                    <Monitor className="w-4 h-4 mr-2" />
                    Start Sharing
                  </Button>
                ) : (
                  <Button onClick={stopScreenShare} variant="destructive" className="flex-1">
                    <Square className="w-4 h-4 mr-2" />
                    Stop Sharing
                  </Button>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant={isMuted ? "destructive" : "outline"} 
                  onClick={toggleMute}
                  disabled={!isConnected}
                >
                  {isMuted ? <MicOff className="w-4 h-4 mr-2" /> : <Mic className="w-4 h-4 mr-2" />}
                  {isMuted ? 'Unmute' : 'Mute'}
                </Button>
                
                <Button 
                  variant={isVideoOff ? "destructive" : "outline"} 
                  onClick={toggleVideo}
                  disabled={!isConnected}
                >
                  {isVideoOff ? <CameraOff className="w-4 h-4 mr-2" /> : <Camera className="w-4 h-4 mr-2" />}
                  {isVideoOff ? 'Turn On' : 'Turn Off'}
                </Button>
              </div>
              
              <Button 
                variant={isRecording ? "destructive" : "outline"} 
                onClick={toggleRecording}
                disabled={!isConnected}
                className="w-full"
              >
                {isRecording ? <Square className="w-4 h-4 mr-2" /> : <Circle className="w-4 h-4 mr-2" />}
                {isRecording ? 'Stop Recording' : 'Start Recording'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Session Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Session Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Session Duration:</span>
                  <span className="font-medium">
                    {isConnected ? '15:23' : '00:00'}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Participants:</span>
                  <span className="font-medium">
                    {isConnected ? '2' : '0'}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Quality:</span>
                  <span className="font-medium">
                    {isConnected ? 'HD' : 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Status:</span>
                  <Badge variant={isConnected ? 'default' : 'secondary'} className="text-xs">
                    {isConnected ? 'Connected' : 'Disconnected'}
                  </Badge>
                </div>
              </div>
              
              {userRole === 'facilitator' && (
                <div className="mt-4 p-3 bg-gradient-accent rounded-lg text-white">
                  <p className="text-sm font-medium mb-1">Facilitator Mode</p>
                  <p className="text-xs">
                    You can request control of the student's screen when needed.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};