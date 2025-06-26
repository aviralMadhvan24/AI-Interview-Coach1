import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  PlayCircle,
  TrendingUp,
  Clock,
  Award,
  Calendar,
  Filter,
} from "lucide-react";
import { Link } from "react-router-dom";

const recentInterviews = [
  {
    id: 1,
    date: "2024-01-15",
    role: "Frontend Developer",
    score: 85,
    duration: "45 min",
    status: "completed",
  },
  {
    id: 2,
    date: "2024-01-12",
    role: "Product Manager",
    score: 78,
    duration: "38 min",
    status: "completed",
  },
  {
    id: 3,
    date: "2024-01-10",
    role: "Data Scientist",
    score: 92,
    duration: "52 min",
    status: "completed",
  },
  {
    id: 4,
    date: "2024-01-08",
    role: "UX Designer",
    score: 74,
    duration: "35 min",
    status: "completed",
  },
];

export default function Dashboard() {
  const totalSessions = 24;
  const averageScore = 82;
  const weeklyGoal = 85;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back! Ready to practice your next interview?
        </p>
      </div>

      {/* Main CTA Card */}
      <Card className="bg-gradient-to-r from-primary to-primary/80 border-primary/20">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-primary-foreground mb-2">
                Start New Mock Interview
              </h2>
              <p className="text-primary-foreground/80 mb-6">
                Practice with AI-powered interviews tailored to your target role
              </p>
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-bold uppercase tracking-wide"
              >
                <Link to="/mock-interview">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Begin Interview
                </Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <div className="w-32 h-32 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <PlayCircle className="w-16 h-16 text-primary-foreground" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Sessions Completed
            </CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {totalSessions}
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+12%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {averageScore}%
            </div>
            <div className="mt-2">
              <Progress value={averageScore} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Goal: {weeklyGoal}%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Practice Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">18.5h</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+2.5h</span> this week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Interviews Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold">
              Recent Interviews
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/history">View All</Link>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentInterviews.map((interview) => (
                <TableRow
                  key={interview.id}
                  className="cursor-pointer hover:bg-muted/50"
                >
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      {interview.date}
                    </div>
                  </TableCell>
                  <TableCell>{interview.role}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <span
                        className={`font-semibold ${
                          interview.score >= 80
                            ? "text-success"
                            : interview.score >= 60
                              ? "text-primary"
                              : "text-destructive"
                        }`}
                      >
                        {interview.score}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{interview.duration}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="capitalize">
                      {interview.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
