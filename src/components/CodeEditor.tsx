import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { 
  Play, 
  Save, 
  Copy, 
  RotateCcw, 
  Code, 
  Terminal,
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Settings,
  Eye,
  Edit
} from 'lucide-react';

interface CodeEditorProps {
  userRole: 'student' | 'facilitator';
}

export const CodeEditor = ({ userRole }: CodeEditorProps) => {
  const [code, setCode] = useState(`function calculateSum(a, b) {
  return a + b;
}

// Test the function
console.log(calculateSum(5, 3));
console.log(calculateSum(10, 15));`);

  const [output, setOutput] = useState('8\n25');
  const [isRunning, setIsRunning] = useState(false);
  const [hasError, setHasError] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    // Simulate code execution
    setTimeout(() => {
      setIsRunning(false);
      setOutput('8\n25\nCode executed successfully!');
    }, 1500);
  };

  const saveCode = () => {
    // Simulate saving code
    console.log('Code saved!');
  };

  const resetCode = () => {
    setCode('// Start coding here...\n');
    setOutput('');
    setHasError(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Code Editor</h2>
          <p className="text-muted-foreground">
            {userRole === 'student' 
              ? 'Write and test your code in real-time' 
              : 'Monitor and assist with student code'}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary">JavaScript</Badge>
          <Badge variant={hasError ? 'destructive' : 'default'}>
            {hasError ? 'Error' : 'Ready'}
          </Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Code Editor */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Code className="w-5 h-5" />
                <span>Code Editor</span>
              </div>
              <div className="flex items-center space-x-2">
                {userRole === 'facilitator' && (
                  <>
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" />
                      View Only
                    </Button>
                    <Button size="sm">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit Mode
                    </Button>
                  </>
                )}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="min-h-[400px] font-mono text-sm"
                placeholder="Start coding here..."
                disabled={userRole === 'facilitator'}
              />
              
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <Button onClick={runCode} disabled={isRunning} className="bg-gradient-primary">
                    {isRunning ? (
                      <>
                        <Clock className="w-4 h-4 mr-2 animate-spin" />
                        Running...
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Run Code
                      </>
                    )}
                  </Button>
                  <Button variant="outline" onClick={saveCode}>
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={resetCode}>
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Output & Console */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Terminal className="w-5 h-5" />
              <span>Output & Console</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-secondary p-4 rounded-lg min-h-[400px]">
                <div className="text-sm text-muted-foreground mb-2">Console Output:</div>
                <pre className="text-sm font-mono whitespace-pre-wrap">
                  {output || 'No output yet. Run your code to see results.'}
                </pre>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>No errors detected</span>
                </div>
                <Button variant="outline" size="sm">
                  Clear Console
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Code Analysis & Help */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Code Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5" />
              <span>Code Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>No syntax errors</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Code structure is good</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <AlertTriangle className="w-4 h-4 text-warning" />
                <span>Consider adding comments</span>
              </div>
              
              <div className="mt-4 p-3 bg-secondary rounded-lg">
                <p className="text-sm font-medium mb-2">Suggestion:</p>
                <p className="text-sm text-muted-foreground">
                  Add error handling for invalid inputs to make your function more robust.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity Monitor */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>Activity Monitor</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Time Active:</span>
                  <span className="font-medium">23 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span>Lines Written:</span>
                  <span className="font-medium">47</span>
                </div>
                <div className="flex justify-between">
                  <span>Runs:</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between">
                  <span>Saves:</span>
                  <span className="font-medium">12</span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-gradient-primary rounded-lg text-white">
                <p className="text-sm font-medium mb-1">Good Progress!</p>
                <p className="text-xs">You're making steady progress on this challenge.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help & Resources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>Help & Resources</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Documentation
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Code className="w-4 h-4 mr-2" />
                Code Examples
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Common Errors
              </Button>
              
              {userRole === 'student' && (
                <Button className="w-full bg-gradient-accent">
                  Ask for Help
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};