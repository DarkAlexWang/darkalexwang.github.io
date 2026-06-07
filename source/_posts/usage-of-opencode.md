---
title: Usage of OpenCode
date: 2026-06-07 08:30:00
categories: Technology
tags: [AI, Tools, CLI, Coding]
---

[OpenCode](https://opencode.ai) is an open-source, terminal-first AI coding agent. Think of it as a CLI alternative to GUI-based tools like Cursor — you get AI-assisted code generation, debugging, and explanation without ever leaving your terminal.

## Installation

```bash
# via npm
npm install -g opencode-ai

# or via the install script
curl -fsSL https://opencode.ai/install | sh
```

## Basic Usage

Launch the interactive session in your project directory:

```bash
opencode
```

You can also pass a one-shot prompt directly:

```bash
opencode "explain what this function does"
opencode "add error handling to the login route"
```

## Key Features

**Multi-model support** — OpenCode is not locked to a single provider. You can point it at OpenAI, Anthropic, local Ollama models, or any OpenAI-compatible endpoint by setting the appropriate environment variables or config file.

**Terminal-native** — No GUI, no browser tab. It integrates into your existing shell workflow and plays well with tmux, vim, and other terminal tools.

**MCP support** — Like Claude Code, OpenCode supports the Model Context Protocol, so you can extend it with custom tools and data sources.

**Open source** — The full source is on GitHub at [sst/opencode](https://github.com/sst/opencode), so you can read it, fork it, and contribute.

## Configuration

OpenCode reads from `~/.config/opencode/config.json`. A minimal config pointing at Anthropic:

```json
{
  "provider": "anthropic",
  "model": "claude-sonnet-4-5"
}
```

Switch to a local Ollama model:

```json
{
  "provider": "ollama",
  "model": "llama3"
}
```

## How It Compares to Claude Code

| | OpenCode | Claude Code |
|---|---|---|
| License | Open source | Proprietary |
| Models | Any provider | Claude only |
| Interface | TUI / CLI | TUI / CLI |
| IDE integration | No | VS Code, JetBrains |
| MCP support | Yes | Yes |

Both tools follow a similar terminal-first philosophy. Claude Code has tighter IDE integration and is built specifically around Claude's strengths; OpenCode trades that depth for model flexibility and full transparency into the source.

## When to Use It

OpenCode is a good fit if you want to self-host your AI coding workflow, switch between models for cost or capability reasons, or simply prefer knowing exactly what code is running on your machine. For teams already invested in Anthropic's ecosystem, Claude Code will feel more polished — but OpenCode is worth keeping in your toolkit.
