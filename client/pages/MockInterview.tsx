import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Clock, Send, StopCircle, Mic, MicOff, Bot, User } from "lucide-react";
import { useState } from "react";

export default function MockInterview() {
  const [isRecording, setIsRecording] = useState(false);
  const [currentResponse, setCurrentResponse] = useState("");
  const [timeElapsed, setTimeElapsed] = useState(0);

  const aiMessage = {
    role: "AI Interviewer",
    message:
      "Tell me about yourself and why you're interested in this frontend developer position.",
  };

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header with Timer */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">
            Mock Interview
          </h1>
          <p className="text-muted-foreground">Frontend Developer Position</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg border">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="font-mono text-lg font-semibold">
              {formatTime(timeElapsed)}
            </span>
          </div>
          <Button variant="destructive" size="sm">
            <StopCircle className="mr-2 h-4 w-4" />
            End Session
          </Button>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="space-y-4">
        {/* AI Question Card */}
        <Card className="bg-card">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="secondary" className="text-xs uppercase">
                    {aiMessage.role}
                  </Badge>
                </div>
                <p className="text-foreground leading-relaxed">
                  {aiMessage.message}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Response Area */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <User className="mr-2 h-5 w-5" />
              Your Response
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Type your response here or use voice input..."
              className="min-h-32 bg-muted border-border text-foreground placeholder:text-muted-foreground/60"
              value={currentResponse}
              onChange={(e) => setCurrentResponse(e.target.value)}
            />
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsRecording(!isRecording)}
                className={isRecording ? "text-destructive" : ""}
              >
                {isRecording ? (
                  <>
                    <MicOff className="mr-2 h-4 w-4" />
                    Stop Recording
                  </>
                ) : (
                  <>
                    <Mic className="mr-2 h-4 w-4" />
                    Voice Input
                  </>
                )}
              </Button>
              <Button
                className="bg-primary hover:bg-primary/90 font-bold uppercase"
                disabled={!currentResponse.trim()}
              >
                <Send className="mr-2 h-4 w-4" />
                Send Response
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Instructions */}
      <Card className="bg-muted/30">
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">
            <strong>Tip:</strong> Take your time to think through your answers.
            The AI will provide feedback on your communication skills, technical
            depth, and overall presentation.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
