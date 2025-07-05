// wrap console.log
export function logSystemPrompt(prompt: string, ...args: any[]) {
    console.log("System Prompt:")
    console.log("************************************************");
    console.log(prompt);
    if (args.length > 0) {
        console.log("Additional Arguments:", ...args);
    }
}

export function logMessages(messages: any) {
    console.log("Messages");
    console.log("************************************************");
    console.log(JSON.stringify(messages, null, 2));
}

// System prompt message strings
export const sp_tool_selection_1 = `
1. You are an AI assistant.
2. For each user query, first search for a tool whose name, description, parameters, or output closely match the user's request.
3. If a tool is at least 80% likely to fulfill the request, use it to answer.
4. If no suitable tool is found, answer using your own knowledge.`;

export const sp_tool_selection_2 = `
1. When responding to user queries, always check your available tools.
2. If a tool's metadata (name, description, parameters, output) strongly matches the user's intent (80% or higher), call that tool and use its output.
3. If no tool is a strong match, respond using your internal knowledge base.
`;

// System prompt messages enumeration referencing the above strings
export enum SystemPrompts {
    TOOL_SELECTION_1 = sp_tool_selection_1,
    TOOL_SELECTION_2 = sp_tool_selection_2
}


