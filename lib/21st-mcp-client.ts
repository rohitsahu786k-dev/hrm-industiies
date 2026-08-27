/**
 * 21st.dev MCP Client Library (TypeScript)
 * Provides streamable HTTP MCP connection to 21st.dev component catalog
 */

export interface MCPTool {
  name: string;
  description: string;
  inputSchema: any;
}

export interface MCPToolCallResult {
  content: Array<{
    type: string;
    text: string;
  }>;
  isError?: boolean;
}

const MCP_ENDPOINT = process.env.NEXT_PUBLIC_21ST_MCP_URL || "https://21st.dev/api/mcp";
const API_KEY = process.env.API_KEY_21ST || "21st_sk_076b86acbc0b7c5f481744f8d162d1a66aabb953723feb4b66f5a85aec212c4b";

export async function call21stMCP<T = any>(method: string, params: Record<string, any> = {}): Promise<T> {
  const payload = {
    jsonrpc: "2.0",
    id: Date.now(),
    method,
    params,
  };

  const res = await fetch(MCP_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`21st MCP HTTP error: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();
  if (json.error) {
    throw new Error(json.error.message || JSON.stringify(json.error));
  }

  return json.result as T;
}

export async function list21stTools(): Promise<MCPTool[]> {
  const result = await call21stMCP<{ tools: MCPTool[] }>("tools/list", {});
  return result.tools || [];
}

export async function search21stComponents(query: string, options: Record<string, any> = {}): Promise<string> {
  const result = await call21stMCP<MCPToolCallResult>("tools/call", {
    name: "search",
    arguments: {
      query,
      ...options,
    },
  });

  return result.content?.[0]?.text || "";
}

export async function get21stComponentCode(id: number): Promise<string> {
  const result = await call21stMCP<MCPToolCallResult>("tools/call", {
    name: "get_component",
    arguments: { id },
  });

  return result.content?.[0]?.text || "";
}
