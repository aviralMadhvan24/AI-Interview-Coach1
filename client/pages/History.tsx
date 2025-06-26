import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Download, Eye, Filter } from "lucide-react";

const interviews = [
  {
    id: 1,
    date: "2024-01-15",
    role: "Frontend Developer",
    score: 85,
    duration: "45 min",
    feedback: "Strong technical knowledge, good communication",
  },
  {
    id: 2,
    date: "2024-01-12",
    role: "Product Manager",
    score: 78,
    duration: "38 min",
    feedback: "Good strategic thinking, could improve on metrics",
  },
  {
    id: 3,
    date: "2024-01-10",
    role: "Data Scientist",
    score: 92,
    duration: "52 min",
    feedback: "Excellent technical skills and problem-solving",
  },
  {
    id: 4,
    date: "2024-01-08",
    role: "UX Designer",
    score: 74,
    duration: "35 min",
    feedback: "Creative approach, needs work on user research",
  },
  {
    id: 5,
    date: "2024-01-05",
    role: "Backend Developer",
    score: 88,
    duration: "48 min",
    feedback: "Strong system design, clear explanations",
  },
];

export default function History() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">
            Interview History
          </h1>
          <p className="text-muted-foreground mt-2">
            Review your past interviews and track your progress
          </p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Data
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filters:</span>
            </div>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="frontend">Frontend Developer</SelectItem>
                <SelectItem value="backend">Backend Developer</SelectItem>
                <SelectItem value="fullstack">Full Stack Developer</SelectItem>
                <SelectItem value="product">Product Manager</SelectItem>
                <SelectItem value="design">UX Designer</SelectItem>
                <SelectItem value="data">Data Scientist</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="week">Last Week</SelectItem>
                <SelectItem value="month">Last Month</SelectItem>
                <SelectItem value="quarter">Last Quarter</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Interview History Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Interviews</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Feedback Summary</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {interviews.map((interview) => (
                <TableRow key={interview.id}>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      {interview.date}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    {interview.role}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        interview.score >= 80
                          ? "default"
                          : interview.score >= 60
                            ? "secondary"
                            : "destructive"
                      }
                      className={
                        interview.score >= 80
                          ? "bg-success hover:bg-success/80"
                          : interview.score >= 60
                            ? "bg-primary hover:bg-primary/80"
                            : ""
                      }
                    >
                      {interview.score}%
                    </Badge>
                  </TableCell>
                  <TableCell>{interview.duration}</TableCell>
                  <TableCell className="max-w-xs truncate">
                    {interview.feedback}
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
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
