# Node.js Server Crashing with Large Requests

This repository demonstrates a common issue in Node.js servers: crashing due to large request bodies. The server doesn't handle large POST requests gracefully, resulting in crashes and potential data loss.

## Problem

The `bug.js` file contains a simple HTTP server that doesn't properly handle large requests. When a request with a large body is sent, the server will likely crash due to memory exhaustion.

## Solution

The `bugSolution.js` file provides a solution that addresses the issue. The solution involves using the `body-parser` middleware to parse incoming requests and limit the request size to prevent memory exhaustion.