# FROST & FRAME — Winter Code Studio

A complete, student-facing, static website for Grade 10 Python Turtle interactive art. No framework, build tools, accounts or API required.

## Run locally
Open `index.html` in Chrome, Edge or Firefox. The three files (`index.html`, `styles.css`, `app.js`) must stay together. Progress is saved only in that browser using localStorage; it is not synchronized between devices.

## Deploy on Vercel
Unzip this folder, upload the folder to a GitHub repository, then import it in Vercel. Framework preset: **Other**; build command: none; output directory: root. Vercel will serve `index.html` automatically. You can also deploy this root folder using the Vercel CLI (`vercel --prod`).

## Lesson design
Each of 8 interaction pathways has three lessons, unlocked one by one:

1. **Experiment (8–10 min):** Make a prediction, try the interactive demo, and describe what happened.
2. **Design (10–15 min):** Identify event, decision, and action; select a likely programming structure; write own pseudocode. Sentence starters are optional.
3. **Build & debug (20–35 min):** Write Python in VS Code, reveal hints progressively if stuck, test requirements, complete an independent concept check and reflection. No completed solution is provided.

The site cannot verify Python code; build checkboxes are student self-reports. Local browser progress is educational scaffolding, not a formal grade. Students can export their notes as a TXT file.

### Interaction pathways
1. Click to toggle two colours — Boolean and IF / ELSE.
2. Click to cycle palette — lists and index.
3. Click to add snow or footprints — screen.onclick and x/y.
4. Reveal a surprise — Boolean and state / layers.
5. Click to move sideways — positions / redraw or shape.
6. Depart screen and return on second click — Boolean, screen click and optional timed animation.
7. Drag ornament — advanced: Turtle shape. NOTE: arbitrary drawn ink cannot be dragged with .ondrag().
8. Hover reveal — advanced: Turtle does not offer a built-in onhover(); requires Tkinter canvas mouse motion and coordinate conversion. Click alternative recommended for younger visitors.

### Classroom use
Ask students to choose one pathway tied to their winter scene. They may explore several demonstrations but should fully complete one pathway, then create their own implementation. Their scene may use their own objects and colour palette rather than matching the demo.

### Curriculum connections
CSE1010: planning and algorithms; CSE1110: variables, data, IPO; CSE1120: selection, iteration, structured decisions and testing. Event handlers and drawing libraries are vehicles for practice; object-oriented concepts are enrichment, not claimed as required outcomes.

### Technical notes
The demonstrations are SVG and JavaScript for browser interaction and are not Python Turtle programs. Their purpose is interaction design and logic. The hint examples are intentionally incomplete and some require existing object drawing functions. `screen.tracer(0)` in student projects requires `screen.update()` after drawing or click events.

The site uses system-font stacks and local vector illustrations. It works offline and makes no API requests.
