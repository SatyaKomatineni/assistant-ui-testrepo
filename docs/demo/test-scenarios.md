<!-- ********************* -->
# Demo Test cases for testing the MCP Servers 
<!-- ********************* -->


1. This file contains various Test sets for testing MCP servers
2. The test data for the servers is in the sister file demo-data.md
3. The tool descriptions are given below

Ask 1:

1. can you generate a test suite of questions I can submit to test the tool selection
2. The questions should consider all the tools and also questions that are outside the tools with LLM internal knowledge
3. Try not to confuse the LLM yet make the questions practical
4. Can you intersperse the questions so that I can see the tool selection aspect nicely
5. Just keep the questions under 1 heading
6. Do not delete this prompt. Keep it in the file.
7. Add the generated suite at the bottom of this file
8. Lead off the test suite with a few internal knowledge questions that don't result in tool selection
9. Produce 25 questions

<!-- ********************* -->
# MCP Tool descriptions
<!-- ********************* -->

These are the available tools to the Chat

1. lookup_claim: Look up a medical claim by its ID.
2. lookup_system_by_id: Look up a system by its ID.
3. lookup_provider: Look up a healthcare provider by their National Provider Identifier (NPI).
4. search_prompts: Search for prompts containing specific words
5. weather: Get the weather in a location (Fahrenheit)
6. convertFahrenheitToCelsius: Convert a temperature from Fahrenheit to Celsius

<!-- ********************* -->
# Test Suite: Tool Selection and LLM Knowledge
<!-- ********************* -->

Below is a single, interspersed list of practical questions designed to test both tool selection and LLM internal knowledge. The questions are mixed so you can observe the tool selection aspect clearly.

To start off:
1. hello there how are you
2. Can you tell me the tools you have


Basics:
1. what is deepest ocean?
2. What is the capital of France?
3. 100C to F
4. What are vaious oak tree species?

Specific:
1. Show me the details for the claim with ID `C003`.
2. Who is the provider with NPI `1234567890`?
3. What is the operating system of the system with ID `web-prod-01`?
4. Find prompts containing the word "unicorn".
5. What is the weather in San Francisco?

Revert to General:
1. Difference between water and live oak? 
2.  Who is the current president of the United States?
3.  Explain the difference between HTTP and HTTPS.

Back to some specifics:
1. What is the status of the medical claim with ID `C001`?
2. List the specialties of the provider with NPI `3456789012`.
3. Give me the details of the system with ID `dev-01`.
4. Search for prompts containing the word "documentation".
5. Show me the claim with ID `C999` (nonexistent claim).
6. What is the weather on Mars?
7. Convert -40 Fahrenheit to Celsius.

Mixed:
1. What are some best practices for writing secure code?
2. Summarize the Agile software development methodology.
3. Find all prompts related to "security".
4. Who is the provider with NPI `0000000000` (nonexistent provider)?
5. Name three programming languages commonly used for web development.
6. What is the boiling point of water in Celsius?
7. Who wrote the play "Romeo and Juliet"?
8. Convert 100 Fahrenheit to Celsius.
9. What is the average memory size of the production database server?
10. List all available tools for interacting with the MCP servers.

