import React, { use } from "react"
import TestButton from './TestButton';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import MCPServerSelection from "./mcp-server-selection-component/MCPServerSelection";

export default function TestComponentsPage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>Test Components Page</h1>
      <p>This page is for testing new UI components in isolation.</p>
      <TestButton />
      <Button>UI Button</Button>
      <Separator />
    <div style={{ padding: 24, marginTop: 24, marginBottom: 24, background: "#fafafa", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
      <MCPServerSelection />
    </div>
    </main>
  );
}
