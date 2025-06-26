import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertCircle, TrendingUp, FileText } from "lucide-react";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  performance: {
    clarity: number;
    technicalDepth: number;
    communication: number;
    overallScore: number;
  };
  suggestions: string[];
  role: string;
}

export function FeedbackModal({
  isOpen,
  onClose,
  performance,
  suggestions,
  role,
}: FeedbackModalProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-primary";
    return "text-destructive";
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="w-5 h-5 text-success" />;
    if (score >= 60) return <TrendingUp className="w-5 h-5 text-primary" />;
    return <AlertCircle className="w-5 h-5 text-destructive" />;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Your Performance
          </DialogTitle>
          <p className="text-muted-foreground">
            Interview feedback for {role} position
          </p>
        </DialogHeader>

        <div className="space-y-6">
          {/* Overall Score */}
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Overall Score</h3>
                  <p className="text-muted-foreground text-sm">
                    Combined performance rating
                  </p>
                </div>
                <div className="text-right">
                  <div
                    className={`text-3xl font-bold ${getScoreColor(performance.overallScore)}`}
                  >
                    {performance.overallScore}%
                  </div>
                  {getScoreIcon(performance.overallScore)}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Performance Breakdown</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Clarity</span>
                  <Badge
                    variant="outline"
                    className={getScoreColor(performance.clarity)}
                  >
                    {performance.clarity}%
                  </Badge>
                </div>
                <Progress value={performance.clarity} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Technical Depth</span>
                  <Badge
                    variant="outline"
                    className={getScoreColor(performance.technicalDepth)}
                  >
                    {performance.technicalDepth}%
                  </Badge>
                </div>
                <Progress value={performance.technicalDepth} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Communication</span>
                  <Badge
                    variant="outline"
                    className={getScoreColor(performance.communication)}
                  >
                    {performance.communication}%
                  </Badge>
                </div>
                <Progress value={performance.communication} className="h-2" />
              </div>
            </div>
          </div>

          {/* Suggestions */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Improvement Suggestions</h3>
            <div className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button className="bg-primary hover:bg-primary/90 font-bold uppercase">
              <FileText className="mr-2 h-4 w-4" />
              View Detailed Report
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
