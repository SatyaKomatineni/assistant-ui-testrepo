import { mcpRegistry } from './mcpRegistry';
import { mcpConfigs1 as mcpConfigs } from './mcpConfigs1';

// Initialize the MCP registry
export async function initializeMCPRegistry() {
  try {
    if (mcpRegistry.isInitialized()) {
      console.warn('MCP Registry is already initialized');
      return;
    }
    await mcpRegistry.setConfigs(mcpConfigs);
    await mcpRegistry.initialize();
    const tools = mcpRegistry.getTools();
    console.log('MCP Registry initialized successfully. tools:', tools);
  } catch (error) {
    console.error('Failed to initialize MCP Registry:', error);
    throw error;
  }
}

// Cleanup function to be called when the application shuts down
export async function cleanupMCPRegistry() {
  try {
    await mcpRegistry.close();
    console.log('MCP Registry cleaned up successfully');
  } catch (error) {
    console.error('Failed to cleanup MCP Registry:', error);
  }
}