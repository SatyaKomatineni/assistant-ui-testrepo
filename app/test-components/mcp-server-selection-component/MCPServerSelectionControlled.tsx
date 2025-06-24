// MCPServerSelectionControlled.tsx
// React component for MCP server selection with external state control
import React from 'react';
import { Button } from '../../../components/ui/button';
import { MCPServerSpec } from './MCPServerSpec';

interface MCPServerSelectionProps {
  servers: MCPServerSpec[];
  setServers: React.Dispatch<React.SetStateAction<MCPServerSpec[]>>;
}

export default function MCPServerSelectionControlled({ servers, setServers }: MCPServerSelectionProps) {
  const handleToggle = (id: string) => {
    setServers(prev =>
      prev.map(server =>
        server.id === id
          ? Object.assign(Object.create(Object.getPrototypeOf(server)), {
              ...server,
              enabled: !server.enabled,
            })
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
