import {
  ChevronDown,
  Command,
  Folder,
  MessageSquare,
  MoreHorizontal,
  Paperclip,
  Plus,
  Search,
  Settings,
  Sparkles,
  User,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const conversations = [
  {
    title: "Onboarding flow für Team",
    time: "Heute",
    tag: "Produkt",
  },
  {
    title: "Prompt-Optimierung für Agent",
    time: "Gestern",
    tag: "Research",
  },
  {
    title: "UI Redesign Ideen",
    time: "24. Sep",
    tag: "Design",
  },
  {
    title: "Release Notes v1.2",
    time: "18. Sep",
    tag: "Docs",
  },
];

const folders = ["Team", "Experimente", "Kunden"];

const models = [
  "gpt-4o",
  "gpt-4.1",
  "claude-3.5",
  "llama-3.1",
];

const messages = [
  {
    role: "assistant",
    name: "Assistant",
    content:
      "Willkommen zurück! Ich habe das neue Release analysiert. Soll ich eine Zusammenfassung für das Team erstellen?",
    time: "09:41",
  },
  {
    role: "user",
    name: "You",
    content:
      "Ja bitte. Fokus auf neue Settings, Model-Switching und Dateiupload.",
    time: "09:42",
  },
  {
    role: "assistant",
    name: "Assistant",
    content:
      "Alles klar. Ich arbeite eine kompakte Übersicht aus, inklusive Screenshots und Verlinkungen zu den neuen Einstellungen.",
    time: "09:43",
  },
];

const quickActions = [
  "Zusammenfassung generieren",
  "Neue Nachricht erstellen",
  "Modellvergleich starten",
  "System Prompt prüfen",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <aside className="flex w-full flex-col border-b border-border/60 bg-card/40 px-4 pb-6 pt-6 lg:w-72 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-base font-semibold">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </div>
              Open WebUI
            </div>
            <Button size="icon" variant="ghost">
              <Command className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <Button className="flex-1" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              New Chat
            </Button>
            <Button size="icon" variant="secondary">
              <Settings className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-background/70 px-3 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search conversations"
                className="h-8 border-0 bg-transparent px-0 text-sm focus-visible:ring-0"
              />
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Folders
            </p>
            <div className="space-y-2">
              {folders.map((folder) => (
                <button
                  key={folder}
                  type="button"
                  className="flex w-full items-center gap-2 rounded-xl border border-transparent px-3 py-2 text-sm text-muted-foreground transition hover:border-border/60 hover:bg-background/60 hover:text-foreground"
                >
                  <Folder className="h-4 w-4" />
                  {folder}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Conversations
            </p>
            <div className="space-y-3">
              {conversations.map((conversation) => (
                <Card key={conversation.title} className="border-border/50 bg-background/60">
                  <CardContent className="flex items-start gap-3 p-3">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-foreground">
                          {conversation.title}
                        </p>
                        <Button size="icon" variant="ghost" className="h-7 w-7">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{conversation.time}</span>
                        <Badge className="text-[10px]">
                          {conversation.tag}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-6">
            <Card className="border-border/50 bg-background/70">
              <CardContent className="flex items-center gap-3 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <User className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Alex Rivera</p>
                  <p className="text-xs text-muted-foreground">alex@openwebui.dev</p>
                </div>
                <Button size="icon" variant="ghost">
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </aside>

        <section className="flex flex-1 flex-col">
          <header className="border-b border-border/60 bg-background/70 px-6 py-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Workspace / Team Core</p>
                <h1 className="text-lg font-semibold">Chat</h1>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="secondary" className="gap-2">
                  {models[0]}
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <Button variant="outline">Share</Button>
                <Button variant="outline">Export</Button>
              </div>
            </div>
          </header>

          <div className="flex flex-1 flex-col gap-6 overflow-hidden px-6 py-6">
            <div className="flex flex-wrap gap-3">
              {quickActions.map((action) => (
                <Button key={action} variant="secondary" className="rounded-full text-xs">
                  {action}
                </Button>
              ))}
            </div>

            <div className="flex-1 space-y-6 overflow-y-auto pb-4">
              {messages.map((message) => (
                <div
                  key={`${message.role}-${message.time}`}
                  className={`flex gap-4 ${
                    message.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    {message.role === "user" ? <User className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                  </div>
                  <Card className="w-full border-border/50 bg-card/60">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium">{message.name}</p>
                        <Badge variant="outline" className="text-[10px]">
                          {message.role === "user" ? "You" : "Assistant"}
                        </Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {message.time}
                      </span>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm text-muted-foreground">
                      <p className="text-foreground/90">{message.content}</p>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" variant="ghost">
                          Copy
                        </Button>
                        <Button size="sm" variant="ghost">
                          Regenerate
                        </Button>
                        <Button size="sm" variant="ghost">
                          Edit
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <Card className="border-border/60 bg-background/80">
              <CardContent className="space-y-4 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Paperclip className="h-4 w-4" />
                    Drag & drop files or click to upload
                  </div>
                  <Badge className="text-[10px]">
                    5 MB max
                  </Badge>
                </div>
                <Textarea
                  placeholder="Send a message..."
                  className="min-h-[120px] bg-background/70"
                />
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>Shift + Enter for new line</span>
                    <span className="hidden sm:inline">·</span>
                    <span className="hidden sm:inline">/ for commands</span>
                  </div>
                  <Button className="gap-2">
                    <Sparkles className="h-4 w-4" />
                    Send
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
