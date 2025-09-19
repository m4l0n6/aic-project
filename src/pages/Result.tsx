import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircleIcon, CheckCircle2Icon, CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CircularProgress from "@/components/ui/shadcn-io/circular";
import * as React from "react";
import { Link } from "react-router-dom";
import { analysisData } from "@/mock/ai-analysis";


export default function Result() {
    const [progress, setProgress] = React.useState(0);

    // Tính điểm trung bình từ analysisData
    const averageScore = React.useMemo(() => {
      const totalScore = analysisData.reduce((sum, item) => sum + item.score, 0);
      return Math.round(totalScore / analysisData.length);
    }, []);

    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(averageScore), 500);
      return () => clearTimeout(timer);
    }, [averageScore]);
  return (
    <div className="flex flex-col justify-center items-center mx-10 my-5">
      <div className="flex gap-2 mb-2 w-full">
        <Link to="/">
          <Button variant="outline">Return to Home</Button>
        </Link>
        <Button>Download Report</Button>
      </div>
      <ResizablePanelGroup
        direction="horizontal"
        className="rounded-lg md:min-w-[450px]"
      >
        <ResizablePanel defaultSize={65} className="shadow-lg h-[90svh]">
          <Card className="w-full h-full">
            <CardHeader className="border-b">
              <CardTitle className="text-xl">Analysis Result</CardTitle>
            </CardHeader>
            <CardContent className="relative overflow-auto">
              <Tabs defaultValue="score" className="w-full">
                <TabsList className="top-0 z-10 sticky border-b">
                  <TabsTrigger value="score">Score</TabsTrigger>
                  <TabsTrigger value="detail">Detail</TabsTrigger>
                </TabsList>
                <TabsContent value="score" className="overflow-auto">
                  <div className="flex flex-col justify-center items-center">
                    <CircularProgress
                      value={progress}
                      size={120}
                      showLabel
                      progressClassName="transition-all duration-1000 ease-in-out"
                      labelClassName="text-3xl font-bold"
                    />
                    <p className="text-lg">Student Performance Score</p>
                  </div>
                  <div className="gap-4 grid grid-cols-1 md:grid-cols-3 mt-6">
                    {analysisData.map((item) => (
                      <Card className="gap-2">
                        <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
                          <CardTitle>{item.title}</CardTitle>
                          <Button
                            size="icon"
                            className={`${item.color} text-white`}
                          >
                            {item.score}
                          </Button>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="detail">
                  <Accordion
                    defaultValue="item-0"
                    type="single"
                    collapsible
                    className="my-4 w-full"
                  >
                    {analysisData.map(
                      (
                        {
                          title,
                          mistakes,
                          recommendations,
                          icon: Icon,
                          score,
                          passScore,
                        },
                        index
                      ) => (
                        <Card key={index} className="mb-4 py-2">
                          <CardContent>
                            {score >= passScore ? (
                              <div className="flex items-start gap-3 py-4">
                                <Badge className="bg-green-500 hover:bg-green-600">
                                  <CheckIcon />
                                  Pass
                                </Badge>
                                <Icon />
                                {title}
                              </div>
                            ) : (
                              <AccordionItem
                                key={index}
                                value={`item-${index}`}
                              >
                                <AccordionTrigger className="hover:no-underline">
                                  <div className="flex items-start gap-3">
                                    <Badge className="bg-red-500 hover:bg-red-600">
                                      <AlertCircleIcon />
                                      Fail
                                    </Badge>
                                    <Icon />
                                    {title}
                                  </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                  <Alert variant="destructive">
                                    <AlertCircleIcon />
                                    <AlertTitle>Mistake</AlertTitle>
                                    <AlertDescription>
                                      {mistakes?.map((mistake, idx) => (
                                        <p key={idx}>
                                          {mistake.expected} - {mistake.actual}
                                        </p>
                                      ))}
                                    </AlertDescription>
                                  </Alert>
                                  <Alert variant="default" className="mb-4">
                                    <CheckCircle2Icon />
                                    <AlertTitle>Recommendations</AlertTitle>
                                    <AlertDescription>
                                      {recommendations.map(
                                        (recommendation, idx) => (
                                          <p key={idx}>{recommendation}</p>
                                        )
                                      )}
                                    </AlertDescription>
                                  </Alert>
                                </AccordionContent>
                              </AccordionItem>
                            )}
                          </CardContent>
                        </Card>
                      )
                    )}
                  </Accordion>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </ResizablePanel>
        
        <ResizableHandle withHandle className="m-5" />

        <ResizablePanel defaultSize={35} className="shadow-lg h-[90svh]">
          <Card className="w-full h-full">
            <CardHeader className="border-b">
              <CardTitle className="text-xl">Audio input file</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-center gap-4 h-full">
              <Card>
                <CardHeader>
                  <CardTitle>Student Audio File</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    This is the audio file uploaded by the student.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Teacher Audio File</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    This is the audio file uploaded by the teacher.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
