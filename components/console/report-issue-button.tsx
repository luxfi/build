"use client";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { usePathname } from "next/navigation";
import newGithubIssueUrl from "new-github-issue-url";

interface ReportIssueButtonProps {
  className?: string;
  toolTitle?: string;
}

export function ReportIssueButton({
  className,
  toolTitle,
}: ReportIssueButtonProps) {
  const pathname = usePathname();
  const handleReportIssue = () => {
    const currentUrl = `https://build.lux.network${pathname}`;
    const issueTitle = toolTitle ? `Issue with ${toolTitle}` : `Issue on "${currentUrl}"`;
    const issueUrl = newGithubIssueUrl({
      user: "luxfi",
      repo: "lux-build",
      title: issueTitle,
      body: `**Tool:** ${toolTitle || "Unknown"}\n**Page URL:** ${currentUrl}\n\n<!-- Please describe the issue you encountered below -->`,
      labels: ["Console"],
    });

    window.open(issueUrl, "_blank");
  };

  return (
    <Button variant="outline" size="sm" onClick={handleReportIssue} className={className}>
      <Github className="h-4 w-4 mr-2" />
      Report Issue
    </Button>
  );
}
