# NeoFMS Architecture

## Philosophy

NeoFMS follows a layered architecture.

The UI never contains Airbus logic.

Instead, every interaction flows through the application and core layers.

```
UI
 ↓
Application
 ↓
Core
 ↓
Domain
```

## Layers

### UI

Responsible only for rendering the interface.

Examples:

- Display
- Keyboard
- Buttons
- Pages

### Application

Coordinates interactions between the UI and the Core.

### Core

Implements the FMS engine.

Examples:

- Command Bus
- State Machine
- Event System
- Display Renderer

### Domain

Contains aviation concepts.

Examples:

- Flight Plan
- Waypoint
- SID
- STAR
- Airways

## Principles

- Single Responsibility
- Dependency Inversion
- Composition over Inheritance
- Testability First
- Fidelity over Convenience

## Core Layer

The Core layer provides infrastructure shared by every subsystem.

Responsibilities include:

- Event communication
- Shared services
- Global state
- Future plugin support

The Core layer never depends on React.