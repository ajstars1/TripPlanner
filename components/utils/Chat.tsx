'use client';

import { useState } from "react";
import {  PaperPlaneIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { runChat } from "@/actions/aiGen";

const users = [
  {
    name: "Olivia Martin",
    email: "m@example.com",
    avatar: "/avatars/01.png",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    avatar: "/avatars/03.png",
  },
  {
    name: "Emma Wilson",
    email: "emma@example.com",
    avatar: "/avatars/05.png",
  },
  {
    name: "Jackson Lee",
    email: "lee@example.com",
    avatar: "/avatars/02.png",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    avatar: "/avatars/04.png",
  },
] as const;

type User = (typeof users)[number];

export function CardsChat() {
  const [open, setOpen] =  useState(false);
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  const [messages, setMessages] = useState([
    {
      role: "agent",
      content: "Hi, how can I help you today?",
    },
    // {
    //   role: "user",
    //   content: "Hey, I'm having trouble with my account.",
    // },
  ]);
  const [input, setInput] = useState("");
  const inputLength = input.trim().length;

  return (
    <>
      <Card className="min-h-[calc(100vh-150px)] flex flex-col justify-between">
        <CardHeader className="flex flex-row items-center">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/avatars/01.png" alt="Image" />
              <AvatarFallback>G</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">AI Helper</p>
              <p className="text-sm text-muted-foreground">powered by Gemini</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
  <div className="space-y-4">
    {messages.map((message, index) => (
      <div
        key={index}
        className={cn(
          "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
          message.role === "user"
            ? "ml-auto bg-primary text-primary-foreground"
            : "bg-muted"
        )}
      >
        {/* Split the message content into lines */}
        {message.content.split("**").map((line, index) => (
          // Render each line, adding a separator after the "**" lines
          <div key={index}>
            {line.trim().length > 0 && ( // Skip empty lines
              <p>{line}</p>
            )}
            {index < message.content.split("**").length - 1 && ( // Add separator after each "**" line except the last one
              <hr className="border-gray-300 my-2" />
            )}
          </div>
        ))}
      </div>
    ))}
  </div>
</CardContent>

        <CardFooter>
          <form
            onSubmit={async (event) => {
              event.preventDefault();
              if (inputLength === 0) return;
              setMessages([
                ...messages,
                {
                  role: "user",
                  content: input,
                },
              ]);
              const result = await runChat({ userInput: input });
              setInput("");
              setMessages([
                ...messages,
                {
                  role: "user",
                  content: input,
                },
                {
                  role: "agent",
                  content: result.text(),
                },
              ]);
            }}
            className="flex w-full items-center space-x-2"
          >
            <Input
              id="message"
              placeholder="Type your message..."
              className="flex-1"
              autoComplete="off"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button type="submit" size="icon" disabled={inputLength === 0}>
              <PaperPlaneIcon className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </>
  );
}
