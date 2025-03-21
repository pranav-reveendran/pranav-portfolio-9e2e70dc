
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CopyIcon, CheckIcon, GithubIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function DeploymentGuide() {
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);
  
  const copyToClipboard = (text: string, setCopied: React.Dispatch<React.SetStateAction<boolean>>) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const initCommands = `
# Initialize a new git repository
git init

# Add all files to staging
git add .

# Commit the changes
git commit -m "Initial commit"
  `.trim();

  const deployCommands = `
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main

# Then enable GitHub Pages in repository settings:
# Settings > Pages > Source: Deploy from a branch > Branch: main, folder: / (root)
  `.trim();

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 dot-pattern opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl font-bold mb-4">Deploy Your Data Engineering Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow these steps to host your data engineering portfolio on GitHub Pages for free.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border border-primary/20 backdrop-blur-sm bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-primary">01</span>
                Initialize Repository
              </CardTitle>
              <CardDescription>
                Create a local git repository for your portfolio website
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-zinc-900 rounded-md p-4 font-mono text-sm overflow-x-auto text-green-400">
                <pre>{initCommands}</pre>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                size="sm" 
                className="ml-auto"
                onClick={() => copyToClipboard(initCommands, setCopied1)}
              >
                {copied1 ? (
                  <>
                    <CheckIcon className="mr-2 h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <CopyIcon className="mr-2 h-4 w-4" />
                    Copy Commands
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="border border-primary/20 backdrop-blur-sm bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-primary">02</span>
                Deploy to GitHub Pages
              </CardTitle>
              <CardDescription>
                Push your code to GitHub and enable GitHub Pages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-zinc-900 rounded-md p-4 font-mono text-sm overflow-x-auto text-green-400">
                <pre>{deployCommands}</pre>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                size="sm" 
                className="ml-auto"
                onClick={() => copyToClipboard(deployCommands, setCopied2)}
              >
                {copied2 ? (
                  <>
                    <CheckIcon className="mr-2 h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <CopyIcon className="mr-2 h-4 w-4" />
                    Copy Commands
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="text-center mt-10">
          <Button variant="default" size="lg" className="gap-2">
            <GithubIcon size={18} />
            <span>Visit GitHub Docs</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
