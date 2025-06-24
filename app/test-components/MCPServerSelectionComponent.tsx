'use client';

// MCPServerSelectionComponent.tsx
// Client-side component for selecting/enabling/disabling MCP servers
import React, { useEffect, useState } from 'react';
import { Button } from '../../components/ui/button';

type MCPServerSpec = {
  id: string;
  name: string;
  enabled: boolean;
};

export default function MCPServerSelectionComponent() {
  const [servers, setServers] = useState<MCPServerSpec[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch server list from API
  const fetchServers = async () => {
    setLoading(true);
    const res = await fetch('/api/mcp-servers');
    const data = await res.json();
    setServers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchServers();
  }, []);

  // Toggle enabled/disabled state
  const handleToggle = async (id: string, enabled: boolean) => {
    await fetch('/api/mcp-servers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, enabled: !enabled }),
    });
    fetchServers();
  };

  return (
    <div style={{ border: '2px solid #ccc', borderRadius: 8, padding: 24, margin: 24 }}>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
        {servers.map(server => (
          <Button
            key={server.id}
            variant={server.enabled ? 'default' : 'outline'}
            onClick={() => handleToggle(server.id, server.enabled)}
            disabled={loading}
          >
            {server.name} ({server.enabled ? 'Enabled' : 'Disabled'})
          </Button>
        ))}
      </div>
    </div>
  );
}
