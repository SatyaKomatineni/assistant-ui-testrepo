import React, { use } from "react"
import TestButton from './TestButton';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import MCPServerSelection from "./mcp-server-selection-component/MCPServerSelection";
import MCPServerSelectionComponent from "./MCPServerSelectionComponent";
import TestServerRegistryComponent from "./TestServerRegistryComponent";

export default function TestComponentsPage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>Test Components Page</h1>
      <p>This page is for testing new UI components in isolation.</p>
    <h2 style={{ marginTop: 48, marginBottom: 16, textAlign: 'center' }}>MCP Server Selection (Server-Connected)</h2>
      <MCPServerSelectionComponent />
      <h2 style={{ marginTop: 48, marginBottom: 16, textAlign: 'center' }}>Test Server Registry (Read-Only, Refreshable)</h2>
      <TestServerRegistryComponent />
    </main>
  );
}
