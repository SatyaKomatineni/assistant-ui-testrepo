
'use client';

// MCPServerSelection.tsx
// React component to display and control a row of MCP server buttons
import React, { useState } from 'react';
import { MCPServerSpec } from './MCPServerSpec';
import { MCPServerSpecList } from './MCPServerSpecList';
import { Button } from '../../../components/ui/button';

// Example initial data
const initialServers = [
  new MCPServerSpec('1', 'Server A', true),
  new MCPServerSpec('2', 'Server B', false),
  new MCPServerSpec('3', 'Server C', true),
];

const mcpList = new MCPServerSpecList(initialServers);

export default function MCPServerSelection() {
  // Use state to trigger re-render on enable/disable
  const [servers, setServers] = useState(mcpList.getList().map(s => ({ ...s })));

  const handleToggle = (id: string) => {
    setServers(prev =>
      prev.map(server =>
        server.id === id
          ? { ...server, enabled: !server.enabled }
          : server
      )
    );
  };

  return (
    <div style={{ display: 'flex', gap: 16 }}>
      {servers.map(server => (
        <Button
          key={server.id}
          variant={server.enabled ? 'default' : 'outline'}
          onClick={() => handleToggle(server.id)}
        >
          {server.name} ({server.enabled ? 'Enabled' : 'Disabled'})
        </Button>
      ))}
    </div>
  );
}
